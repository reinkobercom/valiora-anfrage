/** Gemeinsame Helfer für die Formular-Endpoints (Versand über Resend). */
import { Resend } from 'resend';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function escapeHtml(v: string): string {
  return v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

/** Liest JSON oder klassische Formulardaten (für Besucher ohne JavaScript). */
export async function readBody(request: Request): Promise<{ data: Record<string, string>; isJson: boolean }> {
  const ct = request.headers.get('content-type') ?? '';
  if (ct.includes('application/json')) {
    const raw = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    const data: Record<string, string> = {};
    for (const [k, v] of Object.entries(raw)) data[k] = typeof v === 'string' ? v.trim() : '';
    return { data, isJson: true };
  }
  const fd = await request.formData().catch(() => null);
  const data: Record<string, string> = {};
  fd?.forEach((v, k) => { data[k] = typeof v === 'string' ? v.trim() : ''; });
  return { data, isJson: false };
}

/** Einfaches Rate-Limit je IP (pro Server-Instanz). */
const hits = new Map<string, number[]>();
export function rateLimited(ip: string, max = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > max;
}

export function getResend(): Resend | null {
  const key = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
}

/** Antwort für Besucher ohne JavaScript: kurze, verständliche Seite statt leerer Seite. */
export function htmlMessage(title: string, text: string, back: string, status = 200): Response {
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${escapeHtml(title)} | VALIORA</title>
<style>body{margin:0;font-family:Inter,system-ui,sans-serif;background:#F4F1EA;color:#0B1A26;display:grid;place-items:center;min-height:100vh;padding:20px}main{max-width:520px;background:#fff;border-top:4px solid #C6A15B;border-radius:6px;padding:32px;box-shadow:0 30px 70px -40px #0B1A26a6}h1{font-family:Manrope,system-ui,sans-serif;font-size:24px;margin:0 0 12px}p{line-height:1.6;margin:0 0 20px;color:#1D3E56}a{display:inline-flex;align-items:center;min-height:48px;padding:0 24px;background:#C6A15B;color:#0B1A26;font-weight:700;border-radius:4px;text-decoration:none}</style></head>
<body><main><h1>${escapeHtml(title)}</h1><p>${text}</p><a href="${escapeHtml(back)}">Zurück zum Formular</a></main></body></html>`;
  return new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}

/** Baut eine schlichte HTML-Tabelle für die Benachrichtigungs-Mail. */
export function mailTable(rows: [string, string][]): string {
  return `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:15px;color:#0B1A26">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#1D3E56;font-weight:bold;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:8px 0;vertical-align:top">${escapeHtml(v || '–').replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('')}</table>`;
}
