/**
 * TEXTE DER KARRIERESEITE (/karriere)
 * Reihenfolge entspricht der Seite von oben nach unten.
 * Ansprache der Bewerberinnen und Bewerber bewusst mit „Du“.
 */

export const meta = {
  title: 'Karriere im Vertrieb: Opener, Setter & Closer (m/w/d) | VALIORA',
  description:
    'Opener, Setter und Closer (m/w/d) für den Vertrieb von VALIORA – 100 % remote, ab 20 Stunden pro Woche, Fixum plus Provision. Festanstellung oder auf Rechnung. Bewerbung in rund drei Minuten.',
};

/** Kopfbereich */
export const hero = {
  badge: 'Ab sofort · 100 % remote',
  headlinePre: 'Vertrieb für ein Angebot, das ',
  headlineAccent: 'wirklich gebraucht wird',
  headlinePost: '.',
  subline:
    'Wir suchen Opener, Setter und Closer (m/w/d) für den Vertrieb von VALIORA – dem Marketing- und Recruiting-Partner für Pflegeunternehmen in Deutschland. Fixum plus Provision, in Festanstellung oder auf Rechnung.',
  factsEyebrow: 'Die Rahmenbedingungen',
  facts: [
    { label: '100 % remote, deutschlandweit', icon: 'mapPin' },
    { label: 'Ab 20 Stunden pro Woche', icon: 'clock' },
    { label: 'Festanstellung oder auf Rechnung', icon: 'shield' },
  ],
  ctaLabel: 'Jetzt bewerben',
  ctaHref: '#bewerbung',
  ctaNote: 'Rund 3 Minuten · kein Lebenslauf nötig',
  rolesIntro: 'Drei Rollen, ein Team:',
  roles: [
    { name: 'Opener', tag: 'Erstkontakt', href: '#rollen', icon: 'phone' },
    { name: 'Setter', tag: 'Qualifizierung', href: '#rollen', icon: 'target' },
    { name: 'Closer', tag: 'Abschluss', href: '#rollen', icon: 'doc' },
  ],
  /** Video-Platzhalter. Sobald es ein Video gibt: Einbettungs-URL (z. B. YouTube-embed) bei videoUrl eintragen. */
  videoLabel: 'Willkommensvideo der Geschäftsführung',
  videoNote: 'Folgt in Kürze',
  videoUrl: '',
};

/** Drei Rollen */
export const rollen = {
  anchorId: 'rollen',
  kicker: 'Drei Rollen',
  title: 'Welche Rolle passt zu ',
  titleAccent: 'dir',
  titleEnd: '?',
  subline:
    'Unser Vertrieb ist in drei saubere Schritte geteilt. Jeder macht das, was er am besten kann – statt dass eine Person alles gleichzeitig stemmt. Du bewirbst dich gezielt auf eine Rolle.',
  tasksLabel: 'Deine Aufgaben',
  fitLabel: 'Passt zu dir, wenn',
  items: [
    {
      name: 'Opener',
      tag: 'Schritt 1 · Erstkontakt',
      intro: 'Du machst den ersten Schritt: Du rufst Pflegeunternehmen aus unseren Outbound-Listen an und weckst Interesse an einem Gespräch.',
      tasks: [
        'Pflegedienste und Einrichtungen aus vorbereiteten Listen kontaktieren',
        'Interesse wecken und den richtigen Ansprechpartner finden',
        'Ergebnisse sauber in Close CRM dokumentieren',
      ],
      fit: 'du gerne telefonierst, ein Nein nicht persönlich nimmst und Ausdauer mitbringst.',
      icon: 'phone',
    },
    {
      name: 'Setter',
      tag: 'Schritt 2 · Qualifizierung',
      intro:
        'Du arbeitest mit allem, was reinkommt: mit den Kontakten der Opener und mit warmen Anfragen aus unseren eigenen Kampagnen. Kaltakquise machst du nicht.',
      tasks: [
        'Anfragen und Opener-Kontakte im Gespräch qualifizieren',
        'Situation, Bedarf und Zeitpunkt des Unternehmens verstehen',
        'Verbindliche Termine für unsere Closer legen',
      ],
      fit: 'du gut zuhörst, strukturiert nachfasst und Gespräche sauber führst.',
      icon: 'target',
    },
    {
      name: 'Closer',
      tag: 'Schritt 3 · Abschluss',
      intro: 'Du führst ausschließlich Closing-Calls mit vorqualifizierten Entscheidern – in der Regel Inhaber und Geschäftsführung von Pflegeunternehmen.',
      tasks: [
        'Vorqualifizierte Termine übernehmen und beraten',
        'Angebot präsentieren und Einwände sauber auflösen',
        'Abschluss digital über DocuSign auf den Weg bringen',
      ],
      fit: 'du auf Augenhöhe mit Unternehmern sprichst und Abschluss-Erfahrung mitbringst.',
      icon: 'doc',
    },
  ],
};

