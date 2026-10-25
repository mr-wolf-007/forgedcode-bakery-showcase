import React, { useState } from 'react';
import { Coffee, Utensils, Sparkles, MessageCircle } from 'lucide-react';

interface MenuItem {
  name: string;
  category: string;
  price: number;
  description: string;
  isHouseFavorite?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // Specialty Coffee
  {
    name: 'Oat Milk Flat White',
    category: 'Specialty Coffee',
    price: 240,
    description: 'Double ristretto shot pulled over textured Minor Figures oat milk with honey notes.',
    isHouseFavorite: true
  },
  {
    name: 'Sea Salt Caramel Iced Latte',
    category: 'Specialty Coffee',
    price: 280,
    description: 'Chikmagalur cold espresso poured over housemade jaggery caramel and Maldon salt.',
    isHouseFavorite: true
  },
  {
    name: 'Single-Origin Pour Over (V60)',
    category: 'Specialty Coffee',
    price: 260,
    description: 'Light roast Ethiopian heirloom beans with tasting notes of jasmine flower and peach.'
  },
  {
    name: 'Nitro Cold Brew on Tap',
    category: 'Specialty Coffee',
    price: 250,
    description: 'Steeped for 20 hours and infused with nitrogen for a velvety, stout-like head.'
  },

  // Morning Viennoiserie
  {
    name: 'Classic Normandy Butter Croissant',
    category: 'Morning Viennoiserie',
    price: 180,
    description: '48 layers of cultured French butter baked until deep golden mahogany with honeycomb interior.',
    isHouseFavorite: true
  },
  {
    name: 'Brittany Kouign-Amann',
    category: 'Morning Viennoiserie',
    price: 220,
    description: 'Caramelized laminated pastry with crackling sugar crust and salty butter center.'
  },
  {
    name: 'Pistachio Crème Cruffin',
    category: 'Morning Viennoiserie',
    price: 260,
    description: 'Muffin-croissant hybrid rolled in cardamom sugar and piped with Bronte pistachio custard.',
    isHouseFavorite: true
  },

  // Daylight Brunch
  {
    name: 'Whipped Ricotta & Fig Toast',
    category: 'Daylight Brunch',
    price: 380,
    description: 'Thick sourdough toast topped with fresh cow milk ricotta, mission figs, and thyme honey.',
    isHouseFavorite: true
  },
  {
    name: 'Truffle Scrambled Egg Croissant',
    category: 'Daylight Brunch',
    price: 420,
    description: 'Custardy soft scrambled eggs, black summer truffle oil, and chives inside a warm croissant.'
  },
  {
    name: 'Avocado Tartine with Aleppo Butter',
    category: 'Daylight Brunch',
    price: 360,
    description: 'Crushed Hass avocado, pickled shallots, pumpkin seed dukkah, and warm chili oil.'
  },

  // Afternoon Sweets
  {
    name: 'San Sebastián Burnt Basque Cheesecake',
    category: 'Afternoon Sweets',
    price: 320,
    description: 'Caramelized crust with an impossibly molten, silky cream center. Served with berry coulis.',
    isHouseFavorite: true
  },
  {
    name: 'Meyer Lemon & Thyme Tart',
    category: 'Afternoon Sweets',
    price: 280,
    description: 'Crisp almond sablé shell filled with tangy lemon curd and torched Italian meringue.'
  }
];

const CATEGORIES = [
  'All Daylight Menu',
  'Specialty Coffee',
  'Morning Viennoiserie',
  'Daylight Brunch',
  'Afternoon Sweets'
];

export const ButterMenu: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All Daylight Menu');

  const filtered = MENU_ITEMS.filter(
    item => selectedCat === 'All Daylight Menu' || item.category === selectedCat
  );

  return (
    <section id="menu" className="py-24 bg-[#FFFDF8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-8 mb-12">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#606C38] font-bold font-sans block mb-1">
              Served from 8:00 AM to 7:00 PM Daily
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-[#2B1810]">
              The Daylight Menu
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 font-sans">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  selectedCat === cat
                    ? 'bg-[#2B1810] text-[#FFFDF8] shadow-sm'
                    : 'bg-[#FBF8EF] text-stone-700 border border-stone-300 hover:border-amber-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FBF8EF] p-6 rounded-2xl border border-stone-200/80 flex items-start justify-between gap-4 font-sans hover:border-[#606C38] transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-lg text-[#2B1810] font-normal">
                    {item.name}
                  </h4>
                  {item.isHouseFavorite && (
                    <span className="bg-[#FEF08A] text-[#713F12] text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                      House Favorite
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed max-w-md">
                  {item.description}
                </p>
                <span className="text-[10px] text-[#606C38] font-mono block pt-1">
                  {item.category}
                </span>
              </div>

              <span className="text-lg font-serif text-[#2B1810] font-normal shrink-0">
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
