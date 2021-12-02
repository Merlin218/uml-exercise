import { createRouter, createWebHistory } from "vue-router";
import Admin from "../views/Admin.vue";
import Index from "../views/index.vue";
import login from "../views/login.vue";
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
];

const router = createRouter({
  history: createWebHistory("/uml-exercise/"),
  routes,
});

export default router;
