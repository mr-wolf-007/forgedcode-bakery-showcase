import React, { useState } from 'react';
import { Clock, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { DEMO_CONFIGS } from '../../data/demo-config';

interface CrumbVisitProps {
  onSuccessSubmit: (data: any) => void;
  onWhatsAppClick: (msg?: string) => void;
}

export const CrumbVisit: React.FC<CrumbVisitProps> = ({ onSuccessSubmit, onWhatsAppClick }) => {
  const config = DEMO_CONFIGS["artisan-bakery"];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bread, setBread] = useState("Country Sourdough Loaf (800g)");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please provide your name and phone number to reserve your morning bake.");
      return;
    }
    setError("");
    onSuccessSubmit({
      name,
      phone,
      cakeFlavor: bread,
      date,
      notes
    });
  };

  return (
    <section id="bakehouse-visit" className="py-24 bg-[#FAF7F2] text-[#36271F] border-b border-[#36271F]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Quiet, Restrained Location & Schedule Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#526E48] font-sans font-semibold block mb-2">
                Hearth & Coffee Counter
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#36271F]">
                The Koramangala Bakehouse
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#685449] font-sans leading-relaxed">
              Drop in early while the morning pull is still warm. Sourdough slicing, single-origin filter roasts, and outdoor bench seating available.
            </p>

            <div className="space-y-4 pt-2 border-t border-[#36271F]/15 text-xs font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#526E48] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#36271F]">Address:</strong>
                  <span className="text-[#685449]">{config.address}, {config.area}, {config.city} – {config.pincode}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#526E48] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#36271F]">Oven Schedule & Doors:</strong>
                  <span className="text-[#685449]">Weekdays: {config.hours.weekdays} | Weekends: {config.hours.weekends}</span>
                  <div className="text-[11px] text-[#526E48] italic mt-0.5">{config.hours.special}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#526E48] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#36271F]">Direct Line & WhatsApp:</strong>
                  <span className="text-[#685449] font-mono">{config.displayPhone}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onWhatsAppClick("Hello Crumb & Co.! Please share your Google Maps location for the Koramangala bakehouse.")}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#526E48] hover:underline underline-offset-4"
            >
              <span>Get Directions via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Morning Reserve Requisition Form */}
          <div className="lg:col-span-7 bg-[#EDE5D8]/40 border border-[#36271F]/15 p-8 sm:p-10 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#526E48] font-sans font-semibold block mb-1">
                Advance Reserve
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#36271F]">
                Reserve Tomorrow's Hearth Pull
              </h3>
              <p className="text-xs text-[#685449] font-sans mt-1">
                Ensure your favorite loaf is set aside before walk-in shelves sell out.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              {error && (
                <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded text-xs">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-[10px] font-semibold text-[#36271F] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Iyer"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[10px] font-semibold text-[#36271F] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-[10px] font-semibold text-[#36271F] mb-1.5">
                    Select Hearth Pull
                  </label>
                  <select
                    value={bread}
                    onChange={(e) => setBread(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48]"
                  >
                    <option>Country Sourdough Loaf (800g)</option>
                    <option>Rosemary Olive Oil Focaccia Slab</option>
                    <option>Normandy Butter Croissants (Box of 4)</option>
                    <option>San Sebastián Burnt Basque Cheesecake (1kg)</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[10px] font-semibold text-[#36271F] mb-1.5">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48]"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] font-semibold text-[#36271F] mb-1.5">
                  Slicing Preference / Notes
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Slice medium, keep uncut, extra dark crust..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-stone-500 italic">
                  * Demonstration reserve form: validated locally with demo feedback.
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#36271F] hover:bg-[#526E48] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
