<template>
    <div class="main-market">
        <b-container>
           <b-row class="market-head">
               <b-col cols="8">
                   <b-nav tabs>
                       <b-nav-item v-for="(item,index) in market" :key="index" @click="selectCoin(item,index)" ref="navitem" :class="{active:index==active}">{{item}}</b-nav-item>
                   </b-nav>
               </b-col>
               <b-col cols="4" class="search">
                   <b-input-group>
                       <b-form-input placeholder="搜索币种" class="searchText" v-model="filter"/>
                   </b-input-group>
               </b-col>
           </b-row>
           <b-row>
               <b-col class="market-form">
                   <b-table 
                   :items="coin" 
                   :fields="fields"
                   class="myTable"
                   striped
                   :filter="filter"
                   >
                   <template slot="name" slot-scope="data">
                       {{data.item.coin}}/{{data.item.market}}
                   </template>
                   <template slot="transaction" slot-scope="data">
                        <span class="buy" :id="data.item.coin+'buy'" @mouseover="enter(data.item.coin+'buy')" @mouseout="out(data.item.coin+'buy')">买入</span>
                        <span class="sell" :id="data.item.coin+'sell'" @mouseover="enter(data.item.coin+'sell')" @mouseout="out(data.item.coin+'sell')">卖出</span>
                            <b-row id="buy">
                                <b-popover
                                :target="data.item.coin+'buy'" 
                                placement="bottom"
                                :container="data.item.coin+'buy'"
                                @shown="isEnter(data.item.coin+'buy')"
                                @hide="isLeave"
                                >
                                <b-row>
                                    <b-col>
                                        <div class="buytitle">
                                            <span class="buyCoin">买入{{data.item.coin}}</span>
                                            <div class="priceContent">
                                                <span class="sellPrice">卖一价</span>
                                                <span class="price">{{data.item.ticker.sell}}</span>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row class="actionItems">
                                    <ul>
                                            <li>
                                                <b-input-group :append="data.item.market">
                                                    <b-form-input placeholder="买入价格"></b-form-input>
                                                </b-input-group>
                                            </li>
                                            <li>
                                                <b-input-group :append="data.item.coin">
                                                    <b-form-input placeholder="买入数量"></b-form-input>
                                                </b-input-group>
                                            </li>
                                            <li>
                                                <span class="maxBuytext">最大可买--</span>
                                                <span class="into">转入BTC</span>
                                            </li>
                                            <li>
                                                <span class="rangesliderText">买比例：</span>
                                                <div class="rangeSlider">
                                                    <rangeSlider
                                                        class="slider"
                                                        min = "10"
                                                        max = "1000"
                                                        step = "10"
                                                        v-model="sliderValue"
                                                    >
                                                    </rangeSlider>
                                                </div>
                                            </li>
                                            <li>成交额：0BTC</li>
                                            <li><b-btn class="sellBtn">买入</b-btn></li>
                                    </ul>
                                </b-row>
                                </b-popover>
                        </b-row>
                         <b-row id="sell">
                            <b-popover
                            :target="data.item.coin+'sell'" 
                            placement="bottom"
                            triggers="click"
                            :container="data.item.coin+'sell'"
                            @shown = "isEnter(data.item.coin+'sell')"
                            @hide = "isLeave"
                            >
                            <b-row>
                                   <b-col>
                                       <div class="buytitle">
                                           <span class="buyCoin">卖出{{data.item.coin}}</span>
                                           <div class="priceContent">
                                               <span class="sellPrice">买一价</span>
                                               <span class="price">{{data.item.ticker.buy}}</span> 
                                           </div>
                                       </div>
                                   </b-col>
                               </b-row>
                               <b-row class="actionItems">
                                   <ul>
                                        <li>
                                            <b-input-group :append="data.item.market">
                                                <b-form-input placeholder="卖出价格"></b-form-input>
                                            </b-input-group>
                                        </li>
                                        <li>
                                            <b-input-group :append="data.item.coin">
                                                <b-form-input placeholder="卖出数量"></b-form-input>
                                            </b-input-group>
                                        </li>
                                        <li>
                                            <span class="maxBuytext">最大可卖--</span>
                                            <span class="into">转入BTC</span>
                                        </li>
                                        <li>
                                            <span class="rangesliderText">卖比例：</span>
                                            <div class="rangeSlider">
                                                <rangeSlider
                                                    class="slider"
                                                    min = "10"
                                                    max = "1000"
                                                    step = "10"
                                                    v-model="sliderValue"
                                                >
                                                </rangeSlider>
                                            </div>
                                        </li>
                                        <li>成交额：0BTC</li>
                                        <li><b-btn class="sellBtn">卖出</b-btn></li>
                                   </ul>
                               </b-row>
                            </b-popover>
                        </b-row>
                   </template>
                   <template slot="actions" slot-scope="data" class="actions">
                       <span class="iconfont icon-zhuzhuangtu1"></span>
                       <span class="iconfont icon-xingxing"></span>
                   </template>
                   </b-table>
               </b-col>
           </b-row>
        </b-container>
    </div>
