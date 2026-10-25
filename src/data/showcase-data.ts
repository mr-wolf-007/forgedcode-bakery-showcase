/**
 * Showcase Metadata for the ForgeDCode Agency Portfolio Landing Page
 * 10 Distinct Client-Ready Website Concepts
 */

export type FilterCategory = 'All' | 'Traditional Sweets' | 'Bakery' | 'Cakes' | 'Luxury' | 'Café' | 'Online Store';

export interface ShowcaseConcept {
  id: string;
  name: string;
  subtitle: string;
  targetBusiness: string;
  designStyle: string;
  route: string;
  filterCategory: FilterCategory[];
  previewImage: string;
  palette: {
    name: string;
    hex: string;
  }[];
  tags: string[];
  features: string[];
  headline: string;
  description: string;
  idealFor: string;
  avgConversionFocus: string;
}

export const SHOWCASE_CONCEPTS: ShowcaseConcept[] = [
  {
    id: "maharaja",
    name: "Maharaja Mithai House",
    subtitle: "Royal Indian Heritage Editorial Commerce",
    targetBusiness: "Traditional Halwais, Heritage Mithai Houses & Festive Gift Manufacturers",
    designStyle: "Regal Heritage Editorial • Deep Burgundy, Ivory & Muted Gold",
    route: "/demos/maharaja",
    filterCategory: ["Traditional Sweets", "Luxury"],
    previewImage: "https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Royal Maroon", hex: "#58111A" },
      { name: "Muted Gold", hex: "#C59B27" },
      { name: "Warm Ivory", hex: "#FFFDF9" },
      { name: "Dark Walnut", hex: "#281712" }
    ],
    tags: ["Indian Heritage", "Festive Hampers", "Pure Desi Ghee", "Wedding Sweets"],
    features: [
      "Vintage Ledger Wedding & Bulk Mithai Order Requisition",
      "Asymmetrical 70/30 Editorial Brass Thali Hero Composition",
      "Numbered Editorial Catalogue with Staggered Delicacies",
      "85-Year Haveli Heritage Chronicle & Halwai Archive"
    ],
    headline: "A Tradition of Pure Sweetness",
    description: "Designed for prestigious Indian sweets houses reflecting generational authenticity, royal saffron craftsmanship, and high-ticket wedding trousseau gifting.",
    idealFor: "Heritage sweet shops, destination wedding caterers, and luxury Diwali gift vendors.",
    avgConversionFocus: "Bulk wedding orders, velvet gift caskets & corporate hampers."
  },
  {
    id: "crumb",
    name: "Crumb & Co.",
    subtitle: "Minimalist Artisan Bakery & Hearth Journal",
    targetBusiness: "Sourdough Bakeries, Specialty Cafés & Viennoiserie Studios",
    designStyle: "European Editorial • Warm Cream, White, Sage Green & Charcoal",
    route: "/demos/crumb",
    filterCategory: ["Bakery"],
    previewImage: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Warm Cream", hex: "#FAF7F2" },
      { name: "Sage Green", hex: "#526E48" },
      { name: "Terracotta", hex: "#C86D51" },
      { name: "Coffee Charcoal", hex: "#262220" }
    ],
    tags: ["Wild Yeast Sourdough", "48hr Ferment", "Clean Editorial", "Daylight Aesthetics"],
    features: [
      "Split-Screen Hero with Live Oven Pull Timestamp & Hydration Metrics",
      "European Bakery Tabular Chalkboard Menu with Sticky Inspector",
      "48-Hour Fermentation Cycle Horizontal Timeline",
      "Advance Morning Loaf Reserve Form & Kneading Table Journal"
    ],
    headline: "Slow Bread. Stone Hearth. Wild Yeast.",
    description: "Tailored for slow-fermented sourdough bakers and specialty café owners who prize wholesome organic grains, clean typography, and morning neighborhood walk-ins.",
    idealFor: "Artisanal hearth bakers, third-wave café owners, and sourdough specialists.",
    avgConversionFocus: "Morning bread reservations & weekend fresh bake reserves."
  },
  {
    id: "sugar-rush",
    name: "Sugar Rush Bakery",
    subtitle: "Playful Maximalist Retail & Fast Order Counter",
    targetBusiness: "Neighborhood Cake Shops, Donut Bars & Tea-Time Snack Bakeries",
    designStyle: "Joyful Neo-Brutalist • Poppy Orange, Berry Pink & Butter Yellow",
    route: "/demos/sugar-rush",
    filterCategory: ["Cakes", "Bakery"],
    previewImage: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Poppy Orange", hex: "#FF6B35" },
      { name: "Berry Pink", hex: "#FF3366" },
      { name: "Butter Yellow", hex: "#FFD166" },
      { name: "Sweet Cream", hex: "#FFFBF5" }
    ],
    tags: ["Mobile First", "Custom Birthday Cakes", "Hot Puffs", "Fun & Bouncy"],
    features: [
      "Flash Marquee Candy Ticker with High-Contrast Direct CTA",
      "Asymmetrical Crazy-Grid Bestsellers with Mixed Tile Proportions",
      "4-Step Live Interactive Birthday Cake Builder with Real-Time Pricing",
      "4:00 PM Hot Savory Indian Bakery Snack Drop & Polaroid Community Wall"
    ],
    headline: "Crazy Good Treats. Hot Bakes.",
    description: "Perfect for bustling neighborhood cake shops and Indian bakeries thriving on high-volume birthday cake orders, student crowds, and tea-time snack regulars.",
    idealFor: "Family cake shops, cupcake & donut kiosks, and local Indian bakeries.",
    avgConversionFocus: "Instant birthday cake orders, hot afternoon puffs & quick walk-ins."
  },
  {
    id: "maison",
    name: "Maison Éclair",
    subtitle: "Cinematic Haute Patisserie & Salon de Thé",
    targetBusiness: "High-End Dessert Lounges, French Patisseries & VIP Event Caterers",
    designStyle: "Haute Noir • Black Espresso, Champagne Gold & 24k Gold Accents",
    route: "/demos/maison",
    filterCategory: ["Luxury"],
    previewImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Noir Basalt", hex: "#0D0D0F" },
      { name: "Champagne Gold", hex: "#E2B472" },
      { name: "Dark Cacao", hex: "#221A17" },
      { name: "Silk Ivory", hex: "#FDFCF9" }
    ],
    tags: ["Haute Pâtisserie", "Valrhona Terroirs", "Cinematic Dark", "VIP Gifting"],
    features: [
      "Floating Frosted Glass Masthead with Salon Coordinates & City Indicator",
      "Full-Bleed 100vh Chiaroscuro Hero with Architectural Pastry Breakdown",
      "Oversized Alternating Full-Width & Split Signature Haute Spreads",
      "Bespoke 12-Seat Tasting Salon & Private Event Concierge Form"
    ],
    headline: "L'Architectonique du Goût.",
    description: "Crafted for luxury pastry chefs and French confectionery boutiques selling premium-ticket entremets, macaron velvet coffrets, and bespoke VIP dessert tables.",
    idealFor: "Celebrity cake designers, fine-dining dessert lounges, and luxury chocolatiers.",
    avgConversionFocus: "High-ticket gateaux pre-orders & luxury brand corporate gifting."
  },
  {
    id: "chennai-sweet-corner",
    name: "Chennai Sweet Corner",
    subtitle: "Practical Conversion-Focused Local Sweet Shop",
    targetBusiness: "Neighborhood Sweets Marts, South Indian Halwais & Savoury Retailers",
    designStyle: "Vibrant Neighborhood Retail • Warm Yellow, Vermilion Red & Cream",
    route: "/demos/chennai-sweet-corner",
    filterCategory: ["Traditional Sweets"],
    previewImage: "https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Temple Red", hex: "#991B1B" },
      { name: "Warm Saffron", hex: "#F59E0B" },
      { name: "Sweet Cream", hex: "#FFFDF0" },
      { name: "Dark Tamarind", hex: "#3E2723" }
    ],
    tags: ["Pure Cow Ghee", "Tirunelveli Halwa", "Kai Murukku", "Fast Counter Order"],
    features: [
      "Compact Storefront Header with Phone, Branch Hours & Quick Search",
      "Horizontal Category Rail & Weight Selector (250g / 500g / 1kg)",
      "Interactive Order Bag with Immediate Counter WhatsApp Dispatch",
      "Store Locator for T. Nagar & Mylapore with Landmark Details"
    ],
    headline: "Fresh Mysore Pak & Tirunelveli Wheat Halwa Daily",
    description: "Built for busy South Indian sweets marts that need lightning-fast product discovery, clear pricing by weight, and zero-friction WhatsApp ordering.",
    idealFor: "Local Indian sweet counters, savoury marts, and temple street sweet shops.",
    avgConversionFocus: "Direct counter WhatsApp orders, evening snack takeaways & seer plates."
  },
  {
    id: "cake-atelier",
    name: "The Cake Atelier",
    subtitle: "Bespoke Cake Studio & Fine Art Visual Portfolio",
    targetBusiness: "Custom Wedding Cake Artists, Sugarcraft Studios & Boutique Bakers",
    designStyle: "Artistic Elegance • Soft Blush Pink, Ivory, Lavender & Charcoal",
    route: "/demos/cake-atelier",
    filterCategory: ["Cakes", "Luxury"],
    previewImage: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Blush Pink", hex: "#FDF2F4" },
      { name: "Lavender Mist", hex: "#F3E8FF" },
      { name: "Warm Ivory", hex: "#FFFDFB" },
      { name: "Studio Charcoal", hex: "#1F2937" }
    ],
    tags: ["Tiered Wedding Cakes", "Sugar Flowers", "Bespoke Commissions", "Artisan Portfolio"],
    features: [
      "Large Gallery-Led Hero Highlighting Bespoke Tiered Showpiece Cakes",
      "Asymmetric Editorial Cake Portfolio with Servings & Flavor Profiles",
      "Interactive Cake Customization Journey with Occasion & Style Selector",
      "4-Step Sculptural Commission Protocol (From Sketch to Chilled Transit)"
    ],
    headline: "Cakes Crafted as Edible Fine Art.",
    description: "Tailored for cake artists and fine sugarcrafters where clients buy bespoke visual centerpieces rather than off-the-shelf bakery goods.",
    idealFor: "Wedding cake designers, bespoke celebration artists, and high-end sugarcrafters.",
    avgConversionFocus: "High-ticket wedding inquiries, milestone consultations & tasting flights."
  },
  {
    id: "oven-hearth",
    name: "Oven & Hearth",
    subtitle: "Rustic Nostalgic Neighborhood Brick-Oven Bakery",
    targetBusiness: "Wood-Fired Bakeries, Community Hearth Breads & Chai Snack Spots",
    designStyle: "Rustic Storybook • Warm Cream, Terracotta, Olive & Dark Brown",
    route: "/demos/oven-hearth",
    filterCategory: ["Bakery"],
    previewImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Terracotta Clay", hex: "#C2593F" },
      { name: "Dark Hearth", hex: "#2E1F1A" },
      { name: "Muted Olive", hex: "#606C38" },
      { name: "Warm Flour", hex: "#FDFBF7" }
    ],
    tags: ["Wood-Fired Oven", "48hr Fermentation", "Chai Rusks", "Nankhatai"],
    features: [
      "Vintage Storybook Masthead & Welcoming Letter from the Head Baker",
      "Alternating Heritage Chapters on Reclaimed 1964 Firebrick Kiln",
      "Traditional Menu for Hearth Boules, Flaky Masala Puffs & Nankhatai",
      "Counter Loaf Hold Reservation Form with Morning & Afternoon Slots"
    ],
    headline: "A Warm Hearth, Honest Dough, and Golden Crusts.",
    description: "Designed for nostalgic community bakeries with deep heritage roots, wood-fired hearths, and warm afternoon puff rituals.",
    idealFor: "Traditional bread bakers, Irani-style bakeries, and rustic country hearths.",
    avgConversionFocus: "Advance daily loaf reservations & walk-in morning customer visits."
  },
  {
    id: "cocoa-craft",
    name: "Cocoa Craft",
    subtitle: "Product-First Chocolate Store & E-Commerce Prototype",
    targetBusiness: "Bean-to-Bar Chocolatiers, Artisan Truffle Makers & D2C Brands",
    designStyle: "Artisan Commerce • Cocoa Brown, Caramel, Cream & Copper",
    route: "/demos/cocoa-craft",
    filterCategory: ["Online Store", "Luxury"],
    previewImage: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Cocoa Noir", hex: "#271810" },
      { name: "Warm Caramel", hex: "#C68B59" },
      { name: "Toasted Copper", hex: "#B85D38" },
      { name: "Silk Cream", hex: "#FAF5EE" }
    ],
    tags: ["Bean to Bar", "Single Estate", "Working Cart", "Demo Checkout"],
    features: [
      "Comprehensive Chocolate Catalogue with Cacao % & Origin Filtering",
      "Product Detail Modal with Detailed Sensory Notes & Sourcing Terroirs",
      "Full Working Client-Side Cart Drawer with Quantity & Shipping Thresholds",
      "Simulated Demo E-Commerce Checkout with Order Reference Dispatch"
    ],
    headline: "Single-Estate Cacao, Stoneground Micro-Batches.",
    description: "The complete e-commerce experience for bean-to-bar chocolatiers who need working cart interactions, shipping thresholds, and product filtering.",
    idealFor: "Artisan chocolate makers, craft confectionery brands, and D2C food startups.",
    avgConversionFocus: "Online chocolate purchases, curated gift boxes & tasting flights."
  },
  {
    id: "mithai-moments",
    name: "Mithai & Moments",
    subtitle: "Seasonal Indian Sweets & Gifting Campaigns",
    targetBusiness: "Festive Gifting Specialists, Corporate Hamper Vendors & Sweet Curators",
    designStyle: "Festive Splendor • Celebratory Orange, Gold, Red & Warm Cream",
    route: "/demos/mithai-moments",
    filterCategory: ["Traditional Sweets", "Online Store"],
    previewImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Festive Orange", hex: "#EA580C" },
      { name: "Imperial Red", hex: "#B91C1C" },
      { name: "Celebration Gold", hex: "#D97706" },
      { name: "Warm Cream", hex: "#FFFDF7" }
    ],
    tags: ["Diwali Hampers", "Gift Finder", "Corporate Bulk", "Custom Branding"],
    features: [
      "Festive Campaign-Led Hero with Gold-Embossed Keepsake Casket Showcases",
      "Interactive Gift-Finder Engine (Occasion, Recipient & Per-Box Budget)",
      "Curated Festive Caskets with Inclusions & Keepsake Velvet Trunks",
      "Corporate Bulk Order Tier Calculator & Multi-City Address Dispatch Form"
    ],
    headline: "Gifts of Pure Sweetness, Wrapped in Festive Splendor.",
    description: "Engineered specifically for seasonal festive campaigns (Diwali, Rakhi, New Year, Weddings) where customers buy curated gift boxes and corporate hampers.",
    idealFor: "Confectionery gifting startups, corporate gift agencies, and wedding favor makers.",
    avgConversionFocus: "Bulk corporate hamper contracts & festive family gift box pre-orders."
  },
  {
    id: "butter-bloom",
    name: "Butter & Bloom Café",
    subtitle: "Contemporary Bakery Café & Lifestyle Roastery",
    targetBusiness: "Daylight Cafés, Coffee Roasteries, Brunch Spots & Pastry Bars",
    designStyle: "Daylight Lifestyle • Butter Yellow, Soft Cream, Sage Green & Coffee",
    route: "/demos/butter-bloom",
    filterCategory: ["Café", "Bakery"],
    previewImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80",
    palette: [
      { name: "Butter Yellow", hex: "#FEF08A" },
      { name: "Coffee Roast", hex: "#2B1810" },
      { name: "Veranda Sage", hex: "#606C38" },
      { name: "Daylight Cream", hex: "#FFFDF8" }
    ],
    tags: ["Specialty Coffee", "Coffee Pairings", "Daylight Brunch", "Pet Friendly"],
    features: [
      "Lifestyle Editorial Hero Highlighting Sunlit Atmosphere & Specialty Coffee",
      "Interactive Coffee & Pastry Pairings with Barista Cupping Notes",
      "Full Daylight Menu Organized by Brews, Viennoiserie, Brunch & Sweets",
      "Location Showcase with Pet-Friendly Garden Veranda Table Reservation"
    ],
    headline: "Morning Sunlight, Specialty Coffee, and Warm Flaky Layers.",
    description: "Built for contemporary urban cafés focused on coffee culture, artisanal croissants, weekend brunch crowds, and relaxed neighborhood lifestyle branding.",
    idealFor: "Third-wave specialty coffee shops, European-style bakery cafés, and brunch spots.",
    avgConversionFocus: "Veranda table reservations, café walk-ins & specialty coffee sales."
  }
];

