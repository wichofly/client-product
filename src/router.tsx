import { createBrowserRouter } from 'react-router-dom';
import { newProductAction } from './actions/newProductAction';
import Layout from './layout/Layout';
import { productsLoader } from './loaders/productsLoader';
import NewProduct from './views/NewProduct';
import Products from './views/Products';
import EditProduct from './views/EditProduct';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: 'newProduct',
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: 'editProduct/:id', // ROAD Pattern: Resource-Oriented Architecture Design
        element: <EditProduct />,
      },
    ],
  },
]);
