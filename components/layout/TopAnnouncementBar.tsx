import React from 'react';
import { PhoneCall } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/constants/config';

export const TopAnnouncementBar: React.FC = () => {
  return (
    <aside className="bg-[#121212] text-white text-xs py-2.5 px-4 border-b border-white/10 relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center space-x-2">
          <span className="inline-block px-2 py-0.5 text-[9px] font-black bg-[#E5A83B] text-black rounded uppercase tracking-wider">
            OFFICIAL
          </span>
          <p className="text-gray-300 font-medium">
            Free Express Courier Across Pakistan on Orders Over Rs. 5,000
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-gray-300">
          <a 
            href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 hover:text-[#E5A83B] transition-colors focus:outline-none focus:ring-1 focus:ring-[#E5A83B] rounded"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#E5A83B]" />
            <span className="font-semibold text-white">Order Hotline:</span>
            <span>{BRAND_CONFIG.whatsappFormatted}</span>
          </a>
          <span className="text-gray-600">|</span>
          <span className="hover:text-white cursor-pointer transition-colors">100% Authentic Guarantee</span>
        </div>
      </div>
    </aside>
  );
};