/**
 * Declare Groceries UK - Central Configuration
 * All business details, opening hours, navigation links, and product data.
 * Edit this single file to update store hours, phone, address, or product catalogues.
 */

export interface StoreHours {
  open: number; // 24h format, e.g. 9 for 9:00 AM
  close: number; // 24h format, e.g. 21 for 9:00 PM
  label: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  source: 'Google';
  isVerified?: boolean;
}

export const SITE_CONFIG = {
  name: 'Declare Groceries UK',
  shortName: 'Declare',
  tagline: 'Taste of Home · Africa · Caribbean · Italy',
  description:
    'An international hub in Moston, Manchester specialising in authentic African, Caribbean, and Italian groceries, 100% Halal meats, fresh poultry, seafood, and hard-to-find imported Italian snacks.',
  category: 'International Grocery Store',

  // Contact & Location
  contact: {
    address: '374 Moston Ln, Manchester M40 9JS, United Kingdom',
    street: '374 Moston Ln',
    city: 'Manchester',
    postcode: 'M40 9JS',
    country: 'United Kingdom',
    phone: '+44 7402 754401',
    phoneFormatted: '+44 7402 754401',
    phoneTel: 'tel:+447402754401',
    whatsappUrl:
      'https://wa.me/447402754401?text=Hello%20Declare%20Groceries%2C%20I%20have%20an%20enquiry%20regarding%20products%20and%20availability.',
    tiktokUrl: 'https://www.tiktok.com/@declare.shop?_t=ZG-8tAIJoc3N8C&_r=1',
    mapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=374+Moston+Ln,+Manchester+M40+9JS,+United+Kingdom',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.5029373977535!2d-2.1878426!3d53.5135249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7161b471cb7%3A0x6b7c2522fbce7ea1!2s374%20Moston%20Ln%2C%20Manchester%20M40%209JS!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk',
    googleReviewsUrl:
      'https://www.google.com/maps/place/374+Moston+Ln,+Manchester+M40+9JS,+UK',
  },

  // Hours: 9:00 AM - 9:00 PM (open 7 days a week)
  hours: {
    schedule: {
      monday: { open: 9, close: 21, label: '9:00 AM – 9:00 PM' },
      tuesday: { open: 9, close: 21, label: '9:00 AM – 9:00 PM' },
      wednesday: { open: 9, close: 21, label: '9:00 AM – 9:00 PM' },
      thursday: { open: 9, close: 21, label: '9:00 AM – 9:00 PM' },
      friday: { open: 9, close: 21, label: '9:00 AM – 9:00 PM' },
      saturday: { open: 9, close: 21, label: '9:00 AM – 9:00 PM' },
      sunday: { open: 9, close: 21, label: '9:00 AM – 9:00 PM' },
    } as Record<string, StoreHours>,
    timezone: 'Europe/London',
  },

  // Ratings
  rating: {
    score: 5.0,
    totalReviews: 2,
    platform: 'Google Reviews',
  },

  // Editorial stats
  stats: [
    { value: '3', label: 'Culinary Continents', sub: 'Africa, Caribbean & Italy' },
    { value: '5.0', label: 'Star Google Rating', sub: 'Local community trust' },
    { value: '7', label: 'Days a Week', sub: 'Open 9:00 AM to 9:00 PM daily' },
    { value: '100%', label: 'Halal Certified', sub: 'Ethically sourced meats' },
  ],

  // Specialties
  specialities: [
    {
      title: 'Diverse Product Range',
      description:
        'An international hub specialising in authentic African, Caribbean, and Italian goods under one roof in North Manchester.',
    },
    {
      title: 'Halal & Fresh Selections',
      description:
        'Strictly 100% Halal certified meats, fresh poultry, fresh tilapia & red snapper, and frozen cultural staples.',
    },
    {
      title: 'Imported Treats',
      description:
        'Unique, hard-to-find Italian snacks, biscuits, confectionery, and continental pantry favourites.',
    },
  ],

  // Regions for Shop By Region
  regions: [
    {
      id: 'africa',
      title: 'African Pantry',
      subtitle: 'West & Central African Essentials',
      description:
        'Pounded yam, authentic Jollof seasonings, gari, palm oil, ogbono, egusi, and vibrant Scotch bonnet peppers flown in fresh.',
      gradient: 'from-amber-500/20 via-emerald-700/10 to-transparent',
      accentColor: '#16A34A',
      featuredItems: [
        'Scotch Bonnet Peppers',
        'Pounded Yam & Cassava Flour',
        'Jollof Seasonings & Thyme',
        'Pure Golden Palm Oil',
        'Dried Crayfish & Egusi',
      ],
      tag: 'West African Staples',
    },
    {
      id: 'caribbean',
      title: 'Caribbean Island Flavours',
      subtitle: 'Sun-Drenched Island Favourites',
      description:
        'Sweet green plantains, Jamaican jerk spices, ackee, callaloo, coconut peanut milks, and hard-dough bread accompaniments.',
      gradient: 'from-orange-500/20 via-amber-600/10 to-transparent',
      accentColor: '#F97316',
      featuredItems: [
        'Fresh Green & Yellow Plantain',
        'Authentic Jerk Rub & Sauces',
        'Tinned Ackee & Callaloo',
        'Coconut Creams & Milo',
        'Hard Dough Bread Accoutrements',
      ],
      tag: 'Island Flavours',
    },
    {
      id: 'italy',
      title: 'Italian Confectionery & Pantry',
      subtitle: 'Hard-to-Find Italian Favourites',
      description:
        'Iconic Italian sweet biscuits including Pan di Stelle, Mulino Bianco Gocciole, Galatine milk tablets, and pure olive oils.',
      gradient: 'from-emerald-600/20 via-lime-500/10 to-transparent',
      accentColor: '#0F766E',
      featuredItems: [
        'Pan di Stelle Chocolate Biscuits',
        'Mulino Bianco Gocciole & Baiocchi',
        'Galatine Milk Candies',
        'Italian Biscotti & Taralli',
        'Imported Pastas & Extra Virgin Oils',
      ],
      tag: 'Imported Treats',
    },
  ],

  // Halal & Fresh Bento items
  bentoItems: [
    {
      id: 'halal-meats',
      title: '100% Halal Meats & Poultry',
      subtitle: 'Ethically Sourced & Freshly Cut',
      description:
        'Premium beef ribeye, lamb chops, goat meat, and fresh poultry sourced from verified British Halal farms with full traceability.',
      badge: 'Certified Halal',
      highlight: true,
      colSpan: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 'fresh-fish',
      title: 'Fresh Seafood & Fish',
      subtitle: 'Whole Tilapia & Red Snapper',
      description:
        'Whole fresh tilapia, red snapper, and frozen sea catches ideal for steaming, frying, and traditional pepper soups.',
      badge: 'Fresh Catch',
      highlight: false,
      colSpan: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'imported-snacks',
      title: 'Italian Snacks & Sweets',
      subtitle: 'Pan di Stelle, Gocciole & Galatine',
      description:
        'Hard-to-find Italian pantry staples, biscuits, and treats loved by families and discerning foodies across Manchester.',
      badge: 'Imported Exclusive',
      highlight: false,
      colSpan: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'frozen-foods',
      title: 'Deep Freeze Cultural Staples',
      subtitle: 'Frozen Vegetables, Fish & Meats',
      description:
        'Pre-cut cassava, whole frozen plantain, bitter leaf, ugwu, snails, and specialized frozen cuts ready for homestyle cooking.',
      badge: 'Deep Frozen',
      highlight: false,
      colSpan: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'produce-spices',
      title: 'Fresh Market Produce & Spices',
      subtitle: 'Scotch Bonnet, Yam & Seasonings',
      description:
        'Bulk tubers of white Ghanaian and Nigerian yams, fresh scotch bonnets, ginger, garlic, and authentic whole spices.',
      badge: 'Fresh Daily',
      highlight: false,
      colSpan: 'md:col-span-1 md:row-span-1',
    },
  ],

  // Marquee products
  marqueeItemsRow1: [
    'Scotch Bonnet Peppers',
    'Pan di Stelle Biscuits',
    'Halal Ribeye & Lamb Chops',
    'Fresh Whole Tilapia',
    'Gocciole Chocolate Cookies',
    'Pounded Yam Flour',
    'Golden Sun Vegetable Oil',
    'Jamaican Jerk Seasoning',
    'Pure Galatine Candies',
    'Red Snapper',
  ],
  marqueeItemsRow2: [
    'Mulino Bianco Baiocchi',
    'Nigerian Palm Oil',
    'Ackee & Callaloo',
    'Fresh Plantains',
    'Ovaltine & Peak Milk',
    'Halal Goat Meat for Pepper Soup',
    'Italian Taralli',
    'Egusi Seeds & Crayfish',
    'Cassava Gari',
    'Fresh Italian Pasta',
  ],

  // Real review data with Google 5.0 (2 reviews) + editable placeholders
  reviews: [
    {
      id: 'rev-1',
      author: 'Verified Customer',
      rating: 5,
      date: 'Google Review',
      text: 'Brilliant international shop in Moston! Found authentic African spices, fresh scotch bonnets, and wonderful Italian biscuits you cannot get in normal supermarkets. Very welcoming staff.',
      source: 'Google',
      isVerified: true,
    },
    {
      id: 'rev-2',
      author: 'Local Manchester Shopper',
      rating: 5,
      date: 'Google Review',
      text: 'Best place for halal meats and fresh fish on Moston Lane. Clean, well stocked shelves, and open until 9 PM every day which is super convenient after work.',
      source: 'Google',
      isVerified: true,
    },
  ] as ReviewItem[],

  // Navigation Links
  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'Shop by Region', path: '/#regions' },
    { name: 'Halal & Fresh', path: '/#halal-fresh' },
    { name: 'About', path: '/about' },
    { name: 'Visit Us', path: '/#visit-us' },
  ],
};

