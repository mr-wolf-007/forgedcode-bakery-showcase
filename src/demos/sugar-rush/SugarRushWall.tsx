import React from 'react';
import { MODERN_BAKERY_GALLERY } from '../../data/products';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export const SugarRushWall: React.FC = () => {
  return (
    <section id="photo-wall" className="py-20 bg-[#FFFBF5] text-[#2B2625] border-b-2 border-orange-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="inline-block transform -rotate-1 px-3 py-1 rounded-full bg-[#FF3366] text-white text-[10px] font-black uppercase tracking-wider">
            📸 Polaroids & Party Moments
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2B2625]">
            The Sugar Rush Community Wall
          </h2>
        </div>

        {/* Irregular Collage Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {MODERN_BAKERY_GALLERY.map((item, idx) => {
            const rotations = ["-rotate-2", "rotate-3", "-rotate-1", "rotate-2"];
            return (
              <div 
                key={item.id}
                className={`bg-white p-3.5 pb-6 border-3 border-[#2B2625] rounded-2xl shadow-[4px_4px_0px_#2B2625] transform ${rotations[idx % 4]} hover:rotate-0 hover:scale-105 transition-all`}
              >
                <div className="aspect-square rounded-xl overflow-hidden border border-stone-200 mb-3 bg-stone-100">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <span className="font-black text-xs text-[#2B2625] block truncate">{item.title}</span>
                  <span className="text-[10px] text-stone-500 font-bold block mt-0.5">{item.caption}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
