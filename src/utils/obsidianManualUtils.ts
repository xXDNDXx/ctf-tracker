import cptsNotesData from '../data/cptsNotesIndex.json';
import { Machine } from '../types';
import { classifyMachine } from './categoryUtils';

export interface CptsNoteEntry {
  id: string;
  title: string;
  category: string;
  rawCategory: string;
  subCategory: string;
  tags: string[];
  difficulty: string;
  summary: string;
  commands: string[];
  relPath: string;
}

export const CPTS_NOTES: CptsNoteEntry[] = cptsNotesData as CptsNoteEntry[];

/**
 * Get aggregated category counts across the 414 field manual notes
 */
export function getCptsCategories(): { category: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const n of CPTS_NOTES) {
    counts[n.category] = (counts[n.category] || 0) + 1;
  }
  return Object.entries(counts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Filter notes by primary category
 */
export function getNotesByCategory(category: string): CptsNoteEntry[] {
  if (!category || category === 'ALL') return CPTS_NOTES;
  return CPTS_NOTES.filter((n) => n.category === category);
}

/**
 * Fast search across note titles, tags, summaries, and commands
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
    if (n.subCategory.toLowerCase().includes(q)) return true;
    if (n.tags.some((t) => t.toLowerCase().includes(q))) return true;
    if (n.summary.toLowerCase().includes(q)) return true;
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
