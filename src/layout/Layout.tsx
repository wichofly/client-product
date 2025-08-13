import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="bg-gray-200">
        <div className="mx-auto max-w-6xl py-10">
          <div className="text-4xl font-semibold text-sky-700">
            Product Administration
          </div>
        </div>
      </header>

      <main className='mt-10 mx-auto max-w-6xl p-10 bg-white rounded-md shadow'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
