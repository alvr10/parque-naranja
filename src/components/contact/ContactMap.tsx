import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Nuestra Ubicación</h3>
      
      {/* Map container */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2059091573734!2d-79.20328432414589!3d-3.986650344541283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb47fc24447e91%3A0x28d6f42a6e4a3f8!2sLoja%2C%20Ecuador!5e0!3m2!1ses!2ses!4v1716204847813!5m2!1ses!2ses" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación de Parque Naranja en Loja, Ecuador"
        ></iframe>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <a 
          href="https://goo.gl/maps/YOUR_ACTUAL_MAPS_LINK" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-orange-500 hover:text-orange-600 transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Ver en Google Maps
        </a>
        
        <a 
          href="#" 
          className="inline-flex items-center text-sm text-orange-500 hover:text-orange-600 transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Cómo llegar
        </a>
      </div>
    </div>
  );
};

export default ContactMap;