#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the 6 offer pages (home + business, EN/PT/ES) into <out_dir>.
Usage: make_site.py <out_dir>   (out_dir = a copy of avatars/site-deploy)
Base CSS comes from the committed index.html (git HEAD), so a re-run is safe."""
import html, json, subprocess, sys, urllib.parse, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from content_home import HOME
from content_biz import BIZ

OUT = pathlib.Path(sys.argv[1])
REPO = pathlib.Path.home() / "Claude/projects/superclawman-docs"
BASE_REV = "926e5e4"  # last commit before the offer change
WA = "5511994917618"
IMG = "https://pauloovidio-a11y.github.io/superclawman-docs/avatars/web"
HOME_URL = {"en": "/", "pt": "/pt", "es": "/es"}
BIZ_URL = {"en": "/business", "pt": "/business-pt", "es": "/business-es"}
HOME_FILE = {"en": "index.html", "pt": "pt.html", "es": "es.html"}
BIZ_FILE = {"en": "business.html", "pt": "business-pt.html", "es": "business-es.html"}
FLAG = {"en": ("🇺🇸", "View in English"), "pt": ("🇧🇷", "Ver em Português"), "es": ("🇪🇸", "Ver en Español")}

old = subprocess.run(["git", "-C", str(REPO), "show", f"{BASE_REV}:avatars/site-deploy/index.html"],
                     capture_output=True, text=True, check=True).stdout
BASE_CSS = old.split("<style>", 1)[1].split("/* ===== index ===== */", 1)[0]

PAGE_CSS = """
/* ===== offer pages (2026-11) ===== */
nav.topnav{padding-right:150px}
.navlinks{display:flex;gap:26px}
.navlinks a{color:var(--ink-dim);text-decoration:none;transition:color .3s;text-transform:uppercase}
.navlinks a:hover{color:var(--amber)}
@media(max-width:900px){.navlinks{display:none}nav.topnav{padding-right:18px}}
@media(max-width:600px){.hero .eyebrow{flex-wrap:nowrap;letter-spacing:.2em;font-size:9.5px}}
.hero{padding:170px 0 96px;border-top:none}
@media(max-width:767px){.hero{padding:104px 0 60px}}
.hero h1{max-width:20ch;margin-bottom:26px}
.hero .sub{font-size:clamp(15px,1.5vw,18.5px);line-height:1.7;max-width:56ch;margin-bottom:22px}
.price-line{font-family:var(--mono);font-size:12.5px;letter-spacing:.04em;color:var(--ink-dim);line-height:1.9;
  border-left:2px solid var(--amber);padding:4px 0 4px 16px;margin-bottom:34px;max-width:60ch}
.price-line strong{color:var(--amber);font-weight:500}
.back-link{display:inline-block;margin-bottom:26px}
.sec-head{margin-bottom:44px;max-width:66ch}
.sec-head h2{margin-bottom:14px}

/* chat examples */
.asks{display:grid;gap:10px;max-width:720px}
.ask{border:1.5px solid var(--ink-faint);background:var(--panel);padding:15px 20px;max-width:88%;font-size:14.5px;line-height:1.6}
.ask .who{display:block;font-family:var(--mono);font-size:9.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--ink-mute);margin-bottom:5px}
.ask.me{justify-self:end;border-color:var(--amber-dim)}
.ask.me .who{color:var(--amber)}
.ask.bot{justify-self:start;background:var(--ground-2)}
@media(max-width:600px){.ask{max-width:100%}}

/* grids */
.grid{display:grid;gap:2px;border:1.5px solid var(--ink-faint);background:var(--ink-faint)}
.grid.g4{grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}
.grid.g3{grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
.grid.g2{grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))}
.cell{background:var(--ground);padding:30px 26px 32px;transition:background .4s;display:flex;flex-direction:column}
.cell:hover{background:var(--ground-2)}
.cell .n{display:block;margin-bottom:14px}
.cell h3{margin-bottom:10px;font-size:16px;letter-spacing:.02em}
.cell p{font-size:13.5px;color:var(--ink-dim);line-height:1.68}
.cell .tag{font-family:var(--mono);font-size:10px;letter-spacing:.26em;text-transform:uppercase;color:var(--amber);margin-bottom:12px;display:block}
.cell .vertical-link{align-self:flex-start;margin-top:20px;font-size:10px;padding:10px 18px;border-color:var(--ink-faint);color:var(--ink-dim)}
.cell .vertical-link:hover{border-color:var(--amber);color:var(--amber)}
.cell p{flex:1}

