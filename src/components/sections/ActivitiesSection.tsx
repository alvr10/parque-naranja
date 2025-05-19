'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ActivityCard = ({ imageSrc, imageAlt, title, description, link }: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-4 border-orange-100">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          className="hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-extrabold mb-3 text-[var(--secondary-color)]">{title}</h3>
        <p className="text-[var(--primary-color)] mb-5 font-medium">{description}</p>
        <Link 
          href={link} 
          className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all hover:scale-105"
        >
          ¡Quiero jugar! 🎯
          <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      imageSrc: "/images/actividades/actividad-1.jpg",
      imageAlt: "Niños jugando en piscina de pelotas",
      title: "Piscina de Pelotas Gigante",
      description: "Sumérgete en nuestro mar de pelotas coloridas y vive la emoción de saltar sin parar.",
      link: "/actividades/piscina-pelotas"
    },
    {
      imageSrc: "/images/actividades/actividad-2.jpg",
      imageAlt: "Niños deslizándose en toboganes",
      title: "Toboganes Emocionantes",
      description: "Deslízate por nuestros increíbles toboganes de diferentes alturas y velocidades.",
      link: "/actividades/toboganes"
    },
    {
      imageSrc: "/images/actividades/actividad-3.jpg",
      imageAlt: "Niños escalando estructura",
      title: "Zona de Escalada",
      description: "Retos divertidos para pequeños aventureros que aman escalar y superarse.",
      link: "/actividades/zona-escalada"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-0 text-[var(--accent-color)]">
            ¡Diversión <span className="text-[var(--secondary-color)]">sin límites</span>!
          </h2>
          <Link 
            href="/actividades" 
            className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all hover:scale-105"
          >
            Ver todas las actividades 🎪
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              imageSrc={activity.imageSrc}
              imageAlt={activity.imageAlt}
              title={activity.title}
              description={activity.description}
              link={activity.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;