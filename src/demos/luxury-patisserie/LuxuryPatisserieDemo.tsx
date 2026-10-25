import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  Crown, 
  Award, 
  Gem, 
  Calendar,
  Send,
  Star
} from 'lucide-react';
import { 
  LUXURY_PATISSERIE_CATEGORIES, 
  LUXURY_PATISSERIE_PRODUCTS, 
  LUXURY_PATISSERIE_GALLERY 
} from '../../data/products';
import { DEMO_CONFIGS } from '../../data/demo-config';
import { triggerWhatsAppAction, WhatsAppEventDetail } from '../../utils/whatsapp';
import { WhatsAppModal } from '../../components/WhatsAppModal';
import { LightboxModal } from '../../components/LightboxModal';
import { EnquirySuccessModal } from '../../components/EnquirySuccessModal';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export const LuxuryPatisserieDemo: React.FC = () => {
  const config = DEMO_CONFIGS["luxury-patisserie"];

  // Filter & Nav states
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Modals state
  const [whatsAppDetail, setWhatsAppDetail] = useState<WhatsAppEventDetail | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [enquirySuccessData, setEnquirySuccessData] = useState<any | null>(null);

  // VIP Event & Gifting form state
  const [vipName, setVipName] = useState("");
  const [vipPhone, setVipPhone] = useState("");
  const [vipEvent, setVipEvent] = useState("Private Dessert Tasting Table");
  const [vipGuests, setVipGuests] = useState("20 - 50 Guests");
  const [vipDate, setVipDate] = useState("");
  const [vipNotes, setVipNotes] = useState("");
  const [vipError, setVipError] = useState("");

  const filteredProducts = activeCategory === "All"
    ? LUXURY_PATISSERIE_PRODUCTS
    : LUXURY_PATISSERIE_PRODUCTS.filter(p => p.category === activeCategory);

  const handleWhatsAppClick = (customMsg?: string) => {
    triggerWhatsAppAction(config.whatsapp, customMsg, (detail) => {
      setWhatsAppDetail(detail);
    });
  };

  const handleVipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vipName.trim() || !vipPhone.trim()) {
      setVipError("Please provide your name and contact phone number for the VIP Concierge.");
      return;
    }
    setVipError("");
    setEnquirySuccessData({
      name: vipName,
      phone: vipPhone,
      eventType: vipEvent,
      quantity: vipGuests,
      date: vipDate,
      notes: vipNotes
    });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#FAF7F2] font-sans selection:bg-[#E5D3B3] selection:text-[#0D0D0F]">
      
      {/* Haute Top Announcement Bar */}
      <div className="bg-[#16161A] text-[#E5D3B3] text-xs py-2.5 px-4 text-center border-b border-[#E5D3B3]/20 font-serif tracking-widest uppercase flex items-center justify-center gap-2">
        <Crown className="w-3.5 h-3.5 text-[#E5D3B3]" />
        <span>Private Degustation Tastings & Bespoke Haute Dessert Tables by Appointment</span>
      </div>

      {/* Haute Coutûre Navbar */}
      <nav className="sticky top-0 z-40 bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#E5D3B3]/15 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Brand Identity / Monogram */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#E5D3B3]/60 bg-[#16161A] text-[#E5D3B3] flex items-center justify-center font-serif text-lg tracking-wider">
              MÉ
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-light tracking-[0.2em] uppercase text-[#E5D3B3]">
                Maison Éclair
              </span>
              <span className="block text-[9px] uppercase font-sans tracking-[0.3em] text-stone-400">
                Haute Pâtisserie Parisienne
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-stone-300">
            <a href="#creations" className="hover:text-[#E5D3B3] transition-colors">Creations</a>
            <a href="#philosophy" className="hover:text-[#E5D3B3] transition-colors">The Atelier</a>
            <a href="#signatures" className="hover:text-[#E5D3B3] transition-colors">Signatures</a>
            <a href="#vip-concierge" className="hover:text-[#E5D3B3] transition-colors">Private Events</a>
            <a href="#gallery" className="hover:text-[#E5D3B3] transition-colors">Gallery</a>
            <a href="#atelier" className="hover:text-[#E5D3B3] transition-colors">Location</a>
          </div>

          {/* Right Action: WhatsApp Concierge */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleWhatsAppClick("Bonsoir Maison Éclair! I would like to consult your dessert concierge regarding bespoke orders.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5D3B3] text-[#E5D3B3] hover:bg-[#E5D3B3] hover:text-[#0D0D0F] text-xs font-semibold uppercase tracking-widest transition-all shadow active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#E5D3B3] hover:bg-stone-900 rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#16161A] border-b border-[#E5D3B3]/20 px-6 py-5 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-3 font-serif uppercase tracking-widest text-sm text-stone-200">
              <a href="#creations" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E5D3B3] py-1">Creations</a>
              <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E5D3B3] py-1">The Atelier</a>
              <a href="#signatures" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E5D3B3] py-1">Signatures</a>
              <a href="#vip-concierge" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E5D3B3] py-1">Private Events</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E5D3B3] py-1">Gallery</a>
              <a href="#atelier" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E5D3B3] py-1">Location</a>
            </div>
            <div className="pt-3 border-t border-stone-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#E5D3B3] text-[#0D0D0F] text-xs font-bold uppercase tracking-widest"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* CINEMATIC HERO SECTION */}
      <section id="hero" className="relative pt-16 pb-24 lg:py-28 overflow-hidden">
        {/* Ambient Champagne Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E5D3B3]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Haute Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1F24] border border-[#E5D3B3]/30 text-[#E5D3B3] text-[11px] font-serif tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Grand Cru Valrhona Cacao • 24K Edible Gold
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
                An Artful <br />
                <span className="italic font-serif text-[#E5D3B3]">Indulgence.</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Where French classical pastry architecture meets contemporary haute cuisine. Sculptural entremets, rare vintage cocoa beans, and hand-gilded confections designed to stir emotion.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#creations"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E5D3B3] text-[#0D0D0F] hover:bg-[#F3E9D7] text-xs font-semibold uppercase tracking-widest transition-all shadow-xl active:scale-95"
                >
                  <span>Explore Collections</span>
                  <ChevronRight className="w-4 h-4 text-[#0D0D0F]" />
                </a>

                <button
                  onClick={() => handleWhatsAppClick("Bonsoir Maison Éclair! I would like to inquire about signature dessert bookings.")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-stone-700 bg-[#16161A] text-[#FAF7F2] hover:border-[#E5D3B3] text-xs font-semibold uppercase tracking-widest transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-[#E5D3B3]" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-800 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="font-serif text-2xl font-light text-[#E5D3B3]">Valrhona</div>
                  <div className="text-[11px] text-stone-400 uppercase tracking-wider">Single Plantation</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-light text-[#E5D3B3]">Tahiti</div>
                  <div className="text-[11px] text-stone-400 uppercase tracking-wider">Whole Bean Vanilla</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-light text-[#E5D3B3]">24K</div>
                  <div className="text-[11px] text-stone-400 uppercase tracking-wider">Pure Gold Leaf</div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual with Champagne Border Inset */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Thin Elegant Champagne Inset Frame */}
                <div className="absolute -inset-2.5 rounded-2xl border border-[#E5D3B3]/40 pointer-events-none" />

                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-stone-900 border border-stone-800">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&auto=format&fit=crop&q=85"
                    alt="Haute chocolate pastry entremet with gold leaf in cinematic lighting"
                    fallbackTitle="L'Opéra d'Or Haute Creation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating Haute Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#16161A]/90 backdrop-blur-md border border-[#E5D3B3]/30 shadow-2xl flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#E5D3B3]">Chef's Masterpiece</span>
                      <h4 className="font-serif text-sm font-normal text-white">L'Opéra d'Or 24K</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#E5D3B3] text-[#0D0D0F] font-serif font-bold text-xs">
                      ₹580 / slice
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY & THE ATELIER */}
      <section id="philosophy" className="py-20 bg-[#16161A] border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#E5D3B3]">
              The Atelier Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Precision as a Form of Poetry
            </h2>
            <div className="w-16 h-px bg-[#E5D3B3] mx-auto" />
            <p className="text-stone-300 text-sm leading-relaxed pt-2">
              Every creation is calibrated to within a millimeter and balanced to achieve the perfect harmony between acidity, sweetness, crunch, and silkiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1F1F24] p-8 rounded-2xl border border-stone-800 space-y-4 hover:border-[#E5D3B3]/40 transition-all">
              <div className="w-12 h-12 rounded-full border border-[#E5D3B3]/50 flex items-center justify-center text-lg text-[#E5D3B3]">
                ⚜️
              </div>
              <h3 className="font-serif text-xl font-normal text-[#E5D3B3]">French Classical Foundations</h3>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                Rooted in centuries-old Paris techniques: sablés baked to fragile fragility, mirror glazes tempered at precise temperatures, and silky mousselines.
              </p>
            </div>

            <div className="bg-[#1F1F24] p-8 rounded-2xl border border-stone-800 space-y-4 hover:border-[#E5D3B3]/40 transition-all">
              <div className="w-12 h-12 rounded-full border border-[#E5D3B3]/50 flex items-center justify-center text-lg text-[#E5D3B3]">
                🍫
              </div>
              <h3 className="font-serif text-xl font-normal text-[#E5D3B3]">Grand Cru Valrhona Chocolates</h3>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                Single-plantation cacao harvested from Madagascar, Ecuador, and Ghana, expressing delicate undertones of dark red berries, oak wood, and roasted hazelnut.
              </p>
            </div>

            <div className="bg-[#1F1F24] p-8 rounded-2xl border border-stone-800 space-y-4 hover:border-[#E5D3B3]/40 transition-all">
              <div className="w-12 h-12 rounded-full border border-[#E5D3B3]/50 flex items-center justify-center text-lg text-[#E5D3B3]">
                ✨
              </div>
              <h3 className="font-serif text-xl font-normal text-[#E5D3B3]">Dessert Architecture</h3>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                We envision desserts as architectural installations—contrasting geometrical textures, razor-sharp edges, and ephemeral edible gold finishes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CURATED DESSERT CREATIONS CATALOG */}
      <section id="creations" className="py-20 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#E5D3B3]">
              Curated Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              The Autumn / Winter Edition
            </h2>
            <div className="w-16 h-px bg-[#E5D3B3] mx-auto" />
            <p className="text-stone-400 text-xs sm:text-sm">
              Discover individual gateaux, boxed macaron coffrets, and centerpiece celebration gateaux.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {LUXURY_PATISSERIE_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all border ${
                  activeCategory === category
                    ? 'bg-[#E5D3B3] text-[#0D0D0F] border-[#E5D3B3] font-semibold'
                    : 'bg-[#16161A] text-stone-300 border-stone-800 hover:border-[#E5D3B3]/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="group bg-[#16161A] rounded-2xl overflow-hidden border border-stone-800 hover:border-[#E5D3B3]/60 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      fallbackTitle={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    {product.isBestseller && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0D0D0F]/90 border border-[#E5D3B3]/40 text-[#E5D3B3] text-[9px] uppercase tracking-widest font-semibold backdrop-blur-sm">
                        Chef Signature
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[10px] uppercase tracking-widest text-[#E5D3B3] font-mono">
                      {product.category}
                    </div>
                    <h3 className="font-serif text-base font-normal text-white leading-snug group-hover:text-[#E5D3B3] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-serif text-lg font-normal text-[#E5D3B3]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-stone-500">
                      {product.unit}
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(`Bonsoir Maison Éclair! I would like to reserve the ${product.name} (₹${product.price}).`)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5D3B3]/60 hover:bg-[#E5D3B3] hover:text-[#0D0D0F] text-[#E5D3B3] text-xs font-medium uppercase tracking-wider transition-all"
                  >
                    <span>Reserve</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRIVATE EVENTS, VIP GIFTING & BESPOKE DESSERT TABLES */}
      <section id="vip-concierge" className="py-20 bg-[#16161A] border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#E5D3B3]">
              Haute Concierge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              Private Tastings & High-Jewelry Dessert Tables
            </h2>
            <div className="w-16 h-px bg-[#E5D3B3] mx-auto" />
            <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto font-light">
              We design custom sculptural confectionery installations for galas, luxury brand launches, and bespoke wedding dessert salons.
            </p>
          </div>

          <div className="bg-[#1F1F24] border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleVipSubmit} className="space-y-6">
              {vipError && (
                <div className="p-3 bg-red-950/80 border border-red-800 text-red-200 rounded-xl text-xs font-medium">
                  {vipError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#E5D3B3] mb-2 font-mono">
                    Host / Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={vipName}
                    onChange={(e) => setVipName(e.target.value)}
                    placeholder="e.g. Rohini Godrej"
                    className="w-full px-4 py-3 rounded-xl bg-[#16161A] border border-stone-700 text-white focus:outline-none focus:border-[#E5D3B3] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#E5D3B3] mb-2 font-mono">
                    Contact Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={vipPhone}
                    onChange={(e) => setVipPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#16161A] border border-stone-700 text-white focus:outline-none focus:border-[#E5D3B3] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#E5D3B3] mb-2 font-mono">
                    Service Required
                  </label>
                  <select
                    value={vipEvent}
                    onChange={(e) => setVipEvent(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#16161A] border border-stone-700 text-white focus:outline-none focus:border-[#E5D3B3] text-sm"
                  >
                    <option>Private Dessert Tasting Table</option>
                    <option>Haute Wedding Cake Commission</option>
                    <option>Luxury Brand Launch Catering</option>
                    <option>Corporate VIP Macaron Coffrets</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#E5D3B3] mb-2 font-mono">
                    Expected Attendance
                  </label>
                  <select
                    value={vipGuests}
                    onChange={(e) => setVipGuests(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#16161A] border border-stone-700 text-white focus:outline-none focus:border-[#E5D3B3] text-sm"
                  >
                    <option>Intimate (2 - 8 Guests)</option>
                    <option>20 - 50 Guests</option>
                    <option>50 - 150 Guests</option>
                    <option>150+ Gala Reception</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#E5D3B3] mb-2 font-mono">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={vipDate}
                    onChange={(e) => setVipDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#16161A] border border-stone-700 text-white focus:outline-none focus:border-[#E5D3B3] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#E5D3B3] mb-2 font-mono">
                  Bespoke Notes or Dietary Notes
                </label>
                <textarea
                  rows={3}
                  value={vipNotes}
                  onChange={(e) => setVipNotes(e.target.value)}
                  placeholder="e.g. 3-tier dark chocolate and blackberry gateau with edible silver leaf, tasting consultation..."
                  className="w-full px-4 py-3 rounded-xl bg-[#16161A] border border-stone-700 text-white focus:outline-none focus:border-[#E5D3B3] text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-stone-500 italic">
                  * Note: In this demonstration showcase, requests are captured for preview with demo feedback.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E5D3B3] text-[#0D0D0F] hover:bg-[#F3E9D7] text-xs font-semibold uppercase tracking-widest transition-all shadow-xl active:scale-95"
                >
                  Submit Concierge Inquiry
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* CURATED DESSERT GALLERY WITH LIGHTBOX */}
      <section id="gallery" className="py-20 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#E5D3B3]">
              Haute Visuals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              The Architecture of Sugar & Cocoa
            </h2>
            <div className="w-16 h-px bg-[#E5D3B3] mx-auto" />
            <p className="text-stone-400 text-xs">
              Click any creation to inspect its intricate finish in full screen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LUXURY_PATISSERIE_GALLERY.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all border border-stone-800"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-white">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-[#E5D3B3]">{item.category}</span>
                  <h4 className="font-serif text-sm font-normal text-white">{item.title}</h4>
                  <p className="text-xs text-stone-300 line-clamp-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ATELIER LOCATION, TASTING LOUNGE & CONCIERGE */}
      <section id="atelier" className="py-20 bg-[#16161A] text-stone-300 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#E5D3B3]">
                The Colaba Tasting Salon
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
                An Intimate Sanctuary for Haute Pâtisserie Connoisseurs
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed font-light">
                Located along the historic Colaba Waterfront, our atelier welcomes guests for afternoon tea tastings, champagne dessert pairings, and bespoke cake consultations.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#E5D3B3] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-white text-base">Atelier & Tasting Salon</h4>
                    <p className="text-stone-300 text-sm font-light">{config.address}, {config.area}, {config.city} – {config.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#E5D3B3] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-white text-base">Salon Hours</h4>
                    <p className="text-stone-300 text-sm font-light">Daily: {config.hours.weekdays} | Weekends: {config.hours.weekends}</p>
                    <p className="text-stone-400 text-xs italic">{config.hours.special}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#E5D3B3] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-white text-base">Concierge & WhatsApp</h4>
                    <p className="text-stone-300 text-sm font-mono text-[#E5D3B3]">{config.displayPhone}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleWhatsAppClick("Bonsoir Maison Éclair! I would like to reserve a dessert tasting appointment.")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E5D3B3] text-[#0D0D0F] hover:bg-white text-xs font-semibold uppercase tracking-widest transition-all shadow active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve Tasting Salon via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Atelier Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#1F1F24] border border-[#E5D3B3]/25 rounded-3xl p-6 sm:p-8 space-y-6 text-center shadow-2xl">
                <div className="w-16 h-16 rounded-full border border-[#E5D3B3]/40 flex items-center justify-center mx-auto text-xl text-[#E5D3B3] font-serif">
                  ⚜️
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-light text-white">
                    Colaba Flagship Salon
                  </h3>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto font-light">
                    Complimentary private valet parking available for all tasting salon reservations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#16161A] border border-stone-800 text-xs text-stone-300 space-y-2 text-left font-light">
                  <div className="flex justify-between border-b border-stone-800 pb-1.5">
                    <span className="text-stone-400">Afternoon Tea Degustation:</span>
                    <span className="text-[#E5D3B3] font-medium">3:00 PM – 6:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-800 pb-1.5">
                    <span className="text-stone-400">Late Night Dessert Bar:</span>
                    <span className="text-[#E5D3B3] font-medium">Until 11:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">VIP Gifting Consultations:</span>
                    <span className="text-[#E5D3B3] font-medium">By Concierge Appointment</span>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppClick("Bonsoir Maison Éclair! Please share your Colaba salon location details.")}
                  className="w-full py-3 rounded-full border border-stone-700 hover:border-[#E5D3B3] text-[#FAF7F2] text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  Send Location on WhatsApp
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HAUTE FOOTER */}
      <footer className="bg-[#0A0A0C] text-stone-400 py-12 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="font-serif text-lg tracking-widest uppercase text-[#E5D3B3]">
                Maison Éclair
              </div>
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                Haute Pâtisserie Parisienne. Single plantation cacao, Tahitian vanilla, and architectural confections in Mumbai.
              </p>
            </div>

            <div>
              <h5 className="font-serif text-white mb-3 uppercase tracking-widest text-[10px]">Creations</h5>
              <ul className="space-y-2 text-stone-400 font-light">
                <li><a href="#creations" className="hover:text-[#E5D3B3]">L'Opéra d'Or</a></li>
                <li><a href="#creations" className="hover:text-[#E5D3B3]">Tahitian Vanilla Mille-Feuille</a></li>
                <li><a href="#creations" className="hover:text-[#E5D3B3]">Le Coffret Prestige Macarons</a></li>
                <li><a href="#vip-concierge" className="hover:text-[#E5D3B3]">VIP Dessert Tables</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-white mb-3 uppercase tracking-widest text-[10px]">Concierge</h5>
              <ul className="space-y-2 text-stone-400 font-light">
                <li><button onClick={() => handleWhatsAppClick()} className="hover:text-[#E5D3B3]">WhatsApp Private Concierge</button></li>
                <li><a href="#atelier" className="hover:text-[#E5D3B3]">Salon Degustation Hours</a></li>
                <li><span>Temperature-Controlled Courier</span></li>
                <li><span>Valrhona Certified Atelier</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-serif text-white mb-3 uppercase tracking-widest text-[10px]">ForgeDCode Concept</h5>
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                Demonstration design created by ForgeDCode showing how ultra-luxury aesthetics attract high-ticket gateaux commissions and corporate VIP gifting.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <div>
              © {new Date().getFullYear()} Maison Éclair (Demonstration Concept). All Rights Reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-500">Website Architecture by</span>
              <a href="/" className="text-sky-400 font-semibold hover:underline">ForgeDCode</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Shared Interactive Modals */}
      <WhatsAppModal
        detail={whatsAppDetail}
        onClose={() => setWhatsAppDetail(null)}
      />

      <LightboxModal
        items={LUXURY_PATISSERIE_GALLERY}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
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
