import React, { useState } from 'react';
import { Sparkles, MessageSquare, Menu, X, ChevronRight, Gift } from 'lucide-react';
import { DEMO_CONFIGS } from '../../data/demo-config';
import { triggerWhatsAppAction, WhatsAppEventDetail } from '../../utils/whatsapp';

interface MaharajaHeaderProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const MaharajaHeader: React.FC<MaharajaHeaderProps> = ({ onWhatsAppClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 bg-[#FFFDF9] border-b border-[#C59B27]/30 text-[#420D13]">
      {/* Slim Seasonal Announcement Ribbon */}
      <div className="bg-[#420D13] text-[#E5C158] text-[11px] uppercase tracking-[0.25em] py-2 px-4 text-center border-b border-[#C59B27]/40 flex items-center justify-center gap-2 font-serif">
        <Sparkles className="w-3 h-3 text-[#C59B27]" />
        <span>Diwali & Royal Wedding Trousseau Reservations Now Open • Pure Bilona Desi Ghee</span>
      </div>

      {/* Editorial Masthead with Centered Provenance Wordmark */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between border-b border-[#C59B27]/20 pb-5">
          {/* Left: Provenance Meta */}
          <div className="hidden md:block text-[11px] uppercase tracking-[0.2em] font-serif text-[#C59B27]">
            Jaipur Haveli • Estd 1942
          </div>

          {/* Center: Regal Wordmark */}
          <div className="text-center">
            <a href="#maharaja-top" className="inline-block group">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[#420D13] group-hover:text-[#58111A] transition-colors">
                MAHARAJA MITHAI
              </span>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C59B27] mt-1 font-serif">
                Purveyors of Royal Confections & Fine Gifting
              </span>
            </a>
          </div>

          {/* Right: WhatsApp Concierge Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onWhatsAppClick("Namaste Maharaja Mithai! I would like to consult your royal gifting team.")}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C59B27] text-[#420D13] hover:bg-[#420D13] hover:text-[#E5C158] text-[11px] uppercase font-serif tracking-[0.18em] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Royal Concierge</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#420D13] hover:bg-[#F5EFE6] rounded-md"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Minimal Editorial Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-10 pt-4 text-xs font-serif tracking-[0.2em] uppercase text-[#420D13]/80">
          <a href="#mithai-catalogue" className="hover:text-[#C59B27] transition-colors">The Sweets Catalogue</a>
          <a href="#velvet-gifting" className="hover:text-[#C59B27] transition-colors">Velvet Hampers</a>
          <a href="#heritage-story" className="hover:text-[#C59B27] transition-colors">The 85-Year Legacy</a>
          <a href="#wedding-trousseau" className="hover:text-[#C59B27] transition-colors">Wedding Requisition</a>
          <a href="#haveli-visit" className="hover:text-[#C59B27] transition-colors">Haveli Boutique</a>
        </nav>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3 font-serif text-sm uppercase tracking-widest text-[#420D13] border-t border-[#C59B27]/20 mt-4">
            <a href="#mithai-catalogue" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#C59B27]">The Sweets Catalogue</a>
            <a href="#velvet-gifting" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#C59B27]">Velvet Hampers</a>
            <a href="#heritage-story" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#C59B27]">The 85-Year Legacy</a>
            <a href="#wedding-trousseau" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#C59B27]">Wedding Requisition</a>
            <a href="#haveli-visit" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#C59B27]">Haveli Boutique</a>
            <button
              onClick={() => {
                setMenuOpen(false);
                onWhatsAppClick();
              }}
              className="w-full mt-2 py-2.5 rounded-full bg-[#420D13] text-[#E5C158] text-xs font-serif uppercase tracking-widest"
            >
              Royal Concierge (WhatsApp)
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
