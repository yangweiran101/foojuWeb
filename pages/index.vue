<template>
    <div class="box">
        <vHeader></vHeader>
        <!--轮播图开始-->
        <div class="swipe">
            <el-carousel height="868px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="../assets/img/swipe.jpg" alt="" style="height: 868px;">
                </el-carousel-item>
            </el-carousel>
            <div class="swipe-face"></div>
            <!--搜索框开始-->
            <div class="banner">
                <div class="search">
                    <div class="search-tabs">
                        <div class="tab" :class="{active:selectTab==0}" @click="selectTab=0">找二手房</div>
                        <div class="tab" :class="{active:selectTab==1}" @click="selectTab=1">找新房</div>
                        <div class="tab" :class="{active:selectTab==2}" @click="selectTab=2">找租房</div>
                        <div class="tab" :class="{active:selectTab==3}" @click="selectTab=3">找学区房</div>
                        <div class="tab" :class="{active:selectTab==4}" @click="selectTab=4">找小区</div>
                    </div>
                    <div class="search-content">
                        <input type="text" :placeholder="placeholderText">
                        <span>搜索</span>
                        <a href="#">
                            <i class="iconfont icon-map_02" style="font-size: 25px"></i>
                            地图找房
                        </a>
                    </div>
                </div>
            </div>
            <!--搜索框结束-->
        </div>
        <!--轮播图结束-->
        <div class="content">
            <!--选项卡开始-->
            <div class="top-bar">
                <div class="top-btn">
                    <a href="/storesList">
                        <img src="../assets/img/store.png" alt="">
                        <div class="title">查门店</div>
                        <div class="text">查优质门店</div>
                    </a>
                </div>
                <div class="top-btn">
                    <a href="#">
                        <img src="../assets/img/entrust.png" alt="">
                        <div class="title">在线委托</div>
                        <div class="text">有问题我们帮你</div>
                    </a>
                </div>
                <div class="top-btn">
                    <a href="#">
                        <img src="../assets/img/mapBlue.png" alt="">
                        <div class="title">地图找房</div>
                        <div class="text">地图找房</div>
                    </a>
                </div>
                <div class="top-btn">
                    <a href="#">
                        <img src="../assets/img/encyclopedias.png" alt="">
                        <div class="title">福居百科</div>
                        <div class="text">看百科了解更多</div>
                    </a>
                </div>
            </div>
            <!--选项卡结束-->

            <!--房源开始-->
            <div class="con-bar">
                <div class="con-btn1">
                    <a href="#">
                        <img src="../assets/img/3.png" alt="">
                        <div class="text">真房源，假一赔百</div>
                    </a>
                </div>
                <div class="con-btn2">
                    <a href="#">
                        <img src="../assets/img/2.png" alt="">
                        <div class="text1">青城率先取消二手房贷款高额代办费</div>
                    </a>
                </div>
                <div class="con-btn3">
                    <a href="#">
                        <img src="../assets/img/1.png" alt="">
                        <div class="text">六大安全保障</div>
                    </a>
                </div>
            </div>
            <!--房源结束-->

            <!--精品新房开始-->
            <div class="newHouse">
                <div class="top">
                   <div class="title">
                        精品新房
                   </div>
                    <div class="moreInfo">
                        <a href="#">
                            更多新房
                            <i class="iconfont icon-qianjin"></i>
                        </a>
                    </div>
                </div>
                <div class="middle">
                    在这里为您寻觅一个新家
                </div>
                <div class="bottom">
                    <div class="new-btn" style="margin-right: 37px">
                        <div class="pic">
                            <a href="">
                                <img src="../assets/img/newhouse1.jpg" alt="">
                            </a>
                        </div>
                        <div class="new-tit">
                            <div class="new-left">呼和浩特伊利生态城</div>
                            <div class="new-right">2500元一平</div>
                        </div>
                    </div>
                    <div class="new-btn" style="margin-right: 37px">
                        <div class="pic">
                            <a href="">
                                <img src="../assets/img/newhouse2.jpg" alt="">
                            </a>
                        </div>
                        <div class="new-tit">
                            <div class="new-left">呼和浩特伊利生态城</div>
                            <div class="new-right">2500元一平</div>
                        </div>
                    </div>
                    <div class="new-btn">
                        <div class="pic">
                            <a href="">
                                <img src="../assets/img/newhouse3.jpg" alt="">
                            </a>
                        </div>
                        <div class="new-tit">
                            <div class="new-left">呼和浩特伊利生态城</div>
                            <div class="new-right">2500元一平</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--精品新房结束-->

            <!--二手优品开始-->
            <div class="oldHouse">
                <div class="top">
                    <div class="title">
                        二手优品
                    </div>
                    <div class="moreInfo">
                        <a href="#">
                            更多二手房
                            <i class="iconfont icon-qianjin"></i>
                        </a>
                    </div>
                </div>
                <div class="middle">
                    生活因为宽广，才会不断延伸
                </div>
                <div class="bottom">
                    <div class="new-btn" style="margin-right: 37px">
                        <div class="pic">
                            <a href="">
                                <img src="../assets/img/oldhouse1.png" alt="">
                            </a>
                        </div>
                        <div class="price">118万</div>
                        <div class="new-tit">
                            <div class="new-left">北辰新领地 三居 可按揭</div>
                            <div class="new-right">
                                <span>3室2厅2卫</span>
                                <span>128.80㎡</span>
                            </div>
                        </div>
                    </div>
                    <div class="new-btn" style="margin-right: 37px">
                        <div class="pic">
                            <a href="">
                                <img src="../assets/img/oldhouse2.png" alt="">
                            </a>
                        </div>
                        <div class="price">90万</div>
                        <div class="new-tit">
                            <div class="new-left">兴农小区 出售</div>
                            <div class="new-right">
                                <span>2室2厅2卫</span>
                                <span>83.80㎡</span>
                            </div>
                        </div>
                    </div>
                    <div class="new-btn">
                        <div class="pic">
                            <a href="">
                                <img src="../assets/img/oldhouse3.png" alt="">
                            </a>
                        </div>
                        <div class="price">198万</div>
                        <div class="new-tit">
                            <div class="new-left">纪委楼 豪华装 南北通透</div>
                            <div class="new-right">
                                <span>3室2厅1卫</span>
                                <span>117㎡</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--二手优品结束-->

            <!--精品租房开始-->
            <div class="rentHouse">
                <div class="top">
                    <div class="title">
                        精品租房
                    </div>
                    <div class="moreInfo">
                        <a href="#">
                            更多租房
                            <i class="iconfont icon-qianjin"></i>
                        </a>
                    </div>
                </div>
                <div class="middle">
                    与其等待，不如坐享豪华
                </div>
                <div class="bottom">
                    <div class="new-btn" style="margin-right: 37px">
                        <div class="pic">
                            <a href="">
                                <img src="../assets/img/renthouse1.png" alt="">
                            </a>
                        </div>
                        <div class="new-tit">
                            <div class="new-left">阳光馨苑小区 出售</div>
                            <div class="new-right">
                                <span>1室1厅1卫</span>&nbsp;&nbsp;
                                <span>48.80㎡</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                <span style="color: #c30d23;">1100元/月</span>
                            </div>
                        </div>
                    </div>
                    <div class="new-btn" style="margin-right: 37px">
                        <div class="pic">
                            <a href="">
                                <img src="../assets/img/renthouse2.png" alt="">
                            </a>
                        </div>
                        <div class="new-tit">
                            <div class="new-left">学府花园精装 出售</div>
                            <div class="new-right">
                                <span>3室2厅2卫</span>&nbsp;&nbsp;
                                <span>148㎡</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                <span style="color: #c30d23;">2500元/月</span>
                            </div>
                        </div>
                    </div>
                    <div class="new-btn">
                        <div class="pic">
                            <a href="">
                                <img src="../assets/img/renthouse3.png" alt="">
                            </a>
                        </div>
                        <div class="new-tit">
                            <div class="new-left">京能蓝色理想 精装修</div>
                            <div class="new-right">
                                <span>2室2厅1卫</span>&nbsp;&nbsp;
                                <span>97㎡</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                <span style="color: #c30d23;">2600元/月</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--精品租房结束-->
        </div>
        <vFooter></vFooter>
    </div>
