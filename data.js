// Sandman · Superclawman · Ktulu · Jr — inventory data
// Single source of truth. Loaded by matrix.html via <script src="data.js">.
// Refresh stats with ./refresh.sh; per-agent notes are human-curated.
window.INVENTORY = {
  generated_at: "2026-05-15T12:30:00-03:00",
  doc_title: "Sandman · Superclawman · Ktulu · Jr — Inventory Matrix",
  doc_status: "Canonical · v1.0",

  agents: [
    {
      id: "sandman",
      name: "Sandman",
      emoji: "💀",
      color: "#6B8FB5",
      role: "NUC · 192.168.1.82 · Heimdall-watched",
      host: "ssh nuc · root@192.168.1.82",
      paths: "/root/.openclaw/ · /root/sandman-po/",
      channel: "WhatsApp (Paulo's main)",
      summary: "Bedtime/personal assistant + general OpenClaw harness on the NUC. The oldest + heaviest of the cast. Runs Mission Control Dashboard, Skill Tree, QMD MCP, WhatsApp watcher, plus Sandmanpo (the VPS-side gmail/sales pipeline) as a sibling.",
      stats: { skills: 30, scripts: 152, subagents: 3, systemd_services: 7, hook_bundles: 2 }
    },
    {
      id: "superclawman",
      name: "Superclawman",
      emoji: "🧠⚡🦀🤘",
      color: "#7CA56A",
      role: "Mac mini · Paulo's primary assistant",
      host: "local · clawman@Mac",
      paths: "~/.openclaw/",
      channel: "WhatsApp (Paulo primary)",
      summary: "Cost-optimized M-series harness. Powers Paulo's WhatsApp life — Sandman/Xisto/CareHTSA/DryCleaner/family routing, plus the 31k-vector position-locked memory store with the 5-skill learning loop. Stricter doctrine surface than Sandman by design.",
      stats: { skills: 5, scripts: 70, subagents: 6, launchagents: 1, playbooks: 5 }
    },
    {
      id: "ktulu",
      name: "Ktulu",
      emoji: "🦞📨⚡🤘",
      color: "#E3A04A",
      role: "Intel Mac mini i7 · outreach only",
      host: "ssh ktulu-mac",
      paths: "/Volumes/KtuluDisk/.openclaw/",
      channel: "WhatsApp (+17866001332 USA)",
      summary: "Brand-new outreach-only sibling, paired to +17866001332 (US), built 2026-05-15 night. Narrow by design: inbound classify → Sonnet draft → escalate-or-send → log. Memory engine deferred to Phase 2.",
      stats: { doctrine_files: 7, plugins: 4, launchdaemons: 4, native_modules: 2 }
    },
    {
      id: "jr",
      name: "Superclawman Jr",
      emoji: "💀🧠",
      color: "#D45D5D",
      role: "Hetzner VPS · multi-tenant watchdog tier",
      host: "ssh superclawman-jr",
      paths: "/usr/local/lib/openclaw-jr/ · /var/lib/openclaw-jr/tenants/paulo/",
      channel: "Telegram (chat 8735701356)",
      summary: "VPS-side failover + watchdog. Wakes when Mac mini is unreachable (power outage, hardware failure, WA 440). Multi-tenant from day 1 (currently 1 tenant: paulo). Telegram-only on purpose — routes around WA fragility. Hard rule: Jr's capability set is always ⊆ Superclawman's.",
      stats: { plugins: 6, mcps: 7, skills: 3, systemd_services: 4, tenants: 1 }
    }
  ],

  sections: [
    {
      id: "doctrine",
      eyebrow: "A · Doctrine files (workspace root .md)",
      title: "Identity, soul, memory contracts",
      title_em: "the agent's spine",
      note: "Canonical .md files that boot the agent on every wake. Sandman + Superclawman share the core 7; Sandman adds Heimdall + Sandmanpo blueprint; Ktulu has all 7 core; Jr's personas live per-tenant under jr-state/ and are overlaid after each snapshot import.",
      rows: [
        {
          name: "IDENTITY.md",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Name, emoji, host scope. Per-agent.",
            sandman: "Defines Sandman 💀 + Sandmanpo VPS sibling. At /root/.openclaw/workspace/IDENTITY.md.",
            superclawman: "Defines Superclawman 🧠⚡🦀🤘 + Jr architecture reference. At ~/.openclaw/workspace/IDENTITY.md.",
            ktulu: "Ktulu 🦞📨⚡🤘 — i7 sibling, narrow outreach. At /Volumes/KtuluDisk/.openclaw/workspace/IDENTITY.md.",
            jr: "Per-tenant at /var/lib/openclaw-jr/tenants/paulo/jr-state/persona/IDENTITY.md. Overlaid after every snapshot import so daily refreshes don't wipe Jr's identity. Signature [SC Jr 💀 🧠]."
          }
        },
        {
          name: "SOUL.md",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Lobster principle preserved across all four. Voice tuned per audience.",
            sandman: "Lobster principle + Sandman voice. Heavier ops focus.",
            superclawman: "Lobster principle + pt-BR / EN tonal map. Source-of-truth voice.",
            ktulu: "Lobster preserved verbatim. Voice retuned: pt-BR for prospects, EN with Paulo. No AI-disclosure rule — identity-check inbound triggers escalation.",
            jr: "Lobster principle + signature [SC Jr 💀 🧠] + Telegram-formatted brevity rules. Per-tenant overlay."
          }
        },
        {
          name: "USER.md",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Paulo as operator. Family/contact roster varies per agent's scope.",
            sandman: "Full family + contact roster. Sandman handles personal life on NUC.",
            superclawman: "Full roster — Fratiany, Clarice, Cecilia, plus contact universe.",
            ktulu: "Stripped to operator + escalation target only. No family. No Xisto/CareHTSA/DryCleaner.",
            jr: "Tenant-scoped — `paulo` tenant with chat ID 8735701356. Multi-tenant aware: never cross-contaminates."
          }
        },
        {
          name: "MEMORY.md",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Hard invariants — what the agent must/must-not do.",
            sandman: "Hard invariants. Tied to NUC-local memory stack (nmem + qmd + lcm).",
            superclawman: "Hard invariants. Tied to clawman-memory vector store + 5-skill learning loop.",
            ktulu: "6 escalation triggers, channel containment, never-leak rule, no-groups, ≤10 sends/day rate limit.",
            jr: "Hard invariants tuned for snapshot-not-live: no impersonation, no third-party outbound, no external writes, snapshot-not-live-state, multi-tenant scoping."
          }
        },
        {
          name: "AGENTS.md",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Bootstrap order + model routing.",
            sandman: "Bootstrap + 3 subagents (codex/main/sonar) + model routing.",
            superclawman: "Bootstrap + 6 subagents + the cost-optimization model-routing canonical.",
            ktulu: "Bootstrap kept, model routing kept, heartbeats removed (Ktulu is reactive), groups hardened.",
            jr: "Adds §📅 Calendar (tag heuristics) + §🔒 Google user-data discipline + §📲 numeric Telegram chat ID rule + html-it 4-level taxonomy."
          }
        },
        {
          name: "TOOLS.md",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Per-agent credential + script surface.",
            sandman: "Huge surface — 30 skills, HeyGen, Higgsfield, Hue, gog, github, 1password, stripe-issuing.",
            superclawman: "Mid surface — HeyGen, Higgsfield, html-it, hue, gog, WA scripts, GitHub.",
            ktulu: "Narrow — openclaw + WA + Redis + Ktulu Python modules. HeyGen/Higgsfield/Hue explicitly out of scope.",
            jr: "Capability inventory: 6 plugins + 7 MCPs + 3 skills. 'What you cannot do' includes Send-Gmail / modify-Drive / send-as-Paulo refusals."
          }
        },
        {
          name: "SKILLS.md",
          status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "partial" },
          notes: {
            default: "Sandman has 30 skills but no master index. Superclawman + Ktulu document. Jr has skills curated by canonical.",
            sandman: "Missing — 30 skills exist on disk but no SKILLS.md index. Pairing op #1.",
            superclawman: "Documents the 5 self-driving Skills + the 4 memory contracts.",
            ktulu: "Phase 1 capabilities documented + Phase 2 deferrals (5 Skills, 4 contracts) with entry criteria.",
            jr: "Skill list maintained inline in the canonical doc (§4.7 Phase 0d.5). No standalone SKILLS.md yet."
          }
        },
        {
          name: "PEOPLE.md",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: {
            default: "Sandman-only contact roster file.",
            sandman: "Full PEOPLE.md roster.",
            superclawman: "Uses agent_contacts.json + clawman-memory verdicts instead.",
            ktulu: "Uses kit-managed prospects map.",
            jr: "N/A — Telegram is a single-chat channel."
          }
        },
        {
          name: "HEARTBEAT.md",
          status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: {
            default: "Periodic agent self-check spec.",
            sandman: "6h heartbeat with Haiku.",
            superclawman: "Heartbeat spec for periodic self-check.",
            ktulu: "Ktulu is reactive only — heartbeats removed by design.",
            jr: "N/A — Jr's watchdog is edge-transition only (alerts on state changes, not periodic). Open decision §1.4.2 on reassurance pings."
          }
        },
        {
          name: "HEIMDALL-CANONICAL.md",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: {
            default: "QNAP-paired watchdog architecture (NUC-specific).",
            sandman: "Heimdall watcher reference. QNAP cron runs ensure-daemon-running.sh every 5 min against NUC.",
            superclawman: "N/A — Jr is the equivalent watcher for Mac mini.",
            ktulu: "N/A — Ktulu has no external watcher yet.",
            jr: "Jr IS the Mac-mini-side equivalent of what Heimdall is for the NUC. Different impl (Telegram alerts not QNAP cron) but same role."
          }
        },
        {
          name: "BOOTSTRAP.md",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: {
            default: "Explicit bootstrap flow.",
            sandman: "Detailed startup sequence.",
            superclawman: "Implicit via openclaw harness.",
            ktulu: "Implicit via openclaw harness.",
            jr: "Bootstrap defined in canonical doc § + service unit ExecStart."
          }
        },
        {
          name: "SANDMAN-BLUEPRINT / SANDMANPO-BLUEPRINT",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: {
            default: "Per-host architecture docs.",
            sandman: "Two blueprints: NUC + Sandmanpo VPS. Sandman is the only multi-host agent.",
            superclawman: "Architecture spec lives in Notion canonical hub.",
            ktulu: "Inheritance matrix doc (2026-05-15) serves this purpose.",
            jr: "Canonical at workspace/SUPERCLAWMAN_WATCHDOG_JR_CANONICAL_v1.md (v1.20)."
          }
        },
        {
          name: "Cost-optimization canonical",
          status: { sandman: "partial", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "openclaw.json hardening — cacheRetention=long, context1m=false, contextPruning, memoryFlush=off.",
            sandman: "Mirrored from Superclawman but doc lives only on Mac mini.",
            superclawman: "Source of truth: SUPERCLAWMAN-COST-OPTIMIZATION-CANONICAL-v1.0.md.",
            ktulu: "Ported tonight: cacheRetention=long, context1m=false, contextPruning cache-ttl 60m, memoryFlush=off, reserveTokensFloor=64k.",
            jr: "Applied v1.3 — Sonnet long-cache, Haiku short-cache, Haiku as compaction model, 6h heartbeat with Haiku."
          }
        }
      ]
    },

    {
      id: "skills",
      eyebrow: "B · Workspace skills",
      title: "SKILL.md packages",
      title_em: "biggest divergence surface",
      note: "Sandman has 30 skills, Superclawman has 5, Ktulu has 0 (narrow by design), Jr has 3 (coding-agent, openai-whisper-api, goplaces) plus html-it baked into AGENTS.md.",
      rows: [
        { name: "html-it",
          status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "partial" },
          notes: {
            default: "Sales-grade HTML artifacts. 4-level taxonomy.",
            sandman: "Installed at /root/.openclaw/workspace/skills/html-it/.",
            superclawman: "Primary use: sales html-it artifacts (palette-paired) + LinkedIn/X Superclawman docs. Per global CLAUDE.md.",
            ktulu: "Not installed. DECIDE flag — defer to Phase 2 to keep Ktulu narrow.",
            jr: "Not a standalone skill — 4-level taxonomy baked into AGENTS.md. Write-path /var/lib/openclaw-jr/tenants/paulo/jr-state/html-it/. Telegram-doc upload deferred."
          } },
        { name: "openhue",
          status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Hue lights control.", sandman: "Installed.", superclawman: "Installed (alongside hue-lights).", ktulu: "Out of scope.", jr: "Out of scope — Jr is failover-tier, not smart-home." } },
        { name: "hue-lights",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Alt Hue interface.", sandman: "Not installed.", superclawman: "Installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "higgsfield",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "partial" },
          notes: {
            default: "Image/video gen via Higgsfield MCP. Plus subscription.",
            sandman: "Not installed.",
            superclawman: "Plus subscription, primary user. Installed user-scope.",
            ktulu: "Out of scope.",
            jr: "Wired via OAuth daemon (higgsfield-oauth.py serve --tenant paulo) + reverse proxy on 127.0.0.1:18790/mcp. Registered as MCP, not as skill. First OAuth-protected MCP on Jr."
          } },
        { name: "heygen-skills",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "HeyGen avatar / Mediterranean Onyx voice.", sandman: "Not installed (heygen-video.mjs script exists separately).", superclawman: "Installed — Paulo's account.", ktulu: "Out of scope.", jr: "Deferred (Phase 0d.5 heaviest-media tier)." } },
        { name: "1password",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Secret retrieval skill.", sandman: "Installed. Pairing op: port to Superclawman.", superclawman: "Not installed — reads ~/.openclaw/secrets/ directly.", ktulu: "Out of scope.", jr: "Out of scope — Jr uses per-tenant secrets at /etc/openclaw-jr/tenants/paulo/secrets/." } },
        { name: "github-cli / openclaw-github-assistant",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "gh wrappers + repo intelligence.", sandman: "Both installed.", superclawman: "Pairing op: would help manage propostas + beautiful-websites deploys.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "gog (Google Workspace)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: {
            default: "Gmail / Calendar / Contacts auth wrapper.",
            sandman: "Installed.",
            superclawman: "Pairing op: TOOLS.md references gog but the skill lives only on Sandman.",
            ktulu: "Out of scope.",
            jr: "Equivalent via google-oauth.py daemon + google-public + google-user MCPs (Phase 0d.2.1a/b). Different impl, same surface."
          } },
        { name: "google-maps",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Maps queries.", sandman: "Installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Via google-public MCP (geocode/reverse_geocode/place_search/directions). IP-restricted API key." } },
        { name: "summarize",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Generic summarization.", sandman: "Installed.", superclawman: "Pairing op — cheap utility.", ktulu: "Out of scope.", jr: "Done inline by Haiku via lossless-claw summary model." } },
        { name: "mcporter",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "MCP server registry/proxy.", sandman: "Installed.", superclawman: "Pairing op — would centralize MCP config.", ktulu: "Out of scope.", jr: "N/A — Jr uses openclaw mcp set directly." } },
        { name: "openai-whisper / voice-transcription",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: {
            default: "Voice → text transcription.",
            sandman: "Two paths: openai-whisper + voice-transcription skills.",
            superclawman: "Handled via wa-media-enrich script (no skill bundle).",
            ktulu: "Out of scope.",
            jr: "openai-whisper-api skill installed (Phase 0d.5)."
          } },
        { name: "whatsapp-utils / openclaw-whatsapp",
          status: { sandman: "yes", superclawman: "partial", ktulu: "partial", jr: "no" },
          notes: { default: "WA helper bundles.", sandman: "Both installed as skills.", superclawman: "Has scripts (wa-watcher, wa-send-text, wa-classify-*) but no skill bundle.", ktulu: "@openclaw/whatsapp@2026.5.5 plugin + native ktulu_sender.", jr: "N/A — Jr is Telegram-only on purpose." } },
        { name: "stripe-issuing",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Virtual card issuance.", sandman: "Installed. Pairs with c6-finance + ml-buy.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "ordercli",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Mercado Livre order CLI.", sandman: "Installed — commerce surface.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "sonoscli / camsnap",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Sonos audio + camera snapshot.", sandman: "Both installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "computer-use-skill",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Anthropic computer-use bindings.", sandman: "Installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "firecrawl-cli",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Firecrawl scraper wrapper.", sandman: "Installed as skill.", superclawman: "Pairing op: useful for beautiful-websites Step 2.", ktulu: "Out of scope.", jr: "Firecrawl as openclaw plugin (Phase 0d.5 sub-step 1), not skill." } },
        { name: "obsidian / ontology",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Notes + domain ontology.", sandman: "Both installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "video-frames / xurl",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Video frame extraction + X URL utility.", sandman: "Both installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "elite-longterm-memory",
          status: { sandman: "yes", superclawman: "partial", ktulu: "planned", jr: "partial" },
          notes: {
            default: "Long-term memory layer.",
            sandman: "Installed as skill alongside neural-memory, fluid-memory, memory-tiering.",
            superclawman: "Equivalent via clawman-memory vector store (different impl).",
            ktulu: "Phase 2 candidate once escalation history accumulates.",
            jr: "Equivalent via jr-vector MCP (OpenAI text-embedding-3-small over snapshot) + lossless-claw + jr-learn."
          } },
        { name: "fluid-memory / memory-tiering",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Alt memory skills.", sandman: "Both installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Different mental model — Jr uses tiered MCPs not skills." } },
        { name: "neural-memory (nmem)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Active brain engine.", sandman: "Active. NEURALMEMORY_BRAIN=sandman nmem stats.", superclawman: "Uses clawman-memory instead.", ktulu: "Phase 2 candidate.", jr: "Equivalent via QMD (BM25) + jr-vector (semantic) layered stack." } },
        { name: "self-improving-agent / capability-evolver-pro",
          status: { sandman: "yes", superclawman: "partial", ktulu: "planned", jr: "partial" },
          notes: {
            default: "Self-improvement layer.",
            sandman: "Installed as skills.",
            superclawman: "Equivalent via 5-skill learning loop (multimodal_ingest, learn_from_use, synapse_grow, train_retrieval, bench_weekly).",
            ktulu: "Deferred to Phase 2.",
            jr: "Equivalent via jr-learn daily distill timer (04:30 BRT) + proposed-learnings queue."
          } },
        { name: "coding-agent (Codex CLI)",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "OpenAI Codex CLI wrapper.", sandman: "Not installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Installed via npm install -g @openai/codex (codex-cli 0.130.0). Phase 0d.5 sub-step." } },
        { name: "goplaces",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Google Places search skill.", sandman: "Not installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Installed as skill (Phase 0d.5)." } }
      ]
    },

    {
      id: "plugins",
      eyebrow: "C · OpenClaw plugins (openclaw.json plugins.allow)",
      title: "Plugin allowlist",
      title_em: "narrow on Ktulu and Jr",
      note: "Per the never-surpass rule (Jr ⊆ Mac), Jr's plugins mirror or are a subset of Superclawman's. Ktulu is deliberately minimal (4 trusted). Sandman has the broadest implicit surface.",
      rows: [
        { name: "anthropic (Sonnet + Haiku)",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "All four. Cost-opt params applied everywhere.",
            sandman: "Sonnet 4.6 + Haiku 4.5. Same cacheRetention=long config.",
            superclawman: "Sonnet 4.6 + Haiku 4.5. The cost-opt source of truth.",
            ktulu: "Sonnet 4.6 default + Haiku 4.5 fallback. Auth profile in auth-profiles.json.",
            jr: "Sonnet 4.6 long-cache + Haiku 4.5 short-cache + Haiku as compaction model with reserveTokensFloor=64k."
          } },
        { name: "openclaw-whatsapp",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "no" },
          notes: {
            default: "WhatsApp bridge plugin.",
            sandman: "Paired to Paulo's main WA number.",
            superclawman: "Paired to Paulo's primary.",
            ktulu: "@openclaw/whatsapp@2026.5.5 paired to +17866001332.",
            jr: "Deliberately not installed — Jr is Telegram-only by design. WA is the fragile dependency Jr routes around."
          } },
        { name: "openclaw-telegram",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Telegram channel plugin.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "Jr's primary (and only) operator channel. Chat 8735701356." } },
        { name: "memory-core",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Bundled OpenClaw memory plugin.", sandman: "Active.", superclawman: "Active alongside clawman-memory.", ktulu: "Active.", jr: "Active." } },
        { name: "lossless-claw",
          status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Cache-aware compaction via Martian.",
            sandman: "Not installed. Pairing op #3 — 152 scripts would benefit.",
            superclawman: "@martian-engineering/lossless-claw@0.9.4. Mirrored from Jr per §3.3 (Jr had it first, Mac caught up 2026-05-13).",
            ktulu: "@martian-engineering/lossless-claw@0.9.4 + pi-coding-agent peer dep. Cache-aware compaction.",
            jr: "v0.9.4, contextEngine slot. Haiku as summaryModel, freshTailCount=64, cacheAwareCompaction with 300s TTL."
          } },
        { name: "openai",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "OpenAI provider plugin.", sandman: "Configured — codex subagent uses it.", superclawman: "Not configured — Anthropic-only.", ktulu: "Anthropic-only.", jr: "Auth profile openai:default exists for whisper-api skill + jr-vector embeddings." } },
        { name: "perplexity / firecrawl",
          status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "yes" },
          notes: {
            default: "Web search + scrape.",
            sandman: "Both installed.",
            superclawman: "Perplexity installed; firecrawl mirrored 2026-05-13 per §3.3.",
            ktulu: "Skipped — prospect context comes from kit, not search.",
            jr: "Both installed. firecrawl via systemd EnvironmentFile drop-in 10-secrets.conf."
          } },
        { name: "browser-automation",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Browser plugin.", sandman: "Installed.", superclawman: "Not installed.", ktulu: "Out of scope — headless.", jr: "Installed (openclaw-bundled, Phase 0d.5 parity-mirror)." } },
        { name: "healthcheck / skill-creator",
          status: { sandman: "yes", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "OpenClaw bundled.", sandman: "Available via bundle.", superclawman: "Pairing op — should pick up from bundle.", ktulu: "Inherited from OpenClaw bundle.", jr: "Not in allow-list — narrow plugin discipline." } },
        { name: "device-pair",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Gateway write-ops plugin.", sandman: "Not needed.", superclawman: "Not needed.", ktulu: "Not needed.", jr: "Added 2026-05-15 to enable CLI operator.admin grant (resolves B fix §1.4.3). Single-tenant root-trusted bypass; SaaS will need bootstrap-token mechanism." } }
      ]
    },

    {
      id: "subagents",
      eyebrow: "D · Subagents (~/.openclaw/agents/)",
      title: "Per-task agent personas",
      title_em: "specialized invocations",
      note: "Sandman has 3, Superclawman has 6 (more research/code specialization), Ktulu has 0 by design, Jr inherits Mac patterns via snapshot import.",
      rows: [
        { name: "main",
          status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Default agent identity.", sandman: "Active.", superclawman: "Active.", ktulu: "Uses harness directly — no subagent layer.", jr: "Per-tenant via --profile jr-paulo." } },
        { name: "codex (OpenAI Codex)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Code-focused agent.", sandman: "Active subagent.", superclawman: "Not configured.", ktulu: "Out of scope.", jr: "Equivalent via coding-agent skill (Codex CLI 0.130.0). Skill not subagent." } },
        { name: "sonar (Perplexity)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Research subagent.", sandman: "Active.", superclawman: "Has researcher subagent instead.", ktulu: "Out of scope.", jr: "Not as subagent — perplexity plugin direct." } },
        { name: "coder",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Code-focused subagent.", sandman: "Different name (codex).", superclawman: "Active.", ktulu: "Out of scope.", jr: "Out of scope at subagent level." } },
        { name: "researcher",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Research subagent.", sandman: "Different name (sonar).", superclawman: "Active. Pairing op: rename/merge with Sandman's sonar.", ktulu: "Out of scope.", jr: "Out of scope at subagent level." } },
        { name: "monitor / c2-monitor",
          status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "partial" },
          notes: { default: "Monitoring subagent.", sandman: "Has c2-monitor as daemon (c2-monitor-daemon.mjs), not subagent persona.", superclawman: "Active as subagent.", ktulu: "Out of scope.", jr: "vps-watchdog.py fills this role (oneshot poll every 2 min)." } },
        { name: "homeauto",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Smart-home subagent.", sandman: "Strange gap — has Hue + Sonos skills.", superclawman: "Active.", ktulu: "Out of scope.", jr: "Out of scope." } }
      ]
    },

    {
      id: "memory",
      eyebrow: "E · Memory + learning stack",
      title: "Vector stores, consolidation, learning",
      title_em: "the divergence section",
      note: "All four diverge here. Sandman has the most memory infrastructure as skills. Superclawman has the most polished single store + 5-skill loop. Ktulu has none yet. Jr has the most architecturally clean stack (QMD + lossless-claw + jr-vector + jr-learn + SESSION-STATE WAL).",
      rows: [
        { name: "Vector store",
          status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "yes" },
          notes: {
            default: "Embedding-backed semantic recall.",
            sandman: "Via neural-memory + fluid-memory skills.",
            superclawman: "clawman-memory: 31k position-locked vectors + metadata.json.",
            ktulu: "Phase 2 deferred.",
            jr: "jr-vector MCP — OpenAI text-embedding-3-small over snapshot, SQLite cosine search. Initial reindex: 2,153 files → 51,964 chunks → $0.19. Daily delta ~$0.01-0.05."
          } },
        { name: "BM25 / lexical search",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Keyword search over corpus.", sandman: "qmd-mcp local MCP. qmd-to-nmem-bridge.sh.", superclawman: "N/A — vector-only.", ktulu: "N/A.", jr: "QMD v2.1.0 (@tobilu/qmd) — 2,151 docs across memory + bus collections with tree-context summaries." } },
        { name: "Conversation log (WAL/DAG)",
          status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Persistent conversation state.", sandman: "lcm.db (SQLite with WAL).", superclawman: "Via lossless-claw + lcm.db.", ktulu: "Phase 2.", jr: "lossless-claw SQLite DAG + SESSION-STATE.md WAL (written before responding on preference/decision/correction/task)." } },
        { name: "Daily consolidation",
          status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "yes" },
          notes: { default: "Nightly memory consolidation.", sandman: "workspace/memory/*.md files.", superclawman: "nightly-dream.py.", ktulu: "Phase 2.", jr: "jr-learn distill via openclaw-jr-distill@paulo.timer (04:30 BRT, after 04:00 snapshot import). Haiku extracts learnings from last 24h." } },
        { name: "Learning loop",
          status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "yes" },
          notes: { default: "Self-improving capability.", sandman: "self-improving-agent + capability-evolver-pro skills.", superclawman: "5-skill loop (multimodal_ingest, learn_from_use, synapse_grow, train_retrieval, bench_weekly).", ktulu: "Phase 2.", jr: "jr-learn MCP — learn_record / learn_search / learn_recent / learn_propose_promotion / learn_status. Daily distill auto-extracts proposed learnings; operator promotes via Telegram." } },
        { name: "Snapshot pipeline (cross-host)",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: {
            default: "Daily snapshot export → import.",
            sandman: "N/A — single-host memory.",
            superclawman: "jr-snapshot-export.py daily 04:00 BRT (Mac side).",
            ktulu: "N/A.",
            jr: "jr-snapshot-import.py daily 04:00 BRT (VPS side). Imports Mac's lossless-claw + WAL + persona overlay. Snapshot at /var/lib/openclaw-jr/tenants/paulo/snapshots/."
          } },
        { name: "precedent_matcher (BGE-M3)",
          status: { sandman: "no", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Cosine-similarity over verdicts.", sandman: "Not installed.", superclawman: "BGE-M3 escalation classifier.", ktulu: "Phase 2.", jr: "N/A — Jr is read-mostly, escalates via Telegram." } },
        { name: "Inbound style observers",
          status: { sandman: "no", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Per-contact style learning.", sandman: "Not installed.", superclawman: "inbound_style_observer.py + contact_style_profiler.py.", ktulu: "Phase 2.", jr: "N/A — single operator." } },
        { name: "Commitment tracker",
          status: { sandman: "no", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Promise → due-date.", sandman: "Not installed.", superclawman: "commitment_extractor.py + tracker.py.", ktulu: "Phase 2.", jr: "Deferred." } }
      ]
    },

    {
      id: "mcps",
      eyebrow: "F · MCP servers (where applicable)",
      title: "Model Context Protocol surface",
      title_em: "Jr is MCP-heavy by design",
      note: "Sandman uses qmd-mcp local. Superclawman uses MCPs via Claude Code (Notion, Higgsfield, etc.). Ktulu is MCP-free. Jr has 7 MCPs explicitly registered with openclaw.",
      rows: [
        { name: "notion",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Notion MCP.", sandman: "Not installed.", superclawman: "Via Claude Code MCP.", ktulu: "Out of scope.", jr: "@notionhq/notion-mcp-server, key from ~/.config/notion/api_key. Phase 0d.5 sub-step 2." } },
        { name: "google-public",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Maps/Routes/Places/YouTube via single API key.", sandman: "Has google-maps skill instead.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "jr-google-public-mcp.py ~380 LOC. IP-restricted key. $20/mo budget alert. Phase 0d.2.1b." } },
        { name: "google-user",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Gmail/Calendar/Drive/People via OAuth.", sandman: "Has gog skill instead.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "jr-google-user-mcp.py ~580 LOC. Auth Code + PKCE + loopback OAuth. Tokens at /etc/openclaw-jr/tenants/paulo/secrets/google-oauth.json. Reads live, writes stubbed for Phase 0d.3. Phase 0d.2.1a." } },
        { name: "higgsfield (MCP)",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Higgsfield image/video gen.", sandman: "Not installed.", superclawman: "Via Claude Code MCP.", ktulu: "Out of scope.", jr: "Wired via OAuth daemon + reverse proxy 127.0.0.1:18790/mcp. First OAuth-protected MCP on Jr. Phase 0d.5." } },
        { name: "jr-learn / jr-vector",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Jr-native learning + vector MCPs.", sandman: "N/A.", superclawman: "Equivalent via 5-skill loop.", ktulu: "Phase 2.", jr: "Both ~520 LOC + ~370 LOC stdlib-only Python at /usr/local/lib/openclaw-jr/. Phase 0d.2.5.1." } },
        { name: "qmd (semantic search)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "QMD MCP.", sandman: "qmd-mcp.service — local semantic search.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "@tobilu/qmd v2.1.0. BM25-only (vector pending node-llama-cpp Vulkan build)." } }
      ]
    },

    {
      id: "playbooks",
      eyebrow: "G · Workspace playbooks",
      title: "Operational flow specs",
      title_em: "structured handler docs",
      note: "Superclawman is the only one with a structured playbooks/ directory. Sandman embeds equivalent logic in scripts. Ktulu and Jr don't have playbooks (different operating models).",
      rows: [
        { name: "xisto.md (gym-trainer)",
          status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Gym-trainer reply flow.", sandman: "Has xisto-*.sh scripts (full-flow, workout-tracker, weekly-summary). No playbook .md.", superclawman: "playbooks/xisto.md.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "carehtsa.md / dryclean-brooklin.md",
          status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Service-vendor handlers.", sandman: "Has carehtsa-flow.sh + dryclean-receipt-flow.sh.", superclawman: "Both playbooks present.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "denis.md / personal contacts",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Personal WA contact handlers.", sandman: "Not in playbook form.", superclawman: "Handles Paulo's personal WA routing.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "pdf-fetch.md",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Email PDF fetch → send.", sandman: "Not in playbook form.", superclawman: "Active.", ktulu: "DECIDE flag — adapt in Phase 1C for prospect contracts/receipts.", jr: "Out of scope." } },
        { name: "contact-sync.md",
          status: { sandman: "partial", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Contact sync handler.", sandman: "Has gog-sync-to-agent-contacts.py.", superclawman: "Active.", ktulu: "Phase 2 candidate.", jr: "Out of scope — Telegram has one operator." } },
        { name: "operational-routing.md",
          status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "no" },
          notes: { default: "Generic routing reference doc.", sandman: "Pairing op #4 — embed in scripts but no doc.", superclawman: "Active.", ktulu: "Inherited.", jr: "Embedded in canonical doc §1.4/§4.1." } },
        { name: "sandmanpo handlers",
          status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "no" },
          notes: { default: "Sandmanpo VPS handlers.", sandman: "Has sandmanpo-flow.sh + sandmanpo-sonnet-reply.py + sandmanpo-location-update.py.", superclawman: "References sandmanpo via scripts.", ktulu: "Out of scope.", jr: "N/A — different VPS." } }
      ]
    },

    {
      id: "daemons",
      eyebrow: "H · Persistence layer (systemd / LaunchDaemons / LaunchAgents)",
      title: "Long-running services + scheduled jobs",
      title_em: "where the agent actually breathes",
      note: "Sandman is the always-on workhorse: 7 systemd services + 15 cron jobs. Superclawman runs 1 LaunchAgent + Mac-mini scheduled tasks. Ktulu has 4 fresh LaunchDaemons. Jr has parameterized per-tenant services + 2 timers + 1 OAuth proxy.",
      rows: [
        { name: "openclaw gateway",
          status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Always-on agent gateway.",
            sandman: "Different process model — openclaw-whatsapp.service.",
            superclawman: "LaunchAgent ai.openclaw.gateway on Mac.",
            ktulu: "LaunchDaemon ai.openclaw.ktulu.gateway.",
            jr: "Process running on port 18789 (JR leet). Per-tenant via --profile jr-paulo."
          } },
        { name: "openclaw-whatsapp / wa-watcher",
          status: { sandman: "yes", superclawman: "yes", ktulu: "partial", jr: "no" },
          notes: { default: "WhatsApp bridge.", sandman: "openclaw-whatsapp.service + wa-watcher.service.", superclawman: "Active.", ktulu: "Replaced by gateway_ingest + ktulu_outreach_worker.", jr: "N/A — Telegram-only." } },
        { name: "openclaw-jr-watchdog@<tenant>.timer (2-min poll)",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Jr's edge-transition watchdog.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "Oneshot service triggered every 2 min by .timer. Polls Mac via Tailscale, characterizes failure mode (power/network/WA), fires Telegram alerts. Flap suppression added 2026-05-15 commit d053fa1c." } },
        { name: "openclaw-jr-distill@<tenant>.timer (daily 04:30)",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Daily learning distill.", sandman: "N/A.", superclawman: "Has nightly-dream.py equivalent.", ktulu: "N/A.", jr: "Reads last 24h of lossless-claw conversations, Haiku extracts learnings, appends to learnings.jsonl with status=proposed, Telegram digest to operator." } },
        { name: "openclaw-jr-higgsfield (long-running OAuth proxy)",
          status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Higgsfield OAuth proxy.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "Long-running serve on 127.0.0.1:18790/mcp + 50-min refresh timer. First per-tenant OAuth daemon — template for future OAuth-MCPs." } },
        { name: "ai.openclaw.ktulu.{ingest,worker,sender}",
          status: { sandman: "no", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "Ktulu's 3 native pipeline daemons.", sandman: "N/A.", superclawman: "N/A.", ktulu: "ai.openclaw.ktulu.gateway/ingest/worker/sender. KeepAlive. Logs at /var/log/ktulu/.", jr: "N/A." } },
        { name: "sandman-dashboard / mission-control / skill-tree",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Visual control surfaces.", sandman: "All 3 systemd services. Track 1 cosmetics ongoing.", superclawman: "Pairing op #5 — port dashboard to Mac.", ktulu: "Out of scope.", jr: "Out of scope (Telegram is the UI)." } },
        { name: "qmd-mcp.service",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Local QMD semantic search MCP.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "QMD installed but as openclaw mcp registration, not as standalone systemd service." } },
        { name: "Heimdall watchdog (QNAP-side)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "External health watcher.", sandman: "QNAP cron every 5 min runs ensure-daemon-running.sh against NUC.", superclawman: "Jr is the equivalent (different impl, same role).", ktulu: "Not yet.", jr: "Jr IS this for Mac mini." } },
        { name: "wa-watchdog (440 recovery)",
          status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "partial" },
          notes: { default: "WhatsApp 440 conflict recovery.", sandman: "wa-watchdog.py + cron.", superclawman: "v0.1 wa-watchdog (~407 LOC, plist com.clawman.wa-watchdog, 5-min cron). Polls channels status, kickstarts gateway, escalates via selfchat.", ktulu: "Phase 1C — Ktulu-adapted.", jr: "vps-watchdog.py is the cross-host equivalent. Detects 440 via Tailscale peer probe + WA degraded state. Recovery dance is Phase 0d.3 (not yet built)." } },
        { name: "plugin-watchdog (cron 3-min)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Plugin health watcher.", sandman: "Active. Entry 74 canonical reliability stack.", superclawman: "Pairing op — should run.", ktulu: "Not yet.", jr: "Not needed — Jr's narrow plugin set is more stable." } },
        { name: "health-ledger (cron 5-min)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Periodic host health snapshot.", sandman: "Active.", superclawman: "Pairing op #6 — intelligent-alerts canonical says all agents should run a health ledger.", ktulu: "Not yet.", jr: "Equivalent via vps-watchdog + audit log at /var/log/openclaw-jr/tenants/paulo/." } },
        { name: "openclaw-backup / nas-backup (cron 02:00)",
          status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "no" },
          notes: { default: "Nightly backup to QNAP NAS.", sandman: "Canonical chain per NAS Backup Notion blueprint. Both crons active.", superclawman: "Some manual; Sandman owns the canonical backup chain.", ktulu: "Not yet.", jr: "Snapshot is the backup — daily import from Mac.", } },
        { name: "synthetic-ping (cron 2h) / llm-cost-fetch-api (cron 4h)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Health pings + cost telemetry.", sandman: "Both active.", superclawman: "Pairing op — Superclawman generates most spend; cost telemetry should live there.", ktulu: "Out of scope.", jr: "Out of scope — minimal LLM use." } },
        { name: "x-monitor / c2-monitor / wa-digest crons",
          status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "no" },
          notes: { default: "Intelligence streams.", sandman: "All 3 active.", superclawman: "Has c2-monitor as subagent persona.", ktulu: "Out of scope.", jr: "Out of scope." } }
      ]
    },

    {
      id: "scripts",
      eyebrow: "I · Notable script families (~/.openclaw/workspace/scripts/)",
      title: "Capability-bearing scripts",
      title_em: "where the heavy lifting lives",
      note: "Sandman has ~152 scripts; Superclawman has ~70. Ktulu's pipeline is 2 native modules + bus.py. Jr's scripts live at /usr/local/lib/openclaw-jr/ — different layout.",
      rows: [
        { name: "dashboard-server.mjs",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Control Center UI.", sandman: "Sandman dashboard UI server.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "N/A — Telegram is UI." } },
        { name: "diagnose.mjs / diagnose-and-notify.sh",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Intelligent alert pipeline.", sandman: "LLM diagnosis + action steps. Canonical intelligent-alerts impl.", superclawman: "Not installed.", ktulu: "Not yet.", jr: "vps-watchdog.py characterizes failure mode + speaks first-person Telegram alerts (Hi, this is Jr...)." } },
        { name: "Heimdall stack",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "QNAP-paired watcher.", sandman: "Canonical at workspace/HEIMDALL-CANONICAL.md.", superclawman: "N/A.", ktulu: "N/A.", jr: "Jr replaces this for Mac mini side (different impl)." } },
        { name: "c2-monitor-daemon (LinkedIn)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "LinkedIn intelligence stream.", sandman: "Active. Canonical at LinkedIn Intelligence Architecture v1.3.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "c6-finance / c6-statement-pipeline",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "C6 Bank finance pipeline.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "news-daily / weather-daily",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Daily briefing components.", sandman: "Active morning briefing stack.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "polar-workout-sync",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Polar HR → calendar.", sandman: "Daily 18:00 cron.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "heygen-video.mjs",
          status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "no" },
          notes: { default: "HeyGen video gen runtime.", sandman: "Active.", superclawman: "Has heygen-skills bundle (different impl).", ktulu: "Out of scope.", jr: "Deferred — Phase 0d.5 heaviest-media tier." } },
        { name: "ml-buy / price-intel (Mercado Livre)",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Commerce pipeline.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "pluggy-connect-server",
          status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Brazilian open banking.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "notion-publish.mjs / doc-publish.sh",
          status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "yes" },
          notes: { default: "Notion publish runtime.", sandman: "notion-publish.mjs + doc-publish.sh.", superclawman: "Via Claude Code Notion MCP.", ktulu: "Out of scope.", jr: "Via Notion MCP (Phase 0d.5)." } },
        { name: "wa-classify-* / wa-intent-classify",
          status: { sandman: "no", superclawman: "yes", ktulu: "partial", jr: "no" },
          notes: { default: "Deep WA classifier stack.", sandman: "Different ops focus.", superclawman: "Full stack: wa-classify-verdict, wa-confirmation-classify, wa-intent-classify.", ktulu: "Regex-based ktulu_escalation (Phase 2 → 5-tier).", jr: "N/A." } },
        { name: "wa-buffer-flush-wrapper (60s coalescing)",
          status: { sandman: "no", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Burst coalescing.", sandman: "Not installed.", superclawman: "Active.", ktulu: "Phase 1C DECIDE flag.", jr: "N/A — Telegram bursts handled inline." } },
        { name: "calendar_today.py (BRT calendar)",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "BRT-aware calendar feed.", sandman: "Pairing op #7 — global CLAUDE.md mandates calendar-awareness.", superclawman: "Active with iCal feed wired locally.", ktulu: "Out of scope.", jr: "Via google-user MCP calendar_today (multi-calendar fix 2026-05-13 — iterates all 5 calendars, tags by source)." } }
      ]
    },

    {
      id: "external",
      eyebrow: "J · Brand + external surfaces",
      title: "Avatars, sites, intelligence streams",
      title_em: "the outward face",
      note: "Superclawman owns the public brand. Sandman runs the underlying monitor crons. Ktulu and Jr have no public surface.",
      rows: [
        { name: "superclawman.ai (Cloudflare Pages)",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Public brand site.", sandman: "Not owner.", superclawman: "Owns the site.", ktulu: "N/A.", jr: "N/A." } },
        { name: "superclawman-propostas (GH Pages)",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Customer-facing artifact host.", sandman: "Not owner.", superclawman: "Owns. pauloovidio-a11y/superclawman-propostas. robots.txt blocks indexing.", ktulu: "N/A.", jr: "N/A." } },
        { name: "HeyGen avatar (Mediterranean Onyx)",
          status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Superclawman face for video.", sandman: "Not owner.", superclawman: "Active.", ktulu: "N/A (Phase 3 candidate).", jr: "Deferred — Phase 0d.5 heaviest." } },
        { name: "LinkedIn / X / Instagram presence",
          status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Brand presence ops.", sandman: "Runs monitor crons (c2 LinkedIn + x-monitor).", superclawman: "Owns brand presence.", ktulu: "N/A.", jr: "N/A." } },
        { name: "Sales pipeline (beautiful-websites kit)",
          status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "5-skill sales pipeline.", sandman: "Provides google-maps + firecrawl-cli + gog skills it depends on.", superclawman: "Lives here.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "Notion Docs hub",
          status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Canonical docs hub.", sandman: "Sandman Docs page in Notion.", superclawman: "Superclawman Docs hub at notion.so/355085df9ff88122b7fdfa633a08a7b3.", ktulu: "Not yet — inheritance matrix is the canonical for now.", jr: "Canonical at Notion 'Superclawman Watchdog v2 / Jr — Canonical Architecture v1.20'." } }
      ]
    }
  ],

  pairings: [
    { from: "sandman", to: "superclawman", items: [
      "SKILLS.md index — 30 skills with no master index",
      "github-cli — Superclawman doing more repo work",
      "gog (Google Workspace) — TOOLS.md references it but skill lives only on Sandman",
      "firecrawl-cli — beautiful-websites Step 2 could use it",
      "1password — credential rotation flows",
      "health-ledger + plugin-watchdog — intelligent-alerts canonical says all agents",
      "llm-cost-fetch-api — Superclawman makes the spend"
    ] },
    { from: "superclawman", to: "sandman", items: [
      "lossless-claw plugin — Sandman's 152 scripts would benefit",
      "operational-routing.md — Sandman lacks a single reference doc",
      "5-skill learning loop — Sandman has 4 memory skills but no consolidated learning contract",
      "calendar_today.py — only Superclawman has the iCal feed wired"
    ] },
    { from: "superclawman", to: "ktulu", items: [
      "learn_from_use — highest leverage on escalation rate (Phase 2.1)",
      "precedent_matcher (BGE-M3) — replaces regex-based ktulu_escalation (Phase 2.2)",
      "inbound_style_observer / contact_style_profiler — per-prospect style learning",
      "wa-buffer-flush-wrapper — 60s coalescing (DECIDE in 1C)",
      "pdf-fetch playbook — prospects do send PDFs (DECIDE in 1C)"
    ] },
    { from: "jr", to: "sandman", items: [
      "qmd-mcp via openclaw mcp set — cleaner registration than systemd service",
      "lossless-claw — Sandman doesn't have it (Jr had it first, Mac mirrored)",
      "Snapshot import architecture — for any future failover-tier"
    ] },
    { from: "superclawman", to: "jr", items: [
      "Stays current — every Mac skill must land on Mac BEFORE/same-time as Jr per §3.3 hard rule",
      "Phase 0d.6 inter-agent comms — pre-announce handoffs + delegation + recovery handshake"
    ] }
  ]
};
