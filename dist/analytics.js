(() => {
  const CONSENT_KEY = 'quantsense_analytics_consent';
  let memoryConsent = null;
  const getConsent = () => { try { return localStorage.getItem(CONSENT_KEY) || memoryConsent; } catch { return memoryConsent; } };
  const seen = new Set();
  const visible = new Set();
  const item = key => {
    const p = window.QSPackages?.packages.find(p => p.key === key);
    return p ? {item_id:p.id,item_name:p.title,item_category:p.group,price:window.QSPackages.price,quantity:1} : null;
  };
  const track = (name,parameters={}) => {
    if(getConsent() !== 'granted') return;
    // Do not send free-text inputs, query strings, names, contact details or slider values.
    window.gtag?.('event',name,{page_path:location.pathname,...parameters});
  };
  window.QSAnalytics = {track};
  const view = node => {
    if (!node.isConnected || node.closest('[hidden]') || getConsent() !== 'granted') return;
    const key = `${node.dataset.package}:${node.dataset.packageView}:${node.dataset.placement}`;
    const product = item(node.dataset.package);
    if (!product || seen.has(key)) return;
    seen.add(key);
    const common = {package_id:node.dataset.package,placement:node.dataset.placement};
    switch(node.dataset.packageView) {
      case 'list': track('view_item_list',{...common,item_list_id:node.dataset.placement,items:[product]}); break;
      case 'product': track('view_item',{...common,currency:window.QSPackages.currency,value:product.price,items:[product]}); break;
      case 'sample': track('package_sample_view',{...common,sample_type:node.dataset.sampleType}); break;
      default: track('package_offer_view',common);
    }
  };
  const updateConsent = value => {
    memoryConsent = value;
    try {localStorage.setItem(CONSENT_KEY,value);} catch {}
    window.gtag?.('consent','update',{analytics_storage:value});
    if(value === 'granted') {
      track('page_view',{page_title:document.title,page_location:location.origin+location.pathname,consent_update:true});
      visible.forEach(view);
    }
  };
  const preference = () => {
    if(document.querySelector('.analytics-consent')) return;
    const banner=document.createElement('section');
    banner.className='analytics-consent';banner.setAttribute('role','dialog');banner.setAttribute('aria-label','Analytics preference');
    banner.innerHTML='<div><strong>Help improve Quant$ense</strong><p>Allow Google Analytics to measure lesson use, package previews and clicks to Topmate. Your choice does not affect access to the lessons or packages.</p></div><div class="analytics-consent-actions"><button type="button" data-consent="denied">Decline</button><button type="button" data-consent="granted">Allow analytics</button></div>';
    document.body.append(banner);
    banner.querySelectorAll('[data-consent]').forEach(b=>b.addEventListener('click',()=>{updateConsent(b.dataset.consent);banner.remove();}));
  };
  document.addEventListener('DOMContentLoaded', () => {
    if(!getConsent()) preference();
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){visible.add(entry.target);view(entry.target);} else visible.delete(entry.target);
    }),{threshold:0.25});
    document.querySelectorAll('[data-package-view]').forEach(n=>observer.observe(n));
    document.addEventListener('click',event=>{
      if(event.target.closest?.('.analytics-settings')) {preference();return;}
      const lesson=event.target.closest?.('[data-lesson]');
      if(lesson?.matches('button,a')) track('lesson_select',{lesson_number:Number(lesson.dataset.lesson)+1});
      const question=event.target.closest?.('.concept-questions summary');
      if(question) track('question_open',{lesson:location.hash.slice(1,81)||'first'});
      const target=event.target.closest?.('[data-package-action]');
      if(!target || !target.dataset.package) return;
      if(target.tagName==='DETAILS' && (!event.target.closest('summary') || target.open)) return;
      const product=item(target.dataset.package);
      const common={package_id:target.dataset.package,placement:target.dataset.placement||'product'};
      const contextual=target.closest('#lesson-package');
      if(contextual) common.lesson=contextual.dataset.lesson;
      if(target.dataset.packageAction==='select' && product) track('select_item',{...common,item_list_id:common.placement,items:[product]});
      if(target.dataset.packageAction==='preview') track('package_preview_click',common);
      if(target.dataset.packageAction==='sample') track('package_sample_open',{...common,sample_type:target.dataset.sampleType||'preview'});
      if(target.dataset.packageAction==='checkout' && product) {
        track('package_checkout_click',{...common,currency:window.QSPackages.currency,value:product.price,items:[product],destination:'topmate'});
        // Only confirmed payment records can produce purchase/revenue events.
      }
    });
    document.getElementById('contact-form')?.addEventListener('submit',()=>track('contact_form_submit'));
  });
})();
