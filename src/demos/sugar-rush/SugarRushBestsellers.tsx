import React from 'react';
import { MessageSquare, Sparkles, Star } from 'lucide-react';
import { MODERN_BAKERY_PRODUCTS } from '../../data/products';
import { ImageWithFallback } from '../../components/ImageWithFallback';

interface SugarRushBestsellersProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const SugarRushBestsellers: React.FC<SugarRushBestsellersProps> = ({ onWhatsAppClick }) => {
  const pinata = MODERN_BAKERY_PRODUCTS.find(p => p.id === 'sr-pinata-cake') || MODERN_BAKERY_PRODUCTS[1];
  const donut = MODERN_BAKERY_PRODUCTS.find(p => p.id === 'sr-nutella-donut') || MODERN_BAKERY_PRODUCTS[2];
  const puff = MODERN_BAKERY_PRODUCTS.find(p => p.id === 'sr-paneer-tikka-puff') || MODERN_BAKERY_PRODUCTS[4];
  const brownie = MODERN_BAKERY_PRODUCTS.find(p => p.id === 'sr-lotus-biscoff-brownie') || MODERN_BAKERY_PRODUCTS[6];

  return (
    <section id="crazy-grid" className="py-20 bg-white border-b-2 border-orange-100 text-[#2B2625]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header with Bold Playful Sticker Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="inline-block transform -rotate-2 px-3 py-1 rounded-full bg-[#FF3366] text-white text-[11px] font-black uppercase tracking-wider mb-2">
              🔥 Neighborhood Cravings
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#2B2625] tracking-tight">
              The Sugar Rush Crazy-Grid
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-bold max-w-sm">
            Baked in small batches throughout the day. Order on WhatsApp for instant 2-hour neighborhood delivery!
          </p>
        </div>

        {/* MIXED CARD SIZES (NOT a uniform 4-column card grid) */}
        {/* Asymmetrical Masonry Grid: 1 Big Hero Card spanning 2 Rows + 3 Varied Complementary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Big Featured Card: Spans 7 of 12 columns */}
          <div className="md:col-span-7 bg-[#FFF8E7] border-3 border-[#2B2625] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#2B2625] flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#FF3366] text-white text-xs font-black uppercase">
                👑 Undisputed Party Hero
              </span>
              <span className="font-black text-2xl text-[#2B2625]">₹{pinata.price}</span>
            </div>

            <div className="aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#2B2625] bg-white">
              <ImageWithFallback
                src={pinata.image}
                alt={pinata.name}
                fallbackTitle={pinata.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-[#2B2625]">{pinata.name}</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-bold leading-relaxed">{pinata.description}</p>
            </div>

            <button
              onClick={() => onWhatsAppClick(`Hey Sugar Rush! I want to order the ${pinata.name} (₹${pinata.price}) with hammer!`)}
              className="w-full py-4 rounded-2xl bg-[#FF6B35] hover:bg-[#E8531D] text-white font-black text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0px_#2B2625] border-2 border-[#2B2625] flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#FFD166]" />
              <span>Order Pinata Cake on WhatsApp</span>
            </button>
          </div>

          {/* Right Column: 3 Offset Varied Cards (Spanning 5 of 12 columns) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Card 2: Nutella Donut (Horizontal Mini Card) */}
            <div className="bg-[#FFF0F3] border-3 border-[#2B2625] rounded-3xl p-5 shadow-[4px_4px_0px_#2B2625] flex items-center gap-5">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-[#2B2625] bg-white">
                <ImageWithFallback
                  src={donut.image}
                  alt={donut.name}
                  fallbackTitle={donut.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black uppercase text-[#FF3366]">Kids Favorite</span>
                <h4 className="font-black text-base text-[#2B2625]">{donut.name}</h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-black text-base text-[#2B2625]">₹{donut.price}</span>
                  <button
                    onClick={() => onWhatsAppClick(`Hey! I'd like to order 3 Nutella Glazed Donuts.`)}
                    className="text-[10px] font-black uppercase bg-[#2B2625] text-white px-3 py-1 rounded-full"
                  >
                    Quick Order
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Paneer Tikka Puff (Afternoon Hot Bake) */}
            <div className="bg-[#FFF3EB] border-3 border-[#2B2625] rounded-3xl p-5 shadow-[4px_4px_0px_#2B2625] flex items-center gap-5">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-[#2B2625] bg-white">
                <ImageWithFallback
                  src={puff.image}
                  alt={puff.name}
                  fallbackTitle={puff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black uppercase text-[#FF6B35]">Fresh @ 4 PM</span>
                <h4 className="font-black text-base text-[#2B2625]">{puff.name}</h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-black text-base text-[#2B2625]">₹{puff.price}</span>
                  <button
                    onClick={() => onWhatsAppClick(`Hey! Reserve 4 hot Paneer Tikka Puffs for 4 PM.`)}
                    className="text-[10px] font-black uppercase bg-[#FF6B35] text-white px-3 py-1 rounded-full"
                  >
                    Reserve Puffs
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Lotus Biscoff Stuffed Brownie */}
            <div className="bg-[#F6F4FF] border-3 border-[#2B2625] rounded-3xl p-5 shadow-[4px_4px_0px_#2B2625] flex items-center gap-5">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-[#2B2625] bg-white">
                <ImageWithFallback
                  src={brownie.image}
                  alt={brownie.name}
                  fallbackTitle={brownie.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black uppercase text-purple-600">Loaded & Gooey</span>
                <h4 className="font-black text-base text-[#2B2625]">{brownie.name}</h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-black text-base text-[#2B2625]">₹{brownie.price}</span>
                  <button
                    onClick={() => onWhatsAppClick(`Hey! I want 2 Lotus Biscoff Brownies.`)}
                    className="text-[10px] font-black uppercase bg-[#2B2625] text-white px-3 py-1 rounded-full"
                  >
                    Add Brownie
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
