'use client';

import React from 'react';
import Image from 'next/image';

interface FoodCardProps {
  name: string;
  description?: string;
  price: string;
  imageSrc: string;
  category?: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  name,
  description,
  price,
  imageSrc,
  category,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
        {category && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <span className="text-orange-500 font-bold">{price}</span>
        </div>
        
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default FoodCard;