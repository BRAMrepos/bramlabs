/**
 * BramLabs Asset Generator — World-Class Technical Apparel Graphics
 * 
 * Standards:
 * - Embedded base64 Geist Mono Bold font for razor-sharp SVG typography in librsvg/sharp
 * - High-impact streetwear & engineering aesthetic (no ugly boxes, no microscopic labels)
 * - Large, legible font hierarchy (Headlines 40-72px, Subheads 22-34px, Footnotes 16-20px)
 * - Heavyweight stroke weights (3px to 36px) for distance legibility (6-8 ft rule)
 * - High-contrast palette (Crisp Ivory, Safety Orange, Signal Cyan, Electric Mint, Neon Violet)
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "public");
const designsDir = path.join(ROOT, "designs");
const mockupsDir = path.join(ROOT, "mockups");
const processDir = path.join(ROOT, "process");
const ogDir = path.join(ROOT, "og");
const studioDir = path.join(ROOT, "studio");

for (const d of [designsDir, mockupsDir, processDir, ogDir, studioDir]) {
  fs.mkdirSync(d, { recursive: true });
}

// Load Geist Mono 700 WOFF for embedding directly into SVG
const fontPath = path.join(process.cwd(), "node_modules/@fontsource/geist-mono/files/geist-mono-latin-700-normal.woff");
const geistWoff = fs.existsSync(fontPath) ? fs.readFileSync(fontPath).toString("base64") : "";

const fontStyle = `
  <style>
    @font-face {
      font-family: 'Geist Mono';
      src: url('data:font/woff;charset=utf-8;base64,${geistWoff}') format('woff');
      font-weight: 700;
      font-style: normal;
    }
    .mono { font-family: 'Geist Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace; font-weight: 700; }
  </style>`;

// High contrast palette
const IVORY = "#F4F1E9";
const CYAN = "#00E5FF";
const ORANGE = "#FF6B00";
const GREEN = "#00F59B";
const VIOLET = "#A78BFA";
const GOLD = "#FFB800";
const MUTED = "rgba(244, 241, 233, 0.75)";

const art = {};

// ─── 01. ROTATION DIAL (24-Hour Continuous Shift Chronometer) ────────
art["rotation-dial"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Top Banner Headline -->
  <text x="400" y="65" text-anchor="middle" class="mono" font-size="36" fill="${IVORY}" letter-spacing="6">24H ROTATION DIAL</text>

  <!-- Outer Precision Gauge Ring -->
  <circle cx="400" cy="420" r="300" stroke="${IVORY}" stroke-width="5" opacity="0.45"/>
  <circle cx="400" cy="420" r="235" stroke="${IVORY}" stroke-width="2.5" stroke-dasharray="6 8" opacity="0.35"/>

  <!-- Radial 24-Hour Ticks -->
  ${Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2 - Math.PI / 2;
    const isMajor = i % 6 === 0;
    const isMid = i % 3 === 0;
    const outer = 300;
    const inner = isMajor ? 265 : isMid ? 278 : 286;
    const x1 = (400 + Math.cos(a) * outer).toFixed(1);
    const y1 = (420 + Math.sin(a) * outer).toFixed(1);
    const x2 = (400 + Math.cos(a) * inner).toFixed(1);
    const y2 = (420 + Math.sin(a) * inner).toFixed(1);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${IVORY}" stroke-width="${isMajor ? 5 : isMid ? 3 : 2}" opacity="${isMajor ? 0.95 : 0.6}"/>`;
  }).join("\n  ")}

  <!-- 3 Continuous Shift Arcs -->
  <!-- Day Shift 07:00 - 15:00 (Orange) -->
  <path d="M400 185 A235 235 0 0 1 603 538" stroke="${ORANGE}" stroke-width="32" stroke-linecap="round" fill="none"/>
  <!-- Swing Shift 15:00 - 23:00 (Cyan) -->
  <path d="M603 538 A235 235 0 0 1 197 538" stroke="${CYAN}" stroke-width="32" stroke-linecap="round" fill="none"/>
  <!-- Night Shift 23:00 - 07:00 (Muted Slate/Ivory) -->
  <path d="M197 538 A235 235 0 0 1 400 185" stroke="${IVORY}" stroke-width="32" stroke-linecap="round" fill="none" opacity="0.4"/>

  <!-- Pointer Needle targeting 07:00 Handoff -->
  <line x1="400" y1="420" x2="550" y2="270" stroke="${ORANGE}" stroke-width="8" stroke-linecap="round"/>
  <circle cx="550" cy="270" r="14" fill="${ORANGE}"/>
  <circle cx="550" cy="270" r="6" fill="${IVORY}"/>

  <!-- Center Hub -->
  <circle cx="400" cy="420" r="36" fill="#0D1117" stroke="${IVORY}" stroke-width="4"/>
  <circle cx="400" cy="420" r="14" fill="${ORANGE}"/>

  <!-- Shift Callout Badges -->
  <rect x="300" y="110" width="200" height="36" rx="8" fill="#161B22" stroke="${ORANGE}" stroke-width="2"/>
  <text x="400" y="134" text-anchor="middle" class="mono" font-size="18" fill="${ORANGE}" letter-spacing="3">07:00 · DAY</text>

  <rect x="580" y="560" width="180" height="36" rx="8" fill="#161B22" stroke="${CYAN}" stroke-width="2"/>
  <text x="670" y="584" text-anchor="middle" class="mono" font-size="18" fill="${CYAN}" letter-spacing="3">15:00 · SWING</text>

  <rect x="40" y="560" width="180" height="36" rx="8" fill="#161B22" stroke="${IVORY}" stroke-width="2"/>
  <text x="130" y="584" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}" letter-spacing="3">23:00 · NIGHT</text>

  <!-- Center Typography -->
  <text x="400" y="475" text-anchor="middle" class="mono" font-size="20" fill="${IVORY}" letter-spacing="4">CONTINUOUS ROTATION</text>
  <text x="400" y="502" text-anchor="middle" class="mono" font-size="14" fill="${ORANGE}" letter-spacing="3">24-HOUR CREW COVERAGE</text>

  <!-- Bottom Spec Footnote -->
  <text x="400" y="760" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}" opacity="0.85" letter-spacing="5">BRAMLABS // SHIFT SYSTEM V3</text>
</svg>`;

// ─── 02. CIRCADIAN CORRUPTED (Night Shift Frequency Drift) ───────────
art["circadian-corrupted"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Top Typography Lockup -->
  <text x="400" y="80" text-anchor="middle" class="mono" font-size="44" fill="${IVORY}" letter-spacing="6">CIRCADIAN RHYTHM</text>
  
  <!-- Status Badge Pill -->
  <rect x="230" y="110" width="340" height="42" rx="21" fill="#1A1429" stroke="${VIOLET}" stroke-width="3"/>
  <circle cx="260" cy="131" r="9" fill="${ORANGE}"/>
  <text x="410" y="137" text-anchor="middle" class="mono" font-size="18" fill="${VIOLET}" letter-spacing="3">STATUS // CORRUPTED</text>

  <!-- Dynamic Frequency Background Grid -->
  ${Array.from({ length: 7 }, (_, i) => `<line x1="40" y1="${200 + i * 80}" x2="760" y2="${200 + i * 80}" stroke="${IVORY}" stroke-width="1.5" opacity="0.18"/>`).join("\n  ")}
  ${Array.from({ length: 9 }, (_, i) => `<line x1="${80 + i * 80}" y1="200" x2="${80 + i * 80}" y2="680" stroke="${IVORY}" stroke-width="1.5" opacity="0.18"/>`).join("\n  ")}

  <!-- 24H Natural Sine Wave (Cyan Baseline) -->
  <path d="M40 440 C 140 240, 260 240, 400 440 S 660 640, 760 440" stroke="${CYAN}" stroke-width="6" stroke-dasharray="12 10" fill="none" opacity="0.85"/>
  <text x="70" y="270" class="mono" font-size="16" fill="${CYAN}" letter-spacing="2">NATURAL 24H SINE</text>

  <!-- Night Shift Corrupted Wave (Violent Electric Surge) -->
  <path d="M40 460 C 140 600, 220 280, 300 640 S 440 120, 540 340 S 640 700, 720 240 L 760 480" stroke="${VIOLET}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  
  <!-- Disruption Peak Marker -->
  <circle cx="480" cy="200" r="14" fill="${ORANGE}"/>
  <circle cx="480" cy="200" r="6" fill="${IVORY}"/>
  <line x1="480" y1="200" x2="480" y2="165" stroke="${ORANGE}" stroke-width="3" stroke-dasharray="4 4"/>
  <text x="480" y="190" text-anchor="end" class="mono" font-size="16" fill="${ORANGE}" letter-spacing="2">03:47 AM PEAK DRIFT </text>

  <!-- Orbit Resonance Ring -->
  <circle cx="400" cy="440" r="160" stroke="${IVORY}" stroke-width="2.5" stroke-dasharray="8 8" opacity="0.4"/>
  <circle cx="400" cy="440" r="160" stroke="${ORANGE}" stroke-width="5" stroke-dasharray="40 120"/>

  <!-- Bottom Title Block -->
  <text x="400" y="730" text-anchor="middle" class="mono" font-size="34" fill="${IVORY}" letter-spacing="4">NIGHT SHIFT DRIFT</text>
  <text x="400" y="765" text-anchor="middle" class="mono" font-size="18" fill="${MUTED}" letter-spacing="4">PHASE REGRESSION // +4.2dB</text>
</svg>`;

// ─── 03. 24H HAND-OFF (Three-Crew Orbital Transfer System) ────────────
art["24h-hand-off"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Top Headline Arc -->
  <text x="400" y="90" text-anchor="middle" class="mono" font-size="52" fill="${IVORY}" letter-spacing="10">24H HAND-OFF</text>
  <text x="400" y="130" text-anchor="middle" class="mono" font-size="18" fill="${ORANGE}" letter-spacing="5">UNINTERRUPTED CREW ROTATION</text>

  <!-- Radial Alignment Guides -->
  ${[0, 30, 60, 90, 120, 150, 180].map((ang) => {
    const rad = (ang * Math.PI) / 180;
    const x2 = (400 + Math.cos(rad) * 350).toFixed(1);
    const y2 = (440 - Math.sin(rad) * 350).toFixed(1);
    return `<line x1="400" y1="440" x2="${x2}" y2="${y2}" stroke="${IVORY}" stroke-width="1.5" stroke-dasharray="4 6" opacity="0.25"/>`;
  }).join("\n  ")}

  <!-- 3 Massive Interlocking Handoff Arcs -->
  <!-- Outer Arc: Day Shift (Safety Orange) -->
  <path d="M100 450 A300 300 0 0 1 700 450" stroke="${ORANGE}" stroke-width="36" stroke-linecap="round" fill="none"/>
  <!-- Middle Arc: Swing Shift (Electric Mint) -->
  <path d="M160 480 A240 240 0 0 1 640 480" stroke="${GREEN}" stroke-width="36" stroke-linecap="round" fill="none"/>
  <!-- Inner Arc: Night Shift (Crisp Ivory) -->
  <path d="M220 510 A180 180 0 0 1 580 510" stroke="${IVORY}" stroke-width="36" stroke-linecap="round" fill="none" opacity="0.55"/>

  <!-- Transfer Node Markers -->
  <circle cx="100" cy="450" r="18" fill="${ORANGE}"/>
  <circle cx="700" cy="450" r="18" fill="${ORANGE}"/>
  <circle cx="160" cy="480" r="16" fill="${GREEN}"/>
  <circle cx="640" cy="480" r="16" fill="${GREEN}"/>
  <circle cx="220" cy="510" r="14" fill="${IVORY}"/>
  <circle cx="580" cy="510" r="14" fill="${IVORY}"/>

  <!-- Center Target Crosshair -->
  <circle cx="400" cy="380" r="36" stroke="${IVORY}" stroke-width="4" fill="none"/>
  <circle cx="400" cy="380" r="12" fill="${GREEN}"/>
  <line x1="400" y1="330" x2="400" y2="430" stroke="${IVORY}" stroke-width="2"/>
  <line x1="350" y1="380" x2="450" y2="380" stroke="${IVORY}" stroke-width="2"/>

  <!-- Shift Badges -->
  <rect x="50" y="600" width="200" height="48" rx="10" fill="#161B22" stroke="${ORANGE}" stroke-width="2"/>
  <text x="150" y="630" text-anchor="middle" class="mono" font-size="18" fill="${ORANGE}" letter-spacing="3">[01] DAY</text>

  <rect x="300" y="600" width="200" height="48" rx="10" fill="#161B22" stroke="${GREEN}" stroke-width="2"/>
  <text x="400" y="630" text-anchor="middle" class="mono" font-size="18" fill="${GREEN}" letter-spacing="3">[02] SWING</text>

  <rect x="550" y="600" width="200" height="48" rx="10" fill="#161B22" stroke="${IVORY}" stroke-width="2"/>
  <text x="650" y="630" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}" letter-spacing="3">[03] NIGHT</text>

  <!-- Bottom Spec Footnote -->
  <text x="400" y="740" text-anchor="middle" class="mono" font-size="20" fill="${IVORY}" letter-spacing="6">CREW HANDOVER SYSTEM // BRAMLABS</text>
</svg>`;

// ─── 04. 37 TABS OPEN (Cognitive Overload / Browser Stack) ────────────
art["37-tabs-open"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Main Header Banner -->
  <text x="400" y="80" text-anchor="middle" class="mono" font-size="56" fill="${IVORY}" letter-spacing="8">37 TABS OPEN</text>
  <text x="400" y="125" text-anchor="middle" class="mono" font-size="20" fill="${ORANGE}" letter-spacing="4">MEMORY USAGE: 64.2 GB // DO NOT CLOSE</text>

  <!-- 4 Layered Browser Tab Cards -->
  <!-- Tab 1: Localhost -->
  <g transform="translate(60, 170)">
    <rect width="680" height="95" rx="12" fill="#161B22" stroke="${GREEN}" stroke-width="3"/>
    <circle cx="45" cy="48" r="10" fill="${GREEN}"/>
    <text x="75" y="55" class="mono" font-size="22" fill="${IVORY}">localhost:3000 // hot-reload active</text>
    <rect x="520" y="28" width="130" height="40" rx="8" fill="rgba(0,245,155,0.15)" stroke="${GREEN}" stroke-width="1.5"/>
    <text x="585" y="53" text-anchor="middle" class="mono" font-size="16" fill="${GREEN}">● 200 OK</text>
  </g>

  <!-- Tab 2: Production DB -->
  <g transform="translate(60, 285)">
    <rect width="680" height="95" rx="12" fill="#161B22" stroke="${ORANGE}" stroke-width="3"/>
    <circle cx="45" cy="48" r="10" fill="${ORANGE}"/>
    <text x="75" y="55" class="mono" font-size="22" fill="${IVORY}">prod-cluster-db // high memory</text>
    <rect x="520" y="28" width="130" height="40" rx="8" fill="rgba(255,107,0,0.15)" stroke="${ORANGE}" stroke-width="1.5"/>
    <text x="585" y="53" text-anchor="middle" class="mono" font-size="16" fill="${ORANGE}">● 99.4% CPU</text>
  </g>

  <!-- Tab 3: API Docs -->
  <g transform="translate(60, 400)">
    <rect width="680" height="95" rx="12" fill="#161B22" stroke="${CYAN}" stroke-width="3"/>
    <circle cx="45" cy="48" r="10" fill="${CYAN}"/>
    <text x="75" y="55" class="mono" font-size="22" fill="${IVORY}">api.v2/reference/authentication</text>
    <rect x="520" y="28" width="130" height="40" rx="8" fill="rgba(0,229,255,0.15)" stroke="${CYAN}" stroke-width="1.5"/>
    <text x="585" y="53" text-anchor="middle" class="mono" font-size="16" fill="${CYAN}">● V2 SPEC</text>
  </g>

  <!-- Tab 4: StackOverflow -->
  <g transform="translate(60, 515)">
    <rect width="680" height="95" rx="12" fill="#161B22" stroke="${VIOLET}" stroke-width="3"/>
    <circle cx="45" cy="48" r="10" fill="${VIOLET}"/>
    <text x="75" y="55" class="mono" font-size="22" fill="${IVORY}">how to center a div in 2026</text>
    <rect x="520" y="28" width="130" height="40" rx="8" fill="rgba(167,139,250,0.15)" stroke="${VIOLET}" stroke-width="1.5"/>
    <text x="585" y="53" text-anchor="middle" class="mono" font-size="16" fill="${VIOLET}">● SOLVED</text>
  </g>

  <!-- Bottom Metric Bar -->
  <rect x="60" y="645" width="680" height="60" rx="12" fill="#0D1117" stroke="${IVORY}" stroke-width="2"/>
  <text x="90" y="682" class="mono" font-size="18" fill="${IVORY}">HEAP: 3.8GB</text>
  <text x="320" y="682" class="mono" font-size="18" fill="${GREEN}">THREADS: 128</text>
  <text x="550" y="682" class="mono" font-size="18" fill="${ORANGE}">SWAP: FULL</text>

  <!-- Footnote -->
  <text x="400" y="760" text-anchor="middle" class="mono" font-size="18" fill="${MUTED}" letter-spacing="5">BRAMLABS WORKSTATION METRICS</text>
</svg>`;

// ─── 05. BUILD #47 (CI/CD Pipeline Green) ─────────────────────────────
art["build-47"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Big Build Stamp -->
  <text x="400" y="90" text-anchor="middle" class="mono" font-size="64" fill="${IVORY}" letter-spacing="8">BUILD #47</text>

  <!-- Status Banner (Electric Mint) -->
  <rect x="180" y="125" width="440" height="56" rx="28" fill="#0E281F" stroke="${GREEN}" stroke-width="4"/>
  <circle cx="225" cy="153" r="14" fill="${GREEN}"/>
  <text x="420" y="160" text-anchor="middle" class="mono" font-size="24" fill="${GREEN}" letter-spacing="4">PIPELINE: PASSED</text>

  <!-- 3 Big Metric Scoreboards -->
  <g transform="translate(60, 215)">
    <rect width="210" height="140" rx="14" fill="#161B22" stroke="${GREEN}" stroke-width="3"/>
    <text x="105" y="60" text-anchor="middle" class="mono" font-size="40" fill="${GREEN}">1,428</text>
    <text x="105" y="105" text-anchor="middle" class="mono" font-size="16" fill="${IVORY}" letter-spacing="2">TESTS PASSED</text>
  </g>

  <g transform="translate(295, 215)">
    <rect width="210" height="140" rx="14" fill="#161B22" stroke="${IVORY}" stroke-width="3"/>
    <text x="105" y="60" text-anchor="middle" class="mono" font-size="40" fill="${IVORY}">0</text>
    <text x="105" y="105" text-anchor="middle" class="mono" font-size="16" fill="${IVORY}" letter-spacing="2">ERRORS</text>
  </g>

  <g transform="translate(530, 215)">
    <rect width="210" height="140" rx="14" fill="#161B22" stroke="${CYAN}" stroke-width="3"/>
    <text x="105" y="60" text-anchor="middle" class="mono" font-size="40" fill="${CYAN}">248ms</text>
    <text x="105" y="105" text-anchor="middle" class="mono" font-size="16" fill="${IVORY}" letter-spacing="2">EXECUTION</text>
  </g>

  <!-- Pipeline Stage Progress Nodes -->
  <g transform="translate(60, 395)">
    <rect width="680" height="130" rx="14" fill="#0D1117" stroke="${IVORY}" stroke-width="2"/>
    <line x1="90" y1="65" x2="590" y2="65" stroke="${GREEN}" stroke-width="6"/>
    
    <!-- Stage 1 -->
    <circle cx="90" cy="65" r="20" fill="${GREEN}"/>
    <text x="90" y="110" text-anchor="middle" class="mono" font-size="15" fill="${IVORY}">LINT</text>
    
    <!-- Stage 2 -->
    <circle cx="255" cy="65" r="20" fill="${GREEN}"/>
    <text x="255" y="110" text-anchor="middle" class="mono" font-size="15" fill="${IVORY}">BUILD</text>

    <!-- Stage 3 -->
    <circle cx="425" cy="65" r="20" fill="${GREEN}"/>
    <text x="425" y="110" text-anchor="middle" class="mono" font-size="15" fill="${IVORY}">TEST</text>

    <!-- Stage 4 -->
    <circle cx="590" cy="65" r="20" fill="${GREEN}"/>
    <text x="590" y="110" text-anchor="middle" class="mono" font-size="15" fill="${IVORY}">DEPLOY</text>
  </g>

  <!-- Git Commit Terminal Lockup -->
  <g transform="translate(60, 560)">
    <rect width="680" height="110" rx="14" fill="#161B22" stroke="${IVORY}" stroke-width="2"/>
    <text x="40" y="45" class="mono" font-size="20" fill="${CYAN}">commit 8f3d19a7e02b (main)</text>
    <text x="40" y="80" class="mono" font-size="18" fill="${MUTED}">Author: BramLabs Core &lt;ci@bramlabs.io&gt;</text>
  </g>

  <!-- Bottom Spec Footnote -->
  <text x="400" y="745" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}" letter-spacing="5">AUTOMATED DEPLOYMENT VERIFIED</text>
</svg>`;

// ─── 06. WIREFRAME ANATOMY (Component Hierarchy & Design System) ──────
art["wireframe-anatomy"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Main Title -->
  <text x="400" y="75" text-anchor="middle" class="mono" font-size="44" fill="${IVORY}" letter-spacing="6">WIREFRAME ANATOMY</text>
  <text x="400" y="115" text-anchor="middle" class="mono" font-size="18" fill="${CYAN}" letter-spacing="4">DESIGN SYSTEM // 0-BUG SPECIFICATION</text>

  <!-- Structural Blueprint Layout -->
  <!-- Top App Bar Component -->
  <g transform="translate(60, 150)">
    <rect width="680" height="70" rx="10" fill="#161B22" stroke="${CYAN}" stroke-width="3"/>
    <text x="30" y="42" class="mono" font-size="20" fill="${CYAN}">&lt;Header sticky /&gt;</text>
    <circle cx="620" cy="35" r="10" fill="${ORANGE}"/>
    <circle cx="585" cy="35" r="10" fill="${GREEN}"/>
  </g>

  <!-- Hero Grid Component -->
  <g transform="translate(60, 240)">
    <rect width="680" height="150" rx="10" fill="#161B22" stroke="${IVORY}" stroke-width="3"/>
    <text x="30" y="45" class="mono" font-size="22" fill="${IVORY}">&lt;HeroSection maxWidth="1200px" /&gt;</text>
    <line x1="30" y1="75" x2="450" y2="75" stroke="${ORANGE}" stroke-width="8" stroke-linecap="round"/>
    <line x1="30" y1="105" x2="320" y2="105" stroke="${MUTED}" stroke-width="4" stroke-linecap="round"/>
  </g>

  <!-- Dual Split Grid -->
  <g transform="translate(60, 410)">
    <!-- Left Card -->
    <rect width="325" height="180" rx="10" fill="#161B22" stroke="${GREEN}" stroke-width="3"/>
    <text x="25" y="45" class="mono" font-size="20" fill="${GREEN}">&lt;DataGrid columns={3} /&gt;</text>
    <rect x="25" y="70" width="80" height="80" rx="8" fill="none" stroke="${IVORY}" stroke-width="2"/>
    <rect x="120" y="70" width="80" height="80" rx="8" fill="none" stroke="${IVORY}" stroke-width="2"/>
    <rect x="215" y="70" width="80" height="80" rx="8" fill="none" stroke="${IVORY}" stroke-width="2"/>

    <!-- Right Card -->
    <g transform="translate(355, 0)">
      <rect width="325" height="180" rx="10" fill="#161B22" stroke="${VIOLET}" stroke-width="3"/>
      <text x="25" y="45" class="mono" font-size="20" fill="${VIOLET}">&lt;ActionModal active /&gt;</text>
      <rect x="25" y="80" width="275" height="40" rx="6" fill="${ORANGE}"/>
      <text x="162" y="106" text-anchor="middle" class="mono" font-size="16" fill="${IVORY}">PRIMARY ACTION</text>
    </g>
  </g>

  <!-- Dimension Specification Callouts -->
  <line x1="60" y1="620" x2="740" y2="620" stroke="${CYAN}" stroke-width="2" stroke-dasharray="6 6"/>
  <text x="400" y="650" text-anchor="middle" class="mono" font-size="18" fill="${CYAN}" letter-spacing="4">CONTAINER: 680px · 12-COL GRID · 16px GUTTER</text>

  <!-- Spec Footnote -->
  <text x="400" y="745" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}" letter-spacing="6">BRAMLABS UI BLUEPRINT // 2026</text>
</svg>`;

// ─── 07. FOCUS WAVEFORM (Alpha State & Deep Work) ─────────────────────
art["focus-waveform"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Main Title -->
  <text x="400" y="80" text-anchor="middle" class="mono" font-size="48" fill="${IVORY}" letter-spacing="8">FOCUS IS A WAVEFORM</text>
  <text x="400" y="125" text-anchor="middle" class="mono" font-size="20" fill="${GREEN}" letter-spacing="4">DEEP WORK STATE // ALPHA FREQUENCY 14 Hz</text>

  <!-- High-Density Soundwave / Spectrum Bars -->
  <g transform="translate(60, 180)">
    ${Array.from({ length: 33 }, (_, i) => {
      const x = i * 21;
      const progress = i / 32;
      // Symmetric soundwave envelope
      const amp = Math.sin(progress * Math.PI);
      const height = Math.round(40 + amp * 260);
      const y = Math.round((300 - height) / 2);
      const color = i >= 12 && i <= 20 ? GREEN : i % 2 === 0 ? CYAN : ORANGE;
      return `<rect x="${x}" y="${y}" width="12" height="${height}" rx="6" fill="${color}"/>`;
    }).join("\n    ")}
  </g>

  <!-- Frequency Centerline & Zero-Cross -->
  <line x1="50" y1="330" x2="750" y2="330" stroke="${IVORY}" stroke-width="2" stroke-dasharray="8 6" opacity="0.6"/>

  <!-- Metric Badges -->
  <rect x="60" y="540" width="200" height="60" rx="12" fill="#161B22" stroke="${GREEN}" stroke-width="3"/>
  <text x="160" y="576" text-anchor="middle" class="mono" font-size="20" fill="${GREEN}">ALPHA: 14 Hz</text>

  <rect x="300" y="540" width="200" height="60" rx="12" fill="#161B22" stroke="${CYAN}" stroke-width="3"/>
  <text x="400" y="576" text-anchor="middle" class="mono" font-size="20" fill="${CYAN}">SNR: +36 dB</text>

  <rect x="540" y="540" width="200" height="60" rx="12" fill="#161B22" stroke="${ORANGE}" stroke-width="3"/>
  <text x="640" y="576" text-anchor="middle" class="mono" font-size="20" fill="${ORANGE}">PULSE: 52 BPM</text>

  <!-- Terminal Readout -->
  <rect x="60" y="630" width="680" height="70" rx="12" fill="#0D1117" stroke="${IVORY}" stroke-width="2"/>
  <text x="400" y="672" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}" letter-spacing="3">ALL EXTERNAL NOTIFICATIONS: BLOCKED</text>

  <!-- Footnote -->
  <text x="400" y="755" text-anchor="middle" class="mono" font-size="18" fill="${MUTED}" letter-spacing="5">BRAMLABS NEUROLOGICAL INTERFACE</text>
</svg>`;

// ─── 08. SIGNAL / NOISE (High-Contrast Spectral Ratio) ───────────────
art["signal-noise"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Main Title -->
  <text x="400" y="80" text-anchor="middle" class="mono" font-size="52" fill="${IVORY}" letter-spacing="8">SIGNAL / NOISE</text>
  <text x="400" y="125" text-anchor="middle" class="mono" font-size="20" fill="${CYAN}" letter-spacing="5">HIGH FIDELITY RATIO // +48.2 dB</text>

  <!-- Dynamic Split Panels -->
  <!-- Left Panel: Pure Signal -->
  <g transform="translate(60, 160)">
    <rect width="320" height="420" rx="14" fill="#0E281F" stroke="${GREEN}" stroke-width="3"/>
    <text x="160" y="50" text-anchor="middle" class="mono" font-size="22" fill="${GREEN}" letter-spacing="4">● PURE SIGNAL</text>
    
    <!-- Clean Sine Waves -->
    <path d="M20 210 C 80 110, 140 110, 200 210 S 280 310, 300 210" stroke="${GREEN}" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M20 270 C 80 190, 140 190, 200 270 S 280 350, 300 270" stroke="${CYAN}" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.8"/>
    
    <text x="160" y="380" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}">HARMONICS: 0.001%</text>
  </g>

  <!-- Right Panel: Stochastic Noise -->
  <g transform="translate(420, 160)">
    <rect width="320" height="420" rx="14" fill="#241416" stroke="${ORANGE}" stroke-width="3"/>
    <text x="160" y="50" text-anchor="middle" class="mono" font-size="22" fill="${ORANGE}" letter-spacing="4">● RAW NOISE</text>
    
    <!-- Jagged Stochastic Noise Lines -->
    <path d="M20 210 L 50 140 L 90 280 L 130 110 L 170 310 L 210 160 L 250 260 L 300 210" stroke="${ORANGE}" stroke-width="6" stroke-linejoin="round" fill="none"/>
    <path d="M20 250 L 60 300 L 110 180 L 160 320 L 210 210 L 270 290 L 300 230" stroke="${VIOLET}" stroke-width="4" stroke-linejoin="round" fill="none" opacity="0.8"/>

    <text x="160" y="380" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}">FILTER: ATTENUATED</text>
  </g>

  <!-- Center Ratio Divider Stamp -->
  <rect x="250" y="610" width="300" height="54" rx="12" fill="#161B22" stroke="${IVORY}" stroke-width="3"/>
  <text x="400" y="645" text-anchor="middle" class="mono" font-size="22" fill="${IVORY}" letter-spacing="4">SNR = 99.98%</text>

  <!-- Spec Footnote -->
  <text x="400" y="745" text-anchor="middle" class="mono" font-size="18" fill="${MUTED}" letter-spacing="6">BRAMLABS SPECTRAL ANALYSIS</text>
</svg>`;

// ─── 09. STREAK GRID 365 (Unbroken Commit Heatmap) ───────────────────
art["streak-grid-365"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Main Title -->
  <text x="400" y="80" text-anchor="middle" class="mono" font-size="52" fill="${IVORY}" letter-spacing="8">365 DAYS UNBROKEN</text>
  <text x="400" y="125" text-anchor="middle" class="mono" font-size="20" fill="${GREEN}" letter-spacing="4">CONTRIBUTION MATRIX // NEVER MISSED A DAY</text>

  <!-- 7 x 18 Heatmap Grid -->
  <g transform="translate(60, 170)">
    ${Array.from({ length: 7 }, (_, row) =>
      Array.from({ length: 18 }, (_, col) => {
        const x = col * 38;
        const y = row * 38;
        // Generate high activity pattern with vivid Greens
        const isHot = (row * 3 + col * 7) % 5 !== 0;
        const color = isHot ? (col % 3 === 0 ? GREEN : "#238636") : "#161B22";
        const border = isHot ? GREEN : "rgba(244,241,233,0.15)";
        return `<rect x="${x}" y="${y}" width="30" height="30" rx="6" fill="${color}" stroke="${border}" stroke-width="1.5"/>`;
      }).join("\n    ")
    ).join("\n    ")}
  </g>

  <!-- Metric Badges -->
  <g transform="translate(60, 480)">
    <rect width="210" height="110" rx="14" fill="#161B22" stroke="${GREEN}" stroke-width="3"/>
    <text x="105" y="55" text-anchor="middle" class="mono" font-size="34" fill="${GREEN}">3,842</text>
    <text x="105" y="90" text-anchor="middle" class="mono" font-size="16" fill="${IVORY}">CONTRIBUTIONS</text>
  </g>

  <g transform="translate(295, 480)">
    <rect width="210" height="110" rx="14" fill="#161B22" stroke="${ORANGE}" stroke-width="3"/>
    <text x="105" y="55" text-anchor="middle" class="mono" font-size="34" fill="${ORANGE}">365</text>
    <text x="105" y="90" text-anchor="middle" class="mono" font-size="16" fill="${IVORY}">DAY STREAK</text>
  </g>

  <g transform="translate(530, 480)">
    <rect width="210" height="110" rx="14" fill="#161B22" stroke="${CYAN}" stroke-width="3"/>
    <text x="105" y="55" text-anchor="middle" class="mono" font-size="34" fill="${CYAN}">0</text>
    <text x="105" y="90" text-anchor="middle" class="mono" font-size="16" fill="${IVORY}">DAYS MISSED</text>
  </g>

  <!-- Spec Footnote -->
  <text x="400" y="745" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}" letter-spacing="6">BRAMLABS REPOSITORY RECORD // 2026</text>
</svg>`;

// ─── 10. PROTECT YOUR EARS (Decibel Limiter & Acoustic Safety) ─────────
art["protect-your-ears"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Main Title -->
  <text x="400" y="80" text-anchor="middle" class="mono" font-size="48" fill="${IVORY}" letter-spacing="8">PROTECT YOUR EARS</text>
  <text x="400" y="125" text-anchor="middle" class="mono" font-size="20" fill="${ORANGE}" letter-spacing="4">PRESERVE HIGH FREQUENCIES // 20Hz - 20kHz</text>

  <!-- Big Decibel Radial Meter -->
  <circle cx="400" cy="400" r="230" stroke="${IVORY}" stroke-width="4" opacity="0.3"/>
  <circle cx="400" cy="400" r="180" stroke="${IVORY}" stroke-width="2" stroke-dasharray="6 8" opacity="0.4"/>

  <!-- Meter Arc Zones -->
  <!-- Safe Zone: Green -->
  <path d="M230 400 A170 170 0 0 1 350 240" stroke="${GREEN}" stroke-width="28" stroke-linecap="round" fill="none"/>
  <!-- Caution Zone: Orange -->
  <path d="M350 240 A170 170 0 0 1 480 250" stroke="${ORANGE}" stroke-width="28" stroke-linecap="round" fill="none"/>
  <!-- Danger Zone: Red/Violet -->
  <path d="M480 250 A170 170 0 0 1 570 400" stroke="${VIOLET}" stroke-width="28" stroke-linecap="round" fill="none"/>

  <!-- Needle Targeting 85 dB Limit -->
  <line x1="400" y1="400" x2="350" y2="240" stroke="${GREEN}" stroke-width="8" stroke-linecap="round"/>
  <circle cx="400" cy="400" r="32" fill="#0D1117" stroke="${IVORY}" stroke-width="4"/>
  <circle cx="400" cy="400" r="12" fill="${GREEN}"/>

  <!-- Center Metric Stamp -->
  <text x="400" y="480" text-anchor="middle" class="mono" font-size="38" fill="${GREEN}">85 dB</text>
  <text x="400" y="515" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}" letter-spacing="3">MAX SAFE CONTINUOUS</text>

  <!-- Threshold Warning Cards -->
  <g transform="translate(60, 580)">
    <rect width="680" height="85" rx="12" fill="#161B22" stroke="${IVORY}" stroke-width="2"/>
    <text x="40" y="38" class="mono" font-size="18" fill="${GREEN}">● &lt; 85 dB: 8 HOURS SAFE</text>
    <text x="40" y="65" class="mono" font-size="18" fill="${ORANGE}">● &gt; 100 dB: 15 MINUTE LIMIT</text>
    <text x="420" y="50" class="mono" font-size="20" fill="${VIOLET}">HAIR CELLS NEVER REGROW</text>
  </g>

  <!-- Spec Footnote -->
  <text x="400" y="745" text-anchor="middle" class="mono" font-size="18" fill="${MUTED}" letter-spacing="6">BRAMLABS ACOUSTIC ENGINEERING</text>
</svg>`;

// ─── 11. MAINTENANCE WINDOW (Scheduled Downtime / 03:00 UTC) ──────────
art["maintenance-window"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Main Title -->
  <text x="400" y="80" text-anchor="middle" class="mono" font-size="48" fill="${IVORY}" letter-spacing="8">MAINTENANCE WINDOW</text>
  <text x="400" y="125" text-anchor="middle" class="mono" font-size="20" fill="${ORANGE}" letter-spacing="5">SCHEDULED DOWNTIME // 03:00 - 05:00 UTC</text>

  <!-- Big Terminal Status Block -->
  <g transform="translate(60, 160)">
    <rect width="680" height="420" rx="14" fill="#161B22" stroke="${ORANGE}" stroke-width="3"/>
    
    <!-- Header Bar -->
    <rect width="680" height="50" rx="14" fill="#241416"/>
    <circle cx="35" cy="25" r="8" fill="${ORANGE}"/>
    <circle cx="65" cy="25" r="8" fill="${GOLD}"/>
    <circle cx="95" cy="25" r="8" fill="${GREEN}"/>
    <text x="130" y="32" class="mono" font-size="18" fill="${IVORY}">sys-admin@cluster-01: ~#</text>

    <!-- Terminal Lines -->
    <text x="40" y="110" class="mono" font-size="22" fill="${CYAN}">[03:00:01] INITIATING DATABASE MIGRATION...</text>
    <text x="40" y="160" class="mono" font-size="22" fill="${GREEN}">[03:01:45] REPLAYING WAL LOGS: 1,842,000 ROWS</text>
    <text x="40" y="210" class="mono" font-size="22" fill="${ORANGE}">[03:03:12] FLUSHING REDIS CACHE TIERS...</text>
    <text x="40" y="260" class="mono" font-size="22" fill="${GREEN}">[03:04:59] HEALTHCHECK PASSED (0 ERRORS)</text>
    <text x="40" y="310" class="mono" font-size="22" fill="${CYAN}">[03:05:00] TRAFFIC ROUTING RESTORED.</text>

    <!-- Status Stamp -->
    <rect x="40" y="340" width="600" height="50" rx="8" fill="#0E281F" stroke="${GREEN}" stroke-width="2"/>
    <text x="340" y="372" text-anchor="middle" class="mono" font-size="20" fill="${GREEN}">UPGRADE COMPLETE // NO PANIC</text>
  </g>

  <!-- Metric Badges -->
  <g transform="translate(60, 610)">
    <rect width="325" height="70" rx="12" fill="#0D1117" stroke="${IVORY}" stroke-width="2"/>
    <text x="162" y="44" text-anchor="middle" class="mono" font-size="20" fill="${IVORY}">DOWNTIME: 4m 59s</text>

    <g transform="translate(355, 0)">
      <rect width="325" height="70" rx="12" fill="#0D1117" stroke="${GREEN}" stroke-width="2"/>
      <text x="162" y="44" text-anchor="middle" class="mono" font-size="20" fill="${GREEN}">DATA LOSS: 0 BYTES</text>
    </g>
  </g>

  <!-- Spec Footnote -->
  <text x="400" y="750" text-anchor="middle" class="mono" font-size="18" fill="${MUTED}" letter-spacing="6">BRAMLABS SITE RELIABILITY ENGINEERING</text>
</svg>`;

// ─── 12. BRAMLABS MODULAR GRID (Swiss Modernist Grid) ─────────────────
art["bramlabs-modular-grid"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="none">
  ${fontStyle}
  <!-- Main Title -->
  <text x="400" y="80" text-anchor="middle" class="mono" font-size="52" fill="${IVORY}" letter-spacing="8">MODULAR GRID SYSTEM</text>
  <text x="400" y="125" text-anchor="middle" class="mono" font-size="20" fill="${CYAN}" letter-spacing="5">SWISS MODERNIST SPECIFICATION // BRAMLABS</text>

  <!-- 4 Modular Quadrant Blocks -->
  <!-- Quadrant 01 -->
  <g transform="translate(60, 160)">
    <rect width="325" height="235" rx="12" fill="#161B22" stroke="${CYAN}" stroke-width="3"/>
    <text x="30" y="55" class="mono" font-size="36" fill="${CYAN}">01</text>
    <text x="30" y="105" class="mono" font-size="22" fill="${IVORY}">TYPOGRAPHY</text>
    <text x="30" y="145" class="mono" font-size="16" fill="${MUTED}">GEIST MONO / 700</text>
    <text x="30" y="175" class="mono" font-size="16" fill="${MUTED}">BRICOLAGE / 800</text>
    <line x1="30" y1="200" x2="295" y2="200" stroke="${CYAN}" stroke-width="4"/>
  </g>

  <!-- Quadrant 02 -->
  <g transform="translate(415, 160)">
    <rect width="325" height="235" rx="12" fill="#161B22" stroke="${ORANGE}" stroke-width="3"/>
    <text x="30" y="55" class="mono" font-size="36" fill="${ORANGE}">02</text>
    <text x="30" y="105" class="mono" font-size="22" fill="${IVORY}">GEOMETRY</text>
    <circle cx="162" cy="155" r="45" stroke="${ORANGE}" stroke-width="6" fill="none"/>
    <rect x="235" y="120" width="60" height="60" stroke="${IVORY}" stroke-width="3" fill="none"/>
  </g>

  <!-- Quadrant 03 -->
  <g transform="translate(60, 420)">
    <rect width="325" height="235" rx="12" fill="#161B22" stroke="${GREEN}" stroke-width="3"/>
    <text x="30" y="55" class="mono" font-size="36" fill="${GREEN}">03</text>
    <text x="30" y="105" class="mono" font-size="22" fill="${IVORY}">PRECISION</text>
    <line x1="30" y1="145" x2="295" y2="145" stroke="${GREEN}" stroke-width="3" stroke-dasharray="6 6"/>
    <text x="30" y="185" class="mono" font-size="16" fill="${GREEN}">TOLERANCE: 0.01mm</text>
  </g>

  <!-- Quadrant 04 -->
  <g transform="translate(415, 420)">
    <rect width="325" height="235" rx="12" fill="#161B22" stroke="${VIOLET}" stroke-width="3"/>
    <text x="30" y="55" class="mono" font-size="36" fill="${VIOLET}">04</text>
    <text x="30" y="105" class="mono" font-size="22" fill="${IVORY}">EXECUTION</text>
    <rect x="30" y="140" width="265" height="40" rx="8" fill="${VIOLET}"/>
    <text x="162" y="167" text-anchor="middle" class="mono" font-size="18" fill="#0D1117">100% IN-HOUSE</text>
  </g>

  <!-- Spec Footnote -->
  <text x="400" y="745" text-anchor="middle" class="mono" font-size="18" fill="${IVORY}" letter-spacing="6">BRAMLABS DESIGN SYSTEM // EST. 2026</text>
</svg>`;

// Write all 12 SVG artwork files
for (const [slug, svg] of Object.entries(art)) {
  const filePath = path.join(designsDir, `${slug}-art.svg`);
  fs.writeFileSync(filePath, svg.trim() + "\n");
  console.log(`✓ [vector] ${slug}-art.svg (${fs.statSync(filePath).size} bytes)`);
}

console.log("\nAll 12 premium vector artworks generated successfully.");
