<template>
  <div class="left-menu">
    <h1 class="logo">MICRO SPA</h1>
    <div class="menu">
      <div
        class="menu-cell"
        v-for="menuItem in menuList"
        :key="menuItem.path"
        @click="go(menuItem.path)"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ menuItem.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left-menu',
  data () {
    return {
      menuList: [{
        path: '/sub-app-1',
        name: '子应用一'
      }, {
        path: '/sub-app-2',
        name: '子应用二'
      }]
    }
  },
  methods: {
    go (path) {
      console.log(path);
      this.$router.push({
        path: path
      })
    }
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
  .menu {
    position: relative;
    width: 200px;
    height: 100%;
    &-cell {
      display: block;
      width: 200px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
