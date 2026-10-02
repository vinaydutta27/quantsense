const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'../dist');
const {packages:packs}=require('../content/packages.json');
const output=process.env.QS_QA_OUTPUT;
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.pdf':'application/pdf'};
const server=http.createServer((req,res)=>{
 const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/\/$/,'/index.html'));
 if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
 fs.readFile(file,(error,body)=>{res.writeHead(error?404:200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(error?'Not found':body);});
});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const origin=`http://127.0.0.1:${server.address().port}`;
 const browser=await chromium.launch({headless:true,executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||undefined,args:['--no-sandbox','--disable-dev-shm-usage']});
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 await context.route('**/*',r=>r.request().url().startsWith(origin)?r.continue():r.abort());
 const page=await context.newPage();const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 const events=()=>page.evaluate(()=>Array.from(window.dataLayer||[],e=>Array.from(e)).filter(e=>e[0]==='event'));
 const noOverflow=async label=>assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),label+' has horizontal overflow');
 try{
  await page.goto(origin+'/packages.html');
  await page.locator('#all-packages').scrollIntoViewIfNeeded();
  assert.equal((await events()).length,0,'No custom events before consent');
  await page.getByRole('button',{name:'Allow analytics',exact:true}).click();
  await page.waitForFunction(()=>Array.from(dataLayer).some(e=>e[1]==='view_item_list'));
  await page.getByLabel('Your area').selectOption('Credit & counterparty');
  assert.equal(await page.locator('.qs-card:visible').count(),4);
  await page.getByLabel('Search by subject or role').fill('unmatched-package');
  assert.equal(await page.locator('.qs-card:visible').count(),0);
  await page.getByRole('button',{name:'Show all packages'}).click();
  assert.equal(await page.locator('.qs-card:visible').count(),12);
  await page.locator('[data-package="frtb"] a[data-package-action="select"]').first().click();
  await page.waitForURL('**/package-frtb.html');
  await page.waitForFunction(()=>Array.from(dataLayer).some(e=>e[1]==='view_item'));
  await page.locator('.qs-readiness summary').click();
  for(const checkbox of await page.locator('.qs-checks input').all())await checkbox.check();
  assert.match(await page.locator('.qs-readiness [role=status]').innerText(),/recognise the starting concepts/);
  await page.locator('details[data-sample-type="worked_solution"] summary').click();
  assert.match(await page.locator('details[data-sample-type="worked_solution"]').innerText(),/95.92/);
  assert((await events()).some(e=>e[1]==='package_sample_open'));
  const sample=page.frameLocator('.qs-lab-frame');
  assert.match(await sample.locator('#results').innerText(),/95.92/);
  await sample.locator('#second').fill('80');
  assert.match(await sample.locator('#results').innerText(),/168.52/);
  await sample.getByRole('button',{name:'Reset inputs'}).click();
  assert.match(await sample.locator('#results').innerText(),/95.92/);
  const popupPromise=context.waitForEvent('page');
  await page.locator('.qs-purchase a[data-package-action="checkout"]').click();
  const popup=await popupPromise;await popup.close();
  assert((await events()).some(e=>e[1]==='package_checkout_click'));
  assert(!(await events()).some(e=>['purchase','begin_checkout'].includes(e[1])),'Outbound link must not become a purchase');
  await page.locator('.analytics-settings').click();await page.getByRole('button',{name:'Decline',exact:true}).click();
  const count=(await events()).length;
  await page.locator('.qs-flashcards summary').first().click();
  assert.equal((await events()).length,count,'Declining stops custom measurement');
  for(const width of [390,1440]){
   await page.setViewportSize({width,height:1000});
   for(const name of ['index','packages',...packs.map(p=>'package-'+p.key)]){
    await page.goto(`${origin}/${name}.html`);await noOverflow(name+' '+width);
    assert.equal(await page.locator('h1').count(),1,name+' heading');
    if(output&&['index','packages','package-frtb'].includes(name)){
     fs.mkdirSync(output,{recursive:true});await page.screenshot({path:path.join(output,`${name}-${width}.png`),fullPage:name==='package-frtb'});
    }
   }
  }
  for(const p of packs){
   await page.goto(`${origin}/package-${p.key}.html`);
   assert.equal(await page.locator('[data-package-action="checkout"]').first().getAttribute('href'),`https://topmate.io/quantsense/${p.id}`);
   assert.equal(await page.locator('.qs-checks input').count(),3);
   const hrefs=await page.locator('a[href],script[src],link[href],iframe[src]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')||n.getAttribute('src')).filter(s=>s&&!s.startsWith('#')&&!/^(https?:|mailto:|data:)/.test(s)));
   for(const href of hrefs)assert.equal((await context.request.get(origin+'/'+href)).status(),200,`${p.key}: ${href}`);
   await page.goto(`${origin}/${p.key}.html`);
   assert.equal(await page.locator('#learning-package').count(),1,p.key);
   assert.equal(await page.locator('#lesson-package').count(),1,p.key);
   assert.equal(await page.locator('#learning-package [data-package-action="checkout"]').getAttribute('href'),`https://topmate.io/quantsense/${p.id}`);
   const firstTitle=await page.locator('#title').innerText();
   await page.locator('#lessons [data-lesson]').nth(1).click();
   await page.waitForFunction(old=>document.getElementById('title').textContent!==old,firstTitle);
   assert((await page.locator('#lesson-package h2').innerText()).includes(await page.locator('#title').innerText()));
   const range=page.locator('#inputs input[type="range"]').first();
   if(await range.count()){await range.focus();await range.press('ArrowRight');}
   for(const width of [390,1440]){await page.setViewportSize({width,height:1000});const box=await page.locator('#learning-package').boundingBox();assert(box.x>=0&&box.x+box.width<=width+1,p.key+' offer overflow');}
  }
  await page.goto(origin+'/regulation.html');
  assert.equal(await page.locator('#learning-package').count(),1);
  assert.equal(await page.locator('#lesson-package [data-package]').first().getAttribute('data-package'),'frtb');
  assert(await page.evaluate(()=>document.querySelector('#comparator').nextElementSibling.id==='lesson-package'));
  await page.goto(origin+'/package-treasury-risk.html');
  assert.match(await page.frameLocator('.qs-lab-frame').locator('#results').innerText(),/29.10/);
  assert.deepEqual(errors,[]);
  console.log('PASS: 12 product/module journeys; search and readiness; consent and event semantics; two sample calculators; desktop/mobile overflow; 13 contextual offers; local assets.');
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
