import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        app: "./src/main.jsx",
      },
    },
  },
})
