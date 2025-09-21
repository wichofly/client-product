import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

const Register = () => {
  const actionData = useActionData<{
    formError?: string;
    successMessage?: string;
  }>();
  const navigation = useNavigation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-4xl font-semibold mt-4 text-sky-700">
        Welcome to Product Administration
      </h1>
      <h1 className="text-2xl font-semibold mt-4 mb-8 text-center">Register</h1>

      {actionData?.formError && (
        <div className="text-red-500 mb-4">{actionData.formError}</div>
      )}

      <Form
        method="post"
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          disabled={navigation.state === 'submitting'}
          className="bg-blue-500 text-white p-2 rounded w-full mt-4 cursor-pointer"
        >
          {navigation.state === 'submitting' ? 'Registering...' : 'Register'}
        </button>

        <button
          type="button"
          onClick={() => navigate('/login')}
          className="text-blue-500 p-2 mt-4 cursor-pointer hover:text-blue-700"
        >
          Login
        </button>
      </Form>
    </div>
  );
};

export default Register;
