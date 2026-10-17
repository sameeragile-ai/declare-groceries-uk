import storefrontImg from './images/declare_storefront_1792231033757.jpg';
import italianSnacksImg from './images/italian_snacks_shelf_1792231033769.jpg';
import aislesImg from './images/international_aisle_shelves_1792231035246.jpg';
import produceImg from './images/fresh_peppers_produce_1792231034534.jpg';
import halalMeatImg from './images/halal_meat_selection_1792231056851.jpg';
import freshFishImg from './images/fresh_tilapia_fish_1792231056587.jpg';

export const STORE_IMAGES = {
  storefront: storefrontImg,
  italianSnacks: italianSnacksImg,
  aisles: aislesImg,
  produce: produceImg,
  halalMeat: halalMeatImg,
  freshFish: freshFishImg,
};

export const GALLERY_PHOTOS = [
  {
    id: 'storefront',
    src: storefrontImg,
    alt: 'Declare Groceries UK Storefront at 374 Moston Ln, Manchester',
    caption: 'Our Shopfront on Moston Lane',
    category: 'Storefront',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 'italian-snacks',
    src: italianSnacksImg,
    alt: 'Authentic imported Italian biscuits and snacks: Pan di Stelle, Gocciole, Galatine',
    caption: 'Imported Italian Treats & Biscuits',
    category: 'Italian',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'halal-meat',
    src: halalMeatImg,
    alt: '100% Halal fresh meat and poultry selection prepared daily',
    caption: 'Certified Halal Butchery Selections',
    category: 'Halal Meat',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'fresh-fish',
    src: freshFishImg,
    alt: 'Fresh whole tilapia and red snapper on ice',
    caption: 'Fresh Whole Tilapia & Seafood',
    category: 'Seafood',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'produce',
    src: produceImg,
    alt: 'Fresh Scotch bonnet peppers, plantains, and tropical root vegetables',
    caption: 'Fresh Scotch Bonnets & Tropical Produce',
    category: 'Produce',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'aisles',
    src: aislesImg,
    alt: 'International grocery aisles with African and Caribbean cooking oils and pantry staples',
    caption: 'Spices, Cooking Oils & Pantry Staples',
    category: 'Aisles',
    span: 'col-span-1 row-span-1',
  },
];
