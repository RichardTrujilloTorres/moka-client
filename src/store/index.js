import Vue from 'vue'
import Vuex from 'vuex'
import Users from "./users.store";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: Users,
  }
})
