import React from 'react';
import { Button } from './ui/Button';
import { NEXT_SESSION_DATE, SPOTS_LIMIT } from '../constants';

export const Hero: React.FC = () => {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-stone-50 to-amber-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Image - Split Layout */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 overflow-hidden">
          <img
            src="/mel-hero.png"
            alt="Joyful people dancing together"
            className="w-full h-full object-cover opacity-40 md:opacity-60 scale-105 hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
        {/* Left Content */}
        <div className="text-left space-y-8">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 shadow-lg backdrop-blur-sm">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span className="text-sm font-bold text-rose-800 tracking-wide">
              Next Session: {NEXT_SESSION_DATE}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-900 leading-[0.95] tracking-tight">
            Dance Like<br/>
            <span className="relative inline-block mt-2">
              You Used To.
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="#fb7185" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            <br/>
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent italic mt-2 inline-block">
              Feel Better<br/>Than You Remember.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-600 max-w-xl leading-relaxed font-medium">
            A high-energy, dance-first experience for adults who miss moving to music—and want the cardio + strength benefits without the gym vibe.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToCTA}
              className="min-w-[240px] text-lg py-7 shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/40 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 border-0 transform hover:scale-105 transition-all duration-200"
            >
              Reserve My Spot →
            </Button>

            <div className="flex flex-col gap-1">
              <p className="text-sm text-stone-700 font-bold">
                Only {SPOTS_LIMIT} spots available
              </p>
              <p className="text-xs text-stone-500">
                No dance experience needed
              </p>
            </div>
          </div>

          {/* Social Proof Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 shadow-sm">
              <p className="text-sm text-stone-700">⭐ <span className="font-bold">4.9/5</span> avg rating</p>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 shadow-sm">
              <p className="text-sm text-stone-700">🔥 <span className="font-bold">500+</span> dancers</p>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 shadow-sm">
              <p className="text-sm text-stone-700">💪 <span className="font-bold">All levels</span> welcome</p>
            </div>
          </div>
        </div>

        {/* Right side - Spacer for image */}
        <div className="hidden md:block"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};