import React from 'react';
import { Send, Phone, Mail, MapPin, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] text-zinc-400 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Banner */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Join The Mr. Shose Privilege Club</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Subscribe for exclusive drops, private flash sales, and PKR 1,000 off your first order.
            </p>
          </div>
          <div className="flex w-full lg:w-auto max-w-md">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="bg-black text-white text-xs px-4 py-3 rounded-l-xl border border-zinc-700 focus:outline-none focus:border-[#E5A83B] flex-1 min-w-0"
            />
            <button className="bg-[#E5A83B] text-black font-bold text-xs px-5 py-3 rounded-r-xl hover:bg-amber-400 transition-colors flex items-center space-x-1.5 whitespace-nowrap">
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-zinc-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[#E5A83B] flex items-center justify-center text-black font-black text-lg">
                MR
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                MR. <span className="text-[#E5A83B]">SHOSE</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Pakistan's premier destination for handcrafted Italian formal footwear, athletic runners, and luxury leather boots. Built with premium materials for timeless style and comfort.
            </p>
            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-center space-x-2 text-zinc-300">
                <Phone className="w-4 h-4 text-[#E5A83B]" />
                <span>+92 300 0000000 (Mon-Sat, 10am - 7pm)</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                <Mail className="w-4 h-4 text-[#E5A83B]" />
                <span>support@mrshose.com</span>
              </div>
            </div>
          </div>

          {/* Quick Shop */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Shop Collections</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">Italian Oxfords</a></li>
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">Double Monk Straps</a></li>
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">MemoryGel Sneakers</a></li>
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">Chelsea Leather Boots</a></li>
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">New Season Arrivals</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Customer Care</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">7-Day Size Exchange</a></li>
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">Shoe Size Guide</a></li>
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">Order via WhatsApp</a></li>
              <li><a href="#" className="hover:text-[#E5A83B] transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Store Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Guarantees</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2">
                <Truck className="w-4 h-4 text-[#E5A83B] shrink-0 mt-0.5" />
                <span>Free Courier Delivery on orders above Rs. 5,000</span>
              </div>
              <div className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#E5A83B] shrink-0 mt-0.5" />
                <span>100% Authentic Genuine Leather Guarantee</span>
              </div>
              <div className="flex items-start space-x-2">
                <RotateCcw className="w-4 h-4 text-[#E5A83B] shrink-0 mt-0.5" />
                <span>Hassle-free size replacement policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Branding Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 MR. SHOSE. All Rights Reserved. STEP INTO STYLE.</p>
          <p className="font-mono text-zinc-400">
            Designed & Developed by <span className="text-[#E5A83B] font-bold">Muhammad Shahzaib</span>
          </p>
        </div>
      </div>
    </footer>
  );
};