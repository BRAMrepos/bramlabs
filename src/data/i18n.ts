/**
 * UI strings for product pages.
 *
 * A product declares `locale` in software.ts; its own pages then render in
 * that language. Only the product-page chrome is translated — the rest of the
 * site stays English, because only the product documentation needs to be
 * readable by the people who use that product.
 */
import type { Locale } from "@/data/software";

export type ProductStrings = {
  /** BCP 47 tag for <html lang>. */
  htmlLang: string;
  /** Locale tag for date formatting. */
  dateLocale: string;
  navOverview: string;
  navSupport: string;
  navPrivacy: string;
  navChangelog: string;
  breadcrumbRoot: string;
  effective: string;
  platformLabel: string;
  runsOnLabel: string;
  statusInReview: string;
  getIt: string;
  whatItDoes: string;
  privacyEyebrow: string;
  readFullPolicy: string;
  troubleHeading: string;
  troubleBody: (title: string) => string;
  supportCta: (title: string) => string;
  reportBug: string;
  commonQuestions: string;
  sitePolicyNote: string;
  notYetListed: string;
  bugHeading: string;
  bugIntro: string;
  bugBullets: (title: string) => string[];
  bugResponse: string;
  securityHeading: string;
  securityBody: string;
  securityLink: string;
  installHeading: string;
  installBody: (title: string, platform: string) => string;
  installOfficial: (platform: string) => string;
  getInTouch: string;
  contactCardBody: (title: string) => string;
  sendFeedback: string;
  privacyPolicyLink: string;
  storeListing: (platform: string) => string;
  allSoftware: string;
};

const en: ProductStrings = {
  htmlLang: "en",
  dateLocale: "en-GB",
  navOverview: "Overview",
  navSupport: "Support",
  navPrivacy: "Privacy",
  navChangelog: "Changelog",
  breadcrumbRoot: "Software",
  effective: "Effective",
  platformLabel: "Platform",
  runsOnLabel: "Runs on",
  statusInReview: "In store review",
  getIt: "Get",
  whatItDoes: "What it does",
  privacyEyebrow: "Privacy",
  readFullPolicy: "Read the full policy →",
  troubleHeading: "Something not working?",
  troubleBody: (title) =>
    `Support answers the common questions and says exactly what to include in a bug report. If you would rather just send it, the feedback form routes straight to ${title}.`,
  supportCta: (title) => `${title} support`,
  reportBug: "Report a bug",
  commonQuestions: "Common questions",
  sitePolicyNote: "Site-wide privacy policy",
  notYetListed:
    "This app is in store review. It has no public listing yet — its documentation is published here in advance.",
  bugHeading: "Reporting a bug",
  bugIntro:
    "A report gets fixed faster when it says what you expected and what happened instead. Include:",
  bugBullets: (title) => [
    `The product name (${title}) and its version, if you can see it`,
    "Your device or browser, and its version",
    "What you were doing when it went wrong",
    "What you expected to happen, and what happened instead",
    "A screenshot if it helps — with any passwords or personal details cropped out",
  ],
  bugResponse:
    "Reports are usually answered within a few business days. There is no support account to create.",
  securityHeading: "Reporting a security issue",
  securityBody:
    "Do not post vulnerability details publicly. Send them to support@bramlabs.co with “Security” in the subject line.",
  securityLink: "What to include and what to expect →",
  installHeading: "Installing safely",
  installBody: (title, platform) =>
    `Install ${title} only from its official ${platform} listing. Third-party APK sites and extension mirrors repackage builds and cannot be verified — anything installed from one of those is not supported.`,
  installOfficial: (platform) => `its official ${platform} listing`,
  getInTouch: "Get in touch",
  contactCardBody: (title) =>
    `The feedback form routes straight to ${title}, so you do not have to explain which product you mean.`,
  sendFeedback: "Send feedback",
  privacyPolicyLink: "Privacy policy",
  storeListing: (platform) => `${platform} listing ↗`,
  allSoftware: "All BramLabs software",
};

const de: ProductStrings = {
  htmlLang: "de",
  dateLocale: "de-DE",
  navOverview: "Überblick",
  navSupport: "Hilfe",
  navPrivacy: "Datenschutz",
  navChangelog: "Änderungen",
  breadcrumbRoot: "Software",
  effective: "Stand",
  platformLabel: "Plattform",
  runsOnLabel: "Läuft auf",
  statusInReview: "In Prüfung",
  getIt: "Laden:",
  whatItDoes: "Was die App macht",
  privacyEyebrow: "Datenschutz",
  readFullPolicy: "Vollständige Datenschutzerklärung →",
  troubleHeading: "Etwas funktioniert nicht?",
  troubleBody: (title) =>
    `Auf der Hilfeseite stehen die häufigsten Fragen und was in eine Fehlermeldung gehört. Wenn du sie lieber direkt schickst: das Formular ist bereits auf ${title} eingestellt.`,
  supportCta: (title) => `Hilfe zu ${title}`,
  reportBug: "Fehler melden",
  commonQuestions: "Häufige Fragen",
  sitePolicyNote: "Datenschutzerklärung der Website",
  notYetListed:
    "Diese App befindet sich in der Store-Prüfung. Es gibt noch keine öffentliche Store-Seite — die Dokumentation ist hier vorab veröffentlicht.",
  bugHeading: "Fehler melden",
  bugIntro:
    "Ein Fehler lässt sich schneller beheben, wenn klar ist, was du erwartet hast und was stattdessen passiert ist. Bitte nenne:",
  bugBullets: (title) => [
    `Den Namen der App (${title}) und die Versionsnummer, falls sichtbar`,
    "Dein Gerät und die Android-Version",
    "Was du gemacht hast, als der Fehler auftrat",
    "Was du erwartet hast und was stattdessen passiert ist",
    "Bei Bedarf einen Screenshot — ohne Passwörter oder persönliche Daten",
  ],
  bugResponse:
    "Antwort erfolgt in der Regel innerhalb weniger Werktage. Ein Konto ist dafür nicht nötig.",
  securityHeading: "Sicherheitslücke melden",
  securityBody:
    "Bitte veröffentliche Details zu Sicherheitslücken nicht. Schicke sie an support@bramlabs.co mit „Security“ im Betreff.",
  securityLink: "Was hineingehört und was danach passiert →",
  installHeading: "Sicher installieren",
  installBody: (title, platform) =>
    `Installiere ${title} ausschließlich über die offizielle ${platform}-Seite. Fremde APK-Seiten packen Builds neu und lassen sich nicht überprüfen — solche Installationen werden nicht unterstützt.`,
  installOfficial: (platform) => `die offizielle ${platform}-Seite`,
  getInTouch: "Kontakt",
  contactCardBody: (title) =>
    `Das Formular ist bereits auf ${title} eingestellt — du musst nicht erklären, um welche App es geht.`,
  sendFeedback: "Rückmeldung senden",
  privacyPolicyLink: "Datenschutzerklärung",
  storeListing: (platform) => `${platform}-Seite ↗`,
  allSoftware: "Alle BramLabs-Apps",
};

const TABLE: Record<Locale, ProductStrings> = { en, de };

export function strings(locale: Locale = "en"): ProductStrings {
  return TABLE[locale] ?? en;
}
