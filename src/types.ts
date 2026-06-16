export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'design' | 'marketing' | 'ads' | 'growth';
  iconName: string;
}

export interface Package {
  id: string;
  name: string;
  subtitle: string;
  targetAudience: string;
  features: string[];
  recommended: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'education' | 'posters' | 'branding' | 'social_media' | 'reels' | 'marketing_creatives';
  imageUrl: string;
  videoUrl?: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: string;
  roas?: string;
  tags: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  beforeStats: string;
  afterStats: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl: string;
}
