import axios from 'axios';
import { safeParse } from 'valibot';
import {
  DraftProductSchema,
  ProductSchema,
  ProductsSchema,
  type Product,
} from '../types';

type ProductData = {
  [k: string]: FormDataEntryValue;
};

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const addProduct = async (data: ProductData) => {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });
    if (result.success) {
      await api.post('/products', {
        name: result.output.name,
        price: result.output.price,
      });
    } else {
      throw new Error('Not valid Data');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const { data } = await api.get('/products');
    const result = safeParse(ProductsSchema, data.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error('There is an error...');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: Product['id']) => {
  try {
    const { data } = await api.get(`/products/${id}`);
    const result = safeParse(ProductSchema, data.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error('There is an error...');
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (data: ProductData, id: Product['id']) => {
  try {
    const result = safeParse(ProductSchema, {
      id,
      name: data.name,
      price: +data.price,
      availability: data.availability === 'true', // Convert string to boolean
    });

    if (result.success) {
      await api.put(`/products/${id}`, result.output);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProductAvailability = async (id: Product['id']) => {
  try {
    await api.patch(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: Product['id']) => {
  try {
    await api.delete(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};
