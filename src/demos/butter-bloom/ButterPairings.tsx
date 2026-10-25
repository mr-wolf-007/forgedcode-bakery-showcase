import React from 'react';
import { Coffee, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface PairingItem {
  id: string;
  name: string;
  beverage: string;
  pastry: string;
  price: number;
  image: string;
  sommelierNotes: string;
}

const PAIRINGS: PairingItem[] = [
  {
    id: 'bb-p1',
    name: 'The Morning Classic',
    beverage: 'Oat Milk Flat White (Chikmagalur Red Honey)',
    pastry: 'Twice-Baked Almond Frangipane Croissant',
    price: 410,
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80',
    sommelierNotes: 'The nutty, caramelized sweetness of California almond flakes is mirrored by the velvety, buttery mouthfeel of textured whole milk.'
  },
  {
    id: 'bb-p2',
    name: 'The Bright & Crisp',
    beverage: 'Single-Origin Ethiopian Guji Cold Drip & Tonic',
    pastry: 'Cardamom Cinnamon Morning Bun',
    price: 440,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    sommelierNotes: 'Vibrant bergamot citrus and sparkling carbonation cut effortlessly through caramelized Ceylon cinnamon sugar.'
  },
  {
    id: 'bb-p3',
    name: 'The Dark & Decadent',
    beverage: 'Aeropress Pour-Over (Monsooned Malabar)',
    pastry: 'Double-Stuffed Valrhona Pain au Chocolat',
    price: 390,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    sommelierNotes: 'Earthy, spicy cacao aromatics harmonize with dark 70% molten chocolate batons encased in shatteringly crisp puff pastry.'
  }
];

export const ButterPairings: React.FC = () => {
  const getWhatsAppPairing = (p: PairingItem) => {
    const text = encodeURIComponent(
      `Hello Butter & Bloom, I would like to reserve "${p.name}" (${p.beverage} + ${p.pastry} - ₹${p.price}) for my café visit.`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="pairings" className="py-20 bg-[#FBF8EF] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-300 pb-8 mb-12">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#606C38] font-bold font-sans block mb-1">
              Curated by Our Head Barista &amp; Pastry Chef
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-[#2B1810]">
              Coffee &amp; Pastry Pairings
            </h3>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            We cup every batch of roasted beans alongside our morning pastry pulls to ensure balance between acidity, sweetness, and buttery lamination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PAIRINGS.map(p => (
            <div
              key={p.id}
              className="bg-[#FFFDF8] rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-stone-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#2B1810]/90 text-amber-100 text-[10px] font-sans font-bold uppercase px-3 py-1 rounded-full shadow">
                    Curated Pair
                  </div>
                </div>

                <div className="p-6 space-y-3 font-sans">
                  <h4 className="text-xl font-serif font-light text-[#2B1810]">
                    {p.name}
                  </h4>

                  <div className="space-y-1.5 text-xs text-stone-700 bg-[#FEF9C3]/50 p-3 rounded-xl border border-yellow-200">
                    <p className="flex items-center gap-2">
                      <Coffee size={13} className="text-amber-800 shrink-0" />
                      <strong>Cup:</strong> <span>{p.beverage}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Sparkles size={13} className="text-amber-800 shrink-0" />
                      <strong>Bake:</strong> <span>{p.pastry}</span>
                    </p>
                  </div>

                  <p className="text-xs text-stone-500 italic leading-relaxed pt-1">
                    "{p.sommelierNotes}"
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-2">
                <div>
                  <span className="text-2xl font-serif text-[#2B1810]">
                    ₹{p.price}
                  </span>
                  <span className="text-[10px] text-stone-400 block font-sans">
                    Pairing Set Price
                  </span>
                </div>

                <a
                  href={getWhatsAppPairing(p)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#2B1810] hover:bg-[#4A2810] text-[#FFFDF8] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle size={14} />
                  <span>Reserve Pair</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
