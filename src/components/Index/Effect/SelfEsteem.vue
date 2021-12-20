<template>
  <a-typography-title> 教师自我评价 </a-typography-title>
  <a-list size="large">
    <a-list-item v-for="(item, index) in list" :key="item.id"
      ><icon-book /> 评价{{ index + 1 }}：{{ item.content }}</a-list-item
    >
  </a-list>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { getCommentByType } from '../../../api/module/comment';

const list = ref([]);

onMounted(async () => {
  const res = await getCommentByType(2);
  list.value = res.data;
});
</script>

<style scoped></style>
