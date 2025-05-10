
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { scriptPositionPlugin } from './vite-plugin-script-position.js';

export default defineConfig({
  root: 'src',
  server: {
    host: '0.0.0.0',
    port: 1234,
  },
  build: {
    outDir: '../dist',
    assetsInlineLimit: Infinity,
    //Ensures CSS in inlined
    cssCodeSplit: false,
    rollupOptions: {
      input: 'src/index.html',
    },
  },
  plugins: [
    viteSingleFile(),
    scriptPositionPlugin()
  ],
})
