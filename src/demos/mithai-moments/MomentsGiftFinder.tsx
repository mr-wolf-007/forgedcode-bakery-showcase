import React, { useState } from 'react';
import { Gift, Sparkles, Filter, Check, MessageCircle, ArrowRight } from 'lucide-react';

interface GiftHamper {
  id: string;
  title: string;
  occasion: string;
  recipient: string;
  budgetTier: string;
  price: number;
  image: string;
  items: string[];
  packaging: string;
  description: string;
}

const HAMPERS_DATA: GiftHamper[] = [
  {
    id: 'mm-01',
    title: 'The Imperial Shubh Casket',
    occasion: 'Diwali & New Year',
    recipient: 'VIP Corporate Clients',
    budgetTier: '₹2,000 — ₹3,500',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    items: ['Pure Kaju Katli (250g)', 'Smoked California Almonds (200g)', 'Saffron Mysore Pak (250g)', 'Brass Diya & Brass Agarbatti Stand'],
    packaging: 'Rigid magnetic flip box wrapped in royal maroon textured paper with gold foil stamping.',
    description: 'Our benchmark festive gift chosen by luxury automobile and banking institutions for high-net-worth clients.'
  },
  {
    id: 'mm-02',
    title: 'The Ananda Corporate Hamper',
    occasion: 'Corporate Gifting',
    recipient: 'Office Employees',
    budgetTier: 'Under ₹1,000',
    price: 850,
    image: 'https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?auto=format&fit=crop&w=600&q=80',
    items: ['Assorted Motichoor Laddus (250g)', 'Roasted Salted Cashews (150g)', 'Custom Printed Company Greeting Card'],
    packaging: 'Eco-conscious recyclable golden kraft box with company ribbon band.',
    description: 'High-volume employee celebration box engineered for pan-India dispatch without breakage.'
  },
  {
    id: 'mm-03',
    title: 'The Maharani Wedding Trousseau Box',
    occasion: 'Wedding Trousseau',
    recipient: 'Wedding Guests',
    budgetTier: 'Ultra Luxury ₹3,500+',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?auto=format&fit=crop&w=600&q=80',
    items: ['16-Variety Partitioned Royal Mithai', 'Silvered Dry Fruit Balls', 'Mamra Badam', 'Hand-hammered Brass Bell'],
    packaging: 'Handcrafted velvet trousseau chest with antique brass latch and silk tassels.',
    description: 'Designed as an heirloom invitation keepsake for wedding attendees and extended royal family.'
  },
  {
    id: 'mm-04',
    title: 'The Family Utsav Sweet Box',
    occasion: 'Family Milestone',
    recipient: 'Extended Family',
    budgetTier: '₹1,000 — ₹2,000',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    items: ['Badam Halwa Cubes (250g)', 'Iranian Roasted Pistachios (150g)', 'Kaju Pista Roll (200g)', 'Handcrafted Diya Pair'],
    packaging: 'Two-tier sliding drawer gift box with auspicious peacock motif.',
    description: 'A warm household gifting favorite filled with timeless traditional ghee sweets.'
  },
  {
    id: 'mm-05',
    title: 'The Executive Heritage Trunk',
    occasion: 'Corporate Gifting',
    recipient: 'VIP Corporate Clients',
    budgetTier: '₹2,000 — ₹3,500',
    price: 2850,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    items: ['Anjeer Kalakand (250g)', 'Dark Chocolate Coated Cashews (200g)', 'Organic Honey Jar (150g)', 'Brass Saffron Server'],
    packaging: 'Faux-leather trunk with brass corners and engraved metal plaque.',
    description: 'An executive showpiece gift designed for director-level gifting and corporate board presentations.'
  },
  {
    id: 'mm-06',
    title: 'The Mithai Magic Mini Box',
    occasion: 'Diwali & New Year',
    recipient: 'Extended Family',
    budgetTier: 'Under ₹1,000',
    price: 650,
    image: 'https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?auto=format&fit=crop&w=600&q=80',
    items: ['Bilona Ghee Mysore Pak (200g)', 'Masala Roasted Makhanas (80g)', 'Handmade Festive Diya'],
    packaging: 'Bright festive orange rigid box with gold floral embossing.',
    description: 'The ideal sweet token to carry when visiting friends and relatives during festive days.'
  }
];