</template>
<script>
import rangeSlider from "vue-range-slider"
import 'vue-range-slider/dist/vue-range-slider.css'
require ("../../common/js/jquery.min.js")
var  nowOuttimer  = "";
export default {
  data(){
      return {
          active:0,
          currencys:[],
          coin:[],
          fields:[
              {key:'name',label:'名称',sortable:true},
              {key:'ticker.vol',label:'总量',sortable:true},
              {key:'transaction',label:"快捷交易"},
              {key:'actions',label:"操作"}
          ],
          sliderValue: 100,
          nowEnter:false,
          nowEnter:"",
          nowOut:"",
          filter:null
      }
  },
  computed: {
      //获取所有大类然后去重组成新的大类数组
      market() {
          let market = []
          this.currencys.forEach((markets)=>{
            market.push(markets.market)
          })
          let marketItem = market.sort()
          let res = [marketItem[0]]
          marketItem.forEach((goods)=>{
              if(goods!==res[res.length-1])
              {
                  res.push(goods)
              }
          })
          return res
      }
  },
   created () {
      //获取所有币种信息
      this.$http.get('http://www.topbtc.one/market/tickerall.php').then((response)=>{
          response = response.body
          this.currencys = response
          this.$nextTick(()=>{
          this.selectCoin("BTC",0)
          })
      })
  },
  methods: {
      //点击大类获取该类币种信息
      selectCoin(market,onIndex) {
        let coin = this.currencys
        let btcCoin = []
        coin.forEach((coin)=>{
            if(coin.market == market){
               btcCoin.push(coin)
            }
        })
        this.coin = btcCoin
        this.active=onIndex
      },
      /**
        sellPopover 移入移出显示以及隐藏
      */
      enter(myId){
          this.nowEnter = myId
          var that = this
          if(this.nowEnter==this.nowOut){
              clearTimeout(nowOuttimer)
          }
          setTimeout(function(){
              that.$root.$emit('bv::show::popover',myId)
          },300)
      },
      out(myId){
          this.nowOut = myId
          var that = this
          nowOuttimer = setTimeout(function(){
              that.$root.$emit('bv::hide::popover',myId)
          },300) 
      },
      isEnter(myPopover){  
          var that = this
          $(myPopover).find('div.popover').on('mouseenter',function(){
              that.nowEnter = true
          }).on('mouseleave',function(){
              that.nowEnter = false
              that.$root.$emit('bv::hide::popover',myPopover)
          })
      },
      isLeave(){
        if(this.isEnter==true){
        vent.preventDefault()
        }
      },
      onFiltered(){

      }
  },
  components:{
      rangeSlider
  }
}
</script>
<style lang="stylus">
    .main-market
        margin-top 30px
        background #eef1f3
        margin-bottom 50px
        .market-head
            height 50px
            border-bottom 1px solid
            background-color #eef1f3
            .nav-tabs
                height 50px
                margin-left 15px
                border-bottom 1px solid
                :hover
                   border-bottom 1px solid
                .active
                    background white
                    border-top 1px solid
                    border-left 1px solid
                    border-right 1px solid
                .nav-item
                    width 60px
                    margin-top 10px
                    text-align center
                    & > a
                        height 40px
                        line-height 40px
                        border-radius 0px
                        color black
                        font-weight 700
        .search
            .input-group
                width 60%
                height 30px
                margin 0 auto
                margin-top 10px
                margin-right 0px
                border-radius 20px 
                .searchText
                    font-size 14px
                .searchText:focus
                    box-shadow 0px 0px 0px 0px
        .market-form
            .myTable
                & > thead
                    background white
                    font-size 14px
                    & > tr
                        & > th
                          &.sorting_desc
                               outline:none
                          &.sorting_asc
                                outline:none
                & > tbody
                    & > tr:nth-of-type(odd)
                        background-color white
                    & > tr:hover .icon-xingxing
                        display inline-block
                    & > tr
                        background-color #f7f7f7
                        & > td
                            .sell,.buy
                               font-size 14px
                               color red
                               cursor pointer
                            .buy
                                color #2fb990
                            .sell
                                margin-left 10px
                            .icon-zhuzhuangtu1
                                color #c2cad1
                                cursor pointer
                            .icon-zhuzhuangtu1:hover
                                color #2c75e6
                            .icon-xingxing
                                color #c2cad1
                                margin-left 5px
                                font-size 14px
                                display none
                            .icon-xingxing:hover
                                color #a9aeb7
                            .popover
                                max-width 300px
                                width 300px
                                .buytitle
                                    .priceContent
                                        float right 
                                        .sellPrice
                                            font-size 12px
                                            color #4c4c4c
                                        .price
                                            font-size 12px
                                            color #2a85f0
                                .actionItems
                                    & > ul
                                        margin 0 auto
                                        & > li
                                            margin-top 5px
                                            .input-group
                                                height  35px
                                                .form-control:focus
                                                    box-shadow 0 0 0 0
                                                .form-control::-webkit-input-placeholder
                                                    font-size 14px
                                                .input-group-text
                                                    width 100px
                                                    padding: 0.375rem 2.4rem;
                                                    font-size 14px
                                            .maxBuytext,.into
                                                font-size 12px
                                                color #2a85f0
                                            .into
                                                float right
                                            .rangesliderText
                                                float left
                                            .rangeSlider
                                                .range-slider
                                                    width 215px
                                            .sellBtn
                                                width 100%
                                                background-color #ffffff
                                                color  #47c19d
                                            .sellBtn:focus
                                                box-shadow 0 0 0 0   
</style>