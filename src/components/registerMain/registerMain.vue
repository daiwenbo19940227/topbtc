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
                                                description="请输入你的邮箱地址"
                                                label="*邮箱："
                                                :state = "emailState"
                                                :invalid-feedback = "emailInvalidfeedback"
                                                >
                                                    <b-form-input id="inputEmail" v-model="$v.form.email.$model"></b-form-input>
                                                </b-form-group>
                                            </li>
                                            <li>
                                                <b-form-group
                                                id="password"
                                                description="请输入你的密码"
                                                label="*密码："
                                                label-for = "inputPssword"
                                                :state = "passwordState"
                                                :invalid-feedback = "passwordInvalidfeedback"
                                                >
                                                    <b-form-input type="password" id="inputPssword" v-model="$v.form.password.$model"></b-form-input>
                                                </b-form-group>
                                            </li>
                                            <li>
                                                <b-form-group
                                                id="password2"
                                                description="再次输入你的密码"
                                                label="*确认密码："
                                                label-for = "inputPssword2"
                                                :state = "password2State"
                                                :invalid-feedback = "password2Invalidfeedback"
                                                >
                                                    <b-form-input type="password" id="inputPssword2" v-model="$v.form.password2.$model"></b-form-input>
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
                                            <li><b-btn type="input" variant="primary" class="btn" @click="gotoEmailCheck" :disabled="state">下一步</b-btn></li>
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
            form:{
                email:'',
                password:'',
                password2:''
            },
            state:true
        }
    },
    mixins:[validationMixin],
    validations:{
        form:{
            email:{
                required,
                email
            },
            password:{
                required
            },
            password2:{
                required
            }
        }
    },
    created(){
        
    },
    computed:{
        emailState(){
          if(this.$v.form.email.$dirty==false){
              return ""
          }else{
              return !this.$v.form.email.$invalid
          }
        },
        emailInvalidfeedback(){
          if(this.$v.form.email.required==false){             
              return "邮箱地址不能为空"
          }else{
              return "请输入正确的邮箱地址"
          }  
        },
        passwordState(){
            if(this.$v.form.password.$dirty==false){
                return ""
            }else{
                return !this.$v.form.password.$invalid
            }
        },
        passwordInvalidfeedback(){
            if(!this.$v.form.password.required){
                return "密码不能为空"
            }
        },
        password2State(){
            if(this.$v.form.password2.$dirty==false){
                return ""
            }else if(this.$v.form.password.$model!==this.$v.form.password2.$model){
                this.state = !this.$v.form.$invalid
                return false
            }else{
                this.state = this.$v.form.$invalid
                return !this.$v.form.password2.$invalid
            }
        },
        password2Invalidfeedback(){
            if(!this.$v.form.password2.required){
                return "请再次输入密码"
            }
            if(this.$v.form.password.$model!==this.$v.form.password2.$model){
                return "两次密码不一致，请重新输入"
            }
        }
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
        height 750px
        .registerMain
            height 650px
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
