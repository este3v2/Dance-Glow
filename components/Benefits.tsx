import React from 'react';
import { Section } from './ui/Section';
import { BENEFITS } from '../constants';

export const Benefits: React.FC = () => {
  return (
    <Section>
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Not Your Average Fitness Class</h2>
        <p className="text-lg text-stone-600">
            Most workout classes feel like work. This feels like a release.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {BENEFITS.map((benefit, index) => (
          <div 
            key={index} 
            className="group bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 border border-stone-100"
          >
            <div className="w-12 h-12 bg-stone-50 group-hover:bg-rose-50 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
              <benefit.icon className="w-6 h-6 text-stone-400 group-hover:text-rose-600 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-stone-900">{benefit.title}</h3>
            <p className="text-stone-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};