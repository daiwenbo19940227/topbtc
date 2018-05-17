<template>
    <div class="main">
        <b-container class="bv-example-row">
            <b-row>
                <div class="main-nav">
                    <b-row>
                        <b-col>
                            <b-nav vertical class="navlist">
                                <router-link v-for="(item,index) in mymenu" :key="index" :to=item :id = item>
                                    <span :class=myIcon[index]></span>
                                    <b-tooltip :target=item :title=mypopover[index] placement="right"></b-tooltip>
                                </router-link>
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
    data(){
        return{
            mymenu:["set","market","optional","hold"],
            myIcon:["iconfont icon-shezhi","iconfont icon-diqiu","iconfont icon-xing","iconfont icon-qianmoney125"],
            mypopover:["设置","市场","自选","持有"]
        }
    },
    component:
    {
        
    }
}
</script>
<style lang="stylus">
.main
    background-color #eee
    min-height 575px
    .main-nav
        width 50px
        background #35425b
        margin-top 15px
        margin-bottom 50px
        min-height 575px
        .navlist
            & > a
                display block 
                height 50px
                line-height 50px
                text-align center
                color grey 
                text-decoration none
                &.router-link-active
                    color white
                    background #2c75e6
</style>


