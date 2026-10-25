import React, { useState } from 'react';
import { Sparkles, Eye, MessageCircle, X, Check, ShieldAlert } from 'lucide-react';

interface PastryDetail {
  id: string;
  number: string;
  title: string;
  frenchTitle: string;
  tagline: string;
  priceIndiv: string;
  priceEntremet?: string;
  image: string;
  description: string;
  architecture: string[];
  tastingNotes: string[];
  pairing: string;
  terroir: string;
  isVegetarian: boolean;
}

const SIGNATURE_COLLECTION: PastryDetail[] = [
  {
    id: 'opera-dor',
    number: 'N° 01',
    title: "L'Opéra d'Or Impérial",
    frenchTitle: 'Guanaja 70% & Espresso Joconde',
    tagline: 'An architectural reverence to classical French opera, crowned in 24k gold.',
    priceIndiv: '₹680',
    priceEntremet: '₹3,800',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85',
    description: 'Eight razor-sharp geometric strata uniting Grand Cru Guanaja chocolate ganache with dark roasted arabica and delicate almond biscuit, sealed under hand-applied 24-karat Florentine gold leaf.',
    architecture: [
      '24-Karat Edible Florentine Gold Mirror Glaze',
      'Valrhona Guanaja 70% Dark Chocolate Emulsion',
      'Arabica Espresso Infused Joconde Biscuit',
      'Crème au Beurre with Bourbon Vanilla Pods',
      'Crisp Praliné Feuilletine Foundation'
    ],
    tastingNotes: ['Bitter roasted cacao nibs', 'Velvety espresso depth', 'Warm toasted almond', 'Silky butter finish'],
    pairing: 'Mariage Frères Marco Polo Tea or Vintage Champagne Brut',
    terroir: 'Equatorial Single-Plantation Valrhona, Normandy AOP Cream',
    isVegetarian: true,
  },
  {
    id: 'ruby-framboise',
    number: 'N° 02',
    title: 'Ruby Framboise Entremet',
    frenchTitle: 'Mara des Bois & Vanille Tahitensis',
    tagline: 'A sculptural crimson gemstone celebrating the tart brilliance of wild berries.',
    priceIndiv: '₹720',
    priceEntremet: '₹4,200',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=85',
    description: 'A glossy crimson mirror sphere enclosing a core of wild Mara des Bois forest berry compote, enveloped in light Tahitian vanilla bean bavarois, elevated on a crispy salted Breton shortbread pedestal.',
    architecture: [
      'Mirror-Gloss Framboise Glaze with Edible Petals',
      'Aerated Tahitian Vanilla Bean Bavarois',
      'Slow-Simmered Mara des Bois Berry Reduction',
      'Breton Sablé Crust with Guérande Fleur de Sel'
    ],
    tastingNotes: ['Bright tart raspberry sparkle', 'Fragrant floral vanilla', 'Buttery crunch with subtle sea salt'],
    pairing: 'Grand Cru First-Flush Darjeeling or Bellini Rosé',
    terroir: 'French Alps Wild Berries, Raiatea Island Vanilla',
    isVegetarian: true,
  },
  {
    id: 'mille-feuille',
    number: 'N° 03',
    title: 'Le Mille-Feuille Inversé',
    frenchTitle: 'Pâte Feuilletée Inversée & Caramel Fleur de Sel',
    tagline: '72 caramelized architectural flakes encapsulating Bourbon whipped diplomat.',
    priceIndiv: '₹620',
    priceEntremet: '₹3,400',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
    description: 'Unlike standard puff pastry, our inverted lamination encases dough within chilled butter blocks, yielding impossibly delicate crispness that shatters upon first touch.',
    architecture: [
      'Caramelized Inverted 72-Layer Puff Pastry',
      'Madagascar Bourbon Vanilla Bean Diplomat Cream',
      'Artisanal Salted Caramel Ribbon',
      'Roasted Hazelnut Praliné Crunch'
    ],
    tastingNotes: ['Smoky caramel crunch', 'Rich dairy creaminess', 'Nutty praliné undertones'],
    pairing: 'Earl Grey French Blue or Single Malt Espresso',
    terroir: 'Isigny Sainte-Mère Cultured Butter, Madagascar Pods',
    isVegetarian: true,
  },
  {
    id: 'coffret-macarons',
    number: 'N° 04',
    title: 'Le Coffret Prestige Macarons',
    frenchTitle: 'Édition 16 Pièces Haute Joaillerie',
    tagline: 'A velvet keepsake casket of sixteen jewel-toned Parisian macarons.',
    priceIndiv: '₹2,400',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1200&q=85',
    description: 'Sixteen handcrafted macarons presented in our signature charcoal velvet box: Black Périgord Truffle Ganache, Ispahan Rose & Lychee, Iranian Bronte Pistachio, and 85% Abinao Dark Cacao.',
    architecture: [
      'Ultra-fine Ground Spanish Almond Shells',
      'Black Périgord Truffle Infused Chocolate Ganache',
      'Damask Rose & Litchi Pâte de Fruits',
      'Piedmont PGI Roasted Pistachio Cream'
    ],
    tastingNotes: ['Delicate crisp shell', 'Melt-in-mouth chewy almond heart', 'Complex aromatic finish'],
    pairing: 'Champagne Rosé or Royal Jasmine Tea',
    terroir: 'Valencia Marcona Almonds, Grasse Rose Water',
    isVegetarian: true,
  }
];

