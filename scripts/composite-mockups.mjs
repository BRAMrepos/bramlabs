/** Composite SVG art onto unified master base tee (Black or Navy) → JPG/WebP mockups */
import sharp from "sharp";
import path from "path";

const mockupsDir = "public/mockups";
const designsDir = "public/designs";

/**
 * Generate clean Navy base from Master Black base without tinting drop shadows or paper bg.
 * Only pixels with RGB < 55 (the actual black fabric) are mapped to deep studio navy (#152238).
 */
async function ensureUnifiedBaseTees() {
  const masterBlack = path.join(mockupsDir, "_base-tee-black.jpg");
  const targetNavy = path.join(mockupsDir, "_base-tee-navy.jpg");

  const { data, info } = await sharp(masterBlack)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const output = Buffer.from(data);

  for (let i = 0; i < output.length; i += 3) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Target ONLY actual black fabric (dark pixels r<55, g<55, b<55)
    // Drop shadows and paper background (r > 60) remain completely untouched!
    if (r < 55 && g < 55 && b < 55) {
      const lum = (r * 0.299 + g * 0.587 + b * 0.114) / 55;
      output[i]     = Math.min(255, Math.round(15 + lum * 25));  // Red: #0f to #28
      output[i + 1] = Math.min(255, Math.round(24 + lum * 35));  // Green: #18 to #3b
      output[i + 2] = Math.min(255, Math.round(44 + lum * 55));  // Blue: #2c to #63
    }
  }

  await sharp(output, { raw: { width: info.width, height: info.height, channels: 3 } })
    .jpeg({ quality: 96 })
    .toFile(targetNavy);

  console.log("✓ Generated clean Navy base tee without shadow artifacts.");
}

/**
 * Per-design configuration
 */
const designs = {
  "rotation-dial":         { base: "public/mockups/_base-tee-black.jpg", scale: 0.33, topRatio: 0.280 },
  "circadian-corrupted":   { base: "public/mockups/_base-tee-navy.jpg",  scale: 0.33, topRatio: 0.280 },
  "24h-hand-off":          { base: "public/mockups/_base-tee-navy.jpg",  scale: 0.32, topRatio: 0.280 },
  "37-tabs-open":          { base: "public/mockups/_base-tee-black.jpg", scale: 0.32, topRatio: 0.280 },
  "build-47":              { base: "public/mockups/_base-tee-black.jpg", scale: 0.31, topRatio: 0.285 },
  "wireframe-anatomy":     { base: "public/mockups/_base-tee-navy.jpg",  scale: 0.30, topRatio: 0.280 },
  "focus-waveform":        { base: "public/mockups/_base-tee-black.jpg", scale: 0.33, topRatio: 0.290 },
  "signal-noise":          { base: "public/mockups/_base-tee-black.jpg", scale: 0.34, topRatio: 0.275 },
  "streak-grid-365":       { base: "public/mockups/_base-tee-navy.jpg",  scale: 0.34, topRatio: 0.280 },
  "protect-your-ears":     { base: "public/mockups/_base-tee-black.jpg", scale: 0.32, topRatio: 0.275 },
  "maintenance-window":    { base: "public/mockups/_base-tee-black.jpg", scale: 0.32, topRatio: 0.280 },
  "bramlabs-modular-grid": { base: "public/mockups/_base-tee-navy.jpg",  scale: 0.32, topRatio: 0.280 },
};

async function compositeAll() {
  console.log("BramLabs Master Mockup Compositor");
  await ensureUnifiedBaseTees();

  for (const [slug, cfg] of Object.entries(designs)) {
    const baseMeta = await sharp(cfg.base).metadata();
    const W = baseMeta.width;
    const H = baseMeta.height;

    const printSize = Math.round(W * cfg.scale);
    const printLeft = Math.round((W - printSize) / 2);
    const printTop  = Math.round(H * cfg.topRatio);

    const overlay = await sharp(
      path.join(designsDir, `${slug}-art.svg`),
      { density: 300 }
    )
      .resize(printSize, printSize, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .ensureAlpha()
      .png()
      .toBuffer();

    await sharp(cfg.base)
      .composite([{ input: overlay, left: printLeft, top: printTop }])
      .jpeg({ quality: 95 })
      .toFile(path.join(mockupsDir, `${slug}-tee.jpg`));

    await sharp(cfg.base)
      .composite([{ input: overlay, left: printLeft, top: printTop }])
      .webp({ quality: 92 })
      .toFile(path.join(mockupsDir, `${slug}-tee.webp`));

    const shirtLabel = cfg.base.includes("navy") ? "navy" : "black";
    console.log(`✓ [${shirtLabel.padEnd(5)}] ${slug}`);
  }

  console.log("\nAll 12 clean mockups successfully generated.");
}

compositeAll().catch(console.error);
