const {chromium}=require('/Users/vinaydutta/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const root=process.env.QUANTSENSE_TEST_URL||'http://127.0.0.1:8770';await page.route('https://www.googletagmanager.com/**',r=>r.abort());
 const response=await page.goto(root+'/irrbb.html',{waitUntil:'domcontentloaded'});assert(response.ok());
 if(await page.getByRole('button',{name:'Decline',exact:true}).isVisible())await page.getByRole('button',{name:'Decline',exact:true}).click();
 assert.equal(await page.locator('#lessons button').count(),19);
 const lessons=await page.evaluate(()=>IRRBB_LESSONS.map(l=>({id:l.id,inputs:l.inputs})));
 for(const width of [390,768,1440]){
  await page.setViewportSize({width,height:1000});
  for(const l of lessons){
   await page.evaluate(id=>IRRBB_APP.configure({lesson:id}),l.id);assert.equal(await page.locator('.concept-questions li').count(),10);
   for(const edge of ['min','max'])for(const d of l.inputs){const el=page.locator('#f-'+d.id);if(d.options)await el.selectOption(d.options[edge==='min'?0:d.options.length-1][0]);else{await el.fill(String(d[edge]));await el.dispatchEvent('input');}}
   assert(!/NaN|undefined|Infinity/.test(await page.locator('#stats').innerText()),l.id);assert(!/NaN|undefined|Infinity/.test(await page.locator('#chart').innerHTML()),l.id);
   assert(!(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)),l.id+' overflow '+width);
   await page.locator('#reset').click();assert.deepEqual(await page.evaluate(()=>IRRBB_APP.getState().values),Object.fromEntries(l.inputs.map(d=>[d.id,d.value])));
   await page.locator('.concept-questions summary').first().click();assert(await page.locator('.suggested-answer').first().isVisible());
  }
 }
 await page.evaluate(()=>IRRBB_APP.configure({lesson:'lab'}));await page.locator('#book-preset').selectOption('matched');await page.locator('#load-preset').click();
 assert(await page.evaluate(()=>IRRBB_MATH.portfolio(IRRBB_BOOK,IRRBB_MATH.defaults()).scenarios.every(s=>Math.abs(s.deve)<1e-9&&Math.abs(s.dnii)<1e-9)));
 const amount=page.locator('[data-row="0"][data-key="amount"]');await amount.fill('');await amount.dispatchEvent('change');assert.equal(await amount.getAttribute('aria-invalid'),'true');assert.equal(await page.evaluate(()=>IRRBB_BOOK[0].amount),100);
 await amount.fill('120');await amount.dispatchEvent('change');assert.equal(await page.evaluate(()=>IRRBB_BOOK[0].amount),120);
 await page.locator('#add-position').click();assert.equal(await page.locator('.book-row').count(),3);
 for(const type of ['mortgage','float','term','nmd','swap','fixed']){await page.locator('[data-row="2"][data-key="type"]').selectOption(type);assert(!/NaN|undefined|Infinity/.test(await page.locator('#lab-detail').innerText()));}
 await page.locator('[data-remove="2"]').click();assert.equal(await page.locator('.book-row').count(),2);
 await page.locator('#inspect-row').selectOption('1');assert(await page.locator('#flow-detail tbody tr').count()>0);
 for(const id of ['export-flows','export-results']){const [download]=await Promise.all([page.waitForEvent('download'),page.locator('#'+id).click()]);const path=await download.path();const csv=fs.readFileSync(path,'utf8');assert(csv.split('\r\n').length>6);assert(!/NaN|undefined|Infinity/.test(csv));}
 await page.locator('#next').click();assert.equal(await page.evaluate(()=>IRRBB_APP.getState().lesson),'cashflows');
 await page.goto(root+'/irrbb.html#beta',{waitUntil:'domcontentloaded'});assert.equal(await page.evaluate(()=>IRRBB_APP.getState().lesson),'beta');
 fs.mkdirSync('/private/tmp/quantsense-irrbb',{recursive:true});
 for(const id of ['lab','shocks','nii','nmd']){await page.evaluate(id=>IRRBB_APP.configure({lesson:id}),id);await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'/private/tmp/quantsense-irrbb/'+id+'.png'});}
 await page.setViewportSize({width:390,height:900});await page.evaluate(()=>IRRBB_APP.configure({lesson:'lab'}));await page.locator('#balance-builder').scrollIntoViewIfNeeded();await page.screenshot({path:'/private/tmp/quantsense-irrbb/mobile-builder.png'});
 await page.locator('#chart').scrollIntoViewIfNeeded();await page.screenshot({path:'/private/tmp/quantsense-irrbb/mobile-chart.png'});
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS: 19 IRRBB lessons at phone, tablet and desktop widths; controls, questions, builder edits, presets, CSV downloads, navigation and finite charts.');
})().catch(e=>{console.error(e);process.exit(1)});
