import React from 'react';
import { 
  FileText, 
  Check, 
  Copy, 
  Printer, 
  CheckCircle2, 
  AlertOctagon, 
  AlertCircle, 
  ShieldAlert, 
  Clock 
} from 'lucide-react';
import { Machine } from '../../../types';
import { formatSeconds } from '../../../utils/helpers';

interface MachineAuditReportTabProps {
  machine: Machine;
  onCopyReportMd: () => void;
  copiedReportMd: boolean;
  onSetReportMachineId: (id: string) => void;
}

export const MachineAuditReportTab: React.FC<MachineAuditReportTabProps> = ({
  machine,
  onCopyReportMd,
  copiedReportMd,
  onSetReportMachineId,
}) => {
  return (
    <div className="space-y-6">
      {/* Report Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 dark:bg-cyber-bg/80 border border-slate-200 dark:border-cyber-border">
        <div>
          <div className="text-[10px] text-purple-700 dark:text-purple-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" /> EXECUTIVE SECURITY ASSESSMENT PRE-REPORT
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>{machine.name}</span>
            <span className="text-slate-500 dark:text-cyber-muted font-normal text-xs font-mono">({machine.ip})</span>
          </h3>
          <div className="text-xs text-slate-600 dark:text-cyber-muted mt-1">
            Classification: <span className="text-amber-700 dark:text-cyber-amber font-semibold">CONFIDENTIAL // CLIENT PENETRATION AUDIT</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCopyReportMd}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border hover:border-cyan-500 text-slate-700 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white text-xs transition-colors"
          >
            {copiedReportMd ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedReportMd ? 'Copied' : 'Copy MD'}</span>
          </button>

          <button
            onClick={() => onSetReportMachineId(machine.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-950/50 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/60 font-bold text-xs transition-colors shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Threat Level & Severity Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border">
          <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold mb-1">COMPROMISE STATUS</div>
          <div className="text-sm font-bold flex items-center gap-2">
            {machine.status === 'completed' || machine.status === 'root' ? (
              <span className="text-emerald-700 dark:text-cyber-emerald flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> 100% ROOT PWNED
              </span>
            ) : machine.status === 'foothold' ? (
              <span className="text-amber-700 dark:text-cyber-amber flex items-center gap-1">
                <AlertOctagon className="w-4 h-4" /> FOOTHOLD OBTAINED
              </span>
            ) : (
              <span className="text-cyan-700 dark:text-cyber-cyan flex items-center gap-1">
                <AlertCircle className="w-4 h-4" /> RECON IN-PROGRESS
              </span>
            )}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border">
          <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold mb-1">RISK SEVERITY</div>
          <div className="text-sm font-bold text-rose-700 dark:text-cyber-crimson flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4" />
            <span>CVSS 9.4 CRITICAL</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border">
          <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold mb-1">TOTAL TIME LOGGED</div>
          <div className="text-sm font-bold text-cyan-700 dark:text-cyber-cyan flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{formatSeconds(machine.timeSpentSeconds)}</span>
          </div>
        </div>
      </div>

      {/* Executive Summary Narrative */}
      <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/60 border border-slate-200 dark:border-cyber-border space-y-2">
        <div className="text-[10px] uppercase font-bold text-cyan-800 dark:text-cyber-cyan tracking-wider">
          1. EXECUTIVE SUMMARY
        </div>
        <p className="text-slate-600 dark:text-cyber-muted leading-relaxed">
          During security validation on target host <strong className="text-slate-900 dark:text-white">{machine.name}</strong> ({machine.ip}), high-impact vulnerabilities were verified. Remote access vectors allowed adversaries to breach network perimeters and subsequently escalate privileges to root / system administrator.
        </p>
      </div>

      {/* Attack Path & Flag Proof of Compromise */}
      <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/60 border border-slate-200 dark:border-cyber-border space-y-3">
        <div className="text-[10px] uppercase font-bold text-emerald-800 dark:text-cyber-emerald tracking-wider">
          2. ATTACK CHAIN & PROOF OF COMPROMISE
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
          <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border">
            <div className="text-[10px] text-cyan-800 dark:text-cyber-cyan font-bold mb-1 flex items-center justify-between">
              <span>USER ACCESS FLAG</span>
              <span>{machine.userPwnedAt ? '✓ PWNED' : 'PENDING'}</span>
            </div>
            <div className="p-2 rounded bg-slate-100 dark:bg-cyber-bg text-slate-700 dark:text-cyber-muted text-[11px] truncate">
              {machine.userFlag || (machine.userPwnedAt ? 'HTB{user_flag_verified}' : 'Not Captured')}
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border">
            <div className="text-[10px] text-emerald-800 dark:text-cyber-emerald font-bold mb-1 flex items-center justify-between">
              <span>ROOT / SYSTEM FLAG</span>
              <span>{machine.rootPwnedAt ? '✓ ROOTED' : 'PENDING'}</span>
            </div>
            <div className="p-2 rounded bg-slate-100 dark:bg-cyber-bg text-slate-700 dark:text-cyber-muted text-[11px] truncate">
              {machine.rootFlag || (machine.rootPwnedAt ? 'HTB{root_flag_verified}' : 'Not Captured')}
            </div>
          </div>
        </div>

        {machine.quickNotes && (
          <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border space-y-1">
            <div className="text-[10px] text-slate-500 dark:text-cyber-muted font-bold uppercase">Assessor Field Notes:</div>
            <div className="text-slate-800 dark:text-white whitespace-pre-wrap">{machine.quickNotes}</div>
          </div>
        )}
      </div>

      {/* Remediation Action Plan */}
      <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/60 border border-slate-200 dark:border-cyber-border space-y-2">
        <div className="text-[10px] uppercase font-bold text-amber-800 dark:text-cyber-amber tracking-wider">
          3. STRATEGIC REMEDIATION ROADMAP
        </div>
        <ul className="space-y-1.5 text-slate-600 dark:text-cyber-muted list-disc list-inside">
          <li><strong className="text-slate-900 dark:text-white">Immediate:</strong> Terminate vulnerable listening services and patch software packages to stable releases.</li>
          <li><strong className="text-slate-900 dark:text-white">Defensive:</strong> Harden local sudoers configurations and eliminate unauthorized SUID binaries.</li>
          <li><strong className="text-slate-900 dark:text-white">Monitoring:</strong> Deploy SIEM ingestion for authentication failure telemetry and privilege escalation alerting.</li>
        </ul>
      </div>
    </div>
  );
};
