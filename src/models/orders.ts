import connection from './connection';
import { IOrder } from '../types';

export default async function getAll() : Promise<IOrder[]> {
  const query = `
  SELECT top.id AS id, top.userId AS userId,
  JSON_ARRAYAGG(tp.id) AS productsIds
  FROM Trybesmith.Orders AS top
  INNER JOIN Trybesmith.Products AS tp
  ON top.id = tp.orderId
  GROUP BY top.id
  ORDER BY top.userId
  `;
  const [result] = await connection.execute<IOrder[]>(query);
  // return result as Movie[];
  return result;
}
