import React from 'react';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <Section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle decorative dividers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-rose-500 rounded-full opacity-20"></div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-8 text-rose-500">
            {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
            ))}
        </div>

        <blockquote className="text-3xl md:text-5xl font-serif font-bold text-stone-900 leading-[1.2] mb-10">
          "I forgot how much I needed this. It felt like going out… but <span className="text-rose-600 italic font-medium">healthier</span>. I haven't felt this alive in years."
        </blockquote>
        
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="font-semibold text-stone-900 tracking-wide uppercase text-sm">Sarah Jenkins</div>
            <div className="text-stone-500 text-sm">Downtown Resident • Attending since 2024</div>
        </div>
      </div>
    </Section>
  );
};