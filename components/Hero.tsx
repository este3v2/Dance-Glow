import React from 'react';
import { Button } from './ui/Button';
import { NEXT_SESSION_DATE, SPOTS_LIMIT } from '../constants';

export const Hero: React.FC = () => {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Background Layer - Soft Silhouettes */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Increased opacity from 20 to 35, reduced grayscale slightly to bring warmth */}
        <img 
          src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2070&auto=format&fit=crop" 
          alt="Soft silhouette of movement" 
          className="w-full h-full object-cover opacity-35 grayscale-[0.2] contrast-110 mix-blend-multiply"
        />
        {/* Soft Rose Gradient Overlay - Lightened to reveal more image */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-rose-50/10 z-20"></div>
        {/* Radial Fade to focus attention on text - softened the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(250,250,249,0.7)_100%)] z-20"></div>
      </div>

      <div className="relative z-30 max-w-4xl mx-auto px-4 text-center mt-16">
        <span className="inline-block py-1.5 px-4 rounded-full bg-rose-100/80 text-rose-800 text-sm font-semibold tracking-wide mb-8 border border-rose-200 shadow-sm backdrop-blur-sm">
          Next Session: {NEXT_SESSION_DATE}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-[1.1] mb-8 drop-shadow-sm">
          Dance Like You Used To.<br/>
          <span className="text-rose-600 italic bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent">
            Feel Better Than You Remember.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          A high-energy, dance-first experience for adults who miss moving to music—and want the cardio + strength benefits without the gym vibe.
        </p>

        <div className="flex flex-col items-center gap-5">
          <Button size="lg" onClick={scrollToCTA} className="min-w-[220px] shadow-xl shadow-rose-900/10 hover:shadow-rose-900/20">
            Reserve My Spot
          </Button>
          
          <p className="text-sm text-stone-500 font-medium px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-stone-200/50">
            Limited to {SPOTS_LIMIT} people per session. No experience needed.
          </p>
        </div>
      </div>
    </div>
  );
};