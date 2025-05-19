'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Mascot from '@/components/Mascot';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-yellow-100 py-12 md:py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating bubbles */}
        <div className={`absolute top-20 left-10 w-16 h-16 rounded-full bg-orange-300 opacity-20 ${isLoaded ? 'animate-float-slow' : ''}`}></div>
        <div className={`absolute top-40 left-1/4 w-8 h-8 rounded-full bg-orange-400 opacity-30 ${isLoaded ? 'animate-float-medium' : ''}`}></div>
        <div className={`absolute bottom-20 right-1/3 w-12 h-12 rounded-full bg-yellow-300 opacity-20 ${isLoaded ? 'animate-float-fast' : ''}`}></div>
        <div className={`absolute bottom-10 right-10 w-20 h-20 rounded-full bg-orange-200 opacity-30 ${isLoaded ? 'animate-float-slow' : ''}`}></div>
        
        {/* Playful zigzag pattern */}
        <svg className="absolute left-0 top-0 h-full w-24 text-orange-200 opacity-20" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path d="M0,0 Q50,50 0,100 Q50,150 0,200 Q50,250 0,300 Q50,350 0,400 Q50,450 0,500 Q50,550 0,600 Q50,650 0,700 Q50,750 0,800 Q50,850 0,900 Q50,950 0,1000" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
        <svg className="absolute right-0 top-0 h-full w-24 text-orange-200 opacity-20" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path d="M100,0 Q50,50 100,100 Q50,150 100,200 Q50,250 100,300 Q50,350 100,400 Q50,450 100,500 Q50,550 100,600 Q50,650 100,700 Q50,750 100,800 Q50,850 100,900 Q50,950 100,1000" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className={`md:w-1/2 mb-6 md:mb-0 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              {/* Fun badge */}
              <div className="absolute -top-6 -left-6 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full transform -rotate-12 shadow-lg">
                ¡Nuevo!
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">¡Diversión sin límites en</span> 
                <span className="relative">
                  <span className="bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent"> Parque Naranja</span>
                  <svg className="absolute w-full h-3 bottom-0 left-0 text-orange-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,3 Q10,6 20,3 Q30,0 40,3 Q50,6 60,3 Q70,0 80,3 Q90,6 100,3" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </span>
                <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">!</span>
              </h1>
              
              <p className="text-lg text-orange-900 mb-8 font-medium border-l-4 border-orange-400 pl-4">
                El mejor parque de bolas para niños en Loja. 
                <br />¡Pura aventura, risas y saltos para toda la familia!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/reservas"
                  className="group relative bg-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center shadow-lg overflow-hidden"
                >
                  <span className="relative z-10">¡Reserva Ahora!</span>
                  <span className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                
                <Link
                  href="/actividades"
                  className="group relative bg-transparent border-2 border-orange-500 text-orange-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 text-center overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Ver Actividades</span>
                  <span className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
              
              {/* Features list */}
              <div className="mt-8 flex items-center space-x-6 text-sm font-medium text-orange-800">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Monitores</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cafetería</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image and mascot */}
          <div className={`md:w-1/2 relative transition-transform duration-700 ${isLoaded ? 'translate-x-0' : 'translate-x-8'}`}>
            {/* Colorful frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-yellow-400 to-orange-300 transform rotate-3 rounded-2xl -z-10"></div>
            
            <div className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/banner.jpg"
                alt="Niños jugando en Parque Naranja"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                priority
              />
            </div>
            
            {/* Mascot with enhanced positioning */}
            <div className="absolute -bottom-8 right-4 transform rotate-6 scale-110 transition-all duration-500 hover:rotate-12 hover:scale-115">
              <Mascot size="lg" withSpeechBubble={true} />
            </div>
            
            {/* Orange confetti particles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-1/3 -right-2 w-6 h-6 bg-orange-500 rounded-full"></div>
            <div className="absolute -bottom-2 left-1/4 w-4 h-4 bg-orange-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;