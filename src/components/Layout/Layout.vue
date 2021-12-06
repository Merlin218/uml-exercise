<template>
  <a-layout :style="{
      background: '#eee',
      minHeight: '100vh',
    }">
    <a-layout-header>
      <slot name="header"></slot>
    </a-layout-header>
    <a-layout :style="{
        padding: '10px 100px',
        flexFlow: 'column nowrap',
      }">
      <slot name="nav"></slot>
      <a-layout v-if="isNotHome && hasModule" :style="{
          minHeight: '82vh',
          padding: '20px 0',
        }">
        <a-layout-sider :style="{
            margin: '0',
          }">
          <slot name="sider"></slot>
        </a-layout-sider>
        <a-layout-content
          :style="{
            background: '#fff',
            marginLeft: '20px',
            padding: '30px',
          }"
        >
          <slot name="content"></slot>
        </a-layout-content>
      </a-layout>
      <a-layout v-else>
        <router-view></router-view>
      </a-layout>
    </a-layout>
    <a-layout :style="{
        height: '10px',
      }">
      <slot name="footer"></slot>
    </a-layout>
  </a-layout>
</template>
<script>
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'layout',
  setup() {
    const router = useRouter();
    const isNotHome = computed(() => router.currentRoute.value.name !== 'home');
    const hasModule = computed(() => !router.currentRoute.value.query.single);
    console.log(router.currentRoute.value);
    return { isNotHome, hasModule };
  },
};
</script>
