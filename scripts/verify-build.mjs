/**
 * Post-build gate. Run against dist/ after `npm run build`.
 *
 * Catches the failure modes this site has actually had:
 *  - a documented product with no privacy or support page (store-policy risk).
 *    Covers "submitted" as well as "published": a store submission must name a
 *    privacy URL that already resolves, so those pages matter most before launch.
 *  - an og:image pointing at a file that does not exist, or at an SVG
 *    (most social crawlers reject SVG outright)
 *  - an internal link to a page that was renamed or deleted
 *  - a legacy store URL that stopped resolving
 *
 * Run: npm run verify
 */
import { readFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(root, "dist", "client");

const problems = [];
const notes = [];

function fail(msg) {
  problems.push(msg);
}

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else out.push(full);
  }
  return out;
}

const toUrl = (abs) => "/" + relative(DIST, abs).split(sep).join("/");

async function main() {
  if (!existsSync(DIST)) {
    console.error(`No build found at ${DIST}. Run \`npm run build\` first.`);
    process.exit(1);
  }

  const files = await walk(DIST);
  const fileUrls = new Set(files.map(toUrl));
  const pages = new Set(
    [...fileUrls]
      .filter((u) => u.endsWith("/index.html"))
      .map((u) => u.slice(0, -"index.html".length)),
  );
  const htmlFiles = files.filter((f) => f.endsWith(".html"));

  // ── redirects ────────────────────────────────────────────────────
  const redirects = new Map();
  const splats = [];
  const redirectFile = join(DIST, "_redirects");
  if (existsSync(redirectFile)) {
    for (const line of (await readFile(redirectFile, "utf8")).split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const [from, to] = t.split(/\s+/);
      if (!from || !to) continue;
      if (from.endsWith("*")) splats.push(from.slice(0, -1));
      else redirects.set(from, to);
    }
  } else {
    fail("_redirects is missing from the build output");
  }

  const resolves = (url) =>
    pages.has(url) ||
    fileUrls.has(url) ||
    redirects.has(url) ||
    splats.some((s) => url.startsWith(s));

  // ── 1. every documented product has its store-required pages ─────
  const { getDocumentedSoftware } = await import("../src/data/software.ts");
  const products = getDocumentedSoftware();
  for (const p of products) {
    for (const kind of ["", "privacy/", "support/"]) {
      const url = `/software/${p.slug}/${kind}`;
      if (!pages.has(url)) fail(`${p.title}: missing page ${url}`);
    }
  }
  notes.push(
    `${products.length} documented products, each with overview + privacy + support`,
  );

  // ── 2. legacy store URLs still resolve ───────────────────────────
  // These exact paths are filed with Amazon and the Chrome Web Store.
  const legacy = products.flatMap((p) => p.legacyPaths ?? []);
  for (const url of legacy) {
    if (!resolves(url)) fail(`legacy store URL no longer resolves: ${url}`);
    const bare = url.replace(/\/$/, "");
    if (!resolves(bare)) fail(`legacy store URL (no trailing slash) no longer resolves: ${bare}`);
  }
  notes.push(`${legacy.length} legacy store URLs still resolve`);

  // ── 3. og:image sanity ───────────────────────────────────────────
  let ogChecked = 0;
  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    const m = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (!m) {
      fail(`${toUrl(file)}: no og:image`);
      continue;
    }
    ogChecked++;
    const url = m[1].replace("https://bramlabs.co", "");
    if (url.endsWith(".svg")) {
      fail(`${toUrl(file)}: og:image is an SVG (crawlers reject these): ${url}`);
    }
    if (!fileUrls.has(url)) {
      fail(`${toUrl(file)}: og:image file does not exist: ${url}`);
    }
  }
  notes.push(`${ogChecked} pages have a real, non-SVG og:image`);

  // ── 4. internal links ────────────────────────────────────────────
  const broken = new Map();
  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
      const url = href.split("#")[0].split("?")[0];
      if (!url || resolves(url)) continue;
      if (!broken.has(url)) broken.set(url, toUrl(file));
    }
  }
  for (const [url, src] of broken) fail(`broken internal link ${url} (first seen in ${src})`);
  notes.push(`${pages.size} pages, 0 broken internal links`);

  // ── 5. titles and descriptions ───────────────────────────────────
  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    if (!/<title>[^<]{4,}<\/title>/.test(html)) fail(`${toUrl(file)}: missing or empty <title>`);
    if (!/<meta name="description" content="[^"]{20,}"/.test(html))
      fail(`${toUrl(file)}: missing or too-short meta description`);
  }

  // ── 6. app-ads.txt ───────────────────────────────────────────────
  // A malformed or missing app-ads.txt fails silently: nothing breaks, ad
  // buyers just decline to bid on unverifiable inventory. Check it here so
  // the failure is loud at build time instead of invisible in revenue.
  const adsPath = join(DIST, "app-ads.txt");
  if (!existsSync(adsPath)) {
    fail("app-ads.txt is missing from the site root");
  } else {
    const lines = (await readFile(adsPath, "utf8"))
      .split(/\r?\n/)
      .map((l) => l.replace(/#.*$/, "").trim())
      .filter(Boolean);

    if (lines.length === 0) {
      fail("app-ads.txt has no records");
    }
    for (const line of lines) {
      // exchange domain, publisher id, DIRECT|RESELLER [, certification id]
      const fields = line.split(",").map((f) => f.trim());
      if (fields.length < 3 || fields.length > 4) {
        fail(`app-ads.txt: expected 3 or 4 comma-separated fields, got ${fields.length} in "${line}"`);
        continue;
      }
      const [domain, publisherId, relationship, certId] = fields;
      if (!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain)) {
        fail(`app-ads.txt: "${domain}" is not a valid exchange domain`);
      }
      if (!publisherId) {
        fail(`app-ads.txt: empty publisher id in "${line}"`);
      }
      if (!["DIRECT", "RESELLER"].includes(relationship.toUpperCase())) {
        fail(`app-ads.txt: relationship must be DIRECT or RESELLER, got "${relationship}"`);
      }
      if (certId !== undefined && !/^[a-f0-9]{16}$/i.test(certId)) {
        fail(`app-ads.txt: certification authority id "${certId}" should be 16 hex characters`);
      }
    }
    // A redirect on this path stops the crawler cold.
    if (redirects.has("/app-ads.txt") || splats.some((s) => "/app-ads.txt".startsWith(s))) {
      fail("app-ads.txt is shadowed by a redirect rule — crawlers must get a 200");
    }
    notes.push(`app-ads.txt served at the root with ${lines.length} valid record(s)`);
  }

  // ── report ───────────────────────────────────────────────────────
  if (problems.length > 0) {
    console.error(`\nBuild verification FAILED — ${problems.length} problem(s):\n`);
    for (const p of problems) console.error(`  ✗ ${p}`);
    console.error("");
    process.exit(1);
  }

  console.log("\nBuild verification passed:");
  for (const n of notes) console.log(`  ✓ ${n}`);
  console.log("");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
