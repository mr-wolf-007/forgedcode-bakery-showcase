import React, { useState } from 'react';
import { ShoppingBag, Plus, Check, MessageCircle, Star } from 'lucide-react';

export interface SweetItem {
  id: string;
  name: string;
  tamilName: string;
  category: string;
  badge?: string;
  price250: number;
  price500: number;
  price1000: number;
  image: string;
  description: string;
  isSpecial?: boolean;
}

const SWEETS_DATABASE: SweetItem[] = [
  {
    id: 'cs-01',
    name: 'Special Ghee Mysore Pak',
    tamilName: 'நெய் மைசூர் பாக்',
    category: 'Mysore Pak & Ghee Sweets',
    badge: 'Bestseller',
    price250: 180,
    price500: 340,
    price1000: 660,
    image: 'https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?auto=format&fit=crop&w=600&q=80',
    description: 'Silky, aerated Mysore Pak prepared with 100% pure cow ghee that instantly dissolves on the tongue.',
    isSpecial: true
  },
  {
    id: 'cs-02',
    name: 'Tirunelveli Wheat Halwa',
    tamilName: 'திருநெல்வேலி கோதுமை அல்வா',
    category: 'Laddus & Halwa',
    badge: 'Warm at 5 PM',
    price250: 170,
    price500: 320,
    price1000: 620,
    image: 'https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?auto=format&fit=crop&w=600&q=80',
    description: 'Thamirabarani river style wheat milk halwa loaded with roasted whole cashews and ghee.',
    isSpecial: true
  },
  {
    id: 'cs-03',
    name: 'Special Motichoor Laddu',
    tamilName: 'மோதிச்சூர் லட்டு',
    category: 'Laddus & Halwa',
    badge: 'Pure Desi Ghee',
    price250: 160,
    price500: 300,
    price1000: 580,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    description: 'Tiny besan pearls fried in pure ghee, perfumed with cardamom and saffron strands.',
  },
  {
    id: 'cs-04',
    name: 'Kai Murukku & Ribbon Pakoda',
    tamilName: 'கை முறுக்கு & ரிப்பன் பக்கோடா',
    category: 'Crispy Savouries & Murukku',
    badge: 'Super Crispy',
    price250: 110,
    price500: 200,
    price1000: 380,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    description: 'Hand-twisted traditional kai murukku with omam and butter. Crunchiest accompaniment for filter coffee.',
    isSpecial: true
  },
  {
    id: 'cs-05',
    name: 'Royal Kaju Katli (Cashew Fudge)',
    tamilName: 'காஜு கத்லி',
    category: 'Milk & Cashew Sweets',
    badge: '100% W320 Cashew',
    price250: 250,
    price500: 480,
    price1000: 940,
    image: 'https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?auto=format&fit=crop&w=600&q=80',
    description: 'Thin diamond-cut premium cashew fudge made without any added essence or flour.',
  },
  {
    id: 'cs-06',
    name: 'Madurai Milk Peda & Palkova',
    tamilName: 'ஸ்ரீவில்லிபுத்தூர் பால்கோவா',
    category: 'Milk & Cashew Sweets',
    badge: 'Fresh Cow Milk',
    price250: 180,
    price500: 340,
    price1000: 650,
    image: 'https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?auto=format&fit=crop&w=600&q=80',
    description: 'Srivilliputhur recipe slow-simmered rich caramelized cow milk sweet with subtle cane sweetness.',
  },
  {
    id: 'cs-07',
    name: 'Madras Mixture & Kara Boondi',
    tamilName: 'மெட்ராஸ் மிக்ஸ்சர்',
    category: 'Crispy Savouries & Murukku',
    badge: 'Curry Leaf Aroma',
    price250: 110,
    price500: 200,
    price1000: 380,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    description: 'Classic Chennai evening mixture with fried peanuts, roasted garlic, curry leaves, and sev.',
  },
  {
    id: 'cs-08',
    name: 'Grand Deepavali Gift Box (Assorted)',
    tamilName: 'விசேஷ தீபாவளி பரிசுப் பெட்டி',
    category: 'Festive Gift Boxes',
    badge: 'Festive Pack',
    price250: 300,
    price500: 550,
    price1000: 1050,
    image: 'https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?auto=format&fit=crop&w=600&q=80',
    description: 'Beautifully packed gift hamper containing Ghee Mysore Pak, Kaju Katli, Mixture, and Kai Murukku.',
    isSpecial: true
  }
];

