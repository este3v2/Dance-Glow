import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Name: Always Dark Stone since hero is light */}
        <div className="text-xl font-serif font-bold tracking-tight text-stone-900">
          {BRAND_NAME}
        </div>
        
        {/* Button: Subtle outline on top, Solid on scroll */}
        <Button 
          size="sm" 
          onClick={scrollToCTA} 
          variant={isScrolled ? 'primary' : 'outline'}
          className={`transition-all duration-300 ${!isScrolled && 'bg-white/50 border-stone-200 hover:bg-white'}`}
        >
          Reserve Spot
        </Button>
      </div>
    </nav>
  );
};