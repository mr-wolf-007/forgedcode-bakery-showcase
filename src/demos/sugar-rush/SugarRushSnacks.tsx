import React from 'react';
import { Flame, MessageSquare, ArrowRight } from 'lucide-react';
import { MODERN_BAKERY_PRODUCTS } from '../../data/products';
import { ImageWithFallback } from '../../components/ImageWithFallback';

interface SugarRushSnacksProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const SugarRushSnacks: React.FC<SugarRushSnacksProps> = ({ onWhatsAppClick }) => {
  const snacks = MODERN_BAKERY_PRODUCTS.filter(p => p.category === 'Puffs & Snacks');

  return (
    <section id="hot-puffs" className="py-20 bg-[#FFF8E7] border-b-2 border-orange-100 text-[#2B2625]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF6B35] text-white text-[11px] font-black uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 text-[#FFD166]" />
              The 4:00 PM Tea-Time Rush
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2B2625] tracking-tight">
              Hot Indian Bakery Puffs & Savory Rolls
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-bold max-w-sm">
            100 crispy flaky layers baked in our high-heat convection oven. Served piping hot with tangy mint-tamarind chutney!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {snacks.map(snack => (
            <div 
              key={snack.id}
              className="bg-white border-3 border-[#2B2625] rounded-3xl p-5 shadow-[4px_4px_0px_#2B2625] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#2B2625] bg-stone-100 mb-4">
                  <ImageWithFallback
                    src={snack.image}
                    alt={snack.name}
                    fallbackTitle={snack.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black uppercase text-[#FF6B35]">{snack.dietary === 'veg' ? '100% Veg' : 'Non-Veg'}</span>
                  <span className="text-base font-black text-[#2B2625]">₹{snack.price}</span>
                </div>
                <h4 className="font-black text-lg text-[#2B2625]">{snack.name}</h4>
                <p className="text-xs text-stone-600 font-bold mt-1 line-clamp-2">{snack.description}</p>
              </div>

              <button
                onClick={() => onWhatsAppClick(`Hey Sugar Rush! I want to order 3 warm ${snack.name} for evening tea time.`)}
                className="w-full py-2.5 rounded-xl bg-[#2B2625] hover:bg-[#FF6B35] text-white text-xs font-black uppercase tracking-wider transition-colors"
              >
                Order for 4 PM
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
