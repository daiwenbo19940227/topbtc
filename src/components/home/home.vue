<template>
  <div>
      <v-header></v-header>
      <div class="home">
            <div class="change">
              <b-container>
                    <b-row>
                      <b-col>
                          <div class="rateExchange" id="rateExchange">汇率$USD<span class="iconfont icon-xiala1"></span></div>
                          <b-popover target = "rateExchange" triggers="hover" placement="bottomright" :delay=delay>123</b-popover>
                      </b-col>
                      <b-col>
                          <div class="lanagueExchange" id="bbb">中文简体<span class="iconfont icon-xiala1"></span></div>
                      </b-col>
                    </b-row>
              </b-container>
            </div>
        <noticetitle></noticetitle>
        <router-view></router-view>
        <v-footer></v-footer>
      </div>
  </div>  
</template>
<script>
import header from '../header/header'
import noticetitle from '../noticetitle/noticetitle'
import footer from '../footer/footer'
export default {
  data(){
    return{
      delay:{show:500,hide:1000}
    }
  },
  methods : {
  },
  components : {
   'v-header' : header,
   noticetitle,
   'v-footer':footer
  }
}
</script>

<style lang="stylus">
.home
  position relative
  padding-top 50px
  background-color yellow
  .change
    background #ffffff
    height 50px
    .rateExchange,.lanagueExchange
      width 100px
      font-size 16px
      line-height 50px
      font-weight 700
      cursor pointer
    .rateExchangeItem
      width 300px
      background red
    .lanagueExchange
      float right
      text-align right
</style>
