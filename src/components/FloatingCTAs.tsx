import React from 'react';
import { Phone, MessageSquare, Cpu, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingCTAsProps {
  onOpenAdvisor: () => void;
}

export default function FloatingCTAs({ onOpenAdvisor }: FloatingCTAsProps) {
  return (
    <>
      {/* ALWAYS VISIBLE BOTTOM LEFT: Call Now */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-40">
        <motion.a
          href="tel:9307643461"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-400 to-[#18FFFF] text-black px-4.5 py-3 sm:px-5 sm:py-3.5 rounded-full flex items-center gap-2 font-sans font-extrabold text-[10px] sm:text-xs uppercase tracking-widest shadow-[0_8px_30px_rgba(6,182,212,0.45)] transition-all duration-350"
          id="floating-call-now"
          aria-label="Call Now"
        >
          <Phone className="w-3.5 h-3.5 text-black animate-pulse" />
          <span>Call Now</span>
        </motion.a>
      </div>

      {/* BOTTOM RIGHT FLOATING STACK */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
        
        {/* 1. AI Orb (highest / on top) */}
        <motion.button
          onClick={onOpenAdvisor}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(0,229,255,0.3)",
              "0 0 35px rgba(0,229,255,0.55), 0 0 15px rgba(168,85,247,0.35)",
              "0 0 20px rgba(0,229,255,0.3)"
            ],
          }}
          transition={{
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative flex items-center justify-center w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] rounded-full border border-cyan-400/40 bg-[#09090E]/90 backdrop-blur-md text-white cursor-pointer group shadow-[0_0_20px_rgba(0,229,255,0.3)] z-10"
          id="floating-ai-advisor"
          aria-label="AB Graphics AI Growth Advisor"
        >
          {/* Subtle neon gradients and glows inside the circular orb */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/10 via-transparent to-purple-500/20 pointer-events-none" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
          
          <Cpu className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 text-[#00E5FF] group-hover:rotate-12 transition-transform duration-300" />
        </motion.button>

        {/* 2. WhatsApp (middle) */}
        <motion.a
          href="https://wa.me/919307643461"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="flex items-center justify-center w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#10B981] hover:bg-[#059669] text-white shadow-[0_8px_25px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
          id="floating-whatsapp"
          aria-label="WhatsApp with AB Graphics"
        >
          <MessageSquare className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
        </motion.a>

        {/* 3. Instagram (bottom-most) */}
        <motion.a
          href="https://www.instagram.com/ab_studioindia"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="flex items-center justify-center w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 text-white shadow-[0_8px_25px_rgba(236,72,153,0.3)] transition-all cursor-pointer"
          id="floating-instagram"
          aria-label="Instagram AB Graphics Profile"
        >
          <Instagram className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
        </motion.a>

      </div>
    </>
  );
}
