'use client';

import React from 'react';
import { FaBook, FaExclamationTriangle, FaTicketAlt, FaSmile, FaBan } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-10 -left-10 w-28 h-28 bg-orange-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 -right-12 w-36 h-36 bg-orange-300 rounded-full opacity-20"></div>
        
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800 mb-4">
            <span className="text-orange-600">Términos y Condiciones</span> 📜
          </h1>
          <p className="text-xl text-orange-700 font-medium">
            Las reglas de juego para divertirse seguro en Parque Naranja
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-4 border-orange-100">
          {/* Introduction */}
          <div className="mb-10 text-center">
            <FaBook className="text-orange-500 text-5xl mx-auto mb-4" />
            <p className="text-orange-800 text-lg">
              Antes de saltar a la diversión, lee nuestras reglas. ¡Son más fáciles que escalar nuestro muro de aventuras!
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <div className="flex items-center mb-4 bg-orange-100 p-3 rounded-lg">
              <FaTicketAlt className="text-orange-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-orange-700">1. Reservas y Acceso</h2>
            </div>
            <ul className="space-y-4 pl-2">
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">🎫</span>
                <div>
                  <h3 className="font-bold text-orange-700">Entradas válidas solo para fecha y hora reservada</h3>
                  <p className="text-orange-800">Como los cupcakes, ¡no se pueden guardar para después!</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">👨‍👩‍👧‍👦</span>
                <div>
                  <h3 className="font-bold text-orange-700">Supervisión adulta obligatoria</h3>
                  <p className="text-orange-800">Los niños menores de 12 años deben estar acompañados</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">🔄</span>
                <div>
                  <h3 className="font-bold text-orange-700">Cambios y cancelaciones</h3>
                  <p className="text-orange-800">Avisa con 24h de anticipación para reprogramar</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <div className="flex items-center mb-4 bg-orange-100 p-3 rounded-lg">
              <FaExclamationTriangle className="text-orange-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-orange-700">2. Reglas de Juego Seguro</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-200">
                <h3 className="font-bold text-orange-600 mb-3 flex items-center">
                  <span className="mr-2">👟</span> Calzado adecuado
                </h3>
                <p className="text-orange-800">Zapatos cerrados y calcetines anti-deslizantes</p>
              </div>
              <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-200">
                <h3 className="font-bold text-orange-600 mb-3 flex items-center">
                  <span className="mr-2">🚫</span> Prohibido comer
                </h3>
                <p className="text-orange-800">Solo en zonas designadas</p>
              </div>
              <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-200">
                <h3 className="font-bold text-orange-600 mb-3 flex items-center">
                  <span className="mr-2">📏</span> Restricciones de altura
                </h3>
                <p className="text-orange-800">Algunas atracciones tienen límites</p>
              </div>
              <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-200">
                <h3 className="font-bold text-orange-600 mb-3 flex items-center">
                  <span className="mr-2">🧸</span> Juguetes personales
                </h3>
                <p className="text-orange-800">Mejor dejarlos en casa para no perderlos</p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <div className="flex items-center mb-4 bg-orange-100 p-3 rounded-lg">
              <FaBan className="text-orange-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-orange-700">3. Comportamiento</h2>
            </div>
            <div className="bg-orange-100 p-6 rounded-xl">
              <p className="text-orange-800 font-bold mb-4">
                En Parque Naranja jugamos con respeto:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">❌</span>
                  <span className="text-orange-800">No empujar, golpear o maltratar a otros</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">❌</span>
                  <span className="text-orange-800">Prohibido subir a las atracciones con objetos punzantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">❌</span>
                  <span className="text-orange-800">No saltar desde alturas peligrosas</span>
                </li>
              </ul>
              <p className="text-orange-700 mt-4 font-medium">
                ¡Los niños que no sigan las reglas podrán ser retirados del juego!
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <div className="flex items-center mb-4 bg-orange-100 p-3 rounded-lg">
              <FaSmile className="text-orange-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-orange-700">4. Responsabilidades</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <h3 className="font-bold text-orange-700 mb-2">📸 Fotografías:</h3>
                <p className="text-orange-800">
                  Podemos tomar fotos para redes sociales. Si prefieres que no aparezcan, avísanos.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <h3 className="font-bold text-orange-700 mb-2">🛄 Objetos perdidos:</h3>
                <p className="text-orange-800">
                  Guardamos objetos perdidos por 15 días. ¡Pon nombre a todo!
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <h3 className="font-bold text-orange-700 mb-2">🤕 Accidentes:</h3>
                <p className="text-orange-800">
                  Contamos con botiquín de primeros auxilios y protocolos de emergencia.
                </p>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center bg-orange-500 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">¿Listo para jugar?</h3>
            <p className="mb-4">Al reservar aceptas estos términos. ¡Gracias por ayudarnos a mantener la diversión segura!</p>
            <p className="text-orange-100 text-sm">
              © {new Date().getFullYear()} Parque Naranja - Loja, Ecuador | Última actualización: 19/05/2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;