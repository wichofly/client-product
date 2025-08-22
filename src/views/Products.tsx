import { Link, useLoaderData } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import type { Product } from '../types';

const Products = () => {
  const products = useLoaderData() as Product[];

  return (
    <>
      <div className="flex justify-between p-2">
        <h2 className="text-4xl text-slate-800 font-semibold">Products</h2>
        <Link
          to="newProduct"
          className="rounded-md bg-cyan-600 p-3 text-white font-semibold shadow hover:bg-cyan-700 transition duration-200"
        >
          Add Product
        </Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-500 text-white text-2xl">
            <tr>
              <th className="p-2">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Availability</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
