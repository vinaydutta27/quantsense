const fs=require('fs'),assert=require('node:assert/strict');
const {chromium}=require('/Users/vinaydutta/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const files=fs.readdirSync('dist').filter(name=>name.endsWith('.html'));
for(const file of files){
  const html=fs.readFileSync('dist/'+file,'utf8');
  assert.equal((html.match(/googletagmanager\.com\/gtag\/js/g)||[]).length,1,file+' Google tag count');
  assert.equal((html.match(/gtag\("config","G-7S3F8C64KY"\)/g)||[]).length,1,file+' config count');
  assert.equal((html.match(/src="analytics\.js"/g)||[]).length,1,file+' consent script count');
  assert(html.indexOf('G-7S3F8C64KY')>html.indexOf('<head>')&&html.indexOf('G-7S3F8C64KY')<html.indexOf('</head>'),file+' head placement');
}
(async()=>{
  const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
  const context=await browser.newContext();const page=await context.newPage();
  await page.route('https://www.googletagmanager.com/**',route=>route.abort());
  await page.goto('http://localhost:8770/',{waitUntil:'domcontentloaded'});
  assert.equal(await page.locator('.analytics-consent').count(),1);
  assert((await page.evaluate(()=>dataLayer)).some(x=>x[0]==='consent'&&x[1]==='default'&&x[2].analytics_storage==='denied'));
  await page.getByRole('button',{name:'Allow analytics'}).click();
  assert.equal(await page.evaluate(()=>localStorage.getItem('quantsense_analytics_consent')),'granted');
  assert((await page.evaluate(()=>dataLayer)).some(x=>x[0]==='consent'&&x[1]==='update'&&x[2].analytics_storage==='granted'));
  await page.reload({waitUntil:'domcontentloaded'});assert.equal(await page.locator('.analytics-consent').count(),0);
  await context.clearCookies();await page.evaluate(()=>localStorage.clear());await page.reload({waitUntil:'domcontentloaded'});
  await page.getByRole('button',{name:'Decline'}).click();assert.equal(await page.evaluate(()=>localStorage.getItem('quantsense_analytics_consent')),'denied');
  assert.equal(await page.locator('.analytics-consent').count(),0);await browser.close();
  console.log(`PASS: one tag on ${files.length} pages; consent defaults denied, allow and decline persist.`);
})().catch(error=>{console.error(error);process.exit(1)});
