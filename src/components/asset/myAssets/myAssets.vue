<template>
    <div class="myAssets">
        <b-container>
            <b-row>
                <b-col>
                    <b-table
                        caption-top
                        :items = "items"
                        :fields="fields"
                        class="myAssetstable"
                        hover
                    >
                        <template slot="table-caption">
                            <b-row>
                                <b-col class="title">我的资产</b-col>
                                <b-col class="search">
                                    <b-input-group>
                                        <b-form-input placeholder="搜索币种"/>
                                    </b-input-group>
                                </b-col>
                            </b-row>
                        </template>
                        <template slot="actions" slot-scope="data">
                            <span class="in">转入</span>
                            <span class="out">转出</span>
                        </template>
                    </b-table>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
const items = [
    {assetKind:"Zilliqa1",usableNum:99,unusableNum:99,total:198},
    {assetKind:"Zilliqa2",usableNum:99,unusableNum:99,total:198},
    {assetKind:"Zilliqa3",usableNum:99,unusableNum:99,total:198},
    {assetKind:"Zilliqa4",usableNum:99,unusableNum:99,total:198},
    {assetKind:"Zilliqa5",usableNum:99,unusableNum:99,total:198},
    {assetKind:"Zilliqa6",usableNum:99,unusableNum:99,total:198}
]
export default {
    data(){
        return{
            items:items,
            fields:[
                {key:'assetKind',label:'资产种类'},
                {key:'usableNum',label:'可用数量'},
                {key:'unusableNum',label:'冻结数量'},
                {key:'total',label:'总计'},
                {key:'actions',label:'操作'}
            ]
        }
    }
}
</script>
<style lang="stylus">
    .myAssets
        min-height 575px
        margin-top 20px
        margin-bottom 15px
        box-shadow 0px 0px 2px 2px #eeeeee
        background-color white
        .myAssetstable
            font-size 14px
            margin-bottom 0px
            .title
                padding-left 12px
                line-height 38px
                color black
                font-weight 700
                font-size 14px
            .search
                .input-group
                    width 200px
                    float right
                    padding-right 15px
                    .form-control
                        font-size 14px
                        box-shadow 0px 0px 0px 0px
            .in,.out
                color #2c75e6
            .out
                margin-left 10px
</style>
