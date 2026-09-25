import React from 'react';
import { X, RotateCcw } from 'lucide-react';
import { FilterState } from '@/lib/types/products';

interface ActiveFilterChipsProps {
  filters: FilterState;
  activeFilterCount: number;
  onSearchChange: (val: string) => void;
  onCategoryChange: (cat: string) => void;
  onGenderChange: (gender: string) => void;
  onToggleBrand: (brand: string) => void;
  onToggleSize: (size: string) => void;
  onResetFilters: () => void;
}

export const ActiveFilterChips: React.FC<ActiveFilterChipsProps> = ({
  filters,
  activeFilterCount,
  onSearchChange,
  onCategoryChange,
  onGenderChange,
  onToggleBrand,
  onToggleSize,
  onResetFilters,
}) => {
  if (activeFilterCount === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 my-4 pt-2">
      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-1">
        Active Filters:
      </span>
      
      {filters.search && (
        <span className="inline-flex items-center space-x-1.5 bg-[#FBF4E8] text-[#121212] border border-[#E5A83B]/40 px-2.5 py-1 rounded-full text-xs font-medium">
          <span>Query: "{filters.search}"</span>
          <button onClick={() => onSearchChange('')} className="hover:text-red-600"><X className="w-3 h-3" /></button>
        </span>
      )}

      {filters.category !== 'all' && (
        <span className="inline-flex items-center space-x-1.5 bg-[#FBF4E8] text-[#121212] border border-[#E5A83B]/40 px-2.5 py-1 rounded-full text-xs font-medium">
          <span>Category: {filters.category}</span>
          <button onClick={() => onCategoryChange('all')} className="hover:text-red-600"><X className="w-3 h-3" /></button>
        </span>
      )}

      {filters.gender !== 'all' && (
        <span className="inline-flex items-center space-x-1.5 bg-[#FBF4E8] text-[#121212] border border-[#E5A83B]/40 px-2.5 py-1 rounded-full text-xs font-medium">
          <span>Gender: {filters.gender}</span>
          <button onClick={() => onGenderChange('all')} className="hover:text-red-600"><X className="w-3 h-3" /></button>
        </span>
      )}

      {filters.brand.map(b => (
        <span key={b} className="inline-flex items-center space-x-1.5 bg-[#FBF4E8] text-[#121212] border border-[#E5A83B]/40 px-2.5 py-1 rounded-full text-xs font-medium">
          <span>Brand: {b}</span>
          <button onClick={() => onToggleBrand(b)} className="hover:text-red-600"><X className="w-3 h-3" /></button>
        </span>
      ))}

      {filters.sizes.map(s => (
        <span key={s} className="inline-flex items-center space-x-1.5 bg-[#FBF4E8] text-[#121212] border border-[#E5A83B]/40 px-2.5 py-1 rounded-full text-xs font-medium">
          <span>Size: EU {s}</span>
          <button onClick={() => onToggleSize(s)} className="hover:text-red-600"><X className="w-3 h-3" /></button>
        </span>
      ))}

      <button
        onClick={onResetFilters}
        className="text-xs text-red-600 hover:text-red-800 font-semibold underline ml-2 flex items-center space-x-1"
      >
        <RotateCcw className="w-3 h-3" />
        <span>Clear All Filters</span>
      </button>
    </div>
  );
};