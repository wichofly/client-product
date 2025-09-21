import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import { deleteProduct } from '../services/ProductService';
import toast from 'react-hot-toast';

export const deleteProductAction = async ({ params }: ActionFunctionArgs) => {
  if (params.id !== undefined) {
    await deleteProduct(+params.id);
    toast.success('Product deleted successfully');

    return redirect('/');
  }
};
