import React from 'react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export const MaharajaHeritage: React.FC = () => {
  return (
    <section id="heritage-story" className="py-24 bg-[#FFFDF9] text-[#420D13] border-t border-[#C59B27]/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-[11px] uppercase font-serif tracking-[0.25em] text-[#C59B27]">
            Generations of Provenance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420D13]">
            The 85-Year Haveli Chronicle
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto" />
        </div>

        {/* Story Row 1: Alternating Text Left, Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase font-serif tracking-widest text-[#C59B27] block">
              Chapter I • The Copper Kadhais
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#420D13]">
              Slow Simmering Over Tamarind Wood Fire
            </h3>
            <p className="text-sm sm:text-base text-stone-600 font-serif leading-relaxed">
              In 1942, Pandit Ramprasadji set up three hammered copper cauldrons in the inner courtyards of the Jaipur walled city. He insisted that no electric mixer or gas burner could match the gentle heat of slow-burning wood and continuous wooden ladle turning.
            </p>
            <div className="p-4 bg-[#F5EFE6] border-l-2 border-[#C59B27] text-xs font-serif text-[#420D13] italic">
              "Patience is the only preservative we have ever allowed in our kitchen."
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl border border-[#C59B27]/30 bg-stone-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1505253758473-96b46d5f6990?w=900&auto=format&fit=crop&q=80"
                alt="Golden boondi frying in pure desi ghee copper kadhais"
                fallbackTitle="Traditional Copper Cauldrons"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Story Row 2: Alternating Visual Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl border border-[#C59B27]/30 bg-stone-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&auto=format&fit=crop&q=80"
                alt="Pampore Kashmiri saffron strands blooming in warm buffalo milk"
                fallbackTitle="Kashmiri Mogra Saffron"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <span className="text-xs uppercase font-serif tracking-widest text-[#C59B27] block">
              Chapter II • The Kashmiri Bloom
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#420D13]">
              Pure Pampore Saffron & Goan Cashews
            </h3>
            <p className="text-sm sm:text-base text-stone-600 font-serif leading-relaxed">
              We continue our direct relationships with organic saffron farming families in the karewas of Pampore, Kashmir. Every kilo of our Shahi Katli receives whole saffron threads bloomed in freshly boiled whole milk, imbuing an authentic golden sunset hue.
            </p>
            <div className="p-4 bg-[#F5EFE6] border-l-2 border-[#C59B27] text-xs font-serif text-[#420D13] italic">
              "No synthetic color. No artificial fragrance. The aroma of pure Kashmir."
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
