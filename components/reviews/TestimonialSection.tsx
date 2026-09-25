import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  comment: string;
  rating: number;
  productBought: string;
}

const REVIEWS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Hamza Malik',
    role: 'Verified Buyer',
    city: 'Lahore',
    comment: 'The quality of the Italian calfskin on the double monk strap is unbeatable. Perfect fit and fast 24-hour delivery!',
    rating: 5,
    productBought: 'Royal Italian Double Monk Strap'
  },
  {
    id: 'rev-2',
    name: 'Dr. Usman Ahmed',
    role: 'Verified Buyer',
    city: 'Karachi',
    comment: 'I stand for 8 hours a day. The Urban Runner MemoryGel insoles changed everything. Extreme comfort!',
    rating: 5,
    productBought: 'Urban Runner X Nubuck'
  },
  {
    id: 'rev-3',
    name: 'Bilal Khan',
    role: 'Verified Buyer',
    city: 'Islamabad',
    comment: 'Direct WhatsApp ordering was effortless. Smooth exchange process when I needed size 42 instead of 41.',
    rating: 5,
    productBought: 'Heritage Leather Chelsea Boot'
  }
];

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5A83B]">
            Real Customer Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121212] mt-1">
            Trusted By Over 10,000+ Shoe Enthusiasts
          </h2>
          <div className="flex items-center justify-center space-x-1 text-amber-500 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-sm font-bold text-black ml-2">4.9 / 5.0 Overall Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-zinc-200 absolute top-4 right-4" />

              <div>
                <div className="flex items-center space-x-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-black flex items-center space-x-1.5">
                      <span>{rev.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                    </h4>
                    <span className="text-[11px] text-zinc-400">{rev.city}, Pakistan</span>
                  </div>
                </div>
                <div className="mt-2 text-[10px] bg-zinc-200/60 text-zinc-600 px-2.5 py-1 rounded-md font-mono inline-block">
                  Verified Purchase: {rev.productBought}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};