<template>
  <div class="account">
    <b-container>
      <b-row>
        <b-col class="accountNav" cols="2">
            <v-nav :nav = "nav"></v-nav>
        </b-col>
        <b-col class="accountMain" cols="10">
            <accountOverview></accountOverview>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import nav from "../nav/nav"
import accountOverview from "./accountOverview/accountOverview"
export default {
  props:{
    childNavItem:{
      type:Array
    }
  },
  data(){
    return{
      active:0,
      nav:[]
    }
  },
  components:{
    "v-nav":nav,
    accountOverview
  },
  created(){
    this.nav = this.childNavItem
  }
}
</script>
<style lang="stylus">
  .account
    min-height 575px
</style>
