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
      // '/api1': {
      //   target: 'http://10.62.119.9:8888',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api1/, ''),
      // },
      '/api': {
        target: 'https://www.merlin218.top/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [vue()],
});
