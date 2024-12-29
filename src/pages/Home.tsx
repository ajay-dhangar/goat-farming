import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProductSection from '../components/ProductSection';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FeaturedCategories />
      <ProductSection />
      <WhyChooseUs />
    </div>
  );
}