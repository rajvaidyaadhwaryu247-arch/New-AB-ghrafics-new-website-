import React, { useState, useEffect, useRef } from 'react';
import { Target, TrendingUp, Users, Presentation } from 'lucide-react';
import { motion } from 'motion/react';

interface CounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
}

function DigitCounter({ end, suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (countRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Start count animation
            let startTime: number | null = null;
            const duration = 1800; // 1.8 seconds counts

            const animate = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const currentVal = progress * end;
              
              setCount(currentVal);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(animate);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(countRef.current);
    }

    return () => {
      if (observer && countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, hasAnimated]);

  return (
    <span ref={countRef} className="font-display font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function ResultsCounter() {
  const stats = [
    {
      id: "stat-projects",
      label: "Visual Projects Completed",
      value: 450,
      suffix: "+",
      decimals: 0,
      icon: <Presentation className="w-5 h-5 text-neon-blue" />,
      glowColor: "cyan"
    },
    {
      id: "stat-roas",
      label: "Average Campaign ROAS",
      value: 4.8,
      suffix: "x",
      decimals: 1,
      icon: <TrendingUp className="w-5 h-5 text-neon-orange" />,
      glowColor: "orange"
    },
    {
      id: "stat-clients",
      label: "Active Accounts Retained",
      value: 98,
      suffix: "%",
      decimals: 0,
      icon: <Users className="w-5 h-5 text-neon-purple" />,
      glowColor: "purple"
    },
    {
      id: "stat-views",
      label: "Organic Video Views",
      value: 12.5,
      suffix: "M+",
      decimals: 1,
      icon: <Target className="w-5 h-5 text-neon-pink" />,
      glowColor: "pink"
    }
  ];

  return (
    <section className="relative py-20 z-10 overflow-hidden bg-[#07070A]">
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#00E5FF] uppercase block mb-3">
            VERIFIED BRAND PERFORMANCE Metrics
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Our Strategy Scales Brands. Period.
          </h2>
          <p className="mt-4 text-neutral-400 font-sans font-light">
            We don't sell vanity likes or blank metrics. We track, modify, and optimize actual sales volume, client inquiries, and professional grade visual retention.
          </p>
        </div>

        {/* Counters grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-6 border border-white/5 flex flex-col items-center text-center group hover:border-white/10 transition-colors"
            >
              {/* Rotating Badge Indicator */}
              <div className="p-3.5 rounded-full bg-white/[0.02] border border-white/[0.05] mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Number Counter */}
              <div className="flex items-baseline gap-1 mt-1">
                <DigitCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>

              {/* Label */}
              <h3 className="font-sans font-medium text-xs sm:text-sm text-neutral-400 uppercase tracking-widest mt-3">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
