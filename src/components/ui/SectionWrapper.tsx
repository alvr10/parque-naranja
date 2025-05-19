'use client';

import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  id
}) => {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;