/**
 * Calculates live opening status based on Manchester time (Europe/London)
 * Store hours: 9:00 AM (09:00) to 9:00 PM (21:00) 7 days a week.
 */
export function getStoreStatus(): {
  isOpen: boolean;
  statusText: string;
  subText: string;
  nextChange: string;
} {
  try {
    // Determine London hour and minute
    const now = new Date();
    const londonTimeStr = now.toLocaleTimeString('en-GB', {
      timeZone: 'Europe/London',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });

    const [hoursStr, minsStr] = londonTimeStr.split(':');
    const currentHour = parseInt(hoursStr, 10);
    const currentMin = parseInt(minsStr, 10);
    const totalMinutes = currentHour * 60 + currentMin;

    const openMinutes = 9 * 60; // 9:00 AM = 540 min
    const closeMinutes = 21 * 60; // 9:00 PM = 1260 min

    const isOpen = totalMinutes >= openMinutes && totalMinutes < closeMinutes;

    if (isOpen) {
      const minutesUntilClose = closeMinutes - totalMinutes;
      const hoursLeft = Math.floor(minutesUntilClose / 60);
      const minsLeft = minutesUntilClose % 60;

      let subText = 'Closes at 9:00 PM';
      if (hoursLeft === 0 && minsLeft < 60) {
        subText = `Closing soon (in ${minsLeft}m)`;
      }

      return {
        isOpen: true,
        statusText: 'Open Now',
        subText,
        nextChange: 'Closes 9:00 PM',
      };
    } else {
      let subText = 'Opens at 9:00 AM';
      if (totalMinutes < openMinutes) {
        const minutesUntilOpen = openMinutes - totalMinutes;
        const hoursUntil = Math.floor(minutesUntilOpen / 60);
        subText = `Opens in ${hoursUntil}h at 9:00 AM`;
      }
      return {
        isOpen: false,
        statusText: 'Closed Now',
        subText,
        nextChange: 'Opens 9:00 AM tomorrow',
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: 'Open Now',
      subText: 'Closes at 9:00 PM',
      nextChange: 'Closes 9:00 PM',
    };
  }
}
