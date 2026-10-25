import React, { useState } from 'react';
import { Cake, Sparkles, MessageSquare, Check } from 'lucide-react';

interface SugarRushCakeBuilderProps {
  onSuccessSubmit: (data: any) => void;
  onWhatsAppClick: (msg?: string) => void;
}

export const SugarRushCakeBuilder: React.FC<SugarRushCakeBuilderProps> = ({ onSuccessSubmit, onWhatsAppClick }) => {
  const [flavor, setFlavor] = useState("Dutch Truffle Fudge");
  const [size, setSize] = useState("1 kg (Party Size / 8-10 Guests)");
  const [topping, setTopping] = useState("Smash Heart Dome + Hammer");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [messageOnCake, setMessageOnCake] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const flavors = [
    { name: "Dutch Truffle Fudge", badge: "Most Popular", color: "bg-amber-950 text-white" },
    { name: "Rainbow Pinata Surprise", badge: "With Hammer", color: "bg-pink-500 text-white" },
    { name: "Red Velvet Cream Cheese", badge: "Velvety", color: "bg-red-600 text-white" },
    { name: "Lotus Biscoff Loaded", badge: "Caramel Crunch", color: "bg-amber-600 text-white" },
    { name: "Mango Pineapple Swirl", badge: "Tropical", color: "bg-yellow-500 text-slate-900" }
  ];

  const sizes = [
    { label: "500g", desc: "4-6 Friends", price: "₹650" },
    { label: "1 kg", desc: "8-10 Guests (Includes Hammer)", price: "₹1,350" },
    { label: "1.5 kg", desc: "15 Guests", price: "₹1,850" },
    { label: "2 kg Two-Tier", desc: "Grand Celebration", price: "₹2,600" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please tell us your name and phone number to send your custom cake design!");
      return;
    }
    setError("");
    onSuccessSubmit({
      name,
      phone,
      cakeFlavor: `${flavor} (${topping})`,
      quantity: size,
      date,
      notes: messageOnCake ? `Piped Message: "${messageOnCake}"` : "None"
    });
  };

  return (
    <section id="cake-builder-section" className="py-24 bg-[#FFFBF5] text-[#2B2625] border-b-2 border-orange-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block transform rotate-1 px-4 py-1.5 rounded-full bg-[#FFD166] text-[#2B2625] text-xs font-black uppercase tracking-wider border-2 border-[#2B2625] shadow-[2px_2px_0px_#2B2625]">
            Interactive Cake Studio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#2B2625] tracking-tight">
            Build Your Dream Birthday Cake
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-bold">
            Pick your flavor, size, smashable topping, and birthday message in 4 fun steps!
          </p>
        </div>

        {/* Builder Interactive Shell */}
        <div className="bg-white border-4 border-[#2B2625] rounded-3xl p-6 sm:p-12 shadow-[8px_8px_0px_#2B2625] space-y-8">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="p-3 bg-red-100 border-2 border-red-400 text-red-700 font-bold rounded-xl text-xs">
                {error}
              </div>
            )}

            {/* Step 1: Choose Flavor */}
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-wider text-[#2B2625]">
                Step 1: Choose Your Core Flavor
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {flavors.map(f => (
                  <button
                    type="button"
                    key={f.name}
                    onClick={() => setFlavor(f.name)}
                    className={`p-3.5 rounded-2xl border-2 text-left font-black transition-all flex flex-col justify-between ${
                      flavor === f.name
                        ? 'border-[#2B2625] bg-[#FFF8E7] shadow-[3px_3px_0px_#2B2625]'
                        : 'border-stone-200 hover:border-[#2B2625] bg-stone-50'
                    }`}
                  >
                    <span className="text-xs leading-tight block mb-2">{f.name}</span>
                    <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-[#FFD166] text-[#2B2625] self-start font-bold">
                      {f.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Size */}
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-wider text-[#2B2625]">
                Step 2: Select Cake Size & Portions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {sizes.map(s => (
                  <button
                    type="button"
                    key={s.label}
                    onClick={() => setSize(`${s.label} (${s.desc})`)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      size.startsWith(s.label)
                        ? 'border-[#2B2625] bg-[#FFF0F3] shadow-[3px_3px_0px_#2B2625]'
                        : 'border-stone-200 hover:border-[#2B2625] bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between font-black">
                      <span className="text-base text-[#2B2625]">{s.label}</span>
                      <span className="text-sm text-[#FF3366]">{s.price}</span>
                    </div>
                    <span className="text-[11px] text-stone-500 font-bold block mt-1">{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Message & Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#2B2625] mb-1.5">
                  Step 3: Message to Pipe on Cake
                </label>
                <input
                  type="text"
                  value={messageOnCake}
                  onChange={(e) => setMessageOnCake(e.target.value)}
                  placeholder="e.g. 'Happy 18th Birthday Ananya!'"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-stone-200 focus:border-[#2B2625] text-sm font-bold bg-[#FFFBF5]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#2B2625] mb-1.5">
                  Celebration Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-stone-200 focus:border-[#2B2625] text-sm font-bold bg-[#FFFBF5]"
                />
              </div>
            </div>

            {/* Step 4: Contact Phone & Submission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t-2 border-stone-100">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#2B2625] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-stone-200 focus:border-[#2B2625] text-sm font-bold bg-[#FFFBF5]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#2B2625] mb-1.5">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-stone-200 focus:border-[#2B2625] text-sm font-bold bg-[#FFFBF5]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t-2 border-stone-100">
              <span className="text-[11px] text-stone-500 font-bold italic">
                * Demonstration Builder: Captures your design client-side with instant feedback.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#FF3366] hover:bg-[#FF6B35] text-white font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#2B2625] border-2 border-[#2B2625] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Cake className="w-4 h-4" />
                <span>Confirm & Send Cake Order</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
