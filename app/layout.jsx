export const metadata = {
  metadataBase: new URL('https://primegearlab.com'),
  title: 'Letbricks MOC Building Sets | PrimeGearLab',
  description: 'Independent guide to Letbricks, a marketplace for designer-licensed MOC building sets.',
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#0B0F17' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ background: '#0B0F17' }}>
      <body style={{ margin: 0, background: '#0B0F17', color: '#F8FAFC' }}>{children}</body>
    </html>
  );
}
