import './globals.css';

export const metadata = {
  metadataBase: new URL('https://primegearlab.com'),
  title: 'Letbricks MOC Building Sets | PrimeGearLab',
  description:
    'Independent guide to Letbricks, a marketplace for designer-licensed MOC building sets. Browse military, castle, vehicle and display models.',
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#111111' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
