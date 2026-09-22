import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites are served from a sub-path
  // (https://<user>.github.io/<repo>/), not the domain root, so every
  // built asset URL needs that prefix. The included GitHub Actions workflow
  // (.github/workflows/deploy.yml) sets VITE_BASE_PATH automatically based
  // on the repo name at build time — no manual edits needed here. Locally
  // (npm run dev / a root `username.github.io` repo) it defaults to '/'.
  base: process.env.VITE_BASE_PATH || '/',
})
