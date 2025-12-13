import React from 'react';
import { Section } from './ui/Section';
import { Play } from 'lucide-react';

export const Teacher: React.FC = () => {
  return (
    <Section className="bg-white overflow-hidden" id="teacher">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Bio Content */}
        <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                Meet Your Instructor: <br/>
                <span className="text-rose-600">Mel Nalty</span>
            </h2>
            <div className="space-y-4 text-lg text-stone-600 leading-relaxed">
                <p>
                    Mel isn't just a dance teacher; she's a <strong>movement catalyst</strong>. With over 10 years of experience in both professional commercial dance and somatic movement therapy, she created Groove & Glow to bridge the gap between technical dance classes and pure, unadulterated fun.
                </p>
                <p>
                    "I noticed so many adults stopped dancing because they felt they 'aged out' of clubs or weren't 'good enough' for studios. I wanted to build a space where the only goal is to feel good."
                </p>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm font-medium text-stone-700 shadow-sm">
                    ✨ 10+ Years Exp.
                </div>
                <div className="px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm font-medium text-stone-700 shadow-sm">
                    🧘 Somatic Certified
                </div>
                <div className="px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm font-medium text-stone-700 shadow-sm">
                    ⚡️ High Energy
                </div>
            </div>
        </div>

        {/* Video Mockup */}
        <div className="w-full lg:w-1/2 relative group cursor-pointer order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-stone-900 rotate-2 hover:rotate-0 transition-all duration-300">
                <img 
                    src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2070&auto=format&fit=crop" 
                    alt="Mel Nalty teaching a class" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                </div>

                {/* Video UI Elements (Mockup) */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                    HD
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                    <div className="w-1/3 h-full bg-rose-500"></div>
                </div>
            </div>
             <p className="text-center text-xs text-stone-400 mt-6 italic">Watch Mel break down the "Main Character" combo (0:45)</p>
        </div>

      </div>
    </Section>
  );
};