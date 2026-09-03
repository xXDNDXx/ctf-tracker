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

// 6. Update root index.html to dynamically load production assets on GitHub Pages
const distAssets = fs.readdirSync(path.join(distDir, 'assets'));
const indexJs = distAssets.find(f => (f === 'index.js' || (f.startsWith('index-') && f.endsWith('.js'))));
const indexCss = distAssets.find(f => (f === 'index.css' || (f.startsWith('index-') && f.endsWith('.css'))));

if (indexJs && indexCss) {
  let rootHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
  const loaderSnippet = `    <!-- Production Bundle Loader for GitHub Pages -->
    <script>
      (function() {
        if (window.location.hostname.includes('github.io')) {
          var l = document.createElement('link');
          l.rel = 'stylesheet';
          l.href = './assets/${indexCss}';
          document.head.appendChild(l);

          var s = document.createElement('script');
          s.type = 'module';
          s.crossOrigin = '';
          s.src = './assets/${indexJs}';
          document.body.appendChild(s);
        }
      })();
    </script>`;

  if (rootHtml.includes('<!-- Production Bundle Loader for GitHub Pages -->')) {
    rootHtml = rootHtml.replace(/<!-- Production Bundle Loader for GitHub Pages -->[\s\S]*?<\/script>/, loaderSnippet);
  } else {
    rootHtml = rootHtml.replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n' + loaderSnippet);
  }
  fs.writeFileSync(path.join(rootDir, 'index.html'), rootHtml, 'utf-8');
  console.log(`✓ Injected root index.html loader for ${indexJs} & ${indexCss}`);
}

console.log('✓ Post-build GitHub Pages deployment preparation complete.');
