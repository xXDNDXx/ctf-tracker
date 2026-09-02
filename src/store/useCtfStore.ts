import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Machine, PipelineStatus, CheatsheetCommand, GlobalVariables, ActivitySession, ViewMode, Platform, Difficulty, OperatingSystem } from '../types';
import { INITIAL_MACHINES } from '../data/machinesCatalog';
import { INITIAL_CHEATSHEET } from '../data/cheatsheetsData';

export type BoxVectorCategory = 'ALL' | 'Web' | 'Linux PrivEsc' | 'Windows PrivEsc' | 'Active Directory' | 'Binary / Pwn' | 'Network / SMB';

interface FilterState {
  searchQuery: string;
  selectedPlatform: Platform | 'ALL';
  selectedDifficulty: Difficulty | 'ALL';
  selectedCert: 'OSCP' | 'CPTS' | 'CRTO' | 'ALL';
  selectedOs: 'ALL' | OperatingSystem;
  selectedCategory: BoxVectorCategory;
  selectedTrack: string | 'ALL';
  selectedTags: string[];
}

export interface BrandTheme {
  id: string;
  namePrefix: string;
  nameSuffix: string;
  suffixColor: string;
  tagline: string;
  badge: string;
}

export const BRAND_THEMES: BrandTheme[] = [
  {
    id: 'rootvector',
    namePrefix: 'ROOT',
    nameSuffix: 'VECTOR',
    suffixColor: 'text-cyber-emerald',
    tagline: 'CTF & Lab Tracker',
    badge: '',
  },
  {
    id: 'hexforge',
    namePrefix: 'HEX',
    nameSuffix: 'FORGE',
    suffixColor: 'text-cyber-cyan',
    tagline: 'Offensive Security Lab',
    badge: '',
  },
  {
    id: 'pwnhound',
    namePrefix: 'PWN',
    nameSuffix: 'HOUND',
    suffixColor: 'text-cyber-crimson',
    tagline: 'Adversary Simulation',
    badge: '',
  },
  {
    id: 'voidroot',
    namePrefix: 'VOID',
    nameSuffix: 'ROOT',
    suffixColor: 'text-purple-400',
    tagline: 'CTF Matrix',
    badge: '',
  },
  {
    id: 'specterctf',
    namePrefix: 'SPECTER',
    nameSuffix: 'CTF',
    suffixColor: 'text-cyber-emerald',
    tagline: 'Hex Tracker',
    badge: '',
  },
];

interface CtfStoreState {
  machines: Machine[];
  activeTargetId: string | null;
  globalVars: GlobalVariables;
  cheatsheets: CheatsheetCommand[];
  activitySessions: ActivitySession[];
  
  // UI States
  appBrand: string;
  activeTab: 'tracker' | 'cheatsheet' | 'writeup' | 'analytics' | 'methodology' | 'exam';
  viewMode: ViewMode;
  selectedMachineId: string | null;
  writeupMachineId: string | null;
  commandPaletteOpen: boolean;
  newMachineModalOpen: boolean;
  backupModalOpen: boolean;
  reconAutomationModalOpen: boolean;
  mobileMenuOpen: boolean;
  crtOverlay: boolean;
  soundEnabled: boolean;
  
  // Timer State
  isTimerRunning: boolean;
  activeTimerSeconds: number;
  
  // Filters
  filters: FilterState;

  // Actions
  setAppBrand: (brandId: string) => void;
  setActiveTab: (tab: 'tracker' | 'cheatsheet' | 'writeup' | 'analytics' | 'methodology' | 'exam') => void;
  setViewMode: (mode: ViewMode) => void;
  setSelectedMachineId: (id: string | null) => void;
  setWriteupMachineId: (id: string | null) => void;
  setCommandPaletteOpen: (open: boolean) => void;
  setNewMachineModalOpen: (open: boolean) => void;
  setBackupModalOpen: (open: boolean) => void;
  setReconAutomationModalOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleCrtOverlay: () => void;
  toggleSound: () => void;

  // Machine Actions
  updateMachineStatus: (id: string, status: PipelineStatus) => void;
  updateMachine: (id: string, updates: Partial<Machine>) => void;
  addCustomMachine: (machine: Omit<Machine, 'id' | 'createdAt' | 'updatedAt'>) => void;
  deleteMachine: (id: string) => void;
  toggleUserFlag: (id: string, flagValue?: string) => void;
  toggleRootFlag: (id: string, flagValue?: string) => void;