export const MomentsGiftFinder: React.FC = () => {
  const [occasion, setOccasion] = useState('All Occasions');
  const [recipient, setRecipient] = useState('All Recipients');
  const [budget, setBudget] = useState('All Budgets');

  const filteredHampers = HAMPERS_DATA.filter(h => {
    const matchOccasion = occasion === 'All Occasions' || h.occasion === occasion;
    const matchRecipient = recipient === 'All Recipients' || h.recipient === recipient;
    const matchBudget = budget === 'All Budgets' || h.budgetTier === budget;
    return matchOccasion && matchRecipient && matchBudget;
  });

  const getWhatsAppInquiry = (hamper: GiftHamper) => {
    const text = encodeURIComponent(
      `Hello Mithai & Moments, I am interested in ordering "${hamper.title}" (₹${hamper.price} per box) for our ${hamper.occasion}. Please share availability and bulk discount slabs.`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="gift-finder" className="py-20 bg-[#FFFDF7] border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] tracking-[0.3em] uppercase text-orange-700 font-bold font-mono block mb-2">
            Curated Gifting Wizard
          </span>
          <h3 className="text-3xl sm:text-5xl font-serif font-black text-red-950">
            Interactive Gift Finder
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium">
            Filter our curated caskets by celebration occasion, recipient relationship, and per-box budget to find the perfect match.
          </p>
        </div>

        {/* 3-Step Filter Toolbar */}
        <div className="bg-[#FFF8E7] border-2 border-amber-300 rounded-3xl p-6 sm:p-8 mb-12 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Occasion */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-red-950 mb-2">
                1. Select Occasion
              </label>
              <select
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
                className="w-full bg-white border border-amber-300 rounded-xl px-4 py-2.5 text-xs text-stone-800 font-medium focus:outline-none focus:border-orange-600 shadow-xs"
              >
                <option>All Occasions</option>
                <option>Diwali &amp; New Year</option>
                <option>Corporate Gifting</option>
                <option>Wedding Trousseau</option>
                <option>Family Milestone</option>
              </select>
            </div>

            {/* Recipient */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-red-950 mb-2">
                2. Who is it for?
              </label>
              <select
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
                className="w-full bg-white border border-amber-300 rounded-xl px-4 py-2.5 text-xs text-stone-800 font-medium focus:outline-none focus:border-orange-600 shadow-xs"
              >
                <option>All Recipients</option>
                <option>VIP Corporate Clients</option>
                <option>Office Employees</option>
                <option>Wedding Guests</option>
                <option>Extended Family</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-red-950 mb-2">
                3. Budget Per Box
              </label>
              <select
                value={budget}
                onChange={e => setBudget(e.target.value)}
                className="w-full bg-white border border-amber-300 rounded-xl px-4 py-2.5 text-xs text-stone-800 font-medium focus:outline-none focus:border-orange-600 shadow-xs"
              >
                <option>All Budgets</option>
                <option>Under ₹1,000</option>
                <option>₹1,000 — ₹2,000</option>
                <option>₹2,000 — ₹3,500</option>
                <option>Ultra Luxury ₹3,500+</option>
              </select>
            </div>

          </div>

          <div className="mt-4 pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs text-stone-600">
            <span>Showing {filteredHampers.length} curated gift caskets matching your criteria</span>
            <button
              onClick={() => {
                setOccasion('All Occasions');
                setRecipient('All Recipients');
                setBudget('All Budgets');
              }}
              className="text-orange-700 font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Results Hamper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHampers.map(hamper => (
            <div
              key={hamper.id}
              className="bg-white border-2 border-amber-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-amber-100">
                  <img
                    src={hamper.image}
                    alt={hamper.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-red-900/90 text-amber-200 text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow">
                    {hamper.occasion}
                  </div>
                </div>

                <div className="p-6 space-y-3 font-serif">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-orange-800 font-sans block">
                    Ideal For: {hamper.recipient}
                  </span>
                  <h4 className="text-xl font-bold text-red-950 leading-snug">
                    {hamper.title}
                  </h4>
                  <p className="text-xs font-sans text-stone-600 leading-relaxed">
                    {hamper.description}
                  </p>

                  {/* Included Contents */}
                  <div className="bg-[#FFFDF7] p-3 rounded-xl border border-amber-200/80 space-y-1 text-xs font-sans">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                      Hamper Inclusions:
                    </span>
                    {hamper.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 text-stone-700 text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-2">
                <div>
                  <span className="text-2xl font-black text-red-900 font-serif">
                    ₹{hamper.price}
                  </span>
                  <span className="text-[10px] text-stone-500 block font-sans">
                    Bulk discount on 25+ boxes
                  </span>
                </div>

                <a
                  href={getWhatsAppInquiry(hamper)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white text-xs font-bold font-sans uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle size={14} />
                  <span>Inquire Box</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