/* pricing */
.tiers{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:18px;align-items:stretch}
.tier{padding:34px 30px 32px;display:flex;flex-direction:column}
.tier.featured{border-color:var(--amber);background:var(--ground-2)}
.tier-name{font-family:var(--mono);font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:var(--amber);margin-bottom:18px}
.tier-price{font-family:var(--mono);font-weight:600;font-size:clamp(28px,3vw,38px);line-height:1;color:var(--ink);margin-bottom:6px}
.tier-price small{font-size:12px;font-weight:400;color:var(--ink-mute);letter-spacing:.08em;margin-left:6px}
.tier-for{font-size:13.5px;color:var(--ink-dim);margin:12px 0 20px;min-height:2.9em}
.tier ul{list-style:none;margin-bottom:22px;flex:1}
.tier li{font-size:13.5px;color:var(--ink);line-height:1.5;padding:9px 0 9px 20px;border-top:1px solid var(--ink-hair);position:relative}
.tier li::before{content:"";position:absolute;left:0;top:17px;width:9px;height:1.5px;background:var(--amber)}
.tier-req{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;color:var(--ink-mute);line-height:1.75;margin-bottom:22px}
.tier .btn{text-align:center}
.tier-talk{display:block;text-align:center;margin-top:14px;font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;color:var(--ink-mute);text-underline-offset:3px}
.tier-talk:hover{color:var(--amber)}
.after-note{margin-top:26px;max-width:74ch}
.cross{margin-top:22px;font-size:14px;color:var(--ink-dim)}
.cross a{color:var(--amber);font-weight:500;text-underline-offset:3px}

/* steps */
.steps{border-left:1px solid var(--ink-faint);margin-left:8px;max-width:760px}
.steps .st{position:relative;padding:0 0 34px 34px}
.steps .st:last-child{padding-bottom:0}
.steps .st::before{content:"";position:absolute;left:-4.5px;top:7px;width:8px;height:8px;background:var(--ground);border:1.5px solid var(--amber)}
.steps .st::after{content:"";position:absolute;left:0;top:11px;width:22px;height:1px;background:var(--ink-faint)}
.steps h3{font-size:16px;margin-bottom:6px}
.steps .dur{font-family:var(--mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--amber);margin-bottom:9px;display:block}
.steps p{font-size:13.5px;color:var(--ink-dim);line-height:1.68;max-width:62ch}

/* limits */
.limits{list-style:none;max-width:760px;border-top:1px solid var(--ink-hair)}
.limits li{padding:15px 0 15px 30px;border-bottom:1px solid var(--ink-hair);font-size:14.5px;color:var(--ink);position:relative;line-height:1.6}
.limits li::before{content:"×";position:absolute;left:4px;top:13px;font-family:var(--mono);color:var(--amber);font-size:16px}

/* faq */
.faqs{max-width:820px;border-top:1.5px solid var(--ink-faint)}
.faqs details{border-bottom:1px solid var(--ink-hair)}
.faqs summary{cursor:pointer;list-style:none;padding:20px 44px 20px 0;font-family:var(--mono);font-weight:500;font-size:15px;line-height:1.45;position:relative;color:var(--ink);transition:color .3s}
.faqs summary::-webkit-details-marker{display:none}
.faqs summary::after{content:"+";position:absolute;right:6px;top:17px;font-size:20px;color:var(--amber);font-weight:300;transition:transform .3s}
.faqs details[open] summary::after{transform:rotate(45deg)}
.faqs summary:hover{color:var(--amber)}
.faqs summary:focus-visible{outline:1.5px solid var(--amber);outline-offset:4px}
.faqs p{padding:0 44px 22px 0;font-size:14.5px;color:var(--ink-dim);line-height:1.72;max-width:70ch}

/* final cta */
.cta-block{border:1.5px solid var(--ink-faint);background:var(--panel);padding:52px 44px 54px;position:relative}
.cta-block::before{content:"";position:absolute;top:-1.5px;left:-1.5px;width:16px;height:16px;border-top:1.5px solid var(--amber);border-left:1.5px solid var(--amber)}
.cta-block::after{content:"";position:absolute;bottom:-1.5px;right:-1.5px;width:16px;height:16px;border-bottom:1.5px solid var(--amber);border-right:1.5px solid var(--amber)}
.cta-block h2{margin-bottom:12px}
.cta-block .sub{margin-bottom:28px}
@media(max-width:640px){.cta-block{padding:32px 22px 34px}}
.footer span{margin:0 6px}
"""

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">')

e = html.escape


def wa(text):
    return f"https://wa.me/{WA}?text={urllib.parse.quote(text)}"


def head(c, canon, alts, sheet):
    faq_ld = {"@context": "https://schema.org", "@type": "FAQPage",
              "mainEntity": [{"@type": "Question", "name": q,
                              "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in c["faq"]]}
    kw = f'\n  <meta name="keywords" content="{e(c["keywords"])}" />' if c.get("keywords") else ""
    return f"""<!DOCTYPE html>
