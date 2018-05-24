<template>
  <div class="invite">
      <b-container>
         <b-row>
            <b-col class="inviteNav" cols="2">
              <v-nav :nav = "nav"></v-nav>
            </b-col>
            <b-col class="inviteMain" cols="10">
            </b-col>
        </b-row>
      </b-container>
  </div>
</template>
<script>
import nav from "../nav/nav"
export default {
  props:{
    childNavItem:{
      type:Array
      }
  },
  data(){
    return{
      nav:[]
    }
  },
  components:{
    'v-nav':nav
  },
  created(){
    this.nav = this.childNavItem
  }
}
</script>
<style lang="stylus">
  .invite
    min-height 575px
</style>
