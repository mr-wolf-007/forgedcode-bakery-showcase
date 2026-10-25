import React, { useState } from 'react';
import { Gift, Sparkles, MessageCircle, Phone, Menu, X } from 'lucide-react';

interface MomentsHeaderProps {
  onCorporateClick: () => void;
  onGiftFinderClick: () => void;
}

export const MomentsHeader: React.FC<MomentsHeaderProps> = ({
  onCorporateClick,
  onGiftFinderClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Festive Campaign Top Banner */}
      <div className="bg-gradient-to-r from-red-800 via-orange-700 to-amber-700 text-amber-100 text-[11px] py-2 px-4 text-center font-serif flex items-center justify-center gap-4 shadow-sm">
        <Sparkles size={13} className="text-amber-300" />
        <span className="font-bold tracking-wide uppercase">
          Diwali &amp; Wedding Season 2026 Corporate Gifting Bookings Now Active
        </span>
        <span className="hidden sm:inline text-white/30">•</span>
        <span className="hidden sm:inline">Pan-India Express Chilled Delivery</span>
      </div>

      <header className="sticky top-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-md border-b-2 border-amber-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md">
              <Gift size={20} />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-black text-red-950 tracking-tight leading-none block">
                Mithai &amp; Moments
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-orange-800 font-sans block mt-0.5">
                Festive Sweets &amp; Celebratory Gift Hampers
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button
              onClick={onGiftFinderClick}
              className="hover:text-orange-700 transition-colors flex items-center gap-1.5"
            >
              <Sparkles size={14} className="text-amber-600" />
              <span>Interactive Gift Finder</span>
            </button>
            <a href="#hampers" className="hover:text-orange-700 transition-colors">
              Curated Gift Boxes
            </a>
            <button
              onClick={onCorporateClick}
              className="hover:text-orange-700 transition-colors"
            >
              Corporate &amp; Bulk Orders
            </button>
            <a href="#personalization" className="hover:text-orange-700 transition-colors">
              Custom Branding
            </a>
          </nav>

          {/* WhatsApp Enquiry Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%20Mithai%20%26%20Moments,%20I%20would%20like%20to%20inquire%20about%20festive%20gift%20hampers."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-sm"
            >
              <MessageCircle size={15} />
              <span>Gifting Concierge</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-red-950"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDF7] border-b border-amber-200 px-6 py-5 space-y-3 text-xs font-bold uppercase text-stone-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGiftFinderClick();
              }}
              className="block w-full text-left py-2 border-b border-amber-100 text-orange-700"
            >
              ● Interactive Gift Finder
            </button>
            <a
              href="#hampers"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-amber-100"
            >
              Curated Gift Boxes
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCorporateClick();
              }}
              className="block w-full text-left py-2 border-b border-amber-100"
            >
              Corporate &amp; Bulk Gifting
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-emerald-800 font-bold"
            >
              Chat on WhatsApp
            </a>
          </div>
        )}
      </header>
    </>
  );
};
