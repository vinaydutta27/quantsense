const {chromium}=require('/Users/vinaydutta/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('fs');
(async()=>{
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const page=await b.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
const root=process.env.QUANTSENSE_TEST_URL||'http://127.0.0.1:8770';
await page.route('https://www.googletagmanager.com/**',r=>r.abort());
await page.goto(root+'/xva.html',{waitUntil:'domcontentloaded'});
await page.getByRole('button',{name:'Decline',exact:true}).click();
assert.equal(await page.locator('#lessons button').count(),13);
const lessons=await page.evaluate(()=>XVA_LESSONS.map(l=>({id:l.id,inputs:l.inputs})));
for(const width of [390,768,1440]){
 await page.setViewportSize({width,height:1000});
 for(const l of lessons){
  await page.evaluate(id=>XVA_APP.configure({lesson:id}),l.id);
  assert.equal(await page.locator('.concept-questions li').count(),10);
  for(const input of l.inputs){const locator=page.locator('#f-'+input.id);if(input.options)await locator.selectOption(input.options.at(-1)[0]);else {await locator.fill(String(input.max));await locator.dispatchEvent('input');}}
  assert(!/NaN|undefined|Infinity/.test(await page.locator('#stats').innerText()),l.id);
  assert(!/NaN|undefined|Infinity/.test(await page.locator('#chart').innerHTML()),l.id);
  assert(!(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)),l.id+' overflow '+width);
  await page.locator('#reset').click();assert.deepEqual(await page.evaluate(()=>XVA_APP.getState().values),Object.fromEntries(l.inputs.map(i=>[i.id,i.value])));
  await page.locator('.concept-questions summary').first().click();assert(await page.locator('.suggested-answer').first().isVisible());
 }
}
await page.evaluate(()=>XVA_APP.configure({lesson:'cva'}));await page.locator('#next').click();assert.equal(await page.evaluate(()=>XVA_APP.getState().lesson),'dva');
await page.goto(root+'/xva.html#colva',{waitUntil:'domcontentloaded'});assert.equal(await page.evaluate(()=>XVA_APP.getState().lesson),'colva');
fs.mkdirSync('/private/tmp/quantsense-xva',{recursive:true});
for(const id of ['overview','cva','colva','clearing']){await page.evaluate(id=>XVA_APP.configure({lesson:id}),id);await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:'/private/tmp/quantsense-xva/'+id+'.png'});}
await page.setViewportSize({width:390,height:950});await page.evaluate(()=>XVA_APP.configure({lesson:'overview'}));await page.screenshot({path:'/private/tmp/quantsense-xva/mobile.png',fullPage:true});
assert.deepEqual(errors,[]);await b.close();console.log('PASS: 13 XVA lessons × 3 viewport widths; all controls, reset, questions, next, deep links, finite charts and no page errors.');
})().catch(e=>{console.error(e);process.exit(1)});
