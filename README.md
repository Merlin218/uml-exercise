# UML实训

## Code Stack 技术栈

vue3 + vuex + vite + arco design

- 相关文档
  - Vue3（框架）：https://v3.cn.vuejs.org/guide/introduction.html
  - VueRouter4（路由）：https://next.router.vuejs.org/zh/installation.html
  - Vuex4（状态管理）：https://next.vuex.vuejs.org/zh/index.html
  - Vite（打包工具）：https://cn.vitejs.dev/guide/
  - Arco Design（组件库）：https://arco.design/vue/docs/start

## File Structure 项目结构

```
|—— dist // 打包后的文件
├── public // 公共资源
└── src // 项目内容
    ├── assets // 静态资源
    ├── components // 组件（按功能模块建立文件夹）
    │   └── Layout // 布局组件
    ├── configs // 配置文件
    ├── utils // 工具类
    ├── router // 路由配置
    ├── store // 状态配置
    └── views // 页面组件
```

## Usage 使用方法

克隆本项目

```bash
git clone https://github.com/Merlin218/uml-exercise.git
```

安装依赖

```bash
npm install
```

安装新依赖（-S 生产依赖 -D 开发依赖）

```bash
npm install 依赖名 -S / -D
```

启动项目

```bash
npm run dev
```

打包项目

```bash
npm run build
```

打包后预览项目

```bash
npm run serve
```

