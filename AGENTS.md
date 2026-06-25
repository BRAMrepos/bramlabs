# BramLabs Site — Agent Rules

## Stack (non-negotiable)
- Framework: Astro 5 with Content Collections
- Styling: Tailwind CSS v4 (NOT v3 — use CSS custom properties, not config file)
- Language: TypeScript strict mode throughout
- Icons: Lucide (import only what is used, never import the full set)
- Fonts: Bricolage Grotesque (headings) + Instrument Sans (body) + Geist Mono (code/labels)
  — load via `@fontsource` packages, never from Google Fonts CDN (GDPR/privacy)
- No UI component libraries (Shadcn, DaisyUI, etc.) — build components from scratch

## Project structure
- src/content/extensions/ — one .mdx per extension
- src/content/blog/ — one .mdx per blog post
- src/components/ — shared components only
- src/layouts/ — BaseLayout.astro (used on every page)
- No page-level styles. All styling via Tailwind utility classes

## Design system — follow exactly, do not deviate

### Color palette (Warm Craft direction)
- --color-bg: #F6F2EC
- --color-surface: #FFFFFF
- --color-text: #1C1917
- --color-muted: #8C7F72
- --color-accent: #2B4FFF
- --color-accent-hover: #1A3CE8
- --color-dark-bg: #111318
- --color-dark-surface: #1C1F28
- --color-border: #E5DED5

### Typography scale
- Display (hero headings): Bricolage Grotesque, 56px/60px, weight 700
- H1: 40px/44px, weight 700
- H2: 28px/34px, weight 600
- H3: 20px/26px, weight 600
- Body: Instrument Sans, 16px/26px, weight 400
- Small/caption: 14px/20px
- Mono labels (version numbers, extension IDs): Geist Mono, 13px

### Spacing
- Use only multiples of 4px (Tailwind's default 4px grid)
- Section vertical padding: always py-20 (80px) minimum, py-32 (128px) for hero
- Container max-width: max-w-6xl, centered, px-6

### Border radius
- Cards: rounded-xl (12px)
- Buttons: rounded-lg (8px)
- Badges/chips: rounded-full
- Never mix these — pick one per element type and be consistent

### Shadows
- Cards: shadow-sm only. Never shadow-lg or shadow-xl on flat designs
- No drop shadows on text
- No neumorphic or glassmorphism effects

## Component rules

### Hero sections
- Single clear headline (max 8 words), subtitle max 2 lines
- One primary CTA button (accent color), one secondary (ghost/outline)
- Show the extension in action — a screenshot or GIF directly below or beside the headline
- NO gradient blobs, NO animated particle backgrounds, NO floating decorative shapes

### Feature sections
- Max 3 columns on desktop
- Each feature: icon (Lucide, 20px, stroke-width 1.5), heading, 2 sentences max
- Icons: use accent color, NOT emoji

### Cards (extension directory)
- White background on the warm off-white page bg
- 1px border using --color-border
- shadow-sm
- Hover: translate-y-[-2px] with transition-transform duration-200 — nothing more

### Buttons
- Primary: bg-accent text-white, py-3 px-6, font-medium, rounded-lg
- Secondary: border border-accent text-accent bg-transparent
- Never use gradient backgrounds on buttons
- Focus ring: ring-2 ring-accent ring-offset-2 (accessibility)

### Navigation
- Sticky, bg-[#F6F2EC]/90 backdrop-blur-sm
- Logo left, links center or right
- Active link: text-accent font-medium
- Mobile: hamburger menu with slide-in drawer, NOT a full-page overlay

## What NOT to generate (hard stops)

### Visual
- No purple or blue gradient hero backgrounds
- No "floating" card grids with heavy box shadows
- No emoji used as icons or bullet points
- No stock illustration-style SVGs (the generic "person with laptop" style)
- No animated counters ("5,000+ happy users" incrementing on scroll)
- No generic testimonial blocks with avatars unless real reviews are provided
- No "as featured in" logo rows unless explicitly asked

### Code
- No inline styles (style="...") — use Tailwind classes only
- No !important in CSS
- No hardcoded pixel values outside of the design system above
- No jQuery, no Alpine.js, no extra JS frameworks
- Astro Islands only for components that genuinely need client-side JS
- No console.log left in committed code

### Content
- Do not write placeholder copy like "Lorem ipsum" or "Extension Name Here"
- Do not use "Supercharge", "Boost", "Seamlessly", "Powerful", "Effortless" in marketing copy
- Write copy as a developer talking to another developer — direct, specific, honest

## Verification steps (run after every UI task)
- Check that fonts loaded from @fontsource, not external CDN
- Check that no new npm dependencies were added without asking first
- Test mobile layout at 375px and 768px
- Run `astro check` to confirm TypeScript errors are zero
- Verify each new page has proper <title>, meta description, and og:image
