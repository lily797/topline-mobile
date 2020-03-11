<template>
  <div>
    <!-- 导航头 -->
    <van-nav-bar title="登录" />

    <!-- 输入框 -->
    <van-cell-group>
      <van-field left-icon="contact" v-model="user.mobile" placeholder="请输入手机号" />
      <van-field left-icon="smile-o" v-model="user.code" placeholder="请输入验证码">
        <van-button size="small" slot="button">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <van-button class="btn" type="info" @click="handleLogin" >登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '../api/user'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async handleLogin () {
      try {
        const res = await login(this.user)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_btn {
  padding: 20px 20px;
  .btn {
    width: 100%;
  }
}
</style>
