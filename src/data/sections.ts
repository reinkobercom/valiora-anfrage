/**
 * SEITEN & SEKTIONEN EIN-/AUSSCHALTEN
 * -------------------------------------------------------------
 * true  = wird angezeigt
 * false = wird ausgeblendet (bleibt aber im Code erhalten und kann jederzeit
 *         wieder eingeschaltet werden)
 *
 * Eine ganze Seite mit `enabled: false` wird gar nicht gebaut (Aufruf ergibt 404)
 * und steht nicht in der sitemap.xml.
 */

export const pages = {
  /** Startseite – Region sichern */
  '/': {
    enabled: true,
    noindex: false,
    sections: {
      hero: true, //               Kopfbereich mit Formular „Ist Ihre Region noch frei?“
      beweis: true, //             Ergebnis Pflegeteam Kaiser + laufende Stimmen-Leiste
      schmerz: true, //            „Kommt Ihnen das bekannt vor?“ – drei Situationen
      mechanismus: true, //        „Warum wir uns limitieren“ + Leistungsumfang
      ansprechpartner: true, //    Simon Reinkober + „Das ist nicht für jeden“
      verlust: true, //            „Was es kostet, zu warten“
      faq: true, //                Häufige Fragen (Akkordeon)
      abschluss: true, //          Letzter Aufruf + Footer
    },
  },

  /** Kurzversion (Squeeze-Page) */
  '/kurz': {
    enabled: true,
    noindex: false,
    sections: {
      hero: true, //               Kopfbereich mit Formular
      beweis: true, //             „7 neue Mitarbeitende“, Leistungen, Footer
    },
  },

  /** Dankeseite nach dem Absenden – bewusst nicht in Google */
  '/danke': {
    enabled: true,
    noindex: true,
    sections: {
      danke: true, //             Bestätigung, nächste Schritte, Kontakt
    },
  },

  /** KI Regio System – in Onepage unveröffentlicht, daher hier ausgeschaltet */
  '/ki-regio-system': {
    enabled: false,
    noindex: false,
    sections: {
      hero: true, //               01 Deckblatt
      system: true, //             02 Das System – Schaubild
      nutzen: true, //             03 Nutzen – drei Punkte
      leistungen: true, //         04 Was wir übernehmen
      ablauf: true, //             05 Ablauf – drei Schritte
      modell: true, //             06 Warum das Modell aufgeht
      versickern: true, //         07 Warum Anfragen versickern
      terminkriterien: true, //    08 Terminkriterien & Ihre Seite
      vergleich: true, //          09 Vergleich der Modelle
      verguetung: true, //         10 Vergütungslogik
      sicherheit: true, //         11 Sicherheit & Datenhoheit
      ansprechpartner: true, //    12 Ansprechpartner
      footer: true, //             13 Footer
    },
  },

  /** Karriere – in Onepage unveröffentlicht, daher hier ausgeschaltet */
  '/karriere': {
    enabled: false,
    noindex: false,
    sections: {
      hero: true, //               Karriere Hero
      rollen: true, //             Rollen
      angebot: true, //            Das Angebot
      vorteile: true, //           Vorteile
      verguetung: true, //         Vergütung
      entwicklung: true, //        Entwicklungsweg
      ablauf: true, //             Ablauf der Bewerbung
      faq: true, //                FAQ
      quiz: true, //               Bewerbungsformular (Quiz)
      footer: true, //             Footer
    },
  },

  /** Dankeseite Karriere – in Onepage unveröffentlicht */
  '/karriere-danke': {
    enabled: false,
    noindex: true,
    sections: {
      danke: true, //             Bestätigung
    },
  },
} as const;

export type PagePath = keyof typeof pages;

/** Hilfsfunktion: Ist eine Sektion auf einer Seite eingeschaltet? */
export function show<P extends PagePath>(page: P, section: keyof (typeof pages)[P]['sections']): boolean {
  return Boolean((pages[page].sections as Record<string, boolean>)[section as string]);
}
