#!/usr/bin/env python3
"""Rewrite the Terms, Refund and Privacy pages for the personal assistant plans.
Usage: patch_legal.py <site-deploy dir>. Replaces whole <h2> sections by number."""
import re, sys, pathlib

D = pathlib.Path(sys.argv[1])
H2 = re.compile(r'    <h2[^>]*><span class="num">(\d\d)</span>.*?(?=    <h2|\n    <div class="rule"></div>\n\s*<div class="foot|\n  </main>|\n    <div class="foot)', re.S)


def sec(num, title, *paras, anchor=""):
    a = f' id="{anchor}"' if anchor else ""
    body = "\n".join(p if p.startswith("<p") else f"    <p>{p}</p>" for p in paras)
    body = body.replace("\n<p", "\n    <p")
    if body.startswith("<p"):
        body = "    " + body
    return f'    <h2{a}><span class="num">{num}</span>{title}</h2>\n{body}\n\n'


def rebuild(name, lede, sections, updated="24 November 2026"):
    f = D / name
    t = f.read_text()
    first = re.search(r'    <h2[^>]*><span class="num">01</span>', t).start()
    last = list(re.finditer(r'    <h2[^>]*><span class="num">\d\d</span>.*?</p>\n', t, re.S))
    # end of the last section = end of the last <p> before the footer markup
    tail_start = t.index("</p>\n", t.rindex('<span class="num">')) + 5
    # the last section can hold more than one <p>
    m = re.compile(r'(    <p[ >].*?</p>\n)+', re.S).match(t, tail_start)
    if m:
        tail_start = m.end()
    head, tail = t[:first], t[tail_start:]
    head = re.sub(r'Last updated [^<]+', f'Last updated {updated}', head)
    head = head.replace("REV 2026.09", "REV 2026.11")
    head = re.sub(r'<p class="lede">.*?</p>', f'<p class="lede">{lede}</p>', head, flags=re.S)
    body = "".join(sec(f"{i:02d}", *s[:-1], anchor=s[-1]) for i, s in enumerate(sections, 1))
    f.write_text(head + body.rstrip("\n") + "\n" + tail)
    print(name, "sections:", len(sections))


def keep(name, num):
    """Return (title, paras...) of an existing section, unchanged."""
    t = (D / name).read_text()
    m = re.search(rf'    <h2[^>]*><span class="num">{num}</span>(.*?)</h2>\n((?:    <p[ >].*?</p>\n)+)', t, re.S)
    return (m.group(1), *re.findall(r'    (<p[ >].*?</p>)\n', m.group(2), re.S))


MAIL = '<a href="mailto:superclawman@superclawman.ai">superclawman@superclawman.ai</a>'

