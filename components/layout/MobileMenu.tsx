import React from 'react';
import { X, PhoneCall } from 'lucide-react';
import { BRAND_CONFIG, NAV_LINKS } from '@/lib/constants/config';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (name: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex" role="dialog" aria-modal="true">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between z-10 p-6">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <div>
              <h3 className="font-black text-xl text-[#121212] tracking-wider">MR<span className="text-[#E5A83B]">.</span> SHOSE</h3>
              <p className="text-[9px] tracking-widest text-gray-500 font-bold uppercase">{BRAND_CONFIG.tagline}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-[#121212] focus:outline-none focus:ring-2 focus:ring-[#E5A83B] rounded-lg"
              aria-label="Close Mobile Navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="py-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  onClose();
                  onNavigate(link.name);
                }}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold uppercase hover:bg-[#FBF4E8] hover:text-[#E5A83B] transition-colors"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[9px] font-extrabold bg-[#E5A83B] text-black rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-100 pt-6 space-y-3">
          <a
            href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}`}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-[#121212] text-white py-3.5 rounded-xl font-bold text-xs uppercase hover:bg-[#E5A83B] hover:text-black transition-colors shadow-md"
          >
            <PhoneCall className="w-4 h-4 text-[#E5A83B]" />
            <span>Express Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};