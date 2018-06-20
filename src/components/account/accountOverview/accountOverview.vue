<template>
    <div class="accountOverview">
        <b-container>
            <div class="accountDetail">
                <div class="accountDetailWapper">
                    <b-row class="accountOverviewHead">
                        <b-col class="headLogoWapper" cols="4">
                            <b-row class="headLogo">
                               <div class="myheadImg"></div>
                               <b-col class="myheadDetial">
                                   <ul>
                                       <li>787987115@qq.com</li>
                                       <li class="norealName">
                                               <div class="iconfont icon-gantan"></div>
                                               <div class="iconfontText">未实名</div>
                                        </li>
                                   </ul>
                               </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="8" class="stepWapper">
                            <div id="accountOverviewStep"></div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <ul class="overviewTable">
                            <li>
                               <b-row>
                                   <b-col cols="3"><span class="overviewTableTitle">KYC认证：</span></b-col>
                                   <b-col cols="7"><span class="iconfont icon-gantan"></span>个人账户验证：已完成0%</b-col>
                                   <b-col cols="2" class="overViewoperate"><span class="iconfont icon-wenhao"></span><span class="overViewoperateText">完善资料</span></b-col>
                               </b-row>
                            </li>
                            <li>
                                <b-row>
                                   <b-col cols="3"><span class="overviewTableTitle">谷歌两步验证：</span></b-col>
                                   <b-col cols="7"><span class="iconfont icon-cha"></span>未开通</b-col>
                                   <b-col cols="2" class="overViewoperate"><span class="overViewoperateText">绑定两步验证</span></b-col>
                               </b-row>
                            </li>
                            <li>
                                <b-row>
                                   <b-col cols="3"><span class="overviewTableTitle">安全问题：</span></b-col>
                                   <b-col cols="7"><span class="iconfont icon-cha"></span>未开通</b-col>
                                   <b-col cols="2" class="overViewoperate"><span class="overViewoperateText">立即开通</span></b-col>
                               </b-row>
                            </li>
                            <li>
                                <b-row>
                                   <b-col cols="3"><span class="overviewTableTitle">邀请链接：</span></b-col>
                                   <b-col cols="7"><a href="https://www.topbtc.one/?invit=189282">https://www.topbtc.one/?invit=189282</a></b-col>
                                   <b-col cols="2" class="overViewoperate"><span class="overViewoperateText">查看详情</span></b-col>
                               </b-row>
                            </li>
                            <li>
                                <b-row>
                                   <b-col cols="3"><span  class="overviewTableTitle">手续费折扣：</span></b-col>
                                   <b-col cols="7">0%（持有0TOPB）<span class="iconfont icon-wenhao"></span></b-col>
                                   <b-col cols="2" class="overViewoperate"><span class="overViewoperateText">购买TOPB</span></b-col>
                               </b-row>
                            </li>
                            <li>
                                <b-row>
                                   <b-col cols="3"><span class="overviewTableTitle">启用API：</span></b-col>
                                   <b-col cols="7">0API<span class="iconfont icon-wenhao"></span></b-col>
                                   <b-col cols="2" class="overViewoperate"><span class="overViewoperateText">管理</span></b-col>
                               </b-row>
                            </li>
                        </ul>
                        </b-col>
                    </b-row>
                </div>
            </div>
            <div class="recentLogin">
                <b-row>
                    <b-col>
                        <b-table
                            show-empty
                            caption-top
                            :items ="items"
                            :fields="fields"
                            :current-page ="currentPage"
                            :per-page ="perPage"
                            hover
                            class="recentLoginTable"
                        >
                             <template slot="table-caption">
                                <b-row>
                                    <b-col><span class="title">近期登陆</span></b-col>
                                </b-row>
                            </template>
                        </b-table>
                    </b-col>
                </b-row>
                <b-row class="currentPageWpper">
                    <b-col>
                        <b-pagination  :total-rows="totalRows" :per-page ="perPage" v-model="currentPage" class="overViewCurrentPage"/>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>    
</template>
<script>
import jquery from "../../../common/js/jquery.min.js"
import step from "../../../common/js/jquery.step.min.js"
const items = [
    {loginArea:'1美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'2美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'3美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'4美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'5美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'6美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'7美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'8美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'9美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'10美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'11美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'12美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'13美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'14美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'15美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'16美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'17美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'18美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'},
    {loginArea:'19美国洛杉矶(69.194.13.246)',loginPlatfrom:'Topbtc Web',loginFacility:'Chorm Windows 10',loginTime:'2018-06-19 10:00:10'}
]
export default {
    data(){
        return{
            items:items,
            fields:[
                {key:'loginArea',label:'登陆地区'},
                {key:'loginPlatfrom',label:'登陆平台'},
                {key:'loginFacility',label:'登陆设备'},
                {key:'loginTime',label:'时间'}
            ],
            currentPage:1,
            perPage:5,
            totalRows:items.length
        }
    },
    created(){
      this.$nextTick(()=>{
        var $step = $("#accountOverviewStep");
        $step.step({
        index: 0,
        time: 500,
        title: ["安全认证", "安全问题", "KYC认证"]
        });
      })
    },
    methods:{
       
    }
}
</script>
<style lang="stylus">
@import '../../../common/stylus/jquery.step.css'
    .accountOverview
        min-height 575px
        margin-top 20px
        .accountDetail
            height 450px
            background-color white
            box-shadow #e8e8e8 0 0 10px
            position relative
            border-radius 5px
            .accountDetailWapper
                height 430px
                width 96%
                padding-top 20px
                margin 0 auto
                .accountOverviewHead
                    height 100px
                    .headLogoWapper
                        .headLogo
                            width 250px
                            height 70px
                            margin 0 auto
                            margin-top 15px
                            border-right 1px solid #f0f5f7
                            .myheadImg
                                width 64px
                                height 64px
                                background-image url('../../../common/img/head.png')
                                background-size 100% 100%
                                border-radius 50%
                            .myheadDetial
                                margin-left 10px
                                font-size 14px
                                color #6a7b88
                                .norealName
                                    float left 
                                    width 80px
                                    background-color #e1e1e1
                                    border-radius 15px
                                    margin-top 20px
                                    .icon-gantan
                                        float left
                                        color #bfbfbf
                                        margin-left 9px
                                    .iconfontText
                                        float left
                                        margin-left 2px
                                        height 23px
                                        line-height 23px
                                    color black
                .overviewTable
                    & > li
                        height 50px
                        line-height 50px
                        font-size 14px
                        .overViewoperate
                            text-align right
                        .icon-gantan
                            color #ffbf00
                        .icon-wenhao
                            color #a4aab3
                        .icon-cha
                            color #ff5f73
                        .overviewTableTitle
                            margin-left 20px
                        .overViewoperateText
                            margin-right 20px
                    & > li:nth-of-type(odd)
                        background-color #f0f5f7
        .recentLogin
            border-radius 5px
            margin-top 20px
            margin-bottom 30px
            background-color white
            box-shadow #e8e8e8 0 0 10px
            .recentLoginTable
                font-size 13px
                color #4c4d4f
                .title
                    font-size 16px
                    margin-left 12px
                    color black
                & > thead > tr 
                    background-color #f7f7f7
                & > tbody > tr > td
                    border-top none
                    border-bottom 1px solid #dee2e6
                    padding 1rem
            .currentPageWpper
                .overViewCurrentPage
                    margin-top 10px
                    margin-bottom 20px
                    margin-right 20px
                    float right
</style>
