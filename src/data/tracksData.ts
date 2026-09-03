import { Machine } from '../types';

export interface PracticeTrack {
  id: string;
  name: string;
  shortName: string;
  category: 'certification' | 'technique' | 'level';
  description: string;
  badgeColor: string;
  accentColor: string;
  filterFn: (machine: Machine) => boolean;
}

export const PRACTICE_TRACKS: PracticeTrack[] = [
  {
    id: 'tjnull-oscp',
    name: "TJ_Null's OSCP Preparation",
    shortName: 'OSCP Track',
    category: 'certification',
    description: 'The definitive OffSec Certified Professional machine list curated by TJ_Null.',
    badgeColor: 'border-cyber-emerald/40 bg-cyber-emerald/10 text-cyber-emerald',
    accentColor: '#10B981',
    filterFn: (m) => m.certifications.includes('OSCP'),
  },
  {
    id: 'cpts-path',
    name: 'Certified Penetration Testing Specialist (CPTS)',
    shortName: 'CPTS Track',
    category: 'certification',
    description: 'Hack The Box Academy flagship path covering deep enumeration and complex pivot chains.',
    badgeColor: 'border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan',
    accentColor: '#06B6D4',
    filterFn: (m) => 
      m.certifications.includes('CPTS') || 
      m.tags.some(t => ['cpts', 'htb academy', 'academy', 'pivoting'].includes(t.toLowerCase())),
  },
  {
    id: 'crto-ad',
    name: 'Active Directory & Red Team Warfare (CRTO)',
    shortName: 'Active Directory',
    category: 'certification',
    description: 'Enterprise domain exploitation: Kerberoasting, AS-REP, BloodHound, GPO abuse, and DCSync.',
    badgeColor: 'border-cyber-purple/40 bg-cyber-purple/10 text-cyber-purple',
    accentColor: '#A855F7',
    filterFn: (m) => 
      m.os === 'Active Directory' || 
      m.certifications.includes('CRTO') ||
      m.tags.some(t => ['kerberos', 'ad', 'ldap', 'domain', 'bloodhound', 'active directory', 'gpo'].includes(t.toLowerCase())),
  },
  {
    id: 'web-master',
    name: 'Web Exploitation Master Pathway',
    shortName: 'Web Exploitation',
    category: 'technique',
    description: 'OWASP Top 10, SQL injection, SSTI, SSRF, Deserialization, and API security vulnerabilities.',
    badgeColor: 'border-cyber-amber/40 bg-cyber-amber/10 text-cyber-amber',
    accentColor: '#F59E0B',
    filterFn: (m) => 
      m.tags.some(t => [
        'web', 'http', 'iis', 'apache', 'nginx', 'php', 'sqli', 'sql', 'ssti', 
        'wordpress', 'drupal', 'joomla', 'tomcat', 'jenkins', 'nodejs', 'flask',
        'api', 'graphql', 'lfi', 'rfi', 'deserialization', 'xss', 'command injection'
      ].includes(t.toLowerCase())),
  },
  {
    id: 'linux-privesc',
    name: 'Linux Privilege Escalation Intensive',
    shortName: 'Linux PrivEsc',
    category: 'technique',
    description: 'Internal Linux enumeration: SUID binaries, sudo misconfigurations, capabilities, and kernel exploits.',
    badgeColor: 'border-cyber-crimson/40 bg-cyber-crimson/10 text-cyber-crimson',
    accentColor: '#EF4444',
    filterFn: (m) => 
      m.os === 'Linux' && 
      m.tags.some(t => ['suid', 'sudo', 'kernel', 'cron', 'capabilities', 'privesc', 'nfs', 'path', 'wildcard'].includes(t.toLowerCase())),
  },
  {
    id: 'windows-privesc',
    name: 'Windows & Enterprise PrivEsc Domination',
    shortName: 'Windows PrivEsc',
    category: 'technique',
    description: 'Token impersonation (Juicy/PrintPotato), Unquoted Service Paths, AlwaysInstallElevated, and DPAPI.',
    badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    accentColor: '#3B82F6',
    filterFn: (m) => 
      m.os === 'Windows' || 
      m.os === 'Active Directory' ||
      m.tags.some(t => ['windows', 'smb', 'rdp', 'winrm', 'ad', 'potato', 'seimpersonate', 'unquoted', 'token', 'privesc', 'service', 'uac', 'dll', 'registry', 'sam', 'lsass'].includes(t.toLowerCase())),
  },
  {
    id: 'beginner-essentials',
    name: 'Fast Track: Easy Footholds & Essentials',
    shortName: 'Beginner Track',
    category: 'level',
    description: 'Perfect starting boxes with straightforward reconnaissance and direct, clean exploitation steps.',
    badgeColor: 'border-cyber-emerald/40 bg-cyber-emerald/10 text-cyber-emerald',
    accentColor: '#10B981',
    filterFn: (m) => m.difficulty === 'Easy' || m.difficulty === 'Very Easy',
  },
  {
    id: 'insane-hardcore',
    name: 'Hardcore & Insane Challenge Track',
    shortName: 'Hardcore Pwn',
    category: 'level',
    description: 'Complex multi-step exploitation chains, binary defense bypasses, custom cryptography, and deep pivots.',
    badgeColor: 'border-red-500/40 bg-red-500/10 text-red-500 shadow-glow-crimson',
    accentColor: '#EF4444',
    filterFn: (m) => m.difficulty === 'Hard' || m.difficulty === 'Insane',
  },
];
