import Vue from 'vue'
import Vuex from 'vuex'
import Users from "./users.store";
import Roles from "./roles.store";
import Permissions from "./permissions.store";
import Admins from "./admins.store";
import Histories from "./histories.store";

Vue.use(Vuex);

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
    permission: Permissions,
    admin: Admins,
    histories: Histories,
  }
})
