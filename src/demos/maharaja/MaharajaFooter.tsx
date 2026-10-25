import React from 'react';
import { MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import { DEMO_CONFIGS } from '../../data/demo-config';

interface MaharajaFooterProps {
  onWhatsAppClick: (msg?: string) => void;
}

export const MaharajaFooter: React.FC<MaharajaFooterProps> = ({ onWhatsAppClick }) => {
  const config = DEMO_CONFIGS["royal-sweets"];

  return (
    <footer id="haveli-visit" className="bg-[#24060A] text-stone-300 border-t border-[#C59B27]/40 py-16 text-xs font-serif">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Haveli Boutique & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#C59B27]/20">
          
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C59B27]">
              The Flagship Haveli
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#E5C158]">
              Maharaja Mithai House
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {config.address}, {config.area}, {config.city} – {config.pincode}
            </p>
            <div className="pt-2 text-stone-400 space-y-1">
              <div>Store Hours: {config.hours.weekdays}</div>
              <div className="text-[11px] text-[#C59B27]">{config.hours.special}</div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C59B27] block">
              Direct Contact
            </span>
            <div className="space-y-2 text-stone-300">
              <div>WhatsApp Concierge: <span className="text-[#E5C158] font-mono">{config.displayPhone}</span></div>
              <div>Bespoke Orders: <span className="text-stone-400">{config.email}</span></div>
            </div>
            <button
              onClick={() => onWhatsAppClick("Namaste! Please provide directions to your Jaipur Haveli store.")}
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#E5C158] hover:text-white underline underline-offset-4"
            >
              <span>Request Map Location via WhatsApp</span>
            </button>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C59B27] block">
              ForgeDCode Design Provenance
            </span>
            <p className="text-stone-400 text-xs leading-relaxed">
              Demonstration concept showcasing an editorial luxury Indian confectionery storefront with high-ticket wedding trousseau lead capture.
            </p>
          </div>

        </div>

        {/* Closing Footnote */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Maharaja Mithai House (Demonstration Concept). All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Website Architecture Crafted by</span>
            <a href="/" className="text-sky-400 font-semibold hover:underline">ForgeDCode</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
