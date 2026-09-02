import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  User, 
  Mail, 
  Shield, 
  Terminal, 
  ChevronDown, 
  ChevronUp, 
  Key, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  Zap
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useCtfStore } from '../../store/useCtfStore';
import { playCyberSound } from '../../utils/helpers';
import { CyberLogo } from '../common/CyberLogo';

interface GoogleOAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchLogin: (clientId?: string) => void;
}

const AVATARS = [
  { id: '1', url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80', label: 'Operator' },
  { id: '2', url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80', label: 'Hacker' },
  { id: '3', url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80', label: 'Analyst' },
  { id: '4', url: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=80', label: 'Red Team' },
];

export const GoogleOAuthModal: React.FC<GoogleOAuthModalProps> = ({
  isOpen,
  onClose,
  onLaunchLogin,
}) => {
  const { googleClientId, setGoogleClientId, loginAsOperator, isLoading } = useAuthStore();
  const soundEnabled = useCtfStore((s) => s.soundEnabled);

  // Simple Operator Login State
  const [operatorName, setOperatorName] = useState('Daniel');
  const [operatorEmail, setOperatorEmail] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0].url);

  // Advanced Google Cloud Client ID accordion (collapsed by default)
  const [showAdvancedGoogle, setShowAdvancedGoogle] = useState(false);
  const [inputClientId, setInputClientId] = useState(googleClientId || '');
  const [copiedOrigin, setCopiedOrigin] = useState(false);

  if (!isOpen) return null;

  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';

  const handleSimpleOperatorLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!operatorName.trim()) return;

    await loginAsOperator(operatorName, operatorEmail, selectedAvatar);
    if (soundEnabled) playCyberSound('root');
    onClose();
  };

  const handleGoogleClick = () => {
    if (googleClientId) {
      onLaunchLogin(googleClientId);
      onClose();
    } else {
      setShowAdvancedGoogle(true);
    }
  };

  const handleSaveGoogleClientId = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = inputClientId.trim();
    if (!cleanId) return;

    setGoogleClientId(cleanId);
    if (soundEnabled) playCyberSound('engage');
    onClose();
    onLaunchLogin(cleanId);
  };

  const handleCopyOrigin = () => {
    navigator.clipboard.writeText(currentOrigin);
    setCopiedOrigin(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedOrigin(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md font-mono p-3 sm:p-6 flex min-h-full items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.15 }}
        className="relative w-full max-w-md my-auto bg-cyber-card border border-cyber-border rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Modal Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-cyber-border bg-cyber-bg/95">
          <div className="flex items-center gap-2.5">
            <CyberLogo size="sm" />
            <div>
              <h2 className="text-sm font-bold text-white tracking-wide">
                OPERATOR AUTHENTICATION
              </h2>
              <p className="text-[10px] text-cyber-muted">
                Sign in to save your CTF progress & sync across sessions
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-cyber-border bg-cyber-bg text-cyber-muted hover:text-white hover:border-cyber-cyan transition-colors"
            title="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-4 sm:p-5 space-y-4 text-xs overflow-y-auto max-h-[80vh]">
          {/* 1. Fast Google Sign-In Button */}
          <div className="space-y-1.5">
            <button
              onClick={handleGoogleClick}
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2.5 border border-gray-300 group"
            >
              {/* Official Google 4-Color Icon */}
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
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
              <span>Sign in with Google</span>
            </button>
          </div>

          {/* Clean Divider */}
          <div className="relative flex items-center justify-center my-3">
            <div className="border-t border-cyber-border w-full" />
            <span className="bg-cyber-card px-2 text-[10px] uppercase font-bold text-cyber-muted tracking-wider absolute">
              OR SIMPLE LOGIN
            </span>
          </div>

          {/* 2. Simple Operator Login Form */}
          <form onSubmit={handleSimpleOperatorLogin} className="space-y-3 bg-cyber-bg p-3.5 rounded-xl border border-cyber-border">
            {/* Operator Handle */}
            <div>
              <label className="block text-cyber-muted uppercase text-[10px] font-bold mb-1">
                OPERATOR CALLSIGN / NAME:
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-cyber-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={operatorName}
                  onChange={(e) => setOperatorName(e.target.value)}
                  placeholder="e.g. Daniel"
                  className="w-full bg-cyber-card pl-9 pr-3 py-2 rounded-lg border border-cyber-border text-white text-xs font-mono focus:outline-none focus:border-cyber-emerald"
                  required
                />
              </div>
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="block text-cyber-muted uppercase text-[10px] font-bold mb-1">
                EMAIL <span className="text-gray-500 font-normal">(OPTIONAL):</span>
              </label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-cyber-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={operatorEmail}
                  onChange={(e) => setOperatorEmail(e.target.value)}
                  placeholder="daniel@gmail.com"
                  className="w-full bg-cyber-card pl-9 pr-3 py-2 rounded-lg border border-cyber-border text-white text-xs font-mono focus:outline-none focus:border-cyber-emerald"
                />
              </div>
            </div>

            {/* Avatar Selection */}
            <div>
              <label className="block text-cyber-muted uppercase text-[10px] font-bold mb-1.5">
                SELECT PROFILE AVATAR:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {AVATARS.map((av) => (
                  <button
                    type="button"
                    key={av.id}
                    onClick={() => setSelectedAvatar(av.url)}
                    className={`relative rounded-lg p-0.5 border transition-all ${
                      selectedAvatar === av.url
                        ? 'border-cyber-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)] scale-105'
                        : 'border-cyber-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={av.url}
                      alt={av.label}
                      className="w-full h-10 rounded object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !operatorName.trim()}
              className="w-full py-2.5 px-4 rounded-xl bg-cyber-emerald hover:bg-cyber-emerald/90 text-black font-bold text-xs transition-all shadow-glow-emerald/30 flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>ENTER OPERATOR STATION</span>
            </button>
          </form>

          {/* 3. Optional Advanced Google OAuth Setup Accordion */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowAdvancedGoogle(!showAdvancedGoogle)}
              className="w-full flex items-center justify-between text-[11px] text-cyber-muted hover:text-white px-1 py-1 transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>Advanced: Custom Google OAuth Client ID</span>
              </span>
              {showAdvancedGoogle ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <AnimatePresence>
              {showAdvancedGoogle && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pt-2"
                >
                  <form onSubmit={handleSaveGoogleClientId} className="p-3 rounded-xl bg-cyber-bg border border-cyber-border space-y-2.5 text-[11px]">
                    <div className="flex items-center justify-between text-cyber-muted">
                      <span>Google Cloud Console:</span>
                      <a
                        href="https://console.cloud.google.com/apis/credentials"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-cyan hover:underline flex items-center gap-1"
                      >
                        Credentials <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="flex items-center justify-between bg-cyber-card p-1.5 px-2 rounded border border-cyber-border text-white text-[10px]">
                      <span className="text-cyber-emerald truncate flex-1">{currentOrigin}</span>
                      <button
                        type="button"
                        onClick={handleCopyOrigin}
                        className="text-cyber-muted hover:text-white ml-2"
                      >
                        {copiedOrigin ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    <input
                      type="text"
                      value={inputClientId}
                      onChange={(e) => setInputClientId(e.target.value)}
                      placeholder="Paste Client ID: ...apps.googleusercontent.com"
                      className="w-full bg-cyber-card p-2 rounded border border-cyber-border text-white text-[11px] font-mono focus:outline-none focus:border-cyber-cyan"
                    />

                    <button
                      type="submit"
                      disabled={!inputClientId.trim()}
                      className="w-full py-1.5 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-bold text-xs transition-colors"
                    >
                      Save & Launch Google Popup
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
