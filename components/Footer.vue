<template>
    <div class="box">
        <div class="link-box">
            <div class="link">
                <div class="title">友情链接</div>
                <div class="linklist">
                    <a href="">福居网资讯</a>
                    <a href="">呼和浩特去114</a>
                    <a href="">包头房产网</a>
                    <a href="">天堂草原音乐网</a>
                </div>
            </div>
        </div>
        <div class="foot">
            <div class="about">
                <a href="#">关于我们</a>
                <a href="#">联系方式</a>
                <a href="#">隐私声明</a>
                <a href="#">版权声明</a>
                <a href="#">法律保障</a>
            </div>
            <div class="tip">
                温馨提示：呼和浩特房地产网最新购房信息请及时查看呼和浩特房地产业网官方网站【福居网】
            </div>
            <div class="tip">
                地 址： 呼和浩特市赛罕区恩和大厦1909室 电 话:400-898-1018
            </div>
            <div class="tip">
                北京福居网网络科技有限公司 Copyright © 2013-2017 FOOJU Corporation,
                All Rights Reserved 福居网 版权所有|
                <span>京ICP备13012924号-1</span>
            </div>
            <div class="check">
                <a href="#"><img src="../assets/img/u1081.png" alt=""></a>
                <a href="#"><img src="../assets/img/u1083.png" alt=""></a>
                <a href="#"><img src="../assets/img/u1087.png" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    .link-box {
        background-color: #f4f4f4;
    }
    .link {
        width: 1100px;
        height: 91.2px;
        margin: 0 auto;
        padding: 60px 0;
        .title {
            font-size: 30px;
            font-weight: bolder;
            margin-bottom: 30px;
        }
        .linklist {
            display: block;
            a {
                display: inline-block;
                width: 122px;
                font-size: 14px;
                color: #999;
                margin-bottom: 14px;
                text-decoration: none;
            }
        }
    }
    .foot {
        background: url('/imgs/footerBg.png');
        height: 444px;
        padding-top: 60px;
        box-sizing: border-box;
        .about {
            width: 100%;
            text-align: center;
            margin-bottom: 30px;
            font-size: 16px;
            a {
                color: #fff;
                width: 100%;
                text-align: center;
                margin-bottom: 30px;
                padding: 0 50px;
                text-decoration: none;
            }
        }
        .tip{
            width: 100%;
            text-align: center;
            margin-bottom: 30px;
            color: #fff;
            font-size: 16px;
        }
        .check{
            width: 100%;
            margin: 70px auto 30px;
            text-align: center;
            a{
                padding: 0 8px ;
            }
        }
    }


</style>