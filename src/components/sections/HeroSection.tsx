'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Mascot from '@/components/Mascot';

const HeroSection = () => {
  return (
    <section className="relative bg-orange-100 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 leading-tight">
              ¡Diversión sin límites en <span className="text-orange-800 underline decoration-wavy">Parque Naranja</span>!
            </h1>
            <p className="text-lg text-orange-900 mb-8 font-medium">
              El mejor parque de bolas para niños en Loja. ¡Pura aventura, risas y saltos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/reservas" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 text-center shadow-lg hover:shadow-orange-300"
              >
                ¡Reserva Ahora!
              </Link>
              <Link 
                href="/actividades" 
                className="border-4 border-orange-500 hover:bg-orange-500 text-orange-600 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center shadow-md"
              >
                Ver Actividades
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src="/images/banner.jpg"
                alt="Niños jugando en Parque Naranja"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className="absolute -bottom-6 right-0 md:right-8 transform rotate-6">
              <Mascot size="lg" withSpeechBubble={true} />
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-orange-300 opacity-30"></div>
        <div className="absolute bottom-10 right-20 w-12 h-12 rounded-full bg-orange-400 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-orange-500 opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;