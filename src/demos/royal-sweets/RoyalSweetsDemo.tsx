import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  Star,
  Gift,
  Calendar,
  Users
} from 'lucide-react';
import { 
  ROYAL_SWEETS_CATEGORIES, 
  ROYAL_SWEETS_PRODUCTS, 
  ROYAL_SWEETS_GALLERY,
  ProductItem 
} from '../../data/products';
import { DEMO_CONFIGS } from '../../data/demo-config';
import { triggerWhatsAppAction, WhatsAppEventDetail } from '../../utils/whatsapp';
import { WhatsAppModal } from '../../components/WhatsAppModal';
import { LightboxModal } from '../../components/LightboxModal';
import { EnquirySuccessModal } from '../../components/EnquirySuccessModal';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export const RoyalSweetsDemo: React.FC = () => {
  const config = DEMO_CONFIGS["royal-sweets"];
  
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Modal states
  const [whatsAppDetail, setWhatsAppDetail] = useState<WhatsAppEventDetail | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [enquirySuccessData, setEnquirySuccessData] = useState<any | null>(null);

  // Bulk Enquiry Form state
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEventType, setFormEventType] = useState("Royal Wedding");
  const [formQuantity, setFormQuantity] = useState("50 - 100 Boxes");
  const [formDate, setFormDate] = useState("");
  const [formNotes, setFormNotes] = useState("");
  const [formError, setFormError] = useState("");

  const filteredProducts = activeCategory === "All"
    ? ROYAL_SWEETS_PRODUCTS
    : ROYAL_SWEETS_PRODUCTS.filter(p => p.category === activeCategory);

  const handleWhatsAppClick = (customMsg?: string) => {
    triggerWhatsAppAction(config.whatsapp, customMsg, (detail) => {
      setWhatsAppDetail(detail);
    });
  };

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) {
      setFormError("Please enter your name and phone number to request a quote.");
      return;
    }
    setFormError("");
    setEnquirySuccessData({
      name: formName,
      phone: formPhone,
      eventType: formEventType,
      quantity: formQuantity,
      date: formDate,
      notes: formNotes
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#281712] font-sans selection:bg-[#C59B27] selection:text-white">
      {/* Top Royal Announcement Ribbon */}
      <div className="bg-[#58111A] text-[#E5C158] text-xs py-2 px-4 text-center border-b border-[#C59B27]/40 flex items-center justify-center gap-2 font-medium">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Complimentary Imperial Velvet Box Packaging on Festive Orders Above ₹2,500 | 100% Pure Desi Ghee</span>
      </div>

      {/* Royal Navigation */}
      <nav className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#C59B27]/30 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Logo & Royal Crest */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#58111A] border-2 border-[#C59B27] flex items-center justify-center shadow-md text-[#E5C158] font-serif font-bold text-lg">
              👑
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#58111A]">
                Maharaja Mithai
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#C59B27]">
                Heritage Confectioners • Estd 1942
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#58111A]/90">
            <a href="#sweets" className="hover:text-[#C59B27] transition-colors">Our Sweets</a>
            <a href="#heritage" className="hover:text-[#C59B27] transition-colors">Heritage Craft</a>
            <a href="#gift-boxes" className="hover:text-[#C59B27] transition-colors">Festive Boxes</a>
            <a href="#weddings" className="hover:text-[#C59B27] transition-colors">Wedding & Bulk</a>
            <a href="#gallery" className="hover:text-[#C59B27] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#C59B27] transition-colors">Store & Visit</a>
          </div>

          {/* Right Action: Order on WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleWhatsAppClick("Namaste Maharaja Mithai! I would like to explore your sweet collection and place an order.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#58111A] text-[#FFFDF9] hover:bg-[#7A1C27] text-xs font-semibold uppercase tracking-wider transition-all shadow-md border border-[#C59B27]/60 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#E5C158]" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#58111A] hover:bg-[#F5EFE6] rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDF9] border-b border-[#C59B27]/30 px-6 py-5 space-y-4 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3 font-serif font-semibold text-base text-[#58111A]">
              <a href="#sweets" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27] py-1">Our Sweets</a>
              <a href="#heritage" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27] py-1">Heritage Craft</a>
              <a href="#gift-boxes" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27] py-1">Festive Boxes</a>
              <a href="#weddings" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27] py-1">Wedding & Bulk Orders</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27] py-1">Gallery</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27] py-1">Store Details</a>
            </div>
            <div className="pt-3 border-t border-[#C59B27]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#58111A] text-[#FFFDF9] text-sm font-semibold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-[#E5C158]" />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#FFFDF9]">
        {/* Subtle Decorative Arch / Background Motifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#58111A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Royal Narrative & CTAs */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#58111A]/10 border border-[#C59B27]/40 text-[#58111A] text-xs font-serif font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                Generations of Royal Halwais • Pure Desi Ghee
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#58111A] leading-[1.15] tracking-tight">
                A Tradition of <span className="italic font-normal text-[#C59B27] underline decoration-[#C59B27]/30">Sweetness.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#281712]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Slow-simmered in pure clarified butter, flavored with handpicked Kashmiri saffron, and prepared with generational precision. Taste the authentic royalty of India’s finest mithais.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#sweets"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#58111A] text-[#FFFDF9] hover:bg-[#7A1C27] text-sm font-semibold uppercase tracking-wider transition-all shadow-lg shadow-[#58111A]/20 active:scale-95 border border-[#C59B27]"
                >
                  <span>Explore Our Sweets</span>
                  <ChevronRight className="w-4 h-4 text-[#E5C158]" />
                </a>

                <button
                  onClick={() => handleWhatsAppClick("Namaste Maharaja Mithai! I would like to order fresh sweets on WhatsApp.")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FFFDF9] text-[#58111A] hover:bg-[#F5EFE6] text-sm font-semibold uppercase tracking-wider transition-all border-2 border-[#58111A]/30 shadow-md active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-[#C59B27]" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>

              {/* Badges / Trust Markers */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#C59B27]/30 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="font-serif text-2xl font-bold text-[#58111A]">100%</div>
                  <div className="text-xs text-[#281712]/70 font-medium">Pure Desi Ghee</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-serif text-2xl font-bold text-[#58111A]">85+</div>
                  <div className="text-xs text-[#281712]/70 font-medium">Years of Legacy</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-serif text-2xl font-bold text-[#58111A]">24K</div>
                  <div className="text-xs text-[#281712]/70 font-medium">Pure Edible Vark</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Frame with Gold Inset */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Gold Frame Border */}
                <div className="absolute -inset-3 rounded-2xl border-2 border-[#C59B27]/50 transform rotate-1 pointer-events-none" />
                <div className="absolute -inset-1 rounded-2xl border border-[#58111A]/20 pointer-events-none" />

                {/* Main Hero Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#58111A] aspect-[4/5]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?w=900&auto=format&fit=crop&q=85"
                    alt="Authentic Indian Mithai arranged in a regal brass thali"
                    fallbackTitle="Maharaja Mithai Royal Selection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#58111A]/80 via-transparent to-transparent" />
                  
                  {/* Floating Hero Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C59B27]/50 shadow-xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#C59B27]">Royal Signature Box</span>
                      <h4 className="font-serif font-bold text-[#58111A] text-base">Imperial Saffron Kaju Katli</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#58111A] text-[#E5C158] font-serif font-bold text-sm">
                      ₹1,150 / kg
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HERITAGE & CRAFTSMANSHIP STORY */}
      <section id="heritage" className="py-20 bg-[#58111A] text-[#FFFDF9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E5C158]">
              Royal Indian Craftsmanship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              The Sacred Art of Traditional Halwais
            </h2>
            <div className="w-20 h-1 bg-[#C59B27] mx-auto rounded-full" />
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed pt-2">
              For over eight decades, Maharaja Mithai House has guarded time-honored recipes passed down through three generations of master confectioners in Rajasthan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#420D13] p-8 rounded-2xl border border-[#C59B27]/30 text-center space-y-4 hover:border-[#E5C158] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#58111A] text-[#E5C158] border border-[#C59B27] flex items-center justify-center mx-auto text-2xl font-serif">
                🧈
              </div>
              <h3 className="font-serif text-xl font-bold text-[#E5C158]">Pure Bilona Desi Ghee</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We churn clarified butter made from grass-fed cattle using traditional wooden churners. No adulteration, artificial aromas, or vegetable oils ever enter our kitchen.
              </p>
            </div>

            <div className="bg-[#420D13] p-8 rounded-2xl border border-[#C59B27]/30 text-center space-y-4 hover:border-[#E5C158] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#58111A] text-[#E5C158] border border-[#C59B27] flex items-center justify-center mx-auto text-2xl font-serif">
                🌸
              </div>
              <h3 className="font-serif text-xl font-bold text-[#E5C158]">Kashmiri Pampore Saffron</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Directly sourced from the saffron fields of Pampore, our sweets are infused with natural Mogra grade saffron strands that give authentic aroma and regal color.
              </p>
            </div>

            <div className="bg-[#420D13] p-8 rounded-2xl border border-[#C59B27]/30 text-center space-y-4 hover:border-[#E5C158] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#58111A] text-[#E5C158] border border-[#C59B27] flex items-center justify-center mx-auto text-2xl font-serif">
                ⚖️
              </div>
              <h3 className="font-serif text-xl font-bold text-[#E5C158]">Certified Pure Silver Vark</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Every sheet of silver foil used on our Kaju Katlis is 100% vegetarian, machine-crafted, and certified for food safety with zero chemical impurities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLER SWEETS SHOWCASE WITH CATEGORY FILTERS */}
      <section id="sweets" className="py-20 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C59B27]">
              Freshly Handcrafted Daily
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#58111A]">
              Our Signature Sweet Catalog
            </h2>
            <div className="w-16 h-0.5 bg-[#C59B27] mx-auto" />
            <p className="text-stone-600 text-sm">
              Filter by your favorite delicacy and order directly via WhatsApp for same-day dispatch.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {ROYAL_SWEETS_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                  activeCategory === category
                    ? 'bg-[#58111A] text-[#FFFDF9] border-[#58111A] shadow-md'
                    : 'bg-[#F5EFE6] text-[#58111A] border-[#C59B27]/30 hover:border-[#58111A]'
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
                className="group bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#C59B27]/30 hover:border-[#58111A] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      fallbackTitle={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isBestseller && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#58111A] text-[#E5C158] text-[10px] font-bold uppercase tracking-wider shadow">
                        Bestseller
                      </span>
                    )}
                    <span className="absolute top-3 right-3 w-5 h-5 rounded-md border border-emerald-600 bg-white flex items-center justify-center p-0.5" title="100% Pure Vegetarian">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C59B27]">
                      {product.category}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#58111A] leading-snug group-hover:text-[#7A1C27] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 pt-0 mt-3 border-t border-[#C59B27]/20 flex items-center justify-between">
                  <div>
                    <div className="font-serif font-bold text-lg text-[#58111A]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-stone-500 font-medium">
                      {product.unit}
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(`Namaste! I would like to order ${product.name} (₹${product.price} ${product.unit}). Please confirm availability.`)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#58111A] hover:bg-[#7A1C27] text-[#FFFDF9] text-xs font-semibold transition-all shadow active:scale-95"
                    title="Order on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FESTIVE GIFT BOXES & VELVET HAMPERS */}
      <section id="gift-boxes" className="py-20 bg-[#F5EFE6] border-y border-[#C59B27]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C59B27]">
                Exclusive Festive & Corporate Collections
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#58111A] leading-tight">
                Regal Packaging Fit for Kings & Festive Celebrations
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Whether celebrating Diwali, Raksha Bandhan, or wedding felicitations, our bespoke velvet and carved wooden mithai boxes make an unforgettable impression on your esteemed guests.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#58111A] text-[#E5C158] flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</div>
                  <span className="text-sm text-stone-800 font-medium">Gold foil customized band with company logo or bride & groom initials.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#58111A] text-[#E5C158] flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</div>
                  <span className="text-sm text-stone-800 font-medium">Airtight nitrogen flush sealing ensuring 21 days of fresh shelf life.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#58111A] text-[#E5C158] flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</div>
                  <span className="text-sm text-stone-800 font-medium">Pan-India express delivery with temperature-regulated packaging.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleWhatsAppClick("Namaste Maharaja Mithai! I want to request the Festive Gift Box catalog and pricing.")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#58111A] text-[#FFFDF9] hover:bg-[#7A1C27] text-xs font-semibold uppercase tracking-wider shadow-lg border border-[#C59B27]"
                >
                  <Gift className="w-4 h-4 text-[#E5C158]" />
                  <span>Request Festive Catalog on WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/40 aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80"
                  alt="Festive Mithai Gift Hamper in Imperial Velvet Box"
                  fallbackTitle="Imperial Velvet Gift Box"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WEDDING & BULK ORDERS INTERACTIVE INQUIRY FORM */}
      <section id="weddings" className="py-20 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C59B27]">
              Destination Weddings & Corporate Gifting
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#58111A]">
              Book Royal Wedding Sweets & Bulk Orders
            </h2>
            <div className="w-16 h-0.5 bg-[#C59B27] mx-auto" />
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Plan your celebration with custom tasting boxes, bespoke packaging, and priority delivery schedules.
            </p>
          </div>

          <div className="bg-[#FAF3E8] border border-[#C59B27]/40 rounded-3xl p-6 sm:p-10 shadow-lg">
            <form onSubmit={handleBulkSubmit} className="space-y-6">
              {formError && (
                <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-xl text-xs font-medium">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#58111A] mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Maharani Gayatri Devi"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#C59B27]/40 text-stone-900 focus:outline-none focus:border-[#58111A] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#58111A] mb-2">
                    Contact Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#C59B27]/40 text-stone-900 focus:outline-none focus:border-[#58111A] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#58111A] mb-2">
                    Occasion Type
                  </label>
                  <select
                    value={formEventType}
                    onChange={(e) => setFormEventType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#C59B27]/40 text-stone-900 focus:outline-none focus:border-[#58111A] text-sm"
                  >
                    <option>Royal Wedding</option>
                    <option>Corporate Diwali Hamper</option>
                    <option>Engagement / Roka Ceremony</option>
                    <option>Anniversary Celebration</option>
                    <option>Family Festive Bulk Order</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#58111A] mb-2">
                    Estimated Quantity
                  </label>
                  <select
                    value={formQuantity}
                    onChange={(e) => setFormQuantity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#C59B27]/40 text-stone-900 focus:outline-none focus:border-[#58111A] text-sm"
                  >
                    <option>25 - 50 Boxes</option>
                    <option>50 - 100 Boxes</option>
                    <option>100 - 300 Boxes</option>
                    <option>300 - 500+ Boxes</option>
                    <option>50+ kg Loose Mithai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#58111A] mb-2">
                    Occasion Date
                  </label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#C59B27]/40 text-stone-900 focus:outline-none focus:border-[#58111A] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#58111A] mb-2">
                  Special Customization Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="e.g. Saffron Kaju Katli + Mysore Pak combination, monogram initials on box, delivery in Jaipur..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#C59B27]/40 text-stone-900 focus:outline-none focus:border-[#58111A] text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-stone-500 italic">
                  * Note: In this demonstration, submission captures your request locally with demo feedback.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#58111A] text-[#FFFDF9] hover:bg-[#7A1C27] text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  Submit Bulk Order Inquiry
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* CURATED SWEET BOX GALLERY WITH LIGHTBOX */}
      <section id="gallery" className="py-20 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C59B27]">
              Visual Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#58111A]">
              Craftsmanship & Kitchen Moments
            </h2>
            <div className="w-16 h-0.5 bg-[#C59B27] mx-auto" />
            <p className="text-stone-600 text-sm">
              Click any photograph to view our kitchen craftsmanship in high resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROYAL_SWEETS_GALLERY.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all border border-[#C59B27]/30"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E5C158]">{item.category}</span>
                  <h4 className="font-serif font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-stone-300 line-clamp-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS (CLEARLY MARKED DEMO CONTENT) */}
      <section className="py-20 bg-[#FFFDF9] border-t border-[#C59B27]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C59B27]">
              Patron Words
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#58111A]">
              Celebrated by Connoisseurs Across Generations
            </h2>
            <div className="inline-block px-3 py-1 rounded-full text-[11px] bg-amber-500/10 text-amber-700 border border-amber-500/30">
              Illustrative Demonstration Testimonials
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#FAF3E8] p-6 rounded-2xl border border-[#C59B27]/30 space-y-4">
              <div className="flex gap-1 text-[#C59B27]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-sm italic leading-relaxed">
                "The Kaju Katli literally melts the moment you put it in your mouth. You can distinctly taste the pure ghee and authentic cardamom. We ordered 250 boxes for our daughter's Udaipur wedding, and guests are still asking where they came from!"
              </p>
              <div>
                <div className="font-serif font-bold text-[#58111A]">Vikramaditya Singhania</div>
                <div className="text-xs text-stone-500">Destination Wedding Host, Jaipur</div>
              </div>
            </div>

            <div className="bg-[#FAF3E8] p-6 rounded-2xl border border-[#C59B27]/30 space-y-4">
              <div className="flex gap-1 text-[#C59B27]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-sm italic leading-relaxed">
                "As a heritage architect, I admire institutions that refuse to cut corners. Their Mysore Pak has that quintessential honeycomb crumb that true South Indian recipes demand. Exceptional quality."
              </p>
              <div>
                <div className="font-serif font-bold text-[#58111A]">Ananya Deshmukh</div>
                <div className="text-xs text-stone-500">Heritage Preservationist & Loyal Patron</div>
              </div>
            </div>

            <div className="bg-[#FAF3E8] p-6 rounded-2xl border border-[#C59B27]/30 space-y-4">
              <div className="flex gap-1 text-[#C59B27]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-sm italic leading-relaxed">
                "We switched our corporate Diwali gifting to Maharaja Mithai House's Nizam Velvet Hampers last year. The client feedback was overwhelmingly positive. Seamless coordination via WhatsApp."
              </p>
              <div>
                <div className="font-serif font-bold text-[#58111A]">Rajeshwar Rao</div>
                <div className="text-xs text-stone-500">Managing Director, Heritage Capital</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SHOP LOCATION, OPENING HOURS & CONTACT */}
      <section id="contact" className="py-20 bg-[#281712] text-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E5C158]">
                Visit Our Heritage Shop
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Experience the Aromas of Fresh Ghee & Cardamom
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Step into our flagship haveli sweet shop in Jaipur to sample hot mawa sweets fresh from our morning cauldrons.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#E5C158] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Flagship Haveli Store</h4>
                    <p className="text-stone-300 text-sm">{config.address}, {config.area}, {config.city} – {config.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#E5C158] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Store Timings</h4>
                    <p className="text-stone-300 text-sm">Everyday: {config.hours.weekdays}</p>
                    <p className="text-stone-400 text-xs italic">{config.hours.special}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#E5C158] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Direct Line & WhatsApp</h4>
                    <p className="text-stone-300 text-sm">{config.displayPhone}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleWhatsAppClick("Namaste! I would like directions or want to place an order before visiting your store.")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E5C158] text-[#58111A] hover:bg-[#C59B27] hover:text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect with Us on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Visual Storefront Card / Simulated Map */}
            <div className="lg:col-span-6">
              <div className="bg-[#3A0B11] border-2 border-[#C59B27]/40 rounded-3xl p-6 sm:p-8 space-y-6 text-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-[#58111A] text-[#E5C158] border border-[#C59B27] flex items-center justify-center mx-auto text-2xl">
                  📍
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-[#E5C158]">
                    Jaipur Flagship Counter
                  </h3>
                  <p className="text-xs text-stone-300 max-w-sm mx-auto">
                    Convenient parking available. Live sweet tasting counters open daily from 9:00 AM onwards.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#58111A]/60 border border-[#C59B27]/30 text-xs text-stone-300 space-y-2 text-left">
                  <div className="flex justify-between border-b border-[#C59B27]/20 pb-1.5">
                    <span className="text-stone-400">Fresh Gulab Jamun Batch:</span>
                    <span className="font-semibold text-[#E5C158]">11:00 AM & 5:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-[#C59B27]/20 pb-1.5">
                    <span className="text-stone-400">Warm Motichoor Laddu:</span>
                    <span className="font-semibold text-[#E5C158]">9:00 AM Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Festive Gift Counter:</span>
                    <span className="font-semibold text-[#E5C158]">Open Till 10:30 PM</span>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppClick("Namaste! Please share your Google Maps location for the Jaipur shop.")}
                  className="w-full py-3 rounded-xl bg-[#58111A] hover:bg-[#7A1C27] text-white border border-[#C59B27] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Send Location on WhatsApp
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ROYAL FOOTER WITH SUBTLE FORGEDCODE ATTRIBUTION */}
      <footer className="bg-[#1C0F0A] text-stone-400 py-12 border-t border-[#C59B27]/30 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="font-serif text-lg font-bold text-[#E5C158]">
                Maharaja Mithai House
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">
                Authentic Indian sweets crafted with pure desi ghee and heritage craftsmanship since 1942.
              </p>
            </div>

            <div>
              <h5 className="font-serif font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Quick Navigation</h5>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#sweets" className="hover:text-[#E5C158]">Our Sweet Catalog</a></li>
                <li><a href="#heritage" className="hover:text-[#E5C158]">Our Heritage Story</a></li>
                <li><a href="#gift-boxes" className="hover:text-[#E5C158]">Festive Hampers</a></li>
                <li><a href="#weddings" className="hover:text-[#E5C158]">Wedding Inquiries</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Ordering & Support</h5>
              <ul className="space-y-2 text-stone-400">
                <li><button onClick={() => handleWhatsAppClick()} className="hover:text-[#E5C158]">WhatsApp Direct Connect</button></li>
                <li><span>Same-Day City Delivery</span></li>
                <li><span>Temperature-Safe Packaging</span></li>
                <li><span>FSSAI Certified Pure</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-serif font-bold text-white mb-3 uppercase tracking-wider text-[11px]">ForgeDCode Concept</h5>
              <p className="text-stone-400 text-xs leading-relaxed">
                This bespoke design concept was crafted by ForgeDCode to demonstrate high-converting digital storefronts for Indian sweet houses.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <div>
              © {new Date().getFullYear()} Maharaja Mithai House (Fictional Showcase Concept). All Rights Reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-500">Website Concept Crafted by</span>
              <a href="/" className="text-sky-400 font-semibold hover:underline">ForgeDCode</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <WhatsAppModal
        detail={whatsAppDetail}
        onClose={() => setWhatsAppDetail(null)}
      />

      <LightboxModal
        items={ROYAL_SWEETS_GALLERY}
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
