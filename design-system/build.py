#!/usr/bin/env python3
"""Restyle superclawman.ai into the blueprint design system.

Swaps ONLY the <style> block + head font links, injects the drawing-sheet frame,
and normalises legacy inline colours. All copy, structure and scripts are left
byte-identical — which is what keeps EN/PT/ES translations safe.
"""
import re, sys, pathlib, shutil

SITE = pathlib.Path(__file__).resolve().parent.parent / "avatars/site-deploy"
BP   = pathlib.Path(__file__).resolve().parent

# NOTE: meetings and whatsapp-memory share class NAMES but not always the same
# structure (.proof holds stat tiles on one and quote blocks on the other, .trow
# is a 2-cell table row vs a prose row). whatsapp-memory therefore layers its own
# overrides on top of the shared product base.
FAMILIES = {
    "index":     (["index.html", "pt.html", "es.html"], ["index.css"]),
    "product":   (["meetings.html", "meetings-pt.html", "meetings-es.html"], ["product.css"]),
    "wamemory":  (["whatsapp-memory.html", "whatsapp-memory-pt.html",
                   "whatsapp-memory-es.html"], ["product.css", "wamemory.css"]),
    "business":  (["business.html", "business-pt.html", "business-es.html"], ["business.css"]),
    "activate":  (["meetings-activate.html", "meetings-activate-pt.html", "meetings-activate-es.html",
                   "whatsapp-memory-activate.html", "whatsapp-memory-activate-pt.html",
                   "whatsapp-memory-activate-es.html"], ["activate.css"]),
    "guide":     (["meetings-guide.html", "meetings-guide-pt.html", "meetings-guide-es.html"], ["guide.css"]),
}

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@300;400;500;600'
         '&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">')

# sheet number per page (the drawing-sheet conceit — no duplicates)
SHEET = {
    "index": "A-01", "pt": "A-01", "es": "A-01",
    "meetings": "A-02", "whatsapp-memory": "A-03", "business": "A-04",
    "meetings-activate": "A-05", "whatsapp-memory-activate": "A-06",
    "meetings-guide": "A-07",
}


def sheet_of(name: str) -> str:
    stem = re.sub(r"-(pt|es)\.html$|\.html$", "", name)
    return SHEET.get(stem, "A-00")

LANG_LABEL = {"": "EN", "-pt": "PT-BR", "-es": "ES"}

# legacy palette -> blueprint tokens (applied outside the <style> block only)
COLOR_MAP = {
    "#00ffe0": "var(--amber)", "#00FFE0": "var(--amber)",
    "#050508": "var(--ground)", "#e8e8f0": "var(--ink)", "#E8E8F0": "var(--ink)",
    "#666688": "var(--ink-dim)", "#8b8ba8": "var(--ink-dim)", "#8B8BA8": "var(--ink-dim)",
}

# any rgba() of the legacy neon, whatever the alpha -> amber at the same alpha
NEON_RGBA = re.compile(r"rgba\(\s*0\s*,\s*255\s*,\s*224\s*,\s*([\d.]+)\s*\)")
# the blueprint system is hard-edged: no rounded corners anywhere
RADIUS = re.compile(r"border-radius\s*:\s*[^;\"']+;?")


def delegacy(fragment: str) -> str:
    """Normalise legacy inline styling outside the <style> block."""
    for old, new in COLOR_MAP.items():
        fragment = fragment.replace(old, new)
    fragment = NEON_RGBA.sub(lambda m: f"rgba(255,176,0,{m.group(1)})", fragment)
    fragment = RADIUS.sub("", fragment)
    return fragment


def lang_of(name: str) -> str:
    stem = name.replace(".html", "")
    if stem.endswith("-pt") or stem == "pt":
        return "-pt"
    if stem.endswith("-es") or stem == "es":
        return "-es"
    return ""


def frame(sheet: str, lang: str) -> str:
    tag = LANG_LABEL[lang]
    return (f'<div class="sheet-frame" aria-hidden="true">'
            f'<span class="frame-tick t">SUPERCLAWMAN · SHEET {sheet} · {tag}</span>'
            f'<span class="frame-tick b">SCALE 1:1 · REV 2026.08</span></div>')


def build(dry=False):
    core = (BP / "core.css").read_text()
    changed = []
    for fam, (files, cssnames) in FAMILIES.items():
        famcss = "\n".join((BP / c).read_text() for c in cssnames)
        css = core + "\n\n/* ===== " + fam + " ===== */\n" + famcss
        for name in files:
            p = SITE / name
            if not p.exists():
                print(f"  !! missing {name}"); continue
            s = p.read_text(encoding="utf-8")
            orig = s

            # 1. head fonts (idempotent)
            if "Azeret+Mono" not in s:
                s = s.replace("</head>", FONTS + "</head>", 1)

            # 2. swap the style block
            if "<style>" not in s:
                print(f"  !! no <style> in {name}"); continue
            s = re.sub(r"<style>.*?</style>", lambda m: "<style>\n" + css + "\n</style>",
                       s, count=1, flags=re.S)

            # 3. drawing-sheet frame right after <body>
            s = re.sub(r'<div class="sheet-frame".*?</div>', "", s, flags=re.S)
            s = re.sub(r"(<body[^>]*>)", r"\1" + frame(sheet_of(name), lang_of(name)), s, count=1)

            # 4. legacy colours in inline styles / attributes (outside <style>)
            head, style, tail = re.split(r"(<style>.*?</style>)", s, maxsplit=1, flags=re.S)
            s = delegacy(head) + style + delegacy(tail)

            if s != orig:
                changed.append(name)
                if not dry:
                    p.write_text(s, encoding="utf-8")
    return changed


if __name__ == "__main__":
    dry = "--dry" in sys.argv
    c = build(dry)
    print(("DRY: would change " if dry else "wrote ") + f"{len(c)} files")
    for n in c:
        print("  ", n)
