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
      primaryMockup: "/mockups/rotation-dial-tee.jpg",
      rawArtwork: "/designs/rotation-dial-art.svg",
      detail: "/designs/rotation-dial-detail.svg",
    },
    relatedDesigns: ["37-tabs-open", "build-47", "maintenance-window"],
    processStages: [
      {
            "label": "Rough concept",
            "body": "Early sketches explored how three working periods could form one uninterrupted loop.",
            "image": "/process/rotation-sketch.svg"
      },
      {
            "label": "Shift research",
            "body": "Mapped 07:00 / 15:00 / 23:00 handoffs into equal arcs with readable hierarchy.",
            "image": "/process/rotation-research.svg"
      },
      {
            "label": "Geometric construction",
            "body": "Centered dial, concentric tracks and directional pointer aligned on a strict grid.",
            "image": "/process/rotation-geometry.svg"
      },
      {
            "label": "Vector refinement",
            "body": "Line weights, arc terminals and label spacing tightened for print at chest scale.",
            "image": "/designs/rotation-dial-art.svg"
      },
      {
            "label": "Garment application",
            "body": "Final composition tested on dark heavyweight fabric for contrast and fold behavior.",
            "image": "/mockups/rotation-dial-tee.jpg"
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
    application: "Heavyweight unisex tee — White",
    shirtColor: "white",
    images: {
      primaryMockup: "/mockups/circadian-corrupted-tee.jpg",
      rawArtwork: "/designs/circadian-corrupted-art.svg",
      detail: "/designs/circadian-corrupted-detail.svg",
    },
    relatedDesigns: ["rotation-dial", "24h-hand-off", "focus-waveform"],
    processStages: [
      {
            "label": "Disruption concept",
            "body": "Explored how night shift rest cycles can be rendered as controlled line interference.",
            "image": "/process/circadian-sketch.svg"
      },
      {
            "label": "Parallel grid geometry",
            "body": "Constructed baseline scientific chart lines before introducing deliberate wave bends.",
            "image": "/process/circadian-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Final vector composition with violet and cyan status accents ready for screen master.",
            "image": "/designs/circadian-corrupted-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Tuned line weights and dashed orbit spacing to maintain crispness at chest distance.",
            "image": "/designs/circadian-corrupted-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Tested composition on white heavyweight cotton for crisp contrast and fabric drape.",
            "image": "/mockups/circadian-corrupted-tee.jpg"
      }
],
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
    application: "Heavyweight unisex tee — White",
    shirtColor: "white",
    images: {
      primaryMockup: "/mockups/24h-hand-off-tee.jpg",
      rawArtwork: "/designs/24h-hand-off-art.svg",
      detail: "/designs/24h-hand-off-detail.svg",
    },
    relatedDesigns: ["rotation-dial", "circadian-corrupted", "maintenance-window"],
    processStages: [
      {
            "label": "Handoff arcs concept",
            "body": "Mapped 24-hour crew handoff points into interlocking coverage arcs.",
            "image": "/process/24h-sketch.svg"
      },
      {
            "label": "Coverage band geometry",
            "body": "Balanced day, swing, and night band stroke weights around transfer nodes.",
            "image": "/process/24h-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Constructed clean vector master with orange, green, and ivory color bands.",
            "image": "/designs/24h-hand-off-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Tightened IN/OUT transfer labels for maximum chest-scale readability.",
            "image": "/designs/24h-hand-off-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Applied vector composition to heavyweight white cotton for honest fabric contrast.",
            "image": "/mockups/24h-hand-off-tee.jpg"
      }
],
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
      primaryMockup: "/mockups/37-tabs-open-tee.jpg",
      rawArtwork: "/designs/37-tabs-open-art.svg",
      detail: "/designs/37-tabs-open-detail.svg",
    },
    relatedDesigns: ["build-47", "wireframe-anatomy", "maintenance-window"],
    processStages: [
      {
            "label": "Joke capture",
            "body": "Wrote the line first: '37 tabs open, all important'. The graphic makes it true.",
            "image": "/process/37-sketch.svg"
      },
      {
            "label": "Generic chrome",
            "body": "Built a vendor-neutral window frame to avoid brand parody UI kits.",
            "image": "/process/37-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Final composition featuring active cyan tab, stacked depth, and status log.",
            "image": "/designs/37-tabs-open-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Refined status type 'will_close_later' for sharp screen-print clarity.",
            "image": "/designs/37-tabs-open-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Verified centered front print scale on heavyweight black cotton.",
            "image": "/mockups/37-tabs-open-tee.jpg"
      }
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
      primaryMockup: "/mockups/build-47-tee.jpg",
      rawArtwork: "/designs/build-47-art.svg",
      detail: "/designs/build-47-detail.svg",
    },
    relatedDesigns: ["37-tabs-open", "wireframe-anatomy", "maintenance-window"],
    processStages: [
      {
            "label": "Iteration numeral concept",
            "body": "Selected '47' as the ideal number — ongoing iteration, not initial draft.",
            "image": "/process/build-sketch.svg"
      },
      {
            "label": "Grid & corner geometry",
            "body": "Framed large outlined typography with technical registration marks.",
            "image": "/process/build-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "High-contrast vector composition tuned for large chest-scale printing.",
            "image": "/designs/build-47-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Ensured outlined numeral strokes remain open and sharp on heavy cotton.",
            "image": "/designs/build-47-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Tested print opacity and registration on heavyweight black fabric.",
            "image": "/mockups/build-47-tee.jpg"
      }
],
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
    application: "Heavyweight unisex tee — White",
    shirtColor: "white",
    images: {
      primaryMockup: "/mockups/wireframe-anatomy-tee.jpg",
      rawArtwork: "/designs/wireframe-anatomy-art.svg",
      detail: "/designs/wireframe-anatomy-detail.svg",
    },
    relatedDesigns: ["37-tabs-open", "build-47", "bramlabs-modular-grid"],
    processStages: [
      {
            "label": "Layout module sketch",
            "body": "Drafted a complete product wireframe environment — modules, chrome, and dimensions.",
            "image": "/process/wireframe-sketch.svg"
      },
      {
            "label": "Blueprint dimension geometry",
            "body": "Calculated exact callout lines and bounding marks to emphasize structural design.",
            "image": "/process/wireframe-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Final vector blueprint artwork rendered in technical cyan and crisp white lines.",
            "image": "/designs/wireframe-anatomy-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Tightened dimension callouts so numbers remain legible at chest scale.",
            "image": "/designs/wireframe-anatomy-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Applied full composition to white heavyweight tee for clean architectural feel.",
            "image": "/mockups/wireframe-anatomy-tee.jpg"
      }
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
      primaryMockup: "/mockups/focus-waveform-tee.jpg",
      rawArtwork: "/designs/focus-waveform-art.svg",
      detail: "/designs/focus-waveform-detail.svg",
    },
    relatedDesigns: ["streak-grid-365", "signal-noise", "protect-your-ears"],
    processStages: [
      {
            "label": "Signal frequency sketch",
            "body": "Explored audio frequency waves representing deep focus and ambient noise isolation.",
            "image": "/process/focus-sketch.svg"
      },
      {
            "label": "Harmonic wave geometry",
            "body": "Calculated sine wave curves and amplitude envelope boundaries on a strict grid.",
            "image": "/process/focus-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Final vector composition with electric cyan waveform and amplitude markers.",
            "image": "/designs/focus-waveform-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Fine-tuned wave stroke thickness to ensure continuous vector lines on fabric.",
            "image": "/designs/focus-waveform-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Tested waveform composition on heavyweight black cotton shirt.",
            "image": "/mockups/focus-waveform-tee.jpg"
      }
],
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
      primaryMockup: "/mockups/signal-noise-tee.jpg",
      rawArtwork: "/designs/signal-noise-art.svg",
      detail: "/designs/signal-noise-detail.svg",
    },
    relatedDesigns: ["protect-your-ears", "focus-waveform", "37-tabs-open"],
    processStages: [
      {
            "label": "Pipeline routing sketch",
            "body": "Sketched audio & data pipeline routing through signal processing nodes.",
            "image": "/process/signal-sketch.svg"
      },
      {
            "label": "Bus architecture geometry",
            "body": "Constructed signal path buses, input taps, and output routing nodes.",
            "image": "/process/signal-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Final vector diagram with cyan signal flow paths and gain stage markers.",
            "image": "/designs/signal-noise-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Tuned signal arrow terminals and node labels for clean print reproduction.",
            "image": "/designs/signal-noise-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Tested composition on heavyweight black cotton tee for maximum visual impact.",
            "image": "/mockups/signal-noise-tee.jpg"
      }
],
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
      primaryMockup: "/mockups/streak-grid-365-tee.jpg",
      rawArtwork: "/designs/streak-grid-365-art.svg",
      detail: "/designs/streak-grid-365-detail.svg",
    },
    relatedDesigns: ["focus-waveform", "build-47", "bramlabs-modular-grid"],
    processStages: [
      {
            "label": "Consecutive log sketch",
            "body": "Sketched consecutive activity streak nodes and defensive perimeter boundaries.",
            "image": "/process/streak-sketch.svg"
      },
      {
            "label": "Shield node geometry",
            "body": "Constructed interlocking streak counter nodes and shield geometry.",
            "image": "/process/streak-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Final vector master with signal orange streak badge and shield lines.",
            "image": "/designs/streak-grid-365-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Refined node connection lines for crisp chest-scale screen printing.",
            "image": "/designs/streak-grid-365-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Applied graphic to heavyweight navy tee for high-contrast presentation.",
            "image": "/mockups/streak-grid-365-tee.jpg"
      }
],
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
      primaryMockup: "/mockups/protect-your-ears-tee.jpg",
      rawArtwork: "/designs/protect-your-ears-art.svg",
      detail: "/designs/protect-your-ears-detail.svg",
    },
    relatedDesigns: ["signal-noise", "focus-waveform", "rotation-dial"],
    processStages: [
      {
            "label": "Recovery boundary sketch",
            "body": "Sketched off-duty recovery boundaries and system shield perimeters.",
            "image": "/process/protect-sketch.svg"
      },
      {
            "label": "Perimeter shield geometry",
            "body": "Constructed shield geometry and status indicator lines around the core.",
            "image": "/process/protect-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Final vector graphic with protective green and cyan accent bands.",
            "image": "/designs/protect-your-ears-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Tightened perimeter line spacing for chest-scale clarity.",
            "image": "/designs/protect-your-ears-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Tested print application on black heavyweight cotton tee.",
            "image": "/mockups/protect-your-ears-tee.jpg"
      }
],
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
      primaryMockup: "/mockups/maintenance-window-tee.jpg",
      rawArtwork: "/designs/maintenance-window-art.svg",
      detail: "/designs/maintenance-window-detail.svg",
    },
    relatedDesigns: ["rotation-dial", "37-tabs-open", "24h-hand-off"],
    processStages: [
      {
            "label": "Downtime window sketch",
            "body": "Sketched scheduled downtime windows: 02:00 - 04:00 system maintenance.",
            "image": "/process/maintenance-sketch.svg"
      },
      {
            "label": "Status bar geometry",
            "body": "Constructed status indicator bar and maintenance window progress track.",
            "image": "/process/maintenance-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Final vector graphic with warning amber accent and technical system type.",
            "image": "/designs/maintenance-window-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Tuned status label typography for sharp chest-scale legibility.",
            "image": "/designs/maintenance-window-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Tested composition contrast on dark black heavyweight cotton.",
            "image": "/mockups/maintenance-window-tee.jpg"
      }
],
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
      primaryMockup: "/mockups/bramlabs-modular-grid-tee.jpg",
      rawArtwork: "/designs/bramlabs-modular-grid-art.svg",
      detail: "/designs/bramlabs-modular-grid-detail.svg",
    },
    relatedDesigns: ["wireframe-anatomy", "build-47", "streak-grid-365"],
    processStages: [
      {
            "label": "Grid matrix sketch",
            "body": "Drafted modular grid structure establishing primary asset container boundaries.",
            "image": "/process/bramlabs-sketch.svg"
      },
      {
            "label": "Modular system geometry",
            "body": "Constructed 4-column module grid with Swiss typographic hierarchy.",
            "image": "/process/bramlabs-geometry.svg"
      },
      {
            "label": "Vector art master",
            "body": "Final brand matrix graphic with cyan accents and technical specifications.",
            "image": "/designs/bramlabs-modular-grid-art.svg"
      },
      {
            "label": "Print detail crop",
            "body": "Verified grid line weight to ensure sharp line separation during printing.",
            "image": "/designs/bramlabs-modular-grid-detail.svg"
      },
      {
            "label": "Garment application",
            "body": "Applied graphic to navy heavyweight tee for clean, structured composition.",
            "image": "/mockups/bramlabs-modular-grid-tee.jpg"
      }
],
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
