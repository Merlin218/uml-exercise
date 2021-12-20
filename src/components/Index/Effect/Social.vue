<template>
  <div :style="{ position: 'relative',paddingBottom:'40px' }">
    <a-typography-title> 社会评价 </a-typography-title>
    <a-typography-paragraph>
      <a-typography-paragraph :style="{ marginBottom: '20px' }" :heading="4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;东莞理工学院，近几年来的发展趋势整体来说是向上的。学校有松山湖、莞城两个校区，共占地2340亩，其中松山湖校区占地2000亩。
      </a-typography-paragraph>
      <a-list size="large">
        <a-list-item v-for="(item, index) in list" :key="item.id"
          ><icon-thumb-up /> 评价{{ index + 1 }}：{{
            item.content
          }}</a-list-item
        >
      </a-list>
    </a-typography-paragraph>

    <a-textarea
      placeholder="请输入你的评论..."
      :max-length="50"
      allow-clear
      :auto-size="{
        minRows: 3,
        maxRows: 5,
      }"
      v-model="content"
      show-word-limit
    />
    <a-button
      type="primary"
      @click="submit"
      :style="{ position: 'absolute', right: '0px', bottom: '0px' }"
      >提交评论</a-button
    >
  </div>
</template>

<script setup>
import { Message } from '@arco-design/web-vue';
import { onMounted, ref } from 'vue';
import { addComment, getCommentByType } from '../../../api/module/comment';

const list = ref([]);

const getData = async () => {
  const res = await getCommentByType(3);
  list.value = res.data;
};

onMounted(async () => {
  await getData();
});

const content = ref('');

const submit = async () => {
  if (content.value === '') {
    Message.info({
      content: '请输入内容',
      duration: 1000,
    });
    return;
  }
  const res = await addComment(3, content.value);
  if (res.data === '添加成功') {
    Message.success({
      content: '添加成功',
      duration: 1000,
    });
    content.value = '';
    await getData();
  }
};
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}
</style>
