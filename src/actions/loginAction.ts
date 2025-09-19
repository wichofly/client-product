import { redirect, type ActionFunction } from 'react-router-dom';
import { safeParse } from 'valibot';
import { LoginSchema } from '../types/auth';
import axios from 'axios';

export const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const parsed = safeParse(LoginSchema, { email, password });
  if (!parsed.success) {
    return { formError: 'invalid email or password format' };
  }

  // Perform login logic here (e.g., call an API)
  try {
    const resp = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, {
      email: parsed.output.email,
      password: parsed.output.password,
    });

    const token = resp.data?.data?.token;
    if (!token) return { formError: 'Login failed. No token received.' };

    localStorage.setItem('token', token);

    return redirect('/');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverMessage = error.response?.data?.error || 'Login failed';
      return { formError: serverMessage };
    }

    return { formError: 'Login failed. Please try again later.' };
  }
};
