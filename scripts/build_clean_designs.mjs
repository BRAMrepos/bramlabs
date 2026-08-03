import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const designsDir = 'C:/Users/hp/.gemini/antigravity/scratch/bramlabs-site/public/designs';
const processDir = 'C:/Users/hp/.gemini/antigravity/scratch/bramlabs-site/public/process';
const mockupsDir = 'C:/Users/hp/.gemini/antigravity/scratch/bramlabs-site/public/mockups';

if (!fs.existsSync(designsDir)) fs.mkdirSync(designsDir, { recursive: true });
if (!fs.existsSync(processDir)) fs.mkdirSync(processDir, { recursive: true });
if (!fs.existsSync(mockupsDir)) fs.mkdirSync(mockupsDir, { recursive: true });

function writeProcessSVG(filename, content) {
  fs.writeFileSync(path.join(processDir, filename), content.trim());
}

// -------------------------------------------------------------
// 1. GENERATE PURE TRANSPARENT VECTOR SVGs FOR ALL 12 DESIGNS
// -------------------------------------------------------------

// 01 - Rotation Dial (Transparent)
const svg01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(500, 500)">
    <circle cx="0" cy="0" r="380" fill="none" stroke="#F4F1E9" stroke-width="2" stroke-dasharray="4, 16" opacity="0.4"/>
    <circle cx="0" cy="0" r="360" fill="none" stroke="#F4F1E9" stroke-width="1.5" opacity="0.2"/>
    <path d="M 0 -320 A 320 320 0 0 1 277 160" fill="none" stroke="#23C5EF" stroke-width="28" stroke-linecap="butt"/>
    <path d="M 242 210 A 320 320 0 0 1 -277 160" fill="none" stroke="#FF862E" stroke-width="28" stroke-linecap="butt"/>
    <path d="M -277 110 A 320 320 0 0 1 -40 -317" fill="none" stroke="#F4F1E9" stroke-width="28" stroke-linecap="butt"/>
    <circle cx="0" cy="0" r="260" fill="none" stroke="#F4F1E9" stroke-width="2" stroke-dasharray="8, 8" opacity="0.3"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#F4F1E9" stroke-width="4"/>
    <circle cx="0" cy="0" r="140" fill="none" stroke="#23C5EF" stroke-width="2" opacity="0.5"/>
    <text x="0" y="-395" fill="#F4F1E9" font-family="monospace" font-size="26" font-weight="bold" text-anchor="middle">07:00</text>
    <text x="340" y="210" fill="#23C5EF" font-family="monospace" font-size="26" font-weight="bold" text-anchor="start">15:00</text>
    <text x="-340" y="210" fill="#FF862E" font-family="monospace" font-size="26" font-weight="bold" text-anchor="end">23:00</text>
    <text x="0" y="-10" fill="#F4F1E9" font-family="monospace" font-size="18" font-weight="bold" letter-spacing="4" text-anchor="middle">ROTATION</text>
    <text x="0" y="22" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" letter-spacing="6" text-anchor="middle">24H COVERAGE</text>
  </g>
</svg>`;

// 02 - Night Shift Drift (Transparent)
const svg02 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(100, 200)">
    <line x1="0" y1="100" x2="800" y2="100" stroke="#475569" stroke-width="1.5" stroke-dasharray="6,6"/>
    <line x1="0" y1="200" x2="800" y2="200" stroke="#475569" stroke-width="1.5" stroke-dasharray="6,6"/>
    <line x1="0" y1="300" x2="800" y2="300" stroke="#475569" stroke-width="1.5" stroke-dasharray="6,6"/>
    <line x1="0" y1="400" x2="800" y2="400" stroke="#475569" stroke-width="1.5" stroke-dasharray="6,6"/>
    <circle cx="500" cy="250" r="220" fill="none" stroke="#23C5EF" stroke-width="3" stroke-dasharray="10,12" opacity="0.6"/>
    <path d="M 0 150 L 350 150" stroke="#F4F1E9" stroke-width="8" stroke-linecap="round"/>
    <path d="M 0 250 L 350 250" stroke="#F4F1E9" stroke-width="8" stroke-linecap="round"/>
    <path d="M 0 350 L 350 350" stroke="#F4F1E9" stroke-width="8" stroke-linecap="round"/>
    <path d="M 350 250 C 420 250, 450 120, 550 120 C 650 120, 680 380, 800 380" fill="none" stroke="#7976E8" stroke-width="12" stroke-linecap="round"/>
    <path d="M 350 150 Q 500 150 800 150" stroke="#F4F1E9" stroke-width="4" stroke-dasharray="8,8" opacity="0.4"/>
    <path d="M 350 350 Q 500 350 800 350" stroke="#F4F1E9" stroke-width="4" stroke-dasharray="8,8" opacity="0.4"/>
    <text x="0" y="520" fill="#F4F1E9" font-family="monospace" font-size="32" font-weight="bold" letter-spacing="6">NIGHT SHIFT DRIFT</text>
    <text x="0" y="560" fill="#7976E8" font-family="monospace" font-size="16" font-weight="bold" letter-spacing="3">STATUS: CONTROLLED DISRUPTION // 03:00 HRS</text>
  </g>
</svg>`;

