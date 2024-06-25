import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/navnet-pa-repository/', // Sett basen din her for GitHub Pages
  build: {
    outDir: 'dist' // Dette er standard og trenger ikke å settes eksplisitt hvis du bruker 'dist'
  }
})

