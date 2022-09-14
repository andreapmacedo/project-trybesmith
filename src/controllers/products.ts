import { Request, Response } from 'express';
import { createProduct, getAllList } from '../services/products';
import { Product, ProductBody } from '../types';

export async function getAll(req: Request, res: Response) {
  const products = await getAllList();
  res.status(200).json(products);
}

export async function create(req: Request<unknown, unknown, ProductBody>, res: Response<Product>) {
  const createdProduct = await createProduct(req.body);

  res.status(201).json(createdProduct);
}