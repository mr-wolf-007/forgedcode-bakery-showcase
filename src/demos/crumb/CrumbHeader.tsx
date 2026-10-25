import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface CrumbHeaderProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const CrumbHeader: React.FC<CrumbHeaderProps> = ({ onWhatsAppClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#FAF7F2] border-b border-[#36271F]/10 sticky top-0 z-30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        
        {/* Left: Minimalist Typographic Logo */}
        <div className="flex items-center gap-6">
          <a href="#crumb-top" className="font-serif text-2xl font-bold tracking-tight text-[#36271F]">
            Crumb & Co.
          </a>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-[#526E48] font-sans">
            Artisan Hearth & Sourdough
          </span>
        </div>

        {/* Center: Clean Typographic Nav with Underline Hover Interactions */}
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-sans font-medium text-[#36271F]/80">
          <a href="#bake-board" className="hover:text-[#526E48] pb-1 border-b border-transparent hover:border-[#526E48] transition-all">Daily Board</a>
          <a href="#artisan-grid" className="hover:text-[#526E48] pb-1 border-b border-transparent hover:border-[#526E48] transition-all">The Bakes</a>
          <a href="#ferment-process" className="hover:text-[#526E48] pb-1 border-b border-transparent hover:border-[#526E48] transition-all">48hr Method</a>
          <a href="#bakery-journal" className="hover:text-[#526E48] pb-1 border-b border-transparent hover:border-[#526E48] transition-all">Journal</a>
          <a href="#bakehouse-visit" className="hover:text-[#526E48] pb-1 border-b border-transparent hover:border-[#526E48] transition-all">Hours & Visit</a>
        </nav>

        {/* Right: Understated Reserve Trigger */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onWhatsAppClick("Hello Crumb & Co.! I would like to reserve fresh sourdough from today's morning pull.")}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#36271F] hover:text-[#526E48] transition-colors"
          >
            <span>Reserve Loaf</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#36271F]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#36271F]/10 px-6 py-6 space-y-4 text-sm font-sans uppercase tracking-widest text-[#36271F]">
          <a href="#bake-board" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-[#526E48]">Daily Board</a>
          <a href="#artisan-grid" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-[#526E48]">The Bakes</a>
          <a href="#ferment-process" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-[#526E48]">48hr Method</a>
          <a href="#bakery-journal" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-[#526E48]">Journal</a>
          <a href="#bakehouse-visit" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-[#526E48]">Hours & Visit</a>
          <button
            onClick={() => {
              setMobileOpen(false);
              onWhatsAppClick();
            }}
            className="w-full mt-2 py-3 rounded-none border border-[#36271F] text-[#36271F] text-xs font-semibold uppercase tracking-widest"
          >
            Reserve Loaf (WhatsApp)
          </button>
        </div>
      )}
    </header>
  );
};
