import {
  array,
  boolean,
  number,
  object,
  string,
  type InferOutput,
} from 'valibot';

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
});

export const ProductsSchema = array(ProductSchema); // This is an array of products

export type Product = InferOutput<typeof ProductSchema>; // This is a single product type