// 03 - 24H Hand-Off (Transparent)
const svg03 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(500, 480)">
    <path d="M -320 -140 L 180 -140 A 40 40 0 0 1 220 -100 A 40 40 0 0 1 180 -60 L -320 -60" fill="none" stroke="#23C5EF" stroke-width="16" stroke-linecap="round"/>
    <path d="M -180 -20 L 320 -20 A 40 40 0 0 1 360 20 A 40 40 0 0 1 320 60 L -180 60" fill="none" stroke="#FF862E" stroke-width="16" stroke-linecap="round"/>
    <path d="M -320 100 L 180 100 A 40 40 0 0 1 220 140 A 40 40 0 0 1 180 180 L -320 180" fill="none" stroke="#F4F1E9" stroke-width="16" stroke-linecap="round"/>
    <circle cx="180" cy="-100" r="14" fill="#23C5EF"/>
    <circle cx="-180" cy="20" r="14" fill="#FF862E"/>
    <circle cx="180" cy="140" r="14" fill="#F4F1E9"/>
    <text x="-340" y="-90" fill="#23C5EF" font-family="monospace" font-size="20" font-weight="bold" text-anchor="end">DAY</text>
    <text x="380" y="30" fill="#FF862E" font-family="monospace" font-size="20" font-weight="bold" text-anchor="start">SWING</text>
    <text x="-340" y="150" fill="#F4F1E9" font-family="monospace" font-size="20" font-weight="bold" text-anchor="end">NIGHT</text>
    <text x="0" y="290" fill="#F4F1E9" font-family="monospace" font-size="34" font-weight="bold" letter-spacing="8" text-anchor="middle">24H HAND-OFF</text>
  </g>
</svg>`;

// 04 - 37 Tabs Open (Transparent)
const svg04 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(100, 180)">
    <rect x="0" y="0" width="800" height="540" rx="16" fill="none" stroke="#F4F1E9" stroke-width="6"/>
    <line x1="0" y1="75" x2="800" y2="75" stroke="#F4F1E9" stroke-width="4"/>
    <circle cx="40" cy="38" r="10" fill="#FF862E"/>
    <circle cx="75" cy="38" r="10" fill="#EAB308"/>
    <circle cx="110" cy="38" r="10" fill="#22C55E"/>
    <path d="M 160 75 L 180 20 L 360 20 L 380 75 Z" fill="#23C5EF"/>
    <text x="270" y="52" fill="#09090b" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">Active Tab *</text>
    <path d="M 390 75 L 405 35 L 530 35 L 545 75 Z" fill="none" stroke="#F4F1E9" stroke-width="2"/>
    <path d="M 550 75 L 565 35 L 690 35 L 705 75 Z" fill="none" stroke="#F4F1E9" stroke-width="2"/>
    <rect x="30" y="105" width="740" height="42" rx="8" fill="none" stroke="#475569" stroke-width="2"/>
    <text x="50" y="132" fill="#23C5EF" font-family="monospace" font-size="16">about:focus-matrix // 37_open</text>
    <text x="400" y="300" fill="#F4F1E9" font-family="sans-serif" font-size="68" font-weight="900" letter-spacing="2" text-anchor="middle">37 TABS OPEN</text>
    <text x="400" y="375" fill="#FF862E" font-family="monospace" font-size="36" font-weight="bold" letter-spacing="8" text-anchor="middle">ALL IMPORTANT.</text>
  </g>
</svg>`;

// 05 - Build 47 (Transparent)
const svg05 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(500, 500)">
    <path d="M -360 -300 L -360 -360 L -300 -360" fill="none" stroke="#FF862E" stroke-width="6"/>
    <path d="M 300 -360 L 360 -360 L 360 -300" fill="none" stroke="#FF862E" stroke-width="6"/>
    <path d="M -360 300 L -360 360 L -300 360" fill="none" stroke="#FF862E" stroke-width="6"/>
    <path d="M 300 360 L 360 360 L 360 300" fill="none" stroke="#FF862E" stroke-width="6"/>
    <text x="0" y="-230" fill="#23C5EF" font-family="monospace" font-size="32" font-weight="bold" letter-spacing="12" text-anchor="middle">BUILD</text>
    <text x="0" y="150" fill="none" stroke="#F4F1E9" stroke-width="16" stroke-linejoin="miter" font-family="sans-serif" font-size="340" font-weight="900" letter-spacing="-10" text-anchor="middle">47</text>
    <text x="0" y="270" fill="#F4F1E9" font-family="monospace" font-size="22" font-weight="bold" letter-spacing="6" text-anchor="middle">SHIP WHEN READY // ITERATION 47</text>
  </g>
