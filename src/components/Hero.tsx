import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1542481018-230d347a0af9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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