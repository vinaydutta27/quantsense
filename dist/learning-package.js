(() => {
  const packages = {
    sensitivities: ['2307567', 'Risk Sensitivities', 'interpret price changes, compare sensitivity estimates and reason about hedges'],
    stochastic: ['2308017', 'Stochastic Calculus', 'connect probability and stochastic models with financial valuation'],
    yield: ['2308066', 'Yield Curves', 'follow market quotes through curve construction to pricing and risk'],
    cva: ['2308043', 'SA-CVA', 'connect CVA sensitivities and eligible hedges with risk capital'],
    saccr: ['2308045', 'SA-CCR', 'trace trades, netting and collateral through the exposure calculation'],
    xva: ['2308046', 'XVA', 'reason through the credit, funding and margin effects on valuation'],
    irrbb: ['2308049', 'IRRBB', 'connect balance-sheet cash flows and rate shocks with earnings and economic value'],
    liquidity: ['2308062', 'Liquidity & Funding Risk', 'connect liquidity ratios with cash-flow timing and funding decisions'],
    credit: ['2308058', 'Credit Risk', 'connect credit modelling choices with portfolio risk and IFRS 9 expected losses'],
    simm: ['2308063', 'SIMM', 'follow portfolio sensitivities through initial margin calculations'],
    'treasury-risk': ['2308038', 'Treasury Risk', 'weigh cash, funding and balance-sheet decisions together'],
    frtb: ['2307098', 'FRTB SA & IMA', 'connect market-risk concepts with capital calculations and implementation questions']
  };
  const key = location.pathname.split('/').filter(Boolean).pop()?.replace(/\.html$/, '');
  const pack = packages[key];
  const guide = document.querySelector('main .module-guide');
  if (!pack || !guide || document.getElementById('learning-package')) return;

  const [id, title, outcome] = pack;
  const url = `https://topmate.io/quantsense/${id}`;
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'learning-package.css';
  document.head.append(style);

  const section = document.createElement('section');
  section.id = 'learning-package';
  section.className = 'learning-package';
  section.setAttribute('aria-labelledby', 'learning-package-title');
  section.innerHTML = `
    <div class="learning-package-copy">
      <span class="learning-package-label">OPTIONAL PAID LEARNING PACKAGE</span>
      <h2 id="learning-package-title">Build practical understanding of ${title}</h2>
      <p>The ${title} learning package can help you develop a practical understanding of this subject. Use its structured study material and exercises to ${outcome}.</p>
      <p class="learning-package-note">All lessons and visualisations in this module remain free to use. The package is an optional next step.</p>
      <a class="learning-package-cta" href="${url}" target="_blank" rel="noopener noreferrer sponsored">View the ${title} package <span aria-hidden="true">↗</span><span class="learning-package-sr"> (opens Topmate in a new tab)</span></a>
    </div>
    <details class="learning-package-preview">
      <summary>Preview the package and contents</summary>
      <p>View the current contents and price on Topmate. Opening this preview loads a page from Topmate.</p>
      <div class="learning-package-frame"></div>
      <p>If the preview is unavailable, <a href="${url}" target="_blank" rel="noopener noreferrer sponsored">open the package page on Topmate</a>.</p>
    </details>`;
  guide.after(section);

  // Contact Topmate only when a visitor chooses to open the preview.
  const preview = section.querySelector('details');
  preview.addEventListener('toggle', () => {
    if (!preview.open || preview.querySelector('iframe')) return;
    const frame = document.createElement('iframe');
    frame.src = url;
    frame.title = `${title} learning package on Topmate`;
    frame.loading = 'lazy';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    preview.querySelector('.learning-package-frame').append(frame);
  });
})();
