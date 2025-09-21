import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, '../BlazorDuck.Web/wwwroot/duckdb'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'duckdb-browser-bundle.js'
    },
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  esbuild: {
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  }
});
