import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": fileURLToPath(new URL('./src/shared', import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@core": fileURLToPath(new URL("./src/core", import.meta.url)),
      "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
    }
  }
})
