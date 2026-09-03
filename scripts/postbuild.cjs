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

// 5. Explicitly mirror all favicon and icon assets to root and docs
const iconFiles = [
  'favicon.ico',
  'favicon.png',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'icon-192.jpg',
  'icon-512.jpg',
  'favicon.jpg',
  'manifest.webmanifest'
];

iconFiles.forEach(file => {
  const srcPub = path.join(rootDir, 'public', file);
  if (fs.existsSync(srcPub)) {
    fs.copyFileSync(srcPub, path.join(distDir, file));
    fs.copyFileSync(srcPub, path.join(docsDir, file));
    fs.copyFileSync(srcPub, path.join(rootDir, file));
  }
});
console.log('✓ Mirrored all icon and favicon variants across root, dist, and docs');

// 6. Guarantee root index.html has the Universal GitHub Pages Resolver
const rootIndex = path.join(rootDir, 'index.html');
if (fs.existsSync(rootIndex)) {
  let rootHtml = fs.readFileSync(rootIndex, 'utf8');
  const resolverMarker = '<!-- Universal GitHub Pages Production Bundle Resolver -->';
  if (!rootHtml.includes(resolverMarker)) {
    const resolverSnippet = `    ${resolverMarker}
    <script>
      (function() {
        if (window.location.hostname.includes('github.io')) {
          if (!window.location.pathname.includes('/docs/')) {
            var p = window.location.pathname;
            if (!p.endsWith('/')) p += '/';
            window.location.replace(p + 'docs/' + window.location.search + window.location.hash);
          }
        }
      })();
    </script>
    <noscript>
      <meta http-equiv="refresh" content="0; url=./docs/" />
    </noscript>\n`;
    rootHtml = rootHtml.replace('<meta charset="UTF-8" />\n', '<meta charset="UTF-8" />\n' + resolverSnippet);
    fs.writeFileSync(rootIndex, rootHtml, 'utf8');
    console.log('✓ Injected Universal GitHub Pages Resolver into root index.html');
  }
}

console.log('✓ Post-build GitHub Pages deployment preparation complete.');
