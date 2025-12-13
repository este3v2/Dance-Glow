import React from 'react';
import { Section } from './ui/Section';
import { OUTCOMES } from '../constants';

export const Outcome: React.FC = () => {
  return (
    <Section dark className="text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">After One Session, You'll Feel...</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {OUTCOMES.map((outcome, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-stone-800 rounded-2xl border border-stone-700">
            <outcome.icon className="w-8 h-8 text-rose-400 mb-4" />
            <h3 className="text-lg font-medium text-stone-100">{outcome.text}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};