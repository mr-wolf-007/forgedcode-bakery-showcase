import React, { useState } from 'react';
import { Sparkles, MessageSquare, Menu, X, Zap } from 'lucide-react';

interface SugarRushHeaderProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const SugarRushHeader: React.FC<SugarRushHeaderProps> = ({ onWhatsAppClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFBF5]/95 backdrop-blur-md border-b-2 border-[#FF6B35]">
      
      {/* High-Energy Color-Blocked Marquee Ticker */}
      <div className="bg-[#FF3366] text-white text-[11px] font-black uppercase tracking-wider py-1.5 px-4 overflow-hidden shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3 animate-pulse">
          <Zap className="w-3.5 h-3.5 text-[#FFD166]" />
          <span>⚡ FLASH DEAL: 10% OFF ON WHATSAPP ORDERS TODAY • 🎂 SAME-DAY PINATA CAKE DISPATCH • 🥟 FRESH HOT PUFFS AT 4 PM!</span>
        </div>
        <span className="hidden md:inline font-mono bg-white text-[#FF3366] px-2 py-0.5 rounded text-[10px] font-bold">CODE: RUSH10</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-between">
        
        {/* Playful Sticker-Like Brand Identity */}
        <div className="flex items-center gap-3">
          <a href="#sugar-top" className="flex items-center gap-2.5 group">
            <span className="w-10 h-10 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center text-xl font-black shadow-md transform -rotate-6 group-hover:rotate-0 transition-transform">
              🍩
            </span>
            <div>
              <span className="block font-black text-2xl tracking-tighter text-[#2B2625] leading-none">
                SUGAR<span className="text-[#FF3366]">RUSH</span>
              </span>
              <span className="block text-[10px] uppercase font-black tracking-widest text-[#FF6B35]">
                Bakery & Snack Bar
              </span>
            </div>
          </a>
        </div>

        {/* Compact Retail Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-black uppercase tracking-wider text-[#2B2625]">
          <a href="#crazy-grid" className="hover:text-[#FF6B35] transition-colors">Bestsellers</a>
          <a href="#pinata-spotlight" className="hover:text-[#FF3366] transition-colors">Pinata Cakes</a>
          <a href="#cake-builder-section" className="hover:text-[#FF6B35] transition-colors bg-[#FFD166]/40 px-3 py-1 rounded-full border border-[#FFD166]">Custom Cake Builder</a>
          <a href="#hot-puffs" className="hover:text-[#FF6B35] transition-colors">4 PM Hot Puffs</a>
          <a href="#photo-wall" className="hover:text-[#FF6B35] transition-colors">Polaroid Wall</a>
        </nav>

        {/* High-Contrast Order CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onWhatsAppClick("Hey Sugar Rush! I want to order cakes and snacks right away!")}
            className="px-5 py-2.5 rounded-full bg-[#FF6B35] hover:bg-[#FF3366] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-500/20 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#FFD166]" />
            <span>Fast Order</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#2B2625]"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t-2 border-[#FF6B35] px-6 py-5 space-y-3 font-black text-sm uppercase tracking-wider text-[#2B2625]">
          <a href="#crazy-grid" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#FF6B35]">Bestsellers</a>
          <a href="#pinata-spotlight" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#FF3366]">Pinata Cakes</a>
          <a href="#cake-builder-section" onClick={() => setMenuOpen(false)} className="block py-1 text-[#FF3366]">Custom Cake Builder</a>
          <a href="#hot-puffs" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#FF6B35]">4 PM Hot Puffs</a>
          <a href="#photo-wall" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#FF6B35]">Polaroid Wall</a>
          <button
            onClick={() => {
              setMenuOpen(false);
              onWhatsAppClick();
            }}
            className="w-full mt-2 py-3 rounded-full bg-[#FF6B35] text-white text-xs font-black uppercase tracking-wider"
          >
            WhatsApp Fast Order
          </button>
        </div>
      )}

    </header>
  );
};
