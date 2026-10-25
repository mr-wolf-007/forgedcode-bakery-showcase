import React from 'react';

export const CrumbProcess: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Stoneground Milling",
      time: "Hour 0",
      desc: "Single-estate grains milled slowly between granite millstones, keeping grain germs intact."
    },
    {
      step: "02",
      title: "Autolyse & Starter Feed",
      time: "Hour 4",
      desc: "Flour and spring water rest to initiate natural enzymatic breakdown before wild starter addition."
    },
    {
      step: "03",
      title: "Cold Fermentation",
      time: "Hours 8–44",
      desc: "Dough rests at 4°C in handwoven rattan bannetons, developing rich lactic and acetic complexity."
    },
    {
      step: "04",
      title: "Hearth Stone Bake",
      time: "Hour 48",
      desc: "Blistering bake on volcanic stone deck under steam injections at 260°C to form crisp caramelized crust."
    }
  ];

  return (
    <section id="ferment-process" className="py-24 bg-[#EDE5D8]/50 border-b border-[#36271F]/10 text-[#36271F]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] uppercase tracking-widest text-[#526E48] font-sans font-semibold block">
            The Method
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#36271F]">
            The 48-Hour Fermentation Cycle
          </h2>
          <p className="text-xs sm:text-sm text-[#685449] font-sans leading-relaxed">
            Time is our primary ingredient. We use no commercial baker's yeast, conditioners, or volume enhancers.
          </p>
        </div>

        {/* Horizontal Process Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, i) => (
            <div key={i} className="border-t border-[#36271F]/20 pt-6 space-y-3">
              <div className="flex items-baseline justify-between text-xs font-sans">
                <span className="font-mono text-[#526E48] font-bold text-sm">{st.step}</span>
                <span className="text-stone-500 uppercase tracking-wider text-[10px]">{st.time}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#36271F]">{st.title}</h3>
              <p className="text-xs text-[#685449] font-sans leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
