#!/usr/bin/env python3
"""Detect grids that use the gap-colour technique but whose children don't
cover the container — the empty area paints the light gap colour as a bug.

Geometry-based: track counting gives false positives on auto-fit (collapsed
tracks are still listed), so measure whether children actually cover the box.
"""
import sys
from playwright.sync_api import sync_playwright

PAGES = ["index", "pt", "es", "meetings", "meetings-pt", "meetings-es",
         "whatsapp-memory", "whatsapp-memory-pt", "whatsapp-memory-es",
         "business", "business-pt", "business-es",
         "meetings-activate", "meetings-activate-pt", "meetings-activate-es",
         "whatsapp-memory-activate", "whatsapp-memory-activate-pt",
         "whatsapp-memory-activate-es",
         "meetings-guide", "meetings-guide-pt", "meetings-guide-es"]

JS = """() => {
  const out = [];
  const light = c => {                       // is this a pale "gap" colour?
    const m = c.match(/[\\d.]+/g); if (!m) return false;
    const [r,g,b,a] = [ +m[0], +m[1], +m[2], m[3]===undefined?1:+m[3] ];
    return a > 0.05 && (r+g+b)/3 > 150;
  };
  document.querySelectorAll('*').forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.display !== 'grid') return;
    if (!light(cs.backgroundColor)) return;   // only the gap-colour technique
    const kids = [...el.children].filter(c => getComputedStyle(c).display !== 'none');
    if (!kids.length) return;
    const box = el.getBoundingClientRect();
    const pad = 4;                            // border + gap tolerance
    // does any horizontal band of the container lack child coverage?
    let maxRight = 0, minLeft = 1e9;
    kids.forEach(k => { const r = k.getBoundingClientRect();
                        maxRight = Math.max(maxRight, r.right);
                        minLeft  = Math.min(minLeft,  r.left); });
    const gapRight = box.right - maxRight, gapLeft = minLeft - box.left;
    if (gapRight > pad || gapLeft > pad) {
      out.push({cls: String(el.className).slice(0,26),
                kids: kids.length,
                leakRight: Math.round(gapRight), leakLeft: Math.round(gapLeft)});
    }
  });
  return out;
}"""

WIDTHS = [(1440, "desk"), (900, "tab"), (390, "mob")]

with sync_playwright() as p:
    b = p.chromium.launch()
    bad = 0
    for w, label in WIDTHS:
        pg = b.new_page(viewport={"width": w, "height": 900})
        for name in PAGES:
            pg.goto(f"http://localhost:8091/{name}.html", wait_until="networkidle")
            for r in pg.evaluate(JS):
                bad += 1
                print(f"  [{label}] {name:28} .{r['cls']:22} "
                      f"{r['kids']} kids · leak L{r['leakLeft']} R{r['leakRight']}")
        pg.close()
    print("CLEAN — no grid leaks at any width" if not bad else f"{bad} leaking grids")
    b.close()
