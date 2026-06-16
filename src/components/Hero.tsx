import React from 'react';
import Logo from './Logo';
import { ArrowRight, Sparkles, Send, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenAdvisor: () => void;
}

export default function Hero({ onOpenAdvisor }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background grids and glowing accent nodes */}
      <div className="absolute inset-0 z-0 bg-[#040406]">
        {/* Futuristic glowing particles */}
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full ambient-neon-glow-blue pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full ambient-neon-glow-purple pointer-events-none" />
        <div className="absolute top-[40%] right-[20%] w-[250px] h-[250px] rounded-full ambient-neon-glow-orange pointer-events-none" />
        <div className="absolute bottom-[5%] left-[15%] w-[300px] h-[300px] rounded-full ambient-neon-glow-pink pointer-events-none" />

        {/* Cyberpunk grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Small Glowing Header Token */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-neon-blue text-xs tracking-wider uppercase font-mono mb-5"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          The Premier Design & Lead-Gen Agency
        </motion.div>

        {/* Scaled Multi-Gradient Official Logo with premium pulsing neon glows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative w-[220px] sm:w-[280px] md:w-[360px] select-none group"
        >
          {/* Subtle neon glowing base to eradicate any square background perception */}
          <div className="absolute inset-[-10px] bg-gradient-to-tr from-cyan-500/30 via-purple-600/30 to-orange-500/30 rounded-full filter blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-pulse" />
          <Logo showText={true} textSize="lg" className="mx-auto relative z-10" />
        </motion.div>

        {/* Subtitle / Value Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-neutral-400 font-sans text-base sm:text-lg md:text-xl leading-relaxed font-light px-2 animate-fade-in"
        >
          Experience handcrafted visual assets and aggressive demographic growth funnels engineered to convert visual attention into direct high-intent revenue.
        </motion.p>

        {/* Primary Navigation Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-md px-4"
        >
          {/* AI Advisor Button */}
          <button
            onClick={onOpenAdvisor}
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-sans text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink shadow-glow-blue transition-all duration-300 hover:scale-[1.04]"
          >
            Launch AI Growth Advisor
            <ArrowRight className="w-4 h-4 text-black animate-pulse" />
          </button>

          {/* Inquiry / WhatsApp Button */}
          <a
            href="#inquiry"
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-white/10 hover:border-orange-500/50 hover:text-orange-400 font-sans text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-all duration-300 hover:scale-[1.04] bg-white/[0.02]"
          >
            Get Free Brand Audit
            <Send className="w-4 h-4 ml-1 text-orange-400" />
          </a>
        </motion.div>

        {/* Phone details badge below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-neutral-400 text-xs font-mono tracking-widest uppercase border-t border-white/5 pt-8 w-full max-w-lg"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Est. India</span>
          </div>
          <div className="hidden sm:block text-neutral-600">|</div>
          <a href="tel:9307643461" className="flex items-center gap-1.5 hover:text-neon-blue transition-colors">
            <PhoneCall className="w-3.5 h-3.5" />
            9307643461
          </a>
          <div className="hidden sm:block text-neutral-600">|</div>
          <a href="https://www.instagram.com/ab_studioindia" target="_blank" rel="noreferrer" className="hover:text-neon-pink transition-colors">
            @ab_studioindia
          </a>
        </motion.div>
      </div>
    </section>
  );
}
