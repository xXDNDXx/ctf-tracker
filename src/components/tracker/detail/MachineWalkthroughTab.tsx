import React from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Check, 
  Copy, 
  FileText, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { Machine } from '../../../types';
import { safeCopyToClipboard, playCyberSound } from '../../../utils/helpers';

interface MachineWalkthroughTabProps {
  machine: Machine;
  soundEnabled: boolean;
  copiedWalkthrough: boolean;
  setCopiedWalkthrough: (copied: boolean) => void;
  onSetPdfModalMachineId: (id: string) => void;
  onOpenInWriteup: () => void;
}

export const MachineWalkthroughTab: React.FC<MachineWalkthroughTabProps> = ({
  machine,
  soundEnabled,
  copiedWalkthrough,
  setCopiedWalkthrough,
  onSetPdfModalMachineId,
  onOpenInWriteup,
}) => {
  if (machine.isActive) {
    return (
      <div className="p-8 rounded-xl border border-amber-500/40 bg-amber-950/20 text-center space-y-3 font-mono">
        <Lock className="w-8 h-8 text-amber-400 mx-auto" />
        <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
          Active Lab · Walkthroughs Strictly Prohibited
        </h3>
        <p className="text-xs text-cyber-muted max-w-md mx-auto">
          Hack The Box Acceptable Use Policy (§8.2) strictly prohibits walkthroughs, writeups, and solutions for active seasonal content.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50/90 dark:bg-cyber-bg/90 border border-emerald-400/50 dark:border-cyber-emerald/40 shadow-glow-emerald/10">
        <div>
          <div className="text-[10px] text-emerald-800 dark:text-cyber-emerald font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-cyber-emerald" /> OFFICIAL HACK THE BOX INTELLIGENCE BRIEFING
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>{machine.name}</span>
            <span className="text-slate-500 dark:text-cyber-muted font-normal text-xs font-mono">({machine.ip})</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/20 text-emerald-900 dark:text-cyber-emerald font-bold border border-emerald-300 dark:border-cyber-emerald/40">
              OFFICIAL HTB
            </span>
          </h3>
          {machine.officialPdf && (
            <div className="text-xs text-slate-500 dark:text-cyber-muted mt-1 flex items-center gap-1.5">
              <span>Source Archive:</span>
              <span className="text-cyan-800 dark:text-cyber-cyan font-mono text-[11px] bg-white dark:bg-cyber-card px-1.5 py-0.5 rounded border border-slate-200 dark:border-cyber-border">
                {machine.officialPdf}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {machine.officialWalkthrough && (
            <button
              onClick={async () => {
                if (machine.officialWalkthrough) {
                  await safeCopyToClipboard(machine.officialWalkthrough);
                  setCopiedWalkthrough(true);
                  if (soundEnabled) playCyberSound('copy');
                  setTimeout(() => setCopiedWalkthrough(false), 2000);
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border hover:border-emerald-500 text-slate-700 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white text-xs transition-colors"
            >
              {copiedWalkthrough ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedWalkthrough ? 'Copied' : 'Copy Walkthrough'}</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => onSetPdfModalMachineId(machine.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyber-cyan/15 border border-cyan-300 dark:border-cyber-cyan/40 text-cyan-900 dark:text-cyber-cyan hover:bg-cyan-500 hover:text-white dark:hover:bg-cyber-cyan dark:hover:text-black font-bold text-xs transition-all shadow-sm"
            title="Open HTB Writeup PDF Viewer & Manager"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{machine.officialPdf ? 'View HTB PDF' : 'Attach / View PDF'}</span>
          </button>
          <button
            onClick={onOpenInWriteup}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-cyber-emerald/20 border border-emerald-300 dark:border-cyber-emerald/50 text-emerald-900 dark:text-cyber-emerald hover:bg-emerald-500 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black font-bold text-xs transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Writeup Studio</span>
          </button>
        </div>
      </div>

      {/* Section 1: Official Synopsis */}
      {machine.officialSynopsis && (
        <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/70 border border-slate-200 dark:border-cyber-border space-y-2">
          <div className="text-[10px] uppercase font-bold text-cyan-800 dark:text-cyber-cyan tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyber-cyan" /> OFFICIAL SYNOPSIS & THREAT OVERVIEW
          </div>
          <p className="text-slate-800 dark:text-white text-xs sm:text-sm leading-relaxed font-sans font-normal">
            {machine.officialSynopsis}
          </p>
        </div>
      )}

      {/* Section 2: Core Skills Learned */}
      {machine.skillsLearned && machine.skillsLearned.length > 0 && (
        <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/70 border border-slate-200 dark:border-cyber-border space-y-2.5">
          <div className="text-[10px] uppercase font-bold text-emerald-800 dark:text-cyber-emerald tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" /> TARGET SKILLS REQUIRED & LEARNED
          </div>
          <div className="flex flex-wrap gap-2">
            {machine.skillsLearned.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-cyber-emerald/10 border border-emerald-300 dark:border-cyber-emerald/30 text-emerald-900 dark:text-cyber-emerald text-xs font-medium flex items-center gap-1.5"
              >
                <Check className="w-3 h-3 text-emerald-600 dark:text-cyber-emerald stroke-[2.5]" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Section 3: Full Structured Walkthrough */}
      {machine.officialWalkthrough && (
        <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/70 border border-slate-200 dark:border-cyber-border space-y-3">
          <div className="text-[10px] uppercase font-bold text-purple-700 dark:text-purple-400 tracking-wider flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> TACTICAL EXPLOITATION WALKTHROUGH
          </div>
          <div className="prose prose-invert max-w-none text-xs leading-relaxed text-slate-700 dark:text-cyber-muted space-y-4 font-sans">
            {machine.officialWalkthrough.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('### ')) {
                const title = paragraph.replace('### ', '');
                return (
                  <div key={pIdx} className="pt-2 border-b border-slate-200 dark:border-cyber-border/60 pb-1 text-sm font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
                    <span>{title}</span>
                  </div>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={pIdx} className="list-disc list-inside space-y-1 text-slate-700 dark:text-cyber-muted">
                    {items.map((it, itIdx) => (
                      <li key={itIdx} className="text-slate-900 dark:text-white">
                        {it.replace(/^- \*\*(.*?)\*\*$/, '$1').replace(/^- /, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={pIdx} className="text-slate-800 dark:text-cyber-muted font-mono leading-relaxed bg-white dark:bg-cyber-card/60 p-3 rounded-lg border border-slate-200 dark:border-cyber-border/40 text-xs">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
