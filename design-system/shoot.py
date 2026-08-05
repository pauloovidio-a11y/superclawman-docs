#!/usr/bin/env python3
"""Fold + full-page screenshots of the restyled site, desktop and mobile."""
import sys, pathlib
from playwright.sync_api import sync_playwright

OUT = pathlib.Path(__file__).parent / "shots"
OUT.mkdir(exist_ok=True)
PAGES = sys.argv[1:] or [
    "index", "pt", "es", "meetings", "meetings-pt", "meetings-es",
    "business", "business-pt", "business-es",
    "whatsapp-memory", "whatsapp-memory-pt", "whatsapp-memory-es",
    "meetings-activate", "meetings-activate-pt", "meetings-activate-es",
    "whatsapp-memory-activate", "whatsapp-memory-activate-pt",
    "whatsapp-memory-activate-es",
    "meetings-guide", "meetings-guide-pt", "meetings-guide-es"]

with sync_playwright() as p:
    b = p.chromium.launch()
    for name in PAGES:
        url = f"http://localhost:8091/{name}.html"
        for label, vp in (("desk", {"width": 1440, "height": 900}),
                          ("mob",  {"width": 390,  "height": 844})):
            pg = b.new_page(viewport=vp, device_scale_factor=1)
            pg.goto(url, wait_until="networkidle")
            pg.wait_for_timeout(500)
            pg.screenshot(path=OUT / f"{name}-{label}-fold.png")
            if label == "desk":
                pg.screenshot(path=OUT / f"{name}-full.png", full_page=True)
            pg.close()
        print("shot", name)
    b.close()
