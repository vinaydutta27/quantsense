(() => {
  const lessonStart = document.getElementById('level');
  if (!lessonStart) return;

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'frtb-package.css';
  document.head.appendChild(stylesheet);

  const section = document.createElement('section');
  section.className = 'frtb-pack';
  section.setAttribute('aria-labelledby', 'frtb-pack-title');
  section.innerHTML = `
    <div class="frtb-pack-copy">
      <span class="mini">OPTIONAL PROFESSIONAL LEARNING PACK</span>
      <h2 id="frtb-pack-title">Take FRTB from conceptual understanding to practical application</h2>
      <p>The free interactive module explains how FRTB SA and IMA work. If you want a more structured, practical-level understanding for implementation work, regulatory discussions or interviews, the Quant$ense FRTB SA &amp; IMA Professional Pack brings the supporting material together in one place.</p>
      <ul>
        <li>A comprehensive, step-by-step professional guide</li>
        <li>Practical calculations and offline interactive tools</li>
        <li>Flashcards and interview-focused questions</li>
        <li>Reference material for continued study</li>
      </ul>
      <p class="frtb-pack-note">The pack is optional. You can continue using every lesson and visualisation on this page without purchasing it.</p>
      <a class="frtb-pack-cta" href="https://topmate.io/quantsense/2307098" target="_blank" rel="noopener sponsored" data-analytics-event="frtb_pack_visit">View the FRTB Professional Pack <span aria-hidden="true">↗</span></a>
    </div>
    <details class="frtb-pack-preview">
      <summary>Preview the package page</summary>
      <div class="frtb-pack-frame"><iframe src="https://topmate.io/quantsense/2307098" title="Quant$ense FRTB SA and IMA Professional Pack on Topmate" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="payment"></iframe></div>
      <p>If the embedded page does not load, <a href="https://topmate.io/quantsense/2307098" target="_blank" rel="noopener sponsored">open the package page on Topmate</a>.</p>
    </details>`;
  const moduleGuide = document.querySelector('.module-guide');
  (moduleGuide || lessonStart).before(section);
})();
