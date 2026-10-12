import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tracking from '@/components/Tracking';

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

export default function LetbricksLayout({ children }) {
  return (
    <>
      <link rel="preconnect" href="https://www.letbricks.com" crossOrigin="anonymous" />
      <Header />
      {children}
      <Footer />
      <Tracking />
    </>
  );
}
