import React from 'react';
import { MessageSquare, MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import { DEMO_CONFIGS } from '../../data/demo-config';

interface SugarRushFooterProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const SugarRushFooter: React.FC<SugarRushFooterProps> = ({ onWhatsAppClick }) => {
  const config = DEMO_CONFIGS["modern-bakery"];

  return (
    <footer className="bg-[#2B2625] text-white pt-16 pb-12 text-xs font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Giant WhatsApp Direct CTA Banner inside Footer */}
        <div className="bg-[#FF6B35] border-4 border-[#2B2625] rounded-3xl p-8 sm:p-12 mb-16 shadow-[8px_8px_0px_white] text-[#2B2625] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-white text-[#2B2625] text-xs font-black uppercase inline-block">
              ⚡ 2-Hour Neighborhood Delivery
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              Craving Donuts or Birthday Cakes Right Now?
            </h3>
            <p className="text-xs sm:text-sm text-stone-900 font-bold max-w-lg">
              Text our bakery counter directly on WhatsApp. We dispatch orders within 30 minutes!
            </p>
          </div>

          <button
            onClick={() => onWhatsAppClick("Hey Sugar Rush! I want to place an instant WhatsApp delivery order.")}
            className="px-8 py-4 rounded-2xl bg-[#2B2625] text-white hover:bg-[#FF3366] text-xs font-black uppercase tracking-wider transition-all shadow-xl active:scale-95 flex items-center gap-2 whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#FFD166]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Compact Colorful Footer Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-stone-700">
          <div className="md:col-span-5 space-y-3">
            <span className="text-2xl font-black block">Sugar Rush Bakery</span>
            <p className="text-stone-400 text-xs max-w-sm font-bold">
              {config.address}, {config.area}, {config.city} – {config.pincode}
            </p>
            <div className="text-stone-400 font-bold">
              Open Daily: {config.hours.weekdays} | {config.hours.special}
            </div>
          </div>

          <div className="md:col-span-3 space-y-2 font-bold text-stone-300">
            <span className="text-[10px] uppercase tracking-widest text-[#FFD166] block mb-2 font-black">Bakery Counter</span>
            <div>Phone: <span className="text-white font-mono">{config.displayPhone}</span></div>
            <div>Delivery Radius: <span className="text-[#FF6B35]">5 km Express</span></div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#FFD166] block mb-2 font-black">ForgeDCode Showcase</span>
            <p className="text-stone-400 text-xs font-bold leading-relaxed">
              Demonstration concept showcasing an expressive, mobile-first local bakery retail experience with custom birthday cake configurator.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-bold">
          <div>
            © {new Date().getFullYear()} Sugar Rush Bakery (Demonstration Concept). All Rights Reserved.
          </div>
          <div>
            Built by <a href="/" className="text-sky-400 hover:underline">ForgeDCode</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
