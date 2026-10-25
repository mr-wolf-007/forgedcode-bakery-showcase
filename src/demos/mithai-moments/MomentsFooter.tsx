import React from 'react';

export const MomentsFooter: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-amber-100/90 pt-16 pb-12 border-t-4 border-amber-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800 text-xs">
          <div className="space-y-3 font-serif">
            <span className="text-xl font-black text-amber-300 uppercase tracking-tight block">
              Mithai &amp; Moments
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-orange-400 font-sans block">
              Festive Gifting &amp; Corporate Hampers
            </span>
            <p className="text-stone-400 font-sans leading-relaxed text-[11px] pt-1">
              Curated celebratory gift boxes crafted with pure artisanal sweets, rich dry fruits, and gold-embossed keepsake caskets.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold uppercase tracking-wider text-white block mb-2 font-serif">
              Seasonal Collections
            </span>
            <ul className="space-y-1 text-stone-400 text-[11px]">
              <li>• Grand Diwali Royal Shubh Hampers</li>
              <li>• Wedding Trousseau Invitation Boxes</li>
              <li>• Corporate Employee Appreciation Packs</li>
              <li>• Festive Brass Diya &amp; Sweets Combos</li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold uppercase tracking-wider text-white block mb-2 font-serif">
              Corporate Fulfillment
            </span>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              Multi-city direct doorstep delivery to employee and client addresses across Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, and Pune.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold uppercase tracking-wider text-white block mb-2 font-serif">
              B2B Gifting Helpline
            </span>
            <p className="text-stone-400 text-[11px]">
              Dedicated account manager for sample boxes and bulk invoicing:
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 font-bold block text-sm"
            >
              +91 98765 43210
            </a>
            <span className="text-stone-500 text-[10px] block font-mono">
              corporate@mithaiandmoments.com
            </span>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Mithai &amp; Moments. Celebrating Life's Sweetest Milestones.</p>
          <p className="text-center sm:text-right">
            Demonstration Concept crafted by <span className="text-amber-400 font-bold">ForgeDCode</span> for Festive Gifting &amp; Confectionery Brands.
          </p>
        </div>

      </div>
    </footer>
  );
};
