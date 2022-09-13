export interface Product {
  id: number,
  name: string,
  amount: number,
  orderId: number,
}

// tipagem para o corpo de uma requisição
export interface ProductBody{
  name: string,
  amount: number,
  orderId: number,
}