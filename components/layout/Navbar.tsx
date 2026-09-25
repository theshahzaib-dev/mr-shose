import React from 'react';
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react';
import { BRAND_CONFIG, NAV_LINKS } from '@/lib/constants/config';
import Link from 'next/link';

interface HeaderNavigationProps {
  isScrolled: boolean;
  cartCount: number;
  wishlistCount: number;
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
  onNavigate: (name: string) => void;
  onWishlistClick: () => void;
  onCartClick: () => void;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  isScrolled,
  cartCount,
  wishlistCount,
  onOpenMobileMenu,
  onOpenSearch,
  onNavigate,
  onWishlistClick,
  onCartClick,
}) => {
  return (
    <header 
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3.5 border-b border-[#E5E7EB]' 
          : 'bg-white py-5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Left Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={onOpenMobileMenu}
              className="p-2 -ml-2 rounded-lg text-[#121212] hover:bg-[#FBF4E8] hover:text-[#E5A83B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A83B]"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Brand Logo Abstraction */}
          <a 
            href="#" 
            className="flex flex-col items-center sm:items-start group focus:outline-none focus:ring-2 focus:ring-[#E5A83B] rounded-lg p-1"
          >
            {BRAND_CONFIG.logoUrl ? (
              <img src={BRAND_CONFIG.logoUrl} alt={BRAND_CONFIG.name} className="h-8 w-auto" />
            ) : (
              <>
                <div className="flex items-center space-x-1">
                  <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#121212] font-serif">
                    MR<span className="text-[#E5A83B]">.</span>
                  </span>
                  <span className="text-2xl sm:text-3xl font-black tracking-widest text-[#E5A83B] uppercase">
                    SHOSE
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[9px] tracking-[0.25em] text-gray-500 font-bold uppercase group-hover:text-[#121212] transition-colors">
                  <span className="w-2.5 h-[1.5px] bg-[#E5A83B]" />
                  <span>{BRAND_CONFIG.tagline}</span>
                  <span className="w-2.5 h-[1.5px] bg-[#E5A83B]" />
                </div>
              </>
            )}
          </a>

          {/* Center Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.name);
                }}
                className="relative py-1 text-xs font-bold tracking-widest text-[#121212] hover:text-[#E5A83B] transition-colors uppercase group focus:outline-none focus:ring-1 focus:ring-[#E5A83B] rounded"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="absolute -top-3.5 -right-7 px-1.5 py-0.2 text-[8px] font-black bg-[#E5A83B] text-black rounded-full shadow-sm">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E5A83B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-full border border-gray-200 bg-[#F8F9FA] hover:bg-[#FBF4E8] hover:border-[#E5A83B]/50 transition-all text-xs text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#E5A83B]"
              aria-label="Open Search Modal"
            >
              <Search className="w-4 h-4 text-[#121212]" />
              <span className="hidden sm:inline-block">Search...</span>
              <kbd className="hidden md:inline-block text-[9px] bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-400 font-mono shadow-2xs">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onWishlistClick}
              className="relative p-2.5 rounded-full hover:bg-[#FBF4E8] text-[#121212] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A83B]"
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#121212] text-[#E5A83B] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-[#E5A83B]">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2.5 rounded-full hover:bg-[#FBF4E8] text-[#121212] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A83B]"
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#E5A83B] text-black text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};