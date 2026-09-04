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
    badgeColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
  },
  {
    id: 'Active Directory',
    label: 'Active Directory',
    shortLabel: 'AD',
    badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/40',
  },
  {
    id: 'SQLi',
    label: 'SQL Injection',
    shortLabel: 'SQLi',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    textColor: 'text-amber-300',
    borderColor: 'border-amber-500/40',
  },
  {
    id: 'XSS',
    label: 'Cross-Site Scripting',
    shortLabel: 'XSS',
    badgeColor: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
    textColor: 'text-yellow-300',
    borderColor: 'border-yellow-500/40',
  },
  {
    id: 'SSRF',
    label: 'Server-Side Request Forgery',
    shortLabel: 'SSRF',
    badgeColor: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    textColor: 'text-teal-300',
    borderColor: 'border-teal-500/40',
  },
  {
    id: 'LFI',
    label: 'File Inclusion (LFI/RFI)',
    shortLabel: 'LFI',
    badgeColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    textColor: 'text-sky-300',
    borderColor: 'border-sky-500/40',
  },
  {
    id: 'RCE',
    label: 'Remote Code Execution / RCE',
    shortLabel: 'RCE',
    badgeColor: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    textColor: 'text-rose-400',
    borderColor: 'border-rose-500/40',
  },
  {
    id: 'Linux PrivEsc',
    label: 'Linux Privilege Escalation',
    shortLabel: 'Linux PE',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
  },
  {
    id: 'Windows PrivEsc',
    label: 'Windows Privilege Escalation',
    shortLabel: 'Win PE',
    badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/40',
  },
  {
    id: 'Binary / BOF',
    label: 'Buffer Overflow / Binary Pwn',
    shortLabel: 'BOF/Pwn',
    badgeColor: 'bg-red-600/15 text-red-400 border-red-600/30',
    textColor: 'text-red-400',
    borderColor: 'border-red-600/40',
  },
  {
    id: 'Network / SMB',
    label: 'Network & SMB Protocol',
    shortLabel: 'SMB/Net',
    badgeColor: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    textColor: 'text-orange-300',
    borderColor: 'border-orange-500/40',
  },
];

export interface ClassificationResult {
  primary: string;
  categories: string[];
  badgeColor: string;
  isAD: boolean;
}

// Ultra-fast memoization cache to guarantee 120 FPS performance across 945 machines
const classificationCache = new Map<string, ClassificationResult>();

