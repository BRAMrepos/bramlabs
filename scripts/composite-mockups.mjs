import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const mockupsDir = 'C:/Users/hp/.gemini/antigravity/scratch/bramlabs-site/public/mockups';
const designsDir = 'C:/Users/hp/.gemini/antigravity/scratch/bramlabs-site/public/designs';

const designsList = [
  { slug: 'rotation-dial', color: 'black' },
  { slug: 'circadian-corrupted', color: 'navy' },
  { slug: '24h-hand-off', color: 'black' },
  { slug: '37-tabs-open', color: 'navy' },
  { slug: 'build-47', color: 'black' },
  { slug: 'wireframe-anatomy', color: 'black' },
  { slug: 'focus-waveform', color: 'black' },
  { slug: 'signal-noise', color: 'black' },
  { slug: 'streak-grid-365', color: 'black' },
  { slug: 'protect-your-ears', color: 'navy' },
  { slug: 'maintenance-window', color: 'navy' },
  { slug: 'bramlabs-modular-grid', color: 'black' }
];

async function generateMockups() {
  for (const d of designsList) {
    const baseFile = d.color === 'navy' 
      ? path.join(mockupsDir, '_base-tee-navy.jpg') 
      : path.join(mockupsDir, '_base-tee-black.jpg');

    const svgFile = path.join(designsDir, `${d.slug}-art.svg`);
    const outJpg = path.join(mockupsDir, `${d.slug}-tee.jpg`);
    const outWebp = path.join(mockupsDir, `${d.slug}-tee.webp`);

    if (!fs.existsSync(baseFile)) {
      console.error(`Base file missing: ${baseFile}`);
      continue;
    }
    if (!fs.existsSync(svgFile)) {
      console.error(`SVG file missing: ${svgFile}`);
      continue;
    }

    // Render SVG artwork to 400x400 PNG buffer
    const graphicBuffer = await sharp(svgFile)
      .resize(400, 400, { fit: 'contain' })
      .png()
      .toBuffer();

    // Composite graphic onto base tee chest (centered around x: 200, y: 250 on an 800x1000 base image)
    const baseMetadata = await sharp(baseFile).metadata();
    const width = baseMetadata.width || 800;
    const height = baseMetadata.height || 1000;

    const left = Math.round((width - 400) / 2);
    const top = Math.round(height * 0.26);

    const composited = sharp(baseFile).composite([
      {
        input: graphicBuffer,
        top: top,
        left: left,
        blend: 'over'
      }
    ]);

    await composited.jpeg({ quality: 92 }).toFile(outJpg);
    await composited.webp({ quality: 92 }).toFile(outWebp);

    console.log(`Generated mockup for ${d.slug} (${d.color}) -> ${d.slug}-tee.jpg & .webp`);
  }
}

generateMockups().catch(console.error);
