import React from 'react';
import { Coffee, Heart } from 'lucide-react';

export const ButterFooter: React.FC = () => {
  return (
    <footer className="bg-[#2B1810] text-[#FFFDF8] pt-16 pb-12 font-sans border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800 text-xs">
          <div className="space-y-3 font-serif">
            <span className="text-xl text-[#FEF08A] tracking-tight block">
              Butter &amp; Bloom
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#DDE5B6] block">
              Bakery Café &amp; Roastery
            </span>
            <p className="text-stone-400 font-sans leading-relaxed text-[11px] pt-1">
              Morning light, direct-trade single-estate coffees, slow cultured butter viennoiserie, and pet-friendly garden verandas.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold uppercase tracking-wider text-white block mb-2">
              Bandra West Veranda
            </span>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              #24, Pali Mala Road, Bandra West, Mumbai 400050<br />
              Open Daily: 8:00 AM — 8:00 PM<br />
              Counter: +91 22 2642 1988
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold uppercase tracking-wider text-white block mb-2">
              Indiranagar Roastery
            </span>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              #712, 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038<br />
              Open Daily: 7:30 AM — 8:30 PM<br />
              Counter: +91 80 4128 7701
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold uppercase tracking-wider text-white block mb-2">
              Café Enquiries &amp; Events
            </span>
            <p className="text-stone-400 text-[11px]">
              Veranda buyouts, coffee cupping sessions, and weekend pop-ups:
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FEF08A] hover:underline block text-xs font-mono"
            >
              +91 98765 43210
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Butter &amp; Bloom Café. Roasted &amp; Baked with Love.</p>
          <p className="text-center sm:text-right">
            Demonstration Concept crafted by <span className="text-[#FEF08A]">ForgeDCode</span> for Lifestyle Cafés &amp; Artisan Roasteries.
          </p>
        </div>

      </div>
    </footer>
  );
};
