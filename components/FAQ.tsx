import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-stone-50">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
      
      <div className="max-w-2xl mx-auto space-y-4">
        {FAQS.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
            <button 
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span className="font-semibold text-lg text-stone-900 pr-4">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-stone-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-stone-400" />
              )}
            </button>
            <div 
              className={`px-6 text-stone-600 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};