import cptsNotesData from '../data/cptsNotesIndex.json';
import { Machine } from '../types';
import { classifyMachine } from './categoryUtils';

export interface ObsidianCallout {
  type: 'abstract' | 'tip' | 'warning' | 'danger' | 'example' | 'note' | 'important' | 'cite' | 'success' | 'info' | 'question';
  title: string;
  content: string;
  isFoldable?: boolean;
  isFoldedByDefault?: boolean;
}

export interface ObsidianTocItem {
  level: number;
  text: string;
  id: string;
  isHebrew: boolean;
}

export interface ObsidianChecklistItem {
  text: string;
  checked: boolean;
  raw: string;
}

export interface ParsedObsidianNote {
  hebrewSection?: string;
  englishSection: string;
  callouts: ObsidianCallout[];
  checklist: ObsidianChecklistItem[];
  tableOfContents: ObsidianTocItem[];
  outgoingWikilinks: string[];
}

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
  noteType?: string;
  dateModified?: string;
  summary: string;
  enSummary?: string;
  heSummary?: string;
  stage?: string;
  tools?: string[];
  hasHebrew?: boolean;
  commands: string[];
  relPath: string;
  filename?: string;
  outgoingWikilinks?: string[];
  backlinks?: string[];
  rawMarkdown?: string;
}

interface CptsRawPayload {
  notes?: CptsNoteEntry[];
  wikilinkMap?: Record<string, string>;
}

const rawData = cptsNotesData as unknown as CptsRawPayload | CptsNoteEntry[];
export const CPTS_NOTES: CptsNoteEntry[] = Array.isArray(rawData) ? rawData : (rawData.notes || []);
export const WIKILINK_MAP: Record<string, string> = Array.isArray(rawData) ? {} : (rawData.wikilinkMap || {});

/**
 * Fast lookup of a note by its unique ID
 */
export function getNoteById(id: string): CptsNoteEntry | undefined {
  return CPTS_NOTES.find((n) => n.id === id);
}

/**
 * Resolves an Obsidian wikilink (e.g. "07 Kerberos (88)", "1 Nmap", "ffuf")
 * to the corresponding note in the CPTS Field Manual.
 */
export function resolveWikilink(rawTarget: string): { targetNoteId?: string; label: string; exists: boolean } {
  if (!rawTarget) return { label: '', exists: false };
  const target = rawTarget.trim();
  const lower = target.toLowerCase();
  const stripped = lower.replace(/^\d+[\s_.-]*/, '').trim();

  // 1. Direct check in precomputed wikilinkMap
  if (WIKILINK_MAP[lower]) {
    return { targetNoteId: WIKILINK_MAP[lower], label: target, exists: true };
  }
  if (stripped && WIKILINK_MAP[stripped]) {
    return { targetNoteId: WIKILINK_MAP[stripped], label: target, exists: true };
  }

  // 2. Slug check
  const slug = lower.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  if (WIKILINK_MAP[slug]) {
    return { targetNoteId: WIKILINK_MAP[slug], label: target, exists: true };
  }
  if (WIKILINK_MAP[`cpts-${slug}`]) {
    return { targetNoteId: WIKILINK_MAP[`cpts-${slug}`], label: target, exists: true };
  }

  // 3. Fallback linear search
  const found = CPTS_NOTES.find(n => 
    (n.filename && n.filename.toLowerCase() === lower) ||
    n.title.toLowerCase() === lower ||
    n.titleEn.toLowerCase() === lower ||
    (n.titleHe && n.titleHe === target) ||
    (n.filename && n.filename.replace(/^\d+[\s_.-]*/, '').toLowerCase() === stripped) ||
    n.id === `cpts-${slug}`
  );

  if (found) {
    return { targetNoteId: found.id, label: target, exists: true };
  }

  return { label: target, exists: false };
}

/**
 * Retrieves all notes that reference the given note ID (backlinks)
 */
export function getBacklinksForNote(noteId: string): CptsNoteEntry[] {
  const current = getNoteById(noteId);
  if (current && current.backlinks && current.backlinks.length > 0) {
    return current.backlinks
      .map(bId => getNoteById(bId))
      .filter((n): n is CptsNoteEntry => Boolean(n));
  }
  return [];
}

