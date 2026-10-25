import React from 'react';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

export const AtelierFooter: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-pink-100/90 border-t border-stone-800 pt-16 pb-12 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800 text-xs">
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <span className="text-xl font-light text-white uppercase tracking-[0.2em] block">
              The Cake Atelier
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-pink-400 font-sans block">
              Fine Sugarcraft Studio
            </span>
            <p className="text-stone-400 font-sans leading-relaxed text-[11px] pt-1">
              Architectural celebration cakes and wedding showpieces sculpted for discerning patrons across India.
            </p>
          </div>

          {/* Tasting Studio */}
          <div className="space-y-2">
            <span className="text-[11px] tracking-wider uppercase text-white font-sans font-bold block mb-2">
              Tasting Studio
            </span>
            <p className="text-stone-400 leading-relaxed">
              Atelier Suite 4B, The Design Guild Arcade,<br />
              Kalyani Nagar, Pune, Maharashtra 411006
            </p>
            <p className="text-pink-300 text-[11px] pt-1 italic">
              Strictly by advance confirmed appointment.
            </p>
          </div>

          {/* Sizing & Inquiries */}
          <div className="space-y-2">
            <span className="text-[11px] tracking-wider uppercase text-white font-sans font-bold block mb-2">
              Studio Lead Times
            </span>
            <p className="text-stone-400 leading-relaxed">
              Standard Celebrations: 14 Days Notice<br />
              Tiered Wedding Sculptures: 30 to 60 Days Notice<br />
              Private Tasting Flights: Dispatched Tuesdays
            </p>
          </div>

          {/* Direct WhatsApp Concierge */}
          <div className="space-y-2">
            <span className="text-[11px] tracking-wider uppercase text-white font-sans font-bold block mb-2">
              Artist Direct Contact
            </span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-pink-300 hover:text-white transition-colors text-sm font-sans"
            >
              +91 98765 43210
            </a>
            <p className="text-stone-400 text-[11px]">
              atelier@thecakeatelier.com
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} The Cake Atelier. All cake sculptures protected under creative copyright.</p>
          <p className="text-center sm:text-right">
            Demonstration Concept crafted by <span className="text-pink-400">ForgeDCode</span> for Bespoke Cake Studios &amp; Confectioners.
          </p>
        </div>

      </div>
    </footer>
  );
};
