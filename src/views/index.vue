<template>
  <layout>
    <template #header>
      <layout-header :navBarConfig="indexConfig">
        <template #title
          ><span
            :style="{
              color: '#fff',
            }"
            >首页</span
          ></template
        >
        <template #footer
          ><a-button :style="{ alignSelf: 'flex-end' }">jjj</a-button></template
        >
      </layout-header>
    </template>
    <template #sider>
      <layout-sider></layout-sider>
    </template>
  </layout>
</template>

<script>
import Layout from "../components/Layout/Layout.vue";
import LayoutHeader from "../components/Layout/LayoutHeader.vue";
import LayoutSider from "../components/Layout/LayoutSider.vue";
import { navBarConfig as indexConfig } from "../configs/index.config";
export default {
  components: { Layout, LayoutHeader, LayoutSider },
  setup() {
    return {
      indexConfig,
    };
  },
};
</script>

<style></style>
