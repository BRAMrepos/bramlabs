export type JournalPost = {
  slug: string;
  title: string;
  category: "Process" | "Studio" | "Apparel" | "Software";
  date: string;
  dateLabel: string;
  image: string;
  excerpt: string;
  byline: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "from-shift-schedule-to-rotation-dial",
    title: "From Shift Schedule to Rotation Dial",
    category: "Process",
    date: "2026-06-12",
    dateLabel: "12 Jun 2026",
    image: "/designs/rotation-dial-art.svg",
    excerpt:
      "How a 24-hour crew handoff became a wearable technical composition — including what got rejected.",
    byline: "Bram",
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
    slug: "how-bramlabs-develops-apparel-graphics",
    title: "How BramLabs Develops Apparel Graphics",
    category: "Apparel",
    date: "2026-05-28",
    dateLabel: "28 May 2026",
    image: "/designs/wireframe-anatomy-art.svg",
    excerpt:
      "A practical pipeline from concept to garment application — without marketplace cosplay.",
    byline: "Bram",
    body: [
      "Every BramLabs graphic starts as a written concept. If the idea only works as a joke caption, it is not yet a composition. If it only works as an app icon, it is not yet apparel.",
      "Sketching is short and disposable. The goal is to find primary forms — arcs, grids, panels, waves — not to polish lines. Research follows when the subject has real-world structure: shift times, wireframe anatomy, audio thresholds.",
      "Vector construction is where most of the time goes. Hierarchy, stroke weight, negative space and label density are decided for chest distance, not for zoomed desktop artboards.",
      "Garment application is a separate pass. What reads on screen can collapse on fabric. We test contrast on dark grounds, reduce detail that will muddy at print size, and keep a production file separate from the optimized portfolio preview.",
      "Finally, each design is reviewed for intellectual-property and marketplace-policy risk. No licensed characters, no vendor UI kits, no “inspired by” logos. Original concepts only.",
    ],
  },
  {
    slug: "apparel-collection-inside-a-software-studio",
    title: "An Apparel Collection Inside a Software Studio",
    category: "Studio",
    date: "2026-05-10",
    dateLabel: "10 May 2026",
    image: "/designs/bramlabs-modular-grid-art.svg",
    excerpt:
      "Why BramLabs publishes software credentials and apparel graphics from the same desk — without turning shirts into ads.",
    byline: "Bram",
    body: [
      "BramLabs ships software and apparel graphics. That combination only works if the graphics are not ads for the software. A shirt that looks like an app icon is a missed opportunity for both craft and trust.",
      "Software work feeds the visual language: systems, diagrams, status panels, focus, audio. Apparel work forces clarity — if a system cannot be reduced to chest-scale hierarchy, it was never clear.",
      "Public studio credentials stay honest. Only products with a real public listing appear as “published with link.” Support and privacy pages remain available for store requirements even when a listing is still indexing.",
      "Keeping the collection independent means stronger art, clearer authorship, and a portfolio that stands without a storefront checkout.",
    ],
  },
];

export function getPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
