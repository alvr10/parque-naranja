'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-16 w-40">
            <Image
              src="/images/logo.png"
              alt="Parque Naranja Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
            Inicio
          </Link>
          <Link href="/menu" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
            Menu
          </Link>
          <Link href="/precios" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
            Precios
          </Link>
          <Link href="/galeria" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
            Galería
          </Link>
          <Link href="/reservas" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
            Reservas
          </Link>
        </nav>

        {/* Botón de reserva */}
        <PrimaryButton text='Reserva Ahora' />

        {/* Botón menú móvil */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/actividades" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
              Actividades
            </Link>
            <Link href="/precios" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
              Precios
            </Link>
            <Link href="/galeria" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
              Galería
            </Link>
            <Link href="/reservas" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
              Reservas
            </Link>
            <Link href="/contacto" className="text-gray-800 hover:text-[#FC920E] font-medium transition-colors">
              Contacto
            </Link>
            <Link 
              href="/reservas" 
              className="bg-[#FC920E] hover:bg-[#f86a0d] text-white font-bold py-2 px-6 rounded-full transition-colors text-center"
            >
              ¡Reserva Ahora!
            </Link>
          </nav>
        </div>
      )}

      {/* Banner promocional */}
      <div className="bg-[#FC920E] text-white py-2 text-center">
        <p className="font-medium">🎉 ¡Diversión garantizada para todas las edades! 🎮</p>
      </div>
    </header>
  );
};

export default Header;