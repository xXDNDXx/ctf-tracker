<div align="center">

# 🎯 CTF TRACKER

**Hack The Box · Try Hack Me · One Link · Any Device**

[![Open Tracker](https://img.shields.io/badge/-%20OPEN%20TRACKER%20-9fef00?style=for-the-badge&labelColor=0d0f14)](https://xXDNDXx.github.io/ctf-tracker/)
[![GitHub Pages](https://img.shields.io/badge/Live_on-GitHub_Pages-181717?style=flat-square&logo=github)](https://github.com/xXDNDXx/ctf-tracker)
[![License](https://img.shields.io/badge/License-MIT-c9a227?style=flat-square)](LICENSE)

*399 machines · 150+ hints · 52 THM rooms · zero backend*

</div>

---

## What is this?

A single-page tracker for your CTF journey. Browse machines, mark flags, take notes, time your sessions — all saved automatically in your browser. No login, no server, no setup.

Works on **desktop and mobile** from the same link.

---

## Machines

| Platform | Rooms |
|----------|-------|
| **Hack The Box** | 347 (base catalog + newer releases) |
| **Try Hack Me** | 52 popular rooms |
| **Total** | **399** |

Every machine comes with:

- Difficulty + OS + technique tags
- User / Root flag checkboxes
- A **key hint** so you're never fully stuck
- Links to writeups (0xdf, IppSec, HTB Official, or THM Room)

---

## Cheat Sheet

Nine built-in categories with copy-paste commands:

| | | |
|--|--|--|
| Shell Upgrades / TTY | Recon & Scanning | Web Enumeration |
| File Transfer | Linux PrivEsc | Windows PrivEsc |
| Active Directory | Cracking & Passwords | Pivoting & Tunnels |

---

## Reverse Shell Generator

Built-in payload generator with:
- Bash, Python, PHP, Perl, PowerShell
- Listener command shown alongside every payload
- LHOST / LPORT substitution

---

## Extras

- 🌗 **Dark mode toggle**
- ⌨️ `/` shortcut to focus search
- 📊 Live result counter with chip counts
- 🕐 Session timer per machine (survives reloads)
- 🔥 Activity heatmap + daily streak tracking
- 💧 Ferrofluid cursor effect (WebGL)
- 💨 Animated ink-smoke background
- ♻️ Reset button (auto-backup before wiping)

---

## Deploy Your Own

<details>
<summary><b>Option A: GitHub Pages (recommended)</b></summary>

1. Fork or clone this repo
2. Go to **Settings → Pages → Source: main branch → Save**
3. Done. Your tracker is live at `https://you.github.io/ctf-tracker/`

</details>

<details>
<summary><b>Option B: Netlify Drop</b></summary>

1. Grab `index.html` + `ferrofluid.js` + `.nojekyll`
2. Drop them at [app.netlify.com/drop](https://app.netlify.com/drop)
3. Instant URL

</details>

<details>
<summary><b>Option C: Open locally</b></summary>

Just double-click `index.html`. Everything works from `file://`.

</details>

---

## Reset Options

The header has a **Reset** button with two levels:

| Level | What it clears | What it keeps |
|-------|---------------|---------------|
| **Progress Only** | Flags, notes, timers, streaks, activity | Custom machines + commands |
| **Factory Reset** | Everything | Nothing |

Both auto-download a JSON backup first.

---

<div align="center">

**Built for people who break things.**

</div>

