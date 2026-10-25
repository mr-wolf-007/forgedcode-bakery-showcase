import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Flame, Check } from 'lucide-react';

interface BakedGood {
  id: string;
  name: string;
  category: string;
  price: number;
  timing: string;
  image: string;
  description: string;
  isBestseller?: boolean;
}

const BAKED_GOODS: BakedGood[] = [
  {
    id: 'oh-01',
    name: 'Heritage Country Boule (800g)',
    category: 'Wood-Fired Breads',
    price: 240,
    timing: 'Pulled 6:30 AM Daily',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'Blistered dark crust baked directly on refractory firebricks with wild sourdough leavening.',
    isBestseller: true
  },
  {
    id: 'oh-02',
    name: 'Old-Style Milk Bread Loaf',
    category: 'Wood-Fired Breads',
    price: 90,
    timing: 'Pulled 7:00 AM Daily',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80',
    description: 'Pillowy soft farmhouse loaf enriched with whole cow milk and cultured butter. Perfect for morning toast.',
    isBestseller: true
  },
  {
    id: 'oh-03',
    name: 'Crusty Brun Pav (Pack of 4)',
    category: 'Wood-Fired Breads',
    price: 60,
    timing: 'Pulled 7:30 AM Daily',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'Crackly hard outer crust with tender steamed crumb inside. The quintessential Irani chai accompaniment.',
  },
  {
    id: 'oh-04',
    name: 'Spiced Potato Masala Puff',
    category: 'Hot Afternoon Puffs',
    price: 45,
    timing: 'Pulled 3:30 PM Hot',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    description: 'Seventy layers of flaky puff pastry stuffed with mustard-tempered cumin potatoes and green peas.',
    isBestseller: true
  },
  {
    id: 'oh-05',
    name: 'Paneer Butter Masala Turnover',
    category: 'Hot Afternoon Puffs',
    price: 65,
    timing: 'Pulled 3:30 PM Hot',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    description: 'Rich malai paneer cubes simmered in butter tomato gravy wrapped inside a golden flaky crust.',
  },
  {
    id: 'oh-06',
    name: 'Pure Butter Nankhatai (250g)',
    category: 'Traditional Chai Biscuits',
    price: 160,
    timing: 'Baked Twice Weekly',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    description: 'Melt-in-mouth shortbread biscuits perfumed with green cardamom seeds and topped with sliced pistachios.',
    isBestseller: true
  },
  {
    id: 'oh-07',
    name: 'Double-Baked Cardamom Rusk (300g)',
    category: 'Traditional Chai Biscuits',
    price: 120,
    timing: 'Slow Embers Toasting',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    description: 'Slow-toasted twice over residual tamarind wood embers for an incomparable crunchy dip in morning chai.',
  },
  {
    id: 'oh-08',
    name: 'Roasted Jeera Salt Butter Biscuits (250g)',
    category: 'Traditional Chai Biscuits',
    price: 140,
    timing: 'Fresh Daily Batch',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    description: 'Savory-sweet biscuits enriched with hand-roasted cumin seeds and flaky sea salt.',
  }
];

const MENU_CATEGORIES = [
  'All Hearth Bakes',
  'Wood-Fired Breads',
  'Hot Afternoon Puffs',
  'Traditional Chai Biscuits'
];

interface OvenMenuProps {
  onReserveItem: (itemName: string, price: number) => void;
}

export const OvenMenu: React.FC<OvenMenuProps> = ({ onReserveItem }) => {
  const [selectedCat, setSelectedCat] = useState('All Hearth Bakes');

  const filtered = BAKED_GOODS.filter(
    b => selectedCat === 'All Hearth Bakes' || b.category === selectedCat
  );

  return (
    <section id="menu" className="py-24 bg-[#FDFBF7] border-b border-[#C2593F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-stone-200 pb-8 mb-12">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#606C38] font-mono block mb-1">
              Bake Schedule &amp; Counter Board
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-[#2E1F1A]">
              Traditional Hearth Bakes
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 font-serif">
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-lg text-xs tracking-wider transition-all ${
                  selectedCat === cat
                    ? 'bg-[#2E1F1A] text-[#FDFBF7] shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-300 hover:border-[#C2593F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Goods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              className="bg-[#FAF5ED] border border-[#C2593F]/30 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#2E1F1A]/90 text-amber-100 text-[10px] font-mono px-2 py-0.5 rounded">
                    {item.timing}
                  </span>
                  {item.isBestseller && (
                    <span className="absolute bottom-2 right-2 bg-[#C2593F] text-white text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded">
                      Neighborhood Favorite
                    </span>
                  )}
                </div>

                <div className="p-4 space-y-2 font-serif">
                  <h4 className="font-normal text-lg text-[#2E1F1A] leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-stone-200/80 flex items-center justify-between mt-2">
                <span className="text-xl font-serif text-[#C2593F]">
                  ₹{item.price}
                </span>

                <button
                  onClick={() => onReserveItem(item.name, item.price)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#2E1F1A] hover:bg-[#C2593F] text-[#FDFBF7] text-xs font-serif transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag size={13} />
                  <span>Reserve</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
