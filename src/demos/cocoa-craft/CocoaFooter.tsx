import React from 'react';

export const CocoaFooter: React.FC = () => {
  return (
    <footer className="bg-[#1C120C] text-[#FAF5EE] pt-14 pb-10 border-t border-[#C68B59]/20 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800 text-xs">
          <div className="space-y-3">
            <span className="text-xl uppercase font-light text-[#C68B59] tracking-wider block">
              Cocoa Craft
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">
              Bean-to-Bar Craft Chocolatier
            </span>
            <p className="text-stone-400 font-sans leading-relaxed text-[11px] pt-1">
              Pure single-estate chocolate crafted in small granite-conched batches. 100% cocoa butter, zero artificial flavorings.
            </p>
          </div>

          <div className="space-y-2 font-mono">
            <span className="text-[11px] uppercase tracking-wider text-white font-bold block mb-2">
              Sourcing &amp; Terroirs
            </span>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              • Malabar Forest, Idukki Hills (Kerala)<br />
              • Pacific Coast Single-Estate (Tumaco, Colombia)<br />
              • Sambava River Valley (Madagascar)
            </p>
          </div>

          <div className="space-y-2 font-mono">
            <span className="text-[11px] uppercase tracking-wider text-white font-bold block mb-2">
              Chilled Shipping Policy
            </span>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              Shipped inside double-insulated thermal pouches with frozen food-grade ice gels. Arrives intact and crisp even in peak summer.
            </p>
          </div>

          <div className="space-y-2 font-mono">
            <span className="text-[11px] uppercase tracking-wider text-white font-bold block mb-2">
              Wholesale &amp; Gifting
            </span>
            <p className="text-stone-400 text-[11px]">
              Custom luxury corporate gift coffrets and boutique café bean-to-bar supplies:
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C68B59] hover:underline block text-xs"
            >
              orders@cocoacraft.com
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Cocoa Craft Chocolates. Bean-to-Bar Purity.</p>
          <p className="text-center sm:text-right">
            Demonstration E-Commerce Prototype crafted by <span className="text-[#C68B59]">ForgeDCode</span> for Direct-to-Consumer Food Brands.
          </p>
        </div>

      </div>
    </footer>
  );
};
