import AffiliateLink from '@/components/AffiliateLink';
import { products, collections, hero, formatPrice, DEFAULT_AFFILIATE_URL } from '@/lib/products';

const faqs = [
  ['What is a MOC set?', 'MOC stands for My Own Creation. Letbricks sells original models by independent designers. According to the merchant, each set includes a manual (sent as a QR code sticker in the package) and the parts needed to build the designer\u2019s model.'],
  ['Does Letbricks use LEGO® parts?', 'No. The merchant states it does not use LEGO® parts and uses parts from Chinese manufacturers. Letbricks and PrimeGearLab are not sponsored or endorsed by the LEGO® Group.'],
  ['What if a piece is missing?', 'The merchant says it replaces missing pieces for free. Contact Letbricks customer service with your order number.'],
  ['Are minor scratches normal?', 'The merchant says minor scratches can occur during manufacturing, packaging or handling and usually do not affect function or appearance. Contact them for significant damage.'],
  ['How long does delivery take?', 'Items in the merchant\u2019s US warehouse category are listed as shipping within 3 to 5 days. For other sets, the merchant\u2019s FAQ says processing has temporarily grown from about 7 to 15\u201320 business days because of order volume. Check the product page and shipping policy before you order.'],
  ['What are the shipping and return terms?', 'The merchant advertises free shipping in most countries, shipping insurance and a 30-day money-back guarantee. Terms can change, so read the merchant\u2019s shipping and return policies at checkout.'],
  ['Who runs this page?', 'PrimeGearLab is an independent affiliate publisher, not the merchant. We may earn a commission from qualifying purchases at no extra cost to you. Orders, payments and support are handled by Letbricks.'],
];

/* Image block first, details, then the CTA block. No overlays, no absolute CTA. */
function ProductCard({ p }) {
  return (
    <article className="lb-card">
      <div className="lb-imgbox">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} loading="lazy" decoding="async" />
      </div>
      <div className="lb-card-body">
        <p className="lb-meta">{p.category} · {p.pieces} · by {p.designer}</p>
        <h3>{p.name}</h3>
        <p className="lb-price">
          Listed at <b>{formatPrice(p)}</b>
          {p.wasPrice ? <s>{`$${p.wasPrice.toFixed(2)}`}</s> : null}
        </p>
        <p className="lb-meta">Price on 2026-10-12. Confirm on the merchant site.</p>
      </div>
      <div className="lb-card-cta">
        <AffiliateLink href={p.affiliateUrl} label={p.name} placement="product-card">Shop this set</AffiliateLink>
      </div>
    </article>
  );
}

