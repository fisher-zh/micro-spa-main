<template>
  <div class="left-menu">
    <h1 class="logo">MICRO SPA</h1>
    <el-menu
      :default-active="defaultActive"
      router
      style="height: 100%;"
    >
      <el-menu-item index="/sub-app-1">
        <i class="el-icon-menu"></i>
        <span slot="title">子应用一</span>
      </el-menu-item>
      <el-menu-item index="/sub-app-2">
        <i class="el-icon-menu"></i>
        <span slot="title">子应用二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'left-menu',
  data () {
    return {
      defaultActive: '/sub-app-1',
      menuList: [
        '/sub-app-1',
        '/sub-app-2'
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.left-menu {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 200px;
  z-index: 1;
  background-color: #fff;
  padding-top: 80px;
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 32px;
    font-weight: 100;
    margin-right: 24px;
  }
}
</style>
