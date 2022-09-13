// import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Product, ProductBody } from '../types';

// type ProductData = {
//   id: number,
//   name: string,
//   amount: number,
//   orderId: number,
// } & RowDataPacket;

export async function getAll() {
  return 0;
}

export async function create(product: ProductBody): Promise<Product> {
  const query = 'INSERT INTO Trybesmith.Products(name, amount) VALUE (?, ?)';
  
  const [result] = await connection.execute<ResultSetHeader>(
    query,
    [product.name, product.amount],
  );
  
  return {
    id: result.insertId,
    name: product.name,
    amount: product.amount,
  };
}