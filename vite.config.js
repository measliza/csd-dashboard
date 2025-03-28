import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      'quill': 'quill/dist/quill.js',
    },
  },
  optimizeDeps: {
    include: ['quill', 'react-quill', 'quill-image-resize-module-react'],
  },
})
