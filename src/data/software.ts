/**
 * Products published by BramLabs.
 *
 * This file is the single source of truth. Every page under /software/[slug]/
 * — landing, privacy, support, changelog — is generated from these records.
 * Adding a product is a data edit; do not create per-product .astro files.
 *
 * HARD RULE: a product with status "published" must have `privacy` filled in
 * and at least one support FAQ entry. Chrome Web Store and Amazon Appstore
 * both require a reachable privacy policy for live listings. `assertPublished`
 * at the bottom of this file fails the build if that slips.
 */

/** One row of the "what we collect" table on a product privacy page. */
export type DataPractice = {
  /** Plain-English category, e.g. "Support correspondence". */
  category: string;
  /** Exactly what is collected. */
  collected: string;
  /** Why it is collected. */
  purpose: string;
  /** How long it is kept. */
  retention: string;
};

/** A third party that processes data on the product's behalf. */
export type Processor = {
  name: string;
  purpose: string;
  url?: string;
};

export type PrivacyProfile = {
  /**
   * One sentence a user can read in three seconds. This is the headline of
   * the policy — make it true and make it specific.
   */
  summary: string;
  /**
   * False means the product genuinely collects no personal data during normal
   * use. It does not exempt support correspondence, which is always listed.
   */
  collectsPersonalData: boolean;
  /** Rows of the data table. Empty array is valid and renders as "nothing". */
  practices: DataPractice[];
  /** Named sub-processors. Empty array renders as "none". */
  processors: Processor[];
  /** ISO date the current version took effect. */
  effectiveDate: string;
  /**
   * Set false while the technical data-collection claims still need to be
   * confirmed against the shipped build. Surfaces a review notice on the page.
   */
  verified: boolean;
};

export type FaqItem = {
  q: string;
  a: string;
};

/** Language a product's own pages are written in. */
export type Locale = "en" | "de";

/**
 * A section of a hand-written legal document.
 *
 * Some products need a policy that is authored, not generated — a different
 * language, a jurisdiction-specific structure, or claims too specific for the
 * template (e.g. "this app holds no INTERNET permission"). Those are stored
 * verbatim here and rendered through the site's own chrome, so the wording is
 * never paraphrased by a template.
 */
export type LegalSection = {
  heading: string;
  /** Paragraphs, rendered in order. */
  paragraphs?: string[];
  /** Bullet list. `strong` is bolded and followed by an en dash. */
  bullets?: { strong?: string; text: string }[];
  /** Paragraphs rendered after the bullet list. */
  trailingParagraphs?: string[];
};

export type LegalDocument = {
  title: string;
  /** Line under the title, e.g. "Android-App ... Stand: 31. August 2026". */
  standfirst: string;
  /** Lead paragraph, styled as the document summary. */
  summary: string;
  sections: LegalSection[];
};

export type Feature = {
  title: string;
  body: string;
};

export type ChangelogEntry = {
  version: string;
  /** ISO date. */
  date: string;
  changes: string[];
};

export type SoftwareProduct = {
  slug: string;
  title: string;
  /** Short phrase under the product name. No marketing verbs. */
  tagline: string;
  /** One-line description used in grids and cards. */
  description: string;
  /** Two or three sentences for the product page hero. */
  longDescription: string;
  platform: string;
  /** Where the product runs, in the user's words. */
  availability: string;
  status:
    | "published"
    | "submitted"
    | "private-beta"
    | "in-development"
    | "retired";
  externalUrl?: string;
  icon?: string;
  /**
   * Language this product's pages are written in. Defaults to "en".
   * Drives <html lang>, date formatting and the sub-navigation labels.
   */
  locale?: Locale;
  features: Feature[];
  privacy: PrivacyProfile;
  /**
   * A hand-written policy that replaces the generated one. Use when the
   * wording is legally load-bearing and must not be paraphrased — a German
   * Datenschutzerklaerung, for instance. `privacy` is still required, because
   * the summary and effective date feed cards and metadata.
   */
  privacyDocument?: LegalDocument;
  faq: FaqItem[];
  changelog?: ChangelogEntry[];
  /**
   * Paths this product used to live at. Kept so `_redirects` and any audit can
   * be generated from data rather than remembered. These exact URLs are filed
   * with the stores — they must never 404.
   */
  legacyPaths?: string[];
};

