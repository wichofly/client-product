import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import { updateProduct } from '../services/ProductService';

export const editProductAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  let error = '';
  if (Object.values(data).includes('')) {
    error = 'All fields are required';
  }

  if (error.length) {
    return error;
  }

  if (params.id !== undefined) {
    await updateProduct(data, +params.id); // Ensure id is a number

    return redirect('/');
  }
};
