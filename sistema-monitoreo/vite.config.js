import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias comunes (ajusta según tu estructura)
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      // Puedes añadir más…
    },
  },
})
