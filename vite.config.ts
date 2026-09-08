import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: false,
    watch: {
      ignored: ['**/dist/**', '**/docs/**', '**/assets/**', '**/scratch/**'],
    },
  },
  optimizeDeps: {
    entries: ['index.html', 'src/**/*.{ts,tsx}'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('cptsNotesIndex.json')) {
            return 'cpts-vault-data';
          }
          if (id.includes('machinesCatalog.ts')) {
            return 'catalog-data';
          }
          if (id.includes('methodologyFramework.ts')) {
            return 'methodology-data';
          }
          if (id.includes('tracksData.ts')) {
            return 'tracks-data';
          }
          if (id.includes('node_modules')) {
            if (id.includes('mermaid')) return 'vendor-mermaid';
            if (id.includes('katex')) return 'vendor-katex';
            if (id.includes('jszip')) return 'vendor-jszip';
            if (id.includes('react') || id.includes('zustand')) return 'vendor-framework';
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('clsx') || id.includes('tailwind-merge')) return 'vendor-ui';
            if (id.includes('canvas-confetti')) return 'vendor-utils';
          }
        }
      }
    }
  }
});
