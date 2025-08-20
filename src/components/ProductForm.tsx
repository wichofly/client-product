import type { Product } from '../types';

type ProductFormProps = {
  product?: Product;
};

const ProductForm = ({ product }: ProductFormProps) => {
  return (
    <>
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
          defaultValue={product?.name}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="text-slate-800">
          Price:
        </label>
        <input
          id="price"
          type="number"
          step="0.01"
          min="0"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
          placeholder="Price of Product. e.g. 19, 12.90"
          name="price"
          defaultValue={product?.price}
        />
      </div>
    </>
  );
};

export default ProductForm;
