<template>
    <div class="box">
        <div class="header">
            <div class="head">
                <a href="#" class="left"><img src="../assets/img/logo.png" alt=""></a>
                <a href="/" class="right">
                    返回福局网首页
                    <img src="../assets/img/u44.png" alt="">
                </a>
            </div>
        </div>
        <div class="content">
            <div class="middle">
                <div class="one clearfix">
                    <span>创建账号</span>
                    <a href="#">已有账号，立即登录</a>
                </div>
                <form class="register clearfix">
                    <div class="two clearfix">
                                <i class="iconfont icon-iphone-copy"></i>
                                <input type="text" placeholder="请输入手机号" name="mobile" id="phone">
                            </div>
                    <div class="three clearfix">
                        <i class="iconfont icon-mima"></i>
                        <input type="text" placeholder="请输入短信验证码" name="msg" id="msg">
                        <button type="button" class="obtain-msg" disabled="disabled">获取验证码</button>
                    </div>
                    <div class="four clearfix">
                        <form action="">
                            <div class="phone-number">
                                <i class="iconfont icon-mima"></i>
                                <input type="password" placeholder="请输入6—18位密码" name="pwd" id="pwd">
                            </div>
                        </form>
                    </div>
                    <div class="five clearfix">
                        <form action="">
                            <div class="phone-number">
                                <i class="iconfont icon-tianxie"></i>
                                <input type="text" placeholder="请输入昵称" name="name" id="name">
                            </div>
                        </form>
                    </div>
                    <input type="button" value="立即注册" id="btn">
                </form>
                <div class="six clearfix">
                    <span>点击立即注册，则表示您阅读并同意遵守</span>
                    <a href="#">福居网平台服务协议</a>
                </div>
            </div>
            <div class="footer">
                <span>北京福居网网络科技有限公司</span>
                |
                <span>Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有</span>
                |
                <span>京ICP备13012924号-1</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
    }
</script>

<style scoped lang="scss">
    .box{
        background-color: rgb(242, 242, 242);
        height: 976px;
    }
    .header {
        width: 100%;
        height: 80px;
        background-color: #fff;
        .head {
            width: 1100px;
            height: 80px;
            margin: 0 auto;
            .left {
                float: left;
                margin-top: 20px;
            }
            .right {
                float: right;
                height: 80px;
                line-height: 80px;
                text-decoration: none;
                font-size: 14px;
                color: #666;
                img {
                    vertical-align: middle;
                }
            }
        }
    }

    .content {
        clear: both;
        margin: 30px auto;
        width: 1100px;
        .middle{
            width: 360px;
            height: 478.2px;
            padding: 40px 130px;
            margin: 0 auto;
            background-color: #fff;
            .one{
                span{
                    font-size: 28px;
                    color: #666;
                    float: left;
                }
                a{
                    float: right;
                    font-size: 14px;
                    color: #f90;
                    text-decoration: none;
                    margin-top: 16px;
                }
            }
            .two{
                margin-top: 35px;
                position: relative;
                i{
                    position: absolute;
                    top: 17px;
                    left: 50%;
                    font-size: 20px;
                    margin-left: -172px;
                    color: #aeaeae;
                }
                #phone{
                    width: 328px;
                    height: 50px;
                    border: 1px solid #ccc;
                    padding-left: 30px;
                    font-size: 20px;
                }
            }
            .three{
                position: relative;
                margin-top: 20px;
                i{
                    position: absolute;
                    font-size: 20px;
                    top:17px;
                    left: 50%;
                    margin-left: -172px;
                    color: #aeaeae;
                }
                #msg{
                    width: 206px;
                    height: 50px;
                    border: 1px solid #ccc;
                    padding-left: 30px;
                    font-size: 20px;
                    float: left;
                }
                button{
                    width: 110px;
                    height: 54px;
                    border:1px solid #ccc;
                    background:0 0;
                    font-size: 14px;
                    float: right;
                    cursor: pointer;
                }
            }
            .four{
                clear: both;
                .phone-number{
                    margin-top: 20px;
                    position: relative;
                    i{
                        position: absolute;
                        top: 17px;
                        left: 50%;
                        font-size: 20px;
                        margin-left: -172px;
                        color: #aeaeae;
                    }
                    #pwd{
                        width: 328px;
                        height: 50px;
                        border: 1px solid #ccc;
                        padding-left: 30px;
                        font-size: 20px;
                    }
                }

            }
            .five{
                clear: both;
                .phone-number{
                    margin-top: 20px;
                    position: relative;
                    i{
                        position: absolute;
                        top: 17px;
                        left: 50%;
                        font-size: 20px;
                        margin-left: -172px;
                        color: #aeaeae;
                    }
                    #name{
                        width: 328px;
                        height: 50px;
                        border: 1px solid #ccc;
                        padding-left: 30px;
                        font-size: 20px;
                    }
                }

            }
            #btn{
                width: 360px;
                background: #c30d23;
                color: #fff;
                text-align: center;
                height: 50px;
                line-height: 50px;
                margin-top: 20px;
                border: none;
                cursor: pointer;
                font-size: 20px;
            }
            .six{
                font-size: 13px;
                color: #666;
                margin-top: 30px;
                span{
                    float: left;
                }
                a{
                    font-weight: 700;
                    color: #000;
                    text-decoration: none;
                    float: left;
                }
            }
        }
        .footer{
            font-size: 14px;
            color: #666;
            text-align: center;
            margin-top: 50px;
        }
    }
</style>