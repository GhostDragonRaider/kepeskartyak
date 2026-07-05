import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    fs: {
      strict: false,
      allow: [root, path.resolve(root, '..'), '/media/sancii5427'],
    },
  },
})
