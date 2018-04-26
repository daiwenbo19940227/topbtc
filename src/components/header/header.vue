<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-2">
                        <div class="logo"></div>
                    </div>
                    <div class="col-md-8">
                        <div class="head-navbar">
                            <ul class="nav nav-pills">
                                <li role="presentation" class="nav-item"><router-link to="/main">首页</router-link></li>
                                <li role="presentation" class="nav-item"><router-link to="/asset">资产管理</router-link></li>
                                <li role="presentation" class="nav-item"><router-link to="/account">账号管理</router-link></li>
                                <li role="presentation" class="nav-item"><router-link to="/notice">公告</router-link></li>
                                <li role="presentation" class="nav-item"><router-link to="/invite">邀请朋友</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="login-register">
                            <div class="login"><router-link to="/login">登录</router-link></div>
                            <div class="register"><router-link to="/register">注册</router-link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view> 
    </div> 
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
    .header
        background #2c75e6
        width 100%
        height 70px
        padding 22px
        .logo
            display inline-block
            width 100px
            height 26px
            background-image url('../../components/header/logo.jpg')
            background-size 100px 26px
            background-repeat no-repeat
        .head-navbar
            .nav-item
                &>a
                    font-size 14px
                    color white
                    margin-left 25px
        .login-register
            .login,.register
                float left
                margin-left 10px
                width 50px
                height 30px
                background #d5e3fa
                text-align center
                border 1px solid white
                line-height 30px
                font-size 14px
            .login a
                color #2c75e6
            .register
                background #2c75e6
            .register a
                color white

</style>


