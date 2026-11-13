# Tests for superclawman.ai/bling (the Bling 30-second code copy page)

Run against the live page (or a local server of `avatars/site-deploy`, path `/bling.html`):

    python3 -I test_bling_page.py https://superclawman.ai/bling                      # 21 checks, Chromium
    PW_CORE=~/Claude/projects/beautiful-websites-kit/node_modules/playwright-core \
      node test_bling_webkit.cjs https://superclawman.ai/bling                       # 5 checks, WebKit (iPhone)

The Python Playwright on the Mac mini has no WebKit build, so WebKit runs from the Node copy.
Both end with ALL PASS. First run: 13/11/2026, deploy af48e20f.
