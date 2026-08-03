import fs from 'fs';
import path from 'path';

const processDir = 'C:/Users/hp/.gemini/antigravity/scratch/bramlabs-site/public/process';

if (!fs.existsSync(processDir)) {
  fs.mkdirSync(processDir, { recursive: true });
}

function writeProcessSVG(filename, content) {
  const fullPath = path.join(processDir, filename);
  fs.writeFileSync(fullPath, content.trim());
  console.log(`Created process SVG: ${filename}`);
}

const designs = [
  { slug: 'rotation-dial', title: 'Rotation Dial' },
  { slug: 'circadian-corrupted', title: 'Circadian Rhythm: Corrupted' },
  { slug: '24h-hand-off', title: '24H Hand-Off' },
  { slug: '37-tabs-open', title: '37 Tabs Open' },
  { slug: 'build-47', title: 'Build 47' },
  { slug: 'wireframe-anatomy', title: 'Wireframe Anatomy' },
  { slug: 'focus-waveform', title: 'Focus Is a Waveform' },
  { slug: 'signal-noise', title: 'Signal / Noise' },
  { slug: 'streak-grid-365', title: 'Streak Grid 365' },
  { slug: 'protect-your-ears', title: 'Protect Your Ears' },
  { slug: 'maintenance-window', title: 'Maintenance Window' },
  { slug: 'bramlabs-modular-grid', title: 'BramLabs Modular Grid' }
];

designs.forEach(d => {
  // 1. Sketch SVG (Rough Outline)
  const sketchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <rect width="600" height="600" fill="#09090b"/>
  <g transform="translate(300, 300)" stroke="#64748B" stroke-width="1.5" fill="none" stroke-dasharray="4,4" opacity="0.6">
    <circle cx="0" cy="0" r="220"/>
    <line x1="-250" y1="0" x2="250" y2="0"/>
    <line x1="0" y1="-250" x2="0" y2="250"/>
    <circle cx="0" cy="0" r="140"/>
  </g>
  <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">STAGE 01: CONCEPT SKETCH</text>
</svg>`;

  // 2. Geometry SVG (Construction Grid)
  const geometrySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <rect width="600" height="600" fill="#0f172a"/>
  <g transform="translate(300, 300)">
    <circle cx="0" cy="0" r="220" fill="none" stroke="#23C5EF" stroke-width="2" stroke-dasharray="6,6"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#FF862E" stroke-width="2"/>
    <line x1="-240" y1="-240" x2="240" y2="240" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="-240" y1="240" x2="240" y2="-240" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>
    <path d="M -160 0 A 160 160 0 0 1 0 -160" fill="none" stroke="#F4F1E9" stroke-width="8"/>
    <path d="M 0 160 A 160 160 0 0 1 160 0" fill="none" stroke="#23C5EF" stroke-width="8"/>
  </g>
  <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">STAGE 02: GEOMETRIC GRID</text>
</svg>`;

  writeProcessSVG(`${d.slug}-sketch.svg`, sketchSvg);
  writeProcessSVG(`${d.slug}-geometry.svg`, geometrySvg);
});

console.log('Finished generating process SVGs!');
