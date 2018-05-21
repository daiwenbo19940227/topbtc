<template>
        <div class="header">
           <b-container>
               <b-row>
                   <b-col cols="2">
                       <div class="logo"></div>
                   </b-col>
                   <b-col cols="7">
                       <div class="head-navbar">
                           <b-nav>
                               <b-nav-item v-for="(item,index) in nav" :key="index" :class="{active:index==active}" @click="selectItem(index)"><router-link :to="href[index]">{{item}}</router-link></b-nav-item>
                           </b-nav>
                       </div>
                   </b-col>
                   <b-col cols="3">
                       <div class="login-register">
                           <span class="login"><router-link to="/login">登陆</router-link></span>
                           <span class="register"><router-link to="/register">注册</router-link> </span>
                       </div>
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
          href:["market","asset","account","invite","notice"],
          navItem:[]
      }
  },
  methods:{
      selectItem(index){
          console.log(index)
          this.active = index
      }
  }
}
</script>
<style lang="stylus">
@import "../../common/stylus/index.styl";
    .header
        position fixed
        background #2c75e6
        width 100%
        height 50px
        z-index 999 
        .logo
            display inline-block
            width 100px
            height 26px
            background-image url('../../components/header/logo.jpg')
            background-size 100px 26px
            background-repeat no-repeat
            margin-top 12px
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
                        height 50px
                        line-height 50px
                        padding 0rem 1rem
                        :hover
                            text-decoration none
                        &>a
                            display block
                            font-size 14px
                            color white
                .active
                    background: #0c69d6
        .login-register
            height 50px
            .login,.register
                float right
                margin-top 10px
                margin-left 10px
                width 50px
                height 30px
                background #d5e3fa
                text-align center
                border 1px solid white
                line-height 30px
                font-size 14px
                :hover
                    text-decoration none
            .login a
                color #2c75e6
            .register
                background #2c75e6
            .register a
                color white

</style>
