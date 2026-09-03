// Auto-generated catalog for SpecterCTF / HexTracker
// Total machines: 526
// Integrated HTB & THM Curated Roster
import { Machine } from '../types';

export const INITIAL_MACHINES: Machine[] = [
  {
    "id": "htb-lame",
    "name": "Lame",
    "ip": "10.10.10.3",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Samba",
      "distcc",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Lame",
    "writeupUrl": "https://0xdf.gitlab.io/tags#lame",
    "hint": "Samba 3.0.20 - usermap_script (CVE-2007-2447) gives instant root. nmap --script smb-vuln* spots it.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-legacy",
    "name": "Legacy",
    "ip": "10.10.10.4",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "MS08-067",
      "SMB",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Legacy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#legacy",
    "hint": "Windows XP - MS08-067 NetAPI overflow. Metasploit ms08_067_netapi roots it directly.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-devel",
    "name": "Devel",
    "ip": "10.10.10.5",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "FTP",
      "IIS",
      "MS11-046",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Devel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#devel",
    "hint": "Anonymous FTP upload + ASPX webshell on IIS. Privesc: MS10-015 (KiTrap0D) or kernel suggester.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-popcorn",
    "name": "Popcorn",
    "ip": "10.10.10.6",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Upload-Bypass",
      "DirtyCow",
      "2017"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Popcorn",
    "writeupUrl": "https://0xdf.gitlab.io/tags#popcorn",
    "hint": "Multipart upload bypass on the CMS. Privesc: CVE-2010-3301 overlayfs or motd init script.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-beep",
    "name": "Beep",
    "ip": "10.10.10.7",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Elastix",
      "LFI",
      "Shellshock",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Beep",
    "writeupUrl": "https://0xdf.gitlab.io/tags#beep",
    "hint": "Elastix LFI in graph.php + FreePBX panel default creds. Root via Asterisk call-recording script.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-optimum",
    "name": "Optimum",
    "ip": "10.10.10.8",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HFS",
      "MS16-032",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Optimum",
    "writeupUrl": "https://0xdf.gitlab.io/tags#optimum",
    "hint": "HFS 2.3 - CVE-2014-6287 RCE. Privesc: MS16-032 secondary logon or MS17-010.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-bastard",
    "name": "Bastard",
    "ip": "10.10.10.9",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Drupal",
      "Drupalgeddon",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bastard",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bastard",
    "hint": "Drupal 7 SQLi / Drupalgeddon. Creds in settings.php; privesc via AlwaysInstallElevated check.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-tenten",
    "name": "Tenten",
    "ip": "10.10.10.10",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "WordPress",
      "Sudo",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Tenten",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tenten",
    "hint": "WordPress plugin LFI lists /wp-content/uploads - SSH key hidden in chat image (steghide).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-arctic",
    "name": "Arctic",
    "ip": "10.10.10.11",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "ColdFusion",
      "JuicyPotato",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Arctic",
    "writeupUrl": "https://0xdf.gitlab.io/tags#arctic",
    "hint": "ColdFusion 8 admin panel - blank/default password, CFIDE scheduler WAR deploy for RCE.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-cronos",
    "name": "Cronos",
    "ip": "10.10.10.13",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "DNS",
      "SQLi",
      "Cron",
      "2017"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Cronos",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cronos",
    "hint": "DNS zone transfer reveals subdomains. Laravel admin SQLi. Check /etc/crontab for root jobs.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-grandpa",
    "name": "Grandpa",
    "ip": "10.10.10.14",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "IIS 6.0",
      "WebDAV",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Grandpa",
    "writeupUrl": "https://0xdf.gitlab.io/tags#grandpa",
    "hint": "IIS 6 WebDAV MOVE request against the scsiweb folder. Privesc: MS14-058 / KiTrap0D.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-granny",
    "name": "Granny",
    "ip": "10.10.10.15",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "IIS 6.0",
      "WebDAV",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Granny",
    "writeupUrl": "https://0xdf.gitlab.io/tags#granny",
    "hint": "Same IIS 6 WebDAV as Grandpa but PUT instead of MOVE. Kernel privesc again.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-october",
    "name": "October",
    "ip": "10.10.10.16",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "October-CMS",
      "Buffer-Overflow",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/October",
    "writeupUrl": "https://0xdf.gitlab.io/tags#october",
    "hint": "OctoberCMS upload filter bypass (php extension tricks). Privesc: CVE-2015-1328 overlayfs.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-brainfuck",
    "name": "Brainfuck",
    "ip": "10.10.10.17",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WordPress",
      "SMTP",
      "Crypto",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Brainfuck",
    "writeupUrl": "https://0xdf.gitlab.io/tags#brainfuck",
    "hint": "HMailServer weak pass + WP OAuth plugin LFI. Decrypt PDF via openssl smime; check putty.reg session.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-lazy",
    "name": "Lazy",
    "ip": "10.10.10.18",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Padding-Oracle",
      "SUID",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Lazy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#lazy",
    "hint": "Custom PHP auth - colliding MD5s (fastcoll) bypass login. Privesc: SUID cache-timer binary.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sneaky",
    "name": "Sneaky",
    "ip": "10.10.10.20",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SQLi",
      "SUID",
      "Buffer-Overflow",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Sneaky",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sneaky",
    "hint": "IPv6-only services - scan with nmap -6. SNMP leaks WPA keys and VPN config details.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-joker",
    "name": "Joker",
    "ip": "10.10.10.21",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "TFTP",
      "Squid",
      "Sudoedit",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Joker",
    "writeupUrl": "https://0xdf.gitlab.io/tags#joker",
    "hint": "Joomla behind Squid on 3128 - pivot inside. TFTP brute config; privesc: chkrootkit 0.49 cron.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-haircut",
    "name": "Haircut",
    "ip": "10.10.10.24",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SSRF",
      "SUID",
      "2017"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Haircut",
    "writeupUrl": "https://0xdf.gitlab.io/tags#haircut",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-holiday",
    "name": "Holiday",
    "ip": "10.10.10.25",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "XSS",
      "SQLi",
      "npm",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Holiday",
    "writeupUrl": "https://0xdf.gitlab.io/tags#holiday",
    "hint": "NodeJS registration bug grants admin. Look for postgres creds; privesc via writable npm path.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bank",
    "name": "Bank",
    "ip": "10.10.10.29",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "FileUpload",
      "etc-passwd",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bank",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bank",
    "hint": "Hidden vhost after hosts-file edit; HTB.jpg hides offset-swapped image. Check SUID binaries.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-europa",
    "name": "Europa",
    "ip": "10.10.10.22",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SQLi",
      "Cron",
      "preg_replace",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Europa",
    "writeupUrl": "https://0xdf.gitlab.io/tags#europa",
    "hint": "SSL SAN cert reveals admin.europa.htb vhost -> SQLi there. Check sudo -l.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-calamity",
    "name": "Calamity",
    "ip": "10.10.10.27",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "LFI",
      "Buffer-Overflow",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Calamity",
    "writeupUrl": "https://0xdf.gitlab.io/tags#calamity",
    "hint": "Admin backup .tar leaks source. Privesc: SUID simplecalc buffer overflow.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-charon",
    "name": "Charon",
    "ip": "10.10.10.31",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SQLi",
      "RSA",
      "2017"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Charon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#charon",
    "hint": "Padding-oracle on custom token (padbuster), then SQLi. Port-knock hidden in DB.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-jail",
    "name": "Jail",
    "ip": "10.10.10.34",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "NFS",
      "Buffer-Overflow",
      "rvim",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Jail",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jail",
    "hint": "Custom jail daemon BOF drops you as low user. Privesc: docker group membership.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-blocky",
    "name": "Blocky",
    "ip": "10.10.10.37",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "WordPress",
      "Java-RE",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Blocky",
    "writeupUrl": "https://0xdf.gitlab.io/tags#blocky",
    "hint": "Decompile the Minecraft .jar plugin - hardcoded creds work everywhere including sudo.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-blue",
    "name": "Blue",
    "ip": "10.10.10.40",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "EternalBlue",
      "MS17-010",
      "SMB",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Blue",
    "writeupUrl": "https://0xdf.gitlab.io/tags#blue",
    "hint": "MS17-010 EternalBlue - metasploit or AutoBlue-MS17-010. Instant SYSTEM.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-nineveh",
    "name": "Nineveh",
    "ip": "10.10.10.43",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Brute-Force",
      "LFI",
      "Chkrootkit",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Nineveh",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nineveh",
    "hint": "PHPinfo page + nineveh.notes brute. Steghide on images; privesc: chkrootkit 0.49 cron.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-apocalyst",
    "name": "Apocalyst",
    "ip": "10.10.10.46",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "WordPress",
      "Brute-Force",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Apocalyst",
    "writeupUrl": "https://0xdf.gitlab.io/tags#apocalyst",
    "hint": "Dirsearch finds images; XML-RPC brute WordPress. Privesc: tar wildcard cron in /opt.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-shrek",
    "name": "Shrek",
    "ip": "10.10.10.47",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Web",
      "Crypto",
      "2017"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Shrek",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shrek",
    "hint": "SNMP leaks everything. Headphones app cmd-injection; run pspy to catch root cron.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-mirai",
    "name": "Mirai",
    "ip": "10.10.10.48",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Default-Creds",
      "Pi-hole",
      "USB",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Mirai",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mirai",
    "hint": "Raspberry Pi - mount USB image, pi:raspberry works. Plaintext password in media backup.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-solidstate",
    "name": "SolidState",
    "ip": "10.10.10.51",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "James-SMTP",
      "Cron",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/SolidState",
    "writeupUrl": "https://0xdf.gitlab.io/tags#solidstate",
    "hint": "James SMTP 2.3.2 remote user creation (CVE-2015-7611). Read mindy mail for creds; /tmp pid trigger privesc.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-mantis",
    "name": "Mantis",
    "ip": "10.10.10.52",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "AD",
      "MSSQL",
      "Orchard-CMS",
      "2017"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Mantis",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mantis",
    "hint": "MantisBT setup page leaks MSSQL creds. xp_cmdshell; then JuicyPotato or hash in logs.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-kotarak",
    "name": "Kotarak",
    "ip": "10.10.10.55",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SSRF",
      "Wget",
      "ntds.dit",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Kotarak",
    "writeupUrl": "https://0xdf.gitlab.io/tags#kotarak",
    "hint": "SSRF via wget reads file:/// - Tomcat manager creds, pivot to Windows. Linux side: applog cron abuse.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-shocker",
    "name": "Shocker",
    "ip": "10.10.10.56",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Shellshock",
      "CGI-BIN",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Shocker",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shocker",
    "hint": "Shellshock on /cgi-bin/user.sh (CVE-2014-6271). Privesc: sudo perl with unrestricted module paths.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-minion",
    "name": "Minion",
    "ip": "10.10.10.57",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SSRF",
      "ICMP-Exfil",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Minion",
    "writeupUrl": "https://0xdf.gitlab.io/tags#minion",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-node",
    "name": "Node",
    "ip": "10.10.10.58",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "API",
      "MongoDB",
      "BOF",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Node",
    "writeupUrl": "https://0xdf.gitlab.io/tags#node",
    "hint": "Source-map leak exposes admin hash (crack online). Privesc: sudo mongodump script hijack.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sense",
    "name": "Sense",
    "ip": "10.10.10.60",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "pfSense",
      "Command-Injection",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Sense",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sense",
    "hint": "pfSense - lowercase default creds + known package RCE for its version.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-enterprise",
    "name": "Enterprise",
    "ip": "10.10.10.61",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WordPress",
      "SQLi",
      "BOF",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Enterprise",
    "writeupUrl": "https://0xdf.gitlab.io/tags#enterprise",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-tally",
    "name": "Tally",
    "ip": "10.10.10.59",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SharePoint",
      "MSSQL",
      "JuicyPotato",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Tally",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tally",
    "hint": "SharePoint docs expose finance creds. MSSQL linked-server pivot; JuicyPotato on service account.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-jeeves",
    "name": "Jeeves",
    "ip": "10.10.10.63",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Jenkins",
      "KeePass",
      "ADS",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Jeeves",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jeeves",
    "hint": "Jenkins Script Console Groovy shell. Root flag in alternate data stream (jeeves.txt:root).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ariekei",
    "name": "Ariekei",
    "ip": "10.10.10.65",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WAF",
      "Docker",
      "ImageTragick",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Ariekei",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ariekei",
    "hint": "Docker Registry v2 on 5000 - pull layers, steghide SSH key from judith image.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-fulcrum",
    "name": "Fulcrum",
    "ip": "10.10.10.62",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "XXE",
      "API",
      "Pivoting",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Fulcrum",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fulcrum",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-inception",
    "name": "Inception",
    "ip": "10.10.10.67",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Squid",
      "WebDAV",
      "TFTP",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Inception",
    "writeupUrl": "https://0xdf.gitlab.io/tags#inception",
    "hint": "Tomcat manager weak creds -> WAR shell -> SSRF/pivot into inner host. Chain both boxes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bashed",
    "name": "Bashed",
    "ip": "10.10.10.68",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "phpbash",
      "Cron",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bashed",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bashed",
    "hint": "phpbash.php already uploaded in /uploads. Privesc: root runs contact.py from /scripts - replace it.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-fluxcapacitor",
    "name": "FluxCapacitor",
    "ip": "10.10.10.69",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WAF-Bypass",
      "sudo",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/FluxCapacitor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fluxcapacitor",
    "hint": "NodeJS template/prototype pollution. Check node binary capabilities (cap_setuid+ep).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-crimestoppers",
    "name": "CrimeStoppers",
    "ip": "10.10.10.80",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "LFI",
      "Mozilla-Profile",
      "Crypto",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/CrimeStoppers",
    "writeupUrl": "https://0xdf.gitlab.io/tags#crimestoppers",
    "hint": "MySQL socket auth as www-data. Nagios plugins folder writable -> root plugin exec.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-nibbles",
    "name": "Nibbles",
    "ip": "10.10.10.75",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Nibbleblog",
      "FileUpload",
      "Sudo",
      "2017"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Nibbles",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nibbles",
    "hint": "Nibbleblog 1.0.3 exploit-db 45961. Privesc: nopasswd sudo on start.sh - append payload.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-nightmare",
    "name": "Nightmare",
    "ip": "10.10.10.71",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "BOF",
      "Regex",
      "2018"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Nightmare",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nightmare",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-chatterbox",
    "name": "Chatterbox",
    "ip": "10.10.10.74",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Achat-BOF",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Chatterbox",
    "writeupUrl": "https://0xdf.gitlab.io/tags#chatterbox",
    "hint": "Achat 0.150 BOF (public exploit, fix bad chars). Privesc: AutoLogon password in winlogon registry.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-falafel",
    "name": "Falafel",
    "ip": "10.10.10.73",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SQLi",
      "PHP-Juggling",
      "Disk",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Falafel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#falafel",
    "hint": "PHP type-juggling login ('' == null). Avatar upload via Content-Type tricks; privesc: SUID gdb.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-aragog",
    "name": "Aragog",
    "ip": "10.10.10.78",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "XXE",
      "WordPress",
      "cron",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Aragog",
    "writeupUrl": "https://0xdf.gitlab.io/tags#aragog",
    "hint": "Guestbook XSS + LFI for Tomcat creds. Linux: clean.sh cron writable by sysadmin group.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-valentine",
    "name": "Valentine",
    "ip": "10.10.10.79",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Heartbleed",
      "OpenSSL",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Valentine",
    "writeupUrl": "https://0xdf.gitlab.io/tags#valentine",
    "hint": "Heartbleed leaks hype_key (XOR hex) + passphrase. Decode, decrypt RSA key, SSH in.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bart",
    "name": "Bart",
    "ip": "10.10.10.81",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "PHP",
      "Log-Poisoning",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bart",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bart",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-stratosphere",
    "name": "Stratosphere",
    "ip": "10.10.10.64",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Apache-Struts",
      "Python",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Stratosphere",
    "writeupUrl": "https://0xdf.gitlab.io/tags#stratosphere",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-celestial",
    "name": "Celestial",
    "ip": "10.10.10.85",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "NodeJS-Deserialization",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Celestial",
    "writeupUrl": "https://0xdf.gitlab.io/tags#celestial",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-silo",
    "name": "Silo",
    "ip": "10.10.10.82",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Windows",
      "Oracle",
      "TNS Listener",
      "odat.py",
      "Database"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Silo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#silo",
    "hint": "Enumerate Oracle TNS listener on port 1521 using odat.py to find SID XE and scott:tiger credentials, then upload webshell via dbms_export_extension or java payload.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-poison",
    "name": "Poison",
    "ip": "10.10.10.84",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "LFI",
      "FreeBSD",
      "VNC",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Poison",
    "writeupUrl": "https://0xdf.gitlab.io/tags#poison",
    "hint": "LFI in browse.php reads logs + charix secret. Root VNC session visible in ps aux (-passwd).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-rabbit",
    "name": "Rabbit",
    "ip": "10.10.10.71",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "OpenEMR",
      "BOF",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Rabbit",
    "writeupUrl": "https://0xdf.gitlab.io/tags#rabbit",
    "hint": "RabbitMQ management CVE chain; MSI installer runs elevated (msiexec payload).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-canape",
    "name": "Canape",
    "ip": "10.10.10.70",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CouchDB",
      "pip",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Canape",
    "writeupUrl": "https://0xdf.gitlab.io/tags#canape",
    "hint": "CouchDB CVE-2017-12635 create admin, _config query_servers RCE. Privesc: sudo pip whitelist.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-olympus",
    "name": "Olympus",
    "ip": "10.10.10.83",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "DNS",
      "Xdebug",
      "Docker",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Olympus",
    "writeupUrl": "https://0xdf.gitlab.io/tags#olympus",
    "hint": "Zend framework LFI chains across vhosts. Enumerate every /etc/hosts entry.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sunday",
    "name": "Sunday",
    "ip": "10.10.10.76",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Solaris",
      "Finger",
      "Sudo",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Sunday",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sunday",
    "hint": "Solaris finger enum (sammy/sunny). Inspect the showmisconfig sudo entry in /usr/adm.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-fighter",
    "name": "Fighter",
    "ip": "10.10.10.72",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SQLi",
      "MSSQL",
      "JuicyPotato",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Fighter",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fighter",
    "hint": "FTP anon -> source review -> SQLite union SQLi. Privesc: sudo python module path hijack.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-tartarsauce",
    "name": "TartarSauce",
    "ip": "10.10.10.88",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "WordPress",
      "Tar-Wildcard",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/TartarSauce",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tartarsauce",
    "hint": "WPScan: Gwolle Guestbook LFI reads wp-config. Then check sudo -l carefully.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-dropzone",
    "name": "Dropzone",
    "ip": "10.10.10.90",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "TFTP",
      "MOF",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Dropzone",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dropzone",
    "hint": "TFTP writable - pull files, push payload; look for SAM/SYSTEM backups.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-devoops",
    "name": "DevOops",
    "ip": "10.10.10.91",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "XXE",
      "Git",
      "SSH",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/DevOops",
    "writeupUrl": "https://0xdf.gitlab.io/tags#devoops",
    "hint": "Struts 2 CVE-2017-5638 jakarta multipart OGNL injection. LSE for kernel privesc.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-smasher",
    "name": "Smasher",
    "ip": "10.10.10.89",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "BOF",
      "Padding-Oracle",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Smasher",
    "writeupUrl": "https://0xdf.gitlab.io/tags#smasher",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bounty",
    "name": "Bounty",
    "ip": "10.10.10.93",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "IIS",
      "web.config-Upload",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bounty",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bounty",
    "hint": "IIS upload filter bypass (web.config/bounty.aspx). JuicyPotato = instant SYSTEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-reel",
    "name": "Reel",
    "ip": "10.10.10.77",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Phishing",
      "AD",
      "GPO",
      "2018"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Reel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#reel",
    "hint": "SMTP relay + RTF CVE-2017-11882 phishing at nico. CLIXML cred decrypt + ADS root.txt.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-jerry",
    "name": "Jerry",
    "ip": "10.10.10.95",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Apache-Tomcat",
      "WAR-Upload",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Jerry",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jerry",
    "hint": "Tomcat Manager tomcat:s3cret on 8080 - deploy WAR. Both flags in one txt file. Freebie.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-reddish",
    "name": "Reddish",
    "ip": "10.10.10.94",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Redis",
      "Rsync",
      "Pivoting",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Reddish",
    "writeupUrl": "https://0xdf.gitlab.io/tags#reddish",
    "hint": "Redis rogue-master RCE, then escape restricted docker via mounted docker.sock.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-active",
    "name": "Active",
    "ip": "10.10.10.100",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "AD",
      "GPP",
      "Kerberoasting",
      "2018"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Active",
    "writeupUrl": "https://0xdf.gitlab.io/tags#active",
    "hint": "SMB null session -> groups.xml GPP cpassword (gpp-decrypt). Kerberoast SVC_TGS via GetUserSPNs.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-waldo",
    "name": "Waldo",
    "ip": "10.10.10.87",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "LFI",
      "SSH",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Waldo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#waldo",
    "hint": "REST API path traversal leaks SSH key. rbash escape, then less/sudo pager tricks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-dab",
    "name": "Dab",
    "ip": "10.10.10.99",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Pivoting",
      "Crypto",
      "2018"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Dab",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dab",
    "hint": "Login response-diffing brute force. LD_LIBRARY_PATH SUID hijack afterwards.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-secnotes",
    "name": "SecNotes",
    "ip": "10.10.10.97",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CSRF",
      "WSL",
      "SMB",
      "2018"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/SecNotes",
    "writeupUrl": "https://0xdf.gitlab.io/tags#secnotes",
    "hint": "SQLi in notes app -> SMB has WSL shortcut. Default WSL = root filesystem access.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-oz",
    "name": "Oz",
    "ip": "10.10.10.96",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SQLi",
      "SSTI",
      "Docker",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Oz",
    "writeupUrl": "https://0xdf.gitlab.io/tags#oz",
    "hint": "SQLi in quotes API + SNMP community strings on UDP 161. Keepass vault cracked with john.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-giddy",
    "name": "Giddy",
    "ip": "10.10.10.104",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SQLi",
      "xp_dirtree",
      "AppLocker",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Giddy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#giddy",
    "hint": "NuGet config leaks Umbraco creds -> Razor snippet RCE. UsoSvc DLL hijack privesc.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ypuffy",
    "name": "Ypuffy",
    "ip": "10.10.10.107",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "OpenBSD",
      "LDAP",
      "CA",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Ypuffy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ypuffy",
    "hint": "OpenBSD LDAP anon gives alice1978 key + doas rules. Follow doas.conf exactly.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-carrier",
    "name": "Carrier",
    "ip": "10.10.10.105",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SNMP",
      "Command-Injection",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Carrier",
    "writeupUrl": "https://0xdf.gitlab.io/tags#carrier",
    "hint": "SNMP reveals BGP config - Quagga prefix-hijack MITM captures FTP credentials.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-access",
    "name": "Access",
    "ip": "10.10.10.98",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "FTP",
      "MDB",
      "Runas",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Access",
    "writeupUrl": "https://0xdf.gitlab.io/tags#access",
    "hint": "mdb-tables dumps Access DB creds -> FTP zip -> runas /savecred executes your payload.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ethereal",
    "name": "Ethereal",
    "ip": "10.10.10.106",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "DNS-Exfil",
      "MSPaint",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Ethereal",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ethereal",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-frolic",
    "name": "Frolic",
    "ip": "10.10.10.111",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "PlaySMS",
      "BOF",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Frolic",
    "writeupUrl": "https://0xdf.gitlab.io/tags#frolic",
    "hint": "PlaySMS searchsploit RCE; privesc via busybox SUID or find -perm -4000.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-zipper",
    "name": "Zipper",
    "ip": "10.10.10.108",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Zabbix-API",
      "Systemctl",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Zipper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#zipper",
    "hint": "Enumerate API endpoints for command injection; docker group escape afterwards.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-curling",
    "name": "Curling",
    "ip": "10.10.10.150",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Joomla",
      "xxd",
      "Sudo",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Curling",
    "writeupUrl": "https://0xdf.gitlab.io/tags#curling",
    "hint": "Header hint points to a wordlist - john rockyou on admin login. Check root cron scripts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-vault",
    "name": "Vault",
    "ip": "10.10.10.109",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Pivoting",
      "GPG",
      "OTP",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Vault",
    "writeupUrl": "https://0xdf.gitlab.io/tags#vault",
    "hint": "HTTPS-only vhost after hosts entry; WebDAV filter bypass; PowerShell history creds.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-redcross",
    "name": "RedCross",
    "ip": "10.10.10.113",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "XSS",
      "SQLi",
      "NSS",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/RedCross",
    "writeupUrl": "https://0xdf.gitlab.io/tags#redcross",
    "hint": "Postgres injection creates users; interactive escalation; check sudo strace entry.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-irked",
    "name": "Irked",
    "ip": "10.10.10.117",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "UnrealIRCd",
      "Steganography",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Irked",
    "writeupUrl": "https://0xdf.gitlab.io/tags#irked",
    "hint": "UnrealIRCd 3.2.8.1 backdoor on 6697. .backup file + LSB steg (pass hackthebox).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bighead",
    "name": "BigHead",
    "ip": "10.10.10.112",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "SSRF",
      "BOF",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/BigHead",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bighead",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-teacher",
    "name": "Teacher",
    "ip": "10.10.10.153",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Moodle",
      "Cron",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Teacher",
    "writeupUrl": "https://0xdf.gitlab.io/tags#teacher",
    "hint": "Moodle math formula injection (eval) as teacher. DB creds often reused for sudo.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-lightweight",
    "name": "Lightweight",
    "ip": "10.10.10.119",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "LDAP-Sniff",
      "Capabilities",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Lightweight",
    "writeupUrl": "https://0xdf.gitlab.io/tags#lightweight",
    "hint": "Any user can SSH. SUID sock_stat sniffs other users plaintext sessions.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-chaos",
    "name": "Chaos",
    "ip": "10.10.10.120",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WordPress",
      "LaTeX",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Chaos",
    "writeupUrl": "https://0xdf.gitlab.io/tags#chaos",
    "hint": "XMPP registration + chat history leaks PDF password. Luks volume inside PDF.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-conceal",
    "name": "Conceal",
    "ip": "10.10.10.116",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "IPSec",
      "SNMP",
      "JuicyPotato",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Conceal",
    "writeupUrl": "https://0xdf.gitlab.io/tags#conceal",
    "hint": "IKE aggressive mode (ike-scan -A) leaks PSK - psk-crack it. IIS potato privesc later.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sizzle",
    "name": "Sizzle",
    "ip": "10.10.10.103",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "AD",
      "ADCS",
      "Kerberoasting",
      "2018"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Sizzle",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sizzle",
    "hint": "Writable SMB + .SCF hash capture via Responder. Client cert for CIFS; kerberoast after.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-help",
    "name": "Help",
    "ip": "10.10.10.121",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HelpDeskZ",
      "Kernel",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Help",
    "writeupUrl": "https://0xdf.gitlab.io/tags#help",
    "hint": "HelpDeskZ 1.0.2 unauthenticated ticket upload. Old kernel - suggester will fire.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-flujab",
    "name": "FluJab",
    "ip": "10.10.10.124",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Ajenti",
      "OpenSSL",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/FluJab",
    "writeupUrl": "https://0xdf.gitlab.io/tags#flujab",
    "hint": "Multi-vhost medical app - PHP object injection + cookie crypto oracle.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ctf",
    "name": "CTF",
    "ip": "10.10.10.122",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "LDAP",
      "OTP",
      "RSA",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/CTF",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ctf",
    "hint": "Python pickle cookie deserialization! Craft pickle RCE payload. python3 cap_setuid later.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-friendzone",
    "name": "FriendZone",
    "ip": "10.10.10.123",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "DNS-Zone",
      "LFI",
      "Python-Hijack",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/FriendZone",
    "writeupUrl": "https://0xdf.gitlab.io/tags#friendzone",
    "hint": "Writable SMB dev share -> PHP include in timestamp.php. Writable site-packages os.py import.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-querier",
    "name": "Querier",
    "ip": "10.10.10.125",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "MSSQL",
      "xp_cmdshell",
      "GPO",
      "2018"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Querier",
    "writeupUrl": "https://0xdf.gitlab.io/tags#querier",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-hackback",
    "name": "Hackback",
    "ip": "10.10.10.128",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "ASPX",
      "WinRM",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Hackback",
    "writeupUrl": "https://0xdf.gitlab.io/tags#hackback",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-netmon",
    "name": "Netmon",
    "ip": "10.10.10.152",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "PRTG",
      "FTP",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Netmon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#netmon",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-fortune",
    "name": "Fortune",
    "ip": "10.10.10.127",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "OpenBSD",
      "RCE",
      "SSH-Cert",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Fortune",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fortune",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-arkham",
    "name": "Arkham",
    "ip": "10.10.10.130",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "JSF-Deserialization",
      "LUKS",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Arkham",
    "writeupUrl": "https://0xdf.gitlab.io/tags#arkham",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-helpline",
    "name": "Helpline",
    "ip": "10.10.10.132",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "ManageEngine",
      "EFS",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Helpline",
    "writeupUrl": "https://0xdf.gitlab.io/tags#helpline",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-lacasadepapel",
    "name": "LaCasaDePapel",
    "ip": "10.10.10.131",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Backdoor",
      "Certificate",
      "Psy",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/LaCasaDePapel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#lacasadepapel",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-kryptos",
    "name": "Kryptos",
    "ip": "10.10.10.129",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SQLi",
      "Crypto",
      "RC4",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Kryptos",
    "writeupUrl": "https://0xdf.gitlab.io/tags#kryptos",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-unattended",
    "name": "Unattended",
    "ip": "10.10.10.126",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SQLi",
      "initrd",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Unattended",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unattended",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-onetwoseven",
    "name": "OneTwoSeven",
    "ip": "10.10.10.133",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SFTP",
      "symlink",
      "APT",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/OneTwoSeven",
    "writeupUrl": "https://0xdf.gitlab.io/tags#onetwoseven",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bastion",
    "name": "Bastion",
    "ip": "10.10.10.134",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Windows",
      "SMB",
      "VHD",
      "SAM Hive",
      "mpart",
      "msoffice"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bastion",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bastion",
    "hint": "Mount anonymous SMB share containing Windows backup .vhd image, attach VHD locally to extract SAM and SYSTEM registry hives, and crack local Administrator hash.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ghoul",
    "name": "Ghoul",
    "ip": "10.10.10.101",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Tomcat",
      "ZipSlip",
      "Pivoting",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Ghoul",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ghoul",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-swagshop",
    "name": "Swagshop",
    "ip": "10.10.10.140",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Magento",
      "Sudo-vi",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Swagshop",
    "writeupUrl": "https://0xdf.gitlab.io/tags#swagshop",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ellingson",
    "name": "Ellingson",
    "ip": "10.10.10.139",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Werkzeug",
      "BOF",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Ellingson",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ellingson",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-luke",
    "name": "Luke",
    "ip": "10.10.10.137",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "API",
      "JWT",
      "Ajenti",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Luke",
    "writeupUrl": "https://0xdf.gitlab.io/tags#luke",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-smasher2",
    "name": "Smasher2",
    "ip": "10.10.10.135",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "WAF-Bypass",
      "mmap",
      "2019"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Smasher2",
    "writeupUrl": "https://0xdf.gitlab.io/tags#smasher2",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-writeup",
    "name": "Writeup",
    "ip": "10.10.10.138",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CMS-Made-Simple",
      "PATH",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Writeup",
    "writeupUrl": "https://0xdf.gitlab.io/tags#writeup",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-chainsaw",
    "name": "Chainsaw",
    "ip": "10.10.10.142",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Domain",
      "Pivoting",
      "2019"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Chainsaw",
    "writeupUrl": "https://0xdf.gitlab.io/tags#chainsaw",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-jarvis",
    "name": "Jarvis",
    "ip": "10.10.10.143",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SQLi",
      "Systemctl",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Jarvis",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jarvis",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-haystack",
    "name": "Haystack",
    "ip": "10.10.10.115",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Elasticsearch",
      "Kibana",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Haystack",
    "writeupUrl": "https://0xdf.gitlab.io/tags#haystack",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-player",
    "name": "Player",
    "ip": "10.10.10.145",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Audio-Processing",
      "2019"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Player",
    "writeupUrl": "https://0xdf.gitlab.io/tags#player",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-craft",
    "name": "Craft",
    "ip": "10.10.10.110",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "API",
      "Git",
      "Eval",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Craft",
    "writeupUrl": "https://0xdf.gitlab.io/tags#craft",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-re",
    "name": "RE",
    "ip": "10.10.10.144",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Zip-Upload",
      "UsoSvc",
      "AD",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/RE",
    "writeupUrl": "https://0xdf.gitlab.io/tags#re",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-safe",
    "name": "Safe",
    "ip": "10.10.10.147",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "BOF",
      "ROP",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Safe",
    "writeupUrl": "https://0xdf.gitlab.io/tags#safe",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-rope",
    "name": "Rope",
    "ip": "10.10.10.148",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "Heap-Exploitation",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Rope",
    "writeupUrl": "https://0xdf.gitlab.io/tags#rope",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-heist",
    "name": "Heist",
    "ip": "10.10.10.149",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Cisco-Config",
      "Lookupsid",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Heist",
    "writeupUrl": "https://0xdf.gitlab.io/tags#heist",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-scavenger",
    "name": "Scavenger",
    "ip": "10.10.10.142",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "DNS",
      "r00tkit",
      "PCAP",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Scavenger",
    "writeupUrl": "https://0xdf.gitlab.io/tags#scavenger",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-networked",
    "name": "Networked",
    "ip": "10.10.10.146",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "FileUpload",
      "Cmd-Inject",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Networked",
    "writeupUrl": "https://0xdf.gitlab.io/tags#networked",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-zetta",
    "name": "Zetta",
    "ip": "10.10.10.156",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "FTP",
      "rsync",
      "PostgreSQL",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Zetta",
    "writeupUrl": "https://0xdf.gitlab.io/tags#zetta",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bitlab",
    "name": "Bitlab",
    "ip": "10.10.10.114",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "GitLab",
      "Git-Hooks",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bitlab",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bitlab",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-wall",
    "name": "Wall",
    "ip": "10.10.10.157",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Centreon",
      "Screen",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Wall",
    "writeupUrl": "https://0xdf.gitlab.io/tags#wall",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bankrobber",
    "name": "Bankrobber",
    "ip": "10.10.10.154",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "XSS",
      "SQLi",
      "BOF",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bankrobber",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bankrobber",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-json",
    "name": "Json",
    "ip": "10.10.10.158",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      ".NET-Deserialization",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Json",
    "writeupUrl": "https://0xdf.gitlab.io/tags#json",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sniper",
    "name": "Sniper",
    "ip": "10.10.10.151",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "RFI",
      "CHM",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Sniper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sniper",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-forest",
    "name": "Forest",
    "ip": "10.10.10.161",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "AS-REP Roasting",
      "Exchange",
      "BloodHound",
      "DCSync"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Forest",
    "writeupUrl": "https://0xdf.gitlab.io/tags#forest",
    "hint": "Enumerate users without authentication via enumdomusers, AS-REP roast sebastien, inspect BloodHound for Exchange Windows Permissions membership, and perform DCSync.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-registry",
    "name": "Registry",
    "ip": "10.10.10.159",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Docker",
      "Git",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Registry",
    "writeupUrl": "https://0xdf.gitlab.io/tags#registry",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-mango",
    "name": "Mango",
    "ip": "10.10.10.162",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "NoSQLi",
      "SUID",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Mango",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mango",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-postman",
    "name": "Postman",
    "ip": "10.10.10.160",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Redis",
      "SSH-Key",
      "Webmin",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Postman",
    "writeupUrl": "https://0xdf.gitlab.io/tags#postman",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ai",
    "name": "AI",
    "ip": "10.10.10.163",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Speech-to-Text",
      "SQLi",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/AI",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ai",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-traverxec",
    "name": "Traverxec",
    "ip": "10.10.10.165",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Nostromo",
      "Journalctl",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Traverxec",
    "writeupUrl": "https://0xdf.gitlab.io/tags#traverxec",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-control",
    "name": "Control",
    "ip": "10.10.10.167",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SQLi",
      "Registry-Services",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Control",
    "writeupUrl": "https://0xdf.gitlab.io/tags#control",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-obscurity",
    "name": "Obscurity",
    "ip": "10.10.10.168",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Python-RE",
      "Custom-Crypto",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Obscurity",
    "writeupUrl": "https://0xdf.gitlab.io/tags#obscurity",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-resolute",
    "name": "Resolute",
    "ip": "10.10.10.169",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "RPC",
      "Password Spray",
      "DNSAdmins",
      "DLL Injection"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Resolute",
    "writeupUrl": "https://0xdf.gitlab.io/tags#resolute",
    "hint": "Find default password Welcome123! in user description via rpcclient, password spray users, find marko in DnsAdmins group, and exploit dnscmd /config /serverlevelplugindll for SYSTEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-playertwo",
    "name": "PlayerTwo",
    "ip": "10.10.10.170",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "Heap",
      "Protobuf",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/PlayerTwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#playertwo",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-openadmin",
    "name": "OpenAdmin",
    "ip": "10.10.10.171",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OpenNetAdmin",
      "Nano-Sudo",
      "2019"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/OpenAdmin",
    "writeupUrl": "https://0xdf.gitlab.io/tags#openadmin",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-monteverde",
    "name": "Monteverde",
    "ip": "10.10.10.172",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Azure AD Connect",
      "Password Spray",
      "MSOL",
      "BloodHound"
    ],
    "certifications": [
      "CRTO",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Monteverde",
    "writeupUrl": "https://0xdf.gitlab.io/tags#monteverde",
    "hint": "Enumerate domain users over RPC, spray username as password to find sabatch credentials, log in via Evil-WinRM, and extract Azure AD Connect sync account (MSOL) cleartext password.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-patents",
    "name": "Patents",
    "ip": "10.10.10.173",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "DOCX",
      "XXE",
      "LFI",
      "2019"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Patents",
    "writeupUrl": "https://0xdf.gitlab.io/tags#patents",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-nest",
    "name": "Nest",
    "ip": "10.10.10.178",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SMB",
      "HQK-Reporting",
      "VB.NET",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Nest",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nest",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-fatty",
    "name": "Fatty",
    "ip": "10.10.10.174",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "Java-GUI",
      "RMI",
      "2019"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Fatty",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fatty",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sauna",
    "name": "Sauna",
    "ip": "10.10.10.175",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "AS-REP Roasting",
      "BloodHound",
      "WinRM",
      "Mimikatz"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Sauna",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sauna",
    "hint": "Gather employee names from 'About Us' page to generate usernames, AS-REP roast fsmith, discover internal registry credentials, and DCSync as svc_loanmanager.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-book",
    "name": "Book",
    "ip": "10.10.10.176",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "XSS",
      "Logrotate",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Book",
    "writeupUrl": "https://0xdf.gitlab.io/tags#book",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-oouch",
    "name": "Oouch",
    "ip": "10.10.10.177",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "OAuth2",
      "API",
      "Pivoting",
      "2019"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Oouch",
    "writeupUrl": "https://0xdf.gitlab.io/tags#oouch",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-multimaster",
    "name": "Multimaster",
    "ip": "10.10.10.179",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "AD",
      "SQLi",
      "DNS-Admin",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Multimaster",
    "writeupUrl": "https://0xdf.gitlab.io/tags#multimaster",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-traceback",
    "name": "Traceback",
    "ip": "10.10.10.181",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Webshell",
      "Lua",
      "motd",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Traceback",
    "writeupUrl": "https://0xdf.gitlab.io/tags#traceback",
    "hint": "A webshell already lives somewhere under /var/www - find it (grep for eval patterns). Privesc: writable update-motd.d runs as root on SSH login.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-remote",
    "name": "Remote",
    "ip": "10.10.10.180",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Umbraco",
      "USOsvc",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Remote",
    "writeupUrl": "https://0xdf.gitlab.io/tags#remote",
    "hint": "TeamViewer creds from public exploit path -> Umbraco CMS panel RCE. Privesc: AdvancedSystemCare service DLL hijack.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-cascade",
    "name": "Cascade",
    "ip": "10.10.10.182",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "LDAP",
      "SQLite",
      "VNC",
      "AD Recycle Bin"
    ],
    "certifications": [
      "CRTO",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Cascade",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cascade",
    "hint": "Find encrypted LDAP password in SQLite database audit.db, decrypt reversible password with Python, inspect AD Recycle Bin to restore deleted user, and decrypt VNC password.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-forwardslash",
    "name": "ForwardSlash",
    "ip": "10.10.10.183",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "LFI",
      "Crypto",
      "LUKS",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/ForwardSlash",
    "writeupUrl": "https://0xdf.gitlab.io/tags#forwardslash",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-servmon",
    "name": "ServMon",
    "ip": "10.10.10.184",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "NVMS",
      "NSClient++",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/ServMon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#servmon",
    "hint": "NVMS-1000 directory traversal reads Nadia creds -> FTP for Leah SSH key. Privesc: NSClient++ API script upload as SYSTEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-magic",
    "name": "Magic",
    "ip": "10.10.10.185",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SQLi",
      "Upload-Bypass",
      "SUID",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Magic",
    "writeupUrl": "https://0xdf.gitlab.io/tags#magic",
    "hint": "SQLi bypasses admin login; image upload filter bypass via GIF header + PHP. DB creds become theseus; root via mysql info-schema trick.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-quick",
    "name": "Quick",
    "ip": "10.10.10.186",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTTP3",
      "ESI",
      "Printer",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Quick",
    "writeupUrl": "https://0xdf.gitlab.io/tags#quick",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-admirer",
    "name": "Admirer",
    "ip": "10.10.10.187",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Adminer",
      "Python-Hijack",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Admirer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#admirer",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-cache",
    "name": "Cache",
    "ip": "10.10.10.188",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "OpenEMR",
      "Memcached",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Cache",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cache",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-travel",
    "name": "Travel",
    "ip": "10.10.10.189",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WordPress",
      "SSRF",
      "Memcached",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Travel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#travel",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-dyplesher",
    "name": "Dyplesher",
    "ip": "10.10.10.190",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Minecraft",
      "Memcached",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Dyplesher",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dyplesher",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-blunder",
    "name": "Blunder",
    "ip": "10.10.10.191",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Bludit",
      "Sudo-Bypass",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Blunder",
    "writeupUrl": "https://0xdf.gitlab.io/tags#blunder",
    "hint": "Bludit brute-force protection bypass (CVE-2019-17240), then Bludit 3.9.2 image upload RCE (CVE-2019-16113). Password reuse gets root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-blackfield",
    "name": "Blackfield",
    "ip": "10.10.10.192",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "RPC",
      "AS-REP Roasting",
      "SeBackupPrivilege",
      "BloodHound"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Blackfield",
    "writeupUrl": "https://0xdf.gitlab.io/tags#blackfield",
    "hint": "Enumerate usernames via RPC over SMB, AS-REP roast audit2020 account, inspect BloodHound for forceChangePassword right on support, and abuse SeBackupPrivilege to copy NTDS.dit.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-fuse",
    "name": "Fuse",
    "ip": "10.10.10.193",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "AD",
      "Printer",
      "Password-Reset",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Fuse",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fuse",
    "hint": "RPC null sessions enumerate usernames + password policy. Kerberoast the printer service account; check print-driver privesc paths.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-tabby",
    "name": "Tabby",
    "ip": "10.10.10.194",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Tomcat-LFI",
      "LXD",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Tabby",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tabby",
    "hint": "Tomcat host-manager creds hide inside a leaked backup zip (password cracked). Follow the credential chain through files.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ropetwo",
    "name": "RopeTwo",
    "ip": "10.10.10.196",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "V8",
      "Kernel",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/RopeTwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ropetwo",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-intense",
    "name": "Intense",
    "ip": "10.10.10.195",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SQLi",
      "Crypto",
      "SNMP-BOF",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Intense",
    "writeupUrl": "https://0xdf.gitlab.io/tags#intense",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sneakymailer",
    "name": "SneakyMailer",
    "ip": "10.10.10.197",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Linux",
      "SMTP",
      "Phishing",
      "IMAP",
      "PyPI",
      "Package Hijack"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/SneakyMailer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sneakymailer",
    "hint": "Enumerate email addresses with smtp-user-enum, send phishing email with listener URL to capture clicked credentials, access IMAP mailbox, and upload malicious Python module to local PyPI server.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-buff",
    "name": "Buff",
    "ip": "10.10.10.198",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Gym-Management",
      "CloudMe",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Buff",
    "writeupUrl": "https://0xdf.gitlab.io/tags#buff",
    "hint": "Gym upload filter bypass first, then CloudMe 1.11.2 sync BOF (CVE-2018-6892) running as shaun escalates.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-openkeys",
    "name": "OpenKeyS",
    "ip": "10.10.10.199",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "OpenBSD-Auth-Bypass",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/OpenKeyS",
    "writeupUrl": "https://0xdf.gitlab.io/tags#openkeys",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-unbalanced",
    "name": "Unbalanced",
    "ip": "10.10.10.200",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Squid",
      "XPath",
      "Pi-hole",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Unbalanced",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unbalanced",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-laser",
    "name": "Laser",
    "ip": "10.10.10.201",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "gRPC",
      "Printer",
      "Pivoting",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Laser",
    "writeupUrl": "https://0xdf.gitlab.io/tags#laser",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-worker",
    "name": "Worker",
    "ip": "10.10.10.203",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SVN",
      "Azure-DevOps",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Worker",
    "writeupUrl": "https://0xdf.gitlab.io/tags#worker",
    "hint": "Azure DevOps pipeline abuse -> build-agent RCE as natbat. SVN history leaks creds; RabbitMQ install-dir hijack for SYSTEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-omni",
    "name": "Omni",
    "ip": "10.10.10.204",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Windows-IoT",
      "SirepRAT",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Omni",
    "writeupUrl": "https://0xdf.gitlab.io/tags#omni",
    "hint": "Windows IoT Core - Sirep/WCN API (default admin:p@ssw0rd) launches arbitrary processes. Shell is SYSTEM-adjacent already.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-feline",
    "name": "Feline",
    "ip": "10.10.10.205",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Tomcat",
      "Docker",
      "SaltStack",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Feline",
    "writeupUrl": "https://0xdf.gitlab.io/tags#feline",
    "hint": "JDWP (Java Debug Wire Protocol) on 8000 = pre-auth RCE. Then Salt API CVEs (2020-16846/11651) for root on the container host.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-passage",
    "name": "Passage",
    "ip": "10.10.10.206",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CuteNews-RCE",
      "USBCreator",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Passage",
    "writeupUrl": "https://0xdf.gitlab.io/tags#passage",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-compromised",
    "name": "Compromised",
    "ip": "10.10.10.207",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Backdoor",
      "strace",
      "LXD",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Compromised",
    "writeupUrl": "https://0xdf.gitlab.io/tags#compromised",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-crossfit",
    "name": "CrossFit",
    "ip": "10.10.10.208",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "XSS",
      "CSRF",
      "FTP",
      "Hashcat",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/CrossFit",
    "writeupUrl": "https://0xdf.gitlab.io/tags#crossfit",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-doctor",
    "name": "Doctor",
    "ip": "10.10.10.209",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SSTI",
      "Splunk",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Doctor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#doctor",
    "hint": "SVG upload XXE leaks robert env vars -> Splunk instance -> sudo reset_root_perms quirk. Read /var/log carefully too.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-reel2",
    "name": "Reel2",
    "ip": "10.10.10.210",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Phishing",
      "PowerShell-Constrained",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Reel2",
    "writeupUrl": "https://0xdf.gitlab.io/tags#reel2",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-jewel",
    "name": "Jewel",
    "ip": "10.10.10.211",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Ruby-Deserialization",
      "2FA",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Jewel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jewel",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bucket",
    "name": "Bucket",
    "ip": "10.10.10.212",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "AWS-S3",
      "DynamoDB",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bucket",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bucket",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-time",
    "name": "Time",
    "ip": "10.10.10.214",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Linux",
      "Java",
      "Jackson Deserialization",
      "CVE-2020-24616",
      "Systemd"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Time",
    "writeupUrl": "https://0xdf.gitlab.io/tags#time",
    "hint": "Exploit Jackson polymorphic deserialization (CVE-2020-24616) in online JSON beautifier tool using SSRF/JNDI payload, and abuse writable timer script executed by root systemd service.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-laboratory",
    "name": "Laboratory",
    "ip": "10.10.10.216",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "GitLab",
      "Docker",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Laboratory",
    "writeupUrl": "https://0xdf.gitlab.io/tags#laboratory",
    "hint": "GitLab CE 12.8.1 - CVE-2020-10977 file-read + issue API RCE combo. Dexter has docker group = instant root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-luanne",
    "name": "Luanne",
    "ip": "10.10.10.218",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "NetBSD",
      "Lua",
      "httpd",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Luanne",
    "writeupUrl": "https://0xdf.gitlab.io/tags#luanne",
    "hint": "OpenBSD nginx path traversal -> .htpasswd crack -> doas pkg_add CVE-2019-19520 privilege escalation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ready",
    "name": "Ready",
    "ip": "10.10.10.220",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "GitLab",
      "Docker-Escape",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Ready",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ready",
    "hint": "Kubernetes nginx-ingress CVE-2021-25742 snippet annotation -> SSRF/RCE -> service-account token -> node escape.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-attended",
    "name": "Attended",
    "ip": "10.10.10.221",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "OpenBSD",
      "SSH-Agent",
      "vim",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Attended",
    "writeupUrl": "https://0xdf.gitlab.io/tags#attended",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-delivery",
    "name": "Delivery",
    "ip": "10.10.10.222",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Mattermost",
      "Hashcat",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Delivery",
    "writeupUrl": "https://0xdf.gitlab.io/tags#delivery",
    "hint": "Helpdesk ticket gives you a @delivery.htb email - use it to self-register on Mattermost. Creds leak in chat + DB config.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-tenet",
    "name": "Tenet",
    "ip": "10.10.10.223",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "WordPress",
      "PHP-Deserialization",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Tenet",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tenet",
    "hint": "PHP str_replace callback injection writes PHP via base64 field. Root: race-condition symlink in a bash backup cron.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-tentacle",
    "name": "Tentacle",
    "ip": "10.10.10.224",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Squid",
      "SMTP",
      "Kerberos",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Tentacle",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tentacle",
    "hint": "FreeBSD + SNMP community strings reveal Zabbix agent details - UserParameter command injection runs as root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sink",
    "name": "Sink",
    "ip": "10.10.10.225",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTTP-Smuggling",
      "AWS",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Sink",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sink",
    "hint": "Cookie encrypted with hardcoded AES-CBC key - decrypt for Gitea creds, pivot to Jenkins secrets store for root material.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-scriptkiddie",
    "name": "ScriptKiddie",
    "ip": "10.10.10.226",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "msfvenom-APK",
      "Sudo",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/ScriptKiddie",
    "writeupUrl": "https://0xdf.gitlab.io/tags#scriptkiddie",
    "hint": "msfvenom APK template injection (searchsploit) gets kid. Privesc: pwn user can sudo msfconsole - IRB = root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ophiuchi",
    "name": "Ophiuchi",
    "ip": "10.10.10.227",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "YAML-Deserialization",
      "WASM",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Ophiuchi",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ophiuchi",
    "hint": "SnakeYAML deserialization in the parser = RCE. Privesc: sudo genie quirks (escape restricted shell via environment).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-breadcrumbs",
    "name": "Breadcrumbs",
    "ip": "10.10.10.228",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "PHP",
      "JWT",
      "Sticky-Notes",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Breadcrumbs",
    "writeupUrl": "https://0xdf.gitlab.io/tags#breadcrumbs",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-spectra",
    "name": "Spectra",
    "ip": "10.10.10.229",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "WordPress",
      "ChromeOS",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Spectra",
    "writeupUrl": "https://0xdf.gitlab.io/tags#spectra",
    "hint": "WordPress theme/plugin upload on Asite + wp-config DB creds reused for SSH kate. Privesc: initctl upstart job injection.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-thenotebook",
    "name": "TheNotebook",
    "ip": "10.10.10.230",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "JWT",
      "Docker-Escape",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/TheNotebook",
    "writeupUrl": "https://0xdf.gitlab.io/tags#thenotebook",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-proper",
    "name": "Proper",
    "ip": "10.10.10.231",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SQLi",
      "SSRF",
      "RFI",
      "Go",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Proper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#proper",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-crossfittwo",
    "name": "CrossFitTwo",
    "ip": "10.10.10.232",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WebSocket",
      "UnixSocket",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/CrossFitTwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#crossfittwo",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-armageddon",
    "name": "Armageddon",
    "ip": "10.10.10.233",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Drupalgeddon2",
      "Snap",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Armageddon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#armageddon",
    "hint": "Drupalgeddon2 (CVE-2018-7600) SQLi/RCE. MySQL creds -> snapd dirty_sock (CVE-2019-7304) local privesc.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-schooled",
    "name": "Schooled",
    "ip": "10.10.10.234",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Moodle-XSS",
      "FreeBSD",
      "pkg",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Schooled",
    "writeupUrl": "https://0xdf.gitlab.io/tags#schooled",
    "hint": "Moodle REST enrolment mass-assignment makes you teacher -> calc formula eval RCE. FreeBSD: read sudo rules carefully.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-unobtainium",
    "name": "Unobtainium",
    "ip": "10.10.10.235",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Node",
      "K8s",
      "Prototype",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Unobtainium",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unobtainium",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-toolbox",
    "name": "Toolbox",
    "ip": "10.10.10.236",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Docker",
      "JuicyPotato",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Toolbox",
    "writeupUrl": "https://0xdf.gitlab.io/tags#toolbox",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-atom",
    "name": "Atom",
    "ip": "10.10.10.237",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Electron-Update",
      "SMB",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Atom",
    "writeupUrl": "https://0xdf.gitlab.io/tags#atom",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-monitors",
    "name": "Monitors",
    "ip": "10.10.10.238",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WordPress",
      "Cacti",
      "Docker",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Monitors",
    "writeupUrl": "https://0xdf.gitlab.io/tags#monitors",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-love",
    "name": "Love",
    "ip": "10.10.10.239",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SSRF",
      "AlwaysInstallElevated",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Love",
    "writeupUrl": "https://0xdf.gitlab.io/tags#love",
    "hint": "Voting System using PHP - unauthenticated RCE (searchsploit 50824). Privesc: AlwaysInstallElevated is enabled - craft an MSI.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-pivotapi",
    "name": "PivotAPI",
    "ip": "10.10.10.240",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "AD",
      "MSSQL",
      "Pivoting",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/PivotAPI",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pivotapi",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-pit",
    "name": "Pit",
    "ip": "10.10.11.10",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SNMP",
      "SeedDMS",
      "cockpit",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Pit",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pit",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-knife",
    "name": "Knife",
    "ip": "10.10.10.242",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "PHP-8.1.0-dev",
      "Sudo",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Knife",
    "writeupUrl": "https://0xdf.gitlab.io/tags#knife",
    "hint": "PHP 8.1.0-dev backdoor: send header User-Agentt with zerodiumsystem(command). Privesc: sudo /usr/bin/knife exec.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-spider",
    "name": "Spider",
    "ip": "10.10.10.243",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Flask",
      "SSTI",
      "XXE",
      "SQLi",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Spider",
    "writeupUrl": "https://0xdf.gitlab.io/tags#spider",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-cap",
    "name": "Cap",
    "ip": "10.10.10.245",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "IDOR",
      "PCAP",
      "Capabilities",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Cap",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cap",
    "hint": "IDOR on /data/<n> pcap downloads - stream zero contains plaintext creds. Privesc: python3 binary has cap_setuid capability.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-dynstr",
    "name": "Dynstr",
    "ip": "10.10.10.244",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "DNS-Update",
      "Cmd-Inject",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Dynstr",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dynstr",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-static",
    "name": "Static",
    "ip": "10.10.10.246",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Xiphos",
      "Pivoting",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Static",
    "writeupUrl": "https://0xdf.gitlab.io/tags#static",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-explore",
    "name": "Explore",
    "ip": "10.10.10.247",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Android",
      "ES-File-Explorer",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Explore",
    "writeupUrl": "https://0xdf.gitlab.io/tags#explore",
    "hint": "Android box - pull the APK, decompile in jadx-gui, hardcoded creds inside. ADB over network connects as root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-intelligence",
    "name": "Intelligence",
    "ip": "10.10.10.248",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "PDF Metadata",
      "AD CS",
      "ESC1",
      "Certipy",
      "BloodHound"
    ],
    "certifications": [
      "CRTO",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Intelligence",
    "writeupUrl": "https://0xdf.gitlab.io/tags#intelligence",
    "hint": "Download public PDF files with script, extract creator usernames and default passwords from metadata, inject DNS records to intercept service traffic, and abuse AD CS ESC1 certificate template.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-seal",
    "name": "Seal",
    "ip": "10.10.11.10",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Nginx",
      "Tomcat",
      "Ansible",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Seal",
    "writeupUrl": "https://0xdf.gitlab.io/tags#seal",
    "hint": "Nginx off-by-slash alias traversal exposes Tomcat manager (git repo leak). Upload WAR; ansible become_pass file for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bountyhunter",
    "name": "BountyHunter",
    "ip": "10.10.11.100",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "XXE",
      "Python-Sudo",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/BountyHunter",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bountyhunter",
    "hint": "XXE in the bug-report submitter (php://filter) leaks db creds. Privesc: sudo ticketValidator.py - unsafe YAML load.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-pikaboo",
    "name": "Pikaboo",
    "ip": "10.10.10.249",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Nginx",
      "LFI",
      "LDAP",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Pikaboo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pikaboo",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-writer",
    "name": "Writer",
    "ip": "10.10.11.101",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SQLi",
      "SMB",
      "apt",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Writer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#writer",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-anubis",
    "name": "Anubis",
    "ip": "10.10.11.102",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "ADCS",
      "Certify",
      "Pivoting",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Anubis",
    "writeupUrl": "https://0xdf.gitlab.io/tags#anubis",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-developer",
    "name": "Developer",
    "ip": "10.10.11.103",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Django",
      "Sentry",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Developer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#developer",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-previse",
    "name": "Previse",
    "ip": "10.10.10.252",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Command-Injection",
      "PATH",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Previse",
    "writeupUrl": "https://0xdf.gitlab.io/tags#previse",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-horizontall",
    "name": "Horizontall",
    "ip": "10.10.11.105",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Strapi-RCE",
      "Laravel",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Horizontall",
    "writeupUrl": "https://0xdf.gitlab.io/tags#horizontall",
    "hint": "Strapi password-reset + CVE-2019-18818, weak JWT secret, then Laravel Ignition CVE-2021-3129 RCE for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-earlyaccess",
    "name": "EarlyAccess",
    "ip": "10.10.11.110",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "XSS",
      "SQLi",
      "Docker",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/EarlyAccess",
    "writeupUrl": "https://0xdf.gitlab.io/tags#earlyaccess",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-forge",
    "name": "Forge",
    "ip": "10.10.11.111",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SSRF",
      "SSH",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Forge",
    "writeupUrl": "https://0xdf.gitlab.io/tags#forge",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-gobox",
    "name": "Gobox",
    "ip": "10.10.11.113",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SSTI",
      "AWS",
      "SMTP",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Gobox",
    "writeupUrl": "https://0xdf.gitlab.io/tags#gobox",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-stacked",
    "name": "Stacked",
    "ip": "10.10.11.112",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "AWS-LocalStack",
      "Lambda",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Stacked",
    "writeupUrl": "https://0xdf.gitlab.io/tags#stacked",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-validation",
    "name": "Validation",
    "ip": "10.10.11.116",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SQLi",
      "RCE",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Validation",
    "writeupUrl": "https://0xdf.gitlab.io/tags#validation",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bolt",
    "name": "Bolt",
    "ip": "10.10.11.114",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Docker",
      "SSTI",
      "PGP",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bolt",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bolt",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-driver",
    "name": "Driver",
    "ip": "10.10.10.11",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Printer",
      "PrintNightmare",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Driver",
    "writeupUrl": "https://0xdf.gitlab.io/tags#driver",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-hancliffe",
    "name": "Hancliffe",
    "ip": "10.10.11.115",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SSTI",
      "BOF",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Hancliffe",
    "writeupUrl": "https://0xdf.gitlab.io/tags#hancliffe",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-devzat",
    "name": "Devzat",
    "ip": "10.10.11.118",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Git",
      "InfluxDB",
      "Chat",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Devzat",
    "writeupUrl": "https://0xdf.gitlab.io/tags#devzat",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-overflow",
    "name": "Overflow",
    "ip": "10.10.11.119",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SQLi",
      "ExifTool",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Overflow",
    "writeupUrl": "https://0xdf.gitlab.io/tags#overflow",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-antique",
    "name": "Antique",
    "ip": "10.10.11.107",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SNMP",
      "CUPS",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Antique",
    "writeupUrl": "https://0xdf.gitlab.io/tags#antique",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-return",
    "name": "Return",
    "ip": "10.10.10.11",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Printer",
      "Server-Operators",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Return",
    "writeupUrl": "https://0xdf.gitlab.io/tags#return",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-secret",
    "name": "Secret",
    "ip": "10.10.11.120",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "JWT",
      "SUID-coredump",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Secret",
    "writeupUrl": "https://0xdf.gitlab.io/tags#secret",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-toby",
    "name": "Toby",
    "ip": "10.10.11.121",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SSH",
      "Password-Crack",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Toby",
    "writeupUrl": "https://0xdf.gitlab.io/tags#toby",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-shibboleth",
    "name": "Shibboleth",
    "ip": "10.10.11.124",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Zabbix",
      "IPMI",
      "MariaDB",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Shibboleth",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shibboleth",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-nunchucks",
    "name": "Nunchucks",
    "ip": "10.10.11.122",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SSTI",
      "AppArmor",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Nunchucks",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nunchucks",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-unicode",
    "name": "Unicode",
    "ip": "10.10.11.126",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "JWT",
      "Unicode",
      "pywal",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Unicode",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unicode",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-backdoor",
    "name": "Backdoor",
    "ip": "10.10.11.125",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "WordPress",
      "LFI",
      "Screen",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Backdoor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#backdoor",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-fingerprint",
    "name": "Fingerprint",
    "ip": "10.10.11.127",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HQL-Injection",
      "Java",
      "2021"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Fingerprint",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fingerprint",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-timing",
    "name": "Timing",
    "ip": "10.10.11.135",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "PHP-LFI",
      "Mass-Assignment",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Timing",
    "writeupUrl": "https://0xdf.gitlab.io/tags#timing",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-search",
    "name": "Search",
    "ip": "10.10.11.129",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "AD",
      "Excel",
      "GMSA",
      "Cert",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Search",
    "writeupUrl": "https://0xdf.gitlab.io/tags#search",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-pandora",
    "name": "Pandora",
    "ip": "10.10.11.136",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Pandora-FMS",
      "SQLi",
      "SUID",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Pandora",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pandora",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-admirertoo",
    "name": "AdmirerToo",
    "ip": "10.10.11.137",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Adminer",
      "SSRF",
      "OpenCATS",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/AdmirerToo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#admirertoo",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-meta",
    "name": "Meta",
    "ip": "10.10.11.140",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "ExifTool",
      "ImageMagick",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Meta",
    "writeupUrl": "https://0xdf.gitlab.io/tags#meta",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-scanned",
    "name": "Scanned",
    "ip": "10.10.11.141",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Port-Knocking",
      "Sandbox",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Scanned",
    "writeupUrl": "https://0xdf.gitlab.io/tags#scanned",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-paper",
    "name": "Paper",
    "ip": "10.10.11.143",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "WordPress-Draft",
      "RocketChat",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Paper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#paper",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-flustered",
    "name": "Flustered",
    "ip": "10.10.11.131",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "GlusterFS",
      "MongoDB",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Flustered",
    "writeupUrl": "https://0xdf.gitlab.io/tags#flustered",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-acute",
    "name": "Acute",
    "ip": "10.10.11.145",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "PowerShell",
      "OPSEC",
      "DACL",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Acute",
    "writeupUrl": "https://0xdf.gitlab.io/tags#acute",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-undetected",
    "name": "Undetected",
    "ip": "10.10.11.146",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "PHP",
      "Backdoor",
      "Apache",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Undetected",
    "writeupUrl": "https://0xdf.gitlab.io/tags#undetected",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-epsilon",
    "name": "Epsilon",
    "ip": "10.10.11.134",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Git",
      "AWS-Lambda",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Epsilon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#epsilon",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-steamcloud",
    "name": "SteamCloud",
    "ip": "10.10.11.133",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Kubernetes",
      "K8s-API",
      "2022"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/SteamCloud",
    "writeupUrl": "https://0xdf.gitlab.io/tags#steamcloud",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-routerspace",
    "name": "RouterSpace",
    "ip": "10.10.11.148",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "APK",
      "Cmd-Inject",
      "Sudo",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/RouterSpace",
    "writeupUrl": "https://0xdf.gitlab.io/tags#routerspace",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-goodgames",
    "name": "GoodGames",
    "ip": "10.10.10.11",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SQLi",
      "SSTI",
      "Docker-Escape",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/GoodGames",
    "writeupUrl": "https://0xdf.gitlab.io/tags#goodgames",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-object",
    "name": "Object",
    "ip": "10.10.11.132",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Jenkins",
      "AD",
      "Firewall",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Object",
    "writeupUrl": "https://0xdf.gitlab.io/tags#object",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-phoenix",
    "name": "Phoenix",
    "ip": "10.10.11.149",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WordPress",
      "Redis",
      "Rsync",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Phoenix",
    "writeupUrl": "https://0xdf.gitlab.io/tags#phoenix",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-catch",
    "name": "Catch",
    "ip": "10.10.11.150",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Cachet",
      "APK",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Catch",
    "writeupUrl": "https://0xdf.gitlab.io/tags#catch",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-perspective",
    "name": "Perspective",
    "ip": "10.10.11.151",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      ".NET",
      "Padding-Oracle",
      "AD",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Perspective",
    "writeupUrl": "https://0xdf.gitlab.io/tags#perspective",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-timelapse",
    "name": "Timelapse",
    "ip": "10.10.10.11",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "LAPS",
      "PFX",
      "Certificate",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Timelapse",
    "writeupUrl": "https://0xdf.gitlab.io/tags#timelapse",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-retired",
    "name": "Retired",
    "ip": "10.10.11.154",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Cacti",
      "RCE",
      "Sudo",
      "2022"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Retired",
    "writeupUrl": "https://0xdf.gitlab.io/tags#retired",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-talkative",
    "name": "Talkative",
    "ip": "10.10.11.155",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "RocketChat",
      "Jamovi",
      "Docker",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Talkative",
    "writeupUrl": "https://0xdf.gitlab.io/tags#talkative",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-hathor",
    "name": "Hathor",
    "ip": "10.10.11.147",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "AD",
      "ADCS",
      "DPAPI",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Hathor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#hathor",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-late",
    "name": "Late",
    "ip": "10.10.11.156",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Flask-OCR",
      "SSTI",
      "PATH",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Late",
    "writeupUrl": "https://0xdf.gitlab.io/tags#late",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-overgraph",
    "name": "OverGraph",
    "ip": "10.10.11.157",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CSRF",
      "FFmpeg",
      "SSH",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/OverGraph",
    "writeupUrl": "https://0xdf.gitlab.io/tags#overgraph",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-noter",
    "name": "Noter",
    "ip": "10.10.11.160",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Flask",
      "FTP",
      "MySQL-RCE",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Noter",
    "writeupUrl": "https://0xdf.gitlab.io/tags#noter",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-response",
    "name": "Response",
    "ip": "10.10.11.163",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "mDNS",
      "LDAP",
      "LUKS",
      "Chat",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Response",
    "writeupUrl": "https://0xdf.gitlab.io/tags#response",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-opensource",
    "name": "OpenSource",
    "ip": "10.10.11.164",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Git",
      ".env",
      "Hooks",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/OpenSource",
    "writeupUrl": "https://0xdf.gitlab.io/tags#opensource",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-seventeen",
    "name": "Seventeen",
    "ip": "10.10.11.165",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Exam-Management",
      "Docker",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Seventeen",
    "writeupUrl": "https://0xdf.gitlab.io/tags#seventeen",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-streamio",
    "name": "StreamIO",
    "ip": "10.10.11.158",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SQLi",
      "Firefox-Creds",
      "LAPS",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/StreamIO",
    "writeupUrl": "https://0xdf.gitlab.io/tags#streamio",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-scrambled",
    "name": "Scrambled",
    "ip": "10.10.11.168",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Kerberos",
      "MSSQL",
      "Deserialization",
      "Silver Ticket"
    ],
    "certifications": [
      "CRTO",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Scrambled",
    "writeupUrl": "https://0xdf.gitlab.io/tags#scrambled",
    "hint": "Find NTLM hash in network packet capture, crack with hashcat, authenticate to MSSQL service over Kerberos, forge a Silver Ticket, and trigger .NET binary formatter deserialization.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-trick",
    "name": "Trick",
    "ip": "10.10.11.166",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "DNS",
      "LFI",
      "fail2ban",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Trick",
    "writeupUrl": "https://0xdf.gitlab.io/tags#trick",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-carpediem",
    "name": "Carpediem",
    "ip": "10.10.11.167",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Backdrop-CMS",
      "Docker",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Carpediem",
    "writeupUrl": "https://0xdf.gitlab.io/tags#carpediem",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-faculty",
    "name": "Faculty",
    "ip": "10.10.11.169",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SQLi",
      "mPDF",
      "meta-git",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Faculty",
    "writeupUrl": "https://0xdf.gitlab.io/tags#faculty",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-redpanda",
    "name": "RedPanda",
    "ip": "10.10.11.170",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SSTI",
      "XXE",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/RedPanda",
    "writeupUrl": "https://0xdf.gitlab.io/tags#redpanda",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-shared",
    "name": "Shared",
    "ip": "10.10.11.172",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SQLi",
      "Redis",
      "CVE-2022-0543",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Shared",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shared",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-support",
    "name": "Support",
    "ip": "10.10.10.11",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "AD",
      "LDAP",
      ".NET-RE",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Support",
    "writeupUrl": "https://0xdf.gitlab.io/tags#support",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-moderators",
    "name": "Moderators",
    "ip": "10.10.11.173",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "WordPress",
      "VHD",
      "Unity-RE",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Moderators",
    "writeupUrl": "https://0xdf.gitlab.io/tags#moderators",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-outdated",
    "name": "Outdated",
    "ip": "10.10.11.175",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Follina",
      "Shadow-Credentials",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Outdated",
    "writeupUrl": "https://0xdf.gitlab.io/tags#outdated",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-health",
    "name": "Health",
    "ip": "10.10.11.176",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SSRF",
      "Gogs",
      "Cron",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Health",
    "writeupUrl": "https://0xdf.gitlab.io/tags#health",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-updown",
    "name": "UpDown",
    "ip": "10.10.11.177",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "PHP-disable_functions",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/UpDown",
    "writeupUrl": "https://0xdf.gitlab.io/tags#updown",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-shoppy",
    "name": "Shoppy",
    "ip": "10.10.11.180",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "NoSQLi",
      "Docker",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Shoppy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shoppy",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-ambassador",
    "name": "Ambassador",
    "ip": "10.10.11.183",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Grafana-LFI",
      "Consul",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Ambassador",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ambassador",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-photobomb",
    "name": "Photobomb",
    "ip": "10.10.11.182",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Command-Injection",
      "PATH",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Photobomb",
    "writeupUrl": "https://0xdf.gitlab.io/tags#photobomb",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-rainyday",
    "name": "RainyDay",
    "ip": "10.10.11.184",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "API",
      "Python-Jail",
      "2022"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/RainyDay",
    "writeupUrl": "https://0xdf.gitlab.io/tags#rainyday",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-squashed",
    "name": "Squashed",
    "ip": "10.10.11.191",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "NFS",
      "X11-Screen-Capture",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Squashed",
    "writeupUrl": "https://0xdf.gitlab.io/tags#squashed",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-meow",
    "name": "Meow",
    "ip": "10.129.1.1",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 0",
      "Telnet",
      "Default Credentials",
      "Recon"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#meow",
    "hint": "Connect to open Telnet port 23 and log in with user 'root' without password.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-fawn",
    "name": "Fawn",
    "ip": "10.129.1.2",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 0",
      "FTP",
      "Anonymous Login"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fawn",
    "hint": "Authenticate via FTP on port 21 as 'anonymous' with blank password and retrieve the flag.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-dancing",
    "name": "Dancing",
    "ip": "10.129.1.3",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 0",
      "SMB",
      "Share Enumeration",
      "smbclient"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dancing",
    "hint": "Enumerate exposed SMB shares with smbclient -L and connect into the WorkShares directory anonymously.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-redeemer",
    "name": "Redeemer",
    "ip": "10.129.1.4",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 0",
      "Redis",
      "Database",
      "Unauthenticated"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#redeemer",
    "hint": "Connect to Redis port 6379 with redis-cli -h {TARGET_IP}, use INFO to check keys, and query keys *.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-explosion",
    "name": "Explosion",
    "ip": "10.129.1.5",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 0",
      "RDP",
      "Remote Desktop",
      "Default Credentials"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#explosion",
    "hint": "Connect to Windows RDP port 3389 with xfreerdp using Administrator account without password.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-preignition",
    "name": "Preignition",
    "ip": "10.129.1.6",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTTP",
      "Admin-Bypass"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Preignition",
    "writeupUrl": "https://0xdf.gitlab.io/tags#preignition",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-mongod",
    "name": "Mongod",
    "ip": "10.129.1.7",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "MongoDB",
      "No-Auth"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Mongod",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mongod",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-synced",
    "name": "Synced",
    "ip": "10.129.1.8",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Rsync",
      "Anonymous"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Synced",
    "writeupUrl": "https://0xdf.gitlab.io/tags#synced",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-vaccine",
    "name": "Vaccine",
    "ip": "10.129.1.11",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 1",
      "FTP",
      "SQLi",
      "Sudo",
      "Tar Wildcard"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#vaccine",
    "hint": "Extract archive via FTP, exploit SQL injection with sqlmap to obtain user hash, and abuse sudo vi to spawn root shell.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-archetype",
    "name": "Archetype",
    "ip": "10.129.1.12",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 2",
      "MSSQL",
      "xp_cmdshell",
      "JuicyPotato",
      "PowerShell"
    ],
    "certifications": [
      "HTB-Starting-Point",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#archetype",
    "hint": "Find SQL credentials in open SMB share, enable xp_cmdshell via impacket-mssqlclient for revshell, and abuse SeImpersonate with JuicyPotato.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-oopsie",
    "name": "Oopsie",
    "ip": "10.129.1.13",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "foothold",
    "tags": [
      "Starting Point",
      "Tier 2",
      "IDOR",
      "Web",
      "SUID",
      "Privesc"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#oopsie",
    "hint": "Exploit IDOR on user account ID in admin portal to retrieve super admin cookie, upload PHP shell, and escalate via SUID binary.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-shield",
    "name": "Shield",
    "ip": "10.129.95.189",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "WordPress",
      "XP-Cmdshell"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Shield",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shield",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-pathfinder",
    "name": "Pathfinder",
    "ip": "10.129.95.190",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "AD",
      "BloodHound"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Pathfinder",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pathfinder",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-included",
    "name": "Included",
    "ip": "10.129.1.9",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "foothold",
    "tags": [
      "Starting Point",
      "Tier 1",
      "TFTP",
      "LFI",
      "Local File Inclusion",
      "Web"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#included",
    "hint": "Upload a PHP webshell via unauthenticated TFTP on UDP 69, then execute it via LFI on the HTTP web page.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-markup",
    "name": "Markup",
    "ip": "10.129.1.15",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "Starting Point",
      "Tier 2",
      "XXE",
      "XML",
      "SSH",
      "Scheduled Task"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#markup",
    "hint": "Exploit XXE in the XML order submission to read Daniel's private SSH key (.ssh/id_rsa), then abuse unquoted scheduled task to get SYSTEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-guard",
    "name": "Guard",
    "ip": "10.129.1.16",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "Starting Point",
      "Tier 2",
      "SSH",
      "Web",
      "Hash Cracking",
      "Sudo"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#guard",
    "hint": "Extract id_rsa from web backup, crack SSH passphrase with john/ssh2john, and run sudo -l to spot instant root escalation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-base",
    "name": "Base",
    "ip": "10.129.1.17",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 2",
      "PHP",
      "Type Juggling",
      "File Upload"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#base",
    "hint": "Abuse PHP loose comparison (type juggling) in JSON login endpoint to authenticate as admin, then upload webshell.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-responder",
    "name": "Responder",
    "ip": "10.129.95.195",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "LFI",
      "WinRM",
      "Responder"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Responder",
    "writeupUrl": "https://0xdf.gitlab.io/tags#responder",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-three",
    "name": "Three",
    "ip": "10.129.1.14",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "foothold",
    "tags": [
      "Starting Point",
      "Tier 2",
      "AWS",
      "S3",
      "Cloud",
      "Subdomain"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#three",
    "hint": "Discover s3.thetoppers.htb subdomain using awscli, upload PHP reverse shell to the writable S3 bucket, and execute via browser.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-biplane",
    "name": "Biplane",
    "ip": "10.129.95.197",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "API",
      "Command-Injection"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Biplane",
    "writeupUrl": "https://0xdf.gitlab.io/tags#biplane",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sequel",
    "name": "Sequel",
    "ip": "10.129.1.7",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 1",
      "MySQL",
      "MariaDB",
      "Default Credentials"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sequel",
    "hint": "Connect to MySQL on port 3306 as root with no password: mysql -h {TARGET_IP} -u root.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-sau",
    "name": "Sau",
    "ip": "10.10.11.48",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SSRF",
      "Request-Baskets",
      "Maltrail-RCE",
      "Systemctl-Pager",
      "2023"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Sau",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sau",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-cozyhosting",
    "name": "CozyHosting",
    "ip": "10.10.11.230",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Spring-Actuator",
      "Session-Hijack",
      "Cmd-Injection",
      "2023"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/CozyHosting",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cozyhosting",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-devvortex",
    "name": "DevVortex",
    "ip": "10.10.11.242",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Joomla-CVE-2023-23752",
      "Template-RCE",
      "Apport-CVE",
      "2023"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/DevVortex",
    "writeupUrl": "https://0xdf.gitlab.io/tags#devvortex",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-pilgrimage",
    "name": "Pilgrimage",
    "ip": "10.10.11.219",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Git-Dumper",
      "ExifTool-CVE-2021-22204",
      "Binwalk",
      "2023"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Pilgrimage",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pilgrimage",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-topology",
    "name": "Topology",
    "ip": "10.10.11.221",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "LaTeX-Injection",
      "LD-PRELOAD",
      "Stats-Dashboard",
      "2023"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Topology",
    "writeupUrl": "https://0xdf.gitlab.io/tags#topology",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-keeper",
    "name": "Keeper",
    "ip": "10.10.11.227",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Request-Tracker",
      "KeePass-Password",
      "2023"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Keeper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#keeper",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-analytics",
    "name": "Analytics",
    "ip": "10.10.11.233",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Metabase-CVE-2023-38646",
      "Creds-Reuse",
      "2023"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Analytics",
    "writeupUrl": "https://0xdf.gitlab.io/tags#analytics",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-bizness",
    "name": "Bizness",
    "ip": "10.10.11.30",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Apache-OFBiz-CVE-2023-49070",
      "Shadow-Backup",
      "2023"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Bizness",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bizness",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-escape",
    "name": "Escape",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "IPSEC-Certs",
      "MSSQL",
      "ADCS-Kerberoasting",
      "2023"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Escape",
    "writeupUrl": "https://0xdf.gitlab.io/tags#escape",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-permx",
    "name": "PermX",
    "ip": "10.10.11.23",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Chamilo-LMS",
      "File-Upload",
      "Sudo-Composer",
      "2024"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/PermX",
    "writeupUrl": "https://0xdf.gitlab.io/tags#permx",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-boardlight",
    "name": "BoardLight",
    "ip": "10.10.11.211",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Dolibarr-CVE-2023-30253",
      "SUID-Enlightenment",
      "2024"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/BoardLight",
    "writeupUrl": "https://0xdf.gitlab.io/tags#boardlight",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-greenhorn",
    "name": "GreenHorn",
    "ip": "10.10.11.25",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Pluck-CMS-Upload",
      "John-Hashcrack",
      "Pixel-Reconstruction",
      "2024"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/GreenHorn",
    "writeupUrl": "https://0xdf.gitlab.io/tags#greenhorn",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-headless",
    "name": "Headless",
    "ip": "10.10.11.8",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "XSS-Cookie-Theft",
      "Cmd-Injection",
      "Sudo-Bypass",
      "2024"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Headless",
    "writeupUrl": "https://0xdf.gitlab.io/tags#headless",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-codify",
    "name": "Codify",
    "ip": "10.10.11.198",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "NodeJS-Vm2-Sandbox-Escape",
      "Sudo-Consul?",
      "2023"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Codify",
    "writeupUrl": "https://0xdf.gitlab.io/tags#codify",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-iclean",
    "name": "IClean",
    "ip": "10.10.11.12",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Flask-XSS-Admin",
      "Cmd-Injection",
      "Sudo-Qpdf",
      "2024"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/IClean",
    "writeupUrl": "https://0xdf.gitlab.io/tags#iclean",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-editorial",
    "name": "Editorial",
    "ip": "10.10.11.20",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Upload-SSRF",
      "Git-Hooks",
      "Sudo-Restic",
      "2024"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Editorial",
    "writeupUrl": "https://0xdf.gitlab.io/tags#editorial",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-titanic",
    "name": "Titanic",
    "ip": "10.10.11.55",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Path-Traversal-Tickets",
      "SSH-Key-Leak",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Titanic",
    "writeupUrl": "https://0xdf.gitlab.io/tags#titanic",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-solarlab",
    "name": "SolarLab",
    "ip": "10.10.11.19",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Jinja2-SSTI",
      "WinRM-Creds-Reuse",
      "2024"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/SolarLab",
    "writeupUrl": "https://0xdf.gitlab.io/tags#solarlab",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-certified",
    "name": "Certified",
    "ip": "10.10.11.41",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "BloodHound",
      "ADCS-ESC4",
      "DCSync",
      "2024"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Certified",
    "writeupUrl": "https://0xdf.gitlab.io/tags#certified",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-authority",
    "name": "Authority",
    "ip": "10.10.11.222",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SMB-Shares",
      "LDAP-Anon",
      "ADCS-ESC1",
      "2023"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Authority",
    "writeupUrl": "https://0xdf.gitlab.io/tags#authority",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-cicada",
    "name": "Cicada",
    "ip": "10.10.11.58",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SMB-Guest",
      "LDAP-Plaintext-Creds",
      "SeBackupPrivilege",
      "2024"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Cicada",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cicada",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-mischief",
    "name": "Mischief",
    "ip": "10.10.10.122",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SNMP",
      "IPv6",
      "Command-Injection",
      "2018"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Mischief",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mischief",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-dog",
    "name": "Dog",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Backrest",
      "CouchDB",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Dog",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dog",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-code",
    "name": "Code",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Code-Review",
      "RCE",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Code",
    "writeupUrl": "https://0xdf.gitlab.io/tags#code",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-build",
    "name": "Build",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Gitea",
      "CI-Pipeline",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Build",
    "writeupUrl": "https://0xdf.gitlab.io/tags#build",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-university",
    "name": "University",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Web",
      "Subdomain-Enum",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/University",
    "writeupUrl": "https://0xdf.gitlab.io/tags#university",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-zero",
    "name": "Zero",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active-Directory",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Zero",
    "writeupUrl": "https://0xdf.gitlab.io/tags#zero",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-nocturnal",
    "name": "Nocturnal",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "PHP",
      "File-Upload",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Nocturnal",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nocturnal",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-lock",
    "name": "Lock",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Active-Directory",
      "Certificates",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Lock",
    "writeupUrl": "https://0xdf.gitlab.io/tags#lock",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-thefrizz",
    "name": "TheFrizz",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CuppaCMS?",
      "Kerberos",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/TheFrizz",
    "writeupUrl": "https://0xdf.gitlab.io/tags#thefrizz",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-sendai",
    "name": "Sendai",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Web",
      "Redis",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Sendai",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sendai",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-eureka",
    "name": "Eureka",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "ServiceNow",
      "Active-Directory",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Eureka",
    "writeupUrl": "https://0xdf.gitlab.io/tags#eureka",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-planning",
    "name": "Planning",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Grafana",
      "Cron",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Planning",
    "writeupUrl": "https://0xdf.gitlab.io/tags#planning",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-artificial",
    "name": "Artificial",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "AI-Platform",
      "Tensorflow",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Artificial",
    "writeupUrl": "https://0xdf.gitlab.io/tags#artificial",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-store",
    "name": "Store",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Web",
      "Windows-Privesc",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Store",
    "writeupUrl": "https://0xdf.gitlab.io/tags#store",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-voleur",
    "name": "Voleur",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Active-Directory",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Voleur",
    "writeupUrl": "https://0xdf.gitlab.io/tags#voleur",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-dump",
    "name": "Dump",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Forensics",
      "NTDS",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Dump",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dump",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-rustykey",
    "name": "RustyKey",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active-Directory",
      "Relay",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/RustyKey",
    "writeupUrl": "https://0xdf.gitlab.io/tags#rustykey",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-outbound",
    "name": "Outbound",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Web",
      "Proxy",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Outbound",
    "writeupUrl": "https://0xdf.gitlab.io/tags#outbound",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-mirage",
    "name": "Mirage",
    "ip": "10.10.11.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "IPv6",
      "Active-Directory",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Mirage",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mirage",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-era",
    "name": "Era",
    "ip": "10.10.11.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Web",
      "JWT?",
      "2025"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Era",
    "writeupUrl": "https://0xdf.gitlab.io/tags#era",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-steel-mountain",
    "name": "Steel Mountain",
    "ip": "10.10.150.15",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Rejetto HFS",
      "CVE-2014-6287",
      "Unquoted Service Path",
      "PowerUp"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/steelmountain",
    "writeupUrl": "https://medium.com/@seall/steel-mountain-walkthrough-tryhackme-4229bc9b5ca3",
    "hint": "Exploit Rejetto HTTP File Server 2.3 via null byte remote code execution (CVE-2014-6287) on port 8080, run PowerUp.ps1 to identify the unquoted AdvancedSystemCare service path, and drop a malicious binary to restart the service.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-alfred",
    "name": "Alfred",
    "ip": "10.10.150.16",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Jenkins",
      "PowerShell",
      "Token Impersonation",
      "SeImpersonatePrivilege",
      "PrintSpoofer"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/alfred",
    "writeupUrl": "https://medium.com/@shubham.tripathi_64101/tryhackme-alfred-walkthrough-40a20f92476d",
    "hint": "Access Jenkins portal on port 8080 using admin:admin default credentials, trigger a PowerShell reverse shell from a project build step, and use PrintSpoofer.exe to leverage SeImpersonatePrivilege for SYSTEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ice",
    "name": "Ice",
    "ip": "10.10.150.17",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Icecast",
      "CVE-2004-1561",
      "Mimikatz",
      "Windows Privesc"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/ice",
    "writeupUrl": "https://medium.com/@jordanb/tryhackme-ice-walkthrough-6e4cb7bf5788",
    "hint": "Exploit Icecast 2.0.1 header overflow (CVE-2004-1561) on port 8000 to obtain a foothold, migrate to a spoolsv.exe process, and dump cleartext credentials from LSASS with Mimikatz.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-blueprint",
    "name": "Blueprint",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "osCommerce-RCE",
      "AutoLogon-Creds",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/blueprint",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-vulnversity",
    "name": "Vulnversity",
    "ip": "10.10.150.25",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "File Upload Bypass",
      "Burp Suite",
      "SUID",
      "systemctl",
      "Classic Pentesting"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/vulnversity",
    "writeupUrl": "https://medium.com/@shilpesh.infosec/tryhackme-vulnversity-walkthrough-996ff5034a74",
    "hint": "Bypass file upload extension filter on the /internal/ portal using .phtml, trigger a reverse shell, and abuse SUID permissions on /bin/systemctl by creating and enabling a custom unit service file.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-kenobi",
    "name": "Kenobi",
    "ip": "10.10.150.14",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Samba",
      "ProFTPD",
      "SUID",
      "PATH Hijacking",
      "Classic Pentesting"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/kenobi",
    "writeupUrl": "https://medium.com/@k4u5h41/tryhackme-kenobi-walkthrough-562b7ae1c469",
    "hint": "Enumerate SMB shares and ProFTPD 1.3.5 mod_copy vulnerability (SITE CPFR/CPTO) to copy the user id_rsa to an accessible NFS share, then manipulate PATH to abuse a custom SUID binary executing curl.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-blog",
    "name": "Blog",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "WordPress-CVE-2019-8942",
      "Overlayfs",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/blog",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-ignite",
    "name": "Ignite",
    "ip": "10.10.150.23",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Fuel CMS",
      "CVE-2018-16763",
      "RCE",
      "Classic Pentesting"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/ignite",
    "writeupUrl": "https://medium.com/@falconspy/tryhackme-ignite-walkthrough-b09e08bbcf46",
    "hint": "Exploit Fuel CMS 1.4.1 authenticated/unauthenticated RCE (CVE-2018-16763) via php evaluation in the select filter, inspect /fuel/application/config/database.php for the root MySQL password, and su to root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mr-robot-ctf",
    "name": "Mr Robot CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "WordPress-Theme-Editor",
      "Crypt3",
      "Nmap-SUID",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mrrobot",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-overpass",
    "name": "Overpass",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Custom-Pass-Manager",
      "Cron-Job-Hijack",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/overpass",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-daily-bugle",
    "name": "Daily Bugle",
    "ip": "10.10.150.22",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Joomla",
      "SQLi",
      "CVE-2019-8942",
      "Yum Sudoers",
      "GTFOBins"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/dailybugle",
    "writeupUrl": "https://medium.com/@0xZ0R0/tryhackme-daily-bugle-walkthrough-88f58c7512da",
    "hint": "Exploit Joomla SQL injection (CVE-2019-8942) to extract Jonah admin hash, crack with John/rockyou, upload a malicious Joomla extension for RCE, and abuse sudo yum with a custom RPM package.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-overpass-2-hacked",
    "name": "Overpass 2 Hacked",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "PCAP-Forensics",
      "Backdoor",
      "CVE-2021-3156",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/overpass2hacked",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-overpass-3-hosting",
    "name": "Overpass 3 Hosting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "FTP",
      "NFS-no-root-squash",
      "GPG",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/overpass3hosting",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-thompson",
    "name": "Thompson",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Tomcat-Weak-Creds",
      "WAR-Deploy",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thompson",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-gamingserver",
    "name": "GamingServer",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "LFI-Dict",
      "SSH-Key-Crack",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gamingserver",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-skynet",
    "name": "Skynet",
    "ip": "10.10.150.34",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Samba",
      "SquirrelMail",
      "Cuppa CMS",
      "LFI",
      "Tar Wildcard Privesc"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/skynet",
    "writeupUrl": "https://medium.com/@cuncis/tryhackme-skynet-walkthrough-33c8702b8ba3",
    "hint": "Extract email passwords from anonymous SMB share, log into SquirrelMail, exploit Cuppa CMS Local File Inclusion to gain initial foothold, and abuse tar wildcard backup cronjob for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-relevant",
    "name": "Relevant",
    "ip": "10.10.150.19",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "OSCP",
      "SMB",
      "IIS",
      "WebShell",
      "PrintSpoofer",
      "SeImpersonatePrivilege"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/relevant",
    "writeupUrl": "https://medium.com/@cuncis/tryhackme-relevant-walkthrough-e71e51b143aa",
    "hint": "Notice anonymous write access to the nt4wrksv SMB share which maps to the IIS web directory on high port 49663; upload an ASPX reverse shell and exploit SeImpersonatePrivilege with PrintSpoofer.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-the-marketplace",
    "name": "The Marketplace",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SQLi",
      "XSS-Cookie-Steal",
      "Docker-Group",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/marketplace",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-brainpan-1",
    "name": "Brainpan 1",
    "ip": "10.10.150.11",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Buffer Overflow",
      "Binary Exploitation",
      "Wine",
      "Sudoers",
      "Linux Privesc"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/brainpan",
    "writeupUrl": "https://0xrick.github.io/hack-the-box/brainpan/",
    "hint": "Fuzz the custom service on port 9999 to identify the 524-byte EIP offset, check for bad characters, generate a reverse shell with msfvenom, and pivot from the Wine environment to the host Linux machine via sudoers.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-startup",
    "name": "Startup",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Anonymous-FTP",
      "Web-Upload",
      "PCAP-Creds",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/startup",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-basic-pentesting",
    "name": "Basic Pentesting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Brute-Force",
      "John",
      "Hash-Identifier",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/basicpentestingju",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-post-exploitation-basics",
    "name": "Post Exploitation Basics",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Meterpreter",
      "Hashdump",
      "Mimikatz",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/postexploitation",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-metasploit-introduction",
    "name": "Metasploit Introduction",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "MSF-Basics",
      "ms17-010",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/metasploitintro",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-introductory-networking",
    "name": "Introductory Networking",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSI-Model",
      "TCP-UDP",
      "Nmap-Theory",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introductorynetworking",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-passive-reconnaissance",
    "name": "Passive Reconnaissance",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSINT",
      "Whois",
      "DNS-Records",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/passivereconnaissance",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-active-reconnaissance",
    "name": "Active Reconnaissance",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Ping-Traceroute",
      "TCP-SYN",
      "Scanning",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/activereconnaissance",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-content-discovery",
    "name": "Content Discovery",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Dirbust",
      "Wfuzz",
      "Robots-Sitemaps",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/contentdiscovery",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-hydra",
    "name": "Hydra",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Brute-Force-FTP",
      "POST-Forms",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hydra",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-biohazard",
    "name": "Biohazard",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Puzzle-Room",
      "Base64",
      "Stego",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/biohazard",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-wgel-ctf",
    "name": "Wgel CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Sitemap-SSH-Key",
      "Wget-SUID",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wgelctf",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-the-cod-caper",
    "name": "The Cod Caper",
    "ip": "10.10.150.35",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "OSCP",
      "SQLi",
      "Command Injection",
      "Buffer Overflow",
      "PWN",
      "ASLR Bypass"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/thecodcaper",
    "writeupUrl": "https://medium.com/@cuncis/tryhackme-the-cod-caper-walkthrough-6e428e219ba3",
    "hint": "Exploit SQL injection on the web portal to dump credentials, obtain a shell via command injection, and exploit a 32-bit local buffer overflow binary bypassing ASLR via memory leak.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-whiterose",
    "name": "Whiterose",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Mr-Robot-Themed",
      "Web",
      "LFI",
      "2023"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/whiterose",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "vulnhub-kioptrix-1",
    "name": "Kioptrix Level 1",
    "ip": "192.168.1.100",
    "os": "Linux",
    "platform": "VulnHub",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Samba",
      "trans2open",
      "OpenSSL-0.9.6c",
      "Buffer Overflow",
      "OSCP-Classic"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://www.vulnhub.com/entry/kioptrix-level-1-1,22/",
    "hint": "Apache mod_ssl openfuck or Samba 2.2.1a trans2open remote exploit.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "vulnhub-mr-robot",
    "name": "Mr. Robot: 1",
    "ip": "192.168.1.101",
    "os": "Linux",
    "platform": "VulnHub",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "WordPress",
      "Robots.txt",
      "Hydra",
      "SUID-Nmap",
      "MD5-Cracking"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://www.vulnhub.com/entry/mr-robot-1,151/",
    "hint": "Check robots.txt for fsocity.dic wordlist, brute-force WordPress login, and leverage SUID nmap interactive shell.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "vulnhub-dc-1",
    "name": "DC-1",
    "ip": "192.168.1.102",
    "os": "Linux",
    "platform": "VulnHub",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Drupalgeddon2",
      "Drupal-7",
      "Find-SUID",
      "MySQL-Shadow"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://www.vulnhub.com/entry/dc-1,292/",
    "hint": "Drupalgeddon 2 RCE (CVE-2018-7600), check config for database creds, and abuse SUID find for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "prolabs-zephyr",
    "name": "Zephyr Active Directory",
    "ip": "10.10.110.0/24",
    "os": "Active Directory",
    "platform": "ProLabs",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "BloodHound",
      "Kerberoasting",
      "AS-REP",
      "MSSQL-Linked-Servers",
      "ADCS-ESC1",
      "DCSync"
    ],
    "certifications": [
      "CRTO",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/prolabs/overview/zephyr",
    "hint": "Enterprise Active Directory environment spanning multiple forest trusts, linked MSSQL instances, and ADCS certificate abuse.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "prolabs-dante",
    "name": "Dante ProLab",
    "ip": "10.10.100.0/24",
    "os": "Linux",
    "platform": "ProLabs",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Chisel-Pivoting",
      "Multi-Subnet",
      "Linux-Privesc",
      "Windows-Lateral",
      "Buffer-Overflow"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/prolabs/overview/dante",
    "hint": "Hands-on pivot lab requiring multiple SSH / Chisel tunnels, port forwards, and cross-platform lateral movement.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-appointment",
    "name": "Appointment",
    "ip": "10.129.1.6",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 1",
      "SQLi",
      "Web Auth Bypass",
      "SQL Injection"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#appointment",
    "hint": "Exploit SQL injection on login username field using admin'# or admin' OR 1=1-- - to bypass password check.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-crocodile",
    "name": "Crocodile",
    "ip": "10.129.1.8",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 1",
      "FTP",
      "Web",
      "Admin Panel",
      "Gobuster"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#crocodile",
    "hint": "Download user credentials from anonymous FTP, then locate login.php via directory busting to log in as admin.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-funnel",
    "name": "Funnel",
    "ip": "10.129.1.20",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "foothold",
    "tags": [
      "Starting Point",
      "Tier 2",
      "SSH",
      "Port Forwarding",
      "PostgreSQL",
      "Tunneling"
    ],
    "certifications": [
      "HTB-Starting-Point",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#funnel",
    "hint": "Log into SSH with discovered credentials, establish dynamic SSH port forwarding to access internal PostgreSQL database, and query flags.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bike",
    "name": "Bike",
    "ip": "10.129.1.10",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "foothold",
    "tags": [
      "Starting Point",
      "Tier 1",
      "Node.js",
      "SSTI",
      "Handlebars",
      "Web"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bike",
    "hint": "Trigger Handlebars SSTI in Node.js web form using constructor prototype pollution payload to execute system commands.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ignition",
    "name": "Ignition",
    "ip": "10.129.95.178",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "tags": [
      "http",
      "web",
      "cms",
      "credentials",
      "starting-point"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Ignition",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ignition",
    "status": "completed",
    "timeSpentSeconds": 3600,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-pennyworth",
    "name": "Pennyworth",
    "ip": "10.129.1.19",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "completed",
    "tags": [
      "Starting Point",
      "Tier 2",
      "Jenkins",
      "Groovy",
      "RCE",
      "Default Credentials"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pennyworth",
    "hint": "Log into Jenkins on port 8080 with root:password, open Script Console at /script, and execute Groovy reverse shell.",
    "timeSpentSeconds": 3600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-tactics",
    "name": "Tactics",
    "ip": "10.129.95.180",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "tags": [
      "smb",
      "administrator",
      "share",
      "starting-point"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Tactics",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tactics",
    "status": "completed",
    "timeSpentSeconds": 3600,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-unified",
    "name": "Unified",
    "ip": "10.129.1.18",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "status": "foothold",
    "tags": [
      "Starting Point",
      "Tier 2",
      "Log4j",
      "CVE-2021-44228",
      "UniFi",
      "MongoDB"
    ],
    "certifications": [
      "HTB-Starting-Point",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/starting-point",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unified",
    "hint": "Exploit Log4Shell (CVE-2021-44228) in UniFi Controller login page using rogue-jndi, then inspect MongoDB on port 27117 to extract admin hash.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-reactor",
    "name": "Reactor",
    "ip": "10.10.10.239",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "tags": [
      "active directory",
      "rpc",
      "smb",
      "cert",
      "docker"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Reactor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#reactor",
    "status": "completed",
    "timeSpentSeconds": 3600,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-twomillion",
    "name": "TwoMillion",
    "ip": "10.10.11.221",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "tags": [
      "api",
      "vpn",
      "cve",
      "overlayfs",
      "privesc"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/TwoMillion",
    "writeupUrl": "https://0xdf.gitlab.io/tags#twomillion",
    "status": "completed",
    "timeSpentSeconds": 3600,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-kobold",
    "name": "Kobold",
    "ip": "10.10.11.238",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "tags": [
      "web",
      "suid",
      "privesc"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Kobold",
    "writeupUrl": "https://0xdf.gitlab.io/tags#kobold",
    "status": "completed",
    "timeSpentSeconds": 3600,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "thm-rootme",
    "name": "RootMe",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Web",
      "File-Upload-Bypass",
      "SUID",
      "Privesc",
      "Python"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/r00tme",
    "writeupUrl": "https://github.com/0xMr-Robot/TryHackMe-Walkthroughs/blob/master/RootMe.md",
    "hint": "Bypass PHP upload extension filters using .phtml / .php5 on /panel, catch a reverse shell, then exploit SUID python for privilege escalation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pickle-rick",
    "name": "Pickle Rick",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Web",
      "Command-Injection",
      "Sudo",
      "Recon",
      "Robots.txt"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/picklerick",
    "writeupUrl": "https://rawxsec.com/posts/tryhackme-pickle-rick/",
    "hint": "Inspect page source and robots.txt for credentials, bypass command filtering on the portal command panel using cat/less/nl alternatives, check sudo -l.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-agent-sudo",
    "name": "Agent Sudo",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Web",
      "User-Agent-Spoofing",
      "Steganography",
      "Brute-Force",
      "CVE-2019-14287",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/agentsudo",
    "writeupUrl": "https://medium.com/@k3rnel-p4n1c/tryhackme-agent-sudo-writeup-968945415bc2",
    "hint": "Spoof HTTP User-Agent header with agent codenames to access the hidden portal, extract hidden images via binwalk/steghide, exploit CVE-2019-14287 (sudo -u#-1 /bin/bash).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cowboyhacker",
    "name": "Bounty Hacker",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "FTP",
      "Hydra",
      "Sudo-Privesc",
      "Tar",
      "Anonymous-FTP",
      "Tar-Wildcard",
      "Privesc",
      "OSCP",
      "Anonymous FTP",
      "SSH Brute Force",
      "Tar Sudoers"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/cowboyhacker",
    "writeupUrl": "https://nepcodex.com/2021/07/bounty-hacker-tryhackme-walkthrough/",
    "hint": "Download task.txt and locks.txt password wordlist from anonymous FTP on port 21, brute-force SSH user lin with Hydra, and execute sudo /bin/tar -cf /dev/null /dev/null --checkpoint=1 --checkpoint-action=exec=/bin/sh.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dogcat",
    "name": "Dogcat",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "LFI",
      "Log-Poisoning",
      "Docker-Escape",
      "Privesc",
      "Web",
      "PHP-Wrapper"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/dogcat",
    "writeupUrl": "https://nepcodex.com/2021/07/dogcat-tryhackme-walkthrough/",
    "hint": "Bypass LFI string restriction using php://filter with dog/cat keywords, poison Apache access log with PHP code, break out of Docker container by modifying backup.sh on mounted host directory.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-gamezone",
    "name": "Game Zone",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "SQLi",
      "SSH-Tunneling",
      "Webmin",
      "Privesc",
      "SQLMap"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/gamezone",
    "writeupUrl": "https://nepcodex.com/2021/07/gamezone-tryhackme-walkthrough/",
    "hint": "Bypass portal login using SQL injection (' or 1=1 --), extract user hash via sqlmap, crack SHA-512 hash, tunnel internal port 10000 to access Webmin 1.890, and exploit CVE-2019-15107 for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-retro",
    "name": "Retro",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CTF",
      "WordPress",
      "RDP",
      "CVE-2019-1388",
      "Privesc",
      "UAC-Bypass",
      "OSCP",
      "Classic Pentesting"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/retro",
    "writeupUrl": "https://nepcodex.com/2021/07/retro-tryhackme-walkthrough/",
    "hint": "Examine WordPress blog posts and author comments for credentials (wade / parzival), log in via RDP, and leverage CVE-2019-1388 through the hh.exe / Internet Explorer print dialog to break out into a SYSTEM shell.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-anthem",
    "name": "Anthem",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Umbraco-CMS",
      "RDP",
      "OSINT",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/anthem",
    "writeupUrl": "https://infosecwriteups.com/anthem-tryhackme-walkthrough-3be46b0a1f4c",
    "hint": "Inspect robots.txt and author bios on blog posts for credentials, log in to Umbraco CMS, obtain RDP access, and inspect hidden desktop backup files.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-blaster",
    "name": "Blaster",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "RDP",
      "CVE-2019-1388",
      "UAC-Bypass",
      "Privesc",
      "IIS",
      "WordPress",
      "OSCP",
      "UAC Bypass",
      "Classic Pentesting"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/blaster",
    "writeupUrl": "https://nepcodex.com/2021/07/blaster-tryhackme-walkthrough/",
    "hint": "Enumerate hidden web blog directory to discover credentials, connect via RDP on port 3389, and escalate privileges to SYSTEM via Windows Certificate Dialog UAC Bypass (CVE-2019-1388) launching cmd from hh.exe.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-inclusion",
    "name": "Inclusion",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "LFI",
      "Web",
      "Sudo",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/inclusion",
    "writeupUrl": "https://medium.com/@k3rnel-p4n1c/tryhackme-inclusion-walkthrough-883a0e69db9e",
    "hint": "Exploit Local File Inclusion in the article parameter to read /etc/passwd and extract plaintext credentials, then leverage sudo /usr/bin/socat for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tartarus",
    "name": "Tartarus",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CTF",
      "FTP",
      "Directory-Traversal",
      "Cron",
      "Sudo-Privesc",
      "Robots.txt",
      "Tar-Privesc",
      "Cronjob",
      "Privesc",
      "OSCP",
      "Tar Wildcard Privesc",
      "Classic Pentesting"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/tartarus",
    "writeupUrl": "https://nepcodex.com/2021/07/tartarus-tryhackme-walkthrough/",
    "hint": "Enumerate hidden directories in robots.txt, retrieve steganographic hints from image assets, gain initial SSH access, and exploit tar wildcard command injection (--checkpoint=1 --checkpoint-action=exec=shell.sh) executed by root cronjob.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jacob-the-boss",
    "name": "Jacob the Boss",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "JBoss",
      "Java-Deserialization",
      "CVE-2017-12149",
      "SUID",
      "Privesc"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/jacobtheboss",
    "writeupUrl": "https://medium.com/@k3rnel-p4n1c/tryhackme-jacob-the-boss-walkthrough-32efca81ce9f",
    "hint": "Port 8080 hosts vulnerable JBoss application server. Exploit JMX/HttpInvoker Java deserialization (CVE-2017-12149) with ysoserial, then find custom SUID binary for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-easyctf",
    "name": "Simple CTF",
    "ip": "10.10.150.27",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "CMS Made Simple",
      "SQLi",
      "CVE-2019-9053",
      "Sudoers",
      "Vim",
      "CMS-Made-Simple",
      "Sudo-Vim",
      "Privesc"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/easyctf",
    "writeupUrl": "https://medium.com/@samuel_h/tryhackme-simple-ctf-walkthrough-c88f28d8b945",
    "hint": "Run time-based blind SQL injection exploit against CMS Made Simple 2.2.8 (CVE-2019-9053), crack the salt+hash, SSH into port 2222 as mitch, and run sudo vim with :!/bin/sh for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wonderland",
    "name": "Wonderland",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Steganography",
      "Privesc",
      "Python",
      "Capabilities",
      "Web",
      "Directory-Traversal",
      "Python-Library-Hijacking",
      "Linux-Capabilities"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/wonderland",
    "writeupUrl": "https://nepcodex.com/2021/07/wonderland-tryhackme-walkthrough/",
    "hint": "Inspect hidden web directory structure recursively (/r/a/b/b/i/t), extract credentials hidden in images with steghide, hijack python module import in walrus script, and exploit perl capabilities (cap_setuid) to gain root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-boilerctf2",
    "name": "Boiler CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Joomla",
      "Sar2HTML",
      "SUID",
      "Privesc",
      "RCE",
      "SUID-Find",
      "OSCP",
      "find SUID",
      "Classic Pentesting"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/boilerctf2",
    "writeupUrl": "https://nepcodex.com/2021/07/boiler-ctf-tryhackme-walkthrough/",
    "hint": "Find hidden web directory running Sar2HTML and exploit command injection via plot parameter, retrieve user credentials, and exploit SUID /usr/bin/find with -exec /bin/sh -p \\; to gain root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-brooklynninenine",
    "name": "Brooklyn Nine Nine",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Steganography",
      "Hydra",
      "SUID",
      "Privesc",
      "Anonymous-FTP",
      "Sudo-Privesc",
      "OSCP",
      "Anonymous FTP",
      "Sudoers",
      "Less"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/brooklynninenine",
    "writeupUrl": "https://nepcodex.com/2021/07/brooklyn-nine-nine-tryhackme-walkthrough/",
    "hint": "Two paths available: extract hidden password from image on anonymous FTP via steghide, or brute force jake's SSH password with hydra; escalate to root via sudo nano or sudo less.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-anonymous",
    "name": "Anonymous",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "FTP",
      "Cron",
      "SUID",
      "Privesc",
      "Anonymous-FTP",
      "SMB",
      "Cronjob-Hijack",
      "SUID-Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/anonymous",
    "writeupUrl": "https://nepcodex.com/2021/07/anonymous-tryhackme-walkthrough/",
    "hint": "Anonymous FTP access reveals writable clean.sh script executed by periodic cronjob; modify script to receive reverse shell, then exploit SUID binary env or pkexec for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lazyadmin",
    "name": "LazyAdmin",
    "ip": "10.10.150.30",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "SweetRice CMS",
      "MySQL Backup",
      "Sudoers",
      "Perl Script",
      "SweetRice-CMS",
      "MySQL-Backup",
      "Arbitrary-File-Upload",
      "Sudo-Privesc"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/lazyadmin",
    "writeupUrl": "https://medium.com/@seall/lazyadmin-walkthrough-tryhackme-50ef65a6f2bb",
    "hint": "Find SweetRice CMS directory, locate unauthenticated MySQL database backup exposing admin password hash, upload PHP web shell via ads manager, and abuse sudo /usr/bin/perl running a writable copy.sh script.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ultratech1",
    "name": "UltraTech",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "NodeJS",
      "API",
      "Docker",
      "Privesc",
      "Command-Injection",
      "Docker-Group"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ultratech1",
    "writeupUrl": "https://nepcodex.com/2021/07/ultratech-tryhackme-walkthrough/",
    "hint": "Enumerate API endpoints on port 8081, exploit command injection in ping parameter, crack user hash from sqlite database, and leverage membership in the docker group to mount host root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bookstore",
    "name": "Bookstore",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "REST-API",
      "Werkzeug-Console",
      "PIN-Exploit",
      "SUID-Binary",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bookstore",
    "writeupUrl": "https://infosecwriteups.com/tryhackme-bookstore-walkthrough-aee5fb74b967",
    "hint": "Find hidden v2 API endpoint with LFI to leak Werkzeug console PIN generation parameters (MAC address, machine-id), unlock console for RCE, and exploit SUID binary.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-archangel",
    "name": "Archangel",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "LFI",
      "Log-Poisoning",
      "Cron",
      "Path-Hijacking",
      "Apache-Log-Poisoning",
      "Cronjob",
      "PATH-Hijacking",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/archangel",
    "writeupUrl": "https://nepcodex.com/2021/07/archangel-tryhackme-walkthrough/",
    "hint": "Find hostname mafialive.thm, exploit PHP filter LFI and apache access log poisoning to get initial shell, hijack cronjob script for user privesc, and manipulate binary PATH for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-internal",
    "name": "Internal",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CTF",
      "WordPress",
      "Tunneling",
      "Jenkins",
      "Docker-Breakout",
      "SSH-Tunneling",
      "Docker",
      "Privesc"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/internal",
    "writeupUrl": "https://nepcodex.com/2021/07/internal-tryhackme-walkthrough/",
    "hint": "Brute force WordPress admin credentials via wpscan, gain shell via theme editor, tunnel internal port to access Jenkins, execute Groovy script console payload, and retrieve root credentials from docker environment note.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-attacktivedirectory",
    "name": "Attacktive Directory",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "ActiveDirectory",
      "Kerberos",
      "ASREPRoast",
      "Secretsdump",
      "Active-Directory",
      "AS-REP-Roasting",
      "Kerbrute",
      "Active Directory",
      "BloodHound",
      "AS-REP Roasting",
      "Impacket"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/attacktivedirectory",
    "writeupUrl": "https://nepcodex.com/2021/07/attacktive-directory-tryhackme-walkthrough/",
    "hint": "Use Kerbrute with a wordlist to enumerate valid domain users over Kerberos port 88. Perform AS-REP Roasting with Impacket GetNPUsers.py against users with DONT_REQ_PREAUTH set to retrieve crackable TGT hashes. Once cracked, use secretsdump.py with credentials to dump NTDS.dit hashes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-gatekeeper",
    "name": "Gatekeeper",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Buffer-Overflow",
      "Oscilloscope",
      "Privesc",
      "x86",
      "Immunity-Debugger",
      "Mona",
      "OSCP",
      "Buffer Overflow",
      "Windows Privesc",
      "Classic Pentesting",
      "Immunity Debugger"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/gatekeeper",
    "writeupUrl": "https://nepcodex.com/2021/07/gatekeeper-tryhackme-walkthrough/",
    "hint": "Fuzz the elites service on port 31337 to find the buffer overflow offset, locate an unprotected JMP ESP instruction, and exploit saved credentials in Mozilla or unquoted service paths for SYSTEM escalation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bufferoverflowprep",
    "name": "Buffer Overflow Prep",
    "ip": "10.10.150.10",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Buffer Overflow",
      "x86",
      "Mona.py",
      "Immunity Debugger",
      "Binary Exploitation",
      "Buffer-Overflow",
      "Oscp-Prep",
      "Immunity-Debugger",
      "Mona",
      "Exploit-Development"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/bufferoverflowprep",
    "writeupUrl": "https://tc5150.github.io/posts/tryhackme-bofprep/",
    "hint": "Generate a bytearray using mona.py to eliminate bad characters systematically, identify an unprotected JMP ESP instruction address, and craft an msfvenom payload with a standard NOP sled.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-res",
    "name": "Res",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Redis",
      "Unauthorized-Access",
      "Webshell",
      "SUID-Xxd",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/res",
    "writeupUrl": "https://infosecwriteups.com/tryhackme-res-walkthrough-9e23fb77a064",
    "hint": "Unauthenticated Redis instance on port 6379; configure dir to /var/www/html and dbfilename to shell.php to drop webshell, then abuse SUID /usr/bin/xxd to read /etc/shadow.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cyborgt8",
    "name": "Cyborg",
    "ip": "10.10.150.33",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Borg Backup",
      "Hash Cracking",
      "Sudoers",
      "Classic Pentesting",
      "Borg-Backup",
      "Hash-Cracking",
      "Sudo-Privesc",
      "Bash-Script"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/cyborgt8",
    "writeupUrl": "https://medium.com/@falconspy/tryhackme-cyborg-walkthrough-b99ca828e670",
    "hint": "Find Borg backup archive in hidden web directory, crack the archive passphrase using John, extract credentials for user alex, and run sudo /etc/mp3.py with command injection.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-poster",
    "name": "Poster",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "PostgreSQL",
      "Metasploit",
      "Privesc",
      "Credential-Dumping"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/poster",
    "writeupUrl": "https://nepcodex.com/2021/07/poster-tryhackme-walkthrough/",
    "hint": "Enumerate PostgreSQL database on port 5432 with default/weak credentials, dump user hashes, exploit postgresql command execution or read sensitive configuration files for privesc.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lian-yu",
    "name": "Lian_Yu",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Steganography",
      "Gobuster",
      "FTP",
      "Sudo-Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lianyu",
    "writeupUrl": "https://infosecwriteups.com/tryhackme-lian-yu-writeup-7a71a39f692a",
    "hint": "Directory fuzzing reveals hidden wordlist and images containing stegano data; retrieve FTP creds, pivot to user slade, and exploit sudo /usr/bin/pkexec or doas.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-develpy",
    "name": "Develpy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Python",
      "Input-Injection",
      "Cron",
      "Privesc",
      "Python-Input-Exploit",
      "Cronjob"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/develpy",
    "writeupUrl": "https://nepcodex.com/2021/07/develpy-tryhackme-walkthrough/",
    "hint": "Port 10000 runs a Python 2 script evaluating input() directly; provide __import__('os').system('sh') to get a shell, then exploit writable root cronjob script.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-corridor",
    "name": "Corridor",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "IDOR",
      "Hashing",
      "Web",
      "Privesc",
      "Hash-Prediction",
      "MD5"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/corridor",
    "writeupUrl": "https://nepcodex.com/2021/07/corridor-tryhackme-walkthrough/",
    "hint": "Interactive room where each room endpoint URL is an MD5 hash of an integer index. Test MD5 hash of index 0 (cfcd208495d565ef66e7dff9f98764da) to get the flag.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hackpark",
    "name": "HackPark",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Hydra",
      "BlogEngine",
      "CVE-2019-6714",
      "Privesc",
      "BlogEngine.NET",
      "Unquoted-Service-Path",
      "OSCP",
      "Weak Service Permissions"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/hackpark",
    "writeupUrl": "https://nepcodex.com/2021/07/hackpark-tryhackme-walkthrough/",
    "hint": "Brute-force the BlogEngine.NET administrative login with Hydra, exploit PostView.ascx directory traversal RCE (CVE-2019-6714), and replace the unquoted WSUS / Message.exe binary with a reverse shell.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wreath",
    "name": "Wreath",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Pivoting",
      "Chisel",
      "Empire",
      "C2",
      "Red Team",
      "Proxychains"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/wreath",
    "writeupUrl": "https://notchxor.github.io/posts/tryhackme/wreath/",
    "hint": "Gain initial access by exploiting Webmin CVE-2019-15107 on the perimeter host. Establish SOCKS proxies via Chisel and sshuttle to pivot into the internal network. Exploit GitStack RCE on the second host and leverage unquoted service paths alongside Empire C2 to compromise the final Windows workstation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-holo",
    "name": "Holo",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Multi-Host",
      "Kerberos",
      "BloodHound",
      "Pass-the-Hash",
      "Red Team"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/holo",
    "writeupUrl": "https://infosecwriteups.com/tryhackme-holo-network-walkthrough-1d374523bdfa",
    "hint": "Simulates an external enterprise engagement. Exploit web vulnerabilities to obtain an initial low-privilege foothold, dump LSASS credentials using Mimikatz, pivot across the internal subnets, and execute Kerberoasting to acquire Domain Administrator privileges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-enterprise",
    "name": "Enterprise",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "ZeroLogon",
      "SQLi",
      "Privilege Escalation",
      "Kerberos",
      "BloodHound"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/enterprise",
    "writeupUrl": "https://systemweakness.com/tryhackme-enterprise-walkthrough-e1e32d4b53ef",
    "hint": "Locate the SQL injection flaw in the web support system to extract service account credentials. Pivot to the internal domain and exploit ZeroLogon (CVE-2020-1472) against the Primary Domain Controller to reset the machine account password and extract the domain hashes with secretsdump.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-za",
    "name": "Za",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Kerberos",
      "BloodHound",
      "GPO Abuse",
      "SMB",
      "Domain Controller"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/za",
    "writeupUrl": "https://infosecwriteups.com/tryhackme-za-walkthrough-3211516eecdf",
    "hint": "Enumerate open SMB shares to discover automation scripts leaking cleartext credentials. Ingest domain telemetry into BloodHound to map out ACL permissions, identifying write rights over Group Policy Objects (GPOs) to deploy a malicious scheduled task across domain controllers.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-eden",
    "name": "Eden",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Kerberos",
      "Pass-the-Ticket",
      "BloodHound",
      "Rubeus",
      "Domain Admin"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/eden",
    "writeupUrl": "https://systemweakness.com/tryhackme-eden-walkthrough-6e42b89f8db1",
    "hint": "Exploit an unauthenticated file upload on the management web application to gain a PowerShell reverse shell. Run SharpHound to detect over-privileged service accounts with Kerberos unconstrained delegation, and utilize Rubeus to perform Pass-the-Ticket to take over Domain Admin.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-razorblack",
    "name": "Raz0rBlack",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "NFS",
      "Kerberos",
      "AS-REP Roasting",
      "BloodHound",
      "DCSync"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/razorblack",
    "writeupUrl": "https://infosecwriteups.com/tryhackme-raz0rblack-walkthrough-38bbd4c6ea4f",
    "hint": "Mount the exposed NFS export to discover employee backup archives containing usernames. Perform AS-REP Roasting with Kerbrute/GetNPUsers to crack user hashes, and analyze BloodHound to reveal WriteDacl permissions on the domain root to grant DCSync privileges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnnet-active",
    "name": "VulnNet: Active",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Redis",
      "GPP-Passwords",
      "Kerberoast",
      "BloodHound"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/vulnnetactive",
    "writeupUrl": "https://systemweakness.com/vulnnet-active-tryhackme-walkthrough-948ff6bf1d89",
    "hint": "Access an unauthenticated Redis server running on Windows to drop an SSH public key or execute code. Browse the SYSVOL share to locate Groups.xml containing cpassword strings, decrypt them using gpp-decrypt, and execute Kerberoasting to elevate to Enterprise Admin.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnnetroasted",
    "name": "VulnNet: Roasted",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "ActiveDirectory",
      "Kerberos",
      "ASREPRoast",
      "GPO",
      "Active Directory",
      "Kerberoast",
      "AS-REP Roasting",
      "SMB",
      "Hashcat"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/vulnnetroasted",
    "writeupUrl": "https://nepcodex.com/2021/07/vulnnet-roasted-tryhackme-walkthrough/",
    "hint": "Enumerate anonymous SMB shares on the domain controller to collect active user lists and documentation. Execute AS-REP Roasting with impacket-GetNPUsers, crack the hash with Hashcat mode 18200, and request Service Principal Name (SPN) tickets with GetUserSPNs for Kerberoasting.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windows-privesc-arena",
    "name": "Windows PrivEsc Arena",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Privilege Escalation",
      "AlwaysInstallElevated",
      "Unquoted Service Path",
      "Registry",
      "Token Impersonation"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/windowsprivescarena",
    "writeupUrl": "https://0xinfection.github.io/posts/windows-privesc-arena-thm/",
    "hint": "Practice hands-on local privilege escalation techniques on Windows: identify and abuse unquoted service paths, hijack weak service binaries, exploit AlwaysInstallElevated MSI configurations, overwrite registry autorun keys, and leverage token impersonation privileges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-attacking-kerberos",
    "name": "Attacking Kerberos",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Kerberos",
      "ASREPRoast",
      "Kerberoasting",
      "Silver Ticket",
      "Golden Ticket",
      "Active Directory"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/attackingkerberos",
    "writeupUrl": "https://medium.com/@alicanaktas/tryhackme-attacking-kerberos-writeup-9686036fae7e",
    "hint": "Comprehensive hands-on breakdown of Kerberos attack primitives: conduct AS-REP Roasting, execute Kerberoasting against SPNs, forge Silver Tickets using service account NTLM hashes, and create Golden Tickets with the krbtgt hash using Mimikatz and Rubeus.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-win-ad-basics",
    "name": "Active Directory Basics",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Domain Controller",
      "Forests",
      "Trusts",
      "GPO",
      "LDAP"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/winadbasics",
    "writeupUrl": "https://github.com/CyberSecurityUP/TryHackMe-Walkthroughs/tree/main/ActiveDirectoryBasics",
    "hint": "Examine core Active Directory architecture including domains, trees, forests, trust types, and organisational units. Query schema attributes and domain objects using PowerShell ActiveDirectory module, LDAP filters, and ADSI.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ad-enumeration",
    "name": "Active Directory Enumeration",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Enumeration",
      "PowerView",
      "BloodHound",
      "RPC",
      "SharpHound"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/activedirectoryenumeration",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-active-directory-enumeration-walkthrough-6e477e77b102",
    "hint": "Employ PowerView (Get-DomainUser, Get-DomainComputer, Get-DomainGroupMember) and SharpHound data collection to enumerate AD objects, discover logged-in administrative sessions, map out domain trusts, and export graph data for BloodHound.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-breaching-ad",
    "name": "Breaching Active Directory",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "NTLM Relay",
      "LLMNR-Poisoning",
      "Responder",
      "Password Spraying",
      "Inveigh"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/breachingad",
    "writeupUrl": "https://medium.com/@cyberspace_sec/tryhackme-breaching-active-directory-walkthrough-4011e4bf51a2",
    "hint": "Simulate external and internal domain perimeter breaches: run Responder/Inveigh for LLMNR/NBT-NS poison-and-capture, configure ntlmrelayx to relay SMB authentication to LDAP/SMB, and perform stealthy password spraying via kerbrute.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-exploiting-ad",
    "name": "Exploiting Active Directory",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Kerberoasting",
      "ASREPRoasting",
      "Pass-the-Hash",
      "Secretsdump"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/exploitingad",
    "writeupUrl": "https://medium.com/@matus.sventek/tryhackme-exploiting-active-directory-walkthrough-6c0b943265ef",
    "hint": "Attack core AD protocol implementations: execute targeted Kerberoasting with GetUserSPNs.py, abuse Pass-the-Hash with crackmapexec / evil-winrm, extract cached credentials from memory, and run secretsdump.py for domain-wide NTDS.dit extraction.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lateral-movement-pivoting",
    "name": "Lateral Movement and Pivoting",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Pivoting",
      "Lateral Movement",
      "WMI",
      "WinRM",
      "Chisel",
      "PsExec"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/lateralmovementandpivoting",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-lateral-movement-and-pivoting-walkthrough-e5d26a27e36c",
    "hint": "Learn operator tactics for lateral movement across Windows networks: set up Chisel reverse SOCKS tunnels, utilize WinRM and evil-winrm, execute remote processes via WMI (wmic / Invoke-WmiMethod), and leverage SMB PsExec without alerting antivirus.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-domain-privilege-escalation",
    "name": "Domain Privilege Escalation",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "BloodHound",
      "GPO Abuse",
      "ACLs",
      "GenericAll",
      "WriteDacl"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/domainprivilegeescalation",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-domain-privilege-escalation-walkthrough-99be7a398f6d",
    "hint": "Abuse Access Control Lists (ACLs) and permissions within the domain: exploit GenericAll, GenericWrite, and WriteDacl on high-value objects, abuse LAPS read permissions, and modify existing Group Policy Objects using SharpGPOAbuse.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ad-certificate-templates",
    "name": "AD Certificate Templates",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "ADCS",
      "ESC1",
      "Certipy",
      "Certificates",
      "SAN",
      "Domain Admin"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/adcertificatetemplates",
    "writeupUrl": "https://medium.com/@siddharth.k.infosec/active-directory-certificate-templates-thm-walkthrough-4045f0ba2e31",
    "hint": "Enumerate vulnerable Active Directory Certificate Services (AD CS) templates using Certipy. Identify ESC1 misconfigurations allowing enrollee supplies subject (CT_FLAG_ENROLLEE_SUPPLIES_SUBJECT) and request a certificate on behalf of the Domain Admin.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-active-directory-hardening",
    "name": "Active Directory Hardening",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Hardening",
      "LAPS",
      "Tier Model",
      "SMB Signing",
      "Kerberos Armor"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/activedirectoryhardening",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-active-directory-hardening-walkthrough-32ec79f53e6c",
    "hint": "Deep dive into domain defense: enforce SMB and LDAP signing to block relay attacks, deploy and configure Microsoft LAPS, disable NTLMv1 and LLMNR protocols, and implement administrative tiering and Protected Users groups.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-throwback",
    "name": "Throwback",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Red Team",
      "Network",
      "C2",
      "Pivoting",
      "Phishing",
      "BloodHound"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/throwback",
    "writeupUrl": "https://github.com/CyberSecurityUP/TryHackMe-Walkthroughs/tree/main/Throwback",
    "hint": "Flagship multi-machine Red Team simulation lab: craft phishing lure with weaponized macro, establish reverse C2 channel, pivot across perimeter firewalls using Chisel, dump local LSASS tokens, and abuse domain trusts to achieve full enterprise compromise.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windows-local-persistence",
    "name": "Windows Local Persistence",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Persistence",
      "Registry",
      "Scheduled Tasks",
      "Services",
      "Backdoors",
      "Red Team"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/windowslocalpersistence",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-windows-local-persistence-walkthrough-3c1a3b17478d",
    "hint": "Operator guide to maintaining persistence on Windows: configure registry Run/RunOnce keys, plant malicious Windows Services, schedule tasks under NT AUTHORITY\\SYSTEM, hijack COM objects, and abuse RID hijacking on local accounts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windows10-privesc",
    "name": "Windows PrivEsc",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Privilege Escalation",
      "Windows",
      "UAC Bypass",
      "Service Exploitation",
      "DLL Hijacking",
      "Tokens"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/windows10privesc",
    "writeupUrl": "https://0xdf.gitlab.io/2020/09/26/windows-privesc-course.html",
    "hint": "Tib3rius Windows Privilege Escalation course lab: audit service permissions with accesschk, exploit unquoted service paths and insecure file permissions, hijack missing DLLs in service paths, bypass UAC with fodhelper, and abuse SeImpersonate with PrintSpoofer.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-red-team-fundamentals",
    "name": "Red Team Fundamentals",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Red Team",
      "Methodology",
      "OPSEC",
      "Engagements",
      "Threat Emulation"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/redteamfundamentals",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-red-team-fundamentals-walkthrough-5d15a5198dcf",
    "hint": "Core doctrine of adversary simulation: mapping tradecraft to MITRE ATT&CK, establishing operational security (OPSEC) rules, defining rules of engagement, configuring multi-tiered C2 infrastructure, and documenting remediation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-av-evasion-shellcode",
    "name": "AV Evasion: Shellcode",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Red Team",
      "AV Evasion",
      "Shellcode",
      "AMSI",
      "Encryption",
      "Process Injection"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/avevasionshellcode",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-av-evasion-shellcode-walkthrough-3bc2d64f0b09",
    "hint": "Evade Windows Defender runtime detection: encrypt raw stageless shellcode with RC4/AES, execute in-memory shellcode runners using Native Windows APIs (NtAllocateVirtualMemory, NtProtectVirtualMemory), and patch AmsiScanBuffer in memory.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-living-off-the-land",
    "name": "Living Off The Land",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "LOLBAS",
      "Living Off The Land",
      "Certutil",
      "MSHTA",
      "Rundll32",
      "Red Team"
    ],
    "certifications": [
      "CRTO",
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/livingofftheland",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-living-off-the-land-walkthrough-8ff6ad6078e2",
    "hint": "Weaponize built-in binaries (LOLBAS) to stay off disk and evade detection: download payloads with certutil and bitsadmin, execute remote scripts with mshta and regsvr32, and bypass AppLocker rules using installutil and rundll32.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-red-team-engagements",
    "name": "Red Team Engagements",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Red Team",
      "Rules of Engagement",
      "OPSEC",
      "Threat Intelligence",
      "TTPs"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/redteamengagements",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-red-team-engagements-walkthrough-b97c0a6b5791",
    "hint": "Examine professional red team operational lifecycle: draft comprehensive Rules of Engagement (RoE), establish deconfliction triggers with blue team, coordinate out-of-band communication channels, and design adversary emulation plans.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ad-trusts",
    "name": "Active Directory Trusts",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Domain Trusts",
      "SID History",
      "Trust Abuse",
      "Mimikatz",
      "ExtraSids"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/activedirectorytrusts",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-active-directory-trusts-walkthrough-4091e4f451f1",
    "hint": "Enumerate parent-child and external trusts with PowerView (Get-DomainTrust). Forge inter-realm tickets using krbtgt and inject Enterprise Admin SID into SID History (ExtraSids attribute) via Mimikatz to jump from child domain to root forest domain controller.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windows-event-logs",
    "name": "Windows Event Logs",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Windows",
      "Event Logs",
      "Sysmon",
      "Log Clearing",
      "Wevtutil",
      "Red Team"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/windowseventlogs",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-windows-event-logs-walkthrough-7d7d3c0a1f9a",
    "hint": "Analyze Windows event auditing and evasion: parse Security log Event IDs (4624 logon, 4672 admin logon, 4720 user creation) with Get-WinEvent, inspect Sysmon process creation (Event ID 1), and assess log manipulation and unhooking risks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bloodhound-basics",
    "name": "BloodHound Basics",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "BloodHound",
      "Neo4j",
      "Graph Theory",
      "Active Directory",
      "SharpHound",
      "Attack Paths"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/bloodhoundbasics",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-bloodhound-basics-walkthrough-58d34b9d3e8e",
    "hint": "Collect Active Directory object telemetry with SharpHound. Ingest JSON files into Neo4j and execute custom Cypher queries in BloodHound to discover short-cut paths to Domain Admin through nested groups, local admin rights, and session hunting.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ad-tier-model",
    "name": "AD Tier Model",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Active Directory",
      "Tier Model",
      "Tier 0",
      "Tier 1",
      "PAW",
      "Hardening"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://tryhackme.com/room/adtiermodel",
    "writeupUrl": "https://medium.com/@0xAwali/tryhackme-ad-tier-model-walkthrough-97be2c90c741",
    "hint": "Study Microsoft's classic 3-tier administrative model (Tier 0 Identity/Domain Controllers, Tier 1 Enterprise Servers, Tier 2 User Workstations). Identify common anti-patterns such as Tier 0 admins logging into Tier 2 workstations and dumping LSASS.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-brainstorm",
    "name": "Brainstorm",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Buffer-Overflow",
      "FTP",
      "x86",
      "Privesc",
      "OSCP",
      "Buffer Overflow",
      "Reverse Engineering",
      "Immunity Debugger"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/brainstorm",
    "writeupUrl": "https://nepcodex.com/2021/07/brainstorm-tryhackme-walkthrough/",
    "hint": "Download chatserver.exe and essfunc.dll from the anonymous FTP service on port 21, identify the buffer overflow on port 9999 locally using Immunity Debugger, and locate a reliable JMP ESP in essfunc.dll.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-blue",
    "name": "Blue",
    "ip": "10.10.150.26",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "EternalBlue",
      "MS17-010",
      "SMB",
      "Classic Pentesting"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/blue",
    "writeupUrl": "https://medium.com/@cuncis/tryhackme-blue-walkthrough-5db2e6e96dc6",
    "hint": "Scan SMB port 445 for the MS17-010 EternalBlue vulnerability, execute zzz_exploit.py or Metasploit ms17_010_eternalblue, and dump NTLM hashes from SAM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tomghost",
    "name": "Tomghost",
    "ip": "10.10.150.29",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "OSCP",
      "Ghostcat",
      "CVE-2020-1938",
      "Apache Tomcat",
      "AJP",
      "GPG Crack"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/tomghost",
    "writeupUrl": "https://medium.com/@stuxnet999/tryhackme-tomghost-walkthrough-a8b277fbceae",
    "hint": "Exploit Apache JServ Protocol (AJP) port 8009 with the Ghostcat exploit (CVE-2020-1938) to read WEB-INF/web.xml credentials, crack the encrypted PGP key with john2gpg, and abuse sudo zip for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-yearofthefox",
    "name": "Year of the Fox",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CTF",
      "Web",
      "Command-Injection",
      "Port-Forwarding",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/yearofthefox",
    "writeupUrl": "https://nepcodex.com/2021/07/year-of-the-fox-tryhackme-walkthrough/",
    "hint": "Bypass HTTP basic auth with hydra on SMB search, exploit command injection in search parameter via newline delimiters, pivot through internal port 80/socat, and exploit sudo /usr/sbin/shutdown poweroff.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-yearoftherabbit",
    "name": "Year of the Rabbit",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CTF",
      "BurpSuite",
      "Steganography",
      "Sudo-CVE",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/yearoftherabbit",
    "writeupUrl": "https://nepcodex.com/2021/07/year-of-the-rabbit-tryhackme-walkthrough/",
    "hint": "Intercept JavaScript redirection to find hidden page, extract embedded audio file from image, crack hidden zip password, and exploit CVE-2019-14287 (sudo -u#-1) on vi.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-yearofthedog",
    "name": "Year of the Dog",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CTF",
      "SQLi",
      "Gitea",
      "Command-Injection",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/yearofthedog",
    "writeupUrl": "https://nepcodex.com/2021/07/year-of-the-dog-tryhackme-walkthrough/",
    "hint": "Exploit SQL injection in the queue system cookie, leverage Gitea webhook / repository hooks to obtain command execution, and abuse logrotate wildcard/privesc.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-yearofthepig",
    "name": "Year of the Pig",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CTF",
      "Web",
      "Brute-Force",
      "Capabilities",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/yearofthepig",
    "writeupUrl": "https://nepcodex.com/2021/07/year-of-the-pig-tryhackme-walkthrough/",
    "hint": "Brute force audio transcription API, harvest credentials via web application flaw, and exploit SUID/capabilities on binary wrappers to escalate to root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-stuxctf",
    "name": "StuxCTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Serialization",
      "PHP-Object-Injection",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/stuxctf",
    "writeupUrl": "https://nepcodex.com/2021/07/stuxctf-tryhackme-walkthrough/",
    "hint": "Find hidden robots.txt directory, analyze serialized PHP cookie parameter, craft PHP object injection payload to trigger file write or command execution, and inspect sudo permissions.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-team",
    "name": "Team",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "LFI",
      "Bash-Scripting",
      "Privesc",
      "Wildcards"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/team",
    "writeupUrl": "https://nepcodex.com/2021/07/team-tryhackme-walkthrough/",
    "hint": "Fuzz vhosts to discover team.thm, leverage LFI in script.php to leak ssh keys, exploit sudo permission on bash script reading arbitrary inputs, and abuse tar wildcard injection in backup script for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-githappens",
    "name": "Git Happens",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Git",
      "Information-Disclosure",
      "Source-Code-Analysis"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/githappens",
    "writeupUrl": "https://nepcodex.com/2021/07/git-happens-tryhackme-walkthrough/",
    "hint": "Dump exposed .git repository using git-dumper, inspect commit history and git log diffs to recover hardcoded passwords and encryption keys.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-watcher",
    "name": "Watcher",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "LFI",
      "FTP",
      "Cron",
      "Sudo-Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/watcher",
    "writeupUrl": "https://nepcodex.com/2021/07/watcher-tryhackme-walkthrough/",
    "hint": "Exploit LFI in post parameter to read /etc/passwd and config files, upload reverse shell via secret FTP directory, exploit sudo permissions to pivot between users, and leverage cronjob script to obtain root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-reverselfiles",
    "name": "Reversing ELF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Reverse-Engineering",
      "GDB",
      "Radare2",
      "Binary-Analysis"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/reverselfiles",
    "writeupUrl": "https://nepcodex.com/2021/07/reversing-elf-tryhackme-walkthrough/",
    "hint": "Disassemble binary files using Ghidra/radare2/strings to recover hardcoded passwords, trace function execution with ltrace, and patch conditional jump instructions in GDB.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lookup",
    "name": "Lookup",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Web",
      "ELK",
      "Command-Injection",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lookup",
    "writeupUrl": "https://nepcodex.com/2021/07/lookup-tryhackme-walkthrough/",
    "hint": "Enumerate subdomain lookup.thm, identify password reset flaw, exploit command injection in ELK stack query input, and escalate through custom binary with SUID permissions.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnnetinternal",
    "name": "VulnNet: Internal",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CTF",
      "SMB",
      "Redis",
      "TeamCity",
      "Tunneling"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnnetinternal",
    "writeupUrl": "https://nepcodex.com/2021/07/vulnnet-internal-tryhackme-walkthrough/",
    "hint": "Access unauthenticated SMB share for network diagrams, connect to exposed Redis instance to dump secrets, set up SSH tunnels to internal TeamCity server, and execute build runner commands as root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnnetdotjar",
    "name": "VulnNet: dotjar",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Tomcat",
      "AJP-Ghostcat",
      "JAR-Reverse",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnnetdotjar",
    "writeupUrl": "https://nepcodex.com/2021/07/vulnnet-dotjar-tryhackme-walkthrough/",
    "hint": "Exploit Ghostcat (CVE-2020-1938) on AJP port 8009 to read web.xml and credentials, deploy malicious WAR file on Apache Tomcat manager, inspect Java JAR files, and exploit shadow backup script.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-harder",
    "name": "Harder",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CTF",
      "Git",
      "HMAC",
      "GPG",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/harder",
    "writeupUrl": "https://nepcodex.com/2021/07/harder-tryhackme-walkthrough/",
    "hint": "Inspect exposed git directory to discover HMAC authentication bypass logic, forge authentication header, exploit cronjob script with gpg keys, and abuse sudo permissions.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-borderlands",
    "name": "Borderlands",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "CTF",
      "Pivoting",
      "API",
      "Docker",
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/borderlands",
    "writeupUrl": "https://nepcodex.com/2021/07/borderlands-tryhackme-walkthrough/",
    "hint": "Multi-tier network pivoting challenge: exploit API vulnerability for initial entry, route traffic through internal network subnets, exploit docker sockets and kernel configurations.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sightless",
    "name": "Sightless",
    "ip": "10.10.11.32",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "SQLPad",
      "Chrome DevTools",
      "Pivoting",
      "Privilege Escalation",
      "SQLi",
      "PyLoad-CVE-2023-0297",
      "Froxlor",
      "Chrome-Sandbox-Escape"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/sightless",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sightless",
    "hint": "Exploit CVE-2022-0944 template injection in an internal SQLPad instance to achieve initial shell access. Forward the internal Chrome DevTools debugging port to your host to capture administrative session tokens, and escalate via Froxlor privilege misconfigurations.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-chemistry",
    "name": "Chemistry",
    "ip": "10.10.11.38",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "CIF Parser",
      "Python",
      "Pivoting",
      "Privilege Escalation",
      "CIF-Upload",
      "CVE-2024-23346",
      "Aiohttp",
      "Sudo-Abuse"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/chemistry",
    "writeupUrl": "https://0xdf.gitlab.io/tags#chemistry",
    "hint": "Upload a crafted CIF (Crystallographic Information File) to trigger arbitrary Python code execution in the parser library. Extract stored SQLite database credentials, pivot to the local service user, and exploit an internal monitoring daemon running with root permissions.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-intuition",
    "name": "Intuition",
    "ip": "10.10.11.233",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Web",
      "Flask",
      "SSTI",
      "Suricata-Bypass",
      "OpenSearch-CVE-2023-23613",
      "Ansible"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/intuition",
    "writeupUrl": "https://0xdf.gitlab.io/tags#intuition",
    "hint": "Bypass Suricata rule set with encoded payloads to reach Flask SSTI, pivot through OpenSearch Dashboards CVE-2023-23613, and escalate via Ansible playbook task injection.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-visual",
    "name": "Visual",
    "ip": "10.10.11.234",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Windows",
      "Web",
      "Visual Studio",
      "MSBuild",
      "SeImpersonatePrivilege",
      "Git",
      "MSBuild-Execution",
      "FullPowers",
      "Windows-Service-Privesc"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/visual",
    "writeupUrl": "https://0xdf.gitlab.io/tags#visual",
    "hint": "Submit a crafted Git repository with a malicious .sln/.csproj file containing MSBuild PreBuildEvent commands to gain a shell upon automated compilation. Leverage enabled SeImpersonatePrivilege or RogueWinRM to escalate to NT AUTHORITY\\SYSTEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-usage",
    "name": "Usage",
    "ip": "10.10.11.18",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Blind SQLi",
      "7-Zip Symlink",
      "Privilege Escalation",
      "SQLi-Header",
      "Laravel",
      "7-Zip-CVE-2023-40481",
      "Wildcard-Privesc"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/usage",
    "writeupUrl": "https://0xdf.gitlab.io/tags#usage",
    "hint": "Identify boolean-based blind SQL injection on the password reset portal to extract the admin password hash. Upload a PHP shell via avatar profile upload, and elevate to root by abusing a 7-Zip symlink extraction flaw in an automated backup script.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-mailing",
    "name": "Mailing",
    "ip": "10.10.11.14",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Windows",
      "Email",
      "Directory Traversal",
      "LibreOffice",
      "Privilege Escalation",
      "Web",
      "hMailServer",
      "CVE-2024-21413",
      "Outlook-Moniker-RCE",
      "LibreOffice-CVE-2023-2255"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/mailing",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mailing",
    "hint": "Exploit directory traversal in hMailServer via an exposed file download endpoint to read sensitive configuration files and password hashes. Crack the administrator hash and leverage a LibreOffice CVE-2023-2255 document execution exploit for SYSTEM privileges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-surveillance",
    "name": "Surveillance",
    "ip": "10.10.11.245",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Craft CMS",
      "ZoneMinder",
      "Pivoting",
      "CVE-2023-41892",
      "Craft-CMS-CVE-2023-41892",
      "ZoneMinder-CVE-2023-26035",
      "Hash-Cracking",
      "Sudo"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/surveillance",
    "writeupUrl": "https://0xdf.gitlab.io/tags#surveillance",
    "hint": "Exploit unauthenticated RCE in Craft CMS (CVE-2023-41892) via template rendering parameter manipulation. Pivot to the internal ZoneMinder service vulnerable to CVE-2023-26035 command injection, and exploit a sudo zmupdate.pl command execution vector for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-monitored",
    "name": "Monitored",
    "ip": "10.10.11.248",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Web",
      "Nagios-XI-CVE-2023-40931",
      "Cacti",
      "SQLi",
      "SUID-Abuse"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/monitored",
    "writeupUrl": "https://0xdf.gitlab.io/tags#monitored",
    "hint": "Leverage SQL injection in Nagios XI (CVE-2023-40931) to extract admin API tokens, achieve authenticated command injection, and exploit a custom SUID monitor binary for privilege escalation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-runner",
    "name": "Runner",
    "ip": "10.10.11.13",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "TeamCity",
      "CVE-2024-27198",
      "Portainer",
      "Docker",
      "TeamCity-CVE-2023-42793",
      "Docker-Escape",
      "SSH-Keys"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/runner",
    "writeupUrl": "https://0xdf.gitlab.io/tags#runner",
    "hint": "Exploit TeamCity authentication bypass (CVE-2024-27198) to create an administrator account and deploy a malicious build step. Extract SSH keys from the host filesystem, access the internal Portainer API, and escape into the host root file system via mounted volumes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-perfection",
    "name": "Perfection",
    "ip": "10.10.11.253",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "SSTI",
      "Ruby",
      "ERB",
      "Hashcat",
      "Ruby-WEBrick",
      "SSTI-ERB",
      "Sudo-Abuse"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/perfection",
    "writeupUrl": "https://0xdf.gitlab.io/tags#perfection",
    "hint": "Bypass grade calculator input sanitization using CRLF (%0a) newline injection, inject Ruby ERB template syntax (<%= system(...) %>) for a reverse shell, and crack the local user password hash from the SQLite database using Hashcat mask mode.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-hospital",
    "name": "Hospital",
    "ip": "10.10.11.241",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Windows",
      "Roundcube",
      "Webmail",
      "CVE-2023-43770",
      "SeImpersonatePrivilege",
      "Web",
      "Roundcube-CVE-2023-43770",
      "Ghostscript-CVE-2023-36664",
      "Shadow-Credentials",
      "CPTS",
      "Ghostscript",
      "VSS",
      "Active Directory"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Hospital",
    "writeupUrl": "https://0xdf.gitlab.io/tags#hospital",
    "hint": "Exploit a Roundcube Webmail attachment vulnerability or Ghostscript image execution flaw to gain a web shell. Pivot internally to enumerate Windows service accounts, and leverage Volume Shadow Copy (VSS) or misconfigured services to extract domain credentials.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-clicker",
    "name": "Clicker",
    "ip": "10.10.11.232",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "NFS",
      "Mass Assignment",
      "SQL Injection",
      "Cron",
      "Mass-Assignment",
      "PHP-Deserialization",
      "Setuid-Perl"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/clicker",
    "writeupUrl": "https://0xdf.gitlab.io/tags#clicker",
    "hint": "Mount an open NFS share on port 2049 to inspect PHP source code. Exploit a mass assignment parameter flaw to upgrade account privileges to admin, inject SQL commands through the export profile feature to generate a PHP web shell, and leverage sudo execute_query.sh.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-zipping",
    "name": "Zipping",
    "ip": "10.10.11.229",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Web",
      "Zip-Symlink",
      "LFI",
      "SQLi",
      "Shared-Library-Hijack"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/zipping",
    "writeupUrl": "https://0xdf.gitlab.io/tags#zipping",
    "hint": "Upload zip file containing symlinks to read arbitrary files via LFI, exploit stacked SQL queries to write a shared library file, and execute a vulnerable binary with sudo to load the malicious .so.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sandworm",
    "name": "Sandworm",
    "ip": "10.10.11.218",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "SSTI",
      "Sandbox Escape",
      "Firejail",
      "Rust",
      "Pivoting",
      "GPG",
      "LibreOffice-Macro",
      "Rust-Reverse-Engineering",
      "Firemin"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/sandworm",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sandworm",
    "hint": "Trigger a Jinja2 SSTI vulnerability through PGP signature verification on the web portal to gain an unprivileged shell inside Firejail. Break out of the sandbox using an exposed IPC vector, then reverse engineer the root cronjob Rust binary to hijack execution.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-broker",
    "name": "Broker",
    "ip": "10.10.11.243",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Web",
      "ActiveMQ-CVE-2023-46604",
      "Java-Deserialization",
      "Sudo-Nginx"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/broker",
    "writeupUrl": "https://0xdf.gitlab.io/tags#broker",
    "hint": "Exploit Apache ActiveMQ OpenWire unauthenticated remote code execution (CVE-2023-46604) using XML class loading, then escalate privileges using sudo /usr/sbin/nginx with a custom configuration.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-underpass",
    "name": "Underpass",
    "ip": "10.10.11.48",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SNMP-Walk",
      "Daloradius",
      "FreeRADIUS",
      "Password-Cracking",
      "Mktemp-Privesc"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/underpass",
    "writeupUrl": "https://0xdf.gitlab.io/tags#underpass",
    "hint": "Perform snmpwalk with public community string to reveal daloradius user credentials, log into daloRADIUS panel, crack RADIUS admin MD5 hash, and escalate via sudo mktemp script.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sea",
    "name": "Sea",
    "ip": "10.10.11.28",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "SeaCMS",
      "XSS",
      "Pivoting",
      "Privilege Escalation",
      "WonderCMS-CVE-2023-41425",
      "XSS-to-RCE",
      "Port-Forwarding",
      "Amprun"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/sea",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sea",
    "hint": "Exploit a known SeaCMS vulnerability to obtain a low-privileged shell on the machine. Enumerate internal services listening on localhost, set up SSH or chisel port forwarding to access an internal administration dashboard, and exploit an automated maintenance script for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-barkley",
    "name": "Barkley",
    "ip": "10.10.11.44",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Web",
      "SPIP-CMS-CVE-2024-8517",
      "RCE",
      "Internal-Monitoring",
      "Docker-Privesc"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/barkley",
    "writeupUrl": "https://0xdf.gitlab.io/tags#barkley",
    "hint": "Exploit SPIP CMS unauthenticated command execution (CVE-2024-8517) in portfolio upload, pivot to internal monitoring service, and abuse docker group or socket to obtain root access.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-blurry",
    "name": "Blurry",
    "ip": "10.10.11.19",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Web",
      "ClearML-CVE-2024-24590",
      "Pickle-Deserialization",
      "PyTorch",
      "Sudo-MLflow"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/blurry",
    "writeupUrl": "https://0xdf.gitlab.io/tags#blurry",
    "hint": "Exploit ClearML server artifact deserialization (CVE-2024-24590) by publishing a malicious PyTorch model artifact with a pickle payload, then escalate via sudo /usr/bin/mlflow command execution.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-escapetwo",
    "name": "EscapeTwo",
    "ip": "10.10.11.51",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "ActiveDirectory",
      "MSSQL-Linked-Server",
      "Coerce-Authentication",
      "GPO-Abuse",
      "LAPS"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/escapetwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#escapetwo",
    "hint": "Query linked MSSQL server instances to read configuration data, coerce authentication via xp_dirtree to Responder, crack NetNTLMv2 hash, abuse misconfigured GPO permissions, and query LAPS for Administrator password.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-administrator",
    "name": "Administrator",
    "ip": "10.10.11.45",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "ActiveDirectory",
      "ADCS",
      "Golden-Cert",
      "Kerberoasting",
      "BloodHound"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/administrator",
    "writeupUrl": "https://0xdf.gitlab.io/tags#administrator",
    "hint": "Enumerate domain users and perform kerberoasting to retrieve initial service account credentials, identify vulnerable ADCS certificate templates using Certify, and forge a certificate to impersonate Domain Admin.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-brokewell",
    "name": "Brokewell",
    "ip": "10.10.11.52",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Android-Reversing",
      "Frida",
      "JWT-Manipulation",
      "CVE-2024-41110",
      "Docker-Auth"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/brokewell",
    "writeupUrl": "https://0xdf.gitlab.io/tags#brokewell",
    "hint": "Decompile downloaded APK to find API endpoints and encryption keys, forge a valid session JWT to access the admin portal, and exploit Docker Authz bypass (CVE-2024-41110) to escape to the host.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-silverplatter",
    "name": "SilverPlatter",
    "ip": "10.10.11.49",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "ActiveDirectory",
      "ADCS-ESC1",
      "Shadow-Credentials",
      "RBCD",
      "gMSA"
    ],
    "certifications": [
      "OSCP",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/silverplatter",
    "writeupUrl": "https://0xdf.gitlab.io/tags#silverplatter",
    "hint": "Perform AS-REP Roasting on discovered domain accounts, enumerate Active Directory Certificate Services for ESC1 misconfiguration, and execute Resource-Based Constrained Delegation (RBCD) to achieve domain dominance.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-knight",
    "name": "Knight",
    "ip": "10.10.11.53",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Web",
      "Gitea",
      "GraphQL-Injection",
      "Custom-Kernel-Module",
      "Binary-Exploitation"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/knight",
    "writeupUrl": "https://0xdf.gitlab.io/tags#knight",
    "hint": "Exploit GraphQL injection in custom web API to leak developer tokens, access internal Gitea repositories containing kernel source code, and trigger an integer overflow in the custom character driver device to escalate to root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-submerged",
    "name": "Submerged",
    "ip": "10.10.11.41",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Web",
      "SPIP-CVE-2024-7928",
      "RCE-Bypass",
      "Linux-Capabilities",
      "Chroot-Escape"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/submerged",
    "writeupUrl": "https://0xdf.gitlab.io/tags#submerged",
    "hint": "Exploit SPIP unauthenticated RCE (CVE-2024-7928) through oups parameter, inspect binary capabilities with getcap to find cap_sys_chroot, and execute a chroot break-out payload to gain full root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-antivirus",
    "name": "Antivirus",
    "ip": "10.10.11.36",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Web",
      "ClamAV-Milter",
      "CVE-2023-20032",
      "Sendmail",
      "Sudo-Abuse"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/antivirus",
    "writeupUrl": "https://0xdf.gitlab.io/tags#antivirus",
    "hint": "Send a crafted email attachment exploiting ClamAV HFS+ partition buffer overflow (CVE-2023-20032), obtain initial shell under clamav account, and exploit sudo privileges on quarantine script to escalate.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-agile",
    "name": "Agile",
    "ip": "10.10.11.203",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "LFI",
      "Werkzeug PIN",
      "Chrome Debugging",
      "Pytest",
      "Flask-LFI",
      "Werkzeug-PIN",
      "Chrome-DevTools",
      "Pytest-Privesc"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/agile",
    "writeupUrl": "https://0xdf.gitlab.io/tags#agile",
    "hint": "Dump machine GUID and MAC address via an LFI vulnerability in the export functionality to calculate the Werkzeug debugger console PIN. Once authenticated, tunnel into a headless Chrome remote debugging port to steal cookies and abuse pytest sudo privileges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-pc",
    "name": "PC",
    "ip": "10.10.11.214",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "gRPC",
      "SQL Injection",
      "Pivoting",
      "PySqlite",
      "Privilege Escalation",
      "Web",
      "SQLi-gRPC",
      "Pywall-Privesc",
      "Port-Forwarding"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/pc",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pc",
    "hint": "Scan high ports to locate a gRPC service on port 50051. Use grpcui to inspect proto definitions and exploit SQL injection in the login/getInfo RPC calls to extract tokens, then pivot via an internal SQLite service vulnerable to malicious extension loading.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-format",
    "name": "Format",
    "ip": "10.10.11.213",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "LFI",
      "Nginx Traversal",
      "Redis",
      "Format String",
      "Pivoting",
      "Microblog",
      "Redis-Socket",
      "Python-String-Formatting"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/format",
    "writeupUrl": "https://0xdf.gitlab.io/tags#format",
    "hint": "Leverage an Nginx alias path traversal misconfiguration to obtain source code, communicate with the local Redis UNIX domain socket to poison session objects, and exploit a Python string format vulnerability ({user.__init__.__globals__}) in the backup script.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-precious",
    "name": "Precious",
    "ip": "10.10.11.189",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Command Injection",
      "pdfkit",
      "YAML Deserialization",
      "Ruby",
      "pdfkit-CVE-2022-25765",
      "Command-Injection",
      "YAML-Deserialization"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/precious",
    "writeupUrl": "https://0xdf.gitlab.io/tags#precious",
    "hint": "Inspect the web service PDF converter headers and exploit CVE-2022-25765 command injection in pdfkit via the URL parameter. To root, inspect user dependencies and abuse insecure YAML deserialization in the update script run via sudo.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-soccer",
    "name": "Soccer",
    "ip": "10.10.11.168",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Blind SQLi",
      "WebSockets",
      "Dstat",
      "Doas",
      "Tinyfilemanager",
      "WebSocket",
      "Blind-SQLi",
      "Dsniff-Doas"
    ],
    "certifications": [
      "CPTS",
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/soccer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#soccer",
    "hint": "Log into Tiny File Manager on port 80 using default credentials and upload a PHP web shell. Enumerate an internal ticket portal communicating over WebSockets, extract user credentials using sqlmap over a custom middleware proxy, and abuse doas /usr/bin/dstat for root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-inject",
    "name": "Inject",
    "ip": "10.10.11.204",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Spring Cloud",
      "SpEL Injection",
      "Ansible",
      "Automation",
      "Spring-Cloud-CVE-2022-22963",
      "Ansible-Automation",
      "YAML-Privesc"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/inject",
    "writeupUrl": "https://0xdf.gitlab.io/tags#inject",
    "hint": "Exploit Spring Cloud Function SpEL RCE (CVE-2022-22963) via the spring.cloud.function.routing-expression HTTP header on the file upload service. Enumerate user directories to pivot credentials, and inject arbitrary tasks into an Ansible playbook executed by a root cronjob.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-buscador",
    "name": "Buscador",
    "ip": "10.10.11.207",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Web",
      "Searchor-2.4.0-CVE-2023-33373",
      "Python-Eval",
      "Git-Credentials",
      "Docker-Privesc"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/buscador",
    "writeupUrl": "https://0xdf.gitlab.io/tags#buscador",
    "hint": "Exploit arbitrary code execution in Searchor 2.4.0 (CVE-2023-33373) through Python eval() injection, inspect local git commit history for credentials, and abuse sudo /usr/bin/docker for container breakout to host.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-goose",
    "name": "Goose",
    "ip": "10.10.11.240",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Web",
      "ActiveDirectory",
      "ADCS-ESC13",
      "Certify",
      "BloodHound"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/goose",
    "writeupUrl": "https://0xdf.gitlab.io/tags#goose",
    "hint": "Enumerate vulnerable ADCS certificate templates exhibiting ESC13 (certificate policy abuse), request and enroll certificate using Certify, and authenticate via PKINIT to elevate to Domain Admin.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-alert",
    "name": "Alert",
    "ip": "10.10.11.44",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Markdown XSS",
      "LFI",
      "Port Forwarding",
      "Privilege Escalation",
      "Markdown-XSS",
      "Website-Monitor-SSRF",
      "SUID"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/alert",
    "writeupUrl": "https://0xdf.gitlab.io/tags#alert",
    "hint": "Abuse a Markdown parser XSS vulnerability to perform an internal port scan and steal administrator credentials. Forward internal ports to access a local monitoring panel, and exploit a misconfigured backup script executing root commands.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-flight",
    "name": "Flight",
    "ip": "10.10.11.160",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Active Directory",
      "Pivoting",
      "Responder",
      "AD CS",
      "BloodHound",
      "Hashcat"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/flight",
    "writeupUrl": "https://0xdf.gitlab.io/tags#flight",
    "hint": "Exploit an LFI in the flight booking portal to force an SMB connection back to Responder for NetNTLMv2 hash capture. After cracking the credential and running BloodHound, identify an internal service and exploit AD CS certificate template ESC4 to gain Domain Admin.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-encoding",
    "name": "Encoding",
    "ip": "10.10.11.198",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "LFI",
      "PHP Filters",
      "Git Hooks",
      "Privilege Escalation"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/encoding",
    "writeupUrl": "https://0xdf.gitlab.io/tags#encoding",
    "hint": "Use PHP iconv filter chains over an LFI parameter to achieve arbitrary file read across the web root. Locate internal API scripts to retrieve user credentials, and exploit a custom Git commit-msg hook executed under sudo without secure environment protection.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-stocker",
    "name": "Stocker",
    "ip": "10.10.11.196",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "NoSQL Injection",
      "Server-Side XSS",
      "NodeJS",
      "SSRF"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/stocker",
    "writeupUrl": "https://0xdf.gitlab.io/tags#stocker",
    "hint": "Bypass JSON login validation using a NoSQL injection payload ([]). In the purchase checkout order summary, inject Server-Side XSS with an iframe pointing to file:///var/www/dev/index.js to leak credentials, then abuse sudo node execution on wildcard paths.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-broscience",
    "name": "BroScience",
    "ip": "10.10.11.195",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Insecure Deserialization",
      "PRNG",
      "PHP",
      "Certificate Abuse"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/broscience",
    "writeupUrl": "https://0xdf.gitlab.io/tags#broscience",
    "hint": "Crack the activation token by reverse engineering the PHP rand() seed tied to the HTTP server response Date header. Trigger PHP object deserialization via an image metadata parameter, and exploit a root maintenance bash script verifying self-signed OpenSSL certificates.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-busqueda",
    "name": "Busqueda",
    "ip": "10.10.11.208",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "RCE",
      "Python",
      "Searchor",
      "Git",
      "Docker"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/busqueda",
    "writeupUrl": "https://0xdf.gitlab.io/tags#busqueda",
    "hint": "Identify the Searchor 2.4.0 library in the Flask application and exploit eval() parameter injection to obtain a shell. Harvest Git repository config credentials to authenticate to Gitea, and hijack the Python system-check script run via sudo to inspect Docker containers.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-only4you",
    "name": "Only4You",
    "ip": "10.10.11.210",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Cypher Injection",
      "Neo4j",
      "Pivoting",
      "Pip"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/only4you",
    "writeupUrl": "https://0xdf.gitlab.io/tags#only4you",
    "hint": "Identify path traversal in the image download handler to leak source code, discover an internal Neo4j database endpoint, execute Cypher injection to dump password hashes, and achieve root by abusing sudo /usr/bin/pip download with custom setup.py execution.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-jupiter",
    "name": "Jupiter",
    "ip": "10.10.11.216",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Grafana",
      "PostgreSQL",
      "Jupyter",
      "Shadow"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/jupiter",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jupiter",
    "hint": "Send arbitrary SQL queries through Grafana raw data source queries to read sensitive PostgreSQL records, pivot to a local Jupyter notebook service to execute arbitrary Python commands, and analyze Shadow network simulation configuration files for root elevation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-monitorstwo",
    "name": "MonitorsTwo",
    "ip": "10.10.11.211",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "Cacti",
      "Docker Breakout",
      "CVE-2022-46169",
      "OverlayFS"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/monitorstwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#monitorstwo",
    "hint": "Exploit Cacti 1.2.22 unauthenticated command injection via CVE-2022-46169 by spoofing X-Forwarded-For headers to get a container shell. Dump the MySQL database for host credentials, and break out of Docker using CVE-2021-41091 (overlay2 directory permissions).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-manager",
    "name": "Manager",
    "ip": "10.10.11.236",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Active Directory",
      "MSSQL",
      "AD CS",
      "Certipy",
      "Privilege Escalation"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/manager",
    "writeupUrl": "https://0xdf.gitlab.io/tags#manager",
    "hint": "Brute force RID or spray active users to obtain initial AD credentials, connect to MSSQL on port 1433 and read backup files via xp_dirtree, recover web credentials, and request administrator certificates via AD CS ESC7 abuse using Certipy.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bagel",
    "name": "Bagel",
    "ip": "10.10.11.201",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "LFI",
      "Spring Boot",
      ".NET Deserialization",
      "Pivoting"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/bagel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bagel",
    "hint": "Exploit an LFI in the image viewing parameter to extract source code from /proc/self/cwd, locate Spring Boot configuration files, and exploit a local .NET application using Json.NET TypeNameHandling deserialization over an internal TCP socket to gain root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-investigation",
    "name": "Investigation",
    "ip": "10.10.11.197",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Web",
      "ExifTool",
      "Forensics",
      "Binary Analysis",
      "Perl"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/investigation",
    "writeupUrl": "https://0xdf.gitlab.io/tags#investigation",
    "hint": "Exploit ExifTool command injection (CVE-2022-23935) via a pipe character in the uploaded filename to get a reverse shell. Parse an exported Windows EVTX event log to retrieve user credentials, and reverse engineer a custom compiled binary to exploit Perl execution flaw.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-instant",
    "name": "Instant",
    "ip": "10.10.11.37",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Mobile",
      "Android APK",
      "API",
      "Swagger",
      "Privilege Escalation"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/instant",
    "writeupUrl": "https://0xdf.gitlab.io/tags#instant",
    "hint": "Decompile the Android APK with jadx to uncover hidden backend API endpoints and secret JWT signing keys. Forge an administrative token to interact with Swagger API endpoints, obtain SSH access, and exploit an internal backup cronjob running with root permissions.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-crafty",
    "name": "Crafty",
    "ip": "10.10.11.249",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "CPTS",
      "Windows",
      "Minecraft",
      "Log4j",
      "JNDI",
      "Privilege Escalation"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/crafty",
    "writeupUrl": "https://0xdf.gitlab.io/tags#crafty",
    "hint": "Trigger Log4Shell (CVE-2021-44228) via chat messages on the exposed Minecraft server (port 25565) using a rogue LDAP/JNDI server to obtain an initial Windows shell. Inspect internal files and credentials to escalate privileges to Administrator.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-dante",
    "name": "Dante (ProLab)",
    "ip": "10.10.110.1",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "ProLabs",
      "Active Directory",
      "Pivoting",
      "Chisel",
      "Multi-Subnet",
      "BloodHound"
    ],
    "certifications": [
      "CRTO",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/prolabs/dante",
    "writeupUrl": "https://0xdf.gitlab.io/tags#prolabs",
    "hint": "Enterprise network spanning 4 subnets and 14 machines. Chain SOCKS proxies via Chisel, pivot across dual-homed Linux routers, and compromise domain controllers via BloodHound path.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-offshore",
    "name": "Offshore (ProLab)",
    "ip": "10.10.120.1",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "ProLabs",
      "Active Directory",
      "Forest Trust",
      "Kerberoasting",
      "BloodHound",
      "C2"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/prolabs/offshore",
    "writeupUrl": "https://0xdf.gitlab.io/tags#prolabs",
    "hint": "Corporate multi-forest AD environment. Exploit external DMZ webshell, establish Covenant/Sliver C2, execute cross-forest Kerberoasting and abuse bidirectional domain trust.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-rastalabs",
    "name": "RastaLabs (ProLab)",
    "ip": "10.10.130.1",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "ProLabs",
      "Active Directory",
      "Red Team",
      "AMSI Bypass",
      "EDR Evasion",
      "Cobalt Strike"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/prolabs/rastalabs",
    "writeupUrl": "https://0xdf.gitlab.io/tags#prolabs",
    "hint": "Full red-team simulation lab designed by RastaMouse. Requires stealth execution, AMSI patching, custom shellcode loaders, and unconstrained delegation exploitation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-cybernetics",
    "name": "Cybernetics (ProLab)",
    "ip": "10.10.140.1",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "ProLabs",
      "Active Directory",
      "AD CS",
      "SCCM",
      "BloodHound",
      "Kerberos"
    ],
    "certifications": [
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/prolabs/cybernetics",
    "writeupUrl": "https://0xdf.gitlab.io/tags#prolabs",
    "hint": "Modern enterprise Windows infrastructure. Abuse SCCM management point credentials, compromise Active Directory Certificate Services (AD CS), and maintain persistence.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-zephyr",
    "name": "Zephyr (ProLab)",
    "ip": "10.10.150.1",
    "os": "Active Directory",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "ProLabs",
      "Active Directory",
      "LAPS",
      "GPO Abuse",
      "Kerberoasting"
    ],
    "certifications": [
      "CRTO",
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/prolabs/zephyr",
    "writeupUrl": "https://0xdf.gitlab.io/tags#prolabs",
    "hint": "Intermediate AD lab covering lateral movement, LAPS password retrieval, GPO modification abuse, and DCSync via DS-Replication-Get-Changes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  }
];
