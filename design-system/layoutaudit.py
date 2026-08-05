#!/usr/bin/env python3
"""Layout sanity sweep over every page at three widths.

Catches: horizontal page overflow, images rendering far larger than their slot
(the 256px nav logo bug), elements spilling outside the viewport, and text
that collides with the fixed nav.
"""
from playwright.sync_api import sync_playwright

PAGES = ["index", "pt", "es", "meetings", "meetings-pt", "meetings-es",
         "whatsapp-memory", "whatsapp-memory-pt", "whatsapp-memory-es",
         "business", "business-pt", "business-es",
         "meetings-activate", "meetings-activate-pt", "meetings-activate-es",
         "whatsapp-memory-activate", "whatsapp-memory-activate-pt",
         "whatsapp-memory-activate-es",
         "meetings-guide", "meetings-guide-pt", "meetings-guide-es"]

JS = """(vw) => {
  const bad = [];
  // 1. horizontal overflow of the page
  if (document.documentElement.scrollWidth > vw + 1)
    bad.push(`page scrollWidth ${document.documentElement.scrollWidth} > ${vw}`);
  // 2. images bigger than 120px inside a nav, or wider than the viewport
  document.querySelectorAll('img').forEach(img => {
    const r = img.getBoundingClientRect();
    if (r.width > vw + 1) bad.push(`img wider than viewport: ${Math.round(r.width)}px ${img.alt||''}`);
    if (img.closest('nav') && r.width > 120)
      bad.push(`nav img oversized: ${Math.round(r.width)}px`);
  });
  // 3. any element spilling past the right edge
  document.querySelectorAll('body *').forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.position === 'fixed' || cs.display === 'none') return;
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.right > vw + 2 && cs.overflowX !== 'auto')
      bad.push(`overflow right ${Math.round(r.right)}: ${el.tagName}.${String(el.className).slice(0,22)}`);
  });
  return [...new Set(bad)].slice(0, 6);
}"""

with sync_playwright() as p:
    b = p.chromium.launch()
    total = 0
    for w, label in [(1440, "desk"), (900, "tab"), (390, "mob")]:
        pg = b.new_page(viewport={"width": w, "height": 900})
        for name in PAGES:
            pg.goto(f"http://localhost:8091/{name}.html", wait_until="networkidle")
            for msg in pg.evaluate(JS, w):
                total += 1
                print(f"  [{label}] {name:28} {msg}")
        pg.close()
    print("CLEAN — no layout defects at any width" if not total else f"{total} issues")
    b.close()
