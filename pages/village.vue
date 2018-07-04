<template>
    <div class="box">
        <vHeader></vHeader>
        <div class="nonebox"></div>
        <div class="content">
            <div class="content-top">
                <span>福居网</span>
                <span>> </span>
                <span>小区</span>
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

                            <!--均价开始-->
                            <div class="select-price clearfix">
                                <span>均价</span>
                                <div class="select-items">
                                    <el-checkbox class="item" v-model="isChecked.rent" @change="handleClear('r_id')">不限</el-checkbox>
                                    <el-checkbox-group  v-model="formData.rent">
                                        <el-checkbox v-for="item in fillData.rent" :label="item" :key="item.id" class="item" @change="handleChange('rent')">
                                            {{item.title}}
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </div>
                            </div>
                            <div class="select-priceinput clearfix">
                                <input type="text" class="price-input" v-model="formData.minPrice">
                                <b>&nbsp;-&nbsp;</b>
                                <input type="text" class="price-input" v-model="formData.maxPrice">
                                <div class="price-btn">
                                    确定
                                </div>
                            </div>
                            <!--均价结束-->

                            <!--类型开始-->
                            <div class="select-room clearfix">
                                <span>类型</span>
                                <el-checkbox-group  v-model="formData.bedroom" class="select-items">
                                    <el-checkbox v-for="item in fillData.bedroom" :label="item" :key="item.id" class="item">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <!--类型结束-->

                            <!--用途开始-->
                            <div class="select-renovation clearfix">
                                <span>用途</span>
                                <el-checkbox-group v-model="formData.decoration" class="select-items">
                                    <el-checkbox v-for="item in fillData.decoration" :label="item" :key="item.id" class="item">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <!--用途结束-->

                    </div>

                    <div class="select-bottom">
                            <!--筛选分类开始-->
                            <div class="select-class clearfix">
                                <span class="name">筛选分类</span>
                                <div class="class-content" >
                                    <span  class="condition" v-for="item in selectedData" @click="handleReduce(item)">
                                        {{item.title}}
                                        <i class="iconfont icon-close3"></i>
                                    </span>
                                    <span  class="delate" @click="handleClearAll">
                                        <i class="iconfont icon-huishouzhan"></i>
                                        清除全部
                                    </span>
                                </div>
                            </div>
                            <!--筛选分类结束-->
                    </div>
                </div>
            </div>
            <!--选项卡结束-->

            <!--房源列表开始-->
            <div class="list-top">
                <div class="list-sort">
                    <div class="buttons">
                        <button type="button" class="btn" style="margin-left: 0px">
                            最新
                        </button>
                        <button type="button" class="btn">
                            房屋租金
                            <i class="iconfont icon-shang"></i>
                        </button>
                        <button type="button" class="btn">
                            房屋面积
                            <i class="iconfont icon-shang"></i>
                        </button>
                    </div>
                </div>
                <div class="list-altogether">
                    共找到
                    <span class="total" style="color: #c30d23">{{houseCount}}</span>套
                    <span>呼和浩特</span>
                    <span>小区</span>
                </div>
            </div>
            <!--房源列表结束-->

            <!--房源简介开始-->
            <div class="list-content clearfix" v-for="item in houseArr">
                    <div class="list-item clearfix" >
                        <div class="list-left">
                            <a href="#">
                                <img :src="'http://www.fooju.cn'+item.pic">
                            </a>
                        </div>
                        <div class="list-center">
                            <div class="benefit">
                                <a href="#">
                                    {{item.name}}
                                </a>
                            </div>
                            <div class="introduce">
                                <span>30天成交{{item.retal_num}}套|</span>
                                <span>{{item.deal_num}}套正在出租|</span>
                            </div>
                            <div class="built">
                                <span>{{item.built_type}}|</span>
                                <span>{{item.time}}年建</span>
                            </div>
                        </div>
                        <div class="list-right">
                            <div class="price">
                                <span style="font-size: 40px">{{item.average_price}}</span>
                                <span>元/平方米</span>
                            </div>
                            <div class="update">
                                <span>当前二手房均价</span>
                            </div>
                            <div class="price">
                                <span style="font-size: 40px">{{item.used_num}}</span>
                                <span>套</span>
                            </div>
                            <div class="update">
                                <span>在售二手房</span>
                            </div>

                            <a href="#" class="follow">关注</a>
                        </div>
                    </div>
                </div>
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
                    rent:[],
                    minPrice:[],
                    maxPrice:[],
                    bedroom:[],
                    decoration:[],
                },
                fillData:{
                    rent:[
                        {title:"3000以下", id:'0-3000'},
                        {title:"3000-5000", id:'3000-5000'},
                        {title:"5000-7000", id:'5000-7000'},
                        {title:"7000-9000", id:'7000-9000'},
                        {title:"9000-10000", id:'9000-10000'},
                        {title:"10000以上", id:'10000-99999'}
                    ],
                    bedroom:[
                        {title:"板楼", id:'1'},
                        {title:"塔楼", id:'2'},
                        {title:"板塔结合", id:'3'},
                    ],
                    decoration:[
                        {title:"普通住宅", id:'1'},
                        {title:"写字楼", id:'2'},
                        {title:"商住两用", id:'3'},
                        {title:"商铺", id:'4'},
                        {title:"厂房", id:'5'},
                        {title:"公寓", id:'6'},
                    ],
                },
                isChecked:{
                    r_id:true,
                    rent:true,
                    bulit_area:true,
                    floor_type:true
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
            handleReduce(item){
                let index = this.formData[item._parentName].findIndex(val =>{
                    if (val.id == item.id){
                        return true
                    }
                })
                this.formData[item._parentName].splice(index,1);
            },
            handleClearAll(){
                let formData = this.formData;
                for (let arr in formData){
                    if (formData[arr] instanceof Array){
                        formData[arr].splice(0);
                    }
                }
            },
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
                axios.get(api.paramToUrl(api.village_lists, params)).then(res => {
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
                .select-price{
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
                        width: 76%;
                        float: left;
                        .item{
                            margin: 0 0 20px 20px;
                            cursor: pointer;
                            float: left;
                            color: #999;
                        }
                    }
                }
                .select-priceinput{
                    margin-left: 94px;
                    color: #999;
                    .price-input{
                        width: 56px;
                        height: 16px;
                        color: #999;
                        font-size: 14px;
                        border: 1px solid #ccc;
                    }
                    .price-btn{
                        background-color: #c30d23;
                        color: #fff;
                        width: 55px;
                        height: 25px;
                        font-size: 13px;
                        text-align: center;
                        line-height: 23px;
                        border: none;
                        margin: 2px 0 0 8px;
                        display: inline-block;
                        cursor: pointer;
                    }
                }
                .select-room{
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
                .select-renovation{
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
            .select-bottom{
                .select-class{
                    padding-right: 300px;
                    margin-top: 30px;
                    .name{
                        font-size: 14px;
                        color: #333;
                        padding-right: 20px;
                        float: left;
                        display: block;
                    }
                    .class-content{
                        cursor: pointer;
                        width: 700px;
                        float: left;
                        .condition{
                            border: 1px solid #ccc;
                            color: #c30d23;
                            font-size: 14px;
                            text-align: center;
                            height: 26px;
                            width: 110px;
                            display: block;
                            line-height: 26px;
                            margin-left: 20px;
                            margin-bottom: 10px;
                            float: left;
                            text-decoration: none;
                            i{
                                background-color: #ccc;
                                color: #fff;
                                width: 26px;
                                height: 26px;
                                font-size: 20px;
                                float: right;
                            }
                        }
                        .delate{
                            border: none;
                            color: #666;
                            font-size: 14px;
                            text-align: center;
                            height: 26px;
                            width: 110px;
                            display: block;
                            line-height: 26px;
                            margin-left: 30px;
                            margin-bottom: 10px;
                            float: left;
                            text-decoration: none;
                            i{
                                margin-right: 10px;
                                background: 0 0;
                                font-size: 20px;
                                width: 26px;
                                height: 26px;
                            }
                        }
                    }

                }
                .select-tab{
                    text-align: center;
                    font-size: 16px;
                    color: #bbb;
                    padding: 30px 0;
                    border-bottom: 1px solid #ccc;
                    cursor: pointer;
                }
            }
        }
        .list-top{
            margin-top: 80px;
            font-size: 30px;
            color: #333;
            .list-sort{
                margin-top: 30px;
                .btn{
                    cursor: pointer;
                    font-size: 18px;
                    color: #c30d23;
                    border: 1px solid #c30d23;
                    background:0 0;
                    padding: 10px 20px;
                    border-radius: 20px;
                    margin-left: 20px;
                    line-height: 1.15;
                }
            }
            .list-altogether{
                margin-top: 40px;
            }
        }
        .list-content{
            .list-item{
                margin-top: 40px;
                .list-left{
                    float: left;
                    a{
                        color: #000;
                        text-decoration: none;
                        img{
                            width: 285px;
                            height: 214px;
                        }
                    }
                }
                .list-center{
                    margin-left: 30px;
                    float: left;
                    .benefit{
                        margin-bottom: 30px;
                        font-size: 20px;
                        color: #333;
                        a{
                            text-decoration: none;
                        }
                    }
                    .introduce{
                        margin-top: 20px;
                        font-size: 14px;
                        color: #666;
                    }
                    .built{
                        margin-top: 20px;
                        font-size: 14px;
                        color: #666;
                    }
                }
                .list-right{
                    text-align: right;
                    float: right;
                    .price{
                        font-size: 20px;
                        color: #c30d23;

                    }
                    .update{
                        font-size: 14px;
                        color: #666;
                        margin-bottom: 20px;
                    }
                    .follow{
                        width: 100px;
                        height: 36px;
                        text-align: center;
                        line-height: 36px;
                        border: 1px solid #c30d23;
                        font-size: 16px;
                        color: #c30d23;
                        margin-top: 10px;
                        border-radius: 4px;
                        margin-left: 45px;
                        text-decoration: none;
                        display: inline-block;
                    }
                }
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