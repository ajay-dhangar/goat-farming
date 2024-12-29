import React, { createContext, useContext } from 'react';
import { useCart } from '../hooks/useCart';
import { CartItem, Product } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  loading: boolean;
  addToCart: (product: Product) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);