const CATEGORIES = [
  'All Sweets & Savouries',
  'Mysore Pak & Ghee Sweets',
  'Laddus & Halwa',
  'Milk & Cashew Sweets',
  'Crispy Savouries & Murukku',
  'Festive Gift Boxes'
];

interface ChennaiProductsProps {
  onAddToBag: (item: SweetItem, weight: string, price: number) => void;
  searchFilter: string;
}

export const ChennaiProducts: React.FC<ChennaiProductsProps> = ({ onAddToBag, searchFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Sweets & Savouries');
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>({});
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const getWeight = (itemId: string) => selectedWeights[itemId] || '500g';

  const setWeight = (itemId: string, weight: string) => {
    setSelectedWeights(prev => ({ ...prev, [itemId]: weight }));
  };

  const getPrice = (item: SweetItem, weight: string) => {
    if (weight === '250g') return item.price250;
    if (weight === '1kg') return item.price1000;
    return item.price500;
  };

  const handleAdd = (item: SweetItem) => {
    const weight = getWeight(item.id);
    const price = getPrice(item, weight);
    onAddToBag(item, weight, price);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1200);
  };

  const filteredItems = SWEETS_DATABASE.filter(item => {
    const matchesCategory = selectedCategory === 'All Sweets & Savouries' || item.category === selectedCategory;
    const matchesSearch = !searchFilter || 
      item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.tamilName.includes(searchFilter) ||
      item.description.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-12 bg-[#FFFDF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Category Rail */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-red-700 text-amber-200 shadow-md scale-105'
                    : 'bg-white text-stone-700 border border-amber-300 hover:bg-amber-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8 border-b border-amber-300 pb-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-red-950 uppercase tracking-tight">
              {selectedCategory}
            </h3>
            <span className="text-xs text-amber-900 font-medium">
              Showing {filteredItems.length} fresh traditional items available for immediate pickup or delivery
            </span>
          </div>
          <span className="hidden sm:inline-block bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full">
            ● 100% Pure Vegetarian Kitchen
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const currentWeight = getWeight(item.id);
            const currentPrice = getPrice(item, currentWeight);
            const isJustAdded = addedItem === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border-2 border-amber-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image with Tag */}
                  <div className="relative h-44 overflow-hidden bg-amber-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-red-700 text-amber-100 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                        {item.badge}
                      </span>
                    )}
                    <span className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-400">
                      Veg 🟢
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-baseline justify-between gap-1">
                      <h4 className="font-extrabold text-stone-900 text-sm leading-snug">
                        {item.name}
                      </h4>
                    </div>
                    <span className="block text-[11px] text-amber-800 font-semibold font-serif">
                      {item.tamilName}
                    </span>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Weight Selector & Add-to-Cart Action */}
                <div className="p-4 pt-0 space-y-3">
                  {/* Weight Toggle Buttons */}
                  <div className="flex items-center gap-1.5 bg-amber-50 p-1 rounded-lg border border-amber-200">
                    {(['250g', '500g', '1kg'] as const).map((w) => (
                      <button
                        key={w}
                        onClick={() => setWeight(item.id, w)}
                        className={`flex-1 py-1 rounded text-[10px] font-bold transition-colors ${
                          currentWeight === w
                            ? 'bg-red-700 text-amber-100 shadow-xs'
                            : 'text-stone-700 hover:bg-amber-200/60'
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>

                  {/* Price & Add to Bag */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-lg font-black text-red-900">
                        ₹{currentPrice}
                      </span>
                      <span className="text-[10px] text-stone-500 block font-medium">
                        for {currentWeight}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-400 hover:bg-amber-500 text-red-950 active:scale-95'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check size={14} />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus size={14} />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
