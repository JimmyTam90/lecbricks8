# Letbricks Spoke (PrimeGearLab Hub-Spoke)

Public URL: https://primegearlab.com/letbricks | Spoke origin: https://letbricks7.vercel.app

## Architecture
- Pages live in `app/letbricks/*`; no `basePath`.
- `assetPrefix` defaults to Vercel's own production hostname (`VERCEL_PROJECT_PRODUCTION_URL`), or `NEXT_PUBLIC_ASSET_PREFIX` if set. It is never hard-coded, so JS chunks can't point at the wrong project.
- All CSS is embedded in the HTML (`lib/css.js` rendered as a <style> tag). No Tailwind, no stylesheet file.
- Images are plain <img> tags. `public/letbricks/logo.png` is served at `/letbricks/logo.png` through the Hub rewrite.
- Hub: merge the rewrites in `hub-vercel.json` into the Hub project's `vercel.json`, before any catch-all rewrite.

## Deploy
1. `npm install && npm run build` locally (not yet run).
2. Push to the repo behind letbricks7.vercel.app.
3. Redeploy the Hub with the rewrites.
4. Optional env vars: see `.env.example`.

## Checks after deploy
- primegearlab.com/letbricks loads styled; page source shows `/_next/static` URLs on letbricks7.vercel.app.
- /letbricks/privacy, /terms, /contact, /affiliate-disclosure, /logo.png, /sitemap.xml return 200 via the Hub.
- Click each CTA and confirm `?ref=kfjtocxz` survives at the merchant. Attribution must be confirmed in the affiliate dashboard.
