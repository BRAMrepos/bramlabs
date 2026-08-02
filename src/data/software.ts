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

/**
 * Live products only. Apparel is the primary site story;
 * software appears as quiet credentials on About / Software.
 */
export const software: SoftwareProduct[] = [
  {
    slug: "sonicshield",
    title: "SonicShield",
    description:
      "Browser volume normalization and protection for safer, balanced listening.",
    longDescription:
      "SonicShield keeps browser audio under control — volume protection and normalization for long listening sessions without surprise spikes.",
    bullets: [
      "Volume protection and normalization in the browser",
      "Built for everyday listening, not studio metering theatre",
      "Privacy-minded: no account required for core features",
    ],
    platform: "Chrome Web Store",
    status: "published",
    externalUrl:
      "https://chromewebstore.google.com/detail/sonicshield-volume-normal/dbgmnminphmfmajoaeijogfojjehhmcg",
    icon: "/studio/sonicshield-mark.svg",
  },
  {
    slug: "storypeek",
    title: "StoryPeek",
    description:
      "Anonymous Instagram story viewing utility for the browser.",
    longDescription:
      "StoryPeek is a lightweight Chrome extension for viewing Instagram stories without the usual social-pressure signals of a full client session.",
    platform: "Chrome Web Store",
    status: "published",
    externalUrl:
      "https://chromewebstore.google.com/detail/storypeek-%E2%80%94-anonymous-ins/fbcmgjmagfglmkinlmbbgicipemheoll",
  },
  {
    slug: "clearcue",
    title: "ClearCue",
    description:
      "Spoken routine reminders and on-device focus cues for daily structure.",
    longDescription:
      "ClearCue helps build spoken routine reminders and distraction-aware focus patterns on device — designed for people who need clearer daily structure without noisy notification piles.",
    bullets: [
      "Spoken routine reminders",
      "On-device focus session logic",
      "Support and privacy docs maintained on this site",
    ],
    platform: "Amazon Appstore",
    status: "published",
    externalUrl:
      "https://www.amazon.com/ClearCue-Spoken-Routine-Reminders-Talking/dp/B0H9PLZ8XR/",
    supportUrl: "/apps/clearcue/support/",
    privacyUrl: "/apps/clearcue/privacy/",
  },
  {
    slug: "shiftledger",
    title: "ShiftLedger",
    description:
      "Shift rotation, overtime tracking and schedule tools for irregular work.",
    longDescription:
      "ShiftLedger is a shift and overtime tracking utility for people who work rotations — planning awareness for handoffs, irregular schedules and overtime.",
    bullets: [
      "Rotation-aware schedule concepts",
      "Overtime and handoff awareness",
      "Support documentation available for store requirements",
    ],
    platform: "Amazon Appstore",
    status: "published",
    externalUrl:
      "https://www.amazon.com/ShiftLedger-Shift-overtime-tracking-utility/dp/B0H9JP65GF/",
    supportUrl: "/apps/shiftledger/support/",
    privacyUrl: "/apps/shiftledger/privacy/",
  },
  {
    slug: "workflowai",
    title: "WorkflowAI",
    description:
      "Web product for structured AI-assisted workflows.",
    longDescription:
      "WorkflowAI is a web product for structured, AI-assisted workflows — published separately from the apparel portfolio.",
    platform: "Web",
    status: "published",
    externalUrl: "https://www.workflowai.site/",
  },
];

/** Products safe to list as public credentials (live storefront URL required). */
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
