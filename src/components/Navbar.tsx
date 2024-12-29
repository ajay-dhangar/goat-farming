import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">GoatFarm Market</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="/" className="hover:text-green-200">Home</a>
              <a href="/products" className="hover:text-green-200">Products</a>
              <a href="/about" className="hover:text-green-200">About</a>
              <a href="/contact" className="hover:text-green-200">Contact</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hover:text-green-200">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="hover:text-green-200">
              <User className="h-6 w-6" />
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}