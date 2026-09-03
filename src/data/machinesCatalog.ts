// Auto-generated mega catalog for SpecterCTF / HexTracker
// Total machines: 1530
// Integrated HTB & THM Complete Rosters
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
      "PowerUp",
      "THM",
      "Walkthrough",
      "nmap"
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
      "PrintSpoofer",
      "THM",
      "Walkthrough"
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
      "Windows Privesc",
      "THM",
      "Walkthrough",
      "nmap"
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
      "2020",
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/blueprint",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Hack into this Windows machine and escalate your privileges to Administrator."
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
      "Classic Pentesting",
      "THM",
      "Walkthrough"
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
      "Classic Pentesting",
      "THM",
      "Walkthrough"
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
      "2021",
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/blog",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Billy Joel made a Wordpress blog!"
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
      "Classic Pentesting",
      "THM",
      "CTF",
      "-"
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
      "2020",
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mrrobot",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-mr-robot-ctf-writeup-f1fa708233a1",
    "hint": "Based on the Mr. Robot show, can you root this box?"
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
      "2020",
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/overpass",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "What happens when some broke CompSci students make a password manager?"
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
      "GTFOBins",
      "THM",
      "CTF"
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
      "2021",
      "THM",
      "Walkthrough",
      "Wireshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/overpass2hacked",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Overpass has been hacked! Can you analyse the attacker's actions and hack back in?"
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
      "2021",
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/overpass3hosting",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "You know them, you love them, your favourite group of broke computer science students have another business venture! Show them that they probably should hire someone for security..."
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
      "2020",
      "THM",
      "CTF",
      "nmap",
      "gobuster",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thompson",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-thompson-ctf-writeup-en-draft-624958e17260",
    "hint": "boot2root machine for FIT and bsides guatemala CTF"
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
      "2020",
      "THM",
      "CTF",
      "nmap",
      "hydra",
      "gobuster"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gamingserver",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-gamingserver-ctf-writeup-7b48ea4e3c9e",
    "hint": "An Easy Boot2Root box for beginners"
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
      "Tar Wildcard Privesc",
      "THM",
      "CTF"
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
      "SeImpersonatePrivilege",
      "THM",
      "CTF"
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
      "2021",
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/marketplace",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Can you take over The Marketplace's infrastructure?"
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
      "Linux Privesc",
      "THM",
      "Walkthrough"
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
      "2021",
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/startup",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Abuse traditional vulnerabilities via untraditional means."
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
      "2020",
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/basicpentestingju",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "This is a machine that allows you to practise web app hacking and privilege escalation"
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
      "2020",
      "THM",
      "Walkthrough",
      "powerview",
      "mimikatz"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/postexploitation",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Learn the basics of post-exploitation and maintaining access with mimikatz, bloodhound, powerview and msfvenom"
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
      "2020",
      "THM",
      "Walkthrough",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/metasploitintro",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "An introduction to the main components of the Metasploit Framework."
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
      "2020",
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introductorynetworking",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "An introduction to networking theory and basic networking tools"
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
      "2021",
      "THM",
      "Walkthrough",
      "whois",
      "nslookup"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/passivereconnaissance",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Learn about the essential tools for passive reconnaissance, such as whois, nslookup, and dig."
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
      "2021",
      "THM",
      "Walkthrough",
      "traceroute",
      "netcat"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/activereconnaissance",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Learn how to use simple tools such as traceroute, ping, telnet, and a web browser to gather information."
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
      "2021",
      "THM",
      "Walkthrough",
      "dirb",
      "gobuster"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/contentdiscovery",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Learn the various ways of discovering hidden or private content on a webserver that could lead to new vulnerabilities."
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
      "2021",
      "THM",
      "Walkthrough",
      "Hydra"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hydra",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Learn about and use Hydra, a fast network logon cracker, to bruteforce and obtain a website's credentials."
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
      "2020",
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/biohazard",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "A CTF room based on the old-time survival horror game, Resident Evil. Can you survive until the end?"
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
      "2020",
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wgelctf",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "hint": "Can you exfiltrate the root flag?"
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
      "ASLR Bypass",
      "THM",
      "Walkthrough"
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
      "2023",
      "THM",
      "CTF",
      "nmap",
      "gobuster"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/whiterose",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-whiterose-ctf-writeup-2ec3281bb024",
    "hint": "Yet another Mr. Robot themed challenge."
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
      "Python",
      "THM",
      "CTF",
      "-"
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
      "Robots.txt",
      "THM",
      "CTF",
      "-"
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
      "Privesc",
      "THM",
      "CTF"
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
      "Privesc"
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
      "PHP-Wrapper",
      "THM"
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
      "SQLMap",
      "THM",
      "Walkthrough"
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
      "Privesc",
      "THM",
      "CTF"
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
      "OSCP"
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
      "Privesc",
      "THM",
      "CTF"
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
      "Sudo-Vim"
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
      "Python-Library-Hijacking"
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
      "OSCP"
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
      "OSCP"
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
      "Cronjob-Hijack"
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
      "Arbitrary-File-Upload"
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
      "Docker-Group",
      "THM"
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
      "Privesc",
      "THM",
      "CTF",
      "-"
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
      "PATH-Hijacking"
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
      "Kerbrute"
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
      "OSCP"
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
      "Oscp-Prep"
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
      "Sudo-Privesc"
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
      "Credential-Dumping",
      "THM"
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
      "Sudo-Privesc",
      "THM",
      "CTF",
      "wfuzz"
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
      "Cronjob",
      "THM"
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
      "MD5",
      "THM"
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
      "OSCP"
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
      "BloodHound",
      "THM",
      "CTF"
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
      "BloodHound",
      "THM",
      "CTF"
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
      "AS-REP Roasting"
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
      "Token Impersonation",
      "THM",
      "Walkthrough"
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
      "Active Directory",
      "THM",
      "Walkthrough"
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
      "LDAP",
      "THM",
      "Walkthrough"
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
      "Secretsdump",
      "THM",
      "Walkthrough"
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
      "PsExec",
      "THM"
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
      "Domain Admin",
      "THM",
      "Walkthrough"
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
      "Kerberos Armor",
      "THM",
      "Walkthrough"
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
      "Red Team",
      "THM",
      "Walkthrough"
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
      "Tokens",
      "THM",
      "Walkthrough"
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
      "Threat Emulation",
      "THM",
      "Walkthrough",
      "-"
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
      "Process Injection",
      "THM",
      "Walkthrough"
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
      "Red Team",
      "THM",
      "Walkthrough"
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
      "TTPs",
      "THM",
      "Walkthrough",
      "-"
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
      "Red Team",
      "THM",
      "Walkthrough"
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
      "Hardening",
      "THM",
      "Walkthrough"
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
      "Reverse Engineering"
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
      "Classic Pentesting",
      "THM",
      "Walkthrough",
      "nmap"
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
      "GPG Crack",
      "THM",
      "CTF"
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
      "Privesc",
      "THM"
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
      "Privesc",
      "THM"
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
      "Privesc",
      "THM"
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
      "Privesc",
      "THM"
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
      "Privesc",
      "THM"
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
      "Wildcards",
      "THM"
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
      "Source-Code-Analysis",
      "THM"
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
      "Sudo-Privesc",
      "THM"
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
      "Binary-Analysis",
      "THM"
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
      "Tunneling",
      "THM"
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
      "Privesc",
      "THM"
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
      "Privesc",
      "THM"
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
      "Privesc",
      "THM"
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
  },
  {
    "id": "thm-crackthehash",
    "name": "Crack the hash",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "hashcat"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/crackthehash",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-crack-the-hash-ctf-writeup-00a0fe1eb361",
    "hint": "Cracking hashes challenges",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-goldeneye",
    "name": "GoldenEye",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/goldeneye",
    "writeupUrl": "",
    "hint": "Bond, James Bond. A guided CTF.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jurassicpark",
    "name": "Jurassic Park",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jurassicpark",
    "writeupUrl": "",
    "hint": "A Jurassic Park CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-heartbleed",
    "name": "HeartBleed",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/heartbleed",
    "writeupUrl": "",
    "hint": "SSL issues are still lurking in the wild! Can you exploit this web servers OpenSSL?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-investigatingwindows",
    "name": "Investigating Windows",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/investigatingwindows",
    "writeupUrl": "",
    "hint": "A windows machine has been hacked, its your job to go investigate this windows machine and find clues to what the hacker might have done.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-toolsrus",
    "name": "ToolsRus",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "dirbuster",
      "Hydra",
      "Nmap",
      "Nikto"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/toolsrus",
    "writeupUrl": "",
    "hint": "Practise using tools such as dirbuster, hydra, nmap, nikto and metasploit",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ohsint",
    "name": "OhSINT",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ohsint",
    "writeupUrl": "",
    "hint": "Are you able to use open source intelligence to solve this challenge?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-forensics",
    "name": "Forensics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/forensics",
    "writeupUrl": "",
    "hint": "This is a memory dump of compromised system, do some forensics kung-fu to explore the inside.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-c4ptur3th3fl4g",
    "name": "c4ptur3-th3-fl4g",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/c4ptur3th3fl4g",
    "writeupUrl": "",
    "hint": "A beginner level CTF challenge",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-peakhill",
    "name": "Peak Hill",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/peakhill",
    "writeupUrl": "",
    "hint": "Exercises in Python library abuse and some exploitation techniques",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bsidesgtanonforce",
    "name": "Anonforce",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "John The Ripper"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bsidesgtanonforce",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-anonforce-ctf-writeup-428bd3254136",
    "hint": "boot2root machine for FIT and bsides guatemala CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bsidesgtlibrary",
    "name": "Library",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "gobuster",
      "hydra"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bsidesgtlibrary",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-library-ctf-writeup-0be466e42e19",
    "hint": "boot2root machine for FIT and bsides guatemala CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bsidesgtdav",
    "name": "Dav",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "gobuster"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bsidesgtdav",
    "writeupUrl": "https://medium.com/t%C3%BCrk%C3%A7e-i%CC%87%C3%A7erikler/tryhackme-dav-ctf-writeup-rehberi-1a58735b9ac8",
    "hint": "boot2root machine for FIT and bsides guatemala CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bof1",
    "name": "Buffer Overflows",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "pwn",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bof1",
    "writeupUrl": "",
    "hint": "Learn how to get started with basic Buffer Overflows!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-breakit",
    "name": "Break it",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/breakit",
    "writeupUrl": "",
    "hint": "Can you break the code?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adventuretime",
    "name": "Adventure Time",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adventuretime",
    "writeupUrl": "",
    "hint": "A CTF based challenge to get your blood pumping...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-scripting",
    "name": "Scripting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/scripting",
    "writeupUrl": "",
    "hint": "Learn basic scripting by solving some challenges!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bebop",
    "name": "Bebop",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bebop",
    "writeupUrl": "",
    "hint": "Who thought making a flying shell was a good idea?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jokerctf",
    "name": "HA Joker CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jokerctf",
    "writeupUrl": "",
    "hint": "Batman hits Joker.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-toolboxvim",
    "name": "Toolbox: Vim",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/toolboxvim",
    "writeupUrl": "",
    "hint": "Learn vim, a universal text editor that can be incredibly powerful when used properly. From basic text editing to editing of binary files, Vim can be an important arsenal in a security toolkit.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ninjaskills",
    "name": "Ninja Skills",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ninjaskills",
    "writeupUrl": "",
    "hint": "Practise your Linux skills and complete the challenges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-basicmalwarere",
    "name": "Basic Malware RE",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/basicmalwarere",
    "writeupUrl": "",
    "hint": "This room aims towards helping everyone learn about the basics of \"Malware Reverse Engineering\".",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hc0nchristmasctf",
    "name": "hc0n Christmas CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hc0nchristmasctf",
    "writeupUrl": "",
    "hint": "hackt the planet",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ctfcollectionvol1",
    "name": "CTF collection Vol.1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ctfcollectionvol1",
    "writeupUrl": "",
    "hint": "Sharpening up your CTF skill with the collection. The first volume is designed for beginner.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ctfcollectionvol2",
    "name": "CTF collection Vol.2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ctfcollectionvol2",
    "writeupUrl": "",
    "hint": "Sharpening up your CTF skill with the collection. The second volume is about web-based CTF.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-madness",
    "name": "Madness",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/madness",
    "writeupUrl": "",
    "hint": "Will you be consumed by Madness?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-25daysofchristmas",
    "name": "Advent of Cyber 1 [2019]",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/25daysofchristmas",
    "writeupUrl": "",
    "hint": "Get started with Cyber Security in 25 Days - Learn the basics by doing a new, beginner friendly security challenge every day leading up to Christmas.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-avengers",
    "name": "Avengers Blog",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap",
      "gobuster"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/avengers",
    "writeupUrl": "",
    "hint": "Learn to hack into Tony Stark's machine! You will enumerate the machine, bypass a login portal via SQL injection and gain root access by command injection.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dvwa",
    "name": "DVWA",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dvwa",
    "writeupUrl": "",
    "hint": "Basic room for testing exploits against the Damn Vulnerable Web Application box",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-rptmux",
    "name": "tmux",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "tmux"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/rptmux",
    "writeupUrl": "",
    "hint": "Learn to use tmux, one of the most powerful multi-tasking tools on linux!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-webgoat",
    "name": "WebGOAT",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/webgoat",
    "writeupUrl": "",
    "hint": "Simple testing room for beating on WebGOAT",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wifihacking101",
    "name": "Wifi Hacking 101",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "airmon-ng"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wifihacking101",
    "writeupUrl": "",
    "hint": "Learn to attack WPA(2) networks! Ideally you'll want a smartphone with you for this, preferably one that supports hosting wifi hotspots so you can follow along.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-binex",
    "name": "Binex",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/binex",
    "writeupUrl": "",
    "hint": "Escalate your privileges by exploiting vulnerable binaries.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-openvpn",
    "name": "OpenVPN",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/openvpn",
    "writeupUrl": "",
    "hint": "A guide to connecting to our network using OpenVPN.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-torforbeginners",
    "name": "Tor",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Tor",
      "proxychains"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/torforbeginners",
    "writeupUrl": "",
    "hint": "A beginner orienteered guide on using the Tor network",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jack",
    "name": "Jack",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jack",
    "writeupUrl": "",
    "hint": "Compromise a web server running Wordpress, obtain a low privileged user and escalate your privileges to root using a Python module.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-shodan",
    "name": "Shodan.io",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "shodan.io"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/shodan",
    "writeupUrl": "",
    "hint": "Learn about Shodan.io and how to use it for devices enumeration - is your coffee machine publicly accessible?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-geolocatingimages",
    "name": "Geolocating Images",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/geolocatingimages",
    "writeupUrl": "",
    "hint": "Room to understand how to geolocate images",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jupyter101",
    "name": "Jupyter 101",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jupyter101",
    "writeupUrl": "",
    "hint": "A friendly introduction into using the Jupyter Notebook environment. Learn to process and visualise data!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sudovulnsbof",
    "name": "Sudo Buffer Overflow",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sudovulnsbof",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-sudo-buffer-overflow-walkthrough-writeup-65b84fd5c5ef",
    "hint": "A tutorial room exploring CVE-2019-18634 in the Unix Sudo Program. Room Two in the SudoVulns Series",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sudovulnsbypass",
    "name": "Sudo Security Bypass",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sudovulnsbypass",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-sudo-security-bypass-walkthrough-writeup-248a51ae3d97",
    "hint": "A tutorial room exploring CVE-2019-14287 in the Unix Sudo Program. Room One in the SudoVulns Series",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-rppsempire",
    "name": "Empire",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Empire"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/rppsempire",
    "writeupUrl": "",
    "hint": "Learn how to use Empire and it's GUI Starkiller, a powerful post-exploitation C2 framework.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-kali",
    "name": "Kali Machine",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/kali",
    "writeupUrl": "",
    "hint": "Access your own Kali Machine",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cmess",
    "name": "CMesS",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cmess",
    "writeupUrl": "",
    "hint": "Can you root this Gila CMS box?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-phishinghiddeneye",
    "name": "Phishing: HiddenEye",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "HiddenEye"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/phishinghiddeneye",
    "writeupUrl": "",
    "hint": "A simple guide on how to use a tool known as HiddenEye developed by ANONUD4Y. This tool helps you create a phishing page for different sites such as Gmail, Snapchat, Paypal and more. Including understanding the difference between legit and fake site.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hackernote",
    "name": "hackerNote",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hackernote",
    "writeupUrl": "",
    "hint": "A custom webapp, introducing username enumeration, custom wordlists and a basic privilege escalation exploit.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cherryblossom",
    "name": "CherryBlossom",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "smbclient",
      "base64",
      "binwalk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cherryblossom",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-cherryblossom-ctf-writeup-5270623a9946",
    "hint": "Boot-to-root with emphasis on crypto and password cracking.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-willow",
    "name": "Willow",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/willow",
    "writeupUrl": "",
    "hint": "What lies under the Willow Tree?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nonamectf",
    "name": "NoNameCTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nonamectf",
    "writeupUrl": "",
    "hint": "Buffer overflow, server-side template injection and more...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsbase",
    "name": "Windows Base",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsbase",
    "writeupUrl": "",
    "hint": "A windows machine with SysInternals, Cain, BurpSuite, Wireshark, OWASP ZAP and other security tools on.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cct2019",
    "name": "CCT2019",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cct2019",
    "writeupUrl": "",
    "hint": "Legacy challenges from the US Navy Cyber Competition Team 2019 Assessment sponsored by US TENTH Fleet",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-commonlinuxprivesc",
    "name": "Common Linux Privesc",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/commonlinuxprivesc",
    "writeupUrl": "",
    "hint": "A room explaining common Linux privilege escalation",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-malmalintroductory",
    "name": "MAL: Malware Introductory",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "PEiD",
      "IDA",
      "strings",
      "PE Explorer"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/malmalintroductory",
    "writeupUrl": "",
    "hint": "The start of a series of rooms covering Malware Analysis...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-rfirmware",
    "name": "Dumping Router Firmware",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/rfirmware",
    "writeupUrl": "",
    "hint": "Have you ever been curious about how your router works? What OS it runs? What makes it tick?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jackofalltrades",
    "name": "Jack-of-All-Trades",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jackofalltrades",
    "writeupUrl": "",
    "hint": "Boot-to-root originally designed for Securi-Tay 2020",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-googledorking",
    "name": "Google Dorking",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/googledorking",
    "writeupUrl": "",
    "hint": "Explaining how Search Engines work and leveraging them into finding hidden content!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtoresearch",
    "name": "Introductory Researching",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtoresearch",
    "writeupUrl": "",
    "hint": "A brief introduction to research skills for pentesting.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-malremnuxv2",
    "name": "MAL: REMnux - The Redux",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "peepdf",
      "vmonkey",
      "Volatility"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/malremnuxv2",
    "writeupUrl": "",
    "hint": "A revitalised, hands-on showcase involving analysing malicious macro's, PDF's and Memory forensics of a victim of Jigsaw Ransomware; all done using the Linux-based REMnux toolset apart of my Malware Analysis series",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ctf",
    "name": "Fowsniff CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ctf",
    "writeupUrl": "",
    "hint": "Hack this machine and get the flag. There are lots of hints along the way and is perfect for beginners!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-malstrings",
    "name": "MAL: Strings",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Strings"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/malstrings",
    "writeupUrl": "",
    "hint": "Investigating \"strings\" within an application and why these values are important!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nax",
    "name": "Nax",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nax",
    "writeupUrl": "",
    "hint": "Identify the critical security flaw in the most powerful and trusted network monitoring software on the market, that allows an user authenticated execute remote code execution.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-learnowaspzap",
    "name": "Introduction to OWASP ZAP",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "ZAP"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/learnowaspzap",
    "writeupUrl": "",
    "hint": "Learn how to use OWASP ZAP from the ground up. An alternative to BurpSuite.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-powershell",
    "name": "Hacking with PowerShell",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Powershell"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/powershell",
    "writeupUrl": "",
    "hint": "Learn the basics of PowerShell and PowerShell Scripting",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cicada3301vol1",
    "name": "Cicada-3301 Vol:1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cicada3301vol1",
    "writeupUrl": "",
    "hint": "A basic steganography and cryptography challenge room based on the Cicada 3301 challenges",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tonythetiger",
    "name": "Tony the Tiger",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tonythetiger",
    "writeupUrl": "",
    "hint": "Learn how to use a Java Serialisation attack in this boot-to-root",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-convertmyvideo",
    "name": "ConvertMyVideo",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/convertmyvideo",
    "writeupUrl": "",
    "hint": "My Script to convert videos to MP3 is super secure",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ironcorp",
    "name": "Iron Corp",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ironcorp",
    "writeupUrl": "",
    "hint": "Can you get access to Iron Corp's system?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networkservices",
    "name": "Network Services",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap",
      "smbclient",
      "tcpdump",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networkservices",
    "writeupUrl": "",
    "hint": "Learn about, then enumerate and exploit a variety of network services and misconfigurations.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-racetrackbank",
    "name": "Racetrack Bank",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/racetrackbank",
    "writeupUrl": "",
    "hint": "It's time for another heist.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-kothfoodctf",
    "name": "KoTH Food CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/kothfoodctf",
    "writeupUrl": "",
    "hint": "Practice Food KoTH alone, to get familiar with KoTH!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-theimpossiblechallenge",
    "name": "The Impossible Challenge",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/theimpossiblechallenge",
    "writeupUrl": "",
    "hint": "Hmm",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jvmreverseengineering",
    "name": "JVM Reverse Engineering",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jvmreverseengineering",
    "writeupUrl": "",
    "hint": "Learn Reverse Engineering for Java Virtual Machine bytecode",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-corp",
    "name": "Corp",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "hashcat",
      "PowerUp1.ps1"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/corp",
    "writeupUrl": "",
    "hint": "Bypass Windows Applocker and escalate your privileges. You will learn about kerberoasting, evading AV, bypassing applocker and escalating your privileges on a Windows system.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-django",
    "name": "Introduction to Django",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/django",
    "writeupUrl": "",
    "hint": "How it works and why should I learn it?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-eritsecurusi",
    "name": "Erit Securus I",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/eritsecurusi",
    "writeupUrl": "",
    "hint": "Learn to exploit the BoltCMS software by researching exploit-db.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pythonplayground",
    "name": "Python Playground",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pythonplayground",
    "writeupUrl": "",
    "hint": "Be creative!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mindgames",
    "name": "Mindgames",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mindgames",
    "writeupUrl": "",
    "hint": "Just a terrible idea...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tutorial",
    "name": "Tutorial",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tutorial",
    "writeupUrl": "",
    "hint": "Learn how to use a TryHackMe room to start your upskilling in cyber security.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hello",
    "name": "Welcome",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hello",
    "writeupUrl": "",
    "hint": "Learn how to use a TryHackMe room to start your upskilling in cyber security.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-carpediem1",
    "name": "Carpe Diem 1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/carpediem1",
    "writeupUrl": "",
    "hint": "Recover your clients encrypted files before the ransomware timer runs out!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tempusfugitdurius",
    "name": "Tempus Fugit Durius",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tempusfugitdurius",
    "writeupUrl": "",
    "hint": "The latin word Durius means \"harder\"",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-breakoutthecage1",
    "name": "Break Out The Cage",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/breakoutthecage1",
    "writeupUrl": "",
    "hint": "Help Cage bring back his acting career and investigate the nefarious goings on of his agent!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-haskhell",
    "name": "HaskHell",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/haskhell",
    "writeupUrl": "",
    "hint": "Teach your CS professor that his PhD isn't in security.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-kothhackers",
    "name": "KoTH Hackers",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/kothhackers",
    "writeupUrl": "",
    "hint": "The Hackers KoTH box, to allow you to practice alone!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxprivescarena",
    "name": "Linux PrivEsc Arena",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "linux-exploit-suggester",
      "unshadow",
      "hashcat",
      "johnThe Ripper"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxprivescarena",
    "writeupUrl": "",
    "hint": "Students will learn how to escalate privileges using a very vulnerable Linux VM. SSH is open. Your credentials are TCM:Hacker123",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hashingcrypto101",
    "name": "Hashing - Crypto 101",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "base64"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hashingcrypto101",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-hashing-crypto-101-ctf-writeup-02fa0d08962f",
    "hint": "An introduction to Hashing, as part of a series on crypto",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-davesblog",
    "name": "Dave's Blog",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/davesblog",
    "writeupUrl": "",
    "hint": "My friend Dave made his own blog!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-rpnessusredux",
    "name": "Nessus",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Nessus"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/rpnessusredux",
    "writeupUrl": "",
    "hint": "Learn how to set up and use Nessus, a popular vulnerability scanner.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ra",
    "name": "Ra",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ra",
    "writeupUrl": "",
    "hint": "You have found WindCorp's internal network and their Domain Controller. Can you pwn their network?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-source",
    "name": "Source",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/source",
    "writeupUrl": "",
    "hint": "Exploit a recent vulnerability and hack Webmin, a web-based system configuration tool.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-attackerkb",
    "name": "AttackerKB",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "AttackerKB",
      "AKB Explorer"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/attackerkb",
    "writeupUrl": "",
    "hint": "Learn how to leverage AttackerKB and learn about exploits in your workflow!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owasptop10",
    "name": "OWASP Top 10",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owasptop10",
    "writeupUrl": "",
    "hint": "Learn about and exploit each of the OWASP Top 10 vulnerabilities; the 10 most critical web security risks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-set",
    "name": "Set",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/set",
    "writeupUrl": "",
    "hint": "Once again you find yourself on the internal network of the Windcorp Corporation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-smaggrotto",
    "name": "Smag Grotto",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/smaggrotto",
    "writeupUrl": "",
    "hint": "Follow the yellow brick road.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-recovery",
    "name": "Recovery",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/recovery",
    "writeupUrl": "",
    "hint": "Not your conventional CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-easypeasyctf",
    "name": "Easy Peasy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/easypeasyctf",
    "writeupUrl": "",
    "hint": "Practice using tools such as Nmap and GoBuster to locate a hidden directory to get initial access to a vulnerable machine. Then escalate your privileges through a vulnerable cronjob.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-malresearching",
    "name": "MAL: Researching",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/malresearching",
    "writeupUrl": "",
    "hint": "Understanding checksums, how to generate them and their use throughout malware analysis with online sandboxing & reporting services",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-iotintro",
    "name": "Intro to IoT Pentesting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "binwalk",
      "firmware analysis toolkit",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/iotintro",
    "writeupUrl": "",
    "hint": "A beginner friendly walkthrough for internet of things (IoT) pentesting.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ra2",
    "name": "Ra 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ra2",
    "writeupUrl": "",
    "hint": "Just when they thought their hashes were safe... Ra 2 - The sequel!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pokemon",
    "name": "Gotta Catch'em All!",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pokemon",
    "writeupUrl": "",
    "hint": "This room is based on the original Pokemon series. Can you obtain all the Pokemon in this room?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bolt",
    "name": "Bolt",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bolt",
    "writeupUrl": "",
    "hint": "A hero is unleashed",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-anonymousplayground",
    "name": "Anonymous Playground",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/anonymousplayground",
    "writeupUrl": "",
    "hint": "Want to become part of Anonymous? They have a challenge for you. Can you get the flags and become an operative?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lookingglass",
    "name": "Looking Glass",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lookingglass",
    "writeupUrl": "",
    "hint": "Step through the looking glass. A sequel to the Wonderland challenge room.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-spring",
    "name": "Spring",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/spring",
    "writeupUrl": "",
    "hint": "Can you hack your way in to a Hello World application?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owaspjuiceshop",
    "name": "OWASP Juice Shop",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owaspjuiceshop",
    "writeupUrl": "",
    "hint": "This room uses the Juice Shop vulnerable web application to learn how to identify and exploit common web application vulnerabilities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-kiba",
    "name": "kiba",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/kiba",
    "writeupUrl": "",
    "hint": "Identify the critical security flaw in the data visualization dashboard, that allows execute remote code execution.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-theseus",
    "name": "Theseus",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/theseus",
    "writeupUrl": "",
    "hint": "The first installment of the SuitGuy series of very hard challenges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-uploadvulns",
    "name": "Upload Vulnerabilities",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/uploadvulns",
    "writeupUrl": "",
    "hint": "Tutorial room exploring some basic file-upload vulnerabilities in websites",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wwbuddy",
    "name": "WWBuddy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wwbuddy",
    "writeupUrl": "",
    "hint": "Exploit this website still in development and root the room.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-theblobblog",
    "name": "The Blob Blog",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/theblobblog",
    "writeupUrl": "",
    "hint": "Successfully hack into bobloblaw's computer",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-encryptioncrypto101",
    "name": "Encryption - Crypto 101",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/encryptioncrypto101",
    "writeupUrl": "",
    "hint": "An introduction to encryption, as part of a series on crypto",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-androidhacking101",
    "name": "Android Hacking 101",
    "ip": "10.10.x.x",
    "os": "Android",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/androidhacking101",
    "writeupUrl": "",
    "hint": "Android Mobile Application Penetration Testing",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ghizerctf",
    "name": "Ghizer",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ghizerctf",
    "writeupUrl": "",
    "hint": "lucrecia has installed multiple web applications on the server.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networkservices2",
    "name": "Network Services 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "hydra"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networkservices2",
    "writeupUrl": "",
    "hint": "Enumerating and Exploiting More Common Network Services & Misconfigurations",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-rust",
    "name": "Learn Rust",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/rust",
    "writeupUrl": "",
    "hint": "Learn Rust for someone who knows programming but doesn't know low level programming",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-forbusinessreasons",
    "name": "For Business Reasons",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/forbusinessreasons",
    "writeupUrl": "",
    "hint": "In your network scan, you found an unknown VM....",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ctfonepiece65",
    "name": "One Piece",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ctfonepiece65",
    "writeupUrl": "",
    "hint": "A CTF room based on the wonderful manga One Piece. Can you become the Pirate King?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-iosforensics",
    "name": "iOS Forensics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "HdX"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/iosforensics",
    "writeupUrl": "",
    "hint": "Learn about the data acquisition techniques and tools used in iOS device digital forensics!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tmuxremux",
    "name": "REmux The Tmux",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tmuxremux",
    "writeupUrl": "",
    "hint": "Updated, how to use tmux guide. Defaults and customize your workflow.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-aster",
    "name": "Aster",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/aster",
    "writeupUrl": "",
    "hint": "Hack my server dedicated for building communications applications.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-startingoutincybersec",
    "name": "Starting Out In Cyber Sec",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/startingoutincybersec",
    "writeupUrl": "",
    "hint": "Learn about the different career paths in Cyber Security and how TryHackMe can help!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-gettingstarted",
    "name": "Getting Started",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gettingstarted",
    "writeupUrl": "",
    "hint": "Get started with TryHackMe by hacking a fake social media website!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mnemonic",
    "name": "Mnemonic",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mnemonic",
    "writeupUrl": "",
    "hint": "I hope you have fun.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-printerhacking101",
    "name": "Printer Hacking 101",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "PRET"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/printerhacking101",
    "writeupUrl": "",
    "hint": "Learn about (and get hands on with) printer hacking and understand the basics of IPP.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-motunui",
    "name": "Motunui",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/motunui",
    "writeupUrl": "",
    "hint": "Hack the island of Motunui.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-res-2",
    "name": "Walkthrough",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Walkthrough",
      "linPEAS"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/res",
    "writeupUrl": "",
    "hint": "Discover the forensic artefacts present within iOS.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-historyofmalware",
    "name": "History of Malware",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/historyofmalware",
    "writeupUrl": "",
    "hint": "Join this room to learn about the first forms of malware and how they turned into the malicious code we see today.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-toc2",
    "name": "toc2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/toc2",
    "writeupUrl": "",
    "hint": "It's a setup... Can you get the flags in time?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-zer0logon",
    "name": "Zero Logon",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/zer0logon",
    "writeupUrl": "",
    "hint": "It's a setup... Can you get the flags in time?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-psychobreak",
    "name": "Psycho Break",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/psychobreak",
    "writeupUrl": "",
    "hint": "Learn about and exploit the ZeroLogon vulnerability that allows an attacker to go from Zero to Domain Admin without any valid credentials.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-revenge",
    "name": "Revenge",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/revenge",
    "writeupUrl": "",
    "hint": "You've been hired by Billy Joel to get revenge on Ducky Inc...the company that fired him. Can you break into the server and complete your mission?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-csp",
    "name": "Content Security Policy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/csp",
    "writeupUrl": "",
    "hint": "In this room you'll learn what CSP is, what it's used for and how to recognize vulnerabilities in a CSP header.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-misguidedghosts",
    "name": "Misguided Ghosts",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/misguidedghosts",
    "writeupUrl": "",
    "hint": "Collaboration between Jake and Blob!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-0day",
    "name": "0day",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/0day",
    "writeupUrl": "",
    "hint": "Exploit Ubuntu, like a Turtle in a Hurricane",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-physicalsecurityintro",
    "name": "Physical Security Intro",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/physicalsecurityintro",
    "writeupUrl": "",
    "hint": "This room is an introduction to physical security methods to bypass locks, doors and other physical barriers.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-intropocscripting",
    "name": "Intro PoC Scripting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "searchsploit",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/intropocscripting",
    "writeupUrl": "",
    "hint": "Undiscovered",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtoshells",
    "name": "What the Shell?",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtoshells",
    "writeupUrl": "",
    "hint": "Intro PoC Scripting",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nerdherd",
    "name": "NerdHerd",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nerdherd",
    "writeupUrl": "",
    "hint": "An introduction to sending and receiving (reverse/bind) shells when exploiting target machines.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nislinuxone",
    "name": "NIS - Linux Part I",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nislinuxone",
    "writeupUrl": "",
    "hint": "Hack your way into this easy/medium level legendary TV series \"Chuck\" themed box!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wireshark",
    "name": "Wireshark 101",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Wireshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wireshark",
    "writeupUrl": "",
    "hint": "Learn the basics of Wireshark and how to analyze various protocols and PCAPs",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-theserverfromhell",
    "name": "The Server From Hell",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/theserverfromhell",
    "writeupUrl": "",
    "hint": "Face a server that feels as if it was configured and deployed by Satan himself. Can you escalate to root?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dllhijacking",
    "name": "DLL HIJACKING",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dllhijacking",
    "writeupUrl": "",
    "hint": "DLL HIJACKING with Invoke-PrintDemon",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-javascriptbasics",
    "name": "JavaScript Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/javascriptbasics",
    "writeupUrl": "",
    "hint": "Learn JavaScript, the high-level, multi-paradigm language of the web.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bruteit",
    "name": "Brute It",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bruteit",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-brute-it-ctf-writeup-ba8ee8522730",
    "hint": "Learn how to brute, hash cracking and escalate privileges in this box!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mitre",
    "name": "MITRE",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mitre",
    "writeupUrl": "",
    "hint": "Linux: Local Enumeration",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-yearoftheowl",
    "name": "Year of the Owl",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/yearoftheowl",
    "writeupUrl": "",
    "hint": "MITRE",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-attackingics1",
    "name": "Attacking ICS Plant #1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/attackingics1",
    "writeupUrl": "",
    "hint": "The foolish owl sits on his throne...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-inacave",
    "name": "You're in a cave",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/inacave",
    "writeupUrl": "",
    "hint": "Learn how to discover and attack ICS plants using modbus protocol (Modicon / Schneider Electric).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-osiris",
    "name": "Osiris",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/osiris",
    "writeupUrl": "",
    "hint": "Can you Quack it?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-envizon",
    "name": "envizon",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/envizon",
    "writeupUrl": "",
    "hint": "Attacking the pentesters",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hardeningbasicspart1",
    "name": "Hardening Basics Part 1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hardeningbasicspart1",
    "writeupUrl": "",
    "hint": "Learn how to harden an Ubuntu Server! Covers a wide range of topics (Part 1)",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hardeningbasicspart2",
    "name": "Hardening Basics Part 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hardeningbasicspart2",
    "writeupUrl": "",
    "hint": "Continue learning about hardening",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dockerrodeo",
    "name": "The Docker Rodeo",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dockerrodeo",
    "writeupUrl": "",
    "hint": "Learn a wide variety of Docker vulnerabilities in this guided showcase.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-chillhack",
    "name": "Chill Hack",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/chillhack",
    "writeupUrl": "",
    "hint": "-",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-yara",
    "name": "Yara",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/yara",
    "writeupUrl": "",
    "hint": "Learn the applications and language that is Yara for everything threat intelligence, forensics, and threat hunting!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-furthernmap",
    "name": "Nmap",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/furthernmap",
    "writeupUrl": "",
    "hint": "An in depth look at scanning with Nmap, a powerful network scanning tool.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-catregex",
    "name": "Regular expressions",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/catregex",
    "writeupUrl": "",
    "hint": "Learn and practise using regular expressions",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-unbakedpie",
    "name": "Unbaked Pie",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/unbakedpie",
    "writeupUrl": "",
    "hint": "Don't over-baked your pie!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-allinonemj",
    "name": "All in One",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/allinonemj",
    "writeupUrl": "",
    "hint": "This is a fun box where you will get to exploit the system in several ways. Few intended and unintended paths to getting user and root access.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxstrengthtraining",
    "name": "Linux Strength Training",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "John The Ripper",
      "haiti",
      "hash-identifier",
      "gpg"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxstrengthtraining",
    "writeupUrl": "",
    "hint": "Guided room for beginners to learn/reinforce linux command line skills",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-searchlightosint",
    "name": "Searchlight - IMINT",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/searchlightosint",
    "writeupUrl": "",
    "hint": "OSINT challenges in the imagery intelligence category",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-learncyberin25days",
    "name": "25 Days of Cyber Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/learncyberin25days",
    "writeupUrl": "",
    "hint": "Get started with Cyber Security in 25 Days - Learn the basics by doing a new, beginner friendly security challenge every day.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adventofcyber2",
    "name": "Advent of Cyber 2 [2020]",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adventofcyber2",
    "writeupUrl": "",
    "hint": "Get started with Cyber Security in 25 Days - Learn the basics by doing a new, beginner friendly security challenge every day leading up to Christmas.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owaspmutillidae",
    "name": "OWASP Mutillidae II",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owaspmutillidae",
    "writeupUrl": "",
    "hint": "Mutillidae II is a free, open source, deliberately vulnerable web-application providing a target for web-security enthusiast.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-howtousetryhackme",
    "name": "How to use TryHackMe",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/howtousetryhackme",
    "writeupUrl": "",
    "hint": "Start and access your first machine!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-flask",
    "name": "Introduction to Flask",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/flask",
    "writeupUrl": "",
    "hint": "How it works and how can I exploit it?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-colddboxeasy",
    "name": "ColddBox: Easy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/colddboxeasy",
    "writeupUrl": "",
    "hint": "An easy level machine with multiple ways to escalate privileges. By Hixec.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-enterprize",
    "name": "EnterPrize",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/enterprize",
    "writeupUrl": "",
    "hint": "Can you hack your way in?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-rustscan",
    "name": "RustScan",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "RustScan"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/rustscan",
    "writeupUrl": "",
    "hint": "Learn how to use RustScan.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hackermethodology",
    "name": "The Hacker Methodology",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "who.is",
      "PeopleFinder.com",
      "sublist3r",
      "hunter.io"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hackermethodology",
    "writeupUrl": "",
    "hint": "Introduction to the Hacker Methodology",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-crackthehashlevel2",
    "name": "Crack The Hash Level 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/crackthehashlevel2",
    "writeupUrl": "",
    "hint": "Advanced cracking hashes challenges and wordlist generation",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-battery",
    "name": "battery",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/battery",
    "writeupUrl": "",
    "hint": "CTF designed by CTF lover for CTF lovers",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-chocolatefactory",
    "name": "Chocolate Factory",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/chocolatefactory",
    "writeupUrl": "",
    "hint": "A Charlie And The Chocolate Factory themed room, revisit Willy Wonka's chocolate factory!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-btwindowsinternals",
    "name": "Core Windows Processes",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/btwindowsinternals",
    "writeupUrl": "",
    "hint": "Explore the core processes within a Windows operating system and understand what normal behaviour is. This foundational knowledge will help you identify malicious processes running on an endpoint!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-johntheripper0",
    "name": "John The Ripper",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "John The Ripper"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/johntheripper0",
    "writeupUrl": "",
    "hint": "Learn how to use John the Ripper - An extremely powerful and adaptable hash cracking tool",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-johntheripperbasics",
    "name": "John the Ripper: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/johntheripperbasics",
    "writeupUrl": "",
    "hint": "Learn how to use John the Ripper, a powerful and adaptable hash-cracking tool.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sysmon",
    "name": "Sysmon",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sysmon",
    "writeupUrl": "",
    "hint": "Learn how to utilize Sysmon to monitor and log your endpoints and environments.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sustah",
    "name": "Sustah",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sustah",
    "writeupUrl": "",
    "hint": "Play a game to gain access to a vulnerable CMS. Can you beat the odds?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-btsysinternalssg",
    "name": "Sysinternals",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/btsysinternalssg",
    "writeupUrl": "",
    "hint": "Learn to use the Sysinternals tools to analyze Windows systems or applications.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sqlilab",
    "name": "SQL Injection Lab",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "sqlmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sqlilab",
    "writeupUrl": "",
    "hint": "Understand how SQL injection attacks work and how to exploit this vulnerability.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxagency",
    "name": "Linux Agency",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxagency",
    "writeupUrl": "",
    "hint": "This Room will help you to sharpen your Linux Skills and help you to learn basic privilege escalation in a HITMAN theme. So, pack your briefcase and grab your SilverBallers as its gonna be a tough ride.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nahamstore",
    "name": "NahamStore",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nahamstore",
    "writeupUrl": "",
    "hint": "In this room you will learn the basics of bug bounty hunting and web application hacking",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-keldagrim",
    "name": "Keldagrim",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/keldagrim",
    "writeupUrl": "",
    "hint": "The dwarves are hiding their gold!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-madeyescastle",
    "name": "Madeye's Castle",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/madeyescastle",
    "writeupUrl": "",
    "hint": "A boot2root box that is modified from a box used in CuCTF by the team at Runcode.ninja",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cyberweek2021",
    "name": "Cyber Scotland 2021",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Social Engineering Toolkit",
      "wpscan",
      "CeWL"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cyberweek2021",
    "writeupUrl": "",
    "hint": "Follow along tutorials for Scottish Cyberweek Demos",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sudovulnssamedit",
    "name": "Baron Samedit",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sudovulnssamedit",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-baron-samedit-walkthrough-writeup-7d0f228d5d0a",
    "hint": "A tutorial room exploring CVE-2021-3156 in the Unix Sudo Program. Room Three in the SudoVulns Series",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bashscripting",
    "name": "Bash Scripting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bashscripting",
    "writeupUrl": "",
    "hint": "A Walkthrough room to teach you the basics of bash scripting",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-classicpasswd",
    "name": "Classic Passwd",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/classicpasswd",
    "writeupUrl": "",
    "hint": "Practice your skills in reversing and get the flag bypassing the login",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxmodules",
    "name": "Linux Modules",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxmodules",
    "writeupUrl": "",
    "hint": "Learn linux modules in a fun way",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-enpass",
    "name": "En-pass",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/enpass",
    "writeupUrl": "",
    "hint": "Get what you can't.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-investigatingwindows3",
    "name": "Investigating Windows 3.x",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/investigatingwindows3",
    "writeupUrl": "",
    "hint": "Find the artifacts resident on the endpoint and sift through captured data to determine what type attack occurred on the endpoint.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-investigatingwindows2",
    "name": "Investigating Windows 2.0",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/investigatingwindows2",
    "writeupUrl": "",
    "hint": "In the previous challenge you performed a brief analysis. Within this challenge, you will take a deeper dive into the attack.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-inferno",
    "name": "Inferno",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/inferno",
    "writeupUrl": "",
    "hint": "Real Life machine + CTF. The machine is designed to be real-life (maybe not?) and is perfect for newbies starting out in penetration testing",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-thegreatescape",
    "name": "The Great Escape",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thegreatescape",
    "writeupUrl": "",
    "hint": "Our devs have created an awesome new site. Can you break out of the sandbox?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-iso27001",
    "name": "ISO27001",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/iso27001",
    "writeupUrl": "",
    "hint": "Introduction to ISO/ISO27001",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-webosint",
    "name": "WebOSINT",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/webosint",
    "writeupUrl": "",
    "hint": "Conducting basic open source intelligence research on a website",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-magician",
    "name": "magician",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/magician",
    "writeupUrl": "",
    "hint": "This magical website lets you convert image file formats",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cryptographyfordummies",
    "name": "Cryptography for Dummies",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cryptographyfordummies",
    "writeupUrl": "",
    "hint": "Become familiar with cryptography",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lunizzctfnd",
    "name": "Lunizz CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lunizzctfnd",
    "writeupUrl": "",
    "hint": "Lunizz CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-reloaded",
    "name": "REloaded",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/reloaded",
    "writeupUrl": "",
    "hint": "This room is dedicated for the RE challenges, each challenge has unique concepts divided in each binaries. As if now only phase 1 is added will decide about phase 2 on response. Developed by WhiteHeart and tested by IslaMukheef",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jpgchat",
    "name": "JPGChat",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jpgchat",
    "writeupUrl": "",
    "hint": "Exploiting poorly made custom chatting service written in a certain language...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxbackdoors",
    "name": "Linux Backdoors",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxbackdoors",
    "writeupUrl": "",
    "hint": "Learn all the different techniques used to backdoor a linux machine!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wekorra",
    "name": "Wekor",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wekorra",
    "writeupUrl": "",
    "hint": "CTF challenge involving Sqli , WordPress , vhost enumeration and recognizing internal services ;)",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dnsmanipulation",
    "name": "DNS Manipulation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dnsmanipulation",
    "writeupUrl": "",
    "hint": "Manipulating DNS queries to our advantage",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-broker",
    "name": "broker",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/broker",
    "writeupUrl": "",
    "hint": "Paul and Max use a rather unconventional way to chat. They do not seem to know that eavesdropping is possible though...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-badbyte",
    "name": "Badbyte",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap",
      "John The Ripper"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/badbyte",
    "writeupUrl": "",
    "hint": "Infiltrate BadByte and help us to take over root.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-h4cked",
    "name": "h4cked",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/h4cked",
    "writeupUrl": "",
    "hint": "Find out what happened by analysing a .pcap file and hack your way back into the machine",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tokyoghoul666",
    "name": "Tokyo Ghoul",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tokyoghoul666",
    "writeupUrl": "",
    "hint": "Help kaneki escape jason room",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-openvas",
    "name": "OpenVAS",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Openvas"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/openvas",
    "writeupUrl": "",
    "hint": "Learn the basics of threat and vulnerability management using Open Vulnerability Assessment Scanning",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnnet1",
    "name": "VulnNet",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnnet1",
    "writeupUrl": "",
    "hint": "Can you take advantage of the misconfigurations made by VulnNet Entertainment?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-attackingics2",
    "name": "Attacking ICS Plant #2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/attackingics2",
    "writeupUrl": "",
    "hint": "Discover and attack ICS plants using modbus protocol (Modicon / Schneider Electric).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-somesint",
    "name": "KaffeeSec - SoMeSINT",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/somesint",
    "writeupUrl": "",
    "hint": "An intro to SOCMINT (Social Media Intelligence/Investigation) techniques and tooling. Use your awesome OSINT skills to perform an online investigation of a mysterious husband!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pylonzf",
    "name": "pyLon",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pylonzf",
    "writeupUrl": "",
    "hint": "Can you penetrate the defenses and become root?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnnetnode",
    "name": "VulnNet: Node",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnnetnode",
    "writeupUrl": "",
    "hint": "After the previous breach, VulnNet Entertainment states it won't happen again. Can you prove they're wrong?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-safezone",
    "name": "SafeZone",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/safezone",
    "writeupUrl": "",
    "hint": "CTF Designed by CTF lover for CTF lovers",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-howwebsiteswork",
    "name": "How Websites Work",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/howwebsiteswork",
    "writeupUrl": "",
    "hint": "To exploit a website, you first need to know how they are created.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-debug",
    "name": "Debug",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/debug",
    "writeupUrl": "",
    "hint": "Linux Machine CTF! You'll learn about enumeration, finding hidden password files and how to exploit php deserialization!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-glitch",
    "name": "GLITCH",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/glitch",
    "writeupUrl": "",
    "hint": "Challenge showcasing a web app and simple privilege escalation. Can you find the glitch?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-memoryforensics",
    "name": "Memory Forensics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/memoryforensics",
    "writeupUrl": "",
    "hint": "Perform memory forensics to find the flags",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnnetdotpy",
    "name": "VulnNet: dotpy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnnetdotpy",
    "writeupUrl": "",
    "hint": "VulnNet Entertainment is back with their brand new website... and stronger?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-allsignspoint2pwnage",
    "name": "AllSignsPoint2Pwnage",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/allsignspoint2pwnage",
    "writeupUrl": "",
    "hint": "A room that contains a rushed Windows based Digital Sign system. Can you breach it?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sakura",
    "name": "Sakura Room",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sakura",
    "writeupUrl": "",
    "hint": "Use a variety of OSINT techniques to solve this room created by the OSINT Dojo.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-learnssti",
    "name": "SSTI",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/learnssti",
    "writeupUrl": "",
    "hint": "Learn what Server Side Template Injection is and how to exploit it!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cooctusadventures",
    "name": "Cooctus Stories",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cooctusadventures",
    "writeupUrl": "",
    "hint": "This room is about the Cooctus Clan",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-webenumerationv2",
    "name": "Web Enumeration",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "gobuster",
      "wpscan",
      "nikto"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/webenumerationv2",
    "writeupUrl": "",
    "hint": "Learn the methodology of enumerating websites by using tools such as Gobuster, Nikto and WPScan",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adana",
    "name": "Different CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adana",
    "writeupUrl": "",
    "hint": "interesting room, you can shoot the sun",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-m4tr1xexitdenied",
    "name": "M4tr1x: Exit Denied",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/m4tr1xexitdenied",
    "writeupUrl": "",
    "hint": "Free your mind. Exit from the M4tr1x...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-yearofthejellyfish",
    "name": "Year of the Jellyfish",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/yearofthejellyfish",
    "writeupUrl": "",
    "hint": "Some boxes sting...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-overlayfs",
    "name": "OverlayFS - CVE-2021-3493",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/overlayfs",
    "writeupUrl": "",
    "hint": "Exploit a 2021 Kernel vulnerability in Ubuntu to become root almost instantly!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-unstabletwin",
    "name": "Unstable Twin",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/unstabletwin",
    "writeupUrl": "",
    "hint": "A Services based room, extracting information from HTTP Services and finding the hidden messages.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tshark",
    "name": "TShark",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tshark",
    "writeupUrl": "",
    "hint": "Learn how to use TShark to accelerate your pcap analysis!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-binaryheaven",
    "name": "Binary Heaven",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/binaryheaven",
    "writeupUrl": "",
    "hint": "Let us enjoy the heaven of binaries",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dnsindetail",
    "name": "DNS in detail",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dnsindetail",
    "writeupUrl": "",
    "hint": "Learn how DNS works and how it helps you access internet services.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-puttingitalltogether",
    "name": "Putting it all together",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/puttingitalltogether",
    "writeupUrl": "",
    "hint": "Learn how all the individual components of the web work together to bring you access to your favourite web sites.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-httpindetail",
    "name": "HTTP in Detail",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/httpindetail",
    "writeupUrl": "",
    "hint": "Learn about how you request content from a web server using the HTTP protocol",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-redstoneonecarat",
    "name": "Red Stone One Carat",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/redstoneonecarat",
    "writeupUrl": "",
    "hint": "First room of the Red Stone series. Hack ruby using ruby.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-btautopsye0",
    "name": "Autopsy",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Autopsy"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/btautopsye0",
    "writeupUrl": "",
    "hint": "Learn how to use Autopsy to investigate artefacts from a disk image. Use your knowledge to investigate an employee who is being accused of leaking private company data.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sqhell",
    "name": "SQHell",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sqhell",
    "writeupUrl": "",
    "hint": "Try and find all the flags in the SQL Injections",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-splunk2gcd5",
    "name": "Splunk 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/splunk2gcd5",
    "writeupUrl": "",
    "hint": "Part of the Blue Primer series. This room is based on version 2 of the Boss of the SOC (BOTS) competition by Splunk.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxfundamentalspart1",
    "name": "Linux Fundamentals Part 1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxfundamentalspart1",
    "writeupUrl": "",
    "hint": "Embark on the journey of learning the fundamentals of Linux. Learn to run some of the first essential commands on an interactive terminal.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxfundamentalspart2",
    "name": "Linux Fundamentals Part 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxfundamentalspart2",
    "writeupUrl": "",
    "hint": "Continue your learning Linux journey with part two. You will be learning how to log in to a Linux machine using SSH, how to advance your commands, file system interaction.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxfundamentalspart3",
    "name": "Linux Fundamentals Part 3",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxfundamentalspart3",
    "writeupUrl": "",
    "hint": "Power-up your Linux skills and get hands-on with some common utilities that you are likely to use day-to-day!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-autopsy2ze0",
    "name": "Disk Analysis & Autopsy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/autopsy2ze0",
    "writeupUrl": "",
    "hint": "Ready for a challenge? Use Autopsy to investigate artifacts from a disk image.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-beginnerpathintro",
    "name": "Learning Cyber Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/beginnerpathintro",
    "writeupUrl": "",
    "hint": "Get a short introduction to a few of the security topics you'll be learning about.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxserverforensics",
    "name": "Linux Server Forensics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxserverforensics",
    "writeupUrl": "",
    "hint": "Learn about digital forensics artefacts found on Linux servers by analysing a compromised server",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-catpictures",
    "name": "Cat Pictures",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/catpictures",
    "writeupUrl": "",
    "hint": "I made a forum where you can post cute cat pictures!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-thatstheticket",
    "name": "That's The Ticket",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thatstheticket",
    "writeupUrl": "",
    "hint": "IT Support are going to have a bad day, can you get into the admin account?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mustacchio",
    "name": "Mustacchio",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mustacchio",
    "writeupUrl": "",
    "hint": "Easy boot2root Machine",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-fusioncorp",
    "name": "Fusion Corp",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/fusioncorp",
    "writeupUrl": "",
    "hint": "Fusion Corp said they got everything patched... did they?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-juicydetails",
    "name": "Juicy Details",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/juicydetails",
    "writeupUrl": "",
    "hint": "A popular juice shop has been breached! Analyze the logs to see what had happened...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsfundamentals1xbx",
    "name": "Windows Fundamentals 1",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsfundamentals1xbx",
    "writeupUrl": "",
    "hint": "In part 1 of the Windows Fundamentals module, we'll start our journey learning about the Windows desktop, the NTFS file system, UAC, the Control Panel, and more..",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsfundamentals2x0x",
    "name": "Windows Fundamentals 2",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsfundamentals2x0x",
    "writeupUrl": "",
    "hint": "In part 2 of the Windows Fundamentals module, discover more about System Configuration, UAC Settings, Resource Monitoring, the Windows Registry and more..",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-polkit",
    "name": "Polkit: CVE-2021-3560",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/polkit",
    "writeupUrl": "",
    "hint": "Walkthrough room for CVE-2021-3560",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-couch",
    "name": "Couch",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/couch",
    "writeupUrl": "",
    "hint": "Hack into a vulnerable database server that collects and stores data in JSON-based document formats, in this semi-guided challenge.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-extendingyournetwork",
    "name": "Extending Your Network",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/extendingyournetwork",
    "writeupUrl": "",
    "hint": "Learn about some of the technologies used to extend networks out onto the Internet and the motivations for this.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtolan",
    "name": "Intro to LAN",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtolan",
    "writeupUrl": "",
    "hint": "Learn about some of the technologies and designs that power private networks",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-packetsframes",
    "name": "Packets & Frames",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/packetsframes",
    "writeupUrl": "",
    "hint": "Understand how data is divided into smaller pieces and transmitted across a network to another device",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-osimodelzi",
    "name": "OSI Model",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/osimodelzi",
    "writeupUrl": "",
    "hint": "Learn about the fundamental networking framework that determines the various stages in which data is handled across a network",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-whatisnetworking",
    "name": "What is Networking?",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/whatisnetworking",
    "writeupUrl": "",
    "hint": "Begin learning the fundamentals of computer networking in this bite-sized and interactive module.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-gitandcrumpets",
    "name": "Git and Crumpets",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gitandcrumpets",
    "writeupUrl": "",
    "hint": "Our devs have been clamoring for some centralized version control, so the admin came through. Rumour has it that they included a few countermeasures...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-splunk3zs",
    "name": "Splunk 3",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/splunk3zs",
    "writeupUrl": "",
    "hint": "Part of the Blue Primer series. This room is based on version 3 of the Boss of the SOC (BOTS) competition by Splunk.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-coldvvars",
    "name": "Cold VVars",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/coldvvars",
    "writeupUrl": "",
    "hint": "Part of Incognito CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsfundamentals3xzx",
    "name": "Windows Fundamentals 3",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsfundamentals3xzx",
    "writeupUrl": "",
    "hint": "In part 3 of the Windows Fundamentals module, learn about the built-in Microsoft tools that help keep the device secure, such as Windows Updates, Windows Security, BitLocker, and more...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tickets1",
    "name": "Learn and win prizes",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tickets1",
    "writeupUrl": "",
    "hint": "Complete rooms, win tickets. Get 3 of the same tickets and win a prize.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ffuf",
    "name": "ffuf",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "ffuf"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ffuf",
    "writeupUrl": "",
    "hint": "Enumeration, fuzzing, and directory brute forcing using ffuf",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxfunctionhooking",
    "name": "Linux Function Hooking",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxfunctionhooking",
    "writeupUrl": "",
    "hint": "Learn about function hooking in Linux and have fun hooking functions",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-raz0rblack",
    "name": "RazorBlack",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/raz0rblack",
    "writeupUrl": "",
    "hint": "These guys call themselves hackers. Can you show them who's the boss ??",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-metamorphosis",
    "name": "Metamorphosis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/metamorphosis",
    "writeupUrl": "",
    "hint": "Part of Incognito CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-rocket",
    "name": "Rocket",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/rocket",
    "writeupUrl": "",
    "hint": "Get ready for blast off!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sweettoothinc",
    "name": "Sweettooth Inc.",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sweettoothinc",
    "writeupUrl": "",
    "hint": "Sweettooth Inc. needs your help to find out how secure their system is!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cmspit",
    "name": "CMSpit",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cmspit",
    "writeupUrl": "",
    "hint": "This is a machine that allows you to practise web app hacking and privilege escalation using recent vulnerabilities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mma",
    "name": "Mobile Malware Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mma",
    "writeupUrl": "",
    "hint": "Learn and practice mobile malware analysis.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-powershellforpentesters",
    "name": "PowerShell for Pentesters",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/powershellforpentesters",
    "writeupUrl": "",
    "hint": "This room covers the principle uses of PowerShell in Penetration Tests. Interacting with files, scanning the network and system enumeration are covered.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pythonforcybersecurity",
    "name": "Python for Pentesters",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pythonforcybersecurity",
    "writeupUrl": "",
    "hint": "Python is probably the most widely used and most convenient scripting language in cybersecurity. This room covers real examples of Python scripts including hash cracking, key logging, enumeration and scanning.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pythonbasics",
    "name": "Python Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pythonbasics",
    "writeupUrl": "",
    "hint": "Using a web-based code editor, learn the basics of Python and put your knowledge into practice by eventually coding a short Bitcoin investment project.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-superspamr",
    "name": "Super-Spam",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/superspamr",
    "writeupUrl": "",
    "hint": "Defeat the evil Super-Spam, and save the day!!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-chronicle",
    "name": "Chronicle",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/chronicle",
    "writeupUrl": "",
    "hint": "Part of Incognito CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-walkinganapplication",
    "name": "Walking An Application",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/walkinganapplication",
    "writeupUrl": "",
    "hint": "Manually review a web application for security issues using only your browsers developer tools. Hacking with just your browser, no tools or scripts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-gamebuzz",
    "name": "GameBuzz",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gamebuzz",
    "writeupUrl": "",
    "hint": "Part of Incognito CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-crocccrew",
    "name": "Crocc Crew",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/crocccrew",
    "writeupUrl": "",
    "hint": "Crocc Crew has created a backdoor on a Cooctus Corp Domain Controller. We're calling in the experts to find the real back door!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-authenticationbypass",
    "name": "Authentication Bypass",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "fuff"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/authenticationbypass",
    "writeupUrl": "",
    "hint": "Learn how to defeat logins and other authentication mechanisms to allow you access to unpermitted areas.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-uranium",
    "name": "Uranium CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/uranium",
    "writeupUrl": "",
    "hint": "Uranium CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtopwntools",
    "name": "Intro To Pwntools",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Pwntools",
      "pwndbg",
      "checksec",
      "cyclic"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtopwntools",
    "writeupUrl": "",
    "hint": "An introductory room for the binary exploit toolkit Pwntools.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ssrfqi",
    "name": "Intro to SSRF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ssrfqi",
    "writeupUrl": "",
    "hint": "Learn how to exploit Server-Side Request Forgery (SSRF) vulnerabilities, allowing you to access internal server resources.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wordpresscve202129447",
    "name": "Wordpress: CVE-2021-29447",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wordpresscve202129447",
    "writeupUrl": "",
    "hint": "Vulnerability allow a authenticated user whith low privilages upload a malicious WAV file that could lead to remote arbitrary file disclosure and server-side request forgery (SSRF).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dunklematerieptxc9",
    "name": "Dunkle Materie",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dunklematerieptxc9",
    "writeupUrl": "",
    "hint": "Investigate the ransomware attack using ProcDOT.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-win64assembly",
    "name": "Windows x64 Assembly",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/win64assembly",
    "writeupUrl": "",
    "hint": "Introduction to x64 Assembly on Windows.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-subdomainenumeration",
    "name": "Subdomain Enumeration",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "crt.sh",
      "DNSRecon",
      "Sublist3r"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/subdomainenumeration",
    "writeupUrl": "",
    "hint": "Learn the various ways of discovering subdomains to expand your attack surface of a target.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-fortress",
    "name": "Fortress",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/fortress",
    "writeupUrl": "",
    "hint": "Hack this machine and reclaim the fortress from the Evil Overlord!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-principlesofsecurity",
    "name": "Principles of Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/principlesofsecurity",
    "writeupUrl": "",
    "hint": "Learn the principles of information security that secures data and protects systems from abuse",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pentestingfundamentals",
    "name": "Pentesting Fundamentals",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pentestingfundamentals",
    "writeupUrl": "",
    "hint": "Learn the important ethics and methodologies behind every pentest.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hipflask",
    "name": "Hip Flask",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hipflask",
    "writeupUrl": "",
    "hint": "An in-depth walkthrough covering pentest methodology against a vulnerable server",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bypassdisablefunctions",
    "name": "Bypass Disable Functions",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Chankro"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bypassdisablefunctions",
    "writeupUrl": "",
    "hint": "Practice bypassing disabled dangerous features that run operating system commands or start processes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-burpsuitebasicsold",
    "name": "Burp Suite: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/burpsuitebasicsold",
    "writeupUrl": "",
    "hint": "An introduction to using Burp Suite for web application pentesting.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-empline",
    "name": "Empline",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/empline",
    "writeupUrl": "",
    "hint": "Are you good enough to apply for this job?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnerabilities101",
    "name": "Vulnerabilities 101",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnerabilities101",
    "writeupUrl": "",
    "hint": "Understand the flaws of an application and apply your researching skills on some vulnerability databases.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-exploitingavulnerabilityv2",
    "name": "Exploit Vulnerabilities",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "rapid7",
      "Searchsploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/exploitingavulnerabilityv2",
    "writeupUrl": "",
    "hint": "Learn about some of the tools, techniques and resources to exploit vulnerabilities",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnerabilitycapstone",
    "name": "Vulnerability Capstone",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnerabilitycapstone",
    "writeupUrl": "",
    "hint": "Apply the knowledge gained throughout the Vulnerability Module in this challenge room.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-metasploitexploitation",
    "name": "Metasploit: Exploitation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/metasploitexploitation",
    "writeupUrl": "",
    "hint": "Using Metasploit for scanning, vulnerability assessment and exploitation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-meterpreter",
    "name": "Metasploit: Meterpreter",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/meterpreter",
    "writeupUrl": "",
    "hint": "Take a deep dive into Meterpreter, and see how in-memory payloads can be used for post-exploitation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-palsforlife",
    "name": "PalsForLife",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/palsforlife",
    "writeupUrl": "",
    "hint": "Abuse a misconfigured Kubernetes cluster",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-atlas",
    "name": "Atlas",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Mimikatz"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/atlas",
    "writeupUrl": "",
    "hint": "Hack the Atlas server in this beginner room covering Windows attack methodology!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lockdown",
    "name": "Lockdown",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lockdown",
    "writeupUrl": "",
    "hint": "Stay at 127.0.0.1. Wear a 255.255.255.0.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-oscommandinjection",
    "name": "Command Injection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/oscommandinjection",
    "writeupUrl": "",
    "hint": "Learn about a vulnerability allowing you to execute commands through a vulnerable app, and its remediations.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-idor",
    "name": "IDOR",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/idor",
    "writeupUrl": "",
    "hint": "Learn how to find and exploit IDOR vulnerabilities in a web application giving you access to data that you shouldn't have.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-xss",
    "name": "Intro to Cross-site Scripting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/xss",
    "writeupUrl": "",
    "hint": "Learn how to detect and exploit XSS vulnerabilities, giving you control of other visitor's browsers.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-fileinc",
    "name": "File Inclusion",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/fileinc",
    "writeupUrl": "",
    "hint": "This room introduces file inclusion vulnerabilities, including Local File Inclusion (LFI), Remote File Inclusion (RFI), and directory traversal.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sqlinjectionlm",
    "name": "SQL Injection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sqlinjectionlm",
    "writeupUrl": "",
    "hint": "Learn how to detect and exploit SQL Injection vulnerabilities",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introductiontohoneypots",
    "name": "Introduction To Honeypots",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introductiontohoneypots",
    "writeupUrl": "",
    "hint": "A guided room covering the deployment of honeypots and analysis of botnet activities",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mastermindsxlq",
    "name": "Masterminds",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Brim"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mastermindsxlq",
    "writeupUrl": "",
    "hint": "Practice analyzing malicious traffic using Brim.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jason",
    "name": "Jax sucks alot.............",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jason",
    "writeupUrl": "",
    "hint": "In JavaScript everything is a terrible mistake.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nmap01",
    "name": "Nmap Live Host Discovery",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nmap01",
    "writeupUrl": "",
    "hint": "Learn how to use Nmap to discover live hosts using ARP scan, ICMP scan, and TCP/UDP ping scan.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-protocolsandservers2",
    "name": "Protocols and Servers 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "hydra",
      "tcpdump",
      "Wireshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/protocolsandservers2",
    "writeupUrl": "",
    "hint": "Learn about attacks against passwords and cleartext traffic; explore options for mitigation via SSH and SSL/TLS.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nmap04",
    "name": "Nmap Post Port Scans",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nmap04",
    "writeupUrl": "",
    "hint": "Learn how to leverage Nmap for service and OS detection, use Nmap Scripting Engine (NSE), and save the results.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nmap03",
    "name": "Nmap Advanced Port Scans",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nmap03",
    "writeupUrl": "",
    "hint": "Learn advanced techniques such as null, FIN, Xmas, and idle (zombie) scans, spoofing, in addition to FW and IDS evasion.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nmap02",
    "name": "Nmap Basic Port Scans",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nmap02",
    "writeupUrl": "",
    "hint": "Learn in-depth how nmap TCP connect scan, TCP SYN port scan, and UDP port scan work.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-protocolsandservers",
    "name": "Protocols and Servers",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/protocolsandservers",
    "writeupUrl": "",
    "hint": "Learn about common protocols such as HTTP, FTP, POP3, SMTP and IMAP, along with related insecurities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-netsecchallenge",
    "name": "Net Sec Challenge",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Nmap",
      "hydra"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/netsecchallenge",
    "writeupUrl": "",
    "hint": "Practice the skills you have learned in the Network Security module.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-btredlinejoxr3d",
    "name": "Redline",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Volatility",
      "Redline"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/btredlinejoxr3d",
    "writeupUrl": "",
    "hint": "Learn how to use Redline to perform memory analysis and to scan for IOCs on an endpoint.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ide",
    "name": "IDE",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "searchsploit",
      "linPEAS"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ide",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-ide-ctf-writeup-c9ffbacc5f63",
    "hint": "An easy box to polish your enumeration skills!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linprivesc",
    "name": "Linux Privilege Escalation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linprivesc",
    "writeupUrl": "",
    "hint": "Learn the fundamentals of Linux privilege escalation. From enumeration to exploitation, get hands-on with over 8 different privilege escalation techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cve202141773",
    "name": "CVE-2021-41773/42013",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cve202141773",
    "writeupUrl": "",
    "hint": "A small explanation of an Apache path traversal bug and an incomplete fix",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-zeno",
    "name": "Zeno",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/zeno",
    "writeupUrl": "",
    "hint": "Do you have the same patience as the great stoic philosopher Zeno? Try it out!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-temple",
    "name": "Temple",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/temple",
    "writeupUrl": "",
    "hint": "Can you gain access to the temple?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-frankandherby",
    "name": "Frank & Herby make an app",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/frankandherby",
    "writeupUrl": "",
    "hint": "Learn how the misconfiguration of containers can lead to opportunities for some and disasters for others.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-labyrinth8llv",
    "name": "Minotaur's Labyrinth",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/labyrinth8llv",
    "writeupUrl": "",
    "hint": "The Minotaur threw a fit and captured some people in the Labyrinth. Are you able to help Daedalus free them?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-phishingyl",
    "name": "Phishing",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "GoPhish"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/phishingyl",
    "writeupUrl": "",
    "hint": "Learn what phishing is and why it's important to a red team engagement. You will set up phishing infrastructure, write a convincing phishing email and try to trick your target into opening your email in a real-world simulation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-squidgameroom",
    "name": "Squid Game",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/squidgameroom",
    "writeupUrl": "",
    "hint": "\uc624\uc9d5\uc5b4 \uac8c\uc784",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-containme1",
    "name": "ContainMe",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/containme1",
    "writeupUrl": "",
    "hint": "Where am I ? Catch me",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-passwordattacks",
    "name": "Password Attacks",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/passwordattacks",
    "writeupUrl": "",
    "hint": "This room introduces the fundamental techniques to perform a successful password attack against various services and scenarios.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dejavu",
    "name": "Deja Vu",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap",
      "BurpSuite",
      "gobuster",
      "Searchsploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dejavu",
    "writeupUrl": "",
    "hint": "Exploit a recent code injection vulnerability to take over a website full of cute dog pictures!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-revilcorp",
    "name": "REvil Corp",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/revilcorp",
    "writeupUrl": "",
    "hint": "You are involved in an incident response engagement and need to analyze an infected host using Redline.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cybercrafted",
    "name": "CyberCrafted",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cybercrafted",
    "writeupUrl": "",
    "hint": "Pwn this pay-to-win Minecraft server!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-opsec",
    "name": "Red Team OPSEC",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/opsec",
    "writeupUrl": "",
    "hint": "Learn how to apply Operations Security (OPSEC) process for Red Teams.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsreversingintro",
    "name": "Windows Reversing Intro",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsreversingintro",
    "writeupUrl": "",
    "hint": "Introduction to reverse engineering x64 Windows software.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-c2carnage",
    "name": "Carnage",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/c2carnage",
    "writeupUrl": "",
    "hint": "Apply your analytical skills to analyze the malicious network traffic using Wireshark.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-road",
    "name": "Road",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/road",
    "writeupUrl": "",
    "hint": "Inspired by a real-world pentesting engagement",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-weaponization",
    "name": "Weaponization",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/weaponization",
    "writeupUrl": "",
    "hint": "Understand and explore common red teaming weaponization techniques. You will learn to build custom payloads using common methods seen in the industry to get initial access.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-redteamrecon",
    "name": "Red Team Recon",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "whois",
      "nslookup",
      "dig",
      "DNSDumpster"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/redteamrecon",
    "writeupUrl": "",
    "hint": "Learn how to use DNS, advanced searching, Recon-ng, and Maltego to collect information about your target.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adventofcyber3",
    "name": "Advent of Cyber 3 (2021)",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adventofcyber3",
    "writeupUrl": "",
    "hint": "Get started with Cyber Security in 25 Days - Learn the basics by doing a new, beginner friendly security challenge every day leading up to Christmas.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-phishingemails5fgjlzxc",
    "name": "The Greenholt Phish",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/phishingemails5fgjlzxc",
    "writeupUrl": "",
    "hint": "Use the knowledge attained to analyze a malicious email.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-phishingemails4gkxh",
    "name": "Phishing Prevention",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/phishingemails4gkxh",
    "writeupUrl": "",
    "hint": "Learn how to defend against phishing emails.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-phishingemails3tryoe",
    "name": "Phishing Analysis Tools",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "PhishTool"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/phishingemails3tryoe",
    "writeupUrl": "",
    "hint": "Learn the tools used to aid an analyst to investigate suspicious emails.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-phishingemails2rytmuv",
    "name": "Phishing Emails in Action",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/phishingemails2rytmuv",
    "writeupUrl": "",
    "hint": "Learn the different indicators of phishing attempts by examining actual phishing emails.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-shaker",
    "name": "Shaker",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/shaker",
    "writeupUrl": "",
    "hint": "One of our devs has been experimenting with webservers and wants to see if his security is up to snuff. Rumour has it he updated all his dependencies, but did something fall through the cracks?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-phishingemails1tryoe",
    "name": "Phishing Analysis Fundamentals",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/phishingemails1tryoe",
    "writeupUrl": "",
    "hint": "Learn all the components that make up an email.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-contiransomwarehgh",
    "name": "Conti",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/contiransomwarehgh",
    "writeupUrl": "",
    "hint": "An Exchange server was compromised with ransomware. Use Splunk to investigate how the attackers compromised the server.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-redteamthreatintel",
    "name": "Red Team Threat Intel",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/redteamthreatintel",
    "writeupUrl": "",
    "hint": "Apply threat intelligence to red team engagements and adversary emulation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hamlet",
    "name": "Hamlet",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hamlet",
    "writeupUrl": "",
    "hint": "A Shakespeare/Hamlet-inspired room in which you will explore an uncommon web application used in linguistic/NLP research.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsforensics1",
    "name": "Windows Forensics 1",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "KAPE",
      "Autopsy",
      "FTK Imager",
      "Registry Viewer"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsforensics1",
    "writeupUrl": "",
    "hint": "Introduction to Windows Registry Forensics",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-androidmalwareanalysis",
    "name": "Android Malware Analysis",
    "ip": "10.10.x.x",
    "os": "Android",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/androidmalwareanalysis",
    "writeupUrl": "",
    "hint": "Android malware analysis with Pithus (static and hunting)",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sqlmap",
    "name": "SQLMAP",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "sqlmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sqlmap",
    "writeupUrl": "",
    "hint": "Learn about and use Sqlmap to exploit the web application",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-plottedemr",
    "name": "Plotted-EMR",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/plottedemr",
    "writeupUrl": "",
    "hint": "Everything here is plotted!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lumberjackturtle",
    "name": "Lumberjack Turtle",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lumberjackturtle",
    "writeupUrl": "",
    "hint": "No logs, no crime... so says the lumberjack.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-commonattacks",
    "name": "Common Attacks",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/commonattacks",
    "writeupUrl": "",
    "hint": "With practical exercises see how common attacks occur, and improve your cyber hygiene to stay safer online.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ret2libc",
    "name": "ret2libc",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ret2libc",
    "writeupUrl": "",
    "hint": "This room teaches basic return-oriented programming (ROP), exploitation of binaries and an ASLR bypass.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-securityawarenessintro",
    "name": "Security Awareness",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/securityawarenessintro",
    "writeupUrl": "",
    "hint": "An introduction to security awareness; why its important, the impact of being attacked, different threat actors and basic account security.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-thelayoftheland",
    "name": "The Lay of the Land",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thelayoftheland",
    "writeupUrl": "",
    "hint": "Learn about and get hands-on with common technologies and security products used in corporate environments; both host and network-based security solutions are covered.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pwnkit",
    "name": "Pwnkit: CVE-2021-4034",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pwnkit",
    "writeupUrl": "",
    "hint": "Interactive lab for exploiting and remediating Pwnkit (CVE-2021-4034) in the Polkit package",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pyramidofpainax",
    "name": "Pyramid Of Pain",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pyramidofpainax",
    "writeupUrl": "",
    "hint": "Learn what is the Pyramid of Pain and how to utilize this model to determine the level of difficulty it will cause for an adversary to change the indicators associated with them, and their campaign.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dearqa",
    "name": "Dear QA",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dearqa",
    "writeupUrl": "",
    "hint": "Are you able to solve this challenge involving reverse engineering and exploit development?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bruteforceheroes",
    "name": "Brute Force Heroes",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "hydra",
      "Burp Suite",
      "ZAP",
      "Patator"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bruteforceheroes",
    "writeupUrl": "",
    "hint": "Walkthrough room to look at the different tools that can be used when brute forcing, as well as the different situations that might favour one tool over another",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-redteamfirewalls",
    "name": "Firewalls",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/redteamfirewalls",
    "writeupUrl": "",
    "hint": "Learn about and experiment with various firewall evasion techniques, such as port hopping and port tunneling.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-gallery666",
    "name": "Gallery",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gallery666",
    "writeupUrl": "",
    "hint": "Try to exploit our image gallery system",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-solar",
    "name": "Solar, exploiting log4j",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/solar",
    "writeupUrl": "",
    "hint": "Explore CVE-2021-44228, a vulnerability in log4j affecting almost all software under the sun.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsforensics2",
    "name": "Windows Forensics 2",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "MFT Explorer",
      "Autopsy",
      "Prefetch Parser",
      "WxTCmd"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsforensics2",
    "writeupUrl": "",
    "hint": "Learn about common Windows file systems and forensic artifacts in the file systems.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-plottedtms",
    "name": "Plotted-TMS",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/plottedtms",
    "writeupUrl": "",
    "hint": "Everything here is plotted!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jrsecanalystintrouxo",
    "name": "Junior Security Analyst Intro",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jrsecanalystintrouxo",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-junior-security-analyst-intro-walkthrough-writeup-7ceaf4060263",
    "hint": "Play through a day in the life of a Junior Security Analyst, their responsibilities and qualifications needed to land a role as an analyst.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-insekube",
    "name": "Insekube",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/insekube",
    "writeupUrl": "",
    "hint": "Exploiting Kubernetes by leveraging a Grafana LFI vulnerability",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-flatline",
    "name": "Flatline",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/flatline",
    "writeupUrl": "",
    "hint": "How low are your morals?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsinternals",
    "name": "Windows Internals",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsinternals",
    "writeupUrl": "",
    "hint": "Learn and understand the fundamentals of how Windows operates at its core.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-redteamnetsec",
    "name": "Network Security Solutions",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/redteamnetsec",
    "writeupUrl": "",
    "hint": "Learn about and experiment with various IDS/IPS evasion techniques, such as protocol and payload manipulation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hackinghadoop",
    "name": "Hacking Hadoop",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hackinghadoop",
    "writeupUrl": "",
    "hint": "Learning about the security failings commonly seen in Hadoop",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ohmyweb",
    "name": "Oh My WebServer",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ohmyweb",
    "writeupUrl": "",
    "hint": "Can you root me?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtoc2",
    "name": "Intro to C2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtoc2",
    "writeupUrl": "",
    "hint": "Learn the essentials of Command and Control to help you become a better Red Teamer and simplify your next Red Team assessment!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-biteme",
    "name": "biteme",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/biteme",
    "writeupUrl": "",
    "hint": "Stay out of my server!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-snort",
    "name": "Snort",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "snort"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/snort",
    "writeupUrl": "",
    "hint": "Learn how to use Snort to detect real-time threats, analyse recorded traffic files and identify anomalies.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-snortchallenges2",
    "name": "Snort Challenge - Live Attacks",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "snort"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/snortchallenges2",
    "writeupUrl": "",
    "hint": "Put your snort skills into practice and defend against a live attack",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introdigitalforensics",
    "name": "Intro to Digital Forensics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introdigitalforensics",
    "writeupUrl": "",
    "hint": "Learn about digital forensics and related processes and experiment with a practical example.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-operatingsystemsecurity",
    "name": "Operating System Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/operatingsystemsecurity",
    "writeupUrl": "",
    "hint": "This room introduces users to operating system security and demonstrates SSH authentication on Linux.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-runtimedetectionevasion",
    "name": "Runtime Detection Evasion",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/runtimedetectionevasion",
    "writeupUrl": "",
    "hint": "Learn how to bypass common runtime detection measures, such as AMSI, using modern tool-agnostic approaches.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dirtypipe",
    "name": "Dirty Pipe: CVE-2022-0847",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dirtypipe",
    "writeupUrl": "",
    "hint": "Interactive lab for exploiting Dirty Pipe (CVE-2022-0847) in the Linux Kernel",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nappingis1337",
    "name": "Napping",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nappingis1337",
    "writeupUrl": "",
    "hint": "Even Admins can fall asleep on the job",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-aratus",
    "name": "Aratus",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/aratus",
    "writeupUrl": "",
    "hint": "Do you like reading? Do you like to go through tons of text? Aratus has what you need!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-abusingwindowsinternals",
    "name": "Abusing Windows Internals",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/abusingwindowsinternals",
    "writeupUrl": "",
    "hint": "Leverage windows internals components to evade common detection solutions, using modern tool-agnostic approaches.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-0x41haz",
    "name": "0x41haz",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/0x41haz",
    "writeupUrl": "",
    "hint": "Simple Reversing Challenge",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bypassinguac",
    "name": "Bypassing UAC",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bypassinguac",
    "writeupUrl": "",
    "hint": "Learn common ways to bypass User Account Control (UAC) in Windows hosts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-splunk201",
    "name": "Incident handling with Splunk",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Splunk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/splunk201",
    "writeupUrl": "",
    "hint": "Learn to use Splunk for incident handling through interactive scenarios.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-spring4shell",
    "name": "Spring4Shell: CVE-2022-22965",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/spring4shell",
    "writeupUrl": "",
    "hint": "Interactive lab for exploiting Spring4Shell (CVE-2022-22965) in the Java Spring Framework",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-thehiveproject",
    "name": "TheHive Project",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "TheHive"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thehiveproject",
    "writeupUrl": "",
    "hint": "Learn how to use TheHive, a Security Incident Response Platform, to report investigation findings",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-snortchallenges1",
    "name": "Snort Challenge - The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "snort"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/snortchallenges1",
    "writeupUrl": "",
    "hint": "Put your snort skills into practice and write snort rules to analyse live capture network traffic.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ollie",
    "name": "Ollie",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ollie",
    "writeupUrl": "",
    "hint": "Meet the world's most powerful hacker dog!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-misp",
    "name": "MISP",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "MISP"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/misp",
    "writeupUrl": "",
    "hint": "Walkthrough on the use of MISP as a Threat Sharing Platform",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-idsevasion",
    "name": "Intrusion Detection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/idsevasion",
    "writeupUrl": "",
    "hint": "Learn cyber evasion techniques and put them to the test against two IDS",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-techsupp0rt1",
    "name": "Tech_Supp0rt: 1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/techsupp0rt1",
    "writeupUrl": "",
    "hint": "Hack into the scammer's under-development website to foil their plans.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wazuhct",
    "name": "Wazuh",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Wazuh"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wazuhct",
    "writeupUrl": "",
    "hint": "Wazuh is a free, open source and enterprise-ready security monitoring solution for threat detection, integrity monitoring.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-offensivesecurityintro",
    "name": "Offensive Security Intro",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/offensivesecurityintro",
    "writeupUrl": "",
    "hint": "Hack your first website (legally in a safe environment) and experience an ethical hacker's job.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtooffensivesecurity",
    "name": "Intro to Offensive Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtooffensivesecurity",
    "writeupUrl": "",
    "hint": "Hack your first website (legally in a safe environment) and experience an ethical hacker's job.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introwebapplicationsecurity",
    "name": "Web Application Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introwebapplicationsecurity",
    "writeupUrl": "",
    "hint": "Learn about web applications and explore some of their common security issues.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-intronetworksecurity",
    "name": "Network Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/intronetworksecurity",
    "writeupUrl": "",
    "hint": "Learn about network security, understand attack methodology, and practice hacking into a target server.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-layer2",
    "name": "L2 MAC Flooding & ARP Spoofing",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/layer2",
    "writeupUrl": "",
    "hint": "Learn how to use MAC Flooding to sniff traffic and ARP Cache Poisoning to manipulate network traffic as a MITM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pwn101",
    "name": "PWN101",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pwn101",
    "writeupUrl": "",
    "hint": "Beginner level binary exploitation challenges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-printnightmarehpzqlp8",
    "name": "PrintNightmare",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/printnightmarehpzqlp8",
    "writeupUrl": "",
    "hint": "Learn about the vulnerability known as PrintNightmare (CVE-2021-1675) and (CVE-2021-34527).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-kape",
    "name": "KAPE",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "KAPE"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/kape",
    "writeupUrl": "",
    "hint": "An introduction to Kroll Artifact Parser and Extractor (KAPE) for collecting and processing forensic artifacts",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-intromalwareanalysis",
    "name": "Intro to Malware Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "strings",
      "md5sum",
      "pecheck"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/intromalwareanalysis",
    "writeupUrl": "",
    "hint": "What to do when you run into a suspected malware",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-defensivesecurityintro",
    "name": "Defensive Security Intro",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/defensivesecurityintro",
    "writeupUrl": "",
    "hint": "Introducing defensive security and related topics, such as Threat Intelligence, SOC, DFIR, Malware Analysis, and SIEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-defensivesecurity",
    "name": "Intro to Defensive Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/defensivesecurity",
    "writeupUrl": "",
    "hint": "Introducing defensive security and related topics, such as threat intelligence, SOC, DFIR, and SIEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-kubernetesforyouly",
    "name": "Kubernetes for Everyone",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/kubernetesforyouly",
    "writeupUrl": "",
    "hint": "A Kubernetes hacking challenge for DevOps/SRE enthusiasts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sandboxevasion",
    "name": "Sandbox Evasion",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sandboxevasion",
    "writeupUrl": "",
    "hint": "Learn about active defense mechanisms Blue Teamers can deploy to identify adversaries in their environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-securityoperations",
    "name": "Security Operations",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/securityoperations",
    "writeupUrl": "",
    "hint": "Learn about Security Operations Center (SOC): its responsibilities, services, and data sources.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-careersincyber",
    "name": "Careers in Cyber",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/careersincyber",
    "writeupUrl": "",
    "hint": "Learn about the different careers in cyber security.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cve202226923",
    "name": "CVE-2022-26923",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Certipy"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cve202226923",
    "writeupUrl": "",
    "hint": "Walkthrough on the exploitation of CVE-2022-26923, a vulnerability in AD Certificate Services.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-digdug",
    "name": "Dig Dug",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/digdug",
    "writeupUrl": "",
    "hint": "Turns out this machine is a DNS server - it's time to get your shovels out!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-biblioteca",
    "name": "Biblioteca",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/biblioteca",
    "writeupUrl": "",
    "hint": "Shhh. Be very very quiet, no shouting inside the biblioteca.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networkminer",
    "name": "NetworkMiner",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "NetworkMiner"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networkminer",
    "writeupUrl": "",
    "hint": "Learn how to use NetworkMiner to analyse recorded traffic files and practice network forensics activities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introductiontodevsecops",
    "name": "Introduction to DevSecOps",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introductiontodevsecops",
    "writeupUrl": "",
    "hint": "Learn about the story of DevSecOps, Software Development Models & Shifting Left.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cyberheroes",
    "name": "CyberHeroes",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cyberheroes",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-cyberheroes-ctf-writeup-a491f4db5954",
    "hint": "Want to be a part of the elite club of CyberHeroes? Prove your merit by finding a way to log in!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxforensics",
    "name": "Linux Forensics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxforensics",
    "writeupUrl": "",
    "hint": "Learn about the common forensic artifacts found in the file system of Linux Operating System",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-monitoringevasion",
    "name": "Evading Logging and Monitoring",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/monitoringevasion",
    "writeupUrl": "",
    "hint": "Learn how to bypass common logging and system monitoring, such as ETW, using modern tool-agnostic approaches.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-frankandherbytryagain",
    "name": "Frank and Herby try again.....",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/frankandherbytryagain",
    "writeupUrl": "",
    "hint": "Frank and Herby still don't know how to use kubernetes correctly.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-breachingad",
    "name": "Breaching Active Director",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/breachingad",
    "writeupUrl": "",
    "hint": "This network covers techniques and tools that can be used to acquire that first set of AD credentials that can then be used to enumerate AD.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mrphisher",
    "name": "Mr. Phisher",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mrphisher",
    "writeupUrl": "",
    "hint": "I received a suspicious email with a very weird looking attachment. It keeps on asking me to \"enable macros\". What are those?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adenumeration",
    "name": "Enumerating Active Directory",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adenumeration",
    "writeupUrl": "",
    "hint": "This room covers various Active Directory enumeration techniques, their use cases as well as drawbacks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsprivesc20",
    "name": "Windows Privilege Escalation",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "winPEAS",
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsprivesc20",
    "writeupUrl": "",
    "hint": "Learn the fundamentals of Windows privilege escalation techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-seasurfer",
    "name": "Sea Surfer",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/seasurfer",
    "writeupUrl": "",
    "hint": "Ride the Wave!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-islandorchestration",
    "name": "Island Orchestration",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/islandorchestration",
    "writeupUrl": "",
    "hint": "Looking for the next holiday destination? Look no further than the Islands of Orchestration.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-annie",
    "name": "Annie",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/annie",
    "writeupUrl": "",
    "hint": "Remote access comes in different flavors.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cve202226134",
    "name": "Atlassian CVE-2022-26134",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cve202226134",
    "writeupUrl": "",
    "hint": "An interactive lab showcasing the Confluence Server and Data Center un-authenticated RCE vulnerability.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wiresharkthebasics",
    "name": "Wireshark: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Wireshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wiresharkthebasics",
    "writeupUrl": "",
    "hint": "Learn the basics of Wireshark and how to analyse protocols and PCAPs.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-persistingad",
    "name": "Persisting Active Directory",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/persistingad",
    "writeupUrl": "",
    "hint": "Learn about common Active Directory persistence techniques that can be used post-compromise to ensure the blue team will not be able to kick you out during a red team exercise.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-committed",
    "name": "Committed",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/committed",
    "writeupUrl": "",
    "hint": "One of our developers accidentally committed some sensitive code to our GitHub repository. Well, at least, that is what they told us...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wiresharkpacketoperations",
    "name": "Wireshark: Packet Operations",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Wireshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wiresharkpacketoperations",
    "writeupUrl": "",
    "hint": "Learn the fundamentals of packet analysis with Wireshark and how to find the needle in the haystack!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-follinamsdt",
    "name": "Follina MSDT",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/follinamsdt",
    "writeupUrl": "",
    "hint": "A walkthrough on the CVE-2022-30190, the MSDT service, exploitation of the service vulnerability, and consequent detection techniques and remediation processes",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-securesdlc",
    "name": "SSDLC",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/securesdlc",
    "writeupUrl": "",
    "hint": "This room focuses on the Secure Software Development Lifecycle (S-SDLC), its processes, and methodologies.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-olympusroom",
    "name": "Olympus",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/olympusroom",
    "writeupUrl": "",
    "hint": "My first CTF !",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtoav",
    "name": "Introduction to Antivirus",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Antivirus"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtoav",
    "writeupUrl": "",
    "hint": "Understand how antivirus software works and what detection techniques are used to bypass malicious file checks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-zeekbro",
    "name": "Zeek",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Zeek"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/zeekbro",
    "writeupUrl": "",
    "hint": "Introduction to hands-on network monitoring and threat detection with Zeek (formerly Bro).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-zeekbroexercises",
    "name": "Zeek Exercises",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Zeek"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/zeekbroexercises",
    "writeupUrl": "",
    "hint": "Put your Zeek skills into practice and analyse network traffic.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ettubrute",
    "name": "Brute",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ettubrute",
    "writeupUrl": "",
    "hint": "You as well, Brutus?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-threatinteltools",
    "name": "Threat Intelligence Tools",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/threatinteltools",
    "writeupUrl": "",
    "hint": "Explore different OSINT tools used to conduct security threat assessments and investigations.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-agentt",
    "name": "Agent T",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "ffuf",
      "ExploitDB",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/agentt",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-agent-t-ctf-writeup-cd369d491e88",
    "hint": "Something seems a little off with the server.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-velociraptorhp",
    "name": "Velociraptor",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Velociraptor"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/velociraptorhp",
    "writeupUrl": "",
    "hint": "Learn Velociraptor, an advanced open-source endpoint monitoring, digital forensic and cyber response platform.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hackervshacker",
    "name": "Hacker vs. Hacker",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hackervshacker",
    "writeupUrl": "",
    "hint": "Someone has compromised this server already! Can you get in and evade their countermeasures?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-enumerationpe",
    "name": "Enumeration",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "GhostPack Seatbelt",
      "Process Hacker"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/enumerationpe",
    "writeupUrl": "",
    "hint": "This room is an introduction to enumeration when approaching an unknown corporate environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-confidential",
    "name": "Confidential",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/confidential",
    "writeupUrl": "",
    "hint": "We got our hands on a confidential case file from some self-declared \"black hat hackers\"... it looks like they have a secret invite code.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-brim",
    "name": "Brim",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Brim"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/brim",
    "writeupUrl": "",
    "hint": "Learn and practice log investigation, pcap analysis and threat hunting with Brim.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-b3dr0ck",
    "name": "b3dr0ck",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/b3dr0ck",
    "writeupUrl": "",
    "hint": "Server trouble in Bedrock.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dataxexfilt",
    "name": "Data Exfiltration",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dataxexfilt",
    "writeupUrl": "",
    "hint": "An introduction to Data Exfiltration and Tunneling techniques over various protocols.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-signatureevasion",
    "name": "Signature Evasion",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/signatureevasion",
    "writeupUrl": "",
    "hint": "Learn how to break signatures and evade common AV, using modern tool-agnostic approaches.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-obfuscationprinciples",
    "name": "Obfuscation Principles",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/obfuscationprinciples",
    "writeupUrl": "",
    "hint": "Leverage tool-agnostic software obfuscation practices to hide malicious functions and create unique code.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-credharvesting",
    "name": "Credentials Harvesting",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Metasploit",
      "MimiKatz",
      "hashcat"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/credharvesting",
    "writeupUrl": "",
    "hint": "Apply current authentication models employed in modern environments to a red team approach.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsapi",
    "name": "Introduction to Windows API",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsapi",
    "writeupUrl": "",
    "hint": "Learn how to interact with the win32 API and understand its wide range of use cases",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnnetendgame",
    "name": "VulnNet: Endgame",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnnetendgame",
    "writeupUrl": "",
    "hint": "Hack your way into this simulated vulnerable infrastructure. No puzzles. Enumeration is the key.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cyberkillchainzmt",
    "name": "Cyber Kill Chain",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cyberkillchainzmt",
    "writeupUrl": "",
    "hint": "The Cyber Kill Chain framework is designed for identification and prevention of the network intrusions. You will learn what the adversaries need to do in order to achieve their goals.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-intermediatenmap",
    "name": "Intermediate Nmap",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/intermediatenmap",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-intermediate-nmap-ctf-writeup-8ee1878ce7a0",
    "hint": "Can you combine your great nmap skills with other tools to log in to this machine?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-microsoftwindowshardening",
    "name": "Microsoft Windows Hardening",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/microsoftwindowshardening",
    "writeupUrl": "",
    "hint": "To learn key attack vectors used by hackers and how to protect yourself using different hardening techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-takedown",
    "name": "Takedown",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/takedown",
    "writeupUrl": "",
    "hint": "We have reason to believe a corporate webserver has been compromised by RISOTTO GROUP. Cyber interdiction is authorized for this operation. Find their teamserver and take it down.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-unifiedkillchain",
    "name": "Unified Kill Chain",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/unifiedkillchain",
    "writeupUrl": "",
    "hint": "The Unified Kill Chain is a framework which establishes the phases of an attack, and a means of identifying and mitigating risk to IT assets.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-diamondmodelrmuwwg42",
    "name": "Diamond Model",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/diamondmodelrmuwwg42",
    "writeupUrl": "",
    "hint": "Learn about the four core features of the Diamond Model of Intrusion Analysis: adversary, infrastructure, capability, and victim.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-opencti",
    "name": "OpenCTI",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/opencti",
    "writeupUrl": "",
    "hint": "Provide an understanding of the OpenCTI Project",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cyberthreatintel",
    "name": "Intro to Cyber Threat Intel",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cyberthreatintel",
    "writeupUrl": "",
    "hint": "Introducing cyber threat intelligence and related topics, such as relevant standards and frameworks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wiresharktrafficanalysis",
    "name": "Wireshark: Traffic Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Wireshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wiresharktrafficanalysis",
    "writeupUrl": "",
    "hint": "Learn the basics of traffic analysis with Wireshark and how to find anomalies on your network!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-surfer",
    "name": "Surfer",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/surfer",
    "writeupUrl": "",
    "hint": "Surf some internal webpages to find the flag!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introductoryroomdfirmodule",
    "name": "DFIR: An Introduction",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introductoryroomdfirmodule",
    "writeupUrl": "",
    "hint": "Introductory room for the DFIR module",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtoendpointsecurity",
    "name": "Intro to Endpoint Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "TCPView",
      "SysInternals"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtoendpointsecurity",
    "writeupUrl": "",
    "hint": "Learn about fundamentals, methodology, and tooling for endpoint security monitoring.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dx1libertyislandplde",
    "name": "DX1: Liberty Island",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dx1libertyislandplde",
    "writeupUrl": "",
    "hint": "Can you help the NSF get a foothold in UNATCO's system?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-benign",
    "name": "Benign",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Splunk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/benign",
    "writeupUrl": "",
    "hint": "Challenge room to investigate a compromised host.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-itsybitsy",
    "name": "ItsyBitsy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "ELK"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/itsybitsy",
    "writeupUrl": "",
    "hint": "Put your ELK knowledge together and investigate an incident.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-printnightmarec2bn7l",
    "name": "PrintNightmare, again!",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/printnightmarec2bn7l",
    "writeupUrl": "",
    "hint": "Search the artifacts on the endpoint to determine if the employee used any of the Windows Printer Spooler vulnerabilities to elevate their privileges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-epoch",
    "name": "Epoch",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/epoch",
    "writeupUrl": "",
    "hint": "Be honest, you have always wanted an online tool that could help you convert UNIX dates and timestamps!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-warzoneone",
    "name": "Warzone 1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/warzoneone",
    "writeupUrl": "",
    "hint": "You received an IDS/IPS alert. Time to triage the alert to determine if its a true positive.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-templates",
    "name": "Templates",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/templates",
    "writeupUrl": "",
    "hint": "Pug is my favorite templating engine! I made this super slick application so you can play around with Pug and see how it works.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-investigatingwithsplunk",
    "name": "Investigating with Splunk",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Splunk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/investigatingwithsplunk",
    "writeupUrl": "",
    "hint": "Investigate anomalies using Splunk.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-posheclipse",
    "name": "PS Eclipse",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Splunk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/posheclipse",
    "writeupUrl": "",
    "hint": "Use Splunk to investigate the ransomware activity.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-investigatingwithelk101",
    "name": "Investigating with ELK 101",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "ELK"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/investigatingwithelk101",
    "writeupUrl": "",
    "hint": "Investigate VPN logs through ELK.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtosiem",
    "name": "Introduction to SIEM",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtosiem",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-introduction-to-siem-walkthrough-writeup-b33c889e6032",
    "hint": "An introduction to Security Information and Event Management.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-splunk101",
    "name": "Splunk: Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Splunk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/splunk101",
    "writeupUrl": "",
    "hint": "Learn the basics of Splunk.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-printnightmarec3kj",
    "name": "PrintNightmare, thrice!",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/printnightmarec3kj",
    "writeupUrl": "",
    "hint": "The nightmare continues.. Search the artifacts on the endpoint, again, to determine if the employee used any of the Windows Printer Spooler vulnerabilities to elevate their privileges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-trafficanalysisessentials",
    "name": "Traffic Analysis Essentials",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/trafficanalysisessentials",
    "writeupUrl": "",
    "hint": "Learn Network Security and Traffic Analysis foundations and take a step into probing network anomalies.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-osqueryf8",
    "name": "Osquery: The Basics",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Osquery"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/osqueryf8",
    "writeupUrl": "",
    "hint": "Let's cover the basics of Osquery.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-volatility",
    "name": "Volatility",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Volatility"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/volatility",
    "writeupUrl": "",
    "hint": "Learn how to perform memory forensics with Volatility!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-neighbour",
    "name": "Neighbour",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/neighbour",
    "writeupUrl": "",
    "hint": "Check out our new cloud service, Authentication Anywhere. Can you find other user's secrets?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-securityprinciples",
    "name": "Security Principles",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/securityprinciples",
    "writeupUrl": "",
    "hint": "Learn about the security triad and common security models and principles.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tempestincident",
    "name": "Tempest",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "EvtxEcmd",
      "Timeline Explorer",
      "SysmonView",
      "Event Viewer"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tempestincident",
    "writeupUrl": "",
    "hint": "You are tasked to conduct an investigation from a workstation affected by a full attack chain.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dissectingpeheaders",
    "name": "Dissecting PE Headers",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dissectingpeheaders",
    "writeupUrl": "",
    "hint": "Learn about Portable Executable files and how their headers work.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-warzonetwo",
    "name": "Warzone 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/warzonetwo",
    "writeupUrl": "",
    "hint": "You received another IDS/IPS alert. Time to triage the alert to determine if its a true positive.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtocontainerisation",
    "name": "Intro to Containerisation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtocontainerisation",
    "writeupUrl": "",
    "hint": "Learn about the technologies and benefits of containerisation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adventofcyber4",
    "name": "Advent of Cyber 2022",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adventofcyber4",
    "writeupUrl": "",
    "hint": "Get started with Cyber Security in 24 Days - learn the basics by doing a new, beginner-friendly security challenge every day leading up to Christmas.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-registry4n6",
    "name": "Secret Recipe",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "RegistryExplorer",
      "Everything.exe"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/registry4n6",
    "writeupUrl": "",
    "hint": "Perform Registry Forensics to Investigate a case.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tacticaldetection",
    "name": "Tactical Detection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Sigma"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tacticaldetection",
    "writeupUrl": "",
    "hint": "Establish a baseline knowledge of tactical detection, leveraging efficient techniques to bolster your security posture.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-newhireoldartifacts",
    "name": "New Hire Old Artifacts",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/newhireoldartifacts",
    "writeupUrl": "",
    "hint": "Investigate the intrusion attack using Splunk.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sigma",
    "name": "Sigma",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Sigma"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sigma",
    "writeupUrl": "",
    "hint": "Provide understanding to Sigma, a Generic Signature Format for SIEM Systems.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sighunt",
    "name": "SigHunt",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sighunt",
    "writeupUrl": "",
    "hint": "You are tasked to create detection rules based on a new threat intel.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owaspapisecuritytop105w",
    "name": "OWASP API Security Top 10 - 1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owaspapisecuritytop105w",
    "writeupUrl": "",
    "hint": "Learn the basic concepts for secure API development (Part 1).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-takeover",
    "name": "TakeOver",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "ffuf"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/takeover",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-takeover-ctf-writeup-07111cf5e57e",
    "hint": "This challenge revolves around subdomain enumeration.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owaspapisecuritytop10d0",
    "name": "OWASP API Security Top 10 - 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owaspapisecuritytop10d0",
    "writeupUrl": "",
    "hint": "Learn the basic concepts for secure API development (Part 2).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-malbuster",
    "name": "MalBuster",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/malbuster",
    "writeupUrl": "",
    "hint": "You are tasked to analyse unknown malware samples detected by your SOC team.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtopipelineautomation",
    "name": "Intro to Pipeline Automation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtopipelineautomation",
    "writeupUrl": "",
    "hint": "This room provides an introduction to DevOps pipeline automation and the potential security concerns.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-eavesdropper",
    "name": "Eavesdropper",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/eavesdropper",
    "writeupUrl": "",
    "hint": "Listen closely, you might hear a password!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cryptographyintro",
    "name": "Introduction to Cryptography",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cryptographyintro",
    "writeupUrl": "",
    "hint": "Learn about encryption algorithms such as AES, Diffie-Hellman key exchange, hashing, PKI, and TLS.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-md2pdf",
    "name": "MD2PDF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "dirb",
      "exiftool"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/md2pdf",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-md2pdf-ctf-writeup-e74e0579c5a1",
    "hint": "TopTierConversions LTD is proud to present its latest product launch.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-staticanalysis1",
    "name": "Basic Static Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/staticanalysis1",
    "writeupUrl": "",
    "hint": "Learn basic malware analysis techniques without running the malware.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-fearsecond",
    "name": "Second",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/fearsecond",
    "writeupUrl": "",
    "hint": "You Shall Fear The Second Order.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dependencymanagement",
    "name": "Dependency Management",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dependencymanagement",
    "writeupUrl": "",
    "hint": "Learn about the security concerns regarding dependency management in the automated DevOps pipeline.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tardigrade",
    "name": "Tardigrade",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tardigrade",
    "writeupUrl": "",
    "hint": "Can you find all the basic persistence mechanisms in this Linux endpoint?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-localpotato",
    "name": "LocalPotato",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/localpotato",
    "writeupUrl": "",
    "hint": "Learn how to elevate your privileges on Windows using LocalPotato (CVE-2023-21746).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introductiontocloudsecurityc6",
    "name": "Intro to Cloud Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introductiontocloudsecurityc6",
    "writeupUrl": "",
    "hint": "Learn fundamental concepts regarding securing a cloud environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bugged",
    "name": "Bugged",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bugged",
    "writeupUrl": "",
    "hint": "John likes to live in a very Internet connected world. Maybe too connected...",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owasptop102021",
    "name": "OWASP Top 10 - 2021",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owasptop102021",
    "writeupUrl": "",
    "hint": "Learn about and exploit each of the OWASP Top 10 vulnerabilities; the 10 most critical web security risks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-unattended",
    "name": "Unattended",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Kape",
      "RegistryExplorer"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/unattended",
    "writeupUrl": "",
    "hint": "Use your Windows forensics knowledge to investigate an incident.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-auroraedr",
    "name": "Aurora EDR",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/auroraedr",
    "writeupUrl": "",
    "hint": "Familiarise with the use of a Sigma-based EDR tool, Aurora.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lookback",
    "name": "Lookback",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lookback",
    "writeupUrl": "",
    "hint": "You\u2019ve been asked to run a vulnerability test on a production environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networksecurityprotocols",
    "name": "Network Security Protocols",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networksecurityprotocols",
    "writeupUrl": "",
    "hint": "Learn about secure network protocols at the different layers of the OSI model.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-outlookntlmleak",
    "name": "Outlook NTLM Leak",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/outlookntlmleak",
    "writeupUrl": "",
    "hint": "Leak password hashes from a user by sending them an email by abusing CVE-2023-23397.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-disgruntled",
    "name": "Disgruntled",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/disgruntled",
    "writeupUrl": "",
    "hint": "Use your Linux forensics knowledge to investigate an incident.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-atomicredteam",
    "name": "Atomic Red Team",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/atomicredteam",
    "writeupUrl": "",
    "hint": "Leveraging the Atomic Red Team Framework to strengthen the Security Operations' detection capabilities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-devie",
    "name": "Devie",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/devie",
    "writeupUrl": "",
    "hint": "A developer has asked you to do a vulnerability check on their system.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sdlc",
    "name": "SDLC",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sdlc",
    "writeupUrl": "",
    "hint": "An introduction to the Software Development Lifecycle.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-opacity",
    "name": "Opacity",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/opacity",
    "writeupUrl": "",
    "hint": "Opacity is a Boot2Root made for pentesters and cybersecurity enthusiasts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dastzap",
    "name": "DAST",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "ZAP"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dastzap",
    "writeupUrl": "",
    "hint": "Learn about Dynamic Application Security Testing.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-boogeyman1",
    "name": "Boogeyman 1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "jq",
      "Wireshark",
      "Thunderbird",
      "LNKParse3"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/boogeyman1",
    "writeupUrl": "",
    "hint": "A new threat actor emerges from the wild using the name Boogeyman. Are you afraid of the Boogeyman?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-weaponizingvulnerabilities",
    "name": "Weaponizing Vulnerabilities",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "sqlmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/weaponizingvulnerabilities",
    "writeupUrl": "",
    "hint": "Learn how a vulnerability evolves and methods to weaponize multiple vulnerabilities leading to RCE.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-services",
    "name": "Services",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/services",
    "writeupUrl": "",
    "hint": "At your service.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-basicdynamicanalysis",
    "name": "Basic Dynamic Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/basicdynamicanalysis",
    "writeupUrl": "",
    "hint": "Learn how to analyze malware Dynamically by running them in a Virtual Machine.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-obscured",
    "name": "Obscure",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/obscured",
    "writeupUrl": "",
    "hint": "A CTF room focused on web and binary exploitation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtodockerk8pdqk",
    "name": "Intro to Docker",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtodockerk8pdqk",
    "writeupUrl": "",
    "hint": "Learn to create, build and deploy Docker containers!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-capture",
    "name": "Capture!",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/capture",
    "writeupUrl": "",
    "hint": "Can you bypass the login form?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxsystemhardening",
    "name": "Linux System Hardening",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxsystemhardening",
    "writeupUrl": "",
    "hint": "Learn how to improve the security posture of your Linux systems.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-prioritise",
    "name": "Prioritise",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/prioritise",
    "writeupUrl": "",
    "hint": "In this challenge you will explore some less common SQL Injection techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-soar",
    "name": "SOAR",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "SOAR"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/soar",
    "writeupUrl": "",
    "hint": "Learn the concepts and methodology surrounding security orchestration, automation and response.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-weasel",
    "name": "Weasel",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/weasel",
    "writeupUrl": "",
    "hint": "I think the data science team has been a bit fast and loose with their project resources.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-valleype",
    "name": "Valley",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/valleype",
    "writeupUrl": "",
    "hint": "Can you find your way into the Valley?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnerabilitymanagementkj",
    "name": "Vulnerability Management",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnerabilitymanagementkj",
    "writeupUrl": "",
    "hint": "Learn how to identify, detect, mitigate and report a vulnerability effectively.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-advanceddynamicanalysis",
    "name": "Dynamic Analysis: Debugging",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/advanceddynamicanalysis",
    "writeupUrl": "",
    "hint": "Learn more advanced techniques of dynamic malware analysis.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-caseb4dm755",
    "name": "Digital Forensics Case B4DM755",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/caseb4dm755",
    "writeupUrl": "",
    "hint": "Acquire the critical skills of evidence preservation, disk imaging, and artefact analysis for use in court.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtodetectionengineering",
    "name": "Intro to Detection Engineering",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtodetectionengineering",
    "writeupUrl": "",
    "hint": "Introduce the concept of detection engineering and the frameworks used towards crafting effective threat detection strategies.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-becomeahackeroa",
    "name": "Become a Hacker",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "gobuster",
      "hydra"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/becomeahackeroa",
    "writeupUrl": "",
    "hint": "Learn how TryHackMe can help you become a hacker.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-raceconditions",
    "name": "Race Conditions Challenge",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/raceconditions",
    "writeupUrl": "",
    "hint": "Knock knock! Race condition. Who's there?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-antireverseengineering",
    "name": "Anti-Reverse Engineering",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/antireverseengineering",
    "writeupUrl": "",
    "hint": "Learn the techniques used by malware authors to bypass detection.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-threatintelligenceforsoc",
    "name": "Threat Intelligence for SOC",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "ElastAlert",
      "Sigma"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/threatintelligenceforsoc",
    "writeupUrl": "",
    "hint": "Learn how to utilise Threat Intelligence to improve the Security Operations pipeline.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-securesolacodersintra",
    "name": "Intranet",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/securesolacodersintra",
    "writeupUrl": "",
    "hint": "Welcome to the intranet!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networkdevicehardening",
    "name": "Network Device Hardening",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networkdevicehardening",
    "writeupUrl": "",
    "hint": "Learn techniques for securing and protecting network devices from potential threats and attacks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sast",
    "name": "SAST",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Psalm"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sast",
    "writeupUrl": "",
    "hint": "Learn about Static Application Security Testing.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-flip",
    "name": "Flip",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/flip",
    "writeupUrl": "",
    "hint": "Hey, do a flip!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-caldera",
    "name": "CALDERA",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/caldera",
    "writeupUrl": "",
    "hint": "Leveraging CALDERA to emulate various adversarial activities for detection capability testing.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cybergovernanceregulation",
    "name": "Governance & Regulation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cybergovernanceregulation",
    "writeupUrl": "",
    "hint": "Explore policies and frameworks vital for regulating cyber security in an organisation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owaspbrokenaccesscontrol",
    "name": "OWASP Broken Access Control",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Burp Suite",
      "ZAP"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owaspbrokenaccesscontrol",
    "writeupUrl": "",
    "hint": "Exploit Broken Access Control: Number 1 of the Top 10 web security risks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-catpictures2",
    "name": "Cat Pictures 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/catpictures2",
    "writeupUrl": "",
    "hint": "Now with more Cat Pictures!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-advancedelkqueries",
    "name": "Advanced ELK Queries",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/advancedelkqueries",
    "writeupUrl": "",
    "hint": "Search large datasets efficiently with advanced queries in Kibana.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-virtualizationandcontainers",
    "name": "Virtualization and Containers",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/virtualizationandcontainers",
    "writeupUrl": "",
    "hint": "Introduction to common virtualization technologies and applications.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-snappedphishingline",
    "name": "Snapped Phish-ing Line",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "VirusTotal"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/snappedphishingline",
    "writeupUrl": "",
    "hint": "Apply learned skills to probe malicious emails and URLs, exposing a vast phishing campaign.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-iaaaidm",
    "name": "Identity and Access Management",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/iaaaidm",
    "writeupUrl": "",
    "hint": "Learn about identification, authentication, authorisation, accounting, and identity management.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-iaaaidm-2",
    "name": "Multi-Factor Authentication",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/iaaaidm",
    "writeupUrl": "",
    "hint": "Use your exploitation skills to bypass authentication mechanisms on a website and get RCE.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-redisl33t",
    "name": "Red",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/redisl33t",
    "writeupUrl": "",
    "hint": "A classic battle for the ages.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-x8664arch",
    "name": "x86 Architecture Overview",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/x8664arch",
    "writeupUrl": "",
    "hint": "A crash course in x86 architecture to enable us in malware reverse engineering.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-parrotpost",
    "name": "ParrotPost: Phishing Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/parrotpost",
    "writeupUrl": "",
    "hint": "Reveal how attackers can craft client-side credential-stealing webpages that evade detection by security tools.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-trooper",
    "name": "Trooper",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/trooper",
    "writeupUrl": "",
    "hint": "Use Cyber Threat Intelligence knowledge and skills to identify a threat based on a report.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-splunkexploringspl",
    "name": "Splunk: Exploring SPL",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Splunk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/splunkexploringspl",
    "writeupUrl": "https://medium.com/@akyuksel/tryhackme-splunk-exploring-spl-walkthrough-writeup-1cdaafa2f638",
    "hint": "Learn and explore the basics of the Search Processing Language.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-forgottenimplant",
    "name": "Forgotten Implant",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/forgottenimplant",
    "writeupUrl": "",
    "hint": "With almost no attack surface, you must use a forgotten C2 implant to get initial access.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-auditingandmonitoringse",
    "name": "Auditing and Monitoring",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/auditingandmonitoringse",
    "writeupUrl": "",
    "hint": "Learn about auditing, monitoring, logging, and SIEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-traverse",
    "name": "Traverse",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/traverse",
    "writeupUrl": "",
    "hint": "Challenge your secure coding skills to restore a compromised website.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cve202338408",
    "name": "CVE-2023-38408",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cve202338408",
    "writeupUrl": "",
    "hint": "Learn how to move laterally abusing libraries' side effects in Ubuntu (CVE-2023-38408).",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-intelcreationandcontainment",
    "name": "Threat Intel & Containment",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Wireshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/intelcreationandcontainment",
    "writeupUrl": "",
    "hint": "Learn what threat intelligence looks like, and some containment strategies used in the IR process.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-securityengineerintro",
    "name": "Security Engineer Intro",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/securityengineerintro",
    "writeupUrl": "",
    "hint": "What does a day in the life of a security engineer look like?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-crylo4a",
    "name": "Crylo",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/crylo4a",
    "writeupUrl": "",
    "hint": "Learn about the CryptoJS library and JavaScript-based client-side encryption and decryption.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-threatemulationintro",
    "name": "Intro to Threat Emulation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/threatemulationintro",
    "writeupUrl": "",
    "hint": "A look into threat emulation practices as a means of cyber security assessment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-splunkdashboardsandreports",
    "name": "Splunk: Dashboards and Reports",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Splunk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/splunkdashboardsandreports",
    "writeupUrl": "https://medium.com/@akyuksel/tryhackme-splunk-dashboards-and-reports-walkthrough-writeup-29b2e59fadf3",
    "hint": "Creating Dashboards and Reports in Splunk.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-greprtp",
    "name": "Grep",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/greprtp",
    "writeupUrl": "",
    "hint": "A challenge that tests your reconnaissance and OSINT skills.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-x86assemblycrashcourse",
    "name": "x86 Assembly Crash Course",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/x86assemblycrashcourse",
    "writeupUrl": "",
    "hint": "A crash course in x86 assembly to enable us in malware reverse engineering.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-identificationandscoping",
    "name": "Identification & Scoping",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/identificationandscoping",
    "writeupUrl": "",
    "hint": "A look into the second phase of the Incident Response Framework, Identification & Scoping.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lessonlearned",
    "name": "Lesson Learned?",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lessonlearned",
    "writeupUrl": "",
    "hint": "Have you learned your lesson?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtologs",
    "name": "Intro to Logs",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtologs",
    "writeupUrl": "",
    "hint": "Learn the fundamentals of logging, data sources, collection methods and principles to step into the log analysis world.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-advancedstaticanalysis",
    "name": "Advanced Static Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/advancedstaticanalysis",
    "writeupUrl": "",
    "hint": "Learn how to identify code constructs and examine the assembly code of malware.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-seriskmanagement",
    "name": "Risk Management",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/seriskmanagement",
    "writeupUrl": "",
    "hint": "Learn about framing, assessing, responding, and monitoring risk.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-expose",
    "name": "Expose",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/expose",
    "writeupUrl": "",
    "hint": "Use your red teaming knowledge to pwn a Linux machine.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-preparation",
    "name": "Preparation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "TheHive",
      "Atomic Test"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/preparation",
    "writeupUrl": "",
    "hint": "A look into the Preparation phase of the Incident Response.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-codeanalysis",
    "name": "Mother's Secret",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/codeanalysis",
    "writeupUrl": "",
    "hint": "Exploit flaws found in Mother's code to reveal its secrets.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-burpsuiterepeater",
    "name": "Burp Suite: Repeater",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/burpsuiterepeater",
    "writeupUrl": "",
    "hint": "Learn how to use Repeater to duplicate requests in Burp Suite.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-burpsuiteintruder",
    "name": "Burp Suite: Intruder",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/burpsuiteintruder",
    "writeupUrl": "",
    "hint": "Learn how to use Intruder to automate requests in Burp Suite.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-burpsuiteom",
    "name": "Burp Suite: Other Modules",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/burpsuiteom",
    "writeupUrl": "",
    "hint": "Take a dive into some of Burp Suite's lesser-known modules.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-burpsuiteextensions",
    "name": "Burp Suite: Extensions",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/burpsuiteextensions",
    "writeupUrl": "",
    "hint": "Learn how to use Extensions to broaden the functionality of Burp Suite.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-loggingforaccountability",
    "name": "Logging for Accountability",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/loggingforaccountability",
    "writeupUrl": "",
    "hint": "Learn about the role accountability plays in logging and incident response.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtosecurityarchitecture",
    "name": "Secure Network Architecture",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtosecurityarchitecture",
    "writeupUrl": "",
    "hint": "Learn about and implement security best practices for network environments.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-threatmodelling",
    "name": "Threat Modelling",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/threatmodelling",
    "writeupUrl": "",
    "hint": "Building cyber resiliency and emulation capabilities through threat modelling.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtoirandim",
    "name": "Intro to IR and IM",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtoirandim",
    "writeupUrl": "",
    "hint": "An introduction to Incident Response and Incident Management.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cybercrisismanagement",
    "name": "Cyber Crisis Management",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cybercrisismanagement",
    "writeupUrl": "",
    "hint": "An introduction into cyber crisis management and how a CMT works.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-becomingafirstresponder",
    "name": "Becoming a First Responder",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/becomingafirstresponder",
    "writeupUrl": "",
    "hint": "Explaining how first responders work and what to do if you are a first responder to a cyber incident.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-4th3n4",
    "name": "Athena",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/4th3n4",
    "writeupUrl": "",
    "hint": "Break all security and compromise the machine.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-customalertrulesinwazuh",
    "name": "Custom Alert Rules in Wazuh",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/customalertrulesinwazuh",
    "writeupUrl": "",
    "hint": "Learn how to create rules in Wazuh for your environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-supersecrettip",
    "name": "Super Secret TIp",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/supersecrettip",
    "writeupUrl": "",
    "hint": "Are you only good at one thing? You better be a matrix!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introductiontothreathunting",
    "name": "Threat Hunting: Introduction",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "MITRE ATT&CK"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introductiontothreathunting",
    "writeupUrl": "",
    "hint": "Behind the scenes of Threat Hunting - mindset, process, and goals.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-threathuntingfoothold",
    "name": "Threat Hunting: Foothold",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/threathuntingfoothold",
    "writeupUrl": "",
    "hint": "Hunting suspicious activities indicating initial user or host compromise.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-threathuntingpivoting",
    "name": "Threat Hunting: Pivoting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/threathuntingpivoting",
    "writeupUrl": "",
    "hint": "Hunting suspicious activities indicating threat propagation across the infrastructure.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-threathuntingendgame",
    "name": "Threat Hunting: Endgame",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/threathuntingendgame",
    "writeupUrl": "",
    "hint": "Learn how to hunt and discover suspicious activities indicating actions on objectives.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-paymentcollectors",
    "name": "Hunt Me I: Payment Collectors",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/paymentcollectors",
    "writeupUrl": "",
    "hint": "A Finance Director was recently phished. Can you hunt the logs and determine what damage was done?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-typosquatters",
    "name": "Hunt Me II: Typo Squatters",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/typosquatters",
    "writeupUrl": "",
    "hint": "One of your software developers unknowingly installed a malicious software. Can you trace back the root cause?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-splunklab",
    "name": "Splunk: Setting up a SOC Lab",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Splunk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/splunklab",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-splunk-setting-up-a-soc-lab-walkthrough-writeup-149d89ac3b0a",
    "hint": "Explore Splunk beyond basics.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-maldoc",
    "name": "MalDoc: Static Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/maldoc",
    "writeupUrl": "",
    "hint": "Perform detailed Static Analysis on malicious documents.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-logstash",
    "name": "Logstash: Data Processing Unit",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/logstash",
    "writeupUrl": "",
    "hint": "Learn how to collect, process and transform data with Logstash.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-splunkdatamanipulation",
    "name": "Splunk: Data Manipulation",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Splunk"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/splunkdatamanipulation",
    "writeupUrl": "",
    "hint": "Learn how to parse and manipulate data in Splunk.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-slingshot",
    "name": "Slingshot",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/slingshot",
    "writeupUrl": "",
    "hint": "Can you retrace an attacker's steps after they enumerate and compromise a web server?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtologanalysis",
    "name": "Intro to Log Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "awk",
      "grep",
      "cut",
      "head"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtologanalysis",
    "writeupUrl": "",
    "hint": "An intro to log analysis, best practices, and essential tools for effective detection and response.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-atomicbirdone",
    "name": "Atomic Bird Goes Purple #1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/atomicbirdone",
    "writeupUrl": "",
    "hint": "Time to simulate hunting and detecting activities to sharpen your purple teaming skills.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-atomicbirdtwo",
    "name": "Atomic Bird Goes Purple #2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/atomicbirdtwo",
    "writeupUrl": "",
    "hint": "Time to simulate hunting and detecting activities to sharpen your purple teaming skills.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-eradicationandremediation",
    "name": "Eradication & Remediation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/eradicationandremediation",
    "writeupUrl": "",
    "hint": "A look into the fourth phase of the Incident Response framework: Eradication, Remediation, and Recovery.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lessonslearned",
    "name": "Lessons Learned",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Sigma"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lessonslearned",
    "writeupUrl": "",
    "hint": "A look into the fifth phase of the Incident Response framework: Lessons Learned.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-logoperations",
    "name": "Log Operations",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/logoperations",
    "writeupUrl": "",
    "hint": "Learn the operation process details.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-fixit",
    "name": "Fixit",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/fixit",
    "writeupUrl": "",
    "hint": "Fix the log parsing issue and analyze the logs in Splunk.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-compiled",
    "name": "Compiled",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/compiled",
    "writeupUrl": "",
    "hint": "Strings can only help you so far.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-looneytunes",
    "name": "Looney Tunables",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/looneytunes",
    "writeupUrl": "",
    "hint": "CVE-2023-4911: That's all Sec-Folks!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-registrypersistencedetection",
    "name": "Registry Persistence Detection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/registrypersistencedetection",
    "writeupUrl": "",
    "hint": "Learn to use the AutoRuns PowerShell module to detect persistence mechanisms that use the Registry.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sourcecodesecurity",
    "name": "Source Code Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sourcecodesecurity",
    "writeupUrl": "",
    "hint": "Learn how to keep your source code secure using credential hygiene practices.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-confluence202322515",
    "name": "Confluence CVE-2023-22515",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/confluence202322515",
    "writeupUrl": "",
    "hint": "Exploit CVE-2023-22515 to get admin access to Confluence Server and Data Center editions.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hijack",
    "name": "Hijack",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hijack",
    "writeupUrl": "",
    "hint": "Misconfigs conquered, identities claimed.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-servidae",
    "name": "Servidae: Log Analysis in ELK",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/servidae",
    "writeupUrl": "",
    "hint": "Analyze the logs of an affected workstation to determine the attacker's indicators of compromise.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bppenguin",
    "name": "Bulletproof Penguin",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bppenguin",
    "writeupUrl": "",
    "hint": "Can you harden this Linux server?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-boogeyman2",
    "name": "Boogeyman 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/boogeyman2",
    "writeupUrl": "",
    "hint": "The Boogeyman is back. Are you still afraid of the Boogeyman?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-boogeyman3",
    "name": "Boogeyman 3",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/boogeyman3",
    "writeupUrl": "",
    "hint": "The Boogeyman emerges from the darkness again.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cauldron",
    "name": "The Witch's Cauldron",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cauldron",
    "writeupUrl": "",
    "hint": "Can you share Bob's secret recipe with Alice without Eve finding out?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dockmagic",
    "name": "DockMagic",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dockmagic",
    "writeupUrl": "",
    "hint": "In a land of magic, a wizard escaped from his confinement and embarks on a new adventure.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-loguniverse",
    "name": "Log Universe",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "ULogViewer"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/loguniverse",
    "writeupUrl": "",
    "hint": "Explore log files from various systems and learn how to carve data to adopt a course of action!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-probe",
    "name": "Probe",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/probe",
    "writeupUrl": "",
    "hint": "Use your baseline scanning skills to enumerate a secure network.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-recoveringactivedirectory",
    "name": "Recovering Active Directory",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/recoveringactivedirectory",
    "writeupUrl": "",
    "hint": "Learn basic techniques to recover an AD in case of compromise.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dreaming",
    "name": "Dreaming",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dreaming",
    "writeupUrl": "",
    "hint": "Solve the riddle that dreams have woven.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cactus",
    "name": "Cactus",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cactus",
    "writeupUrl": "",
    "hint": "Bypass authentication and execute commands remotely on Cacti using CVE-2022-46169.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-avenger",
    "name": "AVenger",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/avenger",
    "writeupUrl": "",
    "hint": "You\u2019ve been asked to exploit all the vulnerabilities present.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-stealth",
    "name": "Stealth",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/stealth",
    "writeupUrl": "",
    "hint": "Use your evasion skills to pwn a Windows target with an updated defence mechanism.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adventofcyber23sidequest",
    "name": "Advent of Cyber '23 Side Quest",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adventofcyber23sidequest",
    "writeupUrl": "",
    "hint": "Explore a series of advanced challenges alongside the core Advent of Cyber event!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adventofcyber2023",
    "name": "Advent of Cyber 2023",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adventofcyber2023",
    "writeupUrl": "",
    "hint": "Get started with Cyber Security in 24 Days - Learn the basics by doing a new, beginner friendly security challenge every day leading up to Christmas.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-armageddon2r",
    "name": "Snowy ARMageddon",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/armageddon2r",
    "writeupUrl": "",
    "hint": "Assist the Yeti in breaching the cyber police perimeter!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adv3nt0fdbopsjcap",
    "name": "The Bandit Surfer",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adv3nt0fdbopsjcap",
    "writeupUrl": "",
    "hint": "The Bandit Yeti is surfing to town.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-busyvimfrosteau",
    "name": "Frosteau Busy with Vim",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/busyvimfrosteau",
    "writeupUrl": "",
    "hint": "Stay frosty!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-surfingyetiiscomingtotown",
    "name": "The Return of the Yeti",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/surfingyetiiscomingtotown",
    "writeupUrl": "",
    "hint": "The Yeti needs a plan for 2023. Help him out!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dodge",
    "name": "Dodge",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dodge",
    "writeupUrl": "",
    "hint": "Test your pivoting and network evasion skills.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-whyhackme",
    "name": "WhyHackMe",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/whyhackme",
    "writeupUrl": "",
    "hint": "Dive into the depths of security and analysis with WhyHackMe.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-containervulnerabilitiesdg",
    "name": "Container Vulnerabilities",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/containervulnerabilitiesDG",
    "writeupUrl": "",
    "hint": "Learn how some of the common vulnerabilities found within Docker containers can be exploited.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ssrfhr",
    "name": "SSRF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ssrfhr",
    "writeupUrl": "",
    "hint": "Discover the inner workings of SSRF and explore multiple exploitation techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-gitlabcve20237028",
    "name": "GitLab CVE-2023-7028",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gitlabcve20237028",
    "writeupUrl": "",
    "hint": "Learn to exploit a GitLab instance using CVE-2023-7028 and understand various mitigation techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-umbrella",
    "name": "Umbrella",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/umbrella",
    "writeupUrl": "",
    "hint": "Breach Umbrella Corp's time-tracking server by exploiting misconfigurations around containerisation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-httprequestsmuggling",
    "name": "HTTP Request Smuggling",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/httprequestsmuggling",
    "writeupUrl": "",
    "hint": "Learn about HTTP Request Smuggling and its different techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-resetui",
    "name": "Reset",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/resetui",
    "writeupUrl": "",
    "hint": "This challenge simulates a cyber-attack scenario where you must exploit an Active Directory environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-filepathtraversal",
    "name": "File Inclusion, Path Traversal",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/filepathtraversal",
    "writeupUrl": "",
    "hint": "Exploit File Inclusion and Path Traversal vulnerabilities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-kitty",
    "name": "Kitty",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/kitty",
    "writeupUrl": "",
    "hint": "Map? Where we are going, we don't need maps.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-containerhardening",
    "name": "Container Hardening",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/containerhardening",
    "writeupUrl": "",
    "hint": "Learn how to implement the mechanisms designed to secure your Docker containers.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-eviction",
    "name": "Eviction",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/eviction",
    "writeupUrl": "",
    "hint": "Unearth the monster from under your bed.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cicdandbuildsecurity",
    "name": "CI/CD and Build Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cicdandbuildsecurity",
    "writeupUrl": "",
    "hint": "Learn about CI/CD and build principles to safeguard your pipelines.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtoiac",
    "name": "Intro to IaC",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtoiac",
    "writeupUrl": "",
    "hint": "An introduction to infrastructure as code.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-breakrsa",
    "name": "Breaking RSA",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/breakrsa",
    "writeupUrl": "",
    "hint": "Hop in and break poorly implemented RSA using Fermat's factorization algorithm.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-onpremisesiac",
    "name": "On-Premises IaC",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/onpremisesiac",
    "writeupUrl": "",
    "hint": "This room provides security guidance for on-premises infrastructure as code deployments.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtok8s",
    "name": "Intro to Kubernetes",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtok8s",
    "writeupUrl": "",
    "hint": "An introduction to Kubernetes covering the basics of cluster creation and hardening.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cloudbasediac",
    "name": "Cloud-based IaC",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cloudbasediac",
    "writeupUrl": "",
    "hint": "Learn about infrastructure as code (IaC) using tools for cloud deployment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-monikerlink",
    "name": "Moniker Link (CVE-2024-21413)",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/monikerlink",
    "writeupUrl": "",
    "hint": "Leak user's credentials using CVE-2024-21413 to bypass Outlook's Protected View.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-exfilibur",
    "name": "Exfilibur",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/exfilibur",
    "writeupUrl": "",
    "hint": "You\u2019ve been asked to exploit all the vulnerabilities present.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-chrome",
    "name": "Chrome",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/chrome",
    "writeupUrl": "",
    "hint": "Let us place all of our trust in a password manager.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-http2requestsmuggling",
    "name": "HTTP/2 Request Smuggling",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/http2requestsmuggling",
    "writeupUrl": "",
    "hint": "Exploit HTTP Request Smuggling in HTTP/2 environments.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-requestsmugglingbrowserdesync",
    "name": "HTTP Browser Desync",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/requestsmugglingbrowserdesync",
    "writeupUrl": "",
    "hint": "Learn about Request Smuggling Browser Desync.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-summit",
    "name": "Summit",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "PicoSecure"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/summit",
    "writeupUrl": "",
    "hint": "Can you chase a simulated adversary up the Pyramid of Pain until they finally back down?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dfirprocesslegalconsiderations",
    "name": "Legal Considerations in DFIR",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dfirprocesslegalconsiderations",
    "writeupUrl": "",
    "hint": "Understand the processes involved in DFIR and the legal considerations that guide them.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hacksmartersecurity",
    "name": "Hack Smarter Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hacksmartersecurity",
    "writeupUrl": "",
    "hint": "Can you hack the hackers?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxfilesystemanalysis",
    "name": "Linux File System Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxfilesystemanalysis",
    "writeupUrl": "",
    "hint": "Perform real-time file system analysis on a Linux system to identify an attacker's artefacts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-wsrequestsmuggling",
    "name": "Request Smuggling: WebSockets",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/wsrequestsmuggling",
    "writeupUrl": "",
    "hint": "Exploit HTTP Request Smuggling through WebSockets.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-elbandito",
    "name": "El Bandito",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/elbandito",
    "writeupUrl": "",
    "hint": "Can you help capture El Bandito before he leaves the galaxy?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-clocky",
    "name": "Clocky",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/clocky",
    "writeupUrl": "",
    "hint": "Time is an illusion.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsapplications",
    "name": "Windows Applications Forensics",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsapplications",
    "writeupUrl": "",
    "hint": "Perform a live analysis on Windows systems, focused on determining the outliers based on known behaviour of scheduled tasks, services, and installed applications.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-expregistryforensics",
    "name": "Expediting Registry Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/expregistryforensics",
    "writeupUrl": "",
    "hint": "This room explores different tools used to expedite analysis of registry data during investigation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bypass",
    "name": "Bypass",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bypass",
    "writeupUrl": "",
    "hint": "Use your defence evasion skills to take control of a secure network.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsuseractivity",
    "name": "Windows User Activity Analysis",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsuseractivity",
    "writeupUrl": "",
    "hint": "What happened in those 36 hours? A forensics case to solve.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsuseraccountforensics",
    "name": "Windows User Account Forensics",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "ntdsutil"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsuseraccountforensics",
    "writeupUrl": "",
    "hint": "Learn where to search for artefacts associated with users and accounts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-creative",
    "name": "Creative",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/creative",
    "writeupUrl": "",
    "hint": "Exploit a vulnerable web application and some misconfigurations to gain root privileges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-burg3rbytes",
    "name": "TryHack3M: Burg3r Bytes",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/burg3rbytes",
    "writeupUrl": "",
    "hint": "They say these burgers are worth every penny. Can you buy one?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sch3mad3mon",
    "name": "TryHack3M: Sch3Ma D3Mon",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sch3mad3mon",
    "writeupUrl": "",
    "hint": "A guided challenge to learn about SQL injection exploits.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tryhack3mencryptionchallenge",
    "name": "TryHack3M: TriCipher Summit",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tryhack3mencryptionchallenge",
    "writeupUrl": "",
    "hint": "Reach the apex of this triple-crypto challenge!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-subscribe",
    "name": "TryHack3M: Subscribe",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/subscribe",
    "writeupUrl": "",
    "hint": "Can you help Hack3M reach 3M subscribers?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tryhack3mbricksheist",
    "name": "TryHack3M: Bricks Heist",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tryhack3mbricksheist",
    "writeupUrl": "",
    "hint": "Crack the code, command the exploit! Dive into the heart of the system with just an RCE CVE as your key.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-axss",
    "name": "XSS",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/axss",
    "writeupUrl": "",
    "hint": "Explore in-depth the different types of XSS and their root causes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-csrfv2",
    "name": "CSRF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/csrfV2",
    "writeupUrl": "",
    "hint": "Learn how a CSRF vulnerability works and methods to exploit and defend against CSRF vulnerabilities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-capturereturns",
    "name": "Capture Returns",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/capturereturns",
    "writeupUrl": "",
    "hint": "The developers have improved their login form since last time. Can you bypass it?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-raceconditionsattacks",
    "name": "Race Conditions",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/raceconditionsattacks",
    "writeupUrl": "",
    "hint": "Learn about race conditions and how they affect web application security.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-corsandsop",
    "name": "Challenge",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/corsandsop",
    "writeupUrl": "",
    "hint": "Discover the forensic artefacts present within iOS.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-whatsyourname",
    "name": "Whats Your Name?",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/whatsyourname",
    "writeupUrl": "",
    "hint": "CORS & SOP",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-irdifficultiesandchallenges",
    "name": "IR Difficulties and Challenges",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/irdifficultiesandchallenges",
    "writeupUrl": "",
    "hint": "Whats Your Name?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-analysingvolatilememory",
    "name": "Analysing Volatile Memory",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/analysingvolatilememory",
    "writeupUrl": "",
    "hint": "Explore common DFIR obstacles and learn strategies for overcoming these challenges effectively.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-blizzard",
    "name": "Blizzard",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/blizzard",
    "writeupUrl": "",
    "hint": "Learn how the Windows OS manages volatile data in different files on disk. Explore how to extract and analyse volatile data from those artefacts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-insecuredeserialisation",
    "name": "Insecure Deserialisation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/insecuredeserialisation",
    "writeupUrl": "",
    "hint": "Get in-depth knowledge of the deserialisation process and how it poses a vulnerability in a web app.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsnetworkanalysis",
    "name": "Windows Network Analysis",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsnetworkanalysis",
    "writeupUrl": "",
    "hint": "Discover networking artefacts using internal tooling on Windows.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-profilesroom",
    "name": "Profiles",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/profilesroom",
    "writeupUrl": "",
    "hint": "No profile? No problem.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dombasedattacks",
    "name": "DOM-Based Attacks",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dombasedattacks",
    "writeupUrl": "",
    "hint": "Learn about DOM-based vulnerabilities that can be leveraged to stage client-side attacks!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-irphilosophyethics",
    "name": "IR Philosophy and Ethics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/irphilosophyethics",
    "writeupUrl": "",
    "hint": "Addressing the Incident Response philosophy.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cyberlensp6",
    "name": "CyberLens",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cyberlensp6",
    "writeupUrl": "",
    "hint": "Can you exploit the CyberLens web server and discover the hidden flags?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-prototypepollution",
    "name": "Prototype Pollution",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/prototypepollution",
    "writeupUrl": "",
    "hint": "Explore the concept of prototype pollution and its implications during pentesting.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-deadend",
    "name": "Dead End?",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/deadend",
    "writeupUrl": "",
    "hint": "IR Timeline Analysis",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ldapinjection",
    "name": "LDAP Injection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ldapinjection",
    "writeupUrl": "",
    "hint": "Dead End?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxprocessanalysis",
    "name": "Linux Process Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxprocessanalysis",
    "writeupUrl": "",
    "hint": "Exploiting Lightweight Directory Access Protocol.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-include",
    "name": "Include",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/include",
    "writeupUrl": "",
    "hint": "Perform thorough process and application analysis to identify an attacker's persistence methods.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-xxeinjection",
    "name": "XXE Injection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/xxeinjection",
    "writeupUrl": "",
    "hint": "Exploiting XML External Entities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tsharkthebasics",
    "name": "TShark: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Tshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tsharkthebasics",
    "writeupUrl": "",
    "hint": "Learn the basics of TShark and take your protocol and PCAP analysis skills a step further.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-airplane",
    "name": "Airplane",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/airplane",
    "writeupUrl": "",
    "hint": "Are you ready to fly?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-advancedsqlinjection",
    "name": "Advanced SQL Injection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/advancedsqlinjection",
    "writeupUrl": "",
    "hint": "Learn advanced injection techniques to exploit a web app.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tsharkcliwiresharkfeatures",
    "name": "TShark: CLI Wireshark Features",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Tshark",
      "Wireshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tsharkcliwiresharkfeatures",
    "writeupUrl": "",
    "hint": "Take your TShark skills to the next level by implementing Wireshark functionalities in the CLI.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mkingdom",
    "name": "mKingdom",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mkingdom",
    "writeupUrl": "",
    "hint": "Beginner-friendly box inspired by a certain mustache man.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-serversidetemplateinjection",
    "name": "Server-side Template Injection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/serversidetemplateinjection",
    "writeupUrl": "",
    "hint": "Exploit various templating engines that lead to SSTI vulnerability.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-iosanalysis",
    "name": "iOS Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/iosanalysis",
    "writeupUrl": "",
    "hint": "Discover the forensic artefacts present within iOS.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-snykopensource",
    "name": "Snyk Open Source",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/snykopensource",
    "writeupUrl": "",
    "hint": "Securing open-source dependencies with Snyk - a junior application security engineer's journey.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-snykcode",
    "name": "Snyk Code",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/snykcode",
    "writeupUrl": "",
    "hint": "Securing code with Snyk - a junior application security engineer's journey.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-w1seguy",
    "name": "W1seGuy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/w1seguy",
    "writeupUrl": "",
    "hint": "Securing code with Snyk - a junior application security engineer's journey.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-clusterhardening",
    "name": "Cluster Hardening",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/clusterhardening",
    "writeupUrl": "",
    "hint": "A w1se guy 0nce said, the answer is usually as plain as day.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-winincidentsurface",
    "name": "Windows Incident Surface",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/winincidentsurface",
    "writeupUrl": "",
    "hint": "Learn how to implement DFIR techniques to explore the Windows incident surface.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-publisher",
    "name": "Publisher",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/publisher",
    "writeupUrl": "",
    "hint": "Test your enumeration skills on this boot-to-root machine.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-orminjection",
    "name": "ORM Injection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/orminjection",
    "writeupUrl": "",
    "hint": "Learn how to exploit injection vulnerabilities in an ORM-based web app.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxlogsinvestigations",
    "name": "Linux Logs Investigations",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxlogsinvestigations",
    "writeupUrl": "",
    "hint": "Explore Linux system logs for effective incident response.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nanocherryctf",
    "name": "NanoCherryCTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nanocherryctf",
    "writeupUrl": "",
    "hint": "Explore a double-sided site and escalate to root!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nosqlinjectiontutorial",
    "name": "NoSQL injection Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nosqlinjectiontutorial",
    "writeupUrl": "",
    "hint": "A walkthrough depicting basic NoSQL injections on MongoDB.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxliveanalysis",
    "name": "Linux Live Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxliveanalysis",
    "writeupUrl": "",
    "hint": "Learn how to perform live forensics on a Linux host.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-thenewyorkflankees",
    "name": "New York Flankees",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thenewyorkflankees",
    "writeupUrl": "",
    "hint": "Discover the forensic artefacts present within iOS.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-k8sbestsecuritypractices",
    "name": "K8s Best Security Practices",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/k8sbestsecuritypractices",
    "writeupUrl": "",
    "hint": "Can you, the rogue adventurer, break through Stefan's defences to take control of his blog!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-critical",
    "name": "Critical",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "FTK imager",
      "WinPmem",
      "LIME",
      "osxpmem"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/critical",
    "writeupUrl": "",
    "hint": "Best Kubernetes security practices at a cluster level.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dx2hellskitchen",
    "name": "DX2: Hell's Kitchen",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dx2hellskitchen",
    "writeupUrl": "",
    "hint": "Acquire the basic skills to analyze a memory dump in a practical scenario.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introductiontocryptops",
    "name": "Introduction to CryptOps",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introductiontocryptops",
    "writeupUrl": "",
    "hint": "Can you help compromise a civilian machine that we believe is connected to the NSF?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-fridayovertime",
    "name": "Friday Overtime",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/fridayovertime",
    "writeupUrl": "",
    "hint": "Step into the shoes of a Cyber Threat Intelligence Analyst and put your investigation skills to the test.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-retracted",
    "name": "Retracted",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/retracted",
    "writeupUrl": "",
    "hint": "Investigate the case of the missing ransomware.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mondaymonitor",
    "name": "Monday Monitor",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Wazuh",
      "Sysmon"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mondaymonitor",
    "writeupUrl": "",
    "hint": "Ready to test Swiftspend's endpoint monitoring?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tsharkchallengesone",
    "name": "TShark Challenge I: Teamwork",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Tshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tsharkchallengesone",
    "writeupUrl": "",
    "hint": "Put your TShark skills into practice and analyse some network traffic.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tsharkchallengestwo",
    "name": "TShark Challenge II: Directory",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Tshark"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tsharkchallengestwo",
    "writeupUrl": "",
    "hint": "Put your TShark skills into practice and analyse some network traffic.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-injectics",
    "name": "Injectics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/injectics",
    "writeupUrl": "",
    "hint": "Use your injection skills to take control of a web app.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-enumerationbruteforce",
    "name": "Enumeration & Brute Force",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/enumerationbruteforce",
    "writeupUrl": "",
    "hint": "Enumerate and brute force authentication mechanisms.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-forensicimaging",
    "name": "Forensic Imaging",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/forensicimaging",
    "writeupUrl": "",
    "hint": "Discover the forensic artefacts present within iOS.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-apiwizardsbreach",
    "name": "APIWizards Breach",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/apiwizardsbreach",
    "writeupUrl": "",
    "hint": "Learn the basic concepts of forensic imaging.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sessionmanagement",
    "name": "Session Management",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sessionmanagement",
    "writeupUrl": "",
    "hint": "Investigate a security breach at APIWizards Inc.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-joomify",
    "name": "Joomify: CVE-2023-23752",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/joomify",
    "writeupUrl": "",
    "hint": "Learn about session management and the different attacks that can be performed against insecure implementations.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-blockroom",
    "name": "Block",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/blockroom",
    "writeupUrl": "",
    "hint": "Learn how to exploit a Joomla CMS using CVE-2023-23752 and understand various mitigation techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-microservicearchitectures",
    "name": "Microservices Architectures",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/microservicearchitectures",
    "writeupUrl": "",
    "hint": "Explore the problems associated with building a Microservice Architecture and how to overcome these to build a secure environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtocoldsystemforensics",
    "name": "Intro to Cold System Forensics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtocoldsystemforensics",
    "writeupUrl": "",
    "hint": "A look into the concepts of cold system forensics and how DFIR teams examine offline systems.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ironshade",
    "name": "IronShade",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ironshade",
    "writeupUrl": "",
    "hint": "Perform a compromise assessment on a Linux host and identify the attack footprints.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-securegitops",
    "name": "Secure GitOps",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/securegitops",
    "writeupUrl": "",
    "hint": "Learn how to secure the GitOps framework.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-papercut",
    "name": "PaperCut: CVE-2023-27350",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/papercut",
    "writeupUrl": "",
    "hint": "Authorisation bypass (CVE-2023-27350) in PaperCut Print Management software leading to remote code execution.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-yueiua",
    "name": "U.A. High School",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/yueiua",
    "writeupUrl": "",
    "hint": "Welcome to the web application of U.A., the Superhero Academy.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-oauthvulnerabilities",
    "name": "OAuth Vulnerabilities",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/oauthvulnerabilities",
    "writeupUrl": "",
    "hint": "Learn how the OAuth protocol works and master techniques to exploit it.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hypervisorinternals",
    "name": "Hypervisor Internals",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hypervisorinternals",
    "writeupUrl": "",
    "hint": "An introduction to the use of Hypervisors and their internal components.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hammer",
    "name": "Hammer",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hammer",
    "writeupUrl": "",
    "hint": "An introduction to the use of Hypervisors and their internal components.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hostedhypervisors",
    "name": "Hosted Hypervisors",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hostedhypervisors",
    "writeupUrl": "",
    "hint": "Exploiting Multi-Factor Authentication.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-trypwnmeone",
    "name": "TryPwnMe One",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/trypwnmeone",
    "writeupUrl": "",
    "hint": "Learn about Hosted Hypervisors, how to investigate them, and more.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-k8sruntimesecurity",
    "name": "K8s Runtime Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/k8sruntimesecurity",
    "writeupUrl": "",
    "hint": "Secure a Kubernetes environment using in-house offerings and runtime security tools like Falco.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-irplaybooks",
    "name": "IR Playbooks",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Elastic"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/irplaybooks",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-ir-playbooks-walkthrough-writeup-d85dac36258b",
    "hint": "Learn the basics of creating and using IR playbooks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-certaindoom",
    "name": "CERTain Doom",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/certaindoom",
    "writeupUrl": "",
    "hint": "Bob has since joined the CERT team and developed a nifty new site. Is there more than meets the eye?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-jwtsecurity",
    "name": "JWT Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/jwtsecurity",
    "writeupUrl": "",
    "hint": "Learn about JWTs, where they are used, and how they need to be secured.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxincidentsurface",
    "name": "Linux Incident Surface",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxincidentsurface",
    "writeupUrl": "",
    "hint": "Explore various areas of Incident Surface in Linux and how to identify the footprints of the incident.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-breakmenu",
    "name": "Breakme",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/breakmenu",
    "writeupUrl": "",
    "hint": "Break this secure system and get the flags, if you can.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cheesectfv10",
    "name": "Cheese CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cheesectfv10",
    "writeupUrl": "",
    "hint": "Inspired by the great cheese talk of THM!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-thelondonbridge",
    "name": "The London Bridge",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thelondonbridge",
    "writeupUrl": "",
    "hint": "The London Bridge is falling down.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-k2room",
    "name": "K2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/k2room",
    "writeupUrl": "",
    "hint": "Are you able to make your way through the mountain?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pyrat",
    "name": "Pyrat",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pyrat",
    "writeupUrl": "",
    "hint": "Test your enumeration skills on this boot-to-root machine.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-brains",
    "name": "Brains",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/brains",
    "writeupUrl": "",
    "hint": "The city forgot to close its gate.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-backtrack",
    "name": "Backtrack",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/backtrack",
    "writeupUrl": "",
    "hint": "Daring to set foot where no one has.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-extractedroom",
    "name": "Extracted",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/extractedroom",
    "writeupUrl": "",
    "hint": "We need your help!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mountaineerlinux",
    "name": "Mountaineer",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mountaineerlinux",
    "writeupUrl": "",
    "hint": "Will you find the flags between all these mountains?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networkingsecureprotocols",
    "name": "Networking Secure Protocols",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networkingsecureprotocols",
    "writeupUrl": "",
    "hint": "Learn how TLS, SSH, and VPN can secure your network traffic.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networkingcoreprotocols",
    "name": "Networking Core Protocols",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networkingcoreprotocols",
    "writeupUrl": "",
    "hint": "Learn about the core TCP/IP protocols.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networkingessentials",
    "name": "Networking Essentials",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networkingessentials",
    "writeupUrl": "",
    "hint": "Explore networking protocols from automatic configuration to routing packets to the destination.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tcpdump",
    "name": "Tcpdump: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tcpdump",
    "writeupUrl": "",
    "hint": "Learn how to use Tcpdump to save, filter, and display packets.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networkingconcepts",
    "name": "Networking Concepts",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networkingconcepts",
    "writeupUrl": "",
    "hint": "Learn about the ISO OSI model and the TCP/IP protocol suite.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nmap",
    "name": "Nmap: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "nmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nmap",
    "writeupUrl": "",
    "hint": "Learn how to use Nmap to discover live hosts, find open ports, and detect service versions.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-searchskills",
    "name": "Search Skills",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/searchskills",
    "writeupUrl": "",
    "hint": "Learn to efficiently search the Internet and use specialized search engines and technical docs.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowscommandline",
    "name": "Windows Command Line",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowscommandline",
    "writeupUrl": "",
    "hint": "Learn the essential Windows commands.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-capabasics",
    "name": "CAPA: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/capabasics",
    "writeupUrl": "",
    "hint": "Learn to use CAPA to identify malicious capabilities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hashingbasics",
    "name": "Hashing Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hashingbasics",
    "writeupUrl": "",
    "hint": "Learn about hashing functions and their uses in password verification and file integrity checking.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cryptographybasics",
    "name": "Cryptography Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cryptographybasics",
    "writeupUrl": "",
    "hint": "Learn the basics of cryptography and symmetric encryption.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-publickeycrypto",
    "name": "Public Key Cryptography Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/publickeycrypto",
    "writeupUrl": "",
    "hint": "Discover how public key ciphers such as RSA work and explore their role in applications such as SSH.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cyberchefbasics",
    "name": "CyberChef: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "www.cyberchef.com"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cyberchefbasics",
    "writeupUrl": "",
    "hint": "This room is an introduction to CyberChef, the Swiss Army knife for cyber security professionals.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-vulnerabilityscanneroverview",
    "name": "Vulnerability Scanner Overview",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnerabilityscanneroverview",
    "writeupUrl": "",
    "hint": "Learn about vulnerability scanners and how they work in a practical scenario.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-idsfundamentals",
    "name": "IDS Fundamentals",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/idsfundamentals",
    "writeupUrl": "",
    "hint": "Learn the fundamentals of IDS, along with the experience of working with Snort.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-firewallfundamentals",
    "name": "Firewall Fundamentals",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/firewallfundamentals",
    "writeupUrl": "",
    "hint": "Learn about firewalls and get hands-on with Windows and Linux built-in firewalls.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-digitalforensicsfundamentals",
    "name": "Digital Forensics Fundamentals",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "pdfinfo",
      "exiftool"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/digitalforensicsfundamentals",
    "writeupUrl": "",
    "hint": "Learn about digital forensics and related processes and experiment with a practical example.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-socfundamentals",
    "name": "SOC Fundamentals",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/socfundamentals",
    "writeupUrl": "",
    "hint": "Learn about the SOC team and their processes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-logsfundamentals",
    "name": "Logs Fundamentals",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/logsfundamentals",
    "writeupUrl": "",
    "hint": "Learn what logs are and how to analyze them for effective investigation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-incidentresponsefundamentals",
    "name": "Incident Response Fundamentals",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/incidentresponsefundamentals",
    "writeupUrl": "",
    "hint": "Learn how to perform Incident Response in cyber security.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-trywinme",
    "name": "TryWinMe: Think Cyber Monopoly",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/trywinme",
    "writeupUrl": "",
    "hint": "Enhance your skills, have fun, and collect tickets for a chance to win prizes! The more tickets you collect and match, the greater your odds of scoring big.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-shellsoverview",
    "name": "Shells Overview",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/shellsoverview",
    "writeupUrl": "",
    "hint": "Learn about the different types of shells.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sqlfundamentals",
    "name": "SQL Fundamentals",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sqlfundamentals",
    "writeupUrl": "",
    "hint": "Learn how to perform basic SQL queries to retrieve and manage data in a database.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-webapplicationbasics",
    "name": "Web Application Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/webapplicationbasics",
    "writeupUrl": "",
    "hint": "Learn the basics of web applications: HTTP, URLs, request methods, response codes, and headers.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-javascriptessentials",
    "name": "JavaScript Essentials",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/javascriptessentials",
    "writeupUrl": "",
    "hint": "Learn how to use JavaScript to add interactivity to a website and understand associated vulnerabilities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sqlmapthebasics",
    "name": "SQLMap: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "sqlmap"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sqlmapthebasics",
    "writeupUrl": "",
    "hint": "Learn about SQL injection and exploit this vulnerability through the SQLMap tool.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-training",
    "name": "Training Impact on Teams",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/training",
    "writeupUrl": "",
    "hint": "Discover the impact of training on teams and organisations.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-gobusterthebasics",
    "name": "Gobuster: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gobusterthebasics",
    "writeupUrl": "",
    "hint": "This room focuses on an introduction to Gobuster, an offensive security tool used for enumeration.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxshells",
    "name": "Linux Shells",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxshells",
    "writeupUrl": "",
    "hint": "Learn about scripting and the different types of Linux shells.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-remnuxgettingstarted",
    "name": "REMnux: Getting Started",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/remnuxgettingstarted",
    "writeupUrl": "",
    "hint": "Learn how you can use the tools inside the REMnux VM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-flarevmarsenaloftools",
    "name": "FlareVM: Arsenal of Tools",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/flarevmarsenaloftools",
    "writeupUrl": "",
    "hint": "Learn the arsenal of investigative tools in FlareVM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowspowershell",
    "name": "Windows PowerShell",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowspowershell",
    "writeupUrl": "",
    "hint": "Discover the \"Power\" in PowerShell and learn the basics.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-rabbitholeqq",
    "name": "Rabbit Hole",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/rabbitholeqq",
    "writeupUrl": "",
    "hint": "It's easy to fall into rabbit holes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-seetworoom",
    "name": "SeeTwo",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Wireshark",
      "tshark",
      "base64",
      "file"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/seetworoom",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-seetwo-ctf-writeup-351db967d02d",
    "hint": "Can you see who is in command and control?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hackback",
    "name": "Hack Back",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hackback",
    "writeupUrl": "",
    "hint": "Can you get to the bottom of what's wrong with the machine?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adventofcyber2024",
    "name": "Advent of Cyber 2024",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "file",
      "exiftool",
      "ELK",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adventofcyber2024",
    "writeupUrl": "",
    "hint": "Dive into the wonderful world of cyber security by engaging in festive beginner-friendly exercises every day in the lead-up to Christmas!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-threathuntingwithyara",
    "name": "Threat Hunting With YARA",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Yara",
      "MITRE ATT&CK"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/threathuntingwithyara",
    "writeupUrl": "",
    "hint": "This room focuses on using YARA for threat hunting.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mousetrap",
    "name": "Mouse Trap",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mousetrap",
    "writeupUrl": "",
    "hint": "Follow Jom and Terry on their purple teaming adventures, emulating attacks and investigating the leftover artefacts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-supplychainattacks",
    "name": "Supply Chain Attack: Lottie",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/supplychainattacks",
    "writeupUrl": "",
    "hint": "Learn about supply chain attacks and their various mitigation techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-incidentresponseprocess",
    "name": "Incident Response Process",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/incidentresponseprocess",
    "writeupUrl": "",
    "hint": "Practice the NIST Incident Response lifecycle steps on a compromised Windows workstation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-thestickershop",
    "name": "The Sticker Shop",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thestickershop",
    "writeupUrl": "",
    "hint": "Can you exploit the sticker shop in order to capture the flag?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adventofcyber24sidequest",
    "name": "Advent of Cyber '24 Side Quest",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adventofcyber24sidequest",
    "writeupUrl": "",
    "hint": "Explore a series of advanced challenges alongside the core Advent of Cyber event!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-baselineanomalies",
    "name": "Baselines and Anomalies",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/baselineanomalies",
    "writeupUrl": "",
    "hint": "Identify normal activity and hunt for anomalies.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-silverplatter",
    "name": "Silver Platter",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/silverplatter",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-silver-platter-ctf-writeup-9a13f9c7a25b",
    "hint": "Can you breach the server?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-insecurerandomness",
    "name": "Insecure Randomness",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/insecurerandomness",
    "writeupUrl": "",
    "hint": "Learn how incorrectly configured randomness can lead to application compromise.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lofi",
    "name": "Lo-Fi",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lofi",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-lo-fi-ctf-writeup-c1f464615983",
    "hint": "Want to hear some lo-fi beats, to relax or study to? We've got you covered!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lightroom",
    "name": "Light",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lightroom",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-light-ctf-writeup-58f4c32a37fe",
    "hint": "Welcome to the Light database application!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mbrandgptanalysis",
    "name": "MBR and GPT Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mbrandgptanalysis",
    "writeupUrl": "",
    "hint": "Learn how MBR and GPT forensics are carried out to identify attacks during the boot process.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-smol",
    "name": "Smol",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "wpscan",
      "www.cyberchef.com",
      "John the Ripper"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/smol",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-smol-ctf-writeup-7ad4f9373d22",
    "hint": "Test your enumeration skills on this boot-to-root machine.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-paddingoracles",
    "name": "Padding Oracles",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/paddingoracles",
    "writeupUrl": "",
    "hint": "Learn how the padding works during encryption and master techniques to exploit it.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-trypwnmetwo",
    "name": "TryPwnMe Two",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/trypwnmetwo",
    "writeupUrl": "",
    "hint": "Test yourself with our Exploit Development challenges and practice the foundational techniques of binary exploitation in this second part of the TryPwnMe saga.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-bypassreallysimplesecurity",
    "name": "Bypass Really Simple Security",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bypassreallysimplesecurity",
    "writeupUrl": "",
    "hint": "Learn how to exploit a WordPress website using CVE-2024-10924 and understand various mitigation techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-fat32analysis",
    "name": "FAT32 Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/fat32analysis",
    "writeupUrl": "",
    "hint": "Examine the FAT32 filesystem from a forensic point of view.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-yougotmail",
    "name": "You Got Mail",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/yougotmail",
    "writeupUrl": "",
    "hint": "Test your recon and phishing skills in order to complete your objective.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lengthextensionattacks",
    "name": "Length Extension Attacks",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lengthextensionattacks",
    "writeupUrl": "",
    "hint": "Learn how hash functions enable attackers to extend and manipulate data using length extension attacks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-decryptify",
    "name": "Decryptify",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/decryptify",
    "writeupUrl": "",
    "hint": "Use your exploitation skills to uncover encrypted keys and get RCE.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-extanalysis",
    "name": "EXT Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/extanalysis",
    "writeupUrl": "",
    "hint": "Discover the forensic basics of the EXT file system.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-rabbitstore",
    "name": "Rabbit Store",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/rabbitstore",
    "writeupUrl": "",
    "hint": "Demonstrate your web application testing skills and the basics of Linux to escalate your privileges.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-cryptofailures",
    "name": "Crypto Failures",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cryptofailures",
    "writeupUrl": "",
    "hint": "Implementing your own military-grade encryption is usually not the best idea.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ntfsanalysis",
    "name": "NTFS Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ntfsanalysis",
    "writeupUrl": "",
    "hint": "Explore the NTFS file system, its layout, and important components.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-billing",
    "name": "Billing",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/billing",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-billing-ctf-writeup-460364a08de8",
    "hint": "Some mistakes can be costly.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-tomcatcve202450379",
    "name": "Tomcat: CVE-2024-50379",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tomcatcve202450379",
    "writeupUrl": "",
    "hint": "Explore and learn about the Tomcat CVE-2024-50379 vulnerability.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-filecarving",
    "name": "File Carving",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/filecarving",
    "writeupUrl": "",
    "hint": "Learn about the forensic technique known as file carving.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-robots",
    "name": "Robots",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/robots",
    "writeupUrl": "",
    "hint": "A (small) tribute to I. Asimov.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hackfinitybattleencore",
    "name": "Hackfinity Battle Encore",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/HackfinityBattleEncore",
    "writeupUrl": "",
    "hint": "Welcome to the Hackfinity Battle CTF!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-nextjscve202529927",
    "name": "Next.js: CVE-2025-29927",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/nextjscve202529927",
    "writeupUrl": "",
    "hint": "Explore an authorization bypass vulnerability in Next.js.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-publickeyinfrastructure",
    "name": "Public Key Infrastructure",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/publickeyinfrastructure",
    "writeupUrl": "",
    "hint": "Learn about Public Key Infrastructure and why it's important to secure certificate lifecycles.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-diskrupt",
    "name": "Diskrupt",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/diskrupt",
    "writeupUrl": "",
    "hint": "Fix the damaged disk, analyse the filesystem, and recover the deleted files.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-attackingecboracles",
    "name": "Attacking ECB Oracles",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/attackingecboracles",
    "writeupUrl": "",
    "hint": "Learn about the electronic codebook (ECB) cipher mode and how to exploit its weaknesses.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-simplehelpcve202457727",
    "name": "SimpleHelp: CVE-2024-57727",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/simplehelpcve202457727",
    "writeupUrl": "",
    "hint": "Learn how attackers can exploit CVE-2024-57727 and how to detect that.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-macosforensicsbasics",
    "name": "macOS Forensics: The Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/macosforensicsbasics",
    "writeupUrl": "",
    "hint": "Learn the basics to prepare for performing forensics on macOS.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-diskfiltration",
    "name": "DiskFiltration",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/diskfiltration",
    "writeupUrl": "",
    "hint": "Test your Windows investigation skills on a critical data exfiltration case.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-breakingcryptothesimpleway",
    "name": "Breaking Crypto the Simple Way",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/breakingcryptothesimpleway",
    "writeupUrl": "",
    "hint": "Exploiting common cryptographic mistakes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-compromisedwindowsanalysis",
    "name": "Compromised Windows Analysis",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/compromisedwindowsanalysis",
    "writeupUrl": "",
    "hint": "Learn about some key forensic artifacts and solve an interesting case of a compromised Windows workstation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-socl1alerttriage",
    "name": "SOC L1 Alert Triage",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/socl1alerttriage",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-soc-l1-alert-triage-walkthrough-writeup-295b6165ea95",
    "hint": "Learn more about SOC alerts and build a systematic approach to efficiently triaging them.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-exfilnode",
    "name": "ExfilNode",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/exfilnode",
    "writeupUrl": "",
    "hint": "Continue hunting for the exfiltration footprints in the ex-employee's personal workstation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-justlooking",
    "name": "MS Sentinel: Just Looking",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/justlooking",
    "writeupUrl": "",
    "hint": "Microsoft Sentinel challenge for SOC analysts: incident investigation & threat hunting.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-xdrintroduction",
    "name": "XDR: Introduction",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/xdrintroduction",
    "writeupUrl": "",
    "hint": "This room will introduce you to the Microsoft Defender XDR portal and how to navigate around the portal.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-macosforensicsartefacts",
    "name": "macOS Forensics: Artefacts",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/macosforensicsartefacts",
    "writeupUrl": "",
    "hint": "Understand the forensic artefacts in macOS and learn to leverage them for forensic analysis.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mayhemroom",
    "name": "Mayhem",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mayhemroom",
    "writeupUrl": "",
    "hint": "Can you find the secrets inside the sea of mayhem?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-socl1alertreporting",
    "name": "SOC L1 Alert Reporting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/socl1alertreporting",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-soc-l1-alert-reporting-walkthrough-writeup-4905606997d0",
    "hint": "Learn how to properly report, escalate, and communicate about high-risk SOC alerts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-customtoolingpython",
    "name": "Custom Tooling Using Python",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "Python"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/customtoolingpython",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-custom-tooling-using-python-walkthrough-writeup-df91a7ad93d1",
    "hint": "Creating custom tooling for application testing using Python.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-memoryanalysisintroduction",
    "name": "Memory Analysis Introduction",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/memoryanalysisintroduction",
    "writeupUrl": "",
    "hint": "Learn how memory analysis helps detect threats during live investigations.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-erlangotpsshcve202532433",
    "name": "Erlang/OTP SSH: CVE-2025-32433",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/erlangotpsshcve202532433",
    "writeupUrl": "",
    "hint": "Learn about and exploit Erlang/OTP SSH CVE-2025-32433 in a lab setup.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-moebius",
    "name": "Moebius",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/moebius",
    "writeupUrl": "",
    "hint": "A place where you start at some point, and you have to go back to it in the end.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-loglesshunt",
    "name": "Logless Hunt",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/loglesshunt",
    "writeupUrl": "",
    "hint": "Detect every attack step on a Windows machine even after threat actors cleared Security logs.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-socworkbookslookups",
    "name": "SOC Workbooks and Lookups",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/socworkbookslookups",
    "writeupUrl": "",
    "hint": "Discover useful corporate resources to help you structure and simplify L1 alert triage.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ledger",
    "name": "Ledger",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ledger",
    "writeupUrl": "",
    "hint": "This challenge simulates a real cyber-attack scenario where you must exploit an Active Directory.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtographqlhacking",
    "name": "Intro to GraphQL Hacking",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtographqlhacking",
    "writeupUrl": "",
    "hint": "An introduction to GraphQL Hacking.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-memoryacquisition",
    "name": "Memory Acquisition",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/memoryacquisition",
    "writeupUrl": "",
    "hint": "Learn the techniques and best practices to acquire digitally sound memory.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-socmetricsobjectives",
    "name": "SOC Metrics and Objectives",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/socmetricsobjectives",
    "writeupUrl": "",
    "hint": "Explore key metrics driving SOC effectiveness and discover ways to improve them.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-securityfootage",
    "name": "Security Footage",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/securityfootage",
    "writeupUrl": "",
    "hint": "Perform digital forensics on a network capture to recover footage from a camera.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-writingpentestreports",
    "name": "Writing Pentest Reports",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/writingpentestreports",
    "writeupUrl": "",
    "hint": "Learn how to write professional pentesting reports that communicate risk to business stakeholders.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-apt28inceptiontheory",
    "name": "APT28 Inception Theory",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/apt28inceptiontheory",
    "writeupUrl": "",
    "hint": "Dive into the world of Fancy Bear, a Russian cyber espionage group, and explore their tactics and techniques.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-volttyphoon",
    "name": "Volt Typhoon",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/volttyphoon",
    "writeupUrl": "",
    "hint": "Investigate a suspected intrusion by the notorious APT group Volt Typhoon.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adauthenticatedenumeration",
    "name": "AD: Authenticated Enumeration",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adauthenticatedenumeration",
    "writeupUrl": "",
    "hint": "Explore how to breach and enumerate Active Directory with an authenticated account.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adbasicenumeration",
    "name": "AD: Basic Enumeration",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adbasicenumeration",
    "writeupUrl": "",
    "hint": "Learn how to enumerate an Active Directory network and get initial access.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-androidanalysis",
    "name": "Android Analysis",
    "ip": "10.10.x.x",
    "os": "Android",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/androidanalysis",
    "writeupUrl": "",
    "hint": "Dive deep into the Android OS and learn how to examine from a forensics point of view.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-apt28inthesnare",
    "name": "APT28 in the Snare",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/apt28inthesnare",
    "writeupUrl": "",
    "hint": "Engage in a hands-on investigation tracing Fancy Bear\u2019s intrusion chain.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1heist",
    "name": "Heist",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1heist",
    "writeupUrl": "",
    "hint": "From the Hackfinity Battle CTF event.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1passcode",
    "name": "PassCode",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1passcode",
    "writeupUrl": "",
    "hint": "From the Hackfinity Battle CTF event.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1abucketofphish",
    "name": "A Bucket of Phish",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1abucketofphish",
    "writeupUrl": "",
    "hint": "From the Hackfinity Battle CTF event.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mobileacquisition",
    "name": "Mobile Acquisition",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mobileacquisition",
    "writeupUrl": "",
    "hint": "Prepare for mobile acquisition with the challenges and methods used throughout the process.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-customtoolingviaburp",
    "name": "Custom Tooling using Burp",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/customtoolingviaburp",
    "writeupUrl": "",
    "hint": "Creating custom tooling for application testing using Burp Plugins.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsmemoryandprocs",
    "name": "Windows Memory & Processes",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsmemoryandprocs",
    "writeupUrl": "",
    "hint": "Analyze a memory dump of a Windows host and uncover malicious processes.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1flagvault",
    "name": "Flag Vault",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1flagvault",
    "writeupUrl": "",
    "hint": "Understand the basics of buffer overflows.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1flagvault2",
    "name": "Flag Vault 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1flagvault2",
    "writeupUrl": "",
    "hint": "Exploit a simple format string vulnerability.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1precision",
    "name": "Precision",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1precision",
    "writeupUrl": "",
    "hint": "Practice your advanced Linux Exploit Development skills.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1voidexecution",
    "name": "Void Execution",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1voidexecution",
    "writeupUrl": "",
    "hint": "Learn how to bypass restrictions in Linux exploit development.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1thegame",
    "name": "The Game",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1thegame",
    "writeupUrl": "",
    "hint": "Practice your Game Hacking skills.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1thegamev2",
    "name": "The Game v2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1thegamev2",
    "writeupUrl": "",
    "hint": "Practice your Game Hacking skills.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-adbadsuccessor",
    "name": "AD: BadSuccessor",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/adbadsuccessor",
    "writeupUrl": "",
    "hint": "Use the BadSuccessor attack for privilege escalation in an Active Directory environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsmemoryanduseractivity",
    "name": "Windows Memory & User Activity",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsmemoryanduseractivity",
    "writeupUrl": "",
    "hint": "Trace user behavior, command execution, file access, and macro-based payload delivery from memory.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-macosforensicsapplications",
    "name": "macOS Forensics: Applications",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/macosforensicsapplications",
    "writeupUrl": "",
    "hint": "Learn about macOS forensic artefacts related to different applications.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-machunt",
    "name": "Mac Hunt",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/machunt",
    "writeupUrl": "",
    "hint": "Utilize your macOS investigation skills to reveal the mystery behind a compromise.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsmemoryandnetwork",
    "name": "Windows Memory & Network",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsmemoryandnetwork",
    "writeupUrl": "",
    "hint": "Identify C2 traffic & post-exploit activity in Windows memory.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxmemoryanalysis",
    "name": "Linux Memory Analysis",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxmemoryanalysis",
    "writeupUrl": "",
    "hint": "Learn how to investigate and find the footprints of a threat actor in the Linux memory.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-supplementalmemory",
    "name": "Supplemental Memory",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/supplementalmemory",
    "writeupUrl": "",
    "hint": "Investigate lateral movement, credential theft, and additional adversary actions in a memory dump.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-volatilityessentials",
    "name": "Volatility Essentials",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/volatilityessentials",
    "writeupUrl": "",
    "hint": "Learn how to perform memory forensics with Volatility!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-roundcubecve202549113",
    "name": "Roundcube: CVE-2025-49113",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/roundcubecve202549113",
    "writeupUrl": "",
    "hint": "Exploit CVE-2025-49113 in a lab environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-customtoolingviabrowserautomation",
    "name": "Tooling via Browser Automation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/customtoolingviabrowserautomation",
    "writeupUrl": "",
    "hint": "Creating custom tooling for application testing using Selenium and Playwright.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-captchapocalypse",
    "name": "CAPTCHApocalypse",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/captchapocalypse",
    "writeupUrl": "",
    "hint": "When crypto interferes, automate.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-industrial-intrusion",
    "name": "Industrial Intrusion",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/industrial-intrusion",
    "writeupUrl": "",
    "hint": "Industrial Intrusion CTF",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsloggingforsoc",
    "name": "Windows Logging for SOC",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsloggingforsoc",
    "writeupUrl": "",
    "hint": "Start your Windows monitoring journey by learning how to use key system logs to detect threats.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-oracle9",
    "name": "Oracle 9",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Python"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/oracle9",
    "writeupUrl": "https://medium.com/genai-llm-security/tryhackme-oracle-9-ctf-writeup-7ad909ec1da1",
    "hint": "My designation is Oracle 9, I carry with me a sealed transmission.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1cipherssecretmessage",
    "name": "Cipher's Secret Message",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1cipherssecretmessage",
    "writeupUrl": "",
    "hint": "Sharpen your cryptography skills by analyzing code to get the flag.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1cryptosystem",
    "name": "Cryptosystem",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1cryptosystem",
    "writeupUrl": "",
    "hint": "Learn public-key cryptography concepts by analyzing data.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1darkmatter",
    "name": "DarkMatter",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1darkmatter",
    "writeupUrl": "",
    "hint": "Practice how to exploit a weak RSA implementation to recover the private key and decrypt a ransomware-encrypted files.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1order",
    "name": "Order",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1order",
    "writeupUrl": "",
    "hint": "Perform a known-plaintext attack to recover a repeating-key XOR key and decrypt a hidden message.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1evilgpt",
    "name": "Evil-GPT",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "Python"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1evilgpt",
    "writeupUrl": "https://medium.com/genai-llm-security/tryhackme-evil-gpt-ctf-writeup-c0d6bb8e3174",
    "hint": "Practice your LLM hacking skills.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1evilgptv2",
    "name": "Evil-GPT v2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1evilgptv2",
    "writeupUrl": "https://medium.com/genai-llm-security/tryhackme-evil-gpt-v2-ctf-writeup-en-draft-c25ac7634744",
    "hint": "Put your LLM hacking skills to the test one more time.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-aimlsecuritythreats",
    "name": "AI/ML Security Threats",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/aimlsecuritythreats",
    "writeupUrl": "https://medium.com/genai-llm-security/tryhackme-ai-ml-security-threats-walkthrough-writeup-04abd3f717ca",
    "hint": "Learn AI basics, key terms, and how it's used by both attackers and defenders.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-idadversarialattacks",
    "name": "Detecting Adversarial Attacks",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/idadversarialattacks",
    "writeupUrl": "",
    "hint": "Learn how to identify and analyse adversarial attacks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-defadversarialattacks",
    "name": "Defending Adversarial Attacks",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/defadversarialattacks",
    "writeupUrl": "",
    "hint": "Learn defence mechanisms to harden machine learning models.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-aiforensics",
    "name": "AI Forensics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/aiforensics",
    "writeupUrl": "",
    "hint": "Explore AI DFIR and learn how it boosts your investigation capabilities.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-containment",
    "name": "ContAInment",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/containment",
    "writeupUrl": "",
    "hint": "Can you help contain the ransomware threat with the help of AI?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsthreatdetection1",
    "name": "Windows Threat Detection 1",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsthreatdetection1",
    "writeupUrl": "",
    "hint": "Explore common Initial Access methods on Windows and learn how to detect them.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-honeynet-collapse",
    "name": "Honeynet Collapse",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/honeynet-collapse",
    "writeupUrl": "",
    "hint": "Welcome to Honeynet Collapse!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1hideandseek",
    "name": "Hide and Seek",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1hideandseek",
    "writeupUrl": "",
    "hint": "Conduct a live system analysis to uncover post-compromise activity related to persistence mechanisms.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1infinityshell",
    "name": "Infinity Shell",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1infinityshell",
    "writeupUrl": "",
    "hint": "Investigate and analyse the traces of an attack from an implanted webshell.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1sequeldump",
    "name": "Sequel Dump",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1sequeldump",
    "writeupUrl": "",
    "hint": "Can you decipher the captured traffic of an SQL Injection attack?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1sneakypatch",
    "name": "Sneaky Patch",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1sneakypatch",
    "writeupUrl": "",
    "hint": "Investigate the potential kernel backdoor implanted within the compromised system.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1stolenmount",
    "name": "Stolen Mount",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1stolenmount",
    "writeupUrl": "",
    "hint": "Analyse network traffic related to an unauthenticated file share access attempt, focusing on potential signs of data exfiltration.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hfb1royalrouter",
    "name": "Royal Router",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hfb1royalrouter",
    "writeupUrl": "",
    "hint": "You will learn how to compromise an IoT device.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsthreatdetection2",
    "name": "Windows Threat Detection 2",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsthreatdetection2",
    "writeupUrl": "",
    "hint": "Discover how to detect and analyze the first steps of threat actors after breaching Windows.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-directorydfirroom",
    "name": "Directory",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/directorydfirroom",
    "writeupUrl": "",
    "hint": "Do you have what it takes to crack this case?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-windowsthreatdetection3",
    "name": "Windows Threat Detection 3",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/windowsthreatdetection3",
    "writeupUrl": "",
    "hint": "Learn how threat actors manage to maintain access to the breached Windows hosts.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-humansattackvectors",
    "name": "Humans as Attack Vectors",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/humansattackvectors",
    "writeupUrl": "",
    "hint": "Understand why and how people are targeted in cyber attacks and how the SOC helps defend them.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-soupedecode01",
    "name": "Soupedecode 01",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/soupedecode01",
    "writeupUrl": "",
    "hint": "Test your enumeration skills on this boot-to-root machine.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-detectingwebshells",
    "name": "Detecting Web Shells",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/detectingwebshells",
    "writeupUrl": "",
    "hint": "Explore web shell detection by analyzing logs, file systems, and network traffic",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-eventhorizonroom",
    "name": "Event Horizon",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/eventhorizonroom",
    "writeupUrl": "",
    "hint": "Unearth the secrets beyond the Event Horizon.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-systemsattackvectors",
    "name": "Systems as Attack Vectors",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/systemsattackvectors",
    "writeupUrl": "",
    "hint": "Learn how attackers exploit vulnerable and misconfigured systems, and how you can protect them.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-contrabando",
    "name": "Contrabando",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/contrabando",
    "writeupUrl": "",
    "hint": "Never tell me the odds.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-fileandhashthreatintel",
    "name": "File and Hash Threat Intel",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/fileandhashthreatintel",
    "writeupUrl": "",
    "hint": "This room seeks to teach on enriching file and hash artefacts using threat intelligence.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-loganalysiswithsiem",
    "name": "Log Analysis with SIEM",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/loganalysiswithsiem",
    "writeupUrl": "",
    "hint": "Learn how SIEM solutions can be used to detect and analyse different types of malicious behaviour.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-extract",
    "name": "Extract",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/extract",
    "writeupUrl": "",
    "hint": "Can you extract the secrets of the library?",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-hack2win",
    "name": "Hack2Win: How you can grab extra tickets",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Very Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hack2win",
    "writeupUrl": "",
    "hint": "Where hacking meets winning. Turn your cyber security skills into real rewards. Complete rooms, collect tickets, fill your stamp cards, and enter raffles for prizes worth over $40,000!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-websecurityessentials",
    "name": "Web Security Essentials",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/websecurityessentials",
    "writeupUrl": "",
    "hint": "Learn how the web works, common website security risks, and protections for a safer internet.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introductiontoedrs",
    "name": "Introduction to EDR",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introductiontoedrs",
    "writeupUrl": "",
    "hint": "Learn the fundamentals of EDR and explore its features and working.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-voyage",
    "name": "Voyage",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/voyage",
    "writeupUrl": "",
    "hint": "Chain multiple vulnerabilities to gain control of a system.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sessionforensics",
    "name": "Session Forensics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sessionforensics",
    "writeupUrl": "",
    "hint": "Analyse sessions and tokens for web application investigation.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-malwareclassification",
    "name": "Malware Classification",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/malwareclassification",
    "writeupUrl": "",
    "hint": "Learn how to identify, classify, and understand common types of malware.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-ipanddomainthreatintel",
    "name": "IP and Domain Threat Intel",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ipanddomainthreatintel",
    "writeupUrl": "",
    "hint": "A look into enriching IP and domain insights with open source threat intelligence.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-pressedroom",
    "name": "Pressed",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/pressedroom",
    "writeupUrl": "",
    "hint": "A full-scale intrusion was recently detected within the network, raising critical alarms.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-socroleinblueteam",
    "name": "SOC Role in Blue Team",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/socroleinblueteam",
    "writeupUrl": "https://akyuksel.medium.com/tryhackme-soc-role-in-blue-team-ctf-writeup-3e814a1fecff",
    "hint": "Discover security roles and learn how to advance your SOC career, starting from the L1 analyst.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-detectingwebattacks",
    "name": "Detecting Web Attacks",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/detectingwebattacks",
    "writeupUrl": "",
    "hint": "Explore web attacks and detection methods through log and network traffic analysis.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-invite-only",
    "name": "Invite Only",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/invite-only",
    "writeupUrl": "",
    "hint": "Extract insight from a set of flagged artefacts, and distil the information into usable threat intelligence.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-appsecir",
    "name": "AppSec IR",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/appsecir",
    "writeupUrl": "",
    "hint": "An introduction into the overlapping worlds of AppSec and IR.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-chainingvulnerabilitieszp",
    "name": "Chaining Vulnerabilities",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/chainingvulnerabilitiesZp",
    "writeupUrl": "",
    "hint": "Learn how to chain vulnerabilities! From Low to High!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxloggingforsoc",
    "name": "Linux Logging for SOC",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxloggingforsoc",
    "writeupUrl": "",
    "hint": "Explore key Linux log sources and learn how to use them in your SOC triage.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-detectingwebddos",
    "name": "Detecting Web DDoS",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/detectingwebddos",
    "writeupUrl": "",
    "hint": "Explore denial-of-service attacks, detection techniques, and strategies for protection.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-sequence",
    "name": "Sequence",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/sequence",
    "writeupUrl": "",
    "hint": "Chain multiple vulnerabilities to take control of a system.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-introtocredentialharvesting",
    "name": "Intro to Credential Harvesting",
    "ip": "10.10.x.x",
    "os": "Active Directory",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/introtocredentialharvesting",
    "writeupUrl": "",
    "hint": "Learn how credentials are stored, cached, and exposed in Windows and Active Directory environments.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxthreatdetection1",
    "name": "Linux Threat Detection 1",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxthreatdetection1",
    "writeupUrl": "",
    "hint": "Explore how attackers break into Linux systems and how you can detect this in logs.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networksecurityessentials",
    "name": "Network Security Essentials",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networksecurityessentials",
    "writeupUrl": "",
    "hint": "Learn about key aspects of network security essentials and how to monitor and protect against adversaries.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-xdroperationglobaldagger",
    "name": "XDR: Operation Global Dagger",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/xdroperationglobaldagger",
    "writeupUrl": "",
    "hint": "Investigate and detect potential threats across your environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-xdrcredentialaccess",
    "name": "XDR: Credential Access",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/xdrcredentialaccess",
    "writeupUrl": "",
    "hint": "XDR: Credential Access",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networkdiscoverydetection",
    "name": "Network Discovery Detection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networkdiscoverydetection",
    "writeupUrl": "",
    "hint": "Understand how attackers discover assets in a network, and how to detect that activity.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-dataexfildetection",
    "name": "Data Exfiltration Detection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dataexfildetection",
    "writeupUrl": "",
    "hint": "Learn how to detect data exfiltration attempts in various network channels.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-xdroperationglobaldagger2",
    "name": "XDR: Operation Global Dagger 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/xdroperationglobaldagger2",
    "writeupUrl": "",
    "hint": "Investigate and detect potential threats across your environment.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mitmdetection",
    "name": "Man-in-the-Middle Detection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/mitmdetection",
    "writeupUrl": "",
    "hint": "Learn what MITM attack is, and how to identify the footprints of this attack in the network traffic.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxthreatdetection2",
    "name": "Linux Threat Detection 2",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxthreatdetection2",
    "writeupUrl": "",
    "hint": "Explore the first actions of attackers after breaching a Linux server and learn how to detect them.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-shadowtrace",
    "name": "Shadow Trace",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/shadowtrace",
    "writeupUrl": "",
    "hint": "Analyse a suspicious file, uncover hidden clues, and trace the source of the infection.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-linuxthreatdetection3",
    "name": "Linux Threat Detection 3",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/linuxthreatdetection3",
    "writeupUrl": "",
    "hint": "Cover the last stages of attacks on Linux and learn how they look in system logs.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-networktrafficbasics",
    "name": "Network Traffic Basics",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/networktrafficbasics",
    "writeupUrl": "",
    "hint": "This room teaches the basics of Network Traffic Analysis.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-phishingpond",
    "name": "The Phishing Pond",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/phishingpond",
    "writeupUrl": "",
    "hint": "Catch the phish before the phish catches you.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-initialaccesspot",
    "name": "Initial Access Pot",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/initialaccesspot",
    "writeupUrl": "",
    "hint": "Investigate the first, Linux part of the Honeynet Collapse!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-alerttriagewithsplunk",
    "name": "Alert Triage With Splunk",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/alerttriagewithsplunk",
    "writeupUrl": "",
    "hint": "Use Splunk to triage alerts and investigate malicious activity efficiently.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-alerttriagewithelastic",
    "name": "Alert Triage With Elastic",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/alerttriagewithelastic",
    "writeupUrl": "",
    "hint": "Investigate alerts with Elastic by analyzing logs and spotting threats.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-elevatingmovement",
    "name": "Elevating Movement",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/elevatingmovement",
    "writeupUrl": "",
    "hint": "Investigate the second, Windows part of the Honeynet Collapse!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-livingoffthelandattacks",
    "name": "Living Off the Land Attacks",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/livingoffthelandattacks",
    "writeupUrl": "",
    "hint": "Learn to detect and analyse Living Off the Land attacks using trusted Windows tools.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-lostinramslation",
    "name": "Lost in RAMslation",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lostinramslation",
    "writeupUrl": "",
    "hint": "Use your memory forensics skills to unwrap the third stage of the Honeynet Collapse!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-crmsnatch",
    "name": "CRM Snatch",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/crmsnatch",
    "writeupUrl": "",
    "hint": "Investigate the fourth, Disk part of the Honeynet Collapse!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-inputmanipulationpromptinjection",
    "name": "Input Manipulation & Prompt Injection",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/inputmanipulationpromptinjection",
    "writeupUrl": "https://medium.com/@akyuksel/tryhackme-input-manipulation-prompt-injection-walkthrough-writeup-502ff2446dbf",
    "hint": "Understand the basics of LLM Prompt Injection attacks.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owasptopten2025one",
    "name": "OWASP Top 10 2025: IAAA Failures",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owasptopten2025one",
    "writeupUrl": "",
    "hint": "Learn about A01, A07, and A09 in how they related to failures in the applied IAAA model.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owasptopten2025two",
    "name": "OWASP Top 10 2025: Application Design Flaws",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owasptopten2025two",
    "writeupUrl": "",
    "hint": "Learn about A02, A03, A06, and A10 and how they related to design flaws in the application.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-owasptopten2025three",
    "name": "OWASP Top 10 2025: Insecure Data Handling",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "Walkthrough"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/owasptopten2025three",
    "writeupUrl": "",
    "hint": "Learn about A04, A05, and A08 as they related to insecure data handling.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-shockandsilence",
    "name": "Shock and Silence",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/shockandsilence",
    "writeupUrl": "",
    "hint": "Investigate the fifth, File System part of the Honeynet Collapse!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-farewell",
    "name": "Farewell",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/farewell",
    "writeupUrl": "",
    "hint": "Use red-teaming techniques to bypass the WAF and obtain admin access to the web application.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-skyfall",
    "name": "Skyfall",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/skyfall",
    "writeupUrl": "https://0xdf.gitlab.io/tags#skyfall",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-02-03T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-pov",
    "name": "Pov",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/pov",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pov",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-27T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-analysis",
    "name": "Analysis",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/analysis",
    "writeupUrl": "https://0xdf.gitlab.io/tags#analysis",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-20T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-corporate",
    "name": "Corporate",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/corporate",
    "writeupUrl": "https://0xdf.gitlab.io/tags#corporate",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-12-16T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ouija",
    "name": "Ouija",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ouija",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ouija",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-12-02T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-napper",
    "name": "Napper",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/napper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#napper",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-11-11T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-appsanity",
    "name": "Appsanity",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/appsanity",
    "writeupUrl": "https://0xdf.gitlab.io/tags#appsanity",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-10-28T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-drive",
    "name": "Drive",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/drive",
    "writeupUrl": "https://0xdf.gitlab.io/tags#drive",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-10-14T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-rebound",
    "name": "Rebound",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/rebound",
    "writeupUrl": "https://0xdf.gitlab.io/tags#rebound",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-09-09T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-registrytwo",
    "name": "RegistryTwo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/registrytwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#registrytwo",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-07-22T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-aero",
    "name": "Aero",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/aero",
    "writeupUrl": "https://0xdf.gitlab.io/tags#aero",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-09-28T12:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-wifinetic",
    "name": "Wifinetic",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/wifinetic",
    "writeupUrl": "https://0xdf.gitlab.io/tags#wifinetic",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-09-13T10:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-cybermonday",
    "name": "Cybermonday",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/cybermonday",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cybermonday",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-08-19T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-download",
    "name": "Download",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/download",
    "writeupUrl": "https://0xdf.gitlab.io/tags#download",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-08-05T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-gofer",
    "name": "Gofer",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/gofer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#gofer",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-07-29T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-intentions",
    "name": "Intentions",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/intentions",
    "writeupUrl": "https://0xdf.gitlab.io/tags#intentions",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-07-01T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bookworm",
    "name": "Bookworm",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bookworm",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bookworm",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-05-27T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-snoopy",
    "name": "Snoopy",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/snoopy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#snoopy",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-05-06T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-onlyforyou",
    "name": "OnlyForYou",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/onlyforyou",
    "writeupUrl": "https://0xdf.gitlab.io/tags#onlyforyou",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-04-22T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-mailroom",
    "name": "Mailroom",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/mailroom",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mailroom",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-04-15T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-coder",
    "name": "Coder",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/coder",
    "writeupUrl": "https://0xdf.gitlab.io/tags#coder",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-04-01T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-socket",
    "name": "Socket",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/socket",
    "writeupUrl": "https://0xdf.gitlab.io/tags#socket",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-03-25T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-cerberus",
    "name": "Cerberus",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/cerberus",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cerberus",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-03-18T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-pikatwoo",
    "name": "PikaTwoo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/pikatwoo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pikatwoo",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-02-04T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-interface",
    "name": "Interface",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/interface",
    "writeupUrl": "https://0xdf.gitlab.io/tags#interface",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-02-11T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-mentor",
    "name": "Mentor",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/mentor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mentor",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-12-10T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-pollution",
    "name": "Pollution",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/pollution",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pollution",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-12-03T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-derailed",
    "name": "Derailed",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/derailed",
    "writeupUrl": "https://0xdf.gitlab.io/tags#derailed",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-11-19T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-forgot",
    "name": "Forgot",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/forgot",
    "writeupUrl": "https://0xdf.gitlab.io/tags#forgot",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-11-12T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-metatwo",
    "name": "MetaTwo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/metatwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#metatwo",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-10-29T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-awkward",
    "name": "Awkward",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/awkward",
    "writeupUrl": "https://0xdf.gitlab.io/tags#awkward",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-10-22T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-absolute",
    "name": "Absolute",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/absolute",
    "writeupUrl": "https://0xdf.gitlab.io/tags#absolute",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-09-24T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sekhmet",
    "name": "Sekhmet",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/sekhmet",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sekhmet",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-09-10T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-vessel",
    "name": "Vessel",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/vessel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#vessel",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-08-27T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-extension",
    "name": "Extension",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/extension",
    "writeupUrl": "https://0xdf.gitlab.io/tags#extension",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-07-16T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-backendtwo",
    "name": "BackendTwo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/backendtwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#backendtwo",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-05-02T07:00:05.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-backend",
    "name": "Backend",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/backend",
    "writeupUrl": "https://0xdf.gitlab.io/tags#backend",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-04-12T07:00:05.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-altered",
    "name": "Altered",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/altered",
    "writeupUrl": "https://0xdf.gitlab.io/tags#altered",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-03-30T07:00:05.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ransom",
    "name": "Ransom",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ransom",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ransom",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-03-15T08:00:05.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-pressed",
    "name": "Pressed",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/pressed",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pressed",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-02-03T08:00:05.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-nodeblog",
    "name": "NodeBlog",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/nodeblog",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nodeblog",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-01-10T08:00:05.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-logforge",
    "name": "LogForge",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/logforge",
    "writeupUrl": "https://0xdf.gitlab.io/tags#logforge",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-12-23T10:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-union",
    "name": "Union",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/union",
    "writeupUrl": "https://0xdf.gitlab.io/tags#union",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-11-22T10:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-spooktrol",
    "name": "Spooktrol",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/spooktrol",
    "writeupUrl": "https://0xdf.gitlab.io/tags#spooktrol",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-10-26T09:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-jarmis",
    "name": "Jarmis",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/jarmis",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jarmis",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-09-27T09:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sharp",
    "name": "Sharp",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/sharp",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sharp",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-12-05T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-cereal",
    "name": "Cereal",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/cereal",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cereal",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-11-21T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-academy",
    "name": "Academy",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/academy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#academy",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-11-07T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-apt",
    "name": "APT",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/apt",
    "writeupUrl": "https://0xdf.gitlab.io/tags#apt",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-10-31T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-hawk",
    "name": "Hawk",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/hawk",
    "writeupUrl": "https://0xdf.gitlab.io/tags#hawk",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-07-14T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  }
];
