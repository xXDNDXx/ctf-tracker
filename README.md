<div align="center">

# ⚡ SPECTER CTF // HexTracker v2.0
### Advanced CTF Machine Tracking, Attack Lifecycle Management & Offensive Cheatsheet Dashboard

[![Open Tracker](https://img.shields.io/badge/-%20LAUNCH%20SPECTER%20CTF%20-10B981?style=for-the-badge&labelColor=0B0F19)](https://xXDNDXx.github.io/ctf-tracker/)
[![Live on GitHub Pages](https://img.shields.io/badge/Live_on-GitHub_Pages-181717?style=flat-square&logo=github)](https://xXDNDXx.github.io/ctf-tracker/)
[![Tech Stack](https://img.shields.io/badge/Built%20With-React%2018%20%7C%20TypeScript%20%7C%20Tailwind-06B6D4?style=flat-square)](#tech-stack)
[![License](https://img.shields.io/badge/License-MIT-EF4444?style=flat-square)](LICENSE)

*400+ Machines · 5-Stage Attack Pipeline · Live Parameter Injection · Obsidian Writeup Studio · Skill Radar*

</div>

---

## 🎯 Overview

**SpecterCTF / HexTracker** is a high-performance, cybersecurity-themed dashboard engineered for penetration testers, security researchers, and CTF competitors targeting **Hack The Box (HTB)**, **TryHackMe (THM)**, **VulnHub**, **ProLabs**, and custom offline labs.

Built with an **offline-first architecture** (Zustand + LocalStorage/IndexedDB), zero backend dependency, and instantaneous command palette (`Ctrl+K`) navigation.

---

## 🚀 Core Modules

### 1. 🛡️ Module A: The Advanced Machine & Lab Tracker
- **Multi-Platform Coverage:** Hack The Box (340+ boxes), TryHackMe (50+ rooms), VulnHub classics, ProLabs enterprise Active Directory environments, and custom user targets.
- **5-Stage Attack Lifecycle Pipeline:**
  1. `Target Backlog`
  2. `Active Recon` (Port & service discovery)
  3. `Foothold Obtained` (Initial user shell)
  4. `System Pwned` (Root / SYSTEM flag captured)
  5. `Completed & Logged` (Retired / writeup archived)
- **Multi-Mode Views:**
  - **Kanban Board:** Fluid drag-and-drop & stage progression with Framer Motion layout animations.
  - **Data Table:** Dense terminal-style table with multi-column sorting (Name, Platform, OS, Difficulty, Status, Time) and quick flag toggles.
  - **Cyber Cards Grid:** High-contrast cards featuring platform dots, difficulty badges, and hint spoiler buttons.
- **Flags Vault:** Secure obfuscated fields (`••••••••`) with one-click copy and instant verification.
- **Live Stopwatch:** Tracks real engagement duration with granular `Time-to-User` and `Time-to-Root` metrics.
- **Global Command Palette (`Ctrl+K`):** Jump to any box, cheatsheet command, or execute actions from anywhere.

### 2. ⚡ Module B: Dynamic Cheatsheet & Reverse Shell Builder
- **Real-Time Variable Injection:** Global sticky parameters (`LHOST`, `LPORT`, `TARGET_IP`, `INTERFACE`) dynamically interpolate into all commands simultaneously!
- **Dedicated Reverse Shell Studio:** Interactive generator supporting **Bash, Python 3, PHP, Netcat, PowerShell, Socat TTY, Perl, and Ruby**, with ready-to-run listener commands.
- **Curated Offensive Categories:**
  1. Network Discovery & Port Scanning (`nmap`, `masscan`, `rustscan`)
  2. Web Enumeration & Fuzzing (`ffuf`, `gobuster`, `feroxbuster`, `nikto`, `wpscan`)
  3. Exploitation & Payloads (`sqlmap`, LFI wrappers, `msfvenom` one-liners)
  4. Linux Post-Exploitation & PrivEsc (Interactive TTY stabilization, `LinPEAS`, SUID, `getcap`, `sudo -l`)
  5. Windows & Active Directory (`BloodHound`, `PowerView`, `Mimikatz`, `impacket`, `NetExec`, `Evil-WinRM`)
  6. Pivoting & Tunneling (`Chisel`, SSH Dynamic Forwarding, `Ligolo-ng`, `socat` relays)
  7. File Transfers (`python3 http`, `certutil`, `powershell`, `smbserver`)
- **Custom Payload Vault:** Add, edit, bookmark, and tag your personal exploit snippets.

### 3. 📝 Module C: Embedded Writeup Studio (Obsidian & GitBook Ready)
- **Dual-Pane Live Editor:** Raw markdown on the left, live rendered preview on the right.
- **Automated Pentest Templates:** Pre-populates target IP, platform, OS, difficulty, and standard reporting sections:
  1. Executive Summary & Attack Path
  2. Reconnaissance & Nmap Scan Results
  3. Vulnerability Analysis & Foothold Proof-of-Concept
  4. Privilege Escalation & Root Evidence
  5. Post-Exploitation Loot & Remediation
- **Standardized YAML Frontmatter:** Directly exportable as `.md` files into Obsidian vaults or GitBook documentation repositories.

### 4. 📊 Module D: Operational Analytics & Skill Radar
- **Offensive Skill Vector Radar:** Interactive SVG radar chart visualizing proficiencies across Web Security, Active Directory, Linux PrivEsc, Windows PrivEsc, Network/Pivoting, and Binary Exploitation.
- **Pwn Progress Matrix:** Tier-by-tier completion rates across Very Easy, Easy, Medium, Hard, and Insane difficulties.
- **90-Day Activity Heatmap:** GitHub/HTB-style calendar tracking daily study sessions and root captures.
- **Speed Benchmarks:** Average time to initial access and average time to root.

---

## 🎨 Theme & UI/UX Design
- **Cyberpunk Palette:** Jet Black (`#0B0F19`), Slate Cards (`#111827`), Glowing Emerald (`#10B981` HTB), Crimson (`#EF4444` THM), Cyan (`#06B6D4` Tech), and Purple (`#8B5CF6` AD).
- **Retro CRT Mode:** Optional CRT scanlines, screen curvature vignette, and phosphor beam overlay.
- **Web Audio FX:** Synthesized tactical clicks, confirmation chimes, and root fanfares with zero external audio assets.
- **Data Portability:** 1-Click JSON export and import restore.

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js 18+ (tested on Node.js 24)
- npm 9+

```bash
# Clone the repository
git clone https://github.com/xXDNDXx/ctf-tracker.git
cd ctf-tracker

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔗 Author & Community Links

Built with precision by **DANIEL** ([@xXDNDXx](https://github.com/xXDNDXx))

| Link | Destination |
|---|---|
| 🧑‍🚀 Portfolio | <https://xXDNDXx.github.io/> |
| 📝 CTF Write-ups | <https://xxdndxx.gitbook.io/thm-writeups/> |
| 💻 GitHub Profile | <https://github.com/xXDNDXx> |
| 💼 LinkedIn | <https://www.linkedin.com/in/daniel-dayan-a66322352/> |

---

## 📜 License
MIT License. Created for the cybersecurity and CTF community.

