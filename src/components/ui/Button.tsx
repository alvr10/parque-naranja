'use client';

import Link from 'next/link';
import React from 'react';

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  href?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  type = 'button',
  fullWidth = false,
  size = 'medium',
  icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  href = '/contacto',
}) => {
  // Size classes
  const sizeClasses = {
    small: 'text-sm py-2 px-5',
    medium: 'py-3 px-8',
    large: 'text-lg py-4 px-10',
  };
  
  // Width classes
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Disabled classes
  const disabledClasses = disabled 
    ? 'opacity-60 cursor-not-allowed' 
    : 'hover:bg-orange-600 hover:shadow-xl hover:-translate-y-1';
  
  // Base classes that will always be applied
  const baseClasses = `
    bg-[var(--primary-color)] 
    text-white 
    font-medium 
    rounded-full 
    shadow-lg 
    transition-all 
    duration-300 
    transform
    flex
    items-center
    justify-center
    ${sizeClasses[size]}
    ${widthClass}
    ${disabledClasses}
    ${className}
  `;

  // Content to be displayed inside the button
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {text}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  // If the button is a link (has href) and is not disabled
  if (href && !disabled) {
    return (
      <Link 
        href={href}
        className={baseClasses}
        onClick={onClick}
        passHref
      >
        {content}
      </Link>
    );
  }
  
  // If it's a regular button or disabled link
  return (
    <button
      type={type}
      onClick={href && !disabled ? () => window.location.href = href : onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;