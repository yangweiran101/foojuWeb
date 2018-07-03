<template>
    <div class="box clearfix">
        <div class="top">
            <span class="login">
                <a href="" class="log">请登录</a>
            </span>
            <span class="resister">
                <a href="/register" class="log">立即注册</a>
            </span>
        </div>
        <div class="title">
            <div class="logo">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="select">
                <span class="city">
                呼和浩特
                <i class="iconfont icon-jiantouxia"></i>
            </span>
            </div>
            <div class="tabbar">
                <span class="item">
                    <a class="link" href="/" >首页</a>
                </span>
                <span class="item">
                    <a  class="link"href="" >二手房</a>
                </span>
                <span class="item">
                    <a class="link" href="" >新房</a>
                </span>
                <span class="item">
                    <a class="link" href="/rentHouse" >租房</a>
                </span>
                <span class="item">
                    <a class="link" href="" >学区房</a>
                </span>
                <span class="item">
                    <a class="link" href="/village" >小区</a>
                </span>
                <span class="item">
                    <a class="link" href="/broker" >经纪人</a>
                </span>
                <span class="item">
                    <a class="link" href="" >百科</a>
                </span>
                <span class="item sel-item">
                    <a href="" class="link">在线委托</a>
                    <div class="sel-item-none">
                        <div class="one">
                            <a href="" >我是业主</a>
                        </div>
                        <div class="two">
                            <a  href="" >帮我找房</a>
                        </div>
                    </div>
                </span>
                <span class="item" >
                    <a href="" class="link">工具</a>
                </span>
                <span class="item" >
                    <a href="" class="link">专题</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    // import register from  '../pages/register'
    export default {
        name: "Header",

    }
</script>

<style scoped lang="scss">
    .box{
        width: 100%;
        .top{
            width: 1100px;
            height: 17.07px;
            font-size: 12px;
            text-align: right;
            margin: 0 auto;
            padding: 15px 0 5px 0;
            .login{
                padding: 0 10px;
                border-right: #000 1px solid;
            }
            .resister{padding: 10px;}
            .log{text-decoration: none;}
        }
    }
    .title{
        width: 1100px;
        height: 70.13px;
        margin: 0 auto;
        position: relative;
        .logo{
            width: 128px;
            height: 43px;
            display: inline-block;
            margin-top: 17px;
            position: absolute;
            left: 0;
        }
        .select{
            display: inline-block;
            padding-top: 24px;
            float: left;
            position: absolute;
            left: 128px;
            .city{
                font-size: 16px;
                margin: auto 20px;
                padding: 4px 10px;
                border: 1px solid #999;
                border-radius: 15px;
                color: #333;
            }
        }
    }
    .tabbar{
        display: inline-block;
        padding-top: 20px;
        float: right;
        .item{
            padding-left: 30px;
            font-size: 16px;
            position: relative;
            .sel-item-none{
                position:absolute;
                width: 100%;
                top: 100%;
                left: 0;
                display: none;
                z-index: 9999;
                .one{
                    padding: 10px 0 5px;
                    cursor: pointer;
                    margin-right: -30px;
                    text-align: center;
                    background-color: #fff;
                }
                .two{
                    padding: 10px 0 5px;
                    cursor: pointer;
                    margin-right: -30px;
                    text-align: center;
                    background-color: #fff;
                }
                a{
                    text-decoration: none;
                    color: black;
                }
                a:hover{
                    color: #c30d23;
                    padding: 10px auto 20px;
                }
            }

        }
        .sel-item:hover{
             div{
                 display: block;
                 z-index: 9999;
             }
         }
    }
.link{
    text-decoration: none;
    width: 32px;
    height: 18px;
    padding: 10px 0 20px 0;
}
.link:hover{
    color: #c30d23;
    padding: 10px auto 20px;
    border-bottom: 2px solid #c30d23;
}


</style>