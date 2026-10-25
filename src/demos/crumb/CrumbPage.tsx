import React, { useState } from 'react';
import { CrumbHeader } from './CrumbHeader';
import { CrumbHero } from './CrumbHero';
import { CrumbDailyBoard } from './CrumbDailyBoard';
import { CrumbProcess } from './CrumbProcess';
import { CrumbJournal } from './CrumbJournal';
import { CrumbVisit } from './CrumbVisit';
import { CrumbFooter } from './CrumbFooter';
import { DEMO_CONFIGS } from '../../data/demo-config';
import { triggerWhatsAppAction, WhatsAppEventDetail } from '../../utils/whatsapp';
import { WhatsAppModal } from '../../components/WhatsAppModal';
import { EnquirySuccessModal } from '../../components/EnquirySuccessModal';

export const CrumbPage: React.FC = () => {
  const config = DEMO_CONFIGS["artisan-bakery"];
  const [whatsAppDetail, setWhatsAppDetail] = useState<WhatsAppEventDetail | null>(null);
  const [enquirySuccessData, setEnquirySuccessData] = useState<any | null>(null);

  const handleWhatsApp = (customMsg?: string) => {
    triggerWhatsAppAction(config.whatsapp, customMsg, (detail) => {
      setWhatsAppDetail(detail);
    });
  };

  return (
    <div id="crumb-top" className="min-h-screen bg-[#FAF7F2] text-[#36271F] font-sans selection:bg-[#526E48] selection:text-white">
      {/* 1. Typographic Minimal Header */}
      <CrumbHeader onWhatsAppClick={handleWhatsApp} />

      {/* 2. Split-Screen Hero with Oversized Typography & Oven Timeline */}
      <CrumbHero onWhatsAppClick={handleWhatsApp} />

      {/* 3. The Daily Bake Board: Chalkboard/Menu Card with Interactive Inspector */}
      <CrumbDailyBoard onWhatsAppClick={handleWhatsApp} />

      {/* 4. The 48-Hour Fermentation Process Timeline */}
      <CrumbProcess />

      {/* 5. Bakery Journal & Article-Style Previews */}
      <CrumbJournal />

      {/* 6. Restrained Location & Morning Reserve Requisition */}
      <CrumbVisit 
        onSuccessSubmit={(data) => setEnquirySuccessData(data)} 
        onWhatsAppClick={handleWhatsApp} 
      />

      {/* 7. Minimal Typographic Footer */}
      <CrumbFooter />

      {/* Shared Interactive Modals */}
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
