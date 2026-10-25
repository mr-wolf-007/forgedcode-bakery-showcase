import React from 'react';
import { MapPin, Clock, Shield, Phone, Mail } from 'lucide-react';

export const MaisonFooter: React.FC = () => {
  return (
    <footer className="bg-[#060608] text-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Haute Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Maison Brand */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-2xl font-serif tracking-[0.3em] uppercase text-white font-light block">
              Maison Éclair
            </span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#e2b472] font-mono block">
              Haute Pâtisserie &amp; Salon de Thé
            </span>
            <p className="text-xs font-serif text-[#8e8e94] leading-relaxed max-w-sm pt-2">
              A private confectionery house founded on classical French disciplines, single-estate cacao terroirs, and architectural precision.
            </p>
            <div className="pt-2 text-[11px] text-[#e2b472] font-mono">
              PARIS · MUMBAI (COLABA)
            </div>
          </div>

          {/* Col 2: The Salon */}
          <div className="lg:col-span-3 space-y-3 text-xs font-serif text-[#a5a5ab]">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white font-mono block mb-2">
              Le Salon de Thé
            </span>
            <p className="flex items-start gap-2 text-[#c5c5cb]">
              <MapPin size={14} className="text-[#e2b472] mt-0.5 shrink-0" />
              <span>
                Lobby Arcade, The Taj Mahal Palace<br />
                Apollo Bunder, Colaba, Mumbai 400001
              </span>
            </p>
            <p className="flex items-start gap-2 pt-1 text-[#c5c5cb]">
              <Clock size={14} className="text-[#e2b472] mt-0.5 shrink-0" />
              <span>
                Mardi — Dimanche: 12:00 — 23:00<br />
                (Fermé le Lundi)
              </span>
            </p>
          </div>

          {/* Col 3: Etiquette & Protocol */}
          <div className="lg:col-span-3 space-y-3 text-xs font-serif text-[#a5a5ab]">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white font-mono block mb-2">
              Salon Etiquette
            </span>
            <p className="text-[#c5c5cb] leading-relaxed">
              Attire: <strong className="text-white font-normal">Smart Elegant.</strong> We politely decline sportswear, beach attire, and open footwear inside the tasting salon.
            </p>
            <p className="text-[#8e8e94] text-[11px] pt-1">
              Children over age 10 are warmly welcomed for afternoon tea services.
            </p>
          </div>

          {/* Col 4: Direct Requisitions */}
          <div className="lg:col-span-2 space-y-3 text-xs font-mono">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white font-mono block mb-2">
              Conciergerie
            </span>
            <a
              href="tel:+919876543210"
              className="block text-[#e2b472] hover:text-[#f3d29a] transition-colors"
            >
              +91 98765 43210
            </a>
            <a
              href="mailto:concierge@maisoneclair.com"
              className="block text-[#a5a5ab] hover:text-white transition-colors"
            >
              concierge@maisoneclair.com
            </a>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-[#a5a5ab]">
                Valet Available
              </span>
            </div>
          </div>

        </div>

        {/* Sub-footer Copyright & ForgeDCode Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#636369] gap-4">
          <p>© {new Date().getFullYear()} Maison Éclair Haute Pâtisserie. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Demonstration Concept crafted by <span className="text-[#e2b472]">ForgeDCode</span> for Luxury Patisserie &amp; Salon Showcase.
          </p>
        </div>

      </div>
    </footer>
  );
};
