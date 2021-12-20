<template>
  <a-radio-group
    type="button"
    @change="filter"
    :style="{
      marginBottom: '20px',
    }"
    :modelValue="indicatorType"
  >
    <a-radio
      v-for="(item, index) in type.slice(0, authority)"
      :key="item"
      :value="index"
      >{{ item }}</a-radio
    >
  </a-radio-group>
  <a-table :data="filterList">
    <template #columns>
      <a-table-column title="ID" data-index="id"></a-table-column>
      <a-table-column title="用户名" data-index="username"></a-table-column>
      <a-table-column title="密码" data-index="password"></a-table-column>
      <a-table-column title="权限" data-index="authority">
        <template #cell="{ record }">
          <a-tag color="arcoblue">{{ type[record.authority] }}</a-tag>
        </template>
      </a-table-column>
      <a-table-column title="操作">
        <template #cell="{ record }">
          <a-button
            type="primary"
            status="danger"
            @click="handleDelete(record.id)"
            >删除</a-button
          >
        </template>
      </a-table-column>
    </template>
  </a-table>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Message } from '@arco-design/web-vue';
import { getAdminList, deleteAdmin } from '../../../api/module/user';

const authority = window.localStorage.getItem('authority');

const type = ['全部', '教师', '二级管理员', '高级管理员'];

const list = ref([]);
const filterList = ref([]);

const getData = async () => {
  const res = await getAdminList(authority);
  list.value = res.data;
};

const indicatorType = ref(0);

const filter = (value) => {
  indicatorType.value = value;
  if (value === 0) {
    filterList.value = list.value;
  } else {
    filterList.value = list.value.filter((item) => item.authority === value);
  }
};

onMounted(async () => {
  await getData(indicatorType.value);
  filterList.value = list.value;
});

const handleDelete = (id) => {
  deleteAdmin(id).then((res) => {
    Message.success({
      content: '删除成功',
      duration: 1000,
    });
  });
  filter(0);
};
</script>
