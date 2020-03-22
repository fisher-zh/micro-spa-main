<template>
  <div class="page-container">
    <top-bar></top-bar>
    <left-menu></left-menu>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from './components/top-bar';
import LeftMenu from './components/left-menu';
export default {
  name: 'App',
  components: {
    TopBar,
    LeftMenu
  },
  data () {
    return {}
  },
  watch: {
    $route () {
      console.log('路由变化');
    }
  },
  mounted () {
    console.log('----------------------------');
    console.log('基座工程初始化完毕');
  }
};
</script>

<style lang="scss">
.page-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #EBEEF5;
}
.main-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  padding: 104px 24px 24px 224px;
}
.router-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
}
</style>
