<template>
  <div class="home" id="home">
    <v-header></v-header>
    <div class="change">
      <b-container>
        <b-row>
          <b-col>
              <div class="rateExchange" id="rateExchange">汇率$USD<span class="iconfont icon-xiala1"></span></div>
          </b-col>
          <b-col>
              <div class="lanagueExchange" id="bbb">中文简体</div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <noticetitle></noticetitle>
    <router-view></router-view>
  </div>
</template>
<script>
import header from '../header/header'
import noticetitle from '../noticetitle/noticetitle'
export default {
  methods : {
  },
  components : {
   'v-header' : header,
   noticetitle
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
