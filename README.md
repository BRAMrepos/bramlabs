# BramLabs website

Production site for [bramlabs.co](https://bramlabs.co) — independent software studio
and original apparel graphics portfolio.

## Stack

- Astro 7, `output: "static"` + `@astrojs/cloudflare` adapter
- SCSS design tokens (`src/styles/global.scss`) — no Tailwind, no UI framework
- Cloudflare Pages (`public/_redirects`, `public/_headers`)
- `@astrojs/sitemap`

Pages prerender by default. Only routes declaring `export const prerender = false`
are server-rendered — currently just the form endpoints under `src/pages/api/`.

## Commands

```bash
npm install
npm run dev            # http://localhost:4321
npm run build
npm run preview
npm run typecheck      # astro check
npm run generate:art   # regenerate vector art / mockups / process assets
npm run generate:og    # regenerate the 1200x630 social cards in public/og/
npm run verify         # gate the built output (run after build)
npm run check          # typecheck + build + verify, same as CI
```

## Content

| Path | Purpose |
| --- | --- |
| `src/data/software.ts` | Products — drives every `/software/[slug]/` page |
| `src/data/designs.ts` | 12 apparel designs |
| `src/data/journal.ts` | Journal posts |
| `public/designs/` | Raw artwork + detail SVGs |
| `public/mockups/` | Flattened garment application SVGs |
| `public/process/` | Process stage illustrations |
| `public/og/` | Social share cards |
| `public/studio/` | Product marks + workspace illustration |
| `assets/` | **Not deployed.** Generator input only — art masters, base garment photos, image masters |

### Add a product

Append a record to `src/data/software.ts`. The landing page, privacy policy, support
page and changelog are all generated from it — no new files. A product with
`status: "published"` **must** have privacy and support content filled in; both
stores check for these.

### Add a design

1. Add artwork under `public/designs/` and a mockup under `public/mockups/`
   (flattened SVG — no external image refs).
2. Append a record to `src/data/designs.ts`. Set `featured: true` only for homepage
   highlights.
3. Rebuild.

## Assets

`public/` is deployed verbatim, so anything in it ships to every visitor.
Generator *input* — the 4500px art masters, the base garment photographs, the
full-size image masters — lives in `assets/` instead. Moving those out cut the
deployed build from 15 MB to 7 MB; nothing in `public/` was unreferenced.

If you add a large source file that only a script reads, put it in `assets/`.

## Environment

| Variable | Where it lives | Used by |
| --- | --- | --- |
| `RESEND_API_KEY` | Cloudflare Pages → Settings → Environment variables | `src/pages/api/` |

Not in the repo. If the Pages project is ever recreated this must be set again, or
the contact and feedback forms fail with a 500.

## Deploy (Cloudflare Pages)

1. Connected to [BRAMrepos/bramlabs](https://github.com/BRAMrepos/bramlabs).
2. Build command: `npm run build`
3. Output directory: `dist`
4. Node version: 22 (or current LTS)
5. Pushing any branch produces a preview URL; `main` publishes to production.
6. After a production deploy: purge cache, resubmit
   `https://bramlabs.co/sitemap-index.xml`.

## Legacy redirects

See `public/_redirects`. Product support and privacy paths under `/apps/*` and
`/extensions/*` are filed with Amazon Appstore and the Chrome Web Store — they
must keep resolving. Never let one 404.
