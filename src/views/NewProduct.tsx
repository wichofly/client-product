import { Link } from 'react-router-dom';

const NewProduct = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl text-slate-800 font-semibold">New Product</h2>
        <Link
          to="/"
          className="rounded-md bg-cyan-600 p-3 text-white font-semibold shadow hover:bg-cyan-700 transition duration-200"
        >
          Back to Products
        </Link>
      </div>
    </>
  );
};

export default NewProduct;
