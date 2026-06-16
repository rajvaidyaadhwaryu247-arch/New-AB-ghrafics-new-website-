import React from 'react';
import { CASE_STUDIES_DATA } from '../data';
import { CaseStudy } from '../types';
import { Award, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 z-10 bg-[#050508] overflow-hidden">
      {/* Background color glows */}
      <div className="absolute left-[-10%] top-[40%] w-[450px] h-[450px] rounded-full ambient-neon-glow-orange pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#F97316] uppercase block mb-3">
            Analytical Growth Milestones
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Proof in Analytics: Case Studies
          </h2>
          <p className="mt-4 text-neutral-400 font-sans font-light">
            We operate on objective financial goals: reducing lead costs, boosting visual attention metrics, and increasing closing rates. Explore real campaign outputs.
          </p>
        </div>

        {/* Case Studies Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES_DATA.map((study, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={study.id}
              className="glassmorphism rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-orange-500/20 hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-300 relative group overflow-hidden"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest leading-none mb-1">
                      {study.industry}
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-white">
                      {study.clientName}
                    </h3>
                  </div>
                  
                  {/* Rotating award icon */}
                  <div className="p-2 rounded-xl bg-orange-500/5 border border-orange-500/10 group-hover:bg-gradient-to-r group-hover:from-orange-500/10 group-hover:to-pink-500/10 transition-colors">
                    <Award className="w-5 h-5 text-neon-orange" />
                  </div>
                </div>

                {/* Challenge & Solution details */}
                <div className="flex flex-col gap-5 mb-8">
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                      The Battle / Challenge
                    </span>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                      The Strategy / Executed Solution
                    </span>
                    <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                      {study.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* High-impact Metrics foot area */}
              <div className="mt-auto pt-6 border-t border-white/5 flex flex-col justify-between">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                  Campaign Results & Metrics
                </span>
                
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-display font-extrabold text-2xl text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text">
                      {study.metrics}
                    </span>
                    <span className="text-[9px] text-neutral-400 font-sans tracking-wide mt-0.5">
                      Target Completed
                    </span>
                  </div>

                  {study.roas && (
                    <div className="flex flex-col items-end">
                      <span className="font-display font-bold text-lg text-emerald-400 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {study.roas}
                      </span>
                      <span className="text-[9px] text-neutral-400 font-sans tracking-wide mt-0.5">
                        Average ROAS
                      </span>
                    </div>
                  )}
                </div>

                {/* Tags lists */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-mono text-neutral-400 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
