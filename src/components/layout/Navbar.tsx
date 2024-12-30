import React, { useState } from 'react';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { useAuth } from '../../contexts/AuthContext';

export default function Navbar() {
  const { searchQuery, setSearchQuery, searchResults } = useSearch();
  const [showSearch, setShowSearch] = useState(false);
  const { user } = useAuth();

  console.log(user);
  

  return (
    <nav className="bg-green-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">GoatFarm Market</h1>
          </div>
          
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearch(true)}
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
              
              {showSearch && searchResults.length > 0 && (
                <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg text-gray-900 max-h-96 overflow-y-auto">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      className="p-4 hover:bg-gray-100 cursor-pointer flex items-center space-x-4"
                      onClick={() => {
                        setShowSearch(false);
                        setSearchQuery('');
                      }}
                    >
                      <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm text-gray-600">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-green-200">Home</a>
            <a href="/products" className="hover:text-green-200">Products</a>
            <a href="/about" className="hover:text-green-200">About</a>
            <a href="/contact" className="hover:text-green-200">Contact</a>
            <a href="/cart" className="hover:text-green-200">
              <ShoppingCart className="h-6 w-6" />
            </a>
            <button className="hover:text-green-200">
              {/* <a href='/auth'>
                <User className="h-6 w-6" />
              </a> */}
              {user ? (
                <a href="/profile" className="hover:text-green-200">
                  <User className="h-6 w-6" />
                </a>
              ) : (
                <a href="/auth" className="hover:text-green-200">
                  <User className="h-6 w-6" />
                </a>
              )}
            </button>
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}