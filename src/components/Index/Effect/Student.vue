<template>
  <a-typography-title> 校内学生评价 </a-typography-title>
  <a-list size="large">
    <a-list-item v-for="(item, index) in list" :key="item.id"
      ><icon-thumb-up /> 评价{{ index + 1 }}：{{ item.content }}</a-list-item
    >
  </a-list>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getCommentByType } from '../../../api/module/comment';

const list = ref([]);

onMounted(async () => {
  const res = await getCommentByType(1);
  list.value = res.data;
});
</script>

<style scoped></style>
