<template>
  <div>
      <v-header></v-header>
      <div class="home">
            <div class="change">
              <b-container>
                    <b-row>
                      <b-col>
                          <div class="rateExchange" id="rateExchange">汇率$USD<span class="iconfont icon-xiala1"></span></div>
                          <b-row id="rate">
                            <b-popover target = "rateExchange" triggers="hover" placement="bottomright" :delay=delay container="rate">
                                <b-row>
                                  <b-col cols="3" v-for="(item,index) in rata" :key="index" class="rataItem"><span class="blue">{{item.name}}</span> <span>{{item.value}}</span></b-col>
                                </b-row>
                            </b-popover>
                          </b-row>
                      </b-col>
                      <b-col>
                          <div class="lanagueExchange" id="lanagueExchange">中文简体<span class="iconfont icon-xiala1"></span></div>
                          <b-row id="lanague">
                            <b-popover target = "lanagueExchange" triggers="hover" placement="bottomleft" :delay=delay container="lanague">
                              <b-row>
                                <b-col cols="6" v-for="(item,index) in language" :key="index" class="languageItem"><span></span><span>{{item}}</span></b-col>
                              </b-row>
                            </b-popover>
                          </b-row>
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
      delay:{show:200,hide:500},
      rata:[
        {name:"R",value:"ZAR"},
        {name:"$",value:"美元"},
        {name:"€",value:"EUR"},
        {name:"$",value:"AUD"},
        {name:"$",value:"CAD"},
        {name:"CHF",value:"瑞士法郎"},
        {name:"￥",value:"CNY"},
        {name:"£",value:"英镑"},
        {name:"￥",value:"日元"},
        {name:"$",value:"NZD"},
        {name:"лв。",value:"BGN"},
        {name:"R $",value:"BRL"},
        {name:"Kč",value:"CZK"},
        {name:"DK",value:"DKK"},
        {name:"$",value:"HKD"},
        {name:"kn",value:"HRK"},
        {name:"Ft",value:"HUF"},
        {name:"Rp",value:"IDR"},
        {name:"₪",value:"ILS"},
        {name:"₹",value:"INR"},
        {name:"₩",value:"韩元"},
        {name:"$",value:"MXN"},
        {name:"RM",value:"MYR"},
        {name:"kr",value:"NOK"},
        {name:"₱",value:"PHP"},
        {name:"zl模块",value:"PLN"},
        {name:"林雷",value:"RON"},
        {name:"₽",value:"RUB"},
        {name:"kr",value:"SEK"},
        {name:"$",value:"SGD"},
        {name:"฿",value:"THB"},
        {name:"₺",value:"TRY"}
      ],
      language:["English","русский","한국어","日本語","Portugues","中文简体","Nederlands","中文繁体","Deutsch","Français","Español"]
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
    #rate
      .popover
        max-width 500px
        width 500px
        .rataItem
          height 30px
          line-height 30px
          cursor pointer
          text-align center
          .blue
            color #4595f2
        .rataItem:hover
          background-color #eeeeee
    #lanague
      .popover
        width 250px
        .languageItem
          height 30px
          line-height 30px
          text-align center
          cursor pointer
        .languageItem:hover
          background-color #eeeeee
</style>
