'use client';

import React from 'react';
import { FaShieldAlt, FaLock, FaChild, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header with decorative elements */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-300 rounded-full opacity-20"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800 mb-4">
            <span className="text-orange-600">Política de Privacidad</span> 🛡️
          </h1>
          <p className="text-xl text-orange-700 font-medium">
            En Parque Naranja, protegemos tus datos como protegemos las sonrisas de los niños.
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-4 border-orange-100">
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-orange-500 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-orange-700">1. Información que Recopilamos</h2>
            </div>
            <p className="text-orange-800 mb-4">
              Cuando visitas nuestro parque o sitio web, podemos recopilar:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">🎯</span>
                <span className="text-orange-800">Datos de contacto (nombre, email, teléfono)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">🎯</span>
                <span className="text-orange-800">Información de reservas y pagos</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">🎯</span>
                <span className="text-orange-800">Edad y talla de los niños para seguridad</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">🎯</span>
                <span className="text-orange-800">Datos de navegación (con cookies seguras)</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaLock className="text-orange-500 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-orange-700">2. Cómo Usamos Tu Información</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200">
                <h3 className="font-bold text-orange-600 mb-2 flex items-center">
                  <span className="mr-2">✅</span> Para reservas
                </h3>
                <p className="text-orange-700">Gestionar tu visita y actividades</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200">
                <h3 className="font-bold text-orange-600 mb-2 flex items-center">
                  <span className="mr-2">✅</span> Para seguridad
                </h3>
                <p className="text-orange-700">Proteger a los niños en nuestras instalaciones</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200">
                <h3 className="font-bold text-orange-600 mb-2 flex items-center">
                  <span className="mr-2">✅</span> Mejoras
                </h3>
                <p className="text-orange-700">Hacer el parque más divertido cada día</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200">
                <h3 className="font-bold text-orange-600 mb-2 flex items-center">
                  <span className="mr-2">✅</span> Comunicación
                </h3>
                <p className="text-orange-700">Enviar promociones (si nos das permiso)</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaChild className="text-orange-500 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-orange-700">3. Protección de Datos</h2>
            </div>
            <div className="bg-orange-100 p-6 rounded-xl">
              <p className="text-orange-800 font-medium mb-4">
                Tus datos están más protegidos que un niño en nuestras áreas de juego:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🔒</span>
                  <span className="text-orange-800">Sistemas de encriptación avanzados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🔒</span>
                  <span className="text-orange-800">Acceso limitado al personal autorizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🔒</span>
                  <span className="text-orange-800">Cumplimiento con leyes de protección infantil</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-orange-500 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-orange-700">4. Tus Derechos</h2>
            </div>
            <p className="text-orange-800 mb-6">
              Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento.
            </p>
            <div className="bg-orange-500 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">¿Preguntas? ¡Escríbenos!</h3>
              <p className="mb-4">parquenaranja@gmail.com</p>
              <button className="bg-white text-orange-600 font-bold py-2 px-6 rounded-full hover:bg-orange-100 transition-colors">
                Contactar al equipo
              </button>
            </div>
          </div>

          <div className="text-center text-orange-700">
            <p>© {new Date().getFullYear()} Parque Naranja - Todos los derechos reservados</p>
            <p className="text-sm mt-2">Última actualización: 19 de mayo de 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;