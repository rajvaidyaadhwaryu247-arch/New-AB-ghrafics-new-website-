/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import ResultsCounter from './components/ResultsCounter';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import BeforeAfter from './components/BeforeAfter';
import Advisor from './components/Advisor';
import FreeAudit from './components/FreeAudit';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import FloatingCTAs from './components/FloatingCTAs';
import Footer from './components/Footer';

export default function App() {
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  return (
    <div className="bg-[#040406] text-white min-h-screen font-sans selection:bg-[#00E5FF]/30 selection:text-[#00E5FF]">
      {/* Background cyber grid lighting layout */}
      <div className="relative min-h-screen flex flex-col justify-between">
        
        {/* Navigation, Hero, and layout details */}
        <Navbar onOpenAdvisor={() => setIsAdvisorOpen(true)} />
        
        <main className="flex-grow">
          {/* 1. Hero landing layout */}
          <Hero onOpenAdvisor={() => setIsAdvisorOpen(true)} />

          {/* 2. Brand Trust Indicators */}
          <Trust />

          {/* 3. Performance Metrics Counters */}
          <ResultsCounter />

          {/* 4. Creative philosophy summary */}
          <About />

          {/* 5. 16 marketing & design deliverables */}
          <Services />

          {/* 6. Growth Tier Modules */}
          <Packages />

          {/* 7. Creative Work Portfolio */}
          <Portfolio />

          {/* 8. Conversion Case Studies */}
          <CaseStudies />

          {/* 9. Before/after transformation audits */}
          <BeforeAfter />

          {/* 11. Custom 15-Min Free Audit call */}
          <FreeAudit />

          {/* 12. Founder Testimonials */}
          <Testimonials />

          {/* 13. Smart WA Inquiry form */}
          <ContactForm />
        </main>

        {/* Side Panel AI Advisor */}
        <Advisor isOpen={isAdvisorOpen} onClose={() => setIsAdvisorOpen(false)} />

        {/* Floating actions and footer blocks */}
        <FloatingCTAs onOpenAdvisor={() => setIsAdvisorOpen(true)} />
        <Footer />
        
      </div>
    </div>
  );
}