  // Attack Methodology Checklist Actions
  setMachineOpenPorts: (machineId: string, ports: number[]) => void;
  setChecklistItemStatus: (machineId: string, itemId: string, status: import('../types').ChecklistItemStatus) => void;
  setChecklistItemNotes: (machineId: string, itemId: string, notes: string) => void;
  setActiveChecklistItem: (machineId: string, itemId: string | null) => void;
  resetMachineChecklist: (machineId: string) => void;

  // Active Target & Timer Actions
  setActiveTarget: (id: string | null) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: (machineId?: string) => void;
  tickTimer: () => void;

  // Variables & Cheatsheet Actions
  setGlobalVars: (vars: Partial<GlobalVariables>) => void;
  addCustomCommand: (cmd: Omit<CheatsheetCommand, 'id' | 'isCustom'>) => void;
  deleteCustomCommand: (id: string) => void;
  toggleStarCommand: (id: string) => void;

  // Filters Actions
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;

  // Data Import & Export & Profile Data Isolation
  currentProfileId: string;
  loadProfileData: (profileId: string) => void;
  saveProfileData: (profileId?: string) => void;
  exportBackup: () => string;
  importBackup: (jsonStr: string) => boolean;
  resetAllProgress: () => void;
}

const DEFAULT_GLOBAL_VARS: GlobalVariables = {
  lhost: '10.10.14.X',
  lport: '4444',
  targetIp: '10.10.10.X',
  interface: 'tun0',
  customVars: {
    DOMAIN: 'corp.local',
    USER: 'administrator',
    PASSWORD: 'Password123!',
  }
};

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  selectedPlatform: 'ALL',
  selectedDifficulty: 'ALL',
  selectedCert: 'ALL',
  selectedOs: 'ALL',
  selectedCategory: 'ALL',
  selectedTrack: 'ALL',
  selectedTags: [],
};

export const getProfileStorageKey = (profileId: string) => `specter_ctf_profile_${profileId || 'guest'}`;

export const getInitialProfileId = (): string => {
  if (typeof window !== 'undefined') {
    try {
      const auth = localStorage.getItem('rootvector_auth_session');
      if (auth) {
        const parsed = JSON.parse(auth);
        if (parsed.state?.user?.id) {
          return parsed.state.user.id;
        }
      }
    } catch {}
  }
  return 'guest';
};

export const loadInitialProfileData = (profileId: string) => {
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(getProfileStorageKey(profileId));
      if (raw) {
        return JSON.parse(raw);
      }
      const legacy = localStorage.getItem('specter_ctf_store_v2');
      if (legacy) {
        const parsed = JSON.parse(legacy);
        const state = parsed.state || parsed;
        if (state.machines) {
          return state;
        }
      }
    } catch {}
  }
  return null;
};

export const mergeMachinesWithCatalog = (storedMachines?: Machine[]): Machine[] => {
  const map = new Map<string, Machine>();
  INITIAL_MACHINES.forEach((m) => map.set(m.id, m));
  if (Array.isArray(storedMachines)) {
    storedMachines.forEach((m) => {
      const defaultM = map.get(m.id);
      if (defaultM?.status === 'completed' && m.status !== 'completed') {
        map.set(m.id, { ...m, ...defaultM });
      } else {
        map.set(m.id, m);
      }
    });
  }
  return Array.from(map.values());
};

const initialProfileId = getInitialProfileId();
const initialProfileData = loadInitialProfileData(initialProfileId);

