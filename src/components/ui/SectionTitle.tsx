'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  centered?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  centered = false,
  className = '',
  as = 'h2'
}) => {
  const baseClasses = "font-bold mb-4";
  const sizeClasses = "text-3xl md:text-4xl";
  const alignClasses = centered ? "text-center" : "";
  
  const combinedClasses = `${baseClasses} ${sizeClasses} ${alignClasses} ${className}`;
  
  const renderTitle = () => {
    return <div dangerouslySetInnerHTML={{ __html: title }} />;
  };
  
  switch (as) {
    case 'h1':
      return <h1 className={combinedClasses}>{renderTitle()}</h1>;
    case 'h3':
      return <h3 className={combinedClasses}>{renderTitle()}</h3>;
    default:
      return <h2 className={combinedClasses}>{renderTitle()}</h2>;
  }
};

export default SectionTitle;