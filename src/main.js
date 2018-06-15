// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//定义组件
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
// account子模块
import AccountOverview from './components/account/accountOverview/accountOverview.vue'
import AccountSecurity from './components/account/accountSecurity/accountSecurity.vue'
import ApiSecretkey from './components/account/apiSecretkey/apiSecretkey.vue'
import kycAttestation from './components/account/kycAttestation/kycAttestation.vue'
import ServiceAgreement from './components/account/serviceAgreement/serviceAgreement.vue'
// asset子模块
import DelegateList from './components/asset/delegateList/delegateList.vue'
import EncourageRecord from './components/asset/encourageRecord/encourageRecord.vue'
import InviteAward from './components/asset/inviteAward/inviteAward.vue'
import MyAsset from './components/asset/myAssets/myAssets.vue'
import ReceiveRecord from './components/asset/receiveRecord/receiveRecord.vue'
import RollinAsset from './components/asset/rollinAsset/rollinAsset.vue'
import RolloutAsset from './components/asset/rolloutAsset/rolloutAsset.vue'
import TransactionRecord from './components/asset/transactionRecord/transactionRecord.vue'

import './common/stylus/index.styl'
import './common/stylus/iconfont.css'
require('bootstrap/dist/js/bootstrap.js')

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)

//定义路由
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
            { path: '/asset', component: Asset,
              children:[
                {path:'/myAsset',component:MyAsset},
                {path:'/rollinAsset',component:RollinAsset},
                {path:'/rolloutAsset',component:RolloutAsset},
                {path:'/transactionRecord',component:TransactionRecord},
                {path:'/receiveRecord',component:ReceiveRecord},
                {path:'/delegateList',component:DelegateList},
                {path:'/encourageRecord',component:EncourageRecord},
                {path:'/inviteAward',component:InviteAward}
              ]
          },
            { path: '/account', component: Account,
              children:[
                {path:'/accountOverview',component:AccountOverview},
                {path:'/accountSecurity',component:AccountSecurity},
                {path:'/apiSecretkey',component:ApiSecretkey},
                {path:'/kycAttestation',component:kycAttestation},
                {path:'/serviceAgreement',component:ServiceAgreement}
              ]
          },
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
//定义初始显示路由
router.push('market')