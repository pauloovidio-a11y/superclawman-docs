# superclawman.ai — Blackprint design system

The live site's visual system, derived from the RoboNuggets reference
`fable/21-blueprint` (`~/Claude/projects/robonuggets-design-systems/`). Type
pairing, spacing rhythm, linework and the drafting-sheet language are derived;
the ground is black rather than the reference's blue, and structure and copy are ours.

Near-black drafting ground (`#0a0a0c`) with a two-level grid, amber (`#ffb000`)
as the only accent, Azeret Mono for headings/labels and Inter for body, a fixed
drawing-sheet frame with sheet number and language, and hard-edged panels.

**Re-skinning the ground is a six-value edit.** The surface tokens at the top of
`core.css` (`--ground`, `--ground-2`, `--panel`, `--panel-hi`, `--sunken`,
`--sunken-hi`) are the only place a surface colour is defined — no stylesheet
below hardcodes one. Swapping them back to the blue set restores blueprint.

## How it's applied

`build.py` restyles all 21 pages in `../avatars/site-deploy/`. It swaps **only**
the `<style>` block and the head font links, injects the sheet frame, and
normalises legacy inline colours and border-radii.

**It never touches copy, structure, links, form fields or scripts** — which is
what keeps the EN / PT-BR / ES translations safe. Verified after every run: the
rendered text of all 21 pages is byte-identical to the previous version apart
from the decorative frame label.

```bash
python3 build.py --dry     # show what would change
python3 build.py           # apply
```

## Stylesheets

| File | Applies to |
|---|---|
| `core.css` | every page — tokens, grid ground, sheet frame, nav, buttons, type, footer |
| `index.css` | `index / pt / es` |
| `product.css` | `meetings{,-pt,-es}` |
| `wamemory.css` | `whatsapp-memory{,-pt,-es}` — **layered on top of `product.css`** |
| `business.css` | `business{,-pt,-es}` |
| `activate.css` | `meetings-activate{,-pt,-es}`, `whatsapp-memory-activate{,-pt,-es}` |
| `guide.css` | `meetings-guide{,-pt,-es}` |

**Gotcha that cost a rebuild:** `meetings.html` and `whatsapp-memory.html` share
class *names* but not structures — `.proof` is a row of stat tiles on one and a
pair of quote blocks on the other; `.trow` is a two-cell table row vs a prose
row; `.stat` is a single tile vs a container of three. Hence `wamemory.css`.
Check the actual markup before assuming a shared class means a shared component.

**Grids use `repeat(auto-fit, minmax(...))`, never a fixed column count.** The
panel grids paint the container in the hair colour and let 2px gaps show through
as rules. With fixed columns, any grid holding fewer children than columns leaks
that pale colour as an empty cell — this shipped visibly on two pages before it
was caught. `auto-fit` collapses empty tracks, so the bug can't recur. Don't
re-add fixed-column media queries.

## Verification

Serve the site first: `cd ../avatars/site-deploy && python3 -m http.server 8091`

```bash
python3 gridaudit.py     # empty-cell leaks in panel grids, at 1440/900/390
python3 layoutaudit.py   # h-overflow, oversized images, elements off-canvas
python3 shoot.py         # fold + full-page shots, desktop and mobile -> shots/
```

Both audits must print CLEAN. They're geometry-based on the rendered DOM, not
source heuristics — an earlier track-counting version gave false positives on
`auto-fit`, because collapsed tracks are still listed in the computed value.

## Contrast

AA across the palette, and roughly double the blue ground it replaced:

| | on blue (before) | on black (now) |
|---|---|---|
| `--ink` body | 8.75 | **16.65** |
| `--ink-dim` secondary | 4.44 (under AA) | **7.74** |
| `--amber` accent | 5.48 | **10.80** |

Two text tokens are deliberately distinct and must not be collapsed:

- **`--ink-mute`** (`.54`, 6.07:1) — small *secondary text*: seat counts, billing
  cycle, optional-field labels, input placeholders.
- **`--ink-faint`** (`.30`, 2.6:1) — *rules and borders only*. Fine for a drawn
  line, far too low for words. If you catch it colouring text, that's a bug.

## Deploying

superclawman.ai is a **direct-upload** Cloudflare Pages project. Committing here
does **not** publish it:

```bash
cd ~/Claude/projects/superclawman-docs && export $(grep -v '^#' ~/.openclaw/secrets/cloudflare.env | xargs) && npx -y wrangler@4 pages deploy avatars/site-deploy --project-name=superclawman --branch=main
```
