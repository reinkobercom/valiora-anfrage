/**
 * TEXTE DER SEITE „KI REGIO SYSTEM“ (/ki-regio-system)
 * Reihenfolge entspricht der Seite von oben nach unten.
 * Überschriften mit hervorgehobenem Teil: titleStart + titleAccent (Goldfarbe) + titleEnd.
 */

export const meta = {
  title: 'KI Regio System | VALIORA – Partner für Pflegeunternehmen',
  description:
    'Vorqualifizierte Termine mit Interessenten aus Ihrer Region: ein Partner je Region und Versorgungsform, Vergütung überwiegend leistungsabhängig.',
};

/** 01 Deckblatt */
export const hero = {
  systemName: 'VALIORA KI Regio System',
  badge: 'Partnermodell für Pflegeunternehmen',
  headlineStart: 'Sie bekommen ',
  headlineAccent: 'vorqualifizierte Termine',
  headlineEnd: ' mit Interessenten aus Ihrer Region.',
  subline:
    'Diese Seite erklärt, was Sie von uns erhalten, was bei Ihnen bleibt und warum unsere Zusammenarbeit anders funktioniert als ein klassischer Agenturvertrag.',
  bullets: [
    'Termine statt Kontaktlisten – jeder Interessent wird vorher von uns geprüft.',
    'Ein Partner je Region und Versorgungsform. Kein Wettbewerb aus dem eigenen Haus.',
    'Kein hoher Agentur-Retainer – der Hauptteil der Vergütung ist leistungsabhängig.',
  ],
  tags: ['Ambulante Pflege', 'Stationäre Einrichtungen', 'Intensivpflege', 'Tagespflege'],
  coverLabel: 'Unterlage',
  coverTitle: 'Zusammenarbeit und Leistungsumfang im Überblick',
  coverRows: [
    { label: 'Für', value: 'Inhaber und Geschäftsführung von Pflegeunternehmen' },
    { label: 'Inhalt', value: 'Was wir liefern, was bei Ihnen bleibt, wie wir abrechnen' },
    { label: 'Region', value: 'Ein Partner je Region und Versorgungsform' },
    { label: 'Stand', value: 'August 2026' },
  ],
  coverNote:
    'Diese Seite dient der Information. Sie enthält kein verbindliches Angebot und keine Preisliste – die konkreten Konditionen besprechen wir persönlich.',
};

/** 02 Das System – Schaubild */
export const system = {
  kicker: 'Das System',
  titleStart: 'Warum das ',
  titleAccent: 'VALIORA KI Regio System',
  titleEnd: ' für Pflegeunternehmen funktioniert',
  subline:
    'Zwischen den Menschen, die in Ihrer Region nach Versorgung suchen, und Ihrem Betrieb liegt heute meist ein Zufall. Genau diese Stelle besetzen wir.',
  leftLabel: 'Ihre Region',
  leftCaption: 'Angehörige mit akutem Bedarf',
  centerLabel: 'KI Regio System',
  centerCaption: 'Aufnehmen. Prüfen. Termin.',
  rightLabel: 'Ihr Unternehmen',
  rightCaption: 'Termine statt Telefonlisten',
  footnote: 'Ein Partner je Region und Versorgungsform.',
};

/** 03 Nutzen – drei Punkte (icon: Symbolname aus src/components/ui/Icon.astro) */
export const nutzen = {
  kicker: 'Was Sie davon haben',
  titleStart: 'Drei Dinge ändern sich ',
  titleAccent: 'spürbar',
  titleEnd: ' in Ihrem Alltag',
  items: [
    {
      icon: 'trend',
      title: 'Mehr Aufnahmen ohne Mehraufwand',
      text: 'Sie führen Beratungsgespräche, statt Kontaktlisten abzutelefonieren. Die Arbeit davor liegt bei uns.',
    },
    {
      icon: 'search',
      title: 'Geprüft, bevor es Sie erreicht',
      text: 'Anfragen ohne Versorgungsbedarf oder außerhalb Ihres Gebiets landen gar nicht erst auf Ihrem Tisch.',
    },
    {
      icon: 'mapPin',
      title: 'Nur aus Ihrem Einzugsgebiet',
      text: 'Wir arbeiten regional. Was Sie ohnehin nicht versorgen können, brauchen Sie auch nicht zu bewerten.',
    },
  ],
};

