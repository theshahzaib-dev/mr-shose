import { BrandConfig, HeroSlide, NavLink, SearchSuggestion } from '../types/types';

export const BRAND_CONFIG: BrandConfig = {
  name: "MR. SHOSE",
  tagline: "STEP INTO STYLE",
  whatsappNumber: "+923000000000",
  whatsappFormatted: "+92 300 0000000",
  currency: "Rs.",
  logoUrl: typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_LOGO_URL ? process.env.NEXT_PUBLIC_LOGO_URL : null, 
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    eyebrow: "NEW RELEASE 2026",
    title: "AIR ULTRA FLY",
    subtitle: "SPEED & PRECISION",
    description: "engineered with reactive carbon foam and breathable weave upper for ultimate marathon performance and urban agility.",
    badge: "15% OFF INTRO SPECIAL",
    primaryAction: { text: "Explore Collection", href: "#new-arrivals" },
    secondaryAction: { text: "Order on WhatsApp", href: "#whatsapp" },
    accentColor: "#E5A83B",
    shoeType: "runner",
    bgGradient: "from-[#121212] via-[#1a1815] to-[#262118]",
    thumbnail:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: "slide-2",
    eyebrow: "EXECUTIVE HANDCRAFTED",
    title: "ROYAL MONK STRAP",
    subtitle: "TIMELESS CRAFTSMANSHIP",
    description: "Full-grain Italian calf leather, hand-burnished finish, and Goodyear welted sole crafted for elite presence.",
    badge: "HANDMADE IN LIMITED NUMBERS",
    primaryAction: { text: "Shop Formal Series", href: "#formal" },
    secondaryAction: { text: "Book Custom Fitting", href: "#whatsapp" },
    accentColor: "#D49326",
    shoeType: "formal",
    bgGradient: "from-[#18130e] via-[#241c12] to-[#121212]",
    thumbnail:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: "slide-3",
    eyebrow: "EVERYDAY LUXURY",
    title: "URBAN RUNNER X",
    subtitle: "REFINED STREET COMFORT",
    description: "Ultra-cushioned MemoryGel midsole wrapped in premium nubuck leather. Designed for 14-hour effortless wear.",
    badge: "BESTSELLER OF THE SEASON",
    primaryAction: { text: "Discover Colorways", href: "#sneakers" },
    secondaryAction: { text: "Order via WhatsApp", href: "#whatsapp" },
    accentColor: "#E5A83B",
    shoeType: "sneaker",
    bgGradient: "from-[#111113] via-[#1b1c20] to-[#121212]",
    thumbnail:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800',
  }
];

export const NAV_LINKS: NavLink[] = [
  { name: "New Arrivals", href: "#new-arrivals" },
  { name: "Men", href: "#men" },
  { name: "Women", href: "#women" },
  { name: "Sneakers", href: "#sneakers" },
  { name: "Formal", href: "#formal" },
  { name: "Sale", href: "#sale", badge: "UP TO 40%" }
];

export const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  { id: "1", name: "Air Ultra Fly Runner", category: "Performance", price: "12,990", tag: "Hot" },
  { id: "2", name: "Royal Italian Monk Strap", category: "Formal Leather", price: "18,500", tag: "Luxury" },
  { id: "3", name: "Urban Runner X Nubuck", category: "Casual Sneakers", price: "9,800", tag: "Popular" },
  { id: "4", name: "Heritage Chelsea Boot", category: "Boots", price: "15,200", tag: "Classic" },
];