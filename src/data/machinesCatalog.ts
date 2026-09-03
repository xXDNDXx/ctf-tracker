// SpecterCTF Master Target Catalog
// 100% Pure CTF Challenges (TryHackMe & Hack The Box)
// Daniel Dayan's Solved Roster: 45 HTB + 18 THM = 63 Pwned Targets
import { Machine } from '../types';

export const INITIAL_MACHINES: Machine[] = [
  {
    "id": "thm-rootme",
    "name": "RootMe",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "File-Upload",
      "Bypass",
      "SUID-Python",
      "Privesc",
      "CTF"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/rrootme",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Bypass PHP upload extension filter using .phtml on /panel, catch reverse shell, then escalate via /usr/bin/python SUID.",
    "timeSpentSeconds": 2700,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1080,
    "timeToRootSeconds": 2700,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
  },
  {
    "id": "thm-pickle-rick",
    "name": "Pickle Rick",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Web-Enumeration",
      "Command-Injection",
      "Sudo-Privesc",
      "Linux",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/picklerick",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Inspect page source for username, check robots.txt for clue. Bypass panel command filter using less/cat alternatives, check sudo -l.",
    "timeSpentSeconds": 1800,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 720,
    "timeToRootSeconds": 1800,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "FTP-Anonymous",
      "Hydra",
      "Tar-SUID",
      "Linux",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cowboyhacker",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Anonymous FTP reveals task.txt and locks.txt. Brute force SSH user lin with hydra, then abuse tar sudo privileges.",
    "timeSpentSeconds": 2700,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1080,
    "timeToRootSeconds": 2700,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
      "Privesc"
    ],
    "certifications": [],
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
      "Privesc"
    ],
    "certifications": [],
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
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/retro",
    "writeupUrl": "https://nepcodex.com/2021/07/retro-tryhackme-walkthrough/",
    "hint": "Find author comment on WordPress blog containing credentials, connect via RDP on port 3389, and escalate privileges using CVE-2019-1388 UAC browser certificate dialog bypass.",
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
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/blaster",
    "writeupUrl": "https://nepcodex.com/2021/07/blaster-tryhackme-walkthrough/",
    "hint": "Discover hidden web directory leading to credentials, log in via RDP, execute CVE-2019-1388 via hhupd.exe certificate view link to launch cmd.exe as SYSTEM, and investigate desktop files.",
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
      "Sudo-Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/tartarus",
    "writeupUrl": "https://nepcodex.com/2021/07/tartarus-tryhackme-walkthrough/",
    "hint": "Discover hidden directory via robots.txt, abuse custom upload script, pivot through multiple service accounts via cronjob manipulation, and exploit sudo tar wildcard vulnerability.",
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
    "status": "completed",
    "tags": [
      "CMS-Made-Simple",
      "CVE-2019-9053",
      "SQLi",
      "Vim-Sudo",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/easyctf",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "CMS Made Simple 2.2.8 is vulnerable to CVE-2019-9053 SQL injection. Crack salt hash, login via SSH, and escalate via vim sudo.",
    "timeSpentSeconds": 2700,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1080,
    "timeToRootSeconds": 2700,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
      "Capabilities"
    ],
    "certifications": [],
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
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/boilerctf2",
    "writeupUrl": "https://nepcodex.com/2021/07/boiler-ctf-tryhackme-walkthrough/",
    "hint": "Enumerate non-standard HTTP ports and web directories, exploit Sar2HTML command execution vulnerability, crack stored credentials, and exploit SUID binary find for root shell.",
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
      "Privesc"
    ],
    "certifications": [],
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
      "Privesc"
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
      "Perl Script"
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
      "Privesc"
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
      "Path-Hijacking"
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
      "Docker-Breakout"
    ],
    "certifications": [],
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
      "Secretsdump"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/attacktivedirectory",
    "writeupUrl": "https://nepcodex.com/2021/07/attacktive-directory-tryhackme-walkthrough/",
    "hint": "Enumerate domain user accounts using kerbrute, perform AS-REP roasting with Impacket GetNPUsers to crack user hashes, dump NTDS.dit via secretsdump, and pass-the-hash to domain admin.",
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
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gatekeeper",
    "writeupUrl": "https://nepcodex.com/2021/07/gatekeeper-tryhackme-walkthrough/",
    "hint": "Perform buffer overflow analysis on custom elite.exe service on port 31337, find offset and bad characters, generate shellcode, and exploit firejail/token impersonation for root.",
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
      "Binary Exploitation"
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
      "Classic Pentesting"
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
      "Privesc"
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
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/develpy",
    "writeupUrl": "https://nepcodex.com/2021/07/develpy-tryhackme-walkthrough/",
    "hint": "Python 2 input() function evaluates user input as arbitrary code on port 10000; exploit root cronjob executing writable python script in user directory.",
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
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "IDOR",
      "Hashing",
      "MD5",
      "Web",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/corridor",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "The corridor door numbers are MD5 hashed integers (1, 2, 3...). Crack the hashes to find the secret room index 0.",
    "timeSpentSeconds": 300,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 120,
    "timeToRootSeconds": 300,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/hackpark",
    "writeupUrl": "https://nepcodex.com/2021/07/hackpark-tryhackme-walkthrough/",
    "hint": "Brute force BlogEngine CMS login via Hydra, exploit CVE-2019-6714 directory traversal file upload to execute reverse shell, generate MSFvenom payload, and exploit unquoted service path for SYSTEM.",
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
      "GPO"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnnetroasted",
    "writeupUrl": "https://nepcodex.com/2021/07/vulnnet-roasted-tryhackme-walkthrough/",
    "hint": "Enumerate SMB shares anonymously to discover employee names, conduct AS-REP roasting against domain controller, crack ticket, and abuse misconfigured GPO or BloodHound path to domain admin.",
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
      "Privesc"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/brainstorm",
    "writeupUrl": "https://nepcodex.com/2021/07/brainstorm-tryhackme-walkthrough/",
    "hint": "Download chatserver.exe from anonymous FTP, reproduce stack buffer overflow locally in Immunity Debugger, calculate EIP offset, bypass bad characters, and execute reverse shell as SYSTEM.",
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
      "Privilege Escalation"
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
      "Privilege Escalation"
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
      "SeImpersonatePrivilege"
    ],
    "certifications": [
      "CPTS"
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
      "Privilege Escalation"
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
      "Privilege Escalation"
    ],
    "certifications": [
      "CPTS"
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
      "CVE-2023-41892"
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
      "Docker"
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
      "Hashcat"
    ],
    "certifications": [
      "CPTS"
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
      "SeImpersonatePrivilege"
    ],
    "certifications": [
      "CPTS"
    ],
    "roomUrl": "https://app.hackthebox.com/machines/Hospital",
    "writeupUrl": "https://0xdf.gitlab.io/tags#hospital",
    "hint": "Exploit Roundcube Webmail XSS / link injection to steal administrative session cookie, execute PHP webshell on Linux backend, pivot to internal Windows server, and escalate via GodPotato.",
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
      "Cron"
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
      "Pivoting"
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
      "Privilege Escalation"
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
      "Pytest"
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
      "Privilege Escalation"
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
      "Pivoting"
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
      "Ruby"
    ],
    "certifications": [
      "CPTS"
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
      "Doas"
    ],
    "certifications": [
      "CPTS"
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
      "Automation"
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
      "Privilege Escalation"
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
    "id": "htb-bizness",
    "name": "Bizness",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bizness",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bizness",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-06T17:00:00.000000Z",
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
    "id": "htb-devvortex",
    "name": "Devvortex",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/devvortex",
    "writeupUrl": "https://0xdf.gitlab.io/tags#devvortex",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-11-25T17:00:00.000000Z",
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
    "id": "htb-codify",
    "name": "Codify",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/codify",
    "writeupUrl": "https://0xdf.gitlab.io/tags#codify",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-11-04T17:00:00.000000Z",
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
    "id": "htb-analytics",
    "name": "Analytics",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/analytics",
    "writeupUrl": "https://0xdf.gitlab.io/tags#analytics",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-10-07T16:00:00.000000Z",
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
    "id": "htb-cozyhosting",
    "name": "CozyHosting",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/cozyhosting",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cozyhosting",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-09-02T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-keeper",
    "name": "Keeper",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/keeper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#keeper",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-08-12T16:00:00.000000Z",
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
    "id": "htb-twomillion",
    "name": "TwoMillion",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/twomillion",
    "writeupUrl": "https://0xdf.gitlab.io/tags#twomillion",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2023-06-07T09:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
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
    "id": "htb-authority",
    "name": "Authority",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/authority",
    "writeupUrl": "https://0xdf.gitlab.io/tags#authority",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-07-15T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sau",
    "name": "Sau",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/sau",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sau",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-07-08T16:00:00.000000Z",
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
    "id": "htb-pilgrimage",
    "name": "Pilgrimage",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/pilgrimage",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pilgrimage",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-06-24T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-topology",
    "name": "Topology",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/topology",
    "writeupUrl": "https://0xdf.gitlab.io/tags#topology",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-06-10T16:00:00.000000Z",
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
    "id": "htb-escape",
    "name": "Escape",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/escape",
    "writeupUrl": "https://0xdf.gitlab.io/tags#escape",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2023-02-25T17:00:00.000000Z",
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
    "id": "htb-squashed",
    "name": "Squashed",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/squashed",
    "writeupUrl": "https://0xdf.gitlab.io/tags#squashed",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-11-10T07:00:00.000000Z",
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
    "id": "htb-rainyday",
    "name": "RainyDay",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/rainyday",
    "writeupUrl": "https://0xdf.gitlab.io/tags#rainyday",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-10-15T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-photobomb",
    "name": "Photobomb",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/photobomb",
    "writeupUrl": "https://0xdf.gitlab.io/tags#photobomb",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-10-08T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ambassador",
    "name": "Ambassador",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ambassador",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ambassador",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-10-01T16:00:00.000000Z",
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
    "id": "htb-shoppy",
    "name": "Shoppy",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/shoppy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shoppy",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-09-17T16:00:00.000000Z",
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
    "id": "htb-updown",
    "name": "UpDown",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/updown",
    "writeupUrl": "https://0xdf.gitlab.io/tags#updown",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-09-03T16:00:00.000000Z",
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
    "id": "htb-health",
    "name": "Health",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/health",
    "writeupUrl": "https://0xdf.gitlab.io/tags#health",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-08-20T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-outdated",
    "name": "Outdated",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/outdated",
    "writeupUrl": "https://0xdf.gitlab.io/tags#outdated",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-08-13T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-moderators",
    "name": "Moderators",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/moderators",
    "writeupUrl": "https://0xdf.gitlab.io/tags#moderators",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-08-06T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-support",
    "name": "Support",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/support",
    "writeupUrl": "https://0xdf.gitlab.io/tags#support",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-07-30T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-shared",
    "name": "Shared",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/shared",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shared",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-07-23T16:00:00.000000Z",
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
    "id": "htb-redpanda",
    "name": "RedPanda",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/redpanda",
    "writeupUrl": "https://0xdf.gitlab.io/tags#redpanda",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-07-09T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-faculty",
    "name": "Faculty",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/faculty",
    "writeupUrl": "https://0xdf.gitlab.io/tags#faculty",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-07-02T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-carpediem",
    "name": "Carpediem",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/carpediem",
    "writeupUrl": "https://0xdf.gitlab.io/tags#carpediem",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-06-25T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-trick",
    "name": "Trick",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/trick",
    "writeupUrl": "https://0xdf.gitlab.io/tags#trick",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-06-18T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-streamio",
    "name": "StreamIO",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/streamio",
    "writeupUrl": "https://0xdf.gitlab.io/tags#streamio",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-06-04T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-seventeen",
    "name": "Seventeen",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/seventeen",
    "writeupUrl": "https://0xdf.gitlab.io/tags#seventeen",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-05-28T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-opensource",
    "name": "OpenSource",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/opensource",
    "writeupUrl": "https://0xdf.gitlab.io/tags#opensource",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-05-21T16:00:00.000000Z",
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
    "id": "htb-response",
    "name": "Response",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/response",
    "writeupUrl": "https://0xdf.gitlab.io/tags#response",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-05-14T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-noter",
    "name": "Noter",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/noter",
    "writeupUrl": "https://0xdf.gitlab.io/tags#noter",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-05-07T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-overgraph",
    "name": "OverGraph",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/overgraph",
    "writeupUrl": "https://0xdf.gitlab.io/tags#overgraph",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-04-30T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-late",
    "name": "Late",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/late",
    "writeupUrl": "https://0xdf.gitlab.io/tags#late",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-04-23T16:00:00.000000Z",
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
    "id": "htb-hathor",
    "name": "Hathor",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/hathor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#hathor",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-04-16T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-talkative",
    "name": "Talkative",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/talkative",
    "writeupUrl": "https://0xdf.gitlab.io/tags#talkative",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-04-09T16:00:00.000000Z",
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
    "id": "htb-retired",
    "name": "Retired",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/retired",
    "writeupUrl": "https://0xdf.gitlab.io/tags#retired",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-04-02T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-timelapse",
    "name": "Timelapse",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/timelapse",
    "writeupUrl": "https://0xdf.gitlab.io/tags#timelapse",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-03-26T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-perspective",
    "name": "Perspective",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/perspective",
    "writeupUrl": "https://0xdf.gitlab.io/tags#perspective",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-03-19T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-catch",
    "name": "Catch",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/catch",
    "writeupUrl": "https://0xdf.gitlab.io/tags#catch",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-03-12T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-phoenix",
    "name": "Phoenix",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/phoenix",
    "writeupUrl": "https://0xdf.gitlab.io/tags#phoenix",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-03-05T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-object",
    "name": "Object",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/object",
    "writeupUrl": "https://0xdf.gitlab.io/tags#object",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-02-28T16:00:05.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-goodgames",
    "name": "GoodGames",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/goodgames",
    "writeupUrl": "https://0xdf.gitlab.io/tags#goodgames",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-02-21T16:00:05.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-routerspace",
    "name": "RouterSpace",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/routerspace",
    "writeupUrl": "https://0xdf.gitlab.io/tags#routerspace",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-02-26T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-steamcloud",
    "name": "SteamCloud",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/steamcloud",
    "writeupUrl": "https://0xdf.gitlab.io/tags#steamcloud",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-02-14T08:00:05.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-epsilon",
    "name": "Epsilon",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/epsilon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#epsilon",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-02-07T08:00:05.000000Z",
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
    "id": "htb-undetected",
    "name": "Undetected",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/undetected",
    "writeupUrl": "https://0xdf.gitlab.io/tags#undetected",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-02-19T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-acute",
    "name": "Acute",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/acute",
    "writeupUrl": "https://0xdf.gitlab.io/tags#acute",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-02-12T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-flustered",
    "name": "Flustered",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/flustered",
    "writeupUrl": "https://0xdf.gitlab.io/tags#flustered",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-01-31T15:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-paper",
    "name": "Paper",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/paper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#paper",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-02-05T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-scanned",
    "name": "Scanned",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/scanned",
    "writeupUrl": "https://0xdf.gitlab.io/tags#scanned",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-01-29T17:00:00.000000Z",
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
    "id": "htb-meta",
    "name": "Meta",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/meta",
    "writeupUrl": "https://0xdf.gitlab.io/tags#meta",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-01-22T17:00:00.000000Z",
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
    "id": "htb-admirertoo",
    "name": "AdmirerToo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/admirertoo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#admirertoo",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-01-15T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-pandora",
    "name": "Pandora",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/pandora",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pandora",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2022-01-08T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-search",
    "name": "Search",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/search",
    "writeupUrl": "https://0xdf.gitlab.io/tags#search",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-12-18T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-timing",
    "name": "Timing",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/timing",
    "writeupUrl": "https://0xdf.gitlab.io/tags#timing",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-12-11T17:00:00.000000Z",
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
    "id": "htb-fingerprint",
    "name": "Fingerprint",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/fingerprint",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fingerprint",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-12-04T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-backdoor",
    "name": "Backdoor",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/backdoor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#backdoor",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-11-20T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-unicode",
    "name": "Unicode",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/unicode",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unicode",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-11-27T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-nunchucks",
    "name": "Nunchucks",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/nunchucks",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nunchucks",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-11-02T10:00:00.000000Z",
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
    "id": "htb-shibboleth",
    "name": "Shibboleth",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/shibboleth",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shibboleth",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-11-13T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-toby",
    "name": "Toby",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/toby",
    "writeupUrl": "https://0xdf.gitlab.io/tags#toby",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-11-06T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-secret",
    "name": "Secret",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/secret",
    "writeupUrl": "https://0xdf.gitlab.io/tags#secret",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-10-30T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-return",
    "name": "Return",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/return",
    "writeupUrl": "https://0xdf.gitlab.io/tags#return",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-09-27T09:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-antique",
    "name": "Antique",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/antique",
    "writeupUrl": "https://0xdf.gitlab.io/tags#antique",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-09-27T09:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-overflow",
    "name": "Overflow",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/overflow",
    "writeupUrl": "https://0xdf.gitlab.io/tags#overflow",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-10-23T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-devzat",
    "name": "Devzat",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/devzat",
    "writeupUrl": "https://0xdf.gitlab.io/tags#devzat",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-10-16T16:00:00.000000Z",
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
    "id": "htb-hancliffe",
    "name": "Hancliffe",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/hancliffe",
    "writeupUrl": "https://0xdf.gitlab.io/tags#hancliffe",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-10-09T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-driver",
    "name": "Driver",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/driver",
    "writeupUrl": "https://0xdf.gitlab.io/tags#driver",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-10-02T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bolt",
    "name": "Bolt",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bolt",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bolt",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-09-25T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-validation",
    "name": "Validation",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/validation",
    "writeupUrl": "https://0xdf.gitlab.io/tags#validation",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-09-13T09:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-stacked",
    "name": "Stacked",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/stacked",
    "writeupUrl": "https://0xdf.gitlab.io/tags#stacked",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-09-18T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-gobox",
    "name": "Gobox",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/gobox",
    "writeupUrl": "https://0xdf.gitlab.io/tags#gobox",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-08-23T09:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-forge",
    "name": "Forge",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/forge",
    "writeupUrl": "https://0xdf.gitlab.io/tags#forge",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-09-11T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-earlyaccess",
    "name": "EarlyAccess",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/earlyaccess",
    "writeupUrl": "https://0xdf.gitlab.io/tags#earlyaccess",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-09-04T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-horizontall",
    "name": "Horizontall",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/horizontall",
    "writeupUrl": "https://0xdf.gitlab.io/tags#horizontall",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-08-28T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-previse",
    "name": "Previse",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/previse",
    "writeupUrl": "https://0xdf.gitlab.io/tags#previse",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-08-07T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-developer",
    "name": "Developer",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/developer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#developer",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-08-21T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-anubis",
    "name": "Anubis",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/anubis",
    "writeupUrl": "https://0xdf.gitlab.io/tags#anubis",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-08-14T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-writer",
    "name": "Writer",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/writer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#writer",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-07-31T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-pikaboo",
    "name": "Pikaboo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/pikaboo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pikaboo",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-07-17T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bountyhunter",
    "name": "BountyHunter",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bountyhunter",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bountyhunter",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-07-24T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-seal",
    "name": "Seal",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/seal",
    "writeupUrl": "https://0xdf.gitlab.io/tags#seal",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-07-10T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-explore",
    "name": "Explore",
    "ip": "10.10.10.x",
    "os": "Android",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/explore",
    "writeupUrl": "https://0xdf.gitlab.io/tags#explore",
    "hint": "Hack The Box Android machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-06-26T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-static",
    "name": "Static",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/static",
    "writeupUrl": "https://0xdf.gitlab.io/tags#static",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-06-19T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-dynstr",
    "name": "dynstr",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/dynstr",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dynstr",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-06-12T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-cap",
    "name": "Cap",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/cap",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cap",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2021-06-05T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-spider",
    "name": "Spider",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/spider",
    "writeupUrl": "https://0xdf.gitlab.io/tags#spider",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-05-29T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-knife",
    "name": "Knife",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/knife",
    "writeupUrl": "https://0xdf.gitlab.io/tags#knife",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2021-05-22T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-pit",
    "name": "Pit",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/pit",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pit",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-05-15T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-pivotapi",
    "name": "PivotAPI",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/pivotapi",
    "writeupUrl": "https://0xdf.gitlab.io/tags#pivotapi",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-05-08T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-love",
    "name": "Love",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/love",
    "writeupUrl": "https://0xdf.gitlab.io/tags#love",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-05-01T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-monitors",
    "name": "Monitors",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/monitors",
    "writeupUrl": "https://0xdf.gitlab.io/tags#monitors",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-04-24T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-atom",
    "name": "Atom",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/atom",
    "writeupUrl": "https://0xdf.gitlab.io/tags#atom",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-04-17T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-toolbox",
    "name": "Toolbox",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/toolbox",
    "writeupUrl": "https://0xdf.gitlab.io/tags#toolbox",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-03-12T10:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-unobtainium",
    "name": "Unobtainium",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/unobtainium",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unobtainium",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-04-10T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-schooled",
    "name": "Schooled",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/schooled",
    "writeupUrl": "https://0xdf.gitlab.io/tags#schooled",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-04-03T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-armageddon",
    "name": "Armageddon",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/armageddon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#armageddon",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-03-27T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-crossfittwo",
    "name": "CrossFitTwo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/crossfittwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#crossfittwo",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-03-20T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-proper",
    "name": "Proper",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/proper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#proper",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-03-13T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-thenotebook",
    "name": "TheNotebook",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/thenotebook",
    "writeupUrl": "https://0xdf.gitlab.io/tags#thenotebook",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-03-06T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-spectra",
    "name": "Spectra",
    "ip": "10.10.10.x",
    "os": "Other",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/spectra",
    "writeupUrl": "https://0xdf.gitlab.io/tags#spectra",
    "hint": "Hack The Box Other machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-02-27T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-breadcrumbs",
    "name": "Breadcrumbs",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/breadcrumbs",
    "writeupUrl": "https://0xdf.gitlab.io/tags#breadcrumbs",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-02-20T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ophiuchi",
    "name": "Ophiuchi",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ophiuchi",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ophiuchi",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-02-13T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-scriptkiddie",
    "name": "ScriptKiddie",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/scriptkiddie",
    "writeupUrl": "https://0xdf.gitlab.io/tags#scriptkiddie",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-02-06T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sink",
    "name": "Sink",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/sink",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sink",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-01-30T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-tentacle",
    "name": "Tentacle",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/tentacle",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tentacle",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-01-23T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-tenet",
    "name": "Tenet",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/tenet",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tenet",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-01-16T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-delivery",
    "name": "Delivery",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/delivery",
    "writeupUrl": "https://0xdf.gitlab.io/tags#delivery",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2021-01-09T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-attended",
    "name": "Attended",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/attended",
    "writeupUrl": "https://0xdf.gitlab.io/tags#attended",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-12-19T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ready",
    "name": "Ready",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ready",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ready",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-12-12T17:00:00.000000Z",
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
    "id": "htb-luanne",
    "name": "Luanne",
    "ip": "10.10.10.x",
    "os": "Other",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/luanne",
    "writeupUrl": "https://0xdf.gitlab.io/tags#luanne",
    "hint": "Hack The Box Other machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-11-28T17:00:00.000000Z",
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
    "id": "htb-laboratory",
    "name": "Laboratory",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/laboratory",
    "writeupUrl": "https://0xdf.gitlab.io/tags#laboratory",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-11-14T17:00:00.000000Z",
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
    "id": "htb-bucket",
    "name": "Bucket",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bucket",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bucket",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-10-17T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-jewel",
    "name": "Jewel",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/jewel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jewel",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-10-10T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-reel2",
    "name": "Reel2",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/reel2",
    "writeupUrl": "https://0xdf.gitlab.io/tags#reel2",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-10-03T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-doctor",
    "name": "Doctor",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/doctor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#doctor",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-09-26T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-crossfit",
    "name": "CrossFit",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/crossfit",
    "writeupUrl": "https://0xdf.gitlab.io/tags#crossfit",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-09-19T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-compromised",
    "name": "Compromised",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/compromised",
    "writeupUrl": "https://0xdf.gitlab.io/tags#compromised",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-09-12T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-passage",
    "name": "Passage",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/passage",
    "writeupUrl": "https://0xdf.gitlab.io/tags#passage",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-09-05T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-feline",
    "name": "Feline",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/feline",
    "writeupUrl": "https://0xdf.gitlab.io/tags#feline",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-08-29T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-omni",
    "name": "Omni",
    "ip": "10.10.10.x",
    "os": "Other",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/omni",
    "writeupUrl": "https://0xdf.gitlab.io/tags#omni",
    "hint": "Hack The Box Other machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-08-22T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-worker",
    "name": "Worker",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/worker",
    "writeupUrl": "https://0xdf.gitlab.io/tags#worker",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-08-15T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-laser",
    "name": "Laser",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/laser",
    "writeupUrl": "https://0xdf.gitlab.io/tags#laser",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-08-08T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-unbalanced",
    "name": "Unbalanced",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/unbalanced",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unbalanced",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-08-01T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-openkeys",
    "name": "OpenKeyS",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/openkeys",
    "writeupUrl": "https://0xdf.gitlab.io/tags#openkeys",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-07-25T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-buff",
    "name": "Buff",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/buff",
    "writeupUrl": "https://0xdf.gitlab.io/tags#buff",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-07-18T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-intense",
    "name": "Intense",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/intense",
    "writeupUrl": "https://0xdf.gitlab.io/tags#intense",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-07-04T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ropetwo",
    "name": "RopeTwo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ropetwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ropetwo",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-06-27T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-tabby",
    "name": "Tabby",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/tabby",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tabby",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-06-20T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-fuse",
    "name": "Fuse",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/fuse",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fuse",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-06-13T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-blunder",
    "name": "Blunder",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/blunder",
    "writeupUrl": "https://0xdf.gitlab.io/tags#blunder",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-05-30T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-dyplesher",
    "name": "Dyplesher",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/dyplesher",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dyplesher",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-05-23T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-travel",
    "name": "Travel",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/travel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#travel",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-05-16T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-cache",
    "name": "Cache",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/cache",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cache",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-05-09T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-admirer",
    "name": "Admirer",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/admirer",
    "writeupUrl": "https://0xdf.gitlab.io/tags#admirer",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-05-02T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-quick",
    "name": "Quick",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/quick",
    "writeupUrl": "https://0xdf.gitlab.io/tags#quick",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-04-25T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-magic",
    "name": "Magic",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/magic",
    "writeupUrl": "https://0xdf.gitlab.io/tags#magic",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-04-18T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-servmon",
    "name": "ServMon",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/servmon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#servmon",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-04-11T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-forwardslash",
    "name": "ForwardSlash",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/forwardslash",
    "writeupUrl": "https://0xdf.gitlab.io/tags#forwardslash",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-04-04T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-remote",
    "name": "Remote",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/remote",
    "writeupUrl": "https://0xdf.gitlab.io/tags#remote",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-03-21T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-traceback",
    "name": "TraceBack",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/traceback",
    "writeupUrl": "https://0xdf.gitlab.io/tags#traceback",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-03-14T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-multimaster",
    "name": "Multimaster",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/multimaster",
    "writeupUrl": "https://0xdf.gitlab.io/tags#multimaster",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-03-07T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-oouch",
    "name": "Oouch",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/oouch",
    "writeupUrl": "https://0xdf.gitlab.io/tags#oouch",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-02-29T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-book",
    "name": "Book",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/book",
    "writeupUrl": "https://0xdf.gitlab.io/tags#book",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-02-22T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-fatty",
    "name": "Fatty",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/fatty",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fatty",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-02-08T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-nest",
    "name": "Nest",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/nest",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nest",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-01-25T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-patents",
    "name": "Patents",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/patents",
    "writeupUrl": "https://0xdf.gitlab.io/tags#patents",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-01-18T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-openadmin",
    "name": "OpenAdmin",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/openadmin",
    "writeupUrl": "https://0xdf.gitlab.io/tags#openadmin",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2020-01-04T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-playertwo",
    "name": "PlayerTwo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/playertwo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#playertwo",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-12-14T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-obscurity",
    "name": "Obscurity",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/obscurity",
    "writeupUrl": "https://0xdf.gitlab.io/tags#obscurity",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-11-30T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-control",
    "name": "Control",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/control",
    "writeupUrl": "https://0xdf.gitlab.io/tags#control",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-11-23T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-traverxec",
    "name": "Traverxec",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/traverxec",
    "writeupUrl": "https://0xdf.gitlab.io/tags#traverxec",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-11-16T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ai",
    "name": "AI",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ai",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ai",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-11-09T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-postman",
    "name": "Postman",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/postman",
    "writeupUrl": "https://0xdf.gitlab.io/tags#postman",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-11-02T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-mango",
    "name": "Mango",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/mango",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mango",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-10-26T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-registry",
    "name": "Registry",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/registry",
    "writeupUrl": "https://0xdf.gitlab.io/tags#registry",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-10-19T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sniper",
    "name": "Sniper",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/sniper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sniper",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-10-05T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-json",
    "name": "Json",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/json",
    "writeupUrl": "https://0xdf.gitlab.io/tags#json",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-09-28T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bankrobber",
    "name": "Bankrobber",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bankrobber",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bankrobber",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-09-21T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-wall",
    "name": "Wall",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/wall",
    "writeupUrl": "https://0xdf.gitlab.io/tags#wall",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-09-14T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bitlab",
    "name": "Bitlab",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bitlab",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bitlab",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-09-07T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-zetta",
    "name": "Zetta",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/zetta",
    "writeupUrl": "https://0xdf.gitlab.io/tags#zetta",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-08-31T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-networked",
    "name": "Networked",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/networked",
    "writeupUrl": "https://0xdf.gitlab.io/tags#networked",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-08-24T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-scavenger",
    "name": "Scavenger",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/scavenger",
    "writeupUrl": "https://0xdf.gitlab.io/tags#scavenger",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-08-17T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-heist",
    "name": "Heist",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/heist",
    "writeupUrl": "https://0xdf.gitlab.io/tags#heist",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-08-10T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-rope",
    "name": "Rope",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/rope",
    "writeupUrl": "https://0xdf.gitlab.io/tags#rope",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-08-03T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-safe",
    "name": "Safe",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/safe",
    "writeupUrl": "https://0xdf.gitlab.io/tags#safe",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-07-27T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-re",
    "name": "RE",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/re",
    "writeupUrl": "https://0xdf.gitlab.io/tags#re",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-07-20T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-craft",
    "name": "Craft",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/craft",
    "writeupUrl": "https://0xdf.gitlab.io/tags#craft",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-07-13T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-player",
    "name": "Player",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/player",
    "writeupUrl": "https://0xdf.gitlab.io/tags#player",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-07-06T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-haystack",
    "name": "Haystack",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/haystack",
    "writeupUrl": "https://0xdf.gitlab.io/tags#haystack",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-06-29T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-jarvis",
    "name": "Jarvis",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/jarvis",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jarvis",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-06-22T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-chainsaw",
    "name": "Chainsaw",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/chainsaw",
    "writeupUrl": "https://0xdf.gitlab.io/tags#chainsaw",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-06-15T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-writeup",
    "name": "Writeup",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/writeup",
    "writeupUrl": "https://0xdf.gitlab.io/tags#writeup",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-06-08T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-smasher2",
    "name": "Smasher2",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/smasher2",
    "writeupUrl": "https://0xdf.gitlab.io/tags#smasher2",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-06-01T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-luke",
    "name": "Luke",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/luke",
    "writeupUrl": "https://0xdf.gitlab.io/tags#luke",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-05-25T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ellingson",
    "name": "Ellingson",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ellingson",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ellingson",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-05-18T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-swagshop",
    "name": "SwagShop",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/swagshop",
    "writeupUrl": "https://0xdf.gitlab.io/tags#swagshop",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-05-11T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ghoul",
    "name": "Ghoul",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ghoul",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ghoul",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-05-04T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-onetwoseven",
    "name": "OneTwoSeven",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/onetwoseven",
    "writeupUrl": "https://0xdf.gitlab.io/tags#onetwoseven",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-04-20T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-unattended",
    "name": "Unattended",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/unattended",
    "writeupUrl": "https://0xdf.gitlab.io/tags#unattended",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-04-13T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-kryptos",
    "name": "Kryptos",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/kryptos",
    "writeupUrl": "https://0xdf.gitlab.io/tags#kryptos",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-04-06T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-lacasadepapel",
    "name": "LaCasaDePapel",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/lacasadepapel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#lacasadepapel",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-03-30T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-helpline",
    "name": "Helpline",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/helpline",
    "writeupUrl": "https://0xdf.gitlab.io/tags#helpline",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-03-23T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-arkham",
    "name": "Arkham",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/arkham",
    "writeupUrl": "https://0xdf.gitlab.io/tags#arkham",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-03-16T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-fortune",
    "name": "Fortune",
    "ip": "10.10.10.x",
    "os": "Other",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/fortune",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fortune",
    "hint": "Hack The Box Other machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-03-09T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-netmon",
    "name": "Netmon",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/netmon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#netmon",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2019-03-02T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-hackback",
    "name": "Hackback",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/hackback",
    "writeupUrl": "https://0xdf.gitlab.io/tags#hackback",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-02-23T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-querier",
    "name": "Querier",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/querier",
    "writeupUrl": "https://0xdf.gitlab.io/tags#querier",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-02-16T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-friendzone",
    "name": "FriendZone",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/friendzone",
    "writeupUrl": "https://0xdf.gitlab.io/tags#friendzone",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-02-09T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ctf",
    "name": "CTF",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ctf",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ctf",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-02-02T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-flujab",
    "name": "FluJab",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/flujab",
    "writeupUrl": "https://0xdf.gitlab.io/tags#flujab",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-01-26T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-help",
    "name": "Help",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/help",
    "writeupUrl": "https://0xdf.gitlab.io/tags#help",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-01-19T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sizzle",
    "name": "Sizzle",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/sizzle",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sizzle",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-01-12T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-conceal",
    "name": "Conceal",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/conceal",
    "writeupUrl": "https://0xdf.gitlab.io/tags#conceal",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2019-01-05T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-chaos",
    "name": "Chaos",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/chaos",
    "writeupUrl": "https://0xdf.gitlab.io/tags#chaos",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-12-15T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-lightweight",
    "name": "Lightweight",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/lightweight",
    "writeupUrl": "https://0xdf.gitlab.io/tags#lightweight",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-12-08T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-teacher",
    "name": "Teacher",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/teacher",
    "writeupUrl": "https://0xdf.gitlab.io/tags#teacher",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-12-01T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bighead",
    "name": "BigHead",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bighead",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bighead",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-11-24T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-irked",
    "name": "Irked",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/irked",
    "writeupUrl": "https://0xdf.gitlab.io/tags#irked",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-11-17T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-redcross",
    "name": "RedCross",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/redcross",
    "writeupUrl": "https://0xdf.gitlab.io/tags#redcross",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-11-10T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-vault",
    "name": "Vault",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/vault",
    "writeupUrl": "https://0xdf.gitlab.io/tags#vault",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-11-03T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-curling",
    "name": "Curling",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/curling",
    "writeupUrl": "https://0xdf.gitlab.io/tags#curling",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-10-27T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-zipper",
    "name": "Zipper",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/zipper",
    "writeupUrl": "https://0xdf.gitlab.io/tags#zipper",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-10-20T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-frolic",
    "name": "Frolic",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/frolic",
    "writeupUrl": "https://0xdf.gitlab.io/tags#frolic",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-10-13T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ethereal",
    "name": "Ethereal",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ethereal",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ethereal",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-10-06T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-access",
    "name": "Access",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/access",
    "writeupUrl": "https://0xdf.gitlab.io/tags#access",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-09-29T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-carrier",
    "name": "Carrier",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/carrier",
    "writeupUrl": "https://0xdf.gitlab.io/tags#carrier",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-09-22T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ypuffy",
    "name": "YPuffy",
    "ip": "10.10.10.x",
    "os": "Other",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ypuffy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ypuffy",
    "hint": "Hack The Box Other machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-09-15T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-giddy",
    "name": "Giddy",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/giddy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#giddy",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-09-08T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-oz",
    "name": "Oz",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/oz",
    "writeupUrl": "https://0xdf.gitlab.io/tags#oz",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-09-01T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-secnotes",
    "name": "SecNotes",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/secnotes",
    "writeupUrl": "https://0xdf.gitlab.io/tags#secnotes",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-08-25T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-dab",
    "name": "Dab",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/dab",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dab",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-08-18T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-waldo",
    "name": "Waldo",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/waldo",
    "writeupUrl": "https://0xdf.gitlab.io/tags#waldo",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-08-04T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-active",
    "name": "Active",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/active",
    "writeupUrl": "https://0xdf.gitlab.io/tags#active",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-07-28T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-reddish",
    "name": "Reddish",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/reddish",
    "writeupUrl": "https://0xdf.gitlab.io/tags#reddish",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-07-21T16:00:00.000000Z",
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
  },
  {
    "id": "htb-mischief",
    "name": "Mischief",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/mischief",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mischief",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-07-07T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-jerry",
    "name": "Jerry",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/jerry",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jerry",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2018-06-30T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-reel",
    "name": "Reel",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/reel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#reel",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-06-23T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bounty",
    "name": "Bounty",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bounty",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bounty",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-06-16T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-smasher",
    "name": "Smasher",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/smasher",
    "writeupUrl": "https://0xdf.gitlab.io/tags#smasher",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-06-09T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-devoops",
    "name": "DevOops",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/devoops",
    "writeupUrl": "https://0xdf.gitlab.io/tags#devoops",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-06-02T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-dropzone",
    "name": "Dropzone",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/dropzone",
    "writeupUrl": "https://0xdf.gitlab.io/tags#dropzone",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-05-19T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-tartarsauce",
    "name": "TartarSauce",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/tartarsauce",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tartarsauce",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-05-12T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-fighter",
    "name": "Fighter",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/fighter",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fighter",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-05-05T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sunday",
    "name": "Sunday",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/sunday",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sunday",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-04-28T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-olympus",
    "name": "Olympus",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/olympus",
    "writeupUrl": "https://0xdf.gitlab.io/tags#olympus",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-04-21T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-canape",
    "name": "Canape",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/canape",
    "writeupUrl": "https://0xdf.gitlab.io/tags#canape",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-04-14T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-rabbit",
    "name": "Rabbit",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/rabbit",
    "writeupUrl": "https://0xdf.gitlab.io/tags#rabbit",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-03-31T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-poison",
    "name": "Poison",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/poison",
    "writeupUrl": "https://0xdf.gitlab.io/tags#poison",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-03-24T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-celestial",
    "name": "Celestial",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/celestial",
    "writeupUrl": "https://0xdf.gitlab.io/tags#celestial",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-03-10T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-stratosphere",
    "name": "Stratosphere",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/stratosphere",
    "writeupUrl": "https://0xdf.gitlab.io/tags#stratosphere",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-03-03T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bart",
    "name": "Bart",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bart",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bart",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-02-24T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-valentine",
    "name": "Valentine",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/valentine",
    "writeupUrl": "https://0xdf.gitlab.io/tags#valentine",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-02-17T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-aragog",
    "name": "Aragog",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/aragog",
    "writeupUrl": "https://0xdf.gitlab.io/tags#aragog",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-02-10T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-falafel",
    "name": "Falafel",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/falafel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#falafel",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-02-03T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-chatterbox",
    "name": "Chatterbox",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/chatterbox",
    "writeupUrl": "https://0xdf.gitlab.io/tags#chatterbox",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-01-27T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-nightmare",
    "name": "Nightmare",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/nightmare",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nightmare",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-01-20T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-nibbles",
    "name": "Nibbles",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/nibbles",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nibbles",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2018-01-13T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-crimestoppers",
    "name": "CrimeStoppers",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/crimestoppers",
    "writeupUrl": "https://0xdf.gitlab.io/tags#crimestoppers",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2018-01-06T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-fluxcapacitor",
    "name": "FluxCapacitor",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/fluxcapacitor",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fluxcapacitor",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-12-16T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bashed",
    "name": "Bashed",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bashed",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bashed",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-12-09T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-inception",
    "name": "Inception",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/inception",
    "writeupUrl": "https://0xdf.gitlab.io/tags#inception",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-12-02T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-fulcrum",
    "name": "Fulcrum",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/fulcrum",
    "writeupUrl": "https://0xdf.gitlab.io/tags#fulcrum",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-11-25T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-ariekei",
    "name": "Ariekei",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/ariekei",
    "writeupUrl": "https://0xdf.gitlab.io/tags#ariekei",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-11-18T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-jeeves",
    "name": "Jeeves",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/jeeves",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jeeves",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-11-11T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-tally",
    "name": "Tally",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/tally",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tally",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-11-04T17:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-enterprise",
    "name": "Enterprise",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/enterprise",
    "writeupUrl": "https://0xdf.gitlab.io/tags#enterprise",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-10-28T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sense",
    "name": "Sense",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/sense",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sense",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-10-21T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-node",
    "name": "Node",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/node",
    "writeupUrl": "https://0xdf.gitlab.io/tags#node",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-10-14T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-minion",
    "name": "Minion",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/minion",
    "writeupUrl": "https://0xdf.gitlab.io/tags#minion",
    "hint": "Hack The Box Windows machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-10-07T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-shocker",
    "name": "Shocker",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/shocker",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shocker",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-09-30T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-kotarak",
    "name": "Kotarak",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/kotarak",
    "writeupUrl": "https://0xdf.gitlab.io/tags#kotarak",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-09-23T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-mantis",
    "name": "Mantis",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/mantis",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mantis",
    "hint": "Hack The Box Windows machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-09-16T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-solidstate",
    "name": "SolidState",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/solidstate",
    "writeupUrl": "https://0xdf.gitlab.io/tags#solidstate",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-09-08T19:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-mirai",
    "name": "Mirai",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/mirai",
    "writeupUrl": "https://0xdf.gitlab.io/tags#mirai",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-09-01T19:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-shrek",
    "name": "Shrek",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/shrek",
    "writeupUrl": "https://0xdf.gitlab.io/tags#shrek",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-08-25T19:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-apocalyst",
    "name": "Apocalyst",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/apocalyst",
    "writeupUrl": "https://0xdf.gitlab.io/tags#apocalyst",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-08-18T19:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-nineveh",
    "name": "Nineveh",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/nineveh",
    "writeupUrl": "https://0xdf.gitlab.io/tags#nineveh",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-08-04T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-blue",
    "name": "Blue",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/blue",
    "writeupUrl": "https://0xdf.gitlab.io/tags#blue",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-07-28T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-blocky",
    "name": "Blocky",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/blocky",
    "writeupUrl": "https://0xdf.gitlab.io/tags#blocky",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-07-21T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-jail",
    "name": "Jail",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/jail",
    "writeupUrl": "https://0xdf.gitlab.io/tags#jail",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-07-14T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-charon",
    "name": "Charon",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/charon",
    "writeupUrl": "https://0xdf.gitlab.io/tags#charon",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-07-07T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-calamity",
    "name": "Calamity",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/calamity",
    "writeupUrl": "https://0xdf.gitlab.io/tags#calamity",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-06-30T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-europa",
    "name": "Europa",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/europa",
    "writeupUrl": "https://0xdf.gitlab.io/tags#europa",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-06-23T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bank",
    "name": "Bank",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bank",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bank",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-06-16T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-holiday",
    "name": "Holiday",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/holiday",
    "writeupUrl": "https://0xdf.gitlab.io/tags#holiday",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-06-02T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-haircut",
    "name": "Haircut",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/haircut",
    "writeupUrl": "https://0xdf.gitlab.io/tags#haircut",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-05-26T16:00:00.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-joker",
    "name": "Joker",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Hard",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/joker",
    "writeupUrl": "https://0xdf.gitlab.io/tags#joker",
    "hint": "Hack The Box Linux machine. Rated Hard difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-05-19T10:57:26.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-sneaky",
    "name": "Sneaky",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/sneaky",
    "writeupUrl": "https://0xdf.gitlab.io/tags#sneaky",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-05-14T05:54:28.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-lazy",
    "name": "Lazy",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/lazy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#lazy",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-05-03T13:06:37.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-brainfuck",
    "name": "Brainfuck",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Insane",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/brainfuck",
    "writeupUrl": "https://0xdf.gitlab.io/tags#brainfuck",
    "hint": "Hack The Box Linux machine. Rated Insane difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-04-29T11:03:28.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-october",
    "name": "October",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/october",
    "writeupUrl": "https://0xdf.gitlab.io/tags#october",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-04-20T18:13:09.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-granny",
    "name": "Granny",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/granny",
    "writeupUrl": "https://0xdf.gitlab.io/tags#granny",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-04-12T16:16:23.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-grandpa",
    "name": "Grandpa",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/grandpa",
    "writeupUrl": "https://0xdf.gitlab.io/tags#grandpa",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-04-12T09:06:56.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-cronos",
    "name": "Cronos",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/cronos",
    "writeupUrl": "https://0xdf.gitlab.io/tags#cronos",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-03-22T14:57:21.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-arctic",
    "name": "Arctic",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/arctic",
    "writeupUrl": "https://0xdf.gitlab.io/tags#arctic",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-03-22T07:40:48.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-tenten",
    "name": "Tenten",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/tenten",
    "writeupUrl": "https://0xdf.gitlab.io/tags#tenten",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-03-22T07:39:37.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-bastard",
    "name": "Bastard",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/bastard",
    "writeupUrl": "https://0xdf.gitlab.io/tags#bastard",
    "hint": "Hack The Box Windows machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-03-18T20:19:32.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-optimum",
    "name": "Optimum",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/optimum",
    "writeupUrl": "https://0xdf.gitlab.io/tags#optimum",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-03-18T06:28:47.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-beep",
    "name": "Beep",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/beep",
    "writeupUrl": "https://0xdf.gitlab.io/tags#beep",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-03-14T22:45:43.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-popcorn",
    "name": "Popcorn",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Medium",
    "status": "backlog",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/popcorn",
    "writeupUrl": "https://0xdf.gitlab.io/tags#popcorn",
    "hint": "Hack The Box Linux machine. Rated Medium difficulty.",
    "timeSpentSeconds": 0,
    "createdAt": "2017-03-14T22:45:42.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "htb-devel",
    "name": "Devel",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/devel",
    "writeupUrl": "https://0xdf.gitlab.io/tags#devel",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-03-14T22:45:40.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-legacy",
    "name": "Legacy",
    "ip": "10.10.10.x",
    "os": "Windows",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/legacy",
    "writeupUrl": "https://0xdf.gitlab.io/tags#legacy",
    "hint": "Hack The Box Windows machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-03-14T22:45:38.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
  },
  {
    "id": "htb-lame",
    "name": "Lame",
    "ip": "10.10.10.x",
    "os": "Linux",
    "platform": "HTB",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "HTB"
    ],
    "certifications": [],
    "roomUrl": "https://app.hackthebox.com/machines/lame",
    "writeupUrl": "https://0xdf.gitlab.io/tags#lame",
    "hint": "Hack The Box Linux machine. Rated Easy difficulty.",
    "timeSpentSeconds": 3600,
    "createdAt": "2017-03-14T19:54:51.000000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "userFlag": "HTB{user_pwn_verified}",
    "rootFlag": "HTB{root_pwn_verified}",
    "userPwnedAt": "2026-08-20T10:00:00.000Z",
    "rootPwnedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 1500,
    "timeToRootSeconds": 3600
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
    "id": "thm-bsidesgtthompson",
    "name": "Thompson",
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
      "Metasploit"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/bsidesgtthompson",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-thompson-ctf-writeup-en-draft-624958e17260",
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
    "id": "thm-biohazard",
    "name": "Biohazard",
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
    "roomUrl": "https://tryhackme.com/room/biohazard",
    "writeupUrl": "",
    "hint": "A CTF room based on the old-time survival horror game, Resident Evil. Can you survive until the end?",
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
    "id": "thm-wgelctf",
    "name": "Wgel CTF",
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
    "roomUrl": "https://tryhackme.com/room/wgelctf",
    "writeupUrl": "",
    "hint": "Can you exfiltrate the root flag?",
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
    "id": "thm-blueprint",
    "name": "Blueprint",
    "ip": "10.10.x.x",
    "os": "Windows",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/blueprint",
    "writeupUrl": "",
    "hint": "Hack into this Windows machine and escalate your privileges to Administrator.",
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
    "id": "thm-blog",
    "name": "Blog",
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
    "roomUrl": "https://tryhackme.com/room/blog",
    "writeupUrl": "",
    "hint": "Billy Joel made a Wordpress blog!",
    "timeSpentSeconds": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
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
      "THM",
      "CTF",
      "-"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/overpass",
    "writeupUrl": "",
    "hint": "What happens when some broke CompSci students make a password manager?",
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
    "id": "thm-gamingserver",
    "name": "GamingServer",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "backlog",
    "tags": [
      "THM",
      "CTF",
      "nmap",
      "hydra",
      "gobuster",
      "john"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/gamingserver",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-gamingserver-ctf-writeup-7b48ea4e3c9e",
    "hint": "An Easy Boot2Root box for beginners",
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
      "CTF"
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
    "id": "thm-marketplace",
    "name": "The Marketplace",
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
    "roomUrl": "https://tryhackme.com/room/marketplace",
    "writeupUrl": "",
    "hint": "Can you take over The Marketplace's infrastructure?",
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
    "id": "thm-startup",
    "name": "Startup",
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
    "roomUrl": "https://tryhackme.com/room/startup",
    "writeupUrl": "",
    "hint": "Abuse traditional vulnerabilities via untraditional means.",
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
    "id": "thm-overpass3hosting",
    "name": "Overpass 3 - Hosting",
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
    "roomUrl": "https://tryhackme.com/room/overpass3hosting",
    "writeupUrl": "",
    "hint": "You know them, you love them, your favourite group of broke computer science students have another business venture! Show them that they probably should hire someone for security...",
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
    "id": "thm-vulnerabilitycapstone",
    "name": "Vulnerability Capstone",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Fuel-CMS",
      "CVE-2020-17463",
      "RCE",
      "Web",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/vulnerabilitycapstone",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Target runs Fuel CMS 1.4.1. Exploit CVE-2020-17463 / fuel_page_input PHP evaluation for remote code execution.",
    "timeSpentSeconds": 1200,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 480,
    "timeToRootSeconds": 1200,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "id": "thm-cyberheroes",
    "name": "CyberHeroes",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Reverse-Engineering",
      "Authentication-Bypass",
      "JavaScript",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/cyberheroes",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Inspect client-side JavaScript authentication logic in index source to extract the hardcoded login credentials.",
    "timeSpentSeconds": 900,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 360,
    "timeToRootSeconds": 900,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "id": "thm-agentt",
    "name": "Agent T",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "PHP-8.1.0-dev",
      "Backdoor",
      "User-Agent-t",
      "RCE",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/agentt",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Target is running PHP 8.1.0-dev with the User-Agentt backdoor. Send 'User-Agentt: zerodiumsystem(\"id\");' for instant RCE.",
    "timeSpentSeconds": 600,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 240,
    "timeToRootSeconds": 600,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "id": "thm-intermediatenmap",
    "name": "Intermediate Nmap",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Nmap",
      "Reconnaissance",
      "Port-Scanning",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/intermediatenmap",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Perform full port range scan (-p-) to detect non-standard listening services and version banners.",
    "timeSpentSeconds": 1200,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 480,
    "timeToRootSeconds": 1200,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "status": "completed",
    "tags": [
      "Command-Injection",
      "Web",
      "Linux",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/epoch",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Command injection through epoch conversion input parameter using command chaining (;, &&, |).",
    "timeSpentSeconds": 1800,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 720,
    "timeToRootSeconds": 1800,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "id": "thm-neighbour",
    "name": "Neighbour",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "IDOR",
      "Web",
      "Authentication",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/neighbour",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Inspect the user parameter in login requests to perform Insecure Direct Object Reference (IDOR) manipulation.",
    "timeSpentSeconds": 240,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 96,
    "timeToRootSeconds": 240,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "id": "thm-takeover",
    "name": "TakeOver",
    "ip": "10.10.x.x",
    "os": "Other",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Subdomain-Takeover",
      "DNS",
      "Web",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/takeover",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Enumerate subdomains and inspect SSL/TLS certificates to find the vulnerable DNS CNAME alias.",
    "timeSpentSeconds": 240,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 96,
    "timeToRootSeconds": 240,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "id": "thm-md2pdf",
    "name": "MD2PDF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Web",
      "XSS",
      "SSRF",
      "PDF-Conversion",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/md2pdf",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Inject HTML/iframe tags in markdown to trigger SSRF / local file disclosure when generating PDF.",
    "timeSpentSeconds": 300,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 120,
    "timeToRootSeconds": 300,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "id": "thm-w1seguy",
    "name": "W1seGuy",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Cryptography",
      "XOR",
      "Python",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/w1seguy",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Analyze the XOR encryption key reuse pattern to recover the key and decrypt the flag.",
    "timeSpentSeconds": 1800,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 720,
    "timeToRootSeconds": 1800,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "id": "thm-whiterose",
    "name": "Whiterose",
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
      "ffuf",
      "Burp Suite"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/whiterose",
    "writeupUrl": "https://medium.com/traditional-cyber-security/tryhackme-whiterose-ctf-writeup-2ec3281bb024",
    "hint": "Yet another Mr. Robot themed challenge.",
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
    "id": "thm-lofi",
    "name": "Lo-Fi",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "Web",
      "LFI",
      "Local-File-Inclusion",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/lofi",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Test file parameter inputs for Local File Inclusion (LFI) traversal sequences (../../etc/passwd).",
    "timeSpentSeconds": 300,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z",
    "timeToUserSeconds": 120,
    "timeToRootSeconds": 300,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z"
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
    "id": "thm-recruit",
    "name": "Recruit",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "completed",
    "tags": [
      "Web",
      "Privesc",
      "Security",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/recruit",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Analyze web components and credentials to find the foothold vector, then escalate privileges via Linux service permissions.",
    "timeSpentSeconds": 3600,
    "timeToUserSeconds": 1440,
    "timeToRootSeconds": 3600,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-basicpentesting",
    "name": "Basic Pentesting",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Easy",
    "status": "completed",
    "tags": [
      "SMB-Enumeration",
      "Hydra-SSH",
      "John-Cracking",
      "Linux",
      "CTF"
    ],
    "certifications": [],
    "roomUrl": "https://tryhackme.com/room/basicpentestingjt",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Enumerate SMB users (kay, jan). Brute force jan's password via Hydra, extract kay's id_rsa from home directory, crack passphrase.",
    "timeSpentSeconds": 2700,
    "timeToUserSeconds": 1080,
    "timeToRootSeconds": 2700,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  },
  {
    "id": "thm-mrrobot",
    "name": "Mr Robot CTF",
    "ip": "10.10.x.x",
    "os": "Linux",
    "platform": "THM",
    "difficulty": "Medium",
    "status": "completed",
    "tags": [
      "WordPress",
      "Wp-login",
      "Dictionary-Attack",
      "Nmap-SUID",
      "CTF"
    ],
    "certifications": [
      "OSCP"
    ],
    "roomUrl": "https://tryhackme.com/room/mrrobot",
    "writeupUrl": "https://xxdndxx.gitbook.io/thm-writeups/",
    "hint": "Find robots.txt key 1 and fsocity.dic. Brute force wp-login for user elliot, upload reverse shell plugin, escalate via nmap --interactive.",
    "timeSpentSeconds": 1800,
    "timeToUserSeconds": 720,
    "timeToRootSeconds": 1800,
    "userFlag": "THM{flag_captured_daniel_dayan}",
    "rootFlag": "THM{system_pwned_daniel_dayan}",
    "userPwnedAt": "2026-08-15T14:20:00.000Z",
    "rootPwnedAt": "2026-08-15T15:10:00.000Z",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2026-08-20T11:30:00.000Z"
  }
];
