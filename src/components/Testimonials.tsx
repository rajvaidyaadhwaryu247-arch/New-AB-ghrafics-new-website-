import React from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 z-10 bg-[#050508] overflow-hidden">
      {/* Glow panels */}
      <div className="absolute left-[40%] bottom-[10%] w-[450px] h-[450px] rounded-full ambient-neon-glow-pink pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#EC4899] uppercase block mb-3">
            Corporate Praise &amp; Growth Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Loved By Business Owners
          </h2>
          <p className="mt-4 text-neutral-400 font-sans font-light">
            Read direct visual branding and digital campaign reviews from actual corporate clients who scaled their customer volumes.
          </p>
        </div>

        {/* Testimonials Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={item.id}
              className="glassmorphism rounded-3xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between hover:border-pink-500/20 transition-all duration-300 relative group"
            >
              {/* Floating Quote Symbol */}
              <div className="absolute top-6 right-8 text-white/[0.02] group-hover:text-pink-500/5 transition-colors pointer-events-none">
                <Quote className="w-24 h-24 stroke-[1.5]" />
              </div>

              <div>
                {/* 5-star rating bar */}
                <div className="flex gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed font-light italic relative z-10">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Client detailed bios */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5 relative z-10">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-neutral-100">
                    {item.name}
                  </span>
                  <span className="text-[10px] sm:text-xs text-neutral-400 font-sans mt-0.5">
                    {item.role}, <span className="text-pink-400 font-medium">{item.company}</span>
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
