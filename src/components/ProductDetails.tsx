import { useNavigate } from 'react-router-dom';
import type { Product } from '../types';
import { formatCurrency } from '../utils';

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const navigate = useNavigate();

  const isAvailable = product.availability;
  return (
    <tr className="border-b">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg">
        <span
          className={`inline-flex items-center rounded-md px-2 py-1 text-lg font-medium ${
            isAvailable
              ? 'bg-green-50 text-green-700 inset-ring inset-ring-green-600/20'
              : 'bg-pink-50 text-pink-700 inset-ring inset-ring-pink-700/10'
          }`}
        >
          {isAvailable ? 'Available' : 'Not Available'}
        </span>
      </td>
      <td className="p-3 text-lg">
        <div className="flex gap-2 items-center text-center">
          <button
            onClick={() => navigate(`editProduct/${product.id}`)}
            className="bg-sky-50 text-sky-700 rounded-md w-full p-2 uppercase font-medium cursor-pointer inset-ring inset-ring-sky-600/20"
          >
            Edit
          </button>
          <button
            onClick={() => navigate(`deleteProduct/${product.id}`)}
            className="bg-rose-50 text-rose-700 rounded-md w-full p-2 uppercase font-medium cursor-pointer inset-ring inset-ring-rose-600/20"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
