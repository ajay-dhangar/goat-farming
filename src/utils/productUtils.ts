import { Product } from '../types';
import { PRODUCTS } from '../data/products';

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim();
  
  return PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
}