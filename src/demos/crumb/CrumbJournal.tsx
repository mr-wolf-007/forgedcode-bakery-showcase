import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export const CrumbJournal: React.FC = () => {
  const articles = [
    {
      date: "October 18, 2026",
      tag: "Flour & Soil",
      title: "Why Stoneground Heritage Emmer Grain Outperforms Roller Mills",
      excerpt: "When grain is crushed slowly between cool volcanic stones rather than sheared by steel rollers, the volatile oils and germ nutrients stay alive in the crumb.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80"
    },
    {
      date: "October 04, 2026",
      tag: "Seasonal Bakes",
      title: "Autumn Quince & Sicilian Frangipane Tart Notes",
      excerpt: "Poaching local quinces with Ceylon cinnamon and Madagascar vanilla pods for our Saturday afternoon pastry counter.",
      image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=800&auto=format&fit=crop&q=80"
    },
    {
      date: "September 22, 2026",
      tag: "Bread Care",
      title: "The Sourdough Preservation Protocol at Home",
      excerpt: "Never refrigerate naturally leavened bread. Why room-temperature cutting boards and freezer slicing are the only two methods our head baker recommends.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="bakery-journal" className="py-24 bg-[#FAF7F2] border-b border-[#36271F]/10 text-[#36271F]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#36271F]/15 pb-8 mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#526E48] font-sans font-semibold block mb-2">
              The Bakehouse Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#36271F]">
              Dispatches from the Kneading Table
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#685449] max-w-sm font-sans leading-relaxed">
            Notes on fermentation science, seasonal harvests from organic growers, and kitchen reflections.
          </p>
        </div>

        {/* Article-Style Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((art, idx) => (
            <article key={idx} className="space-y-4 group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden bg-[#EDE5D8] border border-[#36271F]/10">
                <ImageWithFallback
                  src={art.image}
                  alt={art.title}
                  fallbackTitle={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest font-sans text-stone-500 pt-1">
                <span>{art.date}</span>
                <span className="text-[#526E48] font-medium">{art.tag}</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#36271F] group-hover:text-[#526E48] transition-colors leading-snug">
                {art.title}
              </h3>

              <p className="text-xs text-[#685449] font-sans leading-relaxed">
                {art.excerpt}
              </p>

              <div className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-sans font-semibold text-[#36271F] group-hover:text-[#526E48] pt-1">
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