</svg>`;

// 06 - Wireframe Anatomy (Transparent)
const svg06 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(250, 140)">
    <rect x="0" y="0" width="500" height="720" rx="36" fill="none" stroke="#F4F1E9" stroke-width="6"/>
    <rect x="30" y="40" width="440" height="60" rx="12" fill="none" stroke="#F4F1E9" stroke-width="3" stroke-dasharray="6,6"/>
    <rect x="30" y="130" width="440" height="220" rx="16" fill="none" stroke="#23C5EF" stroke-width="4"/>
    <line x1="30" y1="130" x2="470" y2="350" stroke="#23C5EF" stroke-width="2" opacity="0.5"/>
    <line x1="470" y1="130" x2="30" y2="350" stroke="#23C5EF" stroke-width="2" opacity="0.5"/>
    <rect x="30" y="380" width="205" height="140" rx="12" fill="none" stroke="#F4F1E9" stroke-width="3"/>
    <rect x="265" y="380" width="205" height="140" rx="12" fill="none" stroke="#F4F1E9" stroke-width="3"/>
    <rect x="30" y="540" width="440" height="100" rx="12" fill="none" stroke="#F4F1E9" stroke-width="3"/>
    <line x1="-40" y1="130" x2="-40" y2="350" stroke="#23C5EF" stroke-width="3"/>
    <line x1="-50" y1="130" x2="-30" y2="130" stroke="#23C5EF" stroke-width="3"/>
    <line x1="-50" y1="350" x2="-30" y2="350" stroke="#23C5EF" stroke-width="3"/>
    <text x="-65" y="245" fill="#23C5EF" font-family="monospace" font-size="18" font-weight="bold" transform="rotate(-90 -65 245)" text-anchor="middle">220px HERO</text>
    <text x="250" y="780" fill="#F4F1E9" font-family="monospace" font-size="28" font-weight="bold" letter-spacing="6" text-anchor="middle">WIREFRAME ANATOMY</text>
  </g>
</svg>`;

// 07 - Focus Is a Waveform (Transparent)
const svg07 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(100, 500)">
    <line x1="0" y1="0" x2="800" y2="0" stroke="#475569" stroke-width="3" stroke-dasharray="8,8"/>
    <path d="M 0 0 Q 80 -40 160 0 T 320 0 C 380 0, 420 -280, 480 -280 C 540 -280, 580 180, 640 0 Q 720 30 800 0" fill="none" stroke="#23C5EF" stroke-width="12" stroke-linecap="round"/>
    <path d="M 0 0 Q 100 60 200 0 T 400 0 C 440 0, 480 -140, 520 0 Q 660 80 800 0" fill="none" stroke="#F4F1E9" stroke-width="4" opacity="0.6"/>
    <circle cx="480" cy="-280" r="12" fill="#FF862E"/>
    <line x1="480" y1="-280" x2="480" y2="-340" stroke="#FF862E" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="480" y="-360" fill="#FF862E" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">40 Hz PEAK RESONANCE</text>
    <text x="0" y="160" fill="#F4F1E9" font-family="monospace" font-size="34" font-weight="bold" letter-spacing="8">FOCUS IS A WAVEFORM</text>
    <text x="0" y="200" fill="#94A3B8" font-family="monospace" font-size="16" font-weight="bold" letter-spacing="4">NOISE ENTROPY // DEEP STATE SIGNAL</text>
  </g>
</svg>`;

// 08 - Signal / Noise (Transparent)
const svg08 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(500, 500)">
    <line x1="0" y1="-350" x2="0" y2="350" stroke="#F4F1E9" stroke-width="4"/>
    <path d="M -380 180 C -300 180, -260 -180, -180 -180 C -100 -180, -60 0, -10 0" fill="none" stroke="#23C5EF" stroke-width="12" stroke-linecap="round"/>
    <text x="-200" y="-260" fill="#23C5EF" font-family="monospace" font-size="36" font-weight="bold" letter-spacing="6" text-anchor="middle">SIGNAL</text>
    <text x="-200" y="280" fill="#94A3B8" font-family="monospace" font-size="16" letter-spacing="3" text-anchor="middle">PURE TRAJECTORY</text>
    <g fill="#F4F1E9" opacity="0.85">
      <circle cx="60" cy="-200" r="6"/><circle cx="120" cy="-140" r="10"/><circle cx="220" cy="-240" r="8"/>
      <circle cx="310" cy="-120" r="12"/><circle cx="160" cy="-60" r="6"/><circle cx="280" cy="-30" r="14"/>
      <circle cx="80" cy="50" r="8"/><circle cx="200" cy="110" r="6"/><circle cx="340" cy="80" r="10"/>
      <circle cx="140" cy="200" r="12"/><circle cx="260" cy="230" r="6"/><circle cx="360" cy="180" r="8"/>
    </g>
    <text x="200" y="-260" fill="#FF862E" font-family="monospace" font-size="36" font-weight="bold" letter-spacing="6" text-anchor="middle">NOISE</text>
    <text x="200" y="280" fill="#94A3B8" font-family="monospace" font-size="16" letter-spacing="3" text-anchor="middle">ENTROPY FIELD</text>
  </g>
</svg>`;

