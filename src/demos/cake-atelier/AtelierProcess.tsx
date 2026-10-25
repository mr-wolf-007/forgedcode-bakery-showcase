import React from 'react';
import { Palette, Utensils, Feather, Truck, Sparkles } from 'lucide-react';

export const AtelierProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tasting & Palette Alignment',
      desc: 'We dispatch a Tasting Flight of four miniature cake cylinders to your residence, paired with a moodboard exploration session.',
      icon: <Utensils size={18} className="text-pink-600" />
    },
    {
      num: '02',
      title: 'Architectural Sketch',
      desc: 'Our lead cake artist drafts a scale watercolor illustration specifying tier ratios, floral placements, and color pantones.',
      icon: <Feather size={18} className="text-pink-600" />
    },
    {
      num: '03',
      title: 'Botanical Hand-Sculpting',
      desc: 'Individual sugar petals and wafer paper leaves are hand-cut, veined, and dust-painted over 14 days before assembly.',
      icon: <Palette size={18} className="text-pink-600" />
    },
    {
      num: '04',
      title: 'Chilled White-Glove Delivery',
      desc: 'Transported in custom refrigerated vans and assembled on-site at your banquet venue with direct florist coordination.',
      icon: <Truck size={18} className="text-pink-600" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#FFFDFB] border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-pink-700 font-serif block mb-2">
            Methodology &amp; Standards
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 mb-3">
            The Commission Protocol
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 font-serif leading-relaxed">
            From initial sketch to the moment the cake is cut, we oversee every aesthetic detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-[#FAF8F5] p-8 rounded-3xl border border-pink-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-serif font-bold text-pink-600 tracking-wider">
                    {st.num}
                  </span>
                  <div className="p-2.5 rounded-full bg-pink-100/60">
                    {st.icon}
                  </div>
                </div>

                <h4 className="text-lg font-serif font-light text-stone-900 mb-2">
                  {st.title}
                </h4>
                <p className="text-xs font-serif text-stone-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
