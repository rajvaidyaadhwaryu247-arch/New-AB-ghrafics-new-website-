import React from 'react';
import { Sparkles, Calendar, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function FreeAudit() {
  const handleBookAudit = () => {
    const msg = `Hello AB Graphics, I would like to book a Free 15-Minute Brand & Lead-Gen Audit. My business name is: `;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919307643461?text=${encoded}`, '_blank');
  };

  return (
    <section id="free-audit" className="relative py-20 z-10 overflow-hidden bg-[#07070A]">
      {/* Lights ambient background */}
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-500/5 to-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-brand-dark via-[#09090E] to-[#120B19] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          
          {/* Side glowing accent line */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-neon-pink to-neon-purple rounded-l-3xl" />

          {/* Text descriptions */}
          <div className="max-w-2xl text-center lg:text-left flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neon-pink uppercase mb-4 justify-center lg:justify-start">
              <Sparkles className="w-4 h-4 text-neon-pink animate-pulse" />
              Limited Monthly Opportunities
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Get a Free 15-Min Visual &amp; Marketing Audit
            </h2>
            
            <p className="mt-4 text-neutral-300 font-sans text-sm sm:text-base font-light leading-relaxed">
              We look under the hood of your digital presence. Speak directly with our lead creative to discover where your graphics are causing drop-offs, how to optimize your localized search indexing, and how to structure cold leads flow.
            </p>

            {/* Bullets lists */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs font-mono tracking-wide text-neutral-400">
              <span className="flex items-center gap-1.5">✔ Branding Aesthetics Review</span>
              <span className="flex items-center gap-1.5">✔ Lead-Funnels Checkup</span>
              <span className="flex items-center gap-1.5">✔ No Commitments Hook</span>
            </div>
          </div>

          {/* Interactive action CTA */}
          <div className="flex-shrink-0 flex flex-col gap-3 w-full lg:w-auto items-center">
            <button
              onClick={handleBookAudit}
              className="w-full sm:w-auto px-10 py-5 rounded-full font-sans text-xs font-bold uppercase tracking-widest text-[#050508] bg-[#00E5FF] hover:bg-white shadow-glow-blue transition-all duration-300 hover:scale-[1.04] flex items-center justify-center gap-3"
            >
              <Calendar className="w-4 h-4 text-black" />
              Schedule My Free Audit
            </button>
            <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
              *Only 8 Slots Available Per Week
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
