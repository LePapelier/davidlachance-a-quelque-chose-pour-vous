import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/davidlachance-a-quelque-chose-pour-vous/', // Pour GitHub Pages project site
})
