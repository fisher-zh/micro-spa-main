<template>
  <div class="home">
    <h4>home</h4>
    <button @click="goLink">go sub-app-2</button>
    <div id="sub-app1" class="sub-app1"></div>
  </div>
</template>

<script>
import loadModule from '../utils/load-module';
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {
    goLink () {
      this.$router.push({
        path: '/sub-app-2'
      })
    }
  },
  mounted () {
    console.log('----------------------------');
    console.log('加载子项目工程');
    loadModule(window.subApp1Module.js, window.subApp1Module.css);
  }
}
</script>

<style>
</style>
