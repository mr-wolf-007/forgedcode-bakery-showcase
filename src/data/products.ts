/**
 * Product Catalogs for ForgeDCode Bakery & Sweets Showcases
 * Complete with realistic INR pricing, dietary indicators, tags, and photography.
 */

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  tags?: string[];
  isBestseller?: boolean;
  dietary?: 'veg' | 'non-veg';
  weightOrPieces?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  occasion: string;
  rating: number;
  isDemoNote?: boolean;
}

// -------------------------------------------------------------
// 1. ROYAL INDIAN SWEETS — MAHARAJA MITHAI HOUSE
// -------------------------------------------------------------
export const ROYAL_SWEETS_CATEGORIES = [
  "All",
  "Kaju Katli",
  "Mysore Pak",
  "Motichoor Laddu",
  "Gulab Jamun",
  "Badam Halwa",
  "Assorted Sweet Boxes"
];

export const ROYAL_SWEETS_PRODUCTS: ProductItem[] = [
  {
    id: "royal-kaju-katli",
    name: "Royal Silver Vark Kaju Katli",
    category: "Kaju Katli",
    price: 980,
    unit: "per kg",
    description: "Finest Goan cashews ground to velvety perfection, infused with green cardamom and finished with edible silver vark.",
    image: "https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?w=800&auto=format&fit=crop&q=80",
    tags: ["Signature", "Pure Cashew", "Melt-in-Mouth"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 kg / Box"
  },
  {
    id: "royal-kesar-kaju-katli",
    name: "Kashmiri Kesar Kaju Katli",
    category: "Kaju Katli",
    price: 1150,
    unit: "per kg",
    description: "Hand-picked Pampore saffron steeped in rich cashew fudge, giving a regal golden glow and exquisite floral fragrance.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
    tags: ["Kashmir Kesar", "Bestseller"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 kg / Box"
  },
  {
    id: "royal-mysore-pak",
    name: "Traditional Melt-in-Mouth Mysore Pak",
    category: "Mysore Pak",
    price: 820,
    unit: "per kg",
    description: "Crafted in pure royal desi ghee and roasted gram flour. Soft, honeycomb texture that dissolves instantly on your palate.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80",
    tags: ["Pure Desi Ghee", "Heritage Recipe"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 kg / Box"
  },
  {
    id: "royal-motichoor-laddu",
    name: "Desi Ghee Motichoor Laddu",
    category: "Motichoor Laddu",
    price: 540,
    unit: "per kg",
    description: "Micro-pearl gram flour boondis fried in clarified butter, simmered in saffron syrup and garnished with melon seeds & pistachios.",
    image: "https://images.unsplash.com/photo-1505253758473-96b46d5f6990?w=800&auto=format&fit=crop&q=80",
    tags: ["Temple Favorite", "Festive Must-Have"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 kg / Box"
  },
  {
    id: "royal-gulab-jamun",
    name: "Kewra Infused Shahi Gulab Jamun",
    category: "Gulab Jamun",
    price: 520,
    unit: "per kg",
    description: "Soft reduced-milk mawa dumplings stuffed with pistachios and soaked in saffron-rose-kewra spiced sugar syrup.",
    image: "https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?w=800&auto=format&fit=crop&q=80",
    tags: ["Warm Favorite", "Rich Mawa"],
    isBestseller: false,
    dietary: "veg",
    weightOrPieces: "1 kg / Tub"
  },
  {
    id: "royal-badam-halwa",
    name: "Rajwadi Almond (Badam) Halwa",
    category: "Badam Halwa",
    price: 1350,
    unit: "per kg",
    description: "Blanched Mamra almonds slow-roasted in pure ghee with saffron strands and whole milk. A winter delicacy for royal occasions.",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&auto=format&fit=crop&q=80",
    tags: ["Mamra Almonds", "Royal Recipe"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 kg / Container"
  },
  {
    id: "royal-assorted-box-1",
    name: "The Nizam Imperial Sweet Hamper",
    category: "Assorted Sweet Boxes",
    price: 1850,
    unit: "per box",
    description: "An opulent gift box featuring Kaju Katli, Kesar Peda, Anjeer Dry Fruit Barfi, and Pistachio Mysore Pak nestled in velvet trays.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80",
    tags: ["Luxury Box", "Wedding Favorite"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1.2 kg Box"
  },
  {
    id: "royal-assorted-box-2",
    name: "Festive Shubh Utsav Mithai Box",
    category: "Assorted Sweet Boxes",
    price: 1250,
    unit: "per box",
    description: "Curated collection of Motichoor Laddu, Kaju Rolls, Dodha Barfi, and Milk Cake. Perfect for family celebrations and corporate gifting.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
    tags: ["Festive Gift", "Bestseller"],
    isBestseller: false,
    dietary: "veg",
    weightOrPieces: "800g Box"
  }
];

export const ROYAL_SWEETS_GALLERY: GalleryItem[] = [
  {
    id: "rg-1",
    title: "Brass Thali Mithai Display",
    caption: "Handcrafted festive sweets arranged on antique hammered brassware.",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "rg-2",
    title: "Kashmiri Saffron Infusion",
    caption: "Pure Pampore saffron strands being bloomed in warm whole buffalo milk.",
    category: "Craftsmanship",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "rg-3",
    title: "Royal Wedding Gifting Hamper",
    caption: "Custom embroidered velvet boxes prepared for grand Indian destination weddings.",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "rg-4",
    title: "Golden Boondi Boiling in Pure Ghee",
    caption: "Every single batch of Motichoor is handcrafted in copper cauldrons.",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1505253758473-96b46d5f6990?w=800&auto=format&fit=crop&q=80"
  }
];

// -------------------------------------------------------------
// 2. ARTISAN BAKERY — CRUMB & CO.
// -------------------------------------------------------------
export const ARTISAN_BAKERY_CATEGORIES = [
  "All",
  "Croissants & Pastries",
  "Sourdough & Breads",
  "Cupcakes & Brownies",
  "Celebration Cakes",
  "Seasonal Specials"
];

export const ARTISAN_BAKERY_PRODUCTS: ProductItem[] = [
  {
    id: "artisan-country-sourdough",
    name: "Classic Country Sourdough Loaf",
    category: "Sourdough & Breads",
    price: 320,
    unit: "per loaf",
    description: "48-hour cold fermented sourdough made with stoneground wholewheat, wild yeast culture, and a blistered crispy crust.",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80",
    tags: ["48hr Ferment", "Wild Yeast", "No Commercial Yeast"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "750g Loaf"
  },
  {
    id: "artisan-rosemary-focaccia",
    name: "Rosemary & Olive Oil Sea Salt Focaccia",
    category: "Sourdough & Breads",
    price: 280,
    unit: "per slab",
    description: "Airy, dimpled Italian bread bathed in cold-pressed extra virgin olive oil, fresh garden rosemary, and Maldon flake salt.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
    tags: ["EVOO", "Herb Infused"],
    isBestseller: false,
    dietary: "veg",
    weightOrPieces: "500g Slab"
  },
  {
    id: "artisan-butter-croissant",
    name: "French Cultured Butter Croissant",
    category: "Croissants & Pastries",
    price: 190,
    unit: "per piece",
    description: "36 honeycomb laminated layers with Normandy cultured butter. Golden crispy shell that shatters to a pillowy honeycomb interior.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
    tags: ["French Butter", "Bestseller"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 piece"
  },
  {
    id: "artisan-pain-au-chocolat",
    name: "Pain au Chocolat (Dark Chocolate)",
    category: "Croissants & Pastries",
    price: 230,
    unit: "per piece",
    description: "Flaky laminated pastry rolled around dual batons of 70% dark chocolate that melt gently when warmed.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&auto=format&fit=crop&q=80",
    tags: ["70% Cocoa", "Morning Favorite"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 piece"
  },
  {
    id: "artisan-fudge-brownie",
    name: "Single-Estate Salted Walnut Brownie",
    category: "Cupcakes & Brownies",
    price: 180,
    unit: "per piece",
    description: "Dense, fudgy brownie baked with single-origin Idukki cacao, toasted Chilean walnuts, and Brittany fleur de sel.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80",
    tags: ["Gooey", "Single Estate Cacao"],
    isBestseller: false,
    dietary: "veg",
    weightOrPieces: "1 square"
  },
  {
    id: "artisan-burnt-cheesecake",
    name: "San Sebastián Burnt Basque Cheesecake",
    category: "Celebration Cakes",
    price: 1650,
    unit: "per cake (1 kg)",
    description: "Caramelized deep-brown exterior yielding to a rich, molten cream cheese center scented with pure Madagascar vanilla beans.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=80",
    tags: ["Celebration", "Signature"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 kg (Serves 8-10)"
  },
  {
    id: "artisan-pistachio-tart",
    name: "Bronte Pistachio & Raspberry Tart",
    category: "Seasonal Specials",
    price: 320,
    unit: "per piece",
    description: "Almond sablé shell filled with roasted Sicilian pistachio frangipane and topped with fresh organic raspberry compote.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=800&auto=format&fit=crop&q=80",
    tags: ["Seasonal", "Chef Special"],
    isBestseller: false,
    dietary: "veg",
    weightOrPieces: "Individual Tart"
  },
  {
    id: "artisan-cinnamon-cruffin",
    name: "Ceylon Spiced Cinnamon Cruffin",
    category: "Croissants & Pastries",
    price: 210,
    unit: "per piece",
    description: "Croissant pastry baked in muffin moulds, rolled in Ceylon cinnamon sugar, and piped with salted brown butter cream.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&auto=format&fit=crop&q=80",
    tags: ["Customer Favorite"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 piece"
  }
];

export const ARTISAN_BAKERY_GALLERY: GalleryItem[] = [
  {
    id: "ab-1",
    title: "Morning Loaves Out of the Stone Oven",
    caption: "Golden blistered sourdough loaves cooling on cedar bread racks at 7:00 AM.",
    category: "Baking",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "ab-2",
    title: "Flaky Croissant Laminations",
    caption: "Precision folding of Normandy butter into cold fermented dough.",
    category: "Process",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "ab-3",
    title: "Coffee & Pastry Counter",
    caption: "Our welcoming Koramangala bakery counter drenched in morning sunlight.",
    category: "Atmosphere",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "ab-4",
    title: "Handcrafted Celebration Cakes",
    caption: "Naked sponge cake adorned with fresh garden flowers and wild berries.",
    category: "Celebrations",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=80"
  }
];

// -------------------------------------------------------------
// 3. LUXURY PATISSERIE — MAISON ÉCLAIR
// -------------------------------------------------------------
export const LUXURY_PATISSERIE_CATEGORIES = [
  "All",
  "Signature Chocolate",
  "French Pastries",
  "Macarons",
  "Celebration Gateaux",
  "Gift Collections"
];

export const LUXURY_PATISSERIE_PRODUCTS: ProductItem[] = [
  {
    id: "lux-opera-dor",
    name: "L'Opéra d'Or (Gold-Leaf Opera)",
    category: "Signature Chocolate",
    price: 580,
    unit: "per slice",
    description: "Delicate almond joconde sponge soaked in grand cru espresso, layered with dark chocolate ganache, French coffee buttercream, and 24K edible gold leaf.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
    tags: ["24K Gold", "Valrhona Guanaja", "Signature"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 individual gateau"
  },
  {
    id: "lux-mille-feuille",
    name: "Mille-Feuille à la Vanille de Tahiti",
    category: "French Pastries",
    price: 520,
    unit: "per piece",
    description: "Three layers of caramelized puff pastry alternating with whipped Tahitian vanilla bean diplomate cream and salted butter caramel beads.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
    tags: ["Tahitian Vanilla", "Masterpiece"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 piece"
  },
  {
    id: "lux-framboise-entremet",
    name: "Ruby Framboise Noir Entremet",
    category: "Signature Chocolate",
    price: 640,
    unit: "per piece",
    description: "Glossy crimson mirror glaze sheltering dark chocolate mousse, wild raspberry confit center, and a crispy cocoa nib crunch base.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80",
    tags: ["Mirror Glaze", "Haute Couture"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "Individual entremet"
  },
  {
    id: "lux-macaron-coffret",
    name: "Le Coffret Prestige (12 Macarons)",
    category: "Macarons",
    price: 1650,
    unit: "per box",
    description: "An elegant black and champagne presentation case featuring 12 hand-piped macarons: Dark Truffle, Pistachio Rose, Salted Caramel, Passionfruit, and Blackcurrant.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&auto=format&fit=crop&q=80",
    tags: ["Gift Box", "12 Flavors"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "Box of 12"
  },
  {
    id: "lux-paris-brest",
    name: "Paris-Brest Praliné Noisette",
    category: "French Pastries",
    price: 540,
    unit: "per piece",
    description: "Crisp choux crown filled with mousseline cream made from slow-roasted Piedmont hazelnuts and finished with caramelized slivered nuts.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=800&auto=format&fit=crop&q=80",
    tags: ["Piedmont Hazelnut", "Classic"],
    isBestseller: false,
    dietary: "veg",
    weightOrPieces: "1 piece"
  },
  {
    id: "lux-velvet-midnight",
    name: "Velvet Midnight Celebration Gateau",
    category: "Celebration Gateaux",
    price: 3200,
    unit: "per cake (1.2 kg)",
    description: "Architectural tiered dessert featuring 80% Valrhona dark chocolate ganache, blackberry gelée, and edible bronze dust on a brushed slate pedestal.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&auto=format&fit=crop&q=80",
    tags: ["VIP Events", "Custom Order"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1.2 kg (Serves 10-12)"
  },
  {
    id: "lux-truffle-hamper",
    name: "Grand Cru Truffle & Champagne Collection",
    category: "Gift Collections",
    price: 4500,
    unit: "per hamper",
    description: "Handcrafted smoked dark chocolate truffles, hazelnut dragées, and bespoke confectionery packaged in embossed lacquer cases.",
    image: "https://images.unsplash.com/photo-1548741487-18d16a1a0a33?w=800&auto=format&fit=crop&q=80",
    tags: ["Corporate VIP", "Limited Batch"],
    isBestseller: false,
    dietary: "veg",
    weightOrPieces: "Luxury Gift Hamper"
  }
];

export const LUXURY_PATISSERIE_GALLERY: GalleryItem[] = [
  {
    id: "lp-1",
    title: "The Chef's Tasting Atelier",
    caption: "Intimate dessert tasting counter bathed in ambient moody champagne lighting.",
    category: "Atelier",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "lp-2",
    title: "Hand-Gilded 24K Gold Accents",
    caption: "Our Head Pâtissier placing delicate pure edible gold leaf onto opera gateaux.",
    category: "Craft",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "lp-3",
    title: "Bespoke Macaron Palette",
    caption: "French almond shells calibrated to delicate hues and balanced ganache centers.",
    category: "Collection",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "lp-4",
    title: "VIP Dessert Architecture",
    caption: "Sculptural dessert centerpiece designed for a high-jewelry gala.",
    category: "Events",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&auto=format&fit=crop&q=80"
  }
];

// -------------------------------------------------------------
// 4. MODERN LOCAL BAKERY — SUGAR RUSH BAKERY
// -------------------------------------------------------------
export const MODERN_BAKERY_CATEGORIES = [
  "All",
  "Popular Cakes",
  "Birthday Cakes",
  "Cupcakes & Donuts",
  "Cookies & Brownies",
  "Puffs & Snacks"
];

export const MODERN_BAKERY_PRODUCTS: ProductItem[] = [
  {
    id: "sr-dutch-truffle",
    name: "Classic Dutch Truffle Cake",
    category: "Popular Cakes",
    price: 650,
    unit: "500g",
    description: "Super soft chocolate sponge coated in gooey dark chocolate fudge ganache. The undisputed neighborhood birthday hero!",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
    tags: ["Best Seller", "Party Favorite"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "500g (Serves 4-6)"
  },
  {
    id: "sr-pinata-cake",
    name: "Smashable Pinata Heart Cake with Hammer",
    category: "Birthday Cakes",
    price: 1350,
    unit: "1 kg",
    description: "Hard chocolate shell you smash open with an included wooden hammer to reveal colorful candies, brownies, and sprinkles inside!",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&auto=format&fit=crop&q=80",
    tags: ["Trending", "With Hammer", "Fun"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 kg Surprise Cake"
  },
  {
    id: "sr-nutella-donut",
    name: "Nutella Overload Glazed Donut",
    category: "Cupcakes & Donuts",
    price: 120,
    unit: "per piece",
    description: "Pillowy soft yeast donut injected with warm Nutella and topped with crushed hazelnut chocolate glaze.",
    image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=800&auto=format&fit=crop&q=80",
    tags: ["Kids Favorite", "Warm Bake"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 big donut"
  },
  {
    id: "sr-red-velvet-cupcake",
    name: "Swirled Cream Cheese Red Velvet Cupcake",
    category: "Cupcakes & Donuts",
    price: 90,
    unit: "per piece",
    description: "Moist ruby-red cocoa sponge topped with a velvety crown of Philadelphia cream cheese swirl and sprinkles.",
    image: "https://images.unsplash.com/photo-1570727624862-3008fe67a6be?w=800&auto=format&fit=crop&q=80",
    tags: ["Sweet Treat"],
    isBestseller: false,
    dietary: "veg",
    weightOrPieces: "1 cupcake"
  },
  {
    id: "sr-paneer-tikka-puff",
    name: "Crispy Bombay Paneer Tikka Puff",
    category: "Puffs & Snacks",
    price: 65,
    unit: "per piece",
    description: "Flaky golden bakery puff stuffed with marinated tandoori spiced paneer, roasted peppers, and onion masala. Served piping hot!",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
    tags: ["Hot & Spicy", "Fresh at 4 PM"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 hot puff"
  },
  {
    id: "sr-veg-masala-puff",
    name: "Desi Masala Potato & Pea Puff",
    category: "Puffs & Snacks",
    price: 45,
    unit: "per piece",
    description: "The timeless Indian bakery classic. 100 flaky layers packed with cumin-tempered spiced potato and green peas.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
    tags: ["Tea-Time Classic"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 hot puff"
  },
  {
    id: "sr-lotus-biscoff-brownie",
    name: "Sizzling Lotus Biscoff Stuffed Brownie",
    category: "Cookies & Brownies",
    price: 160,
    unit: "per piece",
    description: "Fudgy brownie packed with melted Belgian speculoos spread, topped with crunchy Lotus cookie crumb.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80",
    tags: ["Loaded", "Bestseller"],
    isBestseller: true,
    dietary: "veg",
    weightOrPieces: "1 giant square"
  },
  {
    id: "sr-butter-chicken-roll",
    name: "Smoky Chicken Keema Roll",
    category: "Puffs & Snacks",
    price: 90,
    unit: "per piece",
    description: "Flaky golden puff roll packed with aromatic minced chicken cooked in traditional bakery spice blend.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
    tags: ["Savory Snack"],
    isBestseller: false,
    dietary: "non-veg",
    weightOrPieces: "1 roll"
  }
];

export const MODERN_BAKERY_GALLERY: GalleryItem[] = [
  {
    id: "sg-1",
    title: "Loaded Donut Wall",
    caption: "Freshly glazed Belgian chocolate and strawberry sprinkle donuts every morning.",
    category: "Bakes",
    image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "sg-2",
    title: "Birthday Cake Counter",
    caption: "Ready-to-go celebration cakes decorated with playful sprinkles and macarons.",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "sg-3",
    title: "Golden Flaky Snack Puffs",
    caption: "Hot puff trays taken straight out of the oven at our 4:00 PM tea-time rush.",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "sg-4",
    title: "Happy Birthday Celebrations",
    caption: "Custom designed 2-tier themed cakes for our lovely neighborhood celebrations.",
    category: "Parties",
    image: "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?w=800&auto=format&fit=crop&q=80"
  }
];
