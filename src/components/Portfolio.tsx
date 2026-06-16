import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem } from '../types';
import { Eye, X, MessageSquare, Play, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'education' | 'posters' | 'branding' | 'social_media' | 'reels' | 'marketing_creatives'
  >('all');
  
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterTabs = [
    { id: 'all', name: 'All Masterpieces' },
    { id: 'education', name: 'Education' },
    { id: 'posters', name: 'Posters' },
    { id: 'branding', name: 'Branding Suite' },
    { id: 'social_media', name: 'Social Media' },
    { id: 'reels', name: 'Reels / Video' },
    { id: 'marketing_creatives', name: 'Marketing Creatives' }
  ];

  const filteredPortfolio = PORTFOLIO_DATA.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const handleConsult = (item: PortfolioItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello AB Graphics! I was browsing your professional portfolio gallery and fell in love with your design project "${item.title}" [category: ${item.category}]. I want to deploy a similar elite aesthetic solution for my business!`;
    window.open(`https://wa.me/919307643461?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="portfolio" className="relative py-24 z-10 bg-[#07070A] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute left-[30%] bottom-[-10%] w-[500px] h-[500px] rounded-full ambient-neon-glow-pink pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-[#00E5FF] uppercase block mb-3">
            Agency Creative Showcase
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Our Selected Design Masterpieces
          </h2>
          <p className="mt-4 text-neutral-400 font-sans font-light">
            Each asset represents pixel-perfect execution tailored to build real-time brand authorization. Explore filters to view client outputs.
          </p>
        </div>

        {/* Brand Notice */}
        <div className="mb-12 max-w-2xl mx-auto p-4 rounded-2xl glassmorphism border border-cyan-500/20 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-4 h-4 animate-pulse text-cyan-400" />
            Designed For High Performance (Image & Video Lightbox Active)
          </div>
          <p className="text-xs text-neutral-300 font-sans font-light mt-1.5 leading-relaxed">
            Click on any design to open the high-fidelity immersive lightbox view. View reels and motion posters in smooth native playback.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-black shadow-[0_4px_15px_rgba(34,211,238,0.4)]'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-3xl overflow-hidden glassmorphism border border-white/5 shadow-2xl h-[390px] flex flex-col cursor-pointer hover:border-[#00E5FF]/30 transition-all duration-300"
                id={`portfolio-item-${item.id}`}
              >
                {/* Image / Video thumbnail Wrap */}
                <div className="relative w-full h-[240px] overflow-hidden bg-black/40 flex items-center justify-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  
                  {item.videoUrl && (
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/20 text-cyan-400">
                      <Play className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                    </div>
                  )}

                  {/* Subtle vignette shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-90" />
                  
                  {/* Hover interaction button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-[#00E5FF] text-black shadow-lg shadow-[#00E5FF]/30 transform scale-75 group-hover:scale-100 transition-transform duration-350">
                      <Eye className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>

                {/* Info area */}
                <div className="p-6 bg-[#0A0A0F] flex-grow flex flex-col justify-between border-t border-white/5 relative z-10">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#00E5FF] uppercase block mb-1">
                      {tabLabels[item.category] || item.category}
                    </span>
                    <h3 className="font-display font-bold text-sm text-neutral-100 group-hover:text-white transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-neutral-400 mt-2 leading-relaxed font-light line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-end mt-3 pt-3 border-t border-white/[0.03]">
                    <button
                      onClick={(e) => handleConsult(item, e)}
                      className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3 h-3 text-cyan-400" />
                      Consult Setup
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* IMMERSIVE PORTFOLIO LIGHTBOX VIEW */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-4xl bg-[#09090e] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[85vh] md:h-auto"
            >
              {/* Media viewer */}
              <div className="flex-1 bg-black flex items-center justify-center relative p-2 min-h-[300px] md:min-h-[450px]">
                {selectedItem.videoUrl ? (
                  <video
                    src={selectedItem.videoUrl}
                    autoPlay
                    loop
                    controls
                    playsInline
                    className="max-w-full max-h-[50vh] md:max-h-[75vh] object-contain rounded-xl"
                  />
                ) : (
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[50vh] md:max-h-[75vh] object-contain rounded-xl"
                  />
                )}

                {/* Media type overlay badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-cyan-300 rounded">
                  {selectedItem.videoUrl ? 'Interactive Motion Reel' : 'HD Design Layout'}
                </span>
              </div>

              {/* Sidebar Info column */}
              <div className="w-full md:w-[320px] bg-[#0c0c12] p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-2.5 py-1 bg-cyan-400/10 border border-cyan-400/20 text-[#00E5FF] text-[9px] font-mono uppercase tracking-wider rounded">
                      {tabLabels[selectedItem.category] || selectedItem.category}
                    </span>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
                      aria-label="Close Lightbox"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white leading-tight mb-3">
                    {selectedItem.title}
                  </h3>

                  <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light whitespace-pre-line">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                  <button
                    onClick={(e) => {
                      const mockEvt = e as unknown as React.MouseEvent;
                      handleConsult(selectedItem, mockEvt);
                    }}
                    className="w-full py-3 sm:py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#00E5FF] to-cyan-300 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,229,255,0.25)]"
                  >
                    <MessageSquare className="w-4 h-4 text-black" />
                    Deploy This Layout
                  </button>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-2.5 rounded-lg border border-white/5 text-xs text-neutral-400 hover:text-white hover:bg-white/5 font-mono tracking-wider uppercase transition-all"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

const tabLabels: Record<string, string> = {
  education: "Education Creative",
  posters: "Posters Creative",
  branding: "Brand Strategy Identity",
  social_media: "Social Post Deliverables",
  reels: "Interactive Reels & Video",
  marketing_creatives: "Performance Marketing Creatives"
};
