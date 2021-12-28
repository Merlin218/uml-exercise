<template>
<a-spin :loading="loading" dot style="width:100%" tip="加载中...">

  <a-table :data="list">
    <template #columns>
      <a-table-column title="ID" data-index="student_id"  width="50"></a-table-column>
      <a-table-column title="姓名" data-index="student_name"></a-table-column>
      <a-table-column title="籍贯" data-index="native_place"></a-table-column>
      <a-table-column title="性别" data-index="sex">
         <template #cell="{ record }">
         {{record.sex === 0 ? '男':'女'}}
        </template>
      </a-table-column>
      <a-table-column title="邮箱" data-index="email"></a-table-column>
      <a-table-column title="手机号码" data-index="phone"></a-table-column>
      <a-table-column title="出生日期" data-index="birthday">
        <template #cell="{ record }">
         {{record.birthday.slice(0,10)}}
        </template>
      </a-table-column>
    </template>
  </a-table>
  </a-spin>
</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import { findRoster } from '../../../api/module/class';

const list = ref([]);
const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  const res = await findRoster(1, 10);
  list.value = res.data.list;
  loading.value = false;
});
</script>

<style scoped>

</style>
