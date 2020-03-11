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
        const data = await login(this.user)
        // 存储登录状态
        // 1.vuex
        this.$store.commit('setUser', data)
        // 2.本地存储
        // 跳转到首页
        this.$toast.success('登录成功！')
        this.$router.push('/')
      } catch (err) {
        this.$toast.fail('登录失败！')
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
