import { Machine } from '../types';

export interface VulnCategoryDef {
  id: string;
  label: string;
  shortLabel: string;
  badgeColor: string;
  textColor: string;
  borderColor: string;
}

export const VULN_CATEGORIES: VulnCategoryDef[] = [
  {
    id: 'Web',
    label: 'Web Application',
    shortLabel: 'Web',
    badgeColor: 'bg-cyan-100 dark:bg-cyan-500/15 text-cyan-900 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30',
    textColor: 'text-cyan-800 dark:text-cyan-400',
    borderColor: 'border-cyan-400 dark:border-cyan-500/40',
  },
  {
    id: 'Active Directory',
    label: 'Active Directory',
    shortLabel: 'AD',
    badgeColor: 'bg-purple-100 dark:bg-purple-500/15 text-purple-900 dark:text-purple-400 border-purple-300 dark:border-purple-500/30',
    textColor: 'text-purple-800 dark:text-purple-400',
    borderColor: 'border-purple-400 dark:border-purple-500/40',
  },
  {
    id: 'SQLi',
    label: 'SQL Injection',
    shortLabel: 'SQLi',
    badgeColor: 'bg-amber-100 dark:bg-amber-500/15 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-500/30',
    textColor: 'text-amber-800 dark:text-amber-300',
    borderColor: 'border-amber-400 dark:border-amber-500/40',
  },
  {
    id: 'XSS',
    label: 'Cross-Site Scripting',
    shortLabel: 'XSS',
    badgeColor: 'bg-yellow-100 dark:bg-yellow-500/15 text-yellow-950 dark:text-yellow-300 border-yellow-300 dark:border-yellow-500/30',
    textColor: 'text-yellow-800 dark:text-yellow-300',
    borderColor: 'border-yellow-400 dark:border-yellow-500/40',
  },
  {
    id: 'SSRF',
    label: 'Server-Side Request Forgery',
    shortLabel: 'SSRF',
    badgeColor: 'bg-teal-100 dark:bg-teal-500/15 text-teal-900 dark:text-teal-300 border-teal-300 dark:border-teal-500/30',
    textColor: 'text-teal-800 dark:text-teal-300',
    borderColor: 'border-teal-400 dark:border-teal-500/40',
  },
  {
    id: 'SSTI',
    label: 'Server-Side Template Injection',
    shortLabel: 'SSTI',
    badgeColor: 'bg-fuchsia-100 dark:bg-fuchsia-500/15 text-fuchsia-900 dark:text-fuchsia-400 border-fuchsia-300 dark:border-fuchsia-500/30',
    textColor: 'text-fuchsia-800 dark:text-fuchsia-400',
    borderColor: 'border-fuchsia-400 dark:border-fuchsia-500/40',
  },
  {
    id: 'LFI',
    label: 'File Inclusion (LFI/RFI)',
    shortLabel: 'LFI',
    badgeColor: 'bg-sky-100 dark:bg-sky-500/15 text-sky-900 dark:text-sky-300 border-sky-300 dark:border-sky-500/30',
    textColor: 'text-sky-800 dark:text-sky-300',
    borderColor: 'border-sky-400 dark:border-sky-500/40',
  },
  {
    id: 'RCE',
    label: 'Remote Code Execution',
    shortLabel: 'RCE',
    badgeColor: 'bg-rose-100 dark:bg-rose-500/15 text-rose-900 dark:text-rose-400 border-rose-300 dark:border-rose-500/30',
    textColor: 'text-rose-800 dark:text-rose-400',
    borderColor: 'border-rose-400 dark:border-rose-500/40',
  },
  {
    id: 'Command Injection',
    label: 'OS Command Injection',
    shortLabel: 'CMDi',
    badgeColor: 'bg-red-100 dark:bg-red-500/15 text-red-900 dark:text-red-400 border-red-300 dark:border-red-500/30',
    textColor: 'text-red-800 dark:text-red-400',
    borderColor: 'border-red-400 dark:border-red-500/40',
  },
  {
    id: 'Deserialization',
    label: 'Insecure Deserialization',
    shortLabel: 'Deserial',
    badgeColor: 'bg-violet-100 dark:bg-violet-500/15 text-violet-900 dark:text-violet-400 border-violet-300 dark:border-violet-500/30',
    textColor: 'text-violet-800 dark:text-violet-400',
    borderColor: 'border-violet-400 dark:border-violet-500/40',
  },
  {
    id: 'Auth / IDOR',
    label: 'Auth Bypass & IDOR',
    shortLabel: 'Auth/IDOR',
    badgeColor: 'bg-lime-100 dark:bg-lime-500/15 text-lime-900 dark:text-lime-400 border-lime-300 dark:border-lime-500/30',
    textColor: 'text-lime-800 dark:text-lime-400',
    borderColor: 'border-lime-400 dark:border-lime-500/40',
  },
  {
    id: 'File Upload',
    label: 'Unrestricted File Upload',
    shortLabel: 'Upload',
    badgeColor: 'bg-indigo-100 dark:bg-indigo-500/15 text-indigo-900 dark:text-indigo-400 border-indigo-300 dark:border-indigo-500/30',
    textColor: 'text-indigo-800 dark:text-indigo-400',
    borderColor: 'border-indigo-400 dark:border-indigo-500/40',
  },
  {
    id: 'Crypto / JWT',
    label: 'Cryptography & JWT Bypass',
    shortLabel: 'Crypto/JWT',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-900 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30',
    textColor: 'text-emerald-800 dark:text-emerald-400',
    borderColor: 'border-emerald-400 dark:border-emerald-500/40',
  },
  {
    id: 'Linux PrivEsc',
    label: 'Linux Privilege Escalation',
    shortLabel: 'Linux PE',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-900 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30',
    textColor: 'text-emerald-800 dark:text-emerald-400',
    borderColor: 'border-emerald-400 dark:border-emerald-500/40',
  },
  {
    id: 'Windows PrivEsc',
    label: 'Windows Privilege Escalation',
    shortLabel: 'Win PE',
    badgeColor: 'bg-blue-100 dark:bg-blue-500/15 text-blue-900 dark:text-blue-400 border-blue-300 dark:border-blue-500/30',
    textColor: 'text-blue-800 dark:text-blue-400',
    borderColor: 'border-blue-400 dark:border-blue-500/40',
  },
  {
    id: 'SUID / Sudo',
    label: 'SUID & Sudo Rights',
    shortLabel: 'SUID/Sudo',
    badgeColor: 'bg-amber-100 dark:bg-amber-600/15 text-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-600/30',
    textColor: 'text-amber-800 dark:text-amber-300',
    borderColor: 'border-amber-400 dark:border-amber-600/40',
  },
  {
    id: 'Kernel Exploit',
    label: 'Kernel Exploitation',
    shortLabel: 'Kernel',
    badgeColor: 'bg-orange-100 dark:bg-orange-600/15 text-orange-950 dark:text-orange-400 border-orange-300 dark:border-orange-600/30',
    textColor: 'text-orange-800 dark:text-orange-400',
    borderColor: 'border-orange-400 dark:border-orange-600/40',
  },
  {
    id: 'AD CS / Kerberos',
    label: 'AD CS & Kerberos Attacks',
    shortLabel: 'AD CS/Kerb',
    badgeColor: 'bg-purple-100 dark:bg-purple-600/15 text-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-600/30',
    textColor: 'text-purple-800 dark:text-purple-300',
    borderColor: 'border-purple-400 dark:border-purple-600/40',
  },
  {
    id: 'Binary / BOF',
    label: 'Buffer Overflow / Binary Pwn',
    shortLabel: 'BOF/Pwn',
    badgeColor: 'bg-red-100 dark:bg-red-600/15 text-red-900 dark:text-red-400 border-red-300 dark:border-red-600/30',
    textColor: 'text-red-800 dark:text-red-400',
    borderColor: 'border-red-400 dark:border-red-600/40',
  },
  {
    id: 'Memory Corruption',
    label: 'ROP & Memory Corruption',
    shortLabel: 'ROP/Mem',
    badgeColor: 'bg-pink-100 dark:bg-pink-500/15 text-pink-900 dark:text-pink-400 border-pink-300 dark:border-pink-500/30',
    textColor: 'text-pink-800 dark:text-pink-400',
    borderColor: 'border-pink-400 dark:border-pink-500/40',
  },
  {
    id: 'Container / Docker',
    label: 'Docker & Container Breakout',
    shortLabel: 'Docker',
    badgeColor: 'bg-cyan-100 dark:bg-cyan-600/15 text-cyan-950 dark:text-cyan-300 border-cyan-300 dark:border-cyan-600/30',
    textColor: 'text-cyan-800 dark:text-cyan-300',
    borderColor: 'border-cyan-400 dark:border-cyan-600/40',
  },
  {
    id: 'CMS Exploit',
    label: 'WordPress & CMS Exploitation',
    shortLabel: 'CMS',
    badgeColor: 'bg-blue-100 dark:bg-blue-600/15 text-blue-950 dark:text-blue-300 border-blue-300 dark:border-blue-600/30',
    textColor: 'text-blue-800 dark:text-blue-300',
    borderColor: 'border-blue-400 dark:border-blue-600/40',
  },
  {
    id: 'API / GraphQL',
    label: 'API, GraphQL & WebSockets',
    shortLabel: 'API/GraphQL',
    badgeColor: 'bg-teal-100 dark:bg-teal-600/15 text-teal-950 dark:text-teal-300 border-teal-300 dark:border-teal-600/30',
    textColor: 'text-teal-800 dark:text-teal-300',
    borderColor: 'border-teal-400 dark:border-teal-600/40',
  },
  {
    id: 'Network / SMB',
    label: 'Network & SMB Protocol',
    shortLabel: 'SMB/Net',
    badgeColor: 'bg-orange-100 dark:bg-orange-500/15 text-orange-950 dark:text-orange-300 border-orange-300 dark:border-orange-500/30',
    textColor: 'text-orange-800 dark:text-orange-300',
    borderColor: 'border-orange-400 dark:border-orange-500/40',
  },
];

