export interface BrandConfig {
  name: string;
  tagline: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  currency: string;
  logoUrl: string | null;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  primaryAction: { text: string; href: string };
  secondaryAction: { text: string; href: string };
  accentColor: string;
  shoeType: 'formal' | 'sneaker' | 'runner' | 'outdoor' | 'traditional' | 'women';
  bgGradient: string;
  thumbnail:string;
}

export interface NavLink {
  name: string;
  href: string;
  badge?: string;
}

export interface SearchSuggestion {
  id: string;
  name: string;
  category: string;
  price: string;
  tag: string;
}