import { create } from '../models/products';
// import { Product, ProductBody } from '../types';
import { ProductBody } from '../types';

export async function getAll() {
  return 0;
}

export async function createProduct(data: ProductBody) {
  const product = await create(data);

  return product;
}