/** 04 Was wir übernehmen – Fließtext */
export const leistungen = {
  kicker: 'Das VALIORA KI Regio System',
  titleStart: 'Was wir ',
  titleAccent: 'übernehmen',
  titleEnd: ' – und was Sie davon merken',
  paragraphs: [
    'Wir haben ein System gebaut, das ausschließlich für Pflegeunternehmen gedacht ist. Es sorgt dafür, dass Menschen mit akutem Versorgungsbedarf in Ihrer Region auf Sie aufmerksam werden – und dass aus einer Anfrage ein Termin wird, ohne dass Sie dabei etwas tun müssen.',
    'Der entscheidende Teil passiert vor Ihrem Kalender. Jede Anfrage wird aufgenommen, eingeordnet und gegen Ihre Aufnahmekriterien geprüft. Was nicht passt, erreicht Sie nicht. Was passt, kommt als Termin – mit allem, was Sie für das Gespräch wissen müssen.',
    'Für Sie heißt das: keine Kontaktlisten, kein Nachtelefonieren am Abend, keine Diskussion über Lead-Qualität. Sie öffnen Ihren Kalender und führen Gespräche mit Menschen, die bereits gesagt haben, was sie brauchen.',
  ],
  closing:
    'Wie genau wir das technisch umsetzen, besprechen wir im persönlichen Gespräch. Auf dieser Seite geht es um das Ergebnis.',
};

/** 05 Ablauf – drei Schritte (visual: 'region' | 'pruefung' | 'termin') */
export const ablauf = {
  kicker: 'Der Ablauf',
  titleStart: 'In drei Schritten zum ',
  titleAccent: 'fertigen Termin',
  titleEnd: '',
  subline: 'Zwei der drei Schritte laufen vollständig bei uns. Sie kommen erst im dritten ins Spiel.',
  steps: [
    {
      visual: 'region',
      owner: 'VALIORA',
      title: 'Erkennen',
      text: 'Menschen, die in Ihrer Region gerade nach Versorgung suchen, werden auf Ihr Unternehmen aufmerksam – zu der Tageszeit, zu der sie tatsächlich suchen, nicht erst am nächsten Werktag.',
    },
    {
      visual: 'pruefung',
      owner: 'VALIORA',
      title: 'Qualifizieren',
      text: 'Wir nehmen jede Anfrage strukturiert auf und prüfen sie gegen Ihre Aufnahmekriterien: Einzugsgebiet, Versorgungsform, Bedarf, gewünschter Startzeitpunkt.',
    },
    {
      visual: 'termin',
      owner: 'Sie',
      title: 'Übergeben',
      text: 'Sie erhalten einen abgestimmten Termin samt Kurzprofil des Interessenten. Ihre Aufgabe beginnt genau hier – beim Gespräch.',
    },
  ],
  checkHead: 'Prüfung',
  checkRows: ['Im Einzugsgebiet', 'Versorgungsbedarf vorhanden', 'Passende Versorgungsform', 'Startzeitpunkt absehbar'],
  terminHead: 'Termin',
  terminRows: [
    { label: 'Ort', value: 'Ihr Einzugsgebiet' },
    { label: 'Versorgung', value: 'Ambulant' },
    { label: 'Start', value: 'Kurzfristig' },
    { label: 'Gespräch', value: 'Bestätigt' },
  ],
};

/** 06 Warum das Modell aufgeht */
export const modell = {
  kicker: 'Die Logik dahinter',
  titleStart: 'Warum dieses Modell für Sie ',
  titleAccent: 'aufgeht',
  titleEnd: '',
  subline: 'Drei Entscheidungen, die wir bewusst anders getroffen haben als der Markt.',
  items: [
    {
      icon: 'clock',
      title: 'Sie bestimmen die Menge',
      text: 'Termine richten sich nach Ihrer Kapazität, nicht nach unserem Umsatzinteresse. Nach oben gibt es einen vereinbarten Deckel.',
    },
    {
      icon: 'trend',
      title: 'Wir verdienen erst mit dem Ergebnis',
      text: 'Der überwiegende Teil unserer Vergütung entsteht, wenn ein Termin zustande gekommen ist. Passiert nichts, verdienen wir nichts.',
    },
    {
      icon: 'shield',
      title: 'Ein Partner je Region',
      text: 'Wir betreuen in Ihrer Region und Versorgungsform nur Sie. Wir bieten also nie gegen Ihr eigenes Budget.',
    },
  ],
};

