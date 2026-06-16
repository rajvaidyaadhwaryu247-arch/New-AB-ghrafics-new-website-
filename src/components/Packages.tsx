import React from 'react';
import { PACKAGES_DATA } from '../data';
import { Package } from '../types';
import { Sparkles, CheckCircle2, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Packages() {
  
  const handleInquirePackage = (packageName: string) => {
    const msg = `Hello AB Graphics, I have reviewed your packages on the website and would like to get custom quotes and consultations for the "${packageName}". Please let me know what inputs are needed.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919307643461?text=${encoded}`, '_blank');
  };

  return (
    <section id="packages" className="relative py-24 z-10 bg-[#050508] overflow-hidden">
      {/* Light node background colors */}
      <div className="absolute right-[-10%] top-[30%] w-[500px] h-[500px] rounded-full ambient-neon-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-neon-pink uppercase block mb-3">
            Service Tiers & Deliverables
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Select Your Business Growth Tier
          </h2>
          <p className="mt-4 text-neutral-400 font-sans font-light">
            We adapt specifically to your scale. Explore our standard agency structures to align with your targets. Contact us to receive bespoke corporate quoting.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PACKAGES_DATA.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={pkg.id}
              className={`flex flex-col relative rounded-3xl p-8 transition-all duration-300 ${
                pkg.recommended
                  ? 'bg-[#0B0B12] border-2 border-neon-blue shadow-glow-blue lg:-translate-y-4 scale-[1.02]'
                  : 'glassmorphism border border-white/5 hover:border-white/10'
              }`}
            >
              {/* Recommended Badge Indicator */}
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-black text-[10px] font-bold uppercase tracking-widest shadow-glow-blue select-none">
                  <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                  Most Recommended
                </div>
              )}

              {/* Package Details */}
              <div className="mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#00E5FF] uppercase block mb-1">
                  {pkg.targetAudience}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  {pkg.name}
                </h3>
                <p className="font-sans text-xs text-neutral-400 mt-2 leading-relaxed font-light min-h-[40px]">
                  {pkg.subtitle}
                </p>
              </div>

              {/* Contact / Price Placeholder */}
              <div className="py-6 border-y border-white/5 mb-8 flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase leading-none">
                  Custom Quoting Mode
                </span>
                <span className="font-display font-extrabold text-2xl text-white mt-1.5 uppercase tracking-wide bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  Custom Proposal
                </span>
                <span className="text-xs text-neutral-400 mt-1 font-light">
                  Tailored on Business Scale & Ads Budget
                </span>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-neutral-300 font-light">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.recommended ? 'text-neon-blue' : 'text-neutral-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Booking Button Actions */}
              <button
                onClick={() => handleInquirePackage(pkg.name)}
                className={`w-full py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                  pkg.recommended
                    ? 'bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-black shadow-glow-blue hover:scale-[1.03]'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Inquire Proposal
                <Send className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
