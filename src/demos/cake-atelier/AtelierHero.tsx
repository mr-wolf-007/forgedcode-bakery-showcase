import React from 'react';
import { ArrowRight, Sparkles, Feather } from 'lucide-react';

interface AtelierHeroProps {
  onExplorePortfolio: () => void;
  onStartCustomizer: () => void;
}

export const AtelierHero: React.FC<AtelierHeroProps> = ({ onExplorePortfolio, onStartCustomizer }) => {
  return (
    <section id="hero" className="relative bg-[#FFFDFB] text-stone-800 py-16 sm:py-24 border-b border-pink-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 border border-pink-200 bg-pink-50/80 px-3.5 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase text-pink-700 font-serif">
              <Sparkles size={11} className="text-pink-500" />
              <span>Haute Confectionery · By Appointment Only</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-stone-900 tracking-tight leading-[1.08]">
              Cakes Crafted as <br />
              <span className="italic font-normal text-pink-600">
                Edible Fine Art.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-serif leading-relaxed max-w-lg">
              We design showpiece celebration cakes and multi-tiered wedding sculptures. Every creation is hand-crafted with wafer paper florals, textured bas-relief, and delicate palette knife buttercream.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onStartCustomizer}
                className="px-8 py-4 bg-stone-900 hover:bg-pink-700 text-pink-50 rounded-full text-xs tracking-[0.2em] uppercase font-serif transition-all duration-300 shadow-xl shadow-stone-900/10 flex items-center justify-center gap-2"
              >
                <span>Design Your Cake</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={onExplorePortfolio}
                className="px-8 py-4 border border-stone-300 hover:border-pink-500 text-stone-700 hover:text-pink-600 rounded-full text-xs tracking-[0.2em] uppercase font-serif transition-colors"
              >
                View 2026 Archive
              </button>
            </div>

            {/* Studio Metrics */}
            <div className="pt-8 border-t border-pink-100 grid grid-cols-3 gap-6 font-serif text-stone-700">
              <div>
                <span className="block text-2xl font-light text-stone-900">100%</span>
                <span className="text-[10px] tracking-wider uppercase text-stone-400 font-sans block mt-0.5">
                  Hand-Sculpted
                </span>
              </div>
              <div>
                <span className="block text-2xl font-light text-stone-900">4 Tiers</span>
                <span className="text-[10px] tracking-wider uppercase text-stone-400 font-sans block mt-0.5">
                  Structural Heights
                </span>
              </div>
              <div>
                <span className="block text-2xl font-light text-stone-900">3 Weeks</span>
                <span className="text-[10px] tracking-wider uppercase text-stone-400 font-sans block mt-0.5">
                  Advance Lead Time
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual (Tall Centerpiece Cake) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-pink-100 aspect-[3/4] sm:aspect-[4/5] border border-pink-200 group">
              <img
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=85"
                alt="The Cake Atelier Multi-Tiered Floral Wedding Cake"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>

              {/* Floating Specification Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-pink-100 text-stone-800 shadow-lg">
                <span className="text-[10px] tracking-[0.25em] uppercase text-pink-600 font-serif block mb-1">
                  Commission Highlight · Wedding No. 412
                </span>
                <h3 className="text-xl font-serif font-light text-stone-900">
                  The Botanical Cascata
                </h3>
                <p className="text-xs font-serif text-stone-500 mt-1">
                  3-Tiered Swiss Meringue Buttercream with hand-wired sugar peonies and 24k gold foil leafing. Serves 80 guests.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
