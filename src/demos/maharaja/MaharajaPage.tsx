import React, { useState } from 'react';
import { MaharajaHeader } from './MaharajaHeader';
import { MaharajaHero } from './MaharajaHero';
import { MaharajaCatalogue } from './MaharajaCatalogue';
import { MaharajaGifting } from './MaharajaGifting';
import { MaharajaHeritage } from './MaharajaHeritage';
import { MaharajaEnquiry } from './MaharajaEnquiry';
import { MaharajaFooter } from './MaharajaFooter';
import { DEMO_CONFIGS } from '../../data/demo-config';
import { triggerWhatsAppAction, WhatsAppEventDetail } from '../../utils/whatsapp';
import { WhatsAppModal } from '../../components/WhatsAppModal';
import { EnquirySuccessModal } from '../../components/EnquirySuccessModal';

export const MaharajaPage: React.FC = () => {
  const config = DEMO_CONFIGS["royal-sweets"];
  const [whatsAppDetail, setWhatsAppDetail] = useState<WhatsAppEventDetail | null>(null);
  const [enquirySuccessData, setEnquirySuccessData] = useState<any | null>(null);

  const handleWhatsApp = (customMsg?: string) => {
    triggerWhatsAppAction(config.whatsapp, customMsg, (detail) => {
      setWhatsAppDetail(detail);
    });
  };

  return (
    <div id="maharaja-top" className="min-h-screen bg-[#FFFDF9] text-[#420D13] font-serif selection:bg-[#C59B27] selection:text-white">
      {/* 1. Header with Slim Announcement Ribbon & Editorial Wordmark */}
      <MaharajaHeader onWhatsAppClick={handleWhatsApp} />

      {/* 2. Asymmetrical 70/30 Hero Composition */}
      <MaharajaHero onWhatsAppClick={handleWhatsApp} />

      {/* 3. Horizontally Arranged Category Strip & Staggered Product Composition */}
      <MaharajaCatalogue onWhatsAppClick={handleWhatsApp} />

      {/* 4. Full-Width Velvet Gifting Campaign Spread */}
      <MaharajaGifting onWhatsAppClick={handleWhatsApp} />

      {/* 5. Alternating Chapter-Based Heritage Story */}
      <MaharajaHeritage />

      {/* 6. Ledger-Style Wedding Trousseau Requisition Form */}
      <MaharajaEnquiry 
        onSuccessSubmit={(data) => setEnquirySuccessData(data)} 
        onWhatsAppClick={handleWhatsApp} 
      />

      {/* 7. Haveli Boutique Footer */}
      <MaharajaFooter onWhatsAppClick={handleWhatsApp} />

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
