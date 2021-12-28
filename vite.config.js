import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/uml-exercise/',
  resolve: {
    alias: {
      '/assets': 'src/assets',
    },
  },
  server: {
    proxy: {
      '/dev': {
        target: 'http://47.107.60.182:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, ''),
      },
      '/api': {
        target: 'https://www.merlin218.top/uml-exercise/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [vue()],
});
