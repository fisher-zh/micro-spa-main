<template>
  <div class="login">
    <h2>单页面应用微服务架构--micro-spa</h2>
    <div class="input-cell">
      <span class="label">用户名：</span>
      <input class="value" type="text" v-model="username">
    </div>
    <div class="input-cell">
      <span class="label">密码：</span>
      <input class="value" type="password" v-model="password">
    </div>
    <input class="submit-button" type="button" value="登录" @click="login">
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === 'admin' && this.password === 'admin') {
        this.$router.push({
          path: '/'
        })
      } else {
        alert('账号或密码错误!');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 500px;
  height: 100px;
  margin: 100px auto;
  .input-cell {
    display: block;
    height: 50px;
    line-height: 50px;
    .label {
      display: inline-block;
      width: 80px;
      text-align: left;
    }
    .value {
      display: inline-block;
      width: 150px;
    }
  }
  .submit-button {
    display: block;
    margin-top: 20px;
    width: 100px;
    height: 36px;
    background: #1890FF;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
