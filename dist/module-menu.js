(() => {
  const path = document.querySelector('.path-switch');
  if (!path || path.dataset.compact === 'true') return;
  const links = [...path.querySelectorAll('a')];
  const groups = [['Foundations',['Risk sensitivities','Stochastic calculus','Yield curves · Bootstrapping']],['Market & trading risk',['FRTB · Market risk','SIMM · Initial margin','IRRBB · Banking book']],['Credit & counterparty risk',['Credit risk · IFRS 9','SA-CVA · Counterparty risk','SA-CCR · Exposure','XVA · Valuation adjustments']],['Regulation & funding',['FRTB Regulation Divergences','Liquidity · Funding risk']]];
  const current = links.find(a => a.getAttribute('aria-current') === 'page') || links[0];
  const details = document.createElement('details'); details.className='module-browser'; details.innerHTML='<summary><span>Browse modules</span><b aria-hidden="true">⌄</b></summary>';
  const panel=document.createElement('div'); panel.className='module-browser-panel';
  for(const [title,names] of groups){const section=document.createElement('section'); section.innerHTML=`<h3>${title}</h3>`; for(const name of names){const link=links.find(a=>a.textContent.trim()===name); if(link)section.append(link.cloneNode(true));} panel.append(section);}
  details.append(panel); const selected=document.createElement('a'); selected.className='current-module'; selected.href=current.href; selected.setAttribute('aria-current','page'); selected.innerHTML=`<span class="current-kicker">CURRENT MODULE</span><span>${current.textContent}</span>`;
  path.replaceChildren(details,selected); path.dataset.compact='true';
})();
