import fs from 'fs';
import path from 'path';

const processDir = 'C:/Users/hp/.gemini/antigravity/scratch/bramlabs-site/public/process';

const processStage03 = {
  'rotation-dial': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#09090b"/>
    <g transform="translate(300, 300)">
      <circle cx="0" cy="0" r="220" fill="none" stroke="#F4F1E9" stroke-width="1.5" opacity="0.3"/>
      <path d="M 0 -190 A 190 190 0 0 1 164 95" fill="none" stroke="#23C5EF" stroke-width="18"/>
      <path d="M 143 124 A 190 190 0 0 1 -164 95" fill="none" stroke="#FF862E" stroke-width="18"/>
      <path d="M -164 65 A 190 190 0 0 1 -24 -188" fill="none" stroke="#F4F1E9" stroke-width="18"/>
      <circle cx="0" cy="0" r="95" fill="none" stroke="#F4F1E9" stroke-width="2"/>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  'circadian-corrupted': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#0f172a"/>
    <g transform="translate(60, 100)">
      <line x1="0" y1="180" x2="480" y2="180" stroke="#475569" stroke-width="1.5" stroke-dasharray="4,4"/>
      <path d="M 0 180 L 220 180 C 270 180, 290 80, 350 80 C 410 80, 430 280, 480 280" fill="none" stroke="#7976E8" stroke-width="10"/>
      <circle cx="350" cy="80" r="6" fill="#23C5EF"/>
    </g>
    <text x="300" y="550" fill="#7976E8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  '24h-hand-off': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#09090b"/>
    <g transform="translate(300, 280)">
      <path d="M -180 -80 L 100 -80 A 24 24 0 0 1 124 -56 L 124 -56 A 24 24 0 0 1 100 -32 L -180 -32" fill="none" stroke="#23C5EF" stroke-width="12"/>
      <path d="M -100 -10 L 180 -10 A 24 24 0 0 1 204 14 L 204 14 A 24 24 0 0 1 180 38 L -100 38" fill="none" stroke="#FF862E" stroke-width="12"/>
      <path d="M -180 60 L 100 60 A 24 24 0 0 1 124 84 L 124 84 A 24 24 0 0 1 100 108 L -180 108" fill="none" stroke="#F4F1E9" stroke-width="12"/>
      <circle cx="100" cy="-56" r="10" fill="#23C5EF"/>
      <circle cx="-100" cy="14" r="10" fill="#FF862E"/>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  '37-tabs-open': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#0f172a"/>
    <g transform="translate(80, 140)">
      <rect x="0" y="0" width="440" height="300" rx="12" fill="none" stroke="#F4F1E9" stroke-width="4"/>
      <line x1="0" y1="50" x2="440" y2="50" stroke="#F4F1E9" stroke-width="2"/>
      <path d="M 90 50 L 100 15 L 200 15 L 210 50 Z" fill="#23C5EF"/>
      <rect x="20" y="70" width="400" height="26" rx="6" fill="none" stroke="#23C5EF" stroke-width="2"/>
      <text x="220" y="180" fill="#F4F1E9" font-family="sans-serif" font-size="38" font-weight="900" text-anchor="middle">37 TABS OPEN</text>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  'build-47': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#09090b"/>
    <g transform="translate(300, 300)">
      <path d="M -200 -180 L -200 -220 L -160 -220" fill="none" stroke="#FF862E" stroke-width="4"/>
      <path d="M 160 -220 L 200 -220 L 200 -180" fill="none" stroke="#FF862E" stroke-width="4"/>
      <path d="M -200 180 L -200 220 L -160 220" fill="none" stroke="#FF862E" stroke-width="4"/>
      <path d="M 160 220 L 200 220 L 200 180" fill="none" stroke="#FF862E" stroke-width="4"/>
      <text x="0" y="-140" fill="#23C5EF" font-family="monospace" font-size="22" font-weight="bold" letter-spacing="8" text-anchor="middle">BUILD</text>
      <text x="0" y="100" fill="none" stroke="#F4F1E9" stroke-width="12" stroke-linejoin="miter" font-family="sans-serif" font-size="200" font-weight="900" text-anchor="middle">47</text>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  'wireframe-anatomy': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#09090b"/>
    <g transform="translate(160, 80)">
      <rect x="0" y="0" width="280" height="420" rx="20" fill="none" stroke="#F4F1E9" stroke-width="4"/>
      <rect x="20" y="80" width="240" height="120" rx="8" fill="none" stroke="#23C5EF" stroke-width="3"/>
      <line x1="20" y1="80" x2="260" y2="200" stroke="#23C5EF" stroke-width="1.5"/>
      <line x1="260" y1="80" x2="20" y2="200" stroke="#23C5EF" stroke-width="1.5"/>
      <rect x="20" y="220" width="110" height="80" rx="6" fill="none" stroke="#F4F1E9" stroke-width="2"/>
      <rect x="150" y="220" width="110" height="80" rx="6" fill="none" stroke="#F4F1E9" stroke-width="2"/>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  'focus-waveform': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#09090b"/>
    <g transform="translate(60, 300)">
      <line x1="0" y1="0" x2="480" y2="0" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
      <path d="M 0 0 Q 100 -30 200 0 C 240 0, 270 -160, 310 -160 C 350 -160, 380 100, 420 0 Q 450 20 480 0" fill="none" stroke="#23C5EF" stroke-width="8"/>
      <circle cx="310" cy="-160" r="8" fill="#FF862E"/>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  'signal-noise': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#09090b"/>
    <g transform="translate(300, 280)">
      <line x1="0" y1="-180" x2="0" y2="180" stroke="#F4F1E9" stroke-width="3"/>
      <path d="M -220 100 C -170 100, -140 -100, -90 -100 C -40 -100, -20 0, -5 0" fill="none" stroke="#23C5EF" stroke-width="8"/>
      <g fill="#F4F1E9" opacity="0.8">
        <circle cx="50" cy="-100" r="4"/><circle cx="100" cy="-60" r="8"/><circle cx="180" cy="-120" r="6"/>
        <circle cx="120" cy="40" r="6"/><circle cx="200" cy="80" r="5"/>
      </g>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  'streak-grid-365': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#09090b"/>
    <g transform="translate(100, 160)" fill="none" stroke="#F4F1E9" stroke-width="2">
      <rect x="0" y="0" width="40" height="40" rx="6"/><rect x="55" y="0" width="40" height="40" rx="6"/><rect x="110" y="0" width="40" height="40" rx="6"/><rect x="165" y="0" width="40" height="40" rx="6"/><rect x="220" y="0" width="40" height="40" rx="6"/><rect x="275" y="0" width="40" height="40" rx="6"/><rect x="330" y="0" width="40" height="40" rx="6"/>
      <rect x="0" y="55" width="40" height="40" rx="6"/><rect x="55" y="55" width="40" height="40" rx="6"/><rect x="110" y="55" width="40" height="40" rx="6"/><rect x="165" y="55" width="40" height="40" rx="6"/><rect x="220" y="55" width="40" height="40" rx="6"/>
      <rect x="275" y="55" width="40" height="40" rx="6" fill="#FF862E" stroke="#FF862E"/>
      <rect x="330" y="55" width="40" height="40" rx="6"/>
    </g>
    <text x="300" y="380" fill="#23C5EF" font-family="sans-serif" font-size="100" font-weight="900" text-anchor="middle">365</text>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  'protect-your-ears': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#0f172a"/>
    <g transform="translate(300, 280)">
      <circle cx="0" cy="0" r="200" fill="none" stroke="#F4F1E9" stroke-width="4"/>
      <circle cx="0" cy="0" r="150" fill="none" stroke="#23C5EF" stroke-width="8"/>
      <path d="M -110 -110 A 155 155 0 0 1 110 -110" fill="none" stroke="#FF862E" stroke-width="14" stroke-linecap="round"/>
      <line x1="0" y1="-150" x2="0" y2="-210" stroke="#FF862E" stroke-width="5"/>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  'maintenance-window': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#0f172a"/>
    <g transform="translate(80, 140)">
      <rect x="0" y="0" width="440" height="300" rx="14" fill="none" stroke="#F4F1E9" stroke-width="4"/>
      <line x1="0" y1="50" x2="440" y2="50" stroke="#F4F1E9" stroke-width="2"/>
      <rect x="320" y="14" width="100" height="22" rx="11" fill="#23C5EF"/>
      <text x="220" y="160" fill="#F4F1E9" font-family="sans-serif" font-size="28" font-weight="900" text-anchor="middle">MAINTENANCE WINDOW</text>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`,

  'bramlabs-modular-grid': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
    <rect width="600" height="600" fill="#09090b"/>
    <g transform="translate(300, 280)">
      <line x1="-220" y1="0" x2="220" y2="0" stroke="#F4F1E9" stroke-width="3"/>
      <line x1="0" y1="-220" x2="0" y2="220" stroke="#F4F1E9" stroke-width="3"/>
      <rect x="-160" y="-160" width="320" height="320" fill="none" stroke="#F4F1E9" stroke-width="1.5" stroke-dasharray="4,4"/>
      <rect x="15" y="-90" width="75" height="75" rx="6" fill="#23C5EF"/>
      <rect x="-90" y="15" width="75" height="75" rx="6" fill="#FF862E"/>
    </g>
    <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 03: VECTOR MASTER ART</text>
  </svg>`
};

Object.entries(processStage03).forEach(([slug, svgContent]) => {
  const stage03Path = path.join(processDir, `${slug}-art.svg`);
  fs.writeFileSync(stage03Path, svgContent.trim());
  console.log(`Updated Stage 03 dark SVG for ${slug}`);
});

console.log('All Stage 03 process SVGs updated with consistent dark backgrounds!');
