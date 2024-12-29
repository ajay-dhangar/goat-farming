export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'livestock' | 'dairy' | 'meat' | 'equipment';
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}