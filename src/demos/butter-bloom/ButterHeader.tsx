import React, { useState } from 'react';
import { Coffee, Menu, X, Sun, Clock, MapPin, Sparkles } from 'lucide-react';

interface ButterHeaderProps {
  onTableBookClick: () => void;
}

export const ButterHeader: React.FC<ButterHeaderProps> = ({ onTableBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Daylight Strip */}
      <div className="bg-[#FEF9C3] text-[#713F12] text-[11px] font-sans font-medium py-2 px-4 border-b border-yellow-200 text-center flex items-center justify-center gap-6">
        <span className="flex items-center gap-1.5">
          <Sun size={13} className="text-amber-600" />
          <span>Morning Sunlight &amp; Viennoiserie • Open Daily from 8:00 AM</span>
        </span>
        <span className="hidden sm:inline text-yellow-600/40">•</span>
        <span className="hidden sm:inline">Pet-Friendly Veranda &amp; Specialty Espresso Bar</span>
      </div>

      <header className="sticky top-0 z-40 bg-[#FFFDF8]/90 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FEF08A] text-[#713F12] flex items-center justify-center font-serif text-lg font-bold border border-yellow-300 shadow-xs">
              <Coffee size={20} />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif text-[#2B1810] tracking-tight block">
                Butter &amp; Bloom
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-sans text-[#606C38] block mt-0.5 font-bold">
                Bakery Café &amp; Coffee Atelier
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase font-sans font-semibold tracking-wider text-stone-700">
            <a href="#pairings" className="hover:text-amber-700 transition-colors">
              Pairings
            </a>
            <a href="#menu" className="hover:text-amber-700 transition-colors">
              Daylight Menu
            </a>
            <a href="#atmosphere" className="hover:text-amber-700 transition-colors">
              Atmosphere
            </a>
            <a href="#visit" className="hover:text-amber-700 transition-colors">
              Location &amp; Hours
            </a>
          </nav>

          {/* Table / Coffee Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onTableBookClick}
              className="px-5 py-2.5 rounded-full bg-[#2B1810] hover:bg-[#4A2810] text-[#FFFDF8] text-xs uppercase tracking-wider font-sans font-bold transition-all shadow-sm"
            >
              Reserve a Table
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-800"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDF8] border-b border-stone-200 px-6 py-5 space-y-3 text-xs uppercase font-bold tracking-wider text-stone-800">
            <a
              href="#pairings"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-stone-100"
            >
              Coffee &amp; Pastry Pairings
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-stone-100"
            >
              Daylight Menu
            </a>
            <a
              href="#atmosphere"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-stone-100"
            >
              Café Atmosphere
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-stone-100"
            >
              Location &amp; Table Inquiry
            </a>
          </div>
        )}
      </header>
    </>
  );
};
