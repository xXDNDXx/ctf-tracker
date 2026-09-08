/**
 * writeupSyncUtils.ts
 * Utilities for formatting, merging, and synchronizing imported data
 * (Nmap/Rustscan/XML scans, Loot/Credentials, Field Notes, and CVEs)
 * into Writeup Studio Markdown documents.
 */

import { Machine, CredentialItem } from '../types';
import { ScanImportResult } from './scanParserUtils';
import { extractMachineCves, getCveNvdUrl } from './cveUtils';

/**
 * Format parsed ports and scan results into clean Markdown
 */
export function formatScanMarkdownSection(scanResult: ScanImportResult, targetIp: string): string {
  const formatLabel = scanResult.format.toUpperCase();
  const timestamp = new Date().toLocaleTimeString();

  const lines: string[] = [
    `### ⚡ Discovered Services & Open Ports [${formatLabel}] (Imported ${timestamp})`,
    `- **Target IP / Host:** \`${scanResult.detectedIp || targetIp}\``,
  ];

  if (scanResult.detectedOs) {
    lines.push(`- **Detected OS:** ${scanResult.detectedOs}`);
  }

  lines.push('');

  if (scanResult.ports.length > 0) {
    lines.push('| Port | Protocol | State | Service | Version | Suggested Tools | CVE Notes |');
    lines.push('| :--- | :--- | :--- | :--- | :--- | :--- | :--- |');

    scanResult.ports.forEach((p) => {
      const tools = p.suggestedTools && p.suggestedTools.length > 0 ? `\`${p.suggestedTools.slice(0, 3).join(', ')}\`` : '-';
      const cve = p.cveNotes ? `🚨 ${p.cveNotes}` : '-';
      lines.push(`| **${p.port}** | ${p.protocol} | ${p.state} | ${p.service.toUpperCase()} | ${p.version || '-'} | ${tools} | ${cve} |`);
    });

    lines.push('');
    lines.push('#### Service Summary:');
    scanResult.ports.forEach((p) => {
      lines.push(`- **Port ${p.port}/${p.protocol}:** ${p.state.toUpperCase()} — ${p.service.toUpperCase()} ${p.version ? `(${p.version})` : ''}${p.cveNotes ? ` ➔ 🚨 *${p.cveNotes}*` : ''}`);
    });
  } else {
    lines.push('*No open ports were detected in this imported scan.*');
  }

  return lines.join('\n');
}

/**
 * Format compromised credentials into a Markdown table
 */
export function formatCredentialsMarkdownTable(credentials: CredentialItem[]): string {
  if (!credentials || credentials.length === 0) return '';

  const lines: string[] = [
    '### 🔑 Compromised Credentials & Loot Vault',
    '| Username | Secret / Hash | Type | Service | Domain | Privileged | Notes |',
    '| :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
  ];

  const cleanMdCol = (str?: string) => (str || '-').replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' ').trim();

  credentials.forEach((c) => {
    const isPriv = c.isPrivileged ? 'Yes 👑' : 'No';
    const dom = cleanMdCol(c.domain);
    const srv = cleanMdCol(c.service ? c.service.toUpperCase() : 'ANY');
    const note = cleanMdCol(c.notes);
    const user = cleanMdCol(c.username);
    const rawSecret = cleanMdCol(c.secret);
    const secretCode = rawSecret.length > 40 ? `\`${rawSecret.slice(0, 37)}...\`` : `\`${rawSecret}\``;
    lines.push(`| **${user}** | ${secretCode} | ${c.type.toUpperCase()} | ${srv} | ${dom} | ${isPriv} | ${note} |`);
  });

  return lines.join('\n');
}

/**
 * Format notable CVEs with NVD links into Markdown
 */
export function formatCvesMarkdownSection(cves: string[]): string {
  if (!cves || cves.length === 0) return '';

  const lines: string[] = [
    '### 🛡️ Associated CVE Intelligence',
  ];

  cves.forEach((c) => {
    lines.push(`- **[${c}](${getCveNvdUrl(c)})**: Vulnerability details on NIST NVD`);
  });

  return lines.join('\n');
}

/**
 * Inject an imported scan into an existing writeup markdown document.
 * If Section 2 exists, merges or replaces the placeholder with real scan results.
 * If not, appends the scan section cleanly.
 */
