import Introduct from '../components/Admin/ContentMaintain/Introduct.vue';
import TeachingArrange from '../components/Admin/ContentMaintain/TeachingArrange.vue';
import TeachingResource from '../components/Admin/ContentMaintain/TeachingResource.vue';
import CreateTeacher from '../components/Admin/AccountMaintain/CreateTeacher.vue';
import CreateStudent from '../components/Admin/AccountMaintain/CreateStudent.vue';
import ChangePassword from '../components/Admin/AccountMaintain/ChangePassword.vue';
import MakeStudyPlan from '../components/Admin/MakeStudyPlan.vue';
import ClassManage from '../components/Admin/ClassManage.vue';
import TeacherTeam from '../components/Admin/ContentMaintain/TeacherTeam.vue';
import CreateAdmin from '../components/Admin/AccountMaintain/CreateAdmin.vue';
import AdminList from '../components/Admin/AccountMaintain/AdminList.vue';

let navIndex = 0;
let moduleIndex = 0;

const config = [
  {
    name: '内容维护',
    routerName: 'ContentMaintain',
    modules: [
      {
        name: '评价管理',
        routerName: 'Introduct',
        component: Introduct,
      },
    ],
  },
  {
    name: '账号维护',
    routerName: 'AccountMaintain',
    modules: [
      {
        name: '管理员列表',
        routerName: 'AdminList',
        component: AdminList,
      },
      {
        name: '创建管理员',
        routerName: 'createAdmin',
        component: CreateAdmin,
      },
      // {
      //   name: '修改登录密码',
      //   routerName: 'changePassword',
      //   component: ChangePassword,
      // },
    ],
  },
  // {
  //   name: '制订开课计划',
  //   routerName: 'MakeStudyPlan',
  //   component: MakeStudyPlan,
  //   query: { single: true },
  // },
  // {
  //   name: '班级管理',
  //   routerName: 'ClassManage',
  //   component: ClassManage,
  //   query: { single: true },
  // },
];

export const navBarConfig = config.map((nav) => {
  if (nav.modules && nav.modules.length > 0) {
    // eslint-disable-next-line no-param-reassign,max-len,no-plusplus
    nav.modules = nav.modules.map((module) => Object.assign(module, { key: (moduleIndex++).toString() }));
    moduleIndex = 0;
  }
  // eslint-disable-next-line no-plusplus,max-len
  return Object.assign(nav, { key: (navIndex++).toString() });
});

export const navBarTheme = 'dark';
