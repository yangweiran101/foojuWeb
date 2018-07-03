<template>
    <div class="box">
        <vHeader></vHeader>
        <div class="nonebox"></div>
        <div class="content">
            <div class="content-top">
                <span>福居网</span>
                <span>> </span>
                <span>租房</span>
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
            <div class="select" v-trans>
                <div class="content-select">
                    <!--显示上部开始-->
                    <div class="select-top">
                        <slot>
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

                            <!--租金开始-->
                            <div class="select-price clearfix">
                                <span>租金</span>
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
                            <!--租金结束-->

                            <!--户型开始-->
                            <div class="select-room clearfix">
                                <span>户型</span>
                                <el-checkbox-group  v-model="formData.bedroom" class="select-items">
                                    <el-checkbox v-for="item in fillData.bedroom" :label="item" :key="item.id" class="item">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <!--户型结束-->
                        </slot>
                    </div>
                    <!--显示上部结束-->
                    <!--隐藏部分开始-->
                    <div class="select-middle" >
                        <div style="height: 0;" class="flex-box" id="box">
                            <slot name="middle">
                            <!--装修开始-->
                            <div class="select-renovation clearfix">
                                <span>装修</span>
                                <el-checkbox-group v-model="formData.decoration" class="select-items">
                                    <el-checkbox v-for="item in fillData.decoration" :label="item" :key="item.id" class="item">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <!--装修结束-->

                            <!--朝向开始-->
                            <div class="select-orientation clearfix">
                                <span>朝向</span>
                                <el-checkbox-group v-model="formData.direction" class="select-items">
                                    <el-checkbox v-for="item in fillData.direction" :label="item" :key="item.id" class="item">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <!--朝向结束-->

                            <!--面积开始-->
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
                            <div class="select-priceinput clearfix">
                                <input type="text" class="price-input" v-model="formData.minCustom_bulit_area">
                                <b>&nbsp;-&nbsp;</b>
                                <input type="text" class="price-input" v-model="formData.maxCustom_bulit_area">
                                平
                                <div class="price-btn">
                                    确定
                                </div>
                            </div>
                            <!--面积结束-->

                            <!--楼层开始-->
                            <div class="select-floor clearfix">
                                <span>楼层</span>
                                <div class="select-items">
                                    <el-checkbox v-model="isChecked.floor_type" class="item" @change="handleClear('floor_type')">不限</el-checkbox>
                                    <el-checkbox-group  v-model="formData.floor_type">
                                        <el-checkbox v-for="item in fillData.floor_type" :label="item" :key="item.id" class="item" @change="handleChange('floor_type')">
                                            {{item.title}}
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </div>
                            </div>
                            <!--楼层结束-->

                            <!--电梯开始-->
                            <div class="select-elevator clearfix">
                                <span>电梯</span>
                                <el-checkbox-group v-model="formData.dianti" class="select-items">
                                    <el-checkbox v-for="item in fillData.dianti" :label="item" :key="item.id" class="item">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <!--电梯结束-->

                            <!--方式开始-->
                            <div class="select-way clearfix">
                                <span>方式</span>
                                <el-checkbox-group v-model="formData.style" class="select-items">
                                    <el-checkbox v-for="item in fillData.style" :label="item" :key="item.id" class="item">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <!--方式结束-->

                            <!--更多开始-->
                            <div class="select-more clearfix">
                                <span>更多</span>
                                <el-checkbox-group  v-model="formData.more" class="select-items">
                                    <el-checkbox v-for="item in fillData.more" :label="item" :key="item.id" class="item">
                                        {{item.title}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <!--更多结束-->
                        </slot>
                        </div>
                    </div>
                    <!--隐藏部分结束-->
                    <!--部分下部开始-->
                    <div class="select-bottom">
                        <slot name="bottom">
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
                            <!--选项显示隐藏-->
                            <div class="select-tab clearfix" >
                             <span v-show="!isShow" @click="handleShow(true)" id="btn1">更多选项<i class="iconfont icon-down-trangle-copy"></i></span>
                             <span v-show="isShow" @click="handleShow(false)"  id="btn2">收起选项<i class="iconfont icon-down-trangle-copy"></i></span>
                            </div>
                            <!--选项显示隐藏-->
                        </slot>
                    </div>
                    <!--部分下部结束-->
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
                    <span class="total" style="color: #c30d23">6666</span>套
                    <span>呼和浩特</span>
                    <span>小区</span>
                </div>
            </div>
            <!--房源列表结束-->
            <!--房源简介开始-->
            <div class="list-content clearfix">
                <div class="list-item clearfix">
                    <div class="list-left">
                        <a href="#">
                            <img src="../assets/img/housefirst.png" alt="">
                        </a>
                    </div>
                    <div class="list-center">
                        <div class="benefit">
                            <a href="#">
                                桥华世纪村嘉华园
                            </a>
                        </div>
                        <div class="introduce">
                            <span>桥华世纪村嘉华园</span>
                            | <span>0室0厅</span>
                            | <span>西</span>
                            | <span>380.00平</span>
                        </div>
                        <div class="built">
                            <span>中楼层</span>
                        </div>
                    </div>
                    <div class="list-right">
                        <div class="price">
                            <span style="font-size: 40px">400000</span>
                            元/月
                        </div>
                        <div class="update">
                            <span>2018-06-25</span>
                            更新
                        </div>
                        <div class="update">
                            浏览<span>5</span>
                            次
                        </div>
                        <a href="#" class="follow">关注</a>
                    </div>
                </div>
            </div>
            <!--房源简介结束-->
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
        name: "rentHouse",
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
                isShow:false,
                formData:{
                    r_id:[],
                    rent:[],
                    minPrice:[],
                    maxPrice:[],
                    bedroom:[],
                    decoration:[],
                    direction:[],
                    bulit_area:[],
                    minCustom_bulit_area:'',
                    maxCustom_bulit_area:'',
                    floor_type:[],
                    dianti:[],
                    style:[],
                    more:[]
                },
                fillData:{
                    rent:[
                        {
                            title:"1000以下",
                            id:'0-1000'
                        },
                        {
                            title:"1000-1500",
                            id:'1000-1500'
                        },
                        {
                            title:"1500-2500",
                            id:'1500-2500'
                        },
                        {
                            title:"2500-3500",
                            id:'2500-3500'
                        },
                        {
                            title:"3500-4500",
                            id:'3500-4500'
                        },
                        {
                            title:"4500-5500",
                            id:'4500-5500'
                        }
                    ],
                    bedroom:[
                        {
                            title:"1",
                            id:'1'
                        },
                        {
                            title:"2",
                            id:'2'
                        },
                        {
                            title:"3",
                            id:'3'
                        },
                        {
                            title:"4",
                            id:'4'
                        },
                    ],
                    decoration:[
                        {
                            title:"毛坯",
                            id:'1'
                        },
                        {
                            title:"简易装修",
                            id:'2'
                        },
                        {
                            title:"精装修",
                            id:'3'
                        },
                        {
                            title:"豪华装修",
                            id:'4'
                        },
                    ],
                    direction:[
                        {
                            title:"东",
                            id:'1'
                        },
                        {
                            title:"南",
                            id:'2'
                        },
                        {
                            title:"西",
                            id:'3'
                        },
                        {
                            title:"北",
                            id:'4'
                        },
                    ],
                    bulit_area:[
                        {
                            title:"50平以下",
                            id:'0-50'
                        },
                        {
                            title:"50-70平",
                            id:'50-70'
                        },
                        {
                            title:"70-90平",
                            id:'70-90'
                        },
                        {
                            title:"90平以上",
                            id:'90-9999'
                        },
                    ],
                    floor_type:[
                        {
                            title:"底层",
                            id:'1'
                        },
                        {
                            title:"低楼层",
                            id:'2'
                        },
                        {
                            title:"中层",
                            id:'3'
                        },
                        {
                            title:"中高层",
                            id:'4'
                        },
                    ],
                    dianti:[
                        {
                            title:"是",
                            id:'1'
                        },
                        {
                            title:"否",
                            id:'2'
                        },
                    ],
                    style:[
                        {
                            title:"整租",
                            id:'1'
                        },
                        {
                            title:"合租",
                            id:'2'
                        },
                    ],
                    more:[
                        {
                            title:"近地铁",
                            id:'1'
                        },
                        {
                            title:"精装修",
                            id:'2'
                        },
                        {
                            title:"有采暖",
                            id:'3'
                        },
                        {
                            title:"独立卫生间",
                            id:'4'
                        },
                        {
                            title:"有阳台",
                            id:'5'
                        },
                        {
                            title:"随时看房",
                            id:'6'
                        },
                    ],
                },
                isChecked:{
                    r_id:true,
                    rent:true,
                    bulit_area:true,
                    floor_type:true
                },
            }
        },
        methods:{
            handleShow(e){
                this.isShow =e;
            },
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
                    if (formData[arr]instanceof Array){
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
            }
        },
        created(){
            console.log(this.fillData2);
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
            getData(){

            }
        },
        directives:{
            trans:{
                inserted(el,biding,vnode){
                     let box = el.querySelector('#box')
                     let btn1 = el.querySelector('#btn1')
                     let btn2 = el.querySelector('#btn2')
                    btn1.onclick = function () {
                        console.log(1);
                        box.style.height = 'auto';
                        let startHetght = 0
                        let targetHeight = getComputedStyle(box).height;
                        box.style.height =startHetght;
                        box.offsetWidth;
                        box.style.height = targetHeight
                    }
                    btn2.onclick=function(){
                        console.log(2);
                        box.style.height = 0;
                    }

                }
            }
        }
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
        }
        .select-middle{
            .flex-box{
                transition: height ease .5s;
                overflow: hidden;
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
            .select-orientation{
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
                        margin: 0 0 20px 20px;
                        cursor: pointer;
                        float: left;
                        color: #999;
                    }
                }
            }
            .select-floor{
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
            .select-elevator{
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
            .select-way{
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
            .select-more{
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
                    margin-top: 20px;
                }
                .follow{
                    width: 100px;
                    height: 36px;
                    text-align: center;
                    line-height: 36px;
                    border: 1px solid #c30d23;
                    font-size: 16px;
                    color: #c30d23;
                    margin-top: 40px;
                    border-radius: 4px;
                    margin-left: 45px;
                    text-decoration: none;
                    display: inline-block;
                }
            }
        }
    }
}
</style>