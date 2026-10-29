/**
 * Bewerbungsformular /karriere (Quiz)
 * Verhalten wie im Onepage-Original, aber ohne Video-Schritt:
 *   1 Rolle (Auswahl springt automatisch weiter) → 2 Erfahrung → 3 Sprache/Zeit/Start/Technik
 *   → 4 Kontakt, Anmerkung, Einwilligung → Versand → Weiterleitung /karriere-danke
 * Ohne JavaScript sieht man alle Schritte untereinander; das Formular wird klassisch abgeschickt.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function init(form: HTMLFormElement) {
  const t = form.dataset;
  const total = Number(t.total ?? 4);
  const msg = {
    choice: t.errChoice ?? 'Bitte triff eine Auswahl.',
    text: t.errText ?? 'Bitte ausfüllen.',
    email: t.errEmail ?? 'Bitte gib eine gültige E-Mail-Adresse an.',
    consent: t.errConsent ?? 'Bitte bestätige die Datenschutzhinweise.',
    submit: t.errSubmit ?? 'Da ist etwas schiefgelaufen. Bitte versuche es noch einmal.',
  };
  const hidesCrm: string[] = JSON.parse(t.hidesCrm ?? '[]');
  const card = form.closest<HTMLElement>('[data-quiz-card]');
  const fill = card?.querySelector<HTMLElement>('[data-progress]');
  const stepNow = form.querySelector<HTMLElement>('[data-step-now]');
  const steps = Array.from(form.querySelectorAll<HTMLElement>('[data-step]'));
  const backBtn = form.querySelector<HTMLButtonElement>('[data-back]');
  const nextBtn = form.querySelector<HTMLButtonElement>('[data-next]');
  const submitBtn = form.querySelector<HTMLButtonElement>('[data-submit]');
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');
  const errLine = form.querySelector<HTMLElement>('[data-err-line]');
  const crmGroup = form.querySelector<HTMLElement>('[data-group="crmExperience"]');
  let current = 1;

  const value = (name: string): string => {
    const el = form.elements.namedItem(name);
    if (el instanceof RadioNodeList) return el.value;
    if (el instanceof HTMLInputElement && el.type === 'checkbox') return el.checked ? el.value : '';
    return (el as HTMLInputElement | HTMLTextAreaElement | null)?.value.trim() ?? '';
  };

  function setError(name: string, text = '') {
    // Radiogruppen und Einwilligung
    const span = form.querySelector<HTMLElement>(`[data-err-for="${name}"]`);
    if (span) span.textContent = text;
    // Textfelder (@siteui/field)
    const f = form.querySelector<HTMLElement>(`.ui-field[data-field="${name}"]`);
    if (f) {
      f.classList.toggle('has-error', Boolean(text));
      const el = f.querySelector<HTMLElement>('.err');
      if (el) el.textContent = text;
    }
    const input = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
    if (input && input.type !== 'radio') input.setAttribute('aria-invalid', text ? 'true' : 'false');
  }

  /** CRM-Frage nur zeigen, wenn eine Vertriebserfahrung gewählt ist, die sie nicht ausblendet */
  function crmVisible(): boolean {
    const bg = value('salesBackground');
    return Boolean(bg) && !hidesCrm.includes(bg);
  }
  function syncCrm() {
    if (!crmGroup) return;
    const show = crmVisible();
    crmGroup.hidden = !show;
    if (!show) {
      crmGroup.querySelectorAll<HTMLInputElement>('input').forEach((i) => { i.checked = false; });
      setError('crmExperience');
    }
  }

  function validate(step: number): string | null {
    const errs: Record<string, string> = {};
    const need = (k: string, m = msg.choice) => { if (!value(k)) errs[k] = m; };
    if (step === 1) need('role');
    if (step === 2) {
      need('roleExperience');
      need('salesBackground');
      if (crmVisible()) need('crmExperience');
    }
    if (step === 3) ['germanLevel', 'weeklyHours', 'startDate', 'employmentType', 'workSetup'].forEach((k) => need(k));
    if (step === 4) {
      need('firstName', msg.text);
      need('lastName', msg.text);
      if (!EMAIL_RE.test(value('email'))) errs.email = msg.email;
      need('phone', msg.text);
      need('consent', msg.consent);
    }
    const keys: Record<number, string[]> = {
      1: ['role'],
      2: ['roleExperience', 'salesBackground', 'crmExperience'],
      3: ['germanLevel', 'weeklyHours', 'startDate', 'employmentType', 'workSetup'],
      4: ['firstName', 'lastName', 'email', 'phone', 'consent'],
    };
    (keys[step] ?? []).forEach((k) => setError(k, errs[k]));
    return Object.keys(errs)[0] ?? null;
  }

  function focusError(name: string) {
    const el = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
    el?.focus({ preventScroll: true });
    (el?.closest('.block, .ui-field, .consent') as HTMLElement | null)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function goTo(step: number, focus = true) {
    current = Math.min(Math.max(step, 1), total);
    steps.forEach((s) => {
      const on = Number(s.dataset.step) === current;
      s.hidden = !on;
      s.classList.toggle('is-entering', on);
    });
    if (stepNow) stepNow.textContent = String(current);
    if (fill) fill.style.width = `${(current / total) * 100}%`;
    if (backBtn) backBtn.hidden = current === 1;
    if (nextBtn) nextBtn.hidden = current === total;
    if (submitBtn) submitBtn.hidden = current !== total;
    if (focus) {
      // Kartenanfang sichtbar halten, damit lange Schritte nicht mittendrin starten
      const top = card?.getBoundingClientRect().top ?? 0;
      if (top < 0) card?.scrollIntoView({ block: 'start', behavior: 'smooth' });
      steps[current - 1]?.querySelector<HTMLElement>('input:not([type="hidden"])')?.focus({ preventScroll: true });
    }
  }

  form.classList.add('is-enhanced');
  syncCrm();
  goTo(1, false);

  // Auswahl & Eingaben löschen die Fehlermeldung
  form.addEventListener('change', (e) => {
    const el = e.target as HTMLInputElement;
    if (!el?.name) return;
    setError(el.name);
    if (el.name === 'salesBackground') syncCrm();
    // Rolle gewählt → wie im Original automatisch weiter
    if (el.name === 'role' && el.checked && current === 1) window.setTimeout(() => goTo(2), 220);
  });
  form.addEventListener('input', (e) => {
    const el = e.target as HTMLInputElement;
    if (el?.name && el.type !== 'radio') setError(el.name);
  });

  nextBtn?.addEventListener('click', () => {
    const err = validate(current);
    if (err) { focusError(err); return; }
    goTo(current + 1);
  });
  backBtn?.addEventListener('click', () => goTo(current - 1));

  // Enter in einem Textfeld vor dem letzten Schritt = Weiter statt Absenden
  form.addEventListener('keydown', (e) => {
    const el = e.target as HTMLElement;
    if (e.key === 'Enter' && el instanceof HTMLInputElement && el.type !== 'checkbox' && current < total) {
      e.preventDefault();
      nextBtn?.click();
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (current < total) { nextBtn?.click(); return; }
    // Alle Schritte nochmals prüfen; bei Fehler zum betroffenen Schritt springen
    for (let s = 1; s <= total; s++) {
      const err = validate(s);
      if (err) {
        if (s !== current) goTo(s, false);
        focusError(err);
        return;
      }
    }

    if (errLine) errLine.textContent = '';
    const idle = submitLabel?.textContent ?? '';
    let sent = false;
    if (submitLabel && t.submitting) submitLabel.textContent = t.submitting;
    submitBtn?.setAttribute('aria-busy', 'true');
    if (submitBtn) submitBtn.disabled = true;
    try {
      const body: Record<string, string> = {};
      new FormData(form).forEach((v, k) => { if (typeof v === 'string') body[k] = v; });
      if (!crmVisible()) delete body.crmExperience;
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      const out = await res.json().catch(() => ({}));
      if (res.ok && out.ok) {
        sent = true;
        window.location.href = form.dataset.redirect || out.redirect || '/karriere-danke';
        return;
      }
      if (out.errors) {
        const errs = out.errors as Record<string, string>;
        Object.entries(errs).forEach(([k, v]) => setError(k, v));
        const firstStep = steps.find((s) => Object.keys(errs).some((k) => s.querySelector(`[name="${k}"]`)));
        if (firstStep) goTo(Number(firstStep.dataset.step), false);
      }
      if (errLine) errLine.textContent = out.message || `${msg.submit} ${t.phoneHint ?? ''}`.trim();
    } catch {
      if (errLine) errLine.textContent = `${msg.submit} ${t.phoneHint ?? ''}`.trim();
    } finally {
      if (sent) return; // Button bleibt bis zur Weiterleitung gesperrt
      if (submitLabel) submitLabel.textContent = idle;
      submitBtn?.removeAttribute('aria-busy');
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-quiz]').forEach(init);