export function injectImportedScanIntoWriteup(
  existingMarkdown: string,
  scanResult: ScanImportResult,
  machine: Machine
): string {
  const scanMd = formatScanMarkdownSection(scanResult, machine.ip);

  if (!existingMarkdown || !existingMarkdown.trim()) {
    return `# ${machine.name} — Writeup & Penetration Testing Report\n**Target IP:** \`${machine.ip}\` | **OS:** ${machine.os} | **Platform:** ${machine.platform}\n\n---\n\n## 2. Reconnaissance & Nmap Scan Results\n\n${scanMd}\n`;
  }

  // Check if standard Recon section exists
  const reconHeaderRegex = /(## 2\. Reconnaissance & Nmap Scan Results[\s\S]*?)(?=---|\n## 3\.|\n## [0-9]|$)/i;
  const match = reconHeaderRegex.exec(existingMarkdown);

  if (match) {
    const currentRecon = match[1];
    // Check if the current section has the generic placeholder services
    const hasPlaceholder = currentRecon.includes('OpenSSH 8.4p1') && currentRecon.includes('Apache httpd 2.4.41');

    if (hasPlaceholder) {
      // Replace placeholder services with real scan
      const updatedRecon = `## 2. Reconnaissance & Nmap Scan Results\n### TCP Port Reconnaissance\n\`\`\`bash\n# Fast SYN and Service Version Detection\nnmap -sC -sV -Pn --min-rate 2000 -oN nmap_quick.txt ${machine.ip}\n\`\`\`\n\n${scanMd}\n\n`;
      return existingMarkdown.replace(reconHeaderRegex, updatedRecon);
    } else {
      // Append scan underneath existing custom recon notes
      const updatedRecon = `${currentRecon.trimEnd()}\n\n${scanMd}\n\n`;
      return existingMarkdown.replace(reconHeaderRegex, updatedRecon);
    }
  }

  // If no Recon header found, append cleanly
  return `${existingMarkdown.trimEnd()}\n\n---\n\n## 2. Reconnaissance & Nmap Scan Results\n${scanMd}\n`;
}

/**
 * Synchronize all machine imported data (open ports, credentials, field notes, CVEs)
 * into a writeup markdown string without destroying manual work.
 */
export function syncMachineDataIntoWriteup(existingMarkdown: string, machine: Machine): string {
  let updated = existingMarkdown || '';

  // 1. Check open ports
  if (machine.openPorts && machine.openPorts.length > 0) {
    const portsList = [...machine.openPorts].sort((a, b) => a - b);
    const realPortsSummary = `### Discovered Services (${portsList.length} Open Ports Detected):\n` +
      portsList.map((p) => `- **Port ${p}/tcp:** Open (Discovered during recon)`).join('\n');

    const servicesRegex = /### Discovered Services(?: \([^)]+\))?:\s*\n(?:- \*\*Port \d+\/(?:tcp|udp):\*\* [^\n]*\n?)+/i;
    if (servicesRegex.test(updated)) {
      updated = updated.replace(servicesRegex, `${realPortsSummary}\n`);
    } else if (updated.includes('## 2. Reconnaissance & Nmap Scan Results')) {
      if (updated.includes('### Web Directory & Endpoint Fuzzing')) {
        updated = updated.replace('### Web Directory & Endpoint Fuzzing', `${realPortsSummary}\n\n### Web Directory & Endpoint Fuzzing`);
      } else {
        updated = updated.replace('## 2. Reconnaissance & Nmap Scan Results', `## 2. Reconnaissance & Nmap Scan Results\n\n${realPortsSummary}\n`);
      }
    }
  }

  // 2. Check credentials & loot
  if (machine.credentials && machine.credentials.length > 0) {
    const credsMd = formatCredentialsMarkdownTable(machine.credentials);
    const hasCredsSection = updated.includes('Compromised Credentials & Loot Vault');

    if (hasCredsSection) {
      // Replace existing table
      const credsRegex = /### 🔑 Compromised Credentials & Loot Vault[\s\S]*?(?=---|\n## [0-9]|\n### |$)/i;
      updated = updated.replace(credsRegex, `${credsMd}\n\n`);
    } else {
      // Insert in Section 5 or at the end
      const sec5Regex = /## 5\.\s*Post-Exploitation Loot[^\n]*/i;
      if (sec5Regex.test(updated)) {
        updated = updated.replace(sec5Regex, (match) => `${match}\n\n${credsMd}\n`);
      } else {
        updated = `${updated.trimEnd()}\n\n---\n\n${credsMd}\n`;
      }
    }
  }

  // 3. Check CVEs
  const cves = extractMachineCves(machine);
  if (cves.length > 0) {
    const cvesMd = formatCvesMarkdownSection(cves);
    const hasCveSection = updated.includes('Associated CVE Intelligence');

    if (!hasCveSection) {
      const sec3Regex = /## 3\.\s*Vulnerability Analysis[^\n]*/i;
      if (sec3Regex.test(updated)) {
        updated = updated.replace(sec3Regex, (match) => `${match}\n\n${cvesMd}\n`);
      } else {
        updated = `${updated.trimEnd()}\n\n---\n\n${cvesMd}\n`;
      }
    }
  }

  // 4. Check Quick / Field Notes (if any and not already included)
  if (machine.quickNotes && machine.quickNotes.trim().length > 0) {
    const cleanNotes = machine.quickNotes.trim();
    if (!updated.includes(cleanNotes.slice(0, 40))) {
      const notesBlock = `\n\n### 📝 Operator Field Notes & Tactical Observations\n${cleanNotes}\n`;
      const sec3Regex = /## 3\.\s*Vulnerability Analysis[^\n]*/i;
      if (sec3Regex.test(updated)) {
        updated = updated.replace(sec3Regex, (match) => `${match}${notesBlock}`);
      } else {
        updated = `${updated.trimEnd()}\n\n---\n${notesBlock}`;
      }
    }
  }

  return updated;
}
