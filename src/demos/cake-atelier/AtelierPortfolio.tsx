import React, { useState } from 'react';
import { Eye, Heart, Sparkles, MessageCircle } from 'lucide-react';

interface CakePiece {
  id: string;
  title: string;
  category: string;
  tiers: string;
  servings: string;
  flavor: string;
  image: string;
  aspect: string;
  description: string;
}

const PORTFOLIO_PIECES: CakePiece[] = [
  {
    id: 'cake-01',
    title: "L'Éthéré Peony Tower",
    category: 'Botanical Weddings',
    tiers: '3 Tiers',
    servings: '80 — 100 Guests',
    flavor: 'Tahitian Vanilla Sponge, Raspberry Rose Gelée & White Chocolate Velvet',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=85',
    aspect: 'lg:col-span-7 row-span-2',
    description: 'A romantic wedding centerpiece adorned with hand-wired sugar peonies, textured stone buttercream, and floating edible gold flecks.'
  },
  {
    id: 'cake-02',
    title: 'Modern Bas-Relief & Rice Paper',
    category: 'Sculptural Birthdays',
    tiers: '2 Tiers',
    servings: '35 — 45 Guests',
    flavor: 'Belgian Dark Chocolate Ganache & Roasted Hazelnut Praliné',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85',
    aspect: 'lg:col-span-5',
    description: 'Textured ivory ganache finish featuring translucent dehydrated rice paper sails and torn wafer contours.'
  },
  {
    id: 'cake-03',
    title: 'Vintage Lambeth Pearl Gâteau',
    category: 'Minimalist Anniversaries',
    tiers: 'Single Tall Tier',
    servings: '20 — 25 Guests',
    flavor: 'Earl Grey Lavender Sponge & Citrus Blossom Curd',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=85',
    aspect: 'lg:col-span-5',
    description: 'Classical Victorian scrollwork over-piping with delicate sugar pearl garlands and ruffled buttercream festoons.'
  },
  {
    id: 'cake-04',
    title: 'Pressed Flower Meadow Cake',
    category: 'Botanical Weddings',
    tiers: '2 Tiers',
    servings: '40 — 50 Guests',
    flavor: 'Sicilian Lemon Olive Oil Cake with Wild Blueberry Compote',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=85',
    aspect: 'lg:col-span-6',
    description: 'Locally foraged organic pansies, violas, and cornflowers pressed directly into smooth ivory Swiss meringue.'
  },
  {
    id: 'cake-05',
    title: 'Obsidian Velvet & White Orchid',
    category: 'Sculptural Birthdays',
    tiers: '2 Tiers',
    servings: '30 — 40 Guests',
    flavor: 'Valrhona 70% Dark Fudge & Salted Espresso Caramel',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=85',
    aspect: 'lg:col-span-6',
    description: 'Velvet spray cocoa butter finish in charcoal black with an architectural cascade of porcelain-like sugar phalaenopsis.'
  }
];

const CATEGORIES = [
  'All Archive',
  'Botanical Weddings',
  'Sculptural Birthdays',
  'Minimalist Anniversaries'
];

interface AtelierPortfolioProps {
  onSelectCakeToCommission: (title: string) => void;
}

export const AtelierPortfolio: React.FC<AtelierPortfolioProps> = ({ onSelectCakeToCommission }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Archive');

  const filtered = PORTFOLIO_PIECES.filter(
    p => selectedCategory === 'All Archive' || p.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5] border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-8 mb-12">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-pink-700 font-serif block mb-2">
              Curated Commissions 2025 — 2026
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif font-light text-stone-900">
              The Cake Archive
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-serif tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-pink-100 shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-pink-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Gallery Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filtered.map(piece => (
            <div
              key={piece.id}
              className={`${piece.aspect} bg-white rounded-3xl overflow-hidden border border-pink-100/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group`}
            >
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-stone-100">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-serif text-stone-700 shadow-xs">
                  {piece.tiers} • {piece.servings}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-pink-600 font-serif block mb-1">
                    {piece.category}
                  </span>
                  <h4 className="text-2xl font-serif font-light text-stone-900 mb-2">
                    {piece.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-serif text-stone-600 leading-relaxed mb-4">
                    {piece.description}
                  </p>
                  <div className="bg-pink-50/50 p-3 rounded-xl border border-pink-100/60 text-xs font-serif text-stone-700 mb-6">
                    <strong className="text-stone-900 font-medium">Flavor Profile:</strong> {piece.flavor}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-serif italic">
                    Commissioned for Private Soirée
                  </span>
                  <button
                    onClick={() => onSelectCakeToCommission(piece.title)}
                    className="px-4 py-2 rounded-full bg-stone-900 hover:bg-pink-700 text-pink-50 text-[11px] tracking-wider uppercase font-serif transition-colors"
                  >
                    Commission Similar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
