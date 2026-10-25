import React from 'react';
import { MaisonHeader } from './MaisonHeader';
import { MaisonHero } from './MaisonHero';
import { MaisonCollection } from './MaisonCollection';
import { MaisonAtelier } from './MaisonAtelier';
import { MaisonSalon } from './MaisonSalon';
import { MaisonConcierge } from './MaisonConcierge';
import { MaisonFooter } from './MaisonFooter';

export const MaisonPage: React.FC = () => {
  const scrollToConcierge = () => {
    const el = document.getElementById('concierge');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#e2b472] selection:text-[#0d0d0f] font-sans antialiased">
      {/* Editorial Luxury Header */}
      <MaisonHeader onReserveClick={scrollToConcierge} />

      <main>
        {/* Full-Bleed 100vh Cinematic Hero */}
        <MaisonHero
          onExploreClick={scrollToCollection}
          onReserveClick={scrollToConcierge}
        />

        {/* Oversized Signature Collection (Alternating Spreads & Dual Columns) */}
        <MaisonCollection />

        {/* L'Atelier des Terroirs & Single-Origin Cacao Dossier */}
        <MaisonAtelier />

        {/* Le Salon de Thé & 4-Capture Cinematic Ribbon */}
        <MaisonSalon onReserveClick={scrollToConcierge} />

        {/* Haute Concierge Requisition Form */}
        <MaisonConcierge />
      </main>

      {/* Colaba Boutique & Salon Footer */}
      <MaisonFooter />
    </div>
  );
};
