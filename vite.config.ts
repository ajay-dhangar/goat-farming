import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/goat-farming/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
