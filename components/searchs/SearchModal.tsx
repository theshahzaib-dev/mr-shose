import React from 'react';
import { Search, X } from 'lucide-react';
import { BRAND_CONFIG, SEARCH_SUGGESTIONS } from '@/lib/constants/config';

interface SearchModalProps {
  isOpen: boolean;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onClose: () => void;
  onSelectSuggestion: (name: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  searchQuery,
  onSearchChange,
  onClose,
  onSelectSuggestion,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-16 px-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Search Products"
    >
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-100 flex items-center space-x-3 bg-[#F8F9FA]">
          <Search className="w-5 h-5 text-[#E5A83B]" />
          <input
            type="text"
            placeholder="Search by shoe name, leather style, or category..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base font-medium text-[#121212] focus:outline-none placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E5A83B]"
            aria-label="Close search modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 block">
            Instant Recommendations
          </span>
          {SEARCH_SUGGESTIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectSuggestion(item.name)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FBF4E8] cursor-pointer transition-colors border border-transparent hover:border-[#E5A83B]/30"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#121212] text-[#E5A83B] flex items-center justify-center font-black text-xs">
                  MS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121212]">{item.name}</h4>
                  <span className="text-xs text-gray-500">{item.category}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-[#121212] block">
                  {BRAND_CONFIG.currency} {item.price}
                </span>
                <span className="text-[10px] bg-[#E5A83B]/20 text-black px-2 py-0.5 rounded font-bold">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#121212] text-white p-3 text-center text-xs flex justify-between items-center px-5">
          <span className="text-gray-400">Press ESC to close</span>
          <a 
            href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}`}
            target="_blank"
            rel="noreferrer"
            className="text-[#E5A83B] font-bold hover:underline"
          >
            Need Size Advice? Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};