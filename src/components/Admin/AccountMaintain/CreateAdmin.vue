<template>
  <a-form :model="form" :style="{ width: '600px' }">
    <a-form-item field="username" label="用户名">
      <a-input v-model="form.username" placeholder="请输入用户名" />
    </a-form-item>
    <a-form-item field="password" label="密码">
      <a-input v-model="form.password" placeholder="请输入密码" />
    </a-form-item>
    <a-form-item field="repassword" label="重复密码">
      <a-input v-model="form.repassword" placeholder="请重复输入密码" />
    </a-form-item>
    <a-form-item field="authority" label="请选择权限">
      <a-radio-group
        type="button"
        :style="{
          marginBottom: '20px',
        }"
        v-model="form.authority"
      >
        <a-radio
          v-for="(item, index) in type.slice(0, authority)"
          :key="item"
          :value="index + 1"
          >{{ item }}</a-radio
        >
      </a-radio-group>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { Message } from '@arco-design/web-vue';
import { ref } from '@vue/reactivity';
import { register } from '../../../api/module/user';

const authority = window.localStorage.getItem('authority');

const type = ['教师', '二级管理员', '高级管理员'];

const form = ref({
  username: '',
  password: '',
  repassword: '',
  authority: 1,
});

const submit = () => {
  register(
    form.value.username,
    form.value.password,
    form.value.repassword,
    form.value.authority,
  ).then((res) => {
    console.log(res);
    Message.success({
      content: '创建成功',
      duration: 1000,
    });
  });
};
</script>