# ---------------------------------------------------------------- TERMS
T = "terms-of-service.html"
terms = [
    (*keep(T, "01"), ""),
    ("What we provide",
     "<strong>Personal assistant plans.</strong> An AI assistant that works for one person. You talk to it on "
     "WhatsApp. It runs on a server that we rent, install and operate for you alone. It works with the accounts you "
     "connect to it, such as WhatsApp, e-mail, calendar and files. The <strong>Personal</strong> plan is for one "
     "person and their own accounts. The <strong>Business</strong> plan adds company e-mail and shared files, "
     "messages to the clients, suppliers and team you allow, documents with your brand, and an invoice to your "
     "company. The monthly price covers the server, the installation, the connection of your accounts, monitoring, "
     "updates and support.",
     "<strong>Custom AI services.</strong> Assistants for a team, agents that answer customers, and integrations "
     "with company systems. We agree the scope and the price in writing for each engagement.",
     "<strong>Earlier products.</strong> SuperClawman for Meetings, WhatsApp Memory, founding seats and founding "
     "licences are no longer offered to new customers. If you hold one, it continues as published when you bought "
     "it, and these terms still apply to it.", ""),
    ("What you bring",
     "<strong>A Claude subscription.</strong> The assistant thinks with Claude, the AI made by Anthropic. You need "
     "a Claude Pro subscription or higher, in your name or your company's, paid by you direct to Anthropic. We do "
     "not resell it and it is not part of our price. Your use of Claude follows Anthropic's own terms and limits. "
     "We do not control them and we are not responsible for them.",
     "<strong>Your accounts.</strong> You connect only accounts that are yours or that you have the right to "
     "connect. WhatsApp, Google, Microsoft and the other providers apply their own rules to your accounts. A "
     "provider can limit, change or suspend an account or a connection, and that is outside our control. If this "
     "happens we help you restore the service where it is possible.", ""),
    ("Orders, pricing and payment",
     "Prices are shown in US dollars and include no taxes unless stated; any applicable taxes are your "
     "responsibility. Payment is processed by Stripe; we never see or store your card number.",
     "Assistant plans are billed once a month, in advance, at the price published when you order. The first "
     "month starts on the day your assistant goes into service. There is no "
     "setup fee and no minimum term. If we change the price of your plan, we tell you at least 30 days before the "
     "change, and you can cancel before it applies. If a payment fails, we tell you, and we may pause the assistant "
     "until the payment is made.",
     "Custom services are quoted per engagement and invoiced before work starts or per agreed milestones.", ""),
    ("Your data and your instructions",
     "You keep all rights to your data at all times. The assistant handles the data of the accounts you connect "
     "only to do what you ask. It stays on the server that runs your assistant, and no other customer shares that "
     "server. Our team reaches it only to operate, repair and support your assistant. Our "
     '<a href="/privacy">privacy policy</a> gives the detail.',
     "The assistant acts for you. It writes only to the people you allow, and it signs as your assistant. You "
     "decide who those people are and what it may do for you, and you are responsible for those instructions and "
     "for the messages it sends on them.",
     "For the earlier products: WhatsApp Memory runs entirely on your hardware and we never receive your messages. "
     "The Meetings assistant processes call audio only while it is in a call you invited it to.", ""),
    (*keep(T, "05"), ""),
    (*keep(T, "06"), ""),
    ("Availability and support",
     "We monitor each assistant and repair faults when we find them. Services are provided on a best-efforts "
     "basis, and we do not promise a fixed uptime. The assistant also depends on services we do not run, such as "
     "Claude, WhatsApp and your e-mail provider. Support is on the WhatsApp line you used to order and by email at "
     + MAIL + ". We update the assistant often. When something is not ready, we say so plainly.", ""),
    (*keep(T, "08"), ""),
    ("Term and termination",
     "Assistant plans run month to month. You can cancel at any time with a message to us. The month in progress "
     "is due and is not refunded, and the assistant stays on until the end of that month unless you ask us to stop "
     "it sooner. When the plan ends we give you your data on request and delete the server that ran your assistant "
     "within 30 days. Its backups are deleted within 30 days after that. We keep only the records the law tells us "
     "to keep. Your Claude subscription is yours. You keep it or cancel it with Anthropic.",
     "We may end a plan with 30 days' notice, or at once if the service is abused as described under Acceptable "
     "use or a payment stays unpaid.",
     "Either side may end a custom engagement for material breach that is not fixed within fourteen days of "
     "written notice. Earlier licences run as published.", ""),
    (*keep(T, "10"), ""),
    (*keep(T, "11"), ""),
]

# ---------------------------------------------------------------- REFUNDS
R = "refund-policy.html"
refunds = [
    ("Monthly assistant plans",
     "The Personal and Business plans have no setup fee and no minimum term. You pay one month at a time, in "
     "advance, and you can cancel at any time.",
     "A month that has started is not refunded when you cancel. The assistant stays on until the end of that "
     "month.",
     "Billing starts on the day your assistant goes into service. If you paid before that day and we cannot put "
     "the assistant into service, we refund everything you paid us for it. If the service is materially not as described on this site and we cannot fix it, we refund the month it "
     "affected.",
     "Your Claude subscription is paid to Anthropic, not to us. A refund of that subscription is a matter between "
     "you and Anthropic.", ""),
    (*keep(R, "02"), ""),
    ("Earlier licences and founding seats",
     "Founding licences and seats for our earlier products (SuperClawman for Meetings and WhatsApp Memory) are "
     "refundable within 14 days of purchase if the product is materially not as described when you bought it, or "
     "if you have not been able to use it at all through no fault of yours. Where a licence has been substantially "
     "used to process your own data in the meantime we may discuss a partial refund instead.", ""),
    ("Brazilian customers",
     "If you bought as a consumer resident in Brazil, the <em>Código de Defesa do Consumidor</em> gives you a "
     "7-day withdrawal right for purchases made outside a physical store, whatever the product. This includes the "
     "first payment of an assistant plan. We honour it in full, on top of everything above.", ""),
    (*keep(R, "04"), ""),
    (*keep(R, "05"), ""),
]

