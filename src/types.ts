export interface Product {
  id: number,
  name: string,
  amount: number,
}

// tipagem para o corpo de uma requisição
export interface ProductBody{
  name: string,
  amount: number,
}

export interface User {
  id: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

// tipagem para o corpo de uma requisição
export interface UserBody{
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IUser {
  id: number,
}

export interface IToken {
  token: string,
}
