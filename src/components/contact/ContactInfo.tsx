import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Location */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4 hover:shadow-md transition-shadow">
        <div className="bg-orange-100 p-3 rounded-full">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Ubicación</h3>
          <p className="text-gray-600">Calles Teniente Maximiliano Rodríguez y José María Peña esquina, Loja – Ecuador</p>
        </div>
      </div>
      
      {/* Phone */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4 hover:shadow-md transition-shadow">
        <div className="bg-orange-100 p-3 rounded-full">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Teléfono</h3>
          <p className="text-gray-600">Información y reservas:</p>
          <a href="tel:0982419136" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">0982419136</a>
        </div>
      </div>
      
      {/* Email */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4 hover:shadow-md transition-shadow">
        <div className="bg-orange-100 p-3 rounded-full">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Correo Electrónico</h3>
          <a href="mailto:parquenaranja@gmail.com" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">parquenaranja@gmail.com</a>
        </div>
      </div>
      
      {/* Hours */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4 hover:shadow-md transition-shadow">
        <div className="bg-orange-100 p-3 rounded-full">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Horario de Atención</h3>
          <p className="text-gray-600">Lunes a Viernes: 10:00 - 20:00</p>
          <p className="text-gray-600">Sábados y Domingos: 10:00 - 22:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;