<template>
  <div class="home">
    <v-header></v-header>
    <div class="change">
      <b-container>
        <b-row>
          <b-col>
              <div class="rateExchange">汇率$USD.</div>
          </b-col>
          <b-col>
              <div class="lanagueExchange">中文简体.</div>
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
      font-size 14px
      line-height 50px
    .lanagueExchange
     float right 
</style>
