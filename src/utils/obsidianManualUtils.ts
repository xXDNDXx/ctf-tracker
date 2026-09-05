import cptsNotesData from '../data/cptsNotesIndex.json';
import { Machine } from '../types';
import { classifyMachine } from './categoryUtils';

export interface CptsNoteEntry {
  id: string;
  title: string;
  titleEn: string;
  titleHe?: string;
  category: string;
  categoryOrder?: number;
  order?: number;
  rawCategory: string;
  subCategory: string;
  tags: string[];
  difficulty: string;
  summary: string;
  enSummary?: string;
  heSummary?: string;
  stage?: string;
  tools?: string[];
  hasHebrew?: boolean;
  commands: string[];
  relPath: string;
}

export const CPTS_NOTES: CptsNoteEntry[] = cptsNotesData as CptsNoteEntry[];

const CANONICAL_CATEGORY_RANKS: Record<string, number> = {
  'Methodology & Exam Playbooks': 0,
  'Information Gathering & Recon': 1,
  'Pre-Exploitation & Vuln Analysis': 2,
  'Offensive Exploitation': 3,
  'Post-Exploitation & PrivEsc': 4,
  'Lateral Movement & Pivoting': 5,
  'NetExec Arsenal': 6,
  'General Methodology': 7,
};

/**
 * Get aggregated category counts across the 414 field manual notes,
 * sorted in canonical offensive lifecycle order (00 Methodology -> 01 Recon -> ... -> 06 NetExec)
 */
export function getCptsCategories(): { category: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const n of CPTS_NOTES) {
    counts[n.category] = (counts[n.category] || 0) + 1;
  }
  return Object.entries(counts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => {
      const orderA = CANONICAL_CATEGORY_RANKS[a.category] ?? 99;
      const orderB = CANONICAL_CATEGORY_RANKS[b.category] ?? 99;
      if (orderA !== orderB) return orderA - orderB;
      return b.count - a.count;
    });
}

/**
 * Filter notes by primary category
 */
export function getNotesByCategory(category: string): CptsNoteEntry[] {
  if (!category || category === 'ALL') return CPTS_NOTES;
  return CPTS_NOTES.filter((n) => n.category === category);
}

/**
 * Fast search across note titles (EN & HE), tags, summaries, and commands
 */
export function searchCptsNotes(query: string, category: string = 'ALL'): CptsNoteEntry[] {
  const q = query.trim().toLowerCase();
  let pool = CPTS_NOTES;
  if (category && category !== 'ALL') {
    pool = pool.filter((n) => n.category === category);
  }
  if (!q) return pool;

  return pool.filter((n) => {
    if (n.title.toLowerCase().includes(q)) return true;
    if (n.titleEn && n.titleEn.toLowerCase().includes(q)) return true;
    if (n.titleHe && n.titleHe.toLowerCase().includes(q)) return true;
    if (n.subCategory.toLowerCase().includes(q)) return true;
    if (n.tags.some((t) => t.toLowerCase().includes(q))) return true;
    if (n.summary.toLowerCase().includes(q)) return true;
    if (n.enSummary && n.enSummary.toLowerCase().includes(q)) return true;
    if (n.heSummary && n.heSummary.toLowerCase().includes(q)) return true;
    if (n.stage && n.stage.toLowerCase().includes(q)) return true;
    if (n.tools && n.tools.some((t) => t.toLowerCase().includes(q))) return true;
    if (n.commands.some((c) => c.toLowerCase().includes(q))) return true;
    return false;
  });
}

/**
 * Retrieve recommended offensive methodology notes and commands tailored for a specific CTF target
 */
export function getRecommendedNotesForMachine(machine: Machine, limit: number = 6): CptsNoteEntry[] {
  const { isAD, categories } = classifyMachine(machine);
  const machineTags = machine.tags.map((t) => t.toLowerCase());

  const scoredNotes = CPTS_NOTES.map((note) => {
    let score = 0;
    const noteLowerTags = note.tags.map((t) => t.toLowerCase());
    const noteTitleLower = note.title.toLowerCase();

    // Active Directory match
    if (isAD && (note.category.includes('Active Directory') || note.rawCategory.includes('Active Directory') || noteLowerTags.includes('active-directory') || noteLowerTags.includes('kerberos'))) {
      score += 15;
    }

    // Direct tag overlap
    for (const mt of machineTags) {
      if (noteLowerTags.includes(mt)) score += 8;
      if (noteTitleLower.includes(mt)) score += 10;
    }

    // Vulnerability Archetype Category matching
    for (const cat of categories) {
      const catLower = cat.toLowerCase();
      if (noteLowerTags.some((nt) => nt.includes(catLower)) || noteTitleLower.includes(catLower)) {
        score += 6;
      }
    }

    // OS matching
    if (machine.os === 'Linux' && (note.rawCategory.includes('Linux') || noteLowerTags.includes('linux'))) {
      score += 3;
    } else if (machine.os === 'Windows' && (note.rawCategory.includes('Windows') || noteLowerTags.includes('windows'))) {
      score += 3;
    }

    return { note, score };
  });

  return scoredNotes
    .filter((sn) => sn.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((sn) => sn.note);
}
