import React, { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';
import {
  Palette, Compass, Milestone, RectangleHorizontal, Sparkles, Instagram,
  Film, TrendingUp, Facebook, Megaphone, Search, MapPin,
  MessageCircleCode, Bot, Users, Target, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Help component to resolve icons dynamically
const IconResolver = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "Palette": return <Palette className={className} />;
    case "Compass": return <Compass className={className} />;
    case "Milestone": return <Milestone className={className} />;
    case "RectangleHorizontal": return <RectangleHorizontal className={className} />;
    case "Sparkles": return <Sparkles className={className} />;
    case "Instagram": return <Instagram className={className} />;
    case "Film": return <Film className={className} />;
    case "TrendingUp": return <TrendingUp className={className} />;
    case "Facebook": return <Facebook className={className} />;
    case "Megaphone": return <Megaphone className={className} />;
    case "Search": return <Search className={className} />;
    case "MapPin": return <MapPin className={className} />;
    case "MessageCircleCode": return <MessageCircleCode className={className} />;
    case "Bot": return <Bot className={className} />;
    case "Users": return <Users className={className} />;
    case "Target": return <Target className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'marketing' | 'ads' | 'growth'>('all');

  const tabs = [
    { id: 'all', name: 'All Services' },
    { id: 'design', name: 'Premium Design' },
    { id: 'marketing', name: 'Social & Funnels' },
    { id: 'ads', name: 'Paid Ads' },
    { id: 'growth', name: 'Growth Systems' }
  ];

  const filteredServices = SERVICES_DATA.filter(
    (service) => activeTab === 'all' || service.category === activeTab
  );

  const getCategoryTagClass = (cat: string) => {
    switch (cat) {
      case 'design': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'marketing': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'ads': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'growth': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
    }
  };

  const handleInquireService = (title: string) => {
    // Generate text message and open WhatsApp
    const msg = `Hello AB Graphics, I am interested in your "${title}" service. Please share details of your options and packages. thank you.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919307643461?text=${encoded}`, '_blank');
  };

  return (
    <section id="services" className="relative py-24 z-10 bg-[#07070A] overflow-hidden">
      {/* Lights background */}
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] rounded-full ambient-neon-glow-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-neon-blue uppercase block mb-3">
            Creative & Marketing Catalog
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Comprehensive Digital Growth Frameworks
          </h2>
          <p className="mt-4 text-neutral-400 font-sans font-light">
            We provide absolute custom execution across 16 core business domains. Click on any service to start an immediate inquiry on WhatsApp.
          </p>
        </div>

        {/* Tab Filters Menu */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:bg-white/[0.02] sm:border sm:border-white/5 p-1.5 sm:rounded-full max-w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-black font-bold shadow-glow-blue'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Services Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                viewport={{ once: true }}
                onClick={() => handleInquireService(service.title)}
                className="glassmorphism rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col group cursor-pointer relative overflow-hidden"
              >
                {/* Floating shine layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div className="flex items-center justify-between gap-4 mb-4">
                  {/* Icon Panel with glowing background */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] group-hover:bg-gradient-to-r group-hover:from-neon-blue/10 group-hover:to-neon-purple/10 group-hover:border-neon-blue/20 transition-all duration-300">
                    <IconResolver name={service.iconName} className="w-5 h-5 text-neutral-300 group-hover:text-neon-blue transition-colors duration-300" />
                  </div>
                  
                  {/* Category Pill Tag */}
                  <span className={`text-[9px] font-mono tracking-widest uppercase border px-2 py-0.5 rounded-full ${getCategoryTagClass(service.category)}`}>
                    {service.category}
                  </span>
                </div>

                {/* Service Details */}
                <h3 className="font-display font-bold text-base text-neutral-100 mt-2 mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Custom action CTA footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.03] group-hover:border-white/10 transition-colors mt-auto">
                  <span className="font-mono text-[10px] tracking-widest text-[#00E5FF] group-hover:text-white transition-colors uppercase leading-none">
                    Inquire On WA
                  </span>
                  <div className="p-1 rounded-full bg-white/[0.03] border border-white/[0.05] group-hover:bg-neon-blue group-hover:border-transparent group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
