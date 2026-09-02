import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Key, 
  ExternalLink, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle,
  Copy,
  Terminal,
  Zap
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useCtfStore } from '../../store/useCtfStore';
import { playCyberSound } from '../../utils/helpers';

interface GoogleOAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchLogin: (clientId: string) => void;
}

export const GoogleOAuthModal: React.FC<GoogleOAuthModalProps> = ({
  isOpen,
  onClose,
  onLaunchLogin,
}) => {
  const { googleClientId, setGoogleClientId, simulateGoogleLogin } = useAuthStore();
  const soundEnabled = useCtfStore((s) => s.soundEnabled);
  const [inputClientId, setInputClientId] = useState(googleClientId || '');
  const [copiedOrigin, setCopiedOrigin] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';

  const handleCopyOrigin = () => {
    navigator.clipboard.writeText(currentOrigin);
    setCopiedOrigin(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedOrigin(false), 2000);
  };

  const handleSaveAndLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = inputClientId.trim();
    if (!cleanId) return;

    setGoogleClientId(cleanId);
    setSaveSuccess(true);
    if (soundEnabled) playCyberSound('engage');

    setTimeout(() => {
      onClose();
      onLaunchLogin(cleanId);
    }, 500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md font-mono"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-xl rounded-2xl border border-cyber-border bg-cyber-card shadow-2xl overflow-hidden relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyber-border bg-cyber-bg/95">
          <div className="flex items-center gap-2.5">
            {/* Official Google 4-Color Icon */}
            <div className="w-8 h-8 rounded-lg bg-white p-1.5 flex items-center justify-center shadow-md">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-wide">
                REAL GOOGLE OAUTH 2.0 SETUP
              </h2>
              <p className="text-[11px] text-cyber-muted">
                Connect your Google Cloud OAuth Client ID for real Google account sign-in
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-cyber-border bg-cyber-bg text-cyber-muted hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4 text-xs">
          {/* Quick Guide */}
          <div className="p-3.5 rounded-xl bg-cyber-bg border border-cyber-border/80 space-y-2">
            <div className="font-bold text-white flex items-center justify-between">
              <span>HOW TO GET YOUR CLIENT ID (60 SECONDS):</span>
              <a
                href="https://console.cloud.google.com/apis/credentials"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-cyan hover:underline flex items-center gap-1 text-[11px]"
              >
                Google Cloud Console <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-cyber-muted text-[11px] leading-relaxed">
              <li>Open Google Cloud Console ➔ <strong>APIs & Services ➔ Credentials</strong></li>
              <li>Click <strong>+ CREATE CREDENTIALS ➔ OAuth client ID</strong></li>
              <li>Application type: <strong>Web application</strong></li>
              <li>
                In <strong>Authorized JavaScript origins</strong>, add this exact URL:
                <div className="mt-1 flex items-center gap-2 bg-cyber-card p-1.5 px-2.5 rounded border border-cyber-border font-mono text-white text-[11px]">
                  <span className="text-cyber-emerald flex-1 select-all">{currentOrigin}</span>
                  <button
                    onClick={handleCopyOrigin}
                    className="text-cyber-muted hover:text-cyber-cyan flex items-center gap-1"
                    title="Copy origin URL"
                  >
                    {copiedOrigin ? <Check className="w-3 h-3 text-cyber-emerald" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedOrigin ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </li>
              <li>Click <strong>Create</strong>, copy the Client ID, and paste it below:</li>
            </ol>
          </div>

          {/* Form */}
          <form onSubmit={handleSaveAndLaunch} className="space-y-3">
            <div>
              <label className="block text-cyber-muted uppercase text-[10px] font-bold mb-1">
                GOOGLE OAUTH CLIENT ID:
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-cyber-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={inputClientId}
                  onChange={(e) => setInputClientId(e.target.value)}
                  placeholder="e.g. 123456789-abcdef123456.apps.googleusercontent.com"
                  className="w-full bg-cyber-bg pl-9 pr-3 py-2.5 rounded-xl border border-cyber-border text-white text-xs font-mono focus:outline-none focus:border-cyber-emerald transition-all"
                  autoFocus
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="submit"
                disabled={!inputClientId.trim()}
                className="flex-1 py-2.5 px-4 rounded-xl bg-cyber-emerald hover:bg-cyber-emerald/90 text-black font-bold text-xs transition-all shadow-glow-emerald/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>LAUNCHING GOOGLE LOGIN...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>CONNECT & LAUNCH REAL GOOGLE LOGIN</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Or instant test login */}
          <div className="pt-2 border-t border-cyber-border/70 flex items-center justify-between text-[11px] text-cyber-muted">
            <span>Want to preview authenticated mode first?</span>
            <button
              onClick={() => {
                simulateGoogleLogin();
                onClose();
              }}
              className="text-cyber-cyan hover:underline font-semibold flex items-center gap-1"
            >
              <Zap className="w-3 h-3 text-cyber-cyan" />
              <span>Instant Test Account (Daniel)</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
