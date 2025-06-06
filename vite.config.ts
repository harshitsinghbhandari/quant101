// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace with your actual repo name!
const repoName = 'quant101'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: `/${repoName}/`, // <--- REQUIRED for GitHub Pages
})
