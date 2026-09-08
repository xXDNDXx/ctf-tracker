import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  BarChart3, 
  ExternalLink, 
  Copy, 
  Check, 
  Globe, 
  Radio, 
  Sparkles, 
  Users, 
  Share2, 
  ShieldCheck, 
  TrendingUp,
  Flame
} from 'lucide-react';
import { 
  getTrafficStats, 
  recordCurrentVisit, 
  generateCampaignLink, 
  SUPPORTED_PLATFORMS, 
  TrafficPlatform,
  GOATCOUNTER_DASHBOARD_URL,
  GOATCOUNTER_SITE_CODE 
} from '../../utils/trafficTracker';
import { playCyberSound, safeCopyToClipboard } from '../../utils/helpers';
import { useModalA11y } from '../../hooks/useModalA11y';

interface TrafficModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrafficModal: React.FC<TrafficModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [stats, setStats] = useState(getTrafficStats());
  const [activeTab, setActiveTab] = useState<'campaigns' | 'stats'>('campaigns');
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useModalA11y({
    isOpen,
    onClose,
    modalRef: modalContainerRef,
  });

  useEffect(() => {
    if (!isOpen) return;
    const current = recordCurrentVisit();
    setStats(current.stats);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = async (platform: TrafficPlatform) => {
    const link = generateCampaignLink(platform);
    await safeCopyToClipboard(link);
    setCopiedKey(platform);
    playCyberSound('copy');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const platformsList = Object.keys(SUPPORTED_PLATFORMS) as TrafficPlatform[];
  const totalTracked = stats.totalVisits;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
    >
      <div
        ref={modalContainerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="traffic-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-cyber-cyan/40 bg-cyber-card shadow-2xl shadow-cyan-950/40 overflow-hidden font-sans"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-cyber-bg border-b border-cyber-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="traffic-modal-title" className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-wider">
                  Traffic & Platform Click Telemetry
                </h2>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>
              <p className="text-xs text-cyber-muted">
                Track how many visitors click your links across LinkedIn, GitHub, Twitter/X, and Discord
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close traffic telemetry modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center px-5 pt-3 border-b border-cyber-border bg-slate-950/40 gap-2">
          <button
            onClick={() => { setActiveTab('campaigns'); playCyberSound('click'); }}
            className={`pb-2.5 px-3 text-xs font-mono font-medium border-b-2 transition-all cursor-pointer ${
              activeTab === 'campaigns'
                ? 'border-cyber-cyan text-cyber-cyan font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Platform Share Links (1-Click)
          </button>
          <button
            onClick={() => { setActiveTab('stats'); playCyberSound('click'); }}
            className={`pb-2.5 px-3 text-xs font-mono font-medium border-b-2 transition-all cursor-pointer ${
              activeTab === 'stats'
                ? 'border-cyber-cyan text-cyber-cyan font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Platform Click Breakdown
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* GoatCounter External Live Dashboard Callout */}
          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-300">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GOATCOUNTER PUBLIC / PRIVATE ANALYTICS</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                ZeroBox is integrated with GoatCounter (privacy-first, zero cookies). View detailed graphs of total clicks, referring websites, devices, and countries.
              </p>
            </div>
            <a
              href={GOATCOUNTER_DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-300 hover:text-white text-xs font-mono font-bold transition-all shrink-0"
            >
              <span>Open Dashboard</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {activeTab === 'campaigns' ? (
            <div className="space-y-3">
              <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                <Share2 className="w-4 h-4 text-cyber-cyan" />
                <span>Copy these special links when sharing to track clicks by platform:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {platformsList
                  .filter((p) => p !== 'direct' && p !== 'other')
                  .map((p) => {
                    const info = SUPPORTED_PLATFORMS[p];
                    const count = stats.platforms[p] || 0;
                    const isCopied = copiedKey === p;

                    return (
                      <div
                        key={p}
                        className="p-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: info.color }}
                            />
                            <span className="font-bold text-xs text-white font-mono">
                              {info.label}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-black/50 text-slate-400 border border-slate-800">
                              {count} {count === 1 ? 'click' : 'clicks'}
                            </span>
                          </div>
                          <div className="text-[10px] font-mono text-slate-500 truncate">
                            {generateCampaignLink(p)}
                          </div>
                        </div>

                        <button
                          onClick={() => handleCopyLink(p)}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1 transition-all shrink-0 cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-300'
                              : 'bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white'
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>COPY</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl border border-cyber-border bg-slate-900/60 text-center">
                  <div className="text-[10px] font-mono text-cyber-muted uppercase">Total Sessions</div>
                  <div className="text-xl font-bold font-mono text-cyber-cyan mt-1">
                    {totalTracked.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-cyber-border bg-slate-900/60 text-center">
                  <div className="text-[10px] font-mono text-cyber-muted uppercase">Top Platform</div>
                  <div className="text-xs font-bold font-mono text-white mt-2 truncate">
                    {(() => {
                      const top = platformsList.reduce((best, curr) =>
                        (stats.platforms[curr] || 0) > (stats.platforms[best] || 0) ? curr : best
                      , 'direct');
                      return SUPPORTED_PLATFORMS[top]?.label || 'Direct';
                    })()}
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-cyber-border bg-slate-900/60 text-center">
                  <div className="text-[10px] font-mono text-cyber-muted uppercase">Active Session</div>
                  <div className="text-xs font-bold font-mono text-emerald-400 mt-2 truncate">
                    {SUPPORTED_PLATFORMS[stats.detectedThisSession || 'direct']?.label}
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-cyber-border bg-slate-900/60 text-center">
                  <div className="text-[10px] font-mono text-cyber-muted uppercase">Telemetry Mode</div>
                  <div className="text-xs font-bold font-mono text-purple-400 mt-2 truncate">
                    Privacy-First
                  </div>
                </div>
              </div>

              {/* Progress bars by platform */}
              <div className="space-y-2.5">
                {platformsList.map((p) => {
                  const info = SUPPORTED_PLATFORMS[p];
                  const count = stats.platforms[p] || 0;
                  const pct = totalTracked > 0 ? Math.round((count / totalTracked) * 100) : 0;

                  return (
                    <div key={p} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: info.color }}
                          />
                          <span className="text-slate-300">{info.label}</span>
                        </div>
                        <div className="text-slate-400">
                          <span className="font-bold text-white">{count}</span>
                          <span className="text-[10px] text-slate-500 ml-1">({pct}%)</span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: info.color,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 bg-cyber-bg border-t border-cyber-border text-xs text-cyber-muted font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>GDPR-Compliant &middot; Zero Fingerprinting &middot; No Cookies</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
