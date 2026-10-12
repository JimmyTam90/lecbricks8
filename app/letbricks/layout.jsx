import Link from 'next/link';
import Tracking from '@/components/Tracking';
import { CSS } from '@/lib/css';
import { SITE } from '@/lib/site';

const BASE = 'https://primegearlab.com/letbricks';

export const metadata = {
  title: 'Letbricks MOC Building Sets: Military, Castles, Vehicles | PrimeGearLab',
  description:
    'Independent guide to Letbricks, a marketplace for designer-licensed MOC sets for adult builders and collectors. Compare featured sets and shop on the merchant site.',
  alternates: { canonical: BASE },
  openGraph: {
    title: 'Letbricks MOC Building Sets | PrimeGearLab',
    description: 'Designer-licensed MOC sets for adult builders and collectors. Independent affiliate guide.',
    url: BASE,
    siteName: 'PrimeGearLab',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://primegearlab.com/letbricks/logo.png', width: 512, height: 512, alt: 'PrimeGearLab' }],
  },
  twitter: { card: 'summary', title: 'Letbricks MOC Building Sets | PrimeGearLab' },
  icons: { icon: '/letbricks/logo.png' },
  robots: { index: true, follow: true },
};

const navItems = [
  ['#collections', 'Collections'],
  ['#featured', 'Featured sets'],
  ['#shipping', 'Shipping'],
  ['#faq', 'FAQ'],
];

export default function LetbricksLayout({ children }) {
  return (
    <div className="lb" style={{ background: '#0B0F17', color: '#F8FAFC' }}>
      {/* Embedded CSS: no stylesheet request, so it works under any subpath or proxy. */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <header className="lb-head">
        <div className="lb-wrap">
          <Link href="/letbricks" className="lb-brand" aria-label="PrimeGearLab Letbricks guide home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.logo} alt="PrimeGearLab" width="40" height="40" />
            <span>PrimeGearLab <small>x Letbricks</small></span>
          </Link>
          <nav className="lb-nav" aria-label="Primary">
            {navItems.map(([href, label]) => (
              <a key={href} href={`/letbricks${href}`}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      {children}

      <footer className="lb-foot">
        <div className="lb-wrap">
          <p>
            <strong>Trademark notice:</strong> Letbricks is an independent marketplace for designer-licensed MOC sets. It
            does not use LEGO® parts and is not sponsored, authorized or endorsed by the LEGO® Group. LEGO® is a trademark
            of the LEGO Group.
          </p>
          <p>
            PrimeGearLab is an independent affiliate publisher and is not the merchant. As an affiliate publisher, we may
            earn a commission from qualifying purchases made through links on this page, at no additional cost to you.
          </p>
          <nav aria-label="Legal">
            <Link href="/letbricks/affiliate-disclosure">Affiliate disclosure</Link>
            <Link href="/letbricks/privacy">Privacy policy</Link>
            <Link href="/letbricks/terms">Terms of service</Link>
            <Link href="/letbricks/contact">Contact</Link>
          </nav>
          <p style={{ fontSize: 12, marginBottom: 0 }}>
            © 2026 PrimeGearLab. All rights reserved. Contact: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
      </footer>
      <Tracking />
    </div>
  );
}
