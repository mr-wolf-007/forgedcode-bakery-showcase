import React, { useState } from 'react';
import { ShieldCheck, MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import { DEMO_CONFIGS } from '../../data/demo-config';

interface MaharajaEnquiryProps {
  onSuccessSubmit: (data: any) => void;
  onWhatsAppClick: (msg?: string) => void;
}

export const MaharajaEnquiry: React.FC<MaharajaEnquiryProps> = ({ onSuccessSubmit, onWhatsAppClick }) => {
  const config = DEMO_CONFIGS["royal-sweets"];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [event, setEvent] = useState("Royal Destination Wedding");
  const [boxes, setBoxes] = useState("100 - 300 Velvet Boxes");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please provide your name and phone number to request a formal gifting proposal.");
      return;
    }
    setError("");
    onSuccessSubmit({
      name,
      phone,
      eventType: event,
      quantity: boxes,
      date,
      notes
    });
  };

  return (
    <section id="wedding-trousseau" className="py-24 bg-[#FAF6F0] border-t border-[#C59B27]/30 text-[#420D13]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Ledger-style Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] uppercase font-serif tracking-[0.25em] text-[#C59B27]">
            Royal Wedding & Festive Gifting Requisition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#420D13]">
            Commission a Bespoke Trousseau Suite
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto" />
          <p className="text-stone-600 text-xs sm:text-sm font-serif">
            We curate tailored sweet selections, monogrammed boxes, and cold-chain deliveries for grand celebrations across India.
          </p>
        </div>

        {/* Vintage Ledger Card */}
        <div className="bg-[#FFFDF9] border border-[#C59B27]/40 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59B27]/10 rounded-bl-full pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-serif">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-serif uppercase tracking-widest text-[#420D13] mb-2">
                  Host / Patrons Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maharani Gayatri Devi"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#C59B27]/30 text-[#420D13] font-serif focus:outline-none focus:border-[#420D13] text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-serif uppercase tracking-widest text-[#420D13] mb-2">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#C59B27]/30 text-[#420D13] font-serif focus:outline-none focus:border-[#420D13] text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-[11px] font-serif uppercase tracking-widest text-[#420D13] mb-2">
                  Occasion Type
                </label>
                <select
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#C59B27]/30 text-[#420D13] font-serif focus:outline-none focus:border-[#420D13] text-sm"
                >
                  <option>Royal Destination Wedding</option>
                  <option>Diwali Corporate Hamper</option>
                  <option>Roka & Engagement Trousseau</option>
                  <option>Family Milestone Celebration</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-serif uppercase tracking-widest text-[#420D13] mb-2">
                  Estimated Gift Boxes
                </label>
                <select
                  value={boxes}
                  onChange={(e) => setBoxes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#C59B27]/30 text-[#420D13] font-serif focus:outline-none focus:border-[#420D13] text-sm"
                >
                  <option>50 - 100 Velvet Boxes</option>
                  <option>100 - 300 Velvet Boxes</option>
                  <option>300 - 500+ Boxes</option>
                  <option>Bulk Loose Mithai (50kg+)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-serif uppercase tracking-widest text-[#420D13] mb-2">
                  Required Celebration Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#C59B27]/30 text-[#420D13] font-serif focus:outline-none focus:border-[#420D13] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-serif uppercase tracking-widest text-[#420D13] mb-2">
                Bespoke Requests & Monogram Inscriptions (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Saffron Kaju Katli + Badam Halwa combination, gold wax seal with initials, delivery to Udaipur..."
                className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#C59B27]/30 text-[#420D13] font-serif focus:outline-none focus:border-[#420D13] text-sm"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#C59B27]/20">
              <span className="text-[11px] text-stone-500 font-serif italic">
                * Demonstration Requisition: Input is validated client-side with interactive demo feedback.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#420D13] text-[#E5C158] hover:bg-[#58111A] text-xs font-serif uppercase tracking-[0.2em] transition-all shadow-md"
              >
                Submit Requisition
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
