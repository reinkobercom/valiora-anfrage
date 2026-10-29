/**
 * ZENTRALE STAMMDATEN
 * -------------------------------------------------------------
 * Hier pflegen Sie Kontaktdaten, Rechtslinks, Formular-Empfänger und Tracking.
 * Nach dem Speichern und Pushen baut Vercel die Seite automatisch neu.
 */

export const site = {
  name: 'VALIORA',
  claim: 'Partner für Pflegeunternehmen',
  url: 'https://go.valiora-partner.de',
  lang: 'de',
  copyright: '© VALIORA — Partner für Pflegeunternehmen',

  /** Kontaktdaten – so wie sie auf der Seite erscheinen */
  contact: {
    /** Telefon wird überall gleich angezeigt; der Wählen-Link entfernt Leerzeichen automatisch */
    phone: '+49 160 96088604',
    /** Adresse im Footer und auf der Dankeseite */
    email: 'hallo@valiora-partner.de',
    /** Persönliche Adresse im Ansprechpartner-Block */
    personEmail: 'simon@valiora-partner.de',
  },

  /** Ansprechpartner */
  person: {
    name: 'Simon Reinkober',
    role: 'Geschäftsführer · VALIORA',
  },

  /** Rechtliche Links (liegen auf der Hauptdomain) */
  legal: {
    impressum: 'https://valiora-partner.de/impressum',
    datenschutz: 'https://valiora-partner.de/datenschutz',
  },

  /** Social-Media-Profile (derzeit keine auf der Seite verlinkt) */
  social: {} as Record<string, string>,

  /** Öffnungszeiten (derzeit nicht auf der Seite angezeigt) */
  openingHours: [] as { days: string; hours: string }[],

  /**
   * FORMULAR-E-MAILS
   * Empfänger ändern: Adressen in `to` anpassen, speichern, pushen – fertig.
   * Absender muss eine in Resend verifizierte Domain sein.
   */
  mail: {
    from: 'VALIORA Anfragen <leads@reinkober-leadportal.com>',
    fromKarriere: 'VALIORA Karriere <leads@reinkober-leadportal.com>',
    to: ['simon@reinkober.com', 'leads@reinkober.agency'],
    /** Empfänger für Bewerbungen aus dem Karriere-Formular */
    toKarriere: ['simon@reinkober.com', 'leads@reinkober.agency'],
  },

  /** Tracking – Meta-Pixel lädt erst nach Zustimmung im Cookie-Banner */
  tracking: {
    metaPixelId: '989118056833217',
  },
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
