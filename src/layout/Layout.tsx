import toast, { Toaster } from 'react-hot-toast';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logout successful', { duration: 4000 });
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <>
      <Toaster position="top-center" />
      <header className="bg-gray-200 shadow">
        <div className="mx-auto max-w-6xl py-10 flex justify-between items-center">
          <div className="text-4xl font-semibold text-sky-700">
            Product Administration
          </div>

          <button
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded mt-4 hover:bg-red-600 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      <main className="mt-10 mx-auto max-w-6xl p-10 bg-white rounded-md shadow">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
