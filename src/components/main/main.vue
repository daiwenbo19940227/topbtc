<template>
    <div class="w-100">
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="0.5">
                    <b-nav vertical>
                        <b-nav-item active><router-link to="/set">设置</router-link> </b-nav-item>
                        <b-nav-item><router-link to="/market">市场</router-link></b-nav-item>
                        <b-nav-item><router-link to="/optional">自选</router-link></b-nav-item>
                        <b-nav-item><router-link to="/hold">持有</router-link> </b-nav-item>
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
</style>


