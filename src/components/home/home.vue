<template>
  <div>
      <v-header @clickNav = "change"></v-header>
      <div class="home">
            <div class="change">
              <b-container>
                    <b-row>
                      <b-col>
                          <div class="rateExchange" id="rateExchange"  @mouseover="enter('rateExchange')" @mouseout="out('rateExchange')">汇率 <span class="blue">$</span> USD<transition name="rateOverturn"><span class="iconfont icon-xiala1"></span></transition></div>
                          <b-row id="rate" ref="popover">
                            <b-popover 
                                target = "rateExchange"  
                                placement="bottomright"  
                                triggers=""
                                container="rate"
                                @shown = "isEnterpop"
                                @hide = "isleave"
                                >
                                <b-row>
                                  <b-col cols="3" v-for="(item,index) in rata" :key="index" class="rataItem" @click="changeRate"><span class="blue">{{item.name}}</span> <span>{{item.value}}</span></b-col>
                                </b-row>
                            </b-popover>
                          </b-row>
                      </b-col>
                      <b-col>
                          <div class="lanagueExchange" id="lanagueExchange" @mouseover="languageEnter('lanagueExchange')" @mouseout="languageLeave('lanagueExchange')">中文简体<span class="iconfont icon-xiala1"></span></div>
                          <b-row id="lanague" ref="language">
                            <b-popover 
                            target = "lanagueExchange"  
                            placement="bottomleft"
                            container="lanague"
                            @shown = "isEnterlanguage"
                            @hide = "isLeaveLanguage"
                            >
                              <b-row>
                                <b-col cols="6" v-for="(item,index) in language" :key="index" class="languageItem" @click="changeLanguage"><span></span><span>{{item}}</span></b-col>
                              </b-row>
                            </b-popover>
                          </b-row>
                      </b-col>
                    </b-row>
              </b-container>
            </div>
        <noticetitle></noticetitle>
        <router-view :childNavItem="parentNavItem"></router-view>
        <v-footer></v-footer>
      </div>
  </div>  
</template>
<script>
import header from '../header/header'
import noticetitle from '../noticetitle/noticetitle'
import footer from '../footer/footer'
import jquery from "../../common/js/jquery.min.js"
var timer =""
export default {
  data(){
    return{
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
      language:["English","русский","한국어","日本語","Portugues","中文简体","Nederlands","中文繁体","Deutsch","Français","Español"],
      parentNavItem:[],
      isEnter:false,
      nowEnter:"",
      nowOut:""
    }
  },
  methods : {
    change(navItems){
      this.parentNavItem = navItems
    },
    //点击关闭汇率popover
    changeRate(){
      this.isEnter = false
      this.$root.$emit('bv::hide::popover','rateExchange')
      console.log("切换汇率")
    }, 
    changeLanguage(){
      this.$root.$emit('bv::hide::popover','lanagueExchange')
      this.isEnter = false
      console.log("切换语言")
    },
    //鼠标移入rate时显示popover
    enter(rateExchange){
      var that = this
      this.nowEnter = rateExchange
       if(this.nowEnter==this.nowOut){
          clearTimeout(timer)
        }
      setTimeout(function(){
        that.$root.$emit('bv::show::popover','rateExchange') 
      },300)
    },
    //鼠标移出rate时延时一秒隐藏popover
    out(rateExchange){
        this.nowOut = rateExchange
        var that = this
        timer = setTimeout(function (){
          that.$root.$emit('bv::hide::popover','rateExchange')
        }, 500);
    },
    //popover显示之后popover绑定鼠标移入移出事件
    isEnterpop(){
          var that = this
          let popover = that.$refs.popover
          $(popover).find('div.popover').on('mouseenter',function(){
            that.isEnter = true
          }).on('mouseleave',function(){
            that.isEnter=false
            that.$root.$emit('bv::hide::popover','rateExchange')
          })
    },
    //popover消失前判断是否要隐藏popover
    isleave(event){
      if(this.isEnter==true){
        event.preventDefault()
      }
    },
    //languageExhcange
    languageEnter(lanagueExchange){
      this.nowEnter = lanagueExchange
      if(this.nowEnter==this.nowOut){
          clearTimeout(timer)
      }
      var that = this
      setTimeout(function(){
        that.$root.$emit('bv::show::popover','lanagueExchange')
      })
    },
    languageLeave(lanagueExchange){
      this.nowOut = lanagueExchange
      var that = this
      timer = setTimeout(function(){
        that.$root.$emit('bv::hide::popover','lanagueExchange')
      },500)
    },
    isEnterlanguage(){
        var that  = this
        let languagePopover  = this.$refs.language
        $(languagePopover).find('div.popover').on('mouseenter',function(){
            that.isEnter = true
          }).on('mouseleave',function(){
            that.isEnter=false
            that.$root.$emit('bv::hide::popover','lanagueExchange')
          })
    },
    isLeaveLanguage(event){
        if(this.isEnter==true){
          event.preventDefault()
        }
    }
  },
  components : {
   'v-header' : header,
   noticetitle,
   'v-footer':footer
  },
  created(){
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
      font-size 14px
      line-height 50px
      cursor pointer
      .blue
        color #4595f2
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
