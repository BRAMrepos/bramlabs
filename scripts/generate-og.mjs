/**
 * Generates 1200x630 PNG social cards into public/og/.
 *
 * PNG, not SVG: most social crawlers (including Slack, Discord and X)
 * refuse SVG og:image entirely, so the previous /og/*.svg cards were
 * effectively invisible.
 *
 * Run: npm run generate:og
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "og");

const W = 1200;
const H = 630;

// Mirrors the tokens in src/styles/global.scss.
const PAPER = "#f3efe6";
const INK = "#141416";
const MUTED = "#6b6860";
const LINE = "#ddd8cd";

// librsvg resolves generic families unpredictably here — `sans-serif` maps to
// a monospace face on some builds — so families are named explicitly. The site's
// real faces (Bricolage Grotesque, Instrument Sans) are not available to the
// rasteriser, and Arial is the closest grotesque present everywhere.
const SANS = "Arial,Helvetica,sans-serif";
const BR = String.fromCharCode(10);
const MONO = "ui-monospace,monospace";

/** XML-escape text going into the SVG source. */
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Naive width-aware wrap. Font metrics are unavailable here, so this
 * approximates using an average glyph width ratio — good enough for a card
 * with generous margins, and it never overflows because maxChars is
 * conservative.
 */
function wrap(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/**
 * Trims a subtitle to the given number of lines without leaving a dangling
 * clause. Prefers ending at a sentence boundary, then strips trailing
 * connectives so a card never reads "... by BramLabs —".
 */
function clampLines(text, maxChars, maxLines) {
  const lines = wrap(text, maxChars);
  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  let last = kept[maxLines - 1];
  // Cut back to the last sentence end if there is one on this line.
  const stop = Math.max(last.lastIndexOf(". "), last.lastIndexOf("."));
  if (stop > last.length * 0.4) {
    last = last.slice(0, stop + 1);
  } else {
    last = last.replace(/[\s,;:—–-]+$/, "") + "…";
  }
  kept[maxLines - 1] = last;
  return kept;
}

function card({ eyebrow, title, subtitle, footer }) {
  const titleSize = title.length > 34 ? 66 : 82;
  const titleLines = wrap(title, title.length > 34 ? 26 : 22).slice(0, 3);
  const subLines = subtitle ? clampLines(subtitle, 58, 2) : [];

  const titleY = 250;
  const lineHeight = titleSize * 1.12;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <rect x="0" y="0" width="14" height="${H}" fill="${INK}"/>
  <rect x="80" y="${H - 132}" width="${W - 160}" height="1" fill="${LINE}"/>

  <text x="80" y="120" font-family="ui-monospace,monospace" font-size="22"
        fill="${MUTED}" letter-spacing="4">${esc(eyebrow.toUpperCase())}</text>

${titleLines
  .map(
    (l, i) =>
      `  <text x="80" y="${titleY + i * lineHeight}" font-family="Arial,Helvetica,sans-serif" font-size="${titleSize}" font-weight="700" fill="${INK}" letter-spacing="-2">${esc(l)}</text>`,
  )
  .join("\n")}

${subLines
  .map(
    (l, i) =>
      `  <text x="80" y="${titleY + titleLines.length * lineHeight + 30 + i * 42}" font-family="Arial,Helvetica,sans-serif" font-size="31" fill="${MUTED}">${esc(l)}</text>`,
  )
  .join("\n")}

  <text x="80" y="${H - 72}" font-family="ui-monospace,monospace" font-size="21"
        fill="${INK}" letter-spacing="1">bramlabs.co</text>
  <text x="${W - 80}" y="${H - 72}" text-anchor="end" font-family="ui-monospace,monospace"
        font-size="21" fill="${MUTED}" letter-spacing="1">${esc(footer)}</text>
</svg>`;
}

/**
 * Design cards composite the real artwork onto a dark panel on the right.
 * The apparel pages previously passed a raw .svg as og:image, which most
 * crawlers refuse outright.
 */
async function renderDesignCard(slug, title, subtitle, artPath) {
  const PANEL = 470;
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <rect x="0" y="0" width="14" height="${H}" fill="${INK}"/>
  <rect x="${W - PANEL}" y="0" width="${PANEL}" height="${H}" fill="#09090b"/>
  <text x="80" y="120" font-family="${MONO}" font-size="22" fill="${MUTED}" letter-spacing="4">APPAREL GRAPHIC</text>
${wrap(title, 16)
    .slice(0, 3)
    .map(
      (l, i) =>
        `  <text x="80" y="${250 + i * 74}" font-family="${SANS}" font-size="66" font-weight="700" fill="${INK}" letter-spacing="-2">${esc(l)}</text>`,
    )
    .join(BR)}
${clampLines(subtitle, 34, 2)
    .map(
      (l, i) =>
        `  <text x="80" y="${250 + wrap(title, 16).slice(0, 3).length * 74 + 26 + i * 38}" font-family="${SANS}" font-size="28" fill="${MUTED}">${esc(l)}</text>`,
    )
    .join(BR)}
  <text x="80" y="${H - 72}" font-family="${MONO}" font-size="21" fill="${INK}" letter-spacing="1">bramlabs.co</text>
</svg>`);

  const art = await sharp(artPath)
    .resize(330, 330, { fit: "contain", background: { r: 9, g: 9, b: 11, alpha: 1 } })
    .toBuffer();

  const png = await sharp(bg)
    .composite([{ input: art, left: W - PANEL + (PANEL - 330) / 2, top: (H - 330) / 2 }])
    .png({ compressionLevel: 9 })
    .toBuffer();

  await writeFile(join(outDir, `design-${slug}.png`), png);
  console.log(`  design-${slug}.png  ${(png.length / 1024).toFixed(0)} KB`);
}

