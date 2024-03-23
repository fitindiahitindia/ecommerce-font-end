export interface Product {
  _id: string;
  name: string;
  description: string;
  type: string;
  image: string;
  quantity: string;
  price: number;
  oldPrice: number;
  pId: string;
  discount:number;
  noItems:number;
  p_u:number;
}
export interface contact {
  name: string;
  email: string;
  message: string;
}
export interface productResponse {
  status: string;
  message: string;
  data: Product[];
}
export interface review{
  productId:any
  name:string,
  email:string,
  phone:number,
  ratting:number,
  rattingMsg:string
}


export interface OrderDetails {
  billingDetails: {
    name: string;
    email: string;
    phone: string;
    address: {
      shippingAddress1: string;
      shippingAddress2: string;
      city: string;
      zip: string;
      country: string;
    };
  };
  orders: {
    _id: string;
    quantity: number;
    product: {
      _id: string;
      name: string;
      description: string;
      type: string;
      image: string;
      quantity: string;
      price: number;
      oldPrice: number;
      pId: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    __v: number;
  }[];
  orderSummary: {
    quantity: number;
    shipping: number;
    charge: number;
    total: number;
  };
}