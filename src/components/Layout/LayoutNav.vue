<template>
  <!-- 导航栏-->
  <a-menu
    mode="horizontal"
    :theme="theme"
    v-model:selectedKeys="selectedKeys"
    @menu-item-click="handleMenuClick"
    :style="{
      position: 'relative',
    }"
  >
    <a-menu-item disabled>
      <slot name="title"></slot>

      <a-menu-item v-for="module in navBar" :key="module.key">{{
        module.name
      }}</a-menu-item>
    </a-menu-item>
    <a-menu-item disabled :style="{ justifySelf: 'flex-end' }"
      ><slot name="footer"></slot
    ></a-menu-item>
  </a-menu>
</template>
<script>
import { reactive, ref, inject } from "vue";
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
    //配置主题
    const theme = inject("theme");
    return {
      navBar,
      selectedKeys,
      handleMenuClick,
      theme,
    };
  },
};
</script>

<style scoped>
:deep(.arco-menu-overflow-wrap) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
