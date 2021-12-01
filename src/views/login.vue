<template>
  <div
    :style="{
      backgroundColor: 'rgb(35,35,36)',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }"
  >
    <a-card title="登录">
      <div
        :style="{
          width: '360px',
          height: '160px',
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          justifyContent: 'space-around',
        }"
      >
        <a-input
          :style="{ width: '320px' }"
          v-model="loginForm.username"
          placeholder="请输入账号"
        ></a-input>
        <a-input-password
          v-model="loginForm.password"
          :style="{ width: '320px' }"
          placeholder="请输入密码"
          allow-clear
        />
        <a-button type="primary" @click="handleLogin">登录</a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { Message } from "@arco-design/web-vue";
export default {
  name: "login",
  setup() {
    const router = useRouter();
    let loginForm = reactive({
      username: "",
      password: "",
    });
    const handleLogin = () => {
      if (!loginForm.username) {
        Message.error("请输入账号");
        return;
      }
      if (!loginForm.password) {
        Message.error("请输入密码");
        return;
      }
      router.push("admin");
    };
    return {
      handleLogin,
      loginForm,
    };
  },
};
</script>
