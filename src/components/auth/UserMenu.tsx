import React, { useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { useCtfStore } from '../../store/useCtfStore';
import { 
  LogOut, 
  User as UserIcon, 
  ShieldCheck, 
  ChevronDown, 
  Plus, 
  Users, 
  Check, 
  Crosshair, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { GoogleSignInButton } from './GoogleSignInButton';
import { GoogleOAuthModal } from './GoogleOAuthModal';

export const UserMenu: React.FC = () => {
  const { user, profiles, isAuthenticated, switchProfile, logout, deleteProfile } = useAuthStore();
  const { machines, resetAllProgress, currentProfileId } = useCtfStore();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  if (!isAuthenticated || !user) {
    return <GoogleSignInButton />;
  }

  const rootedCount = machines.filter((m) => m.status === 'root' || m.status === 'completed').length;
  const totalCount = machines.length;

  const handleSwitch = (profileId: string) => {
    switchProfile(profileId);
    setDropdownOpen(false);
  };

  const handleResetCurrent = () => {
    if (confirm(`Reset all CTF progress for profile "${user.name}"?`)) {
      resetAllProgress();
      setDropdownOpen(false);
    }
  };

  return (
    <>
      <div className="relative font-mono text-xs">
        {/* Account Profile Trigger Button */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-emerald transition-all group shadow-sm"
          title={`Active Profile: ${user.name}`}
        >
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-6 h-6 rounded-full border border-cyber-emerald/60 object-cover"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-cyber-bg border border-cyber-emerald flex items-center justify-center text-[10px] font-bold text-cyber-emerald">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="text-left hidden md:block">
            <div className="text-xs font-bold text-white group-hover:text-cyber-emerald transition-colors truncate max-w-[100px]">
              {user.name}
            </div>
            <div className="text-[9px] text-cyber-muted -mt-0.5">
              {rootedCount} Pwned
            </div>
          </div>

          <ChevronDown className="w-3 h-3 text-cyber-muted transition-transform group-hover:translate-y-0.5" />
        </button>

        {/* Account Profile Dropdown */}
        {dropdownOpen && (
          <div
            className="absolute right-0 top-full mt-2 w-80 p-3.5 rounded-2xl bg-cyber-card border border-cyber-border shadow-2xl z-50 space-y-3 backdrop-blur-md"
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Active User Bio */}
            <div className="flex items-center gap-3 pb-3 border-b border-cyber-border/70">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-11 h-11 rounded-full border-2 border-cyber-emerald shadow-[0_0_10px_rgba(16,185,129,0.3)] object-cover"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-cyber-bg border-2 border-cyber-emerald flex items-center justify-center text-base font-bold text-cyber-emerald">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="min-w-0 flex-1">
                <div className="font-bold text-white truncate text-sm">{user.name}</div>
                <div className="text-[11px] text-cyber-muted truncate">{user.email}</div>
                <div className="flex items-center gap-1 mt-1 text-[9px] font-bold text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/30 px-1.5 py-0.5 rounded w-fit">
                  <ShieldCheck className="w-3 h-3" /> ACTIVE PROFILE
                </div>
              </div>
            </div>

            {/* Profile CTF Scorecard */}
            <div className="p-2.5 rounded-xl bg-cyber-bg border border-cyber-border grid grid-cols-2 gap-2 text-center">
              <div className="p-1.5 rounded-lg bg-cyber-card border border-cyber-border/60">
                <div className="text-[10px] text-cyber-muted uppercase">Pwn Progress</div>
                <div className="text-sm font-bold text-cyber-emerald mt-0.5">
                  {rootedCount} <span className="text-[10px] text-cyber-muted">/ {totalCount}</span>
                </div>
              </div>
              <div className="p-1.5 rounded-lg bg-cyber-card border border-cyber-border/60">
                <div className="text-[10px] text-cyber-muted uppercase">Data Scope</div>
                <div className="text-[11px] font-bold text-cyber-cyan mt-1 truncate">
                  Profile Isolated
                </div>
              </div>
            </div>

            {/* Profiles List / Switcher */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[10px] uppercase font-bold text-cyber-muted px-1">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> SWITCH PROFILES
                </span>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    setModalOpen(true);
                  }}
                  className="text-cyber-cyan hover:underline flex items-center gap-0.5 font-bold"
                >
                  <Plus className="w-3 h-3" /> Add Profile
                </button>
              </div>

              <div className="space-y-1 max-h-36 overflow-y-auto pr-0.5">
                {profiles.map((p) => {
                  const isActive = p.id === user.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleSwitch(p.id)}
                      className={`w-full p-2 rounded-xl border flex items-center justify-between transition-all text-left ${
                        isActive
                          ? 'bg-cyber-emerald/10 border-cyber-emerald text-white'
                          : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-cyan/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        {p.avatarUrl ? (
                          <img src={p.avatarUrl} alt={p.name} className="w-5 h-5 rounded-full object-cover" />
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-cyber-card flex items-center justify-center text-[9px] text-cyber-emerald">
                            {p.name.charAt(0)}
                          </div>
                        )}
                        <span className="text-xs font-semibold truncate">{p.name}</span>
                      </div>

                      {isActive ? (
                        <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                      ) : (
                        <span className="text-[10px] text-cyber-muted hover:text-cyber-cyan">Switch</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions: Reset Profile & Sign Out */}
            <div className="pt-2 border-t border-cyber-border space-y-1.5">
              <button
                onClick={handleResetCurrent}
                className="w-full py-1.5 px-2.5 rounded-lg bg-cyber-bg hover:bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3 h-3 text-cyber-amber" />
                <span>Reset {user.name}'s CTF Progress</span>
              </button>

              <button
                onClick={() => {
                  logout();
                  setDropdownOpen(false);
                }}
                className="w-full py-2 px-3 rounded-lg bg-cyber-crimson/10 border border-cyber-crimson/30 hover:bg-cyber-crimson hover:text-white text-cyber-crimson font-bold text-xs transition-all flex items-center justify-center gap-2"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out to Guest</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add / Switch Profile Modal */}
      <GoogleOAuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onLaunchLogin={() => {}}
      />
    </>
  );
};
