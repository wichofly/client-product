import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import { RegisterSchema } from '../types/auth';
import { safeParse } from 'valibot';
import axios from 'axios';

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  const parsed = safeParse(RegisterSchema, { name, email, password });
  // console.log(parsed);
  if (!parsed.success) {
    return { formError: 'Please check your form data' };
  }

  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/register`,
      {
        name: parsed.output.name,
        email: parsed.output.email,
        password: parsed.output.password,
      },
    );

    if (resp.status !== 201)
      return { formError: 'Unexpected response from server' };

    return redirect('/login?registered=1');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverMessage = error.response?.data?.error || 'Register failed';
      return { formError: serverMessage };
    }

    return { formError: 'Registration failed. Please try again later.' };
  }
};
