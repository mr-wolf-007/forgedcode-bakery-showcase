import React from 'react';
import { Flame, Clock, Heart, Award } from 'lucide-react';

export const OvenStory: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#F5EFE6] border-b border-[#C2593F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Story Part 1: The Brick Oven */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 font-serif">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C2593F] font-mono block">
              Chapter I • The Hearth
            </span>
            <h3 className="text-3xl sm:text-4xl font-light text-[#2E1F1A]">
              Built with Reclaimed Firebricks in 1964
            </h3>
            <p className="text-xs sm:text-sm text-[#4E3D36] leading-relaxed">
              When our grandfather established this bakery, he refused modern metal deck ovens. He salvaged red clay bricks from old railway kilns to build a massive dome capable of holding intense, radiant heat for eighteen hours.
            </p>
            <p className="text-xs sm:text-sm text-[#4E3D36] leading-relaxed">
              Inside that oven, bread crust develops a distinct blistered caramelization that industrial steam ovens simply cannot reproduce.
            </p>
            <div className="pt-2 text-xs font-mono text-[#606C38]">
              ✓ Fired with dried tamarind &amp; mango orchard wood
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg border-2 border-stone-300 aspect-[16/10] bg-[#2E1F1A]">
            <img
              src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1000&q=80"
              alt="Baker loading loaves into wood-fired oven"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Story Part 2: The Afternoon Chai Ritual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg border-2 border-stone-300 aspect-[16/10] bg-[#2E1F1A]">
            <img
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80"
              alt="Golden cardamom chai rusks and butter biscuits"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 font-serif">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C2593F] font-mono block">
              Chapter II • The 3:30 PM Bell
            </span>
            <h3 className="text-3xl sm:text-4xl font-light text-[#2E1F1A]">
              The Neighborhood Tea-Time Whistle
            </h3>
            <p className="text-xs sm:text-sm text-[#4E3D36] leading-relaxed">
              Every day at 3:30 in the afternoon, the second bake of the day is pulled. Neighbors, school teachers, and office workers gather at the counter for hot potato masala puffs with seventy buttery layers.
            </p>
            <p className="text-xs sm:text-sm text-[#4E3D36] leading-relaxed">
              Along with the puffs come our double-toasted cardamom chai rusks, baked twice in the dying heat of the wood embers so they soak up sweet ginger tea without collapsing.
            </p>
            <div className="pt-2 text-xs font-mono text-[#606C38]">
              ✓ 100% Eggless savory puffs &amp; nankhatais available daily
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
