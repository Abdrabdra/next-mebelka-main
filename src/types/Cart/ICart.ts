export interface ICreateCart {
  qty: number;
  productId: number;
}

export interface IGetCart {
  id: number;
  qty: number;
  totalPrice: number;
  product: {
    id: number;
    title: string;
    price: number;
    discount: number;
    description: string;
  };
}
