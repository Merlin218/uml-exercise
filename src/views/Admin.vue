<template>
  <layout>
    <template #header>
      <layout-header :navBarConfig="adminConfig">
        <template #title
          ><span
            :style="{
              color: '#fff',
            }"
            >管理面板</span
          ></template
        >
        <template #footer>
          <a-button
            type="outline"
            :style="{
              border: '1px solid #fff',
              color: '#fff',
            }"
            @click="router.push('/index')"
            >返回首页</a-button
          ></template
        >
      </layout-header>
    </template>
    <template #sider>
      <layout-sider></layout-sider>
    </template>
    <template #content>
      <router-view></router-view>
    </template>
  </layout>
</template>

<script>
import { provide } from 'vue';
import { useRouter } from 'vue-router';
import Layout from '../components/Layout/Layout.vue';
import LayoutHeader from '../components/Layout/LayoutNav.vue';
import LayoutSider from '../components/Layout/LayoutSider.vue';
import {
  navBarConfig as adminConfig,
  navBarTheme,
} from '../configs/admin.config';

export default {
  components: { Layout, LayoutHeader, LayoutSider },
  setup() {
    const router = useRouter();
    provide('theme', navBarTheme);
    return {
      adminConfig,
      router,
    };
  },
};
</script>

<style></style>