/** Das Angebot */
export const angebot = {
  kicker: 'Das Angebot',
  title: 'Du verkaufst etwas, das ',
  titleAccent: 'spürbar fehlt',
  titleEnd: '.',
  intro:
    'VALIORA ist der Marketing- und Recruiting-Partner für Pflegeunternehmen in Deutschland – für ambulante Dienste, stationäre Einrichtungen, Tagespflege und Intensivpflege.',
  para1:
    'Die zwei größten Probleme dieser Unternehmen sind seit Jahren dieselben: Sie finden keine Pflegekräfte und sie gewinnen zu wenige Klienten. Beides kostet sie unmittelbar Umsatz. Genau das lösen wir – mit Kampagnen, echten Mitarbeitervideos und einem Recruiting-System, das planbar Bewerbungen liefert.',
  para2:
    'Für dich im Gespräch heißt das: Du musst keinen Bedarf erfinden. Der Bedarf ist da, bevor du anrufst. Deine Aufgabe ist es, ihn sichtbar zu machen und den nächsten Schritt zu vereinbaren.',
  cardTitle: 'Das steht hinter dir',
  cardNote: 'Kein Produkt, das du schönreden musst – und keine Branche, die morgen wieder verschwunden ist.',
  items: [
    'Ein Angebot mit klarem Ergebnis: mehr Bewerbungen, mehr Klienten',
    'Warme Anfragen aus unseren eigenen Kampagnen',
    'Vorbereitete Outbound-Listen statt kalter Zufallsnummern',
    'Close CRM, Gesprächsleitfäden und Vorlagen ab dem ersten Tag',
    'Digitaler Vertragsabschluss über DocuSign',
    'Ein Team, das dich einarbeitet und dauerhaft begleitet',
  ],
};

/** Vorteile */
export const vorteile = {
  kicker: 'Deine Vorteile',
  title: 'Was dich bei ',
  titleAccent: 'VALIORA',
  titleEnd: ' erwartet',
  subline: 'Kein Start-up-Chaos und keine Klingelputz-Romantik. Ein aufgeräumter Vertrieb, in dem jeder weiß, was zu tun ist.',
  items: [
    { title: '100 % remote', text: 'Arbeite von überall in Deutschland. Feste Bürozeiten gibt es nicht – verbindliche Absprachen schon.', icon: 'laptop' },
    { title: 'Ab 20 Stunden pro Woche', text: 'Voll- oder Teilzeit. Sag uns, welchen Umfang du leisten kannst, und wir bauen den Rest darum herum.', icon: 'clock' },
    { title: 'Fixum plus Provision', text: 'Ein fester Sockel und eine Beteiligung an dem, was du bewegst. In Festanstellung oder auf Rechnung.', icon: 'euro' },
    { title: 'Vorbereitete Leads', text: 'Warme Anfragen aus unseren eigenen Kampagnen und saubere Outbound-Listen. Kein Blättern im Branchenbuch.', icon: 'target' },
    { title: 'Klare Prozesse', text: 'Close CRM, Gesprächsleitfäden, Vorlagen und digitaler Abschluss über DocuSign. Jeder Schritt ist definiert.', icon: 'list' },
    { title: 'Einarbeitung mit Begleitung', text: 'Strukturiertes Onboarding, Gesprächsfeedback und feste Ansprechpartner statt Sprung ins kalte Wasser.', icon: 'users' },
    { title: 'Entwicklung nach Leistung', text: 'Vom Opener zum Setter, vom Setter zum Closer. Wer liefert, bekommt bei uns den nächsten Schritt.', icon: 'trend' },
    { title: 'Eine Branche mit Substanz', text: 'Am Ende der Kette stehen Pflegekräfte und Menschen, die versorgt werden. Das trägt auch an zähen Tagen.', icon: 'heart' },
  ],
};

