import React, { useState } from 'react';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { ROYAL_SWEETS_CATEGORIES, ROYAL_SWEETS_PRODUCTS, ProductItem } from '../../data/products';
import { ImageWithFallback } from '../../components/ImageWithFallback';

interface MaharajaCatalogueProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const MaharajaCatalogue: React.FC<MaharajaCatalogueProps> = ({ onWhatsAppClick }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const displayedProducts = selectedCategory === "All"
    ? ROYAL_SWEETS_PRODUCTS
    : ROYAL_SWEETS_PRODUCTS.filter(p => p.category === selectedCategory);

  // Split into a lead delicacy and offset complementary items for an editorial magazine layout
  const leadProduct = displayedProducts[0] || ROYAL_SWEETS_PRODUCTS[0];
  const complementaryProducts = displayedProducts.slice(1);

  return (
    <section id="mithai-catalogue" className="py-20 bg-[#FAF6F0] border-t border-[#C59B27]/30 text-[#420D13]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C59B27]/30 pb-8 mb-12 gap-6">
          <div>
            <span className="text-[11px] uppercase font-serif tracking-[0.25em] text-[#C59B27] block mb-2">
              The Confectionery Archive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420D13] tracking-tight">
              Curated Sweets of the Royal Court
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md font-serif leading-relaxed">
            Every batch is hand-tempered daily in our Jaipur haveli using wooden churned butter, single-estate dry fruits, and natural floral essences.
          </p>
        </div>

        {/* Horizontally Arranged Category Strip Inspired by Luxury Catalogues */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 mb-14 no-scrollbar border-b border-[#C59B27]/20">
          {ROYAL_SWEETS_CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap pb-3 text-xs uppercase font-serif tracking-[0.2em] transition-all relative ${
                selectedCategory === cat
                  ? 'text-[#420D13] font-bold border-b-2 border-[#C59B27]'
                  : 'text-stone-500 hover:text-[#420D13]'
              }`}
            >
              <span className="text-[10px] text-[#C59B27] mr-1.5 font-mono">0{idx + 1}.</span>
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* STAGGERED EDITORIAL PRODUCT COMPOSITION (NOT a uniform 4-column card grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Lead Delicacy: Takes 7 Columns with Tall Portrait Imagery and Detailed Recipe Narrative */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#C59B27]/40 rounded-2xl overflow-hidden shadow-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 border border-[#C59B27]/30">
                <ImageWithFallback
                  src={leadProduct.image}
                  alt={leadProduct.name}
                  fallbackTitle={leadProduct.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#420D13] text-[#E5C158] text-[9px] uppercase font-serif tracking-widest font-semibold">
                  Imperial Signature
                </span>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-[#C59B27] block">
                  Category • {leadProduct.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#420D13] leading-snug">
                  {leadProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-serif leading-relaxed">
                  {leadProduct.description}
                </p>

                <div className="pt-4 border-t border-[#C59B27]/20 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-serif">Price per Kilogram</span>
                    <span className="font-serif text-2xl font-bold text-[#420D13]">₹{leadProduct.price.toLocaleString('en-IN')}</span>
                  </div>
                  <span className="text-xs text-stone-500 font-serif italic">{leadProduct.weightOrPieces}</span>
                </div>

                <button
                  onClick={() => onWhatsAppClick(`Namaste Maharaja Mithai! I would like to reserve the signature ${leadProduct.name} (₹${leadProduct.price} ${leadProduct.unit}).`)}
                  className="w-full mt-4 py-3 rounded-xl bg-[#420D13] hover:bg-[#58111A] text-[#E5C158] text-xs font-serif uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Reserve via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Staggered Offset Side Column: Takes 5 Columns with Compact Editorial Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[11px] uppercase font-serif tracking-[0.25em] text-[#C59B27] border-b border-[#C59B27]/20 pb-2">
              Complementary Varieties
            </div>

            {complementaryProducts.slice(0, 3).map((item) => (
              <div 
                key={item.id}
                className="bg-[#FFFDF9] border border-[#C59B27]/30 rounded-xl p-5 shadow-sm hover:border-[#420D13] transition-all flex items-center gap-5 group"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-stone-100 border border-[#C59B27]/20">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    fallbackTitle={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <span className="text-[9px] uppercase font-serif tracking-widest text-[#C59B27]">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#420D13] group-hover:text-[#58111A] transition-colors">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-serif text-sm font-bold text-[#420D13]">
                      ₹{item.price.toLocaleString('en-IN')} <span className="text-[10px] text-stone-500 font-normal">{item.unit}</span>
                    </span>
                    <button
                      onClick={() => onWhatsAppClick(`Namaste! I would like to order ${item.name} (₹${item.price}).`)}
                      className="text-[10px] uppercase font-serif tracking-widest text-[#C59B27] hover:text-[#420D13] font-semibold inline-flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
