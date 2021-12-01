<template>
  <!-- 导航栏-->
  <a-menu
    mode="horizontal"
    theme="dark"
    v-model:selectedKeys="selectedKeys"
    @menu-item-click="handleMenuClick"
  >
    <slot name="title"></slot>
    <a-menu-item v-for="module in navBar" :key="module.key">{{
      module.name
    }}</a-menu-item>
    <slot name="footer"></slot>
  </a-menu>
</template>
<script>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "layout-header",
  props: ["navBarConfig"],
  setup(props) {
    const store = useStore();
    const navBar = reactive(props.navBarConfig);
    const selectedKeys = ref(["0"]);
    const handleMenuClick = (e) => {
      store.state.navBarSelected = e;
    };
    return {
      navBar,
      selectedKeys,
      handleMenuClick,
    };
  },
};
</script>

<style scoped>
deep .arco-menu-overflow-wrap {
  width: 100px !important;
}
</style>
