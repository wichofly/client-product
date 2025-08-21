import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import { deleteProduct } from '../services/ProductService';

export const deleteProductAction = async ({ params }: ActionFunctionArgs) => {
  if (params.id !== undefined) {
    await deleteProduct(+params.id);

    return redirect('/');
  }
};
