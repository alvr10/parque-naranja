import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-14 relative">      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-20 w-40">
                <Image
                  src="/images/logo.png"
                  alt="Parque Naranja Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
            <p className="text-[var(--primary-color)] text-sm font-medium mb-4">
              ¡Bienvenidos a la diversión! El mejor parque de bolas para niños en Loja.
            </p>
          </div>

          {/* Navegación */}
          <div className="col-span-1">
            <h3 className="text-[var(--accent-color)] font-bold text-lg mb-4 border-b-2 border-[var(--accent-color)] pb-2 inline-block">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-700 hover:text-[var(--accent-color)] font-medium transition-colors flex items-center">
                  <span className="text-[var(--accent-color)] mr-2">›</span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/actividades" className="text-gray-700 hover:text-[var(--accent-color)] font-medium transition-colors flex items-center">
                  <span className="text-[var(--accent-color)] mr-2">›</span>
                  Actividades
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-gray-700 hover:text-[var(--accent-color)] font-medium transition-colors flex items-center">
                  <span className="text-[var(--accent-color)] mr-2">›</span>
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-700 hover:text-[var(--accent-color)] font-medium transition-colors flex items-center">
                  <span className="text-[var(--accent-color)] mr-2">›</span>
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/reservas" className="text-gray-700 hover:text-[var(--accent-color)] font-medium transition-colors flex items-center">
                  <span className="text-[var(--accent-color)] mr-2">›</span>
                  Reservas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-1">
            <h3 className="text-[var(--accent-color)] font-bold text-lg mb-4 border-b-2 border-[var(--accent-color)] pb-2 inline-block">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[var(--accent-color)] p-2 rounded-full mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  Calles Teniente Maximiliano Rodríguez y José María Peña esquina, Loja – Ecuador
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-[var(--accent-color)] p-2 rounded-full mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  Información y reservas: <span className="text-[var(--accent-color)] font-medium">0982419136</span>
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-[var(--accent-color)] p-2 rounded-full mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  <span className="text-[var(--accent-color)] font-medium">parquenaranja@gmail.com</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="col-span-1">
            <h3 className="text-[var(--accent-color)] font-bold text-lg mb-4 border-b-2 border-[var(--accent-color)] pb-2 inline-block">Síguenos</h3>
            <div className="flex space-x-4 mb-5">
              <Link href="https://www.facebook.com/ParqueNaranja" target="_blank" rel="noopener noreferrer" className="bg-white shadow-md hover:shadow-lg p-2 rounded-full text-[var(--accent-color)] hover:text-white hover:bg-[var(--accent-color)] transition-all duration-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/parquenaranja" target="_blank" rel="noopener noreferrer" className="bg-white shadow-md hover:shadow-lg p-2 rounded-full text-[var(--accent-color)] hover:text-white hover:bg-[var(--accent-color)] transition-all duration-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </Link>
              <Link href="https://www.tiktok.com/@parquenaranja" target="_blank" rel="noopener noreferrer" className="bg-white shadow-md hover:shadow-lg p-2 rounded-full text-[var(--accent-color)] hover:text-white hover:bg-[var(--accent-color)] transition-all duration-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </Link>
            </div>
            <div className="bg-[var(--accent-color)]/10 p-4 rounded-lg border-l-4 border-[var(--accent-color)]">
              <h4 className="font-bold text-[var(--accent-color)] mb-2">Horario de Atención</h4>
              <p className="text-gray-700 text-sm">Lunes a Viernes: <span className="font-medium">10:00 - 20:00</span></p>
              <p className="text-gray-700 text-sm">Sábados y Domingos: <span className="font-medium">10:00 - 22:00</span></p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-4 md:mb-0">
              © {new Date().getFullYear()} Parque Naranja. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/terminos" className="text-gray-500 hover:text-[var(--accent-color)] text-xs transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" className="text-gray-500 hover:text-[var(--accent-color)] text-xs transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element - bottom orange dots */}
      <div className="absolute bottom-0 left-0 w-full h-2 flex justify-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-[var(--accent-color)]"></div>
        <div className="h-2 w-2 rounded-full bg-[var(--accent-color)]"></div>
        <div className="h-2 w-2 rounded-full bg-[var(--accent-color)]"></div>
        <div className="h-2 w-2 rounded-full bg-[var(--accent-color)]"></div>
        <div className="h-2 w-2 rounded-full bg-[var(--accent-color)]"></div>
      </div>
    </footer>
  );
};

export default Footer;