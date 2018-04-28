<template>
  <div class="home">
    <v-header></v-header>
    <div class="change">
      <b-container>
        <b-row>
          <b-col>
              <div class="rateExchange" id="rateExchange" display = flase>汇率$USD.</div>
              <b-popover 
              target = "rateExchange"
              placement = "bottomleft"
              show.sync = flase 
              triggers = "hover">
                <b-row>
                  <b-col cols="4">usd</b-col>
                  <b-col cols="4">usd</b-col>
                  <b-col cols="4">usd</b-col>
                  <b-col cols="4">usd</b-col>
                </b-row>
              </b-popover>
          </b-col>
          <b-col>
              <div class="lanagueExchange" id="bbb">中文简体</div>
              <b-popover
              target = "bbb"
              placement ="bottomright"
              triggers = "hover focus"
              >
                <b-row>
                  <b-col cols="6">中文简体</b-col>
                  <b-col cols="6">中文繁体</b-col>
                  <b-col cols="6">中文繁体</b-col>
                </b-row>
              </b-popover>
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
  components : {
   'v-header' : header,
   noticetitle
  }
}
</script>

<style lang="stylus">
  .change
    height 50px
    .rateExchange,.lanagueExchange
      width 100px
      font-size 14px
      line-height 50px
    .lanagueExchange
     float right
     text-align right
</style>
