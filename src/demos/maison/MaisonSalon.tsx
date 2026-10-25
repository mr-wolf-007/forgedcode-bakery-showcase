import React from 'react';
import { Sparkles, Clock, Wine, Coffee, Award, Star } from 'lucide-react';

interface SalonExperience {
  title: string;
  subtitle: string;
  timing: string;
  price: string;
  description: string;
  courses: string[];
}

const SALON_EXPERIENCES: SalonExperience[] = [
  {
    title: "L'Heure du Thé Impériale",
    subtitle: 'Traditional Haute Afternoon Tea Service',
    timing: '14:00 — 17:00 Daily',
    price: '₹2,200 / Person',
    description: 'Served on three-tiered Christofle silver stands. Comprises savoury brioche feuilletée, fresh warm scones with Isigny double cream, and four miniature haute creations.',
    courses: [
      'Gougère au Gruyère de Savoie & Truffle Butter',
      'Smoked Salmon & Caviar Tartlet',
      'Warm Brioche Scones with Wild Raspberry Jam',
      'Selection of 4 Seasonal Petite Pâtisseries',
      'Choice of Rare Mariage Frères Teas'
    ]
  },
  {
    title: 'Le Grand Dégustation (5 Services)',
    subtitle: "The Executive Pastry Chef's Seasonal Journey",
    timing: '18:00 — 21:00 (Reservations Only)',
    price: '₹3,600 / Person',
    description: 'A five-course culinary progression curated to balance crisp acidity, single-origin cacao bitterness, aromatic flowers, and hot-cold textural contrast.',
    courses: [
      'Amuse: Chilled Citrus Granité & Champagne Foam',
      'Service I: Mille-Feuille Inversé with Fleur de Sel',
      'Service II: Ruby Framboise Sphere with Tahitian Pods',
      'Service III: L\'Opéra d\'Or with 24k Gold',
      'Mignardises: Black Truffle Cacao Ganache & Macarons'
    ]
  }
];

interface MaisonSalonProps {
  onReserveClick: () => void;
}

export const MaisonSalon: React.FC<MaisonSalonProps> = ({ onReserveClick }) => {
  return (
    <section id="salon" className="py-24 sm:py-32 bg-[#0c0c0e] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#e2b472] font-mono block mb-2">
              Lobby Arcade · The Taj Mahal Palace
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light uppercase tracking-wide">
              Le Salon de Thé
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm text-[#9c9ca4] font-serif leading-relaxed">
            An intimate 12-seat salon designed in dark basalt, burnished brass, and linen. Reserved for discerning patrons seeking peaceful culinary ceremony.
          </p>
        </div>

        {/* Salon Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {SALON_EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#121215] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-[#e2b472]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8e8e94] font-mono block">
                      {exp.timing}
                    </span>
                    <h3 className="text-2xl font-serif text-white font-light mt-1">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="text-xl font-serif text-[#e2b472]">
                    {exp.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-serif text-[#c5c5cb] leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Courses Checklist */}
                <div className="space-y-2 mb-8 bg-white/5 p-5 border border-white/5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono block mb-2">
                    Service Progression
                  </span>
                  {exp.courses.map((course, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2.5 text-xs text-[#a5a5ab]">
                      <span className="text-[#e2b472] font-mono text-[10px]">0{cIdx + 1}</span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onReserveClick}
                className="w-full py-3 bg-white/5 hover:bg-[#e2b472] hover:text-[#0d0d0f] text-white border border-white/10 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
              >
                Reserve Seat for {exp.title.split('(')[0]}
              </button>
            </div>
          ))}
        </div>

        {/* Panoramic Atelier Film-strip Ribbon */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#e2b472] font-mono">
              Le Cinéma Culinaire · Moments at the Pass
            </span>
            <span className="text-xs text-[#7c7c82] font-mono">
              4 Atelier Captures
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden h-56 sm:h-72 border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
                alt="Tempered Valrhona Dark Cacao Glaze"
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono">
                  I. 31.5°C Glaze Application
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden h-56 sm:h-72 border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
                alt="24-Karat Florentine Gold Leaf Finishing"
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono">
                  II. 24k Gold Leaf Delicate Setting
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden h-56 sm:h-72 border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                alt="72 Inverse Lamination Flakes"
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono">
                  III. 72-Layer Crisp Fracture
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden h-56 sm:h-72 border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80"
                alt="Prestige Velvet Macaron Coffret"
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#e2b472] font-mono">
                  IV. Velvet Casket Presentation
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
