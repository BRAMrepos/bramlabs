export type SoftwareProduct = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  bullets?: string[];
  platform: string;
  status:
    | "published"
    | "submitted"
    | "private-beta"
    | "in-development"
    | "retired";
  externalUrl?: string;
  supportUrl?: string;
  privacyUrl?: string;
  icon?: string;
};

export const software: SoftwareProduct[] = [
  {
    slug: "sonicshield",
    title: "SonicShield",
    description:
      "Browser audio management and volume protection for safer, balanced listening.",
    longDescription:
      "SonicShield helps you keep browser audio under control — volume normalization and protection utilities designed for long listening sessions without surprise spikes.",
    bullets: [
      "Volume protection and normalization utilities in the browser",
      "Built for everyday listening, not studio metering theatre",
      "Privacy-minded: no account required to use core features",
    ],
    platform: "Chrome Web Store",
    status: "published",
    externalUrl:
      "https://chromewebstore.google.com/detail/sonicshield-volume-normal/dbgmnminphmfmajoaeijogfojjehhmcg",
    supportUrl: "/extensions/sonicshield/support/",
    privacyUrl: "/extensions/sonicshield/privacy/",
    icon: "/studio/sonicshield-mark.svg",
  },
  {
    slug: "clearcue",
    title: "ClearCue",
    description:
      "Smart notification batching and distraction-free focus sessions on device.",
    longDescription:
      "ClearCue is designed to keep focus-session logic on device, with notification batching patterns for people who need fewer interruptions.",
    bullets: [
      "On-device focus session logic",
      "Notification batching patterns",
      "Support and privacy documentation maintained on this site",
    ],
    platform: "Amazon Appstore",
    status: "in-development",
    supportUrl: "/apps/clearcue/support/",
    privacyUrl: "/apps/clearcue/privacy/",
  },
  {
    slug: "shiftledger",
    title: "ShiftLedger",
    description:
      "Shift rotation planner, overtime tracking and schedule tools for irregular work.",
    longDescription:
      "ShiftLedger explores tools for rotation planning and overtime awareness for people who work irregular schedules.",
    bullets: [
      "Rotation-aware schedule concepts",
      "Overtime and handoff awareness",
      "Support documentation available while listing matures",
    ],
    platform: "Amazon Appstore",
    status: "in-development",
    supportUrl: "/apps/shiftledger/support/",
    privacyUrl: "/apps/shiftledger/privacy/",
  },
];

/** Only products safe to list as public studio credentials with store links */
export function getPublishedSoftware(): SoftwareProduct[] {
  return software.filter(
    (p) => p.status === "published" && Boolean(p.externalUrl),
  );
}

export function getInDevelopmentSoftware(): SoftwareProduct[] {
  return software.filter((p) => p.status === "in-development");
}

export function getSoftwareBySlug(slug: string): SoftwareProduct | undefined {
  return software.find((p) => p.slug === slug);
}
