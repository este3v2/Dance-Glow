import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { NEXT_SESSION_DATE, NEXT_SESSION_TIME, LOCATION, PRICE, HOST_NAME, HOST_CREDENTIALS } from '../constants';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <Section id="cta" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-rose-50/50 -skew-y-3 transform origin-top-left scale-110 translate-y-20 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Feel Like Yourself Again?</h2>
        <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
          This isn't a weekly class. It's a monthly event. Reserve your spot now before they're gone.
        </p>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 mb-10 max-w-lg mx-auto">
            <div className="space-y-4 mb-8 text-left">
                <div className="flex items-center gap-4 text-stone-700">
                    <Calendar className="w-5 h-5 text-rose-500" />
                    <span className="font-semibold">{NEXT_SESSION_DATE}</span>
                </div>
                <div className="flex items-center gap-4 text-stone-700">
                    <Clock className="w-5 h-5 text-rose-500" />
                    <span>{NEXT_SESSION_TIME} (60 Mins)</span>
                </div>
                <div className="flex items-center gap-4 text-stone-700">
                    <MapPin className="w-5 h-5 text-rose-500" />
                    <span>{LOCATION}</span>
                </div>
            </div>

            <Button fullWidth size="lg">
                Reserve Spot ({PRICE})
            </Button>
            
            <p className="text-xs text-stone-400 mt-4 text-center">
                Secure checkout. Cancel up to 48h before for full refund.
            </p>
        </div>

        <div className="text-sm text-stone-500">
            Hosted by <span className="font-semibold text-stone-900">{HOST_NAME}</span> <br/>
            <span className="italic">{HOST_CREDENTIALS}</span>
        </div>
      </div>
    </Section>
  );
};