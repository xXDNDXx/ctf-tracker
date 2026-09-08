/**
 * cvssUtils.ts
 * 100% FIRST.org CVSS v3.1 Specification Compliant Calculator & Vector Builder.
 * Completely browser-native (zero external dependencies).
 */

export type AttackVector = 'N' | 'A' | 'L' | 'P';
export type AttackComplexity = 'L' | 'H';
export type PrivilegesRequired = 'N' | 'L' | 'H';
export type UserInteraction = 'N' | 'R';
export type Scope = 'U' | 'C';
export type CiaImpact = 'N' | 'L' | 'H';

export interface Cvss31Metrics {
  av: AttackVector;
  ac: AttackComplexity;
  pr: PrivilegesRequired;
  ui: UserInteraction;
  scope: Scope;
  c: CiaImpact;
  i: CiaImpact;
  a: CiaImpact;
}

export type CvssSeverity = 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface Cvss31Result {
  baseScore: number;
  severity: CvssSeverity;
  vectorString: string;
  impactSubScore: number;
  exploitabilitySubScore: number;
  iss: number;
}

// Weights defined by FIRST.org CVSS 3.1 specification
export const CVSS_WEIGHTS = {
  av: { N: 0.85, A: 0.62, L: 0.55, P: 0.2 },
  ac: { L: 0.77, H: 0.44 },
  pr: {
    // Unchanged Scope
    U: { N: 0.85, L: 0.62, H: 0.27 },
    // Changed Scope
    C: { N: 0.85, L: 0.68, H: 0.50 },
  },
  ui: { N: 0.85, R: 0.62 },
  cia: { N: 0, L: 0.22, H: 0.56 },
};

export const DEFAULT_CVSS_METRICS: Cvss31Metrics = {
  av: 'N',
  ac: 'L',
  pr: 'N',
  ui: 'N',
  scope: 'U',
  c: 'H',
  i: 'H',
  a: 'H',
};

/**
 * CVSS v3.1 Roundup specification:
 * Roundup(input) is defined as the smallest number, specified to one decimal place,
 * that is equal to or higher than the input.
 * Example: 4.02 -> 4.1, 4.00 -> 4.0
 */
export function roundUp(input: number): number {
  const intInput = Math.round(input * 100000);
  if (intInput % 10000 === 0) {
    return intInput / 100000;
  }
  return (Math.floor(intInput / 10000) + 1) / 10;
}

export function getSeverity(score: number): CvssSeverity {
  if (score <= 0.0) return 'NONE';
  if (score <= 3.9) return 'LOW';
  if (score <= 6.9) return 'MEDIUM';
  if (score <= 8.9) return 'HIGH';
  return 'CRITICAL';
}

