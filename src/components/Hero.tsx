import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1560926036-3d2d0a3b5c11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Goat farm"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Premium Goat Products</h1>
          <p className="text-xl mb-8">From our farm to your doorstep</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}