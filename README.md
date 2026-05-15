# superclawman-docs

Canonical internal docs for Paulo's agent cast. Source of truth for the **Sandman · Superclawman · Ktulu · Jr inventory matrix**.

## Files

| File | Purpose |
|---|---|
| `index.html` | Interactive matrix. Click any agent card to filter. Loads `data.js` at startup. |
| `robots.txt` | Blocks search-engine indexing — Pages access is by-link-only. |
| `data.js` | Single source of truth. Sets `window.INVENTORY` with sections, rows, statuses, per-agent notes, agent profiles, pairings, recent activity. **Human-curated.** |
| `refresh.sh` | SSHes the 4 hosts, captures hardware + OS + OpenClaw version + inventory counts + last-24h files. Writes structured JSON to `snapshots/`. Bumps `data.js` timestamp. Does NOT auto-edit notes. |
| `snapshots/` | Append-only log of host probes. `latest.json` is the most recent. Used for diff on next refresh. |

## View the matrix

```bash
open index.html
```

Works directly from `file://` — no server needed. Single HTML + single data file; portable, single source of truth.

## Refresh stats

The Mac mini owns the canonical data. All other hosts (NUC, i7 Ktulu, Hetzner Jr) are read-only sources.

```bash
./refresh.sh             # snapshot + bump timestamp
./refresh.sh --dry-run   # report only, no writes
./refresh.sh --commit    # snapshot + git commit
```

Hosts reached via SSH alias:

| Agent | SSH alias | Path probed |
|---|---|---|
| Sandman | `nuc` | `/root/.openclaw/` |
| Superclawman | local | `~/.openclaw/` |
| Ktulu | `ktulu-mac` | `/Volumes/KtuluDisk/ktulu/.openclaw/` |
| Jr | `superclawman-jr` | `/usr/local/lib/openclaw-jr/` + `/var/lib/openclaw-jr/tenants/paulo/` + `/root/.openclaw-jr-paulo/` |

Offline hosts log `OFFLINE` and the script continues.

## Update the matrix (ask Claude)

After a day of changes across the cast, ask Claude (in any session, any host that can SSH to the Mac mini):

> **"update the matrix"**

Claude will:
1. Run `./refresh.sh` to capture fresh state into `snapshots/latest.json`
2. Diff `snapshots/latest.json` against `data.js`
3. Revise per-agent notes + statuses where the structure changed (new skill, new MCP, removed daemon, etc.)
4. Bump version in `data.js`
5. Commit
6. (Optional) Re-publish to Notion if asked

The refresh script automates the **mechanical** part (probe + snapshot). Claude does the **curated** part (what changed, what it means, how to describe it to a human reader).

## Edit a fact directly

Find the relevant section + row in `data.js`, update the `status` or per-agent note. Refresh the browser. No build step.

## Filter UX

Each row has 4 status cells (one per agent) + 1 note column. Notes have variants stored per-agent:
- `notes.default` — comparison/cross-agent view (shown when no filter)
- `notes.sandman / superclawman / ktulu / jr` — agent-specific (shown when filtered)

Filter = click an agent card. Filter again = clear (or hit "Compare all"). Pairings + recent activity also filter to the selected agent.

## Notion mirror

Published to **Superclawman Docs** hub at Notion:

**[notion.so/361085df9ff881ed8d59e9365e9cb55c](https://www.notion.so/361085df9ff881ed8d59e9365e9cb55c)**

Notion is the **read-only published view** — quick access from anywhere (phone, browser, mobile). `data.js` here is the source of truth. Update here first; re-publish to Notion on meaningful change via the `notion-update-page` MCP. Parent page: Superclawman Docs hub (`355085df-9ff8-8122-b7fd-fa633a08a7b3`).

## Why a single file with filter (vs 4 files merged)

One source of truth = no sync step, no stale data, no merge conflicts. The filter UX hides columns + swaps note text from per-agent variants stored in `data.js`. See conversation notes 2026-05-15.

## Versioning

| Version | Date | Notes |
|---|---|---|
| v1.0 | 2026-05-15 12:14 | Initial — 4 agents, 9 sections, ~70 rows |
| v1.1 | 2026-05-15 15:50 | Added hardware + OS + OpenClaw version per agent. Added quick-reference panel on filter. Added recent-activity feed. Updated Ktulu (Phase 1A-1D shipped, html-it adopted, 2 playbooks adopted, git-tracked) and Jr (Phase 0d.3 recovery@ build active, 10 scripts, 6 systemd units). Smarter refresh.sh writes JSON snapshots. |
| v1.1-notion | 2026-05-15 16:00 | Phase 2 shipped — Notion mirror published under Superclawman Docs hub. Access-from-anywhere quick-glance view. HTML stays canonical / source-of-truth. |
