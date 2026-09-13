const fs = require('fs');
const assert = require('node:assert/strict');
const { chromium } = require('/Users/vinaydutta/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const appPages = ['index.html', 'stochastic.html', 'frtb.html', 'cva.html', 'saccr.html'];
const seoPages = ['about.html', 'contact.html', 'contact-thanks.html', 'faq.html', 'glossary.html', 'learning-paths.html', 'methodology.html', 'privacy.html'];
const allPages = [...appPages, ...seoPages, 'regulation.html'];
const root = process.env.QUANTSENSE_TEST_URL || 'http://localhost:8770';
const utility = ['Learning paths', 'Glossary', 'Regulation', 'Methodology', 'About', 'FAQ', 'Contact', 'Privacy'];
const learning = ['Risk sensitivities', 'Stochastic calculus', 'FRTB · Market risk', 'SA-CVA · Counterparty risk', 'SA-CCR · Exposure', 'Regulation navigator'];

for (const name of allPages) {
  const html = fs.readFileSync(`dist/${name}`, 'utf8');
  assert(!html.includes('class="top-links"'), `${name}: legacy top links remain`);
  assert(!html.includes('class="cva-links"') && !html.includes('class="saccr-links"'), `${name}: duplicate utility nav remains`);
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('https://www.googletagmanager.com/**', route => route.abort());

  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const name of allPages) {
      const response = await page.goto(`${root}/${name}`, { waitUntil: 'domcontentloaded' });
      assert(response && response.ok(), `${name}: page failed to load`);
      assert(!(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)), `${name}: horizontal overflow at ${width}px`);

      const utilitySelector = name === 'regulation.html' ? '.reg-utility' : appPages.includes(name) ? '.site-links' : '.seo-header nav';
      const utilityText = await page.locator(`${utilitySelector} a`).allTextContents();
      assert.deepEqual(name === 'regulation.html' || appPages.includes(name) ? utilityText : utilityText.slice(1), utility, `${name}: utility links differ`);
      assert(await page.locator(utilitySelector).isVisible(), `${name}: utility navigation hidden at ${width}px`);

      if (appPages.includes(name) || name === 'regulation.html') {
        const selector = name === 'regulation.html' ? '.reg-header nav' : '.path-switch';
        assert.deepEqual(await page.locator(`${selector} a`).allTextContents(), learning, `${name}: learning paths differ`);
        assert.equal(await page.locator(`${selector} a[aria-current="page"]`).count(), 1, `${name}: learning-path active state missing`);
      } else {
        assert.equal(await page.locator('.seo-header nav a[aria-current="page"]').count(), 1, `${name}: page active state missing`);
      }
    }
  }

  assert.deepEqual(errors, []);
  await browser.close();
  console.log(`PASS: ${allPages.length} pages have consistent, visible navigation at phone, tablet and desktop widths.`);
})().catch(error => { console.error(error); process.exit(1); });
