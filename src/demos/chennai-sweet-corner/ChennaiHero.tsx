import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Truck, Award } from 'lucide-react';

interface ChennaiHeroProps {
  onExploreMenu: () => void;
  onWhatsAppOrder: () => void;
}

export const ChennaiHero: React.FC<ChennaiHeroProps> = ({ onExploreMenu, onWhatsAppOrder }) => {
  return (
    <section className="bg-gradient-to-b from-[#FFFBEB] via-[#FEF3C7] to-[#FDE68A]/40 py-10 sm:py-16 border-b border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text / Conversion Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-300 text-red-800 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span>Daily Morning Batch Pulled at 7:00 AM • Pure Cow Bilona Ghee</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-[1.1] tracking-tight">
              Hot Wheat Halwa &amp; <br />
              <span className="text-red-700 underline decoration-amber-400 decoration-wavy decoration-2">
                Melt-in-Mouth Mysore Pak
              </span>
            </h2>

            <p className="text-sm sm:text-base text-stone-700 font-medium leading-relaxed max-w-xl">
              Authentic traditional recipes perfected over 45 years. Prepared fresh twice daily in pure cow ghee and hand-stirred in heavy copper vats for the true taste of South India.
            </p>

            {/* Practical Value Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="bg-white/80 border border-amber-300 p-2.5 rounded-xl text-center shadow-sm">
                <span className="block text-red-700 font-black text-sm sm:text-base">100%</span>
                <span className="text-[10px] sm:text-xs text-stone-600 font-bold block">Pure Cow Ghee</span>
              </div>
              <div className="bg-white/80 border border-amber-300 p-2.5 rounded-xl text-center shadow-sm">
                <span className="block text-red-700 font-black text-sm sm:text-base">30 Mins</span>
                <span className="text-[10px] sm:text-xs text-stone-600 font-bold block">Local T. Nagar Delivery</span>
              </div>
              <div className="bg-white/80 border border-amber-300 p-2.5 rounded-xl text-center shadow-sm">
                <span className="block text-red-700 font-black text-sm sm:text-base">0% Preservatives</span>
                <span className="text-[10px] sm:text-xs text-stone-600 font-bold block">Made Daily</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 bg-red-700 hover:bg-red-800 text-amber-100 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-red-700/20 flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Browse Sweets &amp; Savouries</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onWhatsAppOrder}
                className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle size={18} />
                <span>Direct WhatsApp Order</span>
              </button>
            </div>
          </div>

          {/* Right Promotional Image & Deal Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl bg-amber-950 aspect-[4/3] sm:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?auto=format&fit=crop&w=1000&q=80"
                alt="Chennai Sweet Corner Ghee Mysore Pak and Motichoor Laddu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Floating Offer Badge */}
              <div className="absolute top-4 right-4 bg-red-700 text-amber-100 px-3.5 py-1.5 rounded-full text-xs font-black shadow-lg border border-amber-300">
                FESTIVE OFFER: ₹50 OFF on ₹500+
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
                  Today's Chef Recommendation
                </span>
                <span className="text-lg font-black block">
                  Special Ghee Mysore Pak &amp; Ribbon Pakoda Combo
                </span>
                <span className="text-xs text-amber-100 block">
                  Fresh batch ready right now at T. Nagar counter • ₹340 (500g)
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
