<template>
    <div class="box">
        <Header></Header>
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
            <div class="select">
                <div class="content-select">
                    <!--区域开始-->
                    <div class="select-address clearfix">
                        <span>区域</span>
                        <el-checkbox-group fill="#c30d23" text-color="#c30d23" v-model="checkList" class="select-items">
                            <el-checkbox label="不限" class="item"></el-checkbox>
                            <el-checkbox label="金桥开发区" class="item"></el-checkbox>
                            <el-checkbox label="如意开发区" class="item"></el-checkbox>
                            <el-checkbox label="玉泉区" class="item"></el-checkbox>
                            <el-checkbox label="回民区" class="item"></el-checkbox>
                            <el-checkbox label="赛罕区" class="item"></el-checkbox>
                            <el-checkbox label="新城区" class="item"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <!--区域结束-->
                    <!--均价开始-->
                    <div class="select-price clearfix">
                        <span>均价</span>
                        <el-checkbox-group fill="#c30d23" text-color="#c30d23" v-model="checkList" class="select-items">
                            <el-checkbox label="不限" class="item"></el-checkbox>
                            <el-checkbox label="3000以下" class="item"></el-checkbox>
                            <el-checkbox label="3000-5000" class="item"></el-checkbox>
                            <el-checkbox label="5000-7000" class="item"></el-checkbox>
                            <el-checkbox label="7000-9000" class="item"></el-checkbox>
                            <el-checkbox label="9000-10000" class="item"></el-checkbox>
                            <el-checkbox label="10000以上" class="item"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="select-priceinput clearfix">
                        <input type="text" class="price-input">
                        <b>&nbsp;-&nbsp;</b>
                        <input type="text" class="price-input">元
                        <div class="price-btn">
                            确定
                        </div>
                    </div>
                    <!--均价结束-->
                    <!--类型开始-->
                    <div class="select-class clearfix">
                        <span>类型</span>
                        <el-checkbox-group fill="#c30d23" text-color="#c30d23" v-model="checkList" class="select-items">
                            <el-checkbox label="板楼" class="item"></el-checkbox>
                            <el-checkbox label="塔楼" class="item"></el-checkbox>
                            <el-checkbox label="板塔结合" class="item"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <!--类型结束-->
                    <!--用途开始-->
                    <div class="select-use clearfix">
                        <span>用途</span>
                        <el-checkbox-group fill="#c30d23" text-color="#c30d23" v-model="checkList" class="select-items">
                            <el-checkbox label="普通住宅" class="item"></el-checkbox>
                            <el-checkbox label="写字楼" class="item"></el-checkbox>
                            <el-checkbox label="商住两用" class="item"></el-checkbox>
                            <el-checkbox label="商铺" class="item"></el-checkbox>
                            <el-checkbox label="厂房" class="item"></el-checkbox>
                            <el-checkbox label="公寓" class="item"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <!--用途结束-->
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
                    <span>在租房源</span>
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
    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'
    export default {
        name: "village",
        components:{
            Header,
            Footer
        },
        data () {
            return {
                checkList: []
            };
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
            .select-class{
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
            .select-use{
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