function CollectionCard({ c }) {
  return (
    <article className="lb-card">
      {c.image ? (
        <div className="lb-imgbox">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.image.src} alt={c.image.alt} width={c.image.width} height={c.image.height} loading="lazy" decoding="async" style={{ objectFit: 'cover' }} />
        </div>
      ) : null}
      <div className="lb-card-body">
        <h3>{c.name}</h3>
        <p className="lb-price">{c.blurb}</p>
      </div>
      <div className="lb-card-cta">
        <AffiliateLink href={c.affiliateUrl} label={c.name} placement="collection-card" variant="ghost">{c.cta}</AffiliateLink>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main>
      {/* HEADER: Clean Branding */}
      <header style={{ borderBottom: '1px solid #1E293B', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0F172A', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="/letbricks" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <span style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px', color: '#FF6600' }}>
              LETBRICKS<span style={{ color: '#F8FAFC' }}>.MOC</span>
            </span>
          </a>
        </div>
        <AffiliateLink href={DEFAULT_AFFILIATE_URL} label="Letbricks Store" placement="header-cta">
          Shop Official Store →
        </AffiliateLink>
      </header>

      {/* HERO: text, then image, then CTA */}
      <section className="lb-hero">
        <div className="lb-wrap lb-hero-grid">
          <div>
            <h1 className="lb-h1">Build the model nobody else on the shelf has.</h1>
            <p className="lb-lead">
              Letbricks sells designer-licensed MOC sets for adult builders and collectors: military aircraft, battleships,
              castles, racecars and large display pieces. Browse the featured sets, then finish your order on the merchant site.
            </p>
            <ul className="lb-points">
              <li>Free shipping in most countries (merchant terms)</li>
              <li>30-day money-back guarantee (merchant terms)</li>
              <li>Free replacement of missing parts</li>
              <li>US warehouse items ship in 3 to 5 days</li>
            </ul>
          </div>
          <div>
            <div className="lb-imgbox">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={hero.image.src} alt={hero.image.alt} width={hero.image.width} height={hero.image.height} fetchPriority="high" decoding="async" />
            </div>
            <div className="lb-ctabox">
              <div>
                <strong>{hero.name}</strong>
                <span className="lb-meta">{hero.pieces} · by {hero.designer} · listed at {formatPrice(hero)}</span>
              </div>
              <AffiliateLink href={hero.affiliateUrl} label={hero.name} placement="hero">Shop the SR-71 Blackbird</AffiliateLink>
              <AffiliateLink href={DEFAULT_AFFILIATE_URL} label="Letbricks home" placement="hero-secondary" variant="ghost">Browse everything at Letbricks</AffiliateLink>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="lb-sec">
        <div className="lb-wrap">
          <h2 className="lb-h2">Start with a collection</h2>
          <p className="lb-sub">Each button opens the matching page on Letbricks.</p>
          <div className="lb-grid">
            {collections.map((c) => <CollectionCard key={c.id} c={c} />)}
          </div>
        </div>
      </section>

      <section id="featured" className="lb-sec lb-alt">
        <div className="lb-wrap">
          <h2 className="lb-h2">Featured sets</h2>
          <p className="lb-sub">Sets from different themes and budgets. Prices were shown on the merchant listing on October 12, 2026 and can change.</p>
          <div className="lb-grid three">
            {products.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section className="lb-sec">
        <div className="lb-wrap">
          <h2 className="lb-h2">Who these sets suit</h2>
          <div className="lb-info three">
            <div><h3>MOC builders and collectors</h3>Original designs from independent designers, from under 500 pieces to sets with tens of thousands.</div>
            <div><h3>Display-shelf hobbyists</h3>Aircraft, ships, trains and buildings at detailed display scale.</div>
            <div><h3>Gift buyers</h3>The merchant sorts sets by price and piece count, which helps when you shop for an adult builder.</div>
          </div>
        </div>
      </section>

      <section id="shipping" className="lb-sec lb-alt">
        <div className="lb-wrap">
          <h2 className="lb-h2">Know before you order</h2>
          <div className="lb-info">
            <div>Delivery: US warehouse items are listed as shipping within 3 to 5 days. For other sets the merchant says processing is currently 15 to 20 business days.</div>
            <div>Quality: the merchant says missing parts are replaced for free and that it hand-checks parts before shipping.</div>
            <div>Promotions: the merchant showed a Halloween sale on October 12, 2026. Offers change and may exclude some sets.</div>
            <div>Checkout, payment and support are handled by Letbricks. PrimeGearLab does not sell or ship products.</div>
          </div>
        </div>
      </section>

      <section id="faq" className="lb-sec">
        <div className="lb-wrap" style={{ maxWidth: 760 }}>
          <h2 className="lb-h2">Questions before you buy</h2>
          <div className="lb-faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="lb-sec lb-final">
        <div className="lb-wrap">
          <h2 className="lb-h2">Pick your next build</h2>
          <p className="lb-sub" style={{ margin: '8px auto 0' }}>Letbricks opens in a new tab, so this guide stays open while you compare sets.</p>
          <AffiliateLink href={DEFAULT_AFFILIATE_URL} label="Letbricks home" placement="final">Shop Letbricks</AffiliateLink>
          <p className="lb-fine">As an affiliate publisher, we may earn a commission from qualifying purchases made through links on this page, at no additional cost to you.</p>
        </div>
      </section>

      <div className="lb-pad" aria-hidden="true" />
      <div className="lb-sticky">
        <AffiliateLink href={DEFAULT_AFFILIATE_URL} label="Letbricks home" placement="sticky-mobile">Shop Letbricks</AffiliateLink>
      </div>
    </main>
  );
}
