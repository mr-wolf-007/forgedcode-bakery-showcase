import React, { useState } from 'react';
import { SugarRushHeader } from './SugarRushHeader';
import { SugarRushHero } from './SugarRushHero';
import { SugarRushBestsellers } from './SugarRushBestsellers';
import { SugarRushCakeBuilder } from './SugarRushCakeBuilder';
import { SugarRushSnacks } from './SugarRushSnacks';
import { SugarRushWall } from './SugarRushWall';
import { SugarRushFooter } from './SugarRushFooter';
import { DEMO_CONFIGS } from '../../data/demo-config';
import { triggerWhatsAppAction, WhatsAppEventDetail } from '../../utils/whatsapp';
import { WhatsAppModal } from '../../components/WhatsAppModal';
import { EnquirySuccessModal } from '../../components/EnquirySuccessModal';

export const SugarRushPage: React.FC = () => {
  const config = DEMO_CONFIGS["modern-bakery"];
  const [whatsAppDetail, setWhatsAppDetail] = useState<WhatsAppEventDetail | null>(null);
  const [enquirySuccessData, setEnquirySuccessData] = useState<any | null>(null);

  const handleWhatsApp = (customMsg?: string) => {
    triggerWhatsAppAction(config.whatsapp, customMsg, (detail) => {
      setWhatsAppDetail(detail);
    });
  };

  return (
    <div id="sugar-top" className="min-h-screen bg-[#FFFBF5] text-[#2B2625] font-sans selection:bg-[#FF6B35] selection:text-white">
      {/* 1. High-Energy Header with Marquee Ticker */}
      <SugarRushHeader onWhatsAppClick={handleWhatsApp} />

      {/* 2. Bold Maximalist Collage Hero */}
      <SugarRushHero onWhatsAppClick={handleWhatsApp} />

      {/* 3. The Sugar Rush Crazy-Grid with Mixed Card Proportions */}
      <SugarRushBestsellers onWhatsAppClick={handleWhatsApp} />

      {/* 4. Interactive 4-Step Custom Birthday Cake Studio */}
      <SugarRushCakeBuilder 
        onSuccessSubmit={(data) => setEnquirySuccessData(data)} 
        onWhatsAppClick={handleWhatsApp} 
      />

      {/* 5. The 4:00 PM Savory Puff & Roll Drop */}
      <SugarRushSnacks onWhatsAppClick={handleWhatsApp} />

      {/* 6. Polaroid-Style Community Wall */}
      <SugarRushWall />

      {/* 7. High-Contrast Retail Footer */}
      <SugarRushFooter onWhatsAppClick={handleWhatsApp} />

      {/* Interactive Modals */}
      <WhatsAppModal
        detail={whatsAppDetail}
        onClose={() => setWhatsAppDetail(null)}
      />

      <EnquirySuccessModal
        data={enquirySuccessData}
        businessName={config.name}
        whatsappConfig={config.whatsapp}
        onClose={() => setEnquirySuccessData(null)}
      />
    </div>
  );
};
