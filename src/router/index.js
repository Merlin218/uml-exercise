import { h } from "@vue/runtime-core";
import { createRouter, createWebHistory } from "vue-router";
import Admin from "../views/Admin.vue";
import Index from "../views/index.vue";
import login from "../views/login.vue";
import testVue from "../views/test.vue";
const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: Index,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/test",
    name: "test",
    component: testVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
