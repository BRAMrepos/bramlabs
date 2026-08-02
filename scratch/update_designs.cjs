const fs = require('fs');
let code = fs.readFileSync('src/data/designs.ts', 'utf8');

const map = {
  'rotation-dial': '01',
  'circadian-corrupted': '02',
  '24h-hand-off': '03',
  '37-tabs-open': '04',
  'build-47': '05',
  'wireframe-anatomy': '06',
  'focus-waveform': '07',
  'signal-noise': '08',
  'streak-grid-365': '09',
  'protect-your-ears': '10',
  'maintenance-window': '11',
  'bramlabs-modular-grid': '12'
};

Object.entries(map).forEach(([slug, num]) => {
  const regPrimary = new RegExp(`primaryMockup:\\s*["']/mockups/${slug}-tee\\.jpg["']`, 'g');
  const regRaw = new RegExp(`rawArtwork:\\s*["']/designs/${slug}-art\\.svg["']`, 'g');
  const regDetail = new RegExp(`detail:\\s*["']/designs/${slug}-detail\\.svg["']`, 'g');

  code = code.replace(regPrimary, `primaryMockup: "/designs/design-${num}.png"`);
  code = code.replace(regRaw, `rawArtwork: "/designs/design-${num}.png"`);
  code = code.replace(regDetail, `detail: "/designs/design-${num}.png"`);
});

fs.writeFileSync('src/data/designs.ts', code);
console.log('Successfully updated src/data/designs.ts with new high quality artwork paths!');
