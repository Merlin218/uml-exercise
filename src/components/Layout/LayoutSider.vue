<template>
  <a-menu
    :accordion="true"
    showCollapseButton
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @sub-menu-click="selectedKeys = [$event + '-0']"
    :style="{
      maxHeight: '82vh',
    }"
  >
    <a-sub-menu
      v-for="module in navBar[navBarSelected].modules"
      :key="module.key"
    >
      <template #title>{{ module.name }}</template>
      <a-menu-item
        v-for="child in module.children"
        :key="module.key + '-' + child.key"
        >{{ child.name }}</a-menu-item
      >
    </a-sub-menu>
  </a-menu>
</template>
<script>
import { computed, ref, reactive } from "vue";
import { navBarConfig } from "../../configs/index.config";
import { useStore } from "vuex";
export default {
  name: "layout-sider",
  setup() {
    const store = useStore();

    let navBar = reactive(navBarConfig);

    let selectedKeys = ref(["0-0"]);
    let openKeys = ref(["0"]);
    let navBarSelected = computed(() => {
      openKeys.value = ["0"];
      selectedKeys.value = ["0-0"];
      return store.state.navBarSelected;
    });
    return {
      navBarSelected,
      navBarConfig,
      selectedKeys,
      navBar,
      openKeys,
    };
  },
};
</script>
<style lang=""></style>