/** Vergütung */
export const verguetung = {
  kicker: 'Vergütung',
  title: 'Festes Fixum plus Provision für jedes ',
  titleAccent: 'Ergebnis, das zählt',
  titleEnd: '.',
  subline: 'Zwei Bausteine, die jeder versteht. Keine verschachtelten Stufen, keine versteckten Bedingungen.',
  items: [
    { title: 'Sichere Basis', text: 'Ein festes Fixum, auf das du dich jeden Monat verlassen kannst – unabhängig von Tagesform und Saison.' },
    { title: 'Provision für Ergebnisse', text: 'Beteiligt wirst du an dem, was in deiner Rolle wirklich zählt: gehaltene Termine und geschlossene Verträge.' },
    { title: 'Für alle dieselben Regeln', text: 'Du siehst jederzeit, wo du stehst. Gleiche Bedingungen für alle, die dieselbe Rolle ausfüllen.' },
  ],
  note: 'Konkrete Zahlen besprechen wir offen im ersten Gespräch – sie hängen von Rolle, Umfang und Form der Zusammenarbeit ab.',
  ctaLabel: 'Jetzt bewerben',
  ctaHref: '#bewerbung',
};

/** Entwicklungsweg */
export const entwicklung = {
  kicker: 'Entwicklung',
  title: 'Dein Weg bei ',
  titleAccent: 'VALIORA',
  titleEnd: '',
  subline:
    'Du steigst dort ein, wo deine Erfahrung passt – und bleibst dort nicht stehen. Wie schnell der nächste Schritt kommt, entscheiden deine Ergebnisse, nicht deine Wartezeit.',
  steps: [
    { stage: 'Einstieg', title: 'Opener', text: 'Du lernst Zielgruppe, Angebot und unsere Gesprächsführung am Telefon von Grund auf kennen.' },
    { stage: 'Aufbau', title: 'Setter', text: 'Du übernimmst warme Anfragen, qualifizierst eigenständig und legst verbindliche Termine.' },
    { stage: 'Verantwortung', title: 'Closer', text: 'Du führst Abschlussgespräche mit Inhabern und Geschäftsführung – der Kern unseres Vertriebs.' },
    { stage: 'Perspektive', title: 'Teamverantwortung', text: 'Du arbeitest neue Kolleginnen und Kollegen ein und verantwortest Ergebnisse im Team.' },
  ],
};

/**
 * Ablauf der Bewerbung
 * Hinweis: Im Onepage-Original war Schritt 2 „Kurzes Video aufnehmen“. Das Video entfällt
 * (Kundenentscheidung „ohne Video“), daher drei Schritte und angepasste Texte.
 */
export const ablauf = {
  kicker: 'Ablauf',
  title: 'So läuft deine ',
  titleAccent: 'Bewerbung',
  titleEnd: '',
  subline: 'Drei Schritte, keine Formularschlacht. Du brauchst weder Lebenslauf noch Anschreiben.',
  ctaLabel: 'Jetzt bewerben',
  ctaHref: '#bewerbung',
  steps: [
    {
      title: 'Kurzbewerbung ausfüllen',
      text: 'Vier Schritte, rund drei Minuten. Du wählst deine Rolle und beantwortest ein paar Fragen zu Erfahrung und Verfügbarkeit.',
    },
    {
      title: 'Wir melden uns',
      text: 'Du bekommst in jedem Fall eine Rückmeldung. Das kann einige Tage dauern, weil wir uns jede Bewerbung persönlich ansehen.',
    },
    {
      title: 'Kennenlernen und Start',
      text: 'Ein Videocall, in dem wir Rolle, Umfang und Vergütung offen besprechen. Passt es für beide Seiten, startest du mit dem Onboarding.',
    },
  ],
};

