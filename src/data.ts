import { Service, Package, PortfolioItem, CaseStudy, BeforeAfterItem, Testimonial } from './types';
import jeEducationFlyer from './assets/images/junior_einstein_education_flyer_1781615510520.jpg';
import jeBrandingSuite from './assets/images/junior_einstein_branding_suite_1781615529941.jpg';
import jeCampaignPoster from './assets/images/junior_einstein_campaign_poster_1781615553456.jpg';

export const SERVICES_DATA: Service[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Visually striking, custom-tailored creative layout designs that define and elevate your unique business look.",
    category: "design",
    iconName: "Palette"
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description: "Premium, timeless, modern vector logos that forge instant brand authorization and deep visual recognition.",
    category: "design",
    iconName: "Compass"
  },
  {
    id: "poster-design",
    title: "Poster Design",
    description: "High-impact offline and online display posters engineered to lock viewer attention and scale campaign conversions.",
    category: "design",
    iconName: "Milestone"
  },
  {
    id: "banner-design",
    title: "Banner Design",
    description: "Elegant, crisp, high-definition web, social, and print banners configured to showcase products with maximum luxury feel.",
    category: "design",
    iconName: "RectangleHorizontal"
  },
  {
    id: "branding",
    title: "Branding",
    description: "End-to-end corporate identity conceptualization: color palettes, typographic guidelines, and tone sheets.",
    category: "design",
    iconName: "Sparkles"
  },
  {
    id: "social-media-design",
    title: "Social Media Design",
    description: "Aesthetically unified post layouts and carousels designed to increase click-throughs and profile views.",
    category: "design",
    iconName: "Instagram"
  },
  {
    id: "reel-editing",
    title: "Reel Editing",
    description: "Engagement-optimized vertical short videos with custom overlays, typographic callouts, and audio synchronization.",
    category: "design",
    iconName: "Film"
  },
  {
    id: "instagram-growth",
    title: "Instagram Growth",
    description: "Algorithmic profile optimization, content calendar strategies, and targeted interaction to build a loyal customer base.",
    category: "growth",
    iconName: "TrendingUp"
  },
  {
    id: "facebook-management",
    title: "Facebook Management",
    description: "Full-page community scheduling, demographic engagement, and group growth funnels to drive organic buyer traffic.",
    category: "marketing",
    iconName: "Facebook"
  },
  {
    id: "meta-ads-management",
    title: "Meta Ads Management",
    description: "ROI-driven campaign targeting on Facebook & Instagram with precise A/B testing, pixel installation, and scale mapping.",
    category: "ads",
    iconName: "Megaphone"
  },
  {
    id: "google-ads-setup",
    title: "Google Ads Setup",
    description: "High-intent search campaign implementation, precise keyword matching, negative list setup, and ad copywriting.",
    category: "ads",
    iconName: "Search"
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile Setup",
    description: "Local SEO map indexing, review collection strategies, and updates posting to unlock dominant regional listing traffic.",
    category: "growth",
    iconName: "MapPin"
  },
  {
    id: "whatsapp-business-setup",
    title: "WhatsApp Business Setup",
    description: "Catalog creation, interactive automated greetings, and labels categorization to streamline mobile buyer conversions.",
    category: "marketing",
    iconName: "MessageCircleCode"
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation",
    description: "Custom notification rules, instant menu triggers, and dynamic customer follow-up drip schedules to scale CRM.",
    category: "growth",
    iconName: "Bot"
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "High-conversions registration landing funnels to turn cold social impressions into verified, pre-qualified business inquiries.",
    category: "marketing",
    iconName: "Users"
  },
  {
    id: "business-growth-strategy",
    title: "Business Growth Strategy",
    description: "Architectural consultation formulating ideal product offers, conversion funnels, and marketing timelines.",
    category: "growth",
    iconName: "Target"
  }
];

