# BramLabs website

Production site for [bramlabs.co](https://bramlabs.co) — original apparel graphics portfolio and independent software studio.

## Stack

- Astro (static)
- SCSS design tokens
- Cloudflare Pages (`public/_redirects`, `public/_headers`)
- `@astrojs/sitemap`

## Commands

```bash
npm install
npm run dev      # 0.0.0.0:8080
npm run build
npm run preview
npm run generate:art   # regenerate vector art / mockups / process assets
```

## Content

| Path | Purpose |
| --- | --- |
| `src/data/designs.ts` | 12 apparel designs (source of truth) |
| `src/data/software.ts` | Software credentials (published only with externalUrl) |
| `src/data/journal.ts` | Journal posts |
| `public/designs/` | Raw artwork + detail SVGs |
| `public/mockups/` | Flattened garment application SVGs |
| `public/process/` | Process stage illustrations |
| `public/og/` | Social share cards |
| `public/studio/` | Studio marks + workspace illustration |

### Add a design

1. Add artwork under `public/designs/` and mockup under `public/mockups/` (flattened SVG — no external image refs).
2. Append a record to `src/data/designs.ts`. Set `featured: true` only for homepage highlights.
3. Rebuild.

### Software listing rules

Only entries with `status: "published"` **and** `externalUrl` appear as public listings. Support/privacy URLs may exist for products still indexing.

## Deploy (Cloudflare Pages)

1. Connect [BRAMrepos/bramlabs](https://github.com/BRAMrepos/bramlabs).
2. Build command: `npm run build`
3. Output directory: `dist`
4. Node version: 22 (or current LTS)
5. After deploy: purge cache, submit `https://bramlabs.co/sitemap-index.xml`

## Owner assets still recommended

- Genuine portrait photography of Bram (replace workspace illustration caption)
- Photoreal product photos when physical samples exist
- High-res PNG OG cards if a social crawler rejects SVG
- Formspree / Workers form endpoint if you outgrow mailto

## Legacy redirects

See `public/_redirects`. Product support paths under `/apps/*` and `/extensions/sonicshield/*` are preserved.
