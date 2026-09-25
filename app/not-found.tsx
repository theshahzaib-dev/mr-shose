'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Home,
  Search,
  ArrowRight,
  ShoppingBag,
  PhoneCall,
  RotateCcw
} from 'lucide-react';

export default function NotFound() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('q');
    if (query) {
      window.location.href = `/?search=${encodeURIComponent(query.toString())}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-between text-[#121212] selection:bg-[#E5A83B] selection:text-black">
      {/* Top Brand Banner */}
      <header className="w-full bg-[#121212] py-4 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#E5A83B] flex items-center justify-center text-black font-black text-sm group-hover:bg-amber-400 transition-colors">
              MR
            </div>
            <span className="text-base font-extrabold tracking-tight text-white">
              MR. <span className="text-[#E5A83B]">SHOSE</span>
            </span>
          </Link>

          <Link
            href="/"
            className="text-xs font-bold text-zinc-300 hover:text-[#E5A83B] transition-colors flex items-center space-x-1"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Hero Section */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 sm:py-20 flex flex-col items-center text-center justify-center">
        {/* Subtle Visual Badge */}
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-[#E5A83B]/30 px-3.5 py-1.5 rounded-full text-[#E5A83B] text-xs font-extrabold uppercase tracking-widest mb-6">
          <Compass className="w-4 h-4 animate-spin" />
          <span>Error Code: 404</span>
        </div>

        {/* Large Styled 404 Display */}
        <h1 className="text-7xl sm:text-9xl font-black text-[#121212] tracking-tighter leading-none select-none">
          4<span className="text-[#E5A83B]">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#121212] mt-4 tracking-tight">
          Looks Like You Took a Wrong Step!
        </h2>

        <p className="text-xs sm:text-base text-zinc-600 max-w-md mt-3 leading-relaxed">
          The pair or page you were looking for has moved, expired, or never existed in our shoe store. Let's get you back on track.
        </p>

        {/* Quick Search Input */}
        <div className="w-full max-w-md mt-8">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-2xl border border-zinc-300 p-1.5 shadow-md focus-within:border-[#E5A83B] transition-all"
          >
            <Search className="w-5 h-5 text-zinc-400 ml-3 shrink-0" />
            <input
              type="text"
              name="q"
              placeholder="Search sneakers, oxfords, loafers..."
              className="w-full bg-transparent text-xs sm:text-sm px-3 py-2 text-zinc-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#121212] hover:bg-[#E5A83B] hover:text-black text-white text-xs font-extrabold px-5 py-2.5 rounded-xl transition-all shadow shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="flex items-center space-x-2 bg-[#E5A83B] text-black font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl hover:bg-amber-400 transition-all shadow-lg active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Return to Store Front</span>
          </Link>

          <Link
            href="/#collections"
            className="flex items-center space-x-2 bg-white text-zinc-900 font-bold text-xs uppercase px-6 py-3.5 rounded-xl border border-zinc-300 hover:border-zinc-800 transition-all shadow-sm active:scale-95"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Popular Quick-Navigation Grid */}
        <div className="w-full mt-16 pt-12 border-t border-zinc-200">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
            Popular Footwear Categories
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'Italian Formals', href: '/?category=formal' },
              { name: 'Urban Runners', href: '/?category=sneakers' },
              { name: 'Leather Boots', href: '/?category=boots' },
              { name: 'New Arrivals', href: '/?sort=newest' },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-[#E5A83B] hover:shadow-md transition-all text-xs font-bold text-zinc-800 text-center"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Support Section */}
      <footer className="w-full bg-white border-t border-zinc-200 py-6 px-4 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 MR. SHOSE. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a
              href="https://wa.me/923020549257"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5A83B] transition-colors flex items-center space-x-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>
            <Link href="/" className="hover:text-[#E5A83B] transition-colors">
              Size Guide
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}