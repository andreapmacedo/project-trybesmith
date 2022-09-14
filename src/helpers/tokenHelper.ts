// import jwt from 'jsonwebtoken';
import { sign, SignOptions } from 'jsonwebtoken';
import { IUser } from '../types';

// const { JWT_SECRET } = process.env;
const JWT_SECRET = 'qualquercoisa';
// const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '1d' };
const signOptions: SignOptions = { algorithm: 'HS256', expiresIn: '1d' };

export default function createToken(payload: IUser) : string {
  // const token = sign(payload, JWT_SECRET, JWT_CONFIG);  
  const token = sign(payload, JWT_SECRET, signOptions);
  // return token;
  return token;
}