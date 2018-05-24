<template>
    <div class="emailCheck">
        <b-container>
            <b-row>
                <b-col cols="4" class="emailCheckWapper">
                    <h5 class="emailCheckHeader">邮箱验证</h5>
                    <b-row>
                        <b-col cols="10" class="check">
                            <ul>
                                <li>
                                    <b-form-group
                                        id="checkEmail"
                                        description=""
                                        label="*邮箱："
                                        label-for = "inputcheckEmail"
                                        >
                                        <b-form-input id="inputcheckEmail"></b-form-input>
                                    </b-form-group>
                                </li>
                                <li>
                                    <b-row>
                                        <b-col cols="8">
                                           <b-form-group
                                                id="verificationCode"
                                                description=""
                                                label="*验证码"
                                                label-for = "Code"
                                                >
                                                <b-form-input id="Code"></b-form-input>
                                            </b-form-group>          
                                        </b-col>
                                        <b-col cols="4">
                                            <b-btn class="codeBtn" >发送验证码</b-btn>
                                        </b-col>
                                    </b-row>
                                </li>
                                <li><b-btn class="emaliCheckBtn" variant="primary">提交</b-btn></li>
                            </ul>
                        </b-col>
                    </b-row>
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
    .emailCheckWapper
        margin 0 auto
        height 400px
        margin-top 30px
        box-shadow 0 0 10px black
        background-color white
        .emailCheckHeader
            text-align center
            padding-top 30px
        .check
            margin 0 auto
            .codeBtn
                width 90%
                margin-left 10%
                margin-top 32px
                font-size 14px
        .emaliCheckBtn
            width 100%
</style>
