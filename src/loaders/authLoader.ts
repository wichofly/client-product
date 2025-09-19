import { redirect, type LoaderFunction } from 'react-router-dom';

export const authLoader: LoaderFunction = async () => {
  const token = localStorage.getItem('token');
  if (!token) return redirect('/login');

  return null;
};