# ---------------------------------------------------------------- PRIVACY
P = "privacy.html"
privacy = [
    (*keep(P, "01"), ""),
    (*keep(P, "02"), ""),
    (*keep(P, "03"), ""),
    ("The personal assistant",
     "<strong>Where it runs.</strong> Each customer's assistant runs on its own server, which we rent from Hetzner "
     "and operate for that customer. No other customer shares it.",
     "<strong>What it handles.</strong> The assistant works with the accounts the customer connects to it. For "
     "WhatsApp, that is the messages, voice notes, files and groups of the linked account, including what other "
     "people send to that account. For e-mail, calendar and cloud files, it is the content of the accounts "
     "connected. It also keeps what the customer tells it, the documents it makes, and its own memory and "
     "conversation history. All of this stays on that customer's server.",
     "<strong>What we use it for.</strong> Only to do what the customer asks of their own assistant. We do not sell "
     "it, use it for advertising, or use it to train AI models.",
     "<strong>Who else processes it.</strong> Our hosting providers (Hetzner, Cloudflare). Anthropic, which runs "
     "the Claude model, under the customer's own Claude account and Anthropic's terms. WhatsApp and the e-mail, "
     "calendar and file providers the customer connects, each for its own service. Voice notes the customer sends "
     "are turned into text on the customer's server. When the assistant answers with a voice note, the text of "
     "that answer goes to a speech provider (Google Cloud, or ElevenLabs if the customer picks one of its voices) "
     "to make the audio.",
     "<strong>Who can see it.</strong> Our team can reach the server, and so its content, only to operate, repair "
     "and support the assistant. Automatic checks watch that the assistant is healthy. We also look at how the "
     "assistant is used so that we can send the customer tips and make the service better.",
     "<strong>Removing access.</strong> The customer can unlink the assistant in WhatsApp (Linked devices) and "
     "remove its access at each provider at any time. This stops that access at once.",
     "<strong>How long we keep it.</strong> For as long as the plan runs. When it ends, we give the customer their "
     "data on request and delete the server within 30 days. The server's backups are deleted within 30 days after "
     "that. A customer can ask for an earlier deletion at the address below.",
     "<strong>If you wrote to someone who uses an assistant.</strong> Your messages to that person are handled as "
     "part of that person's own account, on their server, for their use. To ask what is held or to have it "
     "deleted, write to that person or to us at the address below. We act together with the account owner and "
     "answer within 30 days.",
     "<strong>Customer contact details</strong> (name, email, WhatsApp number) are used only to run the service "
     "and to talk to the customer about it. They are never sold, and never used for unrelated marketing without a "
     "separate opt-in.", "assistant"),
    ("Earlier products",
     "SuperClawman for Meetings joins calls only when you invite it. It processes audio while in the call and "
     "afterwards stores the brief and follow-ups in your own workspace; call audio is not kept beyond producing "
     "them. WhatsApp Memory runs on your machine against your own history; your messages never reach our systems. "
     "These products are no longer offered to new customers. This paragraph still applies to people who hold "
     "them.", ""),
    (*keep(P, "05"), ""),
    (*keep(P, "06"), "instagram"),
    (*keep(P, "07"), "dropbox"),
    (*keep(P, "08"), ""),
    (*keep(P, "09"), ""),
]

rebuild(T, "These terms govern your purchase and use of the SuperClawman assistant plans, custom services and "
           "earlier licences offered on superclawman.ai. By ordering or using them you accept them. They are "
           "written to be read, not to hide anything.", terms)
rebuild(R, "If something we sold you is not what we said it was, we put it right or we give your money back. The "
           "rules below exist so that promise is predictable rather than personal.", refunds)
rebuild(P, "SuperClawman began as one person's personal automation system and has grown into a service for "
           "customers. This policy covers the whole of it: what the website sees, what payments involve, what a "
           "customer's assistant handles, and who can see it.", privacy)
