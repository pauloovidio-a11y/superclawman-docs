"""Browser test of superclawman.ai/bling (the Bling 30-second code copy page).

usage: python3 test_bling_page.py <base-url-of-bling-page>
  e.g. http://127.0.0.1:8765/bling.html   or   https://superclawman.ai/bling
"""
import sys
from playwright.sync_api import sync_playwright

BASE = sys.argv[1]
CODE = "4f2a9c0d1e7b3a6c5d8e9f0a1b2c3d4e5f6a7b8c"
STATE = "Zx9_kQ2mT7vR4pL8nW3sY6uB1cD5eF0g"
OK_URL = f"{BASE}?code={CODE}&state={STATE}"
fails = 0


def check(name, cond, extra=""):
    global fails
    print(("PASS " if cond else "FAIL ") + name + (f"  [{extra}]" if extra and not cond else ""))
    if not cond:
        fails += 1


REJECT_CLIP = "navigator.clipboard && (navigator.clipboard.writeText = () => Promise.reject(new Error('no')));"
NO_EXEC = "document.execCommand = () => false;"
RECORD_CLIP = ("window.__copied = [];"
               "if (navigator.clipboard) { const o = navigator.clipboard.writeText.bind(navigator.clipboard);"
               " navigator.clipboard.writeText = (t) => { window.__copied.push(t); return o(t); }; }")

with sync_playwright() as pw:
    # ---------- Chromium (Android / desktop Chrome) ----------
    br = pw.chromium.launch()
    ctx = br.new_context(viewport={"width": 390, "height": 844}, is_mobile=True, has_touch=True,
                         permissions=["clipboard-read", "clipboard-write"])

    p = ctx.new_page()
    p.goto(OK_URL)
    check("chromium: ok screen shown", p.is_visible("#ok") and not p.is_visible("#fail"))
    check("chromium: no sideways scroll at 390 px", p.evaluate("document.documentElement.scrollWidth <= innerWidth"),
          p.evaluate("[document.documentElement.scrollWidth, innerWidth]"))
    check("chromium: address box shows the full URL", p.inner_text("#addr") == p.url)
    p.tap("#copy")
    clip = p.evaluate("navigator.clipboard.readText()")
    check("chromium: Copiar puts the full URL on the clipboard", clip == p.url, clip)
    check("chromium: button says Copiado", "Copiado" in p.inner_text("#copy"))
    check("chromium: status says go back to WhatsApp", "WhatsApp" in p.inner_text("#status"))

    # backup path: Clipboard API refuses, execCommand copies
    p2 = ctx.new_page()
    p2.add_init_script(REJECT_CLIP)
    p2.goto(OK_URL)
    p2.tap("#copy")
    p2.wait_for_timeout(300)
    check("chromium backup: button says Copiado", "Copiado" in p2.inner_text("#copy"), p2.inner_text("#status"))

    # both fail: the address gets selected and the page says so
    p3 = ctx.new_page()
    p3.goto(OK_URL)
    p3.evaluate("() => { navigator.clipboard.writeText = () => Promise.reject(new Error('no')); " + NO_EXEC + " }")
    p3.tap("#copy")
    p3.wait_for_timeout(300)
    check("chromium both fail: page says copy by hand", "toque e segure" in p3.inner_text("#status"))
    check("chromium both fail: the address is selected", p3.evaluate("String(getSelection())") == p3.url)

    # timer: at 31 s the late message shows
    p4 = ctx.new_page()
    p4.clock.install()
    p4.goto(OK_URL)
    check("timer: starts at 30", p4.inner_text("#seg") == "30")
    check("timer: no late message at start", not p4.is_visible("#late"))
    p4.clock.fast_forward(15000)
    check("timer: about 15 at 15 s", p4.inner_text("#seg") in ("15", "16"), p4.inner_text("#seg"))
    p4.clock.fast_forward(16000)
    check("timer: 0 after 31 s", p4.inner_text("#seg") == "0", p4.inner_text("#seg"))
    check("timer: late message shows after 31 s", p4.is_visible("#late"))
    check("timer: button still works after 31 s", p4.is_enabled("#copy"))

    # refused
    p5 = ctx.new_page()
    p5.goto(f"{BASE}?error=access_denied&state={STATE}")
    check("refused: fail screen", p5.is_visible("#fail") and not p5.is_visible("#ok"))
    check("refused: says recusada", "recusada" in p5.inner_text("#failmsg"))

    # opened by hand
    p6 = ctx.new_page()
    p6.goto(BASE)
    check("by hand: neutral title", "recebe o código" in p6.inner_text("#failtitle"))

    # code without state (not from our link)
    p7 = ctx.new_page()
    p7.goto(f"{BASE}?code={CODE}")
    check("code without state: no copy screen", not p7.is_visible("#ok"))

    # hostile error text stays text
    p8 = ctx.new_page()
    p8.goto(BASE + "?error=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E")
    check("hostile error: no element injected", p8.evaluate("document.querySelectorAll('#fail img').length") == 0)
    check("hostile error: shown as text", "<img" in p8.inner_text("#failmsg"))
    br.close()

    # WebKit (iPhone Safari engine): test_bling_webkit.cjs (the Node Playwright has the engine).

print(f"\n{'ALL PASS' if not fails else str(fails) + ' FAILED'}")
sys.exit(1 if fails else 0)
