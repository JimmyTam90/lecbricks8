/**
 * Single source of truth for every card, CTA and price shown on the page.
 * Evidence: merchant homepage and listings fetched 2026-10-12 (see SITE.lastChecked).
 *
 * affiliateStatus:
 *  - 'PLAUSIBLE' = ?ref=kfjtocxz appended per the supplied mapping / default affiliate URL.
 *    Attribution on product/category URLs has NOT been independently verified.
 * availability: 'IN_STOCK_LISTED' = "Add to cart" shown on listing; 'OPTIONS' = "Select options" shown;
 *               'UNKNOWN' = not checked.
 * Prices are what the listing showed on lastChecked and can change; the UI labels them "listed at".
 */
const IMG = 'https://www.letbricks.com/wp-content/uploads';

export const DEFAULT_AFFILIATE_URL = 'https://www.letbricks.com/?ref=kfjtocxz';

// Collections requested in PRODUCT_DEEP_LINKS_MAPPING (kept as separate fields: original vs affiliate)
export const collections = [
  {
    id: 'best-seller',
    name: 'Weekly best sellers',
    blurb: 'The sets other builders are buying right now, from helicopters and submarines to castles.',
    originalUrl: 'https://www.letbricks.com/product-category/best-seller/',
    affiliateUrl: 'https://www.letbricks.com/product-category/best-seller/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: { src: `${IMG}/2024/10/letbricks-categories-2.jpg`, alt: 'Letbricks best seller category tile', width: 600, height: 600 },
    cta: 'Shop best sellers',
  },
  {
    id: 'military',
    name: 'Military sets',
    blurb: 'Aircraft, battleships, submarines and tanks at display scale, plus a dedicated military club.',
    originalUrl: 'https://www.letbricks.com/military-bricks-moc-sets/',
    affiliateUrl: 'https://www.letbricks.com/military-bricks-moc-sets/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: { src: `${IMG}/2024/11/letbricks-product-2-1.jpg`, alt: 'Letbricks military category tile', width: 600, height: 600 },
    cta: 'Shop military sets',
  },
  {
    id: 'sets',
    name: 'All building sets',
    blurb: 'Browse the full catalog of designer-licensed sets by theme, price or piece count.',
    originalUrl: 'https://www.letbricks.com/product-category/sets/',
    affiliateUrl: 'https://www.letbricks.com/product-category/sets/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: null, // no verified image for this category
    cta: 'Browse all sets',
  },
  {
    id: 'moc',
    name: 'MOC collection',
    blurb: 'MOC means My Own Creation: original models by independent designers, with a manual for each set.',
    originalUrl: 'https://www.letbricks.com/product-category/moc/',
    affiliateUrl: 'https://www.letbricks.com/product-category/moc/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: null,
    cta: 'Browse MOC sets',
  },
  {
    id: 'star-wars',
    name: 'MOC-155027 Bo-Katan Komrk-class spaceship (2007 pcs)',
    blurb: 'A UCS-scale sci-fi ship model for display shelves. Check live stock and price on the product page.',
    originalUrl: 'https://www.letbricks.com/product/moc-155027-ucs-bo-katan-komrk-class-future-spaceship-model2007pcs/',
    affiliateUrl: 'https://www.letbricks.com/product/moc-155027-ucs-bo-katan-komrk-class-future-spaceship-model2007pcs/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: null, // availability, price and image not verified
    availability: 'UNKNOWN',
    cta: 'View this spaceship set',
  },
];

