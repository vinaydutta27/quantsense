const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const {chromium} = require('playwright');
const {goals} = require('../content/career-goals.json');
const root = path.resolve(__dirname, '../dist');
const output = process.env.QS_QA_OUTPUT;
const mime = {'.html':'text/html', '.js':'text/javascript', '.css':'text/css'};
const server = http.createServer((req,res) => {
  const file = path.resolve(root, '.' + new URL(req.url,'http://localhost').pathname.replace(/\/$/,'/index.html'));
  if (!file.startsWith(root+path.sep)) { res.writeHead(403); return res.end(); }
  fs.readFile(file,(error,body) => {
    res.writeHead(error?404:200, {'Content-Type':mime[path.extname(file)] || 'application/octet-stream'});
    res.end(error?'Not found':body);
  });
});
(async () => {
  await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({headless:true, executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || undefined, args:['--no-sandbox','--disable-dev-shm-usage']});
  const context = await browser.newContext({viewport:{width:1440,height:1100}});
  await context.route('**/*',r => r.request().url().startsWith(origin)?r.continue():r.abort());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror',e => errors.push(e.message));
  const events = () => page.evaluate(() => Array.from(window.dataLayer || [], e=>Array.from(e)).filter(e=>e[0]==='event'));
  try {
    for (const file of ['index.html','packages.html']) {
      await page.goto(`${origin}/${file}`);
      assert.equal(await page.getByRole('tab').count(),3);
      assert.equal(await page.getByRole('tabpanel').count(),1);
      for (const goal of goals) {
        await page.getByRole('tab',{name:new RegExp(goal.label)}).click();
        for (const route of goal.routes) {
          if (goal.routes.length > 1) await page.getByLabel('Your interview area').selectOption(route.id);
          const visibleRoute = page.locator('.qs-goal-route:visible');
          assert.equal(await visibleRoute.count(),1);
          assert.equal(await visibleRoute.locator('.qs-goal-steps li').count(),3);
          assert.equal(await visibleRoute.locator('.qs-goal-package').getAttribute('data-package'),route.package);
          const links = await visibleRoute.locator('a').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')));
          for (const href of links) assert.equal((await context.request.get(origin+'/'+href)).status(),200,href);
          assert.equal(await visibleRoute.getByRole('link',{name:'Explore this package'}).getAttribute('href'),`package-${route.package}.html`);
          assert.equal(await visibleRoute.locator('[data-package-action="preview"]').getAttribute('href'),`package-${route.package}.html#preview`);
          assert.match(await visibleRoute.locator('.qs-goal-package').innerText(),/All steps in the online path are free/);
        }
      }
      assert.equal((await events()).length,0,'Goal interactions require analytics consent');
      if (file === 'packages.html') {
        await page.locator('#package-filters select[name="group"]').selectOption('Credit & counterparty');
        assert.equal(await page.locator('#all-packages .qs-card:visible').count(),4);
        assert.equal(await page.locator('.qs-goal-package:visible').count(),1,'Shop filters leave the chosen path visible');
      }
    }
    await page.goto(origin+'/packages.html#goal-interview-credit-risk');
    assert.equal(await page.getByLabel('Your interview area').inputValue(),'credit-risk');
    assert.equal(await page.locator('.qs-goal-package:visible').getAttribute('data-package'),'credit');
    const creditLinks = await page.locator('.qs-goal-route:visible .qs-goal-steps a').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')));
    for (const href of creditLinks) {
      const lesson = await context.newPage();
      await lesson.goto(origin+'/'+href);
      assert.equal(await lesson.evaluate(()=>window.CREDIT_APP.getState().lesson),href.split('#')[1]);
      await lesson.close();
    }
    await page.goto(origin+'/packages.html#goal-modelling');
    assert.equal(await page.locator('.qs-goal-package:visible').getAttribute('data-package'),'yield');
    const selected = page.getByRole('tab',{selected:true});
    await selected.focus();
    await selected.press('ArrowRight');
    assert.equal(await page.getByRole('tab',{selected:true}).getAttribute('data-goal-choice'),'treasury');
    await page.getByRole('tab',{selected:true}).press('Home');
    assert.equal(await page.getByRole('tab',{selected:true}).getAttribute('data-goal-choice'),'interview');
    await page.getByRole('tab',{selected:true}).press('End');
    assert.equal(await page.getByRole('tab',{selected:true}).getAttribute('data-goal-choice'),'treasury');
    await page.getByRole('button',{name:'Allow analytics',exact:true}).click();
    await page.getByRole('tab',{name:/Prepare for an interview/}).click();
    await page.getByLabel('Your interview area').selectOption('counterparty-risk');
    assert((await events()).some(e=>e[1]==='career_goal_select' && e[2].goal_id==='interview'));
    assert((await events()).some(e=>e[1]==='career_goal_focus_select' && e[2].path_id==='counterparty-risk'));
    // Keep the page open to inspect the consent-gated click event before navigation.
    await page.evaluate(()=>document.querySelector('.qs-goals').addEventListener('click',e=>{
      if(e.target.closest('[data-goal-step]')) e.preventDefault();
    }));
    await page.getByRole('link',{name:'Start this path for free'}).click();
    assert((await events()).some(e=>e[1]==='career_path_step' && e[2].module_id==='saccr' && e[2].step===1));
    await page.getByRole('button',{name:'Analytics preference'}).click();
    await page.getByRole('button',{name:'Decline',exact:true}).click();
    const eventCount=(await events()).length;
    await page.getByRole('tab',{name:/Develop treasury expertise/}).click();
    assert.equal((await events()).length,eventCount,'Declining stops goal events');
    for (const width of [320,390,768,1440]) {
      await page.setViewportSize({width,height:1100});
      for (const goal of goals) {
        await page.goto(`${origin}/#goal-${goal.id}`);
        assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${goal.id}: overflow at ${width}px`);
        const panel=page.locator('.qs-goal-panel:visible');
        const box=await panel.boundingBox();
        assert(box.x>=0 && box.x+box.width<=width+1);
      }
      if(output && [390,1440].includes(width)) {
        await page.goto(origin+'/#career-goals');
        await page.locator('.qs-goals').scrollIntoViewIfNeeded();
        fs.mkdirSync(output,{recursive:true});
        await page.locator('.qs-goals').screenshot({path:path.join(output,`career-goals-${width}.png`)});
      }
    }
    const noJS = await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:1000}});
    await noJS.route('**/*',r=>r.request().url().startsWith(origin)?r.continue():r.abort());
    const fallback = await noJS.newPage();
    await fallback.goto(origin+'/packages.html');
    assert.equal(await fallback.locator('.qs-goal-route:visible').count(),6,'All paths remain available without JavaScript');
    assert.equal(await fallback.locator('.qs-goal-package:visible').count(),6);
    await noJS.close();
    assert.deepEqual(errors,[]);
    console.log('PASS: six career paths on both pages; correct packages and previews; credit lesson deep links; keyboard and URL selection; mobile/tablet layout; consent-gated goal events; shop filters; no-JavaScript access.');
  } finally { await browser.close(); server.close(); }
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
