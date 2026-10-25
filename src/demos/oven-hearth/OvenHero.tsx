import React from 'react';
import { ArrowRight, Flame, Heart, Compass } from 'lucide-react';

interface OvenHeroProps {
  onExploreMenu: () => void;
  onReserveClick: () => void;
}

export const OvenHero: React.FC<OvenHeroProps> = ({ onExploreMenu, onReserveClick }) => {
  return (
    <section id="hero" className="bg-[#FDFBF7] py-14 sm:py-20 border-b border-[#C2593F]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 border border-[#C2593F]/40 bg-[#F5EFE6] px-3.5 py-1.5 rounded-md text-[11px] tracking-wider uppercase text-[#C2593F] font-mono">
              <Flame size={13} className="text-[#C2593F]" />
              <span>Firebrick Deck Oven Fired With Seasoned Tamarind Wood</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#2E1F1A] leading-[1.12]">
              A Warm Hearth, <br />
              <span className="italic text-[#C2593F]">
                Honest Dough,
              </span> and Golden Crusts.
            </h2>

            {/* Storybook Note */}
            <div className="bg-[#FAF5ED] p-6 rounded-2xl border-l-4 border-[#C2593F] text-sm font-serif text-[#3E2F29] leading-relaxed italic shadow-xs">
              "We have never used commercial bread improvers or chemical leaveners. We allow natural flour, stone-milled grains, pure dairy butter, and forty-eight hours of cool fermentation to do what they have done for centuries."
            </div>

            <p className="text-xs sm:text-sm text-[#4E3D36] font-serif leading-relaxed">
              Step into the shop for hot spiced potato puffs, warm milk bread pull-aparts, crunchy double-baked chai rusks, and melt-in-mouth nankhatai cookies pulled fresh throughout the day.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="px-7 py-3.5 bg-[#2E1F1A] hover:bg-[#C2593F] text-[#FDFBF7] rounded-lg text-xs tracking-wider uppercase font-serif transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Today's Baking Menu</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={onReserveClick}
                className="px-7 py-3.5 border-2 border-[#C2593F] text-[#C2593F] hover:bg-[#C2593F] hover:text-[#FDFBF7] rounded-lg text-xs tracking-wider uppercase font-serif transition-colors text-center"
              >
                Reserve Morning Bread
              </button>
            </div>

            {/* Quick Baker Credo */}
            <div className="pt-6 border-t border-stone-200 flex items-center gap-6 text-xs text-[#606C38] font-mono">
              <span>● Non-GMO Grains</span>
              <span>● Farmhouse Butter</span>
              <span>● Wood-Deck Fired</span>
            </div>
          </div>

          {/* Right Visual (Warm Rustic Bread & Wooden Peel) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#F5EFE6] bg-[#2E1F1A] aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85"
                alt="Oven & Hearth Rustic Wood-Fired Bread"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Photo Caption Tag */}
              <div className="absolute bottom-6 left-6 right-6 text-[#FDFBF7] font-serif">
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-200 block mb-1">
                  Batch No. 01 • Morning Hearth Loaf
                </span>
                <span className="text-xl font-normal block">
                  Heritage Country Boule
                </span>
                <span className="text-xs text-stone-300 block mt-0.5">
                  Baked directly upon the refractory firebricks • ₹240
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
