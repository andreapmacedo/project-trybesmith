import getAll from '../models/orders';
import { IOrder } from '../types';

export default async function getAllList(): Promise<IOrder[]> {
  // const movies = await getAll();
  const products: IOrder[] = await getAll();

  return products;
}
