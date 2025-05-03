// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // This adds the /dev prefix to all built assets and routes
  plugins: [react()],
});
