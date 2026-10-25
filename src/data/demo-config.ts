/**
 * ForgeDCode Website Demo Showcase Configuration
 * 
 * Central configuration file for company branding, WhatsApp integration,
 * and fictional business details across all four bakery/sweets demos.
 * 
 * To update contact details for a real client, change the values below.
 */

export interface WhatsAppConfig {
  phoneNumber: string;       // International format without + or spaces, e.g. "919876543210"
  displayPhone: string;      // Formatted for UI display, e.g. "+91 98765 43210"
  isConfigured: boolean;     // Set to true when replaced with a verified client phone number
  defaultMessagePrefix: string;
}

export interface BusinessDetails {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  style: string;
  description: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: string;
  area: string;
  city: string;
  pincode: string;
  hours: {
    weekdays: string;
    weekends: string;
    special?: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  whatsapp: WhatsAppConfig;
}

export const AGENCY_CONFIG = {
  companyName: "ForgeDCode",
  tagline: "Your business deserves a website as unique as your brand.",
  description: "We build bespoke, ultra-fast, mobile-first websites designed to turn local footfall and social media followers into loyal paying customers.",
  founder: "ForgeDCode Studio Team",
  website: "https://forgedcode.com",
  email: "hello@forgedcode.com",
  whatsapp: {
    phoneNumber: "919876543210",
    displayPhone: "+91 98765 43210",
    isConfigured: false, // Set to true when owner puts their real number
    defaultMessagePrefix: "Hi ForgeDCode! I saw your Bakery & Sweets website showcase. I would like to discuss building a website for my business."
  },
  services: [
    "Custom Food & Bakery Web Design",
    "Direct WhatsApp Ordering & Menu Integration",
    "Google Maps & Local SEO Setup",
    "Festive Hampers & Catering Lead Forms",
    "Lightning Fast Mobile Experience"
  ]
};

export const DEMO_CONFIGS: Record<string, BusinessDetails> = {
  "royal-sweets": {
    id: "royal-sweets",
    name: "Maharaja Mithai House",
    tagline: "A Tradition of Sweetness",
    badge: "Royal Heritage Confectioners",
    style: "Indian Heritage • Deep Maroon & Muted Gold",
    description: "Handcrafted Indian traditional sweets prepared with pure desi ghee, organic saffron from Kashmir, and generations of artisanal halwai expertise.",
    phone: "919876543211",
    displayPhone: "+91 98765 43211",
    email: "orders@maharajamithai.demo",
    address: "Royal Chowk, Heritage Fort Road, Opp. Saffron Arcade",
    area: "Old City Heritage District",
    city: "Jaipur, Rajasthan",
    pincode: "302002",
    hours: {
      weekdays: "8:00 AM – 10:30 PM",
      weekends: "7:30 AM – 11:00 PM",
      special: "Open all days for festive occasions"
    },
    socials: {
      instagram: "https://instagram.com/maharajamithai.demo",
      facebook: "https://facebook.com/maharajamithai.demo"
    },
    whatsapp: {
      phoneNumber: "919876543211",
      displayPhone: "+91 98765 43211",
      isConfigured: false,
      defaultMessagePrefix: "Namaste Maharaja Mithai House! I would like to place an order / inquire about sweets."
    }
  },

  "artisan-bakery": {
    id: "artisan-bakery",
    name: "Crumb & Co.",
    tagline: "Freshly Baked. Beautifully Made.",
    badge: "Wood-Fired Artisan Breads & Viennoiserie",
    style: "European Artisan • Sage Green & Terracotta",
    description: "Naturally leavened sourdough, flaky layered butter croissants, and rustic European bakes slow-fermented for 48 hours with single-origin flours.",
    phone: "919876543212",
    displayPhone: "+91 98765 43212",
    email: "baker@crumbandco.demo",
    address: "Plot 14, 12th Main Road, Behind Olive Grove",
    area: "Koramangala 4th Block",
    city: "Bengaluru, Karnataka",
    pincode: "560034",
    hours: {
      weekdays: "6:30 AM – 8:00 PM",
      weekends: "6:30 AM – 9:00 PM",
      special: "First warm sourdough batch comes out at 7:00 AM"
    },
    socials: {
      instagram: "https://instagram.com/crumbandco.demo"
    },
    whatsapp: {
      phoneNumber: "919876543212",
      displayPhone: "+91 98765 43212",
      isConfigured: false,
      defaultMessagePrefix: "Hello Crumb & Co.! I would like to reserve today's fresh bake or ask about custom celebration cakes."
    }
  },

  "luxury-patisserie": {
    id: "luxury-patisserie",
    name: "Maison Éclair",
    tagline: "An Artful Indulgence",
    badge: "Haute Pâtisserie & Dessert Architecture",
    style: "Luxury Haute Noir • Champagne & Dark Chocolate",
    description: "Where French classical confectionery techniques meet avant-garde dessert architecture, rare Valrhona single-plantation chocolates, and Tahitian vanilla.",
    phone: "919876543213",
    displayPhone: "+91 98765 43213",
    email: "concierge@maisoneclair.demo",
    address: "The Boulevard Galleria, Level 1, Atrium Wing",
    area: "Colaba Waterfront",
    city: "Mumbai, Maharashtra",
    pincode: "400005",
    hours: {
      weekdays: "11:00 AM – 11:30 PM",
      weekends: "10:30 AM – Midnight",
      special: "Private dessert degustations by appointment"
    },
    socials: {
      instagram: "https://instagram.com/maisoneclair.demo"
    },
    whatsapp: {
      phoneNumber: "919876543213",
      displayPhone: "+91 98765 43213",
      isConfigured: false,
      defaultMessagePrefix: "Bonsoir Maison Éclair! I wish to inquire about bespoke luxury desserts / event gifting."
    }
  },

  "modern-bakery": {
    id: "modern-bakery",
    name: "Sugar Rush Bakery",
    tagline: "Your Happy Place for Sweet Treats",
    badge: "Vibrant Neighborhood Bakery & Snack Bar",
    style: "Joyful Modern • Poppy Orange, Pink & Butter Yellow",
    description: "Loaded cupcakes, gooey warm stuffed cookies, celebratory custom birthday cakes, and freshly baked flaky Indian bakery puffs.",
    phone: "919876543214",
    displayPhone: "+91 98765 43214",
    email: "yumm@sugarrush.demo",
    address: "Shop 5, Sunrise Corner, Main Market Road",
    area: "Sector 18",
    city: "Noida, NCR",
    pincode: "201301",
    hours: {
      weekdays: "9:00 AM – 11:00 PM",
      weekends: "9:00 AM – 11:30 PM",
      special: "Fresh hot savory puffs available daily at 4:00 PM"
    },
    socials: {
      instagram: "https://instagram.com/sugarrush.demo",
      facebook: "https://facebook.com/sugarrush.demo"
    },
    whatsapp: {
      phoneNumber: "919876543214",
      displayPhone: "+91 98765 43214",
      isConfigured: false,
      defaultMessagePrefix: "Hey Sugar Rush Bakery! I want to order delicious treats / ask about a custom birthday cake."
    }
  }
};