/**
 * Häufige Fragen
 * Die Original-Frage „Warum ein Video statt Lebenslauf?“ ist ohne Video-Schritt hinfällig
 * und wurde durch „Brauche ich einen Lebenslauf?“ ersetzt.
 */
export const faq = {
  kicker: 'Häufige Fragen',
  title: 'Bevor du dich ',
  titleAccent: 'bewirbst',
  titleEnd: '',
  subline: 'Die Fragen, die uns am häufigsten gestellt werden – offen beantwortet.',
  ctaLabel: 'Jetzt bewerben',
  ctaHref: '#bewerbung',
  items: [
    { question: 'Brauche ich Erfahrung im Vertrieb?', answer: 'Für den Einstieg als Opener nicht zwingend. Wichtiger sind Sprache, Verlässlichkeit und die Bereitschaft, viel zu telefonieren. Für Setter und Closer setzen wir belastbare Gesprächserfahrung voraus.' },
    { question: 'Muss ich mich in der Pflegebranche auskennen?', answer: 'Nein. Das Fachwissen bringen wir dir im Onboarding bei. Du musst verstehen, wie ein Pflegeunternehmen denkt – nicht, wie ein Pflegedienst abrechnet.' },
    { question: 'Festanstellung oder auf Rechnung?', answer: 'Beides ist möglich. Sag uns im Gespräch, was besser zu deiner Situation passt – daran soll es nicht scheitern.' },
    { question: 'Wie viele Stunden muss ich einbringen?', answer: 'Mindestens 20 Stunden pro Woche. Nach oben ist alles offen, viele im Team arbeiten in Vollzeit.' },
    { question: 'Geht das auch nebenberuflich?', answer: 'Ja, wenn du deine Stunden verlässlich innerhalb unserer Callzeiten unterbringst. Vertrieb funktioniert nicht abends um 22 Uhr.' },
    { question: 'Wo arbeite ich?', answer: 'Vollständig remote, von überall in Deutschland. Du brauchst einen ruhigen Arbeitsplatz, stabiles Internet, einen Laptop und ein Headset.' },
    { question: 'Welche Deutschkenntnisse sind nötig?', answer: 'Du sprichst den ganzen Tag mit Inhabern und Geschäftsführungen. Sehr sicheres Deutsch ist deshalb entscheidend – wir fragen dein Niveau in der Bewerbung direkt ab.' },
    { question: 'Brauche ich einen Lebenslauf?', answer: 'Nein. Weil im Vertrieb zählt, wie du sprichst, lernen wir dich lieber im Gespräch kennen als über drei Seiten Anschreiben. Die Kurzbewerbung reicht völlig.' },
    { question: 'Wie schnell höre ich von euch?', answer: 'Du bekommst in jedem Fall eine Antwort. Das kann einige Tage dauern, weil wir jede Bewerbung persönlich sichten.' },
    { question: 'Mit welchen Tools arbeite ich?', answer: 'Close CRM für alle Gespräche und Kontakte, DocuSign für Abschlüsse. Beides zeigen wir dir im Onboarding Schritt für Schritt.' },
  ],
};

/**
 * Bewerbungsformular (Quiz)
 * Die Antworttexte werden genau so in die Bewerbungs-Mail übernommen.
 * Original hatte 5 Schritte inkl. Video-Upload – das Video entfällt, daher 4 Schritte.
 */
