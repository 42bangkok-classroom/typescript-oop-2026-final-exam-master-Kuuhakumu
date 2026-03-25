export interface purchase {
    id: string;
    customerName: string;
    purchaseDate: string;
    items: string;
    totalPrice: number;
  }
  export interface purchaseitem {
    product: string;
    quantity: number;
    price: number;
  }