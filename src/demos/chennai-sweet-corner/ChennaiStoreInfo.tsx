import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, MessageCircle } from 'lucide-react';

export const ChennaiStoreInfo: React.FC = () => {
  return (
    <section id="locations" className="py-14 bg-amber-50 border-t-2 border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-700 block mb-1">
            Serving Chennai Since 1978
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-stone-900 uppercase">
            Visit Our Neighbourhood Counters
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium">
            Walk in for hot evening snacks &amp; fresh ghee sweets, or place a quick WhatsApp takeaway order for instant counter pickup.
          </p>
        </div>

        {/* Two Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* T. Nagar Branch */}
          <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between border-b border-amber-200 pb-4 mb-4">
              <div>
                <span className="text-[10px] uppercase font-black tracking-wider text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Main Kitchen &amp; Flagship
                </span>
                <h4 className="text-xl font-black text-stone-900">
                  T. Nagar Branch (Near Panagal Park)
                </h4>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <div className="space-y-3 text-xs text-stone-700">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="text-red-700 shrink-0 mt-0.5" />
                <span>
                  #42, South Usman Road, Opposite Panagal Park Bus Stop,<br />
                  T. Nagar, Chennai, Tamil Nadu 600017
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock size={16} className="text-red-700 shrink-0" />
                <span>7:00 AM — 10:30 PM (All 7 Days Open)</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={16} className="text-red-700 shrink-0" />
                <span className="font-bold text-stone-900">+91 44 2434 1978 / +91 98765 43210</span>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded">
                ✓ Free 2-Wheeler Parking Available
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-red-700 hover:text-red-900 flex items-center gap-1 underline underline-offset-4"
              >
                <Navigation size={13} />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Mylapore Branch */}
          <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between border-b border-amber-200 pb-4 mb-4">
              <div>
                <span className="text-[10px] uppercase font-black tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Heritage Temple Counter
                </span>
                <h4 className="text-xl font-black text-stone-900">
                  Mylapore Branch (North Mada Street)
                </h4>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <div className="space-y-3 text-xs text-stone-700">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="text-red-700 shrink-0 mt-0.5" />
                <span>
                  #18, North Mada Street, 2 Mins from Kapaleeshwarar Temple Tank,<br />
                  Mylapore, Chennai, Tamil Nadu 600004
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock size={16} className="text-red-700 shrink-0" />
                <span>6:30 AM — 10:00 PM (Fresh Morning Prasadam Batch)</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={16} className="text-red-700 shrink-0" />
                <span className="font-bold text-stone-900">+91 44 2498 7712 / +91 98765 43211</span>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded">
                ✓ Seer Thattu Packaging Counter
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-red-700 hover:text-red-900 flex items-center gap-1 underline underline-offset-4"
              >
                <Navigation size={13} />
                <span>Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Wedding & Bulk Catering Banner */}
        <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-3xl p-6 sm:p-10 text-amber-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 block">
              Wedding Seer Bakshanam &amp; Bulk Orders
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-white">
              Planning an Auspicious Family Function?
            </h4>
            <p className="text-xs sm:text-sm text-amber-200/90 max-w-xl">
              We prepare traditional Kai Murukku (5 &amp; 7 sutthu), Manoharam, Paruppu Thengai cones, and royal sweet boxes delivered fresh in custom decorative trays.
            </p>
          </div>

          <a
            href="https://wa.me/919876543210?text=Vanakkam%20Chennai%20Sweet%20Corner,%20I%20would%20like%20to%20discuss%20bulk%20catering%20and%20wedding%20seer%20bakshanam."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-red-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shrink-0 flex items-center gap-2"
          >
            <MessageCircle size={16} />
            <span>Enquire Wedding Seer</span>
          </a>
        </div>

      </div>
    </section>
  );
};
