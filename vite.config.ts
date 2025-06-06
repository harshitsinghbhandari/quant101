// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
  // Replace with your actual repo name!
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = 'quant101'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: `/${repoName}/`, // <--- REQUIRED for GitHub Pages
})
