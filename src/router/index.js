import { createRouter, createWebHistory } from 'vue-router';
import { navBarConfig as AdminNav } from '../configs/admin.config';
import { navBarConfig as IndexNav } from '../configs/index.config';
import Admin from '../views/Admin.vue';
import Index from '../views/Index.vue';
import login from '../views/login.vue';

const handleRedirectRoutes = (prefix, navBarConfig) => {
  let redirectRoutes = [];
  navBarConfig.forEach((nav) => {
    if (nav.modules && nav.modules.length > 0) {
      redirectRoutes = redirectRoutes.concat({
        path: `/${prefix}/${nav.routerName}`,
        redirect: `/${prefix}/${nav.routerName}/${nav.modules[0].routerName}`,
      });
    }
  });
  return redirectRoutes;
};

const handleChildRoutes = (navBarConfig) => {
  let indexChild = [];
  navBarConfig.forEach((nav) => {
    if (nav.modules && nav.modules.length > 0) {
      nav.modules.forEach((module) => {
        indexChild = indexChild.concat([
          {
            name: `${nav.routerName}-${module.routerName}`,
            path: `${nav.routerName}/${module.routerName}`,
            component: module.component,
          },
        ]);
      });
    } else {
      indexChild = indexChild.concat([
        {
          name: nav.routerName,
          path: nav.routerName,
          component: nav.component,
          query: nav.query,
        },
      ]);
    }
  });
  return indexChild;
};

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/index/home',
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [...handleChildRoutes(IndexNav)],
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [...handleChildRoutes(AdminNav)],
  },
].concat(
  handleRedirectRoutes('index', IndexNav),
  handleRedirectRoutes('admin', AdminNav)
);

const router = createRouter({
  history: createWebHistory('/uml-exercise/'),
  routes,
});

export default router;
