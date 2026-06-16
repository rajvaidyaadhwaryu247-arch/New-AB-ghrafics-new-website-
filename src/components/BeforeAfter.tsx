import React from 'react';
import { BEFORE_AFTER_DATA } from '../data';
import { ArrowLeftRight, Check, X, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function BeforeAfter() {
  return (
    <section id="before-after" className="relative py-24 z-10 bg-[#07070A] overflow-hidden">
      {/* Light nodes background */}
      <div className="absolute right-[-5%] bottom-[10%] w-[400px] h-[400px] rounded-full ambient-neon-glow-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#00E5FF] uppercase block mb-3">
            Branding Transformation Audits
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Before / After Brand Evolution
          </h2>
          <p className="mt-4 text-neutral-400 font-sans font-light">
            Compare standard default templates against our tailored high-end layout styles. Witness direct conversions scaling across live platforms.
          </p>
        </div>

        {/* Two Transformation Panels side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {BEFORE_AFTER_DATA.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={item.id}
              className="glassmorphism rounded-3xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between hover:border-cyan-500/10 transition-colors"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 block mb-1">
                  CASE STUDY TRANSFORM // {item.category}
                </span>
                <h3 className="font-display font-extrabold text-xl text-white mb-6">
                  {item.title}
                </h3>

                {/* Images side-by-side container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative overflow-hidden">
                  
                  {/* Before state */}
                  <div className="flex flex-col relative rounded-2xl overflow-hidden border border-white/5 bg-[#09090F] group/img">
                    <div className="relative h-[200px] w-full">
                      <img
                        src={item.beforeImg}
                        alt="Before draft template"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale opacity-40 group-hover/img:grayscale-0 transition-all duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-red-600/90 text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        Generic Default
                      </span>
                    </div>
                    
                    {/* Before description details */}
                    <div className="p-4 bg-brand-dark flex flex-col gap-1.5 flex-grow border-t border-white/5">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">Before Engagement</span>
                      <div className="flex gap-2 items-start text-xs text-neutral-400 font-light">
                        <span className="text-red-500 font-bold">✖</span>
                        <span>{item.beforeStats}</span>
                      </div>
                    </div>
                  </div>

                  {/* After state with glowing neon border */}
                  <div className="flex flex-col relative rounded-2xl overflow-hidden border border-neon-blue bg-[#0B0B14] group/img shadow-[0_0_20px_rgba(0,229,255,0.15)] animate-pulse-slow">
                    <div className="relative h-[200px] w-full">
                      <img
                        src={item.afterImg}
                        alt="After custom portfolio graphics"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 right-3 bg-cyan-400 text-black font-semibold font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-md shadow-lg shadow-cyan-400/20 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-black animate-spin-slow" />
                        AB Graphics custom
                      </span>
                    </div>

                    {/* After description details */}
                    <div className="p-4 bg-[#0A0A12] flex flex-col gap-1.5 flex-grow border-t border-cyan-500/10">
                      <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">After Conversion Optimization</span>
                      <div className="flex gap-2 items-start text-xs font-semibold text-neutral-200">
                        <span className="text-cyan-400 font-bold">✔</span>
                        <span className="flex items-center gap-1 text-white">
                          {item.afterStats}
                          <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