export const quiz = {
  anchorId: 'bewerbung',
  kicker: 'Bewerbung',
  title: 'Bewirb dich in ',
  titleAccent: 'drei Minuten',
  titleEnd: '.',
  subline: 'Vier kurze Schritte. Kein Lebenslauf, kein Anschreiben – nur das, was wir wirklich wissen müssen.',

  /** Schritt 1 · Rolle */
  q1Title: 'Auf welche Rolle bewirbst du dich?',
  q1Hint: 'Wähle die Rolle, die am besten zu deiner Erfahrung passt.',
  roleOptions: [
    { name: 'Opener', tag: 'Erstkontakt am Telefon', icon: 'phone' },
    { name: 'Setter', tag: 'Qualifizierung und Termine', icon: 'target' },
    { name: 'Closer', tag: 'Abschlussgespräche', icon: 'doc' },
  ],

  /** Schritt 2 · Erfahrung */
  q2Title: 'Wie viel Erfahrung hast du in genau dieser Rolle?',
  q2Options: ['Noch keine', 'Unter 1 Jahr', '1 bis 3 Jahre', 'Mehr als 3 Jahre'],
  q3Title: 'Woher kommt deine Vertriebserfahrung?',
  /** hidesCrm: true = die CRM-Frage wird bei dieser Antwort übersprungen */
  q3Options: [
    { label: 'Telefonvertrieb B2B', hidesCrm: false },
    { label: 'Telefonvertrieb B2C', hidesCrm: false },
    { label: 'Außendienst / Field Sales', hidesCrm: false },
    { label: 'Agentur-, Coaching- oder Dienstleistungsumfeld', hidesCrm: false },
    { label: 'Kundenservice / Inbound', hidesCrm: false },
    { label: 'Noch keine Vertriebserfahrung', hidesCrm: true },
  ],
  q4Title: 'Mit welchem CRM hast du bisher gearbeitet?',
  q4Options: ['Close CRM', 'HubSpot', 'Pipedrive', 'Salesforce', 'Anderes CRM', 'Noch keins'],

  /** Schritt 3 · Sprache, Zeit, Start & Technik */
  q5Title: 'Wie gut ist dein Deutsch?',
  q5Hint: 'Du sprichst täglich mit Inhabern und Geschäftsführungen von Pflegeunternehmen.',
  q5Options: ['B1', 'B2', 'C1', 'C2', 'Muttersprachler'],
  q6Title: 'Wie viele Stunden pro Woche kannst du einbringen?',
  q6Options: ['20 bis 29 Stunden', '30 bis 39 Stunden', '40 Stunden oder mehr'],
  q7Title: 'Wann könntest du starten?',
  q7Options: ['Sofort', 'In 2 bis 4 Wochen', 'In 1 bis 3 Monaten', 'Später als 3 Monate'],
  q8Title: 'Wie möchtest du mit uns zusammenarbeiten?',
  q8Options: ['Festanstellung', 'Auf Rechnung / selbstständig', 'Beides möglich'],
  q9Title: 'Hast du Laptop, Headset, stabiles Internet und einen ruhigen Arbeitsplatz?',
  q9Options: ['Alles vorhanden', 'Teilweise vorhanden', 'Noch nichts vorhanden'],

  /** Schritt 4 · Kontakt & Abschluss */
  contactTitle: 'Wie erreichen wir dich?',
  contactHint: 'Wir melden uns per E-Mail oder telefonisch bei dir.',
  firstNameLabel: 'Vorname',
  lastNameLabel: 'Nachname',
  emailLabel: 'E-Mail-Adresse',
  phoneLabel: 'Telefonnummer',
  noteLabel: 'Anmerkung (optional)',
  consentText: 'Ich bin mit der Verarbeitung meiner Daten zum Zweck der Bewerbung einverstanden. Es gelten die ',
  privacyLabel: 'Datenschutzhinweise',
  submitLabel: 'Bewerbung absenden',
  submittingLabel: 'Wird gesendet …',

  /** Navigation & Fehlertexte */
  backLabel: 'Zurück',
  nextLabel: 'Weiter',
  progressLabel: 'Schritt',
  progressOf: 'von',
  errorChoice: 'Bitte triff eine Auswahl.',
  errorText: 'Bitte ausfüllen.',
  errorEmail: 'Bitte gib eine gültige E-Mail-Adresse an.',
  errorConsent: 'Bitte bestätige die Datenschutzhinweise.',
  errorSubmit: 'Da ist etwas schiefgelaufen. Bitte versuche es noch einmal.',

  /** Weiterleitung nach erfolgreichem Absenden */
  successHref: '/karriere-danke',
};

/** Footer */
export const footer = {
  tagline: 'VALIORA – Partner für Pflegeunternehmen',
  copyright: '© 2026 VALIORA. Alle Rechte vorbehalten.',
};
