import React from 'react';
import { BRAND_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 text-center text-sm">
      <p className="mb-4 font-serif text-lg text-stone-200">{BRAND_NAME}</p>
      <div className="flex justify-center gap-6 mb-8">
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
      </div>
      <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
    </footer>
  );
};