import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl text-slate-800 font-semibold">Products</h2>
        <Link
          to="newProduct"
          className="rounded-md bg-cyan-600 p-3 text-white font-semibold shadow hover:bg-cyan-700 transition duration-200"
        >
          Add Product
        </Link>
      </div>
    </>
  );
};

export default Products;
