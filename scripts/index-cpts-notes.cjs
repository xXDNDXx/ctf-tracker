/**
 * index-cpts-notes.cjs
 * Build-time ingestion bridge for Daniel Dayan's Obsidian CPTS Field Manual notes.
 * Scans local vault C:\Users\DANIEL\Documents\cpts-field-manual (or fallback)
 * and generates src/data/cptsNotesIndex.json.
 */

const fs = require('fs');
const path = require('path');

const VAULT_DIR = path.resolve('C:\\Users\\DANIEL\\Documents\\cpts-field-manual');
const OUTPUT_FILE = path.resolve(__dirname, '..', 'src', 'data', 'cptsNotesIndex.json');

function cleanSlug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function getFriendlyCategory(category) {
  if (category.includes('00 _Methodology')) return 'Methodology & Exam Playbooks';
  if (category.includes('01 Information Gathering')) return 'Information Gathering & Recon';
  if (category.includes('02 Pre-Exploitation')) return 'Pre-Exploitation & Vuln Analysis';
  if (category.includes('03 Exploitation')) return 'Offensive Exploitation';
  if (category.includes('04 Post-Exploitation')) return 'Post-Exploitation & PrivEsc';
  if (category.includes('05 Lateral Movement')) return 'Lateral Movement & Pivoting';
  if (category.includes('06 NetExec')) return 'NetExec Arsenal';
  return 'General Methodology';
}

function walkDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.startsWith('.') || file === 'node_modules') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function indexVault() {
  if (!fs.existsSync(VAULT_DIR)) {
    console.log(`[!] Vault directory not found at ${VAULT_DIR}. Using existing index if available.`);
    if (fs.existsSync(OUTPUT_FILE)) {
      console.log(`[+] Found existing ${OUTPUT_FILE}. Keeping current index intact.`);
      return;
    }
    console.log(`[*] Generating minimal fallback index...`);
    fs.writeFileSync(OUTPUT_FILE, '[]', 'utf8');
    return;
  }

  const allMarkdownFiles = walkDir(VAULT_DIR);
  const notes = [];

  for (const fullPath of allMarkdownFiles) {
    const relPath = path.relative(VAULT_DIR, fullPath).replace(/\\/g, '/');
    let content = '';
    try {
      content = fs.readFileSync(fullPath, 'utf8');
    } catch (e) {
      continue;
    }

    const filename = path.basename(fullPath, '.md');
    let title = filename;
    let tags = [];
    let difficulty = 'Intermediate';
    let summary = '';

    // YAML Frontmatter parsing
    if (content.startsWith('---')) {
      const parts = content.split('---');
      if (parts.length >= 3) {
        const fm = parts[1];
        const lines = fm.split('\n');
        for (const line of lines) {
          if (line.startsWith('title:')) {
            title = line.replace('title:', '').trim().replace(/^['"]|['"]$/g, '');
          } else if (line.startsWith('tags:')) {
            const raw = line.replace('tags:', '').trim().replace(/^\[|\]$/g, '');
            tags = raw.split(',').map((t) => t.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
          } else if (line.startsWith('difficulty:')) {
            difficulty = line.replace('difficulty:', '').trim();
          }
        }
      }
    }

    // Fallback to first H1 header if title matches filename
    if (title === filename) {
      const h1Match = content.match(/^#\s+(.+)$/m);
      if (h1Match) {
        title = h1Match[1].trim();
      }
    }

    // Summary extraction
    const cleanBody = content.replace(/^---[\s\S]*?---/, '').replace(/<!--[\s\S]*?-->/g, '');
    const paragraphs = cleanBody.split(/\n\s*\n/).map((p) => p.trim()).filter((p) => p && !p.startsWith('#') && !p.startsWith('```'));
    if (paragraphs.length > 0) {
      summary = paragraphs[0].replace(/\s+/g, ' ').substring(0, 250);
    }

    // Command extraction from code blocks
    const codeBlockRegex = /```(?:bash|sh|powershell|cmd|python|text)?\s*\n([\s\S]*?)```/g;
    let match;
    const extractedCommands = [];
    let cbCount = 0;
    while ((match = codeBlockRegex.exec(content)) !== null && cbCount < 4) {
      cbCount++;
      const codeLines = match[1].split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#') && !l.startsWith('//') && !l.startsWith('<!'));
      for (const cl of codeLines.slice(0, 2)) {
        if (cl.length > 5) {
          extractedCommands.push(cl);
        }
      }
    }

    // Categorization
    const pathParts = relPath.split('/');
    const rawCategory = pathParts.length > 1 ? pathParts[0] : 'General';
    const subCategory = pathParts.length > 2 ? pathParts.slice(1, -1).join('/') : '';
    const category = getFriendlyCategory(rawCategory);

    const slug = cleanSlug(title) || cleanSlug(filename);

    notes.push({
      id: `cpts-${slug}`,
      title,
      category,
      rawCategory,
      subCategory,
      tags,
      difficulty,
      summary,
      commands: extractedCommands.slice(0, 5),
      relPath,
    });
  }

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(notes, null, 2), 'utf8');
  console.log(`[+] Indexed ${notes.length} Obsidian CPTS notes into ${path.relative(process.cwd(), OUTPUT_FILE)}`);
}

indexVault();