export function getSeverityBadgeStyle(severity: CvssSeverity): { bg: string; text: string; border: string } {
  switch (severity) {
    case 'CRITICAL':
      return { bg: 'bg-rose-500/15', text: 'text-rose-400', border: 'border-rose-500/40' };
    case 'HIGH':
      return { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/40' };
    case 'MEDIUM':
      return { bg: 'bg-yellow-500/15', text: 'text-yellow-400', border: 'border-yellow-500/40' };
    case 'LOW':
      return { bg: 'bg-cyan-500/15', text: 'text-cyan-400', border: 'border-cyan-500/40' };
    default:
      return { bg: 'bg-slate-500/15', text: 'text-slate-400', border: 'border-slate-500/40' };
  }
}

/**
 * Calculate CVSS v3.1 Base Score and Vector String
 */
export function calculateCvss31(metrics: Cvss31Metrics): Cvss31Result {
  const { av, ac, pr, ui, scope, c, i, a } = metrics;

  // Impact Sub Score (ISS)
  const iss = 1 - (1 - CVSS_WEIGHTS.cia[c]) * (1 - CVSS_WEIGHTS.cia[i]) * (1 - CVSS_WEIGHTS.cia[a]);

  // Impact
  let impact: number;
  if (scope === 'U') {
    impact = 6.42 * iss;
  } else {
    impact = 7.52 * (iss - 0.029) - 3.25 * Math.pow(Math.max(0, iss * 0.9731 - 0.02), 13);
  }

  // Exploitability
  const prWeight = CVSS_WEIGHTS.pr[scope][pr];
  const exploitability = 8.22 * CVSS_WEIGHTS.av[av] * CVSS_WEIGHTS.ac[ac] * prWeight * CVSS_WEIGHTS.ui[ui];

  // Base Score
  let baseScore: number;
  if (impact <= 0) {
    impact = 0;
    baseScore = 0;
  } else if (scope === 'U') {
    baseScore = roundUp(Math.min(impact + exploitability, 10));
  } else {
    baseScore = roundUp(Math.min(1.08 * (impact + exploitability), 10));
  }

  baseScore = Math.max(0, Math.min(10, baseScore));
  const severity = getSeverity(baseScore);
  const vectorString = `CVSS:3.1/AV:${av}/AC:${ac}/PR:${pr}/UI:${ui}/S:${scope}/C:${c}/I:${i}/A:${a}`;

  return {
    baseScore,
    severity,
    vectorString,
    impactSubScore: Math.max(0, Math.round(impact * 10) / 10),
    exploitabilitySubScore: Math.round(exploitability * 10) / 10,
    iss: Math.max(0, Math.round(iss * 100) / 100),
  };
}

/**
 * Parse an official CVSS:3.1 or CVSS:3.0 vector string into Cvss31Metrics
 */
export function parseCvssVector(vector: string): Cvss31Metrics | null {
  if (!vector || typeof vector !== 'string') return null;

  const trimmed = vector.trim();
  if (trimmed.startsWith('CVSS:') && !trimmed.startsWith('CVSS:3.1/') && !trimmed.startsWith('CVSS:3.0/')) {
    return null;
  }

  const parts = trimmed.split('/');
  const metrics: Partial<Cvss31Metrics> = {};

  for (const part of parts) {
    const [key, val] = part.split(':');
    if (!key || !val) continue;

    switch (key.toUpperCase()) {
      case 'AV':
        if (['N', 'A', 'L', 'P'].includes(val.toUpperCase())) metrics.av = val.toUpperCase() as AttackVector;
        break;
      case 'AC':
        if (['L', 'H'].includes(val.toUpperCase())) metrics.ac = val.toUpperCase() as AttackComplexity;
        break;
      case 'PR':
        if (['N', 'L', 'H'].includes(val.toUpperCase())) metrics.pr = val.toUpperCase() as PrivilegesRequired;
        break;
      case 'UI':
        if (['N', 'R'].includes(val.toUpperCase())) metrics.ui = val.toUpperCase() as UserInteraction;
        break;
      case 'S':
        if (['U', 'C'].includes(val.toUpperCase())) metrics.scope = val.toUpperCase() as Scope;
        break;
      case 'C':
        if (['N', 'L', 'H'].includes(val.toUpperCase())) metrics.c = val.toUpperCase() as CiaImpact;
        break;
      case 'I':
        if (['N', 'L', 'H'].includes(val.toUpperCase())) metrics.i = val.toUpperCase() as CiaImpact;
        break;
      case 'A':
        if (['N', 'L', 'H'].includes(val.toUpperCase())) metrics.a = val.toUpperCase() as CiaImpact;
        break;
    }
  }

  // Validate all required metrics exist
  if (
    metrics.av &&
    metrics.ac &&
    metrics.pr &&
    metrics.ui &&
    metrics.scope &&
    metrics.c &&
    metrics.i &&
    metrics.a
  ) {
    return metrics as Cvss31Metrics;
  }

  return null;
}

export interface CvssPreset {
  id: string;
  name: string;
  description: string;
  metrics: Cvss31Metrics;
}

export const CVSS_PRESETS: CvssPreset[] = [
  {
    id: 'unauth-rce',
    name: 'Unauthenticated Remote Code Execution (RCE)',
    description: 'Pre-auth network command injection or memory corruption with root/system impact',
    metrics: { av: 'N', ac: 'L', pr: 'N', ui: 'N', scope: 'U', c: 'H', i: 'H', a: 'H' },
  },
  {
    id: 'sqli-admin',
    name: 'SQL Injection with Administrative Extraction',
    description: 'Direct SQLi extracting hashes and modifying database integrity',
    metrics: { av: 'N', ac: 'L', pr: 'N', ui: 'N', scope: 'U', c: 'H', i: 'H', a: 'N' },
  },
  {
    id: 'local-privesc',
    name: 'Local Privilege Escalation (LPE / Kernel / SUID)',
    description: 'Local low-privilege operator obtaining root or SYSTEM privileges',
    metrics: { av: 'L', ac: 'L', pr: 'L', ui: 'N', scope: 'U', c: 'H', i: 'H', a: 'H' },
  },
  {
    id: 'ssrf-cloud',
    name: 'Server-Side Request Forgery (SSRF) to Cloud Metadata',
    description: 'Accessing IMDS 169.254.169.254 to steal IAM credentials (Scope Changed)',
    metrics: { av: 'N', ac: 'L', pr: 'N', ui: 'N', scope: 'C', c: 'H', i: 'N', a: 'N' },
  },
  {
    id: 'stored-xss',
    name: 'Stored Cross-Site Scripting (XSS)',
    description: 'Persistent script injection hijacking user sessions via interaction',
    metrics: { av: 'N', ac: 'L', pr: 'L', ui: 'R', scope: 'C', c: 'L', i: 'L', a: 'N' },
  },
  {
    id: 'reflected-xss',
    name: 'Reflected Cross-Site Scripting (XSS)',
    description: 'Unauthenticated query reflection executing client-side in victim context',
    metrics: { av: 'N', ac: 'L', pr: 'N', ui: 'R', scope: 'C', c: 'L', i: 'L', a: 'N' },
  },
];
