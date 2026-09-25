export interface Image {
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface Color {
  name: string;
  hex: string;
  image?: string;
}

export interface Variant {
  sku: string;
  size: string;
  color: string;
  stock: number;
  price?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  price: number;
  compareAtPrice?: number;
  discount: number;
  thumbnail: string;
  images: Image[];
  sizes: string[];
  availableSizes: string[];
  colors: Color[];
  variants: Variant[];
  rating: number;
  reviewCount: number;
  stock: number;
  sku: string;
  tags: string[];
  gender: 'men' | 'women' | 'unisex';
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
  active: boolean;
  createdAt: string;
}

export interface FilterState {
  search: string;
  category: string;
  brand: string[];
  gender: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sizes: string[];
  inStockOnly: boolean;
  badge: string;
}

export type SortMode = 'featured' | 'newest' | 'bestseller' | 'price-asc' | 'price-desc' | 'rating-desc';
export type ViewMode = 'grid' | 'list';