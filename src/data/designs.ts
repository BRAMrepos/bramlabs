export type Design = {
  slug: string;
  order: number;
  featured: boolean;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  conceptExtra?: string[];
  printNotes?: string;
  rejectedNote?: string;
  audience: string[];
  visualLanguage: string[];
  primaryForms: string[];
  palette: { name: string; hex: string }[];
  application: string;
  /** Base shirt colour used in the mockup photograph */
  shirtColor: "black" | "navy" | "heather";
  images: {
    primaryMockup: string;
    rawArtwork: string;
    detail: string;
    alternate?: string;
  };
  relatedDesigns: string[];
  processStages?: { label: string; body: string; image?: string }[];
  seo: { title: string; description: string };
};

export const designs: Design[] = [
  {
    slug: "rotation-dial",
    order: 1,
    featured: true,
    title: "Rotation Dial",
    category: "SHIFT WORK",
    shortDescription:
      "A continuous 24-hour shift system for crews that keep operations moving.",
    fullDescription:
      "Rotation Dial is a technical 24-hour composition for people who work in rotations — nurses, EMS, plant operators, security. Three arcs represent day, swing and night handoffs around a shared center. Labels stay sparse so the geometry carries the idea at garment distance. It reads as a system diagram first and a product monogram never.",
    conceptExtra: [
      "The starting problem was simple: how do you show continuous coverage without drawing a clock face or a corporate logo? Early sketches stacked three horizontal bars. They felt like a status widget, not a garment graphic.",
      "Equal arcs solved hierarchy. Day, swing and night share one center so no period 'wins'. Cyan and orange carry handoff energy; ink holds the night band quieter so the piece still works on black fabric.",
      "Tick marks and sparse time labels exist for people who already know the rhythm. Everyone else should still read continuity, direction and craft.",
    ],
    printNotes:
      "Designed for a large centered front print on heavyweight black cotton. Ivory, cyan and orange need solid opacity; line weights are tuned for chest-scale readability, not phone-icon detail.",
    rejectedNote:
      "Rejected versions included an app-icon container, a hospital cross motif, and a literal analog clock — all of which pulled the piece toward branding or illustration cliché.",
    audience: ["Shift workers", "EMS", "Nurses", "Plant operations"],
    visualLanguage: ["Swiss technical diagrams", "Industrial control systems"],
    primaryForms: ["Circular schedule", "Shift arcs", "Directional markers"],
    palette: [
      { name: "Warm ivory", hex: "#F4F1E9" },
      { name: "Electric cyan", hex: "#23C5EF" },
      { name: "Signal orange", hex: "#FF862E" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/designs/design-01.png",
      rawArtwork: "/designs/design-01.png",
      detail: "/designs/design-01.png",
    },
    relatedDesigns: ["37-tabs-open", "build-47", "maintenance-window"],
    processStages: [
      {
        label: "Rough concept",
        body: "Early sketches explored how three working periods could form one uninterrupted loop.",
        image: "/process/rotation-sketch.svg",
      },
      {
        label: "Shift research",
        body: "Mapped 07:00 / 15:00 / 23:00 handoffs into equal arcs with readable hierarchy.",
        image: "/process/rotation-research.svg",
      },
      {
        label: "Geometric construction",
        body: "Centered dial, concentric tracks and directional pointer aligned on a strict grid.",
        image: "/process/rotation-geometry.svg",
      },
      {
        label: "Vector refinement",
        body: "Line weights, arc terminals and label spacing tightened for print at chest scale.",
        image: "/designs/rotation-dial-art.svg",
      },
      {
        label: "Garment application",
        body: "Final composition tested on dark heavyweight fabric for contrast and fold behavior.",
        image: "/mockups/rotation-dial-tee.jpg",
      },
    ],
    seo: {
      title: "Rotation Dial Apparel Graphic — BramLabs",
      description:
        "Original 24-hour shift rotation dial graphic by BramLabs — technical illustration for continuous crew handoffs.",
    },
  },
  {
    slug: "circadian-corrupted",
    order: 2,
    featured: true,
    title: "Circadian Rhythm: Corrupted",
    category: "SHIFT WORK",
    shortDescription:
      "A disrupted sleep cycle rendered as controlled line interference.",
    fullDescription:
      "Night shifts break natural cycles. This piece keeps the language of scientific charts while introducing deliberate disruption — bent parallels, a dashed orbit and a status label. It is about living with irregular rest, not decorating a sleep app.",
    conceptExtra: [
      "The corruption is intentional and restrained. Curves bend only after a clear baseline is established, so the disruption reads as condition, not decoration.",
      "Violet carries the corrupted status; cyan holds the orbit. Together they avoid the cliché of pure neon glitch aesthetics.",
    ],
    printNotes:
      "Works centered on navy garments. Status type should remain legible when print size is reduced for smaller sizes.",
    rejectedNote:
      "Rejected full RGB glitch stacks and sleep-app moon icons.",
    audience: ["Night shift", "On-call workers"],
    visualLanguage: ["Data lines", "Controlled glitch"],
    primaryForms: ["Parallel tracks", "Orbit ring", "Status type"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Violet", hex: "#7976E8" },
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Navy",
    shirtColor: "navy",
    images: {
      primaryMockup: "/designs/design-02.png",
      rawArtwork: "/designs/design-02.png",
      detail: "/designs/design-02.png",
    },
    relatedDesigns: ["rotation-dial", "24h-hand-off", "focus-waveform"],
    seo: {
      title: "Circadian Rhythm: Corrupted — BramLabs",
      description:
        "Original apparel graphic exploring disrupted circadian cycles through technical line systems.",
    },
  },
  {
    slug: "24h-hand-off",
    order: 3,
    featured: true,
    title: "24H Hand-Off",
    category: "SHIFT WORK",
    shortDescription:
      "Day, swing and night periods interlocking as stacked coverage bands.",
    fullDescription:
      "Unlike a dial, 24H Hand-Off uses three interlocking coverage bands — day, swing, night — with transfer nodes at the edges. The composition is about continuity between crews rather than time of day. Hierarchy comes from arc weight, color coding and sparse labels.",
    conceptExtra: [
      "This piece exists to differentiate from Rotation Dial. Same world, different geometry: stacked transfer arcs instead of a single circular schedule.",
      "IN/OUT markers make the handoff literal without turning the shirt into a flowchart poster.",
    ],
    printNotes: "Wide chest print on navy; keep band stroke weight bold enough for fabric.",
    audience: ["Rotation crews", "Operations"],
    visualLanguage: ["Circular systems", "Industrial color coding"],
    primaryForms: ["Interlocking bands", "Transfer nodes", "Center mark"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Green", hex: "#42C991" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Navy",
    shirtColor: "navy",
    images: {
      primaryMockup: "/designs/design-03.png",
      rawArtwork: "/designs/design-03.png",
      detail: "/designs/design-03.png",
    },
    relatedDesigns: ["rotation-dial", "circadian-corrupted", "maintenance-window"],
    seo: {
      title: "24H Hand-Off Apparel Graphic — BramLabs",
      description:
        "Original stacked hand-off graphic representing continuous shift coverage.",
    },
  },
  {
    slug: "37-tabs-open",
    order: 4,
    featured: true,
    title: "37 Tabs Open, All Important",
    category: "DEVELOPER CULTURE",
    shortDescription:
      "Browser-tab humor with clean hierarchy — readable from across the room.",
    fullDescription:
      "A joke every knowledge worker already knows, set in a generic interface language that avoids browser branding. Tabs stack, one is active, the status bar tells the truth: will_close_later.",
    conceptExtra: [
      "The hard rule was no vendor chrome — no chrome-like blues, no foxes, no fruit logos. Generic window controls and tab rhythm carry the joke.",
      "Stacked ghost panels behind the main window imply depth without needing thirty-seven literal tabs.",
    ],
    printNotes: "Wide centered print on black; type must stay bold at reduced sizes.",
    rejectedNote: "Rejected any layout that resembled a specific browser UI kit.",
    audience: ["Developers", "Researchers", "Designers"],
    visualLanguage: ["Interface chrome", "Typographic humor"],
    primaryForms: ["Tab grid", "Status panel", "Window frame"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/designs/design-04.png",
      rawArtwork: "/designs/design-04.png",
      detail: "/designs/design-04.png",
    },
    relatedDesigns: ["build-47", "wireframe-anatomy", "maintenance-window"],
    processStages: [
      {
        label: "Joke capture",
        body: "Wrote the line first. The graphic only exists to make 'all important' feel true.",
        image: "/process/tabs-sketch.svg",
      },
      {
        label: "Generic chrome",
        body: "Built a vendor-neutral window so the humor is cultural, not brand parody.",
        image: "/process/tabs-chrome.svg",
      },
      {
        label: "Hierarchy pass",
        body: "One active tab, stacked depth, status truth. Everything else quiet.",
        image: "/designs/37-tabs-open-art.svg",
      },
      {
        label: "Garment application",
        body: "Scaled type for chest distance; verified the joke still reads at arm's length.",
        image: "/mockups/37-tabs-open-tee.jpg",
      },
    ],
    seo: {
      title: "37 Tabs Open, All Important — BramLabs",
      description:
        "Original developer-culture apparel graphic about too many open tabs.",
    },
  },
  {
    slug: "build-47",
    order: 5,
    featured: true,
    title: "Build 47",
    category: "DEVELOPER CULTURE",
    shortDescription: "Negative-space typography about iteration, not perfection.",
    fullDescription:
      "Bold type, one number, one line. Build 47 is about shipping through iterations. The outlined numeral keeps weight without filling the entire chest. Construction marks and an iteration log frame turn a simple statement into a finished poster system.",
    conceptExtra: [
      "The number is the story. Forty-seven is late enough to feel real and early enough to feel ongoing.",
      "Corner registration marks and a quiet grid make the piece feel engineered, not like a slogan generator.",
    ],
    printNotes:
      "Large type print on black. Outline stroke on '47' must remain open on fabric — test underbase on dark garments.",
    rejectedNote: "Rejected soft script fonts and startup-style gradient fills.",
    audience: ["Engineers", "Makers"],
    visualLanguage: ["Typographic poster", "Construction marks"],
    primaryForms: ["Wordmark", "Outlined number", "Registration corners"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Ink", hex: "#111315" },
      { name: "Orange", hex: "#FF862E" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/designs/design-05.png",
      rawArtwork: "/designs/design-05.png",
      detail: "/designs/design-05.png",
    },
    relatedDesigns: ["37-tabs-open", "wireframe-anatomy", "maintenance-window"],
    seo: {
      title: "Build 47 Apparel Graphic — BramLabs",
      description: "Original typographic apparel graphic about iteration and shipping.",
    },
  },
  {
    slug: "wireframe-anatomy",
    order: 6,
    featured: true,
    title: "Wireframe Anatomy",
    category: "DEVELOPER CULTURE",
    shortDescription:
      "Product-design language as a full composition, not a phone icon.",
    fullDescription:
      "A complete wireframe environment: chrome, columns, modules and dimension callouts. It celebrates structure over polish — the language of product design before pixels get filled.",
    conceptExtra: [
      "Dimension lines are part of the composition, not afterthoughts. They teach the eye that this is structure, not a screenshot.",
      "Cyan callouts stay sparse so the piece does not become a UI kit sticker sheet.",
    ],
    printNotes: "Centered print on navy; keep dashed hero module visible at reduced scale.",
    audience: ["Product designers", "Developers"],
    visualLanguage: ["Blueprint", "UI structure"],
    primaryForms: ["Layout grid", "Module frames", "Callouts"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Ink", hex: "#111315" },
      { name: "Cyan", hex: "#23C5EF" },
    ],
    application: "Heavyweight unisex tee — Navy",
    shirtColor: "navy",
    images: {
      primaryMockup: "/designs/design-06.png",
      rawArtwork: "/designs/design-06.png",
      detail: "/designs/design-06.png",
    },
    relatedDesigns: ["37-tabs-open", "build-47", "bramlabs-modular-grid"],
    processStages: [
      {
        label: "Blueprint structure",
        body: "Blocked the device and dimension system before any module detail.",
        image: "/process/wireframe-blueprint.svg",
      },
      {
        label: "Module anatomy",
        body: "Hero, cards, list rows and primary action — generic product language only.",
        image: "/designs/wireframe-anatomy-art.svg",
      },
      {
        label: "Garment application",
        body: "Ensured callouts remain secondary to the phone structure at chest scale.",
        image: "/mockups/wireframe-anatomy-tee.jpg",
      },
    ],
    seo: {
      title: "Wireframe Anatomy Apparel Graphic — BramLabs",
      description:
        "Original blueprint-style apparel graphic of product design structure.",
    },
  },
  {
    slug: "focus-waveform",
    order: 7,
    featured: false,
    title: "Focus Is a Waveform",
    category: "FOCUS",
    shortDescription:
      "Attention as a single dominant wave with restrained annotation.",
    fullDescription:
      "Focus rises, peaks and decays. One waveform carries the idea with a secondary echo and sparse type. Built for people who treat deep work as a rhythm, not a streak counter.",
    conceptExtra: [
      "Peak focus is marked once. Everything else is quiet so the metaphor does not become a dashboard.",
    ],
    printNotes: "Wide front print on black; violet must hold against dark fabric.",
    audience: ["Knowledge workers", "Students"],
    visualLanguage: ["Data visualization", "Minimal type"],
    primaryForms: ["Wave path", "Baseline", "Peak marker"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Violet", hex: "#7976E8" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/designs/design-07.png",
      rawArtwork: "/designs/design-07.png",
      detail: "/designs/design-07.png",
    },
    relatedDesigns: ["streak-grid-365", "signal-noise", "protect-your-ears"],
    seo: {
      title: "Focus Is a Waveform — BramLabs",
      description: "Original focus-themed waveform apparel graphic by BramLabs.",
    },
  },
  {
    slug: "signal-noise",
    order: 8,
    featured: false,
    title: "Signal / Noise",
    category: "AUDIO",
    shortDescription: "Clean data against controlled visual interference.",
    fullDescription:
      "Half the field is particulate noise; the other half is a clean panel with a single readable wave. A vertical split makes the metaphor immediate without explaining it.",
    conceptExtra: [
      "Noise is generative but controlled — density without chaos. The orange gutter is the only hard separator.",
    ],
    printNotes: "High-detail noise side benefits from quality screen or DTG on black.",
    audience: ["Engineers", "Audio enthusiasts"],
    visualLanguage: ["Frequency plots", "Asymmetry"],
    primaryForms: ["Noise field", "Signal panel", "Split gutter"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/designs/design-08.png",
      rawArtwork: "/designs/design-08.png",
      detail: "/designs/design-08.png",
    },
    relatedDesigns: ["protect-your-ears", "focus-waveform", "37-tabs-open"],
    seo: {
      title: "Signal / Noise Apparel Graphic — BramLabs",
      description:
        "Original apparel graphic contrasting clean signal against visual noise.",
    },
  },
  {
    slug: "streak-grid-365",
    order: 9,
    featured: false,
    title: "Streak Grid: Day 365",
    category: "FOCUS",
    shortDescription:
      "A year of consistency expressed as modular units and one deliberate exception.",
    fullDescription:
      "Three hundred sixty-five cells form a year. Most are quiet; day 365 is the accent. The piece is about sustained work without gamified noise.",
    conceptExtra: [
      "Legend matters. Without it, the orange cell is decoration. With it, the year becomes a story.",
    ],
    printNotes: "Large print recommended on navy so cell matrix remains readable.",
    audience: ["Builders", "Habit trackers"],
    visualLanguage: ["Calendar systems", "Modular grids"],
    primaryForms: ["Cell matrix", "Legend", "Day 365 accent"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Navy",
    shirtColor: "navy",
    images: {
      primaryMockup: "/designs/design-09.png",
      rawArtwork: "/designs/design-09.png",
      detail: "/designs/design-09.png",
    },
    relatedDesigns: ["focus-waveform", "build-47", "bramlabs-modular-grid"],
    seo: {
      title: "Streak Grid: Day 365 — BramLabs",
      description:
        "Original apparel graphic representing a year of consistent work.",
    },
  },
  {
    slug: "protect-your-ears",
    order: 10,
    featured: false,
    title: "Protect Your Ears",
    category: "AUDIO",
    shortDescription:
      "Circular frequency notation for volume awareness and hearing safety.",
    fullDescription:
      "Concentric rings, threshold arc and a limiter center form a hearing-safety metaphor. Connected to the studio's interest in audio tools — without becoming an app icon on fabric.",
    conceptExtra: [
      "The threshold arc is the thesis. Rings alone were too decorative; the cyan threshold makes protection active.",
    ],
    printNotes: "Circular composition on black; keep threshold stroke bold on dark fabric.",
    rejectedNote: "Rejected headphone silhouettes and waveform clip-art.",
    audience: ["Music listeners", "Audio workers"],
    visualLanguage: ["Frequency rings", "Scientific labeling"],
    primaryForms: ["Concentric circles", "Threshold arc", "Center limiter"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Ink", hex: "#111315" },
      { name: "Cyan", hex: "#23C5EF" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/designs/design-10.png",
      rawArtwork: "/designs/design-10.png",
      detail: "/designs/design-10.png",
    },
    relatedDesigns: ["signal-noise", "focus-waveform", "rotation-dial"],
    seo: {
      title: "Protect Your Ears Apparel Graphic — BramLabs",
      description:
        "Original audio-safety inspired apparel graphic with circular frequency forms.",
    },
  },
  {
    slug: "maintenance-window",
    order: 11,
    featured: false,
    title: "Maintenance Window",
    category: "DEVELOPER CULTURE",
    shortDescription:
      "System-status panels as typographic utility, not OS cosplay.",
    fullDescription:
      "A generic operations panel: scheduled window, impact line, scope, owner, acknowledge and snooze. No vendor chrome — just the ritual language of people who keep systems alive at odd hours.",
    conceptExtra: [
      "Every row is a real on-call ritual. The joke is recognition, not parody of a specific monitoring product.",
    ],
    printNotes: "Panel must stay large enough for row labels to read on black.",
    rejectedNote: "Rejected OS window chrome and brand-colored status pills.",
    audience: ["SRE", "On-call engineers"],
    visualLanguage: ["Utility UI", "Status rows"],
    primaryForms: ["Window chrome", "Status list", "Action buttons"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Ink", hex: "#111315" },
      { name: "Green", hex: "#42C991" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/designs/design-11.png",
      rawArtwork: "/designs/design-11.png",
      detail: "/designs/design-11.png",
    },
    relatedDesigns: ["rotation-dial", "37-tabs-open", "24h-hand-off"],
    seo: {
      title: "Maintenance Window Apparel Graphic — BramLabs",
      description:
        "Original developer-culture graphic about scheduled system maintenance.",
    },
  },
  {
    slug: "bramlabs-modular-grid",
    order: 12,
    featured: false,
    title: "BramLabs Modular Grid",
    category: "STUDIO",
    shortDescription: "Studio identity as a modular coordinate system.",
    fullDescription:
      "A six-by-six coordinate field with selective accent fills. It is the studio's modular mark — construction lines, indices and quiet color — ready for front prints and future back placements.",
    conceptExtra: [
      "Coordinates are part of the identity. The grid is a system you can extend, not a one-off logo lockup.",
    ],
    printNotes: "Centered front on navy; optional back placement of full grid.",
    audience: ["Studio", "Design community"],
    visualLanguage: ["Modular identity", "Coordinates"],
    primaryForms: ["Grid cells", "Axis labels", "Accent modules"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Navy",
    shirtColor: "navy",
    images: {
      primaryMockup: "/designs/design-12.png",
      rawArtwork: "/designs/design-12.png",
      detail: "/designs/design-12.png",
    },
    relatedDesigns: ["wireframe-anatomy", "build-47", "streak-grid-365"],
    seo: {
      title: "BramLabs Modular Grid — BramLabs",
      description:
        "Original modular identity grid apparel graphic from the BramLabs studio.",
    },
  },
];

export function getDesign(slug: string): Design | undefined {
  return designs.find((d) => d.slug === slug);
}

export function getAllDesigns(): Design[] {
  return [...designs].sort((a, b) => a.order - b.order);
}

/** Homepage / highlight set — only explicitly featured designs */
export function getFeaturedDesigns(): Design[] {
  return getAllDesigns().filter((d) => d.featured);
}

export function getDesignsByCategory(category: string): Design[] {
  return getAllDesigns().filter((d) => d.category === category);
}

export function getCategories(): string[] {
  return [...new Set(designs.map((d) => d.category))];
}

export function getRelated(design: Design): Design[] {
  return design.relatedDesigns
    .map((s) => getDesign(s))
    .filter((d): d is Design => Boolean(d));
}