async function render(name, svg) {
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  await writeFile(join(outDir, `${name}.png`), png);
  console.log(`  ${name}.png  ${(png.length / 1024).toFixed(0)} KB`);
}

async function main() {
  await mkdir(outDir, { recursive: true });

  // Import the product list so cards cannot drift from the data.
  const { software } = await import("../src/data/software.ts").catch(() => ({
    software: null,
  }));

  console.log("Generating social cards:");

  await render(
    "home",
    card({
      eyebrow: "Independent software studio",
      title: "Small software for people who work in systems.",
      subtitle:
        "Shift tracking, spoken routines, browser tools that stay out of the way.",
      footer: "Software · Apparel",
    }),
  );

  await render(
    "software",
    card({
      eyebrow: "Products",
      title: "Independent software from BramLabs",
      subtitle:
        "Every product has its own support page and privacy policy.",
      footer: "bramlabs.co/software",
    }),
  );

  await render(
    "collection",
    card({
      eyebrow: "Apparel graphics",
      title: "Original vector work for dark fabric",
      subtitle:
        "Technical illustration for shift workers, developers and focused minds.",
      footer: "bramlabs.co/collection",
    }),
  );

  if (Array.isArray(software)) {
    for (const p of software) {
      if (p.status !== "published") continue;
      await render(
        `product-${p.slug}`,
        card({
          eyebrow: p.platform,
          title: p.title,
          subtitle: p.description,
          footer: `bramlabs.co/software/${p.slug}`,
        }),
      );
    }
  } else {
    console.log(
      "  (skipped per-product cards — run through a TS-aware loader to include them)",
    );
  }

  // Per-design cards, compositing the real artwork.
  const { designs } = await import("../src/data/designs.ts").catch(() => ({
    designs: null,
  }));
  if (Array.isArray(designs)) {
    for (const d of designs) {
      // Prefer the raster master; the .svg source is unusable as og:image.
      const art = join(
        root,
        "public",
        d.images.rawArtwork.replace(/\.svg$/, ".png"),
      );
      try {
        await renderDesignCard(d.slug, d.title, d.seo?.description ?? d.title, art);
      } catch (err) {
        console.warn(`  ! skipped design-${d.slug}: ${err.message}`);
      }
    }
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
