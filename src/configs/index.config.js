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
    name: '首页',
    routerName: 'home',
    component: Home,
    query: { single: true },
  },
  {
    name: '课程概况',
    routerName: 'course',
    modules: [
      {
        name: '课程简介',
        routerName: 'Introduction',
        component: Introduction,
      },
      {
        name: '课程特色',
        routerName: 'feature',
        component: Feature,
      },
      {
        name: '教材与参考资料',
        routerName: 'textbook',
        component: Textbook,
      },
      {
        name: '历史沿革',
        routerName: 'history',
        component: History,
      },
    ],
  },
  {
    name: '教师队伍',
    routerName: 'teacher',
    modules: [
      {
        name: '课程负责人',
        routerName: 'leader',
        component: Leader,
      },
      {
        name: '课程教学团队',
        routerName: 'team',
        component: Team,
      },
      {
        name: '主讲教室',
        routerName: 'classroom',
        component: Classroom,
      },
      {
        name: '青年教师培养',
        routerName: 'train',
        component: Train,
      },
    ],
  },
  {
    name: '教学安排',
    routerName: 'teaching',
    modules: [
      {
        name: '教学大纲',
        routerName: 'outline',
        component: Outline,
      },
      {
        name: '教学日历',
        routerName: 'calendar',
        component: Calendar,
      },
      {
        name: '教学内容',
        routerName: 'content',
        component: Content,
      },
      {
        name: '授课计划',
        routerName: 'plan',
        component: Plan,
      },
      {
        name: '教学难重点',
        routerName: 'focus',
        component: Focus,
      },
      {
        name: '教学方法与手段',
        routerName: 'method',
        component: Method,
      },
    ],
  },
  {
    name: '教学研究改革',
    routerName: 'reform',
    modules: [
      {
        name: '教学改革措施',
        routerName: 'measure',
        component: Measure,
      },
      {
        name: '教学改革立项',
        routerName: 'project',
        component: Project,
      },
      {
        name: '教学改革成果',
        routerName: 'achievement',
        component: Achievement,
      },
      {
        name: '教学表彰和奖励',
        routerName: 'award',
        component: Award,
      },
    ],
  },
  {
    name: '教学资源',
    routerName: 'resource',
    modules: [
      {
        name: '课程课件',
        routerName: 'courseware',
        component: Courseware,
      },
      {
        name: '教学录像',
        routerName: 'video',
        component: Video,
      },
      {
        name: '习题库',
        routerName: 'exercise',
        component: Exercise,
      },
      {
        name: '案例库',
        routerName: 'case',
        component: Case,
      },
      {
        name: '实验任务',
        routerName: 'experiment',
        component: Experiment,
      },
      {
        name: '技术文档范本',
        routerName: 'documentation',
        component: Documentation,
      },
    ],
  },
  {
    name: '教学管理',
    routerName: 'manage',
    modules: [
      {
        name: '开课计划',
        routerName: 'coursePlan',
        component: CoursePlan,
      },
      {
        name: '上课班级',
        routerName: 'class',
        component: Class,
      },
      {
        name: '班级花名册',
        routerName: 'roster',
        component: Roster,
      },
      {
        name: '班级成绩单',
        routerName: 'grade',
        component: Grade,
      },
      {
        name: '学生作业案例',
        routerName: 'homework',
        component: Homework,
      },
    ],
  },
  {
    name: '教学效果',
    routerName: 'effect',
    modules: [
      {
        name: '教师自我评价',
        routerName: 'self-esteem',
        component: SelfEsteem,
      },
      {
        name: '校内学生评价',
        routerName: 'student',
        component: Student,
      },
      {
        name: '社会评价',
        routerName: 'social',
        component: Social,
      },
      {
        name: '校外专家评价',
        routerName: 'expert',
        component: Expert,
      },
      {
        name: '教学评估',
        routerName: 'access',
        component: Access,
      },
    ],
  },
  {
    name: '教学互动',
    routerName: 'Interaction',
    modules: [
      {
        name: '微信群',
        routerName: 'wechat',
        component: Wechat,
      },
      {
        name: 'QQ群',
        routerName: 'qq',
        component: Qq,
      },
    ],
  },
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
