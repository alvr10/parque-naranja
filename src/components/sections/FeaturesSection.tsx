'use client';

import React from 'react';
import PrimaryButton from '@/components/ui/Button'; // Import the button component

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative group overflow-hidden">
      {/* Hexagon shape using clip-path */}
      <div className="bg-white p-8 rounded-xl shadow-md 
        transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl
        border-2 border-orange-200 h-full">
        
        {/* Icon container with gradient background */}
        <div className="relative mx-auto mb-6 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] 
          w-16 h-16 rounded-lg transform rotate-45 flex items-center justify-center group-hover:rotate-0 transition-transform duration-300">
          <div className="transform -rotate-45 text-white group-hover:rotate-0 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-center text-primary">{title}</h3>
        <div className="w-12 h-1 bg-[var(--primary-color)] mx-auto mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  // Self-contained data
  const sectionTitle = "Por qué elegir <span class='text-primary'>Parque Naranja</span>";
  
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Diversión Garantizada",
      description: "Ofrecemos actividades para todas las edades con monitores profesionales que garantizan una experiencia divertida y segura."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Máxima Seguridad",
      description: "Instalaciones modernas y seguras con materiales de alta calidad, cumpliendo con todos los estándares de seguridad infantil."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horarios Flexibles",
      description: "Abiertos toda la semana con horarios extendidos los fines de semana para adaptarnos a las necesidades de todas las familias."
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-[var(--accent-color)]"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-8 border-[var(--primary-color)]"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border-4 border-[var(--secondary-color)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with decorative elements */}
        <div className="text-center mb-16 relative">
          <h2 
            className="text-3xl md:text-4xl font-bold relative inline-block"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          <div className="w-24 h-1 bg-[var(--secondary-color)] mx-auto mt-4"></div>
          <div className="w-16 h-1 bg-[var(--primary-color)] mx-auto mt-1"></div>
          <div className="w-8 h-1 bg-[var(--accent-color)] mx-auto mt-1"></div>
        </div>
        
        {/* Features grid with responsive design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        {/* Action button - centered with flex and margin */}
        <div className="flex justify-center mt-12">
          <PrimaryButton text="Reserva Ahora" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;