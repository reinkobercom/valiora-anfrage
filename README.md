# VALIORA – go.valiora-partner.de

Landingpages von VALIORA (Partner für Pflegeunternehmen), umgezogen von Onepage auf **Astro + Vercel**.
Optik und Verhalten entsprechen 1:1 dem Onepage-Original. Alle Seiten sind statisch (schnell), nur die
Formular-Versendung läuft als kleine Server-Funktion auf Vercel.

| Seite | Adresse | Status |
|---|---|---|
| Startseite „Region sichern“ | `/` | aktiv |
| Kurzversion | `/kurz` | aktiv |
| Dankeseite nach Anfrage | `/danke` | aktiv, nicht in Google (noindex) |
| KI Regio System | `/ki-regio-system` | ausgeschaltet |
| Karriere | `/karriere` | ausgeschaltet |
| Danke Karriere | `/karriere-danke` | ausgeschaltet |

---

## Inhalte pflegen (ohne Programmierkenntnisse)

Alle Inhalte liegen in **`src/data/`**. Datei auf GitHub öffnen → Stift-Symbol → Text ändern →
„Commit changes“. Vercel baut die Seite danach automatisch neu (ca. 1 Minute).

| Was | Datei |
|---|---|
| Telefon, E-Mail-Adressen, Ansprechpartner, Rechtslinks, Meta-Pixel | `src/data/site.ts` |
| **Formular-Empfänger und Absender** | `src/data/site.ts` → `mail` |
| Sektionen / ganze Seiten ein- und ausschalten | `src/data/sections.ts` |
| Hinweisleiste oben (mit Zeitraum) | `src/data/announcements.ts` |
| Bilder und Alt-Texte | `src/data/images.ts` (Bilddateien in `src/assets/img/`) |
| Texte Startseite | `src/data/content/home.ts` |
| Texte Kurzversion | `src/data/content/kurz.ts` |
| Texte Dankeseite | `src/data/content/danke.ts` |
| Texte KI Regio System / Karriere | `src/data/content/kiRegioSystem.ts`, `karriere.ts`, `karriereDanke.ts` |

Wichtig beim Bearbeiten: Texte stehen immer zwischen einfachen Anführungszeichen `'…'`. Enthält ein
Text selbst ein `'`, davor einen Backslash setzen: `\'`.

### Sektionen ein- und ausschalten
In `src/data/sections.ts` steht für jede Seite jede Sektion mit `true` (sichtbar) oder `false`
(ausgeblendet). Eine ganze Seite schalten Sie mit `enabled: true/false` – ausgeschaltete Seiten werden
gar nicht gebaut (Aufruf ergibt 404) und stehen nicht in der `sitemap.xml`.

### Hinweisleiste mit Zeitraum
In `src/data/announcements.ts`: `visible: true/false`, optional `visibleFrom: '2026-12-01'` und
`visibleUntil: '2026-12-24'`. Der Zeitraum wird im Browser des Besuchers geprüft – die Leiste
verschwindet pünktlich, auch ohne neuen Build.

### Formular-Empfänger ändern
`src/data/site.ts` → `mail.to` (Regionsanfragen) bzw. `mail.toKarriere` (Bewerbungen):

```ts
to: ['simon@reinkober.com', 'leads@reinkober.agency'],
```

Der Absender (`mail.from`) muss auf einer **in Resend verifizierten Domain** liegen
(derzeit `leads@reinkober-leadportal.com`). „Antworten“ in der Benachrichtigung geht automatisch an
die Person, die das Formular ausgefüllt hat.

---

## Formulare – wie sie funktionieren

- Endpoints: `src/pages/api/anfrage.ts` (Startseite + /kurz), `src/pages/api/bewerbung.ts` (Karriere).
- Prüfung aller Pflichtfelder und der E-Mail-Adresse im Browser **und** auf dem Server.
- Spamschutz: unsichtbares Honeypot-Feld + Begrenzung auf 5 Anfragen je IP in 10 Minuten.
- Schlägt der Versand fehl, sieht der Besucher eine klare Meldung mit Telefonnummer. Die komplette
  Anfrage wird zusätzlich ins Vercel-Log geschrieben (Vercel → Projekt → Logs, nach `[anfrage]`
  suchen) – es geht nichts still verloren.
- Nach erfolgreichem Absenden: Weiterleitung auf `/danke`.

## Cookie-Hinweis und Tracking
Der Meta-Pixel (ID in `src/data/site.ts`) lädt **erst nach Zustimmung** im Cookie-Hinweis.
Besucher können ihre Wahl über „Cookie-Einstellungen“ im Seitenfuß ändern.
Vercel Web Analytics läuft cookielos (aktivieren unter Vercel → Projekt → Analytics).

---

## Umgebungsvariablen (Vercel → Settings → Environment Variables)

| Name | Wert | Umgebungen |
|---|---|---|
| `RESEND_API_KEY` | API-Key aus resend.com (Typ „Sensitive“) | Production, Preview |

Der Key gehört **nie** ins Repository. Für lokale Tests eine Datei `.env` anlegen (siehe
`.env.example`) – sie ist in `.gitignore` ausgeschlossen.

---

## DNS-Umstellung (go.valiora-partner.de)

Die Seite läuft auf der Subdomain **go**. Beim DNS-Anbieter von `valiora-partner.de`:

1. Den bestehenden Eintrag für `go` (heute auf Onepage) **entfernen**.
2. Neu anlegen: `CNAME` · Name `go` · Ziel = der Wert, den Vercel unter
   Projekt → Settings → Domains für `go.valiora-partner.de` anzeigt (in der Regel `cname.vercel-dns.com`
   bzw. ein projektspezifischer `…vercel-dns-….com`-Wert).
3. **Nicht anfassen:** A-Record für `@`, `www`, alle **MX**- und **TXT**-Einträge der Hauptdomain –
   sonst funktionieren valiora-partner.de oder Ihre E-Mails nicht mehr.
4. Die Resend-Einträge (SPF/DKIM) gehören zur Versand-Domain `reinkober-leadportal.com` und
   berühren `valiora-partner.de` nicht.

Erst wenn die neue Seite unter go.valiora-partner.de läuft und eine Testanfrage angekommen ist,
den Onepage-Vertrag kündigen.

---

## Für Entwickler

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Produktions-Build (Ausgabe in .vercel/output)
```

- Astro 7, `output: 'static'`, Adapter `@astrojs/vercel`; nur `/api/*` wird on demand gerendert
  (`export const prerender = false`).
- URLs ohne Schrägstrich am Ende (`trailingSlash: 'never'`), identisch zu Onepage.
- Schriften Manrope + Inter lokal über `@fontsource` (kein Google-Fonts-Aufruf).
- Bilder über `astro:assets` → WebP in mehreren Größen.
- Einblend-Animationen: Attribut `data-reveal` (Logik in `src/layouts/Base.astro`).
- `sitemap.xml` und `robots.txt` werden aus `src/data/sections.ts` erzeugt.
