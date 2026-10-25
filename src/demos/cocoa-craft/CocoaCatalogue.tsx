import React, { useState } from 'react';
import { Eye, Plus, ShoppingBag, Check, SlidersHorizontal, Sparkles } from 'lucide-react';

export interface ChocolateProduct {
  id: string;
  name: string;
  cacaoPct: number;
  origin: string;
  category: string;
  giftSuitability: string;
  price: number;
  weight: string;
  image: string;
  tastingNotes: string[];
  description: string;
}

export const CHOCOLATE_ITEMS: ChocolateProduct[] = [
  {
    id: 'cc-01',
    name: '72% Malabar Forest Single-Origin',
    cacaoPct: 72,
    origin: 'Idukki Hills, Kerala, India',
    category: 'Dark Chocolate 70%+',
    giftSuitability: 'Self-Indulgence',
    price: 380,
    weight: '80g Slab',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80',
    tastingNotes: ['Wild Honey', 'Dried Tamarind', 'Oak Tannins'],
    description: 'Slow-fermented in wooden sweatboxes under banana leaves. Opens with bright tropical stone fruit and finishes with deep forest honey.'
  },
  {
    id: 'cc-02',
    name: '85% Tumaco Deep Noir Bar',
    cacaoPct: 85,
    origin: 'Pacific Tumaco Coast, Colombia',
    category: 'Dark Chocolate 70%+',
    giftSuitability: 'Self-Indulgence',
    price: 420,
    weight: '80g Slab',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    tastingNotes: ['Dark Espresso', 'Smoked Tobacco', 'Black Currant'],
    description: 'High-cocoa purity crafted for experienced palates. Striking roasted coffee aromatics with velvety zero-bitterness melt.'
  },
  {
    id: 'cc-03',
    name: '55% Fleur de Sel Salted Caramel',
    cacaoPct: 55,
    origin: 'Madagascar Sambava Blend',
    category: 'Milk & Caramel',
    giftSuitability: 'Birthday Surprise',
    price: 360,
    weight: '80g Slab',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
    tastingNotes: ['Slow-Cooked Toffee', 'Vanilla Pod', 'Flaky Guérande Salt'],
    description: 'Caramelized grass-fed milk crumb blended with single-estate cacao and studded with hand-harvested crunchy French sea salt.'
  },
  {
    id: 'cc-04',
    name: 'Piedmont Hazelnut Gianduja Bonbon Box (9 pcs)',
    cacaoPct: 48,
    origin: 'Langhe Hills Hazelnut + Kerala Cacao',
    category: 'Praline & Bonbons',
    giftSuitability: 'Festive Gift Box',
    price: 680,
    weight: '9 Pieces Velvet Box',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80',
    tastingNotes: ['Toasted Nut Cream', 'Brown Butter', 'Melt-in-Mouth Ganache'],
    description: 'Nine molded geometric bonbons filled with slow-churned 52% roasted Italian hazelnut paste and dark chocolate shell.'
  },
  {
    id: 'cc-05',
    name: 'Single-Origin Grand Cru Flight (4 Bars)',
    cacaoPct: 76,
    origin: 'Global Terroirs Tasting Collection',
    category: 'Tasting Gift Coffrets',
    giftSuitability: 'Festive Gift Box',
    price: 1450,
    weight: '4 x 80g Slabs',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80',
    tastingNotes: ['Comparative Terroir Guide', 'Tasting Sensory Wheel'],
    description: 'A curated gift casket comprising Malabar 72%, Tumaco 85%, Sambava 68%, and Esmeraldas 75% with a sommelier sensory card.'
  },
  {
    id: 'cc-06',
    name: '65% Valencia Orange & Roasted Cacao Nibs',
    cacaoPct: 65,
    origin: 'Idukki Estate + Spanish Candied Peel',
    category: 'Dark Chocolate 70%+',
    giftSuitability: 'Self-Indulgence',
    price: 360,
    weight: '80g Slab',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    tastingNotes: ['Citrus Zest Sparkle', 'Crunchy Nibs', 'Bittersweet Cocoa'],
    description: 'Candied Valencia orange peel macerated in dark syrup and folded with crushed roasted nibs for textural snap.'
  }
];

