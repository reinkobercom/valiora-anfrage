/**
 * HINWEISLEISTE GANZ OBEN AUF DER STARTSEITE
 * -------------------------------------------------------------
 * visible      true/false – Leiste grundsätzlich an oder aus
 * visibleFrom  optional, ab wann sie erscheint   (Format 'JJJJ-MM-TT', z. B. '2026-12-01')
 * visibleUntil optional, bis wann sie erscheint  (einschließlich dieses Tages)
 *
 * Es wird immer die ERSTE passende Meldung angezeigt. Die Datumsprüfung passiert
 * im Browser des Besuchers, d. h. eine Meldung verschwindet pünktlich, auch ohne
 * dass die Seite neu gebaut wird.
 */

export type Announcement = {
  text: string;
  visible: boolean;
  visibleFrom?: string;
  visibleUntil?: string;
};

export const announcements: Announcement[] = [
  {
    text: '1 Pflegeunternehmen pro Region · Vertraglicher Gebietsschutz · Deutschland & Österreich',
    visible: true,
  },
];