// 09 - Streak Grid 365 (Transparent)
const svg09 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(180, 200)">
    <g fill="none" stroke="#F4F1E9" stroke-width="3">
      <rect x="0" y="0" width="60" height="60" rx="8"/><rect x="80" y="0" width="60" height="60" rx="8"/><rect x="160" y="0" width="60" height="60" rx="8"/><rect x="240" y="0" width="60" height="60" rx="8"/><rect x="320" y="0" width="60" height="60" rx="8"/><rect x="400" y="0" width="60" height="60" rx="8"/><rect x="480" y="0" width="60" height="60" rx="8"/><rect x="560" y="0" width="60" height="60" rx="8"/>
      <rect x="0" y="80" width="60" height="60" rx="8"/><rect x="80" y="80" width="60" height="60" rx="8"/><rect x="160" y="80" width="60" height="60" rx="8"/><rect x="240" y="80" width="60" height="60" rx="8"/><rect x="320" y="80" width="60" height="60" rx="8"/><rect x="400" y="80" width="60" height="60" rx="8"/><rect x="480" y="80" width="60" height="60" rx="8"/><rect x="560" y="80" width="60" height="60" rx="8"/>
      <rect x="0" y="160" width="60" height="60" rx="8"/><rect x="80" y="160" width="60" height="60" rx="8"/><rect x="160" y="160" width="60" height="60" rx="8"/><rect x="240" y="160" width="60" height="60" rx="8"/><rect x="320" y="160" width="60" height="60" rx="8"/><rect x="400" y="160" width="60" height="60" rx="8"/>
      <rect x="480" y="160" width="60" height="60" rx="8" fill="#FF862E" stroke="#FF862E"/>
      <rect x="560" y="160" width="60" height="60" rx="8"/>
    </g>
    <text x="320" y="420" fill="#23C5EF" font-family="sans-serif" font-size="160" font-weight="900" letter-spacing="-4" text-anchor="middle">365</text>
    <text x="320" y="520" fill="#F4F1E9" font-family="monospace" font-size="32" font-weight="bold" letter-spacing="8" text-anchor="middle">STREAK GRID: DAY 365</text>
    <text x="320" y="560" fill="#94A3B8" font-family="monospace" font-size="16" letter-spacing="4" text-anchor="middle">364 COMPLETED // 1 IN PROGRESS</text>
  </g>
</svg>`;

// 10 - Protect Your Ears (Transparent)
const svg10 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(500, 460)">
    <circle cx="0" cy="0" r="360" fill="none" stroke="#F4F1E9" stroke-width="4" opacity="0.3"/>
    <circle cx="0" cy="0" r="300" fill="none" stroke="#F4F1E9" stroke-width="8"/>
    <circle cx="0" cy="0" r="240" fill="none" stroke="#23C5EF" stroke-width="12"/>
    <circle cx="0" cy="0" r="180" fill="none" stroke="#F4F1E9" stroke-width="6"/>
    <path d="M -180 -180 A 255 255 0 0 1 180 -180" fill="none" stroke="#FF862E" stroke-width="20" stroke-linecap="round"/>
    <circle cx="0" cy="0" r="100" fill="none" stroke="#F4F1E9" stroke-width="4"/>
    <line x1="0" y1="-240" x2="0" y2="-320" stroke="#FF862E" stroke-width="8"/>
    <text x="0" y="-335" fill="#FF862E" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle">85 dB CEILING</text>
    <text x="0" y="10" fill="#23C5EF" font-family="monospace" font-size="20" font-weight="bold" letter-spacing="4" text-anchor="middle">dB LIMITER</text>
    <text x="0" y="440" fill="#F4F1E9" font-family="monospace" font-size="34" font-weight="bold" letter-spacing="6" text-anchor="middle">PROTECT YOUR EARS</text>
    <text x="0" y="480" fill="#94A3B8" font-family="monospace" font-size="16" letter-spacing="4" text-anchor="middle">HEAR FOREVER // ACOUSTIC PROTECTION</text>
  </g>
</svg>`;

