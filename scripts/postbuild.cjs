const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist.');
  process.exit(1);
}

// 1. Copy dist/index.html to dist/404.html for SPA routing on GitHub Pages
const distIndex = path.join(distDir, 'index.html');
const dist404 = path.join(distDir, '404.html');
if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, dist404);
}

// 2. Mirror dist to docs/ directory for GitHub Pages "Deploy from docs" mode
fs.cpSync(distDir, docsDir, { recursive: true, force: true });
console.log('✓ Mirrored dist to docs/ for GitHub Pages compatibility');

// 3. Mirror dist/assets to root assets/ so if GitHub Pages serves main root, assets resolve
const rootAssetsDir = path.join(rootDir, 'assets');
const distAssetsDir = path.join(distDir, 'assets');
if (fs.existsSync(distAssetsDir)) {
  fs.cpSync(distAssetsDir, rootAssetsDir, { recursive: true, force: true });
  console.log('✓ Mirrored assets/ to root');
}

// 4. Copy 404.html to root
const root404 = path.join(rootDir, '404.html');
if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, root404);
}

console.log('✓ Post-build GitHub Pages deployment preparation complete.');
