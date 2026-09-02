import React, { useState } from 'react';
import { X, Plus, Server } from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { Platform, OperatingSystem, Difficulty } from '../../types';
import { playCyberSound } from '../../utils/helpers';
import { OsBadge } from '../common/OsBadge';

export const NewMachineModal: React.FC = () => {
  const { newMachineModalOpen, setNewMachineModalOpen, addCustomMachine, soundEnabled } = useCtfStore();

  const [name, setName] = useState('');
  const [ip, setIp] = useState('');
  const [os, setOs] = useState<OperatingSystem>('Linux');
  const [platform, setPlatform] = useState<Platform>('Custom');
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [roomUrl, setRoomUrl] = useState('');
  const [tags, setTags] = useState('');
  const [hint, setHint] = useState('');

  if (!newMachineModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const tagList = tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    addCustomMachine({
      name: name.trim(),
      ip: ip.trim() || '10.10.x.x',
      os,
      platform,
      difficulty,
      status: 'backlog',
      tags: tagList,
      certifications: [],
      roomUrl: roomUrl.trim() || undefined,
      hint: hint.trim() || undefined,
      timeSpentSeconds: 0,
    });

    if (soundEnabled) playCyberSound('root');
    setNewMachineModalOpen(false);

    // Reset fields
    setName('');
    setIp('');
    setRoomUrl('');
    setTags('');
    setHint('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in font-mono">
      <div 
        className="w-full sm:max-w-lg h-full sm:h-auto sm:max-h-[90vh] flex flex-col rounded-none sm:rounded-xl border-0 sm:border border-cyber-border bg-cyber-card shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 flex items-center justify-between border-b border-cyber-border p-4 bg-cyber-bg/95">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-cyber-emerald" />
            <h3 className="text-base font-bold text-white">DEPLOY NEW LAB TARGET</h3>
          </div>
          <button
            onClick={() => setNewMachineModalOpen(false)}
            className="p-1.5 rounded bg-cyber-bg text-cyber-muted hover:text-white border border-cyber-border"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4 text-xs scrollbar-thin">
          <div>
            <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
              Machine / Room Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Blackfield, Lame, Kioptrix"
              className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-emerald"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                Target IP
              </label>
              <input
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                placeholder="10.10.10.x"
                className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-emerald"
              />
            </div>

            <div>
              <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                Platform
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value as Platform)}
                className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-emerald"
              >
                <option value="HTB">Hack The Box</option>
                <option value="THM">TryHackMe</option>
                <option value="VulnHub">VulnHub</option>
                <option value="ProLabs">ProLabs</option>
                <option value="Custom">Custom / Private Lab</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="flex items-center justify-between text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                <span>Operating System</span>
                <OsBadge os={os} size="xs" />
              </label>
              <select
                value={os}
                onChange={(e) => setOs(e.target.value as OperatingSystem)}
                className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-emerald"
              >
                <option value="Linux">Linux</option>
                <option value="Windows">Windows</option>
                <option value="Active Directory">Active Directory</option>
                <option value="Android">Android</option>
                <option value="BSD">BSD</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                Difficulty Tier
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-emerald"
              >
                <option value="Very Easy">Very Easy</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                <option value="Insane">Insane</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
              Attack Vectors / Tags (Comma-separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="SQLi, SUID, Kerberoasting, LinPEAS"
              className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-emerald"
            />
          </div>

          <div>
            <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
              Lab Room / Writeup URL
            </label>
            <input
              type="url"
              value={roomUrl}
              onChange={(e) => setRoomUrl(e.target.value)}
              placeholder="https://app.hackthebox.com/machines/..."
              className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-emerald"
            />
          </div>

          <div>
            <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
              Key Hint / Vulnerability Intel
            </label>
            <textarea
              rows={2}
              value={hint}
              onChange={(e) => setHint(e.target.value)}
              placeholder="Optional hint for when you get stuck..."
              className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-emerald resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2 border-t border-cyber-border">
            <button
              type="button"
              onClick={() => setNewMachineModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyber-emerald text-black font-bold hover:bg-cyber-emerald/90 transition-all shadow-glow-emerald"
            >
              <Plus className="w-4 h-4" /> Deploy Machine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
