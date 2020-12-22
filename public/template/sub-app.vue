<template>
  <div class="router-container">
    <div id="sub-app"></div>
  </div>
</template>

<script>
import loadModule from '../utils/load-module';
import removeModule from '../utils/remove-module';
export default {
  name: 'sub-app',
  data () {
    return {
      moduleName: 'SUB_APP_sub-app'
    };
  },
  methods: {
  },
  mounted () {
    console.log('----------------------------');
    console.log('加载子项目工程');
    if (window[this.moduleName]) {
      loadModule(window[this.moduleName].js, window[this.moduleName].css, this.moduleName);
    } else {
      console.error('请根据要求将子应用包放在指定位置');
    }
  },
  beforeDestroy () {
    removeModule(this.moduleName);
  }
};
</script>

<style>
</style>
