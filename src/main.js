import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import ArcoVue from '@arco-design/web-vue';
// 额外引入图标库
// eslint-disable-next-line import/no-extraneous-dependencies
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@arco-design/web-vue/dist/arco.css';

createApp(App)
  .use(router)
  .use(store)
  .use(ArcoVue)
  .use(ArcoVueIcon)
  .mount('#app');
