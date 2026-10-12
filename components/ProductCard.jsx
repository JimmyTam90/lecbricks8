import Image from 'next/image';
import AffiliateLink from './AffiliateLink';
import { formatPrice } from '@/lib/products';

/** Mobile DOM + visual order: image block, then details, then the CTA block. No overlays. */
export default function ProductCard({ product }) {
  const p = product;
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-sand">
        <Image
          src={p.image.src}
          alt={p.image.alt}
          width={p.image.width}
          height={p.image.height}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm text-neutral-600">{p.category} · {p.pieces} · by {p.designer}</p>
        <h3 className="text-lg font-bold leading-snug">{p.name}</h3>
        <p className="text-sm text-neutral-700">
          Listed at <strong className="text-base text-ink">{formatPrice(p)}</strong>
          {p.wasPrice && <span className="ml-2 text-neutral-500 line-through">{`$${p.wasPrice.toFixed(2)}`}</span>}
          <span className="block text-xs text-neutral-500">Price on 2026-10-12. Confirm on the merchant site.</span>
        </p>
      </div>
      <div className="p-4 pt-0">
        <AffiliateLink href={p.affiliateUrl} label={p.name} placement="product-card" className="w-full bg-brick text-ink hover:bg-brickdark">
          Shop this set
        </AffiliateLink>
      </div>
    </article>
  );
}
