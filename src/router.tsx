import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Products from './views/Products';
import { productsLoader } from './loaders/productsLoader';
import NewProduct from './views/NewProduct';
import { newProductAction } from './actions/newProductAction';
import EditProduct from './views/EditProduct';
import editProductLoader from './loaders/editProductLoader';
import { editProductAction } from './actions/editProductAction';
import { deleteProductAction } from './actions/deleteProductAction';
import { updateAvailabilityAction } from './actions/updateAvailabilityAction';
import { loginAction } from './actions/loginAction';
import Login from './views/Login';
import Register from './views/Register';
import { registerAction } from './actions/registerAction';
import { authLoader } from './loaders/authLoader';

export const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
    action: loginAction,
  },
  {
    path: 'register',
    element: <Register />,
    action: registerAction,
  },
  {
    loader: authLoader,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Products />,
            loader: productsLoader,
            action: updateAvailabilityAction,
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
          {
            path: 'deleteProduct/:id',
            action: deleteProductAction,
          },
        ],
      },
    ],
  },
]);