export const useCtfStore = create<CtfStoreState>()(
  persist(
    (set, get) => ({
      machines: mergeMachinesWithCatalog(initialProfileData?.machines),
      activeTargetId: initialProfileData?.activeTargetId || null,
      globalVars: initialProfileData?.globalVars || DEFAULT_GLOBAL_VARS,
      cheatsheets: initialProfileData?.cheatsheets || INITIAL_CHEATSHEET,
      activitySessions: initialProfileData?.activitySessions || [],
      currentProfileId: initialProfileId,

      appBrand: 'rootvector',
      activeTab: 'tracker',
      viewMode: 'kanban',
      selectedMachineId: null,
      writeupMachineId: null,
      commandPaletteOpen: false,
      newMachineModalOpen: false,
      backupModalOpen: false,
      reconAutomationModalOpen: false,
      mobileMenuOpen: false,
      crtOverlay: false,
      soundEnabled: true,
      isTimerRunning: false,
      activeTimerSeconds: 0,
      filters: DEFAULT_FILTERS,

      setAppBrand: (brandId) => set({ appBrand: brandId }),
      setActiveTab: (tab) => set({ activeTab: tab }),
      setViewMode: (mode) => set({ viewMode: mode }),
      setSelectedMachineId: (id) => set({ selectedMachineId: id }),
      setWriteupMachineId: (id) => set({ writeupMachineId: id }),
      setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
      setNewMachineModalOpen: (open) => set({ newMachineModalOpen: open }),
      setBackupModalOpen: (open) => set({ backupModalOpen: open }),
      setReconAutomationModalOpen: (open) => set({ reconAutomationModalOpen: open }),
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      toggleCrtOverlay: () => set((s) => ({ crtOverlay: !s.crtOverlay })),
      toggleSound: () => set((s) => ({ soundEnabled: !s.soundEnabled })),

      updateMachineStatus: (id, status) => {
        set((state) => {
          const now = new Date().toISOString();
          const today = now.slice(0, 10);
          const isNowRoot = status === 'root' || status === 'completed';
          const isNowFoothold = status === 'foothold' || isNowRoot;
          
          // Automatically stop the stopwatch timer when machine is rooted or completed
          const shouldStopTimer = isNowRoot && (state.activeTargetId === id || state.isTimerRunning);

          const updated = state.machines.map((m) => {
            if (m.id !== id) return m;

            const elapsed = state.activeTargetId === id ? state.activeTimerSeconds : 0;
            const finalTime = m.timeSpentSeconds > 0 ? m.timeSpentSeconds : elapsed;

            return {
              ...m,
              status,
              timeSpentSeconds: finalTime > 0 ? finalTime : m.timeSpentSeconds,
              userPwnedAt: isNowFoothold && !m.userPwnedAt ? now : m.userPwnedAt,
              rootPwnedAt: isNowRoot && !m.rootPwnedAt ? now : m.rootPwnedAt,
              timeToUserSeconds: isNowFoothold && !m.timeToUserSeconds ? finalTime : m.timeToUserSeconds,
              timeToRootSeconds: isNowRoot && !m.timeToRootSeconds ? finalTime : m.timeToRootSeconds,
              updatedAt: now,
            };
          });

          // Log activity session if root or completed
          let sessions = state.activitySessions;
          if (isNowRoot) {
            const m = state.machines.find(x => x.id === id);
            const duration = (state.activeTargetId === id && state.activeTimerSeconds > 0)
              ? state.activeTimerSeconds
              : (m?.timeSpentSeconds || 0);

            sessions = [
              ...sessions,
              {
                id: 'sess-' + Date.now(),
                machineId: id,
                machineName: m?.name || 'Unknown',
                date: today,
                durationSeconds: duration,
                type: 'root',
              }
            ];
          }

          return { 
            machines: updated, 
            activitySessions: sessions,
            isTimerRunning: shouldStopTimer ? false : state.isTimerRunning,
          };
        });
      },

      updateMachine: (id, updates) => {
        set((state) => {
          const isNowCompleted = updates.status === 'root' || updates.status === 'completed';
          const shouldStopTimer = isNowCompleted && (state.activeTargetId === id || state.isTimerRunning);

          return {
            machines: state.machines.map((m) =>
              m.id === id ? { ...m, ...updates, updatedAt: new Date().toISOString() } : m
            ),
            isTimerRunning: shouldStopTimer ? false : state.isTimerRunning,
          };
        });
      },

      addCustomMachine: (data) => {
        const id = 'custom-' + Date.now() + '-' + data.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const now = new Date().toISOString();
        const newMachine: Machine = {
          ...data,
          id,
          isCustom: true,
          timeSpentSeconds: 0,
          createdAt: now,
          updatedAt: now,
        };
        set((state) => ({
          machines: [newMachine, ...state.machines],
        }));
      },

      deleteMachine: (id) => {
        set((state) => ({
          machines: state.machines.filter((m) => m.id !== id),
          activeTargetId: state.activeTargetId === id ? null : state.activeTargetId,
          selectedMachineId: state.selectedMachineId === id ? null : state.selectedMachineId,
        }));
      },

      toggleUserFlag: (id, flagValue) => {
        set((state) => {
          const now = new Date().toISOString();
          const updated = state.machines.map((m) => {
            if (m.id !== id) return m;
            const hadUser = Boolean(m.userPwnedAt);
            const userPwnedAt = hadUser ? undefined : now;
            let status = m.status;
            if (!hadUser && status === 'backlog') status = 'foothold';
            return {
              ...m,
              userFlag: flagValue !== undefined ? flagValue : m.userFlag,
              userPwnedAt,
              status,
              timeToUserSeconds: !hadUser ? m.timeSpentSeconds : m.timeToUserSeconds,
              updatedAt: now,
            };
          });
          return { machines: updated };
        });
      },

      toggleRootFlag: (id, flagValue) => {
        set((state) => {
          const now = new Date().toISOString();
          const updated = state.machines.map((m) => {
            if (m.id !== id) return m;
            const hadRoot = Boolean(m.rootPwnedAt);
            const rootPwnedAt = hadRoot ? undefined : now;
            let status = m.status;
            if (!hadRoot) status = 'root';
            return {
              ...m,
              rootFlag: flagValue !== undefined ? flagValue : m.rootFlag,
              rootPwnedAt,
              status,
              timeToRootSeconds: !hadRoot ? m.timeSpentSeconds : m.timeToRootSeconds,
              updatedAt: now,
            };
          });
          return { machines: updated };
        });
      },

      setMachineOpenPorts: (machineId, ports) => {
        set((state) => ({
          machines: state.machines.map((m) =>
            m.id === machineId
              ? {
                  ...m,
                  openPorts: ports,
                  checklist: {
                    openPorts: ports,
                    activeItemId: m.checklist?.activeItemId || null,
                    itemsState: m.checklist?.itemsState || {},
                  },
                  updatedAt: new Date().toISOString(),
                }
              : m
          ),
        }));
      },

      setChecklistItemStatus: (machineId, itemId, status) => {
        set((state) => {
          const now = new Date().toISOString();
          return {
            machines: state.machines.map((m) => {
              if (m.id !== machineId) return m;

              const existingChecklist = m.checklist || {
                openPorts: m.openPorts || [],
                activeItemId: null,
                itemsState: {},
              };

              const currentItem = existingChecklist.itemsState[itemId] || { status: 'todo' };
              const startedAt = status === 'in_progress' ? (currentItem.startedAt || now) : currentItem.startedAt;
              const completedAt = status === 'done' ? now : (status === 'todo' ? undefined : currentItem.completedAt);
              const activeItemId = status === 'in_progress' ? itemId : (existingChecklist.activeItemId === itemId ? null : existingChecklist.activeItemId);

              return {
                ...m,
                checklist: {
                  ...existingChecklist,
                  activeItemId,
                  itemsState: {
                    ...existingChecklist.itemsState,
                    [itemId]: {
                      ...currentItem,
                      status,
                      startedAt,
                      completedAt,
                    },
                  },
                },
                updatedAt: now,
              };
            }),
          };
        });
      },

      setChecklistItemNotes: (machineId, itemId, notes) => {
        set((state) => ({
          machines: state.machines.map((m) => {
            if (m.id !== machineId) return m;
            const existingChecklist = m.checklist || {
              openPorts: m.openPorts || [],
              activeItemId: null,
              itemsState: {},
            };
            const currentItem = existingChecklist.itemsState[itemId] || { status: 'todo' };

            return {
              ...m,
              checklist: {
                ...existingChecklist,
                itemsState: {
                  ...existingChecklist.itemsState,
                  [itemId]: {
                    ...currentItem,
                    notes,
                  },
                },
              },
              updatedAt: new Date().toISOString(),
            };
          }),
        }));
      },

      setActiveChecklistItem: (machineId, itemId) => {
        set((state) => ({
          machines: state.machines.map((m) =>
            m.id === machineId
              ? {
                  ...m,
                  checklist: {
                    openPorts: m.openPorts || [],
                    activeItemId: itemId,
                    itemsState: m.checklist?.itemsState || {},
                  },
                  updatedAt: new Date().toISOString(),
                }
              : m
          ),
        }));
      },

      resetMachineChecklist: (machineId) => {
        set((state) => ({
          machines: state.machines.map((m) =>
            m.id === machineId
              ? {
                  ...m,
                  checklist: {
                    openPorts: m.openPorts || [],
                    activeItemId: null,
                    itemsState: {},
                  },
                  updatedAt: new Date().toISOString(),
                }
              : m
          ),
        }));
      },

      setActiveTarget: (id) => {
        set((state) => {
          // Flush current timer to active target before switching
          let updatedMachines = state.machines;
          if (state.activeTargetId) {
            updatedMachines = updatedMachines.map((m) =>
              m.id === state.activeTargetId
                ? { ...m, timeSpentSeconds: state.activeTimerSeconds }
                : m
            );
          }

          if (!id) {
            return {
              machines: updatedMachines,
              activeTargetId: null,
              isTimerRunning: false,
              activeTimerSeconds: 0,
            };
          }

          const m = updatedMachines.find((x) => x.id === id);
          return {
            machines: updatedMachines,
            activeTargetId: id,
            activeTimerSeconds: m?.timeSpentSeconds || 0,
            globalVars: {
              ...state.globalVars,
              targetIp: m?.ip && !m.ip.includes('x') ? m.ip : state.globalVars.targetIp,
            },
          };
        });
      },

      startTimer: () => set({ isTimerRunning: true }),

      pauseTimer: () => {
        set((state) => {
          if (!state.activeTargetId) return { isTimerRunning: false };
          const updated = state.machines.map((m) =>
            m.id === state.activeTargetId
              ? { ...m, timeSpentSeconds: state.activeTimerSeconds }
              : m
          );
          return { machines: updated, isTimerRunning: false };
        });
      },

      resetTimer: (machineId) => {
        set((state) => {
          const targetId = machineId || state.activeTargetId;
          if (!targetId) return { isTimerRunning: false, activeTimerSeconds: 0 };
          const updated = state.machines.map((m) =>
            m.id === targetId ? { ...m, timeSpentSeconds: 0 } : m
          );
          return {
            machines: updated,
            activeTimerSeconds: targetId === state.activeTargetId ? 0 : state.activeTimerSeconds,
            isTimerRunning: false,
          };
        });
      },

      tickTimer: () => {
        set((state) => {
          if (!state.isTimerRunning || !state.activeTargetId) return {};
          const nextSecs = state.activeTimerSeconds + 1;
          // Periodically sync to machines array every 10 seconds for persistence without 1Hz re-render storm
          if (nextSecs % 10 === 0) {
            const updated = state.machines.map((m) =>
              m.id === state.activeTargetId ? { ...m, timeSpentSeconds: nextSecs } : m
            );
            return { activeTimerSeconds: nextSecs, machines: updated };
          }
          return { activeTimerSeconds: nextSecs };
        });
      },

      setGlobalVars: (vars) => {
        set((state) => ({
          globalVars: {
            ...state.globalVars,
            ...vars,
            customVars: {
              ...state.globalVars.customVars,
              ...(vars.customVars || {}),
            }
          }
        }));
      },

      addCustomCommand: (cmd) => {
        const id = 'cmd-' + Date.now();
        const newCmd: CheatsheetCommand = {
          ...cmd,
          id,
          isCustom: true,
          isStarred: false,
        };
        set((state) => ({
          cheatsheets: [newCmd, ...state.cheatsheets],
        }));
      },

      deleteCustomCommand: (id) => {
        set((state) => ({
          cheatsheets: state.cheatsheets.filter((c) => c.id !== id),
        }));
      },

      toggleStarCommand: (id) => {
        set((state) => ({
          cheatsheets: state.cheatsheets.map((c) =>
            c.id === id ? { ...c, isStarred: !c.isStarred } : c
          ),
        }));
      },

      setFilters: (f) => set((s) => ({ filters: { ...s.filters, ...f } })),
      resetFilters: () => set({ filters: DEFAULT_FILTERS }),

      exportBackup: () => {
        const state = get();
        const exportData = {
          version: '2.0.0',
          exportedAt: new Date().toISOString(),
          machines: state.machines,
          globalVars: state.globalVars,
          cheatsheets: state.cheatsheets,
          activitySessions: state.activitySessions,
        };
        return JSON.stringify(exportData, null, 2);
      },

      importBackup: (jsonStr) => {
        try {
          const data = JSON.parse(jsonStr);
          if (!data || typeof data !== 'object') return false;

          const machinesToSet = Array.isArray(data.machines) ? data.machines : null;
          if (machinesToSet) {
            set((state) => ({
              machines: machinesToSet,
              globalVars: data.globalVars || state.globalVars,
              cheatsheets: Array.isArray(data.cheatsheets) ? data.cheatsheets : state.cheatsheets,
              activitySessions: Array.isArray(data.activitySessions) ? data.activitySessions : state.activitySessions,
            }));
            return true;
          }
          return false;
        } catch (e) {
          console.error('Failed to parse backup JSON:', e);
          return false;
        }
      },

      loadProfileData: (profileId: string) => {
        const currentId = get().currentProfileId || 'guest';
        get().saveProfileData(currentId);

        const targetKey = getProfileStorageKey(profileId);
        const raw = localStorage.getItem(targetKey);
        if (raw) {
          try {
            const data = JSON.parse(raw);
            set({
              currentProfileId: profileId,
              machines: mergeMachinesWithCatalog(data.machines),
              activeTargetId: data.activeTargetId || null,
              globalVars: data.globalVars || DEFAULT_GLOBAL_VARS,
              cheatsheets: data.cheatsheets || INITIAL_CHEATSHEET,
              activitySessions: Array.isArray(data.activitySessions) ? data.activitySessions : [],
            });
            return;
          } catch (e) {
            console.error('Failed to parse target profile data:', e);
          }
        }

        if (currentId === 'guest' && profileId !== 'guest') {
          const payload = {
            machines: get().machines,
            activeTargetId: get().activeTargetId,
            globalVars: get().globalVars,
            cheatsheets: get().cheatsheets,
            activitySessions: get().activitySessions,
          };
          localStorage.setItem(targetKey, JSON.stringify(payload));
          set({ currentProfileId: profileId });
          return;
        }

        set({
          currentProfileId: profileId,
          machines: INITIAL_MACHINES,
          activeTargetId: null,
          globalVars: DEFAULT_GLOBAL_VARS,
          cheatsheets: INITIAL_CHEATSHEET,
          activitySessions: [],
        });
        get().saveProfileData(profileId);
      },

      saveProfileData: (profileId?: string) => {
        const targetId = profileId || get().currentProfileId || 'guest';
        const targetKey = getProfileStorageKey(targetId);
        const payload = {
          machines: get().machines,
          activeTargetId: get().activeTargetId,
          globalVars: get().globalVars,
          cheatsheets: get().cheatsheets,
          activitySessions: get().activitySessions,
        };
        try {
          localStorage.setItem(targetKey, JSON.stringify(payload));
        } catch (e) {
          console.error('Failed to save profile data:', e);
        }
      },

      resetAllProgress: () => {
        const targetId = get().currentProfileId || 'guest';
        set(() => ({
          machines: INITIAL_MACHINES,
          activeTargetId: null,
          isTimerRunning: false,
          activitySessions: [],
        }));
        get().saveProfileData(targetId);
      }
    }),
    {
      name: 'specter_ctf_store_v2',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        currentProfileId: state.currentProfileId,
        machines: state.machines,
        activeTargetId: state.activeTargetId,
        globalVars: state.globalVars,
        cheatsheets: state.cheatsheets,
        activitySessions: state.activitySessions,
        viewMode: state.viewMode,
        crtOverlay: state.crtOverlay,
        soundEnabled: state.soundEnabled,
      }),
    }
  )
);

// Auto-save data to the active profile whenever state changes
useCtfStore.subscribe((state) => {
  if (typeof window !== 'undefined' && state.currentProfileId) {
    const targetKey = getProfileStorageKey(state.currentProfileId);
    const payload = {
      machines: state.machines,
      activeTargetId: state.activeTargetId,
      globalVars: state.globalVars,
      cheatsheets: state.cheatsheets,
      activitySessions: state.activitySessions,
    };
    try {
      localStorage.setItem(targetKey, JSON.stringify(payload));
    } catch {}
  }
});

