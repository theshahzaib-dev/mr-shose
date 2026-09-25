import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  gridSpan: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'formal',
    name: 'Italian Formal Leather',
    subtitle: 'Hand-crafted Oxfords & Monk Straps',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
    badge: 'Trending',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2'
  },
  {
    id: 'sneakers',
    name: 'Streetwear & Sneakers',
    subtitle: 'Everyday MemoryGel Comfort',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: 'running',
    name: 'Athletic & Running',
    subtitle: 'Ultra-lightweight Carbon Sole',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: 'boots',
    name: 'Heritage Leather Boots',
    subtitle: 'Water-resistant Chelsea & Ankle Boots',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800',
    badge: 'New Season',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2'
  }
];

interface CategoryGridProps {
  onSelectCategory: (catName: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-12 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A83B]">
              Curated Collections
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121212] mt-1">
              Shop Footwear By Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mt-2 md:mt-0">
            Explore precision-engineered footwear designed for business meetings, street style, and daily comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 min-h-[260px] flex items-end ${cat.gridSpan}`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {cat.badge && (
                <span className="absolute top-4 left-4 bg-[#E5A83B] text-black font-black text-[10px] uppercase px-3 py-1 rounded-full tracking-wider shadow">
                  {cat.badge}
                </span>
              )}

              <div className="relative z-10 p-6 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#E5A83B] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1">{cat.subtitle}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E5A83B] group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};