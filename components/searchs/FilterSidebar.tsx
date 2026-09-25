import React from 'react';
import { SlidersHorizontal, ChevronRight, Star } from 'lucide-react';
import { FilterState } from '@/lib/types/products';

interface FilterSidebarProps {
  filters: FilterState;
  activeFilterCount: number;
  onGenderChange: (gender: string) => void;
  onCategoryChange: (cat: string) => void;
  onToggleBrand: (brand: string) => void;
  onToggleSize: (size: string) => void;
  onMaxPriceChange: (val: number) => void;
  onMinRatingChange: (val: number) => void;
  onInStockToggle: (val: boolean) => void;
  onResetFilters: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  activeFilterCount,
  onGenderChange,
  onCategoryChange,
  onToggleBrand,
  onToggleSize,
  onMaxPriceChange,
  onMinRatingChange,
  onInStockToggle,
  onResetFilters,
}) => {
  return (
    <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm h-fit">
      <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
        <h2 className="text-base font-bold text-[#121212] flex items-center space-x-2">
          <SlidersHorizontal className="w-4 h-4 text-[#E5A83B]" />
          <span>Product Filters</span>
        </h2>
        {activeFilterCount > 0 && (
          <button 
            onClick={onResetFilters}
            className="text-xs text-zinc-500 hover:text-red-600 font-medium"
          >
            Reset
          </button>
        )}
      </div>

      {/* Gender Filter */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">Gender</label>
        <div className="grid grid-cols-3 gap-1.5 bg-zinc-100 p-1 rounded-lg">
          {['all', 'men', 'women'].map((g) => (
            <button
              key={g}
              onClick={() => onGenderChange(g)}
              className={`py-1.5 text-xs font-bold rounded-md capitalize transition-all ${
                filters.gender === g ? 'bg-[#121212] text-[#E5A83B] shadow' : 'text-zinc-600 hover:text-black'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Category Accordion */}
      <div className="space-y-2 pt-2 border-t border-zinc-100">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">Category</label>
        <div className="space-y-1">
          {['all', 'Footwear', 'Formal', 'Sneakers', 'Boots', 'Women'].map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left transition-all ${
                filters.category === cat 
                  ? 'bg-[#FBF4E8] text-[#121212] font-bold border-l-4 border-[#E5A83B]' 
                  : 'text-zinc-600 hover:bg-zinc-50'
              }`}
            >
              <span>{cat === 'all' ? 'All Categories' : cat}</span>
              {filters.category === cat && <ChevronRight className="w-4 h-4 text-[#E5A83B]" />}
            </button>
          ))}
        </div>
      </div>

      {/* Brand Checkboxes */}
      <div className="space-y-2 pt-2 border-t border-zinc-100">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">Brand</label>
        <div className="space-y-2">
          {['Air Ultra', 'Royal Italia', 'Urban Craft', 'Heritage', 'Mr. Shose Executive'].map((b) => (
            <label key={b} className="flex items-center space-x-2.5 text-sm text-zinc-700 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.brand.includes(b)}
                onChange={() => onToggleBrand(b)}
                className="w-4 h-4 rounded text-[#E5A83B] focus:ring-[#E5A83B] border-zinc-300 cursor-pointer"
              />
              <span className="group-hover:text-black transition-colors">{b}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Shoe Sizes Grid */}
      <div className="space-y-2 pt-2 border-t border-zinc-100">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">EU Size</label>
        <div className="grid grid-cols-4 gap-2">
          {['36', '38', '39', '40', '41', '42', '43', '44', '45'].map((sz) => {
            const isSelected = filters.sizes.includes(sz);
            return (
              <button
                key={sz}
                onClick={() => onToggleSize(sz)}
                className={`py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  isSelected 
                    ? 'bg-[#121212] text-[#E5A83B] border-[#121212]' 
                    : 'bg-white text-zinc-700 border-zinc-200 hover:border-[#E5A83B]'
                }`}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Slider */}
      <div className="space-y-3 pt-2 border-t border-zinc-100">
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Max Price</label>
          <span className="text-xs font-bold text-[#E5A83B] bg-black px-2 py-0.5 rounded">
            Rs. {filters.maxPrice.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min="5000"
          max="30000"
          step="1000"
          value={filters.maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="w-full accent-[#E5A83B] cursor-pointer"
        />
      </div>

      {/* Rating Filter */}
      <div className="space-y-2 pt-2 border-t border-zinc-100">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">Minimum Rating</label>
        <div className="flex items-center space-x-1">
          {[4, 4.5, 4.8].map((rt) => (
            <button
              key={rt}
              onClick={() => onMinRatingChange(filters.minRating === rt ? 0 : rt)}
              className={`flex-1 py-1 px-2 rounded text-xs font-bold border flex items-center justify-center space-x-1 ${
                filters.minRating === rt
                  ? 'bg-[#E5A83B] text-black border-[#E5A83B]'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>{rt}+</span>
            </button>
          ))}
        </div>
      </div>

      {/* In-Stock Toggle */}
      <div className="pt-2 border-t border-zinc-100">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm font-medium text-zinc-800">In-Stock Items Only</span>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onInStockToggle(e.target.checked)}
            className="w-4 h-4 rounded text-[#E5A83B] focus:ring-[#E5A83B] border-zinc-300"
          />
        </label>
      </div>
    </aside>
  );
};