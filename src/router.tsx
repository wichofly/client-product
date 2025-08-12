import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Products from './views/Products';
import NewProduct from './views/NewProduct';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: 'newProduct',
        element: <NewProduct />,
      },
    ],
  },
]);
