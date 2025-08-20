import { redirect, type LoaderFunctionArgs } from 'react-router-dom';
import { getProductById } from '../services/ProductService';

export const editProductLoader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id !== undefined) {
    const product = await getProductById(+params.id);
    console.log(product);
    if (!product) {
      return redirect('/'); // Redirect to home if product not found
    }
    return product;
  }
};

export default editProductLoader;
