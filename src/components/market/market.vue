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
                       <b-form-input placeholder="搜索币种" class="searchText"/>
                   </b-input-group>
               </b-col>
           </b-row>
           <b-row>
               <b-col class="market-form">
                   <b-table 
                   :items="coin" 
                   :fields="fields"
                   class="myTable"
                   striped>
                   <template slot="name" slot-scope="data">
                       {{data.item.coin}}/{{data.item.market}}
                   </template>
                   <template slot="transaction" slot-scope="data">
                        <span class="buy" :id="data.item.coin+'buy'">买入</span>
                        <span class="sell" :id="data.item.coin+'sell'">卖出</span>
                        <b-row id="buy">
                            <b-popover
                            :target="data.item.coin+'buy'" 
                            triggers="click"
                            placement="bottom"
                            container="buy"
                            >
                               <b-row>
                                   <b-col>
                                       <div class="buytitle">
                                           <span class="buyCoin">买入{{data.item.coin}}</span>
                                           <span class="sellPrice">卖一价</span>
                                           <span class="price">{{data.item.ticker.sell}}</span>
                                           <span class="price">{{data.item.ticker.last}}</span>
                                       </div>
                                   </b-col>
                               </b-row>
                               <b-row class="actionItems">
                                   <ul>
                                        <li>
                                            <b-input-group :append="data.item.market">
                                                <b-form-input></b-form-input>
                                            </b-input-group>
                                        </li>
                                        <li>
                                            <b-input-group :append="data.item.coin">
                                                <b-form-input></b-form-input>
                                            </b-input-group>
                                        </li>
                                        <li>
                                            <span class="maxBuytext">最大可买--</span>
                                            <span class="into">转入BTC</span>
                                        </li>
                                        <li><rangeSlider></rangeSlider></li>
                                        <li>成交额：0BTC</li>
                                        <li><b-btn>买入</b-btn></li>
                                   </ul>
                               </b-row>
                            </b-popover>
                        </b-row>
                         <b-row id="sell">
                            <b-popover
                            :target="data.item.coin+'sell'" 
                            triggers="hover"
                            placement="bottom"
                            >
                            卖出
                            </b-popover>
                        </b-row>
                   </template>
                   <template slot="actions" slot-scope="data" class="actions">
                       <router-link to="kLine"><span class="iconfont icon-zhuzhuangtu"></span></router-link>
                       <span class="iconfont icon-xing"></span>
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
          ]
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
  },
  components:{
      rangeSlider
  }
}
</script>
<style lang="stylus">
    .main-market
        margin-top 15px
        background #eef1f3
        margin-bottom 50px
        .market-head
            height 50px
            border-bottom 1px solid
            .nav-tabs
                height 50px
                margin-left 15px
                border-bottom 1px solid
                :hover
                    background #0c69d6
                    -moz-transition: all 0.5s ease-in-out 0s
                    -webkit-transition:all 0.5s ease-in-out 0s
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
        .market-form
            .myTable
                & > thead
                    background white
                    font-size 14px
                & > tbody
                    & > tr
                        & > td
                            .sell,.buy
                               font-size 14px
                               color red
                               cursor pointer
                               margin-left 10px
                            .buy
                                color #2fb990
                            .icon-zhuzhuangtu
                                color #c2cad1
                                cursor pointer
                            .icon-zhuzhuangtu:hover
                                color #2c75e6
                            #buy
                                .popover
                                    max-width 300px
                                    width 300px
                                    .buytitle
                                        .buyCoin
                                            color #47c19d
                                            font-size 16px
                                        .sellPrice
                                            color #4c4c4c
                                        .price
                                            color #2a85f0
                                    .actionItems
                                        & > ul
                                            margin 0 auto
                                            & > li
                                                margin-top 5px
                                                .input-group-text
                                                    width 60px
                                                .maxBuytext,.into
                                                    font-size 14px
                                                    color #2a85f0
                                                .into
                                                    float right 
</style>