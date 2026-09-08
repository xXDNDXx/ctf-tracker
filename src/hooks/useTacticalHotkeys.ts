import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCtfStore } from '../store/useCtfStore';
import { playCyberSound } from '../utils/helpers';
import { generateObsidianVaultZip } from '../utils/obsidianVaultExporter';
import { ViewMode } from '../types';

export function useTacticalHotkeys() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      // Imperative access to current store state: ZERO reactive re-renders
      const state = useCtfStore.getState();

      // 0. Escape Key: Dismiss open modals / selections / command palette
      if (e.key === 'Escape') {
        if (state.commandPaletteOpen) {
          state.setCommandPaletteOpen(false);
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        const activeEl = document.activeElement as HTMLElement | null;
        if (
          activeEl &&
          (activeEl.tagName === 'INPUT' ||
            activeEl.tagName === 'TEXTAREA' ||
            activeEl.tagName === 'SELECT' ||
            activeEl.isContentEditable)
        ) {
          activeEl.blur();
        }

        // Close all open modals & active inspections
        state.setShortcutsModalOpen(false);
        state.setCommandPaletteOpen(false);
        state.setReconAutomationModalOpen(false);
        state.setPivotingMatrixModalOpen(false);
        state.setHashForgeModalOpen(false);
        state.setCyberForgeModalOpen(false);
        state.setCvssModalOpen(false);
        state.setAssignIpMachineId(null);
        state.setBackupModalOpen(false);
        state.setFlexCardModalOpen(false);
        state.setNewMachineModalOpen(false);
        state.setReportMachineId(null);
        state.setNotesImportModalOpen(false);
        state.setOperatorModalOpen(false);
        state.setLicenseModalOpen(false);
        if (state.selectedMachineId) {
          state.setSelectedMachineId(null);
        }
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Tactical 1-Click Save (Ctrl+S / Cmd+S)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        e.stopPropagation();
        state.saveProfileData(state.currentProfileId);
        if (state.soundEnabled) playCyberSound('root');
        return;
      }

      // Executive Pre-Report Generator / Print Preview (Ctrl+P / Cmd+P)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        e.stopPropagation();
        const targetId = state.activeTargetId || state.selectedMachineId || (state.machines.length > 0 ? state.machines[0].id : null);
        if (targetId) {
          state.setReportMachineId(targetId);
          if (state.soundEnabled) playCyberSound('click');
        }
        return;
      }

      // Ignore single-character keybindings when active element is an input, textarea, or select
      const activeEl = document.activeElement as HTMLElement | null;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.tagName === 'SELECT' ||
          activeEl.isContentEditable)
      ) {
        return;
      }

      // Modal Isolation Guard: Do not trigger background single-key shortcuts if any modal or dialog is open
      const hasDomModal = typeof document !== 'undefined' && Boolean(
        document.querySelector('[role="dialog"], [aria-modal="true"], .fixed.inset-0')
      );
      const isAnyModalOpen = hasDomModal || Boolean(
        state.selectedMachineId ||
        state.commandPaletteOpen ||
        state.shortcutsModalOpen ||
        state.backupModalOpen ||
        state.reconAutomationModalOpen ||
        state.pivotingMatrixModalOpen ||
        state.hashForgeModalOpen ||
        state.cyberForgeModalOpen ||
        state.cvssModalOpen ||
        state.operatorModalOpen ||
        state.licenseModalOpen ||
        state.flexCardModalOpen ||
        state.notesImportModalOpen ||
        state.newMachineModalOpen ||
        state.reportMachineId
      );
      if (isAnyModalOpen) {
        return;
      }

      // 1. Help / Shortcuts Cheat Sheet: '?' or Shift+'/'
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        state.setShortcutsModalOpen(true);
        if (state.soundEnabled) playCyberSound('click');
        return;
      }

      // 2. View Mode Switchers: '1' -> Kanban, '2' -> Grid, '3' -> Table, '4' -> Graph (Only on Tracker route)
      if (['1', '2', '3', '4'].includes(e.key) && !e.ctrlKey && !e.altKey && !e.metaKey) {
        if (location.pathname === '/tracker' || location.pathname === '/') {
          e.preventDefault();
          const viewMap: Record<string, ViewMode> = {
            '1': 'kanban',
            '2': 'grid',
            '3': 'table',
            '4': 'graph',
          };
          state.setViewMode(viewMap[e.key]);
          if (state.soundEnabled) playCyberSound('click');
        }
        return;
      }

      // 3. Focus Search: '/'
      if (e.key === '/' && !e.shiftKey && !e.ctrlKey) {
        e.preventDefault();
        const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement | null;
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
        return;
      }

      // 4. Timer Play/Pause: 't'
      if (e.key === 't' || e.key === 'T') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          if (state.isTimerRunning) {
            state.pauseTimer();
          } else {
            state.startTimer();
          }
          if (state.soundEnabled) playCyberSound('click');
          return;
        }
      }

      // 5. Open Scan & Payload Crafter: 'p'
      if (e.key === 'p' || e.key === 'P') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          state.setReconAutomationModalOpen(true);
          if (state.soundEnabled) playCyberSound('click');
          return;
        }
      }

      // 6. 1-Click Export Obsidian Vault: 'v'
      if (e.key === 'v' || e.key === 'V') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          try {
            const zipBlob = await generateObsidianVaultZip(state.machines, state.cheatsheets);
            const url = URL.createObjectURL(zipBlob);
            const link = document.createElement('a');
            link.href = url;
            const dateStr = new Date().toISOString().slice(0, 10);
            link.download = `ZeroBox-Obsidian-Vault-${dateStr}.zip`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            if (state.soundEnabled) playCyberSound('root');
          } catch (err) {
            console.error('Failed to export Obsidian Vault via hotkey:', err);
          }
          return;
        }
      }

      // 7. Quick User Flag: 'u'
      if (e.key === 'u' || e.key === 'U') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey && state.activeTargetId) {
          e.preventDefault();
          state.toggleUserFlag(state.activeTargetId);
          if (state.soundEnabled) playCyberSound('flag');
          return;
        }
      }

      // 8. Quick Root Flag: 'r'
      if (e.key === 'r' || e.key === 'R') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey && state.activeTargetId) {
          e.preventDefault();
          state.toggleRootFlag(state.activeTargetId);
          if (state.soundEnabled) playCyberSound('root');
          return;
        }
      }

      // 9. Inspect Selected Target Modal: 'Space'
      if (e.key === ' ' && !state.selectedMachineId && state.activeTargetId) {
        const tag = activeEl?.tagName;
        if (tag === 'BUTTON' || tag === 'A' || tag === 'SUMMARY') {
          return;
        }
        e.preventDefault();
        state.setSelectedMachineId(state.activeTargetId);
        if (state.soundEnabled) playCyberSound('click');
        return;
      }

      // 10. Target Navigation: 'j' (Next Target), 'k' (Previous Target)
      if (e.key === 'j') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          const currentIndex = state.machines.findIndex((m) => m.id === state.activeTargetId);
          const nextIndex = currentIndex < state.machines.length - 1 ? currentIndex + 1 : 0;
          if (state.machines[nextIndex]) {
            state.setActiveTarget(state.machines[nextIndex].id);
            if (state.soundEnabled) playCyberSound('click');
          }
          return;
        }
      }

      if (e.key === 'k') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          const currentIndex = state.machines.findIndex((m) => m.id === state.activeTargetId);
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : state.machines.length - 1;
          if (state.machines[prevIndex]) {
            state.setActiveTarget(state.machines[prevIndex].id);
            if (state.soundEnabled) playCyberSound('click');
          }
          return;
        }
      }

      // 11. UI Display Scale: '-' or '_' (Zoom Out), '+' or '=' (Zoom In), '0' (Reset)
      if (e.key === '-' || e.key === '_') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          state.zoomOut();
          if (state.soundEnabled) playCyberSound('click');
          return;
        }
      }

      if (e.key === '+' || e.key === '=') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          state.zoomIn();
          if (state.soundEnabled) playCyberSound('click');
          return;
        }
      }

      if (e.key === '0') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          state.setUiScale('normal');
          if (state.soundEnabled) playCyberSound('click');
          return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location.pathname]);
}
