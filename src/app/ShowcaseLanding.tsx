import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Menu,
  X,
  Filter,
  Check
} from 'lucide-react';
import { SHOWCASE_CONCEPTS, COMPARISON_FEATURES, VALUE_PROPOSITIONS, FilterCategory } from '../data/showcase-data';
import { AGENCY_CONFIG } from '../data/demo-config';
import { triggerWhatsAppAction, WhatsAppEventDetail } from '../utils/whatsapp';
import { WhatsAppModal } from '../components/WhatsAppModal';
import { ImageWithFallback } from '../components/ImageWithFallback';

const FILTER_TABS: FilterCategory[] = [
  'All',
  'Traditional Sweets',
  'Bakery',
  'Cakes',
  'Luxury',
  'Café',
  'Online Store'
];

export const ShowcaseLanding: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [whatsAppDetail, setWhatsAppDetail] = useState<WhatsAppEventDetail | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quick WhatsApp Agency CTA
  const handleAgencyWhatsApp = (customMsg?: string) => {
    triggerWhatsAppAction(AGENCY_CONFIG.whatsapp, customMsg, (detail) => {
      setWhatsAppDetail(detail);
    });
  };

  const filteredConcepts = SHOWCASE_CONCEPTS.filter(concept => {
    if (activeFilter === 'All') return true;
    return concept.filterCategory.includes(activeFilter);
  });

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Agency Top Header */}
      <nav className="sticky top-0 z-40 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-sky-500/20">
              F
            </div>
            <div>
              <span className="block font-bold text-xl tracking-tight text-white">
                Forge<span className="text-sky-400">D</span>Code
              </span>
              <span className="block text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                Design &amp; Web Engineering
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#demos" className="hover:text-sky-400 transition-colors">10 Demo Concepts</a>
            <a href="#comparison" className="hover:text-sky-400 transition-colors">Concept Matrix</a>
            <a href="#why-custom" className="hover:text-sky-400 transition-colors">Business Value</a>
            <a href="#cta" className="hover:text-sky-400 transition-colors">Start Your Website</a>
          </div>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleAgencyWhatsApp("Hi ForgeDCode! I'd like to discuss a custom website for my food/bakery business.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-sky-500/20 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Client Call</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-6 py-5 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-3 font-semibold text-base text-slate-200">
              <a href="#demos" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-400 py-1">10 Demo Concepts</a>
              <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-400 py-1">Concept Matrix</a>
              <a href="#why-custom" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-400 py-1">Business Value</a>
              <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-400 py-1 text-sky-400">Start Your Website</a>
            </div>
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAgencyWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 text-slate-950 text-sm font-bold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Subtle Electric Blue Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-sky-300 text-xs font-semibold tracking-wide mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>ForgeDCode Portfolio • 10 Client-Ready Website Concepts</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            Your business deserves a website <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500">
              as unique as your brand.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            No cookie-cutter templates. Explore ten genuinely different, fully-implemented website concepts engineered for Indian sweets shops, sourdough bakeries, custom cake ateliers, luxury patisseries, and neighborhood cafés.
          </p>

          {/* Quick Metrics / Jump Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#demos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-sky-500/20 active:scale-95"
            >
              <span>Explore The 10 Concepts</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => handleAgencyWhatsApp("Hi ForgeDCode! I am checking your 10 website demos and would like a quote.")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm uppercase tracking-wider transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-sky-400" />
              <span>Contact via WhatsApp</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-16 border-t border-slate-800/80 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white">10 Distinct</div>
              <div className="text-xs text-slate-400 mt-1">Design Architectures</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white">100% Mobile</div>
              <div className="text-xs text-slate-400 mt-1">Responsive Viewports</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white">Direct WhatsApp</div>
              <div className="text-xs text-slate-400 mt-1">Zero Aggregator Cut</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white">Live Prototype</div>
              <div className="text-xs text-slate-400 mt-1">Instant Client Pitch</div>
            </div>
          </div>

        </div>
      </section>

      {/* TEN LARGE DEMO CONCEPT CARDS */}
      <section id="demos" className="py-20 bg-[#0F172A]/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-400">
              Interactive Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ten Tailored Brand Blueprints
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Filter by business model or click "Preview Website" on any concept to test the complete live page, interactive calculators, cake customizers, and WhatsApp workflows.
            </p>
          </div>

          {/* Useful Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {FILTER_TABS.map(tab => {
              const isSelected = activeFilter === tab;
              const count = tab === 'All' 
                ? SHOWCASE_CONCEPTS.length 
                : SHOWCASE_CONCEPTS.filter(c => c.filterCategory.includes(tab)).length;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20 scale-105'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Concepts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredConcepts.map((concept, index) => (
              <div
                key={concept.id}
                className="group relative bg-[#131B2E] rounded-3xl overflow-hidden border border-slate-700/70 hover:border-sky-500/50 shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <ImageWithFallback
                      src={concept.previewImage}
                      alt={concept.name}
                      fallbackTitle={concept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-transparent" />
                    
                    {/* Concept Badge */}
                    <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      Concept {concept.id.toUpperCase()}
                    </span>

                    {/* Color Palette Swatches */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-slate-700">
                      {concept.palette.map((color, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-3.5 h-3.5 rounded-full border border-white/20 inline-block"
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>

                    {/* Target Business Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                        {concept.designStyle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                        {concept.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Details Body */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                        Target Business Type:
                      </span>
                      <p className="text-sm font-medium text-slate-200">
                        {concept.targetBusiness}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {concept.description}
                    </p>

                    {/* Feature Highlights Bullets */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-800">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">
                        Signature Capabilities:
                      </span>
                      {concept.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-8 pt-0 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                  <div className="text-xs text-slate-400">
                    <span className="text-slate-500 block text-[10px] uppercase font-mono">Conversion Focus</span>
                    <span className="font-semibold text-slate-300">{concept.avgConversionFocus}</span>
                  </div>

                  <button
                    onClick={() => navigate(concept.route)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
                  >
                    <span>Preview Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COMPARISON MATRIX SECTION */}
      <section id="comparison" className="py-20 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-400">
              Strategic Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Compare All Ten Concepts
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Help your bakery client choose the exact visual personality and sales funnel that matches their business model.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-[#131B2E] shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-xs uppercase font-bold tracking-wider text-slate-300">
                  <th className="p-5 sticky left-0 bg-slate-950 z-10">Dimension</th>
                  <th className="p-5 text-amber-400">1. Maharaja Mithai</th>
                  <th className="p-5 text-emerald-400">2. Crumb &amp; Co.</th>
                  <th className="p-5 text-orange-400">3. Sugar Rush</th>
                  <th className="p-5 text-[#E5D3B3]">4. Maison Éclair</th>
                  <th className="p-5 text-red-400">5. Chennai Sweet</th>
                  <th className="p-5 text-pink-400">6. Cake Atelier</th>
                  <th className="p-5 text-amber-200">7. Oven &amp; Hearth</th>
                  <th className="p-5 text-yellow-500">8. Cocoa Craft</th>
                  <th className="p-5 text-orange-500">9. Mithai &amp; Moments</th>
                  <th className="p-5 text-yellow-300">10. Butter &amp; Bloom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs">
                {COMPARISON_FEATURES.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-5 font-bold text-white bg-slate-900/60 sticky left-0 z-10">{item.attribute}</td>
                    <td className="p-5 text-slate-300">{item.maharaja}</td>
                    <td className="p-5 text-slate-300">{item.crumb}</td>
                    <td className="p-5 text-slate-300">{item.sugar}</td>
                    <td className="p-5 text-slate-300">{item.maison}</td>
                    <td className="p-5 text-slate-300">{item.chennai}</td>
                    <td className="p-5 text-slate-300">{item.atelier}</td>
                    <td className="p-5 text-slate-300">{item.oven}</td>
                    <td className="p-5 text-slate-300">{item.cocoa}</td>
                    <td className="p-5 text-slate-300">{item.moments}</td>
                    <td className="p-5 text-slate-300">{item.butter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* WHY CUSTOM WEBSITE / FORGEDCODE VALUE PROPOSITION */}
      <section id="why-custom" className="py-20 bg-[#0F172A]/70 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-400">
              Why Food Businesses Choose ForgeDCode
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Stop Losing 30% to Food Aggregators
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A standalone brand website pays for itself in just weeks by capturing high-margin direct orders, wedding catering, and festive corporate gifting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPOSITIONS.map((prop, idx) => (
              <div 
                key={idx}
                className="bg-[#131B2E] p-8 rounded-3xl border border-slate-800 hover:border-sky-500/40 transition-all space-y-4 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {prop.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AGENCY CONTACT & WHATSAPP CONSULTATION CTA */}
      <section id="cta" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#0B0F19] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Ready to Win Your First High-Value Food Client?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Want a Bespoke Website for Your Sweets Shop or Bakery?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            ForgeDCode builds fast, mobile-friendly websites with direct WhatsApp ordering, Google SEO setup, and zero monthly aggregator commissions. Let's discuss your project today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleAgencyWhatsApp("Hi ForgeDCode! I want to build a custom website for my bakery/sweets brand.")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Connect with ForgeDCode on WhatsApp</span>
            </button>
            <a
              href="#demos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm uppercase tracking-wider transition-colors border border-slate-700"
            >
              <span>Review Demos Again</span>
            </a>
          </div>

          <div className="pt-8 text-xs text-slate-500">
            Current WhatsApp Consultation Number: <span className="text-emerald-400 font-mono font-semibold">{AGENCY_CONFIG.whatsapp.displayPhone}</span> (Configurable in <code className="text-sky-300">src/data/demo-config.ts</code>)
          </div>

        </div>
      </section>

      {/* AGENCY FOOTER */}
      <footer className="bg-[#070A10] text-slate-500 py-12 border-t border-slate-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500 text-slate-950 font-black flex items-center justify-center text-base">
                F
              </div>
              <div>
                <span className="font-bold text-white text-sm">ForgeDCode</span>
                <span className="text-[11px] block text-slate-500">{AGENCY_CONFIG.tagline}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-slate-400 text-xs">
              <a href="#demos" className="hover:text-white">All 10 Demos</a>
              <a href="#comparison" className="hover:text-white">Comparison Matrix</a>
              <a href="#why-custom" className="hover:text-white">Value Story</a>
              <button onClick={() => handleAgencyWhatsApp()} className="hover:text-white">WhatsApp Agency</button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <div>
              © {new Date().getFullYear()} ForgeDCode. All 10 demo concepts, layouts, and illustrative branding created for client presentation.
            </div>
            <div className="text-slate-600">
              Built with React, Vite, TypeScript &amp; Tailwind CSS
            </div>
          </div>
        </div>
      </footer>

      {/* Shared WhatsApp Preview Modal */}
      <WhatsAppModal
        detail={whatsAppDetail}
        onClose={() => setWhatsAppDetail(null)}
      />

    </div>
  );
};
