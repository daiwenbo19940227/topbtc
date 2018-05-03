<template>
    <div class="main-market">
        <b-container>
           <b-row class="market-head">
               <b-col cols="8">
                   <b-nav tabs>
                       <b-nav-item active>BTC</b-nav-item>
                       <b-nav-item>ETH</b-nav-item>
                       <b-nav-item>NEO</b-nav-item>
                       <b-nav-item>USDT</b-nav-item>
                       <b-nav-item>KCS</b-nav-item>
                   </b-nav>
               </b-col>
               <b-col cols="4">
                   
               </b-col>
           </b-row>
           <b-row>
               <b-col class="market-form"></b-col>
           </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
  
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
        .market-form
            height 1200px
            background yellow
</style>