/** 07 Warum Anfragen versickern (track: 'a' = ohne System, 'b' = mit System) */
export const versickern = {
  kicker: 'Der wunde Punkt',
  titleStart: 'Die meisten Anfragen gehen nicht verloren – sie kommen nur ',
  titleAccent: 'zu spät an',
  titleEnd: '',
  paragraphs: [
    'Anfragen in der Pflege entstehen selten zu Bürozeiten. Sie entstehen abends, am Wochenende, nach einem Sturz oder wenn die Entlassung aus dem Krankenhaus ansteht. In dieser Situation sucht kaum jemand nur einen Anbieter – es werden drei angeschrieben.',
    'Wer zuerst antwortet, führt das Gespräch. In einem Betrieb, der tagsüber auf Tour ist, passiert das realistisch am nächsten oder übernächsten Werktag. Bis dahin ist die Entscheidung häufig gefallen – ohne dass Sie je erfahren, dass es sie gab.',
    'Das ist kein Organisationsfehler, sondern eine Frage der Kapazität. Genau deshalb setzen wir an dieser Stelle an und nicht bei mehr Werbedruck.',
  ],
  trackALabel: 'Ohne System',
  trackBLabel: 'Mit dem KI Regio System',
  chartNote: 'Beispielhafter Verlauf zur Veranschaulichung.',
  events: [
    { track: 'a', time: 'Freitag, 21:47', text: 'Angehörige stellt eine Anfrage' },
    { track: 'a', time: 'Dienstag, 10:12', text: 'Rückruf aus dem Betrieb' },
    { track: 'a', time: 'Zu spät', text: 'Die Versorgung ist bereits vergeben' },
    { track: 'b', time: 'Freitag, 21:47', text: 'Angehörige stellt eine Anfrage' },
    { track: 'b', time: 'Wenige Minuten später', text: 'Anfrage ist aufgenommen und eingeordnet' },
    { track: 'b', time: 'Montag', text: 'Sie führen das Beratungsgespräch' },
  ],
};

/** 08 Terminkriterien & Ihre Seite */
export const terminkriterien = {
  kicker: 'Klare Definition',
  titleStart: 'Was bei uns als ',
  titleAccent: 'Termin',
  titleEnd: ' zählt – und was nicht',
  intro:
    'Die häufigste Ursache für Streit zwischen Pflegeunternehmen und Dienstleistern ist eine fehlende Definition. Deshalb steht sie bei uns nicht im Kleingedruckten, sondern hier – bevor überhaupt über eine Zusammenarbeit gesprochen wird.',
  outro: 'Erfüllt ein Termin diese Kriterien nicht, ist es keiner – und wird auch nicht als solcher behandelt.',
  criteriaTitle: 'Ein qualifizierter Termin ist',
  criteria: [
    'eine Person aus Ihrem vereinbarten Einzugsgebiet',
    'mit konkretem, benanntem Versorgungsbedarf',
    'in einer Versorgungsform, die Sie anbieten',
    'mit absehbarem Startzeitpunkt',
    'und einem bestätigten, wahrgenommenen Gesprächstermin',
  ],
  criteriaNote: 'Ausfälle und Absagen sind geregelt. Die Details dazu gehören in den Vertrag, nicht auf diese Seite.',
  ownTitle: 'Was bei Ihnen bleibt',
  ownItems: ['Den Termin wahrnehmen', 'Rückmeldung an uns binnen 24 Stunden', 'Einen festen Ansprechpartner benennen'],
  ownNote: 'Diese Liste ist bewusst kurz. Sie ist der eigentliche Beleg dafür, was wir Ihnen abnehmen.',
};

/** 09 Vergleich der Modelle (Werte je Spalte: 'yes' | 'part' | 'no') */
export const vergleich = {
  kicker: 'Im Vergleich',
  titleStart: 'Was uns von einer ',
  titleAccent: 'klassischen Agentur',
  titleEnd: ' unterscheidet',
  subline:
    'Keine Wertung der Anbieter, sondern eine Gegenüberstellung der Modelle. Jedes davon hat seine Berechtigung – nur eben nicht für dieselbe Aufgabe.',
  columns: [
    { label: 'VALIORA', highlight: true },
    { label: 'Klassische Agentur', highlight: false },
    { label: 'Lead-Portale', highlight: false },
    { label: 'Akquise nebenbei', highlight: false },
  ],
  rows: [
    { label: 'Fertige Termine statt Kontaktdaten', values: ['yes', 'no', 'no', 'no'] },
    { label: 'Vorqualifizierung durch den Dienstleister', values: ['yes', 'no', 'part', 'no'] },
    { label: 'Exklusiv in Ihrer Region und Versorgungsform', values: ['yes', 'part', 'no', 'yes'] },
    { label: 'Ausschließlich Pflegebranche', values: ['yes', 'no', 'part', 'yes'] },
    { label: 'Vergütung überwiegend leistungsabhängig', values: ['yes', 'no', 'yes', 'no'] },
    { label: 'Kein hoher monatlicher Fixbetrag', values: ['yes', 'no', 'yes', 'yes'] },
    { label: 'Planbar statt von freien Kapazitäten abhängig', values: ['yes', 'part', 'part', 'no'] },
  ] as { label: string; values: ('yes' | 'part' | 'no')[] }[],
  legendYes: 'Trifft zu',
  legendPart: 'Teilweise',
  legendNo: 'Trifft nicht zu',
  note: 'Eigene Einordnung der gängigen Modelle am Markt, Stand August 2026.',
};

