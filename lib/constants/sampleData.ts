// sampleData.ts
import { Product } from '../types/products';

export const MONGOOSE_SCHEMA_SPEC = {
  name: { type: 'String', required: true, trim: true },
  slug: { type: 'String', required: true, unique: true, index: true },
  description: { type: 'String', required: true },
  shortDescription: { type: 'String', required: true },
  category: { type: 'String', required: true, index: true },
  subcategory: { type: 'String', required: true, index: true },
  brand: { type: 'String', required: true, index: true },
  price: { type: 'Number', required: true, min: 0, index: true },
  compareAtPrice: { type: 'Number', min: 0 },
  discount: { type: 'Number', default: 0 },
  images: [{
    url: { type: 'String', required: true },
    alt: { type: 'String' },
    isPrimary: { type: 'Boolean', default: false },
    order: { type: 'Number', default: 0 }
  }],
  thumbnail: { type: 'String', required: true },
  sizes: [{ type: 'String', index: true }],
  availableSizes: [{ type: 'String' }],
  colors: [{
    name: { type: 'String', required: true },
    hex: { type: 'String', required: true },
    image: { type: 'String' }
  }],
  variants: [{
    sku: { type: 'String', required: true },
    size: { type: 'String', required: true },
    color: { type: 'String', required: true },
    stock: { type: 'Number', required: true, min: 0 },
    price: { type: 'Number' }
  }],
  rating: { type: 'Number', default: 0, min: 0, max: 5, index: true },
  reviewCount: { type: 'Number', default: 0 },
  stock: { type: 'Number', required: true, min: 0 },
  sku: { type: 'String', required: true, unique: true },
  tags: [{ type: 'String', index: true }],
  gender: { type: 'String', enum: ['men', 'women', 'unisex'], required: true, index: true },
  featured: { type: 'Boolean', default: false, index: true },
  bestseller: { type: 'Boolean', default: false, index: true },
  newArrival: { type: 'Boolean', default: false, index: true },
  active: { type: 'Boolean', default: true, index: true }
};

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "prod-101",
    name: "Air Ultra Fly Runner",
    slug: "air-ultra-fly-runner",
    shortDescription: "Ultra-lightweight reactive carbon marathon runner.",
    description: "Engineered with reactive carbon foam and breathable weave upper for ultimate marathon performance and urban agility.",
    category: "Footwear",
    subcategory: "Athletic & Running",
    brand: "Air Ultra",
    price: 12990,
    compareAtPrice: 15500,
    discount: 16,
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    images: [
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800", alt: "Air Ultra Fly Red Side", isPrimary: true, order: 0 },
      { url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800", alt: "Air Ultra Fly Angle", isPrimary: false, order: 1 }
    ],
    sizes: ["39", "40", "41", "42", "43", "44"],
    availableSizes: ["39", "40", "41", "42", "43"],
    colors: [
      { name: "Crimson Red", hex: "#E63946" },
      { name: "Stealth Black", hex: "#1D3557" }
    ],
    variants: [
      { sku: "AUF-39-RED", size: "39", color: "Crimson Red", stock: 5, price: 12990 },
      { sku: "AUF-40-RED", size: "40", color: "Crimson Red", stock: 12, price: 12990 }
    ],
    rating: 4.9,
    reviewCount: 128,
    stock: 24,
    sku: "AUF-RUN-2026",
    tags: ["marathon", "breathable", "lightweight", "running", "carbon"],
    gender: "men",
    featured: true,
    bestseller: true,
    newArrival: true,
    active: true,
    createdAt: "2026-01-10T10:00:00Z"
  },
  {
    id: "prod-102",
    name: "Royal Italian Double Monk Strap",
    slug: "royal-italian-double-monk-strap",
    shortDescription: "Hand-burnished Italian calfskin leather with Goodyear welt.",
    description: "Handcrafted from full-grain Italian calf leather with double gold buckle straps and Goodyear welted leather sole for royal presence.",
    category: "Formal",
    subcategory: "Monk Straps",
    brand: "Royal Italia",
    price: 18500,
    compareAtPrice: 22000,
    discount: 15,
    thumbnail: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800",
    images: [
      { url: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800", alt: "Royal Monk Strap Brown", isPrimary: true, order: 0 }
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    availableSizes: ["40", "41", "42", "43", "44"],
    colors: [
      { name: "Cognac Tan", hex: "#8B4513" },
      { name: "Espresso Brown", hex: "#3D2314" }
    ],
    variants: [],
    rating: 4.8,
    reviewCount: 84,
    stock: 14,
    sku: "RIM-MONK-01",
    tags: ["formal", "leather", "wedding", "handcrafted", "italy"],
    gender: "men",
    featured: true,
    bestseller: true,
    newArrival: false,
    active: true,
    createdAt: "2025-11-20T10:00:00Z"
  },
  {
    id: "prod-103",
    name: "Urban Runner X Nubuck",
    slug: "urban-runner-x-nubuck",
    shortDescription: "Plush MemoryGel cushioning wrapped in premium nubuck.",
    description: "Designed for effortless 14-hour wear. Features custom MemoryGel insoles, high-traction rubber outsole, and soft nubuck panels.",
    category: "Sneakers",
    subcategory: "Casual Lifestyle",
    brand: "Urban Craft",
    price: 9800,
    compareAtPrice: 11500,
    discount: 14,
    thumbnail: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    images: [
      { url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800", alt: "Urban Runner Pastel", isPrimary: true, order: 0 }
    ],
    sizes: ["38", "39", "40", "41", "42"],
    availableSizes: ["38", "39", "40", "41", "42"],
    colors: [
      { name: "Slate Grey", hex: "#708090" },
      { name: "Minimal Ochre", hex: "#E5A83B" }
    ],
    variants: [],
    rating: 4.6,
    reviewCount: 62,
    stock: 18,
    sku: "URX-NUB-02",
    tags: ["casual", "sneaker", "comfortable", "nubuck", "streetwear"],
    gender: "unisex",
    featured: false,
    bestseller: true,
    newArrival: true,
    active: true,
    createdAt: "2026-02-01T10:00:00Z"
  },
  {
    id: "prod-104",
    name: "Heritage Leather Chelsea Boot",
    slug: "heritage-leather-chelsea-boot",
    shortDescription: "Rugged pull-up leather boot with elastic side gusset.",
    description: "Classic Chelsea boot cut from water-resistant pull-up leather. Reinforced pull tabs and anti-slip tread for robust city commuting.",
    category: "Boots",
    subcategory: "Ankle Boots",
    brand: "Heritage",
    price: 15200,
    compareAtPrice: 17500,
    discount: 13,
    thumbnail: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800",
    images: [
      { url: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800", alt: "Heritage Chelsea Boot", isPrimary: true, order: 0 }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    availableSizes: ["40", "41", "42", "43"],
    colors: [
      { name: "Deep Walnut", hex: "#4A2E12" },
      { name: "Onyx Black", hex: "#000000" }
    ],
    variants: [],
    rating: 4.7,
    reviewCount: 45,
    stock: 8,
    sku: "HCB-LEA-03",
    tags: ["boots", "leather", "chelsea", "rugged", "winter"],
    gender: "men",
    featured: true,
    bestseller: false,
    newArrival: true,
    active: true,
    createdAt: "2026-01-25T10:00:00Z"
  },
  {
    id: "prod-105",
    name: "Velocity Pro Mesh Trainer",
    slug: "velocity-pro-mesh-trainer",
    shortDescription: "Ultra-breathable gym trainer with lateral support cage.",
    description: "Built for high-intensity gym workouts, cross-training, and speed drills. TPU heel stabilizer prevents slippage.",
    category: "Footwear",
    subcategory: "Athletic & Running",
    brand: "Air Ultra",
    price: 8400,
    compareAtPrice: 9900,
    discount: 15,
    thumbnail: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800",
    images: [
      { url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800", alt: "Velocity Pro White Blue", isPrimary: true, order: 0 }
    ],
    sizes: ["39", "40", "41", "42", "43"],
    availableSizes: ["39", "40", "41", "42"],
    colors: [
      { name: "Electric Cyan", hex: "#00B4D8" },
      { name: "Pure White", hex: "#FFFFFF" }
    ],
    variants: [],
    rating: 4.5,
    reviewCount: 39,
    stock: 31,
    sku: "VPM-TRN-04",
    tags: ["gym", "workout", "trainer", "breathable", "sport"],
    gender: "unisex",
    featured: false,
    bestseller: false,
    newArrival: true,
    active: true,
    createdAt: "2026-02-10T10:00:00Z"
  },
  {
    id: "prod-106",
    name: "Mr. Shose Bespoke Patent Oxford",
    slug: "mr-shose-bespoke-patent-oxford",
    shortDescription: "High-gloss mirror finish tuxedo shoe for black-tie galas.",
    description: "Crafted for formal black-tie events. Mirror-shine patent leather upper, silk lace ribbons, and ultra-sleek silhouette.",
    category: "Formal",
    subcategory: "Oxfords",
    brand: "Mr. Shose Executive",
    price: 21000,
    compareAtPrice: 24000,
    discount: 12,
    thumbnail: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800",
    images: [
      { url: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800", alt: "Bespoke Patent Oxford", isPrimary: true, order: 0 }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    availableSizes: ["40", "41", "42", "43", "44"],
    colors: [
      { name: "Black Mirror", hex: "#0B0B0B" }
    ],
    variants: [],
    rating: 5.0,
    reviewCount: 52,
    stock: 6,
    sku: "MSO-PAT-05",
    tags: ["oxford", "patent", "blacktie", "luxurious", "gala"],
    gender: "men",
    featured: true,
    bestseller: false,
    newArrival: false,
    active: true,
    createdAt: "2025-10-15T10:00:00Z"
  },
  {
    id: "prod-107",
    name: "Aura Minimalist Slip-on Loafer",
    slug: "aura-minimalist-slip-on-loafer",
    shortDescription: "Hand-stitched suede loafer with flex-sole comfort.",
    description: "Soft velvet suede finish, ergonomic memory latex footbed, and flexible gum rubber driver sole.",
    category: "Women",
    subcategory: "Loafers & Flats",
    brand: "Urban Craft",
    price: 7900,
    compareAtPrice: 9200,
    discount: 14,
    thumbnail: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800",
    images: [
      { url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800", alt: "Aura Suede Loafer", isPrimary: true, order: 0 }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    availableSizes: ["36", "37", "38", "39"],
    colors: [
      { name: "Nude Rose", hex: "#E8C3B9" },
      { name: "Cream Sand", hex: "#F5F5DC" }
    ],
    variants: [],
    rating: 4.7,
    reviewCount: 71,
    stock: 22,
    sku: "AMS-LOA-06",
    tags: ["women", "loafer", "suede", "slipon", "work"],
    gender: "women",
    featured: true,
    bestseller: true,
    newArrival: false,
    active: true,
    createdAt: "2025-12-05T10:00:00Z"
  },
  {
    id: "prod-108",
    name: "Vapor Court Pro Tennis Shoe",
    slug: "vapor-court-pro-tennis-shoe",
    shortDescription: "Non-marking clay court tennis shoe with lateral drag guard.",
    description: "Engineered specifically for clay and hardcourt tennis. Features abrasion-resistant toe cap and TPU midfoot shank.",
    category: "Footwear",
    subcategory: "Tennis & Court",
    brand: "Air Ultra",
    price: 11400,
    compareAtPrice: 13000,
    discount: 12,
    thumbnail: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800",
    images: [
      { url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800", alt: "Vapor Court Yellow", isPrimary: true, order: 0 }
    ],
    sizes: ["39", "40", "41", "42", "43"],
    availableSizes: ["40", "41", "42"],
    colors: [
      { name: "Volt Yellow", hex: "#CCFF00" },
      { name: "Court Blue", hex: "#0038A8" }
    ],
    variants: [],
    rating: 4.4,
    reviewCount: 29,
    stock: 12,
    sku: "VCP-TEN-07",
    tags: ["tennis", "court", "sport", "durable", "clay"],
    gender: "unisex",
    featured: false,
    bestseller: false,
    newArrival: true,
    active: true,
    createdAt: "2026-02-12T10:00:00Z"
  }
];