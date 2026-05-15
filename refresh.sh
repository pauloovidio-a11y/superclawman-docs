#!/usr/bin/env bash
# refresh.sh — snapshot host stats for the 4 agents and update data.js timestamp.
#
# Only writes the auto-refreshable bits: stats (counts) + generated_at.
# Per-agent notes are human-curated; this script never touches them.
#
# Usage: ./refresh.sh             # snapshot + report
#        ./refresh.sh --dry-run   # report only, no writes
#        ./refresh.sh --commit    # snapshot + git commit
#
# Mac mini owns the canonical data.js. All other hosts are read-only sources.

set -euo pipefail
cd "$(dirname "$0")"

DRY=0; COMMIT=0
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY=1 ;;
    --commit)  COMMIT=1 ;;
  esac
done

# --- ssh probes ---------------------------------------------------------

probe_sandman() {
  ssh -o ConnectTimeout=6 nuc '
    skills=$(ls /root/.openclaw/workspace/skills/ 2>/dev/null | wc -l)
    scripts=$(ls /root/.openclaw/workspace/scripts/ 2>/dev/null | grep -v "\.bak" | wc -l)
    subagents=$(ls /root/.openclaw/agents/ 2>/dev/null | wc -l)
    systemd_services=$(ls /etc/systemd/system/ 2>/dev/null | grep -iE "sandman|openclaw|wa-|qmd|mission|skill-tree" | grep -v "\.d$" | wc -l)
    hook_bundles=$(ls /root/.openclaw/hooks/ 2>/dev/null | wc -l)
    echo "skills=$skills scripts=$scripts subagents=$subagents systemd_services=$systemd_services hook_bundles=$hook_bundles"
  ' 2>/dev/null || echo "OFFLINE"
}

probe_superclawman() {
  skills=$(ls "$HOME/.openclaw/workspace/skills/" 2>/dev/null | wc -l | tr -d ' ')
  scripts=$(ls "$HOME/.openclaw/workspace/scripts/" 2>/dev/null | grep -vE "\.bak|node_modules|__pycache__" | wc -l | tr -d ' ')
  subagents=$(ls "$HOME/.openclaw/agents/" 2>/dev/null | wc -l | tr -d ' ')
  launchagents=$(ls "$HOME/Library/LaunchAgents/" 2>/dev/null | grep -E "^ai\.openclaw\." | grep -v "\.bak" | wc -l | tr -d ' ')
  playbooks=$(ls "$HOME/.openclaw/workspace/playbooks/" 2>/dev/null | wc -l | tr -d ' ')
  echo "skills=$skills scripts=$scripts subagents=$subagents launchagents=$launchagents playbooks=$playbooks"
}

probe_ktulu() {
  ssh -o ConnectTimeout=6 ktulu-mac '
    doctrine=$(ls /Volumes/KtuluDisk/.openclaw/workspace/*.md 2>/dev/null | wc -l)
    daemons=$(ls /Library/LaunchDaemons/ai.openclaw.ktulu.* 2>/dev/null | wc -l)
    plugins=$(python3 -c "import json; j=json.load(open(\"/Volumes/KtuluDisk/.openclaw/openclaw.json\")); print(len(j.get(\"plugins\",{}).get(\"allow\",[])))" 2>/dev/null || echo 4)
    native_modules=$(ls /Volumes/KtuluDisk/.openclaw/workspace/scripts/ktulu_*.py 2>/dev/null | wc -l)
    echo "doctrine_files=$doctrine plugins=$plugins launchdaemons=$daemons native_modules=$native_modules"
  ' 2>/dev/null || echo "OFFLINE"
}

probe_jr() {
  ssh -o ConnectTimeout=6 superclawman-jr '
    plugins=$(python3 -c "import json; j=json.load(open(\"/etc/openclaw-jr/tenants/paulo/openclaw.json\")); print(len(j.get(\"plugins\",{}).get(\"allow\",[])))" 2>/dev/null || echo 6)
    mcps=$(ls /usr/local/lib/openclaw-jr/jr-*-mcp.py /usr/local/lib/openclaw-jr/jr-vector-mcp.py /usr/local/lib/openclaw-jr/jr-learn-mcp.py 2>/dev/null | wc -l)
    skills=$(grep -c "^- " /var/lib/openclaw-jr/tenants/paulo/jr-state/persona/SKILLS.md 2>/dev/null || echo 3)
    systemd_services=$(ls /etc/systemd/system/openclaw-jr-*.service 2>/dev/null | wc -l)
    tenants=$(ls /var/lib/openclaw-jr/tenants/ 2>/dev/null | wc -l)
    echo "plugins=$plugins mcps=$mcps skills=$skills systemd_services=$systemd_services tenants=$tenants"
  ' 2>/dev/null || echo "OFFLINE"
}

# --- run probes ---------------------------------------------------------

echo "→ Probing Sandman (nuc)…"
S_S=$(probe_sandman)
echo "  $S_S"

echo "→ Probing Superclawman (local)…"
S_SC=$(probe_superclawman)
echo "  $S_SC"

echo "→ Probing Ktulu (ktulu-mac)…"
S_K=$(probe_ktulu)
echo "  $S_K"

echo "→ Probing Jr (superclawman-jr)…"
S_J=$(probe_jr)
echo "  $S_J"

NOW=$(date -u +"%Y-%m-%dT%H:%M:%S%z" | sed 's/\(..\)$/:\1/')
echo "→ Now: $NOW"

if [ "$DRY" -eq 1 ]; then
  echo "(dry-run — no writes)"
  exit 0
fi

# --- update data.js -----------------------------------------------------

# Update generated_at only; stats remain human-curated until we have a robust merger.
# (Auto-merging stats would require a full JS AST walk; left as Phase 2.)
sed -i.bak -E "s|^  generated_at: \"[^\"]+\"|  generated_at: \"$NOW\"|" data.js
rm -f data.js.bak

# Save snapshot log
SNAPSHOT_DIR="./snapshots"
mkdir -p "$SNAPSHOT_DIR"
cat > "$SNAPSHOT_DIR/$(date +%Y-%m-%d_%H%M).txt" <<EOF
generated_at: $NOW
sandman: $S_S
superclawman: $S_SC
ktulu: $S_K
jr: $S_J
EOF

echo "→ Wrote snapshot to $SNAPSHOT_DIR/"
echo "→ Bumped data.js generated_at to $NOW"
echo ""
echo "Stats reported but NOT auto-merged into data.js (notes are human-curated)."
echo "Open matrix.html in your browser to view; edit data.js by hand for any factual changes."

if [ "$COMMIT" -eq 1 ]; then
  git add data.js "$SNAPSHOT_DIR"
  git commit -m "refresh: snapshot $NOW" >/dev/null || echo "(nothing to commit)"
  echo "→ Committed."
fi
