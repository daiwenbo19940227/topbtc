<template>
  <div class="noticetitle">
    <b-container>
      <b-row>
        <b-col cols="11">
          <b-row><b-col cols="4" v-for="item in news" :key="item.index" class="news-item">{{item.title}}({{item.releaseTime}})</b-col></b-row>
        </b-col>
        <b-col cols="1">
          <span class="show iconfont icon-xiala"></span>
        </b-col>
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
    .show
      float right
</style>

