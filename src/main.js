// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Main from './components/main/main.vue'
import Asset from './components/asset/asset.vue'
import Notice from './components/notice/notice.vue'
import Account from './components/account/account.vue'
import Login from './components/login/login.vue'
import Register from './components/register/register.vue'
import Invite from './components/invite/invite.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  { path: '/main', component: Main},
  { path: '/asset', component: Asset},
  { path: '/notice', component: Notice},
  { path: '/account', component: Account},
  { path: '/login', component: Login},
  { path: '/register', component: Register},
  { path: '/invite', component:Invite}
]

const router = new VueRouter({
  routes
})

new Vue({
  mode: 'history',
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
router.push('/main')