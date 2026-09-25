"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { HERO_SLIDES } from "@/lib/constants/config";
import { Toast } from "@/components/common/Toast";
import { TopAnnouncementBar } from "@/components/layout/TopAnnouncementBar";
import { HeaderNavigation } from "@/components/layout/Navbar";
import { SearchModal } from "@/components/searchs/SearchModal";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { HeroSlider } from "@/components/layout/HeroSlider";
import { FeatureHighlights } from "@/components/products/FeatureHighlights";
import { Footer } from "@/components/layout/Footer";
import { Filter, Grid, List, ArrowUpDown, Search, RotateCcw } from 'lucide-react';
import { FilterState, SortMode, ViewMode } from '@/lib/types/products';
import { executeProductSearchService } from '@/lib/services/searchService';
import { FilterSidebar } from '@/components/searchs/FilterSidebar';
import { ActiveFilterChips } from '@/components/searchs/ActiveFilterChips';
import { ProductCard } from '@/components/products/ProductCard';
import { Pagination } from '@/components/common/Pagination';
import { CodeInspector } from '@/components/common/CodeInspector';
import { MobileFilterModal } from '@/components/searchs/MobileFilterModal';
import { CategoryGrid } from "@/components/products/CategoryGrid";
import { PromotionalBanner } from "@/components/markeeting/PromotionalBanner";
import { TestimonialSection } from "@/components/reviews/TestimonialSection";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount] = useState(4);
  const [toastMessage, setToastMessage] = useState("");

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    brand: [],
    gender: "all",
    minPrice: 0,
    maxPrice: 30000,
    minRating: 0,
    sizes: [],
    inStockOnly: false,
    badge: "all",
  });

  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [showCodeInspector, setShowCodeInspector] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [filters, sortMode, currentPage]);

  const searchResults = useMemo(() => {
    return executeProductSearchService(filters, sortMode, currentPage, 6);
  }, [filters, sortMode, currentPage]);

  const generateURLQuery = useCallback(() => {
    const params = new URLSearchParams();
    if (filters.search) params.set("search", filters.search);
    if (filters.category !== "all") params.set("category", filters.category);
    if (filters.gender !== "all") params.set("gender", filters.gender);
    if (filters.brand.length > 0) params.set("brand", filters.brand.join(","));
    if (filters.minPrice > 0) params.set("minPrice", String(filters.minPrice));
    if (filters.maxPrice < 30000)
      params.set("maxPrice", String(filters.maxPrice));
    if (filters.minRating > 0) params.set("rating", String(filters.minRating));
    if (filters.sizes.length > 0) params.set("sizes", filters.sizes.join(","));
    if (filters.inStockOnly) params.set("inStock", "true");
    if (filters.badge !== "all") params.set("badge", filters.badge);
    if (sortMode !== "featured") params.set("sort", sortMode);
    if (currentPage > 1) params.set("page", String(currentPage));

    const str = params.toString();
    return str ? `/products?${str}` : "/products";
  }, [filters, sortMode, currentPage]);

  const handleSearchChange = (val: string) => {
    setFilters((prev) => ({ ...prev, search: val }));
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setFilters((prev) => ({ ...prev, category: cat }));
    setCurrentPage(1);
  };

  const handleGenderChange = (gender: string) => {
    setFilters((prev) => ({ ...prev, gender }));
    setCurrentPage(1);
  };

  const toggleBrand = (brandName: string) => {
    setFilters((prev) => {
      const exists = prev.brand.includes(brandName);
      const updated = exists
        ? prev.brand.filter((b) => b !== brandName)
        : [...prev.brand, brandName];
      return { ...prev, brand: updated };
    });
    setCurrentPage(1);
  };

  const toggleSize = (size: string) => {
    setFilters((prev) => {
      const exists = prev.sizes.includes(size);
      const updated = exists
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes: updated };
    });
    setCurrentPage(1);
  };

  const resetAllFilters = () => {
    setFilters({
      search: "",
      category: "all",
      brand: [],
      gender: "all",
      minPrice: 0,
      maxPrice: 30000,
      minRating: 0,
      sizes: [],
      inStockOnly: false,
      badge: "all",
    });
    setSortMode("featured");
    setCurrentPage(1);
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.search) count++;
    if (filters.category !== "all") count++;
    if (filters.gender !== "all") count++;
    if (filters.brand.length > 0) count += filters.brand.length;
    if (filters.minPrice > 0 || filters.maxPrice < 30000) count++;
    if (filters.minRating > 0) count++;
    if (filters.sizes.length > 0) count += filters.sizes.length;
    if (filters.inStockOnly) count++;
    if (filters.badge !== "all") count++;
    return count;
  }, [filters]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) setIsPlaying(false);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, prefersReducedMotion, nextSlide]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#121212] font-sans antialiased overflow-x-hidden selection:bg-[#E5A83B] selection:text-black">
      <Toast message={toastMessage} />
      <TopAnnouncementBar />
      <HeaderNavigation
        isScrolled={isScrolled}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigate={(name) => showToast(`Navigated to ${name}`)}
        onWishlistClick={() =>
          showToast(`Wishlist saved (${wishlistCount} items)`)
        }
        onCartClick={() => {
          setCartCount((prev) => prev + 1);
          showToast("Item added! Cart updated.");
        }}
      />
      <SearchModal
        isOpen={isSearchOpen}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClose={() => setIsSearchOpen(false)}
        onSelectSuggestion={(name) => {
          setIsSearchOpen(false);
          showToast(`Selected: ${name}`);
        }}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={(name) => showToast(`Navigated to ${name}`)}
      />
      <HeroSlider
        currentSlide={currentSlide}
        isPlaying={isPlaying}
        prefersReducedMotion={prefersReducedMotion}
        onSetSlide={setCurrentSlide}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onNextSlide={nextSlide}
        onPrevSlide={prevSlide}
        onActionClick={(text) => showToast(`Navigating to ${text}`)}
        setIsPlaying={setIsPlaying}
      />
      <FeatureHighlights />

      {/* 1. Category Tiles Grid */}
    <CategoryGrid onSelectCategory={(cat) => setCategoryFilter(cat)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#121212]">
              {filters.category === "all"
                ? "All Footwear Collection"
                : filters.category}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Showing{" "}
              <span className="font-semibold text-black">
                {searchResults.total}
              </span>{" "}
              premium footwear models matching your criteria
            </p>
          </div>

          <div className="flex items-center space-x-3 self-end md:self-auto">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center space-x-2 bg-white border border-zinc-300 px-3.5 py-2 rounded-lg text-sm font-medium hover:border-[#E5A83B]"
            >
              <Filter className="w-4 h-4 text-[#E5A83B]" />
              <span>Filters ({activeFilterCount})</span>
            </button>

            <div className="flex items-center space-x-2 bg-white border border-zinc-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded ${viewMode === "grid" ? "bg-[#121212] text-[#E5A83B]" : "text-zinc-500 hover:text-black"}`}
                aria-label="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded ${viewMode === "list" ? "bg-[#121212] text-[#E5A83B]" : "text-zinc-500 hover:text-black"}`}
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <select
                value={sortMode}
                onChange={(e) => {
                  setSortMode(e.target.value as SortMode);
                  setCurrentPage(1);
                }}
                className="appearance-none bg-white border border-zinc-300 rounded-lg pl-3 pr-8 py-2 text-sm font-medium focus:outline-none focus:border-[#E5A83B] cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest Arrivals</option>
                <option value="bestseller">Sort: Best Sellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-zinc-500 absolute right-2.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        <ActiveFilterChips
          filters={filters}
          activeFilterCount={activeFilterCount}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onGenderChange={handleGenderChange}
          onToggleBrand={toggleBrand}
          onToggleSize={toggleSize}
          onResetFilters={resetAllFilters}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
          {/* Desktop Filters Sidebar */}
          <FilterSidebar
            filters={filters}
            activeFilterCount={activeFilterCount}
            onGenderChange={handleGenderChange}
            onCategoryChange={handleCategoryChange}
            onToggleBrand={toggleBrand}
            onToggleSize={toggleSize}
            onMaxPriceChange={(val) =>
              setFilters((prev) => ({ ...prev, maxPrice: val }))
            }
            onMinRatingChange={(val) =>
              setFilters((prev) => ({ ...prev, minRating: val }))
            }
            onInStockToggle={(val) =>
              setFilters((prev) => ({ ...prev, inStockOnly: val }))
            }
            onResetFilters={resetAllFilters}
          />

          <div className="lg:col-span-3 space-y-6">
            {/* Query Pipeline Code Inspector Panel */}
            {showCodeInspector && (
              <CodeInspector queryPipeline={searchResults.queryPipeline} />
            )}

            {/* Loading Skeleton Indicator */}
            {isSearching ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="bg-white rounded-2xl p-4 border border-zinc-200 animate-pulse space-y-4"
                  >
                    <div className="h-48 bg-zinc-200 rounded-xl"></div>
                    <div className="h-4 bg-zinc-200 rounded w-3/4"></div>
                    <div className="h-4 bg-zinc-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : searchResults.products.length === 0 ? (
              /* Empty State Result */
              <div className="bg-white rounded-2xl p-12 text-center border border-zinc-200 space-y-4 my-8">
                <div className="w-16 h-16 bg-[#FBF4E8] text-[#E5A83B] rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  No Footwear Found
                </h3>
                <p className="text-sm text-zinc-500 max-w-md mx-auto">
                  We couldn't find any shoes matching your specific combination
                  of filters. Try clearing some options or broadening your
                  search.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="inline-flex items-center space-x-2 bg-[#121212] text-[#E5A83B] font-bold px-6 py-3 rounded-xl hover:bg-black transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset Search Filters</span>
                </button>
              </div>
            ) : (
              /* Product Listing Layout */
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {searchResults.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}

            {/* Pagination Component */}
            <Pagination
              currentPage={searchResults.page}
              totalPages={searchResults.totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </main>

      {/* 3. Promotional Sale Banner */}
    <PromotionalBanner />

    {/* 4. Customer Reviews & Social Proof */}
    <TestimonialSection />

      {/* Mobile Filter Modal */}
      <MobileFilterModal
        isOpen={isMobileFilterOpen}
        filters={filters}
        totalResults={searchResults.total}
        onClose={() => setIsMobileFilterOpen(false)}
        onCategoryChange={handleCategoryChange}
        onToggleSize={toggleSize}
        onResetFilters={resetAllFilters}
      />
      <Footer />
    </div>
  );
}