</template>

<script>
    import vHeader from '~/components/Header.vue'
    import vFooter from '~/components/Footer.vue'
    export default {
        layout: 'newLayout',
        components:{
            vHeader,
            vFooter
        },
        data(){
            return{
                selectTab:0,
                placeholderText:"输入小区名查找二手房"
            }
        },
        watch:{
            selectTab(newValue){
                switch (newValue) {
                    case 0:this.placeholderText="输入小区名查找二手房";break;
                    case 1:this.placeholderText="输入楼盘名进行搜索";break;
                    case 2:this.placeholderText="输入小区名查找出租屋";break;
                    case 3:this.placeholderText="输入小区名查找学区风";break;
                    case 4:this.placeholderText="找小区输入小区名";break;


                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .box{
        width: 100%;
        .swipe{
            width: 100%;
            position: relative;
            .swipe-face{
                width: 100%;
                height: 100%;
                z-index: 50;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                background-color: rgba(0,0,0,.3);
            }
            .banner{
                width: 1100px;
                position: absolute;
                bottom: 10px;
                left: 50%;
                margin-left: -550px;
                z-index: 100;
                .active{font-weight: 700}
                .search{
                    width: 1100px;
                    .search-tabs{
                        width: 1100px;
                        height: 48px;
                        font-size: 16px;
                        color: #fff;
                        position: relative;
                        .tab{
                            padding-bottom: 30px;
                            position: relative;
                            margin-right: 30px;
                            cursor: pointer;
                            float: left;

                        }
                        .tab:hover{
                            font-weight: 700;
                        }
                        .active:after{
                            content: "";
                            display: block;
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            border: 10px solid transparent;
                            border-bottom: 10px solid #fff;
                        }
                    }
                }
                .search-content{
                    position: relative;
                    float: left;
                    input{
                        width: 740px;
                        height: 60px;
                        margin-bottom: 70px;
                        font-size: 20px;
                        padding: 0 0 0 10px;
                        border: none;
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
                    }
                    a{
                        width: 160px;
                        height: 60px;
                        margin-left: 10px;
                        display: inline-block;
                        vertical-align: top;
                        text-align: center;
                        line-height: 60px;
                        cursor: pointer;
                        background-color: #5f1985;
                        color: #fff;
                        text-decoration: none;
                    }
                }
            }
        }
    }

    .content{
        width: 1100px;
        margin: 0 auto;
    .top-bar{
        width: 100%;
        margin: 40px 0;
        display: table;
        .top-btn{
            display: table-cell;
            text-align: center;
            width: 25%;
            padding: 0 40px;
            box-sizing: border-box;
            a{
                text-align: center;
                text-decoration: none;
                img{
                    height: 90px;
                }
                .title{
                    font-size: 20px;
                    margin: 20px auto 10px;
                    color: #333;
                }
                .text{
                    font-size: 14px;
                    color: #666;
                }
            }
        }
    }
    .con-bar{
        width: 100%;
        margin: 40px auto;
        display: table;
        .con-btn1{
            display: table-cell;
            width: 300px;
            position: relative;
            float: left;
        }
        .con-btn2{
            display: table-cell;
            width: 300px;
            float: left;
            padding-left: 100px;
            position: relative;

        }
        .con-btn3{
            display: table-cell;
            width: 300px;
            position: relative;
            float: right;
        }
        .text{
            position: absolute;
            top: 140px;
            left: 50%;
            width: 220px;
            color: #fff;
            font-size: 24px;
            text-align: center;
            margin-left: -110px;
        }
        .text1{
            position: absolute;
            top: 140px;
            left: 50%;
            width: 220px;
            color: #fff;
            font-size: 24px;
            text-align: center;
            margin-left: -60px;
        }
    }
    .newHouse{
        width: 100%;
        margin-bottom: 40px;
        .top{
            margin-bottom: 20px;
            height: 35px;
            .title{
                font-size: 30px;
                font-weight: bolder;
                color: #333;
                float: left;
            }
            .moreInfo{
                float: right;
                a{
                    font-size: 16px;
                    color: #999;
                    text-decoration: none;
                }
            }
        }
        .middle{
            margin-bottom: 40px;
            color: #666;
        }
        .bottom{
            height:257px;
          .new-btn{
              position: relative;
              float: left;
              .pic{
                  width: 342px;
                  height: 257px;
                  overflow: hidden;position: relative;
                  img{
                      width: 342px;
                      height: 257px;
                  }
              }
              .new-tit{
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  width: 100%;
                  color: #ffffff;
                  box-sizing: border-box;
                  padding: 5px 10px;
                  font-size: 16px;
                  background: rgba(0,0,0,.5);
                  .new-left{
                      float: left;
                  }
                  .new-right{
                      float: right;
                  }
              }
          }
        }
    }
    .oldHouse{
        width: 100%;
        margin-bottom: 40px;
        .top{
            margin-bottom: 20px;
            height: 35px;
            .title{
                font-size: 30px;
                font-weight: bolder;
                color: #333;
                float: left;
            }
            .moreInfo{
                float: right;
                a{
                    font-size: 16px;
                    color: #999;
                    text-decoration: none;
                }
            }
        }
        .middle{
            margin-bottom: 40px;
            color: #666;
        }
        .bottom{
            height:349px;
            .new-btn{
                position: relative;
                float: left;
                .pic{
                    width: 342px;
                    height: 257px;
                    overflow: hidden;position: relative;
                    img{
                        width: 342px;
                        height: 257px;
                    }
                }
                .price{
                    position: absolute;
                    left: 0;
                    top: 10px;
                    z-index: 2;
                    width: 70px;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 20px 0 10px;
                    background: url("../assets/img/pricetag.png") no-repeat;
                    font-size: 20px;
                    color: #fff;
                }
                .new-tit{
                   .new-left{
                       font-size: 20px;
                       color: #333;
                       margin: 20px 0;
                   }
                    .new-right{
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .rentHouse{
        width: 100%;
        margin-bottom: 40px;
        .top{
            margin-bottom: 20px;
            height: 35px;
            .title{
                font-size: 30px;
                font-weight: bolder;
                color: #333;
                float: left;
            }
            .moreInfo{
                float: right;
                a{
                    font-size: 16px;
                    color: #999;
                    text-decoration: none;
                }
            }
        }
        .middle{
            margin-bottom: 40px;
            color: #666;
        }
        .bottom{
            height:349px;
            .new-btn{
                position: relative;
                float: left;
                .pic{
                    width: 342px;
                    height: 257px;
                    overflow: hidden;position: relative;
                    img{
                        width: 342px;
                        height: 257px;
                    }
                }
                .new-tit{
                    .new-left{
                        font-size: 20px;
                        color: #333;
                        margin: 20px 0;
                    }
                    .new-right{
                        font-size: 14px;
                    }
                }
            }
        }
    }
    }
</style>
