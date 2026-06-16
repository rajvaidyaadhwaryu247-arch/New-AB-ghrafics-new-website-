import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenAdvisor: () => void;
}

export default function Navbar({ onOpenAdvisor }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'AI Advisor', onClick: onOpenAdvisor },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'glassmorphism border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <Logo showText={false} className="w-10 h-10 md:w-12 md:h-12" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-white tracking-[0.14em] text-md md:text-lg leading-none">
                  AB GRAPHICS
                </span>
                <span className="text-[9px] text-neutral-400 font-mono tracking-widest mt-0.5">
                  DIGITAL MARKETING
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.onClick ? (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="font-sans text-sm text-neutral-300 font-medium tracking-wide hover:text-[#00E5FF] transition-colors duration-205 cursor-pointer bg-transparent border-none outline-none"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-sans text-sm text-neutral-300 font-medium tracking-wide hover:text-[#00E5FF] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>

            {/* Desktop Call/WA Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:9307643461"
                className="flex items-center gap-2 pl-4 pr-3 py-2 border border-white/10 rounded-full hover:border-[#00E5FF] hover:text-[#00E5FF] font-mono text-xs tracking-wider transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                9307643461
              </a>
              <a
                href="#inquiry"
                className="px-6 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#00E5FF] to-purple-600 shadow-glow-blue transition-all duration-300 hover:scale-[1.04]"
              >
                Inquire Now
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-[280px] z-50 glassmorphism border-l border-white/10 p-6 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] lg:hidden"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                <div className="flex items-center gap-2">
                  <Logo showText={false} className="w-8 h-8" />
                  <span className="font-display font-bold text-sm tracking-widest text-white">
                    AB GRAPHICS
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 font-medium">
                {navLinks.map((link) => (
                  link.onClick ? (
                    <button
                      key={link.name}
                      onClick={() => {
                        link.onClick?.();
                        setIsOpen(false);
                      }}
                      className="text-neutral-300 hover:text-[#00E5FF] font-sans text-left text-base transition-colors py-2 bg-transparent border-none outline-none cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-neutral-300 hover:text-[#00E5FF] font-sans text-base transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  )
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-4">
                <a
                  href="tel:9307643461"
                  className="flex items-center gap-3 justify-center py-3 rounded-xl border border-white/10 text-neutral-300 text-sm font-mono tracking-wider hover:border-cyan-400 hover:text-cyan-400 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call: 9307643461
                </a>
                <a
                  href="https://wa.me/919307643461"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 justify-center py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 text-sm font-sans font-medium transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <a
                  href="#inquiry"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-neon-blue to-neon-purple shadow-glow-blue"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
