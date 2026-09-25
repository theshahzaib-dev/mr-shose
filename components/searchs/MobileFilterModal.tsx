import React from 'react';
import { X } from 'lucide-react';
import { FilterState } from '@/lib/types/products';

interface MobileFilterModalProps {
  isOpen: boolean;
  filters: FilterState;
  totalResults: number;
  onClose: () => void;
  onCategoryChange: (cat: string) => void;
  onToggleSize: (size: string) => void;
  onResetFilters: () => void;
}

export const MobileFilterModal: React.FC<MobileFilterModalProps> = ({
  isOpen,
  filters,
  totalResults,
  onClose,
  onCategoryChange,
  onToggleSize,
  onResetFilters,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
            <h2 className="font-bold text-lg text-black">Filter Footwear</h2>
            <button onClick={onClose}>
              <X className="w-5 h-5 text-zinc-500" />
            </button>
          </div>

          {/* Mobile Filter Options */}
          <div className="space-y-6 py-6">
            <div>
              <label className="text-xs font-bold uppercase text-zinc-500 block mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full bg-zinc-100 border border-zinc-300 rounded-lg p-2.5 text-sm font-semibold"
              >
                <option value="all">All Categories</option>
                <option value="Footwear">Footwear</option>
                <option value="Formal">Formal</option>
                <option value="Sneakers">Sneakers</option>
                <option value="Boots">Boots</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-zinc-500 block mb-2">EU Size</label>
              <div className="grid grid-cols-3 gap-2">
                {['38', '39', '40', '41', '42', '43', '44'].map((s) => (
                  <button
                    key={s}
                    onClick={() => onToggleSize(s)}
                    className={`py-2 rounded-lg text-xs font-bold border ${
                      filters.sizes.includes(s)
                        ? 'bg-[#121212] text-[#E5A83B] border-[#121212]'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                    }`}
                  >
                    EU {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-200 space-y-2">
          <button
            onClick={onClose}
            className="w-full bg-[#121212] text-[#E5A83B] font-bold py-3 rounded-xl"
          >
            Apply Filters ({totalResults} Results)
          </button>
          <button
            onClick={onResetFilters}
            className="w-full text-xs text-zinc-500 py-2"
          >
            Reset All Filters
          </button>
        </div>
      </div>
    </div>
  );
};