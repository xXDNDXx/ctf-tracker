// Auto-generated catalog for SpecterCTF / HexTracker
// Total machines: 384
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
    "ip": "10.10.10.31",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Oracle-DB",
      "ODAT",
      "2018"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Silo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#silo",
    "hint": "Oracle 11g - ODAT SCOTT/TIGER, Java stored procedure escalates to SYSTEM.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "SMB",
      "VHD",
      "mRemoteNG",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bastion",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bastion",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "AD",
      "AS-REP",
      "BloodHound",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Forest",
    "writeupUrl": "https://0xdf.gitlab.io/tags#forest",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "AD",
      "Password-Spray",
      "DnsAdmins",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Resolute",
    "writeupUrl": "https://0xdf.gitlab.io/tags#resolute",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "AD",
      "Azure-AD-Connect",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Monteverde",
    "writeupUrl": "https://0xdf.gitlab.io/tags#monteverde",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "AD",
      "AS-REP",
      "Mimikatz",
      "2019"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Sauna",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sauna",
    "hint": "AS-REP roast svc-alfresco (GetNPUsers -no-pass). WinRM in. Privesc: AutoLogon registry creds -> DCSync rights.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "AD",
      "VNC",
      "SQLite",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Cascade",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cascade",
    "hint": "LDAP anonymous dump; deleted TempAdmin object holds a password (recover via replication metadata). Chain to DCSync.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "AD",
      "lsass-Dump",
      "BloodHound",
      "2020"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Blackfield",
    "writeupUrl": "https://0xdf.gitlab.io/tags#blackfield",
    "hint": "Anonymous SMB -> profiles.zip -> AS-REP roast support:support. DNSAdmins membership = custom DLL as SYSTEM, then DCSync.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Phishing",
      "PyPI",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/SneakyMailer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sneakymailer",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Java-Deserialization",
      "Systemd",
      "2020"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Time",
    "writeupUrl": "https://0xdf.gitlab.io/tags#time",
    "hint": "Jackson-style JSON deserialization RCE on the app. Root: timer_backup.sh sudo entry broken by sloppy quoting - inject via filename.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "AD",
      "PDF-Scraping",
      "gMSA",
      "2021"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Intelligence",
    "writeupUrl": "https://0xdf.gitlab.io/tags#intelligence",
    "hint": "ExifTool PDF author metadata builds username list -> predictable password format -> AS-REP roast. DNSAdmins = SYSTEM via DLL.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Kerberos",
      "NTLM-Disabled",
      "SQLi",
      "2022"
    ],
    "certifications": [
      "OSCP",
      "CRTO"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Scrambled",
    "writeupUrl": "https://0xdf.gitlab.io/tags#scrambled",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Telnet",
      "No-Auth"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Meow",
    "writeupUrl": "https://0xdf.gitlab.io/tags#meow",
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
    "id": "htb-fawn",
    "name": "Fawn",
    "ip": "10.129.1.2",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "FTP",
      "Anonymous"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Fawn",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fawn",
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
    "id": "htb-dancing",
    "name": "Dancing",
    "ip": "10.129.1.3",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "SMB",
      "Null-Session"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Dancing",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dancing",
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
    "id": "htb-redeemer",
    "name": "Redeemer",
    "ip": "10.129.1.4",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Redis",
      "No-Auth"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Redeemer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#redeemer",
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
    "id": "htb-explosion",
    "name": "Explosion",
    "ip": "10.129.1.5",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "RDP",
      "Default-Creds"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Explosion",
    "writeupUrl": "https://0xdf.gitlab.io/tags#explosion",
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
    "ip": "10.129.95.176",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "SQLi",
      "Tar-Wildcard",
      "Sudo"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Vaccine",
    "writeupUrl": "https://0xdf.gitlab.io/tags#vaccine",
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
    "id": "htb-archetype",
    "name": "Archetype",
    "ip": "10.129.95.187",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "MSSQL",
      "xp_cmdshell"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Archetype",
    "writeupUrl": "https://0xdf.gitlab.io/tags#archetype",
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
    "id": "htb-oopsie",
    "name": "Oopsie",
    "ip": "10.129.95.188",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "foothold",
    "tags": [
      "IDOR",
      "SUID"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Oopsie",
    "writeupUrl": "https://0xdf.gitlab.io/tags#oopsie",
    "timeSpentSeconds": 1800,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T10:00:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "userFlag": "HTB{user_foothold_captured}",
    "timeToUserSeconds": 1500
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
    "ip": "10.129.95.191",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "foothold",
    "tags": [
      "LFI",
      "TFTP"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Included",
    "writeupUrl": "https://0xdf.gitlab.io/tags#included",
    "timeSpentSeconds": 1800,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T10:00:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "userFlag": "HTB{user_foothold_captured}",
    "timeToUserSeconds": 1500
  },
  {
    "id": "htb-markup",
    "name": "Markup",
    "ip": "10.129.95.192",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "XXE",
      "Putty"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Markup",
    "writeupUrl": "https://0xdf.gitlab.io/tags#markup",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-guard",
    "name": "Guard",
    "ip": "10.129.95.193",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SSH",
      "Hashcat"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Guard",
    "writeupUrl": "https://0xdf.gitlab.io/tags#guard",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "htb-base",
    "name": "Base",
    "ip": "10.129.95.194",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "PHP",
      "VIP"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Base",
    "writeupUrl": "https://0xdf.gitlab.io/tags#base",
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
    "ip": "10.129.95.196",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "foothold",
    "tags": [
      "AWS-S3",
      "PHP-Webshell"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Three",
    "writeupUrl": "https://0xdf.gitlab.io/tags#three",
    "timeSpentSeconds": 1800,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T10:00:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "userFlag": "HTB{user_foothold_captured}",
    "timeToUserSeconds": 1500
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
    "ip": "10.129.95.198",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "MariaDB",
      "No-Pass"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/Sequel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sequel",
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
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HFS-CVE-2014-6287",
      "Powershell-Privesc",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/steelmountain",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-alfred",
    "name": "Alfred",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Jenkins-Groovy-RCE",
      "Token-Impersonation",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/alfred",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-ice",
    "name": "Ice",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Icecast-BOF-CVE-2004-1561",
      "Metasploit",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ice",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Squid-Proxy",
      "Upload-Bypass",
      "Systemctl-SUID",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnversity",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-kenobi",
    "name": "Kenobi",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "ProFTPD-CVE-2015-3306",
      "SUID-Binary-Copy",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/kenobi",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "Fuel-CMS-CVE-2018-16763",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/ignite",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "Joomla-SQLi-CVE-2017-8917",
      "Hashcat",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/dailybugle",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "SMB-SMTP-Enum",
      "Tar-Wildcard-Cron",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/skynet",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "thm-relevant",
    "name": "Relevant",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "SMB-Enum",
      "Webshell",
      "JuicyPotato",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/relevant",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "Buffer-Overflow",
      "Manual-Exploit-Dev",
      "2021"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/brainpan",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "PCAP-Analysis",
      "SQLi",
      "Privesc",
      "2020"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/thecodcaper",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
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
    "ip": "10.129.95.174",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "tags": [
      "sql",
      "sqli",
      "web",
      "login-bypass",
      "starting-point"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Appointment",
    "writeupUrl": "https://0xdf.gitlab.io/tags#appointment",
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
    "id": "htb-crocodile",
    "name": "Crocodile",
    "ip": "10.129.95.175",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "tags": [
      "ftp",
      "web",
      "login",
      "credentials",
      "starting-point"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Crocodile",
    "writeupUrl": "https://0xdf.gitlab.io/tags#crocodile",
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
    "id": "htb-funnel",
    "name": "Funnel",
    "ip": "10.129.95.176",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "tags": [
      "ssh",
      "port-forwarding",
      "tunneling",
      "postgresql",
      "starting-point"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Funnel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#funnel",
    "status": "foothold",
    "timeSpentSeconds": 1800,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T10:00:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "userFlag": "HTB{user_foothold_captured}",
    "timeToUserSeconds": 1500
  },
  {
    "id": "htb-bike",
    "name": "Bike",
    "ip": "10.129.95.177",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "tags": [
      "ssti",
      "nodejs",
      "handlebars",
      "web",
      "starting-point"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Bike",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bike",
    "status": "foothold",
    "timeSpentSeconds": 1800,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T10:00:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "userFlag": "HTB{user_foothold_captured}",
    "timeToUserSeconds": 1500
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
    "ip": "10.129.95.179",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "tags": [
      "jenkins",
      "groovy",
      "script-console",
      "starting-point"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Pennyworth",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pennyworth",
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
    "ip": "10.129.95.181",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Very Easy",
    "tags": [
      "log4j",
      "unifi",
      "mongodb",
      "starting-point"
    ],
    "certifications": [
      "HTB-Starting-Point"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Unified",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unified",
    "status": "foothold",
    "timeSpentSeconds": 1800,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T10:00:00.000Z",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "userFlag": "HTB{user_foothold_captured}",
    "timeToUserSeconds": 1500
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
  }
];
