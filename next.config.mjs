/**
 * HUB_SPOKE_PROXY design
 * - Pages live physically under app/letbricks/*, so the Spoke already serves /letbricks/*.
 *   => NO basePath (it would produce /letbricks/letbricks/...).
 * - The Hub rewrites /letbricks and /letbricks/:path* to this Spoke. Next.js static assets
 *   (/_next/static/*) are NOT under /letbricks, so they must load straight from the Spoke origin
 *   via assetPrefix. Otherwise they would hit the Hub domain and 404 (or collide with other spokes).
 * - Remote images are served as-is (unoptimized) because /_next/image would also resolve on the Hub.
 */
const SPOKE_ORIGIN = process.env.NEXT_PUBLIC_ASSET_PREFIX || 'https://letbricks7.vercel.app';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: SPOKE_ORIGIN,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'www.letbricks.com', pathname: '/wp-content/uploads/**' }],
  },
  async headers() {
    return [
      {
        // Allow the Hub origin to load fonts/chunks from the Spoke origin.
        source: '/_next/static/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
    ];
  },
};

export default nextConfig;
