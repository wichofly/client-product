import { getProducts } from '../services/ProductService';

export const productsLoader = async () => {
  const products = await getProducts();

  return products;
};
