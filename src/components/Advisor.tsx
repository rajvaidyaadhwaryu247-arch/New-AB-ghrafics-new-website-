import React, { useState } from 'react';
import { Cpu, X, ArrowRight, CheckCircle2, RefreshCw, Send, Sparkles, Star, ShieldAlert, AlertTriangle, TrendingUp, Zap, BarChart3, Calendar, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AdvisorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AdvisorResult {
  businessAnalysis: string;
  marketingProblems: string[];
  growthOpportunities: string[];
  recommendedActions: string[];
  recommendedServices: string[];
  recommendedPackage: string;
  roadmap30Days: string;
  roadmap60Days: string;
  roadmap90Days: string;
  marketingStrategy: string;
}

export default function Advisor({ isOpen, onClose }: AdvisorProps) {
  const [step, setStep] = useState<'input' | 'loading' | 'result'>('input');
  
  // Custom 8 parameters form state
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [city, setCity] = useState('');
  const [instagram, setInstagram] = useState('');
  const [budget, setBudget] = useState('');
  const [currentMethod, setCurrentMethod] = useState('');
  const [goal, setGoal] = useState('');
  const [monthlyCustomers, setMonthlyCustomers] = useState('');

  const [loadingText, setLoadingText] = useState('Initializing Brand Discovery...');
  const [result, setResult] = useState<AdvisorResult | null>(null);
  const [error, setError] = useState('');

  const runSpinnerDemo = () => {
    const messages = [
      "Analyzing business identity and local profile...",
      "Mapping customer avatar demographics & density...",
      "Evaluating visual branding & content assets...",
      "Calculating target market visibility in your city...",
      "Matching ideal media channels and spend profiles...",
      "Generating strategic design & lead recommendations...",
      "Finalizing AB Graphics audit report..."
    ];

    messages.forEach((msg, idx) => {
      setTimeout(() => {
        setLoadingText(msg);
      }, (idx + 1) * 600);
    });
  };

  const handleRunAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !businessType || !city || !goal) {
      setError("Please fill out the required parameters: Business Name, Business Type, City, and Main Goal.");
      return;
    }

    setError('');
    setStep('loading');
    runSpinnerDemo();

    try {
      const response = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName,
          businessType,
          city,
          instagram,
          budget: budget || 'Not Provided',
          currentMethod: currentMethod || 'Not Provided',
          goal,
          monthlyCustomers: monthlyCustomers || 'Not Provided'
        })
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status + ": fallback triggered.");
      }

      const data: AdvisorResult = await response.json();
      
      setTimeout(() => {
        setResult(data);
        setStep('result');
      }, 4500);

    } catch (err: any) {
      console.warn("API Server unavailable or returned error, initiating robust client-side Fallback Smart Mode: ", err);
      
      const suggestedServices: string[] = [];
      const gLower = goal.toLowerCase();
      if (gLower.includes("lead") || gLower.includes("sale") || gLower.includes("customer")) {
        suggestedServices.push("Lead Generation", "Meta Ads Management", "WhatsApp Automation");
      } else if (gLower.includes("brand") || gLower.includes("logo") || gLower.includes("authority")) {
        suggestedServices.push("Branding", "Logo Design", "Graphic Design");
      } else if (gLower.includes("reel") || gLower.includes("instagram") || gLower.includes("traffic")) {
        suggestedServices.push("Instagram Growth", "Reel Editing", "Social Media Design");
      } else {
        suggestedServices.push("Google Business Profile Setup", "Lead Generation", "Poster Design");
      }

      const pUpper = (budget || '').toUpperCase();
      let recommendedPackage = "Growth Package";
      if (pUpper.includes("STARTER") || pUpper.includes("10K")) {
        recommendedPackage = "Starter Package";
      } else if (pUpper.includes("PREMIUM") || pUpper.includes("75K")) {
        recommendedPackage = "Premium Package";
      }

      const fallbackData: AdvisorResult = {
        businessAnalysis: `For ${businessName}, operating in the competitive ${city} ${businessType} landscape, achieving your target of ${monthlyCustomers || "high-intent monthly clients"} requires a radical shift from legacy organic reach to high-authority visual design and systematic digital funnel strategy. Your current main focus is "${goal}", which requires immediate visual asset harmonization to build genuine market trust. Without conversion-optimized design elements, traditional advertising spend faces severe friction.`,
        marketingProblems: [
          `Lack of consistent high-contrast visual identity across digital customer-facing platforms.`,
          `High friction in lead tracking and physical response times, causing premium user dropout.`,
          `Weak local map search prominence and directory engagement in ${city}.`
        ],
        growthOpportunities: [
          `Leveraging high-hook vertical layout reels formats with call-to-action designs on Instagram.`,
          `Deploying high-efficiency Meta Performance ads mapping directly to custom WhatsApp chats.`,
          `Structuring localized search query capturing on google platforms to source local buyers.`
        ],
        recommendedActions: [
          `Re-establish custom vectors of company logo, graphics design system, and key landing templates.`,
          `Set up automated WhatsApp CRM auto-responders to immediately close inbound traffic.`,
          `Focus performance ads campaigns on regionalized demographic segments.`
        ],
        recommendedServices: suggestedServices,
        recommendedPackage: recommendedPackage,
        roadmap30Days: `Phase 1 (Branding & Identity): Completely synchronize ${businessName}'s digital assets under a unified typography and high-contrast color strategy. Develop custom high-fidelity logos, premium banners, and set up your optimized Google Business Profile to build local search trust in ${city}. Establish initial asset libraries for immediate publishing.`,
        roadmap60Days: `Phase 2 (Acquisition & Loop): Launch targeted social media campaigns utilizing premium vertical reel editing techniques with hook structures. Initiate local SEO citation building and launch conversion-focused local ad packages to drive qualified leads. Integrate automated message landing paths.`,
        roadmap90Days: `Phase 3 (Optimization & Scaling): Deploy automated WhatsApp sales triggers to convert active inquiries instantly into closed sales. Analyze campaign performance feedback, scale-up high conversion ad groups to support your ${monthlyCustomers || "target"} customer targets, and build premium retargeting campaigns.`,
        marketingStrategy: `Our chief strategic recommendation for ${businessName} is to establish brand-driven client acquisition. By pairing hand-crafted premium visual presentation with hyper-targeted lead capture systems, we bypass general platform fatigue and speak directly to luxury intents. AB Graphics is ready to execute this custom plan end-to-end to skyrocket your customer revenue.`
      };

      setTimeout(() => {
        setResult(fallbackData);
        setStep('result');
      }, 4500);
    }
  };

  const handleSendToWhatsApp = () => {
    if (!result) return;
    
    const problemsText = result.marketingProblems.map((s, i) => `  ${i+1}. ${s}`).join("\n");
    const opportunitiesText = result.growthOpportunities.map((s, i) => `  ${i+1}. ${s}`).join("\n");
    const actionsText = result.recommendedActions.map((s, i) => `  ${i+1}. ${s}`).join("\n");
    const servicesText = result.recommendedServices.map(s => `  • ${s}`).join("\n");

    const message = `*AB GRAPHICS - AI GROWTH STRATEGY REPORT* 🚀\n` +
      `----------------------------------------\n` +
      `• *Business Name:* ${businessName}\n` +
      `• *Business Type:* ${businessType}\n` +
      `• *City:* ${city}\n` +
      `• *Instagram:* @${instagram || "Not Provided"}\n` +
      `• *Goal:* ${goal}\n` +
      `• *Monthly Budget:* ${budget || "Not Provided"}\n` +
      `• *Current Method:* ${currentMethod || "Not Provided"}\n` +
      `• *Target Customers:* ${monthlyCustomers || "Not Provided"}\n\n` +
      `*BUSINESS ANALYSIS:*\n${result.businessAnalysis}\n\n` +
      `*MARKETING PROBLEMS:*\n${problemsText}\n\n` +
      `*GROWTH OPPORTUNITIES:*\n${opportunitiesText}\n\n` +
      `*RECOMMENDED ACTIONS:*\n${actionsText}\n\n` +
      `*RECOMMENDED PACKAGE:*\n🏆 ${result.recommendedPackage}\n\n` +
      `*SUGGESTED SERVICES:*\n${servicesText}\n\n` +
      `*30-DAY ROADMAP:*\n${result.roadmap30Days}\n\n` +
      `*60-DAY ROADMAP:*\n${result.roadmap60Days}\n\n` +
      `*90-DAY ROADMAP:*\n${result.roadmap90Days}\n\n` +
      `*CUSTOM STRATEGY:*\n${result.marketingStrategy}\n\n` +
      `----------------------------------------\n` +
      `Hello AB Graphics Expert! I just generated my detailed AI Business Strategy on your hub and would like to deploy these professional solutions for my business! Let's talk.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919307643461?text=${encoded}`, '_blank');
  };

  const handleReset = () => {
    setStep('input');
    setResult(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Panel content wrapper */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-xl bg-[#09090e]/95 border-l border-white/10 h-full flex flex-col shadow-2xl z-10 overflow-hidden glassmorphism"
          >
            {/* Custom Glowing lights inside panel */}
            <div className="absolute top-[10%] right-[10%] w-72 h-72 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-purple-500/5 blur-[80px] pointer-events-none" />

            {/* Panel Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 z-10 relative bg-black/40">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#00E5FF]">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white leading-none">
                    AB Graphics AI Growth Advisor
                  </h3>
                  <p className="text-[10px] font-mono tracking-widest text-purple-400 uppercase mt-1">
                    Powered by Gemini AI Engine
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                id="close-advisor-panel"
                aria-label="Close Advisor Panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Error Message banner */}
            {error && (
              <div className="mx-6 mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-200 text-xs flex gap-2.5 items-center relative z-10">
                <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Scrollable Container Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 z-10 relative">
              <AnimatePresence mode="wait">
                {/* 1. INPUT STEP */}
                {step === 'input' && (
                  <motion.form
                    key="step-input"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleRunAnalysis}
                    className="space-y-5 pb-8"
                  >
                    <div className="p-4 rounded-2xl bg-white/[0.02]/30 border border-white/5 text-xs text-neutral-300 leading-relaxed font-light mb-2">
                       Enter your brand specifications to calculate performance scores, compile design suggestions, and forge an automated WhatsApp client closing channel.
                    </div>

                    {/* Param 1: Business Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest font-mono">
                        Business Name <span className="text-[#00E5FF]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Zenith Realty, Bella Boutique"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e0e15] border border-white/10 text-white font-sans text-xs focus:border-[#00E5FF] focus:outline-none transition-colors placeholder:text-neutral-600"
                        id="advisor-business-name"
                      />
                    </div>

                    {/* Param 2: Business Type & Param 3: City (Grid) */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest font-mono">
                          Business Type <span className="text-[#00E5FF]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Real Estate, Cafe"
                          required
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#0e0e15] border border-white/10 text-white font-sans text-xs focus:border-[#00E5FF] focus:outline-none transition-colors placeholder:text-neutral-600"
                          id="advisor-business-type"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest font-mono">
                          City <span className="text-[#00E5FF]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mumbai, Pune"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#0e0e15] border border-white/10 text-white font-sans text-xs focus:border-[#00E5FF] focus:outline-none transition-colors placeholder:text-neutral-600"
                          id="advisor-city"
                        />
                      </div>
                    </div>

                    {/* Param 4: Instagram Username */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest font-mono">
                        Instagram Username
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-mono text-xs select-none">@</span>
                        <input
                          type="text"
                          placeholder="ab_studioindia"
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl bg-[#0e0e15] border border-white/10 text-white font-sans text-xs focus:border-[#00E5FF] focus:outline-none transition-colors placeholder:text-neutral-600"
                          id="advisor-instagram"
                        />
                      </div>
                    </div>

                    {/* Param 5: Monthly Budget */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest font-mono">
                        Monthly Marketing Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e0e15] border border-white/10 text-white font-sans text-xs focus:border-[#00E5FF] focus:outline-none transition-colors cursor-pointer"
                        id="advisor-budget"
                      >
                        <option value="">-- Choose Budget Range --</option>
                        <option value="Starter (Rs. 10k - 25k)">Starter (Rs. 10k - 25k)</option>
                        <option value="Growth (Rs. 25k - 75k)">Growth (Rs. 25k - 75k)</option>
                        <option value="Premium Scale (Rs. 75k+)">Premium Scale (Rs. 75k+)</option>
                      </select>
                    </div>

                    {/* Param 6: Current Marketing Method */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest font-mono">
                        Current Marketing Method
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Word of Mouth, Reels, No active marketing"
                        value={currentMethod}
                        onChange={(e) => setCurrentMethod(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e0e15] border border-white/10 text-white font-sans text-xs focus:border-[#00E5FF] focus:outline-none transition-colors placeholder:text-neutral-600"
                        id="advisor-current-method"
                      />
                    </div>

                    {/* Param 7: Main Goal */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest font-mono">
                        Main Growth Goal <span className="text-[#00E5FF]">*</span>
                      </label>
                      <select
                        required
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e0e15] border border-white/10 text-white font-sans text-xs focus:border-[#00E5FF] focus:outline-none transition-colors cursor-pointer"
                        id="advisor-main-goal"
                      >
                        <option value="">-- Select Main Objective --</option>
                        <option value="Lead Generation & Direct Client Sales">Lead Generation & Direct Client Sales</option>
                        <option value="Establish Premium Visual Brand Authority">Establish Premium Visual Brand Authority</option>
                        <option value="Scale Organic Instagram Reels Attention">Scale Organic Instagram Reels Attention</option>
                        <option value="Increase Map Traffic via Local Search SEO">Increase Map Traffic via Local Search SEO</option>
                      </select>
                    </div>

                    {/* Param 8: Target Monthly Customers */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest font-mono">
                        Monthly Target Customers
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15-30 premium clients, 500 orders"
                        value={monthlyCustomers}
                        onChange={(e) => setMonthlyCustomers(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e0e15] border border-white/10 text-white font-sans text-xs focus:border-[#00E5FF] focus:outline-none transition-colors placeholder:text-neutral-600"
                        id="advisor-target-customers"
                      />
                    </div>

                    {/* Bottom CTA trigger */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-cyan-400 via-[#00E5FF] to-purple-500 hover:scale-[1.01] active:scale-[0.99] transition-transform duration-300 shadow-[0_4px_25px_rgba(0,229,255,0.35)] flex items-center justify-center gap-2"
                        id="submit-advisor-form"
                      >
                        Launch Strategic AI Audit
                        <ArrowRight className="w-4 h-4 text-black" />
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* 2. LOADING STEP */}
                {step === 'loading' && (
                  <motion.div
                    key="step-loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-96 py-12 text-center"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full border-t-2 border-b-2 border-[#00E5FF] animate-spin" />
                      <Cpu className="absolute inset-0 m-auto w-8 h-8 text-purple-400 animate-pulse" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white mb-2">
                      Compiling Audit Intelligence...
                    </h4>
                    <p className="font-mono text-[10px] text-neutral-400 tracking-wider h-6 transition-all">
                      {loadingText}
                    </p>
                  </motion.div>
                )}

                {/* 3. RESULT STEP */}
                {step === 'result' && result && (
                  <motion.div
                    key="step-result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 pb-10"
                    id="advisor-result-view"
                  >
                    {/* Header Strategic Profile */}
                    <div className="p-5 rounded-2xl bg-[#0e0e15] border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none" />
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="w-5 h-5 text-[#00E5FF]" />
                        <h4 className="text-[11px] font-bold text-[#00E5FF] uppercase tracking-widest font-mono">
                          Strategic Business Analysis
                        </h4>
                      </div>
                      <h5 className="text-sm font-semibold text-white">
                        Prepared for: {businessName}
                      </h5>
                      <p className="text-[10px] font-mono tracking-wider text-purple-400 uppercase mt-0.5 font-semibold">
                        Target Market: {city} • Goal: {goal}
                      </p>
                      <p className="text-xs text-neutral-300 leading-relaxed font-light mt-4 whitespace-pre-line">
                        {result.businessAnalysis}
                      </p>
                    </div>

                    {/* Recommended Package Announcement */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/20 to-cyan-950/20 border border-purple-500/25 relative overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                      <div className="absolute top-2 right-3 px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded text-[8px] font-mono uppercase tracking-widest text-[#00E5FF]">
                        Strategist Choice
                      </div>
                      <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest block font-bold mb-1">
                        RECOMMENDED PACKAGE TIER
                      </span>
                      <h4 className="text-xl font-display font-black text-white tracking-tight flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        {result.recommendedPackage}
                      </h4>
                      <p className="text-xs text-neutral-400 font-light mt-1.5 leading-relaxed">
                        Based on your specified constraints and dynamic business goals, AB Graphics recommends deployable action items under our <span className="text-[#00E5FF] font-medium">{result.recommendedPackage}</span> model to convert prospects efficiently.
                      </p>
                    </div>

                    {/* Marketing Problems */}
                    <div>
                      <h4 className="text-[10px] font-bold text-red-500 uppercase tracking-widest font-mono mb-3 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                        Current Marketing Gaps Detected
                      </h4>
                      <div className="space-y-2.5">
                        {result.marketingProblems.map((problem, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-red-500/[0.02] border border-red-500/10 flex gap-3 text-xs"
                          >
                            <span className="text-red-400 font-mono text-[10px] bg-red-400/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 font-bold mt-0.5 text-center">
                              {idx + 1}
                            </span>
                            <span className="text-neutral-300 font-light leading-relaxed">
                              {problem}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Growth Opportunities */}
                    <div>
                      <h4 className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-widest font-mono mb-3 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[#00E5FF]" />
                        Identified Opportunities
                      </h4>
                      <div className="space-y-2.5">
                        {result.growthOpportunities.map((opportunity, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-cyan-500/[0.02] border border-[#00E5FF]/10 flex gap-3 text-xs"
                          >
                            <span className="text-[#00E5FF] font-mono text-[10px] bg-[#00E5FF]/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 font-bold mt-0.5 text-center">
                              {idx + 1}
                            </span>
                            <span className="text-neutral-300 font-light leading-relaxed">
                              {opportunity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Actions */}
                    <div>
                      <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-450" />
                        Immediate Actions Recommended
                      </h4>
                      <div className="space-y-2.5">
                        {result.recommendedActions.map((action, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-emerald-500/[0.02] border border-emerald-500/10 flex gap-3 text-xs"
                          >
                            <span className="text-emerald-400 font-mono text-[10px] bg-emerald-400/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 font-bold mt-0.5 text-center">
                              ✔
                            </span>
                            <span className="text-neutral-300 font-light leading-relaxed">
                              {action}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Services Tags */}
                    <div>
                      <h4 className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest font-mono mb-3">
                        Recommended AB Graphics Services
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.recommendedServices.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5"
                          >
                            <Sparkles className="w-3 h-3 text-cyan-400" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Roadmaps */}
                    <div className="space-y-4 pt-2">
                      <h4 className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-widest font-mono flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                        Tailored 30-60-90 Day Growth Roadmap
                      </h4>

                      <div className="relative border-l border-white/10 ml-3.5 pl-5 space-y-6 pt-2">
                        {/* 30 Days */}
                        <div className="relative">
                          <span className="absolute -left-9 top-0.5 w-8 h-8 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] text-[9px] font-mono font-bold">
                            30d
                          </span>
                          <div>
                            <h5 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                              Phase 1: Foundation & Authority
                            </h5>
                            <p className="text-xs text-neutral-400 font-light leading-relaxed mt-1 whitespace-pre-line">
                              {result.roadmap30Days}
                            </p>
                          </div>
                        </div>

                        {/* 60 Days */}
                        <div className="relative">
                          <span className="absolute -left-9 top-0.5 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-[9px] font-mono font-bold">
                            60d
                          </span>
                          <div>
                            <h5 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                              Phase 2: Growth & Direct Acquisition
                            </h5>
                            <p className="text-xs text-neutral-400 font-light leading-relaxed mt-1 whitespace-pre-line">
                              {result.roadmap60Days}
                            </p>
                          </div>
                        </div>

                        {/* 90 Days */}
                        <div className="relative">
                          <span className="absolute -left-9 top-0.5 w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 text-[9px] font-mono font-bold">
                            90d
                          </span>
                          <div>
                            <h5 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                              Phase 3: Automation & Scale
                            </h5>
                            <p className="text-xs text-neutral-400 font-light leading-relaxed mt-1 whitespace-pre-line">
                              {result.roadmap90Days}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Full Custom Strategy Summary */}
                    <div className="p-5 rounded-2xl bg-white/[0.01]/70 border border-white/5 relative">
                      <div className="absolute top-2 right-3 font-mono text-[8px] text-neutral-500 uppercase">
                        Confidential Plan
                      </div>
                      <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest font-mono mb-3 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-purple-400" />
                        Executive Strategy Summary
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-light whitespace-pre-line">
                        {result.marketingStrategy}
                      </p>
                    </div>

                    {/* Footer actions */}
                    <div className="pt-6 border-t border-white/10 flex flex-col gap-3.5">
                      <button
                        onClick={handleSendToWhatsApp}
                        className="w-full py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-emerald-500 via-emerald-400 to-[#00E5FF] hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.3)]"
                        id="advisor-whatsapp-handoff"
                      >
                        <Send className="w-4 h-4 text-black rotate-45" />
                        Talk To AB Graphics Expert
                      </button>

                      <button
                        onClick={handleReset}
                        className="w-full py-3 rounded-lg text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                        id="restart-advisor"
                      >
                        <RefreshCw className="w-3.5 h-3.5 animate-spin-reverse" />
                        Restart AI Advisor
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
