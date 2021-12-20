<template>
  <a-radio-group
    type="button"
    @change="updateType"
    :style="{
      marginBottom: '20px',
    }"
    :modelValue="indicatorType"
  >
    <a-radio v-for="(item, index) in type" :key="item" :value="index">{{
      item
    }}</a-radio>
  </a-radio-group>
  <a-table :data="list">
    <template #columns>
      <a-table-column title="ID" data-index="id"></a-table-column>
      <a-table-column title="评论内容" data-index="content"></a-table-column>
      <a-table-column title="类型" data-index="type">
        <template #cell="{ record }">
          <a-tag color="arcoblue">{{ type[record.type] }}</a-tag>
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
import { deleteComment, getCommentByType } from '../../../api/module/comment';

const type = ['全部', '学生评价', '教师自我评价', '社会评价'];

const list = ref([]);

const getData = async (id) => {
  const res = await getCommentByType(id);
  list.value = res.data;
};

const indicatorType = ref(0);

const updateType = async (id) => {
  indicatorType.value = id;
  await getData(id);
};

onMounted(async () => {
  await getData(indicatorType.value);
});

const handleDelete = async (id) => {
  const res = await deleteComment(id);
  Message.success({
    content: res.data,
    duration: 1000,
  });
  await getData();
};
</script>
