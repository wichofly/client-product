import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import {
  Form,
  useActionData,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

type ActionResponse = {
  formError?: string;
  successMessage?: string;
};

const Login = () => {
  const actionData = useActionData<ActionResponse>();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();

  // Show toast notification if registered successfully
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('registered') === '1') {
      toast.success('Registration successful! Please log in.');

      // Cleanup the URL to avoid duplicate toasts on refresh
      const newParams = new URLSearchParams(location.search);
      newParams.delete('registered');
      const newUrl = `${location.pathname}?${newParams.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [location]);

  // manually reset the form field after a successful login
  useEffect(() => {
    if (actionData?.successMessage && formRef.current) {
      formRef.current?.reset();
    }
  }, [actionData]);

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-4xl font-semibold mt-4 text-sky-700">
        Welcome to Product Administration
      </h1>
      <h1 className="text-2xl font-semibold mt-4 mb-8 text-center">Login</h1>

      {actionData?.formError && (
        <p className="text-red-500 mb-4">{actionData.formError}</p>
      )}

      {actionData?.successMessage && (
        <p className="text-green-500 mb-4">{actionData.successMessage}</p>
      )}

      <Form
        method="post"
        ref={formRef}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          disabled={navigation.state === 'submitting'}
          className="bg-blue-500 text-white p-2 rounded w-full mt-4 cursor-pointer"
        >
          {navigation.state === 'submitting' ? 'Logging in...' : 'Login'}
        </button>

        <button
          type="button"
          onClick={() => navigate('/register')}
          className="text-blue-500 p-2 mt-4 cursor-pointer hover:text-blue-700"
        >
          Register
        </button>
      </Form>
    </div>
  );
};

export default Login;
