import React from 'react';
import { ArrowRight, Coffee, Sun, Heart, Sparkles } from 'lucide-react';

interface ButterHeroProps {
  onExploreMenu: () => void;
  onVisitClick: () => void;
}

export const ButterHero: React.FC<ButterHeroProps> = ({ onExploreMenu, onVisitClick }) => {
  return (
    <section className="bg-[#FFFDF8] py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FEF9C3] border border-yellow-300 text-[#713F12] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
              <Sun size={13} className="text-amber-600" />
              <span>Daylight Café &amp; Micro-Roastery • Bandra West &amp; Indiranagar</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif text-[#2B1810] leading-[1.1] tracking-tight">
              Morning Sunlight, <br />
              <span className="italic font-light text-[#606C38]">
                Specialty Coffee,
              </span> &amp; Warm Flaky Layers.
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed max-w-xl">
              Butter &amp; Bloom is an open-veranda neighborhood bakery café designed for lingering mornings. We brew direct-trade coffees from Chikmagalur smallholders and laminate 48 layers of cultured butter into our viennoiserie before sunrise.
            </p>

            {/* Lifestyle Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg font-sans">
              <div className="bg-[#FBF8EF] border border-stone-200 p-3 rounded-2xl text-center">
                <span className="block text-base sm:text-lg font-bold text-[#2B1810]">8:00 AM</span>
                <span className="text-[10px] text-stone-500 font-medium block">Fresh Croissants Daily</span>
              </div>
              <div className="bg-[#FBF8EF] border border-stone-200 p-3 rounded-2xl text-center">
                <span className="block text-base sm:text-lg font-bold text-[#2B1810]">88+ Score</span>
                <span className="text-[10px] text-stone-500 font-medium block">Specialty Arabica</span>
              </div>
              <div className="bg-[#FBF8EF] border border-stone-200 p-3 rounded-2xl text-center">
                <span className="block text-base sm:text-lg font-bold text-[#2B1810]">Pet Friendly</span>
                <span className="text-[10px] text-stone-500 font-medium block">Garden Veranda</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onExploreMenu}
                className="px-7 py-3.5 bg-[#2B1810] hover:bg-[#4A2810] text-[#FFFDF8] rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Browse Daylight Menu</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={onVisitClick}
                className="px-7 py-3.5 bg-white border border-stone-300 hover:border-[#606C38] text-stone-800 rounded-full text-xs font-bold uppercase tracking-wider transition-colors text-center"
              >
                Hours &amp; Directions
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FEF9C3] aspect-[4/5] bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Butter & Bloom Sunlit Cafe Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white font-serif">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#FEF08A] block mb-1">
                  Morning Ritual • Table 04
                </span>
                <span className="text-xl font-normal block">
                  Flat White &amp; Frangipane Croissant
                </span>
                <span className="text-xs text-stone-200 block mt-0.5">
                  Freshly ground Baba Budan estate beans &amp; toasted almond flakes
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
