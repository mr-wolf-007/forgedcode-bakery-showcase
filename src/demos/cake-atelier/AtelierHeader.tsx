import React, { useState } from 'react';
import { Menu, X, Sparkles, Calendar, ChevronRight } from 'lucide-react';

interface AtelierHeaderProps {
  onInquireClick: () => void;
}

export const AtelierHeader: React.FC<AtelierHeaderProps> = ({ onInquireClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Studio Advisory */}
      <div className="bg-[#FAF5FF] border-b border-[#F3E8FF] py-2 px-4 text-center text-[11px] tracking-[0.25em] uppercase text-stone-600 font-serif">
        <span>Bespoke Cake Commissions For Weddings &amp; Galas • Now Booking Autumn &amp; Winter Dates</span>
      </div>

      <header className="sticky top-0 z-40 bg-[#FFFDFB]/90 backdrop-blur-md border-b border-pink-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Studio Brand Mark */}
          <div className="flex flex-col">
            <a href="#hero" className="group">
              <span className="text-xl sm:text-2xl font-serif font-light tracking-[0.2em] uppercase text-stone-800 group-hover:text-pink-600 transition-colors">
                The Cake Atelier
              </span>
              <span className="block text-[9px] tracking-[0.35em] uppercase text-stone-400 font-sans mt-0.5">
                Bespoke Sugar Architecture &amp; Fine Celebration Cakes
              </span>
            </a>
          </div>

          {/* Portfolio Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-stone-600 font-serif">
            <a href="#portfolio" className="hover:text-pink-600 transition-colors">
              Portfolio
            </a>
            <a href="#customizer" className="hover:text-pink-600 transition-colors">
              Cake Journey
            </a>
            <a href="#process" className="hover:text-pink-600 transition-colors">
              The Process
            </a>
            <a href="#flavors" className="hover:text-pink-600 transition-colors">
              Flavors &amp; Pricing
            </a>
          </nav>

          {/* Inquire Action Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onInquireClick}
              className="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-pink-700 text-pink-50 text-[11px] tracking-[0.22em] uppercase font-serif transition-all duration-300 shadow-md"
            >
              Commission a Cake
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-stone-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDFB] border-b border-pink-100 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-xs tracking-[0.2em] uppercase font-serif text-stone-700">
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-pink-50 flex items-center justify-between"
              >
                <span>The Portfolio</span>
                <ChevronRight size={14} className="text-pink-400" />
              </a>
              <a
                href="#customizer"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-pink-50 flex items-center justify-between"
              >
                <span>Customization Journey</span>
                <ChevronRight size={14} className="text-pink-400" />
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-pink-50 flex items-center justify-between"
              >
                <span>Atelier Process</span>
                <ChevronRight size={14} className="text-pink-400" />
              </a>
              <a
                href="#flavors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-pink-50 flex items-center justify-between"
              >
                <span>Flavors &amp; Sizing</span>
                <ChevronRight size={14} className="text-pink-400" />
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
