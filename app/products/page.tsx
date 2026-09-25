"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Noto_Sans_Bassa_Vah } from "next/font/google";
import { HeaderNavigation } from "@/components/layout/Navbar";
import { Toast } from "@/components/common/Toast";
import { TopAnnouncementBar } from "@/components/layout/TopAnnouncementBar";
import { SearchModal } from "@/components/searchs/SearchModal";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";

const ProductList = () => {
     const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isSearchOpen, setIsSearchOpen] = useState(false);
      const [searchQuery, setSearchQuery] = useState("");
      const [cartCount, setCartCount] = useState(2);
      const [wishlistCount] = useState(4);
      const [toastMessage, setToastMessage] = useState("");
  const searchParams = useSearchParams();

  const search = searchParams.get("category");

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


      <Footer />
    </div>
  );
};

export default ProductList;
