<template>
  <div class="login">
      <b-container>
        <b-row>
            <b-col cols="8" class="loginWapper" v-show="isLogin">
            <b-row>
                <b-col cols="10" class="content">
                <h5>请确保您满足以下条件再进行登录/注册</h5>
                <ul class="item">
                    <li><b-form-checkbox-group><span>请认准网址 http://www.topbtc.one</span></b-form-checkbox-group></li>
                    <li><b-form-checkbox><span>遵守各国反洗钱法律法规，在必要的情况下可以接受数字资产审查。</span></b-form-checkbox></li>
                    <li><b-form-checkbox><span>具有两年以上证券、基金、期货、黄金、外汇投资经验。</span></b-form-checkbox></li>
                    <li><b-form-checkbox><span>可以承受超过50%的亏损，甚至资产归零的风险。</span></b-form-checkbox></li>
                    <li><b-form-checkbox><span>法定年龄已满18周岁。</span></b-form-checkbox></li>
                    <li><b-form-checkbox><span class="text">本人确认完全满足以上条件，清楚了解全部存在的风险，自愿承担一切相应的后果</span></b-form-checkbox></li>
                </ul>
                <div><b-btn variant="primary" class="btn" @click="nextLoginMain">确认</b-btn></div>
                </b-col>
            </b-row>
            </b-col>
            <loginMain v-show="isLoginMain"></loginMain>
      </b-row>
      </b-container>
  </div>
</template>
<script>
import loginMain from "../loginMain/loginMain"
export default {
  data(){
    return{
      isLogin:true,
      isLoginMain:false
    }
  },
  methods:{
    nextLoginMain(){
      this.isLogin = !this.isLogin
      this.isLoginMain = !this.isLoginMain
    }
  },
  components:{
    loginMain
  }
}
</script>
<style lang="stylus">
.login
  background #eeeeee
  .loginWapper
    margin 0 auto
    height 400px
    margin-top 100px
    margin-bottom 100px
    background-color white
    box-shadow black 0 0 10px
    .content
      height 360px
      margin 0 auto
      margin-top 20px
      text-align center
      .item
        margin-top 35px
        text-align left
        .text
          font-size 16px
          font-weight 700
        &>li
          font-size 14px
          margin-top 10px
          list-style none 
        .control-inline
          display inline-block
      .checkAll
        .control-inline
           display inline-block
      .btn
        margin-top 15px
        width 200px
</style>
