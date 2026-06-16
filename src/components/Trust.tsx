import React from 'react';
import { ShieldCheck, CalendarRange, Medal, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Trust() {
  const trustMetrics = [
    {
      icon: <Medal className="w-6 h-6 text-neon-blue" />,
      title: "Meta Certified Solutions",
      desc: "Pixel integration, custom target campaigns & scale tracking"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-neon-purple" />,
      title: "Google Ads Specialist",
      desc: "Dominant organic local SEO & high-intent search campaign models"
    },
    {
      icon: <CalendarRange className="w-6 h-6 text-neon-orange" />,
      title: "WhatsApp Tech Partner",
      desc: "Fast, automated notification rules & client response triggers"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-neon-pink" />,
      title: "100% Custom Execution",
      desc: "Absolutely no generic Canva templates. Fully certified custom designers"
    }
  ];

  return (
    <section className="relative py-12 z-10 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism rounded-3xl p-8 md:p-10 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          
          {/* Section banner */}
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              AB Graphics Trust Standards
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl mt-1 text-white">
              Official Marketing Partnerships & Standards
            </h3>
          </div>

          {/* Trust points list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trustMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-white/10 transition-all duration-300"
              >
                <div className="p-3 h-fit rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-semibold text-sm text-neutral-100">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-neutral-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
