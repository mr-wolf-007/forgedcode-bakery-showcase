import React from 'react';
import { MomentsHeader } from './MomentsHeader';
import { MomentsHero } from './MomentsHero';
import { MomentsGiftFinder } from './MomentsGiftFinder';
import { MomentsCorporate } from './MomentsCorporate';
import { MomentsFooter } from './MomentsFooter';

export const MomentsPage: React.FC = () => {
  const scrollToGiftFinder = () => {
    const el = document.getElementById('gift-finder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCorporate = () => {
    const el = document.getElementById('corporate');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-stone-900 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Campaign Header */}
      <MomentsHeader
        onCorporateClick={scrollToCorporate}
        onGiftFinderClick={scrollToGiftFinder}
      />

      <main>
        {/* Campaign Hero */}
        <MomentsHero
          onStartGiftFinder={scrollToGiftFinder}
          onCorporateQuote={scrollToCorporate}
        />

        {/* Interactive Gift Finder Engine */}
        <MomentsGiftFinder />

        {/* Corporate & Bulk Gifting Section */}
        <MomentsCorporate />
      </main>

      {/* Festive Campaign Footer */}
      <MomentsFooter />

    </div>
  );
};
