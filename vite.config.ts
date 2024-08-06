import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // remove base and run build if pushing to bluehost -- grab files from dist 
  base: "./",
  plugins: [react()],
})
