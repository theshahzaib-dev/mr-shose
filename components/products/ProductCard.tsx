import React from 'react';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { Product, ViewMode } from '@/lib/types/products';

interface ProductCardProps {
  product: Product;
  viewMode: ViewMode;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  return (
    <div
      className={`group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex ${
        viewMode === 'list' ? 'flex-col sm:flex-row' : 'flex-col'
      }`}
    >
      {/* Thumbnail Image Container */}
      <div className={`relative overflow-hidden bg-zinc-100 ${
        viewMode === 'list' ? 'sm:w-64 h-56' : 'h-64 w-full'
      }`}>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-[#121212] text-[#E5A83B] text-[11px] font-black px-2.5 py-1 rounded-full border border-[#E5A83B]/30">
            {product.discount}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-zinc-700 hover:text-red-500 hover:bg-white transition-all shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Gender Tag */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-bold uppercase text-zinc-800 tracking-wider">
          {product.gender}
        </div>
      </div>

      {/* Product Metadata Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-500 font-medium mb-1">
            <span className="text-[#E5A83B] font-bold uppercase tracking-wider">{product.brand}</span>
            <div className="flex items-center space-x-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold text-black">{product.rating}</span>
              <span className="text-zinc-400">({product.reviewCount})</span>
            </div>
          </div>

          <h3 className="font-bold text-base text-black group-hover:text-[#E5A83B] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Available Sizes List */}
          <div className="mt-3 flex items-center space-x-1 overflow-x-auto py-1">
            <span className="text-[10px] font-bold text-zinc-400 uppercase mr-1">Sizes:</span>
            {product.availableSizes.map(sz => (
              <span key={sz} className="text-[10px] bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded font-mono font-semibold">
                {sz}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between">
          <div>
            <div className="text-lg font-extrabold text-black">
              Rs. {product.price.toLocaleString()}
            </div>
            {product.compareAtPrice && (
              <div className="text-xs text-zinc-400 line-through">
                Rs. {product.compareAtPrice.toLocaleString()}
              </div>
            )}
          </div>

          <button className="flex items-center space-x-1.5 bg-[#121212] text-[#E5A83B] hover:bg-black font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all shadow-md active:scale-95">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};