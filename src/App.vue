<template>
  <div>
    <h3>micro-fe-app</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
