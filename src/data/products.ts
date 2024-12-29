import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Young Dairy Goat',
    description: 'Healthy young dairy goat, perfect for starting your herd',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'livestock',
    stock: 5
  },
  {
    id: '2',
    name: 'Organic Goat Milk',
    description: 'Fresh organic goat milk from our farm',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'dairy',
    stock: 20
  },
  {
    id: '3',
    name: 'Premium Goat Feed',
    description: 'High-quality feed for optimal goat health',
    price: 49.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbR-xswxF1wcnLhKCE3L2DA8Z5wUNtOECa-A&s',
    category: 'equipment',
    stock: 15
  }
];