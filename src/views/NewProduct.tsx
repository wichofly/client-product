import {
  Form,
  Link,
  useActionData,
  type ActionFunctionArgs,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import { addProduct } from '../services/ProductService';

export const action = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  let error = '';
  if (Object.values(data).includes('')) {
    error = 'All fields are required';
  }

  if (error.length) {
    return { message: error };
  }

  addProduct(data)

  return {};
};

const NewProduct = () => {
  const actionData = useActionData() as { message?: string };
  const [visibleError, setVisibleError] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (actionData?.message) {
      setVisibleError(actionData.message);
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
  }, [actionData]);

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

      <Form method="POST" className="mt-10">
        <div className="mb-4">
          <label htmlFor="name" className="text-slate-800">
            Name of Product:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
            placeholder="Name of Product"
            name="name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-slate-800">
            Price:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
            placeholder="Price of Product. e.g. 19"
            name="price"
          />
        </div>

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
