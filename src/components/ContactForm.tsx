import React, { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { Phone, MessageSquare, Instagram, Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !businessName || !service || !budget) {
      alert("Please fill out all required fields.");
      return;
    }

    // Design neat formatted WhatsApp block
    const textMessage = `*NEW BRAND INQUIRY (AB Graphics Website)*\n` +
      `----------------------------------------\n` +
      `• *Client Name:* ${name}\n` +
      `• *Contact Phone:* ${phone}\n` +
      `• *Business Name:* ${businessName}\n` +
      `• *Service Required:* ${service}\n` +
      `• *Budget Range:* ${budget}\n` +
      `• *Brief Message:* ${message || "No custom message provided."}\n` +
      `----------------------------------------\n` +
      `Hello AB Graphics. I would like to arrange a consultation session regarding this request. please guide me on options.`;

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/919307643461?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="relative py-24 z-10 bg-[#07070A] overflow-hidden">
      {/* Light nodes */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full ambient-neon-glow-blue pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-neon-blue uppercase block mb-3">
            DIRECT SECURE CONNECTIVITY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Launch Your Brand Strategy Session
          </h2>
          <p className="mt-4 text-neutral-400 font-sans font-light">
            Fill out our smart inquiry form below. Submitting drafts a customized blueprint detail immediately transmitted directly to our official corporate WhatsApp pipeline.
          </p>
        </div>

        {/* 2-Column Contact Info / Form block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-stretch">
          
          {/* Left: Contact Info details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <span className="text-xs font-mono tracking-widest text-[#00E5FF] uppercase block mb-1">
                AB Graphics Office
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Contact Details &amp; Directory
              </h3>
              
              <p className="text-neutral-400 font-sans text-sm leading-relaxed font-light">
                Feel free to skip forms and interact with us directly through the official phone line, direct WhatsApp chat, or DM us on Instagram for immediate responses!
              </p>

              {/* Direct channels */}
              <div className="space-y-5">
                <a
                  href="tel:9307643461"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-colors group"
                >
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest leading-none mb-1">Call Dialer</span>
                    <span className="font-mono text-sm font-semibold text-white">9307643461</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919307643461"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#00e572]/[0.01] hover:bg-[#00e572]/[0.03] border border-white/5 transition-colors group"
                >
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-[#00e572] group-hover:text-black transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest leading-none mb-1">WhatsApp Chat</span>
                    <span className="font-mono text-sm font-semibold text-white">9307643461</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/ab_studioindia"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-colors group"
                >
                  <div className="p-3.5 rounded-xl bg-pink-500/10 text-pink-400 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-orange-500 group-hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest leading-none mb-1">Instagram Profile</span>
                    <span className="font-mono text-sm font-semibold text-white">@ab_studioindia</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability stats */}
            <div className="mt-12 p-5 rounded-2xl border border-white/[0.03] bg-white/[0.01] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
              <span className="text-xs font-sans text-neutral-400 font-light leading-relaxed">
                Active Office hours: <span className="text-white font-medium">9:00 AM - 9:00 PM (IST)</span>. Average response times under 15 minutes!
              </span>
            </div>
          </div>

          {/* Right: Smart Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl relative h-full flex flex-col justify-center">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center"
                >
                  <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="font-display font-extrabold text-2xl text-white">
                    Inquiry Generated Successfully!
                  </h4>
                  <p className="mt-3 text-neutral-400 text-sm font-light leading-relaxed max-w-sm mx-auto">
                    A formatted design specification dossier has been drafted and directed to our brand desk on WhatsApp. We look forward to talking!
                  </p>
                  
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-xs font-mono text-cyan-400 uppercase tracking-widest hover:text-white transition-all border-b border-cyan-400 hover:border-white"
                  >
                    Generate another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.01] border border-white/10 text-white font-sans text-sm focus:border-neon-blue focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                        WhatsApp Mobile <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.01] border border-white/10 text-white font-mono text-sm focus:border-neon-blue focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Business Name & Service required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Company/Store Name"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.01] border border-white/10 text-white font-sans text-sm focus:border-neon-blue focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                        Service Required <span className="text-rose-500">*</span>
                      </label>
                      <select
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#09090D] border border-white/10 text-white font-sans text-sm focus:border-neon-blue focus:outline-none transition-colors"
                      >
                        <option value="">-- Choose Campaign Type --</option>
                        {SERVICES_DATA.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget scale */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                      Budget Scale Required <span className="text-rose-500">*</span>
                    </label>
                    <select
                      required
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#09090D] border border-white/10 text-white font-sans text-sm focus:border-neon-blue focus:outline-none transition-colors"
                    >
                      <option value="">-- Select Budget Range --</option>
                      <option value="Lite Starter Project Group (Rs. 10k - 20k)">Lite Starter Project Group (Rs. 10k - 20k)</option>
                      <option value="Mid-Scale Campaign Testing Growth (Rs. 20k - 50k)">Mid-Scale Campaign Testing Growth (Rs. 20k - 50k)</option>
                      <option value="Full Dominance Scale & Custom Systems (Rs. 50k - 1 Lakh+)">Full Dominance Scale & Custom Systems (Rs. 50k - 1 Lakh+)</option>
                    </select>
                  </div>

                  {/* Message details */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                      Message Details
                    </label>
                    <textarea
                      placeholder="Brief your design/campaign targets, social links, or current conversion blocks..."
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.01] border border-white/10 text-white font-sans text-sm focus:border-neon-blue focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Inquiry button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest text-black bg-[#00E5FF] shadow-glow-blue hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2.5"
                    >
                      Inquire on WhatsApp
                      <Send className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
