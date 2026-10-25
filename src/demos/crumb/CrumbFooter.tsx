import React from 'react';

export const CrumbFooter: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] text-[#36271F] py-16 text-xs font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#36271F]/10">
          
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-xl font-bold block text-[#36271F]">Crumb & Co.</span>
            <p className="text-[#685449] text-xs max-w-sm leading-relaxed">
              Wood-fired sourdough hearth, slow 48-hour fermentation, and stoneground flours in Bengaluru.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2 text-stone-600">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#36271F] block mb-2">Bakehouse Policy</span>
            <div>Zero Commercial Additives</div>
            <div>Banneton Cold Proofed</div>
            <div>Stone Deck Volcanic Oven</div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#36271F] block mb-2">Concept Development</span>
            <p className="text-stone-500 text-xs leading-relaxed">
              Demonstration storefront created by ForgeDCode for contemporary artisan bakeries seeking high-converting morning reservations.
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Crumb & Co. (Demonstration Concept). All Rights Reserved.
          </div>
          <div>
            Design & Architecture by <a href="/" className="text-[#526E48] font-semibold hover:underline">ForgeDCode</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
