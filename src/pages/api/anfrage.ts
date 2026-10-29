/**
 * Formular „Ist Ihre Region noch frei?“ (Startseite und /kurz)
 * Versand über Resend an die in src/data/site.ts hinterlegten Empfänger.
 */
import type { APIRoute } from 'astro';
import { site } from '../../data/site';
import { EMAIL_RE, getResend, htmlMessage, json, mailTable, rateLimited, readBody } from '../../lib/mail';

export const prerender = false;

const FIELDS = {
  region: 'PLZ oder Stadt',
  name: 'Vor- und Nachname',
  unternehmen: 'Pflegeunternehmen',
  telefon: 'Telefonnummer',
  email: 'E-Mail-Adresse',
} as const;

const PHONE_HINT = `Bitte versuchen Sie es erneut oder rufen Sie uns direkt an: ${site.contact.phone}`;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const { data, isJson } = await readBody(request);
  const source = data.quelle === '/kurz' ? '/kurz' : '/';
  const back = `${source === '/' ? '/' : source}#region-check`;

  // Honeypot: echte Besucher sehen dieses Feld nicht. Bots bekommen „Erfolg“, es wird nichts versendet.
  if (data.website) {
    return isJson ? json({ ok: true, redirect: '/danke' }) : Response.redirect(new URL('/danke', request.url), 303);
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress || 'unknown';
  if (rateLimited(ip)) {
    const message = `Sie haben in kurzer Zeit sehr viele Anfragen gesendet. Bitte warten Sie einige Minuten oder rufen Sie uns an: ${site.contact.phone}`;
    return isJson ? json({ ok: false, message }, 429) : htmlMessage('Bitte kurz warten', message, back, 429);
  }

  // Serverseitige Prüfung aller Pflichtfelder
  const errors: Record<string, string> = {};
  for (const key of Object.keys(FIELDS) as (keyof typeof FIELDS)[]) {
    const v = data[key] ?? '';
    if (!v) errors[key] = 'Bitte ausfüllen';
    else if (v.length > 300) errors[key] = 'Bitte kürzer fassen';
  }
  if (!errors.email && !EMAIL_RE.test(data.email ?? '')) errors.email = 'Bitte gültige E-Mail-Adresse angeben';
  if (Object.keys(errors).length) {
    return isJson
      ? json({ ok: false, errors, message: 'Bitte prüfen Sie die markierten Felder.' }, 422)
      : htmlMessage('Bitte Angaben prüfen', `Es fehlen Angaben: ${Object.keys(errors).map((k) => FIELDS[k as keyof typeof FIELDS]).join(', ')}.`, back, 422);
  }

  const resend = getResend();
  const rows: [string, string][] = [
    ...(Object.keys(FIELDS) as (keyof typeof FIELDS)[]).map((k) => [FIELDS[k], data[k]] as [string, string]),
    ['Formular', source === '/kurz' ? 'Kurzversion (/kurz)' : 'Startseite (/)'],
    ['Eingang', new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  if (!resend) {
    console.error('[anfrage] RESEND_API_KEY fehlt – Anfrage NICHT versendet:\n' + text);
    return isJson ? json({ ok: false, message: `Das hat leider nicht geklappt. ${PHONE_HINT}` }, 500) : htmlMessage('Das hat leider nicht geklappt', PHONE_HINT, back, 500);
  }

  try {
    const { data: sent, error } = await resend.emails.send({
      from: site.mail.from,
      to: [...site.mail.to],
      replyTo: data.email,
      subject: `Neue Regionsanfrage: ${data.region} – ${data.unternehmen}`,
      html: `<p style="font-family:Arial,sans-serif;font-size:16px;color:#0B1A26;margin:0 0 16px"><strong>Neue Verfügbarkeitsanfrage über go.valiora-partner.de</strong></p>${mailTable(rows)}<p style="font-family:Arial,sans-serif;font-size:13px;color:#1D3E56;margin-top:20px">„Antworten“ geht direkt an ${data.email}.</p>`,
      text: `Neue Verfügbarkeitsanfrage über go.valiora-partner.de\n\n${text}\n`,
    });
    if (error) {
      console.error('[anfrage] Resend-Fehler:', JSON.stringify(error), '\nAnfrage:\n' + text);
      return isJson ? json({ ok: false, message: `Das hat leider nicht geklappt. ${PHONE_HINT}` }, 502) : htmlMessage('Das hat leider nicht geklappt', PHONE_HINT, back, 502);
    }
    console.log('[anfrage] versendet, Resend-ID', sent?.id);
    return isJson ? json({ ok: true, redirect: '/danke' }) : Response.redirect(new URL('/danke', request.url), 303);
  } catch (err) {
    console.error('[anfrage] Ausnahme beim Versand:', err, '\nAnfrage:\n' + text);
    return isJson ? json({ ok: false, message: `Das hat leider nicht geklappt. ${PHONE_HINT}` }, 502) : htmlMessage('Das hat leider nicht geklappt', PHONE_HINT, back, 502);
  }
};