<html lang="{c['lang']}">
<head>
  <meta charset="UTF-8" />
  <script>if(location.hostname==='www.superclawman.ai')location.replace('https://superclawman.ai'+location.pathname+location.search+location.hash);</script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{e(c['title'])}</title>
  <meta name="description" content="{e(c['desc'])}" />{kw}
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://superclawman.ai{canon}" />
  <meta property="og:title" content="{e(c['title'])}" />
  <meta property="og:description" content="{e(c['og_desc'])}" />
  <meta property="og:url" content="https://superclawman.ai{canon}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="{IMG}/og-image-1200x630.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="{IMG}/og-image-1200x630.png" />
  <link rel="icon" type="image/png" sizes="256x256" href="{IMG}/superclawman-256.png" />
  <link rel="apple-touch-icon" href="{IMG}/superclawman-256.png" />
  <link rel="alternate" hreflang="en" href="https://superclawman.ai{alts['en']}" />
  <link rel="alternate" hreflang="pt-BR" href="https://superclawman.ai{alts['pt']}" />
  <link rel="alternate" hreflang="es" href="https://superclawman.ai{alts['es']}" />
  <link rel="alternate" hreflang="x-default" href="https://superclawman.ai{alts['en']}" />
  <script type="application/ld+json">{json.dumps(faq_ld, ensure_ascii=False)}</script>
  <style>{BASE_CSS}{PAGE_CSS}</style>
{FONTS}</head>
<body><div class="sheet-frame" aria-hidden="true"><span class="frame-tick t">SUPERCLAWMAN · SHEET {sheet} · {c['tick']}</span><span class="frame-tick b">SCALE 1:1 · REV 2026.11</span></div>
"""


def langs(k, urls):
    out = '<div class="lang-row">'
    for other in ("en", "pt", "es"):
        if other != k:
            out += f'<a href="{urls[other]}" title="{FLAG[other][1]}" hreflang="{other}">{FLAG[other][0]}</a>'
    return out + "</div>\n"


def sec_head(eyebrow, title, sub=None):
    s = f'<div class="sec-head"><div class="eyebrow">{e(eyebrow)}</div><h2>{e(title)}</h2>'
    if sub:
        s += f'<p class="sub">{e(sub)}</p>'
    return s + "</div>\n"


# Stripe payment links of the public plans (24/11/2026). Source of truth:
# ~/.openclaw/workspace/scripts/stripe/assistant_plans_ids.json. A price change needs NEW links.
BUY = {
    "personal": {
        "en": "https://buy.stripe.com/dRmfZg234c9E2MP7pSao80L?locale=en",
        "pt": "https://buy.stripe.com/dRmeVc4bc5Lgbjl4dGao80M?locale=pt-BR",
        "es": "https://buy.stripe.com/14A5kC7no2z43QT39Cao80N?locale=es"
    },
    "business": {
        "en": "https://buy.stripe.com/aFaeVc9vw1v04UX6lOao80O?locale=en",
        "pt": "https://buy.stripe.com/dRm6oGePQa1w5Z1aC4ao80P?locale=pt-BR",
        "es": "https://buy.stripe.com/28E6oGcHI1v02MP11uao80Q?locale=es"
    }
}
BUY_PLAN = {"US$ 249": "personal", "US$ 299": "business"}
TALK = {"en": "Or talk to us first", "pt": "Ou fale com a gente antes", "es": "O habla con nosotros antes"}


def tiers(c, featured, k):
    out = '<div class="tiers">\n'
    for i, t in enumerate(c["tiers"]):
        per = f'<small>{e(c["per"])}</small>' if "US$" in t["price"] else ""
        cls = "tier featured" if i == featured else "tier"
        btn = "btn primary" if i == featured else "btn"
        items = "".join(f"<li>{e(x)}</li>" for x in t["items"])
        out += (f'<div class="{cls}"><div class="tier-name">{e(t["name"])}</div>'
                f'<div class="tier-price">{e(t["price"])}{per}</div>'
                f'<p class="tier-for">{e(t["for"])}</p><ul>{items}</ul>'
                f'<p class="tier-req">{e(t["req"])}</p>')
        plan = BUY_PLAN.get(t["price"])
        if plan:      # a fixed-price plan: buy on Stripe, WhatsApp stays as the second way in
            out += (f'<a class="{btn}" href="{e(BUY[plan][k])}" target="_blank" rel="noopener">{e(t["cta"])} →</a>'
                    f'<a class="tier-talk" href="{wa(t["wa"])}" target="_blank" rel="noopener">{e(TALK[k])}</a></div>\n')
        else:
            out += f'<a class="{btn}" href="{wa(t["wa"])}" target="_blank" rel="noopener">{e(t["cta"])} →</a></div>\n'
    return out + "</div>\n"


def faqs(c):
    out = '<div class="faqs">\n'
    for q, a in c["faq"]:
        out += f"<details><summary>{e(q)}</summary><p>{e(a)}</p></details>\n"
    return out + "</div>\n"


def footer(c, k, with_home):
    home = f'<span>·</span><a href="{HOME_URL[k]}">{e(c["home"])}</a>' if with_home else ""
    return f"""<div class="footer">
  &copy; 2026 SuperClawman <span>·</span> <a href="{wa(c['wa_text'])}" target="_blank" rel="noopener noreferrer">{e(c['footer_contact'])}</a>{home}
  <span>·</span><a href="/terms-of-service">{e(c['terms'])}</a><span>·</span><a href="/privacy">{e(c['privacy'])}</a><span>·</span><a href="/refund-policy">{e(c['refunds'])}</a>
  <div style="margin-top:12px">SUPERCLAWMAN LLC · Miami, Florida · <!--email_off--><a href="mailto:superclawman@superclawman.ai">superclawman@superclawman.ai</a><!--/email_off--></div>
