import { Form, useNavigate } from 'react-router-dom';
import type { Product } from '../types';
import { formatCurrency } from '../utils';
import { FaEdit, FaTrash } from 'react-icons/fa';

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const navigate = useNavigate();

  const isAvailable = product.availability;

  return (
    <tr className="border-b">
      <td className="p-3 text-lg font-medium text-gray-800">{product.name}</td>
      <td className="p-3 text-lg font-medium text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg">
        <span
          className={`inline-flex items-center rounded-md px-2 py-1 text-lg font-medium ${
            isAvailable
              ? 'bg-green-50 text-green-700 inset-ring inset-ring-green-600/20'
              : 'bg-rose-50 text-rose-700 inset-ring inset-ring-rose-600/10'
          }`}
        >
          {isAvailable ? 'Available' : 'Not Available'}
        </span>
      </td>
      <td className="p-3 text-lg">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(`editProduct/${product.id}`)}
            className="flex items-center gap-2 text-sky-700 border border-sky-300 rounded-md w-full px-2 py-1 uppercase font-medium cursor-pointer hover:bg-sky-100 transition duration-300 ease-in-out"
          >
            <FaEdit className="text-sky-600" /> Edit
          </button>

          <Form
            method="POST"
            action={`deleteProduct/${product.id}`}
            className="w-full"
          >
            <button
              onClick={() => navigate(`deleteProduct/${product.id}`)}
              className="flex items-center gap-2 text-pink-700 border border-pink-300 rounded-md w-full px-2 py-1 uppercase font-medium cursor-pointer hover:bg-pink-100 transition duration-300 ease-in-out"
            >
              <FaTrash className="text-pink-600" /> Delete
            </button>
          </Form>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
