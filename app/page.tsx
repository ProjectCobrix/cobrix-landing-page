'use client';

import React from 'react';
import Navigation from '../src/components/Navigation';
import Hero from '../src/components/Hero';
import Problem from '../src/components/Problem';
import Solution from '../src/components/Solution';
import HowItWorks from '../src/components/HowItWorks';
import Wedge from '../src/components/Wedge';
import Testimonials from '../src/components/Testimonials';
import CTA from '../src/components/CTA';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Wedge />
      <Testimonials />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
} 