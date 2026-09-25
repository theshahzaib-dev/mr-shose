import React from 'react';
import { Truck, ShieldCheck, PhoneCall, Zap } from 'lucide-react';

export const FeatureHighlights: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[#FBF4E8]/50 transition-colors">
            <div className="p-3 bg-[#121212] text-[#E5A83B] rounded-xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-[#121212] uppercase">Free Nationwide Express</h3>
              <p className="text-xs text-gray-500">Dispatched within 24 hours</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[#FBF4E8]/50 transition-colors">
            <div className="p-3 bg-[#121212] text-[#E5A83B] rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-[#121212] uppercase">Authentic Leather Guarantee</h3>
              <p className="text-xs text-gray-500">Premium materials & stitch</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[#FBF4E8]/50 transition-colors">
            <div className="p-3 bg-[#121212] text-[#E5A83B] rounded-xl">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-[#121212] uppercase">Direct WhatsApp Orders</h3>
              <p className="text-xs text-gray-500">Instant checkout assistance</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[#FBF4E8]/50 transition-colors">
            <div className="p-3 bg-[#121212] text-[#E5A83B] rounded-xl">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-[#121212] uppercase">Hassle-Free Exchange</h3>
              <p className="text-xs text-gray-500">7-day size replacement policy</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};