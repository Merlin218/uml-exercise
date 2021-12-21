<template>
  <a-table :data="list">
    <template #columns>
      <a-table-column title="ID" data-index="id"  width="50"></a-table-column>
      <a-table-column title="课程名称" data-index="courseName"></a-table-column>
      <a-table-column title="学分" data-index="credit"></a-table-column>
      <a-table-column title="学期" data-index="period"> </a-table-column>
      <a-table-column title="任职教师" data-index="teacher"></a-table-column>
    </template>
  </a-table>
</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import { findCoursePlanList } from '../../../api/module/class';

const list = ref([]);

onMounted(() => {
  findCoursePlanList(1, 10).then((res) => {
    list.value = res.data.list.map((item) => ({
      id: item.course_id,
      courseName: item.course.name,
      credit: item.course.credit,
      period: item.course.period,
      teacher: item.teacher.teacher_name,
    }));
  });
});
</script>

<style scoped></style>
