import fs from 'fs';

let code = fs.readFileSync('src/data/designs.ts', 'utf8');

// Parse designs by slug
const slugs = [
  'rotation-dial',
  'circadian-corrupted',
  '24h-hand-off',
  '37-tabs-open',
  'build-47',
  'wireframe-anatomy',
  'focus-waveform',
  'signal-noise',
  'streak-grid-365',
  'protect-your-ears',
  'maintenance-window',
  'bramlabs-modular-grid'
];

slugs.forEach(slug => {
  // Update images
  const targetImages = `images: {
      primaryMockup: "/mockups/${slug}-tee.jpg",
      rawArtwork: "/designs/${slug}-art.svg",
      detail: "/designs/${slug}-detail.svg",
    }`;

  const regImages = new RegExp(`images:\\s*\\{[^\\}]+\\}`, 'g');

  // Update processStages
  const targetStages = `processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/${slug}-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/${slug}-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/${slug}-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/${slug}-tee.jpg"
      }
    ]`;

  // Find design block by slug
  const slugIndex = code.indexOf(`slug: "${slug}"`);
  if (slugIndex !== -1) {
    const nextSlugIndex = code.indexOf(`slug: "`, slugIndex + 20);
    const endBlockIndex = nextSlugIndex !== -1 ? nextSlugIndex : code.length;

    let block = code.substring(slugIndex, endBlockIndex);

    // Replace images in block
    block = block.replace(/images:\s*\{[^\}]+\}/, targetImages);
    // Replace processStages in block
    block = block.replace(/processStages:\s*\[[\s\S]*?\]\s*(?=\,|\n\s*seo:)/, targetStages);

    code = code.substring(0, slugIndex) + block + code.substring(endBlockIndex);
  }
});

fs.writeFileSync('src/data/designs.ts', code);
console.log('Successfully updated src/data/designs.ts with distinct process stage images and mockup URLs!');
