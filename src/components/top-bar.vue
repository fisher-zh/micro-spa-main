<template>
  <div class="top-bar">
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
  // background-color: #fff;
  z-index: 0;
  padding: 0 24px 0 224px;
}
</style>
