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
      <a-menu-item v-for="module in navBar" :key="module.key" @click="toPath(module)">{{
          module.name
        }}
      </a-menu-item>
    </a-menu-item>
    <a-menu-item disabled :style="{ justifySelf: 'flex-end' }"
    >
      <slot name="footer"></slot
      >
    </a-menu-item>
  </a-menu>
</template>
<script>
import {
  inject, reactive, ref, watch,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'layout-header',
  props: ['navBarConfig'],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const navBar = reactive(props.navBarConfig);
    const selectedKeys = ref(['0']);
    const handleMenuClick = (e) => {
      store.state.navBarSelected = e;
    };
    const toPath = (module) => {
      const prefix = router.currentRoute.value.fullPath.includes('/index') ? '/index/' : '/admin/';
      router.push(
        prefix
          + module.routerName,
      );
    };
    const prefix = ref(router.currentRoute.value.fullPath.includes('/index') ? '/index/' : '/admin/');
    // 配置主题
    const theme = inject('theme');

    // watch(
    //   () => router.currentRoute.value.fullPath,
    //   (params) => {
    //     selectedKeys.value = [navBar.findIndex((item) => item.key === params.split('/')[2])];
    //   },
    // );

    return {
      navBar,
      selectedKeys,
      handleMenuClick,
      theme,
      toPath,
      prefix,
      router,
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
