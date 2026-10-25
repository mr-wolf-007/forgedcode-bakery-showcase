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
  Heart, 
  Smile, 
  Zap, 
  Cake, 
  Star,
  CheckCircle2,
  Gift
} from 'lucide-react';
import { 
  MODERN_BAKERY_CATEGORIES, 
  MODERN_BAKERY_PRODUCTS, 
  MODERN_BAKERY_GALLERY 
} from '../../data/products';
import { DEMO_CONFIGS } from '../../data/demo-config';
import { triggerWhatsAppAction, WhatsAppEventDetail } from '../../utils/whatsapp';
import { WhatsAppModal } from '../../components/WhatsAppModal';
import { LightboxModal } from '../../components/LightboxModal';
import { EnquirySuccessModal } from '../../components/EnquirySuccessModal';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export const ModernBakeryDemo: React.FC = () => {
  const config = DEMO_CONFIGS["modern-bakery"];

  // Filter & Nav states
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Modals state
  const [whatsAppDetail, setWhatsAppDetail] = useState<WhatsAppEventDetail | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [enquirySuccessData, setEnquirySuccessData] = useState<any | null>(null);

  // Custom Birthday Cake Builder form state
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [cakeFlavor, setCakeFlavor] = useState("Dutch Truffle Chocolate");
  const [cakeWeight, setCakeWeight] = useState("1 kg (Smash Pinata + Hammer)");
  const [cakeDate, setCakeDate] = useState("");
  const [cakeMessage, setCakeMessage] = useState("");
  const [cakeAddon, setCakeAddon] = useState("Rainbow Sprinkles + Choco Drip");
  const [builderError, setBuilderError] = useState("");

  const filteredProducts = activeCategory === "All"
    ? MODERN_BAKERY_PRODUCTS
    : MODERN_BAKERY_PRODUCTS.filter(p => p.category === activeCategory);

  const handleWhatsAppClick = (customMsg?: string) => {
    triggerWhatsAppAction(config.whatsapp, customMsg, (detail) => {
      setWhatsAppDetail(detail);
    });
  };

  const handleCakeBuilderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      setBuilderError("Please enter your name and WhatsApp number so we can confirm your cake design!");
      return;
    }
    setBuilderError("");
    setEnquirySuccessData({
      name: customerName,
      phone: customerPhone,
      cakeFlavor: `${cakeFlavor} (${cakeAddon})`,
      quantity: cakeWeight,
      date: cakeDate,
      notes: cakeMessage ? `Message on Cake: "${cakeMessage}"` : "No custom message requested"
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#2B2625] font-sans selection:bg-[#FF6B35] selection:text-white">
      
      {/* Energetic Announcement Ticker */}
      <div className="bg-[#FF6B35] text-white text-xs py-2 px-4 text-center font-bold tracking-wide flex items-center justify-center gap-2 overflow-hidden shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
        <span>🎉 Flat 10% Off on First WhatsApp Order | 🎂 Same-Day Birthday Cake Delivery | 🥟 Hot Puffs at 4 PM!</span>
      </div>

      {/* Friendly Modern Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Logo & Playful Brand */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center font-bold text-xl shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform">
              🍩
            </div>
            <div>
              <span className="block font-extrabold text-2xl tracking-tight text-[#2B2625] group-hover:text-[#FF6B35] transition-colors">
                Sugar Rush
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-wider text-[#FF3366]">
                Bakery & Snack Bar
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-bold text-[#2B2625]/80">
            <a href="#offers" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Offers</span>
            </a>
            <a href="#menu" className="hover:text-[#FF6B35] transition-colors">Our Menu</a>
            <a href="#cake-builder" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
              <Cake className="w-3.5 h-3.5 text-[#FF3366]" />
              <span>Build a Cake</span>
            </a>
            <a href="#gallery" className="hover:text-[#FF6B35] transition-colors">Photo Wall</a>
            <a href="#reviews" className="hover:text-[#FF6B35] transition-colors">Reviews</a>
            <a href="#store" className="hover:text-[#FF6B35] transition-colors">Store & Hours</a>
          </div>

          {/* Right Action: WhatsApp Fast Order */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleWhatsAppClick("Hey Sugar Rush! I'd like to place a quick order for today.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6B35] text-white hover:bg-[#E8531D] text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#FFD166]" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2B2625] hover:bg-orange-50 rounded-xl transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 px-6 py-5 space-y-4 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3 font-bold text-base text-[#2B2625]">
              <a href="#offers" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF6B35] py-1">Today's Deals</a>
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF6B35] py-1">Full Menu</a>
              <a href="#cake-builder" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF3366] py-1 text-[#FF3366]">🎂 Custom Cake Builder</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF6B35] py-1">Bakery Photo Wall</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF6B35] py-1">Customer Love</a>
              <a href="#store" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF6B35] py-1">Location & Timings</a>
            </div>
            <div className="pt-3 border-t border-orange-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#FF6B35] text-white text-sm font-bold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-[#FFD166]" />
                <span>WhatsApp Fast Order</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#FFFBF5] via-[#FFF3EB] to-[#FFFBF5]">
        {/* Playful Floating Shape Blurs */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#FFD166]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FF3366]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#FF6B35] text-xs font-bold shadow-sm border border-orange-200">
                <Smile className="w-4 h-4 text-[#FF3366]" />
                Freshly Baked Every Morning • Warm Hot Puffs at 4 PM
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2625] leading-[1.15] tracking-tight">
                Your Happy Place for <br />
                <span className="text-[#FF6B35]">Sweet Treats</span> & <span className="text-[#FF3366]">Hot Bakes.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#665D5B] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Loaded chocolate cakes, Nutella stuffed donuts, gooey brownies, and the crispiest Indian bakery puffs in town. Baked fresh with love and big smiles!
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#cake-builder"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF6B35] text-white hover:bg-[#E8531D] text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/25 active:scale-95"
                >
                  <Cake className="w-4 h-4" />
                  <span>Custom Birthday Cake Builder</span>
                </a>

                <button
                  onClick={() => handleWhatsAppClick("Hey Sugar Rush! What are today's fresh special cakes and hot snacks?")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#2B2625] hover:bg-orange-50 text-xs font-bold uppercase tracking-wider transition-all border-2 border-orange-200 shadow active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-[#FF6B35]" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-orange-200/60 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-black text-[#FF6B35]">2 Hrs</div>
                  <div className="text-xs text-stone-500 font-medium">Rush Delivery</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-black text-[#FF3366]">50+</div>
                  <div className="text-xs text-stone-500 font-medium">Daily Flavors</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-black text-[#FFD166]">100%</div>
                  <div className="text-xs text-stone-500 font-medium">Pure Vegetarian</div>
                </div>
              </div>

            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Colorful Floating Badge Border */}
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-orange-100 border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=900&auto=format&fit=crop&q=85"
                    alt="Loaded glazed donuts with chocolate drizzle and colorful sprinkles"
                    fallbackTitle="Sugar Rush Loaded Donuts"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Donut Special Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-orange-200 shadow-xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6B35]">Today's Rush Deal</span>
                      <h4 className="font-extrabold text-[#2B2625] text-base">Nutella Glazed Donut Box</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FF3366] text-white font-black text-sm">
                      ₹340 / Box of 3
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TODAY'S SPECIAL OFFERS & COMBO DEALS */}
      <section id="offers" className="py-16 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#FF6B35]">
                Limited Daily Deals
              </span>
              <h2 className="text-3xl font-extrabold text-[#2B2625]">
                Today's Special Combos
              </h2>
            </div>
            <div className="text-xs text-stone-500 font-medium">
              * Valid for direct shop takeaway and WhatsApp orders today
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFF8E7] rounded-3xl p-6 border-2 border-[#FFD166] flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFD166] text-[#2B2625] text-[10px] font-black uppercase">
                  BOGO Deal
                </span>
                <h3 className="text-xl font-bold text-[#2B2625]">Donut Tuesday: Buy 2 Get 1 Free</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Pick any two premium stuffed donuts (Nutella, Belgian Dark, or Strawberry Swirl) and get a classic cinnamon glaze free!
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppClick("Hey Sugar Rush! I want to claim the Donut Tuesday Buy 2 Get 1 Free offer.")}
                className="w-full py-2.5 rounded-full bg-[#2B2625] hover:bg-[#FF6B35] text-white text-xs font-bold uppercase transition-colors"
              >
                Claim on WhatsApp
              </button>
            </div>

            <div className="bg-[#FFF0F3] rounded-3xl p-6 border-2 border-[#FF3366]/40 flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FF3366] text-white text-[10px] font-black uppercase">
                  Afternoon Tea Deal
                </span>
                <h3 className="text-xl font-bold text-[#2B2625]">Puff & Cold Coffee Combo</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  2 Piping hot Paneer Tikka Puffs + 1 Thick Chilled Hazelnut Cold Coffee at a special neighborhood price of ₹199 only.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppClick("Hey Sugar Rush! I want the 4 PM Puff & Cold Coffee Combo for ₹199.")}
                className="w-full py-2.5 rounded-full bg-[#FF3366] hover:bg-[#E8531D] text-white text-xs font-bold uppercase transition-colors"
              >
                Claim on WhatsApp
              </button>
            </div>

            <div className="bg-[#FFF3EB] rounded-3xl p-6 border-2 border-[#FF6B35]/40 flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FF6B35] text-white text-[10px] font-black uppercase">
                  Birthday Special
                </span>
                <h3 className="text-xl font-bold text-[#2B2625]">Free Birthday Candle & Sparkler Pack</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Order any 1kg+ celebration cake and receive complimentary luxury spiral candles, party knife, and a golden magic sparkler!
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppClick("Hey Sugar Rush! I want to order a birthday cake with the free sparkler pack.")}
                className="w-full py-2.5 rounded-full bg-[#FF6B35] hover:bg-[#2B2625] text-white text-xs font-bold uppercase transition-colors"
              >
                Claim on WhatsApp
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FULL PRODUCT CATALOG WITH CATEGORY TABS */}
      <section id="menu" className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#FF6B35]">
              Mouthwatering Delights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2625]">
              Explore the Sugar Rush Menu
            </h2>
            <div className="w-14 h-1 bg-[#FF6B35] mx-auto rounded-full" />
            <p className="text-stone-600 text-sm">
              Click any item to order in one tap directly via WhatsApp!
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {MODERN_BAKERY_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all border ${
                  activeCategory === category
                    ? 'bg-[#FF6B35] text-white border-[#FF6B35] shadow-md shadow-orange-500/20'
                    : 'bg-white text-[#2B2625] border-orange-200 hover:border-[#FF6B35]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-orange-100 hover:border-[#FF6B35] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-orange-50">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      fallbackTitle={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isBestseller && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FF3366] text-white text-[10px] font-black uppercase tracking-wider shadow">
                        Hot Seller
                      </span>
                    )}
                    <span 
                      className={`absolute top-3 right-3 w-5 h-5 rounded-md border bg-white flex items-center justify-center p-0.5 ${
                        product.dietary === 'veg' ? 'border-emerald-600' : 'border-red-600'
                      }`}
                      title={product.dietary === 'veg' ? '100% Pure Veg' : 'Non-Veg'}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${product.dietary === 'veg' ? 'bg-emerald-600' : 'bg-red-600'}`} />
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B35]">
                      {product.category}
                    </div>
                    <h3 className="font-extrabold text-lg text-[#2B2625] leading-snug group-hover:text-[#FF6B35] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-2 border-t border-orange-50 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-xl text-[#2B2625]">
                      ₹{product.price}
                    </div>
                    <div className="text-[10px] text-stone-500 font-bold">
                      {product.unit}
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(`Hey Sugar Rush! I want to order ${product.name} (₹${product.price} ${product.unit}). Please confirm delivery.`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF6B35] hover:bg-[#E8531D] text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE CUSTOM BIRTHDAY CAKE BUILDER */}
      <section id="cake-builder" className="py-20 bg-white border-y border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase font-black tracking-widest text-[#FF3366]">
              Design Your Celebration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B2625]">
              Interactive Custom Birthday Cake Builder
            </h2>
            <div className="w-16 h-1 bg-[#FF3366] mx-auto rounded-full" />
            <p className="text-stone-600 text-sm max-w-lg mx-auto">
              Select your favorite flavor, size, theme, and custom name message. We'll bake it fresh for your celebration!
            </p>
          </div>

          <div className="bg-[#FFFBF5] rounded-3xl p-6 sm:p-10 border-2 border-orange-200 shadow-xl">
            <form onSubmit={handleCakeBuilderSubmit} className="space-y-6">
              {builderError && (
                <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-xl text-xs font-bold">
                  {builderError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#2B2625] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-orange-200 text-[#2B2625] focus:outline-none focus:border-[#FF6B35] text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#2B2625] mb-2">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-orange-200 text-[#2B2625] focus:outline-none focus:border-[#FF6B35] text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#2B2625] mb-2">
                    Choose Flavor
                  </label>
                  <select
                    value={cakeFlavor}
                    onChange={(e) => setCakeFlavor(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-orange-200 text-[#2B2625] focus:outline-none focus:border-[#FF6B35] text-sm font-medium"
                  >
                    <option>Dutch Truffle Chocolate</option>
                    <option>Rainbow Pinata Surprise (With Hammer)</option>
                    <option>Red Velvet Cream Cheese</option>
                    <option>Lotus Biscoff Loaded</option>
                    <option>Fresh Mango Pineapple Cream</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#2B2625] mb-2">
                    Cake Size
                  </label>
                  <select
                    value={cakeWeight}
                    onChange={(e) => setCakeWeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-orange-200 text-[#2B2625] focus:outline-none focus:border-[#FF6B35] text-sm font-medium"
                  >
                    <option>500g (Small / 4-6 Friends)</option>
                    <option>1 kg (Party / 8-10 Guests)</option>
                    <option>1.5 kg (Big Party / 15 Guests)</option>
                    <option>2 kg Two-Tier Gala Cake</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#2B2625] mb-2">
                    Fun Add-ons
                  </label>
                  <select
                    value={cakeAddon}
                    onChange={(e) => setCakeAddon(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-orange-200 text-[#2B2625] focus:outline-none focus:border-[#FF6B35] text-sm font-medium"
                  >
                    <option>Rainbow Sprinkles + Choco Drip</option>
                    <option>Edible Photo on Cake</option>
                    <option>Crown & Macarons Topper</option>
                    <option>Smash Heart Chocolate Dome</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#2B2625] mb-2">
                    Delivery / Pickup Date
                  </label>
                  <input
                    type="date"
                    value={cakeDate}
                    onChange={(e) => setCakeDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-orange-200 text-[#2B2625] focus:outline-none focus:border-[#FF6B35] text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#2B2625] mb-2">
                    Message to Pipe on Cake
                  </label>
                  <input
                    type="text"
                    value={cakeMessage}
                    onChange={(e) => setCakeMessage(e.target.value)}
                    placeholder="e.g. 'Happy 21st Birthday Aryan!'"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-orange-200 text-[#2B2625] focus:outline-none focus:border-[#FF6B35] text-sm font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-stone-500 italic">
                  * Note: In this demonstration showcase, requests are captured locally with demo feedback.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF3366] text-white hover:bg-[#E8531D] text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg active:scale-95"
                >
                  Confirm & Send Custom Cake
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* BAKERY PHOTO WALL WITH LIGHTBOX */}
      <section id="gallery" className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-black tracking-widest text-[#FF6B35]">
              Happy Moments
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B2625]">
              The Sugar Rush Photo Wall
            </h2>
            <div className="w-14 h-1 bg-[#FF6B35] mx-auto rounded-full" />
            <p className="text-stone-600 text-sm">
              Click any photo to see our colorful cakes, donuts, and hot bakes up close!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODERN_BAKERY_GALLERY.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all border border-orange-100"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2625]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#FFD166]">{item.category}</span>
                  <h4 className="font-extrabold text-sm">{item.title}</h4>
                  <p className="text-xs text-stone-200 line-clamp-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEIGHBORHOOD CUSTOMER LOVE NOTES */}
      <section id="reviews" className="py-16 bg-white border-t border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          
          <div className="space-y-3">
            <span className="text-xs uppercase font-black tracking-wider text-[#FF6B35]">
              Neighborhood Love
            </span>
            <h2 className="text-3xl font-extrabold text-[#2B2625]">
              What Our Sweet-Toothed Regulars Say
            </h2>
            <div className="inline-block px-3 py-1 rounded-full text-[11px] bg-amber-500/10 text-amber-800 border border-amber-500/30">
              Illustrative Demonstration Reviews
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#FFFBF5] p-6 rounded-3xl border border-orange-100 space-y-3">
              <div className="flex gap-1 text-[#FFD166]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                "We ordered the Smash Pinata Cake for my daughter's 7th birthday party. The kids went totally wild hammering it open! Inside was packed with loaded brownies and M&Ms. Incredible!"
              </p>
              <div>
                <div className="font-bold text-[#2B2625] text-sm">Sunita Aggarwal</div>
                <div className="text-[11px] text-stone-500">Sector 18 Parent</div>
              </div>
            </div>

            <div className="bg-[#FFFBF5] p-6 rounded-3xl border border-orange-100 space-y-3">
              <div className="flex gap-1 text-[#FFD166]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                "Their 4:00 PM paneer tikka puffs are the best snacks in town. 100 flaky layers and super spicy filling. We WhatsApp our order at 3:45 PM and it's warm on our desk by 4:10 PM!"
              </p>
              <div>
                <div className="font-bold text-[#2B2625] text-sm">Karan Varma</div>
                <div className="text-[11px] text-stone-500">Tech Lead & Snack Regular</div>
              </div>
            </div>

            <div className="bg-[#FFFBF5] p-6 rounded-3xl border border-orange-100 space-y-3">
              <div className="flex gap-1 text-[#FFD166]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                "Dutch Truffle Cake was so moist and chocolatey. Much better quality and fresher than ordering off aggregator apps, and zero delivery fee when picking up via WhatsApp."
              </p>
              <div>
                <div className="font-bold text-[#2B2625] text-sm">Neha Kapoor</div>
                <div className="text-[11px] text-stone-500">Loyal Weekend Customer</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STORE LOCATION, OPENING HOURS & VISIT */}
      <section id="store" className="py-20 bg-[#2B2625] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-black tracking-widest text-[#FFD166]">
                Drop In For Warm Treats
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Fresh Treats & Hot Puffs All Day Long
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                Stop by for cupcakes, pick up your custom celebration cake, or grab hot savory snacks straight out of our 4 PM oven rush.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#FF6B35] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-base">Neighborhood Bakery & Counter</h4>
                    <p className="text-stone-300 text-sm">{config.address}, {config.area}, {config.city} – {config.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#FF6B35] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-base">Bakery Opening Hours</h4>
                    <p className="text-stone-300 text-sm">Daily: {config.hours.weekdays} | Weekends: {config.hours.weekends}</p>
                    <p className="text-stone-400 text-xs italic">{config.hours.special}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#FF6B35] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-base">WhatsApp Fast Orders</h4>
                    <p className="text-stone-300 text-sm font-bold text-[#FFD166]">{config.displayPhone}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleWhatsAppClick("Hey Sugar Rush! I want to order cakes/snacks for delivery right now.")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF6B35] text-white hover:bg-[#E8531D] text-xs font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-[#FFD166]" />
                  <span>Order Directly on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Simulated Store Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#383231] border border-stone-700 rounded-3xl p-6 sm:p-8 space-y-6 text-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-[#FF6B35] text-white flex items-center justify-center mx-auto text-2xl">
                  🍰
                </div>
                <div className="space-y-1">
                  <h3 className="font-black text-2xl text-white">
                    Noida Sector 18 Store
                  </h3>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto">
                    Free 2-hour neighborhood delivery within 5 km radius for orders above ₹300!
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#2B2625] border border-stone-700 text-xs text-stone-300 space-y-2 text-left font-medium">
                  <div className="flex justify-between border-b border-stone-700 pb-1.5">
                    <span className="text-stone-400">Fresh Donut Display:</span>
                    <span className="text-[#FFD166]">Ready by 9:30 AM</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-700 pb-1.5">
                    <span className="text-stone-400">Hot Flaky Puff Batch:</span>
                    <span className="text-[#FFD166]">4:00 PM Sharp</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Late Night Cake Pickups:</span>
                    <span className="text-[#FFD166]">Until 11:00 PM</span>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppClick("Hey Sugar Rush! Please send your shop location on Google Maps.")}
                  className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Get Shop Location on WhatsApp
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COLORFUL FOOTER */}
      <footer className="bg-[#1C1818] text-stone-400 py-12 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="font-extrabold text-lg text-white">
                Sugar Rush Bakery
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">
                Loaded celebration cakes, stuffed donuts, and hot tea-time Indian bakery snacks in Noida.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Menu Favorites</h5>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#menu" className="hover:text-white">Dutch Truffle Cake</a></li>
                <li><a href="#menu" className="hover:text-white">Pinata Smash Cake</a></li>
                <li><a href="#menu" className="hover:text-white">Paneer Tikka Puff</a></li>
                <li><a href="#cake-builder" className="hover:text-white">Custom Birthday Cake</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Customer Support</h5>
              <ul className="space-y-2 text-stone-400">
                <li><button onClick={() => handleWhatsAppClick()} className="hover:text-white">WhatsApp Direct Orders</button></li>
                <li><span>Same-Day Local Delivery</span></li>
                <li><span>100% Pure Veg Options</span></li>
                <li><span>Party Snack Box Catering</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">ForgeDCode Concept</h5>
              <p className="text-stone-400 text-xs leading-relaxed">
                Demonstration website created by ForgeDCode to show modern local bakeries how a vibrant mobile-first storefront boosts neighborhood cake orders and high-tea snack sales.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <div>
              © {new Date().getFullYear()} Sugar Rush Bakery (Demonstration Concept). All Rights Reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-500">Website Concept Built by</span>
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
        items={MODERN_BAKERY_GALLERY}
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