/**
 * On-the-fly zero-dependency parser for an authentic Obsidian note
 */
export function parseObsidianNote(rawMarkdown: string): ParsedObsidianNote {
  if (!rawMarkdown) {
    return { englishSection: '', callouts: [], checklist: [], tableOfContents: [], outgoingWikilinks: [] };
  }

  // 1. Extract Hebrew section if present
  let hebrewSection: string | undefined;
  const hebrewUpgradeMatch = rawMarkdown.match(/<!--\s*CPTS-HEBREW-UPGRADE:START\s*-->([\s\S]*?)<!--\s*CPTS-HEBREW-UPGRADE:END\s*-->/);
  if (hebrewUpgradeMatch) {
    hebrewSection = hebrewUpgradeMatch[1].trim();
  } else {
    // Check for "## כרטיס עבודה עברי"
    const hebrewCardMatch = rawMarkdown.match(/(##\s*כרטיס עבודה עברי[\s\S]*?)(?=\n##\s*1|\n##\s*\[|\n---|\n#\s+[^#]|$)/);
    if (hebrewCardMatch) {
      hebrewSection = hebrewCardMatch[1].trim();
    }
  }

  // 2. Extract English / Technical methodology section
  // Strip frontmatter, Hebrew upgrade blocks, and Hebrew card blocks for clean English technical view
  let englishSection = rawMarkdown
    .replace(/^---[\s\S]*?---\n*/, '')
    .replace(/<!--\s*CPTS-HEBREW-UPGRADE:START\s*-->[\s\S]*?<!--\s*CPTS-HEBREW-UPGRADE:END\s*-->\n*/, '')
    .replace(/##\s*כרטיס עבודה עברי[\s\S]*?(?=\n##\s*1|\n##\s*\[|\n---|\n#\s+[^#]|$)/, '')
    .trim();

  // 3. Extract Callouts
  const callouts: ObsidianCallout[] = [];
  const calloutRegex = /^>\s*\[!([a-zA-Z_-]+)\]([+-])?\s*(.*?)$((?:\n>\s*.*)*)/gm;
  let cMatch;
  while ((cMatch = calloutRegex.exec(rawMarkdown)) !== null) {
    const rawType = cMatch[1].toLowerCase();
    const foldChar = cMatch[2];
    const title = cMatch[3].trim();
    const bodyLines = cMatch[4]
      ? cMatch[4].split('\n').map(l => l.replace(/^>\s?/, '')).join('\n').trim()
      : '';

    let type: ObsidianCallout['type'] = 'note';
    if (rawType === 'abstract' || rawType === 'summary' || rawType === 'tldr') type = 'abstract';
    else if (rawType === 'tip' || rawType === 'hint') type = 'tip';
    else if (rawType === 'warning' || rawType === 'caution' || rawType === 'attention') type = 'warning';
    else if (rawType === 'danger' || rawType === 'bug' || rawType === 'failure' || rawType === 'error') type = 'danger';
    else if (rawType === 'example' || rawType === 'meta') type = 'example';
    else if (rawType === 'important') type = 'important';
    else if (rawType === 'cite' || rawType === 'quote') type = 'cite';
    else if (rawType === 'success' || rawType === 'check' || rawType === 'done') type = 'success';
    else if (rawType === 'info') type = 'info';
    else if (rawType === 'question' || rawType === 'help' || rawType === 'faq') type = 'question';

    callouts.push({
      type,
      title: title || type.toUpperCase(),
      content: bodyLines,
      isFoldable: foldChar === '+' || foldChar === '-',
      isFoldedByDefault: foldChar === '-'
    });
  }

  // 4. Extract Checklists
  const checklist: ObsidianChecklistItem[] = [];
  const checkRegex = /^-\s*\[([ xX])\]\s*(.+)$/gm;
  let chkMatch;
  while ((chkMatch = checkRegex.exec(rawMarkdown)) !== null) {
    checklist.push({
      checked: chkMatch[1].toLowerCase() === 'x',
      text: chkMatch[2].trim(),
      raw: chkMatch[0]
    });
  }

  // 5. Extract Table of Contents from headings
  const tableOfContents: ObsidianTocItem[] = [];
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  let hMatch;
  while ((hMatch = headingRegex.exec(rawMarkdown)) !== null) {
    const level = hMatch[1].length;
    const text = hMatch[2].trim().replace(/\{#[^}]+\}/g, '').trim();
    if (text.startsWith('---') || text.startsWith('===')) continue;
    const isHebrew = /[\u0590-\u05FF]/.test(text);
    const id = text.toLowerCase().replace(/[^a-z0-9\u0590-\u05FF]+/g, '-').replace(/^-+|-+$/g, '');
    tableOfContents.push({ level, text, id, isHebrew });
  }

  // 6. Outgoing wikilinks
  const outgoingWikilinks: string[] = [];
  const linkRegex = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g;
  let lMatch;
  const seenLinks = new Set<string>();
  while ((lMatch = linkRegex.exec(rawMarkdown)) !== null) {
    const target = lMatch[1].trim();
    if (target && !seenLinks.has(target)) {
      seenLinks.add(target);
      outgoingWikilinks.push(target);
    }
  }

  return {
    hebrewSection,
    englishSection,
    callouts,
    checklist,
    tableOfContents,
    outgoingWikilinks
  };
}


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

export interface CptsTopicLeaf {
  leaf: string;
  rawSub: string;
  count: number;
}

export interface CptsTopicGroup {
  group: string;
  count: number;
  leaves: CptsTopicLeaf[];
}

export function cleanSubCategorySegment(s: string): string {
  return s.replace(/^\d+[\s_.-]*/, '').replace(/_/g, ' ').trim();
}

export function parseSubCategory(sub?: string): { group: string; leaf: string; full: string } {
  if (!sub) return { group: 'Overview & Index', leaf: 'General Notes', full: '' };
  const parts = sub.split(' / ').map(cleanSubCategorySegment).filter(Boolean);
  const group = parts[0] || 'Overview';
  const leaf = parts.slice(1).join(' > ') || group;
  return { group, leaf, full: sub };
}

/**
 * Get hierarchical topic groups for a category (or across all notes)
 */
export function getCategoryTopicGroups(category: string = 'ALL'): CptsTopicGroup[] {
  const pool = category === 'ALL' ? CPTS_NOTES : CPTS_NOTES.filter((n) => n.category === category);
  const groupMap: Record<string, { group: string; count: number; leafMap: Record<string, CptsTopicLeaf> }> = {};

  for (const n of pool) {
    const { group, leaf, full } = parseSubCategory(n.subCategory);
    if (!groupMap[group]) {
      groupMap[group] = { group, count: 0, leafMap: {} };
    }
    groupMap[group].count++;
    if (!groupMap[group].leafMap[leaf]) {
      groupMap[group].leafMap[leaf] = { leaf, rawSub: full, count: 0 };
    }
    groupMap[group].leafMap[leaf].count++;
  }

  return Object.values(groupMap)
    .map((g) => ({
      group: g.group,
      count: g.count,
      leaves: Object.values(g.leafMap).sort((a, b) => b.count - a.count),
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Fast search and filter across note titles (EN & HE), subcategories, topic groups, tags, summaries, and commands
 */
export function searchCptsNotes(
  query: string, 
  category: string = 'ALL',
  subCategoryFilter?: string | null
): CptsNoteEntry[] {
  const q = query.trim().toLowerCase();
  let pool = CPTS_NOTES;

  if (category && category !== 'ALL') {
    pool = pool.filter((n) => n.category === category);
  }

  if (subCategoryFilter && subCategoryFilter !== 'ALL') {
    const filterLower = subCategoryFilter.toLowerCase();
    pool = pool.filter((n) => {
      if (!n.subCategory) {
        return filterLower === 'overview & index' || filterLower === 'general notes' || filterLower === '';
      }
      const { group, leaf } = parseSubCategory(n.subCategory);
      return (
        n.subCategory.toLowerCase() === filterLower ||
        group.toLowerCase() === filterLower ||
        leaf.toLowerCase() === filterLower ||
        n.subCategory.toLowerCase().includes(filterLower)
      );
    });
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
