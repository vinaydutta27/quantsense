(() => {
  const key = location.pathname.split('/').pop().replace(/\.html$/, '');
  const pack = window.QSPackages?.packages.find(p => p.key === (key === 'regulation' ? 'frtb' : key));
  const guide = document.querySelector('main .module-guide');
  if (!pack || !guide || document.getElementById('learning-package')) return;
  ['packages.css','learning-package.css'].forEach(href => {
    const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = href; document.head.append(link);
  });
  const price = '₹' + window.QSPackages.price.toLocaleString('en-IN');
  const offer = document.createElement('section');
  offer.id = 'learning-package';
  offer.className = 'learning-package';
  offer.dataset.package = pack.key;
  offer.dataset.packageView = 'offer';
  offer.dataset.placement = key === 'regulation' ? 'regulation_intro' : 'module_intro';
  offer.setAttribute('aria-labelledby', 'learning-package-title');
  const attrs = (action,place=offer.dataset.placement) => `data-package="${pack.key}" data-package-action="${action}" data-placement="${place}"`;
  offer.innerHTML = `<div class="lp-heading"><div><span class="qs-kicker">Optional learning package · ${pack.title}</span><h2 id="learning-package-title">${pack.headline}</h2></div><div class="qs-price">${price}<small> one-time</small></div></div>
    <ul class="lp-outcomes">${pack.outcomes.map(o=>`<li>${o}</li>`).join('')}</ul>
    <p class="lp-includes"><strong>Inside:</strong> ${pack.guidePages?pack.guidePages+'-page guide':'FRTB handbook'} · 100 flashcards · offline lab · worked cases &amp; interview practice</p>
    <div class="lp-readiness"><strong>Before you buy:</strong> ${pack.prerequisites} <a href="package-${pack.key}.html#contents" ${attrs('select')}>See full contents</a> · <a href="${pack.starter}.html">Review the free foundations</a></div>
    <div class="qs-actions"><a class="qs-btn" href="https://topmate.io/quantsense/${pack.id}" target="_blank" rel="noopener noreferrer sponsored" ${attrs('checkout')}>Buy on Topmate · ${price} ↗</a><a class="qs-btn qs-btn-secondary" href="package-${pack.key}.html#preview" ${attrs('preview')}>${pack.sample?'See real sample materials':'Explore the package & free preview'} →</a></div>
    <p class="learning-package-note">All lessons and visualisations in this module remain free. The paid package adds downloadable study and revision materials. Digital delivery through Topmate; check the final price and terms before payment.</p>`;
  guide.after(offer);
  const anchor = key === 'regulation' ? document.querySelector('#comparator') : document.getElementById('learning');
  if (!anchor) return;
  const next = document.createElement('section');
  next.id = 'lesson-package'; next.className = 'lesson-package';
  next.dataset.package = pack.key; next.dataset.packageView = 'offer'; next.dataset.placement = key === 'regulation' ? 'regulation_topic' : 'lesson_end';
  next.innerHTML = `<div><span class="qs-kicker">Put the idea into practice</span><h2></h2><p>${key==='regulation'?'Connect the regulatory topic with worked FRTB calculations, model-performance concepts and implementation questions.':pack.context}</p></div><div class="lp-next-actions"><a class="qs-btn" href="package-${pack.key}.html" ${attrs('select',next.dataset.placement)}>Explore the ${pack.title} package →</a><span>${price} · guide, offline lab and revision resources</span></div>`;
  anchor.after(next);
  const title = document.getElementById(key === 'regulation' ? 'topic-name' : 'title');
  const refresh = () => {
    const lesson = title?.textContent.trim();
    next.querySelector('h2').textContent = lesson ? `Go further with “${lesson}”` : `Build your ${pack.title} study routine`;
    next.dataset.lesson = (lesson || 'module').slice(0,80);
  };
  refresh();
  if (title) new MutationObserver(refresh).observe(title, {childList:true,subtree:true,characterData:true});
  window.addEventListener('hashchange', refresh);
})();
