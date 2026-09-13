(() => {
  const CONSENT_KEY = 'quantsense_analytics_consent';
  const getConsent = () => { try { return localStorage.getItem(CONSENT_KEY); } catch { return null; } };
  const saveConsent = value => { try { localStorage.setItem(CONSENT_KEY, value); } catch {} };
  const updateConsent = value => {
    saveConsent(value);
    window.gtag?.('consent', 'update', {analytics_storage: value});
    if (value === 'granted') window.gtag?.('event', 'page_view', {page_title: document.title, page_location: location.href, consent_update: true});
  };

  document.addEventListener('DOMContentLoaded', () => {
    if (!getConsent()) {
      const banner = document.createElement('section');
      banner.className = 'analytics-consent';
      banner.setAttribute('role', 'dialog');
      banner.setAttribute('aria-label', 'Analytics preference');
      banner.innerHTML = '<div><strong>Help improve Quant$ense</strong><p>Allow anonymous Google Analytics measurements so we can understand which lessons are useful. You can decline and the applets will still work.</p></div><div class="analytics-consent-actions"><button type="button" data-consent="denied">Decline</button><button type="button" data-consent="granted">Allow analytics</button></div>';
      document.body.appendChild(banner);
      banner.querySelectorAll('[data-consent]').forEach(button => button.addEventListener('click', () => { updateConsent(button.dataset.consent); banner.remove(); }));
    }
    document.addEventListener('click', event => {
      const lesson = event.target.closest?.('[data-lesson]');
      if (lesson) window.gtag?.('event', 'lesson_select', {lesson_number: Number(lesson.dataset.lesson) + 1, page_path: location.pathname});
      const question = event.target.closest?.('.concept-questions summary');
      if (question) window.gtag?.('event', 'question_open', {lesson: location.hash.slice(1) || 'first', page_path: location.pathname});
    });
    document.getElementById('contact-form')?.addEventListener('submit', () => window.gtag?.('event', 'contact_form_submit'));
  });
})();
