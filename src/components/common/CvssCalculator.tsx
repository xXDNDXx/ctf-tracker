import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  ShieldAlert, 
  Copy, 
  Check, 
  Sparkles, 
  RotateCcw, 
  FileText, 
  ExternalLink,
  Info,
  Sliders,
  ChevronDown
} from 'lucide-react';
import { 
  Cvss31Metrics, 
  Cvss31Result, 
  calculateCvss31, 
  parseCvssVector, 
  DEFAULT_CVSS_METRICS, 
  CVSS_PRESETS,
  getSeverityBadgeStyle,
  AttackVector,
  AttackComplexity,
  PrivilegesRequired,
  UserInteraction,
  Scope,
  CiaImpact
} from '../../utils/cvssUtils';
import { safeCopyToClipboard, playCyberSound } from '../../utils/helpers';
import { useCtfStore } from '../../store/useCtfStore';

interface CvssCalculatorProps {
  initialVector?: string | null;
  onVectorChange?: (result: Cvss31Result) => void;
  onInsertIntoWriteup?: (markdown: string) => void;
  isCompact?: boolean;
}

export const CvssCalculator: React.FC<CvssCalculatorProps> = ({
  initialVector,
  onVectorChange,
  onInsertIntoWriteup,
  isCompact = false,
}) => {
  const soundEnabled = useCtfStore((s) => s.soundEnabled);
  const [metrics, setMetrics] = useState<Cvss31Metrics>(() => {
    if (initialVector) {
      const parsed = parseCvssVector(initialVector);
      if (parsed) return parsed;
    }
    return DEFAULT_CVSS_METRICS;
  });

  const lastNotifiedVectorRef = useRef<string>('');
  const onVectorChangeRef = useRef(onVectorChange);
  onVectorChangeRef.current = onVectorChange;

  const [copiedVector, setCopiedVector] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [selectedPresetId, setSelectedPresetId] = useState<string>('');

  const result = useMemo(() => {
    return calculateCvss31(metrics);
  }, [metrics]);

  useEffect(() => {
    if (initialVector && initialVector !== result.vectorString) {
      const parsed = parseCvssVector(initialVector);
      if (parsed) {
        setMetrics(parsed);
      }
    }
  }, [initialVector, result.vectorString]);

  useEffect(() => {
    if (result.vectorString !== lastNotifiedVectorRef.current) {
      lastNotifiedVectorRef.current = result.vectorString;
      onVectorChangeRef.current?.(result);
    }
  }, [result]);

  const badgeStyle = useMemo(() => {
    return getSeverityBadgeStyle(result.severity);
  }, [result.severity]);

  const handleMetricChange = <K extends keyof Cvss31Metrics>(key: K, val: Cvss31Metrics[K]) => {
    setMetrics((prev) => ({ ...prev, [key]: val }));
    setSelectedPresetId('');
    if (soundEnabled) playCyberSound('click');
  };

  const handleApplyPreset = (presetId: string) => {
    const p = CVSS_PRESETS.find((x) => x.id === presetId);
    if (!p) return;
    setMetrics(p.metrics);
    setSelectedPresetId(presetId);
    if (soundEnabled) playCyberSound('flag');
  };

  const handleCopyVector = async () => {
    await safeCopyToClipboard(result.vectorString);
    setCopiedVector(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedVector(false), 2000);
  };

  const handleCopyMarkdown = async () => {
    const md = `### 🛡️ Vulnerability Severity Assessment
- **CVSS v3.1 Base Score:** \`${result.baseScore.toFixed(1)}\` (**${result.severity}**)
- **Vector String:** \`${result.vectorString}\`
- **Exploitability Sub-Score:** \`${result.exploitabilitySubScore.toFixed(1)}\` | **Impact Sub-Score:** \`${result.impactSubScore.toFixed(1)}\`
`;
    await safeCopyToClipboard(md);
    setCopiedMarkdown(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const handleInsert = () => {
    if (!onInsertIntoWriteup) return;
    const md = `\n\n### 🛡️ Vulnerability Severity Assessment (CVSS v3.1)
| Metric | Value |
| :--- | :--- |
| **Base Score** | **\`${result.baseScore.toFixed(1)}\` (${result.severity})** |
| **CVSS 3.1 Vector** | \`${result.vectorString}\` |
| **Impact Subscore** | \`${result.impactSubScore.toFixed(1)}\` |
| **Exploitability Subscore** | \`${result.exploitabilitySubScore.toFixed(1)}\` |
`;
    onInsertIntoWriteup(md);
    if (soundEnabled) playCyberSound('root');
  };

  return (
    <div className="flex flex-col gap-4 font-mono text-xs">
      {/* Top Header & Gauge Display */}
      <div className="rounded-xl border border-cyber-border bg-[#080d19] p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
        {/* Left: Big Score Display */}
        <div className="flex items-center gap-4">
          <div className={`flex flex-col items-center justify-center w-24 h-24 rounded-xl border ${badgeStyle.border} ${badgeStyle.bg} shadow-inner`}>
            <span className={`text-3xl font-extrabold ${badgeStyle.text} tracking-tight`}>
              {result.baseScore.toFixed(1)}
            </span>
            <span className={`text-[10px] font-black uppercase tracking-widest ${badgeStyle.text} mt-0.5`}>
              {result.severity}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white tracking-wide">
                CVSS v3.1 BASE SCORE CALCULATOR
              </h4>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyber-cyan border border-cyan-500/30">
                FIRST.ORG COMPLIANT
              </span>
            </div>
            <div className="text-[11px] text-cyber-muted mt-1 font-mono break-all select-all">
              <span className="text-slate-400 font-bold">Vector:</span> <code className="text-cyber-cyan font-bold">{result.vectorString}</code>
            </div>
            <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-500 dark:text-slate-400">
              <span>Impact: <strong className="text-slate-900 dark:text-white">{result.impactSubScore.toFixed(1)}</strong></span>
              <span>&bull;</span>
              <span>Exploitability: <strong className="text-slate-900 dark:text-white">{result.exploitabilitySubScore.toFixed(1)}</strong></span>
              <span>&bull;</span>
              <span>Scope: <strong className={metrics.scope === 'C' ? 'text-amber-600 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}>{metrics.scope === 'C' ? 'Changed' : 'Unchanged'}</strong></span>
            </div>
          </div>
        </div>

        {/* Right: Quick Actions */}
        <div className="flex flex-wrap items-center gap-2 self-stretch md:self-auto justify-end">
          <button
            onClick={handleCopyVector}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all flex items-center gap-1.5 border ${
              copiedVector
                ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/40'
                : 'bg-cyan-50 dark:bg-cyber-cyan/10 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyber-cyan text-cyan-900 dark:text-cyber-cyan dark:hover:text-black border-cyan-300 dark:border-cyber-cyan/30'
            }`}
          >
            {copiedVector ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedVector ? 'Copied Vector' : 'Copy Vector'}
          </button>

          <button
            onClick={handleCopyMarkdown}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all flex items-center gap-1.5 border ${
              copiedMarkdown
                ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/40'
                : 'bg-slate-100 dark:bg-cyber-card hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 border-slate-300 dark:border-cyber-border'
            }`}
          >
            {copiedMarkdown ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <FileText className="w-3.5 h-3.5" />}
            {copiedMarkdown ? 'Copied MD' : 'Copy Markdown'}
          </button>

          {onInsertIntoWriteup && (
            <button
              onClick={handleInsert}
              className="px-3 py-1.5 rounded text-xs font-bold bg-emerald-100 dark:bg-emerald-500/20 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 text-emerald-900 dark:text-emerald-400 dark:hover:text-black border border-emerald-300 dark:border-emerald-500/40 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" /> Insert Into Writeup
            </button>
          )}
        </div>
      </div>

      {/* Preset Archetypes Bar */}
      <div className="bg-slate-100 dark:bg-[#0b101d] px-4 py-2 rounded-lg border border-slate-200 dark:border-cyber-border flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-[11px] text-slate-500 dark:text-cyber-muted uppercase font-bold tracking-wider flex items-center gap-1 flex-shrink-0">
          <Sparkles className="w-3 h-3 text-cyan-600 dark:text-cyber-cyan" /> Attack Presets:
        </span>
        {CVSS_PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => handleApplyPreset(p.id)}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold border transition-all whitespace-nowrap ${
              selectedPresetId === p.id
                ? 'bg-cyan-600 dark:bg-cyber-cyan text-white dark:text-black border-cyan-600 dark:border-cyber-cyan font-bold shadow-sm'
                : 'bg-white dark:bg-cyber-card hover:bg-cyan-50 dark:hover:bg-cyber-cyan/15 text-slate-700 dark:text-slate-300 hover:text-cyan-800 dark:hover:text-cyber-cyan border-slate-300 dark:border-cyber-border'
            }`}
          >
            {p.name.split(' (')[0]}
          </button>
        ))}
        <button
          onClick={() => {
            setMetrics(DEFAULT_CVSS_METRICS);
            setSelectedPresetId('');
            if (soundEnabled) playCyberSound('click');
          }}
          className="ml-auto px-2 py-1 rounded text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white text-[11px] flex items-center gap-1 transition-colors flex-shrink-0"
          title="Reset to default"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Metric Selectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Metric Group 1: Exploitability Metrics */}
        <div className="rounded-xl border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-[#080d19] p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-cyber-border pb-2">
            <h5 className="text-xs font-bold text-cyan-800 dark:text-cyber-cyan uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" /> 1. Exploitability Metrics
            </h5>
            <span className="text-[10px] text-slate-500 dark:text-cyber-muted">Vector & Difficulty</span>
          </div>

          {/* Attack Vector (AV) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-800 dark:text-slate-300 mb-1.5" id="cvss-av-label">
              Attack Vector (AV):
            </label>
            <div className="grid grid-cols-4 gap-1.5" role="radiogroup" aria-labelledby="cvss-av-label">
              {[
                { val: 'N', label: 'Network (N)', desc: 'Remotely exploitable across internet/subnet' },
                { val: 'A', label: 'Adjacent (A)', desc: 'Local subnet or broadcast domain' },
                { val: 'L', label: 'Local (L)', desc: 'Requires local interactive shell' },
                { val: 'P', label: 'Physical (P)', desc: 'Requires physical device access' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  role="radio"
                  aria-checked={metrics.av === opt.val}
                  onClick={() => handleMetricChange('av', opt.val as AttackVector)}
                  title={opt.desc}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    metrics.av === opt.val
                      ? 'bg-cyan-600 dark:bg-cyber-cyan text-white dark:text-black border-cyan-600 dark:border-cyber-cyan shadow-sm'
                      : 'bg-white dark:bg-cyber-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {opt.val} &middot; {opt.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Attack Complexity (AC) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-800 dark:text-slate-300 mb-1.5" id="cvss-ac-label">
              Attack Complexity (AC):
            </label>
            <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-labelledby="cvss-ac-label">
              {[
                { val: 'L', label: 'Low (L)', desc: 'No specialized conditions or race conditions' },
                { val: 'H', label: 'High (H)', desc: 'Depends on conditions outside attacker control' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  role="radio"
                  aria-checked={metrics.ac === opt.val}
                  onClick={() => handleMetricChange('ac', opt.val as AttackComplexity)}
                  title={opt.desc}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    metrics.ac === opt.val
                      ? 'bg-cyan-600 dark:bg-cyber-cyan text-white dark:text-black border-cyan-600 dark:border-cyber-cyan shadow-sm'
                      : 'bg-white dark:bg-cyber-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Privileges Required (PR) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-800 dark:text-slate-300 mb-1.5" id="cvss-pr-label">
              Privileges Required (PR):
            </label>
            <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-labelledby="cvss-pr-label">
              {[
                { val: 'N', label: 'None (N)', desc: 'Unauthenticated / Anonymous access' },
                { val: 'L', label: 'Low (L)', desc: 'Standard low-privilege operator account' },
                { val: 'H', label: 'High (H)', desc: 'Requires administrative or root privileges' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  role="radio"
                  aria-checked={metrics.pr === opt.val}
                  onClick={() => handleMetricChange('pr', opt.val as PrivilegesRequired)}
                  title={opt.desc}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    metrics.pr === opt.val
                      ? 'bg-cyan-600 dark:bg-cyber-cyan text-white dark:text-black border-cyan-600 dark:border-cyber-cyan shadow-sm'
                      : 'bg-white dark:bg-cyber-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* User Interaction (UI) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-800 dark:text-slate-300 mb-1.5" id="cvss-ui-label">
              User Interaction (UI):
            </label>
            <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-labelledby="cvss-ui-label">
              {[
                { val: 'N', label: 'None (N)', desc: 'System compromised without victim action' },
                { val: 'R', label: 'Required (R)', desc: 'Requires victim to click link or open file' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  role="radio"
                  aria-checked={metrics.ui === opt.val}
                  onClick={() => handleMetricChange('ui', opt.val as UserInteraction)}
                  title={opt.desc}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    metrics.ui === opt.val
                      ? 'bg-cyan-600 dark:bg-cyber-cyan text-white dark:text-black border-cyan-600 dark:border-cyber-cyan shadow-sm'
                      : 'bg-white dark:bg-cyber-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Metric Group 2: Scope & Impact Metrics */}
        <div className="rounded-xl border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-[#080d19] p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-cyber-border pb-2">
            <h5 className="text-xs font-bold text-purple-800 dark:text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" /> 2. Scope & CIA Impact Metrics
            </h5>
            <span className="text-[10px] text-slate-500 dark:text-cyber-muted">Damage Potential</span>
          </div>

          {/* Scope (S) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-800 dark:text-slate-300 mb-1.5" id="cvss-s-label">
              Scope (S):
            </label>
            <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-labelledby="cvss-s-label">
              {[
                { val: 'U', label: 'Unchanged (U)', desc: 'Impact restricted to same security authority' },
                { val: 'C', label: 'Changed (C)', desc: 'Escapes boundary (e.g. VM escape, SSRF, XSS)' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  role="radio"
                  aria-checked={metrics.scope === opt.val}
                  onClick={() => handleMetricChange('scope', opt.val as Scope)}
                  title={opt.desc}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    metrics.scope === opt.val
                      ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-black border-purple-500 dark:border-purple-400 font-bold shadow-sm'
                      : 'bg-white dark:bg-cyber-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Confidentiality Impact (C) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-800 dark:text-slate-300 mb-1.5" id="cvss-c-label">
              Confidentiality Impact (C):
            </label>
            <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-labelledby="cvss-c-label">
              {[
                { val: 'N', label: 'None (N)' },
                { val: 'L', label: 'Low (L)' },
                { val: 'H', label: 'High (H)' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  role="radio"
                  aria-checked={metrics.c === opt.val}
                  onClick={() => handleMetricChange('c', opt.val as CiaImpact)}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    metrics.c === opt.val
                      ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-black border-purple-500 dark:border-purple-400 font-bold shadow-sm'
                      : 'bg-white dark:bg-cyber-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Integrity Impact (I) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-800 dark:text-slate-300 mb-1.5" id="cvss-i-label">
              Integrity Impact (I):
            </label>
            <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-labelledby="cvss-i-label">
              {[
                { val: 'N', label: 'None (N)' },
                { val: 'L', label: 'Low (L)' },
                { val: 'H', label: 'High (H)' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  role="radio"
                  aria-checked={metrics.i === opt.val}
                  onClick={() => handleMetricChange('i', opt.val as CiaImpact)}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    metrics.i === opt.val
                      ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-black border-purple-500 dark:border-purple-400 font-bold shadow-sm'
                      : 'bg-white dark:bg-cyber-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Availability Impact (A) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-800 dark:text-slate-300 mb-1.5" id="cvss-a-label">
              Availability Impact (A):
            </label>
            <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-labelledby="cvss-a-label">
              {[
                { val: 'N', label: 'None (N)' },
                { val: 'L', label: 'Low (L)' },
                { val: 'H', label: 'High (H)' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  role="radio"
                  aria-checked={metrics.a === opt.val}
                  onClick={() => handleMetricChange('a', opt.val as CiaImpact)}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    metrics.a === opt.val
                      ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-black border-purple-500 dark:border-purple-400 font-bold shadow-sm'
                      : 'bg-white dark:bg-cyber-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
