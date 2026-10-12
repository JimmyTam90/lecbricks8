import Image from 'next/image';
import AffiliateLink from '@/components/AffiliateLink';
import ProductCard from '@/components/ProductCard';
import CollectionCard from '@/components/CollectionCard';
import { products, collections, hero, formatPrice, DEFAULT_AFFILIATE_URL } from '@/lib/products';

const faqs = [
  {
    q: 'What is a MOC set?',
    a: 'MOC stands for My Own Creation. Letbricks sells original models by independent designers. According to the merchant, each set includes a manual (sent as a QR code sticker in the package) and the parts needed to build the designer\u2019s model.',
  },
  {
    q: 'Does Letbricks use LEGO® parts?',
    a: 'No. The merchant states it does not use LEGO® parts and uses parts from Chinese manufacturers. Letbricks and PrimeGearLab are not sponsored or endorsed by the LEGO® Group.',
  },
  {
    q: 'What if a piece is missing?',
    a: 'The merchant says it replaces missing pieces for free. Contact Letbricks customer service with your order number.',
  },
  {
    q: 'Are minor scratches normal?',
    a: 'The merchant says minor scratches can occur during manufacturing, packaging or handling and usually do not affect function or appearance. Contact them for significant damage.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Items in the merchant\u2019s US warehouse category are listed as shipping within 3 to 5 days. For other sets, the merchant\u2019s FAQ says processing has temporarily grown from about 7 to 15\u201320 business days because of order volume. Check the product page and shipping policy before you order.',
  },
  {
    q: 'What are the shipping and return terms?',
    a: 'The merchant advertises free shipping in most countries, shipping insurance and a 30-day money-back guarantee. Terms can change, so read the merchant\u2019s shipping and return policies at checkout.',
  },
  {
    q: 'Who runs this page?',
    a: 'PrimeGearLab is an independent affiliate publisher, not the merchant. We may earn a commission from qualifying purchases at no extra cost to you. Orders, payments and support are handled by Letbricks.',
  },
];

export default function Page() {
  return (
    <main className="pb-24 md:pb-0">
      {/* HERO */}
      <section className="studs">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:py-14 lg:grid-cols-2">
          <div className="min-w-0 text-white">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Build the model nobody else on the shelf has.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
              Letbricks sells designer-licensed MOC sets for adult builders and collectors: military aircraft, battleships,
              castles, racecars and large display pieces. Browse the featured sets, then finish your order on the merchant site.
            </p>
            <ul className="mt-5 grid gap-2 text-sm font-semibold text-white sm:grid-cols-2">
              <li className="rounded-lg bg-white/10 px-3 py-2">Free shipping in most countries (merchant terms)</li>
              <li className="rounded-lg bg-white/10 px-3 py-2">30-day money-back guarantee (merchant terms)</li>
              <li className="rounded-lg bg-white/10 px-3 py-2">Free replacement of missing parts</li>
              <li className="rounded-lg bg-white/10 px-3 py-2">US warehouse items ship in 3 to 5 days</li>
            </ul>
          </div>

          {/* Image first, then CTA block: same order on mobile and desktop */}
          <div className="min-w-0">
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-xl bg-white">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                priority
                sizes="(min-width: 1024px) 448px, 92vw"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mx-auto mt-4 w-full max-w-md rounded-xl bg-white p-4 text-ink">
              <p className="font-bold leading-snug">{hero.name}</p>
              <p className="text-sm text-neutral-600">{hero.pieces} · by {hero.designer} · listed at {formatPrice(hero)}</p>
              <AffiliateLink href={hero.affiliateUrl} label={hero.name} placement="hero" className="mt-3 w-full bg-brick text-ink hover:bg-brickdark">
                Shop the SR-71 Blackbird
              </AffiliateLink>
              <AffiliateLink href={DEFAULT_AFFILIATE_URL} label="Letbricks home" placement="hero-secondary" className="mt-2 w-full border border-neutral-300 text-ink hover:bg-sand">
                Browse everything at Letbricks
              </AffiliateLink>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
        <h2 className="text-3xl font-extrabold tracking-tight">Start with a collection</h2>
        <p className="mt-2 max-w-2xl text-neutral-700">Each button opens the matching page on Letbricks.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {collections.map((c) => (
            <CollectionCard key={c.id} item={c} />
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="scroll-mt-20 bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-extrabold tracking-tight">Featured sets</h2>
          <p className="mt-2 max-w-2xl text-neutral-700">
            Sets from different themes and budgets. Prices were shown on the merchant listing on October 12, 2026 and can change.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-extrabold tracking-tight">Who these sets suit</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-bold">MOC builders and collectors</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">Original designs from independent designers, from under 500 pieces to sets with tens of thousands.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-bold">Display-shelf hobbyists</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">Aircraft, ships, trains and buildings at detailed display scale.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-bold">Gift buyers</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">The merchant sorts sets by price and piece count, which helps when you shop for an adult builder.</p>
          </div>
        </div>
      </section>

      {/* SHIPPING / TRUST */}
      <section id="shipping" className="scroll-mt-20 bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-extrabold tracking-tight">Know before you order</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-white/85 md:grid-cols-2">
            <li className="rounded-lg bg-white/10 p-4">Delivery: US warehouse items are listed as shipping within 3 to 5 days. For other sets the merchant says processing is currently 15 to 20 business days.</li>
            <li className="rounded-lg bg-white/10 p-4">Quality: the merchant says missing parts are replaced for free and that it hand-checks parts before shipping.</li>
            <li className="rounded-lg bg-white/10 p-4">Promotions: the merchant showed a Halloween sale on October 12, 2026. Offers change and may exclude some sets.</li>
            <li className="rounded-lg bg-white/10 p-4">Checkout, payment and support are handled by Letbricks. PrimeGearLab does not sell or ship products.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-12">
        <h2 className="text-3xl font-extrabold tracking-tight">Questions before you buy</h2>
        <div className="mt-6 divide-y divide-neutral-200 rounded-xl border border-neutral-200">
          {faqs.map((f) => (
            <details key={f.q} className="group p-4">
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 font-bold">
                {f.q}
                <span aria-hidden="true" className="text-brickdark transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 leading-relaxed text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="studs-soft bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Pick your next build</h2>
          <p className="mx-auto mt-2 max-w-xl text-neutral-700">Open Letbricks in a new tab and keep this guide open while you compare sets.</p>
          <AffiliateLink href={DEFAULT_AFFILIATE_URL} label="Letbricks home" placement="final" className="mt-6 bg-brick px-8 text-ink hover:bg-brickdark">
            Shop Letbricks
          </AffiliateLink>
          <p className="mt-4 text-xs text-neutral-600">
            As an affiliate publisher, we may earn a commission from qualifying purchases made through links on this page, at no additional cost to you.
          </p>
        </div>
      </section>

      {/* Sticky mobile CTA: separate from images, safe-area aware, hidden on md+ */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white px-4 pt-3 md:hidden"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <AffiliateLink href={DEFAULT_AFFILIATE_URL} label="Letbricks home" placement="sticky-mobile" className="w-full bg-brick text-ink hover:bg-brickdark">
          Shop Letbricks
        </AffiliateLink>
      </div>
    </main>
  );
}
