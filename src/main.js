// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Main from './components/main/main.vue'
import Asset from './components/asset/asset.vue'
import Notice from './components/notice/notice.vue'
import Account from './components/account/account.vue'
import Login from './components/login/login.vue'
import Register from './components/register/register.vue'
import Invite from './components/invite/invite.vue'
import Home from './components/home/home.vue'
import MainSet from './components/set/set.vue'
import Market from './components/market/market.vue'
import Optional from './components/optional/optional.vue'
import Hold from './components/hold/hold.vue'

import './common/stylus/index.styl'
import './common/stylus/iconfont.css'
require('bootstrap/dist/js/bootstrap.js')

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: App ,
      children: [
        { path: '/home', component: Home,
          children:[
            { path: '/main', component: Main ,
              children :[
                { path: '/set' , component: MainSet},
                { path: '/market', component: Market },
                { path: '/optional', component: Optional},
                { path: '/hold', component: Hold}
              ]
          },
            { path: '/asset', component: Asset},
            { path: '/account', component: Account},
            { path: '/login', component: Login},
            { path: '/register', component: Register},
            { path: '/invite', component:Invite}
          ]
        },
        { path: '/notice', component: Notice}
      ]
  },
]

const router = new VueRouter({
  routes
})

new Vue({
  mode: 'history',
  el: '#app',
  router
})
router.push('market')