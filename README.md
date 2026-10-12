# Letbricks Spoke (PrimeGearLab Hub-Spoke)

Public URL: https://primegearlab.com/letbricks | Spoke origin: https://letbricks7.vercel.app

## Architecture
- Pages live in `app/letbricks/*`; no `basePath`.
- `assetPrefix` = Spoke origin so `/_next/static/*` loads from the Spoke, not the Hub.
- Images are `unoptimized` (`/_next/image` would not resolve on the Hub). `public/letbricks/logo.png` is served at `/letbricks/logo.png` through the Hub rewrite.
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
