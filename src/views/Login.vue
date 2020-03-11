<template>
  <div>
    <!-- 导航头 -->
    <van-nav-bar title="登录" />

    <!-- 输入框 -->
    <van-cell-group>
      <van-field
        v-validate="'required|digits:11'"
        name="mobile"
        :error-message="errors.first('mobile')"
        clearable
        left-icon="contact"
        v-model="user.mobile"
        placeholder="请输入手机号"
      />
      <van-field
        v-validate="'required|digits:6'"
        name="code"
        :error-message="errors.first('code')"
        clearable
        left-icon="smile-o"
        v-model="user.code"
        placeholder="请输入验证码"
      >
        <van-button size="small" slot="button">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <van-button class="btn" type="info" @click="handleLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '../api/user'
import { mapMutations } from 'vuex'
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
    ...mapMutations(['setUser']),
    async handleLogin () {
      try {
        const data = await login(this.user)
        // 存储登录状态
        // 1.vuex
        // 2.本地存储
        // this.$store.commit('setUser', data)
        this.setUser(data)

        // 跳转到首页
        this.$toast.success('登录成功！')
        this.$router.push('/')
      } catch (err) {
        this.$toast.fail('登录失败！')
      }
    }
  },
  created () {
    // 配置自定义信息
    const dict = {
      custom: {
        mobile: {
          required: '请输入手机号',
          digits: '手机号必须11位'
        },
        code: {
          required: '验证码必填',
          digits: '验证码必须6位'
        }
      }
    }
    this.$validator.localize('custom', dict)
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
