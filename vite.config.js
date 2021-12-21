import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './uml-exercise/',
  resolve: {
    alias: {
      '/assets': 'src/assets',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://10.62.248.245:8888/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [vue()],
});
