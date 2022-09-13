import { Request, Response } from 'express';
import { createProduct } from '../services/products';
import { Product, ProductBody } from '../types';

export async function getAll() {
  // const movies = await movieService.listAll();
  return 0;
  // res.status(200).json(movies);
}

export async function create(req: Request<unknown, unknown, ProductBody>, res: Response<Product>) {
  // const body = req.body;

  const product = await createProduct(req.body);

  return res.json(product);
}