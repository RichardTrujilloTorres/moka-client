import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from "../views/Admin";
import Account from "../views/Account";
import Permission from "../views/Permission";
import Cloud from "../views/Cloud";
import History from "../views/History";
import Settings from "../views/Settings";
import Feedback from "../views/Feedback";
import Help from "../views/Help";
import Role from "../views/Role";
import Storage from "../views/Storage";
import AccountDetail from "../views/AccountDetail";
import RoleDetail from "../views/Role/RoleDetail";
import PermissionDetail from "../views/Permission/PermissionDetail";
import SearchResults from "../views/SearchResults";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accounts',
    name: 'Account',
    component: Account
  },
  {
    path: '/accounts/:id',
    name: 'AccountDetail',
    component: AccountDetail,
  },
  {
    path: '/admins',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/roles',
    name: 'Role',
    component: Role
  },
  {
    path: '/roles/:id',
    name: 'RoleDetail',
    component: RoleDetail,
  },
  {
    path: '/permissions',
    name: 'Permission',
    component: Permission
  },
  {
    path: '/permissions/:id',
    name: 'PermissionDetail',
    component: PermissionDetail
  },
  {
    path: '/cloud',
    name: 'Cloud',
    component: Cloud
  },
  {
    path: '/storage',
    name: 'Storage',
    component: Storage
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchResults,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
