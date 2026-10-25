import React, { useState } from 'react';
import { Phone, MapPin, Clock, Search, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';

interface ChennaiHeaderProps {
  onSearchChange?: (query: string) => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  orderCount: number;
  onOpenOrderSummary: () => void;
}

export const ChennaiHeader: React.FC<ChennaiHeaderProps> = ({
  onSearchChange,
  activeCategory,
  onSelectCategory,
  orderCount,
  onOpenOrderSummary
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (onSearchChange) onSearchChange(e.target.value);
  };

  return (
    <>
      {/* Top Utility Storefront Strip */}
      <div className="bg-[#991B1B] text-amber-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-amber-300" />
              <span>T. Nagar &amp; Mylapore, Chennai</span>
            </span>
            <span className="hidden md:inline text-amber-300/40">•</span>
            <span className="hidden md:flex items-center gap-1">
              <Clock size={13} className="text-amber-300" />
              <span>Open Daily: 7:00 AM — 10:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-medium">
            <span className="bg-amber-400 text-red-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              Pure Cow Ghee
            </span>
            <a
              href="https://wa.me/919876543210?text=Vanakkam%20Chennai%20Sweet%20Corner,%20I%20would%20like%20to%20order%20sweets."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-amber-200 hover:text-white transition-colors"
            >
              <Phone size={12} />
              <span>Direct Order: +91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Retail Brand & Search Header */}
      <header className="sticky top-0 z-40 bg-[#FFFBEB] border-b-2 border-amber-300 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-amber-300 font-extrabold text-lg border-2 border-amber-400 shadow">
              CS
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-black text-red-900 tracking-tight leading-none uppercase">
                Chennai Sweet Corner
              </h1>
              <span className="text-[10px] sm:text-xs text-amber-800 font-semibold tracking-wider block mt-0.5">
                Authentic South Indian Sweets &amp; Crispy Savouries
              </span>
            </div>
          </div>

          {/* Search Bar (Retail Quick Search) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search Mysore Pak, Tirunelveli Halwa, Murukku..."
                className="w-full bg-white border-2 border-amber-300 focus:border-red-600 rounded-full py-2 pl-10 pr-4 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none transition-colors shadow-inner"
              />
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-700" />
            </div>
          </div>

          {/* Quick Order Cart / WhatsApp Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOrderSummary}
              className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-amber-100 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <ShoppingBag size={16} />
              <span className="hidden sm:inline">Order Bag</span>
              <span className="bg-amber-400 text-red-950 px-1.5 py-0.5 rounded-full text-[10px] font-black">
                {orderCount}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-red-900 hover:bg-amber-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search sweets or savouries..."
              className="w-full bg-white border border-amber-300 rounded-lg py-1.5 pl-9 pr-3 text-xs text-stone-900 focus:outline-none"
            />
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-700" />
          </div>
        </div>
      </header>
    </>
  );
};
