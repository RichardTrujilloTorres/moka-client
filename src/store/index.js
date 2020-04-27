import Vue from 'vue'
import Vuex from 'vuex'
import Users from "./users.store";
import Roles from "./roles.store";

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
    role: Roles,
  }
})
