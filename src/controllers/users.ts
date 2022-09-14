import { Request, Response } from 'express';
import createUser from '../services/users';
import { IToken, UserBody } from '../types';

export default async function create(req:
Request<unknown, unknown, UserBody>, res: Response<IToken>) {
  const result = await createUser(req.body);

  res.status(201).json(result);
}