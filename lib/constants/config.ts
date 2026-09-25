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
    description: "Engineered with reactive carbon foam and breathable weave upper for ultimate marathon performance and urban agility.",
    badge: "15% OFF INTRO SPECIAL",
    primaryAction: { text: "Explore Collection", href: "#new-arrivals" },
    secondaryAction: { text: "Order on WhatsApp", href: "#whatsapp" },
    accentColor: "#E5A83B",
    shoeType: "runner",
    bgGradient: "from-[#121212] via-[#1a1815] to-[#262118]",
    thumbnail: 'assets/images/slider/new.png'
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
    thumbnail: 'assets/images/slider/formal.png'
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
    thumbnail: 'assets/images/slider/sneker.png'
  },
  {
    id: "slide-4",
    eyebrow: "TRADITIONAL HERITAGE",
    title: "BALOCHI CHAWAT",
    subtitle: "AUTHENTIC CRAFTSMANSHIP",
    description: "Hand-stitched by master artisans using genuine leather and classic Baloch thread embroidery for unmatched cultural elegance.",
    badge: "CULTURAL HERITAGE COLLECTION",
    primaryAction: { text: "Explore Heritage Series", href: "#balochi" },
    secondaryAction: { text: "Order on WhatsApp", href: "#whatsapp" },
    accentColor: "#C25E00",
    shoeType: "traditional",
    bgGradient: "from-[#1f130b] via-[#2b1a0e] to-[#121212]",
    thumbnail: 'assets/images/slider/balouchi.png'
  },
  {
    id: "slide-5",
    eyebrow: "WOMEN'S ELEGANCE",
    title: "VELVET EMBROIDERED KHUSSA",
    subtitle: "GRACE & GRANDEUR",
    description: "Exquisitely hand-embellished velvet khussa featuring gold tilla work, padded double-sole support, and traditional royal aesthetics.",
    badge: "WOMEN'S EXCLUSIVE COLLECTION",
    primaryAction: { text: "Shop Women Collection", href: "#women" },
    secondaryAction: { text: "Order on WhatsApp", href: "#whatsapp" },
    accentColor: "#E05297",
    shoeType: "women",
    bgGradient: "from-[#1f1019] via-[#2b1422] to-[#121212]",
    thumbnail: 'assets/images/slider/women.png'
  }
];

export const NAV_LINKS: NavLink[] = [
  { name: "New Arrivals", href: "/products?category=new-arrivals" },
  { name: "Men", href: "/products?category=men" },
  { name: "Women", href: "/products?category=women" },
  { name: "Sneakers", href: "/products?category=sneakers" },
  { name: "Formal", href: "/products?category=formal" },
  { name: "Sale", href: "/products?category=sale", badge: "UP TO 40%" }
];

export const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  { id: "1", name: "Air Ultra Fly Runner", category: "Performance", price: "12,990", tag: "Hot" },
  { id: "2", name: "Royal Italian Monk Strap", category: "Formal Leather", price: "18,500", tag: "Luxury" },
  { id: "3", name: "Urban Runner X Nubuck", category: "Casual Sneakers", price: "9,800", tag: "Popular" },
  { id: "4", name: "Heritage Chelsea Boot", category: "Boots", price: "15,200", tag: "Classic" },
];