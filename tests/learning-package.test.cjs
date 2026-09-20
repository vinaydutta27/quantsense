const assert = require('node:assert/strict');
const path = require('node:path');
const { chromium } = require('/Users/vinaydutta/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const expected = {sensitivities:'2307567',stochastic:'2308017',yield:'2308066',cva:'2308043',saccr:'2308045',xva:'2308046',irrbb:'2308049',liquidity:'2308062',credit:'2308058',simm:'2308063','treasury-risk':'2308038',frtb:'2307098'};
(async () => {
  const browser = await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
  try {
    const page = await browser.newPage();
    const errors = []; let topmateRequests = 0;
    page.on('pageerror', e => errors.push(e.message));
    await page.route('https://**/*', r => { if(r.request().url().includes('topmate.io')) topmateRequests++; return r.abort(); });
    for(const [module,id] of Object.entries(expected)) {
      topmateRequests = 0;
      await page.goto('file://' + path.resolve('dist',module+'.html'));
      assert.equal(await page.locator('#learning-package').count(),1,module);
      assert.equal(await page.locator('.frtb-pack').count(),0);
      assert.equal(await page.locator('.learning-package-cta').getAttribute('href'),'https://topmate.io/quantsense/'+id);
      assert(await page.locator('.learning-package-note').innerText().then(t=>t.includes('remain free')));
      assert(await page.evaluate(()=>document.querySelector('.module-guide').nextElementSibling.id === 'learning-package'));
      assert.equal(await page.locator('#learning-package iframe').count(),0);
      assert.equal(topmateRequests,0,'no Topmate request before preview');
      await page.locator('.learning-package-preview summary').click();
      await page.locator('#learning-package iframe').waitFor({state:'attached'});
      assert.equal(await page.locator('#learning-package iframe').getAttribute('src'),'https://topmate.io/quantsense/'+id);
      await page.locator('.learning-package-preview summary').click();
      await page.locator('.learning-package-preview summary').click();
      assert.equal(await page.locator('#learning-package iframe').count(),1);
      await page.locator('.learning-package-preview summary').click();
      for(const width of [390,1440]) {
        await page.setViewportSize({width,height:1000});
        const bounds=await page.locator('#learning-package').boundingBox();
        assert(bounds.x>=0 && bounds.x+bounds.width<=width+1,module+' card overflow');
      }
      if(module==='saccr') {
        await page.locator('#learning-package').screenshot({path:'/tmp/quantsense-package-card.png'});
      }
      assert(await page.locator('#lessons').innerText().then(t=>t.length>10),'lesson navigation remains');
    }
    await page.goto('file://' + path.resolve('dist/regulation.html'));
    assert.equal(await page.locator('#learning-package').count(),0);
    assert.deepEqual(errors,[]);
    console.log('PASS: 12 correct package links, optional lazy previews, no duplicate cards, free lesson navigation, mobile and desktop layouts.');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exit(1)});
