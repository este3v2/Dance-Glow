import React from 'react';
import { Section } from './ui/Section';
import { FLOW_STEPS } from '../constants';

export const Experience: React.FC = () => {
  return (
    <Section className="bg-white" id="experience">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What to Expect</h2>
        <p className="text-lg text-stone-600 font-medium">60 Minutes That Feel Like Freedom</p>
      </div>

      <div className="max-w-3xl mx-auto relative px-4">
        {/* Connector Line - Styled to be elegant */}
        <div className="absolute left-[39px] md:left-1/2 md:-ml-px top-4 bottom-12 w-0.5 bg-gradient-to-b from-rose-200 via-rose-300 to-transparent md:block"></div>

        <div className="space-y-12">
          {FLOW_STEPS.map((step, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content Side */}
              <div className="flex-1 md:w-1/2">
                  <div className={`p-6 bg-stone-50 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <h3 className="text-xl font-bold mb-2 text-stone-900">{step.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{step.description}</p>
                  </div>
              </div>

              {/* Center Marker */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                 <div className="w-10 h-10 rounded-full bg-white border-4 border-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shadow-sm z-10 relative">
                    <span className="relative z-10">{index + 1}</span>
                    <div className="absolute inset-0 bg-rose-50 rounded-full animate-pulse opacity-50"></div>
                 </div>
              </div>

              {/* Empty Side for layout balance on desktop */}
              <div className="hidden md:block flex-1 md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};