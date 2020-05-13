<template>
  <div class="top-bar">
    <h1>基于Vue的单页面应用微服务架构</h1>
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
  top: 24px;
  left: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;

  z-index: 0;
  padding: 0 24px 0 224px;
  h1 {
    display: block;
    width: 100%;
    height: 80px;
    line-height: 80px;
    border-radius: 4px;
    background-color: #fff;
    padding-left: 24px;
    box-sizing: border-box;
  }
}
</style>
