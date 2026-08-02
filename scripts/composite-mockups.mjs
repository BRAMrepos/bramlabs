/**
 * Composite SVG art onto unified master base tee (Black or Navy) → JPG/WebP mockups
 * 
 * Precise Garment Print Measurements & Soft Ink Blending:
 * - Base Canvas: 1024 x 1024 px flat lay studio photo
 * - Garment Collar Ribbing Bottom: y = 225 px
 * - Torso Width (pit to pit): 564 px (x: 230 to 794 px)
 * - Print Size: 520 px (corresponds to high-impact 11.8" chest print footprint)
 * - Print Top: 270 px (starts ~2.5" below front collar ribbing)
 * - Print Center: x = 512 px (horizontally centered)
 * - Ink Integration: 95% opacity modulation to blend rasterized vector art into cotton weave
 */
import sharp from "sharp";
import path from "path";

const mockupsDir = "public/mockups";
const designsDir = "public/designs";

/**
 * Generate clean Studio Navy base from Master Black base without tinting drop shadows or paper bg.
 * Dark fabric pixels (RGB < 55) map to rich midnight navy (#121b30 -> #2a3f68).
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
      output[i]     = Math.min(255, Math.round(18 + lum * 24));  // Red: #12 to #2a
      output[i + 1] = Math.min(255, Math.round(27 + lum * 36));  // Green: #1b to #3f
      output[i + 2] = Math.min(255, Math.round(48 + lum * 56));  // Blue: #30 to #68
    }
  }

  await sharp(output, { raw: { width: info.width, height: info.height, channels: 3 } })
    .jpeg({ quality: 96 })
    .toFile(targetNavy);

  console.log("✓ Generated clean Studio Navy base tee without shadow artifacts.");
}

const PRINT_SIZE = 520;
const PRINT_TOP = 270;

const designs = {
  "rotation-dial":         { base: "public/mockups/_base-tee-black.jpg", size: PRINT_SIZE, top: PRINT_TOP },
  "circadian-corrupted":   { base: "public/mockups/_base-tee-navy.jpg",  size: PRINT_SIZE, top: PRINT_TOP },
  "24h-hand-off":          { base: "public/mockups/_base-tee-navy.jpg",  size: PRINT_SIZE, top: PRINT_TOP },
  "37-tabs-open":          { base: "public/mockups/_base-tee-black.jpg", size: PRINT_SIZE, top: PRINT_TOP },
  "build-47":              { base: "public/mockups/_base-tee-black.jpg", size: PRINT_SIZE, top: PRINT_TOP },
  "wireframe-anatomy":     { base: "public/mockups/_base-tee-navy.jpg",  size: PRINT_SIZE, top: PRINT_TOP },
  "focus-waveform":        { base: "public/mockups/_base-tee-black.jpg", size: PRINT_SIZE, top: PRINT_TOP },
  "signal-noise":          { base: "public/mockups/_base-tee-black.jpg", size: PRINT_SIZE, top: PRINT_TOP },
  "streak-grid-365":       { base: "public/mockups/_base-tee-navy.jpg",  size: PRINT_SIZE, top: PRINT_TOP },
  "protect-your-ears":     { base: "public/mockups/_base-tee-black.jpg", size: PRINT_SIZE, top: PRINT_TOP },
  "maintenance-window":    { base: "public/mockups/_base-tee-black.jpg", size: PRINT_SIZE, top: PRINT_TOP },
  "bramlabs-modular-grid": { base: "public/mockups/_base-tee-navy.jpg",  size: PRINT_SIZE, top: PRINT_TOP },
};

async function compositeAll() {
  console.log("BramLabs High-Impact Mockup Compositor");
  await ensureUnifiedBaseTees();

  for (const [slug, cfg] of Object.entries(designs)) {
    const baseMeta = await sharp(cfg.base).metadata();
    const W = baseMeta.width;

    const printSize = cfg.size;
    const printLeft = Math.round((W - printSize) / 2);
    const printTop  = cfg.top;

    // 1. Render SVG overlay at 300 DPI
    const overlayRaw = await sharp(
      path.join(designsDir, `${slug}-art.svg`),
      { density: 300 }
    )
      .resize(printSize, printSize, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    // 2. Modulate alpha to 95% for realistic screenprint ink integration into cotton
    const { data, info } = await sharp(overlayRaw).raw().toBuffer({ resolveWithObject: true });
    const alphaModulated = Buffer.from(data);
    for (let i = 3; i < alphaModulated.length; i += 4) {
      if (alphaModulated[i] > 0) {
        alphaModulated[i] = Math.round(alphaModulated[i] * 0.95);
      }
    }

    const overlay = await sharp(alphaModulated, {
      raw: { width: info.width, height: info.height, channels: 4 }
    })
      .png()
      .toBuffer();

    // 3. Composite onto garment base
    await sharp(cfg.base)
      .composite([{ input: overlay, left: printLeft, top: printTop }])
      .jpeg({ quality: 96 })
      .toFile(path.join(mockupsDir, `${slug}-tee.jpg`));

    await sharp(cfg.base)
      .composite([{ input: overlay, left: printLeft, top: printTop }])
      .webp({ quality: 94 })
      .toFile(path.join(mockupsDir, `${slug}-tee.webp`));

    const shirtLabel = cfg.base.includes("navy") ? "navy" : "black";
    console.log(`✓ [${shirtLabel.padEnd(5)}] ${slug}`);
  }

  console.log("\nAll 12 high-impact mockups successfully generated with 520px chest scale & 95% ink integration.");
}

compositeAll().catch(console.error);
