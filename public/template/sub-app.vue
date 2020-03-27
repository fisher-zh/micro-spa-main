<template>
  <div class="router-container">
    <div id="sub-app"></div>
  </div>
</template>

<script>
import loadModule from '../utils/load-module';
export default {
  name: 'sub-app',
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
    console.log('----------------------------');
    console.log('加载子项目工程');
    loadModule(window['sub-app'].js, window['sub-app'].css);
  }
}
</script>

<style>
</style>
