<template>
  <a-typography-title> 教师自我评价 </a-typography-title>
<a-spin :loading="loading" dot style="width:100%" tip="加载中...">
  <a-list size="large">
    <a-list-item v-for="(item, index) in list" :key="item.id"
      ><icon-book /> 评价{{ index + 1 }}：{{ item.content }}</a-list-item
    >
  </a-list>
  </a-spin>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getCommentByType } from '../../../api/module/comment';

const list = ref([]);
const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  const res = await getCommentByType(2);
  list.value = res.data;
  loading.value = false;
});
</script>

<style scoped></style>
