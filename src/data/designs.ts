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
  shirtColor: "black" | "navy" | "heather" | "white";
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
      "A continuous 24-hour shift coverage dial for crew rotations.",
    fullDescription:
      "Rotation Dial is a 24-hour coverage mark for people who work rotations. Three equal arcs — day, swing, night — share one center so no period dominates. Sparse ticks and time labels are for people who already know the rhythm; everyone else should still read continuity and craft.",
    rejectedNote:
      "Rejected app-icon frames, hospital crosses, and literal clock faces — they turned it into branding instead of a system.",
    printNotes:
      "Large centered chest print; solid opacity; line weight tuned for fabric distance, not icon scale.",
    audience: ["Shift workers", "Operations", "EMS"],
    visualLanguage: ["Swiss technical diagrams", "Industrial controls"],
    primaryForms: ["Circular schedule", "Shift arcs", "Sparse markers"],
    palette: [
      { name: "Warm ivory", hex: "#F4F1E9" },
      { name: "Electric cyan", hex: "#23C5EF" },
      { name: "Signal orange", hex: "#FF862E" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/mockups/rotation-dial-tee.jpg",
      rawArtwork: "/designs/rotation-dial-art.svg",
      detail: "/designs/rotation-dial-detail.svg",
    },
    relatedDesigns: ["37-tabs-open", "build-47", "maintenance-window"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/rotation-dial-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/rotation-dial-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/rotation-dial-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/rotation-dial-tee.jpg"
      }
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
      "Night shifts break natural cycles. Parallel tracks establish a baseline, then one controlled bend marks the disruption — condition, not decoration. A dashed orbit and short status line keep it in the language of charts, not sleep-app icons.",
    rejectedNote:
      "Rejected full RGB glitch stacks and sleep-app moon icons that felt like app decoration.",
    printNotes:
      "Centered on navy fabric; status type remains sharp and legible at smaller garment sizes.",
    audience: ["Night shift", "On-call crews"],
    visualLanguage: ["Data lines", "Controlled disruption"],
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
      primaryMockup: "/mockups/circadian-corrupted-tee.jpg",
      rawArtwork: "/designs/circadian-corrupted-art.svg",
      detail: "/designs/circadian-corrupted-detail.svg",
    },
    relatedDesigns: ["rotation-dial", "24h-hand-off", "focus-waveform"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/circadian-corrupted-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/circadian-corrupted-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/circadian-corrupted-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/circadian-corrupted-tee.jpg"
      }
    ],
    seo: {
      title: "Circadian Rhythm Corrupted Apparel Graphic — BramLabs",
      description:
        "Disrupted circadian rhythm graphic by BramLabs — technical data plot for night shift workers.",
    },
  },
  {
    slug: "24h-hand-off",
    order: 3,
    featured: false,
    title: "24H Hand-Off",
    category: "SHIFT WORK",
    shortDescription:
      "Interlocking stacked coverage bands marking crew shift handoffs.",
    fullDescription:
      "Three interlocking coverage bands — day, swing, and night — stack with transfer nodes at the boundaries. The wide horizontal weight gives the chest graphic structure while sparse labels keep it technical.",
    rejectedNote:
      "Rejected flowchart boxes and corporate org-chart arrows.",
    printNotes:
      "Wide chest placement; high opacity cyan and orange ink plates on dark cotton.",
    audience: ["Crew leads", "Dispatchers", "Operations"],
    visualLanguage: ["System schematics", "Data transfer"],
    primaryForms: ["Stacked bands", "Transfer nodes", "Coverage arcs"],
    palette: [
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/mockups/24h-hand-off-tee.jpg",
      rawArtwork: "/designs/24h-hand-off-art.svg",
      detail: "/designs/24h-hand-off-detail.svg",
    },
    relatedDesigns: ["rotation-dial", "circadian-corrupted", "build-47"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/24h-hand-off-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/24h-hand-off-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/24h-hand-off-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/24h-hand-off-tee.jpg"
      }
    ],
    seo: {
      title: "24H Hand-Off Apparel Graphic — BramLabs",
      description:
        "24H Hand-Off crew shift graphic by BramLabs — technical diagram of 3-shift coverage.",
    },
  },
  {
    slug: "37-tabs-open",
    order: 4,
    featured: true,
    title: "37 Tabs Open, All Important",
    category: "TECH HUMOR",
    shortDescription:
      "A simplified browser tab row celebrating chaotic multitasking.",
    fullDescription:
      "A simplified browser window frame with a single highlighted active tab. Large geometric typography '37 TABS OPEN' dominates the center, backed by an empty content panel for maximum negative space.",
    rejectedNote:
      "Rejected realistic browser window chrome and trademarked browser logos.",
    printNotes:
      "Heavy central typography; clean hairline border stays open on navy fabric.",
    audience: ["Developers", "Power browsers", "Tech workers"],
    visualLanguage: ["UI wireframes", "Minimalist typography"],
    primaryForms: ["Window frame", "Active tab", "Bold type"],
    palette: [
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Navy",
    shirtColor: "navy",
    images: {
      primaryMockup: "/mockups/37-tabs-open-tee.jpg",
      rawArtwork: "/designs/37-tabs-open-art.svg",
      detail: "/designs/37-tabs-open-detail.svg",
    },
    relatedDesigns: ["build-47", "wireframe-anatomy", "maintenance-window"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/37-tabs-open-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/37-tabs-open-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/37-tabs-open-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/37-tabs-open-tee.jpg"
      }
    ],
    seo: {
      title: "37 Tabs Open Apparel Graphic — BramLabs",
      description:
        "37 Tabs Open graphic tee by BramLabs — tech humor apparel for power browsers.",
    },
  },
  {
    slug: "build-47",
    order: 5,
    featured: false,
    title: "Build 47",
    category: "ENGINEERING",
    shortDescription:
      "A bold iteration mark prioritizing shipping over polish.",
    fullDescription:
      "One number, one idea: iteration over polish. 'BUILD' sits small above a heavy outlined 47 so the numeral carries the chest. Quiet registration marks frame it like a finished blueprint sheet.",
    rejectedNote:
      "Rejected corporate version tags and complex release notes typography.",
    printNotes:
      "Jersey-scale chest print; outlined 47 stroke requires sharp screen tension.",
    audience: ["Engineers", "Makers", "Founders"],
    visualLanguage: ["Typographic mark", "Construction blueprint"],
    primaryForms: ["Wordmark", "Outlined numeral", "Crop marks"],
    palette: [
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/mockups/build-47-tee.jpg",
      rawArtwork: "/designs/build-47-art.svg",
      detail: "/designs/build-47-detail.svg",
    },
    relatedDesigns: ["rotation-dial", "37-tabs-open", "wireframe-anatomy"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/build-47-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/build-47-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/build-47-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/build-47-tee.jpg"
      }
    ],
    seo: {
      title: "Build 47 Apparel Graphic — BramLabs",
      description:
        "Build 47 iteration graphic by BramLabs — engineering apparel for builders.",
    },
  },
  {
    slug: "wireframe-anatomy",
    order: 6,
    featured: false,
    title: "Wireframe Anatomy",
    category: "DESIGN & PRODUCT",
    shortDescription:
      "An architectural wireframe blueprint for digital product makers.",
    fullDescription:
      "A simplified product wireframe rendered as an open outline device frame. Hero and module blocks remain empty negative space, bounded by cyan dimension brackets and CAD callouts.",
    rejectedNote:
      "Rejected filled OS UI components and stock illustration icons.",
    printNotes:
      "Single-pass cyan and white ink print; fine grid lines tuned for zero bleed.",
    audience: ["UX designers", "Product managers", "Frontend engineers"],
    visualLanguage: ["CAD blueprints", "Product wireframes"],
    primaryForms: ["Device frame", "Dimension lines", "Module blocks"],
    palette: [
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Slate", hex: "#64748B" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/mockups/wireframe-anatomy-tee.jpg",
      rawArtwork: "/designs/wireframe-anatomy-art.svg",
      detail: "/designs/wireframe-anatomy-detail.svg",
    },
    relatedDesigns: ["37-tabs-open", "build-47", "bramlabs-modular-grid"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/wireframe-anatomy-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/wireframe-anatomy-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/wireframe-anatomy-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/wireframe-anatomy-tee.jpg"
      }
    ],
    seo: {
      title: "Wireframe Anatomy Apparel Graphic — BramLabs",
      description:
        "Wireframe Anatomy blueprint graphic by BramLabs — UX and product design apparel.",
    },
  },
  {
    slug: "focus-waveform",
    order: 7,
    featured: false,
    title: "Focus Is a Waveform",
    category: "DEEP WORK",
    shortDescription:
      "A single bold frequency wave resolving into a deep focus peak.",
    fullDescription:
      "A single bold waveform spanning the chest. Low noise baseline transitions into one sharp cyan resonance peak — a pure data gesture representing deep concentration.",
    rejectedNote:
      "Rejected multi-channel ECG grids and medical monitor displays.",
    printNotes:
      "Wide horizontal chest wave; single-color cyan highlight on black cotton.",
    audience: ["ADHD focusers", "Meditators", "Deep workers"],
    visualLanguage: ["Data curves", "Acoustic plots"],
    primaryForms: ["Single waveform", "Resonance peak", "Baseline axis"],
    palette: [
      { name: "Electric cyan", hex: "#23C5EF" },
      { name: "Signal orange", hex: "#FF862E" },
      { name: "Warm ivory", hex: "#F4F1E9" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/mockups/focus-waveform-tee.jpg",
      rawArtwork: "/designs/focus-waveform-art.svg",
      detail: "/designs/focus-waveform-detail.svg",
    },
    relatedDesigns: ["circadian-corrupted", "signal-noise", "protect-your-ears"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/focus-waveform-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/focus-waveform-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/focus-waveform-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/focus-waveform-tee.jpg"
      }
    ],
    seo: {
      title: "Focus Is a Waveform Apparel Graphic — BramLabs",
      description:
        "Focus Is a Waveform graphic tee by BramLabs — deep work data curve illustration.",
    },
  },
  {
    slug: "signal-noise",
    order: 8,
    featured: false,
    title: "Signal / Noise",
    category: "PRODUCTIVITY",
    shortDescription:
      "A split composition contrasting pure signal against entropy.",
    fullDescription:
      "A vertical split composition: left side features a clean, solid trajectory curve ('SIGNAL'), right side features a controlled dot field ('NOISE'). Strong contrast for deep work advocates.",
    rejectedNote:
      "Rejected cliché Wi-Fi symbols and radio wave icons.",
    printNotes:
      "High contrast vertical divider; crisp dot matrix reproduction.",
    audience: ["Productivity enthusiasts", "Audio engineers", "Minimalists"],
    visualLanguage: ["Split plots", "Information theory"],
    primaryForms: ["Clean trajectory", "Dot field", "Vertical divider"],
    palette: [
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/mockups/signal-noise-tee.jpg",
      rawArtwork: "/designs/signal-noise-art.svg",
      detail: "/designs/signal-noise-detail.svg",
    },
    relatedDesigns: ["focus-waveform", "protect-your-ears", "37-tabs-open"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/signal-noise-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/signal-noise-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/signal-noise-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/signal-noise-tee.jpg"
      }
    ],
    seo: {
      title: "Signal / Noise Apparel Graphic — BramLabs",
      description:
        "Signal / Noise graphic tee by BramLabs — productivity and information theory apparel.",
    },
  },
  {
    slug: "streak-grid-365",
    order: 9,
    featured: false,
    title: "Streak Grid: Day 365",
    category: "HABIT TRACKING",
    shortDescription:
      "A modular 365-day year matrix with one single active streak cell.",
    fullDescription:
      "An abstract modular matrix of empty grid cells representing a year of discipline. A single cell is highlighted in signal orange alongside a bold '365' numeral.",
    rejectedNote:
      "Rejected literal GitHub contribution heatmaps and calendar grids.",
    printNotes:
      "Clean square cell alignment; high contrast orange focal point.",
    audience: ["Habit trackers", "Runners", "Self-improvement"],
    visualLanguage: ["Modular matrix", "Progress grids"],
    primaryForms: ["Square cells", "Active block", "Bold numeral"],
    palette: [
      { name: "Signal orange", hex: "#FF862E" },
      { name: "Electric cyan", hex: "#23C5EF" },
      { name: "Warm ivory", hex: "#F4F1E9" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/mockups/streak-grid-365-tee.jpg",
      rawArtwork: "/designs/streak-grid-365-art.svg",
      detail: "/designs/streak-grid-365-detail.svg",
    },
    relatedDesigns: ["build-47", "rotation-dial", "bramlabs-modular-grid"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/streak-grid-365-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/streak-grid-365-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/streak-grid-365-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/streak-grid-365-tee.jpg"
      }
    ],
    seo: {
      title: "Streak Grid Day 365 Apparel Graphic — BramLabs",
      description:
        "Streak Grid Day 365 graphic tee by BramLabs — habit tracking and discipline apparel.",
    },
  },
  {
    slug: "protect-your-ears",
    order: 10,
    featured: false,
    title: "Protect Your Ears",
    category: "AUDIO & SOUND",
    shortDescription:
      "Concentric decibel frequency rings marking an acoustic safety ceiling.",
    fullDescription:
      "Concentric frequency rings form a bold circular badge with an orange threshold tick at 85 dB. Designed for live sound techs, musicians, and audio engineers.",
    rejectedNote:
      "Rejected headphone silhouettes and ear plug illustrations.",
    printNotes:
      "Circular chest badge; high-density cyan and orange ink on navy fabric.",
    audience: ["Audio engineers", "Live sound techs", "Musicians"],
    visualLanguage: ["Acoustic plots", "Decibel limiters"],
    primaryForms: ["Concentric rings", "Threshold tick", "dB ceiling"],
    palette: [
      { name: "Electric cyan", hex: "#23C5EF" },
      { name: "Signal orange", hex: "#FF862E" },
      { name: "Warm ivory", hex: "#F4F1E9" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Navy",
    shirtColor: "navy",
    images: {
      primaryMockup: "/mockups/protect-your-ears-tee.jpg",
      rawArtwork: "/designs/protect-your-ears-art.svg",
      detail: "/designs/protect-your-ears-detail.svg",
    },
    relatedDesigns: ["focus-waveform", "signal-noise", "maintenance-window"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/protect-your-ears-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/protect-your-ears-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/protect-your-ears-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/protect-your-ears-tee.jpg"
      }
    ],
    seo: {
      title: "Protect Your Ears Apparel Graphic — BramLabs",
      description:
        "Protect Your Ears decibel graphic tee by BramLabs — audio engineer and live sound apparel.",
    },
  },
  {
    slug: "maintenance-window",
    order: 11,
    featured: false,
    title: "Maintenance Window",
    category: "DEV OPS",
    shortDescription:
      "A scheduled system ops panel dialog for site reliability engineers.",
    fullDescription:
      "A clean status panel frame with bold text 'MAINTENANCE WINDOW' and a highlighted 'SCHEDULED' chip. Celebrates the quiet late-night work of keeping systems online.",
    rejectedNote:
      "Rejected OS dialog boxes and cartoon wrench icons.",
    printNotes:
      "Centered panel layout; crisp status chip line definition on navy cotton.",
    audience: ["DevOps", "Site reliability engineers", "Sysadmins"],
    visualLanguage: ["Ops dashboards", "Status panels"],
    primaryForms: ["Panel frame", "Status chip", "Time range"],
    palette: [
      { name: "Cyan", hex: "#23C5EF" },
      { name: "Orange", hex: "#FF862E" },
      { name: "Ivory", hex: "#F4F1E9" },
      { name: "Slate", hex: "#94A3B8" },
    ],
    application: "Heavyweight unisex tee — Navy",
    shirtColor: "navy",
    images: {
      primaryMockup: "/mockups/maintenance-window-tee.jpg",
      rawArtwork: "/designs/maintenance-window-art.svg",
      detail: "/designs/maintenance-window-detail.svg",
    },
    relatedDesigns: ["build-47", "37-tabs-open", "bramlabs-modular-grid"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/maintenance-window-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/maintenance-window-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/maintenance-window-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/maintenance-window-tee.jpg"
      }
    ],
    seo: {
      title: "Maintenance Window Apparel Graphic — BramLabs",
      description:
        "Maintenance Window ops graphic tee by BramLabs — DevOps and SRE apparel.",
    },
  },
  {
    slug: "bramlabs-modular-grid",
    order: 12,
    featured: false,
    title: "BramLabs Modular Grid",
    category: "STUDIO BRAND",
    shortDescription:
      "The official BramLabs studio coordinate grid and brand mark.",
    fullDescription:
      "A 4-quadrant coordinate grid badge featuring cyan and orange origin cells. The foundational design system mark for BramLabs software IP.",
    rejectedNote:
      "Rejected corporate wallpaper patterns and complex monograms.",
    printNotes:
      "Balanced chest monogram; clean axis line intersection on dark fleece.",
    audience: ["Studio brand supporters", "Software architects"],
    visualLanguage: ["Coordinate grids", "Design token systems"],
    primaryForms: ["4-quadrant grid", "Origin cells", "Studio mark"],
    palette: [
      { name: "Electric cyan", hex: "#23C5EF" },
      { name: "Signal orange", hex: "#FF862E" },
      { name: "Warm ivory", hex: "#F4F1E9" },
      { name: "Ink", hex: "#111315" },
    ],
    application: "Heavyweight unisex tee — Black",
    shirtColor: "black",
    images: {
      primaryMockup: "/mockups/bramlabs-modular-grid-tee.jpg",
      rawArtwork: "/designs/bramlabs-modular-grid-art.svg",
      detail: "/designs/bramlabs-modular-grid-detail.svg",
    },
    relatedDesigns: ["rotation-dial", "wireframe-anatomy", "streak-grid-365"],
    processStages: [
      {
        label: "Concept Structure",
        body: "Initial concept sketch and structural outline.",
        image: "/process/bramlabs-modular-grid-sketch.svg"
      },
      {
        label: "Geometric Construction",
        body: "Blueprint grid, center axis, and stroke guideline alignment.",
        image: "/process/bramlabs-modular-grid-geometry.svg"
      },
      {
        label: "Vector Master Art",
        body: "Clean vector paths tuned for chest-scale print on dark cotton.",
        image: "/designs/bramlabs-modular-grid-art.svg"
      },
      {
        label: "Garment Application",
        body: "Final composition applied on dark heavyweight fabric.",
        image: "/mockups/bramlabs-modular-grid-tee.jpg"
      }
    ],
    seo: {
      title: "BramLabs Modular Grid Apparel Graphic — BramLabs",
      description:
        "BramLabs Modular Grid graphic tee — official studio design token apparel.",
    },
  }
];

export function getAllDesigns(): Design[] {
  return designs.slice().sort((a, b) => a.order - b.order);
}

export function getFeaturedDesigns(): Design[] {
  return designs.filter((d) => d.featured);
}

export function getDesign(slug: string): Design | undefined {
  return designs.find((d) => d.slug === slug);
}

export function getRelated(design: Design, limit = 3): Design[] {
  if (!design.relatedDesigns || design.relatedDesigns.length === 0) {
    return designs.filter((d) => d.slug !== design.slug).slice(0, limit);
  }
  return design.relatedDesigns
    .map((s) => getDesign(s))
    .filter((d): d is Design => d !== undefined)
    .slice(0, limit);
}

export function getCategories(): string[] {
  return Array.from(new Set(designs.map((d) => d.category)));
}
