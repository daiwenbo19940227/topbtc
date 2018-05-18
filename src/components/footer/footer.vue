<template>
  <div class="footer">
      <b-container>
          <b-row class="footerWapper">
              <b-col cols="2">
                  <ul>
                      <li class="title"><p>关于我们</p></li>
                      <li class="item">团队介绍</li>
                      <li class="item">更新日志</li>
                  </ul>
              </b-col>
              <b-col cols="2">
                  <ul>
                      <li class="title"><p>法律法规</p></li>
                      <li class="item">隐私协议</li>
                      <li class="item">隐私政策</li>
                      <li class="item">AML&CFT</li>
                  </ul>
              </b-col>
              <b-col cols="2">
                  <ul>
                      <li class="title"><p>交易说明</p></li>
                      <li class="item">API文档</li>
                      <li class="item">费率说明</li>
                      <li class="item">上币申请</li>
                      <li class="item">KCS区块链浏览器</li>
                  </ul>
              </b-col>
              <b-col cols="2">
                  <ul>
                      <li class="title"><p>联系我们</p></li>
                      <li class="item">Help Center</li>
                      <li class="item">Careers</li>
                  </ul>
              </b-col>
              <b-col cols="4" class="iconWapper">
                  <b-row>
                      <b-col>
                        <span class="iconfont icon-qq"></span>
                        <span class="iconfont icon-telegram1"></span>
                        <span class="iconfont icon-twitter1"></span>
                      </b-col>
                  </b-row>
              </b-col>
          </b-row>
          <b-row class="copyRight">
              <b-col>The Commonwealth of Australia DABTC PTY LTD. Copyright © 2018 TOPBTC</b-col>
          </b-row>
      </b-container>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
    .footer
        position relative
        background #35425b
        height 275px
        .footerWapper
            padding-top 65px
            .title
                list-style none
                color white
                cursor pointer
            .item
                font-size 14px
                list-style none
                height 25px
                line-height 25px
                color #5f6a72
                cursor pointer
            .iconWapper
               .iconfont
                font-size 35px
                margin-left 15px
                color #65a0ba
                cursor pointer
                float right 
        .copyRight
            color #5f6a72
            font-size 14px
            text-align center
            cursor pointer
</style>


