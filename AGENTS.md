# BramLabs Site — Agent Rules

> This file describes the project **as it actually is**. If you find a claim here that
> contradicts the code, the code wins — fix this file in the same commit.

## Stack (non-negotiable)

- **Framework:** Astro 7, `output: "static"` with the Cloudflare adapter.
  Every page prerenders by default. A route becomes server-rendered *only* by
  declaring `export const prerender = false` — currently just `src/pages/api/*`.
  Never add `export const prerender = true`; it is the default and is noise.
- **Styling:** SCSS with CSS custom properties. `src/styles/global.scss` is the only
  global stylesheet, imported once by `BaseLayout.astro`. **There is no Tailwind.**
  Page- and component-level styles go in scoped `<style lang="scss">` blocks.
- **Content:** plain TypeScript data modules in `src/data/`. **There are no Astro
  content collections** and no `src/content/` directory.
- **Language:** TypeScript strict (`astro/tsconfigs/strict`). Path alias `@/*` → `src/*`.
- **Fonts:** Bricolage Grotesque (display) + Instrument Sans (body) + Geist Mono
  (system meta) — loaded via `@fontsource` packages in `BaseLayout.astro`,
  never from the Google Fonts CDN (GDPR/privacy).
- **Icons:** inline SVG, written by hand. No icon library is installed.
- **No UI framework.** React, Three.js and friends were removed — do not reintroduce
  them. If a component genuinely needs client JS, write a plain `<script>` in the
  `.astro` file (see `Header.astro` and `contact.astro` for the established pattern).
- **Dependencies:** ask before adding any. The runtime dependency list is deliberately
  10 packages long.

## Project structure

```
src/
  data/          designs.ts · software.ts · journal.ts   ← sources of truth
  layouts/       BaseLayout.astro (wraps every page)
  components/    shared components only
  pages/         file-based routes
  styles/        global.scss (the only global stylesheet)
public/          static assets served verbatim, incl. _headers and _redirects
scripts/         one-off Node asset generators (uses sharp)
```

`src/data/software.ts` drives every product page. Adding a product is a data edit —
if you find yourself creating a new `.astro` file per product, stop and extend the
dynamic route instead.

## Design system

The tokens live at the top of `src/styles/global.scss` and are the single source of
truth. Use the CSS variables — never hardcode a hex value in a component.

### Color

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#f3efe6` | page background (warm parchment) |
| `--canvas` | `#faf8f3` | alternating section background |
| `--surface` | `#ffffff` | cards, inputs |
| `--ink` | `#141416` | primary text |
| `--muted` | `#6b6860` | secondary text |
| `--line` | `#ddd8cd` | borders |
| `--cyan` `--orange` `--green` `--violet` | | **artwork accents only** — keep site chrome near-neutral |

The site is light-only by design. Do not add a dark mode without asking.

### Spacing

Use the ladder: `--s-1` (4px) through `--s-8` (96px). No arbitrary pixel values.

### Radius

`--radius` (6px) for cards and inputs, `--radius-lg` (14px) for large surfaces,
`--radius-pill` for buttons and chips. Buttons are pills — do not give them 8px corners.

### Shadows

`--shadow-soft` (resting), `--shadow-card` (elevated), `--shadow-lift` (hover).
Never invent a new shadow.

### Motion

`--t` (220ms) and `--ease`. Hover lift is `translateY(-2px)` and nothing more.

## Global utility classes

These already exist in `global.scss`. Use them instead of restyling from scratch:

- Layout: `.wrap`, `.wrap-content`, `.section`, `.surface`
- Type: `.h-hero`, `.h-section`, `.h-page`, `.h-card`, `.lede`, `.body`, `.eyebrow`, `.meta`
- Buttons: `.btn.-primary`, `.btn.-ghost`, `.btn.-link`
- Forms: `.field`
- Headers: `.page-hero`, `.page-head`

`.eyebrow` is sans-serif. `.meta` is mono and reserved for **system data only** —
dates, version numbers, categories, counts. Do not set body copy in mono.

## Content rules

- Write as a developer talking to another developer: direct, specific, honest.
- Banned marketing words: *supercharge, boost, seamlessly, powerful, effortless,
  revolutionary, game-changing*.
- Never ship placeholder copy. No "Lorem ipsum", no "Product Name Here".
- No emoji as icons or bullets.
- No invented metrics, testimonials, user counts, or "as featured in" rows.

## Hard stops

- No inline `style="..."` attributes; no `!important`.
- No hardcoded hex colors or pixel values outside the token system.
- No new npm dependencies without asking first.
- No `console.log` in committed code (the `console.error` calls in API routes are
  intentional — they surface in Cloudflare logs).
- **Never break a URL under `/apps/*`, `/extensions/*` or `/software/*`.** Several of
  these exact paths are filed with Amazon Appstore and the Chrome Web Store as the
  official support and privacy URLs for live listings. They must 301, never 404.

## Legal and product-page obligations

Every product with `status: "published"` in `software.ts` **must** have a reachable
privacy page and support page. This is a store-policy requirement, not a nicety —
Chrome Web Store and Amazon Appstore both check. The dynamic routes under
`/software/[slug]/` generate these from product data, so the obligation is met by
filling in the data, not by writing pages.

## Verification steps (run after every UI task)

1. `npm run build` — must pass.
2. `npx astro check` — TypeScript errors must be zero.
3. Confirm the built page count in `dist/client` matches expectations
   (`find dist/client -name index.html | wc -l`).
4. Test mobile layout at 375px and 768px.
5. Every new page needs a `<title>`, a meta description, and an OG image.
6. Fonts must still load from `@fontsource`, not a CDN.
