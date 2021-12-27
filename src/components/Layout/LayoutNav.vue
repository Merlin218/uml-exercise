<template>
  <!-- 导航栏-->
  <a-menu
      mode="horizontal"
      :theme="theme"
      :selectedKeys="selectedKeys"
      :style="{
      position: 'relative',
    }"
  >
    <a-menu-item disabled>
      <slot name="title"></slot>
      <a-menu-item v-for="module in navBar" :key="module.key" @click="handleMenuClick(module)">{{
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
<script setup>
import {
  inject, reactive, ref, watch,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const props = defineProps(['navBarConfig']);
const navBar = reactive(props.navBarConfig);
const selectedKeys = ref([store.state.navBarSelected]);
const prefix = ref(router.currentRoute.value.fullPath.includes('/index') ? '/index/' : '/admin/');

const handleMenuClick = (module) => {
  router.push(
    prefix.value
          + module.routerName,
  );
  store.commit('changeNavBarSelected', module.key);
};

watch(
  () => router.currentRoute.value.meta.nav,
  (params) => {
    selectedKeys.value = [params];
    store.commit('changeNavBarSelected', params);
    store.commit('changeSiderMenu', navBar[params]?.modules);
  },
  {
    immediate: true,
  },
);

// 配置主题
const theme = inject('theme');

</script>

<style scoped>
:deep(.arco-menu-overflow-wrap) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
