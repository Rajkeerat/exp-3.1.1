import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/exp-3.1.1/',   // ⭐ VERY IMPORTANT
})
