import React, { useState } from 'react';
import { AtelierHeader } from './AtelierHeader';
import { AtelierHero } from './AtelierHero';
import { AtelierPortfolio } from './AtelierPortfolio';
import { AtelierCustomizer } from './AtelierCustomizer';
import { AtelierProcess } from './AtelierProcess';
import { AtelierFooter } from './AtelierFooter';

export const AtelierPage: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<string>('Botanical Hand-Wired Sugar Peonies');

  const scrollToCustomizer = (styleName?: string) => {
    if (styleName) setSelectedStyle(styleName);
    const el = document.getElementById('customizer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-stone-800 font-sans selection:bg-pink-200 selection:text-stone-900">
      
      {/* Studio Header */}
      <AtelierHeader onInquireClick={() => scrollToCustomizer()} />

      <main>
        {/* Artistic Large Gallery Hero */}
        <AtelierHero
          onExplorePortfolio={scrollToPortfolio}
          onStartCustomizer={() => scrollToCustomizer()}
        />

        {/* Asymmetrical Portfolio Archive */}
        <AtelierPortfolio
          onSelectCakeToCommission={(title) => scrollToCustomizer(title)}
        />

        {/* 4-Step Sculptural Commission Protocol */}
        <AtelierProcess />

        {/* Interactive Customization Journey Form */}
        <AtelierCustomizer initialStyle={selectedStyle} />
      </main>

      {/* Studio Footer */}
      <AtelierFooter />

    </div>
  );
};
