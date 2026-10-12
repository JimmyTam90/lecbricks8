const BASE = 'https://primegearlab.com/letbricks';

export default function sitemap() {
  const paths = ['', '/affiliate-disclosure', '/privacy', '/terms', '/contact'];
  return paths.map((p) => ({ url: BASE + p, lastModified: new Date('2026-10-12') }));
}
