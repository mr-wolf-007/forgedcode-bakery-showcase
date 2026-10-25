import React from 'react';
import { ButterHeader } from './ButterHeader';
import { ButterHero } from './ButterHero';
import { ButterPairings } from './ButterPairings';
import { ButterMenu } from './ButterMenu';
import { ButterVisit } from './ButterVisit';
import { ButterFooter } from './ButterFooter';

export const ButterPage: React.FC = () => {
  const scrollToVisit = () => {
    const el = document.getElementById('visit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-stone-900 font-sans selection:bg-[#FEF08A] selection:text-[#2B1810]">
      
      {/* Header */}
      <ButterHeader onTableBookClick={scrollToVisit} />

      <main>
        {/* Lifestyle Editorial Hero */}
        <ButterHero
          onExploreMenu={scrollToMenu}
          onVisitClick={scrollToVisit}
        />

        {/* Coffee & Pastry Pairings Feature */}
        <ButterPairings />

        {/* Daylight Café Menu */}
        <ButterMenu />

        {/* Veranda Atmosphere & Table Booking */}
        <ButterVisit />
      </main>

      {/* Café Lifestyle Footer */}
      <ButterFooter />

    </div>
  );
};
