import type { LoaderFunctionArgs } from 'react-router-dom';

export const editProductLoader = async ({ params }: LoaderFunctionArgs) => {
  console.log(params.id);

  return {};
};

export default editProductLoader;
