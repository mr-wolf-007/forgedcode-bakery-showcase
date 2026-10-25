import React, { useState } from 'react';
import { Compass, Award, Thermometer, ShieldCheck, Sparkles, Feather } from 'lucide-react';

interface TerroirItem {
  id: string;
  name: string;
  origin: string;
  category: string;
  metric: string;
  description: string;
  sensoryProfile: string[];
}

const TERROIR_DATA: TerroirItem[] = [
  {
    id: 'guanaja',
    name: 'Valrhona Guanaja 70%',
    origin: 'Equatorial Single-Plantation Blend',
    category: 'Grand Cru Cacao',
    metric: '31.5°C Precision Tempering',
    description: 'A benchmark in high gastronomy since 1986. Revered for its arresting bitterness balanced by warm, floral fruit notes and long roasted aromatics.',
    sensoryProfile: ['Bitter Roasted Cocoa', 'Warm Floral Notes', 'Subtle Molasses', 'Zero Acidity']
  },
  {
    id: 'isigny',
    name: 'AOP Beurre de Normandie',
    origin: 'Isigny Sainte-Mère, France',
    category: 'Cultured Dairy Fat',
    metric: '84% Butterfat · 16% Moisture',
    description: 'Milked exclusively from seaside pastures enriched with marine iodine and beta-carotene. Slow-churned for 48 hours to produce unmatched golden flakiness.',
    sensoryProfile: ['Toasted Hazelnut', 'Sea Salt Mineral', 'Sweet Meadow Grass', 'Velvety Cream']
  },
  {
    id: 'vanilla',
    name: 'Tahitensis & Bourbon Pods',
    origin: 'Raiatea, French Polynesia & Sambava, Madagascar',
    category: 'Orchid Pod Extraction',
    metric: '9 Months Sun-Curing',
    description: 'Hand-pollinated vanilla orchids harvested at peak oil concentration. Split and steeped cold for 36 hours into fresh Jersey cream to extract delicate vanillin crystals.',
    sensoryProfile: ['Floral Anise', 'Smoky Cherry', 'Warm Balsamic', 'Sweet Custard']
  },
  {
    id: 'hazelnut',
    name: 'Nocciola del Piemonte IGP',
    origin: 'Langhe Hills, Cortemilia, Italy',
    category: 'Single-Estate Praliné',
    metric: 'Slow-Drum Roasted 145°C',
    description: 'Universally hailed by French patissiers as the finest hazelnut on earth. Exceptionally low bitterness and an intensely buttery, perfume-rich oil content.',
    sensoryProfile: ['Toasted Biscuit', 'Rich Nut Butter', 'Delicate Woody Honey', 'Silky Emulsion']
  }
];

export const MaisonAtelier: React.FC = () => {
  const [activeTerroir, setActiveTerroir] = useState<TerroirItem>(TERROIR_DATA[0]);

  return (
    <section id="atelier" className="py-24 sm:py-32 bg-[#09090b] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#e2b472] font-mono block mb-3">
            Haute Philosophie &amp; Provenance
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light uppercase tracking-wide mb-6">
            L'Atelier des Terroirs
          </h2>
          <p className="text-[#a5a5ab] font-serif text-base sm:text-lg leading-relaxed">
            "A pastry cannot surpass the integrity of its raw elements. We refuse artificial colorings, compound chocolates, and stabilized pastes. Every millimeter reflects honest agrarian stewardship."
          </p>
        </div>

        {/* Interactive Terroir Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Terroir Navigation Pills */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#7c7c82] font-mono block mb-2">
              Select Terroir Origin
            </span>
            {TERROIR_DATA.map((item) => {
              const isSelected = activeTerroir.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTerroir(item)}
                  className={`w-full text-left p-5 border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#141418] border-[#e2b472]/60 text-white shadow-lg'
                      : 'bg-[#0e0e11] border-white/5 text-[#8e8e94] hover:text-white hover:border-white/20'
                  }`}
                >
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono block">
                      {item.category}
                    </span>
                    <span className="text-base sm:text-lg font-serif font-light text-white block mt-0.5">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#71717a] block mt-1">
                      {item.origin}
                    </span>
                  </div>

                  <span className={`text-xs font-mono transition-transform duration-300 ${isSelected ? 'translate-x-1 text-[#e2b472]' : 'text-white/20'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Terroir Showcase Card */}
          <div className="lg:col-span-7 bg-[#141418] border border-[#e2b472]/30 p-8 sm:p-12 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#e2b472] font-mono block mb-1">
                  Provenance Dossier
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
                  {activeTerroir.name}
                </h3>
                <span className="text-xs text-[#a5a5ab] font-serif block mt-1">
                  {activeTerroir.origin}
                </span>
              </div>

              <div className="text-right">
                <span className="inline-block p-3 bg-white/5 border border-white/10 text-[#e2b472]">
                  <Compass size={22} />
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base font-serif text-[#d1d1d6] leading-relaxed mb-8">
              {activeTerroir.description}
            </p>

            {/* Micro Technical Precision Metric */}
            <div className="bg-[#0b0b0e] border border-white/5 p-4 mb-8 flex items-center gap-4">
              <Thermometer size={18} className="text-[#e2b472]" />
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono block">
                  Atelier Technical Specification
                </span>
                <span className="text-xs font-mono text-[#e2b472]">
                  {activeTerroir.metric}
                </span>
              </div>
            </div>

            {/* Sensory Aromas */}
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono block mb-3">
                Sensory Olfactory Profile
              </span>
              <div className="flex flex-wrap gap-2">
                {activeTerroir.sensoryProfile.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs font-serif text-[#fdfcf9]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
