import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    hmr: {
      clientPort: 5173,
    },
  },
  build: {
    outDir: 'dist', // Default output folder for Vite builds
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
