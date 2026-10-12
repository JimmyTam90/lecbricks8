/**
 * Asset origin for /_next/static/* (JS chunks).
 * - Direct deployment (e.g. lecbricks8.vercel.app/letbricks): Vercel's own production hostname is used
 *   automatically, so assets can never point at a different/nonexistent project.
 * - Behind the Hub (primegearlab.com/letbricks): the same origin is used, so chunks load from the Spoke.
 * - Override with NEXT_PUBLIC_ASSET_PREFIX (full origin, no trailing slash) if needed.
 * Styling does NOT depend on this: all CSS is embedded in the HTML (see lib/css.js).
 */
const auto = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined;
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || auto;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(assetPrefix ? { assetPrefix } : {}),
  images: { unoptimized: true },
  async headers() {
    return [{ source: '/_next/static/:path*', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }] }];
  },
};

export default nextConfig;
