import React, { useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { 
  LogOut, 
  Cloud, 
  CloudUpload, 
  User as UserIcon, 
  ShieldCheck, 
  ChevronDown,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GoogleSignInButton } from './GoogleSignInButton';

export const UserMenu: React.FC = () => {
  const { user, isAuthenticated, logout, migrateGuestData, guestDataMigrated } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [syncing, setSyncing] = useState(false);

  if (!isAuthenticated || !user) {
    return <GoogleSignInButton />;
  }

  const handleManualSync = async () => {
    setSyncing(true);
    await migrateGuestData();
    setTimeout(() => setSyncing(false), 800);
  };

  return (
    <div className="relative font-mono text-xs">
      {/* Account Profile Trigger Button */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-emerald transition-all group"
      >
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-6 h-6 rounded-full border border-cyber-emerald/50 object-cover"
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
        </div>

        <ChevronDown className="w-3 h-3 text-cyber-muted transition-transform group-hover:translate-y-0.5" />
      </button>

      {/* Account Profile Dropdown */}
      {dropdownOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-72 p-3.5 rounded-xl bg-cyber-card border border-cyber-border shadow-2xl z-50 space-y-3 backdrop-blur-md"
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {/* User Bio Header */}
          <div className="flex items-center gap-2.5 pb-2.5 border-b border-cyber-border/70">
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-10 h-10 rounded-full border border-cyber-emerald shadow-[0_0_8px_rgba(16,185,129,0.3)] object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-cyber-bg border border-cyber-emerald flex items-center justify-center text-sm font-bold text-cyber-emerald">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className="font-bold text-white truncate text-xs">{user.name}</div>
              <div className="text-[11px] text-cyber-muted truncate">{user.email}</div>
              <span className="inline-flex items-center gap-1 text-[9px] font-bold text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/30 px-1.5 py-0.2 rounded mt-1">
                <ShieldCheck className="w-2.5 h-2.5" /> GOOGLE AUTHENTICATED
              </span>
            </div>
          </div>

          {/* Cloud Synchronization Status */}
          <div className="p-2.5 rounded-lg bg-cyber-bg border border-cyber-border/80 space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-cyber-muted uppercase text-[10px] font-bold">STATE PERSISTENCE:</span>
              <span className="text-cyber-emerald font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Account Linked
              </span>
            </div>
            <p className="text-[10px] text-cyber-muted leading-relaxed">
              All machine statuses, flags, and writeups are stored permanently under User ID <code className="text-cyber-cyan">{user.id.slice(0, 10)}...</code>.
            </p>

            <button
              onClick={handleManualSync}
              disabled={syncing}
              className="w-full py-1.5 px-2 rounded bg-cyber-card hover:bg-cyber-cyan/20 border border-cyber-border hover:border-cyber-cyan text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 mt-1"
            >
              <CloudUpload className={`w-3.5 h-3.5 text-cyber-cyan ${syncing ? 'animate-spin' : ''}`} />
              <span>{syncing ? 'Syncing...' : 'Sync Local State to Cloud'}</span>
            </button>
          </div>

          {/* Logout Action */}
          <button
            onClick={() => {
              logout();
              setDropdownOpen(false);
            }}
            className="w-full py-2 px-3 rounded-lg bg-cyber-crimson/10 border border-cyber-crimson/30 hover:bg-cyber-crimson hover:text-white text-cyber-crimson font-bold text-xs transition-all flex items-center justify-center gap-2"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};
