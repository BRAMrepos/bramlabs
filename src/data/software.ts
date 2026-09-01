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
/**
 * A two-column table inside a legal document — "which data / what for",
 * "permission / why". Two columns is deliberate: anything wider stops being
 * readable on a phone, which is where most of these are read.
 */
export type LegalTable = {
  columns: [string, string];
  rows: { key: string; value: string }[];
};

/**
 * All free-text fields below accept a small inline markup subset, rendered by
 * RichText.astro: `**bold**`, `*italic*`, `` `code` `` and `[label](url)`.
 */
export type LegalSection = {
  /** Omit for a continuation block that carries no heading of its own. */
  heading?: string;
  /** Heading level. Defaults to 2; use 3 for a subsection. */
  level?: 2 | 3;
  /** Paragraphs, rendered in order, before any list or table. */
  paragraphs?: string[];
  /** Bullet list. `strong` is bolded and followed by an en dash. */
  bullets?: { strong?: string; text: string }[];
  /** Two-column table, rendered after the bullets. */
  table?: LegalTable;
  /** Paragraphs rendered after the list and table. */
  trailingParagraphs?: string[];
};

export type LegalDocument = {
  title: string;
  /** Line under the title, e.g. "Android-App ... Stand: 1. September 2026". */
  standfirst: string;
  /** Optional heading for the summary callout, e.g. "Das Wichtigste vorab". */
  summaryLabel?: string;
  /** Lead paragraph, styled as the document summary callout. */
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
  /**
   * What it costs and how it is funded, in the user's words. Shown in the
   * spec list — an ad-funded app should say so before install, not in
   * section 3 of the privacy policy.
   */
  pricing?: string;
  /** Store/bundle identifier, shown as mono metadata. */
  packageId?: string;
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
    tagline: "Stundenzettel & Zuschläge",
    description:
      "Schichten, Zuschläge und Stundenzettel erfassen — gerechnet und gespeichert auf dem Gerät.",
    longDescription:
      "Arbeitszeit erfasst Schichten, Pausen und Abwesenheiten, rechnet Zuschläge nach § 3b EStG gegen deinen Vertrag und erzeugt daraus einen Stundenzettel. Zeiten und Löhne bleiben auf dem Gerät: es gibt kein Konto und keinen Server, auf den sie übertragen werden.",
    platform: "Android",
    availability: "Android, auf Deutsch",
    pricing: "Kostenlos, werbefinanziert",
    packageId: "co.bramlabs.arbeitszeit",
    status: "submitted",
    locale: "de",
    icon: "/studio/arbeitszeit-mark.svg",
    // Filed with the store before the move to /software/. Must never 404.
    legacyPaths: ["/apps/arbeitszeit/privacy/", "/apps/arbeitszeit/support/"],
    features: [
      {
        title: "Schichten und Pausen",
        body: "Datum, Beginn, Ende, Pausen, Arbeitsort und Notizen — mit Rundungsregel und Gleitzeitsaldo.",
      },
      {
        title: "Zuschläge nach § 3b EStG",
        body: "Nacht-, Sonn- und Feiertagszuschläge gegen Stundenlohn und Vertrag gerechnet, Feiertage je Bundesland.",
      },
      {
        title: "Abwesenheiten",
        body: "Urlaub, Krankheit, Feiertag und Freizeitausgleich laufen in dieselbe Jahresübersicht.",
      },
      {
        title: "Stundenzettel und Export",
        body: "CSV, ICS und PDF beziehungsweise Druck — lokal erzeugt, Ziel wählst du im System-Dialog.",
      },
      {
        title: "Schichtwecker",
        body: "Erinnerungen, die einen Geräteneustart überstehen. Die Berechtigung wird erst beim Einschalten abgefragt.",
      },
      {
        title: "App-Sperre",
        body: "Optional per Fingerabdruck oder Gerätesperre. Die Prüfung bleibt beim System, die App sieht keine biometrischen Daten.",
      },
    ],
    privacy: {
      summary:
        "Zeiten, Löhne und Stundenzettel bleiben auf dem Gerät — kein Konto, kein Server. Internet nutzt die App nur für Werbung, und erst nachdem du im Einwilligungsdialog entschieden hast.",
      // Google processes advertising data once consent is given, so this is
      // true from the user's perspective even though BramLabs receives only
      // aggregate billing figures.
      collectsPersonalData: true,
      practices: [],
      processors: [],
      effectiveDate: "2026-09-01",
      verified: true,
    },
    // Authored, not generated: this is the wording filed with the store.
    privacyDocument: {
      title: "Datenschutzerklärung",
      standfirst:
        "Für die Android-App **Arbeitszeit – Stundenzettel & Zuschläge** (`co.bramlabs.arbeitszeit`). Stand: 1. September 2026",
      summaryLabel: "Das Wichtigste vorab",
      summary:
        "Deine Arbeitszeiten, Zuschläge, Löhne und der Stundenzettel werden ausschließlich auf deinem Gerät gespeichert und berechnet. Es gibt kein Nutzerkonto, keine Anmeldung und keinen Server, auf den diese Daten übertragen werden. Die einzige Internetverbindung, die die App aufbaut, dient der Auslieferung von Werbung – und auch die erst, nachdem du im Einwilligungsdialog entschieden hast.",
      sections: [
        {
          heading: "1. Verantwortlicher",
          paragraphs: [
            "Bram Labs\nBerlin\nDeutschland\nE-Mail: contact@bramlabs.co",
            "Ein Datenschutzbeauftragter ist nicht bestellt; die gesetzlichen Voraussetzungen dafür liegen nicht vor.",
          ],
        },
        {
          heading: "2. Daten, die du in der App erfasst",
          paragraphs: ["Die App verarbeitet die Angaben, die du selbst einträgst:"],
          bullets: [
            { text: "Schichten: Datum, Beginn, Ende, Pausen, Arbeitsort, Notizen" },
            { text: "Abwesenheiten: Urlaub, Krankheit, Feiertag, Freizeitausgleich" },
            {
              text: "Vertragsdaten: Wochenstunden, Stundenlohn, Zuschlagssätze, Bundesland, Rundungsregel, Gleitzeit-Startsaldo",
            },
            {
              text: "Optional für den Stundenzettel: Name, Personalnummer, Abteilung, Arbeitgeber",
            },
          ],
          trailingParagraphs: [
            "**Speicherort:** ausschließlich im app-privaten Speicherbereich deines Geräts (eine JSON-Datei im internen Speicher). Andere Apps können nicht darauf zugreifen. Eine Übertragung an uns oder an Dritte findet nicht statt. Auch die automatische Android-Sicherung (Backup in die Google-Cloud) ist für diese App **abgeschaltet** – Arbeitszeitaufzeichnungen können im Streitfall Beweismittel sein und gehören deshalb nicht ungefragt in eine fremde Sicherung.",
            "**Löschung:** Du löschst alle Daten, indem du in den Einstellungen \u201eAlle Daten löschen\u201c wählst oder die App deinstallierst. Ein Widerruf uns gegenüber ist nicht nötig, weil wir diese Daten nie erhalten.",
            "**Export:** CSV-, ICS- und PDF-/Druck-Exporte werden lokal erzeugt. Wohin du sie anschließend gibst – Dateiablage, E-Mail, Drucker – entscheidest du im System-Dialog. Ab diesem Moment gilt die Datenschutzerklärung der von dir gewählten App bzw. des Dienstes.",
          ],
        },
        {
          heading: "3. Werbung (Google AdMob) und deine Einwilligung",
          paragraphs: [
            "Die App ist kostenlos und wird über Werbung finanziert. Dafür setzen wir **Google AdMob** ein, einen Dienst von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.",
            "Beim ersten Start zeigt dir die App einen **Einwilligungsdialog** (Google User Messaging Platform, UMP), der dem Transparency & Consent Framework des IAB Europe folgt. Erst wenn du dort entschieden hast, wird das Werbe-SDK überhaupt gestartet. Vorher baut die App keine Verbindung zu Google auf.",
          ],
          bullets: [
            {
              strong: "Stimmst du zu",
              text: "kann dir Google personalisierte Werbung ausspielen. Rechtsgrundlage: deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO bzw. § 25 Abs. 1 TDDDG.",
            },
            {
              strong: "Lehnst du ab",
              text: "bleibt die App vollständig nutzbar. Du siehst dann nicht personalisierte bzw. eingeschränkte Werbung, die ohne Profilbildung auskommt.",
            },
          ],
          trailingParagraphs: [
            "**Widerruf:** Deine Auswahl kannst du jederzeit ändern – in der App unter *Mehr → Über → Werbe-Einwilligung ändern*. Der Widerruf wirkt für die Zukunft.",
          ],
        },
        {
          heading: "Welche Daten Google dabei verarbeitet",
          level: 3,
          table: {
            columns: ["Datum", "Zweck"],
            rows: [
              {
                key: "Werbe-ID (Advertising ID)",
                value:
                  "Zuordnung der Auslieferung; von dir in den Android-Einstellungen zurücksetzbar oder löschbar",
              },
              {
                key: "IP-Adresse",
                value: "Verbindungsaufbau, grobe Region, Betrugsvermeidung",
              },
              {
                key: "Geräte- und Systemangaben",
                value:
                  "Gerätetyp, Betriebssystemversion, Spracheinstellung, Bildschirmformat – damit die Anzeige technisch passt",
              },
              {
                key: "Interaktion mit der Anzeige",
                value: "Einblendung, Klick, Abrechnung, Messung von Werbebetrug",
              },
              {
                key: "Einwilligungsstatus",
                value:
                  "Speicherung deiner Auswahl auf dem Gerät, damit du sie nicht bei jedem Start erneut treffen musst",
              },
            ],
          },
          trailingParagraphs: [
            "Wir selbst erhalten von Google nur aggregierte Abrechnungszahlen (Einblendungen, Klicks, Erlöse). Ein Rückschluss auf einzelne Personen ist uns damit nicht möglich.",
            "**Wichtig:** Die von dir erfassten Arbeitszeiten, Löhne, Zuschläge und persönlichen Angaben werden *nicht* an Google übermittelt und fließen nicht in die Auswahl der Werbung ein. Das Werbe-SDK hat keinen Zugriff auf die Datei, in der die App deine Schichten speichert.",
            "**Drittlandübermittlung:** Google kann Daten in den USA verarbeiten. Grundlage sind die Standardvertragsklauseln der EU-Kommission sowie die Zertifizierung von Google LLC unter dem EU-US Data Privacy Framework.",
            "Weitere Informationen: [Datenschutzerklärung von Google](https://policies.google.com/privacy) · [Wie Google Daten in AdMob verwendet](https://support.google.com/admob/answer/6128543) · [Google-Werbeeinstellungen](https://adssettings.google.com)",
          ],
        },
        {
          heading: "4. Keine Analyse, kein Tracking durch uns",
          paragraphs: [
            "Die App enthält **keine** Analyse-, Statistik- oder Absturzberichts-Dienste. Wir erfahren nicht, ob, wann oder wie du die App benutzt. Stürzt die App ab, wird der Fehlerbericht nur lokal angezeigt; ob du ihn uns per E-Mail schickst, entscheidest du.",
          ],
        },
        {
          heading: "5. Berechtigungen und wofür sie gebraucht werden",
          table: {
            columns: ["Berechtigung", "Zweck"],
            rows: [
              {
                key: "`INTERNET`, `ACCESS_NETWORK_STATE`",
                value: "Ausschließlich das Laden der Werbung und des Einwilligungsdialogs",
              },
              {
                key: "`com.google.android.gms.permission.AD_ID`",
                value: "Zugriff auf die Werbe-ID für die Auslieferung der Anzeigen",
              },
              {
                key: "`ACCESS_ADSERVICES_AD_ID`, `ACCESS_ADSERVICES_TOPICS`, `ACCESS_ADSERVICES_ATTRIBUTION`",
                value:
                  "Bestandteil der Android Privacy Sandbox. Sie werden vom Werbe-SDK mitgebracht und nur wirksam, wenn du der Werbung zugestimmt hast. Zweck ist die Auslieferung und Abrechnung der Anzeigen; auf App-Daten haben sie keinen Zugriff.",
              },
              {
                key: "`WAKE_LOCK`, `FOREGROUND_SERVICE`",
                value:
                  "Vom Werbe-SDK mitgebracht, damit Abrechnungssignale auch dann noch übertragen werden, wenn die Verbindung im Moment der Einblendung abgerissen war. Für die Arbeitszeitdaten spielt das keine Rolle.",
              },
              {
                key: "`POST_NOTIFICATIONS`",
                value:
                  "Nur wenn du den Schichtwecker oder Erinnerungen einschaltest. Wird erst in diesem Moment abgefragt, nicht beim ersten Start.",
              },
              {
                key: "`RECEIVE_BOOT_COMPLETED`",
                value: "Damit gestellte Wecker einen Neustart des Geräts überstehen",
              },
              {
                key: "`USE_BIOMETRIC`",
                value:
                  "Nur wenn du die App-Sperre aktivierst. Fingerabdruck und Gesichtsdaten bleiben im Sicherheitsbereich des Systems; die App sieht sie nie, sondern erhält vom System nur \u201eentsperrt\u201c oder \u201enicht entsperrt\u201c.",
              },
            ],
          },
          trailingParagraphs: [
            "Standortzugriff, Kontakte, Kamera, Mikrofon, Telefonstatus oder Zugriff auf deine Mediendateien fordert die App **nicht** an.",
          ],
        },
        {
          heading: "6. Speicherdauer",
          paragraphs: [
            "Deine Einträge bleiben so lange auf dem Gerät, bis du sie löschst oder die App deinstallierst – wir setzen keine Frist, weil steuer- und arbeitsrechtlich relevante Aufzeichnungen dir gehören, nicht uns. Der Einwilligungsstatus für Werbung wird lokal gespeichert und nach der von Google vorgesehenen Frist erneut abgefragt.",
          ],
        },
        {
          heading: "7. Deine Rechte",
          paragraphs: [
            "Dir stehen nach der DSGVO die Rechte auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21) zu, außerdem das Recht, eine erteilte Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3).",
            "Da wir deine Arbeitszeitdaten weder erheben noch speichern, können wir zu ihnen keine Auskunft erteilen und sie nicht löschen – du hast sie vollständig selbst in der Hand, in der App und über die Export-Funktion. Für die Daten, die im Rahmen der Werbeauslieferung bei Google anfallen, richtest du deine Anfrage bitte direkt an Google.",
            "Du hast außerdem das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde, etwa der für unseren Sitz zuständigen Landesbeauftragten für Datenschutz.",
          ],
        },
        {
          heading: "8. Kinder",
          paragraphs: [
            "Die App richtet sich an Erwerbstätige und nicht an Kinder unter 13 Jahren. Im Einwilligungsdialog ist sie entsprechend nicht als kindgerichtet gekennzeichnet.",
          ],
        },
        {
          heading: "9. Änderungen dieser Erklärung",
          paragraphs: [
            "Ändert sich der Funktionsumfang der App, passen wir diese Erklärung an. Maßgeblich ist die jeweils unter dieser Adresse veröffentlichte Fassung; das Datum oben zeigt den Stand.",
          ],
        },
        {
          heading: "10. Rechtlicher Hinweis zu den Berechnungen",
          paragraphs: [
            "Die App bildet Regelungen des Arbeitszeitgesetzes und die steuerfreien Zuschläge nach § 3b EStG ab. Sie liefert eine sorgfältige Rechenhilfe, aber keine Rechts- oder Steuerberatung; verbindlich sind dein Arbeitsvertrag, der geltende Tarifvertrag und die Abrechnung deines Arbeitgebers.",
          ],
        },
      ],
    },
    faq: [
      {
        q: "Wo werden meine Zeiten gespeichert?",
        a: "Ausschließlich im app-privaten Speicher deines Geräts, in einer JSON-Datei im internen Speicher. Andere Apps kommen nicht daran, und es gibt weder Konto noch Server. Auch die automatische Android-Sicherung in die Google-Cloud ist für diese App abgeschaltet.",
      },
      {
        q: "Die App zeigt Werbung — bekommt Google meine Arbeitszeiten?",
        a: "Nein. Das Werbe-SDK hat keinen Zugriff auf die Datei, in der die App deine Schichten speichert. An Google gehen nur die für die Anzeigenauslieferung nötigen Daten wie Werbe-ID, IP-Adresse und Geräteangaben. Deine Zeiten, Löhne und Zuschläge fließen nicht in die Auswahl der Werbung ein.",
      },
      {
        q: "Wie ändere ich meine Werbe-Einwilligung?",
        a: "In der App unter „Mehr → Über → Werbe-Einwilligung ändern“. Der Widerruf wirkt für die Zukunft. Lehnst du ab, bleibt die App vollständig nutzbar und zeigt nicht personalisierte Werbung.",
      },
      {
        q: "Was passiert bei einem Gerätewechsel?",
        a: "Exportiere deine Daten vor dem Wechsel über die Export-Funktion (CSV, ICS oder PDF) und übertrage die Datei auf das neue Gerät. Weil nichts in eine Cloud gesichert wird, gehen die Einträge beim Deinstallieren sonst verloren.",
      },
      {
        q: "Warum meldet sich der Schichtwecker nicht?",
        a: "Der Wecker braucht die Benachrichtigungs-Berechtigung, die erst beim Einschalten abgefragt wird. Prüfe außerdem, ob die Akku-Optimierung für die App eingeschränkt ist — viele Hersteller unterdrücken sonst geplante Alarme.",
      },
      {
        q: "Sind die berechneten Zuschläge rechtlich verbindlich?",
        a: "Nein. Die App bildet das Arbeitszeitgesetz und die steuerfreien Zuschläge nach § 3b EStG ab und ist als sorgfältige Rechenhilfe gedacht, aber sie ersetzt keine Rechts- oder Steuerberatung. Verbindlich sind dein Arbeitsvertrag, der geltende Tarifvertrag und die Abrechnung deines Arbeitgebers.",
      },
      {
        q: "Wie lösche ich alle Daten?",
        a: "Über „Alle Daten löschen“ in den Einstellungen oder durch Deinstallieren der App. Ein Widerruf uns gegenüber ist nicht nötig, weil wir diese Daten nie erhalten.",
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
