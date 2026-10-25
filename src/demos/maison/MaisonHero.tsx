import React from 'react';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface MaisonHeroProps {
  onExploreClick: () => void;
  onReserveClick: () => void;
}

export const MaisonHero: React.FC<MaisonHeroProps> = ({ onExploreClick, onReserveClick }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen bg-[#0a0a0c] text-white flex flex-col justify-between overflow-hidden">
      {/* Background Cinematic Visual with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=2000&q=85"
          alt="Maison Éclair Haute Patisserie Sculptural Creation"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15] scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Radial dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c]/85 via-transparent to-[#0a0a0c]/85"></div>
      </div>

      {/* Top spacing */}
      <div className="relative z-10 pt-12 sm:pt-20"></div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        {/* Haute Kicker */}
        <div className="inline-flex items-center gap-3 border border-[#e2b472]/30 bg-[#0d0d10]/60 backdrop-blur-md px-4 py-1.5 mb-6 text-[11px] tracking-[0.3em] uppercase text-[#e2b472]">
          <Sparkles size={12} className="text-[#e2b472]" />
          <span>Collection Automne · Hiver 2026</span>
        </div>

        {/* Grand Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-[0.08em] uppercase text-[#fdfcf9] leading-[1.08] mb-6">
          L'Architectonique
          <span className="block italic text-[#e2b472] font-normal tracking-[0.05em] mt-1">
            du Goût.
          </span>
        </h1>

        {/* Sub-editorial Statement */}
        <p className="max-w-2xl mx-auto text-[#c5c5cb] font-serif text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide mb-10">
          Where classical French pastry disciplines collide with high-jewelry precision. 
          Crafted with Grand Cru single-plantation cacao, AOP Normandy butter, and 24-karat edible gold.
        </p>

        {/* Dual Haute Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#e2b472] hover:bg-[#f3d29a] text-[#0d0d0f] text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 shadow-2xl shadow-[#e2b472]/20 flex items-center justify-center gap-3"
          >
            <span>Explore The Collection</span>
            <ArrowRight size={14} />
          </button>

          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 text-xs tracking-[0.25em] uppercase font-light transition-all duration-300 backdrop-blur-sm"
          >
            Private Salon Reservations
          </button>
        </div>
      </div>

      {/* Bottom Atelier Haute Metrics Bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#08080a]/80 backdrop-blur-md py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/5">
          <div className="px-2">
            <span className="block text-[#e2b472] text-xl sm:text-2xl font-serif font-light">72 Layers</span>
            <span className="block text-[10px] tracking-[0.2em] text-[#8e8e94] uppercase font-mono mt-1">
              Inverse Lamination
            </span>
          </div>

          <div className="px-2">
            <span className="block text-[#e2b472] text-xl sm:text-2xl font-serif font-light">70% Guanaja</span>
            <span className="block text-[10px] tracking-[0.2em] text-[#8e8e94] uppercase font-mono mt-1">
              Grand Cru Valrhona
            </span>
          </div>

          <div className="px-2">
            <span className="block text-[#e2b472] text-xl sm:text-2xl font-serif font-light">24 Karat</span>
            <span className="block text-[10px] tracking-[0.2em] text-[#8e8e94] uppercase font-mono mt-1">
              Florentine Gold Leaf
            </span>
          </div>

          <div className="px-2">
            <span className="block text-[#e2b472] text-xl sm:text-2xl font-serif font-light">12 Guests</span>
            <span className="block text-[10px] tracking-[0.2em] text-[#8e8e94] uppercase font-mono mt-1">
              Intimate Daily Salon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
