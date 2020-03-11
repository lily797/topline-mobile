import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // {token, refresh_token}
    user: null
  },
  mutations: {
    // 通过mutataion改变状态
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
