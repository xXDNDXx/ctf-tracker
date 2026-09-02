import React, { useState } from 'react';
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
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const UserMenu: React.FC = () => {
  const { 
    user, 
    profiles, 
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

  const activeName = user?.name || 'Daniel';
  const rootedCount = machines.filter((m) => m.status === 'root' || m.status === 'completed').length;
  const totalCount = machines.length;

  // 1-Click Save Data Handler
  const handleQuickSave = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    saveProfileData(currentProfileId);
    setJustSaved(true);
    playCyberSound('root');
    setTimeout(() => setJustSaved(false), 2000);
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

  const handleReset = () => {
    if (confirm(`Reset all machine progress for profile "${activeName}"?`)) {
      resetAllProgress();
      setDropdownOpen(false);
    }
  };

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
          {user?.avatarUrl ? (
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
              {user?.avatarUrl ? (
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
                <div className="text-[10px] text-cyber-muted">Active Operator Profile</div>
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
                <Users className="w-3 h-3" /> PROFILES
              </span>
              <button
                onClick={() => setShowNewProfileInput(!showNewProfileInput)}
                className="text-cyber-cyan hover:underline flex items-center gap-0.5"
              >
                <Plus className="w-3 h-3" /> New Profile
              </button>
            </div>

            {showNewProfileInput && (
              <form onSubmit={handleCreateNewProfile} className="flex items-center gap-1.5 p-1.5 bg-cyber-bg rounded-lg border border-cyber-border">
                <input
                  type="text"
                  value={newProfileInput}
                  onChange={(e) => setNewProfileInput(e.target.value)}
                  placeholder="e.g. OSCP Prep"
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
                const isSelected = p.id === (user?.id || 'usr_daniel');
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
                    <span className="truncate text-xs">{p.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-cyber-emerald" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reset Profile Progress */}
          <div className="pt-1.5 border-t border-cyber-border/70">
            <button
              onClick={handleReset}
              className="w-full py-1.5 px-2 rounded-lg bg-cyber-bg hover:bg-cyber-crimson/10 border border-cyber-border hover:border-cyber-crimson/40 text-cyber-muted hover:text-cyber-crimson text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3 h-3 text-cyber-amber" />
              <span>Reset {activeName}'s Progress</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
