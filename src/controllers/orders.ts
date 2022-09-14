import { Request, Response } from 'express';
import getAllList from '../services/orders';

export default async function getAll(req: Request, res: Response) {
  const response = await getAllList();
  res.status(200).json(response);
}
