import type { Product } from '../types';
import { formatCurrency } from '../utils';

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
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
      <td className="p-3 text-lg text-gray-800"></td>
    </tr>
  );
};

export default ProductDetails;
