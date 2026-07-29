/**
 * BramLabs asset upgrade — original vector art, flattened mockups, process stages, OG.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = "/workspace/public";
const designsDir = path.join(ROOT, "designs");
const mockupsDir = path.join(ROOT, "mockups");
const processDir = path.join(ROOT, "process");
const ogDir = path.join(ROOT, "og");
const studioDir = path.join(ROOT, "studio");
for (const d of [designsDir, mockupsDir, processDir, ogDir, studioDir]) {
  fs.mkdirSync(d, { recursive: true });
}

const IVORY = "#F4F1E9";
const INK = "#111315";
const CYAN = "#23C5EF";
const ORANGE = "#FF862E";
const GREEN = "#42C991";
const VIOLET = "#7976E8";
const MUTED = "#666963";

const write = (p, content) => {
  fs.writeFileSync(p, content.trim() + "\n");
  console.log("wrote", p, fs.statSync(p).size);
};

// ─── ARTWORK ───────────────────────────────────────────────

const art = {};

// 1. Rotation Dial — refined signature piece
art["rotation-dial"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <circle cx="400" cy="400" r="310" stroke="${INK}" stroke-width="1" opacity="0.15"/>
  <circle cx="400" cy="400" r="280" stroke="${INK}" stroke-width="2.5"/>
  <circle cx="400" cy="400" r="250" stroke="${INK}" stroke-width="1" stroke-dasharray="3 7" opacity="0.45"/>
  <circle cx="400" cy="400" r="200" stroke="${INK}" stroke-width="1.25" opacity="0.35"/>
  <!-- shift arcs day / swing / night -->
  <path d="M400 200 A200 200 0 0 1 573 500" stroke="${ORANGE}" stroke-width="22" stroke-linecap="round" fill="none"/>
  <path d="M573 500 A200 200 0 0 1 227 500" stroke="${CYAN}" stroke-width="22" stroke-linecap="round" fill="none"/>
  <path d="M227 500 A200 200 0 0 1 400 200" stroke="${INK}" stroke-width="22" stroke-linecap="round" fill="none" opacity="0.55"/>
  <!-- tick marks -->
  ${Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2 - Math.PI / 2;
    const outer = i % 3 === 0 ? 295 : 288;
    const inner = i % 3 === 0 ? 268 : 278;
    const x1 = 400 + Math.cos(a) * outer;
    const y1 = 400 + Math.sin(a) * outer;
    const x2 = 400 + Math.cos(a) * inner;
    const y2 = 400 + Math.sin(a) * inner;
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${INK}" stroke-width="${i % 3 === 0 ? 2 : 1}" opacity="${i % 3 === 0 ? 0.7 : 0.35}"/>`;
  }).join("\n  ")}
  <!-- pointer -->
  <path d="M400 400 L545 265" stroke="${ORANGE}" stroke-width="5" stroke-linecap="round"/>
  <circle cx="400" cy="400" r="14" fill="${INK}"/>
  <circle cx="400" cy="400" r="6" fill="${IVORY}"/>
  <!-- labels -->
  <text x="400" y="72" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="${INK}" letter-spacing="4">07:00 · DAY</text>
  <text x="730" y="520" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="${INK}" letter-spacing="2">15:00</text>
  <text x="400" y="760" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="${INK}" letter-spacing="4">23:00 · NIGHT</text>
  <text x="70" y="420" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${CYAN}" letter-spacing="3">SWING</text>
  <text x="400" y="455" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="${MUTED}" letter-spacing="3">CONTINUOUS</text>
</svg>`;

// 2. Circadian Corrupted
art["circadian-corrupted"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  ${Array.from({ length: 14 }, (_, i) => {
    const y = 160 + i * 36;
    const warp = Math.sin(i * 0.7) * (8 + i * 1.2);
    const dash = i > 8 ? ` stroke-dasharray="${4 + i} ${3}"` : "";
    return `<path d="M90 ${y} C 220 ${y + warp}, 380 ${y - warp * 1.4}, 520 ${y + warp * 0.6} S 710 ${y - warp}, 720 ${y + (i > 9 ? 12 : 0)}" stroke="${i % 3 === 0 ? VIOLET : INK}" stroke-width="${i > 10 ? 2.5 : 1.5}" opacity="${0.35 + (i / 14) * 0.45}"${dash}/>`;
  }).join("\n  ")}
  <circle cx="400" cy="400" r="210" stroke="${CYAN}" stroke-width="1.5" stroke-dasharray="6 10" opacity="0.7"/>
  <circle cx="400" cy="400" r="140" stroke="${VIOLET}" stroke-width="3" opacity="0.85"/>
  <path d="M400 260 L418 390 L400 540 L382 390 Z" fill="${INK}" opacity="0.08"/>
  <text x="400" y="120" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${INK}" letter-spacing="5">CIRCADIAN TRACE</text>
  <text x="400" y="700" text-anchor="middle" font-family="ui-monospace,monospace" font-size="18" fill="${VIOLET}" letter-spacing="6">STATUS: CORRUPTED</text>
  <text x="400" y="730" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="3">NIGHT SHIFT · PHASE DRIFT</text>
</svg>`;

// 3. 24H Hand-Off — stacked interlocking arcs (different from dial)
art["24h-hand-off"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <!-- three interlocking thick rings as handoff bands -->
  <path d="M200 420 A200 200 0 1 1 600 420" stroke="${ORANGE}" stroke-width="36" stroke-linecap="round" fill="none"/>
  <path d="M220 460 A180 180 0 1 1 580 460" stroke="${GREEN}" stroke-width="36" stroke-linecap="round" fill="none" opacity="0.9"/>
  <path d="M240 500 A160 160 0 1 1 560 500" stroke="${INK}" stroke-width="36" stroke-linecap="round" fill="none" opacity="0.35"/>
  <!-- center node -->
  <circle cx="400" cy="380" r="28" fill="${INK}"/>
  <circle cx="400" cy="380" r="12" fill="${IVORY}"/>
  <!-- transfer markers -->
  <circle cx="200" cy="420" r="10" fill="${ORANGE}"/>
  <circle cx="600" cy="420" r="10" fill="${ORANGE}"/>
  <circle cx="220" cy="460" r="10" fill="${GREEN}"/>
  <circle cx="580" cy="460" r="10" fill="${GREEN}"/>
  <text x="400" y="100" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" fill="${INK}" letter-spacing="8">24H</text>
  <text x="400" y="640" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${INK}" letter-spacing="4">DAY → SWING → NIGHT</text>
  <text x="400" y="680" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="3">UNINTERRUPTED COVERAGE</text>
  <text x="130" y="410" font-family="ui-monospace,monospace" font-size="11" fill="${ORANGE}" letter-spacing="2">IN</text>
  <text x="640" y="410" font-family="ui-monospace,monospace" font-size="11" fill="${ORANGE}" letter-spacing="2">OUT</text>
</svg>`;

// 4. 37 Tabs Open
art["37-tabs-open"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <!-- window chrome -->
  <rect x="80" y="140" width="640" height="480" rx="12" stroke="${INK}" stroke-width="2.5" fill="${IVORY}"/>
  <rect x="80" y="140" width="640" height="48" rx="12" fill="${INK}" opacity="0.06"/>
  <circle cx="112" cy="164" r="7" fill="${ORANGE}" opacity="0.8"/>
  <circle cx="136" cy="164" r="7" fill="${CYAN}" opacity="0.8"/>
  <circle cx="160" cy="164" r="7" fill="${GREEN}" opacity="0.8"/>
  <!-- tabs row -->
  ${Array.from({ length: 9 }, (_, i) => {
    const x = 100 + i * 68;
    const active = i === 3;
    return `<rect x="${x}" y="200" width="62" height="34" rx="4" fill="${active ? CYAN : "none"}" stroke="${INK}" stroke-width="1.5" opacity="${active ? 1 : 0.55}"/>
  <text x="${x + 31}" y="222" text-anchor="middle" font-family="ui-monospace,monospace" font-size="10" fill="${active ? INK : MUTED}">tab</text>`;
  }).join("\n  ")}
  <!-- stacked tab shadows implying more -->
  ${Array.from({ length: 6 }, (_, i) => `<rect x="${120 + i * 4}" y="${250 + i * 8}" width="560" height="280" rx="4" stroke="${INK}" stroke-width="1" opacity="${0.08 + i * 0.04}" fill="none"/>`).join("\n  ")}
  <rect x="120" y="250" width="560" height="280" rx="4" stroke="${INK}" stroke-width="1.5" fill="${IVORY}"/>
  <text x="400" y="360" text-anchor="middle" font-family="system-ui,sans-serif" font-size="42" font-weight="600" fill="${INK}" letter-spacing="-1">37 TABS OPEN</text>
  <text x="400" y="410" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" fill="${CYAN}" letter-spacing="4">ALL IMPORTANT</text>
  <rect x="200" y="460" width="400" height="32" rx="4" stroke="${INK}" stroke-width="1.5" fill="none"/>
  <text x="400" y="481" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="2">will_close_later · true</text>
  <text x="400" y="680" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${MUTED}" letter-spacing="3">GENERIC UI · NO BRAND CHROME</text>
</svg>`;

// 5. Build 47 — REBUILT stronger typographic poster
art["build-47"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <!-- construction grid -->
  ${Array.from({ length: 9 }, (_, i) => `<line x1="${100 + i * 75}" y1="80" x2="${100 + i * 75}" y2="720" stroke="${INK}" stroke-width="0.5" opacity="0.08"/>`).join("\n  ")}
  ${Array.from({ length: 9 }, (_, i) => `<line x1="80" y1="${100 + i * 75}" x2="720" y2="${100 + i * 75}" stroke="${INK}" stroke-width="0.5" opacity="0.08"/>`).join("\n  ")}
  <rect x="100" y="100" width="600" height="600" stroke="${INK}" stroke-width="1.5" opacity="0.25"/>
  <!-- corner marks -->
  <path d="M100 140 L100 100 L140 100" stroke="${ORANGE}" stroke-width="3" fill="none"/>
  <path d="M700 140 L700 100 L660 100" stroke="${ORANGE}" stroke-width="3" fill="none"/>
  <path d="M100 660 L100 700 L140 700" stroke="${ORANGE}" stroke-width="3" fill="none"/>
  <path d="M700 660 L700 700 L660 700" stroke="${ORANGE}" stroke-width="3" fill="none"/>
  <text x="400" y="200" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${MUTED}" letter-spacing="8">ITERATION LOG</text>
  <text x="400" y="340" text-anchor="middle" font-family="system-ui,sans-serif" font-size="92" font-weight="700" fill="${INK}" letter-spacing="-3">BUILD</text>
  <!-- outlined 47 with fill accent bar -->
  <text x="400" y="500" text-anchor="middle" font-family="system-ui,sans-serif" font-size="200" font-weight="700" fill="none" stroke="${INK}" stroke-width="4" letter-spacing="-8">47</text>
  <rect x="200" y="530" width="400" height="6" fill="${ORANGE}"/>
  <text x="400" y="580" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" fill="${INK}" letter-spacing="6">SHIP WHEN READY</text>
  <text x="160" y="660" font-family="ui-monospace,monospace" font-size="11" fill="${MUTED}" letter-spacing="2">REV 47 · PASSED</text>
  <text x="640" y="660" text-anchor="end" font-family="ui-monospace,monospace" font-size="11" fill="${MUTED}" letter-spacing="2">NO PERFECTION GATE</text>
</svg>`;

// 6. Wireframe Anatomy
art["wireframe-anatomy"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <!-- device frame -->
  <rect x="220" y="80" width="360" height="640" rx="28" stroke="${INK}" stroke-width="2.5"/>
  <rect x="240" y="120" width="320" height="560" rx="4" stroke="${INK}" stroke-width="1.5"/>
  <!-- status bar -->
  <rect x="240" y="120" width="320" height="28" fill="${INK}" opacity="0.06"/>
  <circle cx="400" cy="100" r="6" fill="${INK}" opacity="0.3"/>
  <!-- nav -->
  <rect x="256" y="160" width="80" height="12" rx="2" fill="${INK}" opacity="0.2"/>
  <rect x="456" y="158" width="88" height="16" rx="8" stroke="${CYAN}" stroke-width="1.5"/>
  <!-- hero module -->
  <rect x="256" y="196" width="288" height="120" rx="4" stroke="${INK}" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="400" y="262" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="2">HERO / 16:9</text>
  <!-- content modules -->
  <rect x="256" y="336" width="136" height="100" rx="4" stroke="${INK}" stroke-width="1.5"/>
  <rect x="408" y="336" width="136" height="100" rx="4" stroke="${INK}" stroke-width="1.5"/>
  <rect x="256" y="452" width="288" height="48" rx="4" stroke="${INK}" stroke-width="1.5"/>
  <rect x="256" y="516" width="288" height="48" rx="4" stroke="${INK}" stroke-width="1.5"/>
  <rect x="256" y="580" width="180" height="36" rx="4" fill="${CYAN}" opacity="0.35" stroke="${INK}" stroke-width="1"/>
  <!-- dimension callouts -->
  <line x1="180" y1="120" x2="180" y2="680" stroke="${CYAN}" stroke-width="1"/>
  <line x1="170" y1="120" x2="190" y2="120" stroke="${CYAN}" stroke-width="1"/>
  <line x1="170" y1="680" x2="190" y2="680" stroke="${CYAN}" stroke-width="1"/>
  <text x="160" y="400" text-anchor="middle" transform="rotate(-90 160 400)" font-family="ui-monospace,monospace" font-size="11" fill="${CYAN}" letter-spacing="2">640 PT</text>
  <line x1="240" y1="740" x2="560" y2="740" stroke="${CYAN}" stroke-width="1"/>
  <text x="400" y="765" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="${CYAN}" letter-spacing="2">360 PT · SAFE AREA</text>
  <text x="400" y="50" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${INK}" letter-spacing="4">WIREFRAME ANATOMY</text>
</svg>`;

// 7. Focus Waveform
art["focus-waveform"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <line x1="80" y1="400" x2="720" y2="400" stroke="${INK}" stroke-width="1" opacity="0.2"/>
  <line x1="80" y1="280" x2="720" y2="280" stroke="${INK}" stroke-width="0.5" opacity="0.1"/>
  <line x1="80" y1="520" x2="720" y2="520" stroke="${INK}" stroke-width="0.5" opacity="0.1"/>
  <!-- secondary echo -->
  <path d="M80 420 C 160 420, 200 360, 280 380 S 400 500, 480 360 S 640 300, 720 400" stroke="${VIOLET}" stroke-width="2" opacity="0.25" fill="none"/>
  <!-- primary wave -->
  <path d="M80 400 C 160 400, 200 220, 300 260 S 420 560, 520 300 S 640 180, 720 400" stroke="${VIOLET}" stroke-width="5" fill="none" stroke-linecap="round"/>
  <!-- peak marker -->
  <circle cx="520" cy="300" r="8" fill="${VIOLET}"/>
  <line x1="520" y1="300" x2="520" y2="180" stroke="${VIOLET}" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="520" y="165" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${VIOLET}" letter-spacing="2">PEAK FOCUS</text>
  <text x="400" y="100" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${INK}" letter-spacing="5">FOCUS IS A WAVEFORM</text>
  <text x="100" y="640" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="2">T0</text>
  <text x="700" y="640" text-anchor="end" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="2">TN</text>
  <text x="400" y="700" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${MUTED}" letter-spacing="3">DEEP WORK · RISE · HOLD · DECAY</text>
</svg>`;

// 8. Signal / Noise
art["signal-noise"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <!-- noise field left -->
  ${Array.from({ length: 400 }, (_, i) => {
    const x = 40 + (i % 20) * 18 + (Math.sin(i * 1.7) * 4);
    const y = 80 + Math.floor(i / 20) * 18 + (Math.cos(i * 2.1) * 3);
    const r = 1 + (i % 5) * 0.6;
    const op = 0.15 + (i % 7) * 0.08;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${i % 11 === 0 ? ORANGE : INK}" opacity="${op}"/>`;
  }).join("\n  ")}
  <!-- clean signal panel right -->
  <rect x="400" y="80" width="360" height="640" fill="${IVORY}" stroke="${INK}" stroke-width="2"/>
  <path d="M440 480 C 500 480, 520 200, 580 280 S 660 520, 720 360" stroke="${CYAN}" stroke-width="4" fill="none" stroke-linecap="round"/>
  <line x1="440" y1="520" x2="720" y2="520" stroke="${INK}" stroke-width="1" opacity="0.2"/>
  <text x="580" y="160" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${INK}" letter-spacing="4">SIGNAL</text>
  <text x="220" y="720" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${MUTED}" letter-spacing="4">NOISE</text>
  <text x="400" y="50" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${INK}" letter-spacing="6">SIGNAL / NOISE</text>
  <rect x="398" y="80" width="4" height="640" fill="${ORANGE}"/>
</svg>`;

// 9. Streak Grid 365
art["streak-grid-365"] = (() => {
  const cells = [];
  const cols = 21;
  const rows = 18;
  const size = 22;
  const gap = 4;
  const ox = (800 - cols * (size + gap)) / 2;
  const oy = 160;
  let n = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      n++;
      if (n > 365) break;
      const x = ox + c * (size + gap);
      const y = oy + r * (size + gap);
      const isLast = n === 365;
      const intensity = n % 17 === 0 ? 0.55 : n % 5 === 0 ? 0.28 : 0.12;
      cells.push(
        isLast
          ? `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="3" fill="${GREEN}" stroke="${INK}" stroke-width="1"/>`
          : `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="2" fill="${INK}" opacity="${intensity}"/>`
      );
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <text x="400" y="80" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${INK}" letter-spacing="5">STREAK GRID</text>
  <text x="400" y="110" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="3">365 UNITS · ONE YEAR</text>
  ${cells.join("\n  ")}
  <rect x="200" y="680" width="16" height="16" rx="2" fill="${INK}" opacity="0.12"/>
  <text x="225" y="693" font-family="ui-monospace,monospace" font-size="11" fill="${MUTED}">DAY</text>
  <rect x="320" y="680" width="16" height="16" rx="2" fill="${INK}" opacity="0.55"/>
  <text x="345" y="693" font-family="ui-monospace,monospace" font-size="11" fill="${MUTED}">PEAK</text>
  <rect x="440" y="680" width="16" height="16" rx="3" fill="${GREEN}" stroke="${INK}" stroke-width="1"/>
  <text x="465" y="693" font-family="ui-monospace,monospace" font-size="11" fill="${MUTED}">DAY 365</text>
  <text x="400" y="740" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="3">CONSISTENCY WITHOUT NOISE</text>
</svg>`;
})();

// 10. Protect Your Ears — REBUILT frequency limiter
art["protect-your-ears"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  ${[300, 250, 200, 150, 100, 55].map((r, i) =>
    `<circle cx="400" cy="400" r="${r}" stroke="${i === 2 ? ORANGE : INK}" stroke-width="${i === 2 ? 5 : 1.5}" opacity="${i === 2 ? 1 : 0.25 + i * 0.08}"/>`
  ).join("\n  ")}
  <!-- frequency ticks on outer ring -->
  ${Array.from({ length: 36 }, (_, i) => {
    const a = (i / 36) * Math.PI * 2;
    const o = 300;
    const inn = i % 3 === 0 ? 280 : 290;
    return `<line x1="${(400 + Math.cos(a) * o).toFixed(1)}" y1="${(400 + Math.sin(a) * o).toFixed(1)}" x2="${(400 + Math.cos(a) * inn).toFixed(1)}" y2="${(400 + Math.sin(a) * inn).toFixed(1)}" stroke="${INK}" stroke-width="${i % 3 === 0 ? 2 : 1}" opacity="0.5"/>`;
  }).join("\n  ")}
  <!-- limiter threshold arc -->
  <path d="M400 150 A250 250 0 0 1 650 400" stroke="${CYAN}" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="400" cy="400" r="28" fill="${INK}"/>
  <circle cx="400" cy="400" r="12" fill="${ORANGE}"/>
  <text x="400" y="70" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${INK}" letter-spacing="5">PROTECT YOUR EARS</text>
  <text x="400" y="720" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${ORANGE}" letter-spacing="4">LIMITER ENGAGED</text>
  <text x="400" y="750" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="${MUTED}" letter-spacing="3">dB CEILING · SAFE LISTENING</text>
  <text x="400" y="130" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="${CYAN}" letter-spacing="2">THRESHOLD</text>
</svg>`;

// 11. Maintenance Window — REBUILT ops panel
art["maintenance-window"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <rect x="100" y="120" width="600" height="560" rx="8" stroke="${INK}" stroke-width="2.5"/>
  <rect x="100" y="120" width="600" height="56" rx="8" fill="${INK}"/>
  <text x="130" y="155" font-family="ui-monospace,monospace" font-size="14" fill="${IVORY}" letter-spacing="3">SYSTEM · MAINTENANCE WINDOW</text>
  <circle cx="660" cy="148" r="8" fill="${GREEN}"/>
  <!-- rows -->
  ${[
    ["WINDOW", "02:00 – 04:00 UTC"],
    ["IMPACT", "READ-ONLY MODE"],
    ["SCOPE", "API · EDGE · CACHE"],
    ["OWNER", "ON-CALL ROTATION"],
    ["STATUS", "ACKNOWLEDGED"],
  ].map((row, i) => {
    const y = 220 + i * 64;
    return `<text x="140" y="${y}" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="2">${row[0]}</text>
  <text x="140" y="${y + 28}" font-family="system-ui,sans-serif" font-size="22" font-weight="500" fill="${INK}">${row[1]}</text>
  <line x1="140" y1="${y + 44}" x2="660" y2="${y + 44}" stroke="${INK}" stroke-width="1" opacity="0.12"/>`;
  }).join("\n  ")}
  <!-- action buttons -->
  <rect x="140" y="580" width="140" height="40" rx="4" fill="${INK}"/>
  <text x="210" y="606" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${IVORY}" letter-spacing="2">ACK</text>
  <rect x="300" y="580" width="140" height="40" rx="4" stroke="${INK}" stroke-width="1.5"/>
  <text x="370" y="606" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${INK}" letter-spacing="2">SNOOZE</text>
  <text x="400" y="720" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}" letter-spacing="3">NO VENDOR CHROME · UTILITY ONLY</text>
</svg>`;

// 12. BramLabs Modular Grid
art["bramlabs-modular-grid"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  ${Array.from({ length: 6 }, (_, r) =>
    Array.from({ length: 6 }, (_, c) => {
      const x = 140 + c * 90;
      const y = 140 + r * 90;
      const accents = new Set(["0-0", "1-2", "2-4", "3-1", "4-3", "5-5", "2-2", "4-5"]);
      const key = `${r}-${c}`;
      const fill = accents.has(key) ? (c % 2 === 0 ? CYAN : ORANGE) : "none";
      const op = accents.has(key) ? 0.85 : 1;
      return `<rect x="${x}" y="${y}" width="78" height="78" stroke="${INK}" stroke-width="1.5" fill="${fill}" opacity="${op}"/>
  <text x="${x + 8}" y="${y + 18}" font-family="ui-monospace,monospace" font-size="9" fill="${MUTED}">${r},${c}</text>`;
    }).join("\n  ")
  ).join("\n  ")}
  <text x="400" y="80" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${INK}" letter-spacing="5">BRAMLABS</text>
  <text x="400" y="720" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${MUTED}" letter-spacing="4">MODULAR GRID · 6×6</text>
  <text x="140" y="760" font-family="ui-monospace,monospace" font-size="11" fill="${CYAN}" letter-spacing="2">COORDINATE SYSTEM</text>
  <text x="660" y="760" text-anchor="end" font-family="ui-monospace,monospace" font-size="11" fill="${ORANGE}" letter-spacing="2">STUDIO MARK</text>
</svg>`;

// Write art + detail (detail = zoomed crop style via larger stroke version using same art for now, with frame)
for (const [slug, svg] of Object.entries(art)) {
  write(path.join(designsDir, `${slug}-art.svg`), svg);
  // detail: same composition with corner crop frame
  const detail = svg
    .replace('viewBox="0 0 800 800"', 'viewBox="120 120 560 560"')
    .replace(`fill="${IVORY}"/>`, `fill="${IVORY}"/><rect x="120" y="120" width="560" height="560" fill="none" stroke="${INK}" stroke-width="2" opacity="0.15"/>`);
  write(path.join(designsDir, `${slug}-detail.svg`), detail);
}

// ─── FLATTENED MOCKUPS (no external image href) ────────────
// Tee silhouette + simplified chest graphic as abstract shapes per design

function teeShell(label, chestGraphic) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" fill="none">
  <rect width="800" height="1000" fill="#E8E4DA"/>
  <!-- soft ground shadow -->
  <ellipse cx="400" cy="920" rx="180" ry="18" fill="${INK}" opacity="0.08"/>
  <!-- shirt body -->
  <path d="M268 175
    C 300 155, 340 145, 400 145
    C 460 145, 500 155, 532 175
    L 620 250 L 580 310 L 540 280
    L 540 860
    C 540 900, 510 920, 470 920
    L 330 920
    C 290 920, 260 900, 260 860
    L 260 280 L 220 310 L 180 250 Z" fill="#141618"/>
  <!-- fabric highlight -->
  <path d="M300 300 L300 820 L360 820 L360 300 Z" fill="#fff" opacity="0.03"/>
  <!-- collar -->
  <path d="M340 175 C 370 210, 430 210, 460 175" stroke="#2a2c2e" stroke-width="10" fill="none"/>
  <ellipse cx="400" cy="185" rx="52" ry="26" fill="#E8E4DA"/>
  <!-- neck rib hint -->
  <path d="M352 195 C 380 215, 420 215, 448 195" stroke="#1f2123" stroke-width="2" opacity="0.5"/>
  <!-- sleeves depth -->
  <path d="M268 175 L180 250 L220 310 L260 280" fill="#0e1012"/>
  <path d="M532 175 L620 250 L580 310 L540 280" fill="#0e1012"/>
  <!-- chest print area -->
  <g transform="translate(400 480) scale(0.92) translate(-400 -400)">
    ${chestGraphic}
  </g>
  <text x="400" y="970" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${MUTED}" letter-spacing="3">${label}</text>
</svg>`;
}

const chests = {
  "rotation-dial": `
    <circle cx="400" cy="400" r="150" stroke="${IVORY}" stroke-width="2" fill="none" opacity="0.9"/>
    <path d="M400 280 A120 120 0 0 1 504 460" stroke="${ORANGE}" stroke-width="14" stroke-linecap="round" fill="none"/>
    <path d="M504 460 A120 120 0 0 1 296 460" stroke="${CYAN}" stroke-width="14" stroke-linecap="round" fill="none"/>
    <path d="M296 460 A120 120 0 0 1 400 280" stroke="${IVORY}" stroke-width="14" stroke-linecap="round" fill="none" opacity="0.35"/>
    <path d="M400 400 L480 320" stroke="${ORANGE}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="400" cy="400" r="10" fill="${IVORY}"/>`,
  "circadian-corrupted": `
    ${Array.from({ length: 8 }, (_, i) => `<path d="M250 ${320 + i * 22} Q 400 ${300 + i * 22 + (i % 2 ? 20 : -20)}, 550 ${320 + i * 22}" stroke="${i % 2 ? VIOLET : IVORY}" stroke-width="2" opacity="0.7" fill="none"/>`).join("")}
    <circle cx="400" cy="400" r="90" stroke="${CYAN}" stroke-width="2" stroke-dasharray="5 6" fill="none"/>
    <text x="400" y="520" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${VIOLET}" letter-spacing="3">CORRUPTED</text>`,
  "24h-hand-off": `
    <path d="M280 400 A120 120 0 1 1 520 400" stroke="${ORANGE}" stroke-width="20" stroke-linecap="round" fill="none"/>
    <path d="M300 430 A100 100 0 1 1 500 430" stroke="${GREEN}" stroke-width="20" stroke-linecap="round" fill="none"/>
    <path d="M320 460 A80 80 0 1 1 480 460" stroke="${IVORY}" stroke-width="20" stroke-linecap="round" fill="none" opacity="0.35"/>
    <circle cx="400" cy="380" r="14" fill="${IVORY}"/>
    <text x="400" y="300" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" fill="${IVORY}" letter-spacing="4">24H</text>`,
  "37-tabs-open": `
    <rect x="250" y="300" width="300" height="220" rx="8" stroke="${IVORY}" stroke-width="2" fill="none"/>
    ${Array.from({ length: 5 }, (_, i) => `<rect x="${270 + i * 52}" y="320" width="46" height="22" rx="3" stroke="${IVORY}" stroke-width="1" fill="${i === 2 ? CYAN : "none"}" opacity="0.9"/>`).join("")}
    <text x="400" y="420" text-anchor="middle" font-family="system-ui,sans-serif" font-size="22" font-weight="600" fill="${IVORY}">37 TABS OPEN</text>
    <text x="400" y="450" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${CYAN}" letter-spacing="2">ALL IMPORTANT</text>`,
  "build-47": `
    <text x="400" y="360" text-anchor="middle" font-family="system-ui,sans-serif" font-size="48" font-weight="700" fill="${IVORY}" letter-spacing="-1">BUILD</text>
    <text x="400" y="460" text-anchor="middle" font-family="system-ui,sans-serif" font-size="96" font-weight="700" fill="none" stroke="${IVORY}" stroke-width="3" letter-spacing="-4">47</text>
    <rect x="280" y="480" width="240" height="4" fill="${ORANGE}"/>
    <text x="400" y="520" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${IVORY}" letter-spacing="3">SHIP WHEN READY</text>`,
  "wireframe-anatomy": `
    <rect x="300" y="280" width="200" height="280" rx="16" stroke="${IVORY}" stroke-width="2" fill="none"/>
    <rect x="315" y="310" width="170" height="50" stroke="${IVORY}" stroke-width="1" stroke-dasharray="4 3" fill="none"/>
    <rect x="315" y="380" width="80" height="50" stroke="${IVORY}" stroke-width="1" fill="none"/>
    <rect x="405" y="380" width="80" height="50" stroke="${IVORY}" stroke-width="1" fill="none"/>
    <rect x="315" y="450" width="170" height="30" stroke="${CYAN}" stroke-width="1.5" fill="none"/>
    <rect x="315" y="500" width="100" height="24" fill="${CYAN}" opacity="0.5"/>`,
  "focus-waveform": `
    <path d="M240 420 C 300 420, 320 300, 380 340 S 480 520, 540 320 S 620 280, 660 400" stroke="${VIOLET}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <line x1="240" y1="440" x2="660" y2="440" stroke="${IVORY}" stroke-width="1" opacity="0.3"/>
    <circle cx="540" cy="320" r="6" fill="${VIOLET}"/>
    <text x="400" y="520" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${IVORY}" letter-spacing="3">FOCUS WAVEFORM</text>`,
  "signal-noise": `
    ${Array.from({ length: 40 }, (_, i) => `<circle cx="${260 + (i % 5) * 20}" cy="${320 + Math.floor(i / 5) * 20}" r="2" fill="${IVORY}" opacity="${0.2 + (i % 5) * 0.1}"/>`).join("")}
    <rect x="400" y="300" width="180" height="220" stroke="${IVORY}" stroke-width="2" fill="none"/>
    <path d="M420 420 C 450 420, 460 340, 500 360 S 540 460, 560 380" stroke="${CYAN}" stroke-width="3" fill="none"/>
    <rect x="398" y="300" width="3" height="220" fill="${ORANGE}"/>`,
  "streak-grid-365": `
    ${Array.from({ length: 56 }, (_, i) => {
      const c = i % 8, r = Math.floor(i / 8);
      const last = i === 55;
      return `<rect x="${300 + c * 26}" y="${320 + r * 26}" width="20" height="20" rx="2" fill="${last ? GREEN : IVORY}" opacity="${last ? 1 : 0.15 + (i % 4) * 0.08}"/>`;
    }).join("")}`,
  "protect-your-ears": `
    <circle cx="400" cy="400" r="130" stroke="${IVORY}" stroke-width="2" fill="none" opacity="0.4"/>
    <circle cx="400" cy="400" r="95" stroke="${ORANGE}" stroke-width="5" fill="none"/>
    <circle cx="400" cy="400" r="60" stroke="${IVORY}" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M400 270 A130 130 0 0 1 530 400" stroke="${CYAN}" stroke-width="6" stroke-linecap="round" fill="none"/>
    <circle cx="400" cy="400" r="14" fill="${IVORY}"/>
    <circle cx="400" cy="400" r="6" fill="${ORANGE}"/>`,
  "maintenance-window": `
    <rect x="250" y="300" width="300" height="240" rx="6" stroke="${IVORY}" stroke-width="2" fill="none"/>
    <rect x="250" y="300" width="300" height="36" fill="${IVORY}" opacity="0.15"/>
    <text x="400" y="324" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="${IVORY}" letter-spacing="2">MAINTENANCE</text>
    <text x="280" y="380" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}">WINDOW</text>
    <text x="280" y="408" font-family="system-ui,sans-serif" font-size="18" fill="${IVORY}">02:00–04:00</text>
    <text x="280" y="450" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}">STATUS</text>
    <text x="280" y="478" font-family="system-ui,sans-serif" font-size="18" fill="${GREEN}">ACKNOWLEDGED</text>`,
  "bramlabs-modular-grid": `
    ${Array.from({ length: 16 }, (_, i) => {
      const c = i % 4, r = Math.floor(i / 4);
      const accent = [0, 5, 10, 15, 3, 12].includes(i);
      return `<rect x="${310 + c * 48}" y="${320 + r * 48}" width="40" height="40" stroke="${IVORY}" stroke-width="1.5" fill="${accent ? (i % 2 ? CYAN : ORANGE) : "none"}" opacity="${accent ? 0.85 : 0.7}"/>`;
    }).join("")}`,
};

const labels = {
  "rotation-dial": "01 · ROTATION DIAL",
  "circadian-corrupted": "02 · CIRCADIAN CORRUPTED",
  "24h-hand-off": "03 · 24H HAND-OFF",
  "37-tabs-open": "04 · 37 TABS OPEN",
  "build-47": "05 · BUILD 47",
  "wireframe-anatomy": "06 · WIREFRAME ANATOMY",
  "focus-waveform": "07 · FOCUS WAVEFORM",
  "signal-noise": "08 · SIGNAL / NOISE",
  "streak-grid-365": "09 · STREAK GRID 365",
  "protect-your-ears": "10 · PROTECT YOUR EARS",
  "maintenance-window": "11 · MAINTENANCE WINDOW",
  "bramlabs-modular-grid": "12 · MODULAR GRID",
};

for (const [slug, chest] of Object.entries(chests)) {
  write(path.join(mockupsDir, `${slug}-tee.svg`), teeShell(labels[slug], chest));
}

// ─── PROCESS STAGES ────────────────────────────────────────
write(path.join(processDir, "rotation-sketch.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <text x="60" y="60" font-family="ui-monospace,monospace" font-size="14" fill="${MUTED}" letter-spacing="3">01 · ROUGH CONCEPT</text>
  <!-- loose pencil-like arcs -->
  <path d="M200 400 Q 300 200, 400 400 T 600 400" stroke="${INK}" stroke-width="2" fill="none" opacity="0.4"/>
  <path d="M220 420 Q 320 240, 420 420 T 580 420" stroke="${INK}" stroke-width="1.5" fill="none" opacity="0.3"/>
  <circle cx="400" cy="400" r="160" stroke="${INK}" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.5"/>
  <circle cx="400" cy="400" r="8" fill="${INK}" opacity="0.5"/>
  <text x="400" y="620" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${MUTED}">three periods · one loop?</text>
  <path d="M150 650 L250 680 L200 700" stroke="${INK}" stroke-width="1" opacity="0.3" fill="none"/>
  <text x="270" y="690" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}">day / swing / night</text>
</svg>`);

write(path.join(processDir, "rotation-research.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <text x="60" y="60" font-family="ui-monospace,monospace" font-size="14" fill="${MUTED}" letter-spacing="3">02 · SHIFT RESEARCH</text>
  <line x1="100" y1="200" x2="700" y2="200" stroke="${INK}" stroke-width="1" opacity="0.2"/>
  ${["07:00 DAY", "15:00 SWING", "23:00 NIGHT"].map((t, i) => {
    const x = 160 + i * 200;
    return `<rect x="${x}" y="280" width="160" height="200" rx="4" stroke="${INK}" stroke-width="1.5" fill="none"/>
  <text x="${x + 80}" y="320" text-anchor="middle" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}">${t}</text>
  <rect x="${x + 20}" y="360" width="120" height="8" fill="${i === 0 ? ORANGE : i === 1 ? CYAN : INK}" opacity="0.6"/>
  <rect x="${x + 20}" y="380" width="${80 + i * 15}" height="8" fill="${INK}" opacity="0.15"/>
  <rect x="${x + 20}" y="400" width="${60 + i * 20}" height="8" fill="${INK}" opacity="0.15"/>`;
  }).join("\n  ")}
  <text x="400" y="580" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="${MUTED}">equal weight · continuous handoff</text>
</svg>`);

write(path.join(processDir, "rotation-geometry.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <text x="60" y="60" font-family="ui-monospace,monospace" font-size="14" fill="${MUTED}" letter-spacing="3">03 · GEOMETRIC CONSTRUCTION</text>
  <line x1="400" y1="100" x2="400" y2="700" stroke="${CYAN}" stroke-width="0.5" opacity="0.4"/>
  <line x1="100" y1="400" x2="700" y2="400" stroke="${CYAN}" stroke-width="0.5" opacity="0.4"/>
  <circle cx="400" cy="400" r="220" stroke="${INK}" stroke-width="1" fill="none"/>
  <circle cx="400" cy="400" r="160" stroke="${INK}" stroke-width="1" fill="none"/>
  <circle cx="400" cy="400" r="100" stroke="${INK}" stroke-width="1" fill="none"/>
  <path d="M400 180 A220 220 0 0 1 590 510" stroke="${ORANGE}" stroke-width="3" fill="none"/>
  <path d="M590 510 A220 220 0 0 1 210 510" stroke="${CYAN}" stroke-width="3" fill="none"/>
  <path d="M210 510 A220 220 0 0 1 400 180" stroke="${INK}" stroke-width="3" fill="none" opacity="0.4"/>
  ${[0, 60, 120, 180, 240, 300].map((deg) => {
    const a = (deg * Math.PI) / 180;
    return `<line x1="400" y1="400" x2="${400 + Math.cos(a) * 220}" y2="${400 + Math.sin(a) * 220}" stroke="${INK}" stroke-width="0.5" opacity="0.25"/>`;
  }).join("\n  ")}
  <circle cx="400" cy="400" r="6" fill="${INK}"/>
</svg>`);

write(path.join(processDir, "tabs-sketch.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <text x="60" y="60" font-family="ui-monospace,monospace" font-size="14" fill="${MUTED}" letter-spacing="3">01 · JOKE CAPTURE</text>
  <text x="120" y="300" font-family="system-ui,sans-serif" font-size="28" fill="${INK}" opacity="0.5">too many tabs open…</text>
  <text x="120" y="360" font-family="system-ui,sans-serif" font-size="28" fill="${INK}" opacity="0.7">all of them important?</text>
  <text x="120" y="420" font-family="ui-monospace,monospace" font-size="16" fill="${CYAN}">will_close_later = true</text>
  <rect x="120" y="480" width="200" height="40" rx="4" stroke="${INK}" stroke-width="1" stroke-dasharray="4 3" fill="none"/>
  <text x="130" y="505" font-family="ui-monospace,monospace" font-size="12" fill="${MUTED}">avoid browser brands</text>
</svg>`);

write(path.join(processDir, "tabs-chrome.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <text x="60" y="60" font-family="ui-monospace,monospace" font-size="14" fill="${MUTED}" letter-spacing="3">02 · GENERIC CHROME</text>
  <rect x="120" y="200" width="560" height="400" rx="8" stroke="${INK}" stroke-width="2"/>
  ${Array.from({ length: 8 }, (_, i) => `<rect x="${150 + i * 64}" y="230" width="56" height="28" rx="3" stroke="${INK}" stroke-width="1" fill="${i === 2 ? CYAN : "none"}" opacity="0.8"/>`).join("\n  ")}
  <text x="400" y="420" text-anchor="middle" font-family="ui-monospace,monospace" font-size="14" fill="${MUTED}">no vendor UI · tab rhythm only</text>
</svg>`);

write(path.join(processDir, "wireframe-blueprint.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
  <rect width="800" height="800" fill="${IVORY}"/>
  <text x="60" y="60" font-family="ui-monospace,monospace" font-size="14" fill="${MUTED}" letter-spacing="3">01 · BLUEPRINT STRUCTURE</text>
  <rect x="250" y="120" width="300" height="520" rx="20" stroke="${CYAN}" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="200" y1="120" x2="200" y2="640" stroke="${CYAN}" stroke-width="1"/>
  <line x1="250" y1="680" x2="550" y2="680" stroke="${CYAN}" stroke-width="1"/>
  <text x="180" y="400" transform="rotate(-90 180 400)" font-family="ui-monospace,monospace" font-size="11" fill="${CYAN}">HEIGHT</text>
  <text x="400" y="710" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="${CYAN}">WIDTH · MODULES</text>
</svg>`);

// ─── OG images (SVG 1200x630) ──────────────────────────────
write(path.join(ogDir, "home.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="${IVORY}"/>
  <rect x="0" y="0" width="12" height="630" fill="${INK}"/>
  <text x="80" y="160" font-family="system-ui,sans-serif" font-size="72" font-weight="500" fill="${INK}" letter-spacing="-2">BramLabs</text>
  <text x="80" y="240" font-family="system-ui,sans-serif" font-size="36" fill="${MUTED}">Original apparel graphics</text>
  <text x="80" y="300" font-family="ui-monospace,monospace" font-size="18" fill="${MUTED}" letter-spacing="3">TECHNICAL ILLUSTRATION · SHIFT WORK · FOCUS</text>
  <circle cx="920" cy="320" r="160" stroke="${INK}" stroke-width="2" fill="none"/>
  <path d="M920 200 A120 120 0 0 1 1024 380" stroke="${ORANGE}" stroke-width="16" stroke-linecap="round" fill="none"/>
  <path d="M1024 380 A120 120 0 0 1 816 380" stroke="${CYAN}" stroke-width="16" stroke-linecap="round" fill="none"/>
  <path d="M816 380 A120 120 0 0 1 920 200" stroke="${INK}" stroke-width="16" stroke-linecap="round" fill="none" opacity="0.35"/>
  <circle cx="920" cy="320" r="10" fill="${INK}"/>
  <text x="80" y="560" font-family="ui-monospace,monospace" font-size="16" fill="${MUTED}" letter-spacing="2">bramlabs.co</text>
</svg>`);

write(path.join(ogDir, "collection.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="${IVORY}"/>
  <text x="80" y="200" font-family="system-ui,sans-serif" font-size="64" font-weight="500" fill="${INK}">The Collection</text>
  <text x="80" y="280" font-family="system-ui,sans-serif" font-size="28" fill="${MUTED}">Twelve original apparel graphics by Bram</text>
  ${Array.from({ length: 6 }, (_, i) => `<rect x="${80 + i * 180}" y="360" width="150" height="150" stroke="${INK}" stroke-width="1.5" fill="${i % 2 ? CYAN : ORANGE}" opacity="${0.15 + i * 0.05}"/>`).join("\n  ")}
</svg>`);

// Studio sonicshield icon
write(path.join(studioDir, "sonicshield-mark.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" fill="none">
  <rect width="160" height="160" rx="32" fill="${INK}"/>
  <circle cx="80" cy="80" r="48" stroke="${CYAN}" stroke-width="4"/>
  <circle cx="80" cy="80" r="30" stroke="${ORANGE}" stroke-width="3"/>
  <path d="M80 40 A40 40 0 0 1 120 80" stroke="${IVORY}" stroke-width="5" stroke-linecap="round"/>
  <circle cx="80" cy="80" r="8" fill="${IVORY}"/>
</svg>`);

// Workspace placeholder (honest desk still life, not a fake person)
write(path.join(studioDir, "workspace.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" fill="none">
  <rect width="800" height="1000" fill="#D9D4C8"/>
  <!-- desk surface -->
  <rect x="0" y="620" width="800" height="380" fill="#C4BDB0"/>
  <rect x="0" y="620" width="800" height="8" fill="${INK}" opacity="0.08"/>
  <!-- monitor -->
  <rect x="160" y="180" width="480" height="320" rx="8" fill="${INK}"/>
  <rect x="180" y="200" width="440" height="260" fill="#1a2228"/>
  <!-- art on screen -->
  <circle cx="400" cy="330" r="70" stroke="${CYAN}" stroke-width="3" fill="none"/>
  <path d="M400 280 A50 50 0 0 1 450 360" stroke="${ORANGE}" stroke-width="6" stroke-linecap="round" fill="none"/>
  <rect x="340" y="500" width="120" height="16" rx="2" fill="${INK}"/>
  <rect x="370" y="516" width="60" height="40" fill="#B0A89A"/>
  <!-- notebook -->
  <rect x="80" y="680" width="200" height="140" rx="4" fill="${IVORY}" transform="rotate(-6 180 750)"/>
  <line x1="100" y1="720" x2="240" y2="705" stroke="${INK}" stroke-width="1" opacity="0.2"/>
  <line x1="105" y1="740" x2="235" y2="725" stroke="${INK}" stroke-width="1" opacity="0.15"/>
  <line x1="110" y1="760" x2="230" y2="745" stroke="${INK}" stroke-width="1" opacity="0.15"/>
  <!-- pen -->
  <rect x="300" y="750" width="120" height="8" rx="2" fill="${INK}" opacity="0.5" transform="rotate(12 360 754)"/>
  <!-- coffee -->
  <ellipse cx="620" cy="760" rx="40" ry="12" fill="${INK}" opacity="0.15"/>
  <rect x="590" y="700" width="60" height="60" rx="4" fill="${IVORY}"/>
  <ellipse cx="620" cy="700" rx="30" ry="8" fill="#8B6914" opacity="0.6"/>
  <text x="60" y="960" font-family="ui-monospace,monospace" font-size="13" fill="${MUTED}" letter-spacing="2">STUDIO DESK · ART DIRECTION</text>
</svg>`);

console.log("Asset upgrade complete.");
