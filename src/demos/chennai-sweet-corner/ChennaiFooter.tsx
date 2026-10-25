import React from 'react';
import { Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const ChennaiFooter: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-amber-100 border-t-4 border-amber-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800 text-xs">
          {/* Brand */}
          <div className="space-y-3">
            <span className="text-lg font-black text-amber-300 uppercase tracking-tight block">
              Chennai Sweet Corner
            </span>
            <p className="text-stone-400 leading-relaxed">
              Serving purest cow ghee sweets, traditional savouries, and wedding seer bakshanam across Chennai homes since 1978.
            </p>
            <span className="inline-block bg-stone-800 text-amber-300 px-2.5 py-1 rounded text-[10px] font-mono">
              FSSAI Lic. No: 12418008000412
            </span>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <span className="font-bold text-white uppercase tracking-wider block mb-2">
              Popular Sweets
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li>• Special Ghee Mysore Pak</li>
              <li>• Tirunelveli Wheat Halwa</li>
              <li>• Kai Murukku &amp; Ribbon Pakoda</li>
              <li>• Saffron Motichoor Laddu</li>
              <li>• Kaju Katli &amp; Milk Peda</li>
            </ul>
          </div>

          {/* Delivery & Counter */}
          <div className="space-y-2">
            <span className="font-bold text-white uppercase tracking-wider block mb-2">
              Express Delivery Zones
            </span>
            <p className="text-stone-400 leading-relaxed">
              Fast 30-minute doorstep delivery in T. Nagar, Mylapore, Alwarpet, Nungambakkam, Kodambakkam, and West Mambalam via direct counter dispatch.
            </p>
          </div>

          {/* Direct Order */}
          <div className="space-y-2">
            <span className="font-bold text-white uppercase tracking-wider block mb-2">
              WhatsApp Counter Order
            </span>
            <p className="text-stone-400">
              Instant reply for fresh counter availability and same-day delivery:
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-amber-300 font-bold hover:text-white transition-colors text-sm"
            >
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3 font-medium">
          <p>© {new Date().getFullYear()} Chennai Sweet Corner. Traditional Taste Guaranteed.</p>
          <p className="text-center sm:text-right">
            Demonstration Concept crafted by <span className="text-amber-400 font-bold">ForgeDCode</span> for Indian Sweets &amp; Savoury Retailers.
          </p>
        </div>

      </div>
    </footer>
  );
};
