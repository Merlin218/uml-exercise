<template>
  <a-layout
    :style="{
      background: '#eee',
      minHeight: '100vh',
    }"
  >
    <a-layout-header> <slot name="header"></slot></a-layout-header>
    <a-layout
      :style="{
        padding: '10px 100px',
        flexFlow: 'column nowrap',
      }"
    >
      <slot name="nav"></slot>
      <a-layout-content
        :style="{
          minHeight: '82vh',
          padding: '20px 0',
        }"
      >
        <a-layout-sider><slot name="sider"></slot></a-layout-sider>
        <slot name="content"></slot
      ></a-layout-content>
    </a-layout>
    <a-layout
      :style="{
        height: '10px',
      }"
      ><slot name="footer"></slot
    ></a-layout>
  </a-layout>
</template>
<script>
import { ref } from "vue";
export default {
  name: "layout",
};
</script>
