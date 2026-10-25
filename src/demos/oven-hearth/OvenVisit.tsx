import React, { useState } from 'react';
import { Clock, MapPin, Phone, MessageCircle, CheckCircle2, Flame } from 'lucide-react';

interface OvenVisitProps {
  initialReserveItem?: string;
}

export const OvenVisit: React.FC<OvenVisitProps> = ({ initialReserveItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    items: initialReserveItem || 'Heritage Country Boule (800g)',
    pickupSlot: 'Morning Batch (7:00 AM — 9:00 AM)',
    notes: ''
  });

  const [reserved, setReserved] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setReserved(true);
  };

  const getWhatsAppReserveLink = () => {
    const text = encodeURIComponent(
      `*Oven & Hearth — Counter Bread Reservation*\n` +
      `Customer: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Reserved Items: ${formData.items}\n` +
      `Pickup Slot: ${formData.pickupSlot}\n` +
      (formData.notes ? `Note: ${formData.notes}` : '')
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="visit" className="py-24 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Store Hours & Heritage Counter Details */}
          <div className="lg:col-span-5 space-y-6 font-serif">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C2593F] font-mono block">
              Old Bazaar Lane • Since 1964
            </span>
            <h3 className="text-3xl sm:text-4xl font-light text-[#2E1F1A]">
              Visit the Bakery &amp; Hearth
            </h3>
            <p className="text-xs sm:text-sm text-[#4E3D36] leading-relaxed">
              We bake in limited batches each morning and afternoon until the wire racks are empty. Advance counter reservations ensure your hot loaf is wrapped in parchment and waiting for you.
            </p>

            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-200/80 space-y-4 text-xs text-[#2E1F1A] shadow-xs">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C2593F] shrink-0 mt-0.5" />
                <span>
                  <strong>Oven &amp; Hearth Bakery Counter</strong><br />
                  #114, Old Bazaar Lane, Sadashiv Peth,<br />
                  Pune, Maharashtra 411030
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Clock size={18} className="text-[#C2593F] shrink-0" />
                <span>6:00 AM — 9:00 PM (Closed Sunday Afternoons)</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-[#C2593F] shrink-0" />
                <span>Counter: +91 20 2445 1964 / WhatsApp: +91 98765 43210</span>
              </p>
            </div>
          </div>

          {/* Right Counter Loaf Reservation Form */}
          <div className="lg:col-span-7 bg-[#FDFBF7] p-8 sm:p-10 rounded-3xl border-2 border-[#C2593F]/30 shadow-md font-serif">
            {reserved ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-stone-100 border border-stone-300 flex items-center justify-center mx-auto text-[#606C38]">
                  <CheckCircle2 size={30} />
                </div>
                <h4 className="text-2xl font-light text-[#2E1F1A]">
                  Reservation Recorded, {formData.name}
                </h4>
                <p className="text-xs text-[#4E3D36] max-w-md mx-auto leading-relaxed">
                  We have kept aside your {formData.items} for the {formData.pickupSlot}. Send this directly to counter WhatsApp for instant confirmation.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppReserveLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C2593F] hover:bg-[#a84831] text-white text-xs tracking-wider uppercase rounded-lg transition-colors shadow-sm"
                  >
                    <MessageCircle size={15} />
                    <span>Send to Bakery Counter WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReserve} className="space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#606C38] font-mono block mb-1">
                    Advance Bread &amp; Puff Reservation
                  </span>
                  <h4 className="text-xl sm:text-2xl font-light text-[#2E1F1A]">
                    Reserve Tomorrow's Hearth Bake
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-mono mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Joshi"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs text-[#2E1F1A] focus:outline-none focus:border-[#C2593F]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-mono mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs text-[#2E1F1A] focus:outline-none focus:border-[#C2593F] font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-mono mb-1">
                      Select Item
                    </label>
                    <select
                      value={formData.items}
                      onChange={e => setFormData({ ...formData, items: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs text-[#2E1F1A] focus:outline-none focus:border-[#C2593F]"
                    >
                      <option>Heritage Country Boule (800g)</option>
                      <option>Old-Style Milk Bread Loaf (2 loaves)</option>
                      <option>Crusty Brun Pav (Pack of 4)</option>
                      <option>Spiced Potato Masala Puffs (4 pcs)</option>
                      <option>Pure Butter Nankhatai Box (250g)</option>
                      <option>Double-Baked Cardamom Rusk (300g)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-mono mb-1">
                      Pickup Time Slot
                    </label>
                    <select
                      value={formData.pickupSlot}
                      onChange={e => setFormData({ ...formData, pickupSlot: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs text-[#2E1F1A] focus:outline-none focus:border-[#C2593F]"
                    >
                      <option>Morning Batch (7:00 AM — 9:00 AM)</option>
                      <option>Mid-Day Fresh (11:00 AM — 1:00 PM)</option>
                      <option>Hot Afternoon Puffs (3:30 PM — 5:30 PM)</option>
                      <option>Evening Bread (6:30 PM — 8:30 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2E1F1A] hover:bg-[#C2593F] text-[#FDFBF7] rounded-lg text-xs tracking-wider uppercase font-serif transition-colors shadow-sm"
                >
                  Hold Bake for Counter Pickup
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
