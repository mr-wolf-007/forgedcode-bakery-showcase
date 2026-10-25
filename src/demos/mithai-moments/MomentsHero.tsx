import React from 'react';
import { Gift, ArrowRight, Sparkles, Building2, Heart } from 'lucide-react';

interface MomentsHeroProps {
  onStartGiftFinder: () => void;
  onCorporateQuote: () => void;
}

export const MomentsHero: React.FC<MomentsHeroProps> = ({ onStartGiftFinder, onCorporateQuote }) => {
  return (
    <section className="bg-gradient-to-b from-[#FFFDF7] via-[#FFF8E7] to-[#FEF3C7]/40 py-14 sm:py-20 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-300 text-orange-900 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
              <Sparkles size={13} className="text-orange-600" />
              <span>Festive 2026 Collection • Custom Gold-Foil Name &amp; Logo Embossing</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-red-950 leading-[1.12]">
              Gifts of Pure Sweetness, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-red-700">
                Wrapped in Festive Splendor.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-stone-700 font-medium leading-relaxed max-w-xl">
              From intimate family celebrations to 1,000-unit corporate employee distributions, our luxury keepsake gift boxes elevate traditional sweets into cherished celebratory rituals.
            </p>

            {/* Value Proposition Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg text-center">
              <div className="bg-white/80 border border-amber-300 p-3 rounded-2xl shadow-xs">
                <span className="block text-lg font-black text-red-900">100%</span>
                <span className="text-[10px] sm:text-xs text-stone-600 font-bold block">Artisanal Sweets</span>
              </div>
              <div className="bg-white/80 border border-amber-300 p-3 rounded-2xl shadow-xs">
                <span className="block text-lg font-black text-red-900">Custom</span>
                <span className="text-[10px] sm:text-xs text-stone-600 font-bold block">Logo &amp; Card Print</span>
              </div>
              <div className="bg-white/80 border border-amber-300 p-3 rounded-2xl shadow-xs">
                <span className="block text-lg font-black text-red-900">50+ Cities</span>
                <span className="text-[10px] sm:text-xs text-stone-600 font-bold block">Chilled Doorstep Drop</span>
              </div>
            </div>

            {/* Dual Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onStartGiftFinder}
                className="px-7 py-4 bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                <span>Launch Interactive Gift Finder</span>
              </button>

              <button
                onClick={onCorporateQuote}
                className="px-7 py-4 bg-white border-2 border-amber-400 hover:bg-amber-50 text-red-950 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Building2 size={16} className="text-amber-700" />
                <span>Corporate Bulk Enquiry</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300 aspect-square bg-amber-950">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80"
                alt="Mithai & Moments Festive Gift Hamper"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white font-serif">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 block mb-1">
                  Festive Hamper No. 01 • The Royal Shubh Box
                </span>
                <span className="text-xl font-bold block">
                  Pistachio Baklava, Anjeer Katli &amp; Smoked Almonds
                </span>
                <span className="text-xs text-amber-100 block mt-0.5">
                  Available in keepsake velvet &amp; gold foil packaging • From ₹1,450
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
