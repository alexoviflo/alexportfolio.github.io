import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/alexxoviflo.github.io/', // Endre dette til navnet på GitHub-repositoryet ditt
})
