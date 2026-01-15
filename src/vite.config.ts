import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // IMPORTANT: Replace 'repo-name' with your GitHub repository name
  // e.g., if your repo is 'https://github.com/vmag/cv', use '/cv/'
  // If you are using a custom domain or user page (vmag.github.io), set this to '/'
  base: '/',
})
