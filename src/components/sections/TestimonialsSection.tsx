'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  initials: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, initials, rating }) => {
  return (
    <div className="bg-orange-50 max-w-lg p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-primary text-6xl font-serif -mt-6 mb-2">&quot;</div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="bg-[var(--secondary-color)] h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
          {initials}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-gray-800">{author}</h4>
          <div className="flex text-[var(--accent-color)] mt-1">
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  // Testimonials data
  const testimonials: TestimonialProps[] = [
    {
      quote: "¡Mi hijo lo pasó genial en su fiesta de cumpleaños! Las instalaciones son fantásticas y el personal muy atento. Sin duda repetiremos.",
      author: "María García",
      initials: "MG",
      rating: 5
    },
    {
      quote: "Un lugar perfecto para que los niños se diviertan mientras los padres descansan. Limpio, seguro y con muchas actividades diferentes.",
      author: "Carlos Rodríguez",
      initials: "CR",
      rating: 5
    },
    {
      quote: "Organizaron la fiesta de mi hija de 8 años y todo salió perfecto. La comida estaba deliciosa y las animaciones fueron muy divertidas.",
      author: "Laura Sánchez",
      initials: "LS",
      rating: 4
    },
    {
      quote: "El mejor parque infantil de Loja sin duda. Mis gemelos no quieren ir a otro sitio. Las camas elásticas son su zona favorita.",
      author: "Javier Martínez",
      initials: "JM",
      rating: 5
    },
    {
      quote: "Ambiente familiar y acogedor. Me encanta que tengan zona para bebés separada de la de niños más grandes. Muy recomendable.",
      author: "Ana López",
      initials: "AL",
      rating: 5
    },
    {
      quote: "Los monitores son muy pacientes y atentos con todos los niños. Se nota que les gusta su trabajo y saben tratar con los pequeños.",
      author: "Pedro Fernández",
      initials: "PF",
      rating: 4
    }
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Setup infinite scroll animation for desktop using CSS animation
  useEffect(() => {
    if (isSmallScreen) return;

    const cardsContainer = scrollRef.current;
    if (!cardsContainer) return;

    const cards = Array.from(cardsContainer.children) as HTMLElement[];

    // Clone cards for infinite loop
    cards.forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      cardsContainer.appendChild(clone);
    });

    // Set animation
    cardsContainer.style.animation = `scrollCards ${cards.length * 6}s linear infinite`;
  }, [isSmallScreen]);

  // Mobile carousel state
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Handle carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto slide for carousel on mobile
  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmallScreen, currentSlide]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-[var(--accent-color)] font-bold text-center mb-12">
          Lo que dicen nuestros <span className="text-[var(--secondary-color)]">clientes</span>
        </h2>
        
        {isSmallScreen ? (
          // Mobile carousel
          <div className="relative px-4">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      initials={testimonial.initials}
                      rating={testimonial.rating}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel controls */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={prevSlide}
              aria-label="Anterior testimonio"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={nextSlide}
              aria-label="Siguiente testimonio"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 mx-1 rounded-full ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop infinite scroll with CSS animation
          <div className="overflow-hidden relative w-full" style={{ height: "280px" }}>
            <div 
              ref={scrollRef} 
              className="flex gap-8 w-max"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[350px] flex-shrink-0"
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    initials={testimonial.initials}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
            
            {/* Gradient masks for seamless effect */}
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scrollCards {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;