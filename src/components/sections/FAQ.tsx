'use client';

import React, { useState } from 'react';

const FAQ = () => {
  // Array of FAQ items with questions and answers
  const faqItems = [
    {
      question: "¿Cómo puedo reservar para un cumpleaños?",
      answer: "Para reservar una celebración de cumpleaños, puedes llamarnos al 0982419136, enviarnos un mensaje a través de nuestro formulario, o contactarnos por WhatsApp. Recomendamos reservar con al menos una semana de anticipación."
    },
    {
      question: "¿Cuál es la edad recomendada para los niños?",
      answer: "Parque Naranja está diseñado para niños de 1 a 12 años. Tenemos áreas específicas para diferentes edades, incluyendo una zona especial para bebés y niños pequeños."
    },
    {
      question: "¿Los padres tienen que pagar entrada?",
      answer: "No, los padres y acompañantes adultos no pagan entrada. Solo se cobra por los niños que utilizarán las instalaciones. Contamos con una zona de espera para padres con wifi gratuito."
    },
    {
      question: "¿Qué medidas de seguridad tienen implementadas?",
      answer: "La seguridad es nuestra prioridad. Contamos con monitores capacitados, cámaras de vigilancia, materiales homologados, limpieza constante y protocolos de seguridad bien establecidos."
    },
    {
      question: "¿Hay que hacer reserva para jugar en un día normal?",
      answer: "Para visitas regulares no es necesario hacer reserva previa. Sin embargo, durante fines de semana o temporada alta recomendamos llamar antes para confirmar disponibilidad."
    },
  ];

  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle function to open/close FAQs
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
      
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-orange-100 last:border-0">
            <button 
              className="w-full py-4 px-6 flex justify-between items-center text-left hover:bg-orange-50 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
              <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 py-4' : 'max-h-0'}`}>
              <p className="px-6 text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;