import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Products from './views/Products';
import { productsLoader } from './loaders/productsLoader';
import NewProduct from './views/NewProduct';
import { newProductAction } from './actions/newProductAction';
import EditProduct from './views/EditProduct';
import editProductLoader from './loaders/editProductLoader';
import { editProductAction } from './actions/editProductAction';

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
        loader: editProductLoader,
        action: editProductAction,
      },
    ],
  },
]);
