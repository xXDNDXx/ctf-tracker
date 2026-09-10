import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Machine, PipelineStatus, CheatsheetCommand, GlobalVariables, ActivitySession, ViewMode, Platform, Difficulty, OperatingSystem } from '../types';
import { INITIAL_MACHINES } from '../data/machinesCatalog';
import { INITIAL_CHEATSHEET } from '../data/cheatsheetsData';
import type { CptsNoteEntry } from '../utils/obsidianManualUtils';
import { saveVaultToIndexedDb, loadVaultFromIndexedDb, clearVaultFromIndexedDb } from '../utils/indexedDbVault';
import { encryptPayload, decryptPayload } from '../utils/cryptoUtils';

export type BoxVectorCategory = 'ALL' | 'Web' | 'Linux PrivEsc' | 'Windows PrivEsc' | 'Active Directory' | 'Binary / Pwn' | 'Network / SMB';
export type SortOption = 'default' | 'difficulty' | 'name' | 'ip' | 'recent';
export type SortDirection = 'asc' | 'desc';

export type StatusFilter = 'ALL' | 'completed' | 'foothold' | 'recon' | 'backlog';

export interface FilterState {
  searchQuery: string;
  selectedPlatform: Platform | 'ALL';
  selectedDifficulty: Difficulty | 'ALL';
  selectedCert: 'OSCP' | 'CPTS' | 'CRTO' | 'ALL';
  selectedOs: 'ALL' | OperatingSystem;
  selectedCategory: BoxVectorCategory;
  selectedVulnCategory?: string | 'ALL';
  selectedStatus?: StatusFilter;
  excludeActiveDirectory?: boolean;
  hasWriteupPdf?: boolean;
  hasNotes?: boolean;
  selectedTrack: string | 'ALL';
  selectedTags: string[];
  sortBy: SortOption;
  sortDirection: SortDirection;
  hideEmptyLanes: boolean;
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
    id: 'zerobox',
    namePrefix: 'ZERO',
    nameSuffix: 'BOX',
    suffixColor: 'text-cyber-cyan',
    tagline: 'Tactical Cyber Operations Suite',
    badge: 'v2.0',
  },
  {
    id: 'specter',
    namePrefix: 'SPECTER',
    nameSuffix: 'CTF',
    suffixColor: 'text-cyber-cyan',
    tagline: 'Tactical Cyber Operations Suite',
    badge: 'v2.0',
  },
  {
    id: 'rootvector',
    namePrefix: 'ROOT',
    nameSuffix: 'VECTOR',
    suffixColor: 'text-cyber-emerald',
    tagline: 'CTF & Lab Operations Tracker',
    badge: '',
  },
  {
    id: 'hextracker',
    namePrefix: 'HEX',
    nameSuffix: 'TRACKER',
    suffixColor: 'text-cyber-purple',
    tagline: 'Tactical Pwn Tracker // v2.0',
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
  activeTab: 'tracker' | 'cheatsheet' | 'field-manual' | 'writeup' | 'analytics' | 'methodology' | 'exam';
  viewMode: ViewMode;
  selectedMachineId: string | null;
  writeupMachineId: string | null;
  reportMachineId: string | null;
  commandPaletteOpen: boolean;
  newMachineModalOpen: boolean;
  backupModalOpen: boolean;
  reconAutomationModalOpen: boolean;
  operatorModalOpen: boolean;
  mobileMenuOpen: boolean;
  crtOverlay: boolean;
  soundEnabled: boolean;
  uiScale: 'tiny' | 'compact' | 'normal' | 'large' | 'huge';
  
  // Timer State
  isTimerRunning: boolean;
  activeTimerSeconds: number;
  
  // Filters
  filters: FilterState;

  // Actions
  setAppBrand: (brandId: string) => void;
  setActiveTab: (tab: 'tracker' | 'cheatsheet' | 'field-manual' | 'writeup' | 'analytics' | 'methodology' | 'exam') => void;
  setViewMode: (mode: ViewMode) => void;
  setSelectedMachineId: (id: string | null) => void;
  setWriteupMachineId: (id: string | null) => void;
  setReportMachineId: (id: string | null) => void;
  setCommandPaletteOpen: (open: boolean) => void;
  setNewMachineModalOpen: (open: boolean) => void;
  setBackupModalOpen: (open: boolean) => void;
  setReconAutomationModalOpen: (open: boolean) => void;
  setOperatorModalOpen: (open: boolean) => void;
  licenseModalOpen: boolean;
  setLicenseModalOpen: (open: boolean) => void;
  flexCardModalOpen: boolean;
  setFlexCardModalOpen: (open: boolean) => void;
  shortcutsModalOpen: boolean;
  setShortcutsModalOpen: (open: boolean) => void;
  pivotingMatrixModalOpen: boolean;
  setPivotingMatrixModalOpen: (open: boolean) => void;
  hashForgeModalOpen: boolean;
  hashForgeInitialHash: string | null;
  setHashForgeModalOpen: (open: boolean, initialHash?: string | null) => void;
  cyberForgeModalOpen: boolean;
  cyberForgeInitialPayload: string | null;
  setCyberForgeModalOpen: (open: boolean, initialPayload?: string | null) => void;
  cvssModalOpen: boolean;
  cvssInitialVector: string | null;
  cvssInsertHandler?: ((markdown: string) => void) | null;
  setCvssModalOpen: (open: boolean, initialVector?: string | null) => void;
  setCvssInsertHandler: (handler: ((markdown: string) => void) | null) => void;
  notesImportModalOpen: boolean;
  setNotesImportModalOpen: (open: boolean) => void;
  pdfModalMachineId: string | null;
  setPdfModalMachineId: (id: string | null) => void;
  openPdfModal: (machineId: string) => void;
  isVaultHydrated: boolean;
  userNotes: CptsNoteEntry[];
  userWikilinkMap: Record<string, string>;
  setUserNotes: (notes: CptsNoteEntry[]) => void;
  setUserWikilinkMap: (map: Record<string, string>) => void;
  importNotesFromJson: (jsonStr: string) => Promise<{ success: boolean; count: number; error?: string }>;
  clearUserNotes: () => Promise<void>;
  loadUserNotesFromDb: () => Promise<void>;
  setMobileMenuOpen: (open: boolean) => void;
  assignIpMachineId: string | null;
  setAssignIpMachineId: (id: string | null) => void;
  toggleCrtOverlay: () => void;
  toggleSound: () => void;
  setUiScale: (scale: 'tiny' | 'compact' | 'normal' | 'large' | 'huge') => void;
  cycleUiScale: () => void;
  zoomIn: () => void;
  zoomOut: () => void;

  // Machine Actions
  updateMachineStatus: (id: string, status: PipelineStatus) => void;
  batchUpdateMachineStatus: (updates: { machineId: string; status: PipelineStatus }[]) => void;
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
  tickTimer: (deltaSeconds?: number) => void;

  // Variables & Cheatsheet Actions
  setGlobalVars: (vars: Partial<GlobalVariables>) => void;
  addCustomCommand: (cmd: Omit<CheatsheetCommand, 'id' | 'isCustom'>) => void;
  deleteCustomCommand: (id: string) => void;
  toggleStarCommand: (id: string) => void;

  // Filters Actions
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;

  // Custom Notes & Field Manual State
  customNotes: CptsNoteEntry[];
  deletedNoteIds: string[];
  userSolvesReset: boolean;
  addCustomNote: (note: Partial<CptsNoteEntry> & { title: string }) => void;
  deleteNote: (noteId: string) => void;
  restoreDeletedNotes: () => void;
  resetSolvesToZero: () => void;
  restoreDanielSolves: () => void;

  // Data Import & Export & Profile Data Isolation
  currentProfileId: string;
  loadProfileData: (profileId: string) => void;
  saveProfileData: (profileId?: string) => void;
  exportBackup: (options?: { redactSecrets?: boolean; scope?: 'all' | 'targets' | 'cheatsheets' | 'notes' }) => string;
  exportEncryptedBackup: (password: string) => Promise<Blob>;
  importBackup: (jsonStr: string) => boolean;
  importEncryptedBackup: (fileBuffer: ArrayBuffer, password: string) => Promise<boolean>;
  resetAllProgress: () => void;
  panicWipeActiveSession: () => void;
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
  selectedVulnCategory: 'ALL',
  selectedStatus: 'ALL',
  excludeActiveDirectory: false,
  hasWriteupPdf: false,
  hasNotes: false,
  selectedTrack: 'ALL',
  selectedTags: [],
  sortBy: 'default',
  sortDirection: 'asc',
  hideEmptyLanes: false,
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

export const KNOWN_ACTIVE_SEASONAL_NAMES = new Set([
  'scaffold', 'blocksynergy', 'danglingtree', 'cohort', 'darkzeroreturns', 
  'bedside', 'paperwork', 'makesense', 'enigma', 'nimbus', 'checkpoint', 
  'connected', 'devhub', 'reactor', 'smarthire', 'pingpong', 'silentium', 
  'garfield', 'eloquia', 'hercules'
]);

export const mergeMachinesWithCatalog = (storedMachines?: Machine[], userSolvesReset: boolean = false): Machine[] => {
  const map = new Map<string, Machine>();
  const nameMap = new Map<string, Machine>();

  INITIAL_MACHINES.forEach((m) => {
    if (userSolvesReset) {
      const resetM: Machine = {
        ...m,
        status: 'backlog',
        userFlag: undefined,
        rootFlag: undefined,
        userPwnedAt: undefined,
        rootPwnedAt: undefined,
        timeSpentSeconds: 0,
        timeToUserSeconds: undefined,
        timeToRootSeconds: undefined,
      };
      map.set(m.id, resetM);
      nameMap.set(m.name.toLowerCase().trim(), resetM);
    } else {
      map.set(m.id, m);
      nameMap.set(m.name.toLowerCase().trim(), m);
    }
  });

  if (Array.isArray(storedMachines) && storedMachines.length > 0) {
    storedMachines.forEach((m) => {
      const catalogMachine = (m?.id ? map.get(m.id) : undefined) || (m?.name ? nameMap.get(m.name.toLowerCase().trim()) : undefined);
      if (catalogMachine) {
        if (userSolvesReset) {
          // User started fresh: respect their current status (unsolved/foothold/completed) and progress without forcing catalog completed status
          const mStatus = m.status || 'backlog';
          const hasUserFlag = Boolean(m.userFlag?.trim());
          const hasRootFlag = Boolean(m.rootFlag?.trim());
          const isFootholdOrAbove = mStatus === 'foothold' || mStatus === 'root' || mStatus === 'completed';
          const isRootOrAbove = mStatus === 'root' || mStatus === 'completed';
          map.set(catalogMachine.id, {
            ...catalogMachine,
            ...m,
            status: mStatus,
            userFlag: m.userFlag,
            rootFlag: m.rootFlag,
            userPwnedAt: isFootholdOrAbove || hasUserFlag ? m.userPwnedAt : undefined,
            rootPwnedAt: isRootOrAbove || hasRootFlag ? m.rootPwnedAt : undefined,
            timeSpentSeconds: m.timeSpentSeconds || 0,
            timeToUserSeconds: isFootholdOrAbove ? m.timeToUserSeconds : undefined,
            timeToRootSeconds: isRootOrAbove ? m.timeToRootSeconds : undefined,
            checklist: m.checklist || catalogMachine.checklist || { openPorts: [], activeItemId: null, itemsState: {} },
            openPorts: m.openPorts || catalogMachine.openPorts || [],
            quickNotes: m.quickNotes || catalogMachine.quickNotes,
            writeupMarkdown: m.writeupMarkdown || catalogMachine.writeupMarkdown,
            hint: catalogMachine.hint || m.hint,
            skillsLearned: catalogMachine.skillsLearned || m.skillsLearned,
            officialPdf: catalogMachine.officialPdf || m.officialPdf,
            officialSynopsis: catalogMachine.officialSynopsis || m.officialSynopsis,
            officialWalkthrough: catalogMachine.officialWalkthrough || m.officialWalkthrough,
            tags: Array.from(new Set([...(catalogMachine.tags || []), ...(m.tags || [])])),
            certifications: Array.from(new Set([...(catalogMachine.certifications || []), ...(m.certifications || [])])) as any,
          });
        } else {
          // Default baseline: Sync solve history unless user has modified status or progress
          if (catalogMachine.status === 'completed') {
            const resolvedStatus = m.status || 'completed';
            map.set(catalogMachine.id, {
              ...catalogMachine,
              ...m,
              status: resolvedStatus,
              userPwnedAt: m.userPwnedAt || catalogMachine.userPwnedAt || '2026-08-20T10:00:00.000Z',
              rootPwnedAt: m.rootPwnedAt || catalogMachine.rootPwnedAt || '2026-08-20T11:30:00.000Z',
              userFlag: m.userFlag !== undefined ? m.userFlag : catalogMachine.userFlag,
              rootFlag: m.rootFlag !== undefined ? m.rootFlag : catalogMachine.rootFlag,
              timeSpentSeconds: m.timeSpentSeconds > 0 ? m.timeSpentSeconds : (catalogMachine.timeSpentSeconds || 3600),
              timeToUserSeconds: m.timeToUserSeconds || catalogMachine.timeToUserSeconds || 1500,
              timeToRootSeconds: m.timeToRootSeconds || catalogMachine.timeToRootSeconds || 3600,
              quickNotes: m.quickNotes || catalogMachine.quickNotes,
              writeupMarkdown: m.writeupMarkdown || catalogMachine.writeupMarkdown,
              hint: catalogMachine.hint || m.hint,
              skillsLearned: catalogMachine.skillsLearned || m.skillsLearned,
              officialPdf: catalogMachine.officialPdf || m.officialPdf,
              officialSynopsis: catalogMachine.officialSynopsis || m.officialSynopsis,
              officialWalkthrough: catalogMachine.officialWalkthrough || m.officialWalkthrough,
              tags: Array.from(new Set([...(catalogMachine.tags || []), ...(m.tags || [])])),
              certifications: Array.from(new Set([...(catalogMachine.certifications || []), ...(m.certifications || [])])) as any,
            });
          } else if (catalogMachine.status === 'foothold') {
            const resolvedStatus = m.status || 'foothold';
            map.set(catalogMachine.id, {
              ...catalogMachine,
              ...m,
              status: resolvedStatus,
              userPwnedAt: m.userPwnedAt || catalogMachine.userPwnedAt || '2026-08-20T10:00:00.000Z',
              userFlag: m.userFlag !== undefined ? m.userFlag : catalogMachine.userFlag,
              timeSpentSeconds: m.timeSpentSeconds > 0 ? m.timeSpentSeconds : 1800,
              timeToUserSeconds: m.timeToUserSeconds || 1500,
              quickNotes: m.quickNotes || catalogMachine.quickNotes,
              writeupMarkdown: m.writeupMarkdown || catalogMachine.writeupMarkdown,
              hint: catalogMachine.hint || m.hint,
              skillsLearned: catalogMachine.skillsLearned || m.skillsLearned,
              officialPdf: catalogMachine.officialPdf || m.officialPdf,
              officialSynopsis: catalogMachine.officialSynopsis || m.officialSynopsis,
              officialWalkthrough: catalogMachine.officialWalkthrough || m.officialWalkthrough,
              tags: Array.from(new Set([...(catalogMachine.tags || []), ...(m.tags || [])])),
              certifications: Array.from(new Set([...(catalogMachine.certifications || []), ...(m.certifications || [])])) as any,
            });
          } else {
            const mStatus = m.status || 'backlog';
            const hasUserFlag = Boolean(m.userFlag?.trim());
            const hasRootFlag = Boolean(m.rootFlag?.trim());
            const isFootholdOrAbove = mStatus === 'foothold' || mStatus === 'root' || mStatus === 'completed';
            const isRootOrAbove = mStatus === 'root' || mStatus === 'completed';
            const userHasProgress = mStatus !== 'backlog' || hasUserFlag || hasRootFlag || (m.timeSpentSeconds > 0) || Boolean(m.quickNotes) || Boolean(m.writeupMarkdown);

            map.set(catalogMachine.id, {
              ...catalogMachine,
              ...(userHasProgress ? {
                status: mStatus,
                userFlag: m.userFlag,
                rootFlag: m.rootFlag,
                userPwnedAt: isFootholdOrAbove || hasUserFlag ? m.userPwnedAt : undefined,
                rootPwnedAt: isRootOrAbove || hasRootFlag ? m.rootPwnedAt : undefined,
                timeSpentSeconds: m.timeSpentSeconds,
                timeToUserSeconds: isFootholdOrAbove ? m.timeToUserSeconds : undefined,
                timeToRootSeconds: isRootOrAbove ? m.timeToRootSeconds : undefined,
                perceivedDifficulty: m.perceivedDifficulty,
                rating: m.rating,
                quickNotes: m.quickNotes,
                writeupMarkdown: m.writeupMarkdown,
                checklist: m.checklist,
                ip: m.ip && !m.ip.includes('x') ? m.ip : catalogMachine.ip,
              } : {}),
              hint: catalogMachine.hint || m.hint,
              skillsLearned: catalogMachine.skillsLearned || m.skillsLearned,
              officialPdf: catalogMachine.officialPdf || m.officialPdf,
              officialSynopsis: catalogMachine.officialSynopsis || m.officialSynopsis,
              officialWalkthrough: catalogMachine.officialWalkthrough || m.officialWalkthrough,
              tags: Array.from(new Set([...(catalogMachine.tags || []), ...(m.tags || [])])),
              certifications: Array.from(new Set([...(catalogMachine.certifications || []), ...(m.certifications || [])])) as any,
            });
          }
        }
      } else if (m.isCustom || (m.id && m.id.startsWith('custom-'))) {
        // Genuine custom user-added machine ONLY (prunes stale non-catalog educational rooms)
        map.set(m.id, m);
      }
    });
  }

  // Enforce Hack The Box Terms of Service compliance: Active machines MUST NEVER have writeupUrl or hint
  map.forEach((machine) => {
    const norm = (machine?.name || '').toLowerCase().trim();
    if (KNOWN_ACTIVE_SEASONAL_NAMES.has(norm)) {
      machine.isActive = true;
    }
    if (machine.isActive) {
      machine.writeupUrl = '';
      machine.hint = '';
      machine.officialWalkthrough = '';
      machine.officialSynopsis = '';
      machine.officialPdf = '';
    }
  });

  return Array.from(map.values());
};

/**
 * Extracts minimal lean delta records for catalog machines (plus all custom machines)
 * to prevent localStorage 5MB quota exhaustion and eliminate serialization lag.
 */
export const extractMachineDeltas = (machines: Machine[]): Machine[] => {
  if (!Array.isArray(machines) || machines.length === 0) return [];
  const catalogMap = new Map<string, Machine>();
  INITIAL_MACHINES.forEach((m) => catalogMap.set(m.id, m));

  const deltas: Machine[] = [];
  for (const m of machines) {
    if (m.isCustom || (m.id && m.id.startsWith('custom-'))) {
      deltas.push(m);
      continue;
    }
    const cat = catalogMap.get(m.id);
    if (!cat) continue;

    const hasStatusChange = m.status !== cat.status;
    const hasFlags = Boolean(m.userFlag && m.userFlag !== cat.userFlag) || Boolean(m.rootFlag && m.rootFlag !== cat.rootFlag);
    const hasPwnDates = Boolean(m.userPwnedAt && m.userPwnedAt !== cat.userPwnedAt) || Boolean(m.rootPwnedAt && m.rootPwnedAt !== cat.rootPwnedAt);
    const hasTime = (m.timeSpentSeconds || 0) > 0 && m.timeSpentSeconds !== (cat.timeSpentSeconds || 0);
    const hasNotes = Boolean(m.quickNotes?.trim()) || Boolean(m.writeupMarkdown?.trim());
    const hasChecklist = Boolean(m.checklist && ((m.checklist.itemsState && Object.keys(m.checklist.itemsState).length > 0) || (m.checklist.openPorts && m.checklist.openPorts.length > 0)));
    const hasCustomCreds = Boolean(m.credentials && m.credentials.length > 0);
    const hasIpOverride = Boolean(m.ip && m.ip !== cat.ip && !m.ip.includes('x'));

    if (hasStatusChange || hasFlags || hasPwnDates || hasTime || hasNotes || hasChecklist || hasCustomCreds || hasIpOverride) {
      // Retain lean delta without heavy static strings
      const { officialWalkthrough, officialSynopsis, officialPdf, hint, ...leanDelta } = m;
      deltas.push(leanDelta as Machine);
    }
  }
  return deltas;
};

export const createMachineStatusUpdate = (
  m: Machine,
  status: PipelineStatus,
  now: string,
  elapsed: number = 0
): Partial<Machine> => {
  const isPwned = status === 'root' || status === 'completed';
  const isFoothold = status === 'foothold' || isPwned;
  const finalTime = elapsed > 0 ? elapsed : (m.timeSpentSeconds > 0 ? m.timeSpentSeconds : 0);

  return {
    status,
    timeSpentSeconds: finalTime > 0 ? finalTime : m.timeSpentSeconds,
    userPwnedAt: isFoothold ? (m.userPwnedAt || now) : undefined,
    userFlag: isFoothold ? m.userFlag : undefined,
    rootPwnedAt: isPwned ? (m.rootPwnedAt || now) : undefined,
    rootFlag: isPwned ? m.rootFlag : undefined,
    timeToUserSeconds: isFoothold ? (m.timeToUserSeconds || (finalTime > 0 ? finalTime : undefined)) : undefined,
    timeToRootSeconds: isPwned ? (m.timeToRootSeconds || (finalTime > 0 ? finalTime : undefined)) : undefined,
    updatedAt: now,
  };
};

export const mergeCheatsheetsWithInitial = (storedCheatsheets?: CheatsheetCommand[]): CheatsheetCommand[] => {
  const map = new Map<string, CheatsheetCommand>();
  INITIAL_CHEATSHEET.forEach((c) => map.set(c.id, { ...c }));

  if (Array.isArray(storedCheatsheets) && storedCheatsheets.length > 0) {
    storedCheatsheets.forEach((c) => {
      if (!c || typeof c !== 'object') return;
      const initial = c.id ? map.get(c.id) : undefined;
      if (initial) {
        map.set(initial.id, {
          ...initial,
          isStarred: Boolean(c.isStarred),
        });
      } else if (c.isCustom) {
        map.set(c.id, c);
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
      machines: mergeMachinesWithCatalog(initialProfileData?.machines, Boolean(initialProfileData?.userSolvesReset)),
      activeTargetId: initialProfileData?.activeTargetId || null,
      globalVars: initialProfileData?.globalVars || DEFAULT_GLOBAL_VARS,
      cheatsheets: mergeCheatsheetsWithInitial(initialProfileData?.cheatsheets),
      activitySessions: initialProfileData?.activitySessions || [],
      currentProfileId: initialProfileId,
      customNotes: initialProfileData?.customNotes || [],
      deletedNoteIds: initialProfileData?.deletedNoteIds || [],
      userSolvesReset: Boolean(initialProfileData?.userSolvesReset),

      appBrand: (!initialProfileData?.appBrand || initialProfileData?.appBrand === 'rootvector' || initialProfileData?.appBrand === 'specter') ? 'zerobox' : initialProfileData.appBrand,
      activeTab: 'tracker',
      viewMode: 'kanban',
      selectedMachineId: null,
      writeupMachineId: null,
      reportMachineId: null,
      commandPaletteOpen: false,
      newMachineModalOpen: false,
      backupModalOpen: false,
      reconAutomationModalOpen: false,
      operatorModalOpen: false,
      licenseModalOpen: false,
      flexCardModalOpen: false,
      shortcutsModalOpen: false,
      pivotingMatrixModalOpen: false,
      notesImportModalOpen: false,
      isVaultHydrated: false,
      userNotes: [],
      userWikilinkMap: {},
      mobileMenuOpen: false,
      assignIpMachineId: null,
      crtOverlay: false,
      soundEnabled: true,
      uiScale: 'normal',
      isTimerRunning: false,
      activeTimerSeconds: 0,
      filters: DEFAULT_FILTERS,

      setAppBrand: (brandId) => set({ appBrand: brandId }),
      setActiveTab: (tab) => set({ activeTab: tab }),
      setViewMode: (mode) => set({ viewMode: mode }),
      setSelectedMachineId: (id) => set({ selectedMachineId: id }),
      setWriteupMachineId: (id) => set({ writeupMachineId: id }),
      setReportMachineId: (id) => set({ reportMachineId: id }),
      setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
      setNewMachineModalOpen: (open) => set({ newMachineModalOpen: open }),
      setBackupModalOpen: (open) => set({ backupModalOpen: open }),
      setReconAutomationModalOpen: (open) => set({ reconAutomationModalOpen: open }),
      setOperatorModalOpen: (open) => set({ operatorModalOpen: open }),
      setLicenseModalOpen: (open) => set({ licenseModalOpen: open }),
      setFlexCardModalOpen: (open) => set({ flexCardModalOpen: open }),
      setShortcutsModalOpen: (open) => set({ shortcutsModalOpen: open }),
      setPivotingMatrixModalOpen: (open) => set({ pivotingMatrixModalOpen: open }),
      hashForgeModalOpen: false,
      hashForgeInitialHash: null,
      setHashForgeModalOpen: (open, initialHash = null) => set({ hashForgeModalOpen: open, hashForgeInitialHash: initialHash }),
      cyberForgeModalOpen: false,
      cyberForgeInitialPayload: null,
      setCyberForgeModalOpen: (open, initialPayload = null) => set({ cyberForgeModalOpen: open, cyberForgeInitialPayload: initialPayload }),
      cvssModalOpen: false,
      cvssInitialVector: null,
      cvssInsertHandler: null,
      setCvssModalOpen: (open, initialVector = null) => set({ cvssModalOpen: open, cvssInitialVector: initialVector }),
      setCvssInsertHandler: (handler) => set({ cvssInsertHandler: handler }),
      setNotesImportModalOpen: (open) => set({ notesImportModalOpen: open }),
      pdfModalMachineId: null,
      setPdfModalMachineId: (id) => set({ pdfModalMachineId: id }),
      openPdfModal: (machineId) => set({ pdfModalMachineId: machineId }),
      setUserNotes: (notes) => set({ userNotes: notes, isVaultHydrated: true }),
      setUserWikilinkMap: (map) => set({ userWikilinkMap: map }),
      importNotesFromJson: async (jsonStr) => {
        try {
          const parsed = JSON.parse(jsonStr);
          const notes: CptsNoteEntry[] = Array.isArray(parsed)
            ? parsed
            : (Array.isArray(parsed.notes) ? parsed.notes : []);

          if (!notes.length) {
            return { success: false, count: 0, error: 'No valid notes array found in JSON payload.' };
          }

          const wikilinkMap: Record<string, string> = parsed.wikilinkMap || {};
          await saveVaultToIndexedDb({ notes, wikilinkMap });
          set({ userNotes: notes, userWikilinkMap: wikilinkMap, isVaultHydrated: true });
          return { success: true, count: notes.length };
        } catch (err: any) {
          return { success: false, count: 0, error: err?.message || 'Invalid JSON format' };
        }
      },
      clearUserNotes: async () => {
        await clearVaultFromIndexedDb();
        set({ userNotes: [], userWikilinkMap: {}, deletedNoteIds: [], customNotes: [], isVaultHydrated: true });
      },
      loadUserNotesFromDb: async () => {
        try {
          const vault = await loadVaultFromIndexedDb();
          if (vault && vault.notes && vault.notes.length > 0) {
            set({ 
              userNotes: vault.notes,
              userWikilinkMap: vault.wikilinkMap || {}
            });
          }
        } catch (err) {
          console.warn('[ZeroBox] Could not load user notes from IndexedDB', err);
        } finally {
          set({ isVaultHydrated: true });
        }
      },
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      setAssignIpMachineId: (id) => set({ assignIpMachineId: id }),
      toggleCrtOverlay: () => set((s) => ({ crtOverlay: !s.crtOverlay })),
      toggleSound: () => set((s) => {
        const next = !s.soundEnabled;
        if (typeof window !== 'undefined') {
          (window as any).__ZEROBOX_SOUND_DISABLED__ = !next;
        }
        return { soundEnabled: next };
      }),
      setUiScale: (scale) => set({ uiScale: scale }),
      zoomIn: () => set((s) => {
        const order: Array<'tiny' | 'compact' | 'normal' | 'large' | 'huge'> = ['tiny', 'compact', 'normal', 'large', 'huge'];
        const currentIdx = order.indexOf(s.uiScale || 'normal');
        const nextIdx = Math.min(order.length - 1, currentIdx + 1);
        return { uiScale: order[nextIdx] };
      }),
      zoomOut: () => set((s) => {
        const order: Array<'tiny' | 'compact' | 'normal' | 'large' | 'huge'> = ['tiny', 'compact', 'normal', 'large', 'huge'];
        const currentIdx = order.indexOf(s.uiScale || 'normal');
        const nextIdx = Math.max(0, currentIdx - 1);
        return { uiScale: order[nextIdx] };
      }),
      cycleUiScale: () => set((s) => {
        const order: Array<'tiny' | 'compact' | 'normal' | 'large' | 'huge'> = ['tiny', 'compact', 'normal', 'large', 'huge'];
        const currentIdx = order.indexOf(s.uiScale || 'normal');
        const nextIdx = (currentIdx + 1) % order.length;
        return { uiScale: order[nextIdx] };
      }),

      updateMachineStatus: (id, status) => {
        set((state) => {
          const now = new Date().toISOString();
          const today = now.slice(0, 10);
          const isNowRoot = status === 'root' || status === 'completed';
          const shouldStopTimer = isNowRoot && state.activeTargetId === id && state.isTimerRunning;
          const liveElapsed = state.activeTargetId === id ? state.activeTimerSeconds : 0;

          const updated = state.machines.map((m) => {
            if (m.id !== id) return m;
            return {
              ...m,
              ...createMachineStatusUpdate(m, status, now, liveElapsed),
            };
          });

          // Log activity session if root or completed
          let sessions = state.activitySessions;
          if (isNowRoot) {
            const m = state.machines.find(x => x.id === id);
            const duration = liveElapsed > 0 ? liveElapsed : (m?.timeSpentSeconds || 0);

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

      batchUpdateMachineStatus: (updates) => {
        if (!updates || updates.length === 0) return;
        const updateMap = new Map(updates.map(u => [u.machineId, u.status]));
        const now = new Date().toISOString();
        set((state) => {
          const updated = state.machines.map((m) => {
            const targetStatus = updateMap.get(m.id);
            if (!targetStatus) return m;
            return {
              ...m,
              ...createMachineStatusUpdate(m, targetStatus, now, 0),
              rootFlag: m.rootFlag,
              userFlag: m.userFlag,
            };
          });
          return { machines: updated };
        });
      },

      updateMachine: (id, updates) => {
        set((state) => {
          const isNowCompleted = updates.status === 'root' || updates.status === 'completed';
          const shouldStopTimer = isNowCompleted && state.activeTargetId === id && state.isTimerRunning;
          const syncTargetIp = Boolean(state.activeTargetId === id && updates.ip);

          return {
            machines: state.machines.map((m) => {
              if (m.id !== id) return m;
              const merged = { ...m, ...updates, updatedAt: new Date().toISOString() };
              const norm = merged.name.toLowerCase().trim();
              if (KNOWN_ACTIVE_SEASONAL_NAMES.has(norm)) {
                merged.isActive = true;
              }
              if (merged.isActive) {
                merged.writeupUrl = '';
                merged.hint = '';
                merged.officialWalkthrough = '';
                merged.officialSynopsis = '';
                merged.officialPdf = '';
              }
              return merged;
            }),
            globalVars: syncTargetIp
              ? { ...state.globalVars, targetIp: updates.ip! }
              : state.globalVars,
            isTimerRunning: shouldStopTimer ? false : state.isTimerRunning,
          };
        });
      },

      addCustomMachine: (data) => {
        const id = 'custom-' + Date.now() + '-' + data.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const now = new Date().toISOString();
        const norm = data.name.toLowerCase().trim();
        const isKnownActive = KNOWN_ACTIVE_SEASONAL_NAMES.has(norm);
        const isActive = Boolean(data.isActive || isKnownActive);

        const newMachine: Machine = {
          ...data,
          id,
          isCustom: true,
          isActive,
          // If active seasonal lab, enforce HTB ToS sanitation strictly at intake
          writeupUrl: isActive ? '' : (data.writeupUrl || ''),
          hint: isActive ? '' : (data.hint || ''),
          officialWalkthrough: '',
          officialSynopsis: '',
          officialPdf: '',
          timeSpentSeconds: 0,
          createdAt: now,
          updatedAt: now,
        };
        set((state) => ({
          machines: [newMachine, ...state.machines],
        }));
        get().saveProfileData();
      },

      deleteMachine: (id) => {
        set((state) => ({
          machines: state.machines.filter((m) => m.id !== id),
          activeTargetId: state.activeTargetId === id ? null : state.activeTargetId,
          selectedMachineId: state.selectedMachineId === id ? null : state.selectedMachineId,
          writeupMachineId: state.writeupMachineId === id ? null : state.writeupMachineId,
          reportMachineId: state.reportMachineId === id ? null : state.reportMachineId,
          isTimerRunning: state.activeTargetId === id ? false : state.isTimerRunning,
          activeTimerSeconds: state.activeTargetId === id ? 0 : state.activeTimerSeconds,
        }));
        get().saveProfileData();
      },

      toggleUserFlag: (id, flagValue) => {
        set((state) => {
          const now = new Date().toISOString();
          const isTimerTarget = state.activeTargetId === id;
          const liveElapsed = isTimerTarget && state.activeTimerSeconds > 0 ? state.activeTimerSeconds : 0;

          const updated = state.machines.map((m) => {
            if (m.id !== id) return m;
            const hadUser = Boolean(m.userPwnedAt || m.userFlag?.trim());

            if (hadUser) {
              // Untoggle / Remove User solve if clicked by mistake
              let status: PipelineStatus = m.status === 'foothold' ? 'backlog' : m.status;
              return {
                ...m,
                userFlag: undefined,
                userPwnedAt: undefined,
                timeToUserSeconds: undefined,
                status,
                updatedAt: now,
              };
            } else {
              // Toggle on User solve
              const finalTime = liveElapsed > 0 ? liveElapsed : (m.timeSpentSeconds > 0 ? m.timeSpentSeconds : 0);
              let status: PipelineStatus = (m.status === 'backlog' || m.status === 'recon') ? 'foothold' : m.status;
              return {
                ...m,
                userFlag: flagValue || 'HTB{user_pwn_verified}',
                userPwnedAt: now,
                status,
                timeSpentSeconds: finalTime > 0 ? finalTime : m.timeSpentSeconds,
                timeToUserSeconds: m.timeToUserSeconds || (finalTime > 0 ? finalTime : undefined),
                updatedAt: now,
              };
            }
          });
          return { machines: updated };
        });
      },

      toggleRootFlag: (id, flagValue) => {
        set((state) => {
          const now = new Date().toISOString();
          const today = now.split('T')[0];
          const isTimerTarget = state.activeTargetId === id;
          const liveElapsed = isTimerTarget && state.activeTimerSeconds > 0 ? state.activeTimerSeconds : 0;
          let transitionedToRoot = false;
          let untoggledRoot = false;

          const updated = state.machines.map((m) => {
            if (m.id !== id) return m;
            const hadRoot = Boolean(m.rootPwnedAt || m.rootFlag?.trim());

            if (hadRoot) {
              untoggledRoot = true;
              // Untoggle / Remove Root solve if clicked by mistake
              // Check if user solve was purely auto-injected by Root:
              const wasAutoUser = m.userFlag === 'HTB{user_pwn_verified}' && m.userPwnedAt === m.rootPwnedAt;
              const hasGenuineUser = !wasAutoUser && Boolean(m.userPwnedAt || m.userFlag?.trim());
              const status: PipelineStatus = hasGenuineUser ? 'foothold' : 'backlog';
              return {
                ...m,
                rootFlag: undefined,
                rootPwnedAt: undefined,
                timeToRootSeconds: undefined,
                userFlag: wasAutoUser ? undefined : m.userFlag,
                userPwnedAt: wasAutoUser ? undefined : m.userPwnedAt,
                timeToUserSeconds: wasAutoUser ? undefined : m.timeToUserSeconds,
                status,
                updatedAt: now,
              };
            } else {
              // Toggle on Root solve
              transitionedToRoot = true;
              const hasUser = Boolean(m.userPwnedAt || m.userFlag?.trim());
              const status: PipelineStatus = 'root';
              const finalTime = liveElapsed > 0 ? liveElapsed : (m.timeSpentSeconds > 0 ? m.timeSpentSeconds : 0);
              return {
                ...m,
                rootFlag: flagValue || 'HTB{root_pwn_verified}',
                rootPwnedAt: now,
                userPwnedAt: m.userPwnedAt || now,
                userFlag: m.userFlag || (hasUser ? m.userFlag : 'HTB{user_pwn_verified}'),
                status,
                timeSpentSeconds: finalTime > 0 ? finalTime : m.timeSpentSeconds,
                timeToRootSeconds: m.timeToRootSeconds || (finalTime > 0 ? finalTime : undefined),
                updatedAt: now,
              };
            }
          });

          // Sync activity session on root transition or untoggle
          let sessions = state.activitySessions;
          if (untoggledRoot) {
            sessions = sessions.filter((s) => !(s.machineId === id && s.type === 'root'));
          } else if (transitionedToRoot) {
            const m = state.machines.find((x) => x.id === id);
            const duration = liveElapsed > 0 ? liveElapsed : (m?.timeSpentSeconds || 0);
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
            isTimerRunning: (transitionedToRoot && isTimerTarget) ? false : state.isTimerRunning,
          };
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
          const isPlaceholderIp = Boolean(m && (!m.ip || m.ip.includes('x')));
          const isSameTarget = state.activeTargetId === id;
          return {
            machines: updatedMachines,
            activeTargetId: id,
            isTimerRunning: isSameTarget ? state.isTimerRunning : false,
            activeTimerSeconds: m?.timeSpentSeconds || 0,
            assignIpMachineId: isPlaceholderIp ? id : null,
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

      tickTimer: (deltaSeconds = 1) => {
        set((state) => {
          if (!state.isTimerRunning || !state.activeTargetId) return {};
          const delta = typeof deltaSeconds === 'number' && deltaSeconds > 0 ? deltaSeconds : 1;
          return { activeTimerSeconds: state.activeTimerSeconds + delta };
        });
      },

      setGlobalVars: (vars) => {
        set((state) => {
          const newVars = {
            ...state.globalVars,
            ...vars,
            customVars: {
              ...state.globalVars.customVars,
              ...(vars.customVars || {}),
            },
          };

          // Synchronize targetIp to active target machine ONLY if IP actually changed
          let updatedMachines = state.machines;
          if (vars.targetIp && state.activeTargetId) {
            const currentTarget = state.machines.find((m) => m.id === state.activeTargetId);
            if (currentTarget && currentTarget.ip !== vars.targetIp) {
              updatedMachines = state.machines.map((m) =>
                m.id === state.activeTargetId
                  ? { ...m, ip: vars.targetIp!, updatedAt: new Date().toISOString() }
                  : m
              );
            }
          }

          return {
            globalVars: newVars,
            machines: updatedMachines,
          };
        });
      },

      addCustomCommand: (cmd) => {
        const id = typeof crypto !== 'undefined' && crypto.randomUUID ? `cmd-${crypto.randomUUID()}` : `cmd-${Date.now()}`;
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

      addCustomNote: (note) => {
        const id = 'custom-note-' + Date.now();
        const fullNote: CptsNoteEntry = {
          id,
          title: note.title,
          titleEn: note.titleEn || note.title,
          titleHe: note.titleHe,
          category: note.category || 'General Methodology',
          rawCategory: note.rawCategory || note.category || 'General',
          subCategory: note.subCategory || '',
          tags: note.tags || ['custom'],
          difficulty: note.difficulty || 'Custom',
          summary: note.summary || '',
          enSummary: note.enSummary || note.summary || '',
          heSummary: note.heSummary,
          commands: note.commands || [],
          relPath: note.relPath || `${note.category || 'Custom'}/${note.title}.md`,
          filename: `${note.title}.md`,
          rawMarkdown: note.rawMarkdown || note.summary || '',
        };
        set((state) => ({
          customNotes: [fullNote, ...state.customNotes],
        }));
      },

      deleteNote: (noteId) => {
        const userNotes = get().userNotes || [];
        const isUserNote = userNotes.some((n) => n.id === noteId);
        if (isUserNote) {
          const updatedNotes = userNotes.filter((n) => n.id !== noteId);
          const updatedMap = { ...(get().userWikilinkMap || {}) };
          const target = userNotes.find((n) => n.id === noteId);
          if (target) {
            if (target.title) delete updatedMap[target.title.toLowerCase()];
            if (target.titleEn) delete updatedMap[target.titleEn.toLowerCase()];
            if (target.filename) delete updatedMap[target.filename.toLowerCase()];
          }
          saveVaultToIndexedDb({ notes: updatedNotes, wikilinkMap: updatedMap }).catch((err) =>
            console.warn('[ZeroBox] Could not persist note deletion to IndexedDB', err)
          );
          set((state) => ({
            userNotes: updatedNotes,
            userWikilinkMap: updatedMap,
            deletedNoteIds: [...new Set([...state.deletedNoteIds, noteId])],
            customNotes: state.customNotes.filter((n) => n.id !== noteId),
          }));
        } else {
          set((state) => ({
            deletedNoteIds: [...new Set([...state.deletedNoteIds, noteId])],
            customNotes: state.customNotes.filter((n) => n.id !== noteId),
          }));
        }
      },

      restoreDeletedNotes: () => {
        set(() => ({ deletedNoteIds: [] }));
      },

      resetSolvesToZero: () => {
        const targetId = get().currentProfileId || 'guest';
        set((state) => {
          const fresh: Machine[] = state.machines.map((m) => ({
            ...m,
            status: 'backlog' as PipelineStatus,
            userFlag: undefined,
            rootFlag: undefined,
            userPwnedAt: undefined,
            rootPwnedAt: undefined,
            timeSpentSeconds: 0,
            timeToUserSeconds: undefined,
            timeToRootSeconds: undefined,
          }));
          return {
            machines: fresh,
            activeTargetId: null,
            isTimerRunning: false,
            activeTimerSeconds: 0,
            activitySessions: [],
            userSolvesReset: true,
          };
        });
        get().saveProfileData(targetId);
      },

      restoreDanielSolves: () => {
        const targetId = get().currentProfileId || 'guest';
        const customMachines = get().machines.filter((m) => m.isCustom);
        set(() => ({
          machines: [...INITIAL_MACHINES, ...customMachines],
          userSolvesReset: false,
        }));
        get().saveProfileData(targetId);
      },

      exportBackup: (options?: { redactSecrets?: boolean; scope?: 'all' | 'targets' | 'cheatsheets' | 'notes' }) => {
        const state = get();
        const shouldRedact = options?.redactSecrets ?? true;
        const scope = options?.scope || 'all';

        let exportMachines = state.machines;
        if (state.activeTargetId && state.activeTimerSeconds > 0) {
          exportMachines = state.machines.map((m) =>
            m.id === state.activeTargetId ? { ...m, timeSpentSeconds: state.activeTimerSeconds } : m
          );
        }

        let exportGlobalVars = state.globalVars;
        if (shouldRedact) {
          const redactedCustom: Record<string, string> = {};
          if (state.globalVars.customVars) {
            for (const [key, val] of Object.entries(state.globalVars.customVars)) {
              const lower = key.toLowerCase();
              if (
                lower.includes('pass') ||
                lower.includes('secret') ||
                lower.includes('token') ||
                lower.includes('key') ||
                lower.includes('auth') ||
                lower.includes('cred')
              ) {
                redactedCustom[key] = '[REDACTED]';
              } else {
                redactedCustom[key] = val;
              }
            }
          }
          exportGlobalVars = {
            ...state.globalVars,
            lhost: '10.10.14.X',
            targetIp: '10.10.10.X',
            customVars: redactedCustom,
          };
          // Sanitize machine flag proofs and credential secrets
          exportMachines = exportMachines.map((m) => ({
            ...m,
            userFlag: m.userFlag ? '[REDACTED]' : undefined,
            rootFlag: m.rootFlag ? '[REDACTED]' : undefined,
            quickNotes: m.quickNotes
              ? m.quickNotes.replace(/^(\+Cred:?).*$/gim, '$1 [REDACTED]')
              : m.quickNotes,
            credentials: (m.credentials || []).map((c) => ({
              ...c,
              secret: '[REDACTED]',
              notes: c.notes ? '[REDACTED]' : undefined,
              crackedFromHash: c.crackedFromHash ? '[REDACTED]' : undefined,
            })),
          }));
        }

        const exportData: Record<string, any> = {
          version: '2.1.0',
          exportedAt: new Date().toISOString(),
          isRedacted: shouldRedact,
          scope,
        };

        if (scope === 'all' || scope === 'targets') {
          exportData.machines = exportMachines;
          exportData.globalVars = exportGlobalVars;
          exportData.userSolvesReset = state.userSolvesReset;
          exportData.activitySessions = state.activitySessions;
        }

        if (scope === 'all' || scope === 'cheatsheets') {
          exportData.cheatsheets = state.cheatsheets;
          exportData.customNotes = state.customNotes;
          exportData.deletedNoteIds = state.deletedNoteIds;
        }

        if (scope === 'all' || scope === 'notes') {
          exportData.userNotes = state.userNotes || [];
          exportData.userWikilinkMap = state.userWikilinkMap || {};
        }

        return JSON.stringify(exportData, null, 2);
      },

      exportEncryptedBackup: async (password: string) => {
        // Mode B: Full Secure Backup - strictly unredacted, encrypted with AES-256-GCM + PBKDF2 (600k rounds)
        const plainJson = get().exportBackup({ redactSecrets: false, scope: 'all' });
        const encryptedBuffer = await encryptPayload(plainJson, password);
        return new Blob([encryptedBuffer], { type: 'application/octet-stream' });
      },

      importBackup: (jsonStr) => {
        try {
          const data = JSON.parse(jsonStr);
          if (!data || typeof data !== 'object' || Array.isArray(data)) return false;

          const scope = data.scope || 'all';

          // 1. Targets & Machines Scope
          if (scope === 'all' || scope === 'targets' || Array.isArray(data.machines)) {
            const rawMachines = Array.isArray(data.machines) ? data.machines : null;
            if (rawMachines && rawMachines.length > 0) {
              const validMachines = rawMachines.filter((m: any) => {
                return m && typeof m === 'object' && typeof m.id === 'string' && m.id.trim().length > 0;
              });
              if (validMachines.length > 0) {
                const userSolvesReset = data.userSolvesReset !== undefined ? Boolean(data.userSolvesReset) : get().userSolvesReset;
                const normalizedMachines = mergeMachinesWithCatalog(
                  validMachines.map((m: any) => ({
                    ...m,
                    id: String(m.id).trim(),
                    name: typeof m.name === 'string' ? m.name : 'Unknown Target',
                    platform: (m.platform === 'HTB' || m.platform === 'THM' || m.platform === 'Other') ? m.platform : 'Other',
                    tags: Array.isArray(m?.tags) ? m.tags.filter((t: any) => typeof t === 'string') : [],
                    openPorts: Array.isArray(m?.openPorts) ? m.openPorts.map((p: any) => parseInt(p, 10)).filter((p: number) => !isNaN(p) && p >= 1 && p <= 65535) : [],
                    checklist: m?.checklist && typeof m.checklist === 'object' ? m.checklist : {},
                    credentials: Array.isArray(m?.credentials) ? m.credentials.filter((c: any) => c && typeof c === 'object' && typeof c.id === 'string') : [],
                  })),
                  userSolvesReset
                );
                set(() => ({
                  machines: normalizedMachines,
                  userSolvesReset,
                  ...(data.globalVars && typeof data.globalVars === 'object' ? { globalVars: data.globalVars } : {}),
                  ...(Array.isArray(data.activitySessions) ? { activitySessions: data.activitySessions } : {}),
                }));
              }
            }
          }

          // 2. Cheatsheets & Custom Notes Scope
          if (scope === 'all' || scope === 'cheatsheets') {
            if (Array.isArray(data.cheatsheets) || Array.isArray(data.customNotes) || Array.isArray(data.deletedNoteIds)) {
              set((state) => ({
                ...(Array.isArray(data.cheatsheets) ? { cheatsheets: data.cheatsheets } : {}),
                ...(Array.isArray(data.customNotes) ? { customNotes: data.customNotes } : {}),
                ...(Array.isArray(data.deletedNoteIds) ? { deletedNoteIds: data.deletedNoteIds } : {}),
              }));
            }
          }

          // 3. Obsidian Vault User Notes Scope
          if (scope === 'all' || scope === 'notes') {
            const importedUserNotes = Array.isArray(data.userNotes) ? data.userNotes : undefined;
            const importedWikilinks = (data.userWikilinkMap && typeof data.userWikilinkMap === 'object') ? data.userWikilinkMap : undefined;
            if (importedUserNotes !== undefined || importedWikilinks !== undefined) {
              set(() => ({
                ...(importedUserNotes !== undefined ? { userNotes: importedUserNotes } : {}),
                ...(importedWikilinks !== undefined ? { userWikilinkMap: importedWikilinks } : {}),
              }));
              if (importedUserNotes) {
                saveVaultToIndexedDb({ notes: importedUserNotes, wikilinkMap: importedWikilinks || {} });
              }
            }
          }

          get().saveProfileData();
          return true;
        } catch (e) {
          console.error('Failed to parse backup JSON:', e);
          return false;
        }
      },

      importEncryptedBackup: async (fileBuffer: ArrayBuffer, password: string) => {
        const decryptedJson = await decryptPayload(fileBuffer, password);
        return get().importBackup(decryptedJson);
      },

      loadProfileData: (profileId: string) => {
        const currentId = get().currentProfileId || 'guest';
        get().saveProfileData(currentId);

        const targetKey = getProfileStorageKey(profileId);
        const raw = localStorage.getItem(targetKey);
        if (raw) {
          try {
            const data = JSON.parse(raw);
            const userSolvesReset = Boolean(data.userSolvesReset);
            set({
              currentProfileId: profileId,
              userSolvesReset,
              machines: mergeMachinesWithCatalog(data.machines, userSolvesReset),
              activeTargetId: data.activeTargetId || null,
              globalVars: data.globalVars || DEFAULT_GLOBAL_VARS,
              cheatsheets: mergeCheatsheetsWithInitial(data.cheatsheets),
              activitySessions: Array.isArray(data.activitySessions) ? data.activitySessions : [],
              customNotes: Array.isArray(data.customNotes) ? data.customNotes : [],
              deletedNoteIds: Array.isArray(data.deletedNoteIds) ? data.deletedNoteIds : [],
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
            customNotes: get().customNotes,
            deletedNoteIds: get().deletedNoteIds,
            userSolvesReset: get().userSolvesReset,
            lastSaved: new Date().toISOString(),
          };
          try {
            localStorage.setItem(targetKey, JSON.stringify(payload));
          } catch (e) {
            console.error('Failed to initialize target profile storage:', e);
          }
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
          customNotes: [],
          deletedNoteIds: [],
          userSolvesReset: false,
        });
        get().saveProfileData(profileId);
      },

      saveProfileData: (profileId?: string) => {
        const state = get();
        const targetId = profileId || state.currentProfileId || 'guest';
        const targetKey = getProfileStorageKey(targetId);
        let persistedMachines = state.machines;
        if (state.activeTargetId && state.activeTimerSeconds > 0) {
          persistedMachines = state.machines.map((m) =>
            m.id === state.activeTargetId ? { ...m, timeSpentSeconds: state.activeTimerSeconds } : m
          );
        }

        // Optimize localStorage footprint: Persist only modified machine deltas & custom machines
        const machineDeltas = extractMachineDeltas(persistedMachines);

        const payload = {
          machines: machineDeltas,
          activeTargetId: state.activeTargetId,
          globalVars: state.globalVars,
          cheatsheets: state.cheatsheets,
          activitySessions: state.activitySessions,
          customNotes: state.customNotes,
          deletedNoteIds: state.deletedNoteIds,
          userSolvesReset: state.userSolvesReset,
          lastSaved: new Date().toISOString(),
        };
        try {
          localStorage.setItem(targetKey, JSON.stringify(payload));
          lastSavedMachines = state.machines;
          lastSavedTargetId = state.activeTargetId;
          lastSavedGlobalVars = state.globalVars;
          lastSavedCheatsheets = state.cheatsheets;
          lastSavedSessions = state.activitySessions;
          lastSavedCustomNotes = state.customNotes;
          lastSavedDeletedNoteIds = state.deletedNoteIds;
          lastSavedUserSolvesReset = state.userSolvesReset;
        } catch (e: any) {
          console.error('Failed to save profile data:', e);
          if (typeof window !== 'undefined' && e?.name === 'QuotaExceededError') {
            console.warn('[Storage] LocalStorage quota exceeded. Profile could not be fully saved.');
          }
        }
      },

      resetAllProgress: () => {
        const targetId = get().currentProfileId || 'guest';
        const customMachines = get().machines.filter((m) => m.isCustom);
        set(() => ({
          machines: [...INITIAL_MACHINES, ...customMachines],
          activeTargetId: null,
          isTimerRunning: false,
          activeTimerSeconds: 0,
          activitySessions: [],
          customNotes: [],
          deletedNoteIds: [],
          userSolvesReset: false,
        }));
        get().saveProfileData(targetId);
      },

      panicWipeActiveSession: () => {
        set(() => ({
          activeTargetId: null,
          isTimerRunning: false,
          activeTimerSeconds: 0,
          globalVars: {
            ...DEFAULT_GLOBAL_VARS,
            customVars: {},
          },
        }));
        get().saveProfileData();
      }
    }),
    {
      name: 'specter_ctf_store_v3',
      version: 5,
      storage: createJSONStorage(() => localStorage),
      migrate: (persistedState: any) => {
        const state = persistedState || {};
        if (!state.appBrand || state.appBrand === 'rootvector' || state.appBrand === 'specter') {
          state.appBrand = 'zerobox';
        }
        const userSolvesReset = Boolean(state.userSolvesReset);
        return {
          ...state,
          appBrand: 'zerobox',
          userSolvesReset,
          customNotes: state.customNotes || [],
          deletedNoteIds: state.deletedNoteIds || [],
          cheatsheets: mergeCheatsheetsWithInitial(state.cheatsheets),
          machines: mergeMachinesWithCatalog(state.machines, userSolvesReset),
        };
      },
      merge: (persistedState: any, currentState: CtfStoreState) => {
        const persisted = (persistedState as Partial<CtfStoreState>) || {};
        if (!persisted.appBrand || persisted.appBrand === 'rootvector' || persisted.appBrand === 'specter') {
          persisted.appBrand = 'zerobox';
        }
        const userSolvesReset = Boolean(persisted.userSolvesReset);
        return {
          ...currentState,
          ...persisted,
          appBrand: (!persisted.appBrand || persisted.appBrand === 'rootvector' || persisted.appBrand === 'specter') ? 'zerobox' : persisted.appBrand,
          userSolvesReset,
          customNotes: persisted.customNotes || [],
          deletedNoteIds: persisted.deletedNoteIds || [],
          cheatsheets: mergeCheatsheetsWithInitial(persisted.cheatsheets),
          machines: mergeMachinesWithCatalog(persisted.machines, userSolvesReset),
        };
      },
      partialize: (state) => ({
        currentProfileId: state.currentProfileId,
        appBrand: state.appBrand,
        userSolvesReset: state.userSolvesReset,
        customNotes: state.customNotes,
        deletedNoteIds: state.deletedNoteIds,
        machines: extractMachineDeltas(state.machines),
        activeTargetId: state.activeTargetId,
        globalVars: state.globalVars,
        cheatsheets: state.cheatsheets,
        activitySessions: state.activitySessions,
        viewMode: state.viewMode,
        crtOverlay: state.crtOverlay,
        soundEnabled: state.soundEnabled,
        uiScale: state.uiScale,
      }),
    }
  )
);

// Selective, high-performance profile auto-save
// Guards against 1Hz timer ticks, uses debouncing with maxWait cap, and flushes on tab close
let lastSavedMachines = useCtfStore.getState().machines;
let lastSavedTargetId = useCtfStore.getState().activeTargetId;
let lastSavedGlobalVars = useCtfStore.getState().globalVars;
let lastSavedCheatsheets = useCtfStore.getState().cheatsheets;
let lastSavedSessions = useCtfStore.getState().activitySessions;
let lastSavedCustomNotes = useCtfStore.getState().customNotes;
let lastSavedDeletedNoteIds = useCtfStore.getState().deletedNoteIds;
let lastSavedUserSolvesReset = useCtfStore.getState().userSolvesReset;
let saveDebounceTimer: any = null;
let maxWaitTimer: any = null;

const flushProfileSave = () => {
  if (saveDebounceTimer) {
    clearTimeout(saveDebounceTimer);
    saveDebounceTimer = null;
  }
  if (maxWaitTimer) {
    clearTimeout(maxWaitTimer);
    maxWaitTimer = null;
  }
  if (typeof window === 'undefined') return;
  const state = useCtfStore.getState();
  if (!state.currentProfileId) return;

  const targetKey = getProfileStorageKey(state.currentProfileId);
  let persistedMachines = state.machines;
  if (state.activeTargetId && state.activeTimerSeconds > 0) {
    persistedMachines = state.machines.map((m) =>
      m.id === state.activeTargetId ? { ...m, timeSpentSeconds: state.activeTimerSeconds } : m
    );
  }

  // Optimize localStorage footprint: Persist only lean user deltas and custom machines
  const machineDeltas = extractMachineDeltas(persistedMachines);

  const payload = {
    machines: machineDeltas,
    activeTargetId: state.activeTargetId,
    globalVars: state.globalVars,
    cheatsheets: state.cheatsheets,
    activitySessions: state.activitySessions,
    customNotes: state.customNotes,
    deletedNoteIds: state.deletedNoteIds,
    userSolvesReset: state.userSolvesReset,
  };
  try {
    localStorage.setItem(targetKey, JSON.stringify(payload));
    lastSavedMachines = state.machines;
    lastSavedTargetId = state.activeTargetId;
    lastSavedGlobalVars = state.globalVars;
    lastSavedCheatsheets = state.cheatsheets;
    lastSavedSessions = state.activitySessions;
    lastSavedCustomNotes = state.customNotes;
    lastSavedDeletedNoteIds = state.deletedNoteIds;
    lastSavedUserSolvesReset = state.userSolvesReset;
  } catch {}
};

useCtfStore.subscribe((state) => {
  if (typeof window === 'undefined' || !state.currentProfileId) return;

  // Selective Persistence Check: Only trigger if persisted data actually changed!
  // Prevents 1Hz timer ticks (activeTimerSeconds) from ever touching localStorage!
  const hasChanged = 
    state.machines !== lastSavedMachines ||
    state.activeTargetId !== lastSavedTargetId ||
    state.globalVars !== lastSavedGlobalVars ||
    state.cheatsheets !== lastSavedCheatsheets ||
    state.activitySessions !== lastSavedSessions ||
    state.customNotes !== lastSavedCustomNotes ||
    state.deletedNoteIds !== lastSavedDeletedNoteIds ||
    state.userSolvesReset !== lastSavedUserSolvesReset;

  if (!hasChanged) return;

  // Debounce with maxWait cap (5000ms max)
  if (saveDebounceTimer) clearTimeout(saveDebounceTimer);
  if (!maxWaitTimer) {
    maxWaitTimer = setTimeout(flushProfileSave, 5000);
  }
  saveDebounceTimer = setTimeout(flushProfileSave, 1200);
});

// Flush immediately on tab close or backgrounding
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', flushProfileSave);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flushProfileSave();
    }
  });

  // Asynchronously hydrate user's private CPTS field manual notes from IndexedDB
  loadVaultFromIndexedDb().then((vault) => {
    if (vault?.notes && vault.notes.length > 0) {
      useCtfStore.getState().setUserNotes(vault.notes);
      if (vault.wikilinkMap) {
        useCtfStore.getState().setUserWikilinkMap(vault.wikilinkMap);
      }
    }
  }).catch((err) => {
    console.warn('[ZeroBox] Could not hydrate user notes from IndexedDB', err);
  });
}


