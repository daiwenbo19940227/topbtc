<template>
  <div class="noticetitle">
    <b-container>
      <b-row>
        <b-col cols="11">
            <b-row><b-col cols="4" v-for="(item,index) in news" :key="index" class="news-item" v-if='index<=2'  ref="newItems" @click="newsItemClick(index)">{{item.title}}({{item.releaseTime}})</b-col></b-row>
        </b-col>
        <b-col cols="1">
          <span class="show iconfont icon-xiala" v-b-toggle.news-item></span>
        </b-col>
        <b-collapse id="news-item">
        <b-row>
          <b-col cols="11">
            <b-row>
              <b-col cols="4" v-for="(item,index) in news" :key="index" class="news-item" v-if="index>2" @click="newsItemClick(index)">{{item.title}}({{item.releaseTime}})</b-col>
            </b-row>
          </b-col>
       </b-row>
      </b-collapse>
      </b-row>
    </b-container>
  </div>
</template>
<script>
const news = [
  {title:"网站维护",releaseTime:"2018-5-3",content:"我只是测试数据"},
  {title:"KuCoin开放LYM/USDT交易市场",releaseTime:"2018-5-2",content:"我只是测试数据"},
  {title:"网站维护",releaseTime:"2018-5-3",content:"我只是测试数据"},
  {title:"KuCoin开放LYM/USDT交易市场",releaseTime:"2018-5-2",content:"我只是测试数据"},
  {title:"网站维护",releaseTime:"2018-5-3",content:"我只是测试数据"},
  {title:"KuCoin开放LYM/USDT交易市场",releaseTime:"2018-5-2",content:"我只是测试数据"},
  {title:"网站维护",releaseTime:"2018-5-3",content:"我只是测试数据"},
  {title:"KuCoin开放LYM/USDT交易市场",releaseTime:"2018-5-2",content:"我只是测试数据"},
  {title:"网站维护",releaseTime:"2018-5-3",content:"我只是测试数据"}
]
export default {
  data(){
    return{
      news:news
    }
  },
  methods:{
    newsItemClick(index){
      let newItems = this.$refs.newItems
      for(var i =0;i<newItems.length;i++){
        if (i==index){
          console.log(newItems[i].className)
        }
      }
    }
  }
}
</script>
<style lang="stylus">
.noticetitle
  background #fefaed
  .container
    .news-item
      font-size 14px
      font-weight 700
      cursor pointer
      text-align center
    .news-item:hover
        color #2c75e6
    .show
      float right
      cursor pointer
</style>