export function classifyMachine(m: Machine): ClassificationResult {
  if (!m || !m.id) {
    return {
      primary: 'Target Host',
      categories: [],
      badgeColor: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
      isAD: false,
    };
  }

  const cached = classificationCache.get(m.id);
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
    m.os === 'Active Directory' ||
    ['active directory', 'ad', 'kerberos', 'kerberoast', 'as-rep', 'bloodhound', 'domain controller', 'gpo', 'ldap', 'dcsync', 'ntlm', 'zerologon'].some((t) => allTags.has(t)) ||
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
  const sqliKeywords = ['sqli', 'sql', 'sql injection', 'blind sqli', 'nosql', 'sqlmap'];
  if (sqliKeywords.some((k) => allTags.has(k)) || searchBlob.includes('sql injection') || searchBlob.includes('sqli') || searchBlob.includes('union-based')) {
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

  // 6. LFI / File Inclusion
  const lfiKeywords = ['lfi', 'rfi', 'file inclusion', 'directory traversal', 'path traversal', 'local file inclusion'];
  if (lfiKeywords.some((k) => allTags.has(k)) || searchBlob.includes('lfi') || searchBlob.includes('file inclusion') || searchBlob.includes('directory traversal') || searchBlob.includes('path traversal')) {
    categories.push('LFI');
  }

  // 7. RCE / Command Injection
  const rceKeywords = ['rce', 'command injection', 'command-injection', 'remote code execution', 'code execution', 'ssti', 'deserialization', 'template injection'];
  if (rceKeywords.some((k) => allTags.has(k)) || searchBlob.includes('command injection') || searchBlob.includes('remote code execution') || searchBlob.includes('rce') || searchBlob.includes('ssti')) {
    categories.push('RCE');
  }

  // 8. Linux PrivEsc
  if (m.os === 'Linux') {
    const lpeKeywords = ['sudo', 'cron', 'suid', 'kernel', 'capabilities', 'lxd', 'docker', 'wildcard', 'linux privesc', 'privesc', 'path hijack'];
    if (lpeKeywords.some((k) => allTags.has(k)) || searchBlob.includes('sudo -l') || searchBlob.includes('suid') || searchBlob.includes('cron') || searchBlob.includes('privesc')) {
      categories.push('Linux PrivEsc');
    }
  }

  // 9. Windows PrivEsc
  if (m.os === 'Windows' || m.os === 'Active Directory') {
    const wpeKeywords = ['token', 'impersonation', 'seimpersonate', 'potato', 'juicy potato', 'printspoofer', 'alwaysinstallelevated', 'uac', 'unquoted', 'dll hijacking', 'service-misconfiguration'];
    if (wpeKeywords.some((k) => allTags.has(k)) || searchBlob.includes('seimpersonate') || searchBlob.includes('potato') || searchBlob.includes('privilege escalation') || searchBlob.includes('privesc')) {
      categories.push('Windows PrivEsc');
    }
  }

  // 10. Binary / BOF
  const bofKeywords = ['buffer overflow', 'bof', 'binary', 'pwn', 'rop', 'format string', 'shellcode', 'ret2libc'];
  if (bofKeywords.some((k) => allTags.has(k)) || searchBlob.includes('buffer overflow') || searchBlob.includes('bof')) {
    categories.push('Binary / BOF');
  }

  // 11. Network / SMB
  const netKeywords = ['smb', 'samba', 'ftp', 'snmp', 'ssh', 'nfs', 'rpc', 'telnet', 'anonymous'];
  if (netKeywords.some((k) => allTags.has(k)) || searchBlob.includes('smb') || searchBlob.includes('samba') || searchBlob.includes('ftp')) {
    categories.push('Network / SMB');
  }

  // Determine Primary Archetype Display Name & Badge Color
  let primary = `${m.os || 'Target'} Host`;
  let badgeColor = 'bg-gray-500/15 text-gray-400 border-gray-500/30';

  if (isAD) {
    primary = 'Active Directory';
    badgeColor = 'bg-purple-500/15 text-purple-400 border-purple-500/30';
  } else if (categories.includes('Binary / BOF')) {
    primary = 'Binary / BOF';
    badgeColor = 'bg-red-600/15 text-red-400 border-red-600/30';
  } else if (isWeb) {
    if (categories.includes('SQLi')) {
      primary = 'Web (SQLi)';
      badgeColor = 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    } else if (categories.includes('XSS')) {
      primary = 'Web (XSS)';
      badgeColor = 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30';
    } else if (categories.includes('RCE')) {
      primary = 'Web (RCE)';
      badgeColor = 'bg-rose-500/15 text-rose-400 border-rose-500/30';
    } else if (categories.includes('LFI')) {
      primary = 'Web (LFI)';
      badgeColor = 'bg-sky-500/15 text-sky-300 border-sky-500/30';
    } else if (categories.includes('SSRF')) {
      primary = 'Web (SSRF)';
      badgeColor = 'bg-teal-500/15 text-teal-300 border-teal-500/30';
    } else {
      primary = 'Web App';
      badgeColor = 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
    }
  } else if (categories.includes('Linux PrivEsc')) {
    primary = 'Linux PE';
    badgeColor = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
  } else if (categories.includes('Windows PrivEsc')) {
    primary = 'Windows PE';
    badgeColor = 'bg-blue-500/15 text-blue-400 border-blue-500/30';
  } else if (categories.includes('Network / SMB')) {
    primary = 'Network / SMB';
    badgeColor = 'bg-orange-500/15 text-orange-300 border-orange-500/30';
  }

  const result: ClassificationResult = {
    primary,
    categories,
    badgeColor,
    isAD,
  };

  classificationCache.set(m.id, result);
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
