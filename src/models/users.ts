// import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IToken, UserBody } from '../types';
import createToken from '../helpers/tokenHelper';

export default async function create(user: UserBody): Promise<IToken> {
  const query = `
    INSERT INTO Trybesmith.Users(username, classe, level, password) VALUE (?, ?, ?, ?)
    `;
  
  const [result] = await connection.execute<ResultSetHeader>(
    query,
    [user.username, user.classe, user.level, user.password],
  );

  const createdToken = createToken({
    id: result.insertId,
  });
  // const token = createToken({
  //   id: result.insertId,
  // });

  console.log('token', createToken);
  
  return { token: createdToken };

  // const { insertId } = result;
  // return { id: insertId };
}