</div>
</body>
</html>
"""


def final_cta(c):
    return (f'<section><div class="wrap"><div class="cta-block"><div class="eyebrow">{e(c["final_label"])}</div>'
            f'<h2>{e(c["final_title"])}</h2><p class="sub">{e(c["final_sub"])}</p>'
            f'<a class="btn primary" href="{wa(c["wa_text"])}" target="_blank" rel="noopener">{e(c["cta_main"])} →</a>'
            f'</div></div></section>\n')


def home_page(k):
    c = HOME[k]
    h = head(c, HOME_URL[k], HOME_URL, "A-01")
    h += (f'<nav class="topnav"><a class="home" href="{HOME_URL[k]}"><img src="{IMG}/superclawman-256.png" alt="" width="22" height="22">SUPERCLAWMAN</a>'
          f'<div class="navlinks"><a href="#does">{e(c["nav"][0])}</a><a href="#pricing">{e(c["nav"][1])}</a>'
          f'<a href="#faq">{e(c["nav"][2])}</a><a href="{BIZ_URL[k]}">{e(c["nav"][3])}</a></div></nav>\n')
    h += langs(k, HOME_URL)
    h += (f'<section class="hero"><div class="wrap"><div class="eyebrow"><span class="dot"></span>{e(c["eyebrow"])}</div>'
          f'<h1>{e(c["h1"])}</h1><p class="sub">{e(c["sub"])}</p><p class="price-line">{c["price_line"]}</p>'
          f'<div class="cta-row"><a class="btn primary" href="{wa(c["wa_text"])}" target="_blank" rel="noopener">{e(c["cta_main"])} →</a>'
          f'<a class="btn ghost" href="#pricing">{e(c["cta_second"])}</a></div></div></section>\n')
    # examples
    h += '<section><div class="wrap">' + sec_head(c["asks_eyebrow"], c["asks_title"], c["asks_sub"]) + '<div class="asks">\n'
    me = c["asks"][0][0]
    for who, text in c["asks"]:
        cls = "ask me" if who == me else "ask bot"
        h += f'<div class="{cls}"><span class="who">{e(who)}</span>{e(text)}</div>\n'
    h += "</div></div></section>\n"
    # does
    h += '<section id="does"><div class="wrap">' + sec_head(c["does_eyebrow"], c["does_title"], c["does_sub"]) + '<div class="grid g4">\n'
    for i, (t, b) in enumerate(c["does"], 1):
        h += f'<div class="cell"><span class="n">{i:02d}</span><h3>{e(t)}</h3><p>{e(b)}</p></div>\n'
    h += "</div></div></section>\n"
    # included
    h += '<section><div class="wrap">' + sec_head(c["inc_eyebrow"], c["inc_title"], c["inc_sub"]) + '<div class="grid g4">\n'
    for t, b in c["inc"]:
        h += f'<div class="cell"><h3>{e(t)}</h3><p>{e(b)}</p></div>\n'
    h += "</div></div></section>\n"
    # pricing
    h += ('<section id="pricing"><div class="wrap">' + sec_head(c["price_eyebrow"], c["price_title"], c["price_sub"])
          + tiers(c, 0, k) + f'<p class="note after-note">{e(c["price_note"])}</p></div></section>\n')
    # steps
    h += '<section><div class="wrap">' + sec_head(c["steps_eyebrow"], c["steps_title"], c["steps_sub"]) + '<div class="steps">\n'
    for i, (t, b) in enumerate(c["steps"], 1):
        h += f'<div class="st"><span class="dur">{i:02d}</span><h3>{e(t)}</h3><p>{e(b)}</p></div>\n'
    h += "</div></div></section>\n"
    # limits
    h += ('<section><div class="wrap">' + sec_head(c["lim_eyebrow"], c["lim_title"], c["lim_sub"])
          + '<ul class="limits">' + "".join(f"<li>{e(x)}</li>" for x in c["lim"]) + "</ul></div></section>\n")
    # faq
    h += '<section id="faq"><div class="wrap">' + sec_head(c["faq_eyebrow"], c["faq_title"]) + faqs(c) + "</div></section>\n"
    # final
    h += final_cta(c).replace("</div></div></section>",
        f'<p class="cross">{e(c["biz_line"])} <a href="{BIZ_URL[k]}">{e(c["biz_link"])} →</a></p></div></div></section>')
    c2 = dict(c); c2["home"] = ""
    return h + footer(c2, k, False)


def biz_page(k):
    c = BIZ[k]
    h = head(c, BIZ_URL[k], BIZ_URL, "A-04")
    h += (f'<nav class="topnav"><a class="home" href="{HOME_URL[k]}"><img src="{IMG}/superclawman-256.png" alt="" width="22" height="22">SUPERCLAWMAN</a></nav>\n')
    h += langs(k, BIZ_URL)
    h += (f'<section class="hero"><div class="wrap"><a class="back-link" href="{HOME_URL[k]}">{e(c["back"])}</a>'
          f'<div class="eyebrow"><span class="dot"></span>{e(c["eyebrow"])}</div>'
          f'<h1>{e(c["h1"])}</h1><p class="sub">{e(c["sub"])}</p><p class="price-line">{c["price_line"]}</p>'
          f'<div class="cta-row"><a class="btn primary" href="{wa(c["wa_text"])}" target="_blank" rel="noopener">{e(c["cta_main"])} →</a>'
          f'<a class="btn ghost" href="#pricing">{e(c["cta_second"])}</a></div></div></section>\n')
    h += '<section id="does"><div class="wrap">' + sec_head(c["does_eyebrow"], c["does_title"], c["does_sub"]) + '<div class="grid g3">\n'
    for i, (t, b) in enumerate(c["does"], 1):
        h += f'<div class="cell"><span class="n">{i:02d}</span><h3>{e(t)}</h3><p>{e(b)}</p></div>\n'
    h += "</div></div></section>\n"
    h += '<section><div class="wrap">' + sec_head(c["more_eyebrow"], c["more_title"], c["more_sub"]) + '<div class="grid g2">\n'
    for tag, t, b, link in c["more"]:
        h += (f'<div class="cell"><span class="tag">{e(tag)}</span><h3>{e(t)}</h3><p>{e(b)}</p>'
              f'<a class="vertical-link" href="{wa(c["tiers"][1]["wa"])}" target="_blank" rel="noopener">{e(link)} →</a></div>\n')
    h += "</div></div></section>\n"
    h += ('<section id="pricing"><div class="wrap">' + sec_head(c["price_eyebrow"], c["price_title"], c["price_sub"])
          + tiers(c, 0, k) + f'<p class="note after-note">{e(c["price_note"])}</p>'
          f'<p class="cross">{e(c["personal_line"])} <a href="{HOME_URL[k]}#pricing">{e(c["personal_link"])} →</a></p></div></section>\n')
    h += '<section><div class="wrap">' + sec_head(c["steps_eyebrow"], c["steps_title"], c["steps_sub"]) + '<div class="steps">\n'
    for t, d, b in c["steps"]:
        h += f'<div class="st"><h3>{e(t)}</h3><span class="dur">{e(d)}</span><p>{e(b)}</p></div>\n'
    h += "</div></div></section>\n"
    h += '<section id="faq"><div class="wrap">' + sec_head(c["faq_eyebrow"], c["faq_title"]) + faqs(c) + "</div></section>\n"
    h += final_cta(c)
    return h + footer(c, k, True)


for k in ("en", "pt", "es"):
    (OUT / HOME_FILE[k]).write_text(home_page(k), encoding="utf-8")
    (OUT / BIZ_FILE[k]).write_text(biz_page(k), encoding="utf-8")
    print("wrote", HOME_FILE[k], BIZ_FILE[k])
