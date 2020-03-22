<template>
  <div class="login">
    <h2 class="title">MICRO-SPA</h2>
    <h3 class="tips">基于Vue的单页面应用微服务架构</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即登录</el-button>
        <el-button>游客登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit () {
      if (this.form.username === 'admin' && this.form.password === 'admin') {
        this.$router.push({
          path: '/'
        });
      } else {
        alert('账号或密码错误!');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 400px;
  height: 100px;
  margin: 100px auto;
  text-align: center;
  .title {
    font-size: 32px;
    font-weight: 100;
  }
  .tips {
    font-size: 24px;
    font-weight: 100;
  }
  .input-cell {
    display: block;
    height: 50px;
    line-height: 50px;
    .label {
      display: inline-block;
      width: 80px;
      text-align: left;
      font-size: 16px;
      font-weight: 100;
    }
    .value {
      display: inline-block;
      width: 150px;
      font-size: 16px;
      font-weight: 100;
    }
  }
  .submit-button {
    display: inline-block;
    margin-top: 20px;
    width: 100px;
    height: 36px;
    background: #1890ff;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
