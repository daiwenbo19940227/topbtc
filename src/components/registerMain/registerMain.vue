<template>
    <div class="registerMain">
        <b-container>
            <b-row>
                <b-col cols="8" class="registerMainWapper">
                    <b-row>
                        <b-col cols="7" class="registerMain">
                            <h4 class="registerHeader">注册账号</h4>
                            <b-row>
                                <b-col cols="10" class="warning">
                                    <b-row>
                                        <b-col cols="10" class="warningText">*为了防止账号被盗，密码请勿设置跟您的注册邮箱密码相同</b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="10" class="registerInput">
                                    <b-form>
                                        <ul>
                                            <li>
                                                <b-form-group
                                                id="email"
                                                description=""
                                                label="*邮箱："
                                                label-for = "inputEmail"
                                                >
                                                    <b-form-input type="email" id="inputEmail" v-model="form.email"  required></b-form-input>
                                                </b-form-group>
                                            </li>
                                            <li>
                                                <b-form-group
                                                id="password"
                                                description=""
                                                label="*密码："
                                                label-for = "inputPssword"
                                                >
                                                    <b-form-input type="password" id="inputPssword" v-model="form.password"></b-form-input>
                                                </b-form-group>
                                            </li>
                                            <li>
                                                <b-form-group
                                                id="password2"
                                                description=""
                                                label="*确认密码："
                                                label-for = "inputPssword2"
                                                >
                                                    <b-form-input type="password" id="inputPssword2" v-model="form.password2"></b-form-input>
                                                </b-form-group>
                                            </li>
                                            <li>
                                                <b-form-group
                                                id="referralCode"
                                                description=""
                                                label="*邀请码"
                                                label-for = "inputReferralCode"
                                                >
                                                    <b-form-input id="inputReferralCode" placeholder="可以不填" v-model="form.referralCode"></b-form-input>
                                                </b-form-group>
                                            </li>
                                            <li><b-btn type="submit" variant="primary" class="btn" @click="gotoEmailCheck" :disabled="$v.form.$invalid">下一步</b-btn></li>
                                        </ul>
                                    </b-form>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import{validationMixin} from "../../../node_modules/vuelidate"
import{required,email} from "../../../node_modules/vuelidate/lib/validators"
export default {
    data(){
        return{
            form:{}
        }
    },
    mixins:[validationMixin],
    validations:{
        form:{
            email:{
                required,
                email
            }
        }
    },
    created(){
    },
    methods:{
        gotoEmailCheck(){
            this.$emit('emailCheck','false')
        }
    }
}
</script>
<style lang="stylus">
    .registerMainWapper
        margin 0 auto
        height 700px
        .registerMain
            height 600px
            margin 0 auto
            margin-top 50px
            box-shadow 0 0 10px black
            background-color white
            .registerHeader
                text-align center
                padding-top 30pxpx
            .warning
                margin 0 auto
                height 55px
                background-color #fffaeb
                border 1px solid #fff3cf
                border-radius 2px
                font-size 14px
                .warningText
                    margin 0 auto
                    height 40px
                    margin-top 7.5px
                    width 70%
            .registerInput
                margin 0 auto
                font-size 14px
                font-weight 700
                .btn
                    width 100%             
</style>
