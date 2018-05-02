<template>
    <div class="main">
        <b-container class="bv-example-row">
            <b-row class="">
                <b-col cols="1" class="item-list">
                    <b-nav vertical>
                        <b-nav-item><router-link to="/set"><span class="set">1</span></router-link> </b-nav-item>
                        <b-nav-item><router-link to="/market"><span class="market">2</span></router-link></b-nav-item>
                        <b-nav-item><router-link to="/optional"><span class="optional">3</span></router-link></b-nav-item>
                        <b-nav-item><router-link to="/hold"><span class="optional">4</span></router-link> </b-nav-item>
                    </b-nav>
                </b-col>
                <b-col>
                    <router-view></router-view>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
  .item-list
    background #35425b
    margin-top 15px
    text-align center
    .nav-item 
        height 50px
        .nav-link
            height 50px
            line-height 50px
</style>


