<template>
        <div class="header">
           <b-container>
               <!-- <b-row>
                   <b-col cols="2">
                       <div class="logo" @click="backHome"></div>
                   </b-col>
                   <b-col cols="7">
                       <div class="head-navbar">
                           <b-nav>
                               <b-nav-item v-for="(item,index) in nav" :key="index" :class="{active:index==active}" @click="selectItem(index)"><router-link :to="href[index]">{{item}}</router-link></b-nav-item>
                           </b-nav>
                       </div>
                       <b-navbar toggleable>
                            <b-navbar-toggle target="headNav"></b-navbar-toggle>
                            <b-collapse is-nav id="headNav">
                                <b-navbar-nav>
                                    <b-nav-item v-for="(item,index) in nav" :key="index" :class="{active:index==active}" @click="selectItem(index)"><router-link :to="href[index]">{{item}}</router-link></b-nav-item>
                                </b-navbar-nav>
                            </b-collapse>
                       </b-navbar>
                   </b-col>
                   <b-col cols="3">
                       <div class="login-register">
                           <div class="registerbtn"><router-link to="/register">注册</router-link> </div>
                           <div class="login"><router-link to="/login">登陆</router-link></div>
                       </div>
                   </b-col>
               </b-row> -->
               <b-row>
                   <b-col>
                       <b-navbar toggleable fixed="top">
                            <b-navbar-brand href="#">
                                <img src="https://placekitten.com/g/30/30" alt="BV">
                            </b-navbar-brand>
                            <b-navbar-toggle target="headNav"></b-navbar-toggle>
                            <b-collapse is-nav id="headNav">
                                <b-navbar-nav>
                                    <b-nav-item v-for="(item,index) in nav" :key="index" :class="{active:index==active}" @click="selectItem(index)"><router-link :to="href[index]">{{item}}</router-link></b-nav-item>
                                </b-navbar-nav>
                            </b-collapse>
                       </b-navbar>
                   </b-col>
               </b-row>
           </b-container>
        </div> 
</template>
<script>

export default {
  data(){
      return{
          active:0,
          nav:["行情信息","资产管理","账号中心 ","邀请朋友","公告"],
          href:["market","myAsset","accountOverview","invite","notice"]
      }
  },
  methods:{
      selectItem(index){
          this.active = index
          let navItems = ""
          if(index == 2){
              navItems = [
                  {title:"账号概览",navHref:"accountOverview"},
                  {title:"账户安全",navHref:"accountSecurity"},
                  {title:"KYC认证",navHref:"kycAttestation"},
                  {title:"API密钥",navHref:"apiSecretkey"},
                  {title:"服务协议",navHref:"serviceAgreement"}
              ]
          }
          if(index==1||index==3){
              navItems = [
                  {title:"我的资产",navHref:"myAsset"},
                  {title:"转入数字资产",navHref:"rolloutAsset"},
                  {title:"转出数字资产",navHref:"rollinAsset"},
                  {title:"委托列表",navHref:"delegateList"},
                  {title:"成交记录",navHref:"transactionRecord"},
                  {title:"获赠记录",navHref:"receiveRecord"},
                  {title:"鼓励金记录",navHref:"encourageRecord"},
                  {title:"邀请奖励",navHref:"inviteAward"}
              ]
          }
          this.$emit('clickNav',navItems)
      },
      backHome(){
          this.$router.push('market')
      }
  }
}
</script>
<style lang="stylus">
@import "../../common/stylus/index.styl";
    .header
        .logo
            display inline-block
            width 6.25rem
            height 1.625rem
            background-image url('../../components/header/logo.jpg')
            background-size 6.25rem 1.625rem
            background-repeat no-repeat
            margin-top 0.75rem
            cursor pointer
        .head-navbar
            .nav
                .nav-item
                    :hover
                        background: #0c69d6
                        -moz-transition: all 0.5s ease-in-out 0s
                        -webkit-transition:all 0.5s ease-in-out 0s
                        transition:all 0.5s ease-in-out 0s
                        -o-transition:all 0.5s ease-in-out 0s
                    .nav-link
                        display block
                        height 3.125rem
                        line-height 3.125rem
                        padding 0rem 1rem
                        :hover
                            text-decoration none
                        & > a
                            height 2.5rem
                            display inline-block
                            font-size 0.875rem
                            color white
                .active
                    background: #0c69d6
        .login-register
            height 3.125rem
            .login,.registerbtn
                float right
                margin-top 10px
                margin-left 5px
                width 3.125rem
                height 1.875rem
                background #d5e3fa
                text-align center
                border 1px solid white
                line-height 30px
                font-size 14px
                :hover
                    text-decoration none
            .login a
                color #2c75e6
            .registerbtn
                background #2c75e6
            .registerbtn a
                color white

</style>
