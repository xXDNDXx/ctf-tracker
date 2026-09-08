import JSZip from 'jszip';
import { CptsNoteEntry } from './obsidianManualUtils';
import { isSafeRelativePath } from './securityUtils';

export interface VaultZipImportProgress {
  current: number;
  total: number;
  currentFile: string;
  phase: 'unzipping' | 'parsing' | 'indexing' | 'complete';
}

export interface VaultZipImportResult {
  notes: CptsNoteEntry[];
  wikilinkMap: Record<string, string>;
  summary: {
    totalNotes: number;
    totalCommands: number;
    categories: string[];
  };
}

/**
 * Normalizes text to extract title, slug, and clean tokens
 */
function cleanText(text: string): string {
  return text.trim().replace(/^["']|["']$/g, '');
}

/**
 * Extracts YAML frontmatter, body, and metadata from raw markdown content
 */
function parseFrontmatterAndBody(raw: string): {
  frontmatter: Record<string, string>;
  tags: string[];
  tools: string[];
  aliases: string[];
  body: string;
} {
  const frontmatter: Record<string, string> = {};
  const tags: string[] = [];
  const tools: string[] = [];
  const aliases: string[] = [];
  let body = raw;

  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (fmMatch) {
    body = raw.slice(fmMatch[0].length);
    const lines = fmMatch[1].split(/\r?\n/);
    let currentKey = '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      if (trimmed.startsWith('- ') && currentKey) {
        const val = cleanText(trimmed.slice(2));
        if (currentKey === 'tags') tags.push(val);
        else if (currentKey === 'tools') tools.push(val);
        else if (currentKey === 'aliases' || currentKey === 'alias') aliases.push(val);
        continue;
      }

      const colonIdx = line.indexOf(':');
      if (colonIdx !== -1) {
        currentKey = line.slice(0, colonIdx).trim().toLowerCase();
        const value = line.slice(colonIdx + 1).trim();
        if (value.startsWith('[') && value.endsWith(']')) {
          const listItems = value
            .slice(1, -1)
            .split(',')
            .map((s) => cleanText(s))
            .filter(Boolean);
          if (currentKey === 'tags') tags.push(...listItems);
          else if (currentKey === 'tools') tools.push(...listItems);
          else if (currentKey === 'aliases' || currentKey === 'alias') aliases.push(...listItems);
        } else if (value) {
          frontmatter[currentKey] = cleanText(value);
          if (currentKey === 'alias' || currentKey === 'aliases') {
            aliases.push(cleanText(value));
          }
        }
      }
    }
  }

  // Also harvest any inline hashtags (#active-directory, #smb, etc.)
  const inlineTags = body.match(/(?:^|\s)#([a-zA-Z0-9_-]{2,30})/g);
  if (inlineTags) {
    for (const t of inlineTags) {
      const cleaned = t.trim().replace(/^#/, '');
      if (cleaned && !tags.includes(cleaned)) {
        tags.push(cleaned);
      }
    }
  }

  return { frontmatter, tags, tools, aliases, body };
}

/**
 * Extracts executable commands from code blocks in markdown body
 */
function extractCommands(body: string): string[] {
  const commands: string[] = [];
  const codeBlockRegex = /```(?:bash|sh|cmd|powershell|ps1|zsh|shell)?\r?\n([\s\S]*?)```/g;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(body)) !== null) {
    const lines = match[1].split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith('::')) {
        continue;
      }
      if (trimmed.length > 3 && !commands.includes(trimmed)) {
        commands.push(trimmed);
      }
    }
  }

  return commands;
}

/**
 * Parse an uploaded Obsidian Vault .zip archive into ZeroBox CptsNoteEntry[] format
 * Safely ignores non-markdown assets (.png, .pdf, .obsidian/, .git/) to conserve browser memory.
 */
/**
 * Generic parser for raw markdown items from either ZIP entries, directory file handles, or file lists
 */
