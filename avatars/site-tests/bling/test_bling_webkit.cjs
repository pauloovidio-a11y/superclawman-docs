// Safari-engine (WebKit) check of the Bling copy page. usage: node test_bling_webkit.cjs <base-url>
const { webkit } = require(process.env.PW_CORE);
const BASE = process.argv[2];
const URL_OK = BASE + '?code=4f2a9c0d1e7b3a6c5d8e9f0a1b2c3d4e5f6a7b8c&state=Zx9_kQ2mT7vR4pL8nW3sY6uB1cD5eF0g';
let fails = 0;
const check = (n, c, x) => { console.log((c ? 'PASS ' : 'FAIL ') + n + (!c && x !== undefined ? '  [' + JSON.stringify(x) + ']' : '')); if (!c) fails++; };
(async () => {
  const b = await webkit.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await p.addInitScript(() => {
    window.__copied = [];
    if (navigator.clipboard) { const o = navigator.clipboard.writeText.bind(navigator.clipboard);
      navigator.clipboard.writeText = (t) => { window.__copied.push(t); return o(t); }; }
    const oe = document.execCommand.bind(document);
    document.execCommand = (c, ...a) => { window.__copied.push('exec:' + (document.activeElement && document.activeElement.value)); return oe(c, ...a); };
  });
  await p.goto(URL_OK);
  check('webkit: ok screen shown', await p.isVisible('#ok'));
  check('webkit: no sideways scroll at 390 px', await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await p.tap('#copy');
  await p.waitForTimeout(600);
  const copied = await p.evaluate(() => window.__copied);
  const btn = await p.innerText('#copy'), st = await p.innerText('#status');
  console.log('webkit copy calls:', JSON.stringify(copied).slice(0, 200), '| button:', btn, '| status:', st);
  check('webkit: the full URL went to a copy call', copied.some(x => x === p.url() || x === 'exec:' + p.url()), copied);
  check('webkit: ends in Copiado or copy-by-hand, never silent', btn.includes('Copiado') || st.includes('toque e segure'), [btn, st]);
  const q = await ctx.newPage();
  await q.goto(BASE + '?error=access_denied&state=x');
  check('webkit: refused screen', (await q.isVisible('#fail')) && (await q.innerText('#failmsg')).includes('recusada'));
  await b.close();
  console.log(fails ? fails + ' FAILED' : 'ALL PASS');
  process.exit(fails ? 1 : 0);
})();
