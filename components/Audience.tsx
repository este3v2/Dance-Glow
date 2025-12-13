import React from 'react';
import { Section } from './ui/Section';
import { Check, X } from 'lucide-react';
import { AUDIENCE_FIT } from '../constants';

export const Audience: React.FC = () => {
  return (
    <Section className="bg-stone-50/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Is This For You?</h2>
        <p className="text-stone-600">We protect the vibe by being clear about who this is for.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
        {/* YES Column */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100/50">
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-full">
                <Check className="w-5 h-5 text-emerald-700" />
            </div>
            <span>You'll love this if...</span>
          </h3>
          <ul className="space-y-6">
            {AUDIENCE_FIT.YES.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                <span className="text-stone-700 font-medium leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* NO Column */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 opacity-90">
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
            <div className="bg-stone-100 p-2 rounded-full">
                <X className="w-5 h-5 text-stone-500" />
            </div>
            <span>Skip this if you...</span>
          </h3>
          <ul className="space-y-6">
            {AUDIENCE_FIT.NO.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0"></div>
                <span className="text-stone-500 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};