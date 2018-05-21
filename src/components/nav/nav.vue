<template>
    <div class="v_nav">
    <b-container>
      <b-row>
        <b-col class="navNav">
          <div class="navWapper">
            <b-nav vertical>
              <b-nav-item v-for="(item,index) in navItem" :key="index" class="navItem" :class="{active:index == active}" @click="navChange(index)">{{item}}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
    props:{
        navItem:{
            type:Object
        }
    },
    data(){
        return{
            active:0,
            // navItem:["账号概览","账户安全","KYC认证","API密钥","服务协议"]
        }
    },
    methods:{
        navChange(onIndex){
            this.active = onIndex
        }
  }
}
</script>
<style lang="stylus">
.v_nav
    min-height 575px
    .navNav
      .navWapper
        width 160px
        margin 0 auto
        margin-top 20px
        box-shadow #eee 0 0 20px 
        background-color white
        .navItem
          height 45px
          line-height 45px
          font-size 14px
          text-align center
          border-bottom 1px solid #eeeeee
          & > a
            color black
          & > a:hover
            color #2c75e6
        .active
          background #ecf4fe
          border-right 3px solid #2c75e6
          & > a
            color #2c75e6
</style>