// 11 - Maintenance Window (Transparent)
const svg11 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(100, 200)">
    <rect x="0" y="0" width="800" height="520" rx="20" fill="none" stroke="#F4F1E9" stroke-width="6"/>
    <line x1="0" y1="80" x2="800" y2="80" stroke="#F4F1E9" stroke-width="4"/>
    <circle cx="40" cy="40" r="10" fill="#FF862E"/>
    <circle cx="75" cy="40" r="10" fill="#EAB308"/>
    <circle cx="110" cy="40" r="10" fill="#22C55E"/>
    <rect x="610" y="24" width="150" height="32" rx="16" fill="#23C5EF"/>
    <text x="685" y="46" fill="#0f172a" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">SCHEDULED</text>
    <text x="400" y="220" fill="#F4F1E9" font-family="sans-serif" font-size="44" font-weight="900" letter-spacing="4" text-anchor="middle">MAINTENANCE WINDOW</text>
    <rect x="150" y="270" width="500" height="60" rx="10" fill="none" stroke="#FF862E" stroke-width="2"/>
    <text x="400" y="308" fill="#FF862E" font-family="monospace" font-size="22" font-weight="bold" letter-spacing="4" text-anchor="middle">02:00 UTC - 04:00 UTC</text>
    <text x="400" y="410" fill="#94A3B8" font-family="monospace" font-size="16" letter-spacing="3" text-anchor="middle">SYSTEM UPGRADES IN PROGRESS // NO INTERRUPTION</text>
  </g>
</svg>`;

// 12 - BramLabs Modular Grid (Transparent)
const svg12 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <g transform="translate(500, 480)">
    <line x1="-360" y1="0" x2="360" y2="0" stroke="#F4F1E9" stroke-width="4"/>
    <line x1="0" y1="-360" x2="0" y2="360" stroke="#F4F1E9" stroke-width="4"/>
    <rect x="-260" y="-260" width="520" height="520" fill="none" stroke="#F4F1E9" stroke-width="2" stroke-dasharray="6,6" opacity="0.5"/>
    <rect x="-160" y="-160" width="320" height="320" fill="none" stroke="#F4F1E9" stroke-width="2" opacity="0.7"/>
    <rect x="20" y="-140" width="120" height="120" rx="8" fill="#23C5EF" opacity="0.85"/>
    <rect x="-140" y="20" width="120" height="120" rx="8" fill="#FF862E" opacity="0.85"/>
    <circle cx="0" cy="0" r="12" fill="#F4F1E9"/>
    <text x="0" y="310" fill="#F4F1E9" font-family="sans-serif" font-size="42" font-weight="900" letter-spacing="12" text-anchor="middle">BRAMLABS</text>
    <text x="0" y="350" fill="#23C5EF" font-family="monospace" font-size="16" font-weight="bold" letter-spacing="6" text-anchor="middle">MODULAR DESIGN SYSTEM</text>
  </g>
</svg>`;

const masterSVGs = [
  { num: '01', slug: 'rotation-dial', code: svg01, color: 'black' },
  { num: '02', slug: 'circadian-corrupted', code: svg02, color: 'navy' },
  { num: '03', slug: '24h-hand-off', code: svg03, color: 'black' },
  { num: '04', slug: '37-tabs-open', code: svg04, color: 'navy' },
  { num: '05', slug: 'build-47', code: svg05, color: 'black' },
  { num: '06', slug: 'wireframe-anatomy', code: svg06, color: 'black' },
  { num: '07', slug: 'focus-waveform', code: svg07, color: 'black' },
  { num: '08', slug: 'signal-noise', code: svg08, color: 'black' },
  { num: '09', slug: 'streak-grid-365', code: svg09, color: 'black' },
  { num: '10', slug: 'protect-your-ears', code: svg10, color: 'navy' },
  { num: '11', slug: 'maintenance-window', code: svg11, color: 'navy' },
  { num: '12', slug: 'bramlabs-modular-grid', code: svg12, color: 'black' }
];

// Write master transparent SVGs
masterSVGs.forEach(item => {
  const p1 = path.join(designsDir, `design-${item.num}.svg`);
  const p2 = path.join(designsDir, `${item.slug}-art.svg`);
  const p3 = path.join(designsDir, `${item.slug}-detail.svg`);
  fs.writeFileSync(p1, item.code.trim());
  fs.writeFileSync(p2, item.code.trim());
  fs.writeFileSync(p3, item.code.trim());
});

console.log('Saved transparent master SVGs to public/designs/');

// -------------------------------------------------------------
// 2. COMPOSITE TRANSPARENT SVGs ONTO REAL T-SHIRT BASE MOCKUPS
// -------------------------------------------------------------
async function buildMockups() {
  for (const item of masterSVGs) {
    const baseFile = item.color === 'navy'
      ? path.join(mockupsDir, '_base-tee-navy.jpg')
      : path.join(mockupsDir, '_base-tee-black.jpg');

    const svgFile = path.join(designsDir, `${item.slug}-art.svg`);
    const outJpg = path.join(mockupsDir, `${item.slug}-tee.jpg`);
    const outWebp = path.join(mockupsDir, `${item.slug}-tee.webp`);

    const graphicBuffer = await sharp(svgFile)
      .resize(380, 380, { fit: 'contain' })
      .png()
      .toBuffer();

    const baseMetadata = await sharp(baseFile).metadata();
    const width = baseMetadata.width || 800;
    const height = baseMetadata.height || 1000;

    const left = Math.round((width - 380) / 2);
    const top = Math.round(height * 0.28);

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

    console.log(`Built photorealistic transparent mockup for ${item.slug} (${item.color})`);
  }
}

