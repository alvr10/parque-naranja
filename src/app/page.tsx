import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import { GameCurvedBorder } from '@/components/ui/CurvedBorder';
import FAQ from '@/components/sections/FAQ';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GameCurvedBorder
        fillColor="fill-white" 
        className='bg-orange-100'
      />
      <FeaturesSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <GameCurvedBorder
        fillColor="fill-[var(--secondary-color)]"
        className='bg-white' 
      />
      <CTASection />
      {/* Curved border at the bottom of this section */}
      <GameCurvedBorder
        fillColor="fill-white" 
      />
      <FAQ />
    </>
  );
}