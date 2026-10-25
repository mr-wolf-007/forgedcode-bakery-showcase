import React, { useState } from 'react';
import { Clock, MapPin, Phone, Sun, MessageCircle, CheckCircle2, Heart } from 'lucide-react';

export const ButterVisit: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Bandra West (Pali Hill)',
    guests: '2 Guests (Veranda Table)',
    date: '',
    timeSlot: 'Morning Brunch (10:00 AM — 12:00 PM)',
    notes: ''
  });

  const [booked, setBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setBooked(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `*Butter & Bloom Café — Table Reservation*\n` +
      `Guest Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Branch: ${formData.location}\n` +
      `Party Size: ${formData.guests}\n` +
      `Date & Slot: ${formData.date || 'Flexible'} (${formData.timeSlot})\n` +
      (formData.notes ? `Note: ${formData.notes}` : '')
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="visit" className="py-24 bg-[#FBF8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#606C38] font-bold font-sans block mb-2">
            Sunlit Verandas &amp; Espresso Bars
          </span>
          <h3 className="text-3xl sm:text-5xl font-serif text-[#2B1810]">
            Visit Our Neighborhood Cafés
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-sans">
            Drop by for walk-in coffee and pastries anytime, or reserve a table on our garden veranda for weekend morning brunch.
          </p>
        </div>

        {/* 2 Locations + Table Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Locations Info */}
          <div className="lg:col-span-5 space-y-6 font-sans">
            
            {/* Bandra West Location */}
            <div className="bg-[#FFFDF8] p-6 rounded-3xl border border-stone-200 shadow-xs space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#713F12] bg-[#FEF08A] px-2.5 py-0.5 rounded-full inline-block">
                Flagship Veranda
              </span>
              <h4 className="text-xl font-serif text-[#2B1810]">
                Bandra West, Mumbai
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                #24, Pali Mala Road, Off Turner Road, Bandra West, Mumbai 400050<br />
                <span className="text-stone-400">Landmark: Behind Zig Zag Road Pet Park</span>
              </p>
              <div className="pt-2 text-xs text-stone-700 flex items-center justify-between border-t border-stone-100">
                <span>8:00 AM — 8:00 PM Daily</span>
                <span className="text-[#606C38] font-semibold">Pet Friendly 🐾</span>
              </div>
            </div>

            {/* Indiranagar Location */}
            <div className="bg-[#FFFDF8] p-6 rounded-3xl border border-stone-200 shadow-xs space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#606C38] bg-[#E9EDC9] px-2.5 py-0.5 rounded-full inline-block">
                Garden Roastery
              </span>
              <h4 className="text-xl font-serif text-[#2B1810]">
                Indiranagar, Bengaluru
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                #712, 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038<br />
                <span className="text-stone-400">Landmark: Opposite Defence Colony Corner</span>
              </p>
              <div className="pt-2 text-xs text-stone-700 flex items-center justify-between border-t border-stone-100">
                <span>7:30 AM — 8:30 PM Daily</span>
                <span className="text-[#606C38] font-semibold">Cold Brew On Tap ☕</span>
              </div>
            </div>

          </div>

          {/* Right Table Reservation Form */}
          <div className="lg:col-span-7 bg-[#FFFDF8] p-8 sm:p-10 rounded-3xl border-2 border-yellow-200 shadow-lg font-sans">
            {booked ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center mx-auto text-[#713F12]">
                  <CheckCircle2 size={30} />
                </div>
                <h4 className="text-2xl font-serif text-[#2B1810]">
                  Table Request Received, {formData.name}!
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  We look forward to welcoming you at our {formData.location} veranda for {formData.guests}. Send this reservation details to WhatsApp for immediate table hold.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2B1810] hover:bg-[#4A2810] text-white rounded-full text-xs uppercase tracking-wider font-bold transition-all shadow-md"
                  >
                    <MessageCircle size={15} />
                    <span>Confirm via Café WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-stone-200 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#606C38] block">
                    Brunch &amp; Veranda Seating
                  </span>
                  <h4 className="text-2xl font-serif text-[#2B1810]">
                    Reserve Your Daylight Table
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Sengupta"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FBF8EF] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      WhatsApp Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FBF8EF] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-700 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Preferred Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#FBF8EF] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                    >
                      <option>Bandra West (Pali Hill, Mumbai)</option>
                      <option>Indiranagar (12th Main, Bengaluru)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Party Size &amp; Seating
                    </label>
                    <select
                      value={formData.guests}
                      onChange={e => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#FBF8EF] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                    >
                      <option>2 Guests (Veranda Table)</option>
                      <option>4 Guests (Corner Sunlit Booth)</option>
                      <option>6 Guests (Communal Table)</option>
                      <option>8+ Guests (Private Brunch Alcove)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#FBF8EF] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-700 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-[#FBF8EF] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                    >
                      <option>Early Bird (8:00 AM — 10:00 AM)</option>
                      <option>Morning Brunch (10:00 AM — 12:30 PM)</option>
                      <option>Afternoon Coffee &amp; Pastry (2:00 PM — 4:30 PM)</option>
                      <option>Golden Hour Dusk (5:00 PM — 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2B1810] hover:bg-[#4A2810] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  Hold Veranda Table
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
