<template>
  <div class="asset">
    <b-container>
      <b-row>
        <b-col class="assetNav" cols="2">
          <v-nav :nav = "nav"></v-nav>
        </b-col>
        <b-col class="assetMain" cols="10">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import nav from "../nav/nav"
import myAssets from "./myAssets/myAssets"
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
  methods:{
    navChange(onIndex){
      this.active = onIndex
    }
  },
  components:{
    'v-nav':nav,
    myAssets
  },
  created(){
    this.nav = this.childNavItem
  }
}
</script>
<style lang="stylus">
  .asset
    min-height 575px
</style>
