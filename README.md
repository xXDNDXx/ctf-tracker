# CTF Tracker

A single-file CTF machine tracker for Hack The Box and TryHackMe. Tracks progress, hints, notes, timers, streaks and more — all in your browser with zero backend.

## Features

- **417+ machines** — 347 HTB + 52 THM rooms pre-loaded
- **Per-machine key hints** — 150+ curated exploitation hints
- **Progress tracking** — user/root flag checkboxes with confetti
- **Session timer** — track time spent per box (survives page reloads)
- **Activity heatmap** — GitHub-style contribution grid
- **Streak counter** — daily streak + best streak badges
- **Reverse Shell Generator** — 6 payload types with listener suggestions
- **Cheat Sheet** — 9 categories (TTY upgrades, recon, web, transfer, privesc, AD, cracking, pivoting)
- **Learning Paths** — TJNull OSCP, web mastery, AD dominance tracks
- **Dark mode toggle**
- **Reset button** — progress-only or full factory reset (auto-backup first)
- **Ferrofluid cursor effect** — interactive WebGL liquid simulation
- **Smoke background** — animated ink-wash atmosphere
- **100% ASCII source** — immune to encoding corruption

## Quick Start

### Option A: Just open it
Double-click `index.html`. That's it. Everything works from `file://`.

### Option B: GitHub Pages (share with others)
1. Create a repo on GitHub
2. Upload `index.html` and `ferrofluid.js`
3. Go to Settings → Pages → Source: main branch → Save
4. Your tracker is live at `https://yourusername.github.io/repo-name/`

Each visitor gets their own private tracker (all data stays in their browser).

### Option B: Any static host
Netlify Drop, Vercel, Cloudflare Pages — just drag and drop the folder.

## Usage

| Shortcut | Action |
|----------|--------|
| `/` | Focus search box |
| Click IP | Copy to clipboard |

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main app (self-contained CSS + JS) |
| `ferrofluid.js` | WebGL cursor fluid effect |
| `index_backup.html` | Automatic safety backup |
| `.nojekyll` | Disables GH Pages Jekyll processing |
| `HackTheBoxPDF/` | Optional local PDF writeups |

## License

MIT
