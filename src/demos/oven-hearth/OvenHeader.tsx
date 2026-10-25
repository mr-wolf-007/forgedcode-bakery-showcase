import React, { useState } from 'react';
import { Menu, X, Clock, MapPin, Phone } from 'lucide-react';

interface OvenHeaderProps {
  onReserveClick: () => void;
}

export const OvenHeader: React.FC<OvenHeaderProps> = ({ onReserveClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Nostalgic Strip */}
      <div className="bg-[#2E1F1A] text-[#F5EFE6] text-[11px] py-2 px-4 border-b border-[#C2593F]/30 text-center font-serif flex items-center justify-center gap-6">
        <span className="hidden sm:inline">First Morning Bread Pulled from Hearth at 6:30 AM</span>
        <span className="hidden md:inline text-white/30">•</span>
        <span>Afternoon Hot Puffs Ready at 3:30 PM Daily</span>
        <span className="hidden md:inline text-white/30">•</span>
        <a
          href="https://wa.me/919876543210?text=Hello%20Oven%20%26%20Hearth,%20I%20would%20like%20to%20reserve%20fresh%20bread%20and%20puffs."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C2593F] hover:text-amber-200 underline underline-offset-4"
        >
          WhatsApp Bakery Counter
        </a>
      </div>

      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b-2 border-[#C2593F]/20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Vintage Wordmark */}
          <div className="flex flex-col">
            <a href="#hero" className="group">
              <span className="text-2xl sm:text-3xl font-serif text-[#2E1F1A] tracking-wider uppercase group-hover:text-[#C2593F] transition-colors">
                Oven &amp; Hearth
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#606C38] font-mono mt-0.5">
                Neighborhood Brick-Oven Bakery • Estd. 1964
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.18em] uppercase font-serif text-[#2E1F1A]">
            <a href="#story" className="hover:text-[#C2593F] transition-colors">
              Our Story
            </a>
            <a href="#menu" className="hover:text-[#C2593F] transition-colors">
              Hearth Bakes &amp; Puffs
            </a>
            <a href="#biscuits" className="hover:text-[#C2593F] transition-colors">
              Chai Biscuits
            </a>
            <a href="#visit" className="hover:text-[#C2593F] transition-colors">
              Oven Schedule
            </a>
          </nav>

          {/* Reserve Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={onReserveClick}
              className="px-5 py-2.5 rounded-lg bg-[#C2593F] hover:bg-[#a84831] text-[#FDFBF7] text-xs tracking-wider uppercase font-serif transition-colors shadow-sm"
            >
              Reserve Morning Bake
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2E1F1A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7] border-b border-[#C2593F]/20 px-6 py-6 space-y-4 font-serif text-sm">
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-stone-200 text-[#2E1F1A]"
            >
              Our Story
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-stone-200 text-[#2E1F1A]"
            >
              Hearth Bakes &amp; Puffs
            </a>
            <a
              href="#biscuits"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-stone-200 text-[#2E1F1A]"
            >
              Traditional Chai Biscuits
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-stone-200 text-[#2E1F1A]"
            >
              Hours &amp; Directions
            </a>
          </div>
        )}
      </header>
    </>
  );
};
