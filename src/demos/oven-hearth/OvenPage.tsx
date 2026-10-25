import React, { useState } from 'react';
import { OvenHeader } from './OvenHeader';
import { OvenHero } from './OvenHero';
import { OvenStory } from './OvenStory';
import { OvenMenu } from './OvenMenu';
import { OvenVisit } from './OvenVisit';
import { OvenFooter } from './OvenFooter';

export const OvenPage: React.FC = () => {
  const [selectedItemToReserve, setSelectedItemToReserve] = useState<string>('Heritage Country Boule (800g)');

  const scrollToVisit = (itemName?: string) => {
    if (itemName) setSelectedItemToReserve(itemName);
    const el = document.getElementById('visit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2E1F1A] font-sans selection:bg-[#C2593F] selection:text-[#FDFBF7]">
      
      {/* Header */}
      <OvenHeader onReserveClick={() => scrollToVisit()} />

      <main>
        {/* Storybook Hero */}
        <OvenHero
          onExploreMenu={scrollToMenu}
          onReserveClick={() => scrollToVisit()}
        />

        {/* Alternating Narrative Story Chapters */}
        <OvenStory />

        {/* Traditional Baking Menu */}
        <OvenMenu onReserveItem={(item) => scrollToVisit(item)} />

        {/* Bakery Counter Hours & Reservation Form */}
        <OvenVisit initialReserveItem={selectedItemToReserve} />
      </main>

      {/* Warm Nostalgic Footer */}
      <OvenFooter />

    </div>
  );
};
