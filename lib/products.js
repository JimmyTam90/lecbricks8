export const DEFAULT_AFFILIATE_URL = "https://www.letbricks.com/?ref=kfjtocxz";

export const hero = {
  name: "SR-71 Blackbird Strategic Reconnaissance Aircraft",
  category: "Military / Aircraft",
  pieces: "2981 pcs",
  designer: "Windbricks",
  price: 189.00,
  wasPrice: 220.00,
  affiliateUrl: "https://www.letbricks.com/?ref=kfjtocxz",
  image: {
    src: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=1200&q=80",
    alt: "SR-71 Blackbird Custom MOC Set",
    width: 1200,
    height: 800
  }
};

export const collections = [
  {
    id: 'best-sellers',
    name: 'Weekly Best Sellers',
    blurb: 'The sets other builders are buying right now, from helicopters and submarines to castles.',
    cta: 'Shop best sellers',
    affiliateUrl: 'https://www.letbricks.com/product-category/best-seller/?ref=kfjtocxz',
    image: {
      src: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=800&q=80',
      alt: 'Weekly Best Sellers MOC Sets',
      width: 800,
      height: 500
    }
  },
  {
    id: 'military-sets',
    name: 'Military sets',
    blurb: 'Aircraft, battleships, submarines and tanks at display scale, plus a dedicated military club.',
    cta: 'Shop military sets',
    affiliateUrl: 'https://www.letbricks.com/military-bricks-moc-sets/?ref=kfjtocxz',
    image: {
      src: 'https://images.unsplash.com/photo-1593789382576-54f489574d26?auto=format&fit=crop&w=800&q=80',
      alt: 'Military Bricks Sets',
      width: 800,
      height: 500
    }
  },
  {
    id: 'all-building-sets',
    name: 'All building sets',
    blurb: 'Browse the full catalog of designer-licensed sets by theme, price or piece count.',
    cta: 'Browse all sets',
    affiliateUrl: 'https://www.letbricks.com/product-category/sets/?ref=kfjtocxz',
    image: {
      src: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80',
      alt: 'All Building Sets',
      width: 800,
      height: 500
    }
  },
  {
    id: 'moc-collection',
    name: 'MOC collection',
    blurb: 'MOC means My Own Creation: original models by independent designers, with a manual for each set.',
    cta: 'Browse MOC sets',
    affiliateUrl: 'https://www.letbricks.com/product-category/moc/?ref=kfjtocxz',
    image: {
      src: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80',
      alt: 'Designer MOC Collection',
      width: 800,
      height: 500
    }
  }
];

export const products = [
  {
    id: 'ucs-bo-katan',
    name: 'MOC-155027 Bo-Katan Komrk-class Spaceship',
    category: 'Sci-Fi / Spaceship',
    pieces: '2007 pcs',
    designer: 'Custom Designer',
    price: 149.00,
    wasPrice: 179.00,
    affiliateUrl: 'https://www.letbricks.com/product/moc-155027-ucs-bo-katan-komrk-class-future-spaceship-model2007pcs/?ref=kfjtocxz',
    image: {
      src: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80',
      alt: 'Bo-Katan Komrk-class Spaceship',
      width: 800,
      height: 600
    }
  }
];

export function formatPrice(item) {
  return `$${item.price.toFixed(2)}`;
}