export const PACKAGES_DATA: Package[] = [
  {
    id: "starter",
    name: "Starter Package",
    subtitle: "Ideal for local startups and small businesses aiming to establish their aesthetic identity.",
    targetAudience: "Small Businesses & Solopreneurs",
    features: [
      "Custom Logo Design & Guidelines",
      "Standard Poster & Banner Assets",
      "Social Media Branding Kickstart",
      "Google Business Profile Setup",
      "WhatsApp Business Catalog Config",
      "1 Campaign Strategy Consultation"
    ],
    recommended: false
  },
  {
    id: "growth",
    name: "Growth Package",
    subtitle: "Engineered for scaling brands looking to deploy advertising and organic social growth.",
    targetAudience: "Established Brands & Services",
    features: [
      "Premium Logo + Unified Branding Suite",
      "High-converting Social Posts Content Framework",
      "Engagement Reels Editing & Strategy",
      "Comprehensive Meta Ads Setup & Testing",
      "WhatsApp Business Setup & Basic Rules Automation",
      "Bi-Weekly Lead Generation Analytics"
    ],
    recommended: true
  },
  {
    id: "premium",
    name: "Premium Package",
    subtitle: "Complete digital dominance including custom automation, hyper-targeted ads, and custom consulting.",
    targetAudience: "Enterprise & High-Volume Agencies",
    features: [
      "Omni-channel Creative Production Team Access",
      "Unlimited Ad-creative Banners & Dynamic Layouts",
      "Advanced Instagram Organic Growth Calendar",
      "Full-funnel Meta & Google Ads Campaigns Setup",
      "Custom CRM WhatsApp End-to-End API Automation",
      "Dedicated Campaign Growth Strategist Consultation"
    ],
    recommended: false
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "je-edu",
    title: "Junior Einstein Flagship Course Flyer",
    category: "education",
    imageUrl: jeEducationFlyer,
    description: "Academic promo layout highlighting CBSE/MHT-CET/JEE classes, structured batch timings, NDA selection boards, and integrated student course modules for high conversion output."
  },
  {
    id: "je-brand",
    title: "Junior Einstein Unified Educational Branding Suite",
    category: "branding",
    imageUrl: jeBrandingSuite,
    description: "TIM-SS and STEM consistent visual assets: Students and lecturers high-end identification cards, letterheads, progress reports, and standard signage rules."
  },
  {
    id: "je-camp",
    title: "'Formula of Success' Physics Poster Layout",
    category: "posters",
    imageUrl: jeCampaignPoster,
    description: "Chalk-stylized high-contrast chemistry formulas and physics equations. Intelligently engineered as a physical flyer and Instagram post to drive maximum student recruitment."
  },
  {
    id: "premium-reels-1",
    title: "Reels Vertical Motion Graphics - Hook Concept",
    category: "reels",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=700&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-recording-a-video-with-a-smartphone-34316-large.mp4",
    description: "Vertical 9:16 engagement video reel showcasing automated text callouts, modern screen-shake visual hooks, and professional color grading."
  },
  {
    id: "premium-reels-2",
    title: "SaaS Product Walkthrough Premium Explainer",
    category: "reels",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-scrolling-through-phone-at-cafe-41566-large.mp4",
    description: "Sleek app transitions reel editing displaying core interface features under high-retention acoustic pacing."
  },
  {
    id: "social-media-1",
    title: "Luxury Skin-care Aesthetic Instagram Grid",
    category: "social_media",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    description: "Beige and high-contrast gold luxury cosmetics grid carousel showing fluid lines, organic textures, and elegant typography."
  },
  {
    id: "social-media-2",
    title: "Hypebeast E-Commerce Streetwear Campaign post",
    category: "social_media",
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=700&q=80",
    description: "Brutalist layout design featuring modern Swiss typography and high-contrast raw photography borders."
  },
  {
    id: "marketing-creative-1",
    title: "Meta Ads Performance Campaign Scaling Suite",
    category: "marketing_creatives",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    description: "A/B test vector banners utilizing color psychology blocks to push click-through metrics beyond benchmark ranges."
  },
  {
    id: "marketing-creative-2",
    title: "Local SEO Google Business Mapping Creatives",
    category: "marketing_creatives",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=80",
    description: "Map interaction vector infographics designed to prompt physical walk-ins and local regional listing trust."
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "cs1",
    clientName: "Zenith Real Estate",
    industry: "High-End Residential Real Estate",
    challenge: "Low-quality client inquiries from default template social ads resulting in wasted advertisement budgets.",
    solution: "Re-engineered full premium brand brochure graphics, unified vertical video walkthrough aesthetics, and constructed a conversational WhatsApp Pre-qualification Automation funnel.",
    result: "Unlocked higher trust rankings regionally and established a premium localized market representation.",
    metrics: "+340% High-intent Leads",
    roas: "4.8x ROAS",
    tags: ["Lead Generation", "WhatsApp Automation", "Branding"]
  },
  {
    id: "cs2",
    clientName: "Solari Eco-Skincare",
    industry: "Direct-to-Consumer Cosmetics",
    challenge: "Cluttered, default look feed layouts that failed to establish organic brand authority.",
    solution: "Created custom luxury label design palettes, engineered highly engaging Reels and carousels with 3D layouts, and initiated consistent Instagram growth posting models.",
    result: "Cultivated a highly engaged skin-wellness customer base with 24k+ active followers organically.",
    metrics: "2.4M Reels Views",
    roas: "5.2x ROAS",
    tags: ["Social Media Design", "Instagram Growth", "Reel Editing"]
  },
  {
    id: "cs3",
    clientName: "Vortex Gaming App",
    industry: "Fintech & Mobile Gaming",
    challenge: "Struggling to acquire app pre-registrations globally amidst highly saturated competitive markets.",
    solution: "Deployed aggressive bold-contrast neon banners, running high-conversions Meta retargeting ads combined with interactive Lead generation landing steps.",
    result: "Surpassed target metrics by 180% within the initial 4 weeks of landing release.",
    metrics: "120,000+ Sign-ups",
    roas: "4.1x ROAS",
    tags: ["Meta Ads Management", "Banner Design", "Lead Generation"]
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: "ba1",
    title: "Social Branding Makeover",
    category: "Instagram Visual Identity",
    beforeImg: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
    afterImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    beforeStats: "1.2% CTR, Cluttered Template-Feel Grid",
    afterStats: "4.8% CTR, Premium Unified Visual Luxury Theme"
  },
  {
    id: "ba2",
    title: "Ad Creative Optimization",
    category: "Meta Lead Generation Campaigns",
    beforeImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    afterImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
    beforeStats: "Rs. 190 Per Pre-Qualified Lead Inquiry",
    afterStats: "Rs. 42 Per Pre-Qualified Lead (WhatsApp Integrated)"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Kulkarni",
    role: "CEO & Founder",
    company: "Kulkarni Luxury Homes",
    content: "The branding shift AB Graphics gave us was spectacular. We transitioned from generic templates to customized high-end visuals. Our WhatsApp lead quality skyrocketed instantly!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t2",
    name: "Ananya Sharma",
    role: "Marketing Director",
    company: "Bella Senses Cosmetics",
    content: "Their Reel Editing and Social branding is out of this world! They captured our brand's vibe from day one with gorgeous gloss elements and professional typography. Our engagement metrics speak for themselves.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t3",
    name: "Vikram Mehta",
    role: "Operations Head",
    company: "InstaLogistics India",
    content: "We set up Google Business local listing optimization and meta lead ad management with AB Graphics. Our phones have not stopped ringing. Highly professional team!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t4",
    name: "Pooja Deshmukh",
    role: "Partner & Founder",
    company: "The Creative Atelier",
    content: "AB Graphics built a phenomenal business growth strategy for our agency. Their WhatsApp automation rules reduced our follow-up time to literal seconds. Highly recommended!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
  }
];