interface CocoaCatalogueProps {
  onAddToCart: (product: ChocolateProduct) => void;
  onOpenQuickView: (product: ChocolateProduct) => void;
  searchFilter: string;
  activeCategoryFilter: string;
  onSelectCategoryFilter: (cat: string) => void;
}

export const CocoaCatalogue: React.FC<CocoaCatalogueProps> = ({
  onAddToCart,
  onOpenQuickView,
  searchFilter,
  activeCategoryFilter,
  onSelectCategoryFilter
}) => {
  const [selectedSort, setSelectedSort] = useState<'featured' | 'price-asc' | 'price-desc' | 'cacao-desc'>('featured');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = [
    'All Categories',
    'Dark Chocolate 70%+',
    'Milk & Caramel',
    'Praline & Bonbons',
    'Tasting Gift Coffrets'
  ];

  const handleAdd = (prod: ChocolateProduct) => {
    onAddToCart(prod);
    setJustAddedId(prod.id);
    setTimeout(() => setJustAddedId(null), 1200);
  };

  const filtered = CHOCOLATE_ITEMS.filter(item => {
    const matchesCat = activeCategoryFilter === 'All Categories' || item.category === activeCategoryFilter;
    const matchesSearch = !searchFilter ||
      item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.origin.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.description.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (selectedSort === 'price-asc') return a.price - b.price;
    if (selectedSort === 'price-desc') return b.price - a.price;
    if (selectedSort === 'cacao-desc') return b.cacaoPct - a.cacaoPct;
    return 0;
  });

  return (
    <section id="catalogue" className="py-16 bg-[#FAF5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter & Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#271810]/10 pb-6 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => onSelectCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  activeCategoryFilter === cat
                    ? 'bg-[#271810] text-[#FAF5EE] shadow-sm'
                    : 'bg-white text-stone-700 border border-[#271810]/20 hover:border-[#C68B59]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-stone-500">Sort by:</span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as any)}
              className="bg-white border border-[#271810]/20 rounded-lg px-3 py-1.5 text-xs text-[#271810] focus:outline-none focus:border-[#C68B59]"
            >
              <option value="featured">Featured Artisanal</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="cacao-desc">Cacao %: Highest First</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map(item => {
            const isJustAdded = justAddedId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-[#271810]/15 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-[#1C120C]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#271810]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-[#C68B59] uppercase tracking-wider">
                      {item.cacaoPct}% Cacao • {item.weight}
                    </div>

                    <button
                      onClick={() => onOpenQuickView(item)}
                      className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-stone-800 hover:bg-[#C68B59] hover:text-white transition-colors shadow-sm"
                      title="Quick View Details"
                    >
                      <Eye size={16} />
                    </button>
                  </div>

                  <div className="p-6 space-y-3 font-serif">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#8C6D58] block">
                      {item.origin}
                    </span>
                    <h3 className="text-xl font-light text-[#271810] group-hover:text-[#B85D38] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs font-sans text-stone-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tastingNotes.map((note, nIdx) => (
                        <span
                          key={nIdx}
                          className="px-2 py-0.5 rounded bg-[#FAF5EE] border border-[#271810]/10 text-[10px] font-mono text-[#5C4535]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-2">
                  <span className="text-2xl font-serif text-[#271810]">
                    ₹{item.price}
                  </span>

                  <button
                    onClick={() => handleAdd(item)}
                    className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
                      isJustAdded
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#271810] hover:bg-[#C68B59] text-white'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check size={14} />
                        <span>In Bag</span>
                      </>
                    ) : (
                      <>
                        <Plus size={14} />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
