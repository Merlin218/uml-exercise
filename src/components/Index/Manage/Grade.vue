<template>
<a-spin :loading="loading" dot style="width:100%" tip="加载中...">
  <a-table :data="list">
    <template #columns>
      <a-table-column title="ID" data-index="id"  width="50"></a-table-column>
      <a-table-column title="课程名称" data-index="courseName"></a-table-column>
      <a-table-column title="姓名" data-index="studentName"></a-table-column>
      <a-table-column title="成绩" data-index="score"> </a-table-column>
    </template>
  </a-table>
</a-spin>
</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import { findScore } from '../../../api/module/class';

const list = ref([]);
const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  const res = await findScore(1, 10);
  list.value = res.data.list.map((item) => ({
    id: item.score_id,
    courseName: item.course_name,
    studentName: item.student_name,
    score: item.score,
  }));
  loading.value = false;
});
</script>

<style scoped></style>
