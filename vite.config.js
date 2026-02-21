import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/doris/', // Match GitHub Pages project path for doris.ziqguo.com and gzquse.github.io/doris/
})
