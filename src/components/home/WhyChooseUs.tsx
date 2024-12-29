import React from 'react';
import { Truck, Award, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery for local orders'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Certified organic and high-quality products'
  },
  {
    icon: Heart,
    title: 'Animal Welfare',
    description: 'Ethically raised and cared for animals'
  },
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: 'Safe and secure payment methods'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}