// Featured sets (verified on the homepage listing 2026-10-12)
export const products = [
  {
    id: 'uh-60-black-hawk',
    name: 'MOC-198409 1/35 UH-60 Black Hawk helicopter',
    designer: 'DarthDesigner',
    pieces: '957 pcs',
    price: 68.99,
    wasPrice: 76.99,
    currency: 'USD',
    availability: 'IN_STOCK_LISTED',
    category: 'Military aircraft',
    originalUrl: 'https://www.letbricks.com/product/moc-198409-1-35-scale-uh-60-black-hawk-american-military-helicopter-building-blocks-set-957pcs-v3-versionby-darthdesigner/',
    affiliateUrl: 'https://www.letbricks.com/product/moc-198409-1-35-scale-uh-60-black-hawk-american-military-helicopter-building-blocks-set-957pcs-v3-versionby-darthdesigner/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: { src: `${IMG}/2024/12/letbricks-moc-198409-1-35-scale-uh-60-black-hawk-american-military-helicopter-building-blocks-set-957pcs-v3-versionby-darthdesigner.jpg`, alt: 'UH-60 Black Hawk helicopter building set built from bricks', width: 800, height: 800 },
  },
  {
    id: 'uss-zumwalt',
    name: 'MOC-227260 USS Zumwalt',
    designer: 'BasicBuilder23',
    pieces: '1,014 pcs',
    price: 100.99,
    currency: 'USD',
    availability: 'IN_STOCK_LISTED',
    category: 'Naval ships',
    originalUrl: 'https://www.letbricks.com/product/moc-227260-uss-zumwalt-building-blocks-set-1014pcs-by-basicbuilder23/',
    affiliateUrl: 'https://www.letbricks.com/product/moc-227260-uss-zumwalt-building-blocks-set-1014pcs-by-basicbuilder23/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: { src: `${IMG}/2026/10/letbricks-moc-227260-uss-zumwalt-building-blocks-set-1014pcs-by-basicbuilder23-3.jpg`, alt: 'USS Zumwalt destroyer building block model', width: 800, height: 800 },
  },
  {
    id: 'uss-arizona',
    name: 'MOC-275741 USS Arizona battleship',
    designer: 'BespokeBrickDesigns',
    pieces: '2,458 pcs',
    price: 202.99,
    currency: 'USD',
    availability: 'IN_STOCK_LISTED',
    category: 'Naval ships',
    originalUrl: 'https://www.letbricks.com/product/moc-275741-uss-arizona-battleship-building-blocks-set-2458pcs-by-bespokebrickdesigns/',
    affiliateUrl: 'https://www.letbricks.com/product/moc-275741-uss-arizona-battleship-building-blocks-set-2458pcs-by-bespokebrickdesigns/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: { src: `${IMG}/2026/10/letbricks-moc-275741-uss-arizona-battleship-building-blocks-set-2458pcs-by-bespokebrickdesigns-1.jpg`, alt: 'USS Arizona battleship building block model', width: 800, height: 800 },
  },
  {
    id: 'sr-71-blackbird',
    name: 'SR-71 Blackbird reconnaissance aircraft',
    designer: 'Mindbricks',
    pieces: '2,981 pcs',
    price: 257.99,
    currency: 'USD',
    availability: 'IN_STOCK_LISTED',
    category: 'Military aircraft',
    originalUrl: 'https://www.letbricks.com/product/sr-71-blackbird-high-altitude-reconnaissance-aircraft-building-blocks-set-2981pcs-by-mindbricks/',
    affiliateUrl: 'https://www.letbricks.com/product/sr-71-blackbird-high-altitude-reconnaissance-aircraft-building-blocks-set-2981pcs-by-mindbricks/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: { src: `${IMG}/2026/10/letbricks-sr-71-blackbird-high-altitude-reconnaissance-aircraft-building-blocks-set-2981pcs-by-mindbricks-5.jpg`, alt: 'SR-71 Blackbird aircraft building block model', width: 800, height: 800 },
  },
  {
    id: 'the-executor',
    name: 'MOC-278404 The Executor',
    designer: 'Artbrix',
    pieces: '3,428 pcs',
    price: 293.99,
    currency: 'USD',
    availability: 'IN_STOCK_LISTED',
    category: 'Sci-fi display models',
    originalUrl: 'https://www.letbricks.com/product/moc-278404-the-executor-building-blocks-set-3428pcs-by-artbrix/',
    affiliateUrl: 'https://www.letbricks.com/product/moc-278404-the-executor-building-blocks-set-3428pcs-by-artbrix/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: { src: `${IMG}/2026/10/letbricks-moc-278404-the-executor-building-blocks-set-3428pcs-by-artbrix-1.jpg`, alt: 'The Executor sci-fi starship building block model', width: 800, height: 800 },
  },
  {
    id: 'lemans-legend-racecar',
    name: 'Japanese LeMans Legend racecar',
    designer: 'Pingubricks',
    pieces: '1,427 pcs',
    price: 139.99,
    currency: 'USD',
    availability: 'OPTIONS',
    category: 'Racing cars',
    originalUrl: 'https://www.letbricks.com/product/japanese-lemans-legend-racecar-building-blocks-set-1427pcs-by-pingubricks/',
    affiliateUrl: 'https://www.letbricks.com/product/japanese-lemans-legend-racecar-building-blocks-set-1427pcs-by-pingubricks/?ref=kfjtocxz',
    affiliateStatus: 'PLAUSIBLE',
    image: { src: `${IMG}/2025/12/letbricks-japanese-lemans-legend-racecar-building-blocks-set-1427pcs-by-pingubricks-14-2.jpg`, alt: 'Japanese LeMans Legend racecar building block model', width: 800, height: 800 },
  },
];

export const hero = products.find((p) => p.id === 'sr-71-blackbird');

export function formatPrice(p) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: p.currency || 'USD' }).format(p.price);
}
