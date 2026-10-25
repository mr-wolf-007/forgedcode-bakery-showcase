import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Flame } from 'lucide-react';

interface CocoaHeroProps {
  onQuickFilter: (filter: string) => void;
}

export const CocoaHero: React.FC<CocoaHeroProps> = ({ onQuickFilter }) => {
  return (
    <section className="bg-gradient-to-b from-[#FAF5EE] to-[#F2E8DC] py-12 sm:py-16 border-b border-[#271810]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 font-serif">
            <div className="inline-flex items-center gap-2 border border-[#C68B59]/40 bg-white/70 px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest text-[#B85D38]">
              <Sparkles size={11} />
              <span>Small-Batch Bean-to-Bar Atelier • 72-Hour Granite Conched</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-[#271810] tracking-tight leading-[1.12]">
              Single-Estate Cacao, <br />
              <span className="italic font-normal text-[#B85D38]">
                Stoneground Micro-Batches.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#5C4535] leading-relaxed max-w-xl font-sans">
              Directly traded from smallholder cacao groves in Idukki, Kerala. We roast at low temperatures to preserve volatile berry, honey, and tobacco notes—free from soy lecithin and palm oils.
            </p>

            {/* Quick Filter Tag Buttons */}
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px]">
              <button
                onClick={() => onQuickFilter('Dark Chocolate 70%+')}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#271810]/20 hover:border-[#C68B59] text-[#271810] transition-colors"
              >
                Dark Bars (70%+)
              </button>
              <button
                onClick={() => onQuickFilter('Praline & Bonbons')}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#271810]/20 hover:border-[#C68B59] text-[#271810] transition-colors"
              >
                Praline Bonbons
              </button>
              <button
                onClick={() => onQuickFilter('Tasting Gift Coffrets')}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#271810]/20 hover:border-[#C68B59] text-[#271810] transition-colors"
              >
                Luxury Gift Coffrets
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#C68B59]/30 aspect-[4/3] bg-[#1C120C]">
              <img
                src="https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80"
                alt="Cocoa Craft Artisan Bean to Bar Chocolate Slabs"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-200">
                  Featured: 72% Malabar Forest Single Origin Slab • ₹380
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