export async function parseObsidianRawItems(
  rawItems: { path: string; getText: () => Promise<string> }[],
  onProgress?: (progress: VaultZipImportProgress) => void
): Promise<VaultZipImportResult> {
  // Strip common root directory if all items share the exact same top-level folder
  let items = rawItems;
  if (items.length > 0) {
    const firstSlash = items[0].path.indexOf('/');
    if (firstSlash !== -1) {
      const commonPrefix = items[0].path.slice(0, firstSlash + 1);
      const allHavePrefix = items.every((item) => item.path.startsWith(commonPrefix));
      if (allHavePrefix) {
        items = items.map((item) => ({
          ...item,
          path: item.path.slice(commonPrefix.length),
        }));
      }
    }
  }

  const total = items.length;
  if (total === 0) {
    throw new Error('No markdown (.md) notes were found.');
  }

  const notes: CptsNoteEntry[] = [];
  const wikilinkMap: Record<string, string> = {};
  const categoriesSet = new Set<string>();

  for (let i = 0; i < total; i++) {
    const { path, getText } = items[i];
    onProgress?.({
      current: i + 1,
      total,
      currentFile: path,
      phase: 'parsing',
    });

    const rawMarkdown = await getText();
    const { frontmatter, tags, tools, aliases, body } = parseFrontmatterAndBody(rawMarkdown);

    // Normalize path segments (e.g., '01 Information Gathering/SMB/smb-enum.md')
    const segments = path.split(/[\\/]/).map((s) => s.trim());
    const fileName = segments[segments.length - 1].replace(/\.(md|markdown)$/i, '');

    // Title resolution
    const title = frontmatter['title'] || fileName;
    const titleEn = frontmatter['titleen'] || frontmatter['title_en'] || title;
    const titleHe = frontmatter['titlehe'] || frontmatter['title_he'] || undefined;

    // Category & Subcategory resolution
    let category = frontmatter['category'];
    const rawCategory = segments[0] || 'General';
    let subCategory = frontmatter['subcategory'];

    if (!category) {
      if (segments.length >= 2) {
        // First directory is category (clean leading numbers like '01 ')
        category = segments[0].replace(/^\d+[-_\s]+/, '');
      } else {
        category = 'General Tactical';
      }
    }

    if (!subCategory && segments.length >= 3) {
      subCategory = segments.slice(1, segments.length - 1).join(' / ');
    } else if (!subCategory && segments.length === 2) {
      subCategory = segments[0];
    } else if (!subCategory) {
      subCategory = category;
    }

    categoriesSet.add(category);

    // Commands extraction
    const commands = extractCommands(body);

    // Summary extraction: first paragraph or frontmatter summary
    let summary = frontmatter['summary'] || frontmatter['description'] || '';
    if (!summary) {
      const lines = body.split(/\r?\n/).map((l) => l.trim());
      for (const line of lines) {
        if (line && !line.startsWith('#') && !line.startsWith('!') && !line.startsWith('-') && !line.startsWith('>')) {
          summary = line.slice(0, 200);
          break;
        }
      }
    }

    // Stable ID generation
    const slug = path
      .replace(/\.(md|markdown)$/i, '')
      .replace(/[^a-zA-Z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase();
    const noteId = `note-${slug || 'item-' + i}`;

    const noteEntry: CptsNoteEntry = {
      id: noteId,
      title,
      titleEn,
      titleHe,
      category,
      rawCategory,
      subCategory,
      relPath: path,
      filename: fileName,
      difficulty: frontmatter['difficulty'] || 'intermediate',
      stage: frontmatter['stage'] || 'Exploitation',
      commands,
      tools: tools.length > 0 ? tools : tags.slice(0, 5),
      tags,
      summary,
      enSummary: summary,
      heSummary: titleHe ? `${titleHe} - כרטיס שטח` : undefined,
      rawMarkdown,
      outgoingWikilinks: [],
      backlinks: [],
      hasHebrew: /[\u0590-\u05FF]/.test(rawMarkdown),
    };

    notes.push(noteEntry);

    // Register wikilink resolution mappings
    const cleanBase = fileName.toLowerCase().trim();
    const cleanTitle = title.toLowerCase().trim();
    wikilinkMap[cleanBase] = noteId;
    wikilinkMap[cleanTitle] = noteId;
    if (titleEn) wikilinkMap[titleEn.toLowerCase().trim()] = noteId;
    // Map full relative path without extension
    const pathNoExt = path.replace(/\.(md|markdown)$/i, '').toLowerCase().trim();
    wikilinkMap[pathNoExt] = noteId;

    // Map all frontmatter aliases for authentic Obsidian resolution
    for (const alias of aliases) {
      const cleanAlias = alias.toLowerCase().trim();
      if (cleanAlias && !wikilinkMap[cleanAlias]) {
        wikilinkMap[cleanAlias] = noteId;
      }
    }
  }

  onProgress?.({
    current: total,
    total,
    currentFile: 'Resolving bidirectional wikilink graph...',
    phase: 'indexing',
  });

  // Pass 2: Calculate outgoing wikilinks and backlinks across all parsed notes
  const backlinksMap: Record<string, string[]> = {};

  for (const note of notes) {
    const outgoing = new Set<string>();
    const linkRegex = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g;
    let match;
    while ((match = linkRegex.exec(note.rawMarkdown || '')) !== null) {
      const rawTarget = match[1].trim().toLowerCase();
      const strippedTarget = rawTarget.replace(/^\d+[\s_.-]*/, '').trim();
      const resolvedId = wikilinkMap[rawTarget] || wikilinkMap[strippedTarget];
      if (resolvedId && resolvedId !== note.id) {
        outgoing.add(resolvedId);
        if (!backlinksMap[resolvedId]) {
          backlinksMap[resolvedId] = [];
        }
        if (!backlinksMap[resolvedId].includes(note.id)) {
          backlinksMap[resolvedId].push(note.id);
        }
      }
    }
    note.outgoingWikilinks = Array.from(outgoing);
  }

  for (const note of notes) {
    note.backlinks = backlinksMap[note.id] || [];
  }

  const totalCommands = notes.reduce((acc, n) => acc + (n.commands?.length || 0), 0);

  return {
    notes,
    wikilinkMap,
    summary: {
      totalNotes: notes.length,
      totalCommands,
      categories: Array.from(categoriesSet),
    },
  };
}

/**
 * Parse an uploaded Obsidian Vault .zip archive into ZeroBox CptsNoteEntry[] format
 * Safely ignores non-markdown assets (.png, .pdf, .obsidian/, .git/) to conserve browser memory.
 */
export async function parseObsidianVaultZip(
  zipSource: File | Blob | ArrayBuffer,
  onProgress?: (progress: VaultZipImportProgress) => void
): Promise<VaultZipImportResult> {
  onProgress?.({
    current: 0,
    total: 0,
    currentFile: 'Unpacking ZIP archive...',
    phase: 'unzipping',
  });

  const MAX_ZIP_ENTRIES = 2500;
  const MAX_SINGLE_FILE_BYTES = 5 * 1024 * 1024; // 5MB per note file
  const MAX_CUMULATIVE_BYTES = 40 * 1024 * 1024; // 40MB total extracted notes

  const zip = await JSZip.loadAsync(zipSource);

  // Filter markdown entries, skipping system, hidden directories, and guarding against Zip Bombs
  const rawItems: { path: string; getText: () => Promise<string> }[] = [];
  let totalEntriesCount = 0;
  let cumulativeBytesBudget = 0;

  zip.forEach((relativePath, entry) => {
    totalEntriesCount++;
    if (totalEntriesCount > MAX_ZIP_ENTRIES) {
      throw new Error(`ZIP Archive rejected: Exceeded maximum allowed entry count (${MAX_ZIP_ENTRIES} files).`);
    }

    if (entry.dir) return;

    // Reject directory traversal attempts
    if (!isSafeRelativePath(relativePath)) {
      console.warn(`[Security] Skipped unsafe zip entry path traversal: ${relativePath}`);
      return;
    }

    const lower = relativePath.toLowerCase();
    // Skip system/internal folders
    if (
      lower.includes('.obsidian/') ||
      lower.includes('.git/') ||
      lower.includes('.trash/') ||
      lower.includes('__macosx/') ||
      lower.includes('.ds_store') ||
      relativePath.startsWith('.')
    ) {
      return;
    }

    if (lower.endsWith('.md') || lower.endsWith('.markdown')) {
      rawItems.push({
        path: relativePath,
        getText: async () => {
          const content = await entry.async('text');
          if (content.length > MAX_SINGLE_FILE_BYTES) {
            throw new Error(`File rejected: "${relativePath}" exceeds maximum safe markdown file size (5MB).`);
          }
          cumulativeBytesBudget += content.length;
          if (cumulativeBytesBudget > MAX_CUMULATIVE_BYTES) {
            throw new Error(`ZIP Archive rejected: Exceeded cumulative uncompressed size limit (40MB).`);
          }
          return content;
        },
      });
    }
  });

  if (rawItems.length === 0) {
    throw new Error('No markdown (.md) notes were found in the uploaded ZIP archive.');
  }

  return parseObsidianRawItems(rawItems, onProgress);
}
