import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Clock, MapPin, ChevronRight, Phone } from 'lucide-react';

interface MaisonHeaderProps {
  onReserveClick: () => void;
}

export const MaisonHeader: React.FC<MaisonHeaderProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Advisory Bar */}
      <div className="bg-[#080809] border-b border-[#e2b472]/15 text-[#e2b472]/80 text-[11px] tracking-[0.25em] uppercase py-2 px-4 text-center font-serif flex items-center justify-center gap-6">
        <span className="hidden sm:inline">L'Atelier Taj Mahal Palace · Colaba, Mumbai</span>
        <span className="hidden md:inline text-white/30">|</span>
        <span>Afternoon Tasting Salon: 14:00 — 19:00</span>
        <span className="hidden md:inline text-white/30">|</span>
        <a 
          href="https://wa.me/919876543210?text=Bonjour%20Maison%20Éclair,%20I%20would%20like%20to%20inquire%20about%20a%20private%20tasting%20salon%20reservation."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e2b472] hover:text-[#f3d29a] transition-colors underline underline-offset-4"
        >
          Concierge WhatsApp
        </a>
      </div>

      {/* Main Luxury Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0d0d0f]/95 backdrop-blur-md border-b border-[#e2b472]/20 py-3 shadow-2xl'
            : 'bg-[#0d0d0f]/70 backdrop-blur-sm border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Origin & Coordinates */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] tracking-[0.2em] text-[#a5a5ab] uppercase font-mono">
            <span className="flex items-center gap-1.5 text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e2b472] animate-pulse"></span>
              Salon Ouvert
            </span>
            <span className="text-white/20">/</span>
            <span>18° 55' N · 72° 50' E</span>
          </div>

          {/* Center: Haute Brand Mark */}
          <div className="flex flex-col items-center text-center">
            <a href="#hero" className="group">
              <span className="text-xl sm:text-2xl font-serif tracking-[0.3em] uppercase text-white font-light group-hover:text-[#e2b472] transition-colors">
                Maison Éclair
              </span>
              <span className="block text-[9px] tracking-[0.45em] uppercase text-[#e2b472]/70 font-sans mt-0.5">
                Haute Pâtisserie &amp; Salon de Thé
              </span>
            </a>
          </div>

          {/* Right: Actions & Menu */}
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden md:flex items-center gap-6 text-xs tracking-[0.18em] uppercase text-[#d1d1d6]">
              <a href="#collection" className="hover:text-[#e2b472] transition-colors py-1">
                La Collection
              </a>
              <a href="#atelier" className="hover:text-[#e2b472] transition-colors py-1">
                L'Atelier
              </a>
              <a href="#salon" className="hover:text-[#e2b472] transition-colors py-1">
                Le Salon
              </a>
              <a href="#concierge" className="hover:text-[#e2b472] transition-colors py-1">
                Concierge
              </a>
            </nav>

            {/* Salon Booking Trigger */}
            <button
              onClick={onReserveClick}
              className="px-4 py-2 text-[11px] tracking-[0.22em] uppercase font-medium text-[#0d0d0f] bg-[#e2b472] hover:bg-[#f3d29a] transition-all duration-300 shadow-lg shadow-[#e2b472]/10"
            >
              Reserve Salon
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0d0f] border-b border-[#e2b472]/20 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-4 text-xs tracking-[0.25em] uppercase text-[#d1d1d6]">
              <a
                href="#collection"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#e2b472] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>La Collection</span>
                <ChevronRight size={14} className="text-[#e2b472]" />
              </a>
              <a
                href="#atelier"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#e2b472] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>L'Atelier des Terroirs</span>
                <ChevronRight size={14} className="text-[#e2b472]" />
              </a>
              <a
                href="#salon"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#e2b472] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>Le Salon de Thé</span>
                <ChevronRight size={14} className="text-[#e2b472]" />
              </a>
              <a
                href="#concierge"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#e2b472] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>Haute Concierge</span>
                <ChevronRight size={14} className="text-[#e2b472]" />
              </a>
            </nav>

            <div className="pt-2 text-[11px] text-[#a5a5ab] font-serif space-y-1">
              <p className="flex items-center gap-2">
                <MapPin size={12} className="text-[#e2b472]" />
                Lobby Arcade, The Taj Mahal Palace, Colaba
              </p>
              <p className="flex items-center gap-2">
                <Clock size={12} className="text-[#e2b472]" />
                Tasting Hours: 14:00 — 19:00 Daily
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
