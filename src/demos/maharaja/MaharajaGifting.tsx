import React from 'react';
import { Gift, Sparkles, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

interface MaharajaGiftingProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const MaharajaGifting: React.FC<MaharajaGiftingProps> = ({ onWhatsAppClick }) => {
  return (
    <section id="velvet-gifting" className="py-24 bg-[#420D13] text-[#FFFDF9] relative overflow-hidden">
      {/* Subtle Gold Filigree Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Full-Width Editorial Campaign Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Velvet Gift Hamper Photography with Gold Inset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C59B27]/50 shadow-2xl aspect-[4/3] bg-[#2A1810]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1000&auto=format&fit=crop&q=85"
                alt="Opulent velvet embroidered Indian sweet gifting box with brass latches"
                fallbackTitle="The Nizam Imperial Velvet Hamper"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-[#E5C158] font-serif text-xs uppercase tracking-widest flex items-center justify-between">
                <span>The Nizam Trousseau Edition</span>
                <span>₹1,850 / Hamper</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Gifting Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C59B27]/40 bg-[#58111A] text-[#E5C158] text-[10px] uppercase font-serif tracking-[0.25em]">
              <Sparkles className="w-3 h-3 text-[#C59B27]" />
              Festive & Wedding Trousseau Suites
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Opulence Handcrafted in <br />
              <span className="italic font-normal text-[#E5C158]">Velvet & Gold.</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-serif">
              Our signature velvet cases are lined with moisture-barrier brocade and fitted with custom compartments designed to protect delicate silver-vark mithais during cross-country transit.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-300 font-serif">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                <span>Custom gold-foil crest monogramming for family initials or corporate insignia.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                <span>Nitrogen-sealed individual trays preserving peak aromatic freshness for 21 days.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                <span>White-glove concierge dispatch across major metropolitan hubs in India.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onWhatsAppClick("Namaste Maharaja Mithai! Please share the Velvet Hamper brochure and bulk pricing.")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#E5C158] hover:bg-[#C59B27] text-[#420D13] font-serif font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl"
              >
                <Gift className="w-4 h-4" />
                <span>Request Gifting Brochure</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
