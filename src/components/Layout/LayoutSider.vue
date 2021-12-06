<template>
  <a-menu
      v-if="navBar[navBarSelected].modules"
      v-model:selectedKeys="selectedKeys"
      @sub-menu-click="selectedKeys = [$event]"
      :style="{
      maxHeight: '82vh',
    }"
  >
      <a-menu-item
          v-for="module in navBar[navBarSelected].modules"
          :key="module.key"
          @click="toPath(module)"
      >{{ module.name }}
      </a-menu-item>
  </a-menu>
</template>
<script>
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { navBarConfig as indexNavBar } from '../../configs/index.config';
import { navBarConfig as adminNavBar } from '../../configs/admin.config';

export default {
  name: 'layout-sider',
  setup() {
    const store = useStore();
    const router = useRouter();
    const navBar = reactive(
      router.currentRoute.value.fullPath.includes('/index') ? indexNavBar : adminNavBar,
    );
    const selectedKeys = ref(['0']);
    const navBarSelected = computed(() => {
      selectedKeys.value = ['0'];
      return store.state.navBarSelected;
    });
    const toPath = (module) => {
      if (module.component) {
        const prefix = router.currentRoute.value.fullPath.includes('/index') ? '/index/' : '/admin/';
        router.push(
          `${prefix
            + navBar[navBarSelected.value].routerName
          }/${
            module.routerName
          }`,
        );
      }
    };

    return {
      router,
      selectedKeys,
      navBarSelected,
      navBar,
      toPath,
    };
  },
};
</script>
<style lang=""></style>
