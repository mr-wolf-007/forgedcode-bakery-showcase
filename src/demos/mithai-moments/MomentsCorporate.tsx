import React, { useState } from 'react';
import { Building2, Sparkles, CheckCircle2, MessageCircle, Truck } from 'lucide-react';

export const MomentsCorporate: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    phone: '',
    quantity: '50 — 100 Boxes (15% Off)',
    budget: '₹1,000 — ₹1,500 per Box',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.phone) return;
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `*Mithai & Moments — Corporate Bulk Gifting Requisition*\n` +
      `Company: ${formData.company}\n` +
      `Contact: ${formData.contactPerson}\n` +
      `Phone: ${formData.phone}\n` +
      `Estimated Quantity: ${formData.quantity}\n` +
      `Target Budget: ${formData.budget}\n` +
      (formData.notes ? `Custom Branding Details: ${formData.notes}` : '')
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="corporate" className="py-20 bg-[#FFF8E7] border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-orange-700 font-bold font-mono block">
              Enterprise &amp; Institutional Services
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif font-black text-red-950 leading-tight">
              Corporate Gifting at Scale
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
              We handle the entire end-to-end corporate gifting operation for India's leading enterprises—from custom packaging manufacture and confectionery production to multi-city individual employee address fulfillment.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-amber-200 shadow-xs">
                <CheckCircle2 size={18} className="text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-bold text-red-950 block">Custom Gold Foil Stamping:</strong>
                  <span className="text-[11px] text-stone-600">Your enterprise logo hot-stamped on rigid magnetic boxes or metallic ribbon bands.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-amber-200 shadow-xs">
                <CheckCircle2 size={18} className="text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-bold text-red-950 block">Pan-India Direct Employee Dispatch:</strong>
                  <span className="text-[11px] text-stone-600">Provide an Excel sheet of employee addresses; we handle door-to-door temperature-controlled delivery.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-amber-200 shadow-xs">
                <CheckCircle2 size={18} className="text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-bold text-red-950 block">Volume Tier Pricing:</strong>
                  <span className="text-[11px] text-stone-600">25+ units (10% off), 50+ units (15% off), 100+ units (20% off + free branding plate).</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Corporate Quotation Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border-2 border-amber-300 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4 font-serif">
                <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 size={30} />
                </div>
                <h4 className="text-2xl font-bold text-red-950">
                  Bulk Quotation Prepared!
                </h4>
                <p className="text-xs font-sans text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.contactPerson} ({formData.company}). Send this directly to our B2B account manager on WhatsApp for immediate tiered catalogue dispatch.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold font-sans uppercase tracking-wider transition-all shadow-md"
                  >
                    <MessageCircle size={16} />
                    <span>Send to B2B Corporate Desk</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-amber-200 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-orange-700 block">
                    Institutional Accounts
                  </span>
                  <h4 className="text-2xl font-serif font-black text-red-950">
                    Request Corporate Catalogue &amp; Samples
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Infosys / Titan / HDFC"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#FFFDF7] border border-amber-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-orange-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Menon"
                      value={formData.contactPerson}
                      onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-[#FFFDF7] border border-amber-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-orange-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FFFDF7] border border-amber-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-orange-600 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Estimated Quantity
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-[#FFFDF7] border border-amber-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-orange-600"
                    >
                      <option>25 — 50 Boxes (10% Off)</option>
                      <option>50 — 100 Boxes (15% Off)</option>
                      <option>100 — 500 Boxes (20% Off + Custom Logo)</option>
                      <option>500+ Boxes (Enterprise Custom Trousseau)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Target Budget per Box
                  </label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#FFFDF7] border border-amber-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-orange-600"
                  >
                    <option>Under ₹1,000 per Box</option>
                    <option>₹1,000 — ₹1,500 per Box</option>
                    <option>₹1,500 — ₹2,500 per Box</option>
                    <option>₹2,500+ Luxury Executive Gift</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  Request Bulk Quote &amp; Tasting Box
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
