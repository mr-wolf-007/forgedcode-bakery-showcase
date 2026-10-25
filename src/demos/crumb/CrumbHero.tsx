import React from 'react';
import { ArrowDown, Flame, Clock } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

interface CrumbHeroProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const CrumbHero: React.FC<CrumbHeroProps> = ({ onWhatsAppClick }) => {
  return (
    <section className="bg-[#FAF7F2] text-[#36271F] border-b border-[#36271F]/10">
      
      {/* Split-Screen Hero: Oversized Typographic Column Left, Tall Editorial Photograph Right */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Oversized Typography & Micro Batch Tracker */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Live Oven Status Strip */}
            <div className="inline-flex items-center gap-3 py-1.5 px-3.5 bg-[#EDE5D8] text-[#36271F] text-[11px] uppercase tracking-widest font-sans font-medium rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#526E48] animate-pulse" />
              <span>Deck Oven Batch #03 Pulled at 07:15 AM</span>
            </div>

            {/* Oversized Architectural Typography */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-light text-[#36271F] leading-[0.98] tracking-tight">
                Slow Bread. <br />
                <span className="italic font-serif text-[#526E48]">Stone Hearth.</span> <br />
                Wild Yeast.
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#685449] max-w-lg leading-relaxed font-sans font-normal">
              Stoneground flours milled at low temperature, forty-eight hours of low-temperature fermentation, and water from our mountain wells. We bake in small batches daily until the cooling racks are empty.
            </p>

            {/* Minimalist Action Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-4">
              <a
                href="#bake-board"
                className="px-7 py-3.5 bg-[#36271F] hover:bg-[#526E48] text-[#FAF7F2] text-xs uppercase tracking-widest font-sans font-medium transition-colors"
              >
                Inspect Today's Bake Board
              </a>

              <button
                onClick={() => onWhatsAppClick("Hello Crumb & Co.! I'd like to ask which loaves are currently on the racks.")}
                className="text-xs uppercase tracking-widest font-sans font-semibold text-[#36271F] hover:text-[#526E48] underline underline-offset-8 transition-colors"
              >
                Inquire on WhatsApp
              </button>
            </div>

            {/* Baker's Micro Ledger */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#36271F]/10 text-xs font-sans">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#685449]">Hydration</span>
                <span className="font-serif text-xl font-bold text-[#36271F]">82%</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#685449]">Cold Proof</span>
                <span className="font-serif text-xl font-bold text-[#36271F]">48 hrs</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#685449]">Deck Temp</span>
                <span className="font-serif text-xl font-bold text-[#36271F]">260°C</span>
              </div>
            </div>

          </div>

          {/* Right: Tall Editorial Bakery Photograph with Natural Daylight */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] max-h-[680px] w-full overflow-hidden bg-[#EDE5D8] border border-[#36271F]/10 shadow-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=1000&auto=format&fit=crop&q=85"
                alt="Flour-dusted artisan sourdough loaf cooling on pure linen cloth in morning daylight"
                fallbackTitle="Country Sourdough on Linen"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 border border-[#36271F]/10 text-xs font-sans flex items-center justify-between">
                <div>
                  <span className="font-serif font-bold text-sm block">Country Sourdough Boule</span>
                  <span className="text-[#685449] text-[11px]">800g • Stoneground Emmer & Spelt</span>
                </div>
                <span className="font-serif font-bold text-base text-[#36271F]">₹320</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Compact Daily Special / Baking Hours Information Strip (Clean Typographic Table) */}
      <div className="bg-[#EDE5D8]/70 border-t border-[#36271F]/10 py-4 px-6 lg:px-12 text-xs font-sans">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 text-stone-700">
          <div className="flex items-center gap-2 font-semibold uppercase tracking-wider text-[#36271F]">
            <Clock className="w-3.5 h-3.5 text-[#526E48]" />
            <span>Daily Oven Timeline:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px] tracking-wide">
            <span><strong>07:00</strong> Country Boules & Baguettes</span>
            <span className="text-[#36271F]/30">•</span>
            <span><strong>08:30</strong> Flaky Normandy Butter Croissants</span>
            <span className="text-[#36271F]/30">•</span>
            <span><strong>11:30</strong> Rosemary Maldon Focaccia Slabs</span>
            <span className="text-[#36271F]/30">•</span>
            <span><strong>15:30</strong> Evening Dark Chocolate Babka</span>
          </div>
        </div>
      </div>

    </section>
  );
};
