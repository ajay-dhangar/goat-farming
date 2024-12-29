import React from 'react';
import { Milk, Leaf, ShoppingBag, Wrench } from 'lucide-react';

const categories = [
  {
    name: 'Dairy Products',
    icon: Milk,
    description: 'Fresh goat milk and dairy products',
    color: 'bg-blue-500'
  },
  {
    name: 'Livestock',
    icon: Leaf,
    description: 'Healthy goats for your farm',
    color: 'bg-green-500'
  },
  {
    name: 'Meat Products',
    icon: ShoppingBag,
    description: 'Quality goat meat products',
    color: 'bg-red-500'
  },
  {
    name: 'Equipment',
    icon: Wrench,
    description: 'Farming tools and supplies',
    color: 'bg-yellow-500'
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`inline-flex p-3 rounded-full ${category.color} text-white mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}