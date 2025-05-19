'use client';

import React from 'react';
import FoodCard from './FoodCard';

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  imageSrc: string;
  category?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 relative inline-block">
        {title}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 transform -translate-y-2"></div>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <FoodCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageSrc={item.imageSrc}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;