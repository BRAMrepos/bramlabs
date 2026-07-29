/** Composite SVG art onto photoreal tee base → JPG/WebP mockups */
import sharp from "sharp";
import fs from "fs";
import path from "path";

const basePath = "public/mockups/_base-tee.jpg";
const designsDir = "public/designs";
const outDir = "public/mockups";
const slugs = [
  "rotation-dial","circadian-corrupted","24h-hand-off","37-tabs-open",
  "build-47","wireframe-anatomy","focus-waveform","signal-noise",
  "streak-grid-365","protect-your-ears","maintenance-window","bramlabs-modular-grid",
];

const baseMeta = await sharp(basePath).metadata();
const W = baseMeta.width, H = baseMeta.height;
const printSize = Math.round(W * 0.48);
const printLeft = Math.round((W - printSize) / 2);
const printTop = Math.round(H * 0.36);

async function artToPrintOverlay(svgPath) {
  const raw = await sharp(svgPath, { density: 320 })
    .resize(printSize, printSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { data, info } = raw;
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
    if (r > 228 && g > 222 && b > 205) { data[i + 3] = 0; continue; }
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (lum < 55) {
      const t = lum / 55;
      data[i] = Math.round(244 - t * 20);
      data[i + 1] = Math.round(241 - t * 18);
      data[i + 2] = Math.round(233 - t * 15);
      data[i + 3] = Math.min(255, Math.round(a * 0.97));
      continue;
    }
    if (lum < 110 && Math.abs(r - g) < 18 && Math.abs(g - b) < 18) {
      const lift = 180 + (lum / 110) * 40;
      data[i] = data[i + 1] = data[i + 2] = Math.round(lift);
      data[i + 3] = Math.min(255, Math.round(a * 0.95));
      continue;
    }
    data[i + 3] = Math.min(255, Math.round(a * 0.97));
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

for (const slug of slugs) {
  const overlay = await artToPrintOverlay(path.join(designsDir, `${slug}-art.svg`));
  await sharp(basePath).composite([{ input: overlay, left: printLeft, top: printTop }])
    .jpeg({ quality: 92 }).toFile(path.join(outDir, `${slug}-tee.jpg`));
  await sharp(basePath).composite([{ input: overlay, left: printLeft, top: printTop }])
    .webp({ quality: 90 }).toFile(path.join(outDir, `${slug}-tee.webp`));
  console.log("ok", slug);
}