/**
 * Support correspondence is handled identically for every product, so the row
 * is defined once and spread into each profile rather than retyped.
 */
const SUPPORT_CORRESPONDENCE: DataPractice = {
  category: "Support correspondence",
  collected:
    "Your email address and whatever you choose to put in the message, including any screenshots you attach.",
  purpose:
    "To answer your question and to fix the bug you reported. Nothing else.",
  retention:
    "Kept while the issue is open, then up to 24 months so we can recognise a recurring problem. Deleted on request.",
};

const RESEND: Processor = {
  name: "Resend",
  purpose:
    "Delivers email sent through the forms on this site to the BramLabs inbox.",
  url: "https://resend.com/legal/privacy-policy",
};

const CLOUDFLARE: Processor = {
  name: "Cloudflare",
  purpose:
    "Hosts and serves bramlabs.co. Processes standard server request logs.",
  url: "https://www.cloudflare.com/privacypolicy/",
};

export const software: SoftwareProduct[] = [
  {
    slug: "arbeitszeit",
    title: "Arbeitszeit",
    tagline: "Arbeitszeiterfassung für Deutschland",
    description:
      "Arbeitszeiten, Pausen und Zuschläge erfassen — vollständig offline auf dem Gerät.",
    longDescription:
      "Arbeitszeit erfasst Arbeitszeiten, Pausen, Urlaub und Krankheit und rechnet Zuschläge und Stunden gegen deinen Vertrag. Die App besitzt keine Internet-Berechtigung: alles bleibt auf deinem Gerät.",
    platform: "Android",
    availability: "Android, auf Deutsch",
    status: "submitted",
    locale: "de",
    icon: "/studio/arbeitszeit-mark.svg",
    // Filed with the store before the move to /software/. Must never 404.
    legacyPaths: ["/apps/arbeitszeit/privacy/", "/apps/arbeitszeit/support/"],
    features: [
      {
        title: "Zeiten und Pausen",
        body: "Arbeitszeiten, Pausen und Abwesenheiten wie Urlaub und Krankheit an einer Stelle.",
      },
      {
        title: "Vertrag und Zuschläge",
        body: "Wochenstunden, Arbeitstage, Zuschlagssätze und Stundenlohn hinterlegen und gegen die Lohnabrechnung abgleichen.",
      },
      {
        title: "Ohne Internet",
        body: "Die App hat keine Internet-Berechtigung und kann technisch keine Daten übertragen.",
      },
    ],
    privacy: {
      summary:
        "Die App besitzt keine Internet-Berechtigung. Alle Einträge bleiben im app-privaten Speicher deines Geräts.",
      collectsPersonalData: false,
      practices: [],
      processors: [],
      effectiveDate: "2026-08-31",
      verified: true,
    },
    // Authored, not generated: this is the wording filed with the store.
    privacyDocument: {
      title: "Datenschutzerklärung",
      standfirst: "Android-App \u201eArbeitszeit\u201c \u00b7 Stand: 31. August 2026",
      summary:
        "Diese App verarbeitet keine personenbezogenen Daten auf unseren Systemen. Sie besitzt keine Berechtigung für den Internetzugriff und ist technisch nicht in der Lage, Daten zu übertragen. Alles, was du einträgst, bleibt auf deinem Gerät.",
      sections: [
        {
          heading: "1. Verantwortlicher",
          paragraphs: [
            "Bramlabs\nBraim\nBerlin N21\n14050\nE-Mail: contact@bramlabs.co",
          ],
        },
        {
          heading: "2. Welche Daten verarbeitet werden",
          paragraphs: ["Ausschließlich die Angaben, die du selbst in der App erfasst:"],
          bullets: [
            { text: "Arbeitszeiten, Pausen und Abwesenheiten (Urlaub, Krankheit)" },
            {
              text: "Vertragsdaten wie Wochenstunden, Arbeitstage, Zuschlagssätze und Stundenlohn",
            },
            {
              text: "Angaben für den Stundenzettel: Name, Personalnummer, Abteilung, Arbeitgeber",
            },
            { text: "Beträge, die du zum Abgleich von deiner Lohnabrechnung abtippst" },
          ],
          trailingParagraphs: [
            "Die App erhebt keine Geräte-, Standort- oder Nutzungsdaten. Sie enthält keine Analyse-, Tracking- oder Werbebausteine und keine Absturzberichterstattung an Dritte.",
          ],
        },
        {
          heading: "3. Wo die Daten gespeichert werden",
          paragraphs: [
            "Ausschließlich in einem app-privaten Bereich deines Gerätes, auf den andere Apps keinen Zugriff haben. Die automatische Google-Sicherung (allowBackup) ist abgeschaltet, deine Zeiten werden also nicht in eine Cloud gespiegelt. Es gibt keine Server und keine Konten.",
            "Sicherungen erstellst du selbst über \u201eDaten exportieren\u201c. Wohin diese Datei geht, entscheidest ausschließlich du; ab dem Verlassen der App liegt sie in deiner Verantwortung.",
          ],
        },
        {
          heading: "4. Berechtigungen",
          bullets: [
            {
              strong: "Benachrichtigungen",
              text: "damit der Schichtwecker melden kann. Wird erst angefragt, wenn du ihn einschaltest.",
            },
            {
              strong: "Start nach Neustart",
              text: "Wecker überstehen einen Geräteneustart nicht von selbst; die App setzt sie danach neu.",
            },
            {
              strong: "Fingerabdruck / Gerätesperre",
              text: "ausschließlich zum Entsperren der App. Die Prüfung übernimmt Android; die App erhält nur die Antwort \u201eja\u201c oder \u201enein\u201c und niemals biometrische Daten.",
            },
          ],
          trailingParagraphs: [
            "Eine Berechtigung für den Internetzugriff besitzt die App nicht.",
          ],
        },
        {
          heading: "5. Weitergabe an Dritte",
          paragraphs: [
            "Es findet keine Weitergabe statt. Es gibt keine Auftragsverarbeiter, keine Dienste Dritter und keine Datenübermittlung in Drittländer.",
          ],
        },
        {
          heading: "6. Rechtsgrundlage und Speicherdauer",
          paragraphs: [
            "Da keine Daten an uns übermittelt werden, findet durch uns keine Verarbeitung im Sinne der DSGVO statt. Die auf deinem Gerät gespeicherten Angaben bleiben dort, bis du sie über \u201eAlle Daten löschen\u201c entfernst oder die App deinstallierst.",
          ],
        },
        {
          heading: "7. Deine Rechte",
          paragraphs: [
            "Dir stehen die Rechte aus Art. 15 bis 21 DSGVO zu. Da uns keine Daten vorliegen, gibt es bei uns nichts, worüber wir Auskunft erteilen oder was wir berichtigen oder löschen könnten. Auskunft verschaffst du dir jederzeit selbst über die Export-Funktion, Löschung über \u201eAlle Daten löschen\u201c oder das Deinstallieren der App.",
            "Unabhängig davon steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.",
          ],
        },
        {
          heading: "8. Änderungen",
          paragraphs: [
            "Ändert sich der Funktionsumfang der App in einer Weise, die eine Datenverarbeitung auslöst, wird diese Erklärung vorher angepasst und das Datum oben aktualisiert.",
          ],
        },
      ],
    },
    faq: [
      {
        q: "Wo werden meine Zeiten gespeichert?",
        a: "Ausschließlich in einem app-privaten Bereich deines Geräts. Die App hat keine Internet-Berechtigung und kann Daten technisch nicht übertragen. Es gibt keine Server und keine Konten.",
      },
      {
        q: "Werden meine Daten in der Google-Cloud gesichert?",
        a: "Nein. Die automatische Google-Sicherung (allowBackup) ist abgeschaltet. Sicherungen erstellst du selbst über \u201eDaten exportieren\u201c.",
      },
      {
        q: "Was passiert bei einem Gerätewechsel?",
        a: "Exportiere deine Daten vor dem Wechsel über \u201eDaten exportieren\u201c und importiere die Datei auf dem neuen Gerät. Ohne Export gehen die Einträge beim Deinstallieren verloren.",
      },
      {
        q: "Warum meldet sich der Schichtwecker nicht?",
        a: "Der Wecker braucht die Benachrichtigungs-Berechtigung. Prüfe außerdem, ob die Akku-Optimierung für die App eingeschränkt ist — viele Hersteller unterdrücken sonst geplante Alarme.",
      },
      {
        q: "Wie lösche ich alle Daten?",
        a: "Über \u201eAlle Daten löschen\u201c in der App oder durch Deinstallieren. Bei uns liegt nichts, was gelöscht werden müsste.",
      },
    ],
  },

  {
    slug: "shiftledger",
    title: "ShiftLedger",
    tagline: "Rotation and overtime tracking",
    description:
      "Shift rotation, overtime tracking and schedule tools for irregular work.",
    longDescription:
      "ShiftLedger is a shift and overtime tracker for people who work rotations rather than a fixed week. It keeps track of what you actually worked, what is owed, and where the handoffs fall.",
    platform: "Amazon Appstore",
    availability: "Android, via the Amazon Appstore",
    status: "published",
    externalUrl:
      "https://www.amazon.com/ShiftLedger-Shift-overtime-tracking-utility/dp/B0H9JP65GF/",
    icon: "/studio/shiftledger-mark.png",
    legacyPaths: ["/apps/shiftledger/privacy/", "/apps/shiftledger/support/"],
    features: [
      {
        title: "Rotation-aware scheduling",
        body: "Built around rotating patterns — days, swings, nights — instead of assuming a Monday-to-Friday week.",
      },
      {
        title: "Overtime tracking",
        body: "Records hours worked beyond the scheduled shift so the running total is there when you need to check it.",
      },
      {
        title: "Handoff awareness",
        body: "Shows where one rotation ends and the next begins, which is the part that usually gets miscounted.",
      },
    ],
    privacy: {
      summary:
        "Your shift data stays on your device. ShiftLedger has no account system and sends nothing to BramLabs.",
      collectsPersonalData: false,
      practices: [SUPPORT_CORRESPONDENCE],
      processors: [RESEND],
      effectiveDate: "2026-08-31",
      verified: false,
    },
    faq: [
      {
        q: "Where is my shift data stored?",
        a: "On your device. ShiftLedger does not require an account and does not upload your schedule to a server.",
      },
      {
        q: "What happens to my data if I uninstall the app?",
        a: "It is removed with the app. Because nothing is synced to a server, there is no copy left behind — so export anything you want to keep before uninstalling.",
      },
      {
        q: "Can I use it for a rotation that isn't a standard pattern?",
        a: "Yes. If you hit a pattern the app handles badly, send the rotation shape to support and it will be looked at — irregular patterns are the reason the app exists.",
      },
      {
        q: "Why is a feature missing after an update?",
        a: "Send the version number shown on the app's about screen along with what changed. Regressions are treated as bugs, not as intentional removals.",
      },
    ],
  },

  {
    slug: "clearcue",
    title: "ClearCue",
    tagline: "Spoken routine reminders",
    description:
      "Spoken routine reminders and on-device focus cues for daily structure.",
    longDescription:
      "ClearCue speaks your routine out loud instead of adding another silent badge to a pile of notifications. It is built for people who need daily structure they can hear while their hands are busy.",
    platform: "Amazon Appstore",
    availability: "Android, via the Amazon Appstore",
    status: "published",
    externalUrl:
      "https://www.amazon.com/ClearCue-Spoken-Routine-Reminders-Talking/dp/B0H9PLZ8XR/",
    icon: "/studio/clearcue-mark.png",
    legacyPaths: ["/apps/clearcue/privacy/", "/apps/clearcue/support/"],
    features: [
      {
        title: "Spoken reminders",
        body: "Routine cues are read aloud, so they land while you are cooking, driving or working with your hands.",
      },
      {
        title: "On-device focus sessions",
        body: "Session logic runs locally. No round trip to a server to start or end a block of focused time.",
      },
      {
        title: "Quiet by default",
        body: "One cue at the moment it is useful, rather than a notification tray that has to be cleared later.",
      },
    ],
    privacy: {
      summary:
        "Routines and focus sessions are processed on your device. ClearCue has no account system and sends no reminder content to BramLabs.",
      collectsPersonalData: false,
      practices: [SUPPORT_CORRESPONDENCE],
      processors: [RESEND],
      effectiveDate: "2026-08-31",
      verified: false,
    },
    faq: [
      {
        q: "Are my reminders sent anywhere?",
        a: "No. Reminder text and focus session logic are handled on the device. They are not transmitted to BramLabs for processing.",
      },
      {
        q: "Why isn't the app speaking?",
        a: "ClearCue uses your device's text-to-speech engine. Check that a TTS voice is installed and selected in your Android accessibility settings, and that media volume is not muted.",
      },
      {
        q: "Can I use it without granting notification permission?",
        a: "Reminders need notification permission to fire reliably when the app is in the background. Without it Android may delay or drop cues.",
      },
      {
        q: "Does ClearCue work offline?",
        a: "Yes. Core reminder and focus features do not require a network connection.",
      },
    ],
  },

  {
    slug: "sonicshield",
    title: "SonicShield",
    tagline: "Browser volume protection",
    description:
      "Volume normalization and hearing protection for browser audio.",
    longDescription:
      "SonicShield keeps browser audio at a consistent level so a quiet video followed by a loud advert does not take your head off. It is volume protection for long listening sessions, not a studio metering tool.",
    platform: "Chrome Web Store",
    availability: "Chrome and Chromium browsers",
    status: "published",
    externalUrl:
      "https://chromewebstore.google.com/detail/sonicshield-volume-normal/dbgmnminphmfmajoaeijogfojjehhmcg",
    icon: "/studio/sonicshield-mark.png",
    legacyPaths: [
      "/extensions/sonicshield/privacy/",
      "/extensions/sonicshield/support/",
    ],
    features: [
      {
        title: "Volume normalization",
        body: "Levels out the difference between quiet content and sudden loud content across browser tabs.",
      },
      {
        title: "Spike protection",
        body: "Catches the sharp jumps that make long listening sessions uncomfortable.",
      },
      {
        title: "No account",
        body: "Install it and it works. There is nothing to sign up for and nothing to log in to.",
      },
    ],
    privacy: {
      summary:
        "SonicShield processes audio locally in your browser. It has no account system and transmits no audio or browsing data to BramLabs.",
      collectsPersonalData: false,
      practices: [SUPPORT_CORRESPONDENCE],
      processors: [RESEND],
      effectiveDate: "2026-08-31",
      verified: false,
    },
    faq: [
      {
        q: "Does SonicShield listen to or record my audio?",
        a: "No. Audio is processed inside your browser to adjust volume. Nothing is recorded and nothing is sent anywhere.",
      },
      {
        q: "Why is a tab still too loud?",
        a: "Some sites route audio in ways an extension cannot reach, and DRM-protected streams in particular may be unavailable. Send the site address to support so it can be checked.",
      },
      {
        q: "Does it work in Firefox or Safari?",
        a: "Not currently. SonicShield is published for Chrome and Chromium-based browsers.",
      },
      {
        q: "Will it affect audio quality?",
        a: "It adjusts gain, not content. It is intended to be inaudible other than the level change it is making.",
      },
    ],
  },

  {
    slug: "storypeek",
    title: "StoryPeek",
    tagline: "Anonymous story viewing",
    description:
      "A lightweight browser utility for viewing Instagram stories.",
    longDescription:
      "StoryPeek is a small Chrome extension for viewing Instagram stories without the viewer signal a normal client session sends. It does one job and stays out of the way.",
    platform: "Chrome Web Store",
    availability: "Chrome and Chromium browsers",
    status: "published",
    externalUrl:
      "https://chromewebstore.google.com/detail/storypeek-%E2%80%94-anonymous-ins/fbcmgjmagfglmkinlmbbgicipemheoll",
    icon: "/studio/storypeek-mark.png",
    features: [
      {
        title: "Viewing without the view signal",
        body: "Watch a story without registering as a viewer in the poster's list.",
      },
      {
        title: "Small footprint",
        body: "A single-purpose extension rather than a full alternative client.",
      },
      {
        title: "No account",
        body: "No BramLabs sign-up is required to use the extension.",
      },
    ],
    privacy: {
      summary:
        "StoryPeek has no BramLabs account system and does not send your browsing activity to BramLabs.",
      collectsPersonalData: false,
      practices: [SUPPORT_CORRESPONDENCE],
      processors: [RESEND],
      effectiveDate: "2026-08-31",
      verified: false,
    },
    faq: [
      {
        q: "Does StoryPeek need my Instagram password?",
        a: "No. The extension does not ask for, store, or transmit Instagram credentials to BramLabs.",
      },
      {
        q: "Is this affiliated with Instagram or Meta?",
        a: "No. StoryPeek is an independent extension published by BramLabs. Instagram is a trademark of Meta Platforms, Inc., which does not endorse or sponsor this extension.",
      },
      {
        q: "Why did it stop working?",
        a: "Instagram changes its site regularly, and a change on their side can break the extension until it is updated. Report it to support with the date you noticed it.",
      },
      {
        q: "Am I responsible for how I use it?",
        a: "Yes. Using the extension is subject to Instagram's own terms of use, and you are responsible for complying with them.",
      },
    ],
  },

  {
    slug: "workflowai",
    title: "WorkflowAI",
    tagline: "Structured AI workflows",
    description: "A web product for building repeatable AI-assisted workflows.",
    longDescription:
      "WorkflowAI is a web application for running structured, repeatable AI-assisted workflows instead of retyping the same prompt every time. It is published and maintained separately from the rest of the studio's work.",
    platform: "Web",
    availability: "Any modern browser, at workflowai.site",
    status: "published",
    externalUrl: "https://www.workflowai.site/",
    icon: "/studio/workflowai-mark.svg",
    features: [
      {
        title: "Structured execution",
        body: "Turns a prompt you keep reusing into a defined step you can run again with different inputs.",
      },
      {
        title: "Repeatable task flows",
        body: "Chain steps together so a multi-stage task runs the same way each time.",
      },
      {
        title: "Browser-based",
        body: "Runs as a hosted web application. Nothing to install.",
      },
    ],
    privacy: {
      summary:
        "WorkflowAI is a hosted web application, so unlike the studio's on-device apps it does process data on a server. The specifics are set out below.",
      collectsPersonalData: true,
      practices: [
        {
          category: "Workflow content",
          collected:
            "The prompts, inputs and workflow definitions you create in the application.",
          purpose:
            "To run the workflow you asked for and to show you the result.",
          retention:
            "Held for as long as the workflow exists in your workspace. Deleted when you delete it.",
        },
        {
          category: "Service and diagnostic logs",
          collected:
            "Standard server request data — IP address, timestamp, browser user agent, and error traces.",
          purpose:
            "To keep the service running, diagnose failures, and identify abuse.",
          retention: "Rolling window, typically 30 days.",
        },
        SUPPORT_CORRESPONDENCE,
      ],
      processors: [CLOUDFLARE, RESEND],
      effectiveDate: "2026-08-31",
      verified: false,
    },
    faq: [
      {
        q: "Is my workflow content used to train AI models?",
        a: "Not by BramLabs. Content you submit is used to run the workflow you requested. Where a workflow calls an external model provider, that provider's own terms also apply.",
      },
      {
        q: "Do I need an account?",
        a: "Account requirements are described on workflowai.site itself, which is where the product is operated.",
      },
      {
        q: "How do I delete my data?",
        a: "Delete the workflow from your workspace, or email support asking for account deletion and it will be actioned.",
      },
      {
        q: "Where is the service hosted?",
        a: "On Cloudflare's network. See the privacy page for the full list of processors.",
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────────
   Queries
   ──────────────────────────────────────────────────────────────── */

export function getPublishedSoftware(): SoftwareProduct[] {
  return software.filter(
    (p) => p.status === "published" && Boolean(p.externalUrl),
  );
}

/**
 * Products that get their own pages on this site.
 *
 * Deliberately wider than `getPublishedSoftware`: a store submission has to
 * name a privacy-policy URL, and that URL must already resolve at the moment
 * you submit — before any listing exists to link back to. So "submitted"
 * products are documented here even though they have no externalUrl yet.
 */
export function getDocumentedSoftware(): SoftwareProduct[] {
  return software.filter(
    (p) => p.status === "published" || p.status === "submitted",
  );
}

/** True when the product has a store listing a visitor can actually open. */
export function isLive(p: SoftwareProduct): boolean {
  return p.status === "published" && Boolean(p.externalUrl);
}

export function getInDevelopmentSoftware(): SoftwareProduct[] {
  return software.filter((p) => p.status === "in-development");
}

export function getSoftwareBySlug(slug: string): SoftwareProduct | undefined {
  return software.find((p) => p.slug === slug);
}

export function getSoftwareByPlatform(): {
  platform: string;
  items: SoftwareProduct[];
}[] {
  const order = ["Android", "Amazon Appstore", "Chrome Web Store", "Web"];
  const documented = getDocumentedSoftware();
  return order
    .map((platform) => ({
      platform,
      items: documented.filter((p) => p.platform === platform),
    }))
    .filter((g) => g.items.length > 0);
}

/** Products still needing their privacy claims confirmed against the build. */
export function getUnverifiedPrivacy(): SoftwareProduct[] {
  return getDocumentedSoftware().filter((p) => !p.privacy.verified);
}

/**
 * Fails the build if a published product is missing the pages the stores
 * require. Called from the /software/ index so it runs on every build.
 */
export function assertPublishedProductsAreComplete(): void {
  const problems: string[] = [];
  for (const p of getDocumentedSoftware()) {
    if (!p.privacy.summary.trim()) {
      problems.push(`${p.slug}: privacy.summary is empty`);
    }
    // A generated policy needs table rows. An authored document supplies its
    // own structure, so the empty-practices check does not apply to it.
    if (!p.privacyDocument && p.privacy.practices.length === 0) {
      problems.push(
        `${p.slug}: privacy.practices is empty — support correspondence at minimum must be declared`,
      );
    }
    if (p.faq.length === 0) {
      problems.push(`${p.slug}: faq is empty, so the support page would be bare`);
    }
  }
  if (problems.length > 0) {
    throw new Error(
      `Published products are missing store-required content:\n  - ${problems.join("\n  - ")}`,
    );
  }
}
