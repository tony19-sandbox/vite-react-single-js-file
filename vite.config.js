import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
  },
  base: "https://cdn.jsdelivr.net/gh/tony19-sandbox/vite-react-demo/dist/",
})
