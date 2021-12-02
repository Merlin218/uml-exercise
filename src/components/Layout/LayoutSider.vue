<template>
  <a-menu
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
import { navBarConfig as indexNavBar } from "../../configs/index.config";
import { navBarConfig as adminNavBar } from "../../configs/admin.config";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "layout-sider",
  setup() {
    const store = useStore();
    const router = useRouter();
    let navBar = reactive(
      router.currentRoute.value.name == "index" ? indexNavBar : adminNavBar
    );
    let navBarSelected = computed(() => {
      openKeys.value = ["0"];
      selectedKeys.value = ["0-0"];
      return store.state.navBarSelected;
    });
    let selectedKeys = ref(["0-0"]);
    let openKeys = ref(["0"]);
    return {
      navBarSelected: computed(() => {
        openKeys.value = ["0"];
        selectedKeys.value = ["0-0"];
        return store.state.navBarSelected;
      }),
      selectedKeys,
      navBarSelected,
      navBar,
      openKeys,
    };
  },
};
</script>
<style lang=""></style>
