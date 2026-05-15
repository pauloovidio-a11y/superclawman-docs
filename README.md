# superclawman-docs

Canonical internal docs for Paulo's agent cast. Source of truth for the **Sandman · Superclawman · Ktulu · Jr inventory matrix**.

## Files

| File | Purpose |
|---|---|
| `matrix.html` | The interactive inventory matrix. Click any agent card to filter. Loads `data.js` at startup. |
| `data.js` | The single source of truth. Sets `window.INVENTORY` with per-section per-row per-agent data + notes. Human-curated. |
| `refresh.sh` | SSHes into the 4 agent hosts, snapshots stats into `snapshots/`, bumps the `generated_at` timestamp in `data.js`. Does NOT auto-edit notes (those stay human-curated). |
| `snapshots/` | Append-only log of host probes — one file per refresh. |

## View the matrix

```bash
open matrix.html
```

Works directly from `file://` — no server needed. The matrix is one HTML file + one data file; portable, single-source-of-truth.

## Refresh stats

The matrix is owned by the **Mac mini** (this machine). All other hosts (NUC, i7 Ktulu, Hetzner Jr) are read-only sources. To refresh:

```bash
./refresh.sh             # snapshot + bump timestamp
./refresh.sh --dry-run   # report only, no writes
./refresh.sh --commit    # snapshot + git commit
```

If a host is offline, refresh.sh logs `OFFLINE` for that agent and continues. Hosts are reached via these SSH aliases:

| Agent | Alias | Path |
|---|---|---|
| Sandman | `ssh nuc` | `/root/.openclaw/` |
| Superclawman | local | `~/.openclaw/` |
| Ktulu | `ssh ktulu-mac` | `/Volumes/KtuluDisk/.openclaw/` |
| Jr | `ssh superclawman-jr` | `/usr/local/lib/openclaw-jr/` + `/var/lib/openclaw-jr/tenants/paulo/` |

## Edit a fact

`data.js` is the only place to change content. Find the relevant section + row, update the `status` or the per-agent note. Then refresh in the browser. No build step.

## Why a single file with filter (vs 4 files merged)

One source of truth = no sync step, no stale data, no merge conflicts. The filter UX hides the columns + swaps the note text from per-agent variants stored in `data.js`. See conversation notes 2026-05-15.

## Notion mirror

Published to **Superclawman Docs** hub at Notion. The Notion page is the read-only published view; **`data.js` here is the source of truth**. Update here first; re-publish to Notion on meaningful change.

## Phase status

- **Phase 1 (2026-05-15)** ✅ Repo + data.js + matrix.html + refresh.sh + README.
- **Phase 2** Notion publish.
- **Phase 3** (deferred) Auto-merge stats from refresh.sh into data.js (requires JS AST walker).
