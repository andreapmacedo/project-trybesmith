import { create, getAll } from '../models/products';
import { Product, ProductBody } from '../types';

export async function getAllList(): Promise<Product[]> {
  // const movies = await getAll();
  const products: Product[] = await getAll();

  return products;
}

export async function createProduct(data: ProductBody) {
  const product = await create(data);

  return product;
}
