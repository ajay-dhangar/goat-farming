import React from 'react';
import { Warehouse, Heart, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About GoatFarm Market</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about delivering the highest quality goat products while maintaining
            sustainable and ethical farming practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, GoatFarm Market began with a simple mission: to provide
              premium quality goat products while maintaining the highest standards of
              animal welfare and sustainable farming practices.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve customers nationwide, offering everything from
              fresh dairy products to livestock and farming equipment.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1593179449458-e0d43d512595?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Our farm"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Warehouse, title: 'Sustainable Farming', value: '200+ Acres' },
            { icon: Heart, title: 'Happy Animals', value: '500+ Goats' },
            { icon: Users, title: 'Satisfied Customers', value: '10,000+' },
            { icon: Award, title: 'Quality Awards', value: '25+' },
          ].map((stat) => (
            <div key={stat.title} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-green-600" />
              <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
              <p className="text-2xl font-bold text-green-600">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}