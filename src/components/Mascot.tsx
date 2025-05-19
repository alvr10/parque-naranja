import React from 'react';
import Image from 'next/image';

interface MascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withSpeechBubble?: boolean;
  bubbleText?: string;
}

const Mascot: React.FC<MascotProps> = ({ 
  size = 'md', 
  className = '', 
  withSpeechBubble = false,
  bubbleText = '¡Hola! Soy Naranjo, ¡Vamos a divertirnos!'
}) => {
  // Tamaños predefinidos
  const sizeMap = {
    sm: { width: 80, height: 80 },
    md: { width: 120, height: 120 },
    lg: { width: 180, height: 180 },
    xl: { width: 240, height: 240 },
  };

  const { width, height } = sizeMap[size];

  return (
    <div className={`relative inline-block ${className}`}>
      {withSpeechBubble && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white border-2 border-[#FC920E] rounded-2xl p-3 shadow-md z-10">
          <p className="text-gray-800 text-sm font-medium">
            {bubbleText}
          </p>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-[#FC920E] rotate-45"></div>
        </div>
      )}
      <div className="relative" style={{ width, height }}>
        <Image
          src="/images/mascota.png"
          alt="Naranjo - Mascota de Parque Naranja"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default Mascot;