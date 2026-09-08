export type Platform = 'HTB' | 'THM' | 'Custom';

export type OperatingSystem = 'Linux' | 'Windows' | 'Android' | 'BSD' | 'Other';

export type Difficulty = 'Very Easy' | 'Easy' | 'Medium' | 'Hard' | 'Insane';

export type PipelineStatus = 'backlog' | 'recon' | 'foothold' | 'root' | 'completed';

export type CredentialType = 'plaintext' | 'ntlm' | 'sha512' | 'ssh-key' | 'token' | 'ticket' | 'other';
export type CredentialService = 'smb' | 'ssh' | 'winrm' | 'rdp' | 'mssql' | 'http' | 'ftp' | 'ldap' | 'other';

export interface CredentialItem {
  id: string;
  username: string;
  secret: string;
  type: CredentialType;
  service: CredentialService;
  domain?: string;
  port?: number;
  isPrivileged?: boolean; // admin, root, SYSTEM, DA
  notes?: string;
  crackedFromHash?: string;
  createdAt: string;
}

export interface Machine {
  id: string;
  name: string;
  ip: string;
  os: OperatingSystem;
  platform: Platform;
  difficulty: Difficulty;
  status: PipelineStatus;
  tags: string[];
  certifications: ('OSCP' | 'CPTS' | 'CRTO' | 'HTB-Starting-Point')[];
  roomUrl?: string;
  writeupUrl?: string;
  hint?: string;
  userFlag?: string;
  rootFlag?: string;
  userPwnedAt?: string;
  rootPwnedAt?: string;
  timeSpentSeconds: number;
  timeToUserSeconds?: number;
  timeToRootSeconds?: number;
  perceivedDifficulty?: Difficulty;
  rating?: number; // 1 to 5 stars
  quickNotes?: string;
  writeupMarkdown?: string;
  skillsLearned?: string[];
  officialPdf?: string;
  officialSynopsis?: string;
  officialWalkthrough?: string;
  isCustom?: boolean;
  openPorts?: number[];
  isActive?: boolean;
  checklist?: import('./checklist').MachineChecklistState;
  credentials?: CredentialItem[];
  cves?: string[];
  createdAt: string;
  updatedAt: string;
}

export * from './checklist';

export interface CheatsheetCommand {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  commandTemplate: string;
  tags: string[];
  isCustom?: boolean;
  isStarred?: boolean;
  platform?: 'Linux' | 'Windows' | 'Both';
}

export interface GlobalVariables {
  lhost: string;
  lport: string;
  targetIp: string;
  interface: string;
  customVars: Record<string, string>;
}

export interface ActivitySession {
  id: string;
  machineId: string;
  machineName: string;
  date: string; // YYYY-MM-DD
  durationSeconds: number;
  type: 'recon' | 'foothold' | 'root' | 'session';
}

export type ViewMode = 'kanban' | 'table' | 'grid' | 'graph';
