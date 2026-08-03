export type JournalPost = {
  slug: string;
  title: string;
  category: "Process" | "Studio" | "Apparel" | "Technical" | "Research";
  date: string;
  dateLabel: string;
  readTime: string;
  image: string;
  excerpt: string;
  byline: string;
  body: string[];
  pullQuote?: string;
  insightBox?: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "from-shift-schedule-to-rotation-dial",
    title: "From Shift Schedule to Rotation Dial",
    category: "Process",
    date: "2026-06-12",
    dateLabel: "12 Jun 2026",
    readTime: "4 min read",
    image: "/designs/rotation-dial-art.svg",
    excerpt:
      "How a 24-hour crew handoff became a wearable technical composition — including what got rejected.",
    byline: "Bram",
    pullQuote: "If the geometry needs a paragraph to explain itself, it is not ready for fabric.",
    insightBox: "Iterative Boundary: App-icon frames, hospital crosses, and literal clock faces were rejected because they turned a wearable system into product branding.",
    body: [
      "Rotation Dial started as a notebook sketch about people who never fully leave a roster. Day, swing and night are not three jobs — they are one continuous system. That sentence sat at the top of the page before any circle was drawn.",
      "Early versions looked like app icons: a rounded square, a mini dial, a hospital-cross accent. Those were rejected. A garment graphic has to work without a logo container, at chest scale, under soft fabric folds, and without looking like marketing for a scheduling product.",
      "Research was practical. I mapped common handoff times — 07:00, 15:00, 23:00 — and forced equal arc weight so no shift “owned” the composition. Unequal arcs made the piece feel political. Equal arcs made it feel operational.",
      "Geometry came next: concentric tracks, tick marks every hour, major ticks every three hours, a single directional pointer. Labels stayed sparse. If the geometry needs a paragraph to explain itself, it is not ready for fabric.",
      "Color was last. Ivory carries structure on black garments. Cyan and orange mark motion and handoff. Ink holds the quieter night band. The final dial keeps three arcs, sparse labels and one directional marker — a piece shift workers recognize immediately, and that still reads as independent illustration to everyone else.",
      "What I would still improve with physical samples: print opacity of the cyan arc on heavyweight cotton, and how the pointer reads when the shirt folds at the sternum. Digital mockups lie; fabric does not.",
    ],
  },
  {
    slug: "vector-precision-on-dark-cotton",
    title: "Vector Precision on Dark Cotton: Color Tokens & Print Masters",
    category: "Technical",
    date: "2026-06-04",
    dateLabel: "04 Jun 2026",
    readTime: "5 min read",
    image: "/designs/build-47-art.svg",
    excerpt:
      "Translating digital hex tokens into screen print masters — stroke weights, underbase flashes, and 300 DPI transparent masters.",
    byline: "Bram",
    pullQuote: "Digital artboards reward fine hairline strokes; cotton fabric demands minimum print stroke thresholds.",
    insightBox: "Technical Rule: All master graphics maintain 4500×5400 px sRGB transparent PNG boundaries at 300 DPI, holding offline separation master layers.",
    body: [
      "Designing vector graphics for dark fabric is fundamentally different from web design. On a monitor, a 1px stroke at 0.5 opacity looks subtle and refined. On a 240 GSM black cotton tee, that same stroke will vanish or bleed into the underbase flash ink.",
      "At BramLabs, we enforce strict vector rules for screen print translation. All primary structural lines require a minimum stroke weight of 3pt at chest scale. Secondary guidelines, dashed ticks, and coordinate markers are set to 1.5pt with high contrast.",
      "Color palette tokens are restricted to high-visibility spot colors: Off-White Ivory (#F4F1E9) for core outlines, Electric Cyan (#23C5EF) for active indicators, and Warm Amber (#FF862E) for threshold alerts. Every color must pass contrast testing against midnight black (#09090b) and deep navy (#0f172a).",
      "Production files are built with dedicated vector layers: artwork outlines, spot color fills, and transparent knockouts. High-resolution master assets (4500×5400 px sRGB transparent PNGs at 300 DPI) are held offline, separate from fast WebP web previews.",
    ],
  },
  {
    slug: "how-bramlabs-develops-apparel-graphics",
    title: "How BramLabs Develops Apparel Graphics",
    category: "Apparel",
    date: "2026-05-28",
    dateLabel: "28 May 2026",
    readTime: "4 min read",
    image: "/designs/wireframe-anatomy-art.svg",
    excerpt:
      "A practical pipeline from concept to garment application — without marketplace cosplay.",
    byline: "Bram",
    pullQuote: "If an idea only works as an app icon, it is not yet apparel.",
    insightBox: "Pipeline Rule: Sketching finds primary forms. Vector construction refines scale. Garment application tests contrast on physical fabric.",
    body: [
      "Every BramLabs graphic starts as a written concept. If the idea only works as a joke caption, it is not yet a composition. If it only works as an app icon, it is not yet apparel.",
      "Sketching is short and disposable. The goal is to find primary forms — arcs, grids, panels, waves — not to polish lines. Research follows when the subject has real-world structure: shift times, wireframe anatomy, audio thresholds.",
      "Vector construction is where most of the time goes. Hierarchy, stroke weight, negative space and label density are decided for chest distance, not for zoomed desktop artboards.",
      "Garment application is a separate pass. What reads on screen can collapse on fabric. We test contrast on dark grounds, reduce detail that will muddy at print size, and keep a production file separate from the optimized portfolio preview.",
      "Finally, each design is reviewed for intellectual-property and marketplace-policy risk. No licensed characters, no vendor UI kits, no “inspired by” logos. Original concepts only.",
    ],
  },
  {
    slug: "translating-auditory-focus-concepts-into-visual-art",
    title: "Translating Auditory & Focus Concepts into Visual Art",
    category: "Research",
    date: "2026-05-18",
    dateLabel: "18 May 2026",
    readTime: "5 min read",
    image: "/designs/protect-your-ears-art.svg",
    excerpt:
      "How sound pressure limits, gamma brainwave spikes, and signal noise ratios inspired a tri-color vector series.",
    byline: "Bram",
    pullQuote: "Technical concepts like 85 dB acoustic limits and 40 Hz gamma resonance provide real structural geometry.",
    insightBox: "Research Focus: Acoustic safety standards (OSHA 85 dB time-weighted averages) and EEG gamma waves directly shaped the concentric ring boundaries.",
    body: [
      "Inspiration for technical graphics should come from functional reality rather than decorative trends. The research behind Protect Your Ears and Focus Is a Waveform came directly from acoustic engineering and neuroscience.",
      "For Protect Your Ears, we studied the NIOSH and OSHA daily noise dose limits. Prolonged exposure above 85 dB SPL causes irreversible sensory hair cell damage. That exact threshold — 85 dB — became the top orange tick mark and boundary arc on the central dial.",
      "For Focus Is a Waveform, we mapped 40 Hz gamma brainwave oscillation patterns associated with peak cognitive flow. The composition uses a single unbroken cyan wave line rising above a neutral baseline to represent deep state signal over background noise.",
      "By anchoring visual art in real physical principles, the graphics carry genuine meaning for engineers, producers, and researchers who interact with sound and system metrics every day.",
    ],
  },
  {
    slug: "apparel-collection-inside-a-software-studio",
    title: "An Apparel Collection Inside a Software Studio",
    category: "Studio",
    date: "2026-05-10",
    dateLabel: "10 May 2026",
    readTime: "3 min read",
    image: "/designs/bramlabs-modular-grid-art.svg",
    excerpt:
      "Why BramLabs publishes software credentials and apparel graphics from the same desk — without turning shirts into ads.",
    byline: "Bram",
    pullQuote: "A shirt that looks like an app icon is a missed opportunity for both craft and trust.",
    insightBox: "Studio Philosophy: Software work feeds the visual language; apparel work forces clarity.",
    body: [
      "BramLabs ships software and apparel graphics. That combination only works if the graphics are not ads for the software. A shirt that looks like an app icon is a missed opportunity for both craft and trust.",
      "Software work feeds the visual language: systems, diagrams, status panels, focus, audio. Apparel work forces clarity — if a system cannot be reduced to chest-scale hierarchy, it was never clear.",
      "Public studio credentials stay honest. Only products with a real public listing appear as “published with link.” Support and privacy pages remain available for store requirements even when a listing is still indexing.",
      "Keeping the collection independent means stronger art, clearer authorship, and a portfolio that stands without a storefront checkout.",
    ],
  },
  {
    slug: "4-stage-construction-trail",
    title: "The 4-Stage Construction Trail: Why Every Graphic Demands a Blueprint Stage",
    category: "Process",
    date: "2026-04-29",
    dateLabel: "29 Apr 2026",
    readTime: "4 min read",
    image: "/designs/streak-grid-365-art.svg",
    excerpt:
      "Why we document initial sketches, geometric grids, and vector masters for every piece in the collection.",
    byline: "Bram",
    pullQuote: "Showing the construction trail proves originality and reveals the geometric decisions behind every mark.",
    insightBox: "Process Standard: Sketch outline → Geometric construction → Vector master → Garment mockup.",
    body: [
      "Most apparel graphics online hide their creation process. You see a finished shirt mockup, but no record of how the design was constructed or what ideas were rejected along the way.",
      "At BramLabs, every piece in the collection is published alongside a 4-stage construction trail: Stage 01 (Concept Sketch), Stage 02 (Geometric Construction), Stage 03 (Vector Master Art), and Stage 04 (Garment Application).",
      "Documenting Stage 02 — the blueprint grid with center axes, stroke guidelines, and arc endpoints — forces geometric rigour. It ensures every circle and coordinate has a structural reason for existing.",
      "This process trail provides complete transparency for reviewers and design collectors: proof of 100% in-house authorship from scratch.",
    ],
  },
];

export function getPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export function getLatestPosts(limit = 3): JournalPost[] {
  return journalPosts.slice(0, limit);
}
