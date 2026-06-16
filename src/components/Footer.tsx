import React from 'react';
import Logo from './Logo';
import { Phone, MessageSquare, Instagram, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040406] border-t border-white/5 pt-16 pb-24 sm:pb-12 z-25 overflow-hidden">
      
      {/* Little glow on details row footer */}
      <div className="absolute bottom-0 right-[15%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main upper content blocks */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Pitch column */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-3 select-none">
              <Logo showText={false} className="w-10 h-10 md:w-11 md:h-11" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-white tracking-[0.14em] text-md md:text-lg leading-none">
                  AB GRAPHICS
                </span>
                <span className="text-[9px] text-neutral-400 font-mono tracking-widest mt-0.5">
                  DIGITAL MARKETING
                </span>
              </div>
            </a>
            
            <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed font-light max-w-sm mt-3">
              We design custom high-contrast visual portfolios and scale targeted demographic campaigns designed to convert direct clients. Custom design beats template clutter.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 items-center mt-3">
              <a
                href="https://www.instagram.com/ab_studioindia"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:text-[#EC4899] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919307643461"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:text-[#10B981] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:9307643461"
                className="p-2.5 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:text-[#00E5FF] transition-colors"
                aria-label="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links directory */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-widest font-mono mb-4">
              Directory
            </h4>
            <ul className="space-y-3 font-sans text-xs text-neutral-400 font-light">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Digital Services</a></li>
              <li><a href="#packages" className="hover:text-cyan-400 transition-colors">Target Packages</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Creative Work</a></li>
              <li><a href="#case-studies" className="hover:text-cyan-400 transition-colors">Metrics & Case Studies</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Help details */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-widest font-mono mb-4">
              Direct Contact Details
            </h4>
            <ul className="space-y-3 font-sans text-xs text-neutral-400 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Call: 9307643461</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>WA: +91 9307643461</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                <span>Insta: @ab_studioindia</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Location: India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-neutral-500 font-light">
            &copy; {new Date().getFullYear()} AB Graphics. All Rights Reserved. Crafted for premium scaling.
          </p>

          <a
            href="#"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
          >
            Back To Top
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
