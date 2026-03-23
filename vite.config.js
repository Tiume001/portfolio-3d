import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // SOSTITUISCI CON IL NOME DEL TUO REPO SU GITHUB:
  base: '/NOME_DEL_TUO_REPO/',
})
