<template>
  <div class="router-container">
    <div id="test-sub-app">123</div>
  </div>
</template>

<script>
import loadModule from '../utils/load-module';
export default {
  name: 'test-sub-app',
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
    console.log('----------------------------');
    console.log('加载子项目工程');
    loadModule(window['test-sub-app'].js, window['test-sub-app'].css);
  }
}
</script>

<style>
</style>
