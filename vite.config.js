import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Additional options for Dart Sass
        api: 'modern-compiler'
      }
    }
  }
});
