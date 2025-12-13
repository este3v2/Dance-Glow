import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { Audience } from './components/Audience';
import { Experience } from './components/Experience';
import { Teacher } from './components/Teacher';
import { Outcome } from './components/Outcome';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <SocialProof />
        <Audience />
        <Experience />
        <Teacher />
        <Outcome />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;