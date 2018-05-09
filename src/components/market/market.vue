<template>
    <div class="main-market">
        <b-container>
           <b-row class="market-head">
               <b-col cols="8">
                   <b-nav tabs>
                       <b-nav-item v-for="(item,index) in market" :key="index" @click="selectCoin(item)">{{item}}</b-nav-item>
                   </b-nav>
               </b-col>
               <b-col cols="4" class="search">
                   <b-input-group>
                       <b-form-input placeholder="Search" />
                   </b-input-group>
               </b-col>
           </b-row>
           <b-row>
               <b-col class="market-form">
                   <b-table :items="coin" :fields="fields" hover striped>
                   </b-table>
                  <!-- <div v-for="(item,index) in coin" :key="index">{{item}}</div> -->
               </b-col>
           </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
  data(){
      return {
          currencys:[],
          coin:[],
          fields:[
              {key:'coin',label:'名称',sortable:true},
              {key:'ticker.vol',label:'总量',sortable:true},
              {key:'market',label:'市场'}
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
              this.selectCoin("BTC")
          })
      })
  },
  methods: {
      //点击大类获取该类币种信息
      selectCoin(market) {
        let coin = this.currencys
        let btcCoin = []
        coin.forEach((coin)=>{
            if(coin.market == market){
               btcCoin.push(coin)
            }
        })
        this.coin = btcCoin
      },
      name(value1,value2)
      {
          retur``
      }
  }
}
</script>
<style lang="stylus">
    .main-market
        margin-top 15px
        background #eef1f3
        .market-head
            height 50px
            .nav-tabs
                height 50px
                .nav-item
                    width 60px
                    margin-top 10px
                    text-align center
                    & > a
                        height 40px
                        line-height 40px
                        border-radius 0px
        .search
            .input-group
                width 60%
                height 30px
                margin 0 auto
                margin-top 10px
                border-radius 20px

</style>


