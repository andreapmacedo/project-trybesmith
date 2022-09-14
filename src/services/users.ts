import create from '../models/users';
import { UserBody } from '../types';

export default async function createUser(data: UserBody) {
  const result = await create(data);

  return result;
}