// -------------------------------------------------------------
// 3. GENERATE UNIQUE STAGE 01 & STAGE 02 SVGS FOR EACH DESIGN
// -------------------------------------------------------------
const stageDefinitions = {
  'rotation-dial': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(300, 300)" stroke="#64748B" stroke-width="2" fill="none" stroke-dasharray="4,4">
        <circle cx="0" cy="0" r="200"/>
        <circle cx="0" cy="0" r="100"/>
        <line x1="-220" y1="0" x2="220" y2="0"/>
        <line x1="0" y1="-220" x2="0" y2="220"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: DIAL SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(300, 300)">
        <circle cx="0" cy="0" r="210" fill="none" stroke="#23C5EF" stroke-width="2" stroke-dasharray="6,6"/>
        <path d="M 0 -180 A 180 180 0 0 1 156 90" fill="none" stroke="#23C5EF" stroke-width="12"/>
        <path d="M 136 118 A 180 180 0 0 1 -156 90" fill="none" stroke="#FF862E" stroke-width="12"/>
        <path d="M -156 60 A 180 180 0 0 1 -22 -178" fill="none" stroke="#F4F1E9" stroke-width="12"/>
        <circle cx="0" cy="0" r="90" fill="none" stroke="#F4F1E9" stroke-width="3"/>
      </g>
      <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: SHIFT ARC GEOMETRY</text>
    </svg>`
  },
  'circadian-corrupted': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#0f172a"/>
      <g stroke="#64748B" stroke-width="2" stroke-dasharray="6,6">
        <line x1="60" y1="200" x2="540" y2="200"/>
        <line x1="60" y1="280" x2="540" y2="280"/>
        <line x1="60" y1="360" x2="540" y2="360"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: PARALLEL BASELINE SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#0f172a"/>
      <g transform="translate(60, 100)">
        <line x1="0" y1="180" x2="480" y2="180" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
        <circle cx="300" cy="180" r="140" fill="none" stroke="#23C5EF" stroke-width="2" stroke-dasharray="8,8"/>
        <path d="M 0 180 L 220 180 C 270 180, 290 80, 350 80 C 410 80, 430 280, 480 280" fill="none" stroke="#7976E8" stroke-width="8"/>
      </g>
      <text x="300" y="550" fill="#7976E8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: BENT WAVE DISRUPTION</text>
    </svg>`
  },
  '24h-hand-off': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g stroke="#64748B" stroke-width="2" stroke-dasharray="6,6" fill="none">
        <line x1="100" y1="200" x2="500" y2="200"/>
        <line x1="100" y1="280" x2="500" y2="280"/>
        <line x1="100" y1="360" x2="500" y2="360"/>
        <circle cx="420" cy="200" r="12"/>
        <circle cx="180" cy="280" r="12"/>
        <circle cx="420" cy="360" r="12"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: STACKED BAND SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(300, 280)">
        <path d="M -180 -80 L 100 -80 A 24 24 0 0 1 124 -56 L 124 -56 A 24 24 0 0 1 100 -32 L -180 -32" fill="none" stroke="#23C5EF" stroke-width="8"/>
        <path d="M -100 -10 L 180 -10 A 24 24 0 0 1 204 14 L 204 14 A 24 24 0 0 1 180 38 L -100 38" fill="none" stroke="#FF862E" stroke-width="8"/>
        <path d="M -180 60 L 100 60 A 24 24 0 0 1 124 84 L 124 84 A 24 24 0 0 1 100 108 L -180 108" fill="none" stroke="#F4F1E9" stroke-width="8"/>
        <circle cx="100" cy="-56" r="10" fill="#23C5EF"/>
        <circle cx="-100" cy="14" r="10" fill="#FF862E"/>
      </g>
      <text x="300" y="550" fill="#FF862E" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: TRANSFER NODE GEOMETRY</text>
    </svg>`
  },
  '37-tabs-open': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#0f172a"/>
      <g stroke="#64748B" stroke-width="2" stroke-dasharray="6,6" fill="none">
        <rect x="80" y="140" width="440" height="300" rx="12"/>
        <line x1="80" y1="190" x2="520" y2="190"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: BROWSER FRAME SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#0f172a"/>
      <g transform="translate(80, 140)">
        <rect x="0" y="0" width="440" height="300" rx="12" fill="none" stroke="#F4F1E9" stroke-width="3"/>
        <line x1="0" y1="50" x2="440" y2="50" stroke="#F4F1E9" stroke-width="2"/>
        <path d="M 90 50 L 100 15 L 200 15 L 210 50 Z" fill="#23C5EF"/>
        <rect x="20" y="70" width="400" height="26" rx="6" fill="none" stroke="#23C5EF" stroke-width="1.5"/>
      </g>
      <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: TAB STRIP GEOMETRY</text>
    </svg>`
  },
  'build-47': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g stroke="#64748B" stroke-width="2" stroke-dasharray="6,6" fill="none">
        <rect x="120" y="120" width="360" height="360"/>
        <text x="300" y="340" font-family="sans-serif" font-size="180" font-weight="bold" text-anchor="middle" stroke="#64748B" stroke-width="1">47</text>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: NUMERAL OUTLINE SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(300, 300)">
        <path d="M -200 -180 L -200 -220 L -160 -220" fill="none" stroke="#FF862E" stroke-width="4"/>
        <path d="M 160 -220 L 200 -220 L 200 -180" fill="none" stroke="#FF862E" stroke-width="4"/>
        <path d="M -200 180 L -200 220 L -160 220" fill="none" stroke="#FF862E" stroke-width="4"/>
        <path d="M 160 220 L 200 220 L 200 180" fill="none" stroke="#FF862E" stroke-width="4"/>
        <text x="0" y="-140" fill="#23C5EF" font-family="monospace" font-size="20" font-weight="bold" letter-spacing="8" text-anchor="middle">BUILD</text>
        <text x="0" y="100" fill="none" stroke="#F4F1E9" stroke-width="10" stroke-linejoin="miter" font-family="sans-serif" font-size="200" font-weight="900" text-anchor="middle">47</text>
      </g>
      <text x="300" y="550" fill="#FF862E" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: CROP MARKS &amp; GRID</text>
    </svg>`
  },
  'wireframe-anatomy': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g stroke="#64748B" stroke-width="2" stroke-dasharray="6,6" fill="none">
        <rect x="160" y="80" width="280" height="420" rx="20"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: DEVICE FRAME SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(160, 80)">
        <rect x="0" y="0" width="280" height="420" rx="20" fill="none" stroke="#F4F1E9" stroke-width="3"/>
        <rect x="20" y="80" width="240" height="120" rx="8" fill="none" stroke="#23C5EF" stroke-width="2"/>
        <line x1="20" y1="80" x2="260" y2="200" stroke="#23C5EF" stroke-width="1.5" stroke-dasharray="4,4"/>
        <line x1="260" y1="80" x2="20" y2="200" stroke="#23C5EF" stroke-width="1.5" stroke-dasharray="4,4"/>
        <line x1="-20" y1="80" x2="-20" y2="200" stroke="#23C5EF" stroke-width="2"/>
      </g>
      <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: HERO MODULE CAD BRACKETS</text>
    </svg>`
  },
  'focus-waveform': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g stroke="#64748B" stroke-width="2" stroke-dasharray="6,6" fill="none">
        <line x1="60" y1="300" x2="540" y2="300"/>
        <path d="M 60 300 Q 180 260 300 300 T 540 300"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: WAVEFORM BASELINE SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(60, 300)">
        <line x1="0" y1="0" x2="480" y2="0" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
        <path d="M 0 0 Q 100 -30 200 0 C 240 0, 270 -160, 310 -160 C 350 -160, 380 100, 420 0 Q 450 20 480 0" fill="none" stroke="#23C5EF" stroke-width="6"/>
        <line x1="310" y1="-160" x2="310" y2="-210" stroke="#FF862E" stroke-width="2" stroke-dasharray="4,4"/>
        <circle cx="310" cy="-160" r="8" fill="#FF862E"/>
      </g>
      <text x="300" y="550" fill="#FF862E" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: 40 Hz RESONANCE PEAK</text>
    </svg>`
  },
  'signal-noise': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g stroke="#64748B" stroke-width="2" stroke-dasharray="6,6">
        <line x1="300" y1="100" x2="300" y2="460"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: VERTICAL SPLIT SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(300, 280)">
        <line x1="0" y1="-180" x2="0" y2="180" stroke="#F4F1E9" stroke-width="3"/>
        <path d="M -220 100 C -170 100, -140 -100, -90 -100 C -40 -100, -20 0, -5 0" fill="none" stroke="#23C5EF" stroke-width="8"/>
        <g fill="#F4F1E9" opacity="0.6">
          <circle cx="50" cy="-100" r="4"/><circle cx="100" cy="-60" r="8"/><circle cx="180" cy="-120" r="6"/>
          <circle cx="120" cy="40" r="6"/><circle cx="200" cy="80" r="5"/>
        </g>
      </g>
      <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: TRAJECTORY VS DOT FIELD</text>
    </svg>`
  },
  'streak-grid-365': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g stroke="#64748B" stroke-width="1.5" stroke-dasharray="4,4" fill="none">
        <rect x="100" y="160" width="400" height="240" rx="12"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: GRID BOUNDARY SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(100, 160)" fill="none" stroke="#F4F1E9" stroke-width="2">
        <rect x="0" y="0" width="40" height="40" rx="6"/><rect x="55" y="0" width="40" height="40" rx="6"/><rect x="110" y="0" width="40" height="40" rx="6"/><rect x="165" y="0" width="40" height="40" rx="6"/><rect x="220" y="0" width="40" height="40" rx="6"/><rect x="275" y="0" width="40" height="40" rx="6"/><rect x="330" y="0" width="40" height="40" rx="6"/>
        <rect x="0" y="55" width="40" height="40" rx="6"/><rect x="55" y="55" width="40" height="40" rx="6"/><rect x="110" y="55" width="40" height="40" rx="6"/><rect x="165" y="55" width="40" height="40" rx="6"/><rect x="220" y="55" width="40" height="40" rx="6"/>
        <rect x="275" y="55" width="40" height="40" rx="6" fill="#FF862E" stroke="#FF862E"/>
        <rect x="330" y="55" width="40" height="40" rx="6"/>
      </g>
      <text x="300" y="550" fill="#FF862E" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: ACTIVE STREAK CELL</text>
    </svg>`
  },
  'protect-your-ears': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#0f172a"/>
      <g transform="translate(300, 280)" stroke="#64748B" stroke-width="2" stroke-dasharray="6,6" fill="none">
        <circle cx="0" cy="0" r="220"/>
        <circle cx="0" cy="0" r="160"/>
        <circle cx="0" cy="0" r="100"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: FREQUENCY RING SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#0f172a"/>
      <g transform="translate(300, 280)">
        <circle cx="0" cy="0" r="200" fill="none" stroke="#F4F1E9" stroke-width="4"/>
        <circle cx="0" cy="0" r="150" fill="none" stroke="#23C5EF" stroke-width="8"/>
        <path d="M -110 -110 A 155 155 0 0 1 110 -110" fill="none" stroke="#FF862E" stroke-width="14" stroke-linecap="round"/>
        <line x1="0" y1="-150" x2="0" y2="-210" stroke="#FF862E" stroke-width="5"/>
      </g>
      <text x="300" y="550" fill="#FF862E" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: 85 dB THRESHOLD TICK</text>
    </svg>`
  },
  'maintenance-window': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#0f172a"/>
      <g stroke="#64748B" stroke-width="2" stroke-dasharray="6,6" fill="none">
        <rect x="80" y="140" width="440" height="300" rx="14"/>
        <line x1="80" y1="190" x2="520" y2="190"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: OPS PANEL FRAME SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#0f172a"/>
      <g transform="translate(80, 140)">
        <rect x="0" y="0" width="440" height="300" rx="14" fill="none" stroke="#F4F1E9" stroke-width="4"/>
        <line x1="0" y1="50" x2="440" y2="50" stroke="#F4F1E9" stroke-width="2"/>
        <rect x="320" y="14" width="100" height="22" rx="11" fill="#23C5EF"/>
        <rect x="80" y="160" width="280" height="40" rx="8" fill="none" stroke="#FF862E" stroke-width="2"/>
      </g>
      <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: SCHEDULED CHIP &amp; TIME BAR</text>
    </svg>`
  },
  'bramlabs-modular-grid': {
    sketch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(300, 280)" stroke="#64748B" stroke-width="2" stroke-dasharray="6,6">
        <line x1="-220" y1="0" x2="220" y2="0"/>
        <line x1="0" y1="-220" x2="0" y2="220"/>
      </g>
      <text x="300" y="550" fill="#94A3B8" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 01: COORDINATE AXIS SKETCH</text>
    </svg>`,
    geometry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
      <rect width="600" height="600" fill="#09090b"/>
      <g transform="translate(300, 280)">
        <line x1="-220" y1="0" x2="220" y2="0" stroke="#F4F1E9" stroke-width="3"/>
        <line x1="0" y1="-220" x2="0" y2="220" stroke="#F4F1E9" stroke-width="3"/>
        <rect x="-160" y="-160" width="320" height="320" fill="none" stroke="#F4F1E9" stroke-width="1.5" stroke-dasharray="4,4"/>
        <rect x="15" y="-90" width="75" height="75" rx="6" fill="#23C5EF"/>
        <rect x="-90" y="15" width="75" height="75" rx="6" fill="#FF862E"/>
      </g>
      <text x="300" y="550" fill="#23C5EF" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">STAGE 02: ORIGIN ACCENT CELLS</text>
    </svg>`
  }
};

Object.entries(stageDefinitions).forEach(([slug, stages]) => {
  writeProcessSVG(`${slug}-sketch.svg`, stages.sketch);
  writeProcessSVG(`${slug}-geometry.svg`, stages.geometry);
});

console.log('Saved all unique process SVGs to public/process/');

buildMockups().catch(console.error);
