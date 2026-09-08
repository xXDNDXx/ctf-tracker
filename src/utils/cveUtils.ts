/**
 * cveUtils.ts
 * Utilities for extracting, indexing, and formatting Common Vulnerabilities and Exposures (CVEs)
 * for CTF targets across Hack The Box and TryHackMe.
 */

import { Machine } from '../types';

/**
 * Known notable CVE mappings for classic CTF machines where CVEs may not be explicitly named
 */
export const NOTABLE_MACHINE_CVES: Record<string, string[]> = {
  // TryHackMe
  'thm-rootme': ['CVE-2019-14287'], // Sudo bypass
  'thm-blue': ['CVE-2017-0144'], // EternalBlue (MS17-010)
  'thm-kenobi': ['CVE-2015-1427', 'CVE-2015-3306'], // ProFTPd mod_copy
  'thm-steelmountain': ['CVE-2014-6287'], // Rejetto HFS 2.3
  'thm-alfred': ['CVE-2019-1003000'], // Jenkins Script Console RCE
  'thm-gamezone': ['CVE-2019-15107'], // Webmin RCE
  'thm-retro': ['CVE-2019-1388'], // UAC Privilege Escalation
  'thm-blaster': ['CVE-2019-1388'], // Windows UAC privesc
  'thm-jacobtheboss': ['CVE-2017-12149'], // JBoss deserialization
  'thm-startup': ['CVE-2021-4034'], // PwnKit
  'thm-vulnversity': ['CVE-2019-14287'], // Sudo security bypass
  'thm-mrrobot': ['CVE-2015-3438', 'CVE-2015-3439'], // WordPress vulnerabilities
  'thm-skynet': ['CVE-2019-15889'], // Cuppa CMS LFI

  // Hack The Box
  'htb-legacy': ['CVE-2008-4250', 'CVE-2017-0144'], // MS08-067 & MS17-010
  'htb-blue': ['CVE-2017-0144'], // EternalBlue
  'htb-lame': ['CVE-2007-2447', 'CVE-2004-2687'], // Samba usermap script / distcc
  'htb-devel': ['CVE-2011-1249'], // MS11-046
  'htb-optimum': ['CVE-2014-6287', 'CVE-2016-0099'], // Rejetto HFS & MS16-032
  'htb-bashed': ['CVE-2019-14287'], // phpbash / sudo
  'htb-shocker': ['CVE-2014-6271'], // Shellshock
  'htb-jerry': ['CVE-2017-12615'], // Apache Tomcat PUT RCE
  'htb-grandpa': ['CVE-2017-7269'], // IIS 6.0 WebDAV ScStoragePathFromUrl
  'htb-granny': ['CVE-2017-7269'], // IIS 6.0 WebDAV
  'htb-netmon': ['CVE-2018-9276'], // PRTG Network Monitor RCE
  'htb-active': ['CVE-2014-1812'], // Group Policy Preferences (MS14-025)
  'htb-buff': ['CVE-2019-16097'], // Gym Management System 1.0 RCE
  'htb-blunder': ['CVE-2019-16113'], // Bludit CMS Auth Bruteforce Bypass
  'htb-academy': ['CVE-2018-15133'], // Laravel API Key Deserialization
  'htb-sau': ['CVE-2023-27163'], // Request Baskets SSRF & Maltrail RCE
  'htb-cozyhosting': ['CVE-2023-38606'], // Spring Boot session hijacking
  'htb-keeper': ['CVE-2023-32784'], // KeePass Master Key memory dump
  'htb-analytics': ['CVE-2023-38646', 'CVE-2023-2640', 'CVE-2023-32629'], // Metabase Pre-Auth RCE & GameOver(lay)
  'htb-monitorsfour': ['CVE-2024-27198'], // TeamCity Auth Bypass
  'htb-headless': ['CVE-2024-3400'], // XSS cookie grab & command injection
  'htb-usage': ['CVE-2023-24249'], // Laravel & 7-Zip symlink
  'htb-boardlight': ['CVE-2023-30253'], // Dolibarr RCE
  'htb-perfection': ['CVE-2022-25765'], // pdfkit command injection
};

// Fast internal cache to avoid repeated regex scans across render loops
const cveExtractionCache = new Map<string, string[]>();

/**
 * Extract all unique CVEs associated with a machine (memoized)
 */
export function extractMachineCves(machine: Machine): string[] {
  if (!machine) return [];
  const cacheKey = `${machine.id}_${machine.updatedAt || ''}_${machine.tags?.length || 0}_${machine.quickNotes?.length || 0}_${machine.writeupMarkdown?.length || 0}`;
  const cached = cveExtractionCache.get(cacheKey);
  if (cached) return cached;

  const cveSet = new Set<string>();

  // 1. Check curated notable list
  if (NOTABLE_MACHINE_CVES[machine.id]) {
    NOTABLE_MACHINE_CVES[machine.id].forEach((c) => cveSet.add(c.toUpperCase()));
  }

  // 2. Check explicit machine.cves if set
  if (machine.cves && Array.isArray(machine.cves)) {
    machine.cves.forEach((c) => cveSet.add(c.toUpperCase()));
  }

  // 3. Scan tags, hints, synopsis, and walkthrough text
  const searchableParts = [
    ...(machine.tags || []),
    machine.hint || '',
    machine.officialSynopsis || '',
    machine.officialWalkthrough || '',
    machine.quickNotes || '',
    machine.writeupMarkdown || '',
  ];

  const combined = searchableParts.join(' ');
  const regex = /CVE-\d{4}-\d{4,7}/gi;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(combined)) !== null) {
    cveSet.add(match[0].toUpperCase());
  }

  const result = Array.from(cveSet);
  if (cveExtractionCache.size > 2000) {
    cveExtractionCache.clear();
  }
  cveExtractionCache.set(cacheKey, result);
  return result;
}

/**
 * Format CVE URL for National Vulnerability Database (NVD) or MITRE
 */
export function getCveNvdUrl(cve: string): string {
  return `https://nvd.nist.gov/vuln/detail/${encodeURIComponent(cve.toUpperCase())}`;
}

/**
 * Checks if a machine matches a search query that might be a CVE or part of a CVE
 */
export function machineMatchesCveQuery(machine: Machine, query: string): boolean {
  const cleanQuery = query.trim().toUpperCase();
  if (!cleanQuery) return false;

  const cves = extractMachineCves(machine);
  return cves.some((c) => c.includes(cleanQuery));
}
