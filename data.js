// Sandman · Superclawman · Ktulu · Jr — inventory data
// Single source of truth. Loaded by index.html via <script src="data.js">.
// Live: https://pauloovidio-a11y.github.io/superclawman-docs/
// Refresh stats via refresh.sh; per-agent notes are human-curated.
window.INVENTORY = {
  generated_at: "2026-05-16T12:10:43-03:00",
  doc_title: "Sandman · Superclawman · Ktulu · Jr — Inventory Matrix",
  doc_status: "Canonical · v1.2",

  agents: [
    {
      id: "sandman",
      name: "Sandman",
      emoji: "💀",
      color: "#6B8FB5",
      role: "NUC · 192.168.1.82 · Heimdall-watched",
      host: "ssh nuc · root@192.168.1.82",
      paths: "/root/.openclaw/ · /root/sandman-po/",
      channel: "WhatsApp (Paulo's main BR)",
      signature: "[Sandman 💀]",
      hardware: "Intel i7-13620H · 16 cores · 30GB RAM",
      os: "Ubuntu 26.04 LTS · kernel 7.0.0",
      openclaw_version: "2026.5.12 (f066dd2) — tied newest with Ktulu",
      status_phase: "Entry 96 stable · codex-sandman 3-layer pipeline live · plugins=unrestricted",
      summary: "Bedtime/personal-assistant + general OpenClaw harness on the NUC. The oldest + heaviest of the cast. Runs Mission Control Dashboard, Skill Tree, QMD MCP, WhatsApp watcher, plus Sandmanpo (the VPS-side gmail/sales pipeline) as a sibling. Plugin allowlist is currently 'unrestricted' — tightening is canonical TODO.",
      stats: { skills: 29, scripts: 84, subagents: 3, hooks: 2, doctrine: 33 }
    },
    {
      id: "superclawman",
      name: "Superclawman",
      emoji: "🧠⚡🦀🤘",
      color: "#7CA56A",
      role: "Mac mini · Paulo's primary assistant",
      host: "local · clawman@Paulos-Mac-mini",
      paths: "~/.openclaw/",
      channel: "WhatsApp (+5511994917618 BR)",
      signature: "[Superclawman 🧠⚡🦀🤘]",
      hardware: "Apple M2 Pro · 32GB RAM",
      os: "macOS 15.7.4 Sequoia · Darwin 24.6.0 · arm64",
      openclaw_version: "2026.5.5 (b1abf9d)",
      status_phase: "Production · canonical authoring host",
      summary: "Cost-optimized M-series harness. Powers Paulo's WhatsApp life — Sandman/Xisto/CareHTSA/DryCleaner/family routing, plus the 31k-vector position-locked memory store with the 5-skill learning loop. Authors all canonical docs (Ktulu canonical v1.0 was written here today). Stricter doctrine surface than Sandman by design.",
      stats: { skills: 5, scripts: 73, subagents: 6, playbooks: 7, plugins: 7 }
    },
    {
      id: "ktulu",
      name: "Ktulu",
      emoji: "🦞📨⚡🤘",
      color: "#E3A04A",
      role: "Intel Mac mini i7 · outreach only",
      host: "ssh ktulu-mac · ssh ktulu-mac-ktulu",
      paths: "/Volumes/KtuluDisk/ktulu/.openclaw/",
      channel: "WhatsApp (+17866001332 USA)",
      signature: "[Ktulu 🦞📨⚡🤘] · outbound — Paulo Ovidio · Superclawman.ai",
      hardware: "Intel i7-8700B @ 3.2GHz · 12 cores · 32GB RAM · 1.8TB external APFS",
      os: "macOS 14.8.4 Sonoma · Darwin 23.6.0 · x86_64",
      openclaw_version: "2026.5.12 (f066dd2) — tied newest with Sandman",
      status_phase: "Phase 1A → 1D shipped · canonical v1.0",
      summary: "Outbound outreach + autonomous reply on Intel i7 Mac mini, paired to USA WA number +1 786-600-1332. Sibling to Superclawman. Receives prospect queue from Beautiful Websites Kit, drips outbound at human cadence, 4-branch classifier (positive/dismissive/cost/ambiguous), auto-replies where safe, escalates everything substantive to Paulo. Now git-tracked (pauloovidio-a11y/ktulu private).",
      stats: { doctrine: 8, plugins: 4, launchdaemons: 5, pipeline_modules: 9, playbooks: 2, skills: 1, subagents: 1 }
    },
    {
      id: "jr",
      name: "Superclawman Jr",
      emoji: "💀🧠",
      color: "#D45D5D",
      role: "Hetzner VPS · multi-tenant watchdog tier",
      host: "ssh superclawman-jr",
      paths: "/usr/local/lib/openclaw-jr/ · /var/lib/openclaw-jr/tenants/paulo/ · /root/.openclaw-jr-paulo/",
      channel: "Telegram (chat 8735701356)",
      signature: "[SC Jr 💀 🧠]",
      hardware: "AMD EPYC-Genoa · 4 vCPU · 7.6GB RAM · Hetzner Cloud",
      os: "Ubuntu 24.04.4 LTS",
      openclaw_version: "2026.5.5 (b1abf9d)",
      status_phase: "Phase 0d.3 active build (recovery dance)",
      summary: "VPS-side failover + watchdog. Wakes when Mac mini is unreachable (power outage, hardware failure, WA 440). Multi-tenant from day 1 (currently 1 tenant: paulo). Telegram-only on purpose — routes around WA fragility. Hard rule: Jr's capability set is always ⊆ Superclawman's. Phase 0d.3 recovery dance build active right now — recovery@ timer, jr-outage-queue.py, recovery-orchestrator.py landed today.",
      stats: { shared_scripts: 11, mcps: 7, skills: 3, systemd_units: 8, tenants: 1 }
    }
  ],

  sections: [
    {
      id: "doctrine",
      eyebrow: "A · Doctrine files (workspace root .md)",
      title: "Identity, soul, memory contracts",
      title_em: "the agent's spine",
      note: "All four agents now have the core 8 doctrine files. Ktulu's were just completed (v1.0 canonical, 2026-05-15). Jr's persona overlays from snapshot import every night.",
      rows: [
        {
          name: "IDENTITY.md", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Name, emoji, host scope. Per-agent.",
            sandman: "/root/.openclaw/workspace/IDENTITY.md. Defines Sandman 💀 + Sandmanpo VPS sibling.",
            superclawman: "~/.openclaw/workspace/IDENTITY.md. 🧠⚡🦀🤘 + Jr architecture reference.",
            ktulu: "/Volumes/KtuluDisk/ktulu/.openclaw/workspace/IDENTITY.md. 🦞📨⚡🤘. Reply label [Ktulu 🦞📨⚡🤘].",
            jr: "Per-tenant overlay at /var/lib/openclaw-jr/tenants/paulo/jr-state/IDENTITY.md. Signature [SC Jr 💀 🧠]. Overlaid after every nightly snapshot import."
          }
        },
        {
          name: "SOUL.md", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Lobster principle preserved everywhere. Voice tuned per audience.",
            sandman: "Lobster + Sandman voice. Heavier ops focus.",
            superclawman: "Lobster + pt-BR/EN tonal map. Source-of-truth voice.",
            ktulu: "Lobster preserved verbatim. EN with Paulo (debug tone), pt-BR with prospects (colloquial, never reveals AI). No AI-disclosure rule — identity-check inbound triggers escalation.",
            jr: "Lobster + signature [SC Jr 💀 🧠] + Telegram-formatted brevity rules. Per-tenant overlay."
          }
        },
        {
          name: "USER.md", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Paulo as operator. Roster varies per agent's scope.",
            sandman: "Full family + contact roster.",
            superclawman: "Full roster — Fratiany, Clarice, Cecilia + contact universe.",
            ktulu: "Stripped to operator + escalation target. Family/calendar/gym/home/finances explicitly OUT OF KTULU'S SCOPE — redirects to Superclawman.",
            jr: "Tenant-scoped: paulo tenant, chat 8735701356. Multi-tenant aware — never cross-contaminates."
          }
        },
        {
          name: "MEMORY.md", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Hard invariants — what the agent must/must-not do.",
            sandman: "Tied to nmem + qmd + lcm stack.",
            superclawman: "Tied to clawman-memory vector store + 5-skill learning loop.",
            ktulu: "6 escalation triggers, channel containment, never-leak rule, no-groups, ≤10 sends/day rate limit.",
            jr: "Snapshot-not-live state · no impersonation · no third-party outbound · no external writes · multi-tenant scoping."
          }
        },
        {
          name: "AGENTS.md", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Bootstrap order + model routing.",
            sandman: "Bootstrap + 3 subagents (codex/main/sonar) + model routing.",
            superclawman: "Bootstrap + 6 subagents + cost-optimization canonical reference.",
            ktulu: "Bootstrap kept, model routing kept, heartbeats removed, groups hardened. 1 subagent: main.",
            jr: "Bootstrap + §📅 Calendar (tag heuristics) + §🔒 Google user-data discipline + §📲 numeric Telegram chat ID rule + html-it 4-level taxonomy."
          }
        },
        {
          name: "TOOLS.md", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Per-agent credential + script surface.",
            sandman: "Huge surface — 29 skills, 1password, github, gog, hue, sonos, stripe-issuing, ordercli (ML).",
            superclawman: "Mid surface — html-it, hue, gog, WA scripts, GitHub, Higgsfield/HeyGen as Claude Code skills.",
            ktulu: "Narrow — openclaw + WA + Redis + Ktulu Python modules + html-it skill. HeyGen/Higgsfield/Hue explicitly out of scope.",
            jr: "Capability inventory: 6 plugins + 7 MCPs + 3 skills. Explicit 'cannot do' list: Send-Gmail, modify-Drive, send-as-Paulo."
          }
        },
        {
          name: "SKILLS.md", status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "partial" },
          notes: {
            default: "Sandman has 29 skills but no master index.",
            sandman: "Missing — pairing op #1.",
            superclawman: "Documents 5 self-driving Skills + 4 memory contracts.",
            ktulu: "Phase 1 capabilities documented + Phase 2 deferrals with entry criteria.",
            jr: "Skill list maintained inline in canonical doc (§4.7). No standalone SKILLS.md yet."
          }
        },
        {
          name: "HEARTBEAT.md", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "no" },
          notes: {
            default: "Periodic self-check spec.",
            sandman: "6h heartbeat with Haiku.",
            superclawman: "Heartbeat spec for periodic self-check.",
            ktulu: "Present but EMPTY — Ktulu is reactive only.",
            jr: "Edge-transition only by design. Open decision §1.4.2 on reassurance pings."
          }
        },
        {
          name: "PEOPLE.md", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: {
            default: "Sandman-only contact roster file.",
            sandman: "Full roster.",
            superclawman: "Uses agent_contacts.json + clawman-memory verdicts.",
            ktulu: "Uses kit-managed prospects map.",
            jr: "N/A — Telegram single-chat."
          }
        },
        {
          name: "HEIMDALL-CANONICAL.md", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: {
            default: "External-watcher architecture.",
            sandman: "QNAP cron runs ensure-daemon-running.sh every 5 min against NUC.",
            superclawman: "Jr is the equivalent (different impl).",
            ktulu: "Not yet — Ktulu has no external watcher.",
            jr: "Jr IS this for Mac mini side (different impl). Phase 0d.3 builds recovery dance."
          }
        },
        {
          name: "BOOTSTRAP.md", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: {
            default: "Explicit bootstrap flow.",
            sandman: "Detailed startup sequence.",
            superclawman: "Implicit via openclaw harness.",
            ktulu: "Archived to _archive/BOOTSTRAP.md as stale default — now implicit.",
            jr: "Defined in canonical doc + service unit ExecStart."
          }
        },
        {
          name: "Per-agent canonical doc",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Authoritative architecture doc.",
            sandman: "Sandman — Master Blueprint + Sandman — Canonical Architecture in Notion.",
            superclawman: "Superclawman — Master Blueprint (Canonical) in Notion. SUPERCLAWMAN_FINAL_WHATSAPP_CANONICAL_v1.md on disk.",
            ktulu: "KTULU_CANONICAL_v1.0.md (30KB, 2026-05-15) on Superclawman + Notion mirror. Sibling to Superclawman canonical.",
            jr: "Superclawman Watchdog v2 / Jr — Canonical Architecture v1.20 in Notion + SUPERCLAWMAN_WATCHDOG_JR_CANONICAL_v1.md on disk."
          }
        },
        {
          name: "Cost-optimization canonical applied",
          status: { sandman: "partial", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "cacheRetention=long, context1m=false, contextPruning, memoryFlush=off.",
            sandman: "Mirrored from Mac. Plugins.allow is unrestricted — TODO tighten.",
            superclawman: "Source of truth: SUPERCLAWMAN-COST-OPTIMIZATION-CANONICAL-v1.0.md.",
            ktulu: "Ported: cacheRetention=long, context1m=false, contextPruning cache-ttl 60m, memoryFlush=off, reserveTokensFloor=64k. Plugins.allow=[anthropic, whatsapp, memory-core, lossless-claw].",
            jr: "Applied v1.3 — Sonnet long-cache, Haiku short-cache, Haiku as compaction with reserveTokensFloor=64k, 6h heartbeat."
          }
        }
      ]
    },

    {
      id: "skills",
      eyebrow: "B · Workspace skills (~/.openclaw/workspace/skills/)",
      title: "SKILL.md packages",
      title_em: "biggest divergence surface",
      note: "Sandman has 29 skills · Superclawman has 5 · Ktulu just adopted 1 (html-it) as of 2026-05-15 · Jr has 3 (coding-agent, openai-whisper-api, goplaces) plus html-it baked into AGENTS.md as 4-level taxonomy.",
      rows: [
        { name: "html-it",
          status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "partial" },
          notes: {
            default: "Sales-grade HTML artifacts. 4-level taxonomy.",
            sandman: "Installed at /root/.openclaw/workspace/skills/html-it/.",
            superclawman: "Primary user. Per global CLAUDE.md sales-grade default.",
            ktulu: "ADOPTED 2026-05-15 — copied to /Volumes/KtuluDisk/ktulu/.openclaw/workspace/skills/html-it/. No longer Phase 2 deferral.",
            jr: "Not a standalone skill — 4-level taxonomy baked into AGENTS.md. Write-path /var/lib/openclaw-jr/tenants/paulo/jr-state/persona/html-it/."
          } },
        { name: "openhue", status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Hue lights.", sandman: "Installed.", superclawman: "Installed (alongside hue-lights).", ktulu: "Out of scope.", jr: "Out of scope — Jr is failover-tier." } },
        { name: "hue-lights", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Alt Hue interface.", sandman: "Not installed.", superclawman: "Installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "higgsfield", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "partial" },
          notes: {
            default: "Image/video gen. Plus subscription.",
            sandman: "Not installed.",
            superclawman: "Plus subscription, primary user. User-scope install.",
            ktulu: "Out of scope.",
            jr: "Wired via OAuth daemon (higgsfield-oauth.py) + reverse proxy 127.0.0.1:18790/mcp. Registered as MCP. First OAuth-protected MCP on Jr."
          } },
        { name: "heygen-skills", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "HeyGen avatar.", sandman: "Has heygen-video.mjs script instead.", superclawman: "Installed.", ktulu: "Out of scope.", jr: "Deferred — Phase 0d.5 heaviest." } },
        { name: "1password", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Secret retrieval.", sandman: "Installed.", superclawman: "Pairing op — reads ~/.openclaw/secrets/ directly.", ktulu: "Out of scope.", jr: "Out of scope — Jr uses per-tenant secrets." } },
        { name: "github-cli / openclaw-github-assistant", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "gh wrappers.", sandman: "Both installed.", superclawman: "Pairing op — propostas + Ktulu repo work.", ktulu: "Out of scope (Ktulu has its own private repo).", jr: "Out of scope." } },
        { name: "gog (Google Workspace)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Gmail/Calendar/Contacts auth wrapper.", sandman: "Installed.", superclawman: "Pairing op — TOOLS.md references gog but skill lives only on Sandman.", ktulu: "Out of scope.", jr: "Equivalent via google-oauth.py daemon + google-public + google-user MCPs. Phase 0d.2.1." } },
        { name: "google-maps", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Maps queries.", sandman: "Installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Via google-public MCP. IP-restricted API key." } },
        { name: "summarize", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Generic summarization.", sandman: "Installed.", superclawman: "Pairing op.", ktulu: "Out of scope.", jr: "Done inline by Haiku via lossless-claw." } },
        { name: "mcporter", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "MCP registry/proxy.", sandman: "Installed.", superclawman: "Pairing op.", ktulu: "Out of scope.", jr: "Uses openclaw mcp set directly." } },
        { name: "openai-whisper / voice-transcription", status: { sandman: "yes", superclawman: "no", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Voice → text.",
            sandman: "Two skill paths.",
            superclawman: "Via wa-media-enrich script.",
            ktulu: "Whisper API via openai.key — audio prospects transcribed by ktulu_media.py.",
            jr: "openai-whisper-api skill. Phase 0d.5."
          } },
        { name: "whatsapp-utils / openclaw-whatsapp", status: { sandman: "yes", superclawman: "partial", ktulu: "yes", jr: "no" },
          notes: { default: "WA helpers.", sandman: "Both as skills.", superclawman: "Scripts not skill bundle.", ktulu: "@openclaw/whatsapp plugin + native ktulu pipeline (9 modules).", jr: "N/A — Telegram-only." } },
        { name: "stripe-issuing / ordercli / sonoscli / camsnap", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Commerce + smart-home + media.", sandman: "All installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "computer-use-skill", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Computer-use bindings.", sandman: "Installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "firecrawl-cli", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Firecrawl scraper.", sandman: "As skill.", superclawman: "As openclaw plugin (mirrored from Jr 2026-05-13).", ktulu: "Out of scope.", jr: "As openclaw plugin (Phase 0d.5)." } },
        { name: "obsidian / ontology", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Notes + ontology.", sandman: "Both installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "video-frames / xurl", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Video + X URL.", sandman: "Both installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "elite-longterm-memory / fluid-memory / memory-tiering", status: { sandman: "yes", superclawman: "partial", ktulu: "planned", jr: "partial" },
          notes: {
            default: "Long-term memory layers.",
            sandman: "All 3 installed as skills.",
            superclawman: "Equivalent via clawman-memory vector store.",
            ktulu: "Phase 2 candidate.",
            jr: "Equivalent via jr-vector + lossless-claw + jr-learn stack."
          } },
        { name: "neural-memory (nmem)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Active brain.", sandman: "Active.", superclawman: "Uses clawman-memory.", ktulu: "Phase 2.", jr: "Equivalent via QMD + jr-vector." } },
        { name: "self-improving-agent / capability-evolver-pro", status: { sandman: "yes", superclawman: "partial", ktulu: "planned", jr: "partial" },
          notes: {
            default: "Self-improvement.",
            sandman: "Both as skills.",
            superclawman: "5-skill loop (multimodal_ingest, learn_from_use, synapse_grow, train_retrieval, bench_weekly).",
            ktulu: "Phase 2.",
            jr: "jr-learn distill timer + proposed-learnings queue."
          } },
        { name: "coding-agent (Codex CLI)", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "OpenAI Codex CLI.", sandman: "Not installed.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "npm install -g @openai/codex 0.130.0." } },
        { name: "goplaces", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Google Places search.", sandman: "Has google-maps instead.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Installed as skill." } }
      ]
    },

    {
      id: "plugins",
      eyebrow: "C · OpenClaw plugins (openclaw.json plugins.allow)",
      title: "Plugin allowlist",
      title_em: "narrow on Ktulu and Jr",
      note: "Per the never-surpass rule (Jr ⊆ Mac), Jr's plugins mirror or are a subset of Superclawman's. Ktulu is minimal (4 trusted). Sandman is currently UNRESTRICTED (allow=*, the only one without an explicit allowlist).",
      rows: [
        { name: "anthropic (Sonnet + Haiku)", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "All four. Cost-opt params applied everywhere.", sandman: "Sonnet 4.6 + Haiku 4.5 long-cache.", superclawman: "Sonnet 4.6 + Haiku 4.5. Cost-opt source of truth.", ktulu: "Sonnet 4.6 default + Haiku 4.5 fallback.", jr: "Sonnet 4.6 long-cache + Haiku 4.5 short-cache + Haiku as compaction model." } },
        { name: "openclaw-whatsapp", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "no" },
          notes: { default: "WhatsApp bridge.", sandman: "Paired to Paulo's main BR.", superclawman: "Paired to +5511994917618.", ktulu: "@openclaw/whatsapp paired to +17866001332.", jr: "Deliberately not installed — Telegram only by design." } },
        { name: "openclaw-telegram", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Telegram channel.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "Primary channel. Chat 8735701356." } },
        { name: "memory-core", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Bundled memory plugin.", sandman: "Active.", superclawman: "Active alongside clawman-memory.", ktulu: "Active.", jr: "Active." } },
        { name: "lossless-claw", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "Cache-aware compaction.",
            sandman: "@martian-engineering/lossless-claw@0.9.2 enabled. /root/.openclaw/lcm.db = 136MB · 20,273 msgs · 106 DAG nodes. Haiku summaryModel. Deferred-compaction mode. NOTE: 0.9.2 lags Sup/Ktulu/Jr at 0.9.4.",
            superclawman: "@martian-engineering/lossless-claw@0.9.4. Mirrored from Jr (Jr had it first 2026-05-13).",
            ktulu: "Local install in npm/node_modules.",
            jr: "v0.9.4 contextEngine. Haiku summaryModel. 300s TTL cache-aware compaction."
          } },
        { name: "browser-automation", status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Browser plugin.", sandman: "In unrestricted allow.", superclawman: "In allow.", ktulu: "Out of scope — headless.", jr: "Phase 0d.5 parity-mirror." } },
        { name: "perplexity / firecrawl", status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: {
            default: "Web search + scrape.",
            sandman: "Both available.",
            superclawman: "Both in allow.",
            ktulu: "Skipped — prospect context from kit.",
            jr: "Both installed. firecrawl via EnvironmentFile."
          } },
        { name: "openai", status: { sandman: "yes", superclawman: "no", ktulu: "yes", jr: "partial" },
          notes: { default: "OpenAI provider.", sandman: "Configured — codex subagent.", superclawman: "Anthropic-only.", ktulu: "openai.key for Whisper transcription.", jr: "openai:default profile for whisper-api skill + jr-vector embeddings." } },
        { name: "device-pair", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Gateway write-ops plugin.", sandman: "Not needed.", superclawman: "Not needed.", ktulu: "Not needed.", jr: "Added 2026-05-15 to enable CLI operator.admin grant (B fix §1.4.3)." } },
        { name: "plugins.allow IS RESTRICTED", status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Hardened allowlist — only explicitly-listed plugins load.", sandman: "Currently UNRESTRICTED — non-bundled plugins may auto-load. Canonical TODO to tighten.", superclawman: "anthropic, browser, firecrawl, lossless-claw, perplexity, whatsapp, memory-core.", ktulu: "anthropic, whatsapp, memory-core, lossless-claw — narrow 4.", jr: "telegram, anthropic, lossless-claw, browser, perplexity, firecrawl + device-pair (6+1)." } }
      ]
    },

    {
      id: "subagents",
      eyebrow: "D · Subagents (~/.openclaw/agents/)",
      title: "Per-task agent personas",
      note: "Sandman has 3, Superclawman has 6, Ktulu has 1 (main only), Jr inherits via snapshot.",
      rows: [
        { name: "main", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Default agent identity.", sandman: "Active.", superclawman: "Active.", ktulu: "Active — only subagent.", jr: "Per-tenant via --profile jr-paulo." } },
        { name: "codex (OpenAI Codex)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Code-focused agent.", sandman: "Active subagent.", superclawman: "Not configured.", ktulu: "Out of scope.", jr: "Equivalent via coding-agent skill." } },
        { name: "sonar (Perplexity research)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Research subagent.", sandman: "Active.", superclawman: "Has researcher subagent.", ktulu: "Out of scope.", jr: "Direct perplexity plugin." } },
        { name: "coder / researcher / homeauto", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Specialized subagents.", sandman: "Different names (codex/sonar).", superclawman: "All 3 active.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "monitor / c2-monitor", status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "partial" },
          notes: { default: "Monitoring subagent.", sandman: "As daemon (c2-monitor-daemon.mjs), not subagent.", superclawman: "Active as subagent.", ktulu: "Out of scope.", jr: "vps-watchdog.py fills role." } }
      ]
    },

    {
      id: "memory",
      eyebrow: "E · Memory + learning stack",
      title: "Vector stores, consolidation, learning",
      title_em: "the divergence section",
      note: "Sandman = most memory skills · Superclawman = most polished single store + 5-skill loop · Ktulu = lcm.db only (Phase 2 deferred) · Jr = cleanest architectural stack (QMD + lossless-claw + jr-vector + jr-learn + SESSION-STATE WAL).",
      rows: [
        { name: "Vector store", status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "yes" },
          notes: {
            default: "Embedding-backed semantic recall.",
            sandman: "Via neural-memory + fluid-memory skills.",
            superclawman: "clawman-memory: 31k vectors + metadata.",
            ktulu: "Phase 2 deferred — lcm.db only for now.",
            jr: "jr-vector MCP — OpenAI text-embedding-3-small over snapshot. 51,964 chunks initial reindex. Daily delta $0.01-0.05."
          } },
        { name: "BM25 / lexical search", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Keyword search.", sandman: "qmd-mcp local MCP.", superclawman: "N/A — vector-only.", ktulu: "N/A.", jr: "QMD v2.1.0 — 2,151 docs." } },
        { name: "Conversation log (WAL/DAG)", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Persistent conversation state.", sandman: "lcm.db with WAL.", superclawman: "Via lossless-claw + lcm.db.", ktulu: "lcm.db + lcm.db-wal + lcm.db-shm in /Volumes/KtuluDisk/ktulu/.openclaw/.", jr: "lossless-claw SQLite DAG + SESSION-STATE.md WAL." } },
        { name: "Daily consolidation", status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "yes" },
          notes: { default: "Nightly memory consolidation.", sandman: "workspace/memory/*.md files.", superclawman: "nightly-dream.py.", ktulu: "Phase 2.", jr: "jr-learn distill via openclaw-jr-distill@paulo.timer (04:30 BRT)." } },
        { name: "Learning loop", status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "yes" },
          notes: { default: "Self-improving capability.", sandman: "self-improving-agent + capability-evolver-pro.", superclawman: "5-skill loop.", ktulu: "Phase 2.", jr: "jr-learn MCP — learn_record / search / recent / propose_promotion." } },
        { name: "Snapshot pipeline (cross-host)", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Daily snapshot export → import.", sandman: "N/A.", superclawman: "jr-snapshot-export.py daily 04:00 BRT.", ktulu: "N/A.", jr: "jr-snapshot-import.py daily 04:00 BRT. Imports Mac's lossless-claw + WAL + persona overlay." } },
        { name: "precedent_matcher (BGE-M3)", status: { sandman: "no", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Cosine over verdicts.", sandman: "Not installed.", superclawman: "BGE-M3 escalation classifier.", ktulu: "Phase 2.", jr: "N/A — read-mostly." } },
        { name: "Inbound style observers / commitment tracker", status: { sandman: "no", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Per-contact style learning + promise tracking.", sandman: "Not installed.", superclawman: "Both active.", ktulu: "Phase 2.", jr: "N/A — single operator." } }
      ]
    },

    {
      id: "mcps",
      eyebrow: "F · MCP servers (Model Context Protocol)",
      title: "MCP surface",
      title_em: "Jr is MCP-heavy by design",
      note: "Sandman uses qmd-mcp local. Superclawman uses MCPs via Claude Code. Ktulu is MCP-free. Jr has 7 MCPs explicitly registered with openclaw.",
      rows: [
        { name: "notion", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Notion MCP.", sandman: "Not installed.", superclawman: "Via Claude Code MCP.", ktulu: "Out of scope.", jr: "@notionhq/notion-mcp-server, key from ~/.config/notion/api_key." } },
        { name: "google-public", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Maps/Routes/Places/YouTube.", sandman: "Has google-maps skill.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "jr-google-public-mcp.py ~380 LOC. IP-restricted key. $20/mo budget alert." } },
        { name: "google-user", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Gmail/Calendar/Drive/People via OAuth.", sandman: "Has gog skill.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "jr-google-user-mcp.py ~580 LOC. Auth Code + PKCE + loopback OAuth. Reads live, writes stubbed for Phase 0d.3." } },
        { name: "higgsfield (MCP)", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Higgsfield image/video gen.", sandman: "Not installed.", superclawman: "Via Claude Code MCP.", ktulu: "Out of scope.", jr: "OAuth daemon + reverse proxy 127.0.0.1:18790/mcp. First OAuth-protected MCP." } },
        { name: "jr-learn / jr-vector", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Jr-native MCPs.", sandman: "N/A.", superclawman: "Equivalent via 5-skill loop.", ktulu: "Phase 2.", jr: "Both ~370+520 LOC stdlib-only Python. Phase 0d.2.5.1." } },
        { name: "qmd (semantic search)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "QMD MCP.", sandman: "qmd-mcp.service.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "@tobilu/qmd v2.1.0. BM25-only (vector pending)." } }
      ]
    },

    {
      id: "playbooks",
      eyebrow: "G · Workspace playbooks",
      title: "Operational flow specs",
      note: "Superclawman has 7 playbooks. Sandman embeds equivalent logic in scripts. Ktulu just adopted 2 (pdf-fetch + operational-routing). Jr has none — different operating model.",
      rows: [
        { name: "xisto.md / carehtsa.md / dryclean-brooklin.md", status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Personal-life handlers.", sandman: "Embedded in *-flow.sh scripts.", superclawman: "All 3 active.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "denis.md", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Personal WA contact handler.", sandman: "Not in playbook form.", superclawman: "Active.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "pdf-fetch.md", status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "no" },
          notes: { default: "Email PDF fetch → send.", sandman: "Not in playbook form.", superclawman: "Active.", ktulu: "ADOPTED 2026-05-15 — INVERTED direction (prospect→Ktulu PDFs trigger escalation, not fetch).", jr: "Out of scope." } },
        { name: "contact-sync.md", status: { sandman: "partial", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Contact sync.", sandman: "Has gog-sync-to-agent-contacts.py.", superclawman: "Active.", ktulu: "Phase 2.", jr: "Out of scope." } },
        { name: "operational-routing.md", status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "no" },
          notes: { default: "Generic routing reference.", sandman: "Pairing op #4.", superclawman: "Active.", ktulu: "ADOPTED 2026-05-15 — Ktulu-narrowed status check.", jr: "Embedded in canonical doc." } },
        { name: "sandmanpo handlers", status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "no" },
          notes: { default: "Sandmanpo VPS.", sandman: "Has sandmanpo-flow.sh + sandmanpo-sonnet-reply.py.", superclawman: "References via scripts.", ktulu: "Out of scope.", jr: "N/A — different VPS." } }
      ]
    },

    {
      id: "daemons",
      eyebrow: "H · Persistence layer (systemd / LaunchDaemons / LaunchAgents)",
      title: "Long-running services + scheduled jobs",
      title_em: "where the agent actually breathes",
      note: "Sandman = 7 systemd + 15 cron jobs · Superclawman = 1 LaunchAgent · Ktulu = 5 LaunchDaemons (backup@ added 2026-05-16) · Jr = 8 systemd units = 4 service+timer pairs (backup@ added 2026-05-16, recovery@ shipped 2026-05-15 Phase 0d.3).",
      rows: [
        { name: "openclaw gateway", status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Always-on agent gateway.", sandman: "Different model — openclaw-whatsapp.service.", superclawman: "LaunchAgent ai.openclaw.gateway.", ktulu: "LaunchDaemon ai.openclaw.ktulu.gateway. Bash-wrapped for AMFI.", jr: "Process on port 18789. Per-tenant via --profile jr-paulo." } },
        { name: "WhatsApp bridge / wa-watcher", status: { sandman: "yes", superclawman: "yes", ktulu: "partial", jr: "no" },
          notes: { default: "WA bridge.", sandman: "openclaw-whatsapp.service + wa-watcher.service.", superclawman: "Active.", ktulu: "Replaced by gateway_ingest + ktulu_outreach_worker.", jr: "N/A." } },
        { name: "openclaw-jr-watchdog@<tenant>.timer (2-min)", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Edge-transition watchdog.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "Oneshot service every 2 min. Polls Mac via Tailscale, characterizes failure mode, fires Telegram alerts. Flap suppression added 2026-05-15." } },
        { name: "openclaw-jr-distill@<tenant>.timer (daily 04:30)", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Daily learning distill.", sandman: "N/A.", superclawman: "nightly-dream.py equivalent.", ktulu: "N/A.", jr: "Reads last 24h lossless-claw, Haiku extracts learnings, Telegram digest." } },
        { name: "openclaw-jr-recovery@<tenant>.timer", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Recovery dance orchestrator.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "Shipped 2026-05-15 (Phase 0d.3) — paired with recovery-orchestrator.py + jr-outage-queue.py. P10 wiring landed same day." } },
        { name: "openclaw-jr-backup@<tenant>.timer (NEW 2026-05-16)", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Daily Jr-side state backup.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "NEW 2026-05-16. jr-backup.py at /usr/local/lib/openclaw-jr/. 4th service+timer pair." } },
        { name: "openclaw-jr-higgsfield (OAuth proxy)", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Long-running OAuth proxy.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "Serve on 127.0.0.1:18790/mcp + 50-min refresh timer. First per-tenant OAuth daemon." } },
        { name: "ai.openclaw.ktulu.{gateway,ingest,worker,sender,backup}", status: { sandman: "no", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "Ktulu's 5 native pipeline daemons.", sandman: "N/A.", superclawman: "N/A.", ktulu: "All 5 LaunchDaemons live (backup added 2026-05-16). KeepAlive. Logs at /var/log/ktulu/ (NOT /Volumes — TCC).", jr: "N/A." } },
        { name: "sandman-dashboard / mission-control / skill-tree", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Visual control surfaces.", sandman: "All 3 active.", superclawman: "Pairing op #5.", ktulu: "Out of scope.", jr: "Out of scope (Telegram is UI)." } },
        { name: "qmd-mcp.service", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Local QMD MCP.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "QMD installed but via openclaw mcp set, not systemd." } },
        { name: "Heimdall (QNAP-side)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "External health watcher.", sandman: "QNAP cron every 5 min.", superclawman: "Jr equivalent.", ktulu: "Not yet.", jr: "Jr IS this for Mac mini." } },
        { name: "wa-watchdog (440 recovery)", status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "partial" },
          notes: { default: "WA 440 recovery.", sandman: "wa-watchdog.py + cron.", superclawman: "wa-watchdog.py + plist. v0.1 ~407 LOC, 5-min cron.", ktulu: "Phase 1C.", jr: "vps-watchdog cross-host equivalent. Recovery dance is Phase 0d.3 (active build now)." } },
        { name: "plugin-watchdog / health-ledger (3-5 min cron)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Plugin health + host snapshot.", sandman: "Both active. Entry 74 reliability stack.", superclawman: "Pairing op #6.", ktulu: "Not yet.", jr: "Equivalent via vps-watchdog + /var/log/openclaw-jr audit." } },
        { name: "openclaw-backup / nas-backup (cron 02:00)", status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "no" },
          notes: { default: "Nightly backup to QNAP.", sandman: "Canonical chain. Both crons active.", superclawman: "Some manual.", ktulu: "Not yet.", jr: "Snapshot is the backup (daily import from Mac)." } },
        { name: "synthetic-ping / llm-cost-fetch-api crons", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Health pings + cost telemetry.", sandman: "Both active.", superclawman: "Pairing op.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "x-monitor / c2-monitor / wa-digest crons", status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "no" },
          notes: { default: "Intelligence streams.", sandman: "All 3 active.", superclawman: "Has c2-monitor as subagent.", ktulu: "Out of scope.", jr: "Out of scope." } }
      ]
    },

    {
      id: "scripts",
      eyebrow: "I · Notable script families",
      title: "Capability-bearing scripts",
      note: "Sandman ~84 scripts (probe canonical; previous ~152 was operator-curated, included backups) · Superclawman ~73 · Ktulu has 9 native pipeline modules in clawman-bus/ · Jr has 11 shared scripts at /usr/local/lib/openclaw-jr/ (jr-backup.py added 2026-05-16).",
      rows: [
        { name: "dashboard-server.mjs", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Control Center UI.", sandman: "Sandman dashboard server.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "diagnose.mjs / diagnose-and-notify.sh", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Intelligent alert pipeline.", sandman: "LLM diagnosis + action steps.", superclawman: "Not installed.", ktulu: "Not yet.", jr: "vps-watchdog.py first-person Telegram alerts." } },
        { name: "c2-monitor-daemon (LinkedIn)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "LinkedIn intelligence.", sandman: "Canonical at LinkedIn Intelligence Architecture v1.3.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "c6-finance / c6-statement-pipeline", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "C6 Bank finance.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "news-daily / weather-daily", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Daily briefing.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "polar-workout-sync", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Polar HR → calendar.", sandman: "Daily 18:00 cron.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "ml-buy / price-intel (Mercado Livre)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Commerce pipeline.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "pluggy-connect-server", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Brazilian open banking.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "Out of scope." } },
        { name: "notion-publish / doc-publish", status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "yes" },
          notes: { default: "Notion publish runtime.", sandman: "notion-publish.mjs + doc-publish.sh.", superclawman: "Via Claude Code Notion MCP.", ktulu: "Out of scope.", jr: "Via Notion MCP." } },
        { name: "wa-classify-* / wa-intent-classify", status: { sandman: "no", superclawman: "yes", ktulu: "partial", jr: "no" },
          notes: { default: "Deep WA classifier stack.", sandman: "Different focus.", superclawman: "Full stack.", ktulu: "ktulu_escalation.py 6-trigger regex + ktulu_campaign_replies.py 4-branch classifier.", jr: "N/A." } },
        { name: "wa-buffer-flush-wrapper (60s coalescing)", status: { sandman: "no", superclawman: "yes", ktulu: "yes", jr: "no" },
          notes: { default: "Burst coalescing.", sandman: "Not installed.", superclawman: "Active.", ktulu: "ADOPTED — wa-buffer/ with idle=30s, max_age=120s per-prospect.", jr: "N/A." } },
        { name: "calendar_today.py (BRT)", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "BRT-aware calendar.", sandman: "Pairing op #7.", superclawman: "Active with iCal feed.", ktulu: "Out of scope.", jr: "Via google-user MCP — multi-calendar fix 2026-05-13." } },
        { name: "vps-watchdog / recovery-orchestrator / jr-outage-queue", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Jr's Phase 0d.3 stack.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "All 3 at /usr/local/lib/openclaw-jr/. vps-watchdog (Phase 0d.1 active). recovery-orchestrator + jr-outage-queue NEW today (Phase 0d.3 build)." } },
        { name: "ktulu pipeline (9 modules)", status: { sandman: "no", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "Ktulu's native pipeline.", sandman: "N/A.", superclawman: "N/A.", ktulu: "clawman-bus/: bus.py · gateway_ingest.py · ktulu_signature.py · ktulu_contacts.py · ktulu_escalation.py · ktulu_media.py · ktulu_campaign_replies.py · ktulu_outreach_worker.py · ktulu_sender.py.", jr: "N/A." } }
      ]
    },

    {
      id: "external",
      eyebrow: "J · Brand + external surfaces",
      title: "Avatars, sites, intelligence streams",
      note: "Superclawman owns the public brand. Sandman runs underlying monitor crons. Ktulu now has its own private git repo. Jr has no public surface.",
      rows: [
        { name: "superclawman.ai (Cloudflare Pages)", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Public brand site.", sandman: "Not owner.", superclawman: "Owns.", ktulu: "N/A.", jr: "N/A." } },
        { name: "superclawman-propostas (GH Pages)", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Customer-facing artifact host.", sandman: "Not owner.", superclawman: "pauloovidio-a11y/superclawman-propostas. robots.txt blocks indexing.", ktulu: "N/A.", jr: "N/A." } },
        { name: "pauloovidio-a11y/ktulu (private repo)", status: { sandman: "no", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "Private git repo.", sandman: "N/A.", superclawman: "N/A.", ktulu: "Ktulu's workspace is git-tracked. Private repo at pauloovidio-a11y/ktulu.", jr: "N/A." } },
        { name: "HeyGen avatar (Mediterranean Onyx)", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Superclawman face for video.", sandman: "Not owner.", superclawman: "Active.", ktulu: "Phase 3 candidate.", jr: "Phase 0d.5 heaviest deferred." } },
        { name: "LinkedIn / X / Instagram presence", status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Brand presence ops.", sandman: "Runs monitor crons.", superclawman: "Owns brand presence.", ktulu: "N/A.", jr: "N/A." } },
        { name: "Sales pipeline (beautiful-websites kit)", status: { sandman: "partial", superclawman: "yes", ktulu: "yes", jr: "no" },
          notes: { default: "5-skill sales pipeline.", sandman: "Provides google-maps + firecrawl-cli + gog skills.", superclawman: "Lives here. Drives Ktulu via dispatcher.", ktulu: "RECEIVES prospect queue from BW kit + drips outbound (the destination for the pipeline's WhatsApp follow-ups).", jr: "Out of scope." } },
        { name: "Notion Docs hub", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Canonical docs hub.", sandman: "Sandman Docs page in Notion.", superclawman: "Superclawman Docs hub at 355085df9ff88122b7fdfa633a08a7b3.", ktulu: "Mirror under Superclawman Docs (planned).", jr: "Canonical at 'Superclawman Watchdog v2 / Jr — Canonical Architecture v1.20'." } }
      ]
    }
  ],

  pairings: [
    { from: "sandman", to: "superclawman", items: [
      "SKILLS.md index — 29 skills with no master index",
      "github-cli — repo work (Ktulu private repo, propostas)",
      "gog (Google Workspace) — TOOLS.md references it but skill lives only on Sandman",
      "firecrawl-cli — already mirrored to Sup as plugin (Phase 0d.5)",
      "1password — credential rotation flows",
      "health-ledger + plugin-watchdog — intelligent-alerts canonical says all agents",
      "llm-cost-fetch-api — Superclawman makes the spend"
    ] },
    { from: "superclawman", to: "sandman", items: [
      "operational-routing.md — Sandman lacks the doc",
      "5-skill learning loop — Sandman has 4 memory skills but no consolidated learning contract",
      "calendar_today.py — only Superclawman has the iCal feed",
      "plugins.allow tighten — Sandman is currently unrestricted (canonical TODO)"
    ] },
    { from: "superclawman", to: "ktulu", items: [
      "learn_from_use — highest leverage on escalation rate (Phase 2.1)",
      "precedent_matcher (BGE-M3) — replaces regex-based ktulu_escalation (Phase 2.2)",
      "inbound_style_observer / contact_style_profiler — per-prospect style learning",
      "OpenClaw 2026.5.12 → bump Mac from 5.5 to 5.12 (Sandman + Ktulu both at 5.12; Mac is the laggard)",
      "Vector store memory — Phase 2"
    ] },
    { from: "ktulu", to: "superclawman", items: [
      "Bash-wrapped LaunchDaemon pattern (AMFI bypass) — useful for any system-context daemon",
      "wa-buffer-flush implementation (30s idle / 120s max-age) — already on Mac, but Ktulu's adaptation tested with prospects",
      "TCC + Full Disk Access discipline — the lesson that /Volumes paths need FDA for system daemons"
    ] },
    { from: "jr", to: "sandman", items: [
      "qmd-mcp via openclaw mcp set — cleaner registration",
      "Snapshot import architecture — useful for any future failover-tier"
    ] },
    { from: "superclawman", to: "jr", items: [
      "Mac must lead — every Mac skill must land BEFORE/same-time as Jr per §3.3 hard rule",
      "Phase 0d.3 recovery dance — active build right now (recovery@ timer + recovery-orchestrator.py + jr-outage-queue.py landed today)",
      "Phase 0d.6 inter-agent comms — pre-announce handoffs + delegation + recovery handshake"
    ] }
  ],

  recent_activity: [
    { agent: "sandman", at: "2026-05-16", note: "Matrix correction: lossless-claw v0.9.2 was already installed (DB has 20,273 msgs / 106 DAG nodes — accumulated pre-detection; install ran as root, not sandmanpo). Closes pairing op #3. Also: OpenClaw 2026.5.7 → 2026.5.12 bump caught + codex-sandman 3-layer pipeline now live (Entry 96 stable). 0.9.2 → 0.9.4 lossless-claw bump now the only remaining gap." },
    { agent: "ktulu", at: "2026-05-16", note: "5th LaunchDaemon shipped — ai.openclaw.ktulu.backup.plist. Pipeline now {gateway,ingest,worker,sender,backup}." },
    { agent: "jr", at: "2026-05-16", note: "4th service+timer pair shipped — openclaw-jr-backup@.timer + jr-backup.py. 8 systemd units total (was 6). jr-google-user-mcp.py refined (writes still stubbed per Phase 0d.3)." },
    { agent: "ktulu", at: "2026-05-15", note: "Major refactor — workspace moved to /Volumes/KtuluDisk/ktulu/.openclaw/. Adopted html-it skill + pdf-fetch + operational-routing playbooks. 9 pipeline modules in clawman-bus/. KTULU_CANONICAL_v1.0.md written (30KB). Now git-tracked at pauloovidio-a11y/ktulu (private)." },
    { agent: "jr", at: "2026-05-15", note: "Phase 0d.3 active build — recovery@ timer added, recovery-orchestrator.py + jr-outage-queue.py landed. vps-watchdog flap suppression shipped (commit d053fa1c). P10 wiring landed same day." },
    { agent: "superclawman", at: "2026-05-15", note: "Authored KTULU_CANONICAL_v1.0.md. Updated SUPERCLAWMAN_FINAL_WHATSAPP_CANONICAL_v1, X_CANONICAL, POST_MEMORY_LEARNING_PLAN, MEMORY_FINAL_CANONICAL, WATCHDOG_JR_CANONICAL." }
  ]
};
