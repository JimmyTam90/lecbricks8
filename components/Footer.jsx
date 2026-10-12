import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="studs-soft">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="max-w-3xl text-sm leading-relaxed">
            <strong className="text-white">Trademark notice:</strong> Letbricks is an independent marketplace for
            designer-licensed MOC sets. It does not use LEGO® parts and is not sponsored, authorized or endorsed by the
            LEGO® Group. LEGO® is a trademark of the LEGO Group.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed">
            PrimeGearLab is an independent affiliate publisher and is not the merchant. As an affiliate publisher, we may
            earn a commission from qualifying purchases made through links on this page, at no additional cost to you.
          </p>
          <nav aria-label="Legal" className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold text-white">
            <Link href="/letbricks/affiliate-disclosure" className="py-2">Affiliate disclosure</Link>
            <Link href="/letbricks/privacy" className="py-2">Privacy policy</Link>
            <Link href="/letbricks/terms" className="py-2">Terms of service</Link>
            <Link href="/letbricks/contact" className="py-2">Contact</Link>
          </nav>
          <p className="mt-6 text-xs text-white/60">
            © 2026 PrimeGearLab. All rights reserved. Contact: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
