/**
 * Bewerbungsformular /karriere (Quiz, ohne Video)
 * Versand über Resend an die in src/data/site.ts hinterlegten Karriere-Empfänger (mail.toKarriere).
 * Eine Bewerbung darf nie still verloren gehen: Bei jedem Fehler wird sie vollständig ins
 * Server-Log geschrieben und der Bewerber bekommt die Telefonnummer als Ausweg.
 */
import type { APIRoute } from 'astro';
import { site } from '../../data/site';
import { EMAIL_RE, getResend, htmlMessage, json, mailTable, rateLimited, readBody } from '../../lib/mail';

export const prerender = false;

const SUCCESS = '/karriere-danke';
const BACK = '/karriere#bewerbung';

/** Alle Felder in Quiz-Reihenfolge mit deutschen Bezeichnungen für die Mail */
const FIELDS = {
  role: 'Rolle',
  roleExperience: 'Erfahrung in dieser Rolle',
  salesBackground: 'Vertriebserfahrung',
  crmExperience: 'CRM-Erfahrung',
  germanLevel: 'Deutschkenntnisse',
  weeklyHours: 'Stunden pro Woche',
  startDate: 'Möglicher Start',
  employmentType: 'Form der Zusammenarbeit',
  workSetup: 'Arbeitsplatz (Laptop, Headset, Internet)',
  firstName: 'Vorname',
  lastName: 'Nachname',
  email: 'E-Mail-Adresse',
  phone: 'Telefonnummer',
  note: 'Anmerkung',
  consent: 'Einwilligung Datenschutz',
} as const;
type Key = keyof typeof FIELDS;

/** Optional: CRM (wird bei „Noch keine Vertriebserfahrung“ übersprungen) und Anmerkung */
const OPTIONAL: Key[] = ['crmExperience', 'note'];
const CHOICE: Key[] = ['role', 'roleExperience', 'salesBackground', 'crmExperience', 'germanLevel', 'weeklyHours', 'startDate', 'employmentType', 'workSetup'];

const PHONE_HINT = `Bitte versuche es noch einmal oder ruf uns direkt an: ${site.contact.phone}`;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const { data, isJson } = await readBody(request);

  // Honeypot: echte Besucher sehen dieses Feld nicht. Bots bekommen „Erfolg“, es wird nichts versendet.
  if (data.website) {
    return isJson ? json({ ok: true, redirect: SUCCESS }) : Response.redirect(new URL(SUCCESS, request.url), 303);
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress || 'unknown';
  if (rateLimited(ip)) {
    const message = `Du hast in kurzer Zeit sehr viele Bewerbungen gesendet. Bitte warte einige Minuten oder ruf uns an: ${site.contact.phone}`;
    return isJson ? json({ ok: false, message }, 429) : htmlMessage('Bitte kurz warten', message, BACK, 429);
  }

  // Serverseitige Prüfung aller Pflichtfelder
  const errors: Partial<Record<Key, string>> = {};
  for (const key of Object.keys(FIELDS) as Key[]) {
    const v = data[key] ?? '';
    const max = key === 'note' ? 3000 : 300;
    if (!v && !OPTIONAL.includes(key)) errors[key] = key === 'consent' ? 'Bitte bestätige die Datenschutzhinweise.' : CHOICE.includes(key) ? 'Bitte triff eine Auswahl.' : 'Bitte ausfüllen.';
    else if (v.length > max) errors[key] = 'Bitte kürzer fassen.';
  }
  if (!errors.email && !EMAIL_RE.test(data.email ?? '')) errors.email = 'Bitte gib eine gültige E-Mail-Adresse an.';
  if (Object.keys(errors).length) {
    return isJson
      ? json({ ok: false, errors, message: 'Bitte prüfe die markierten Angaben.' }, 422)
      : htmlMessage('Bitte Angaben prüfen', `Es fehlen Angaben: ${Object.keys(errors).map((k) => FIELDS[k as Key]).join(', ')}.`, BACK, 422);
  }

  const rows: [string, string][] = [
    ...(Object.keys(FIELDS) as Key[]).map((k) => [FIELDS[k], k === 'consent' ? 'Ja, erteilt' : (data[k] ?? '')] as [string, string]),
    ['Formular', 'Karriere (/karriere)'],
    ['Eingang', new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v || '–'}`).join('\n');
  const fullName = `${data.firstName} ${data.lastName}`;
  const fail = (status: number) =>
    isJson
      ? json({ ok: false, message: `Deine Bewerbung konnte leider nicht gesendet werden. ${PHONE_HINT}` }, status)
      : htmlMessage('Das hat leider nicht geklappt', `Deine Bewerbung konnte leider nicht gesendet werden. ${PHONE_HINT}`, BACK, status);

  const resend = getResend();
  if (!resend) {
    console.error('[bewerbung] RESEND_API_KEY fehlt – Bewerbung NICHT versendet:\n' + text);
    return fail(500);
  }

  try {
    const { data: sent, error } = await resend.emails.send({
      from: site.mail.fromKarriere,
      to: [...site.mail.toKarriere],
      replyTo: data.email,
      subject: `Neue Bewerbung: ${fullName} – ${data.role}`,
      html: `<p style="font-family:Arial,sans-serif;font-size:16px;color:#0B1A26;margin:0 0 16px"><strong>Neue Bewerbung über go.valiora-partner.de/karriere</strong></p>${mailTable(rows)}<p style="font-family:Arial,sans-serif;font-size:13px;color:#1D3E56;margin-top:20px">„Antworten“ geht direkt an ${data.email}.</p>`,
      text: `Neue Bewerbung über go.valiora-partner.de/karriere\n\n${text}\n`,
    });
    if (error) {
      console.error('[bewerbung] Resend-Fehler:', JSON.stringify(error), '\nBewerbung:\n' + text);
      return fail(502);
    }
    console.log('[bewerbung] versendet, Resend-ID', sent?.id);
    return isJson ? json({ ok: true, redirect: SUCCESS }) : Response.redirect(new URL(SUCCESS, request.url), 303);
  } catch (err) {
    console.error('[bewerbung] Ausnahme beim Versand:', err, '\nBewerbung:\n' + text);
    return fail(502);
  }
};
