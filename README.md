# micro-spa（基于Vue单页面应用微服务结构）

## 介绍
单页面应用微服务解决方案，单个或多个团队使用同一技术栈（Vue）开发某个产品不同的模块，单个模块可独立打包、部署，多个不同的模块可以组装成为一个产品。

## 安装
```js
// 安装脚手架
npm install -g micro-spa-cli
// 生成项目
micro-spa-cli
```

## 使用

### 简介
该工程需要基座工作和子模块工程配合使用，
基座工程建议提供必要的基础设施，如基座导航、路由鉴权、登录、全局变量等，
子应用工程开发对应业务模块的功能。

### 开发
#### 主应用
- main为主项目，主要提供基础的页面结构、路由权限控制等;
- 基础的组件、工具函数、图标等在项目较大的情况下应独立为单独的组件库的。
```js
// 主应用结构
|--build       打包脚本
|--config      打包配置
|--public      公共文件
   |--sub-app    子项目文件夹
|--src
   |--assets     样式及其资源
   |--components 组件
   |--http       http函数（基于axios）
   |--router     路由文件
   |--store      Vuex
   |--utils      工具函数
   |--view       页面组件
```
#### 子应用
- 在主应用（main）中通过脚本新增子应用（npm run create-sub）;
- 子应用命名使用小写字母，单词间以 - 分隔，如sub-app;
- 子应用开发过程可以单独运行（npm run dev）;
- 子应用的运行地址为 http://ip:port/#/sub-app-name/，例如：签到模块 http://ip:port/#/sign-in/。
```js
// 子应用结构
|--build       打包脚本
|--config      打包配置
|--dist        打包后的文件夹
|--public      公共文件
   |--sub-app    子项目文件夹
|--src
   |--assets     样式及其资源
   |--components 组件
   |--http       http函数（基于axios）
   |--router     路由文件
   |--store      Vuex
   |--utils      工具函数
   |--view       页面组件
```

### 发布
#### 子应用
首次发布子应用，子应用打包后的文件夹内所有文件copy至 public -> sub-app -> 子应用名称（如 sign） 文件夹下，执行打包命令
非首次发布子应用，子应用打包后的文件夹内所有文件copy至 dist -> sub-app -> 子应用名称（如 sign） 文件夹下
#### 主应用
执行打包脚本即可

### 测试环境发布脚本
暂无

### 生产环境发布脚本
暂无
