import React, { useState } from 'react';
import { Sparkles, Calendar, Users, Heart, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface AtelierCustomizerProps {
  initialStyle?: string;
}

export const AtelierCustomizer: React.FC<AtelierCustomizerProps> = ({ initialStyle }) => {
  const [formData, setFormData] = useState({
    occasion: 'Wedding Celebration',
    size: '2 Tiers (Serves 40-50 Guests)',
    style: initialStyle || 'Botanical Hand-Wired Sugar Peonies',
    flavor: 'Tahitian Vanilla Sponge with Raspberry Rose Gelée',
    eventDate: '',
    clientName: '',
    phone: '',
    venue: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.phone) return;
    const ref = `TCA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const getWhatsAppCommissionLink = () => {
    const text = encodeURIComponent(
      `*The Cake Atelier — Custom Commission Request*\n` +
      `Reference: ${bookingRef || 'Pending'}\n` +
      `Client: ${formData.clientName}\n` +
      `Phone: ${formData.phone}\n` +
      `Occasion: ${formData.occasion}\n` +
      `Scale: ${formData.size}\n` +
      `Design Style: ${formData.style}\n` +
      `Flavor Pairing: ${formData.flavor}\n` +
      `Event Date: ${formData.eventDate || 'TBD'}\n` +
      `Venue: ${formData.venue || 'TBD'}\n` +
      (formData.notes ? `Inspiration Notes: ${formData.notes}` : '')
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="customizer" className="py-24 bg-[#FFFDFB] border-b border-pink-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-pink-700 font-serif block mb-2">
            The Bespoke Journey
          </span>
          <h3 className="text-3xl sm:text-5xl font-serif font-light text-stone-900 mb-4">
            Commission Your Centerpiece
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-serif leading-relaxed">
            Select your preferred structural proportions, decorative aesthetic, and flavor architecture. We accept a maximum of three commissions per weekend to guarantee undivided attention.
          </p>
        </div>

        {/* Customization Form */}
        <div className="bg-[#FAF8F5] border border-pink-200/80 rounded-3xl p-8 sm:p-12 shadow-lg">
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-pink-100 border border-pink-300 flex items-center justify-center mx-auto text-pink-700">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-pink-700 font-serif block mb-2">
                  Dossier Ref: {bookingRef}
                </span>
                <h4 className="text-3xl font-serif font-light text-stone-900 mb-2">
                  Thank You, {formData.clientName}
                </h4>
                <p className="text-sm font-serif text-stone-600 max-w-md mx-auto leading-relaxed">
                  Your design commission dossier has been recorded for your {formData.occasion} on {formData.eventDate || 'your selected date'}.
                  Our lead cake artist will reach out on WhatsApp with a gouache sketch consultation.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppCommissionLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-stone-900 hover:bg-pink-700 text-pink-50 rounded-full text-xs tracking-[0.2em] uppercase font-serif transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={15} />
                  <span>Transmit Dossier to Studio WhatsApp</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 bg-white text-stone-700 border border-stone-200 rounded-full text-xs tracking-wider font-serif hover:bg-pink-50 transition-colors"
                >
                  Edit Specification
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCustomSubmit} className="space-y-8 font-serif">
              
              {/* Step 1: Occasion & Scale */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-stone-500 font-sans font-medium mb-2">
                    1. Celebration Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={e => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-pink-500 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none"
                  >
                    <option>Wedding Celebration</option>
                    <option>Milestone Birthday Soirée</option>
                    <option>Anniversary Gala</option>
                    <option>Editorial Brand Event / Gala</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-stone-500 font-sans font-medium mb-2">
                    2. Approximate Guest Count &amp; Height
                  </label>
                  <select
                    value={formData.size}
                    onChange={e => setFormData({ ...formData, size: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-pink-500 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none"
                  >
                    <option>1 Tall Tier (Serves 15 — 20 Guests)</option>
                    <option>2 Tiers (Serves 35 — 45 Guests)</option>
                    <option>3 Tiers (Serves 80 — 100 Guests)</option>
                    <option>4-Tier Grand Showpiece (Serves 120+ Guests)</option>
                  </select>
                </div>
              </div>

              {/* Step 2: Aesthetic Style & Flavor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-stone-500 font-sans font-medium mb-2">
                    3. Sculptural Aesthetic Style
                  </label>
                  <select
                    value={formData.style}
                    onChange={e => setFormData({ ...formData, style: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-pink-500 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none"
                  >
                    <option>Botanical Hand-Wired Sugar Peonies &amp; Roses</option>
                    <option>Modern Concrete Texture &amp; Rice Paper Sails</option>
                    <option>Vintage Lambeth Over-Piped Rococo Ruffles</option>
                    <option>Real Pressed Organic Edible Botanicals</option>
                    <option>Obsidian Charcoal Velvet with 24k Gold Leaf</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-stone-500 font-sans font-medium mb-2">
                    4. Signature Flavor Pairing
                  </label>
                  <select
                    value={formData.flavor}
                    onChange={e => setFormData({ ...formData, flavor: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-pink-500 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none"
                  >
                    <option>Tahitian Vanilla Sponge with Raspberry Rose Gelée</option>
                    <option>Belgian 70% Dark Fudge with Salted Espresso Caramel</option>
                    <option>Sicilian Lemon Olive Oil with Wild Blueberry Curd</option>
                    <option>Pistachio Sponge with Cardamom Saffron Buttercream</option>
                    <option>Earl Grey Lavender with Citrus Blossom Glaze</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Event Date & Venue */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-stone-500 font-sans font-medium mb-2">
                    5. Event Date (Minimum 2 Weeks Lead Time)
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={e => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-pink-500 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-stone-500 font-sans font-medium mb-2">
                    6. Reception Venue / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. The Taj Palace / ITC Grand Chola"
                    value={formData.venue}
                    onChange={e => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-pink-500 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none placeholder:text-stone-300"
                  />
                </div>
              </div>

              {/* Client Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-stone-500 font-sans font-medium mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya &amp; Siddharth"
                    value={formData.clientName}
                    onChange={e => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-pink-500 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-stone-500 font-sans font-medium mb-2">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-pink-500 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none font-sans"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-stone-900 hover:bg-pink-700 text-pink-50 rounded-full text-xs tracking-[0.25em] uppercase font-serif transition-all duration-300 shadow-xl shadow-stone-900/10"
              >
                Submit Commission Inquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
