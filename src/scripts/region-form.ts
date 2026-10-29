/**
 * Zwei-Schritt-Formular „Ist Ihre Region noch frei?“
 * Verhalten 1:1 wie im Original: Schritt 1 (Region) → Schritt 2 (Kontakt) → Weiterleitung /danke.
 * Ohne JavaScript werden beide Schritte gezeigt und das Formular klassisch abgeschickt.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function init(form: HTMLFormElement) {
  const t = form.dataset;
  const msg = {
    required: t.errRequired ?? 'Bitte ausfüllen',
    email: t.errEmail ?? 'Bitte gültige E-Mail-Adresse angeben',
    submit: t.errSubmit ?? 'Das hat leider nicht geklappt.',
  };
  const step1 = form.querySelector<HTMLElement>('[data-step="1"]')!;
  const step2 = form.querySelector<HTMLElement>('[data-step="2"]')!;
  const titleEl = form.closest('[data-form-card]')?.querySelector<HTMLElement>('[data-step-title]');
  const pips = form.closest('[data-form-card]')?.querySelectorAll<HTMLElement>('[data-pip]');
  const errLine = form.querySelector<HTMLElement>('[data-err-line]');
  const submitBtn = form.querySelector<HTMLButtonElement>('[data-submit]');

  const field = (name: string) => form.querySelector<HTMLElement>(`[data-field="${name}"]`);
  const input = (name: string) => form.elements.namedItem(name) as HTMLInputElement | null;

  function setError(name: string, text = '') {
    const f = field(name);
    if (!f) return;
    f.classList.toggle('has-error', Boolean(text));
    const el = f.querySelector<HTMLElement>('.err');
    if (el) el.textContent = text;
    input(name)?.setAttribute('aria-invalid', text ? 'true' : 'false');
  }

  function goTo(step: 1 | 2) {
    step1.hidden = step !== 1;
    step2.hidden = step !== 2;
    if (titleEl) titleEl.textContent = step === 1 ? (titleEl.dataset.t1 ?? '') : (titleEl.dataset.t2 ?? '');
    pips?.forEach((p, i) => p.classList.toggle('on', i === 0 || step === 2));
  }

  // Start: nur Schritt 1 sichtbar
  form.classList.add('is-enhanced');
  goTo(1);

  form.querySelectorAll<HTMLInputElement>('input').forEach((el) =>
    el.addEventListener('input', () => setError(el.name)),
  );

  form.querySelector('[data-next]')?.addEventListener('click', () => {
    if (!input('region')?.value.trim()) { setError('region', msg.required); input('region')?.focus(); return; }
    goTo(2);
    input('name')?.focus();
  });
  // Enter im Regionsfeld = weiter
  input('region')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); form.querySelector<HTMLButtonElement>('[data-next]')?.click(); }
  });
  form.querySelector('[data-back]')?.addEventListener('click', () => { goTo(1); input('region')?.focus(); });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (step2.hidden) { form.querySelector<HTMLButtonElement>('[data-next]')?.click(); return; }

    const errs: Record<string, string> = {};
    for (const k of ['name', 'unternehmen', 'telefon', 'email']) if (!input(k)?.value.trim()) errs[k] = msg.required;
    const em = input('email')?.value.trim() ?? '';
    if (em && !EMAIL_RE.test(em)) errs.email = msg.email;
    ['name', 'unternehmen', 'telefon', 'email'].forEach((k) => setError(k, errs[k]));
    const firstErr = Object.keys(errs)[0];
    if (firstErr) { input(firstErr)?.focus(); return; }

    if (errLine) errLine.textContent = '';
    submitBtn?.setAttribute('aria-busy', 'true');
    if (submitBtn) submitBtn.disabled = true;
    try {
      const body = Object.fromEntries(new FormData(form).entries());
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      const out = await res.json().catch(() => ({}));
      if (res.ok && out.ok) {
        window.location.href = form.dataset.redirect || out.redirect || '/danke';
        return;
      }
      if (out.errors) {
        Object.entries(out.errors as Record<string, string>).forEach(([k, v]) => setError(k, v));
        if (out.errors.region) goTo(1);
      }
      if (errLine) errLine.textContent = out.message || msg.submit;
    } catch {
      if (errLine) errLine.textContent = `${msg.submit} ${form.dataset.phoneHint ?? ''}`.trim();
    } finally {
      submitBtn?.removeAttribute('aria-busy');
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-region-form]').forEach(init);