/** 10 Vergütungslogik */
export const verguetung = {
  kicker: 'Die Vergütung',
  titleStart: 'Ein geringes Fixum – ',
  titleAccent: 'der Rest entsteht mit dem Ergebnis',
  titleEnd: '',
  subline:
    'Drei Bausteine, mehr nicht. Die Höhe hängt von Versorgungsform und Region ab – deshalb steht sie nicht auf dieser Seite.',
  items: [
    {
      label: 'Einmalig',
      title: 'Aufbau',
      text: 'Zu Beginn wird das System für Ihr Unternehmen eingerichtet. Das ist eine einmalige Investition, kein laufender Posten.',
    },
    {
      label: 'Monatlich',
      title: 'Fixum',
      text: 'Ein bewusst geringer Fixbetrag für Betrieb, Steuerung und Betreuung. Deutlich unter dem, was ein Agentur-Retainer kostet.',
    },
    {
      label: 'Je Termin',
      title: 'Leistungsanteil',
      text: 'Der größere Teil der Vergütung entsteht erst, wenn ein qualifizierter Termin tatsächlich zustande gekommen ist.',
    },
  ],
  highlight:
    'Eine klassische Agentur verdient auch dann, wenn nichts passiert. Bei uns ist das strukturell ausgeschlossen.',
  note: 'Die konkreten Konditionen, Laufzeiten und Deckelungen besprechen wir persönlich – sie hängen von Ihrer Versorgungsform, Ihrer Region und Ihrer Kapazität ab.',
};

/** 11 Sicherheit & Datenhoheit */
export const sicherheit = {
  kicker: 'Sicherheit',
  titleStart: 'Gesundheitsdaten gehören ',
  titleAccent: 'nicht in fremde Hände',
  titleEnd: '',
  subline:
    'In der Pflege ist Datenschutz keine Formalie, sondern besondere Kategorie. Wir behandeln ihn entsprechend.',
  items: [
    {
      icon: 'lock',
      title: 'Besondere Datenkategorie',
      text: 'Pflegegrad, Versorgungsbedarf und Diagnosehinweise fallen unter Artikel 9 DSGVO. Auftragsverarbeitung, Zweckbindung und Löschkonzept sind dokumentiert, bevor die erste Anfrage entgegengenommen wird.',
    },
    {
      icon: 'shield',
      title: 'Die Daten bleiben Ihre',
      text: 'Alles, was über uns entsteht, gehört Ihrem Unternehmen. Export jederzeit möglich – auch bei Vertragsende, ohne Diskussion und ohne Zusatzkosten.',
    },
    {
      icon: 'spark',
      title: 'KI erkennbar, Beratung menschlich',
      text: 'Automatisierte Kommunikation gibt sich als solche zu erkennen und berät nicht. Sie nimmt auf und ordnet ein – die Beratung führen ausschließlich Menschen.',
    },
  ],
  note: 'Die vollständige Dokumentation legen wir vor Vertragsschluss offen.',
};

/** 12 Ansprechpartner – Name, Telefon und E-Mail kommen aus src/data/site.ts */
export const ansprechpartner = {
  kicker: 'Ihr Ansprechpartner',
  titleStart: 'Fragen zu dieser ',
  titleAccent: 'Unterlage',
  titleEnd: '?',
  body: 'Diese Seite ersetzt kein Gespräch – sie soll Ihnen nur die Möglichkeit geben, sich in Ruhe ein Bild zu machen. Wenn Sie wissen möchten, ob Ihre Region noch frei ist oder wie das Modell in Ihrer Versorgungsform aussieht, erreichen Sie mich direkt.',
  personRole: 'VALIORA – Partner für Pflegeunternehmen',
  phoneLabel: 'Telefon',
  mailLabel: 'E-Mail',
};

/** 13 Footer – Rechtslinks kommen aus src/data/site.ts */
export const footer = {
  brandName: 'VALIORA',
  tagline: 'Partner für Pflegeunternehmen',
  confidentialNote: 'Diese Unterlage ist zur persönlichen Verwendung bestimmt und enthält kein verbindliches Angebot.',
  copyright: '2026 VALIORA',
};
