import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

interface MaharajaHeroProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const MaharajaHero: React.FC<MaharajaHeroProps> = ({ onWhatsAppClick }) => {
  return (
    <section className="relative bg-[#FFFDF9] overflow-hidden pt-6 pb-20 lg:pt-8 lg:pb-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Asymmetrical Composition: ~65% Grand Visual Area, ~35% Composed Text Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Visual Panel: Occupying 7 of 12 columns (approx 60-65% width) */}
          <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1 relative">
            <div className="relative h-full min-h-[460px] lg:min-h-[620px] rounded-2xl overflow-hidden shadow-2xl border border-[#C59B27]/40 bg-[#420D13]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?w=1400&auto=format&fit=crop&q=85"
                alt="Antique silver and brass thali filled with pure desi ghee Indian mithai and silver vark"
                fallbackTitle="Maharaja Imperial Mithai Spread"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#420D13]/85 via-black/20 to-transparent" />

              {/* Integrated Craftsmanship Caption Badge inside Hero Visual */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-auto max-w-md p-5 rounded-xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C59B27]/60 shadow-2xl text-[#420D13]">
                <div className="flex items-center gap-2 text-[10px] uppercase font-serif tracking-[0.2em] text-[#C59B27] font-semibold mb-1">
                  <Sparkles className="w-3 h-3 text-[#C59B27]" />
                  <span>Plate 14 • The Royal Halwai Archive</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#420D13] leading-snug">
                  Shahi Mawa & Pampore Mogra Saffron
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed font-sans">
                  Slow-churned over brass kadhais for four hours until caramelized into velvety perfection.
                </p>
              </div>
            </div>
          </div>

          {/* Composed Editorial Text Panel: Occupying 5 of 12 columns (approx 35-40% width) */}
          <div className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2 flex flex-col justify-between py-4 lg:py-6 space-y-8">
            
            {/* Top Provenance Monogram & Volume Marker */}
            <div className="border-b border-[#C59B27]/30 pb-4 flex items-center justify-between text-xs font-serif text-[#C59B27] tracking-widest uppercase">
              <span>Collection No. 82</span>
              <span>Jaipur • 1942</span>
            </div>

            {/* Deliberate Editorial Line Breaks in Headline */}
            <div className="space-y-4">
              <span className="inline-block text-[11px] uppercase font-serif tracking-[0.25em] text-[#C59B27]">
                A Heritage of Royal Confections
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl text-[#420D13] font-bold leading-[1.08] tracking-tight">
                A Tradition <br />
                <span className="italic font-normal text-[#C59B27] serif">of Pure</span> <br />
                Sweetness.
              </h1>
              <div className="w-16 h-0.5 bg-[#C59B27]" />
            </div>

            {/* Editorial Body Text */}
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-serif">
              Since 1942, the master confectioners of Maharaja Mithai House have honored the ancient court traditions of Rajputana—using exclusively pure bilona clarified butter, stoneground cashews, and unadulterated Kashmiri saffron.
            </p>

            {/* Refined Luxury CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href="#mithai-catalogue"
                className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-[#420D13] text-[#E5C158] hover:bg-[#58111A] text-xs uppercase font-serif tracking-[0.2em] transition-all shadow-md group"
              >
                <span>Examine The Catalogue</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27] group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onWhatsAppClick("Namaste Maharaja Mithai! I would like to enquire about bespoke festive gifting boxes.")}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#420D13]/30 hover:border-[#420D13] text-[#420D13] text-xs uppercase font-serif tracking-[0.2em] transition-all bg-[#FBF6EE]"
              >
                <span>Reserve on WhatsApp</span>
              </button>
            </div>

            {/* Heritage Hallmark Footnote */}
            <div className="pt-4 border-t border-[#C59B27]/20 flex items-center gap-3 text-stone-500 text-xs font-serif">
              <ShieldCheck className="w-4 h-4 text-[#C59B27] shrink-0" />
              <span>Certified 100% Pure Desi Ghee & Edible Silver Leaf (Vegetarian)</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
