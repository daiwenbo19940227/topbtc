<template>
  <div class="account">
    <b-container>
      <b-row>
        <b-col class="accountNav" cols="2">
            <v-nav></v-nav>
        </b-col>
        <b-col class="accountMain" cols="10">123</b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import nav from "../nav/nav"
export default {
  data(){
    return{
      active:0
    }
  },
  components:{
    "v-nav":nav
  }
}
</script>
<style lang="stylus">
</style>
