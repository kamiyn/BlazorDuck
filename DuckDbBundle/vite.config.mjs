import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, '../BlazorDuck.Web/wwwroot/duckdb'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es'],
      fileName: () => 'duckdb-browser-bundle.js'
    },
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
