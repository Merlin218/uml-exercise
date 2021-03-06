import Introduction from '../components/Index/Course/Introduction.vue';
import Feature from '../components/Index/Course/Feature.vue';
import Textbook from '../components/Index/Course/Textbook.vue';
import History from '../components/Index/Course/History.vue';
import Leader from '../components/Index/Teacher/Leader.vue';
import Team from '../components/Index/Teacher/Team.vue';
import Classroom from '../components/Index/Teacher/Classroom.vue';
import Train from '../components/Index/Teacher/Train.vue';
import Outline from '../components/Index/Teaching/Outline.vue';
import Calendar from '../components/Index/Teaching/Calendar.vue';
import Content from '../components/Index/Teaching/Content.vue';
import Plan from '../components/Index/Teaching/Plan.vue';
import Focus from '../components/Index/Teaching/Focus.vue';
import Method from '../components/Index/Teaching/Method.vue';
import Measure from '../components/Index/Reform/Measure.vue';
import Project from '../components/Index/Reform/Project.vue';
import Achievement from '../components/Index/Reform/Achievement.vue';
import Award from '../components/Index/Reform/Award.vue';
import Home from '../components/Index/Home/Home.vue';
import Courseware from '../components/Index/Resource/Courseware.vue';
import Video from '../components/Index/Resource/Video.vue';
import Exercise from '../components/Index/Resource/Exercise.vue';
import Case from '../components/Index/Resource/Case.vue';
import Experiment from '../components/Index/Resource/Experiment.vue';
import Documentation from '../components/Index/Resource/Documentation.vue';
import CoursePlan from '../components/Index/Manage/CoursePlan.vue';
import Class from '../components/Index/Manage/Class.vue';
import Roster from '../components/Index/Manage/Roster.vue';
import Grade from '../components/Index/Manage/Grade.vue';
import Homework from '../components/Index/Manage/Homework.vue';
import Expert from '../components/Index/Effect/Expert.vue';
import Supervise from '../components/Index/Effect/Supervise.vue';
import SelfEsteem from '../components/Index/Effect/SelfEsteem.vue';
import Student from '../components/Index/Effect/Student.vue';
import Social from '../components/Index/Effect/Social.vue';
import Access from '../components/Index/Effect/Access.vue';
import Wechat from '../components/Index/Interaction/Wechat.vue';
import Qq from '../components/Index/Interaction/Qq.vue';

let navIndex = 0;
let moduleIndex = 0;

const config = [
  {
    name: '??????',
    routerName: 'home',
    component: Home,
    meta: { single: true },
  },
  // {
  //   name: '????????????',
  //   routerName: 'course',
  //   modules: [
  //     {
  //       name: '????????????',
  //       routerName: 'Introduction',
  //       component: Introduction,
  //     },
  //     {
  //       name: '????????????',
  //       routerName: 'feature',
  //       component: Feature,
  //     },
  //     {
  //       name: '?????????????????????',
  //       routerName: 'textbook',
  //       component: Textbook,
  //     },
  //     {
  //       name: '????????????',
  //       routerName: 'history',
  //       component: History,
  //     },
  //   ],
  // },
  // {
  //   name: '????????????',
  //   routerName: 'teacher',
  //   modules: [
  //     {
  //       name: '???????????????',
  //       routerName: 'leader',
  //       component: Leader,
  //     },
  //     {
  //       name: '??????????????????',
  //       routerName: 'team',
  //       component: Team,
  //     },
  //     {
  //       name: '????????????',
  //       routerName: 'classroom',
  //       component: Classroom,
  //     },
  //     {
  //       name: '??????????????????',
  //       routerName: 'train',
  //       component: Train,
  //     },
  //   ],
  // },
  // {
  //   name: '????????????',
  //   routerName: 'teaching',
  //   modules: [
  //     {
  //       name: '????????????',
  //       routerName: 'outline',
  //       component: Outline,
  //     },
  //     {
  //       name: '????????????',
  //       routerName: 'calendar',
  //       component: Calendar,
  //     },
  //     {
  //       name: '????????????',
  //       routerName: 'content',
  //       component: Content,
  //     },
  //     {
  //       name: '????????????',
  //       routerName: 'plan',
  //       component: Plan,
  //     },
  //     {
  //       name: '???????????????',
  //       routerName: 'focus',
  //       component: Focus,
  //     },
  //     {
  //       name: '?????????????????????',
  //       routerName: 'method',
  //       component: Method,
  //     },
  //   ],
  // },
  // {
  //   name: '??????????????????',
  //   routerName: 'reform',
  //   modules: [
  //     {
  //       name: '??????????????????',
  //       routerName: 'measure',
  //       component: Measure,
  //     },
  //     {
  //       name: '??????????????????',
  //       routerName: 'project',
  //       component: Project,
  //     },
  //     {
  //       name: '??????????????????',
  //       routerName: 'achievement',
  //       component: Achievement,
  //     },
  //     {
  //       name: '?????????????????????',
  //       routerName: 'award',
  //       component: Award,
  //     },
  //   ],
  // },
  // {
  //   name: '????????????',
  //   routerName: 'resource',
  //   modules: [
  //     {
  //       name: '????????????',
  //       routerName: 'courseware',
  //       component: Courseware,
  //     },
  //     {
  //       name: '????????????',
  //       routerName: 'video',
  //       component: Video,
  //     },
  //     {
  //       name: '?????????',
  //       routerName: 'exercise',
  //       component: Exercise,
  //     },
  //     {
  //       name: '?????????',
  //       routerName: 'case',
  //       component: Case,
  //     },
  //     {
  //       name: '????????????',
  //       routerName: 'experiment',
  //       component: Experiment,
  //     },
  //     {
  //       name: '??????????????????',
  //       routerName: 'documentation',
  //       component: Documentation,
  //     },
  //   ],
  // },
  {
    name: '????????????',
    routerName: 'manage',
    modules: [
      {
        name: '????????????',
        routerName: 'coursePlan',
        component: CoursePlan,
      },
      {
        name: '???????????????',
        routerName: 'roster',
        component: Roster,
      },
      {
        name: '???????????????',
        routerName: 'grade',
        component: Grade,
      },
    ],
  },
  {
    name: '????????????',
    routerName: 'effect',
    modules: [
      {
        name: '??????????????????',
        routerName: 'self-esteem',
        component: SelfEsteem,
      },
      {
        name: '??????????????????',
        routerName: 'student',
        component: Student,
      },
      {
        name: '????????????',
        routerName: 'social',
        component: Social,
      },
      {
        name: '??????????????????',
        routerName: 'expert',
        component: Expert,
      },
      {
        name: '????????????',
        routerName: 'access',
        component: Access,
      },
    ],
  },
  // {
  //   name: '????????????',
  //   routerName: 'Interaction',
  //   modules: [
  //     {
  //       name: '?????????',
  //       routerName: 'wechat',
  //       component: Wechat,
  //     },
  //     {
  //       name: 'QQ???',
  //       routerName: 'qq',
  //       component: Qq,
  //     },
  //   ],
  // },
];

export const navBarConfig = config.map((nav) => {
  if (nav.modules && nav.modules.length > 0) {
    // eslint-disable-next-line no-param-reassign,max-len,no-plusplus
    nav.modules = nav.modules.map((module) => Object.assign(module, { key: (moduleIndex++).toString() }));
    moduleIndex = 0;
  }
  // eslint-disable-next-line no-plusplus
  return Object.assign(nav, { key: (navIndex++).toString() });
});
export const navBarTheme = 'light';
