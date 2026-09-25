import React from 'react';
import { Tag, Zap, ArrowRight } from 'lucide-react';

export const PromotionalBanner: React.FC = () => {
  return (
    <section className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-[#121212] text-white p-8 sm:p-12 border border-zinc-800 shadow-2xl">
        {/* Background Decorative Accent */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#E5A83B]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#E5A83B]/10 border border-[#E5A83B]/30 px-3 py-1 rounded-full text-[#E5A83B] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Limited Time Offer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get <span className="text-[#E5A83B]">Up To 40% OFF</span> On Formal Italian Leather
            </h2>

            <p className="text-sm text-zinc-400 max-w-lg leading-relaxed">
              Upgrade your wardrobe with handcrafted Goodyear welted Oxfords and double monk straps. Free nationwide express shipping included on all promotional orders.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button className="flex items-center space-x-2 bg-[#E5A83B] text-black font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl hover:bg-amber-400 transition-all shadow-lg active:scale-95">
                <span>Shop Sale Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center space-x-2 text-zinc-400 text-xs font-mono bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-xl">
                <Tag className="w-4 h-4 text-[#E5A83B]" />
                <span>Use Code: <strong className="text-white">MR40OFF</strong></span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-64 sm:h-72 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800"
                alt="Mr. Shose Executive Sale"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/80 backdrop-blur-md p-3 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-xs font-bold text-white">Mr. Shose Bespoke Patent Oxford</span>
                <span className="text-xs font-black text-[#E5A83B]">Rs. 21,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};