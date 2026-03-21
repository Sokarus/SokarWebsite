import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@sharedComponents': path.resolve(__dirname, '../src/sharedComponents'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@sharedIcons': path.resolve(__dirname, '../src/sharedIcons'),
    },
  },
});
