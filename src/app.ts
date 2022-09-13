// import express from 'express';
import express, { NextFunction, Request, Response } from 'express';
import { CustomError } from './interfaces/CustomError';
import * as productsController from './controllers/products';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true }));
app.post('/products', productsController.create);

app.use((err: CustomError, _req: Request, res: Response, _next: NextFunction) =>
  res.status(err.code || 500).json({ message: err.message }));

export default app;
