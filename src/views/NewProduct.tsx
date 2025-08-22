import { useEffect, useState } from 'react';
import { Form, Link, useActionData } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import ProductForm from '../components/ProductForm';

const NewProduct = () => {
  const error = useActionData() as string;
  const [visibleError, setVisibleError] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (error) {
      setVisibleError(error);
      setShow(true);

      const timeout = setTimeout(() => {
        setShow(false);
      }, 4000);

      const remove = setTimeout(() => {
        setVisibleError(null);
      }, 5000);

      return () => {
        clearTimeout(timeout);
        clearTimeout(remove);
      };
    }
  }, [error]);

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

      {visibleError && (
        <ErrorMessage visible={show}>{visibleError}</ErrorMessage>
      )}

      <Form method="post" className="mt-10">
        <ProductForm />

        <input
          type="submit"
          className="mt-5 w-full rounded-md bg-cyan-600 p-3 text-lg text-white font-semibold shadow cursor-pointer hover:bg-cyan-700 transition duration-200"
          value="Register Product"
        />
      </Form>
    </>
  );
};

export default NewProduct;
