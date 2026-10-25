import React from 'react';

export const OvenFooter: React.FC = () => {
  return (
    <footer className="bg-[#2E1F1A] text-[#F5EFE6] pt-16 pb-10 border-t-2 border-[#C2593F]/40 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone-700 text-xs">
          <div className="space-y-3">
            <span className="text-xl uppercase font-normal text-[#FDFBF7] tracking-wider block">
              Oven &amp; Hearth
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C2593F] block">
              Wood-Fired Bakery • Established 1964
            </span>
            <p className="text-stone-400 leading-relaxed max-w-sm pt-1">
              Stoneground flours, pure dairy butter, 48-hour cool fermentation, and firebrick hearth baking for over six decades.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-mono text-[#FDFBF7] block mb-2">
              Baking Schedules
            </span>
            <p className="text-stone-300">
              Morning Sourdough &amp; Boules: 6:30 AM<br />
              Milk Bread &amp; Brun Pav: 7:00 AM<br />
              Hot Potato &amp; Paneer Puffs: 3:30 PM<br />
              Chai Rusks &amp; Nankhatai: Twice Weekly
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-mono text-[#FDFBF7] block mb-2">
              Neighborhood Counter
            </span>
            <p className="text-stone-300">
              #114, Old Bazaar Lane, Sadashiv Peth, Pune 411030<br />
              Direct Line: +91 20 2445 1964<br />
              WhatsApp Orders: +91 98765 43210
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Oven &amp; Hearth. Pure Wood-Fired Tradition.</p>
          <p className="text-center sm:text-right">
            Demonstration Concept crafted by <span className="text-[#C2593F]">ForgeDCode</span> for Neighborhood Bakeries &amp; Hearth Breads.
          </p>
        </div>

      </div>
    </footer>
  );
};
