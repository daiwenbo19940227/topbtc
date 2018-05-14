<template>
    <div class="main">
        <b-container class="bv-example-row">
            <b-row>
                <div class="main-nav">
                    <b-row>
                        <b-col>
                            <b-nav vertical>
                                <b-nav-item><router-link to="/set"><span class="iconfont icon-shezhi"></span></router-link></b-nav-item>
                                <b-nav-item><router-link to="/market"><span class="iconfont icon-diqiu"></span></router-link></b-nav-item>
                                <b-nav-item><router-link to="/optional"><span class="iconfont icon-xing"></span></router-link></b-nav-item>
                                <b-nav-item><router-link to="/hold"><span class="iconfont icon-qianmoney125"></span></router-link></b-nav-item>
                            </b-nav>
                        </b-col>
                    </b-row>
                </div>
                <b-col><router-view></router-view></b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>

export default {

}
</script>
<style lang="stylus">
    .main-nav
        width 50px
        background #35425b
        margin-top 15px
        .nav-item
            :hover
                background #2a3549
            .nav-link
                height 50px
                line-height 50px
                text-align center
                & > a
                    font-size 15px
                    color white
                    text-decoration none
</style>


