<template>
<a-spin :loading="loading" dot style="width:100%" tip="加载中...">
  <a-table :data="list">
    <template #columns>
      <a-table-column title="ID" data-index="id"  width="50"></a-table-column>
      <a-table-column title="课程名称" data-index="courseName"></a-table-column>
      <a-table-column title="学分" data-index="credit"></a-table-column>
      <a-table-column title="学期" data-index="period"> </a-table-column>
      <a-table-column title="任职教师" data-index="teacher"></a-table-column>
    </template>
  </a-table>
  </a-spin>
</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import { findCoursePlanList } from '../../../api/module/class';

const list = ref([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  const res = await findCoursePlanList(1, 10);
  list.value = res.data.list.map((item) => ({
    id: item.course_id,
    courseName: item.course.name,
    credit: item.course.credit,
    period: item.course.period,
    teacher: item.teacher.teacher_name,
  }));
  loading.value = false;
});
</script>

<style scoped></style>
