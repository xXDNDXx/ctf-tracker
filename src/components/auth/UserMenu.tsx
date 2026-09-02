import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { useCtfStore } from '../../store/useCtfStore';
import { playCyberSound } from '../../utils/helpers';
import { 
  Save, 
  Check, 
  ChevronDown, 
  Download, 
  Upload, 
  Plus, 
  Users, 
  Edit3, 
  RotateCcw,
  LogOut,
  LogIn,
  ShieldCheck,
  Zap,
  Key,
  ExternalLink,
  Copy,
  User as UserIcon
} from 'lucide-react';

export const UserMenu: React.FC = () => {
  const { 
    user, 
    profiles, 
    isAuthenticated,
    googleClientId,
    setGoogleClientId,
    loginWithGoogleCredential,
    loginWithGoogleUserInfo,
    loginAsOperator,
    switchProfile, 
    createProfile, 
    renameProfile, 
    logout 
  } = useAuthStore();

  const { 
    machines, 
    currentProfileId, 
    saveProfileData, 
    exportBackup, 
    importBackup, 
    resetAllProgress 
  } = useCtfStore();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(user?.name || 'Daniel');
  const [newProfileInput, setNewProfileInput] = useState('');
  const [showNewProfileInput, setShowNewProfileInput] = useState(false);

  // Google OAuth Client ID setup state
  const [clientIdInput, setClientIdInput] = useState(googleClientId || '');
  const [showClientIdConfig, setShowClientIdConfig] = useState(!googleClientId);
  const [copiedOrigin, setCopiedOrigin] = useState(false);
  const [loginCallsign, setLoginCallsign] = useState('');

  const activeName = user?.name || 'Daniel';
  const rootedCount = machines.filter((m) => m.status === 'root' || m.status === 'completed').length;
  const totalCount = machines.length;
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://xxdndxx.github.io';

  // 1-Click Save Data Handler
  const handleQuickSave = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    saveProfileData(currentProfileId);
    setJustSaved(true);
    playCyberSound('root');
    setTimeout(() => setJustSaved(false), 2000);
  };

  // Launch Authentic Google Sign-In Popup
  const handleLaunchGoogleSignIn = (targetClientId?: string) => {
    const activeId = (targetClientId || googleClientId || clientIdInput).trim();

    if (!activeId) {
      setShowClientIdConfig(true);
      return;
    }

    // Save ID permanently
    if (activeId !== googleClientId) {
      setGoogleClientId(activeId);
    }

    if (typeof window !== 'undefined') {
      const w = window as any;

      // 1. Check if Google Identity Services is available
      if (w.google?.accounts?.oauth2) {
        try {
          const client = w.google.accounts.oauth2.initTokenClient({
            client_id: activeId,
            scope: 'openid profile email',
            prompt: 'select_account',
            callback: async (tokenResponse: any) => {
              if (tokenResponse?.access_token) {
                try {
                  const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                  });
                  const userInfo = await res.json();
                  await loginWithGoogleUserInfo(userInfo, tokenResponse.access_token);
                  setDropdownOpen(false);
                  playCyberSound('root');
                } catch (e) {
                  console.error('Google userinfo fetch failed:', e);
                }
              }
            },
          });
          client.requestAccessToken({ prompt: 'select_account' });
          return;
        } catch (err) {
          console.error('Error initiating Google OAuth:', err);
        }
      }

      // 2. Direct browser Google OAuth 2.0 popup window
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(
        activeId
      )}&redirect_uri=${encodeURIComponent(
        window.location.origin
      )}&response_type=token&scope=${encodeURIComponent('openid profile email')}&prompt=select_account`;

      window.open(authUrl, '_blank', 'width=500,height=600,menubar=no,status=no,toolbar=no');
    }
  };

  const handleCopyOrigin = () => {
    navigator.clipboard.writeText(currentOrigin);
    setCopiedOrigin(true);
    playCyberSound('copy');
    setTimeout(() => setCopiedOrigin(false), 2000);
  };

  const handleSaveClientIdAndLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientIdInput.trim()) {
      setGoogleClientId(clientIdInput.trim());
      handleLaunchGoogleSignIn(clientIdInput.trim());
    }
  };

  // 1-Click Export JSON
  const handleExportBackup = () => {
    const jsonStr = exportBackup();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ctf-tracker-${activeName.toLowerCase().replace(/\s+/g, '-')}-backup.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    playCyberSound('export');
  };

  // 1-Click Import JSON
  const handleImportBackup = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) {
          const ok = importBackup(text);
          if (ok) {
            playCyberSound('root');
            setJustSaved(true);
            setTimeout(() => setJustSaved(false), 2000);
          } else {
            alert('Invalid backup JSON format.');
          }
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      renameProfile(nameInput.trim());
      setIsEditingName(false);
    }
  };

  const handleCreateNewProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProfileInput.trim()) {
      createProfile(newProfileInput.trim());
      setNewProfileInput('');
      setShowNewProfileInput(false);
      setDropdownOpen(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginCallsign.trim()) {
      loginAsOperator(loginCallsign.trim());
      setLoginCallsign('');
      setDropdownOpen(false);
    }
  };

  const handleReset = () => {
    if (confirm(`Reset all machine progress for profile "${activeName}"?`)) {
      resetAllProgress();
      setDropdownOpen(false);
    }
  };

  // ==========================================
  // VIEW 1: LOGGED OUT (Google & Operator Login)
  // ==========================================
  if (!isAuthenticated || !user) {
    return (
      <div className="relative font-mono text-xs">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-bold transition-all shadow-md border border-gray-200"
        >
          {/* Official Google 4-Color Icon */}
          <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24">
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
          <ChevronDown className="w-3 h-3 text-gray-500" />
        </button>

        {dropdownOpen && (
          <div
            className="absolute right-0 top-full mt-2 w-84 p-4 rounded-2xl bg-cyber-card border border-cyber-border shadow-2xl z-50 space-y-3.5 backdrop-blur-md"
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Google Authentication Trigger */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-white">
                <span className="flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>GOOGLE AUTHENTICATION</span>
                </span>
                <span className="text-[9px] text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/30 px-1.5 py-0.5 rounded font-bold">
                  OAuth 2.0
                </span>
              </div>

              {/* 1. Fast Google Sign-In Button */}
              <button
                onClick={() => handleLaunchGoogleSignIn()}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 border border-gray-300"
              >
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
                <span>Click & Choose Google Account</span>
              </button>

              {/* Client ID Configuration Prompt */}
              {showClientIdConfig && (
                <form onSubmit={handleSaveClientIdAndLogin} className="p-3 rounded-xl bg-cyber-bg border border-cyber-border space-y-2 text-[10px]">
                  <div className="flex items-center justify-between text-cyber-muted">
                    <span>Google Cloud Client ID:</span>
                    <a
                      href="https://console.cloud.google.com/apis/credentials"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-cyan hover:underline flex items-center gap-1 font-bold"
                    >
                      Console <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between bg-cyber-card p-1.5 rounded border border-cyber-border text-white text-[10px]">
                    <span className="text-cyber-emerald truncate flex-1">{currentOrigin}</span>
                    <button
                      type="button"
                      onClick={handleCopyOrigin}
                      className="text-cyber-muted hover:text-white ml-1.5 font-bold"
                    >
                      {copiedOrigin ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>

                  <input
                    type="text"
                    value={clientIdInput}
                    onChange={(e) => setClientIdInput(e.target.value)}
                    placeholder="Paste Client ID: ...apps.googleusercontent.com"
                    className="w-full bg-cyber-card p-2 rounded border border-cyber-border text-white text-xs font-mono focus:outline-none focus:border-cyber-cyan"
                  />

                  <button
                    type="submit"
                    disabled={!clientIdInput.trim()}
                    className="w-full py-1.5 rounded-lg bg-cyber-cyan hover:bg-cyber-cyan/90 text-black font-bold text-xs transition-colors disabled:opacity-50"
                  >
                    Save & Open Google Popup
                  </button>
                </form>
              )}
            </div>

            {/* Clean Divider */}
            <div className="relative flex items-center justify-center my-1">
              <div className="border-t border-cyber-border w-full" />
              <span className="bg-cyber-card px-2 text-[9px] uppercase font-bold text-cyber-muted tracking-wider absolute">
                OR 1-CLICK OPERATOR
              </span>
            </div>

            {/* 1-Click Operator Login */}
            <form onSubmit={handleLoginSubmit} className="space-y-2">
              <div className="relative">
                <UserIcon className="w-3.5 h-3.5 text-cyber-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={loginCallsign}
                  onChange={(e) => setLoginCallsign(e.target.value)}
                  placeholder="Callsign / Name: e.g. Daniel"
                  className="w-full bg-cyber-bg pl-8 pr-3 py-1.5 rounded-lg border border-cyber-border text-white text-xs font-mono focus:outline-none focus:border-cyber-emerald"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-lg bg-cyber-emerald hover:bg-cyber-emerald/90 text-black font-bold text-xs transition-all shadow-glow-emerald/20 flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>ENTER AS OPERATOR</span>
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // VIEW 2: LOGGED IN (Active Profile & 1-Click Save)
  // ==========================================
  const isGoogleAuth = Boolean(user.googleId || user.email?.includes('@'));

  return (
    <div className="relative font-mono text-xs">
      {/* Header Button Group: 1-Click Save + Profile Indicator */}
      <div className="flex items-center gap-1.5 bg-cyber-card/90 border border-cyber-border rounded-xl p-1 shadow-sm">
        {/* Instant 1-Click Quick Save Button */}
        <button
          onClick={handleQuickSave}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold transition-all ${
            justSaved
              ? 'bg-cyber-emerald text-black shadow-glow-emerald/40'
              : 'bg-cyber-bg border border-cyber-border text-cyber-emerald hover:border-cyber-emerald/60 hover:bg-cyber-emerald/10'
          }`}
          title="Click to save all machine progress instantly"
        >
          {justSaved ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span className="text-[11px]">Saved!</span>
            </>
          ) : (
            <>
              <Save className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Save</span>
            </>
          )}
        </button>

        {/* Profile Details & Dropdown Trigger */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-1.5 py-0.5 rounded-lg hover:bg-cyber-bg transition-colors group"
          title={`Active Profile: ${activeName}`}
        >
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={activeName}
              className="w-5 h-5 rounded-full border border-cyber-emerald/60 object-cover"
            />
          ) : (
            <div className="w-5 h-5 rounded-full bg-cyber-emerald/20 border border-cyber-emerald flex items-center justify-center text-[9px] font-bold text-cyber-emerald">
              {activeName.charAt(0).toUpperCase()}
            </div>
          )}

          <span className="font-bold text-white text-xs max-w-[90px] truncate group-hover:text-cyber-emerald transition-colors">
            {activeName}
          </span>

          <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-pulse" />

          <ChevronDown className="w-3 h-3 text-cyber-muted group-hover:text-white transition-transform" />
        </button>
      </div>

      {/* Profile Control Station Dropdown */}
      {dropdownOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-80 p-3.5 rounded-2xl bg-cyber-card border border-cyber-border shadow-2xl z-50 space-y-3 backdrop-blur-md"
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {/* Active Profile Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-cyber-border/70">
            <div className="flex items-center gap-2.5 min-w-0">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={activeName}
                  className="w-10 h-10 rounded-full border-2 border-cyber-emerald shadow-[0_0_8px_rgba(16,185,129,0.3)] object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-cyber-bg border-2 border-cyber-emerald flex items-center justify-center text-sm font-bold text-cyber-emerald">
                  {activeName.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="min-w-0 flex-1">
                {isEditingName ? (
                  <form onSubmit={handleSaveName} className="flex items-center gap-1">
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-28 bg-cyber-bg px-1.5 py-0.5 rounded border border-cyber-emerald text-white text-xs font-mono focus:outline-none"
                      autoFocus
                    />
                    <button type="submit" className="p-1 rounded bg-cyber-emerald text-black font-bold text-[10px]">
                      OK
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm truncate">{activeName}</span>
                    <button
                      onClick={() => setIsEditingName(true)}
                      className="text-cyber-muted hover:text-cyber-cyan"
                      title="Rename profile"
                    >
                      <Edit3 className="w-3 h-3" />
                    </button>
                  </div>
                )}
                <div className="text-[10px] text-cyber-muted truncate">{user.email}</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/30 px-1.5 py-0.2 rounded">
                    <ShieldCheck className="w-2.5 h-2.5" />
                    {isGoogleAuth ? 'GOOGLE LINKED' : 'OPERATOR ACTIVE'}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs font-bold text-cyber-emerald">{rootedCount} / {totalCount}</div>
              <div className="text-[9px] text-cyber-muted uppercase">Pwned</div>
            </div>
          </div>

          {/* 1-Click Large Save Button */}
          <button
            onClick={handleQuickSave}
            className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md ${
              justSaved
                ? 'bg-cyber-emerald text-black shadow-glow-emerald/30'
                : 'bg-cyber-emerald hover:bg-cyber-emerald/90 text-black shadow-glow-emerald/20'
            }`}
          >
            {justSaved ? (
              <>
                <Check className="w-4 h-4" />
                <span>ALL DATA SAVED TO PROFILE!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>1-CLICK SAVE PROGRESS</span>
              </>
            )}
          </button>

          {/* 1-Click Backup Export & Restore */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleExportBackup}
              className="p-2 rounded-xl bg-cyber-bg hover:bg-cyber-card border border-cyber-border text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
              title="Download backup file"
            >
              <Download className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Export Backup</span>
            </button>

            <button
              onClick={handleImportBackup}
              className="p-2 rounded-xl bg-cyber-bg hover:bg-cyber-card border border-cyber-border text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
              title="Upload backup file"
            >
              <Upload className="w-3.5 h-3.5 text-purple-400" />
              <span>Import Backup</span>
            </button>
          </div>

          {/* Multi-Profile Switcher */}
          <div className="pt-2 border-t border-cyber-border/70 space-y-1.5">
            <div className="flex items-center justify-between text-[10px] uppercase font-bold text-cyber-muted px-1">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" /> SWITCH ACCOUNT:
              </span>
              <button
                onClick={() => setShowNewProfileInput(!showNewProfileInput)}
                className="text-cyber-cyan hover:underline flex items-center gap-0.5"
              >
                <Plus className="w-3 h-3" /> Add Account
              </button>
            </div>

            {showNewProfileInput && (
              <form onSubmit={handleCreateNewProfile} className="flex items-center gap-1.5 p-1.5 bg-cyber-bg rounded-lg border border-cyber-border">
                <input
                  type="text"
                  value={newProfileInput}
                  onChange={(e) => setNewProfileInput(e.target.value)}
                  placeholder="New Account Name..."
                  className="w-full bg-transparent text-white font-mono text-xs focus:outline-none px-1"
                  autoFocus
                />
                <button type="submit" className="px-2 py-0.5 rounded bg-cyber-emerald text-black font-bold text-[10px]">
                  Add
                </button>
              </form>
            )}

            <div className="space-y-1 max-h-32 overflow-y-auto pr-0.5">
              {profiles.map((p) => {
                const isSelected = p.id === user.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      switchProfile(p.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full p-2 rounded-lg border flex items-center justify-between text-left transition-all ${
                      isSelected
                        ? 'bg-cyber-emerald/15 border-cyber-emerald text-white font-bold'
                        : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {p.avatarUrl ? (
                        <img src={p.avatarUrl} alt={p.name} className="w-4 h-4 rounded-full object-cover" />
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-cyber-emerald/20 flex items-center justify-center text-[8px] font-bold text-cyber-emerald">
                          {p.name.charAt(0)}
                        </div>
                      )}
                      <span className="truncate text-xs">{p.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-cyber-emerald" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reset & Log Out Actions */}
          <div className="pt-2 border-t border-cyber-border/70 space-y-1.5">
            <button
              onClick={handleReset}
              className="w-full py-1.5 px-2 rounded-lg bg-cyber-bg hover:bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3 h-3 text-cyber-amber" />
              <span>Reset {activeName}'s Progress</span>
            </button>

            {/* Prominent Log Out Button */}
            <button
              onClick={() => {
                logout();
                setDropdownOpen(false);
              }}
              className="w-full py-2 px-3 rounded-xl bg-cyber-crimson/15 hover:bg-cyber-crimson border border-cyber-crimson/30 hover:border-cyber-crimson text-cyber-crimson hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-2"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>LOG OUT / SWITCH OPERATOR</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
