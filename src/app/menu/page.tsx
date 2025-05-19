'use client';

import React, { useState } from 'react';
import MenuSection from '@/components/sections/MenuSection';

const MenuPage: React.FC = () => {
  // Menu categories for filtering
  const categories = ['Todos', 'Almuerzos', 'Snacks', 'Postres', 'Bebidas'];
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  // Define types for menu items and keys
  type MenuCategory = 'almuerzos' | 'snacks' | 'postres' | 'bebidas';
  type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: string;
    imageSrc: string;
    category: string;
  };
  type MenuItems = Record<MenuCategory, MenuItem[]>;
  
  // Sample food data - replace with your actual menu items
  const menuItems: MenuItems = {
    almuerzos: [
      {
        id: 'alm1',
        name: 'Nuggets con Papas',
        description: 'Deliciosos nuggets de pollo con papas fritas y salsa de elección.',
        price: '$5.50',
        imageSrc: '/images/menu/nuggets.jpg',
        category: 'Almuerzos'
      },
      {
        id: 'alm2',
        name: 'Mini Pizza',
        description: 'Pizza personal con jamón y queso, perfecta para niños.',
        price: '$4.99',
        imageSrc: '/images/menu/pizza.jpg',
        category: 'Almuerzos'
      },
      {
        id: 'alm3',
        name: 'Hamburguesa Infantil',
        description: 'Hamburguesa pequeña con queso y papas fritas.',
        price: '$5.99',
        imageSrc: '/images/menu/hamburguesa.jpg',
        category: 'Almuerzos'
      },
    ],
    snacks: [
      {
        id: 'snk1',
        name: 'Nachos con Queso',
        description: 'Crujientes nachos con salsa de queso cheddar.',
        price: '$3.99',
        imageSrc: '/images/menu/nachos.jpg',
        category: 'Snacks'
      },
      {
        id: 'snk2',
        name: 'Palomitas de Maíz',
        description: 'Palomitas recién hechas, disponibles en dulce o salado.',
        price: '$2.50',
        imageSrc: '/images/menu/palomitas.jpg',
        category: 'Snacks'
      },
      {
        id: 'snk3',
        name: 'Papas Fritas',
        description: 'Papas fritas crujientes con sal.',
        price: '$2.99',
        imageSrc: '/images/menu/papas.jpg',
        category: 'Snacks'
      },
    ],
    postres: [
      {
        id: 'pos1',
        name: 'Helado de Vainilla',
        description: 'Helado de vainilla con opciones de toppings.',
        price: '$3.50',
        imageSrc: '/images/menu/helado.jpg',
        category: 'Postres'
      },
      {
        id: 'pos2',
        name: 'Brownie con Helado',
        description: 'Brownie caliente con helado de vainilla y salsa de chocolate.',
        price: '$4.50',
        imageSrc: '/images/menu/brownie.jpg',
        category: 'Postres'
      },
      {
        id: 'pos3',
        name: 'Gelatina Divertida',
        description: 'Gelatina de colores con formas divertidas.',
        price: '$2.50',
        imageSrc: '/images/menu/gelatina.jpg',
        category: 'Postres'
      },
    ],
    bebidas: [
      {
        id: 'beb1',
        name: 'Jugo Natural',
        description: 'Jugo fresco de naranja, fresa o mora.',
        price: '$2.50',
        imageSrc: '/images/menu/jugo.jpg',
        category: 'Bebidas'
      },
      {
        id: 'beb2',
        name: 'Gaseosas',
        description: 'Variedad de refrescos y gaseosas.',
        price: '$1.99',
        imageSrc: '/images/menu/gaseosa.jpg',
        category: 'Bebidas'
      },
      {
        id: 'beb3',
        name: 'Batido',
        description: 'Batido de frutas naturales con leche o yogurt.',
        price: '$3.50',
        imageSrc: '/images/menu/batido.jpg',
        category: 'Bebidas'
      },
    ],
  };
  // Filtering logic for menu items based on activeCategory
  const getFilteredItems = () => {
    if (activeCategory === 'Todos') {
      return menuItems;
    }
    const filtered: MenuItems = {
      almuerzos: menuItems.almuerzos.filter(item => item.category === activeCategory),
      snacks: menuItems.snacks.filter(item => item.category === activeCategory),
      postres: menuItems.postres.filter(item => item.category === activeCategory),
      bebidas: menuItems.bebidas.filter(item => item.category === activeCategory),
    };
    return filtered;
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="bg-orange-50/30 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Cafetería</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Disfruta de nuestros deliciosos snacks, almuerzos y bebidas mientras tus hijos se divierten en nuestras instalaciones.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu Sections */}
        {filteredItems.almuerzos.length > 0 && (
          <MenuSection title="Almuerzos" items={filteredItems.almuerzos} />
        )}
        
        {filteredItems.snacks.length > 0 && (
          <MenuSection title="Snacks" items={filteredItems.snacks} />
        )}
        
        {filteredItems.postres.length > 0 && (
          <MenuSection title="Postres" items={filteredItems.postres} />
        )}
        
        {filteredItems.bebidas.length > 0 && (
          <MenuSection title="Bebidas" items={filteredItems.bebidas} />
        )}
        
        {/* Note for allergies and special requests */}
        <div className="bg-white rounded-lg p-6 mt-12 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-2">¿Necesitas algo especial?</h3>
          <p className="text-gray-600">
            Disponemos de opciones para alérgicos e intolerantes. Si tienes alguna necesidad dietética especial,
            no dudes en consultarnos. Estamos para hacer la experiencia lo más agradable posible para todos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;