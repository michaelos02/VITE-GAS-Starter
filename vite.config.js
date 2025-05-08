import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src', // 👈 this tells Vite to serve from src/ during development
  server: {
    host: '0.0.0.0',
    port: 1234,
  },
  build: {
    outDir: '../dist', // 👈 since we're inside src/, build outside
    rollupOptions: {
      input: 'src/index.html'
    }
  }
})
