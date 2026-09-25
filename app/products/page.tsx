"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { HeaderNavigation } from "@/components/layout/Navbar";
import { Toast } from "@/components/common/Toast";
import { TopAnnouncementBar } from "@/components/layout/TopAnnouncementBar";
import { SearchModal } from "@/components/searchs/SearchModal";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";

// 1. Move searchParams logic into a dedicated component
const ProductListContent = ({ showToast }: { showToast: (msg: string) => void }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");

  return (
    <div>
      {/* Render search results or category specific UI here */}
      {search && <p>Category: {search}</p>}
    </div>
  );
};

// 2. Main exported component wrapping the inner component in Suspense
const ProductList = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount] = useState(4);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  return (
    <div>
      <Toast message={toastMessage} />
      <TopAnnouncementBar />
      <HeaderNavigation
        isScrolled={isScrolled}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigate={(name) => showToast(`Navigated to ${name}`)}
        onWishlistClick={() => showToast(`Wishlist saved (${wishlistCount} items)`)}
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

      {/* 3. Wrap component reading query params in Suspense */}
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductListContent showToast={showToast} />
      </Suspense>

      <Footer />
    </div>
  );
};

export default ProductList;