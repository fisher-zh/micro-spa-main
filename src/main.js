import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './http';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/main.scss';
// import './assets/reset.scss';
// 挂载http工具实例
Vue.prototype.$http = http;

window.baseApp = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
