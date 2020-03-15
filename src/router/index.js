import Vue from 'vue';
import VueRouter from 'vue-router';
// view组件
import SubApp1 from '../view/sub-app1';
import SubApp2 from '../view/sub-app2';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/sub-app-1'
  }, {
    path: '/sub-app-1*',
    name: 'SubApp1',
    component: SubApp1
  }, {
    path: '/sub-app-2*',
    name: 'SubApp2All',
    component: SubApp2
  }]
})

router.beforeEach((to, from, next) => {
  // 路由拦截 如登录、鉴权等功能
  next();
})

export default router;
