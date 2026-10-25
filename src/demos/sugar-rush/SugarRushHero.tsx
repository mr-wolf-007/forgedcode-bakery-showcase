import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, Cake, Flame, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

interface SugarRushHeroProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const SugarRushHero: React.FC<SugarRushHeroProps> = ({ onWhatsAppClick }) => {
  return (
    <section className="relative bg-[#FFFBF5] text-[#2B2625] overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b-2 border-orange-100">
      
      {/* Background Graphic Polka Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffd166_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* PLAYFUL MAXIMALIST COLLAGE COMPOSITION: Oversized Display Typography Layered with Offset Photo Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Area: Giant Expressive Typography + Tilted Sticker Badges */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tilted Sticker Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block transform -rotate-2 px-3.5 py-1 rounded-full bg-[#FFD166] text-[#2B2625] text-xs font-black uppercase tracking-wider border-2 border-[#2B2625] shadow-[2px_2px_0px_#2B2625]">
                🎉 Fresh Bakes Daily
              </span>
              <span className="inline-block transform rotate-2 px-3.5 py-1 rounded-full bg-[#FF3366] text-white text-xs font-black uppercase tracking-wider border-2 border-[#2B2625] shadow-[2px_2px_0px_#2B2625]">
                🎂 2-Hour Cake Rush
              </span>
              <span className="inline-block transform -rotate-1 px-3.5 py-1 rounded-full bg-white text-[#FF6B35] text-xs font-black uppercase tracking-wider border-2 border-[#FF6B35]">
                🥟 Hot Puffs at 4 PM
              </span>
            </div>

            {/* Giant Display Typography */}
            <h1 className="font-sans font-black text-5xl sm:text-7xl xl:text-8xl tracking-tight leading-[0.92] text-[#2B2625]">
              CRAZY GOOD <br />
              <span className="text-[#FF6B35] underline decoration-[#FFD166] decoration-8">TREATS.</span> <br />
              <span className="text-[#FF3366]">HOT BAKES.</span>
            </h1>

            <p className="text-sm sm:text-base text-stone-600 max-w-lg font-bold leading-relaxed">
              Towering birthday cakes with smashable chocolate pinatas, warm Nutella-filled donuts, gooey Lotus brownies, and flaky spicy paneer puffs baked fresh every single morning.
            </p>

            {/* Interactive Action Badges */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#cake-builder-section"
                className="px-8 py-4 rounded-2xl bg-[#FF6B35] hover:bg-[#E8531D] text-white font-black text-xs uppercase tracking-wider transition-all shadow-[4px_4px_0px_#2B2625] border-2 border-[#2B2625] active:translate-x-0.5 active:translate-y-0.5 text-center flex items-center justify-center gap-2"
              >
                <Cake className="w-4 h-4" />
                <span>Build Your Birthday Cake</span>
              </a>

              <button
                onClick={() => onWhatsAppClick("Hey Sugar Rush! What are today's fresh donut flavors and cakes?")}
                className="px-8 py-4 rounded-2xl bg-white hover:bg-[#FFF8E7] text-[#2B2625] font-black text-xs uppercase tracking-wider transition-all border-2 border-[#2B2625] shadow-[4px_4px_0px_#2B2625] active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#FF6B35]" />
                <span>WhatsApp Instant Order</span>
              </button>
            </div>

            {/* Micro Stats Bar */}
            <div className="flex items-center gap-6 pt-4 text-xs font-black text-stone-500">
              <div className="flex items-center gap-1.5 text-[#2B2625]">
                <Heart className="w-4 h-4 text-[#FF3366] fill-[#FF3366]" />
                <span>4.9★ Local Rating</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#2B2625]">
                <Sparkles className="w-4 h-4 text-[#FFD166] fill-[#FFD166]" />
                <span>100% Eggless Options</span>
              </div>
            </div>

          </div>

          {/* Right Area: Irregular Food Collage with Overlapping Tilted Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-md mx-auto h-[480px]">
              
              {/* Photo 1: Big Nutella Donut (Center Tilted Tile) */}
              <div className="absolute top-0 right-0 w-64 sm:w-72 aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-xl transform rotate-3 hover:rotate-0 transition-transform z-10 bg-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=700&auto=format&fit=crop&q=80"
                  alt="Towering chocolate donuts with sprinkles"
                  fallbackTitle="Loaded Glazed Donuts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#FF3366] text-white px-2.5 py-1 rounded-xl text-[10px] font-black uppercase shadow">
                  Nutella Overload
                </div>
              </div>

              {/* Photo 2: Birthday Cake (Offset Left Tile) */}
              <div className="absolute bottom-0 left-0 w-60 sm:w-68 aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform -rotate-4 hover:rotate-0 transition-transform z-20 bg-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=700&auto=format&fit=crop&q=80"
                  alt="Confetti birthday cake with pastel macarons"
                  fallbackTitle="Celebration Cakes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#FF6B35] text-white px-2.5 py-1 rounded-xl text-[10px] font-black uppercase shadow">
                  Smash Pinata Cake
                </div>
              </div>

              {/* Floating Floating Price Tag Badge */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-30 transform -rotate-12 bg-[#FFD166] border-2 border-[#2B2625] px-4 py-2 rounded-2xl shadow-[4px_4px_0px_#2B2625] text-center">
                <span className="block text-[9px] uppercase font-black text-[#2B2625]">Today's Deal</span>
                <span className="block font-black text-base text-[#2B2625]">BOGO Donuts</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
