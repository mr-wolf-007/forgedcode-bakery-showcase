import React, { useState } from 'react';
import { Calendar, Users, Sparkles, MessageCircle, CheckCircle2, Clock, MapPin, Send } from 'lucide-react';

export const MaisonConcierge: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    experience: "L'Heure du Thé Impériale (Afternoon Tea)",
    guests: '2 Guests',
    date: '',
    dietary: 'Vegetarian / 100% Eggless Preferred',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ref = `ME-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `*Maison Éclair VIP Concierge Requisition*\n` +
      `Reference: ${bookingRef || 'Pending'}\n` +
      `Client: ${formData.name}\n` +
      `Contact: ${formData.phone}\n` +
      `Experience: ${formData.experience}\n` +
      `Party Size: ${formData.guests}\n` +
      `Preferred Date: ${formData.date || 'Flexible'}\n` +
      `Dietary Note: ${formData.dietary}\n` +
      (formData.notes ? `Special Notes: ${formData.notes}` : '')
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="concierge" className="py-24 sm:py-32 bg-[#09090b] text-white border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#e2b472] font-mono block mb-3">
            Haute Conciergerie Privée
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light uppercase tracking-wide mb-4">
            Salon Reservations &amp; Bespoke Requisitions
          </h2>
          <p className="text-sm font-serif text-[#9c9ca4] leading-relaxed">
            Due to our 12-seat capacity, reservations for afternoon tea service and evening dessert flights are required minimum 24 hours in advance.
          </p>
        </div>

        {/* Concierge Form or Confirmation */}
        <div className="bg-[#121215] border border-[#e2b472]/30 p-8 sm:p-14 shadow-2xl relative">
          
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#e2b472]/10 border border-[#e2b472] flex items-center justify-center mx-auto text-[#e2b472]">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#e2b472] font-mono block mb-2">
                  Dossier Enregistré · {bookingRef}
                </span>
                <h3 className="text-3xl font-serif text-white font-light mb-2">
                  Merci, {formData.name}
                </h3>
                <p className="text-sm font-serif text-[#a5a5ab] max-w-md mx-auto leading-relaxed">
                  Your reservation dossier has been prepared for {formData.experience} ({formData.guests}).
                  Our head concierge will connect with you on WhatsApp within two hours.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#e2b472] hover:bg-[#f3d29a] text-[#0d0d0f] text-xs tracking-[0.25em] uppercase font-semibold transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={15} />
                  <span>Send Directly on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs tracking-[0.2em] uppercase font-light transition-colors"
                >
                  Modify Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maharani Gayatri / Lord Sterling"
                    className="w-full bg-[#09090b] border border-white/10 focus:border-[#e2b472] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-serif placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono mb-2">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#09090b] border border-white/10 focus:border-[#e2b472] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-mono placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono mb-2">
                    Haute Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-[#09090b] border border-white/10 focus:border-[#e2b472] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-serif"
                  >
                    <option>L'Heure du Thé Impériale (Afternoon Tea)</option>
                    <option>Le Grand Dégustation (5 Courses)</option>
                    <option>Private Haute Wedding Cake Commission</option>
                    <option>VIP Corporate Gifting Velvet Coffrets (50+ units)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono mb-2">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#09090b] border border-white/10 focus:border-[#e2b472] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-serif"
                  >
                    <option>2 Guests (Intimate Table)</option>
                    <option>4 Guests (Salon Alcove)</option>
                    <option>6 Guests (Full Bay)</option>
                    <option>Full Private Salon Buyout (Up to 12 Guests)</option>
                    <option>Large Gala Commission (50+ Guests)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#09090b] border border-white/10 focus:border-[#e2b472] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono mb-2">
                    Dietary Requirements
                  </label>
                  <select
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    className="w-full bg-[#09090b] border border-white/10 focus:border-[#e2b472] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-serif"
                  >
                    <option>Vegetarian / 100% Eggless Preferred</option>
                    <option>Traditional French (Includes Pastry Egg Whites)</option>
                    <option>Strict Nut-Conscious</option>
                    <option>No Specific Preference</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono mb-2">
                  Special Notes or Celebratory Occasion (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Anniversary, bespoke monogram inscription, champagne selection..."
                  className="w-full bg-[#09090b] border border-white/10 focus:border-[#e2b472] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-serif placeholder:text-white/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#e2b472] hover:bg-[#f3d29a] text-[#0d0d0f] text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 shadow-xl shadow-[#e2b472]/10"
              >
                Transmit Dossier to Concierge
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
