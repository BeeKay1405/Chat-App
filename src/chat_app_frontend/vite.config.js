import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, './public'), // Ensure this points to the public directory within chat_app_frontend
  build: {
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: path.resolve(__dirname, "../declarations"),
      },
      {
        find: "dfx-generated",
        replacement: path.resolve(__dirname, "../../../.dfx/local/canisters"),
      },
    ],
  },
  publicDir: "public",  // Serve static assets from the public directory
});
