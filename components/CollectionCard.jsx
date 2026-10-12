import Image from 'next/image';
import AffiliateLink from './AffiliateLink';

export default function CollectionCard({ item }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white sm:flex-row">
      {item.image && (
        <div className="relative flex aspect-square w-full shrink-0 items-center justify-center overflow-hidden bg-sand sm:aspect-auto sm:w-40">
          <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} loading="lazy" sizes="(min-width: 640px) 160px, 92vw" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-bold leading-snug">{item.name}</h3>
        <p className="text-sm leading-relaxed text-neutral-700">{item.blurb}</p>
        <div className="mt-2">
          <AffiliateLink href={item.affiliateUrl} label={item.name} placement="collection-card" className="w-full bg-ink text-white hover:bg-neutral-800 sm:w-auto">
            {item.cta}
          </AffiliateLink>
        </div>
      </div>
    </article>
  );
}
