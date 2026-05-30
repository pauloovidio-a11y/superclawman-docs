#!/usr/bin/env bash
# refresh.sh — snapshot host stats for the 4 agents.
#
# Captures: hardware, OS, openclaw version, current inventory counts, files
# touched in last 24h. Writes a structured snapshot to snapshots/ so the next
# run can diff. Bumps data.js generated_at timestamp.
#
# Per-agent NOTES in data.js are human-curated — this script does not touch
# them. To update notes, edit data.js by hand or ask Claude to "update the
# matrix" (Claude will re-probe + revise notes against the current state).
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
  ssh -o ConnectTimeout=8 nuc 'bash -s' <<'REMOTE' 2>/dev/null || echo "OFFLINE"
set +e
hw=$(lscpu 2>/dev/null | grep "Model name" | head -1 | sed "s/.*:\s*//")
cores=$(lscpu 2>/dev/null | grep "^CPU(s):" | awk "{print \$2}")
mem=$(free -h 2>/dev/null | awk "/^Mem:/ {print \$2}")
os=$(lsb_release -d 2>/dev/null | sed "s/Description:\s*//")
kernel=$(uname -r)
oc=$(openclaw --version 2>/dev/null | head -1)
skills=$(ls /root/.openclaw/workspace/skills/ 2>/dev/null | wc -l)
scripts=$(ls /root/.openclaw/workspace/scripts/ 2>/dev/null | grep -v '\.bak' | wc -l)
doctrine=$(ls /root/.openclaw/workspace/*.md 2>/dev/null | grep -v '\.bak' | wc -l)
subagents=$(ls /root/.openclaw/agents/ 2>/dev/null | wc -l)
hooks=$(ls /root/.openclaw/hooks/ 2>/dev/null | wc -l)
allow=$(python3 -c "import json;j=json.load(open('/root/.openclaw/openclaw.json'));print(j.get('plugins',{}).get('allow','unrestricted'))" 2>/dev/null)
recent=$(find /root/.openclaw/workspace -maxdepth 2 -mtime -1 -type f 2>/dev/null | grep -vE '\.bak|node_modules|__pycache__|\.log$|/state/|\.DS_Store' | head -8 | tr '\n' '|')
cat <<JSON
{"hw":"$hw","cores":"$cores","mem":"$mem","os":"$os","kernel":"$kernel","oc":"$oc","skills":$skills,"scripts":$scripts,"doctrine":$doctrine,"subagents":$subagents,"hooks":$hooks,"allow":"$allow","recent":"$recent"}
JSON
REMOTE
}

probe_superclawman() {
  hw=$(sysctl -n machdep.cpu.brand_string 2>/dev/null)
  cores=$(sysctl -n hw.ncpu 2>/dev/null)
  mem="$(sysctl -n hw.memsize 2>/dev/null | awk '{printf "%dGB", $1/1073741824}')"
  os="macOS $(sw_vers -productVersion 2>/dev/null) · Darwin $(uname -r)"
  oc=$(openclaw --version 2>/dev/null | head -1 || node -e "console.log('OpenClaw ' + require('$HOME/.openclaw/npm/node_modules/openclaw/package.json').version)" 2>/dev/null)
  skills=$(ls "$HOME/.openclaw/workspace/skills/" 2>/dev/null | wc -l | tr -d ' ')
  scripts=$(ls "$HOME/.openclaw/workspace/scripts/" 2>/dev/null | grep -vE '\.bak|node_modules|__pycache__' | wc -l | tr -d ' ')
  subagents=$(ls "$HOME/.openclaw/agents/" 2>/dev/null | wc -l | tr -d ' ')
  playbooks=$(ls "$HOME/.openclaw/workspace/playbooks/" 2>/dev/null | wc -l | tr -d ' ')
  launchagents=$(ls "$HOME/Library/LaunchAgents/" 2>/dev/null | grep -E "^ai\.openclaw\." | grep -v '\.bak' | wc -l | tr -d ' ')
  allow=$(python3 -c "import json;j=json.load(open('$HOME/.openclaw/openclaw.json'));print(j.get('plugins',{}).get('allow','unrestricted'))" 2>/dev/null)
  recent=$(find "$HOME/.openclaw/workspace" -maxdepth 2 -mtime -1 -type f 2>/dev/null | grep -vE '\.bak|node_modules|__pycache__|\.log$|session-delete|\.DS_Store|trajectory' | head -8 | tr '\n' '|')
  echo "{\"hw\":\"$hw\",\"cores\":\"$cores\",\"mem\":\"$mem\",\"os\":\"$os\",\"oc\":\"$oc\",\"skills\":$skills,\"scripts\":$scripts,\"subagents\":$subagents,\"playbooks\":$playbooks,\"launchagents\":$launchagents,\"allow\":\"$allow\",\"recent\":\"$recent\"}"
}

probe_ktulu() {
  # Use the `ktulu` user (not `ktulu-mac` admin): the .openclaw tree is owned by
  # the ktulu user, so the admin alias returned 0 for every workspace count
  # (2026-05-30 fix). /Library/LaunchDaemons stays world-readable for any user.
  ssh -o ConnectTimeout=8 ktulu-mac-ktulu 'bash -s' <<'REMOTE' 2>/dev/null || echo "OFFLINE"
set +e
hw=$(sysctl -n machdep.cpu.brand_string 2>/dev/null)
cores=$(sysctl -n hw.ncpu 2>/dev/null)
mem="$(sysctl -n hw.memsize 2>/dev/null | awk '{printf "%dGB", $1/1073741824}')"
os="macOS $(sw_vers -productVersion 2>/dev/null) · Darwin $(uname -r)"
oc=$(openclaw --version 2>/dev/null | head -1 || true)
base=/Volumes/KtuluDisk/ktulu/.openclaw
doctrine=$(find $base/workspace -maxdepth 1 -name '*.md' 2>/dev/null | wc -l | tr -d ' ')
skills=$(ls $base/workspace/skills/ 2>/dev/null | wc -l)
pipeline=$(ls $base/workspace/clawman-bus/*.py 2>/dev/null | grep -vE '/test_' | wc -l | tr -d ' ')
playbooks=$(ls $base/workspace/playbooks/ 2>/dev/null | wc -l)
subagents=$(ls $base/agents/ 2>/dev/null | wc -l)
daemons=$(ls /Library/LaunchDaemons/ai.openclaw.ktulu.* 2>/dev/null | wc -l | tr -d ' ')
allow=$(python3 -c "import json;j=json.load(open('$base/openclaw.json'));print(j.get('plugins',{}).get('allow',[]))" 2>/dev/null)
recent=$(find $base/workspace -maxdepth 2 -mtime -1 -type f 2>/dev/null | grep -vE '\.bak|\.log$|\.venv|\.git/' | head -8 | tr '\n' '|')
echo "{\"hw\":\"$hw\",\"cores\":\"$cores\",\"mem\":\"$mem\",\"os\":\"$os\",\"oc\":\"$oc\",\"doctrine\":$doctrine,\"skills\":$skills,\"pipeline_modules\":$pipeline,\"playbooks\":$playbooks,\"subagents\":$subagents,\"launchdaemons\":$daemons,\"allow\":\"$allow\",\"recent\":\"$recent\"}"
REMOTE
}

probe_jr() {
  ssh -o ConnectTimeout=8 superclawman-jr 'bash -s' <<'REMOTE' 2>/dev/null || echo "OFFLINE"
set +e
hw=$(lscpu 2>/dev/null | grep "Model name" | head -1 | sed "s/.*:\s*//")
[ -z "$hw" ] && hw=$(grep -m1 "model name" /proc/cpuinfo | sed "s/.*:\s*//")
cores=$(lscpu 2>/dev/null | grep "^CPU(s):" | awk "{print \$2}")
mem=$(free -h 2>/dev/null | awk "/^Mem:/ {print \$2}")
os=$(lsb_release -d 2>/dev/null | sed "s/Description:\s*//")
oc=$(openclaw --version 2>/dev/null | head -1)
scripts=$(ls /usr/local/lib/openclaw-jr/*.py 2>/dev/null | wc -l)
mcps=$(ls /usr/local/lib/openclaw-jr/*-mcp.py 2>/dev/null | wc -l)
systemd=$(ls /etc/systemd/system/openclaw-jr-*.service /etc/systemd/system/openclaw-jr-*.timer 2>/dev/null | wc -l)
tenants=$(ls /var/lib/openclaw-jr/tenants/ 2>/dev/null | wc -l)
allow=$(python3 -c "import json;j=json.load(open('/root/.openclaw-jr-paulo/openclaw.json'));print(j.get('plugins',{}).get('allow',[]))" 2>/dev/null)
recent=$(find /usr/local/lib/openclaw-jr/ /var/lib/openclaw-jr/tenants/paulo/jr-state/ -maxdepth 3 -mtime -1 -type f 2>/dev/null | grep -vE '__pycache__|\.log$|jr-vectors|\.lock' | head -8 | tr '\n' '|')
echo "{\"hw\":\"$hw\",\"cores\":\"$cores\",\"mem\":\"$mem\",\"os\":\"$os\",\"oc\":\"$oc\",\"shared_scripts\":$scripts,\"mcps\":$mcps,\"systemd_units\":$systemd,\"tenants\":$tenants,\"allow\":\"$allow\",\"recent\":\"$recent\"}"
REMOTE
}

# --- run probes ---------------------------------------------------------

echo "→ Probing Sandman (nuc)…"
S_S=$(probe_sandman); echo "  $S_S"
echo "→ Probing Superclawman (local)…"
S_SC=$(probe_superclawman); echo "  $S_SC"
echo "→ Probing Ktulu (ktulu-mac)…"
S_K=$(probe_ktulu); echo "  $S_K"
echo "→ Probing Jr (superclawman-jr)…"
S_J=$(probe_jr); echo "  $S_J"

NOW=$(date +"%Y-%m-%dT%H:%M:%S%z" | sed 's/\(..\)$/:\1/')
echo "→ Timestamp: $NOW"

if [ "$DRY" -eq 1 ]; then
  echo "(dry-run — no writes)"
  exit 0
fi

# --- write snapshot ----------------------------------------------------

mkdir -p snapshots
SNAP="snapshots/$(date +%Y-%m-%d_%H%M).json"
cat > "$SNAP" <<EOF
{
  "generated_at": "$NOW",
  "sandman": $S_S,
  "superclawman": $S_SC,
  "ktulu": $S_K,
  "jr": $S_J
}
EOF
echo "→ Snapshot at $SNAP"

# Also write "latest" symlink-like file for easy diff
cp "$SNAP" snapshots/latest.json
echo "→ Updated snapshots/latest.json"

# Bump generated_at in data.js
sed -i.bak -E "s|^  generated_at: \"[^\"]+\"|  generated_at: \"$NOW\"|" data.js
rm -f data.js.bak
echo "→ Bumped data.js generated_at"

echo ""
echo "DONE. Notes in data.js are human-curated — to update them after this"
echo "snapshot reveals structural changes, ask Claude: \"update the matrix\""
echo "(Claude will diff this snapshot against data.js and revise notes)."

if [ "$COMMIT" -eq 1 ]; then
  git add data.js snapshots/
  git commit -m "refresh: snapshot $NOW" >/dev/null || echo "(nothing to commit)"
  echo "→ Committed."
fi
