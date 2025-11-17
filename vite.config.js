import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Voor relatieve paths (werkt overal)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
