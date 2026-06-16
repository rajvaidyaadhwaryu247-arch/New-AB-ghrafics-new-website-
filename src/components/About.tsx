import React from 'react';
import { Sparkles, Palette, Zap, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const highlights = [
    {
      icon: <Palette className="w-5 h-5 text-neon-blue" />,
      title: "Handcrafted Visual Masterpieces",
      desc: "Absolutely zero cookie-cutter templates. We write vectors, custom color grading, and custom text hierarchies from scratch."
    },
    {
      icon: <Zap className="w-5 h-5 text-neon-orange" />,
      title: "Conversion-Engineered Layouts",
      desc: "Every highlight, border glow, and margin space is strategically placed to navigate user focus towards direct actions."
    }
  ];

  return (
    <section id="about" className="relative py-24 z-10 overflow-hidden bg-[#050508]">
      {/* Light nodes */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full ambient-neon-glow-pink pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text details */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neon-pink uppercase mb-4">
              <Sparkles className="w-4 h-4" />
              Creative DNA & Craftsmanship
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Why We Standardize on <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange bg-clip-text text-transparent">Pristine Creative</span> Excellence
            </h2>

            <p className="mt-6 text-neutral-300 font-sans text-base leading-relaxed font-light">
              In a digital market saturated with generic templates, mediocrity has become the standard. At AB Graphics, we reject default templates and cheap automated layouts. True digital craftsmanship means building layouts that establish real-time authority from the very first frame.
            </p>

            <p className="mt-4 text-neutral-400 font-sans text-sm leading-relaxed font-light">
              We operate exclusively under our Design & Science paradigm, blending custom high-performance color palettes with precise local seo mapping and conversation-driven WhatsApp automations to capture and retain high-ticket clients.
            </p>

            {/* highlights items */}
            <div className="mt-8 flex flex-col gap-6">
              {highlights.map((ref, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="p-3 h-fit rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    {ref.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-100">
                      {ref.title}
                    </h4>
                    <p className="font-sans text-xs text-neutral-400 mt-1 leading-relaxed">
                      {ref.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Layout graphics */}
          <div className="lg:col-span-5 relative">
            <div className="glassmorphism rounded-3xl p-8 border border-white/5 relative z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
              
              {/* Glossy top tab line */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  AB Workflow Architecture
                </span>
                <span className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </span>
              </div>

              {/* Wireframe workflow list */}
              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest leading-none mb-1">
                      01 / Brand Discovery
                    </span>
                    <span className="text-sm font-semibold text-white">Visual Audits & Analytics</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">Active</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest leading-none mb-1">
                      02 / Style Conception
                    </span>
                    <span className="text-sm font-semibold text-white">Pixel-Perfect Vector Drafts</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">Scheduled</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-pink-400 uppercase tracking-widest leading-none mb-1">
                      03 / Funnel Deployment
                    </span>
                    <span className="text-sm font-semibold text-white">Meta campaigns & WhatsApp Auto</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">A/B Testing</span>
                </div>
              </div>

              {/* Little quote panel */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-orange-500/5 to-pink-500/5 border border-orange-500/10 flex gap-3">
                <MessageSquareQuote className="w-5 h-5 text-neon-orange flex-shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-400 leading-relaxed font-light italic">
                  &quot;Handcrafted layout assets see up to 4x higher audience retention than standard defaults.&quot;
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
