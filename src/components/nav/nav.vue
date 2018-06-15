<template>
    <div class="v_nav">
    <b-container>
      <b-row>
        <b-col class="navNav">
          <div class="navWapper">
            <b-nav vertical>
              <b-nav-item v-for="(item,index) in navItems" :key="index" class="navItem" :class="{active:index == active}" @click="navChange(index)"><router-link :to="item.navHref">{{item.title}}</router-link></b-nav-item>
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
        nav:{
            type:Array
        }
    },
    data(){
        return{
            active:0,
            navItems:[]
        }
    },
    methods:{
        navChange(onIndex){
            this.active = onIndex
        }
  },
  created(){
      this.navItems = this.nav
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
          & > a > a
            width 100%
            display inline-block
            color black
          & > a > a:hover
            color #2c75e6
            text-decoration none
        .active
          background #ecf4fe
          border-right 3px solid #2c75e6
          & > a > a
            color #2c75e6
</style>

