import Link from 'next/link';
import { nav, SITE } from '@/lib/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink text-white" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/letbricks" className="flex min-h-11 items-center gap-3" aria-label="PrimeGearLab Letbricks guide home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.logo} alt="PrimeGearLab" width="40" height="40" className="h-10 w-10 rounded-md" />
          <span className="text-lg font-extrabold tracking-tight">
            PrimeGearLab <span className="font-medium text-white/60">x Letbricks</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 text-sm font-semibold md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="py-2 hover:text-brick">{n.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
