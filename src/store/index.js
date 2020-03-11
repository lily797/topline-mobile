import Vue from 'vue'
import Vuex from 'vuex'
import * as localStorage from '../utils/localStorage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // {token, refresh_token}
    // 项目运行时，先去本地存储获取
    user: localStorage.getItem('user')
  },
  mutations: {
    // 通过mutataion改变状态
    setUser (state, user) {
      state.user = user
      // 把登录状态存储到本地存储
      localStorage.setItem('user', user)
    }

  },
  actions: {
  },
  modules: {
  }
})