export const MaisonCollection: React.FC = () => {
  const [selectedPastry, setSelectedPastry] = useState<PastryDetail | null>(null);

  const getWhatsAppLink = (pastry: PastryDetail) => {
    const message = encodeURIComponent(
      `Bonjour Maison Éclair Concierge, I would like to inquire about reserving ${pastry.title} (${pastry.priceIndiv}) from the Haute Collection.`
    );
    return `https://wa.me/919876543210?text=${message}`;
  };

  return (
    <section id="collection" className="py-24 sm:py-32 bg-[#0d0d0f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-10 mb-20">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#e2b472] font-mono block mb-3">
              Catalogue Raisonné · Automne
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light uppercase tracking-wide">
              La Haute Collection
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm text-[#9c9ca4] font-serif leading-relaxed">
            Every creation is assembled à la minute inside our Colaba atelier. We limit daily production to preserve absolute textural integrity.
          </p>
        </div>

        {/* PIECE 01: L'Opéra d'Or (Oversized Hero Spread) */}
        <div className="mb-28 bg-[#121215] border border-white/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual */}
            <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[580px] overflow-hidden group">
              <img
                src={SIGNATURE_COLLECTION[0].image}
                alt={SIGNATURE_COLLECTION[0].title}
                className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-[#0d0d0f]/80 backdrop-blur-md px-3 py-1.5 border border-[#e2b472]/30 text-[10px] tracking-[0.25em] uppercase text-[#e2b472] font-mono">
                {SIGNATURE_COLLECTION[0].number} · Pièce Maîtresse
              </div>
            </div>

            {/* Editorial Data Panel */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8e8e94] font-mono block mb-2">
                  {SIGNATURE_COLLECTION[0].frenchTitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#fdfcf9] font-light mb-4">
                  {SIGNATURE_COLLECTION[0].title}
                </h3>
                <p className="text-sm font-serif text-[#c5c5cb] leading-relaxed mb-8">
                  {SIGNATURE_COLLECTION[0].description}
                </p>

                {/* Micro Architecture List */}
                <div className="space-y-2.5 mb-8 border-y border-white/5 py-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono block mb-3">
                    Architectural Anatomy
                  </span>
                  {SIGNATURE_COLLECTION[0].architecture.slice(0, 3).map((layer, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-[#a5a5ab]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e2b472]/60"></span>
                      <span>{layer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-2xl sm:text-3xl font-serif text-[#e2b472]">
                    {SIGNATURE_COLLECTION[0].priceIndiv}
                  </span>
                  <span className="text-xs text-[#7c7c82] block">
                    Individual Tranche · Entremet {SIGNATURE_COLLECTION[0].priceEntremet}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedPastry(SIGNATURE_COLLECTION[0])}
                    className="p-3 bg-white/5 hover:bg-white/10 text-[#d1d1d6] border border-white/10 text-xs transition-colors"
                    title="Inspect Architecture"
                  >
                    <Eye size={16} />
                  </button>
                  <a
                    href={getWhatsAppLink(SIGNATURE_COLLECTION[0])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#e2b472] hover:bg-[#f3d29a] text-[#0d0d0f] text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    <span>Inquire Piece</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PIECE 02: Ruby Framboise Entremet (Inverted Split Spread) */}
        <div className="mb-28 bg-[#121215] border border-white/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Editorial Data Panel */}
            <div className="lg:col-span-5 order-2 lg:order-1 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8e8e94] font-mono block mb-2">
                  {SIGNATURE_COLLECTION[1].frenchTitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#fdfcf9] font-light mb-4">
                  {SIGNATURE_COLLECTION[1].title}
                </h3>
                <p className="text-sm font-serif text-[#c5c5cb] leading-relaxed mb-8">
                  {SIGNATURE_COLLECTION[1].description}
                </p>

                {/* Micro Architecture List */}
                <div className="space-y-2.5 mb-8 border-y border-white/5 py-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono block mb-3">
                    Architectural Anatomy
                  </span>
                  {SIGNATURE_COLLECTION[1].architecture.slice(0, 3).map((layer, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-[#a5a5ab]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e2b472]/60"></span>
                      <span>{layer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-2xl sm:text-3xl font-serif text-[#e2b472]">
                    {SIGNATURE_COLLECTION[1].priceIndiv}
                  </span>
                  <span className="text-xs text-[#7c7c82] block">
                    Individual Sphere · Entremet {SIGNATURE_COLLECTION[1].priceEntremet}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedPastry(SIGNATURE_COLLECTION[1])}
                    className="p-3 bg-white/5 hover:bg-white/10 text-[#d1d1d6] border border-white/10 text-xs transition-colors"
                    title="Inspect Architecture"
                  >
                    <Eye size={16} />
                  </button>
                  <a
                    href={getWhatsAppLink(SIGNATURE_COLLECTION[1])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#e2b472] hover:bg-[#f3d29a] text-[#0d0d0f] text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    <span>Inquire Piece</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative min-h-[420px] lg:min-h-[580px] overflow-hidden group">
              <img
                src={SIGNATURE_COLLECTION[1].image}
                alt={SIGNATURE_COLLECTION[1].title}
                className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 right-6 bg-[#0d0d0f]/80 backdrop-blur-md px-3 py-1.5 border border-[#e2b472]/30 text-[10px] tracking-[0.25em] uppercase text-[#e2b472] font-mono">
                {SIGNATURE_COLLECTION[1].number} · Pure Haute Forme
              </div>
            </div>
          </div>
        </div>

        {/* PIECES 03 & 04: Dual Haute Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {SIGNATURE_COLLECTION.slice(2).map((pastry) => (
            <div key={pastry.id} className="bg-[#121215] border border-white/5 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-72 sm:h-80 overflow-hidden group">
                  <img
                    src={pastry.image}
                    alt={pastry.title}
                    className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#0d0d0f]/80 backdrop-blur-md px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono">
                    {pastry.number}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono block mb-2">
                    {pastry.frenchTitle}
                  </span>
                  <h4 className="text-2xl font-serif text-white font-light mb-3">
                    {pastry.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-serif text-[#a5a5ab] leading-relaxed mb-6">
                    {pastry.description}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-white/5">
                <div>
                  <span className="text-2xl font-serif text-[#e2b472] block">{pastry.priceIndiv}</span>
                  <span className="text-[10px] text-[#7c7c82] uppercase tracking-wider font-mono">
                    Tasting Salon Portion
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPastry(pastry)}
                    className="p-2.5 bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 transition-colors"
                  >
                    <Eye size={15} />
                  </button>
                  <a
                    href={getWhatsAppLink(pastry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#e2b472] hover:bg-[#f3d29a] text-[#0d0d0f] text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle size={13} />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Haute Architecture Inspection Modal */}
      {selectedPastry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#121215] border border-[#e2b472]/30 max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedPastry(null)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <span className="text-[10px] tracking-[0.25em] uppercase text-[#e2b472] font-mono block mb-2">
              {selectedPastry.number} · Haute Fiche Technique
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-light mb-1">
              {selectedPastry.title}
            </h3>
            <p className="text-xs text-[#8e8e94] font-serif italic mb-6">
              {selectedPastry.tagline}
            </p>

            <div className="space-y-6 text-sm font-serif">
              {/* Architectural Breakdown */}
              <div className="border-t border-white/10 pt-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono block mb-2">
                  L'Anatomie Architecturale
                </span>
                <ul className="space-y-2">
                  {selectedPastry.architecture.map((layer, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#c5c5cb]">
                      <span className="text-[#e2b472] font-mono text-[10px] mt-0.5">{`0${idx + 1}`}</span>
                      <span>{layer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tasting Notes */}
              <div className="border-t border-white/10 pt-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono block mb-2">
                  Notes de Dégustation
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedPastry.tastingNotes.map((note, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 text-[11px] text-[#e2b472]">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Terroir & Pairing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-4 text-xs">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono block mb-1">
                    Terroir d'Origine
                  </span>
                  <p className="text-[#d1d1d6]">{selectedPastry.terroir}</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono block mb-1">
                    Accord de Dégustation
                  </span>
                  <p className="text-[#d1d1d6]">{selectedPastry.pairing}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xl font-serif text-[#e2b472]">
                {selectedPastry.priceIndiv}
              </span>
              <a
                href={getWhatsAppLink(selectedPastry)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#e2b472] hover:bg-[#f3d29a] text-[#0d0d0f] text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center gap-2"
              >
                <MessageCircle size={14} />
                <span>Reserve with Concierge</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
