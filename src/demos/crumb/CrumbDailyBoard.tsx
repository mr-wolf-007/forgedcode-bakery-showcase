import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ARTISAN_BAKERY_PRODUCTS, ProductItem } from '../../data/products';
import { ImageWithFallback } from '../../components/ImageWithFallback';

interface CrumbDailyBoardProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const CrumbDailyBoard: React.FC<CrumbDailyBoardProps> = ({ onWhatsAppClick }) => {
  const [activeItem, setActiveItem] = useState<ProductItem>(ARTISAN_BAKERY_PRODUCTS[0]);

  // Group products by artisanal category
  const sourdoughBreads = ARTISAN_BAKERY_PRODUCTS.filter(p => p.category === 'Sourdough & Breads');
  const pastries = ARTISAN_BAKERY_PRODUCTS.filter(p => p.category === 'Croissants & Pastries');
  const cakesAndSweets = ARTISAN_BAKERY_PRODUCTS.filter(p => p.category === 'Celebration Cakes' || p.category === 'Cupcakes & Brownies' || p.category === 'Seasonal Specials');

  return (
    <section id="bake-board" className="py-24 bg-[#FAF7F2] text-[#36271F] border-b border-[#36271F]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Typographic Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#36271F]/15 pb-8 mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#526E48] font-sans font-semibold block mb-2">
              The Daily Bake Board
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#36271F]">
              Handcrafted Today at the Hearth
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#685449] max-w-sm font-sans leading-relaxed">
            Hover over any bake to preview crumb structure and stoneground grain composition. Quantities are limited to daily oven pulls.
          </p>
        </div>

        {/* Structured Typographic Tabular Board Layout (Left: Categorized Lists, Right: Live Editorial Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: European Bakeboard Menu Categories */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Category 1: Wild Sourdough & Hearth Breads */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold border-b border-[#36271F]/15 pb-2 text-[#36271F]">
                I. Wild Sourdoughs & Hearth Breads
              </h3>
              <div className="divide-y divide-[#36271F]/10 text-xs font-sans">
                {sourdoughBreads.map(bread => (
                  <div
                    key={bread.id}
                    onMouseEnter={() => setActiveItem(bread)}
                    onClick={() => setActiveItem(bread)}
                    className={`py-3.5 flex items-baseline justify-between cursor-pointer group transition-colors ${
                      activeItem.id === bread.id ? 'text-[#526E48] font-semibold' : 'text-[#36271F] hover:text-[#526E48]'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium group-hover:underline underline-offset-4 flex items-center gap-2">
                        <span>{bread.name}</span>
                        {bread.isBestseller && (
                          <span className="text-[9px] uppercase px-2 py-0.5 bg-[#EDE5D8] text-[#526E48] rounded">Hearth Special</span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#685449] line-clamp-1">{bread.description}</div>
                    </div>
                    <div className="text-right shrink-0 pl-4 font-serif font-bold text-sm">
                      ₹{bread.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Cultured Butter Viennoiserie */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold border-b border-[#36271F]/15 pb-2 text-[#36271F]">
                II. Laminated Viennoiserie & Morning Pastry
              </h3>
              <div className="divide-y divide-[#36271F]/10 text-xs font-sans">
                {pastries.map(pastry => (
                  <div
                    key={pastry.id}
                    onMouseEnter={() => setActiveItem(pastry)}
                    onClick={() => setActiveItem(pastry)}
                    className={`py-3.5 flex items-baseline justify-between cursor-pointer group transition-colors ${
                      activeItem.id === pastry.id ? 'text-[#526E48] font-semibold' : 'text-[#36271F] hover:text-[#526E48]'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium group-hover:underline underline-offset-4 flex items-center gap-2">
                        <span>{pastry.name}</span>
                        {pastry.isBestseller && (
                          <span className="text-[9px] uppercase px-2 py-0.5 bg-[#EDE5D8] text-[#C86D51] rounded">Cultured Butter</span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#685449] line-clamp-1">{pastry.description}</div>
                    </div>
                    <div className="text-right shrink-0 pl-4 font-serif font-bold text-sm">
                      ₹{pastry.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Artisan Cakes & Seasonal Specials */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold border-b border-[#36271F]/15 pb-2 text-[#36271F]">
                III. Celebration Cakes & Seasonal Bakes
              </h3>
              <div className="divide-y divide-[#36271F]/10 text-xs font-sans">
                {cakesAndSweets.map(sweet => (
                  <div
                    key={sweet.id}
                    onMouseEnter={() => setActiveItem(sweet)}
                    onClick={() => setActiveItem(sweet)}
                    className={`py-3.5 flex items-baseline justify-between cursor-pointer group transition-colors ${
                      activeItem.id === sweet.id ? 'text-[#526E48] font-semibold' : 'text-[#36271F] hover:text-[#526E48]'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium group-hover:underline underline-offset-4 flex items-center gap-2">
                        <span>{sweet.name}</span>
                        <span className="text-[10px] text-stone-400 font-normal">({sweet.weightOrPieces})</span>
                      </div>
                      <div className="text-[11px] text-[#685449] line-clamp-1">{sweet.description}</div>
                    </div>
                    <div className="text-right shrink-0 pl-4 font-serif font-bold text-sm">
                      ₹{sweet.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Sticky Editorial Spotlight of Currently Hovered Bake */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="border border-[#36271F]/15 bg-[#FAF7F2] p-6 shadow-sm space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#526E48] font-sans font-semibold block">
                Hearth Inspector • Selected Item
              </span>

              <div className="aspect-[4/3] overflow-hidden bg-[#EDE5D8] border border-[#36271F]/10">
                <ImageWithFallback
                  src={activeItem.image}
                  alt={activeItem.name}
                  fallbackTitle={activeItem.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-xl font-bold text-[#36271F]">{activeItem.name}</h4>
                  <span className="font-serif text-xl font-bold text-[#526E48]">₹{activeItem.price}</span>
                </div>
                <p className="text-xs text-[#685449] font-sans leading-relaxed">
                  {activeItem.description}
                </p>
                <div className="text-[11px] text-stone-500 font-sans pt-1">
                  Portion: <span className="font-medium text-[#36271F]">{activeItem.weightOrPieces}</span>
                </div>
              </div>

              <button
                onClick={() => onWhatsAppClick(`Hello Crumb & Co.! I would like to reserve ${activeItem.name} (₹${activeItem.price}) from today's batch.`)}
                className="w-full py-3 bg-[#36271F] hover:bg-[#526E48] text-white text-xs font-sans uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Reserve via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