export interface ClassificationResult {
  primary: string;
  categories: string[];
  badgeColor: string;
  isAD: boolean;
}

// Ultra-fast memoization cache to guarantee 120 FPS performance across 931 machines
const classificationCache = new Map<string, ClassificationResult>();

export function clearClassificationCache(machineId?: string): void {
  if (machineId) {
    for (const key of classificationCache.keys()) {
      if (key.startsWith(machineId)) {
        classificationCache.delete(key);
      }
    }
  } else {
    classificationCache.clear();
  }
}

export function classifyMachine(m: Machine): ClassificationResult {
  if (!m || !m.id) {
    return {
      primary: 'Target Host',
      categories: [],
      badgeColor: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
      isAD: false,
    };
  }

  const cacheKey = `${m.id}-${m.updatedAt || ''}-${(m.tags || []).join(',')}`;
  const cached = classificationCache.get(cacheKey);
  if (cached) return cached;

  const categories: string[] = [];
  const name = (m.name || '').toLowerCase();
  const osName = (m.os || '').toLowerCase();
  const tags = (m.tags || []).map((t) => t.toLowerCase());
  const skills = (m.skillsLearned || []).map((s) => s.toLowerCase());
  const allTags = new Set([...tags, ...skills]);
  const hint = (m.hint || '').toLowerCase();
  const synopsis = (m.officialSynopsis || '').toLowerCase();
  const walkthrough = (m.officialWalkthrough || '').toLowerCase();
  const searchBlob = `${name} ${osName} ${Array.from(allTags).join(' ')} ${hint} ${synopsis} ${walkthrough}`;

  // 1. Active Directory Detection
  const isAD =
    ['active directory', 'activedirectory', 'ad', 'kerberos', 'kerberoast', 'as-rep', 'bloodhound', 'domain controller', 'gpo', 'ldap', 'dcsync', 'ntlm', 'zerologon', 'certipy', 'adcs'].some((t) => allTags.has(t)) ||
    hint.includes('active directory') ||
    hint.includes('domain controller') ||
    synopsis.includes('active directory') ||
    synopsis.includes('domain controller') ||
    hint.includes('kerberos') ||
    hint.includes('kerberoasting');

  if (isAD) {
    categories.push('Active Directory');
  }

  // 2. Web Detection
  const webKeywords = ['web', 'http', 'api', 'php', 'node', 'flask', 'django', 'wordpress', 'cms', 'file-upload', 'upload', 'csrf', 'idor', 'jwt', 'graphql', 'sqli', 'xss', 'ssrf', 'lfi', 'rfi', 'ssti', 'deserialization'];
  const isWeb =
    webKeywords.some((k) => allTags.has(k)) ||
    ['web application', 'web server', 'http server', 'apache', 'nginx', 'iis', 'wordpress', 'sql injection', 'cross-site scripting', 'lfi', 'ssrf', 'xss', 'sqli'].some((k) => searchBlob.includes(k));

  if (isWeb) {
    categories.push('Web');
  }

  // 3. SQL Injection (SQLi)
  const sqliKeywords = ['sqli', 'sql', 'sql injection', 'blind sqli', 'nosql', 'sqlmap', 'union-based', 'stacked queries'];
  if (sqliKeywords.some((k) => allTags.has(k)) || searchBlob.includes('sql injection') || searchBlob.includes('sqli') || searchBlob.includes('union-based') || searchBlob.includes('sqlmap')) {
    categories.push('SQLi');
  }

  // 4. Cross-Site Scripting (XSS)
  const xssKeywords = ['xss', 'cross-site scripting', 'stored xss', 'dom xss', 'reflected xss'];
  if (xssKeywords.some((k) => allTags.has(k)) || searchBlob.includes('xss') || searchBlob.includes('cross-site scripting')) {
    categories.push('XSS');
  }

  // 5. SSRF
  const ssrfKeywords = ['ssrf', 'server side request forgery', 'server-side request forgery'];
  if (ssrfKeywords.some((k) => allTags.has(k)) || searchBlob.includes('ssrf') || searchBlob.includes('request forgery')) {
    categories.push('SSRF');
  }

  // 6. SSTI (Server-Side Template Injection)
  const sstiKeywords = ['ssti', 'template injection', 'jinja', 'jinja2', 'twig', 'freemarker', 'velocity', 'mako', 'smarty', 'erb', 'thymeleaf'];
  if (sstiKeywords.some((k) => allTags.has(k)) || searchBlob.includes('ssti') || searchBlob.includes('template injection') || searchBlob.includes('jinja')) {
    categories.push('SSTI');
  }

  // 7. LFI / File Inclusion
  const lfiKeywords = ['lfi', 'rfi', 'file inclusion', 'directory traversal', 'path traversal', 'local file inclusion', 'remote file inclusion'];
  if (lfiKeywords.some((k) => allTags.has(k)) || searchBlob.includes('lfi') || searchBlob.includes('file inclusion') || searchBlob.includes('directory traversal') || searchBlob.includes('path traversal')) {
    categories.push('LFI');
  }

  // 8. RCE
  const rceKeywords = ['rce', 'remote code execution', 'code execution', 'arbitrary code'];
  if (rceKeywords.some((k) => allTags.has(k)) || searchBlob.includes('remote code execution') || searchBlob.includes('rce')) {
    categories.push('RCE');
  }

  // 9. Command Injection (CMDi)
  const cmdiKeywords = ['command injection', 'command-injection', 'os command', 'shell injection', 'system(', 'popen'];
  if (cmdiKeywords.some((k) => allTags.has(k)) || searchBlob.includes('command injection') || searchBlob.includes('command-injection') || searchBlob.includes('os command')) {
    categories.push('Command Injection');
  }

  // 10. Deserialization
  const deserKeywords = ['deserialization', 'unserialize', 'pickle', 'ysoserial', 'fastjson', 'jackson', 'pyyaml', 'java deserialization', 'php object injection', 'viewstate'];
  if (deserKeywords.some((k) => allTags.has(k)) || searchBlob.includes('deserialization') || searchBlob.includes('unserialize') || searchBlob.includes('ysoserial') || searchBlob.includes('pickle')) {
    categories.push('Deserialization');
  }

  // 11. Auth / IDOR
  const authKeywords = ['idor', 'auth bypass', 'authentication bypass', 'broken access', 'privilege escalation web', 'default credentials', 'brute force', 'account takeover', 'mass assignment'];
  if (authKeywords.some((k) => allTags.has(k)) || searchBlob.includes('idor') || searchBlob.includes('auth bypass') || searchBlob.includes('authentication bypass') || searchBlob.includes('broken access control')) {
    categories.push('Auth / IDOR');
  }

  // 12. File Upload
  const uploadKeywords = ['file upload', 'file-upload', 'unrestricted upload', 'arbitrary upload', 'webshell upload', 'extension bypass', 'magic bytes'];
  if (uploadKeywords.some((k) => allTags.has(k)) || searchBlob.includes('file upload') || searchBlob.includes('unrestricted upload') || searchBlob.includes('upload script')) {
    categories.push('File Upload');
  }

  // 13. Crypto / JWT
  const cryptoKeywords = ['crypto', 'cryptography', 'jwt', 'padding oracle', 'weak key', 'hash cracking', 'hashcat', 'john the ripper', 'rsa', 'aes', 'cipher'];
  if (cryptoKeywords.some((k) => allTags.has(k)) || searchBlob.includes('padding oracle') || searchBlob.includes('jwt') || searchBlob.includes('crack') || searchBlob.includes('hashcat')) {
    categories.push('Crypto / JWT');
  }

  // 14. Linux PrivEsc
  if (m.os === 'Linux') {
    const lpeKeywords = ['sudo', 'cron', 'suid', 'kernel', 'capabilities', 'lxd', 'docker', 'wildcard', 'linux privesc', 'privesc', 'path hijack'];
    if (lpeKeywords.some((k) => allTags.has(k)) || searchBlob.includes('sudo -l') || searchBlob.includes('suid') || searchBlob.includes('cron') || searchBlob.includes('privesc')) {
      categories.push('Linux PrivEsc');
    }
  }

  // 15. Windows PrivEsc
  if (m.os === 'Windows') {
    const wpeKeywords = ['token', 'impersonation', 'seimpersonate', 'potato', 'juicy potato', 'printspoofer', 'alwaysinstallelevated', 'uac', 'unquoted', 'dll hijacking', 'service-misconfiguration'];
    if (wpeKeywords.some((k) => allTags.has(k)) || searchBlob.includes('seimpersonate') || searchBlob.includes('potato') || searchBlob.includes('privilege escalation') || searchBlob.includes('privesc')) {
      categories.push('Windows PrivEsc');
    }
  }

  // 16. SUID / Sudo
  const suidKeywords = ['suid', 'sudo', 'sudoers', 'sudo -l', 'gtfobins', 'capabilities', 'getcap', 'setuid'];
  if (suidKeywords.some((k) => allTags.has(k)) || searchBlob.includes('suid') || searchBlob.includes('sudo -l') || searchBlob.includes('sudoers')) {
    categories.push('SUID / Sudo');
  }

  // 17. Kernel Exploit
  const kernelKeywords = ['kernel', 'dirty cow', 'dirty pipe', 'overlayfs', 'pwnkit', 'baron samedit', 'cve-2021-', 'cve-2022-', 'cve-2023-'];
  if (kernelKeywords.some((k) => allTags.has(k)) || searchBlob.includes('kernel exploit') || searchBlob.includes('dirty cow') || searchBlob.includes('dirty pipe') || searchBlob.includes('pwnkit')) {
    categories.push('Kernel Exploit');
  }

  // 18. AD CS / Kerberos
  const adcsKeywords = ['ad cs', 'adcs', 'certipy', 'esc1', 'esc2', 'esc3', 'esc4', 'esc8', 'kerberoast', 'kerberoasting', 'as-rep', 'asreproast', 'dcsync', 'secretsdump', 'golden ticket', 'silver ticket'];
  if (adcsKeywords.some((k) => allTags.has(k)) || searchBlob.includes('certipy') || searchBlob.includes('esc1') || searchBlob.includes('kerberoast') || searchBlob.includes('as-rep') || searchBlob.includes('dcsync')) {
    categories.push('AD CS / Kerberos');
  }

  // 19. Binary / BOF
  const bofKeywords = ['buffer overflow', 'bof', 'binary', 'pwn', 'rop', 'format string', 'shellcode', 'ret2libc'];
  if (bofKeywords.some((k) => allTags.has(k)) || searchBlob.includes('buffer overflow') || searchBlob.includes('bof') || searchBlob.includes('ret2libc')) {
    categories.push('Binary / BOF');
  }

  // 20. Memory Corruption / ROP
  const memKeywords = ['rop', 'format string', 'heap', 'use after free', 'uaf', 'stack pivot', 'aslr', 'nx bypass'];
  if (memKeywords.some((k) => allTags.has(k)) || searchBlob.includes('rop chain') || searchBlob.includes('format string') || searchBlob.includes('heap exploit')) {
    categories.push('Memory Corruption');
  }

  // 21. Container / Docker
  const dockerKeywords = ['docker', 'container', 'docker.sock', 'lxd', 'lxc', 'kubernetes', 'k8s', 'chroot', 'breakout'];
  if (dockerKeywords.some((k) => allTags.has(k)) || searchBlob.includes('docker') || searchBlob.includes('container escape') || searchBlob.includes('docker.sock')) {
    categories.push('Container / Docker');
  }

  // 22. CMS Exploit
  const cmsKeywords = ['wordpress', 'joomla', 'drupal', 'magento', 'craft cms', 'wpscan', 'cms made simple'];
  if (cmsKeywords.some((k) => allTags.has(k)) || searchBlob.includes('wordpress') || searchBlob.includes('joomla') || searchBlob.includes('drupal') || searchBlob.includes('cms made simple')) {
    categories.push('CMS Exploit');
  }

  // 23. API / GraphQL
  const apiKeywords = ['graphql', 'api', 'rest api', 'swagger', 'openapi', 'websocket', 'endpoints'];
  if (apiKeywords.some((k) => allTags.has(k)) || searchBlob.includes('graphql') || searchBlob.includes('rest api') || searchBlob.includes('swagger')) {
    categories.push('API / GraphQL');
  }

  // 24. Network / SMB
  const netKeywords = ['smb', 'samba', 'ftp', 'snmp', 'ssh', 'nfs', 'rpc', 'telnet', 'anonymous'];
  if (netKeywords.some((k) => allTags.has(k)) || searchBlob.includes('smb') || searchBlob.includes('samba') || searchBlob.includes('ftp') || searchBlob.includes('nfs')) {
    categories.push('Network / SMB');
  }

  // Determine Primary Archetype Display Name & Badge Color
  let primary = `${m.os || 'Target'} Host`;
  let badgeColor = 'bg-slate-100 dark:bg-gray-500/15 text-slate-800 dark:text-gray-400 border-slate-300 dark:border-gray-500/30';

  if (isAD) {
    primary = 'Active Directory';
    badgeColor = 'bg-purple-100 dark:bg-purple-500/15 text-purple-900 dark:text-purple-400 border-purple-300 dark:border-purple-500/30';
  } else if (categories.includes('AD CS / Kerberos')) {
    primary = 'AD CS / Kerb';
    badgeColor = 'bg-purple-100 dark:bg-purple-600/15 text-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-600/30';
  } else if (categories.includes('Binary / BOF') || categories.includes('Memory Corruption')) {
    primary = 'Binary / BOF';
    badgeColor = 'bg-red-100 dark:bg-red-600/15 text-red-900 dark:text-red-400 border-red-300 dark:border-red-600/30';
  } else if (isWeb) {
    if (categories.includes('SSTI')) {
      primary = 'Web (SSTI)';
      badgeColor = 'bg-fuchsia-100 dark:bg-fuchsia-500/15 text-fuchsia-900 dark:text-fuchsia-400 border-fuchsia-300 dark:border-fuchsia-500/30';
    } else if (categories.includes('Deserialization')) {
      primary = 'Web (Deserial)';
      badgeColor = 'bg-violet-100 dark:bg-violet-500/15 text-violet-900 dark:text-violet-400 border-violet-300 dark:border-violet-500/30';
    } else if (categories.includes('SQLi')) {
      primary = 'Web (SQLi)';
      badgeColor = 'bg-amber-100 dark:bg-amber-500/15 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-500/30';
    } else if (categories.includes('Command Injection')) {
      primary = 'Web (CMDi)';
      badgeColor = 'bg-red-100 dark:bg-red-500/15 text-red-900 dark:text-red-400 border-red-300 dark:border-red-500/30';
    } else if (categories.includes('XSS')) {
      primary = 'Web (XSS)';
      badgeColor = 'bg-yellow-100 dark:bg-yellow-500/15 text-yellow-950 dark:text-yellow-300 border-yellow-300 dark:border-yellow-500/30';
    } else if (categories.includes('RCE')) {
      primary = 'Web (RCE)';
      badgeColor = 'bg-rose-100 dark:bg-rose-500/15 text-rose-900 dark:text-rose-400 border-rose-300 dark:border-rose-500/30';
    } else if (categories.includes('LFI')) {
      primary = 'Web (LFI)';
      badgeColor = 'bg-sky-100 dark:bg-sky-500/15 text-sky-900 dark:text-sky-300 border-sky-300 dark:border-sky-500/30';
    } else if (categories.includes('SSRF')) {
      primary = 'Web (SSRF)';
      badgeColor = 'bg-teal-100 dark:bg-teal-500/15 text-teal-900 dark:text-teal-300 border-teal-300 dark:border-teal-500/30';
    } else {
      primary = 'Web App';
      badgeColor = 'bg-cyan-100 dark:bg-cyan-500/15 text-cyan-900 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30';
    }
  } else if (categories.includes('Linux PrivEsc')) {
    primary = 'Linux PE';
    badgeColor = 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-900 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30';
  } else if (categories.includes('Windows PrivEsc')) {
    primary = 'Windows PE';
    badgeColor = 'bg-blue-100 dark:bg-blue-500/15 text-blue-900 dark:text-blue-400 border-blue-300 dark:border-blue-500/30';
  } else if (categories.includes('Container / Docker')) {
    primary = 'Container';
    badgeColor = 'bg-cyan-100 dark:bg-cyan-600/15 text-cyan-950 dark:text-cyan-300 border-cyan-300 dark:border-cyan-600/30';
  } else if (categories.includes('Network / SMB')) {
    primary = 'Network / SMB';
    badgeColor = 'bg-orange-100 dark:bg-orange-500/15 text-orange-950 dark:text-orange-300 border-orange-300 dark:border-orange-500/30';
  }

  const result: ClassificationResult = {
    primary,
    categories,
    badgeColor,
    isAD,
  };

  classificationCache.set(cacheKey, result);
  return result;
}

export function isActiveDirectory(m: Machine): boolean {
  return classifyMachine(m).isAD;
}

export function matchesCategory(m: Machine, categoryId: string): boolean {
  if (!categoryId || categoryId === 'ALL') return true;
  const classification = classifyMachine(m);
  return classification.categories.includes(categoryId);
}
