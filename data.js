// Sandman · Superclawman · Ktulu · Jr — inventory data
// Single source of truth. Loaded by index.html via <script src="data.js">.
// Live: https://pauloovidio-a11y.github.io/superclawman-docs/
// Refresh stats via refresh.sh; per-agent notes are human-curated.
window.INVENTORY = {
  generated_at: "2026-05-30T22:45:56-03:00",
  doc_title: "Sandman · Superclawman · Ktulu · Jr — Inventory Matrix",
  doc_status: "Canonical · v1.34",

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
      openclaw_version: "2026.5.22 (a374c3a) — fleet-wide 5.22 upgrade 2026-05-24",
      status_phase: "Entry 96 stable · codex-sandman 3-layer pipeline live · plugins=unrestricted",
      summary: "Bedtime/personal-assistant + general OpenClaw harness on the NUC. The oldest + heaviest of the cast. Runs Mission Control Dashboard, Skill Tree, QMD MCP, WhatsApp watcher, plus Sandmanpo (the VPS-side gmail/sales pipeline) as a sibling. Plugin allowlist is currently 'unrestricted' — tightening is canonical TODO.",
      stats: { skills: 29, scripts: 103, subagents: 3, hooks: 2, doctrine: 34 }
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
      openclaw_version: "2026.5.22 (a374c3a) — fleet-wide 5.22 upgrade 2026-05-24",
      status_phase: "Production · canonical authoring host · launchagents 22 (ai.openclaw.*): +otel-collector 2026-05-29 14:02 + +mcp-cost-breakdown 2026-05-29 22:16",
      summary: "Cost-optimized M-series harness. Powers Paulo's WhatsApp life — Sandman/Xisto/CareHTSA/DryCleaner/family routing, plus the 31k-vector position-locked memory store with the 5-skill learning loop. Authors all canonical docs (Ktulu canonical v1.0 was written here today). Stricter doctrine surface than Sandman by design.",
      stats: { skills: 7, scripts: 126, subagents: 7, playbooks: 7, launchagents: 22, plugins: 9 }
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
      openclaw_version: "2026.5.22 (a374c3a) — fleet-wide 5.22 upgrade 2026-05-24",
      status_phase: "Phase 1A→1E shipped · canonical v1.7.1 (2026-05-28) · campaign fired+hardened (2026-05-19/20) · 28 LaunchDaemons (23 active plists + 5 bak files; +ai.openclaw.ktulu.patch-watchdog 2026-05-29 20:57 BRT; gateway.plist bak-pre-otel 2026-05-29 18:49 BRT; qmd-refresh.plist homefix 2026-05-28 → bak; +followup 2026-05-28; +inter-agent 2026-05-27, +learn-capture + jr-wa-status + weekly-report 2026-05-25, +activity-collect 2026-05-24) · Central CC observability LIVE — green on :8991 (3/3, 0 red), 2026-05-21 · FULL Control Center dashboard live on :8990 Tailscale (cost+briefing+drift+Heimdall+cron, parity with Sandman/SC), 2026-05-22 · qmd-refresh live · boss-relay + bot-handoff active · escalate-only doctrine locked · bootstrap-budget + llm-cost-fetch daemons added 2026-05-21/22 · worker→observer AGENT-PRIMARY (v1.5, 2026-05-22) · **Step 2 send-guard LIVE 2026-05-25** — ktulu-sendguard openclaw plugin (message_sending cancel + before_tool_call block), enforce: agent structurally CANNOT send to a prospect; single guarded exit = sender daemon (boss-relay via ktulu_enqueue_relay.py) · Phase 2.2 verdict-capture live + daemonized (learn-capture nightly) · SC A.1 gate done (phase_2_1 published) · learning engine (memory-engine-v2/judge/flush/precedent_matcher) DEFERRED-by-design (corpus ~2), self-firing daily-digest revisit trigger armed · **§14 Outreach Agent Evolution fully shipped 2026-05-28 (v1.7)** — followup engine LIVE (`ai.openclaw.ktulu.followup` 14:00 BRT, cadence 3d/7d, MAX=3, token-gated, oldest-due-first + `KTULU_FOLLOWUP_DAILY_CAP=5` backlog-drain safety), objection library `ktulu_objections.py` seeded (positive/cost/dismissive, `auto_reply=False`), edited-verdict wiring (`suggested_reply` diff via SequenceMatcher, EDIT_THRESHOLD env-tunable), Pattern #8 seam test locks WORKER_IS_OBSERVER, Phase 2 D/E skeletons hardened, Track B kept escalate-only (revisit post-N≥20) · plugins.allow 5→6 (+ktulu-sendguard, 2026-05-25) · pipeline_modules 12→16 (+ktulu_enqueue_relay, ktulu_weekly_report, ktulu_followup — all 2026-05-25; +ktulu_objections 2026-05-28)",
      summary: "Outbound outreach + autonomous reply on Intel i7 Mac mini, paired to USA WA number +1 786-600-1332. Sibling to Superclawman. Receives prospect queue from Beautiful Websites Kit, drips outbound at human cadence, 4-branch classifier (positive/dismissive/cost/ambiguous). Post-campaign hardening (v1.3→v1.4): prospect-chat leak fixed (single-tier escalate-only), boss-relay live, bot-handoff carve-out, qmd local search bootstrapped, backup-tmp relocated to KtuluDisk. Now git-tracked (pauloovidio-a11y/ktulu private). **Step 2 (2026-05-25) makes leak-proofing STRUCTURAL** — a custom openclaw plugin (message_sending cancel + before_tool_call block) supersedes doctrine-only safety; boss-relay routes through ktulu_enqueue_relay.py → the guarded sender (single exit). Phase 2.2 verdict-capture live; learning engine deferred until verdict volume (auto-revisit via daily digest).",
      stats: { doctrine: 8, plugins: 6, launchdaemons: 28, pipeline_modules: 16, playbooks: 2, skills: 1, subagents: 1 }
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
      openclaw_version: "2026.5.22 (a374c3a) — fleet-wide 5.22 upgrade; Jr upgraded 2026-05-25",
      status_phase: "JR MVP COMPLETE · canonical v1.45 (0d.4.4 self-firing 7-day soak review wired 2026-05-28; 0d.6 inter-agent comms + 0d.7.4 cross-primary backup monitoring + 0d.4 multimodal substrate 2026-05-27) · v1.32 lighter-SC ports · ON THE CENTRAL CC BOARD 2026-05-22/23 (full dashboard :8990 + Fleet card on SC :8991, 4/4 green) · Heimdall-less by design · systemd_units 37 (+learn-capture service+timer 2026-05-28; +jr-0d44-soak-review service+timer 2026-05-28; +8 on 2026-05-27: inter-agent, bearer-rotate service+3 timers, backup-monitor service+timer, media-watcher) · OpenClaw upgraded 5.20→5.22 (a374c3a) 2026-05-25 · Phase 0d.7.0 multi-primary substrate: 0d.7.4 backup-monitor live; rest pending · biometrics venv live (InsightFace faces + SpeechBrain voices, 1.7GB, 7-day soak from 2026-05-27, automatic verdict 2026-06-03 09:00 BRT via OnCalendar one-shot)",
      summary: "VPS-side failover + watchdog. Wakes when Mac mini is unreachable (power outage, hardware failure, WA 440). Multi-tenant from day 1 (currently 1 tenant: paulo). Telegram-only on purpose — routes around WA fragility. Hard rule: Jr's capability set is always ⊆ Superclawman's. v1.30 added operator-declared ambient-state primitives (maintenance + travel modes via jr-maintenance.py + jr-travel-mode.py) using the 5-part pattern. Daily-digest envelope shipped (jr-daily-digest@.timer).",
      stats: { shared_scripts: 31, mcps: 4, skills: 3, systemd_units: 40, tenants: 1, git_repo: "pauloovidio-a11y/openclaw-jr (private)" }
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
            ktulu: "No on-host doctrine file yet, but external Heimdall coverage is LIVE (2026-05-21): QNAP heimdall-ktulu-probe, Mode C dry-run, reads via SC's fleet-server.",
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
            jr: "Superclawman Watchdog v2 / Jr — Canonical Architecture v1.45 in Notion (LIVE page 364085df-9ff8-8187-bc86-d2c69168799a; two earlier duplicate pages — v1.30 362085df + v1.32 363085df — consolidated + trashed 2026-05-18). Source of truth is the workspace markdown SUPERCLAWMAN_WATCHDOG_JR_CANONICAL_v1.md (Notion = read-only published view; v1.38–v1.43 intermediate entries backfill into Notion is queued). Recent arc: lighter-SC port sprint (v1.32) → Phase 0d.7 design decisions (v1.35) → pre-0d.7 hardening (v1.36) → Phase 0d.7 multi-primary work + stall-watch fix (v1.38–v1.44) → 0d.4.4 self-firing soak review (v1.45, 2026-05-28)."
          }
        },
        {
          name: "Cost-optimization canonical applied",
          status: { sandman: "partial", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: {
            default: "cacheRetention=long, context1m=false, contextPruning, memoryFlush=off.",
            sandman: "Mirrored from Mac. Plugins.allow is unrestricted — TODO tighten.",
            superclawman: "Source of truth: SUPERCLAWMAN-COST-OPTIMIZATION-CANONICAL-v1.0.md.",
            ktulu: "Ported: cacheRetention=long, context1m=false, contextPruning cache-ttl 60m, memoryFlush=off, reserveTokensFloor=64k. Plugins.allow=[anthropic, whatsapp, memory-core, lossless-claw, browser, ktulu-sendguard] (browser 2026-05-16 for web_fetch; ktulu-sendguard = Step-2 structural send-guard, 2026-05-25).",
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
        { name: "1password", status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Secret retrieval.", sandman: "Installed (desktop+tmux flow).", superclawman: "Ported 2026-05-17. op CLI v2.34 + Business-tier service-account token at ~/.openclaw/secrets/op_service_account.token (chmod 600), exported as OP_SERVICE_ACCOUNT_TOKEN by the gateway env-wrapper. Verified: `op whoami` → SERVICE_ACCOUNT, integration BMCUDVWK5VDE3HGMAFRWQ5AH2Q. Current scope: 3 vaults (Cards/Imported CSV/Websites) — recommended tightening to dedicated 'Superclawman' vault, deferred. Flat-file ~/.openclaw/secrets/*.key remains canonical; 1Password is additive (opt-in per secret) for vault scoping + rotation + audit trail.", ktulu: "Out of scope.", jr: "Out of scope — Jr uses per-tenant secrets." } },
        { name: "github-cli / openclaw-github-assistant", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "gh wrappers.", sandman: "Both installed.", superclawman: "Pairing op — propostas + Ktulu repo work.", ktulu: "Out of scope (Ktulu has its own private repo).", jr: "Out of scope." } },
        { name: "gog (Google Workspace)", status: { sandman: "yes", superclawman: "yes", ktulu: "no", jr: "partial" },
          notes: { default: "Gmail/Calendar/Contacts/Drive/Sheets/Docs auth wrapper.", sandman: "Installed.", superclawman: "Ported 2026-05-17 (declarative — binary + OAuth were already live, 79 hard deps across scripts; missing only the documented skill artifact). TOOLS.md updated. calendar_today.py iCal feed is a separate mechanism, unaffected.", ktulu: "Out of scope.", jr: "Equivalent via google-oauth.py daemon + google-public + google-user MCPs. Phase 0d.2.1." } },
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
            superclawman: "Equivalent via clawman-memory vector store + lossless-claw hot tier + workspace/memory/YYYY-MM-DD.md cold tier. **AUDIT 2026-05-17 (Part b) → SKIP all 3**: elite-longterm-memory + fluid-memory overlap heavily with Skill 3 synapse_grow + Skill 4 train_retrieval + lossless-claw v0.10.0; porting risks dual-orchestration race conditions. memory-tiering policy text (eviction/promotion rules) could feed Skill 4 grid-search knobs as a deferred opportunity — not a port. The memory-v3 doc lists HOT/WARM/COLD tiering as priority-#5 TODO; SC's tiering is informal but functional.",
            ktulu: "Phase 2 candidate.",
            jr: "Equivalent via jr-vector + lossless-claw + jr-learn stack."
          } },
        { name: "neural-memory (nmem)", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Active brain.", sandman: "Active. SQLite graph (~/.neuralmemory/brains/<name>.db): 1034 neurons, 5063 typed synapses (20 edge types incl. REFERENCES/ELABORATES/SUPERSEDES/CONTRADICTS), 502 fibers (temporal/causal narratives), 491 typed memories. Operations: nmem remember | recall (spreading activation, multi-hop) | stats | health.", superclawman: "Uses clawman-memory + 5-skill loop. **AUDIT 2026-05-17 (Part b) → SKIP**: nmem has 5 genuinely unique primitives (spreading activation, Hebbian co-activation logging, neuron decay + refractory period, knowledge-gap detection, brain versioning) but porting creates dual learning-signal contention with Skill 2 learn_from_use's reinforcement_journal. SC's typed synapses are already generated post-ingest by Skill 3 via Haiku kNN classifier (different mechanism, equivalent surface). Revisit ONLY if 'distant-association discovery' (2+ hop graph traversal) becomes a real bottleneck — none today.", ktulu: "Phase 2.", jr: "Equivalent via QMD + jr-vector." } },
        { name: "self-improving-agent / capability-evolver-pro", status: { sandman: "yes", superclawman: "partial", ktulu: "planned", jr: "partial" },
          notes: {
            default: "Self-improvement.",
            sandman: "self-improving-agent: errors/corrections/feature-requests → .learnings/*.md files (ERR-/LRN-/FEAT- IDs) → daily Haiku consolidation 23:50 BRT → NeuralMemory. Recurrence ≥3 → promote to SOUL/AGENTS/TOOLS.md. capability-evolver-pro: no operational description in Sandman blueprint, appears shelf-ware.",
            superclawman: "5-skill loop (multimodal_ingest, learn_from_use, synapse_grow, train_retrieval, bench_weekly) + paulo_bench golden-set + 5% delta gate + auto-rollback (Skill 5 bench_weekly). **AUDIT 2026-05-17 (Part b) → SKIP both**: Sandman's pipeline is observe-extract only (no metrics gates, no tuning loop); SC's is observe-extract-tune-bench-rollback — strictly more capable. capability-evolver-pro can't be ported safely (no docs). Sandman's 23:50 BRT cron would also race SC's 03:30 BRT sleep_consolidate.",
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
        { name: "browser-automation", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Browser plugin.", sandman: "In unrestricted allow.", superclawman: "In allow.", ktulu: "Added 2026-05-16 — gives Ktulu static-HTML fetch via openclaw web_fetch (verified on canto-do-brigadeiro.vercel.app).", jr: "Phase 0d.5 parity-mirror." } },
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
          notes: { default: "Hardened allowlist — only explicitly-listed plugins load.", sandman: "Currently UNRESTRICTED — non-bundled plugins may auto-load. Canonical TODO to tighten.", superclawman: "anthropic, browser, firecrawl, lossless-claw, perplexity, whatsapp, memory-core, openai, codex (last 2 added 2026-05-17 for codex script-review pipeline).", ktulu: "anthropic, whatsapp, memory-core, lossless-claw, browser — narrow 5 (browser added 2026-05-16).", jr: "telegram, anthropic, lossless-claw, browser, perplexity, firecrawl + device-pair (6+1)." } }
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
        { name: "codex (OpenAI Codex)", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Code-focused agent.", sandman: "Active subagent + script-review reviewer.", superclawman: "Codex gpt-5.5 = primary script-review reviewer.", ktulu: "Script-review reviewer.", jr: "Logged in via `codex login --device-auth` 2026-05-29 — full Codex+Haiku script-review reviewer." } },
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
        { name: "Multimodal audit substrate (media_audit.jsonl)", status: { sandman: "no", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "Persisted multimodal-event log for retrospective learning.", sandman: "Not installed.", superclawman: "Not installed.", ktulu: "~/.openclaw/workspace/handoff/state/media_audit.jsonl — every transcript + image description + PDF/video metadata persisted by ktulu_media.py (2026-05-16). Phase 2.3 multimodal_ingest bootstrap substrate.", jr: "Not installed." } },
        { name: "Daily consolidation", status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "yes" },
          notes: { default: "Nightly memory consolidation.", sandman: "workspace/memory/*.md files.", superclawman: "nightly-dream.py.", ktulu: "Phase 2.", jr: "jr-learn distill via openclaw-jr-distill@paulo.timer (04:30 BRT)." } },
        { name: "Learning loop", status: { sandman: "yes", superclawman: "yes", ktulu: "planned", jr: "yes" },
          notes: { default: "Self-improving capability.", sandman: "self-improving-agent + capability-evolver-pro.", superclawman: "5-skill loop.", ktulu: "Phase 2.", jr: "jr-learn MCP — learn_record / search / recent / propose_promotion." } },
        { name: "Snapshot pipeline (cross-host)", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "yes" },
          notes: { default: "Daily snapshot export → import.", sandman: "N/A.", superclawman: "jr-snapshot-export.py daily 04:00 BRT.", ktulu: "N/A.", jr: "jr-snapshot-import.py daily 04:00 BRT. Imports Mac's lossless-claw + WAL + persona overlay." } },
        { name: "precedent_matcher (BGE-M3)", status: { sandman: "no", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Cosine over verdicts.", sandman: "Not installed.", superclawman: "BGE-M3 escalation classifier.", ktulu: "Phase 2.", jr: "N/A — read-mostly." } },
        { name: "Inbound style observers / commitment tracker", status: { sandman: "no", superclawman: "yes", ktulu: "planned", jr: "no" },
          notes: { default: "Per-contact style learning + promise tracking.", sandman: "Not installed.", superclawman: "Both active.", ktulu: "Phase 2.", jr: "N/A — single operator." } },
        { name: "Per-agent provenance scopes (memory_scopes.py)", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "agent_scope as provenance metadata on every memory row (NOT cross-agent ACL — each agent has its own brain).", sandman: "Own brain — separate store.", superclawman: "memory_scopes.py + migrate_agent_scope.py + memory_scopes_cli.py + memory-engine-v2 --agent wiring. 40,634 rows backfilled to [tenant:default:org] 2026-05-16. Doctrinal reframe (post-multi-session coord): scope is who-wrote-this, not who-can-read-this. Strict reader rule still useful within-store for asymmetric reads (e.g. Jr→Sandman in failover). `tenant:<id>:<agent>` namespace composes for §C.3 SaaS prep. Memory canonical v1.49 + post-plan v1.10 🔒 CLOSED (v1.42–v1.49 added daily learning-health daemon + sleep_consolidate outage fix + chat_index dedup + §C.1 verdict gate; live store 41,085 rows). Phase 4 Stages 1+2 shipped (code); Stages 3+4 are observation (not code).", ktulu: "Own brain — separate store.", jr: "Own brain — separate store." } }
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
          notes: { default: "Sandmanpo VPS.", sandman: "Has sandmanpo-flow.sh + sandmanpo-sonnet-reply.py.", superclawman: "References via scripts.", ktulu: "Out of scope.", jr: "N/A — different VPS." } },
        { name: "Credential audit playbook (fleet-wide)", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Reusable methodology for fleet-wide credential audits across GCP/Anthropic/OpenAI.", sandman: "Covered.", superclawman: "Authoring host. Admin keys at ~/.openclaw/secrets/{anthropic,openai}_admin.key (chmod 600). GCP via gcloud user-level auth. Post-cleanup state: 7 OpenAI keys live + 3 revoked (clawman-mac, Mac-01, Clawman-mac2), 5 OpenAI projects, 21-key Anthropic history (5 active / 16 archived). Memory entries: playbook_credential_audit_2026_05_16.md + state_provider_admin_keys_2026_05_16.md.", ktulu: "Covered — has anthropic.key + openai.key per §8.", jr: "Covered — admin keys + OAuth daemons (google + higgsfield)." } }
      ]
    },

    {
      id: "daemons",
      eyebrow: "H · Persistence layer (systemd / LaunchDaemons / LaunchAgents)",
      title: "Long-running services + scheduled jobs",
      title_em: "where the agent actually breathes",
      note: "Sandman = 7 systemd + 15 cron jobs · Superclawman = 14 LaunchAgents (+ai.openclaw.activity-collect 2026-05-24) · Ktulu = 17 LaunchDaemons (+health-pulse retroactively identified 2026-05-24 + activity-collect 2026-05-24) · Jr = 25 systemd units (+openclaw-jr-activity.service+.timer 2026-05-24; was 23 per 2026-05-23 nightly).",
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
        { name: "openclaw-jr-backup@<tenant>.timer", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Daily Jr-side state backup.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "Shipped 2026-05-16. jr-backup.py at /usr/local/lib/openclaw-jr/. 4th service+timer pair." } },
        { name: "openclaw-jr-daily-digest@<tenant>.timer (NEW 2026-05-16 PM)", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Daily Jr-side digest envelope to Telegram.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "NEW 2026-05-16. jr-daily-digest.py at /usr/local/lib/openclaw-jr/. 5th service+timer pair. Mirrors Ktulu's digest pattern (codifies action-clarity rule)." } },
        { name: "openclaw-jr-higgsfield (OAuth proxy)", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Long-running OAuth proxy.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "Serve on 127.0.0.1:18790/mcp + 50-min refresh timer. First per-tenant OAuth daemon." } },
        { name: "ai.openclaw.ktulu.{gateway,ingest,worker,sender,backup,digest,wa-watchdog,codex-review-c2-watcher,codex-review-safety,qmd-refresh,dashboard,health-ledger,wa-probe,bootstrap-budget,llm-cost-fetch,health-pulse,activity-collect}", status: { sandman: "no", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "Ktulu's 17 LaunchDaemons.", sandman: "N/A.", superclawman: "N/A.", ktulu: "17 LaunchDaemons (all KeepAlive, logs /var/log/ktulu/): core pipeline (gateway/ingest/worker/sender — v1.0) + backup (v1.1, daily GPG to QNAP) + digest (v1.2.a, 21:00 BRT status envelope, action-clarity rule) + qmd-refresh (v1.2.c/v1.4.d, 22:00 BRT, bootstrapped 2026-05-20) + wa-watchdog (v1.2.d, 3-min WA disconnect recovery) + codex-review-c2-watcher (2026-05-18) + codex-review-safety (2026-05-18) + dashboard (full CC :8990, 2026-05-22, replaces 1.7.1 shim) + health-ledger (2026-05-21, StartInterval 300, HC.io pings) + wa-probe (outreach probe) + bootstrap-budget (2026-05-21, budget tracking daemon) + llm-cost-fetch (2026-05-22, cost telemetry LaunchDaemon) + health-pulse (2026-05-22, plist-confirmed, retroactively identified 2026-05-24 via `ls /Library/LaunchDaemons/ai.openclaw.ktulu.*`) + activity-collect (2026-05-24, nightly activity reporting daemon — fleet-wide deploy).", jr: "N/A." } },
        { name: "sandman-dashboard / mission-control / skill-tree", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "no" },
          notes: { default: "Visual control surfaces.", sandman: "All 3 active.", superclawman: "Pairing op #5.", ktulu: "Out of scope.", jr: "Out of scope (Telegram is UI)." } },
        { name: "qmd-mcp.service", status: { sandman: "yes", superclawman: "no", ktulu: "no", jr: "partial" },
          notes: { default: "Local QMD MCP.", sandman: "Active.", superclawman: "Not installed.", ktulu: "Out of scope.", jr: "QMD installed but via openclaw mcp set, not systemd." } },
        { name: "Heimdall (QNAP-side)", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "n/a" },
          notes: { default: "External health watcher.", sandman: "QNAP cron every 5 min.", superclawman: "QNAP heimdall-sc-probe (Mode C dry-run) → shared Haiku judge → Superclawman Heimdall app.", ktulu: "QNAP heimdall-ktulu-probe (Mode C dry-run, 2026-05-21). Reads Ktulu health via SC's fleet-server /api/fleet (QNAP→Ktulu SSH unwired); confirmed transition → shared Haiku judge → Ktulu Heimdall Pushover app.", jr: "Heimdall-less BY DESIGN (decision 2026-05-22). Jr is a datacenter VPS with power/network redundancy AND is itself the fleet's external watchdog — Heimdall's home-failure-survival value doesn't apply. 'Who watches Jr': SC fleet board over Tailscale+SSH (unreachable card if it dies) + Jr's own vps-watchdog/recovery timers. SC + Ktulu get Heimdall when extended; Jr stays SANDMAN_HEIMDALL_HOST=local with its 2 Heimdall panels hidden (gated)." } },
        { name: "wa-watchdog (440 recovery)", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "partial" },
          notes: { default: "WA 440 recovery.", sandman: "wa-watchdog.py + cron.", superclawman: "wa-watchdog.py + plist. v0.1 ~407 LOC, 5-min cron.", ktulu: "ai.openclaw.ktulu.wa-watchdog.plist (v1.2.d, 2026-05-17). Polls openclaw channels status every 3 min, kickstarts gateway via sudo helper on disconnect. Recovered 2 real disconnects in first 24h. 10-min kick throttle. Jr to take over in Phase 2+.", jr: "vps-watchdog cross-host equivalent. Recovery dance is Phase 0d.3 (active build now)." } },
        { name: "plugin-watchdog / health-ledger (3-5 min cron)", status: { sandman: "yes", superclawman: "partial", ktulu: "yes", jr: "partial" },
          notes: { default: "Plugin health + host snapshot.", sandman: "Both active. Entry 74 reliability stack.", superclawman: "health-ledger live (feeds the :8991 fleet card); plugin-watchdog n/a.", ktulu: "ai.openclaw.ktulu.health-ledger LaunchDaemon (2026-05-21) — 10 hard checks → ledger.jsonl, StartInterval 300; also fires HC.io KTULU_HOST_PING + transition alerts. (TCC-dead cron → LaunchDaemon.)", jr: "Equivalent via vps-watchdog + /var/log/openclaw-jr audit." } },
        { name: "openclaw-backup / nas-backup (cron 02:00)", status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "no" },
          notes: { default: "Nightly backup to QNAP.", sandman: "Canonical chain. Both crons active.", superclawman: "Some manual.", ktulu: "Not yet.", jr: "Snapshot is the backup (daily import from Mac)." } },
        { name: "synthetic-ping / llm-cost-fetch-api crons", status: { sandman: "yes", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "Health pings + cost telemetry.", sandman: "Both active.", superclawman: "Pairing op.", ktulu: "llm-cost-fetch LaunchDaemon added 2026-05-22 (cost telemetry, probe-confirmed as 15th daemon).", jr: "Out of scope." } },
        { name: "x-monitor / c2-monitor / wa-digest crons", status: { sandman: "yes", superclawman: "partial", ktulu: "no", jr: "no" },
          notes: { default: "Intelligence streams.", sandman: "All 3 active.", superclawman: "Has c2-monitor as subagent.", ktulu: "Out of scope.", jr: "Out of scope." } }
      ]
    },

    {
      id: "scripts",
      eyebrow: "I · Notable script families",
      title: "Capability-bearing scripts",
      note: "Sandman ~84 scripts · Superclawman ~73 · Ktulu has 10 native pipeline modules in clawman-bus/ (ktulu_digest.py added 2026-05-16) · Jr has 16 shared scripts at /usr/local/lib/openclaw-jr/ (2026-05-16 batch: jr-backup, jr_haiku_voice, jr-html-deliver, jr-maintenance, jr-travel-mode, jr-daily-digest).",
      rows: [
        { name: "dashboard-server.mjs", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Control Center UI — all 4 agents now run the same parametrized dashboard-server.mjs on :8990 (Tailscale).", sandman: "Sandman dashboard server (older nuc-port lineage; sc-port convergence pending).", superclawman: "dashboard-server.mjs on :8990 — serves /api/status + /api/heimdall-judge (shared Haiku judge) + /api/llm-cost; feeds the fleet-server :8991.", ktulu: "FULL Control Center on :8990 (Tailscale, 2026-05-22) — same parametrized dashboard-server.mjs as Sandman/SC via SANDMAN_* env. Every panel live: cost ($18/7d), briefing, drift (100%), Heimdall, sessions, cron (9 daemons). Replaced the 1.7.1 shim.", jr: "LIVE 2026-05-22/23 — SAME shared dashboard-server.mjs ports to Linux/systemd UNMODIFIED. http://superclawman-jr.tail0688b7.ts.net:8990/ + Fleet card on SC :8991 (cost+budget+greenness sparkline). Collectors: health-ledger (6 Telegram-only checks), bootstrap-budget, llm-cost. Live-Haiku briefing (Jr's own key). systemd-timer cron panel (env-gated). Debounced green↔red transition→Pushover via JR app (2-strike). Heimdall/QNAP/Skill-Tree panels hidden (gated, Jr Heimdall-less by design). See agent-dashboard-pattern.md." } },
        { name: "diagnose.mjs / diagnose-and-notify.sh", status: { sandman: "yes", superclawman: "no", ktulu: "yes", jr: "partial" },
          notes: { default: "Intelligent alert pipeline.", sandman: "LLM diagnosis + action steps.", superclawman: "Not installed.", ktulu: "Ported (scripts/ktulu-port, 2026-05-21) — diagnose.mjs + diagnose-and-notify.sh + notify.sh + hc-ping.sh. Transition alerts on the health-ledger LaunchDaemon.", jr: "vps-watchdog.py first-person Telegram alerts." } },
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
        { name: "ktulu pipeline (10 modules)", status: { sandman: "no", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "Ktulu's native pipeline.", sandman: "N/A.", superclawman: "N/A.", ktulu: "clawman-bus/: bus.py · gateway_ingest.py · ktulu_signature.py · ktulu_contacts.py · ktulu_escalation.py · ktulu_media.py · ktulu_campaign_replies.py · ktulu_outreach_worker.py · ktulu_sender.py · ktulu_digest.py (NEW 2026-05-16 — daily status digest envelope, dormant during soak).", jr: "N/A." } },
        { name: "3-layer group-JID guard (Ktulu safety hardening)", status: { sandman: "no", superclawman: "no", ktulu: "yes", jr: "no" },
          notes: { default: "Defense-in-depth against outbound to WhatsApp groups.", sandman: "N/A.", superclawman: "N/A.", ktulu: "Commit 9a1aa1f (2026-05-16). ktulu_contacts.classify() detects @g.us OR digits>15 → role=group · worker drops · sender refuses outbound. Memory entry feedback_ktulu_group_jid_guard.md — do not relax.", jr: "N/A." } },
        { name: "Daily status-digest envelope (Ktulu + Jr)", status: { sandman: "no", superclawman: "no", ktulu: "yes", jr: "yes" },
          notes: { default: "Daily operator-facing status envelope with action-clarity rule.", sandman: "N/A.", superclawman: "N/A.", ktulu: "ktulu_digest.py (clawman-bus) + ai.openclaw.ktulu.digest.plist (LaunchDaemon, installed 2026-05-16, DORMANT during soak — bootstrap Tue 5/19 PM). Fires 21:00 BRT → Paulo selfchat. Codifies action-clarity rule: every envelope has explicit `Ação:` line above envelope-id footer (default 'nenhuma da sua parte'). Forward-applies to ALL envelope kinds. Continuous test corpus for Phase 2.1 recognizer.", jr: "jr-daily-digest.py + openclaw-jr-daily-digest@<tenant>.timer (5th service+timer pair, NEW 2026-05-16). Telegram-side mirror of the Ktulu pattern." } },
        { name: "Jr ambient-state primitives (v1.30 design pattern)", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Operator-declared modes (maintenance, travel, future).", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "v1.30 5-part pattern: (1) CLI to declare/clear · (2) watchdog_state.json key · (3) public predicate · (4) persona HARD section · (5) per-primitive audit log. Two primitives live: jr-maintenance.py + jr-travel-mode.py at /usr/local/lib/openclaw-jr/. Reuse this shape; don't reinvent. Memory entry project_jr_ambient_state_primitives.md." } },
        { name: "jr-html-deliver", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Jr-side HTML artifact delivery.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "NEW 2026-05-16 — jr-html-deliver.py at /usr/local/lib/openclaw-jr/. Jr's Telegram-routed HTML artifact delivery surface (Jr's html-it/web-artifacts equivalent)." } }
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
        { name: "pauloovidio-a11y/openclaw-jr (private repo)", status: { sandman: "no", superclawman: "no", ktulu: "no", jr: "yes" },
          notes: { default: "Private git repo.", sandman: "N/A.", superclawman: "N/A.", ktulu: "N/A.", jr: "NEW 2026-05-18. Jr's source-of-truth git-tracked at /usr/local/lib/openclaw-jr/ on the Hetzner VPS, mirrored to private repo. 46 files: 19 scripts + 8 persona + 14 systemd units + tenant-config + sync tooling. Secrets, mutating state, logs, .bak files all gitignored. Auth via /root/.ssh/github_sandmanpo (account-level key, authenticates as pauloovidio-a11y). Workflow: edit-on-Jr → commit → push; or pull → bin/sync-to-runtime → systemctl daemon-reload if systemd changed." } },
        { name: "HeyGen avatar (Mediterranean Onyx)", status: { sandman: "no", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Superclawman face for video.", sandman: "Not owner.", superclawman: "Active.", ktulu: "Phase 3 candidate.", jr: "Phase 0d.5 heaviest deferred." } },
        { name: "LinkedIn / X / Instagram presence", status: { sandman: "partial", superclawman: "yes", ktulu: "no", jr: "no" },
          notes: { default: "Brand presence ops.", sandman: "Runs monitor crons.", superclawman: "Owns brand presence.", ktulu: "N/A.", jr: "N/A." } },
        { name: "Sales pipeline (beautiful-websites kit)", status: { sandman: "partial", superclawman: "yes", ktulu: "yes", jr: "no" },
          notes: { default: "5-skill sales pipeline.", sandman: "Provides google-maps + firecrawl-cli + gog skills.", superclawman: "Lives here. Drives Ktulu via dispatcher.", ktulu: "RECEIVES prospect queue from BW kit + drips outbound (the destination for the pipeline's WhatsApp follow-ups).", jr: "Out of scope." } },
        { name: "Notion Docs hub", status: { sandman: "yes", superclawman: "yes", ktulu: "yes", jr: "yes" },
          notes: { default: "Canonical docs hub.", sandman: "Sandman Docs page in Notion.", superclawman: "Superclawman Docs hub at 355085df9ff88122b7fdfa633a08a7b3.", ktulu: "Mirror under Superclawman Docs (planned).", jr: "Canonical at 'Superclawman Watchdog v2 / Jr — Canonical Architecture v1.45' (live page 364085df…; duplicate v1.30+v1.32 pages trashed 2026-05-18)." } }
      ]
    }
  ],

  pairings: [
    { from: "sandman", to: "superclawman", items: [
      "SKILLS.md index — 29 skills with no master index (cosmetic, low priority)",
      "github-cli + openclaw-github-assistant — AUDIT 2026-05-17 (Part a) → SKIP (gh CLI suffices for shell-native flow)",
      "gog (Google Workspace) — DONE 2026-05-17 (declarative; binary + OAuth were already live)",
      "firecrawl-cli — already mirrored to Sup as plugin (Phase 0d.5)",
      "1password — DONE 2026-05-17 (op CLI v2.34 + Business-tier service-account token)",
      "google-maps — AUDIT 2026-05-17 (Part a) → SKIP (no organic demand; flows use hardcoded locations)",
      "summarize — AUDIT 2026-05-17 (Part a) → SKIP (5 existing summarization paths; high overlap)",
      "mcporter — AUDIT 2026-05-17 (Part a) → SKIP (openclaw mcp set + Claude Code MCP suffice)",
      "elite-longterm-memory + fluid-memory + memory-tiering — AUDIT 2026-05-17 (Part b) → SKIP (overlap with 5-skill loop + lossless-claw; memory-tiering policy text could feed Skill 4 grid-search as deferred opportunity)",
      "neural-memory (nmem) — AUDIT 2026-05-17 (Part b) → SKIP (5 unique primitives but porting creates dual learning-signal contention; revisit only if 2+ hop graph traversal becomes a bottleneck)",
      "self-improving-agent + capability-evolver-pro — AUDIT 2026-05-17 (Part b) → SKIP (SC's 5-skill loop is strictly more capable; capability-evolver-pro is shelf-ware)",
      "🟡 PHASE 8 (queued for Mac mini port): health-ledger + plugin-watchdog (intelligent-alerts canonical — all agents)",
      "🟡 PHASE 8 (queued for Mac mini port): llm-cost-fetch-api (SC makes the spend)"
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
      "OpenClaw version parity — DONE 2026-05-24: Sandman/SC/Ktulu on 2026.5.22 (a374c3a); Jr still on 2026.5.20 (not yet bumped)",
      "Vector store memory — Phase 2"
    ] },
    { from: "ktulu", to: "superclawman", items: [
      "Bash-wrapped LaunchDaemon pattern (AMFI bypass) — useful for any system-context daemon",
      "wa-buffer-flush implementation (30s idle / 120s max-age) — already on Mac, but Ktulu's adaptation tested with prospects",
      "TCC + Full Disk Access discipline — the lesson that /Volumes paths need FDA for system daemons"
    ] },
    { from: "ktulu", to: "jr", items: [
      "DONE 2026-05-18: Ação action-clarity rule — ported into jr-daily-digest.py (Track B Port 1)",
      "DONE 2026-05-18: media_audit.jsonl substrate — ported as new jr-media.py module + jr-image-describe.py wiring (Track B Port 2)",
      "SKIP: 6-trigger escalation classifier — Phase 1+ when Jr gains operator-inbound handler beyond alerts",
      "SKIP: Bash-wrapped LaunchDaemon — Linux/systemd doesn't need it"
    ] },
    { from: "sandman", to: "jr", items: [
      "EXTEND-EXISTING: diagnose.mjs LLM diagnosis — Jr already has first-person cause hypothesis in vps-watchdog; LLM overkill",
      "SKIP: health-ledger + plugin-watchdog — Jr is external watcher; SC doesn't expose internal-state endpoint"
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
    { agent: "superclawman", at: "2026-05-29 nightly", note: "**Nightly docs audit (22:45 BRT) — structural refresh.** Structural triggers: (1) Superclawman launchagents 21→22: +ai.openclaw.mcp-cost-breakdown (2026-05-29 22:16 BRT); otel-collector daemon also deployed today (14:02 BRT). Scripts 125→126 (+mcp-cost-breakdown.py). (2) Ktulu launchdaemons 26→28: +ai.openclaw.ktulu.patch-watchdog (2026-05-29 20:57 BRT, 23rd active plist); gateway.plist bak-pre-otel-20260529-184913 (5th bak, gateway modified for otel). Workspace canonicals committed: AGENTS.md, MEMORY.md, memory/2026-05-29.md, memory/2026-05-30.md, docs/auto-heal-nightly-digest.md, docs/calendar-travel-reasoning.md, docs/ios-location-shortcut.md, docs/operator-reply-discipline.md, docs/script-review-pipeline.md. Matrix v1.33→v1.34." },
    { agent: "superclawman", at: "2026-05-29 evening", note: "**Pipeline → 4 agents + auto-investigate self-triage + Sandman VETO repair & verb-driven convergence.** Script-review pipeline ported to **Jr** (4th agent, Telegram selfchat-only): watcher tails the openclaw JSONL `sessions.json.telegram-messages.json` (NOT the gateway string-log), dual-resolution card_id (`reply_to_message.text`/`quote.text` OR explicit `jscr_…`), direct Telegram Bot API send, reviewed repo `/usr/local/lib/openclaw-jr`, Codex via `codex login --device-auth` + Haiku, daemons `openclaw-jr-script-review-{c2-watcher,safety.timer}`, card prefix `jscr` (Jr `108309a`). **Sandman bare-`veto` 3-layer repair** (was never live-tested): gateway `P_reply_inbound` dist patch — inbound logger now emits `replyToBody`/`replyToId` (Sandman had no P7); watcher dual-resolution + optional-prefix CARD_RE; `veto.mjs` aligned to SC canonical (records `{kind:veto}` row + unified ack + autofix-cancel) (Sandman `5a038de`). Reapply protection: `openclaw-patches-reapply.sh` + ExecStartPre drop-in so the dist patch survives upgrades (Sandman `c1818ed`). SOUL.md §62 identity-guard fix — a forwarded C2 card's branding is content, NOT the sender; selfchat is always Paulo (Sandman `09979a1`). **Fleet auto-fix consistency**: all 4 `SCRIPT_REVIEW_AUTOFIX_ENABLED=1` (Jr flipped on post-Codex; autofix path = c2-watcher dispatches `execute.mjs` → `codex exec --full-auto`). **Phase AI — auto-investigate self-triage** (new 6th canonical helper `script-review-auto-investigate.mjs`): INVESTIGATE cards get a Sonnet triage → CLOSE (→INFO ignorable), FIX (→auto-applies, re-checked by the Phase-R verifier), ESCALATE (→stays INVESTIGATE). Conservative (returns ESCALATE on any error) + safe-degrading. SHIPPED SC `a64a014b` · Jr `cd4b4e4` · Ktulu `62cf4dc` · Sandman `d64bfe3`. **Sandman convergence** P1-driven → verb-driven autofix: `scheduleAutoFix` now fires on `rec.verb==='FIX'` (verifier-gated), not raw Codex P1 count — so ESCALATE/INVESTIGATE never auto-applies even on a P1; `codexResult` block-scope hoisted to outer `codexP1s` (Sandman `b7444cb`, validated live). Jr Codex cell partial→yes. All 4 agents now fleet-consistent: verb-driven autofix + auto-investigate. **Canonical doc r6.2→r7** at `~/.openclaw/sandman-blueprint/docs/codex-sandman-review.md` (sandman-blueprint `5ec4b27`); Notion canonical `36f085df…` republished. Matrix v1.32→v1.33." },
    { agent: "superclawman", at: "2026-05-29 PM (session continued)", note: "**Afternoon close-out — Phase R2 robustness + fleet-wide doctrine + 6 live bug fixes — ~30 additional commits across 3 hosts.** Same session continued through the afternoon. **Phase R2 — Adversarial verifier Autofix Revert Guard**: closes the failure mode where a pre-Phase-R Sandman Auto-Fix bot (`a6f0bfa` 15:20 BRT) restored the wa-watcher VETO branch Item-3 chore `85a98fe` had just retired. 3-layer fix: (1) re-retire wa-watcher.mjs VETO with strengthened tombstone (Sandman `fcc815d`); (2) update `script-review-context.mjs` Sandman block with 2 protection notes the verifier reads via `getProjectContext()` (SC `d9c7849f`, Sandman in `fcc815d`, Ktulu `011d616`); (3) new `recentChoreCommits(repoRoot, n=10, excludeSha)` helper passes recent `chore(...)` commits as AUTOFIX REVERT GUARD block to verifier prompt (SC `15634cdd`, Sandman `5f13c12`, Ktulu `bbd42a0`) — refutes on Condition 2 (behavior NOT introduced by THIS diff; chore intentionally removed it). Plus n=5→n=10 bump (SC `d3e1003d`, Sandman `ac23a66`, Ktulu in `698fc7c`) and HEAD-exclusion fix (SC `c92e612f`, Sandman `cb3084e`, Ktulu `4b2e659`) caught by Codex review of `bbd42a0`. **Fleet-wide AGENTS.md autonomy block** added to all 3 doctrine files so main agents stop asking operator for script-review file paths (Sandman `fe7ad65` +15 lines bootstrap-bust authorized, SC `30c22f31`, Ktulu `d3cc41f`) — block content: per-host scripts/ paths, canonical doc reference, operator pattern instruction. Plus LRN-20260529-001 in Sandman's `.learnings/LEARNINGS.md`. **Operator Reply Discipline doctrine** added fleet-wide (SC `20c56153`, Sandman `96e9405`, Ktulu `1c2a88e`): when agent composes operator-facing reply (selfchat investigation, debug report, INVESTIGATE/GO/VETO response), MUST send via WhatsApp send tool BEFORE pivoting to other inbound work. Trigger: Ktulu agent at 15:57 BRT correctly diagnosed `kscr_bbd42a0` chore-guard HEAD-inclusion bug + proposed fix, but prospect inbound from Natália arrived BEFORE analysis was sent — agent pivoted to outreach, analysis stranded in session log. Plus LRN-20260529-002. **execute.mjs lifecycle logging** fleet-wide (SC `219a76c7`, Sandman `98177bc`, Ktulu `c319d49`) — `[lifecycle] model_call_started/completed/git_committed` events for orchestrator timeout tracker. **Sandman pendingAutoFixes cleanup** (`edb2bbf`) — new `purgeCompletedAutoFixes()` helper dropped 2 stale entries (`d6255443`/`93d59ecb`) and archived to `script-review-history.jsonl`. **6 live bug fixes during afternoon:** (1) `${HOME}` ReferenceError in script-review-context.mjs Ktulu block (SC `7dd203aa`, Sandman `6e0add4`, Ktulu `5a85c0e`) caught by Sandman own auto-fix re-review; (2) Ktulu Anthropic gateway auth (`openclaw models auth paste-api-key --provider anthropic` flipped Auth column no→yes for sonnet-4-6+haiku-4-5; plus OpenAI parity); (3) Sandman c2-watcher tick() catch full err object (`5bd7f2a` — Sonnet patch pickup never committed); (4-6) Ktulu drift triage health-ledger qmd/lcm auto-detect + nightwatch anthropic.key fallback (`6d0322f`) + Ktulu `.backup-*` archive + .gitignore (`698fc7c`). **SC worktree git fsck repair** — deleted .DS_Store junk in .git/refs+worktrees, rebuilt index via `git read-tree HEAD`, fsck clean. **6 doctrine-coupled Ktulu diffs deferred** for operator-gated landing pass (reference ~25 untracked Phase 2.x substrate modules; landing doctrine without helpers creates broken on-disk state). **Sandman pre-Phase-R autofix history** (`a79e832`+`a6f0bfa`) remains in git history; can't remove without rewriting — strengthened tombstone + Phase R2 chore-revert guard + context-block protection ensure regression can't recur. **Net session totals: 42+ commits across 3 hosts + 2 doc repos · 5 canonical helpers fleet-wide · 6 live bugs caught and fixed · 0 known open bugs at session close.** **Canonical doc r6→r6.1** at `~/.openclaw/sandman-blueprint/docs/codex-sandman-review.md` (sandman-blueprint commit `b099d7d`); Notion canonical page `36f085df-9ff8-8158-a6ea-f727531f66e9` updated. Matrix v1.31→v1.32." },
    { agent: "superclawman", at: "2026-05-29 session", note: "**Fleet-wide script-review unification + adversarial-verified autofix + hybrid robustness — 12 commits across 3 hosts.** Single multi-hour session unified the script-review pipeline that previously diverged per host (SC review-only · Sandman 3-layer with autofix · Ktulu review-only port). **Phase 0:** fleet-router.mjs `SYSTEM_CARD_BODY_RE` skips all system cards (scr/sscr/kscr/pscr) — kills the per-card Haiku misfire that was replying to every review card with a useless 'this isn't a question' bubble. **Phases 1-7:** unified env block at `service-env/script-review.env` (chmod 600) sourced by canonical `script-review-env.mjs` helper byte-identical on all 3 hosts; Sandman swapped gpt-4o → Haiku for verb recommendation; verb vocab collapsed FIX/INVESTIGATE/INFO/UNKNOWN (NO ACTION + NOTE retired); Sandman adopted `sscr_<sha7>_<ts>` card prefix (closes cross-agent VETO landmine); GO verb wired on Sandman (new `ai.openclaw.sandman.script-review-c2-watcher.service` systemd + `script-review-execute.mjs` port); auto-fix capability extended to SC + Ktulu via cards.jsonl pending_autofix rows + c2-watcher Phase-5 dispatcher with quiet-hours defer; daemon naming converged to `ai.openclaw.<agent>.script-review-{safety,c2-watcher}` (4 launchd plists renamed on SC + Ktulu via admin NOPASSWD sudo, 1 systemd timer+service created on Sandman). **Items 1-4:** fleet-router regex made explicit-alternation; wa-inbound-router Guards 0a/0b retired on SC + wa-watcher VETO branch retired on Sandman (single-path dispatch via dedicated c2-watcher daemon). **Phase R — 3 robustness layers:** (1) adversarial verifier (default-refuted skeptic, 4-condition gate, fail-safe to refuted on auth errors) blocks false-positive autofix on as-designed code, (2) Haiku independent reviewer runs Promise.all parallel with Codex via `haikuReviewDiff()` + `compareFindings()` cross-ref — catches Codex blind spots AND arms graceful degradation when Codex is unreachable (today's SC card at 14:23 BRT), (3) per-agent project-context injection via `getProjectContext()` prepended to Haiku-side prompts (Codex CLI shape doesn't accept system prepend). Plus robust `loadAnthropicKey()` helper (env → disk → auth-profiles fallback). **Phase Next:** verifier lifted ahead of buildCard so refute reaches operator's C2 card (Sandman parity), `🌀 Haiku:` cross-ref line rendered on card body, Ktulu voice fix (Superclawman → Ktulu env-driven), Sandman `wa-send-text.mjs` → `wa-manager.mjs` (Phase-4 self-inflicted bug — repointed to Sandman's canonical sender; smoke verified), SC `compareFindings` arg-type fix (was passing array where string expected → agreement_strength degraded to 'single'). **Two live bugs caught + fixed during the session:** Ktulu Anthropic key (`Missing API key for provider 'anthropic'` on operator card-forward) + SC Codex auth refresh (graceful degradation now armed; operator ran `codex login` to restore). **Class-of-bug lesson encoded:** when porting SC pipeline files to other hosts, re-derive `${WORKSPACE}/scripts/<file>` constants against the target host's actual scripts inventory (don't copy SC paths verbatim) — added to canonical port checklist. **Structural deltas:** SC scripts +5 (4 new helpers + env helper); Sandman scripts +5 + 1 new systemd unit + 1 timer; Ktulu scripts +4 + 2 launchd plists renamed (codex-review → script-review). Commits: SC worktree `4fa646d3`/`54931c31`/`3cdd2bcd`/`baa2bfef`/`b1130bde` (5 on `claude/relaxed-kirch-2f1e48`); Sandman main `d961602`/`85a98fe`/`4100a65`/`4d4a0cf` (4); Ktulu main `834599f`/`11ec2ed`/`782ef28` (3). **New canonical doc**: `~/.openclaw/sandman-blueprint/docs/codex-sandman-review.md` r5 → r6 (workspace commit `cb6624c`) renamed scope from Sandman-only to fleet-wide; **Notion mirror at new canonical page `36f085df-9ff8-8158-a6ea-f727531f66e9`** (parent: Superclawman Docs hub). Matrix v1.30→v1.31." },
    { agent: "superclawman", at: "2026-05-28 nightly", note: "**Nightly docs audit (22:45 BRT) — structural refresh.** Structural triggers: (1) Jr systemd_units 35→**37** (+openclaw-jr-learn-capture.{service,timer} 2026-05-28). Jr shared_scripts 29→31 (+jr-0d44-soak-review.py 2026-05-28, +jr-learn-capture.py 2026-05-28). (2) Ktulu launchdaemons 25→26 — .bak artifact (qmd-refresh.plist.bak-pre-homefix-2026-05-28 created; 22 active plists unchanged). (3) Superclawman scripts 117→119. Workspace canonicals committed: memory/2026-05-29.md. Matrix v1.29→v1.30." },
    { agent: "superclawman", at: "2026-05-28 evening", note: "**Canonical bumps day — three workspace canonicals + one Notion republish.** **(1) Ktulu canonical v1.5.2 → v1.7.1** (workspace `KTULU_CANONICAL_v1.0.1.md`, commit `4f2d99a5`): **Phase 1 §14 Outreach Agent Evolution closed.** Follow-up engine flipped live via `ai.openclaw.ktulu.followup` plist (14:00 BRT, cadence 3d/7d, MAX=3, token-gated, oldest-due-first + `KTULU_FOLLOWUP_DAILY_CAP=5` backlog-drain safety so first-activation on a 17-prospect parked cohort drains over ~4 days instead of spiking Meta heuristics in one fire). Objection-handling library `ktulu_objections.py` seeded (positive/cost/dismissive branches, all `auto_reply=False` — escalate-only). Edited-verdict wiring: worker logs `suggested_reply` in observer escalations; `ktulu_learn.extract_verdicts` diffs relay via SequenceMatcher (EDIT_THRESHOLD env-tunable). Pattern #8 seam test `test_worker_observer_no_send.py` locks the WORKER_IS_OBSERVER=True invariant. Phase 2 D/E skeletons hardened (runbook pointer in `stats()`/`readiness()`, embed/write reactivation markers cite SC source files). Daemon count 19→20 (followup) on i7. Live on i7 at 19:32 BRT after worker-kick. Suite 10 files green (29 new cases). Workspace title bumped from stale v1.5 → v1.7.1 to match changelog body. Notion canonical page `361085df` title patched to v1.7.1 by parallel session. **(2) Jr canonical v1.44 → v1.45** (workspace `SUPERCLAWMAN_WATCHDOG_JR_CANONICAL_v1.md`, commit `dbd94bde`): **0d.4.4 7-day soak self-firing review wired** (Jr repo `e2c3fcc`). New one-shot `jr-0d44-soak-review.py` walks `media_audit.jsonl` since `SOAK_START_EPOCH` (default 2026-05-27 21:14 BRT), counts image_audit + voice_audit rows (described / persisted), watcher_loop_error events, daemon uptime + restart count, biometric corpora; composes 3-state verdict (✅ PASS / 🟡 QUIET / 🚨 ATTENTION) and posts ONE Telegram with explicit `Ação:` line. Wired as `openclaw-jr-0d44-soak-review.{service,timer}` — `OnCalendar=2026-06-03 12:00 UTC` (= 09:00 BRT), `Persistent=true` (catches up on next boot if Jr down at fire time), `RemainAfterElapse=true` (visible in list-timers post-fire). Verified end-to-end via immediate manual run: delivered preview Telegram with verdict 🟡 QUIET (no media activity since post-substrate-deploy restart — expected; biometric corpora correctly reads 1 face + 1 voice; daemon active + 0 errors; state file healthy at processed_keys=25). Same pattern works as template for future single-fire calendar-bound reviews (quarterly biometric-rotation drill, monthly cost-trend snapshot). Jr systemd_units 33 → 35 (+service+timer). Workspace title bumped from stale v1.36 → v1.45 to match changelog body. Notion canonical page `364085df` title at v1.45. **(3) WhatsApp canonical v1.18 → v1.19** (workspace `SUPERCLAWMAN_FINAL_WHATSAPP_CANONICAL_v1.md`, commits `eea80a6c`/`7a63efb2`/`78cd4f4d`): **§A.55 context-enrichment doctrine added** — wa-edit agent now looks up address/recurrence/conflicts before composing (eea80a6c). Notion canonical REPUBLISHED to new page `36f085df-9ff8-8167-afd9-dd72e3173633` (replaces prior `368085df` which is now trashed); registry entry at `workspace/notion-registry.json`. Live page title `WhatsApp Intelligence — Canonical Architecture v1.19`. **(Companion local fixes — non-doc, included for context):** wa-edit action-directive pre-guard (`83fd6050`), script-review P1/P2/P3 from scr_648393a (`44d51970`). **(Out-of-scope-for-docs but committed elsewhere today):** X canonical v1.6 hardening (XQuoteRestricted soft block + MAX_TRANSFORM_ATTEMPTS 2→3 + canonical patch commits 7e371261/35e50345 — no Notion mirror exists yet for X, matrix carries no dedicated cell), Option E (SaaS multi-tenancy) 3-4 session phased plan handoff (`9bd8866e`), 0d.6.2 +3 new delegate kinds on SC (calendar_today/firecrawl_fetch/firecrawl_search, `7bb20e85`), wa-edit-agent-task session-isolation + drift guard (`ccb05c87`). **Matrix doc_status v1.28 → v1.29.**" },
    { agent: "superclawman", at: "2026-05-27 nightly", note: "**Nightly docs audit (22:45 BRT) — structural refresh.** Structural triggers: (1) Jr systemd_units 25→**33** (prev entry claimed 31 — corrected; actual count via systemctl list-unit-files: 33). New units today: inter-agent.service, bearer-rotate@.service, bearer-rotate-{ktulu,sandman,superclawman}.timer, backup-monitor.service+timer, media-watcher.service. New scripts today: jr-voice-stack.py, jr-media-watcher.py, jr-face-stack.py, jr-backup-monitor.py, jr-bearer-rotate.py, inter-agent-server.py (shared_scripts 23→29). (2) Ktulu launchdaemons 20→24 (21 real plists + 3 bak files; +ai.openclaw.ktulu.inter-agent.plist created 2026-05-27 19:02). Ktulu pipeline_modules 12→15 (+ktulu_enqueue_relay.py + ktulu_weekly_report.py + ktulu_followup.py, all born 2026-05-25). Ktulu plugins 5→6 (ktulu-sendguard confirmed via sudo openclaw.json read; was already in status_phase but stats not updated). (3) Superclawman launchagents 14→16 (+ai.openclaw.inter-agent 2026-05-27 17:52, +ai.openclaw.cost-watch 2026-05-27 19:39). Cosmetic: Sandman scripts 89→94; Superclawman scripts 113→117. Workspace canonicals committed: memory/2026-05-28.md (auto-loop-close entries from 2026-05-27 BRT evening). Matrix v1.27→v1.28." },
    { agent: "jr", at: "2026-05-27 evening", note: "**Drive-to-100% session — Steps 1+3+4+5 closed in one push (canonical v1.44).** Tonight's deliverables: **(0d.6 inter-agent comms, all 5 sub-phases live)** Jr is now the hub of a bearer-authenticated REST channel to all 3 primaries on port 18791. Per-primary bearer model proven via the 3-way isolation matrix (diagonal 200, off-diagonal 401 across SC↔Ktulu↔Sandman). Surface: `/v1/query` + `/v1/delegate` (perplexity_search end-to-end with 5-minute idempotency cache) + `/v1/notify` (multi-bearer Jr-side receiver with `peer_primary_id` attribution; SC restart cycle delivers going_down→back_up notifies in 2s end-to-end). Bearer rotation script + SIGHUP-reload + dual-bearer overlap proved with 3 live rotations (~20-25s cycle each); weekly Mon/Wed/Fri 04:00 BRT timers active on Jr. Tailscale ACL intentionally deferred (grants v2 quirks + threat-model review — app-layer bearer is the real gate; see workspace handoffs/0D6_4_TAILSCALE_ACL_DRAFT for postmortem). **(0d.7.4 cross-primary backup monitoring live)** Daily 10:00 BRT `openclaw-jr-backup-monitor.service` over the 0d.6 channel; edge-alerts green→stale / stale→green via Telegram. Synthetic mock-stale acceptance green. **(0d.4 multimodal substrate fully green, soak running)** **0d.4.0** architectural inbound-image audit — `jr-media-watcher.py` daemon tails openclaw's own `sessions.json.telegram-messages.json` cache (no custom plugin needed; closes the v1.34.1 persona-caching gap architecturally). **0d.4.1** InsightFace `buffalo_l` face stack (512-d, jr-face-stack.py); Little Bee enrolled, self-match cosine 1.0, no false positive on 4 cartoon images. **0d.4.2** SpeechBrain ECAPA-TDNN voice stack (192-d, jr-voice-stack.py, +PyTorch CPU; venv 1.7GB final); Paulo enrolled from 6.67s memo, self-match cosine 1.0. **0d.4.3** binary media persistence — sha256-keyed paths under `/var/lib/openclaw-jr/tenants/paulo/jr-state/media/{YYYY-MM}/`; 5 photos + 1 voice all on disk with audit-linked file_path. **0d.4.4** 7-day soak clock started; first review 2026-06-03. **(small ops)** `HTML_IT_PALETTES.md` overlay-list fix; `jr_activity_24h` now persisted to fleet-rollup.jsonl + awk-timestamp filter replacing buggy `tail -n 500`. **(action item #3)** `ktulu-inter-agent-install` hardened against macOS bootout-bootstrap error-5 race. **Jr structural deltas:** systemd_units 25→**31** (+inter-agent + bearer-rotate template + 3 rotation timers + backup-monitor service+timer + media-watcher = +6 units). shared_scripts 23→**29** (+jr-bearer-rotate, jr-backup-monitor, jr-media-watcher, jr-face-stack, jr-voice-stack, inter-agent-server). New biometrics-venv (1.7GB, gitignored). Two new biometric stores: faces.jsonl (1: Little Bee, cosine floor 0.55) + voices.jsonl (1: Paulo, floor 0.78). Jr repo commits: 9db0322·dc0aedb·57cddff·2c8caca·f41c7d6·6e1d8e7·7e21743·9c567d5·6a53031. Workspace commits: 0bdd4546·8d374ab8·2f07d093·80fd2ab6·216d6202·ce0a8f94·0da74998·dcd6a37b·8252d639·023486f3. Matrix v1.26→v1.27." },
    { agent: "superclawman", at: "2026-05-25 nightly", note: "**Nightly docs audit (22:45 BRT) — stats refresh.** Structural triggers: (1) Ktulu launchdaemons 17→20: +ai.openclaw.ktulu.learn-capture (May 25 11:02 BRT), +ai.openclaw.ktulu.jr-wa-status (May 25 14:20 BRT — monitors Jr WA status), +ai.openclaw.ktulu.weekly-report (May 25 15:59 BRT); all 20 confirmed via launchctl + ls /Library/LaunchDaemons. (2) Jr OpenClaw 2026.5.20 (e510042) → 2026.5.22 (a374c3a); Jr now fleet-wide on 5.22. Cosmetic: Sandman scripts 89→92; Superclawman scripts 113→115; Jr shared_scripts 21→23. Workspace canonicals committed: memory/2026-05-25.md (modified) + memory/2026-05-26.md (new, 01:24 UTC auto-loop-close entry). Sandman/Superclawman Blueprints clean — no structural changes. Matrix v1.25→v1.26." },
    { agent: "ktulu", at: "2026-05-25", note: "**COMPLETE KTULU push — AGENT-PRIMARY Step 2 send-guard SHIPPED + Phase 2.2 capture live.** (A) `ktulu-sendguard` openclaw plugin installed on the i7 gateway (enforce + BLOCK_TOOL_SENDS): `message_sending` cancels agent-origin prospect deliveries, `before_tool_call` blocks the agent's direct `openclaw message send` to a prospect — the agent structurally CANNOT leak into a prospect chat (supersedes doctrine-only safety that leaked twice: BGOD 5/19, De Donato 5/22). Single guarded exit = the sender daemon; boss-relay now routes through `ktulu_enqueue_relay.py` → `clawman.outbound` (sender: boss_relay added to GUARDED_KINDS, token-gated). Doctrine (SOUL/AGENTS/MEMORY) redirected + qmd pre-action recall added; leak-rule salience preserved. **OPS LESSON: `launchctl kickstart -k` does NOT reload plist env — needs `bootout`+`bootstrap`.** Plugins.allow 5→6 (+ktulu-sendguard). (B) Phase 2.2 verdict-capture live + daemonized (`learn-capture` nightly 02:30 BRT, idempotent dedup; 19th LaunchDaemon); journal seeded with the 2 real verdicts. (C) SC A.1 gate done — `wa_agent_envelope_lib.py` recognizer on SC published `agent_envelope_rate.json` → synced to i7 → Ktulu `phase_2_1_state_published:true`. (D/E) Learning engine (memory-engine-v2 + judge/flush + precedent_matcher + edited-verdict) DEFERRED-by-design (corpus ~2; doctrine installs RAG only with enough history) — **self-firing revisit:** daily digest counts verdicts (N/20) and trips a loud Ação when ready. Origin commits 1e688be·a76f0d9·1021be2·89daa9e (+test_worker_flush fix fc3c52b). Matrix v1.24→v1.25." },
    { agent: "superclawman", at: "2026-05-24 nightly", note: "**Nightly docs audit (22:45 BRT) — stats refresh.** Structural triggers: (1) OpenClaw 2026.5.20 → 2026.5.22 (a374c3a) on Sandman/SC/Ktulu (Jr still 5.20). (2) Fleet-wide activity-collect daemon deployed 2026-05-24 ~18:25 BRT: +ai.openclaw.activity-collect (SC, launchagents 13→14), +ai.openclaw.ktulu.activity-collect (Ktulu, launchdaemons 16→17), +openclaw-jr-activity.service+.timer (Jr, systemd_units 23→25). (3) Ktulu 16th daemon retroactively identified: health-pulse (plist confirmed via SSH `ls /Library/LaunchDaemons/ai.openclaw.ktulu.*`). Cosmetic: Sandman scripts 88→89; Superclawman scripts 111→113. Workspace canonicals committed: handoffs/KTULU_COMPLETE_MONDAY_2026-05-25.md + memory/2026-05-24.md + memory/2026-05-25.md. Matrix v1.23→v1.24." },
    { agent: "superclawman", at: "2026-05-23 nightly", note: "**Nightly docs audit (22:45 BRT) — stats refresh.** Structural triggers: (1) Jr systemd_units 21→23: +openclaw-jr-google-oauth-heartbeat@.service + .timer (Google OAuth posture-check heartbeat, jr-google-oauth-heartbeat.py, confirmed via systemctl list-unit-files). (2) Ktulu pipeline_modules 10→12: +ktulu_learn.py + ktulu_multimodal_ingest.py (both added May 22 17:29, confirmed via ls -lt clawman-bus/). Corrections: Jr mcps discrepancy finally resolved — 7→4 confirmed (probe counts /usr/local/lib/openclaw-jr/*-mcp.py: google-public, google-user, learn, vector — data.js was stale from 2026-05-18 flag). Cosmetic: SC scripts 109→111; Jr shared_scripts 20→21. Workspace canonicals committed: memory/2026-05-23.md. Matrix v1.22→v1.23." },
    { agent: "superclawman", at: "2026-05-23", note: "**Fleet-wide OpenClaw 5.12 → 5.20 upgrade — all 4 agents green + validated.** Canary order Jr→Ktulu→Sandman→SC, each install→fix→reapply→restart→validate→≥24-30min soak (0 reds throughout). All now on `2026.5.20 (e510042)`. **Load-bearing breaking change (not the one the runbook flagged):** 5.20 retires `messages.queue.mode:\"queue\"` (the old #54488 mitigation value) — crash-loops the gateway on restart. Hit Jr (canary caught it), Ktulu, SC; Sandman immune (had `queue:{}`). Fixed fleet-wide with `queue→steer` (openclaw's own legacy-config migration; correct because #54488 is *followup-drain* lane starvation, NOT a steer bug). **The runbook's #1 risk (5.20 removing the `cat SKILL.md &&` skill-exec allowlist path) was a non-issue:** Ktulu/Jr run exec security:full/ask:off (bypass allowlist); SC/Sandman default-exec use 5.20's new supported skill path (no denials); script-review/codex pipelines are standalone child procs. **WA plugins kept at 5.12** — reconnect fine on 5.20 core, and live in separate prefixes (`~/.openclaw/npm` SC · `.openclaw/extensions` Ktulu/Sandman) so WA dist-patches SURVIVE a core upgrade (SC P1–P11+P_act/P_lid+leak-guard all intact). Only core-dist patch wiped+reapplied: Sandman's SANDMAN-PO runtime-context leak-patch (4.29 anchor still matched). Jr gateway restart = `systemctl --user` (not sudo system — runbook had it wrong). Configs backed up `*.bak-pre-5.20-*`." },
    { agent: "jr", at: "2026-05-22/23", note: "**Jr ON THE CENTRAL CC BOARD — fleet now 4/4 green.** The shared `dashboard-server.mjs` ports to Linux/systemd UNMODIFIED (no fork). Jr runs the full Control Center on its VPS :8990 (http://superclawman-jr.tail0688b7.ts.net:8990/) + has a Fleet card on SC :8991 (cost ~$38/mo forecast, budget $150 · bootstrap budget 87% · greenness sparkline). Collectors live: health-ledger (6 Telegram-only checks: gateway/gateway_http/openclaw_config_valid/lcm_db_present/watchdog_fresh/disk_ok), bootstrap-budget, llm-cost (admin key per-host, SANDMAN_API_KEY_ID=apikey_01Kbzp…). Live-Haiku briefing via Jr's own key. **Phase B (all env-gated, default-off → other agents byte-identical):** systemd-timer cron source, per-agent hard-check groups (fixed phantom-red panel), Heimdall panels + 'QNAP ?' pill hidden, Skill Tree link hidden. **Debounced green↔red transition→Pushover via the JR app (2-strike, per-check cause+action), live 2026-05-23.** Central CC Pushover app minted (5th token); PUSHOVER_TOKEN_CENTRAL_CC on SC + QNAP synced. **Heimdall-less BY DESIGN** (datacenter VPS w/ power+network redundancy, and is itself the fleet's external watchdog). This is Jr-as-MONITORED (read-only); Jr-as-watchdog/takeover stays Phase 0d.7 PARKED. Resolves the prior 'Jr systemd_units +7 unverified' flag — the +7 are the CC dashboard + ledger/budget/llmcost + lighter-SC heartbeat timers. CC canonical refreshed to BUILT & LIVE v1.1 (sandman-blueprint [1.11.1-alpha]). Pending fleet-wide (NOT Jr-CC gaps): Fleet CC v0.3.1 gated actions (soak-first), Heimdall extension to SC+Ktulu, Sandman nuc→sc dashboard convergence, Ktulu dashboard 1.10.x refresh, watch Jr bootstrap budget ~90%." },
    { agent: "superclawman", at: "2026-05-22 nightly", note: "**Nightly docs audit (22:45 BRT) — stats refresh.** Structural triggers: (1) Ktulu launchdaemons 15→16 (llm-cost-fetch LaunchDaemon confirmed by probe; daemon notes updated 14→16; 16th daemon unidentified — `launchctl list | grep ktulu` to verify). (2) Jr systemd_units 14→21 (+7 probe-detected 2026-05-22, reason unknown, last Jr entry 2026-05-18 — flagged for operator review). Cosmetic: Sandman scripts 87→88. Ktulu canonical v1.4→v1.5.2 (worker→observer AGENT-PRIMARY, De Donato leak documented, durable-guard design §7.7). synthetic-ping/llm-cost-fetch row updated ktulu: no→yes. Workspace canonicals committed: KTULU_CANONICAL_v1.0.1.md + memory/2026-05-22.md + memory/2026-05-23.md. Matrix v1.19→v1.20." },
    { agent: "superclawman", at: "2026-05-21 nightly", note: "**Nightly docs audit (22:45 BRT) — stats refresh.** Structural trigger: Ktulu launchdaemons 13→14 (new ai.openclaw.ktulu.bootstrap-budget daemon confirmed via plist in sandman-blueprint/templates/ktulu-launchd/ + probe state/bootstrap-budget.json). Daemon row updated to 14 entries. Cosmetic: Sandman scripts 86→87; Superclawman scripts 108→109. Flagged for operator: Ktulu allow field returned empty from probe (likely probe artifact — data.js notes unchanged at 5 plugins). Workspace canonicals committed: workspace/memory/2026-05-21.md. Matrix v1.17→v1.18." },
    { agent: "superclawman", at: "2026-05-20 nightly", note: "**Nightly docs audit (22:45 BRT) — stats refresh.** Structural trigger: Ktulu 10th LaunchDaemon (ai.openclaw.ktulu.qmd-refresh.plist bootstrapped 2026-05-20 as v1.4.d). Ktulu canonical advanced v1.0.1→v1.4 (campaign fired Tue 5/19, hardened Wed 5/20): media-routing 5-signal fix, bot-handoff canned-reply carve-out, boss-relay live, campaign human-branches escalate-only, backup-tmp on KtuluDisk, qmd-refresh + wa-watchdog live (both previously noted as planned — now confirmed active). wa-watchdog and codex-review-{safety,c2-watcher} daemons retroactively confirmed in daemon row. Cosmetic: Sandman scripts 85→86; Superclawman scripts 96→108 (+12), launchagents now tracked (13). Workspace canonical committed: KTULU_CANONICAL_v1.0.1.md. Matrix v1.15→v1.16." },
    { agent: "superclawman", at: "2026-05-18 nightly", note: "**Nightly docs audit (22:45 BRT) — stats refresh.** Probe surfaced structural triggers: (1) Superclawman subagents 6→7 (codex-script-review subagent, already documented 2026-05-17 PM — stat was stale). (2) Ktulu launchdaemons 6→9 (+3 new daemons, likely script-review-related — details in next blueprint refresh). Cosmetic: Sandman scripts 84→85, doctrine 33→34; Superclawman scripts 77→96. Flagged for operator: Jr MCP probe count 7→4 (counting-method discrepancy — data.js left at 7 pending investigation). Workspace canonicals committed: AGENTS.md, MEMORY.md, TOOLS.md, KTULU_CANONICAL_v1.0.1.md, memory/2026-05-18.md, memory/2026-05-19.md. Matrix v1.14→v1.15." },
    { agent: "jr", at: "2026-05-18 morning (2)", note: "**Track B closed — two follow-ups belt-and-suspenders green.** **FU-1 (snapshot overwrites persona)**: discovered jr-snapshot-import.py already has an overlay mechanism — applies persona files from `/etc/openclaw-jr/tenants/<t>/persona/` AFTER each snapshot swap. The bug was that local edits went only to runtime `/var/lib/.../state/` (which gets wiped per snapshot). Fix: `bin/sync-to-runtime` now writes to BOTH runtime state AND overlay source. `bin/sync-from-runtime` now pulls from overlay source (canonical) with state-fallback for non-overlay files (HEARTBEAT.md). Validated by simulating a snapshot wipe + manually running the overlay step → Track A2 edits (palette CSS, §write-during-outage, jr-image-describe pointer) survived intact (4 markers in post-overlay AGENTS.md, identical to git-tracked). Tomorrow's 04:30 BRT real snapshot will validate end-to-end automatically. **FU-2 (live write-flip)**: ran 5-phase smoke against real Google Calendar API. Phase 1 preview (no API): executed=false, preview=true ✓. Phase 2 live execute (confirmed=true): real event created in primary calendar, event_id returned ✓. Phase 3 cleanup: DELETE 204 No Content, event removed ✓. Phase 4 failure path (bad datetimes): executed=false, RuntimeError captured ✓. Phase 5 audit verification: both `executed_by_jr` (success) and `executed_by_jr_failed` (failure) rows present in `/var/lib/openclaw-jr/tenants/paulo/jr_outage_log.jsonl` ✓. Write-flip is production-ready for real outages. Commits on Jr: `978b4f7` (FU-1 sync fix). Digest cadence answer for the operator: jr-daily-digest@.timer fires daily at 09:00 BRT but the script no-ops unless travel mode is active (declared via jr-travel-mode.py start ...); zero cost when home, daily check-in when away." },
    { agent: "jr", at: "2026-05-18 morning", note: "**Jr now git-tracked + Track B watchdog ergonomics ported** — (1) Initial git repo at `/usr/local/lib/openclaw-jr/` pushed to **`pauloovidio-a11y/openclaw-jr` (PRIVATE)** mirroring Ktulu's pattern. 46 files tracked (19 scripts + 8 persona + 14 systemd + tenant-config + sync tooling); secrets/state/logs/.bak excluded by .gitignore. Account-level SSH key (`/root/.ssh/github_sandmanpo`, authenticates as pauloovidio-a11y). Three commits today: init + Track B + gitignore-SESSION-STATE. (2) **Track B Port 1 — Ação action-clarity rule** ported from Ktulu to `jr-daily-digest.py`. New `_format_action_line` + `_compute_actions` + `_envelope_id` helpers; every digest now ends with deterministic `Ação: <next-step | nenhuma da sua parte>` line + envelope-id footer (`jr-digest-YYYY-MM-DD-<uuid8>`). Compute_actions reads outage-queue, jr_backup, heartbeat-state files for notion + higgsfield, and alerts_sent_24h. (3) **Track B Port 2 — media_audit.jsonl substrate** ported from Ktulu. New `jr-media.py` module (`audit_media`/`read_recent`); `jr-image-describe.py` wired to append after each Haiku vision call. Storage at `/var/lib/openclaw-jr/tenants/paulo/media_audit.jsonl` (NOT tracked — mutating). Forward investment for Phase 0d.5 multimodal_ingest. Smoke green on both ports (digest end-to-end with monkey-patched travel=active produces clean text with empty-day default Ação + valid envelope-id pattern; jr-media CLI writes/tails rows). **Follow-up flagged**: nightly snapshot import (04:00 BRT) overwrites runtime persona/*.md files, wiping local Jr-side persona edits. Tracked-in-git persona is authoritative between snapshots but the next snapshot resets the runtime copy. Fix needed (next session): either apply persona changes to SC-side snapshot source OR wire a post-snapshot Jr-side patcher. Stats: Jr shared_scripts 19→20 (added jr-media.py), git_repo now declared." },
    { agent: "jr", at: "2026-05-17 evening", note: "**Lighter-SC ports sprint (Tracks A1+A2 reframed)** — 6 capability ports landed on Jr to fulfill the dual-duty role (sentinel/watchdog/healer for SC + lighter-SC for operator continuity during outage). All under +1.5GB RAM ceiling (actual ~5MB). (1) **Notion auth heartbeat** — `jr-notion-heartbeat.py` + `openclaw-jr-notion-heartbeat@<tenant>.timer` (6h cadence), edge-transition alerts. (2) **html-it palette CSS tokens** embedded in Jr AGENTS.md (4 presets: sales-warm, clinical, corporate, sandman) for sales-grade artifact generation. (3) **PDF/attachment helpers** — 2 new MCP tools `gmail_find_attachments` + `gmail_fetch_attachment` on jr-google-user-mcp. (4) **Higgsfield OAuth heartbeat** — `jr-higgsfield-heartbeat.py` + timer (6h), 3-tier posture (green/amber/red), refresh-token expiry warnings. (5) **Haiku vision tool** — `jr-image-describe.py` CLI; Jr persona §🎙️ inbound-media now wired to call it for proper vision instead of guessing. (6) **Write-flip** — Calendar/Gmail/Drive writes flipped from queue-for-SC-replay to **execute-live-with-2-step-confirm**: SC up → refuse (route through SC); SC down + unconfirmed → return preview; SC down + confirmed → execute real Google API + audit to `jr_outage_log.jsonl` with `status=executed_by_jr`. AGENTS.md §write-during-outage uses **natural conversation** (no prescriptive 'reply sim/não' — agent reads intent). All 3 executors wired (real `_exec_gmail_create_draft` / `_exec_calendar_create_event` / `_exec_drive_create_file`). Smoke: REFUSE + PREVIEW branches green; live execute path validated against a real outage (deferred). **Hygiene**: both new heartbeats now read tokens from `/etc/openclaw-jr/tenants/paulo/secrets.env` (canonical) with `openclaw.json` fallback for safety. NOT done in this sprint (deliberately deferred): operator card UX (only needed if/when Ktulu/Sandman get Telegram channels), precedent_matcher contact filter (only useful with operator cards), contact-playbook mirror (same), Codex script-review on Jr's own code (low ROI). Jr stats: shared_scripts 16→19, systemd_units 10→14." },
    { agent: "superclawman", at: "2026-05-17 evening", note: "**Sandman → SC skills audit closed** — 12 candidate skills audited across Part (a) safe ports + Part (b) memory cluster. Outcomes: **2 PORTED** (gog, 1password — earlier today), **10 SKIPPED** (github-cli + openclaw-github-assistant, google-maps, summarize, mcporter, elite-longterm-memory, fluid-memory, memory-tiering, neural-memory, self-improving-agent, capability-evolver-pro). **2 QUEUED for Phase 8** (next batch Mac mini port): health-ledger + plugin-watchdog (intelligent-alerts canonical) + llm-cost-fetch-api (SC makes the spend). Part (b) verdict drivers: SC's memory + learning stack (clawman-memory 31k vectors + 5-skill loop with metrics-gated tuning + lossless-claw v0.10.0 + precedent_matcher BGE-M3 + inbound style observers + agent_scope provenance) is genuinely more sophisticated than Sandman's; porting any Sandman memory skill creates dual-orchestration / dual learning-signal contention. memory-tiering policy text flagged as a deferred opportunity (~1.5d effort, could feed Skill 4 grid-search knobs). nmem's spreading-activation primitive flagged for revisit IF distant-association discovery becomes a real bottleneck (none today)." },
    { agent: "superclawman", at: "2026-05-17 PM", note: "**Codex script-review pipeline shipped** — gpt-5.5 reviewer ported from Sandman (simplified to single-layer, drops gpt-4o + auto-fix-as-default). Trigger fires on every commit (post-commit hook on ~/.openclaw + propostas) + hourly LaunchAgent safety-net (ai.openclaw.script-review). Cards land in C2 group (120363406507708378@g.us) with: 📋 card_id at TOP (survives WA's ~194-char replyToBody truncation), Sandman-style per-file 🔴/🟠 grouping, Haiku-generated `Superclawman recommends: FIX|INVESTIGATE|INFO|UNKNOWN` line. Operator UX: quote-reply `VETO` in C2 → block, quote-reply `GO` in selfchat → execute (FIX = codex auto-edit, INVESTIGATE = Sonnet analysis). Out-of-band watcher daemon (ai.openclaw.script-review-c2-watcher) polls gateway JSON log every 30s — wa-inbound-router only sees messages Sonnet dispatches for response-generation, C2 VETOs and selfchat GOs bypass that flow. Sandman's wa-watcher.mjs patched to silently no-op when its pending queue is empty (was false-claiming `⚠️ VETO received — no pending` on SC VETOs). Plugins added: @openclaw/openai (stock provider) + @openclaw/codex (clawhub) — both in plugins.allow now (9 total). Also: gog + 1password skills ported (gog = declarative-only, binary + OAuth already live; 1password new — op CLI v2.34 + service-account token at ~/.openclaw/secrets/op_service_account.token chmod 600, exported by gateway env-wrapper). TOOLS.md updated for both." },
    { agent: "superclawman", at: "2026-05-16 evening", note: "WhatsApp canonical Notion main-page body **fully re-mirrored to v1.17** (replace_content with all 25 child page references preserved). Top callouts + v1.15→v1.16 + v1.16→v1.17 changelogs + updated TL;DR (now 9 items, including the new v1.17 autonomy-pilot substrate point) + updated Configuration + North Star + Sequential Layers + Parallel subsystems diagrams (Layer 4 + Layer 5 + Layer 6 + Layer 7 now mention the v1.17 autonomy substrate; new 'Phase 1 Autonomy substrate' subsystem block + new 'Reconnect-storm watchdog' subsystem block). **Follow-up TODO**: the 25 child sub-pages (Layer 1 patches, Layer 2 ingest, ... Activity Gate, Cards Group, Appendix A incident log, Appendix B-E, etc.) still carry their v1.11/v1.12 content — each needs individual fetch+patch to bring to v1.17. Workspace markdown remains authoritative on body content. Main-page v1.17 landed; sub-pages incremental." },
    { agent: "superclawman", at: "2026-05-16 evening", note: "Memory canonical bumped: main v1.40 → **v1.41**, post-plan v1.9 → **v1.10**. **§A.8 doctrinal reframe** — scope field is **provenance, not cross-agent ACL**. Each agent has its own brain (separate store), so there's no cross-store reading to access-control; `agent_scope` is who-wrote-this metadata, strict reader rule still useful within-store for asymmetric reads (Jr→Sandman in failover). Phase 4 Stages 1+2 shipped (substrate + backfill + CLI + engine wiring); Stages 3+4 are observation (not code) — no writer-migration sprint anymore. Tenant prefix `tenant:<id>:<agent>` still composes for §C.3 SaaS prep. **Follow-up flagged**: 2 of 3 memory-ingest LaunchAgents on Mac (`clawman.whatsapp-bridge-memory-ingest`, `clawman.memory-capture`) have no source-controlled plist; only `com.clawman.multimodal-ingest` is in repo. Per-host plist backup strategy is a tracked TODO." },
    { agent: "ktulu", at: "2026-05-16 PM", note: "v1.1.2 canonical addendum: daily status-digest envelope shipped — ktulu_digest.py (10th pipeline module) + ai.openclaw.ktulu.digest.plist (6th LaunchDaemon, installed DORMANT during soak; bootstrap Tue 5/19 PM). Fires 21:00 BRT → Paulo selfchat. Codifies action-clarity rule (every envelope has explicit `Ação:` line above envelope-id footer, default 'nenhuma da sua parte'). Forward-applies to ALL envelope kinds. Continuous test corpus for Phase 2.1 recognizer. Commit e288657 on ktulu repo." },
    { agent: "jr", at: "2026-05-16 PM", note: "v1.30 ambient-state primitives shipped — operator-declared modes (maintenance + travel) via jr-maintenance.py + jr-travel-mode.py using the 5-part design pattern (CLI · watchdog_state.json key · public predicate · persona HARD section · per-primitive audit log). Plus jr-html-deliver.py + jr-daily-digest.py + openclaw-jr-daily-digest@.timer (5th service+timer pair). 16 shared scripts now (was 12). 10 systemd units (was 8)." },
    { agent: "superclawman", at: "2026-05-16 PM", note: "Credential audit playbook + admin keys infrastructure shipped. Admin keys at ~/.openclaw/secrets/{anthropic,openai}_admin.key. Fleet-wide cleanup: 3 OpenAI keys revoked (clawman-mac, Mac-01, Clawman-mac2), 7 keys live across 5 projects. 21-key Anthropic history mapped. Memory entries: playbook_credential_audit_2026_05_16.md + state_provider_admin_keys_2026_05_16.md." },
    { agent: "ktulu", at: "2026-05-16", note: "v1.0.1 canonical · 3 structural shipments: (1) browser plugin added to plugins.allow — gives Ktulu static-HTML fetch via openclaw web_fetch. (2) media_audit.jsonl substrate at handoff/state/ — every transcript + image desc + PDF/video metadata persisted by ktulu_media.py (Phase 2.3 multimodal_ingest bootstrap). (3) 3-layer group-JID guard (commit 9a1aa1f) — classify @g.us/digits>15, worker drops, sender refuses. Soak window active, fire locked 2026-05-19." },
    { agent: "sandman", at: "2026-05-16", note: "Matrix correction: lossless-claw v0.9.2 was already installed (DB has 20,273 msgs / 106 DAG nodes — accumulated pre-detection; install ran as root, not sandmanpo). Closes pairing op #3. Also: OpenClaw 2026.5.7 → 2026.5.12 bump caught + codex-sandman 3-layer pipeline now live (Entry 96 stable). 0.9.2 → 0.9.4 lossless-claw bump now the only remaining gap." },
    { agent: "ktulu", at: "2026-05-16", note: "5th LaunchDaemon shipped — ai.openclaw.ktulu.backup.plist. Pipeline now {gateway,ingest,worker,sender,backup}." },
    { agent: "jr", at: "2026-05-16", note: "4th service+timer pair shipped — openclaw-jr-backup@.timer + jr-backup.py. 8 systemd units total (was 6). jr_haiku_voice.py shipped (Smart-Agent voice composer — Jr's human-facing Telegram prose is now Haiku-composed). jr-google-user-mcp.py refined (writes still stubbed per Phase 0d.3)." },
    { agent: "ktulu", at: "2026-05-15", note: "Major refactor — workspace moved to /Volumes/KtuluDisk/ktulu/.openclaw/. Adopted html-it skill + pdf-fetch + operational-routing playbooks. 9 pipeline modules in clawman-bus/. KTULU_CANONICAL_v1.0.md written (30KB). Now git-tracked at pauloovidio-a11y/ktulu (private)." },
    { agent: "jr", at: "2026-05-15", note: "Phase 0d.3 active build — recovery@ timer added, recovery-orchestrator.py + jr-outage-queue.py landed. vps-watchdog flap suppression shipped (commit d053fa1c). P10 wiring landed same day." },
    { agent: "superclawman", at: "2026-05-15", note: "Authored KTULU_CANONICAL_v1.0.md. Updated SUPERCLAWMAN_FINAL_WHATSAPP_CANONICAL_v1, X_CANONICAL, POST_MEMORY_LEARNING_PLAN, MEMORY_FINAL_CANONICAL, WATCHDOG_JR_CANONICAL." }
  ]
};
