<template>
  <div class="top-bar">
    <h1 class="logo">MICRO SPA</h1>
    <span>基于Vue的单页面应用微服务架构</span>
  </div>
</template>

<script>
export default {
  name: 'top-bar',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: #409eff;
  z-index: 1;
  color: #fff;
  padding: 0 24px;
  .logo {
    display: inline-block;
    font-size: 32px;
    font-weight: 100;
    margin-right: 24px;
  }
}
</style>
