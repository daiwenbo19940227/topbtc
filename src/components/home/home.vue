<template>
  <div class="home">
    <v-header></v-header>
    <b-container>
      <div class="change">
          <b-row>
            <b-col>
                <div class="rateExchange" id="rateExchange">汇率$USD<span class="iconfont icon-xiala1"></span></div>
            </b-col>
            <b-col>
                <div class="lanagueExchange" id="bbb">中文简体</div>
            </b-col>
          </b-row>
      </div>
      <router-view></router-view>
    </b-container>
    <v-footer></v-footer>
  </div>
</template>
<script>
import header from '../header/header'
import noticetitle from '../noticetitle/noticetitle'
import footer from '../footer/footer'
export default {
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
  .change
    background #ffffff
    height 50px
    .rateExchange,.lanagueExchange
      width 100px
      font-size 16px
      line-height 50px
      font-weight 700
    .rateExchangeItem
      width 300px
      background red
    .lanagueExchange
      float right
      text-align right
</style>