export const COMPARISON_FEATURES = [
  {
    attribute: "Visual Archetype",
    maharaja: "Regal Indian heritage editorial with deep burgundy & gold",
    crumb: "Earthy European minimalist grid with sage green rules",
    sugar: "Playful neo-brutalist collage with tilted cards & stickers",
    maison: "Cinematic dark haute noir with 100vh dramatic chiaroscuro",
    chennai: "Vibrant neighborhood storefront with quick category rail",
    atelier: "Fine art sugarcraft portfolio with soft blush & lavender",
    oven: "Nostalgic storybook hearth with warm terracotta & firebrick",
    cocoa: "Clean product-first e-commerce catalogue with cart drawer",
    moments: "Festive campaign showcase with gold foil & gift caskets",
    butter: "Sunlit daylight lifestyle café with coffee pairings & veranda"
  },
  {
    attribute: "Primary Business Type",
    maharaja: "Heritage halwais & royal sweet makers",
    crumb: "Artisan sourdough & hearth bakers",
    sugar: "Neighborhood cake shops & snack bars",
    maison: "Haute French patisseries & salons",
    chennai: "Local sweets & savoury marts",
    atelier: "Bespoke tiered wedding cake artists",
    oven: "Traditional wood-fired community bakeries",
    cocoa: "Bean-to-bar chocolatiers & D2C brands",
    moments: "Corporate & festive gifting specialists",
    butter: "Daylight bakery cafés & specialty roasteries"
  },
  {
    attribute: "Core Conversion Tool",
    maharaja: "Vintage ledger wedding trousseau requisition",
    crumb: "Daily bake chalkboard with sticky live inspector",
    sugar: "4-step live birthday cake configurator",
    maison: "12-seat private tasting salon concierge",
    chennai: "Weight toggle selector & WhatsApp order bag",
    atelier: "Custom cake consultation & flavor journey",
    oven: "Counter loaf hold reservation for morning/afternoon",
    cocoa: "Full working cart with shipping threshold meter",
    moments: "Interactive occasion & budget gift finder wizard",
    butter: "Veranda brunch table reservation & pairings"
  },
  {
    attribute: "Price Point Positioning",
    maharaja: "High Premium Heritage (₹600 — ₹1,800/kg)",
    crumb: "Craft Specialty (₹180 — ₹340/loaf)",
    sugar: "Accessible Retail (₹40 puffs — ₹850 cakes)",
    maison: "Ultra Luxury Haute Cuisine (₹680 — ₹4,200)",
    chennai: "Fast Volume Retail (₹110/250g — ₹660/kg)",
    atelier: "Bespoke Art Showpieces (₹4,500 — ₹25,000+)",
    oven: "Honest Neighborhood Craft (₹45 puffs — ₹240 boule)",
    cocoa: "Artisanal D2C Slabs (₹360 — ₹1,450 coffret)",
    moments: "Corporate & Festive Gifting (₹650 — ₹3,800/box)",
    butter: "Contemporary Lifestyle (₹180 bakes — ₹420 brunch)"
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Zero 30% Food Aggregator Commissions",
    description: "Stop giving away 25% to 30% of your hard-earned margins to food delivery apps. Direct WhatsApp ordering puts 100% of the revenue in your pocket.",
    icon: "BadgePercent"
  },
  {
    title: "Capture High-Ticket Bulk & Corporate Leads",
    description: "Third-party delivery apps don't handle ₹50,000 wedding sweet orders or corporate Diwali gift hampers. Your custom website closes big deals effortlessly.",
    icon: "Gift"
  },
  {
    title: "Dominate Google Local & Google Maps",
    description: "When locals search 'best sourdough near me' or 'fresh kaju katli in town', a lightning-fast ForgeDCode website puts your shop right on top.",
    icon: "MapPin"
  },
  {
    title: "Interactive Order Tools Built For Each Business",
    description: "Whether it's a 4-step cake builder, a bean-to-bar shopping cart, or a festive gift-finder, your website offers bespoke client interactions.",
    icon: "Cake"
  }
];
