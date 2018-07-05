<template>
    <div class="box">
        <vHeader></vHeader>
        <div class="nonebox"></div>
        <div class="content">
            <div class="content-top">
                <span>福居网</span>
                <span>> </span>
                <span>经纪人</span>
            </div>
            <div class="content-search">
                <input type="text" placeholder="搜索">
                <span>搜索</span>
                <a href="#">
                    <i class="iconfont icon-map_02" style="font-size: 25px"></i>
                    地图找房
                </a>
            </div>
            <!--选项卡开始-->
            <div class="select">
                <div class="content-select">
                    <div class="select-top">
                        <!--区域开始-->
                        <div class="select-address clearfix">
                            <span>区域</span>
                            <div class="select-items">
                                <el-checkbox class="item" v-model="isChecked.r_id" @change="handleClear('r_id')">不限</el-checkbox>
                                <el-checkbox-group v-model="formData.r_id" >
                                    <el-checkbox   v-for="item in fillData2.r_idData" :label="item" :key="item.id" @change="handleChange('r_id')" class="item">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <!--区域结束-->

                        <!--类型开始-->
                        <div class="select-area clearfix">
                            <span>面积</span>
                            <div class="select-items">
                                <el-checkbox class="item" v-model="isChecked.bulit_area" @change="handleClear('bulit_area')">不限</el-checkbox>
                                <el-checkbox-group v-model="formData.bulit_area" >
                                    <el-checkbox v-for="item in fillData.bulit_area" :label="item" :key="item.id" class="item" @change="handleChange('bulit_area')">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <!--类型结束-->

                    </div>
                </div>
            </div>
            <!--选项卡结束-->

            <!--房源列表开始-->
            <div class="list-top">
                <div class="list-altogether">
                    共找到
                    <span class="total" style="color: #c30d23">{{houseCount}}</span>名
                    <span>经纪人</span>
                </div>
            </div>
            <!--房源列表结束-->

            <!--房源简介开始-->

            <!--房源简介结束-->

            <!--分页条开始-->
            <div class="pages-tool">
                <el-pagination background layout="prev, pager, next" :total="1000" class="pages-item">
                </el-pagination>
            </div>
            <!--分页条结束-->
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import vHeader from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'
    import axios from '~/plugins/axios'
    import api from '~/mainApi/index'
    export default {
        name: "village",
        components:{
            vHeader,
            Footer
        },
        async asyncData(){
            let r_idData = await axios.get(api.paramToUrl(api.regionLists,{city:"呼和浩特"}))
            r_idData.data.data = r_idData.data.data.map(item =>{
                item.title = item.area;
                return item;
            })
            return {
                fillData2:{
                    r_idData:r_idData.data.data
                },
            }
        },
        data () {
            return {
                formData:{
                    r_id:[],
                    bedroom:[],
                },
                fillData:{
                    bulit_area:[
                        {title:"综合评分由高到低", id:'1'},
                        {title:"成交量由高到低", id:'2'},
                        {title:"带看量由高到低", id:'3'},
                    ],
                },
                isChecked:{
                    r_id:true,
                    bulit_area:true,
                },
                params: {
                    page_size: 10,
                    page_num: 1,
                    order: 1
                },
                houseCount:0,
                houseArr:[]
            }
        },
        methods:{
            handleClear(key){
                if (this.isChecked[key]){
                    this.formData[key].splice(0);
                }
            },
            handleChange(key){
                if(this.formData[key].length>0){
                    this.isChecked[key] = false;
                }else {
                    this.isChecked[key] = true;
                }
            },
            getData(){
                let formData = this.formData;
                let params = {...this.params};
                for (let key in formData){
                    if (formData[key]instanceof Array&&formData[key].length>0){
                        params[key] = formData[key].map(item => item.id)
                    }
                }
                // if(this.userid){
                //     params.userid = this.userid
                // }
                const loading = this.$loading({
                    lock: true,
                    text: '数据加载中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                axios.get(api.paramToUrl(api.agentLists, params)).then(res => {
                    this.houseCount = res.data.count;
                    this.houseArr = res.data.data;
                    console.log(res)
                    loading.close()
                }).catch(err => {
                    loading.close()
                })
            }
        },
        computed:{
            selectedData(){
                let formData = this.formData;
                let allData = [];
                for (let key in formData){
                    if (formData[key]instanceof Array){
                        formData[key].forEach(item =>{
                            item._parentName = [key]
                            allData.push(item)
                        })
                    }
                }
                return allData;
            },

        },
        watch:{
            selectedData(){
                this.getData()
            }
        },
        mounted(){
            this.getData();
        },
    }
</script>
<style>
    .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #c30d23;
    }
    .el-checkbox__inner{
        width: 20px;
        height: 20px;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
        background-color:#c30d23 ;
        border-color: #c30d23;
        width: 20px;
        height: 20px;
    }
    .el-checkbox__inner::after{
        top: 3px;
        left: 7px;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color:#5f1985;
        color: #fff;
        border: 1px solid #5f1985;
    }
</style>

<style scoped lang="scss">
    .nonebox{
        width: 100%;
        height: 10px;
        border-bottom: 1px solid #ccc;
    }
    .content{
        width: 1100px;
        margin: 20px auto 0;
        .content-top{
            margin-top: 20px;
            font-size: 14px;
            color: #999;
        }
        .content-search{
            position: relative;
            margin-top: 40px;
            input{
                width: 540px;
                height: 60px;
                font-size: 14px;
                padding: 0 0 0 20px;
                border: none;
                background-color: #f4f4f4;
                box-sizing: border-box;
            }
            span{
                width: 160px;
                height: 60px;
                display: inline-block;
                vertical-align: top;
                text-align: center;
                line-height: 60px;
                cursor: pointer;
                background-color: #c30d23;
                color: #fff;
                font-size: 16px;
            }
            a{
                width: 180px;
                height: 60px;
                margin-left: 20px;
                display: inline-block;
                vertical-align: top;
                text-align: center;
                line-height: 60px;
                cursor: pointer;
                background-color: #5f1985;
                color: #fff;
                text-decoration: none;
                font-size: 16px;
            }
        }
        .content-select{
            margin-top: 40px;

            .select-top{
                padding-bottom: 30px;
                border-bottom: 1px solid #ccc;
                .select-address{
                    padding-right: 300px;
                    span{
                        font-size: 14px;
                        color: #333;
                        padding-right: 20px;
                        float: left;
                        display: block;
                    }
                    .select-items{
                        margin-left: 20px;
                        cursor: pointer;
                        width: 75%;
                        float: left;
                        .item{
                            margin: 0 0 20px 20px;
                            cursor: pointer;
                            float: left;
                            color: #999;
                        }
                    }
                }
                .select-area{
                    padding-right: 300px;
                    margin-top: 30px;
                    span{
                        font-size: 14px;
                        color: #333;
                        padding-right: 20px;
                        float: left;
                        display: block;
                    }
                    .select-items{
                        margin-left: 20px;
                        cursor: pointer;
                        width: 76%;
                        float: left;
                        .item{
                            margin: 0 0 4px 20px;
                            cursor: pointer;
                            float: left;
                            color: #999;
                        }
                    }
                }
            }
        }
        .list-top{
            margin-top: 80px;
            font-size: 30px;
            color: #333;
            .list-altogether{
                margin-top: 40px;
            }
        }
        .pages-tool{
            margin-top: 30px;
            font-size: 12px;
            color: #666;
            .pages-item{
                text-align: right;
            }
        }
    }
</style>