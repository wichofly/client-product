import axios from 'axios';
import { safeParse } from 'valibot';
import { DraftProductSchema } from '../types';

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export const addProduct = async (data: ProductData) => {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      const { data } = await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
      console.log(data);
    } else {
      throw new Error('Not valid Data');
    }
  } catch (error) {
    console.log(error);
  }
};
