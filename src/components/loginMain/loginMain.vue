<template>
    <div class="loginMain">
        <b-container>
            <b-row>
                <b-col>
                    <div class="loginMainWapper">
                        <h4 class="title">登陆账号</h4>
                        <ul class="items">
                            <li>
                                <b-form-group
                                    id="account"
                                    description="请输入你的邮箱地址"
                                    label="账号："
                                    label-for = "inputAccount"
                                    >
                                    <b-form-input id="inputAccount"></b-form-input>
                                </b-form-group>
                            </li>
                            <li>
                                <b-form-group
                                    id="userPassword"
                                    description="请输入你的密码"
                                    label="密码："
                                    label-for = "inputPassword"
                                    >
                                    <b-form-input type="password" id="inputPassword"></b-form-input>
                                </b-form-group>
                            </li>
                            <li><b-btn class="login">登陆</b-btn></li>
                            <li>
                                <b-row>
                                    <b-col class="register">账号注册</b-col>
                                    <b-col class="forgetPassword">忘记密码？</b-col>
                                </b-row>
                            </li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .loginMainWapper
        margin 0 auto
        margin-top 87.5px
        width 480px
        height 400px
        box-shadow black 0 0 10px
        background-color white
        .title
            text-align center
            padding-top 15px
        .items
            list-style none
            .login
                width 100%
                background-color #2c75e6
            .register,.forgetPassword
                font-size 14px
                color  #2c75e6
                cursor pointer
            .forgetPassword
                text-align right 
        & > ul
            width 90%
            margin 0 auto 
            padding-top 40px
        & > ul > li
            list-style none
</style>


