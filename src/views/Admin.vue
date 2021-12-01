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
import { navBarConfig as adminConfig } from "../configs/admin.config";
export default {
  components: { Layout, LayoutHeader, LayoutSider },
  setup() {
    return {
      adminConfig,
    };
  },
};
</script>

<style></style>
