import React from 'react';
import { ShoppingBag, Search, Sparkles, Filter, X } from 'lucide-react';

interface CocoaHeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const CocoaHeader: React.FC<CocoaHeaderProps> = ({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange
}) => {
  return (
    <>
      {/* Top Shipping Ticker */}
      <div className="bg-[#1C120C] text-[#C68B59] text-[11px] font-mono tracking-wider py-2 px-4 text-center border-b border-[#C68B59]/20 flex items-center justify-center gap-4">
        <span>Temperature-Controlled Chilled Insulated Packaging Across India</span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span className="hidden sm:inline text-white/80">Free Shipping on Orders Above ₹1,200</span>
      </div>

      <header className="sticky top-0 z-40 bg-[#FAF5EE]/95 backdrop-blur-md border-b border-[#271810]/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#271810] text-[#C68B59] flex items-center justify-center font-serif text-lg font-bold border border-[#C68B59]/40 shadow-xs">
              CC
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-light text-[#271810] tracking-wide block">
                Cocoa Craft
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-[#8C6D58] block">
                Artisan Bean-to-Bar Chocolatier
              </span>
            </div>
          </div>

          {/* Quick Search Input */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={e => onSearchChange(e.target.value)}
                placeholder="Search dark bars, hazelnut bonbons, gift boxes..."
                className="w-full bg-white border border-[#271810]/20 rounded-full py-2 pl-9 pr-4 text-xs text-[#271810] focus:outline-none focus:border-[#C68B59]"
              />
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C6D58]" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 bg-[#271810] hover:bg-[#3D2518] text-[#FAF5EE] px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all shadow-md active:scale-95"
          >
            <ShoppingBag size={15} className="text-[#C68B59]" />
            <span>Bag</span>
            <span className="bg-[#C68B59] text-[#1C120C] font-bold px-1.5 py-0.5 rounded-full text-[10px]">
              {cartCount}
            </span>
          </button>

        </div>
      </header>
    </>
  );
};
