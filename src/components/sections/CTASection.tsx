'use client';

import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="relative py-16 bg-[var(--secondary-color)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-[var(--primary-color)] opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/3 right-20 w-16 h-16 rounded-full bg-[var(--primary-color)] opacity-20 animate-pulse"></div>
        <div className="absolute top-10 right-1/4 w-8 h-8 rounded-full bg-[var(--primary-color)] opacity-20 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            ¡No te pierdas la diversión en <span className="text-[var(--accent-color)]">Parque Naranja</span>!
          </h2>
          <p className="text-orange-50 text-xl font-medium mb-8">
            Reserva ahora y prepárate para un día lleno de risas, saltos y aventuras inolvidables.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/reservas" 
              className="bg-white hover:bg-orange-100 text-[var(--secondary-color)] font-extrabold py-5 px-10 rounded-full transition-all text-lg shadow-lg hover:shadow-orange-300 hover:scale-105"
            >
              ¡Quiero Reservar Ahora! 🎉
            </Link>
            <Link 
              href="/actividades" 
              className="border-4 border-white hover:bg-white hover:text-[var(--secondary-color)] text-white font-extrabold py-4 px-10 rounded-full transition-all text-lg shadow-md hover:scale-105"
            >
              Ver Nuestras Actividades 🤸‍♂️
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;