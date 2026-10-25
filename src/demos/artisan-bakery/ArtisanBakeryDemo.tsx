import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  Menu, 
  X, 
  ChevronDown, 
  Flame, 
  Wheat, 
  Sparkles,
  Calendar,
  Layers,
  Heart
} from 'lucide-react';
import { 
  ARTISAN_BAKERY_CATEGORIES, 
  ARTISAN_BAKERY_PRODUCTS, 
  ARTISAN_BAKERY_GALLERY 
} from '../../data/products';
import { DEMO_CONFIGS } from '../../data/demo-config';
import { triggerWhatsAppAction, WhatsAppEventDetail } from '../../utils/whatsapp';
import { WhatsAppModal } from '../../components/WhatsAppModal';
import { LightboxModal } from '../../components/LightboxModal';
import { EnquirySuccessModal } from '../../components/EnquirySuccessModal';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export const ArtisanBakeryDemo: React.FC = () => {
  const config = DEMO_CONFIGS["artisan-bakery"];

  // Filter state
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // FAQ open/close state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Modals state
  const [whatsAppDetail, setWhatsAppDetail] = useState<WhatsAppEventDetail | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [enquirySuccessData, setEnquirySuccessData] = useState<any | null>(null);

  // Custom Cake Enquiry form state
  const [cakeName, setCakeName] = useState("");
  const [cakePhone, setCakePhone] = useState("");
  const [cakeFlavor, setCakeFlavor] = useState("San Sebastián Burnt Basque");
  const [cakeWeight, setCakeWeight] = useState("1 kg (Serves 8-10)");
  const [cakeDate, setCakeDate] = useState("");
  const [cakeNotes, setCakeNotes] = useState("");
  const [cakeError, setCakeError] = useState("");

  const filteredProducts = activeCategory === "All"
    ? ARTISAN_BAKERY_PRODUCTS
    : ARTISAN_BAKERY_PRODUCTS.filter(p => p.category === activeCategory);

  const handleWhatsAppClick = (customMsg?: string) => {
    triggerWhatsAppAction(config.whatsapp, customMsg, (detail) => {
      setWhatsAppDetail(detail);
    });
  };

  const handleCakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cakeName.trim() || !cakePhone.trim()) {
      setCakeError("Please enter your name and phone number to request a custom cake consultation.");
      return;
    }
    setCakeError("");
    setEnquirySuccessData({
      name: cakeName,
      phone: cakePhone,
      cakeFlavor: cakeFlavor,
      quantity: cakeWeight,
      date: cakeDate,
      notes: cakeNotes
    });
  };

  const FAQS = [
    {
      q: "How should I store my artisan sourdough loaf at home?",
      a: "Keep your uncut loaf cut-side down on a wooden cutting board or in a breathable cotton bread bag at room temperature. Never store sourdough in the refrigerator as it accelerates staling. If you don't plan to finish it within 4 days, slice the loaf and freeze it airtight—slices can be toasted directly from the freezer!"
    },
    {
      q: "Do you offer 100% vegetarian and eggless bakery options?",
      a: "Yes! All our sourdough loaves, focaccias, and baguettes are naturally vegan and egg-free. In our viennoiserie and cake cabinet, each item is distinctly labelled with dietary markers, and we craft delicious eggless Basque cheesecakes and chocolate babkas daily."
    },
    {
      q: "What time do hot croissants and sourdough come out of the oven?",
      a: "Our first batch of warm morning sourdough and flaky butter croissants comes out of the stone deck oven at 7:00 AM sharp. A second batch of viennoiserie is baked at 11:30 AM, and savory afternoon focaccias emerge at 3:30 PM."
    },
    {
      q: "How many days in advance should I reserve a custom celebration cake?",
      a: "We recommend booking celebration cakes at least 48 to 72 hours in advance. Because we use organic, slow-infused creams and single-origin seasonal fruits without artificial stabilizing mixes, every cake is crafted to order."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#36271F] font-sans selection:bg-[#526E48] selection:text-white">
      
      {/* Top Editorial Bar */}
      <div className="bg-[#526E48] text-[#FAF7F2] text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Flame className="w-3.5 h-3.5 text-[#C86D51]" />
        <span>Oven Fresh from 6:30 AM | Wild Leavened Sourdough & Cultured Butter Pastries</span>
      </div>

      {/* Editorial Navbar */}
      <nav className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#36271F]/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#526E48] text-[#FAF7F2] flex items-center justify-center font-serif font-bold text-lg shadow-sm">
              &
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold tracking-tight text-[#36271F]">
                Crumb & Co.
              </span>
              <span className="block text-[10px] uppercase font-semibold tracking-widest text-[#526E48]">
                Artisan Bakery & Hearth
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#36271F]/80">
            <a href="#daily-bake" className="hover:text-[#526E48] transition-colors">Daily Bakes</a>
            <a href="#process" className="hover:text-[#526E48] transition-colors">Our Process</a>
            <a href="#custom-cakes" className="hover:text-[#526E48] transition-colors">Celebration Cakes</a>
            <a href="#gallery" className="hover:text-[#526E48] transition-colors">Bakery Gallery</a>
            <a href="#faqs" className="hover:text-[#526E48] transition-colors">Bread Care & FAQs</a>
            <a href="#visit" className="hover:text-[#526E48] transition-colors">Location & Hours</a>
          </div>

          {/* Right Action: WhatsApp Reserve */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleWhatsAppClick("Hello Crumb & Co.! I'd like to reserve today's fresh bread and pastries.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#36271F] text-[#FAF7F2] hover:bg-[#526E48] text-xs font-semibold uppercase tracking-wider transition-all shadow active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#C86D51]" />
              <span>Reserve via WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#36271F] hover:bg-[#EDE5D8] rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#36271F]/10 px-6 py-5 space-y-4 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3 font-serif font-semibold text-base text-[#36271F]">
              <a href="#daily-bake" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#526E48] py-1">Daily Bakes</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#526E48] py-1">Our Process</a>
              <a href="#custom-cakes" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#526E48] py-1">Celebration Cakes</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#526E48] py-1">Bakery Gallery</a>
              <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#526E48] py-1">FAQs</a>
              <a href="#visit" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#526E48] py-1">Location</a>
            </div>
            <div className="pt-3 border-t border-[#36271F]/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#36271F] text-[#FAF7F2] text-sm font-semibold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-[#C86D51]" />
                <span>Reserve via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF1EB] text-[#526E48] text-xs font-semibold tracking-wide border border-[#526E48]/20">
                <Wheat className="w-3.5 h-3.5 text-[#526E48]" />
                Stoneground Grains • 48-Hour Cold Fermentation
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#36271F] leading-[1.15]">
                Freshly Baked. <br />
                <span className="italic font-serif text-[#C86D51]">Beautifully Made.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#685449] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Slow bread crafted with patience. We combine wild sourdough starters, stoneground heritage flours, and pure cultured Normandy butter to bring honest baking back to your daily table.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#daily-bake"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#526E48] text-[#FAF7F2] hover:bg-[#3D5336] text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>Explore Daily Bakes</span>
                  <ChevronRight className="w-4 h-4 text-[#C86D51]" />
                </a>

                <button
                  onClick={() => handleWhatsAppClick("Hello Crumb & Co.! I'd like to check today's fresh bake availability and reserve a loaf.")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FAF7F2] text-[#36271F] hover:bg-[#EDE5D8] text-xs font-semibold uppercase tracking-wider transition-all border border-[#36271F]/30 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-[#526E48]" />
                  <span>Reserve on WhatsApp</span>
                </button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#36271F]/10 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="font-serif text-2xl font-bold text-[#36271F]">48 hrs</div>
                  <div className="text-xs text-[#685449]">Cold Ferment</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#36271F]">0%</div>
                  <div className="text-xs text-[#685449]">Artificial Additives</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#36271F]">100%</div>
                  <div className="text-xs text-[#685449]">Normandy Butter</div>
                </div>
              </div>

            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Organic Rounded Image Mask */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-stone-200 border-4 border-white">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=900&auto=format&fit=crop&q=85"
                    alt="Artisan sourdough bread cooling on wooden racks in natural morning light"
                    fallbackTitle="Country Sourdough Loaf"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Feature Card */}
                <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-200/80 max-w-[240px]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#526E48] mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#526E48] animate-pulse" />
                    <span>Stone Deck Oven</span>
                  </div>
                  <div className="font-serif font-bold text-[#36271F] text-sm">
                    Today's Sourdough Batch
                  </div>
                  <div className="text-[11px] text-[#685449] mt-0.5">
                    Fresh from the oven at 7:00 AM daily
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR BAKING PROCESS & INGREDIENT STORY */}
      <section id="process" className="py-20 bg-[#EDE5D8]/50 border-y border-[#36271F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#526E48]">
              The Craft of Slow Baking
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#36271F]">
              Ingredients Honest Enough to Name
            </h2>
            <div className="w-12 h-0.5 bg-[#C86D51] mx-auto" />
            <p className="text-stone-600 text-sm leading-relaxed">
              We believe great bread cannot be rushed. Every loaf takes two days, three simple ingredients, and generational intuition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#36271F]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF1EB] text-[#526E48] flex items-center justify-center text-xl font-serif">
                🌾
              </div>
              <h3 className="font-serif text-xl font-bold text-[#36271F]">Stoneground Single Flours</h3>
              <p className="text-sm text-[#685449] leading-relaxed">
                Milled slowly at low temperatures to preserve the wholesome germ, aromatic bran, and natural enzymes that commercial rollers strip away.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#36271F]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF1EB] text-[#526E48] flex items-center justify-center text-xl font-serif">
                ⏳
              </div>
              <h3 className="font-serif text-xl font-bold text-[#36271F]">48-Hour Cold Proofing</h3>
              <p className="text-sm text-[#685449] leading-relaxed">
                Extended low-temperature fermentation breaks down complex starches and glutens, yielding our distinct custard crumb and gut-friendly digestibility.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#36271F]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF1EB] text-[#526E48] flex items-center justify-center text-xl font-serif">
                🔥
              </div>
              <h3 className="font-serif text-xl font-bold text-[#36271F]">Steam Stone Deck Oven</h3>
              <p className="text-sm text-[#685449] leading-relaxed">
                Baked directly on porous volcanic stone hearths under heavy steam injections, creating that unmistakable blistering, crunchy exterior and caramelized crust.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* DAILY BAKE MENU & PRODUCT CATALOG */}
      <section id="daily-bake" className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#526E48]">
              Daily Bake Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#36271F]">
              Handcrafted Today at the Bakery
            </h2>
            <div className="w-12 h-0.5 bg-[#C86D51] mx-auto" />
            <p className="text-stone-600 text-sm">
              Baked in limited quantities every morning. Reserve via WhatsApp to ensure your favorites don't sell out!
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {ARTISAN_BAKERY_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                  activeCategory === category
                    ? 'bg-[#526E48] text-[#FAF7F2] border-[#526E48] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#36271F] border-[#36271F]/20 hover:border-[#526E48]'
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
                className="group bg-white rounded-3xl overflow-hidden border border-[#36271F]/10 hover:border-[#526E48] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      fallbackTitle={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isBestseller && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C86D51] text-white text-[10px] font-semibold uppercase tracking-wider shadow">
                        Baker's Pick
                      </span>
                    )}
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-medium text-stone-600 shadow-sm">
                      {product.weightOrPieces}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-[#526E48]">
                      {product.category}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#36271F] leading-snug group-hover:text-[#526E48] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-2 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="font-serif font-bold text-xl text-[#36271F]">
                      ₹{product.price}
                    </div>
                    <div className="text-[10px] text-stone-500 font-medium">
                      {product.unit}
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(`Hi Crumb & Co.! I'd like to reserve ${product.name} (₹${product.price} ${product.unit}). Is one available?`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#526E48] hover:bg-[#3D5336] text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Reserve</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CUSTOM CELEBRATION CAKE ENQUIRY FORM */}
      <section id="custom-cakes" className="py-20 bg-[#EDE5D8]/40 border-t border-[#36271F]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C86D51]">
              Celebrations & Special Moments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#36271F]">
              Custom Artisan Celebration Cakes
            </h2>
            <div className="w-12 h-0.5 bg-[#526E48] mx-auto" />
            <p className="text-stone-600 text-sm max-w-lg mx-auto">
              Naturally styled celebration cakes decorated with fresh edible botanicals, seasonal fruit coulis, and caramelized nuts.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#36271F]/10 shadow-lg">
            <form onSubmit={handleCakeSubmit} className="space-y-6">
              {cakeError && (
                <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-xl text-xs font-medium">
                  {cakeError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#36271F] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={cakeName}
                    onChange={(e) => setCakeName(e.target.value)}
                    placeholder="e.g. Maya Iyer"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#36271F] mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={cakePhone}
                    onChange={(e) => setCakePhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#36271F] mb-2">
                    Cake Creation
                  </label>
                  <select
                    value={cakeFlavor}
                    onChange={(e) => setCakeFlavor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48] text-sm"
                  >
                    <option>San Sebastián Burnt Basque</option>
                    <option>Pistachio Berry Naked Sponge</option>
                    <option>Single-Estate Dark Chocolate Babka</option>
                    <option>Tahitian Vanilla & Almond Sablé</option>
                    <option>Seasonal Fruit & Lemon Curd Gateau</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#36271F] mb-2">
                    Size / Portions
                  </label>
                  <select
                    value={cakeWeight}
                    onChange={(e) => setCakeWeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48] text-sm"
                  >
                    <option>500g (Serves 4-6)</option>
                    <option>1 kg (Serves 8-10)</option>
                    <option>1.5 kg (Serves 12-15)</option>
                    <option>2 kg (Two-Tier / Serves 20)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#36271F] mb-2">
                    Celebration Date
                  </label>
                  <input
                    type="date"
                    value={cakeDate}
                    onChange={(e) => setCakeDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#36271F] mb-2">
                  Piped Message or Dietary Preferences
                </label>
                <textarea
                  rows={3}
                  value={cakeNotes}
                  onChange={(e) => setCakeNotes(e.target.value)}
                  placeholder="e.g. 'Happy 30th Birthday Priya!', eggless preference, no nuts..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#36271F]/20 text-[#36271F] focus:outline-none focus:border-[#526E48] text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-stone-500 italic">
                  * Note: In this demonstration showcase, submission validates client-side with interactive feedback.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#526E48] text-white hover:bg-[#3D5336] text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  Request Cake Consultation
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* BAKERY GALLERY WITH LIGHTBOX */}
      <section id="gallery" className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#526E48]">
              Daylight Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#36271F]">
              Life at the Crumb & Co. Counter
            </h2>
            <div className="w-12 h-0.5 bg-[#C86D51] mx-auto" />
            <p className="text-stone-600 text-sm">
              Click any photo to explore our bakery studio and oven moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTISAN_BAKERY_GALLERY.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all border border-[#36271F]/10"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#EDE5D8]">{item.category}</span>
                  <h4 className="font-serif font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-stone-300 line-clamp-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section id="faqs" className="py-20 bg-[#EDE5D8]/40 border-t border-[#36271F]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#526E48]">
              Good Bread Wisdom
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#36271F]">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 bg-[#C86D51] mx-auto" />
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-[#36271F]/10 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-serif font-medium text-base text-[#36271F]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#526E48] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#685449] leading-relaxed border-t border-stone-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* LOCATION, OPENING HOURS & VISIT */}
      <section id="visit" className="py-20 bg-[#36271F] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-widest text-[#C86D51]">
                Visit Our Koramangala Bakehouse
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white leading-tight">
                Follow the Scent of Fresh Sourdough & Roasted Coffee
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                Drop by early for hot croissants and our single-origin pour-overs, or pick up a freshly baked country loaf for dinner.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C86D51] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Bakery & Coffee Hearth</h4>
                    <p className="text-stone-300 text-sm">{config.address}, {config.area}, {config.city} – {config.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#C86D51] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Bake Schedule & Hours</h4>
                    <p className="text-stone-300 text-sm">Weekdays: {config.hours.weekdays} | Weekends: {config.hours.weekends}</p>
                    <p className="text-stone-400 text-xs italic">{config.hours.special}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C86D51] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">WhatsApp Pre-Order & Reserve</h4>
                    <p className="text-stone-300 text-sm">{config.displayPhone}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleWhatsAppClick("Hello Crumb & Co.! Please share your bakery location and today's bake list.")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#526E48] text-white hover:bg-[#3D5336] text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-[#EDE5D8]" />
                  <span>Reserve Sourdough on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Simulated Hearth Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#2B1E17] border border-[#FAF7F2]/10 rounded-3xl p-6 sm:p-8 space-y-6 text-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-[#36271F] text-[#C86D51] flex items-center justify-center mx-auto text-2xl font-serif">
                  🥖
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-normal text-white">
                    Bengaluru Bakehouse & Roastery
                  </h3>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto">
                    Indoor sunlit communal wooden tables and outdoor patio seating available. Bicycle and pet friendly.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#36271F]/80 border border-white/5 text-xs text-stone-300 space-y-2 text-left">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-stone-400">First Warm Sourdough Pull:</span>
                    <span className="font-semibold text-[#EDE5D8]">7:00 AM Daily</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-stone-400">Warm Cruffins & Pastries:</span>
                    <span className="font-semibold text-[#EDE5D8]">8:30 AM & 11:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Herb Sea-Salt Focaccia:</span>
                    <span className="font-semibold text-[#EDE5D8]">3:30 PM Tea Time</span>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppClick("Hello Crumb & Co.! Please send Google Maps directions to the Koramangala store.")}
                  className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Get Directions on WhatsApp
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EDITORIAL FOOTER */}
      <footer className="bg-[#2B1E17] text-stone-400 py-12 border-t border-white/5 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="font-serif text-lg font-bold text-white">
                Crumb & Co.
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">
                Wood-fired artisan breads, naturally leavened sourdough, and European viennoiserie in Koramangala.
              </p>
            </div>

            <div>
              <h5 className="font-serif font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Bake Categories</h5>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#daily-bake" className="hover:text-white">Artisan Sourdough</a></li>
                <li><a href="#daily-bake" className="hover:text-white">Cultured Butter Pastries</a></li>
                <li><a href="#custom-cakes" className="hover:text-white">Burnt Basque Cheesecake</a></li>
                <li><a href="#process" className="hover:text-white">Stone Oven Method</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Customer Care</h5>
              <ul className="space-y-2 text-stone-400">
                <li><button onClick={() => handleWhatsAppClick()} className="hover:text-white">WhatsApp Morning Reservation</button></li>
                <li><a href="#faqs" className="hover:text-white">Bread Storage Tips</a></li>
                <li><a href="#visit" className="hover:text-white">Opening Hours & Location</a></li>
                <li><span>Zero Artificial Additives</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-serif font-bold text-white mb-3 uppercase tracking-wider text-[11px]">ForgeDCode Showcase</h5>
              <p className="text-stone-400 text-xs leading-relaxed">
                Demonstration website created by ForgeDCode to show artisan bakeries how a modern editorial storefront captures high-margin cake orders and morning reservations.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <div>
              © {new Date().getFullYear()} Crumb & Co. (Demonstration Concept). All Rights Reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-500">Website Design by</span>
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
        items={ARTISAN_BAKERY_GALLERY}
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
