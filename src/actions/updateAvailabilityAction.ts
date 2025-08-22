import type { ActionFunctionArgs } from 'react-router-dom';
import { updateProductAvailability } from '../services/ProductService';

export const updateAvailabilityAction = async ({
  request,
}: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());
  await updateProductAvailability(+data.id);

  return {};
};
