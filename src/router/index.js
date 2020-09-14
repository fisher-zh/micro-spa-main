import Vue from 'vue';
import VueRouter from 'vue-router';
import SubAppRouter from './sub-app-router';
// view组件
import Home from '../view/home';
const Login = () => import('../view/login');

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        isAuth: false, // 鉴权参数
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isAuth: false, // 鉴权参数
        keepAlive: false
      }
    },
    ...SubAppRouter
  ]
})

router.beforeEach((to, from, next) => {
  // 路由拦截 如登录、鉴权等功能
  next();
})

export default router;
