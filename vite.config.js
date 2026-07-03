
//  vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Esto hace que Vite use el puerto 5173 y no cambie aunque esté ocupado
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
    }
  }
})
