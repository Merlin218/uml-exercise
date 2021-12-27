<template>
  <a-menu
    v-if="modules"
    :selectedKeys="selectKeys"
    :style="{
      maxHeight: '82vh',
    }"
  >
    <a-menu-item
      v-for="module in modules"
      :key="module.key"
      @click="handleMenuClick(module)"
      >{{ module.name }}
    </a-menu-item>
  </a-menu>
</template>
<script setup>
import { watch, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const modules = computed(() => store.state.siderMenu);
const selectKeys = ref([store.state.siderSelected]);
const handleMenuClick = (module) => {
  if (module.component) {
    const arr = router.currentRoute.value.fullPath.split('/');
    arr[arr.length - 1] = module.routerName;
    router.push(
      arr.join('/'),
    );
  }
};
watch(
  () => router.currentRoute.value.meta.module,
  (params) => {
    selectKeys.value = [params];
    store.commit('changeSiderSelected', params);
  },
  {
    immediate: true,
  },
);

</script>
<style lang=""></style>
