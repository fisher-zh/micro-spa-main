# micro-spa（单页面应用微服务结构）

### 简介
单页面应用微服务解决方案，单个或多个团队使用同一技术栈（Vue）开发某个产品不同的模块，最后将不同的模块进行组装成为一个产品。

该工程需要基座工作和子模块工程配合使用，
基座工程提供必要的基础设施，如基座导航、路由鉴权、登录、全局变量等，
子工程开发该模块独立的业务功能即可。

### 安装
```js
// 安装脚手架
npm install -g micro-spa-cli
// 初始化项目
micro-spa-cli
```

### 快速上手
- main 文件夹为主项目，主要提供基础的页面结构、路由权限控制等。
- 对于登录的状态用户名等统一存储在 sessionStorage，各个子应用在生产环境加载时会自动获取。
- 在主应用（main）中通过脚本新增子应用（npm run create-sub）
- 子应用命名使用小写字母，单词间以 - 分隔
- 子应用开发过程可以单独运行（npm run dev）
- 子应用的运行地址为 http://ip:port/#/sub-app-name/

### 发布
一、如果主应用无内容更新，那么单独发布子应用即可
- 子应用打包（npm run build）
- 打包后的文件（子应用 dist 文件夹下所有的文件）放到主应用 dist > sub-app > sub-app-name 文件夹下， 例如：签到模块则放入 dist > sub-app > sign-in
- 主应用执行脚本 npm run update-sub-prod
- 主应用 dist 文件夹部署到相应位置

二、主应用和子应用一起发布
- 子应用打包（npm run build）
- 打包后的文件（子应用 dist 文件夹下所有的文件）放到主应用 public > sub-app > sub-app-name 文件夹下， 例如：签到模块则放入 public > sub-app  > sign-in
- 主应用执行脚本 npm run build
- 主应用 dist 文件夹部署到相应位置

