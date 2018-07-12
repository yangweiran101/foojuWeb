<template>
    <div class="box">
        <Header style="border-bottom: 1px solid #ccc"></Header>
        <div class="content">
            <div class="content-top">
                <span>福居网</span>
                <span>> </span>
                <span>找门店</span>
            </div>
            <!--搜索框开始-->
            <div class="content-search">
                <input type="text" placeholder="搜索">
                <span>搜索</span>
                <a href="#">
                    <i class="iconfont icon-map_02" style="font-size: 25px"></i>
                    地图找房
                </a>
            </div>
            <!--搜素框结束-->

            <div class="benefit">
                 <span>出售 家河公寓</span>
            </div>
            <!--放大镜开始-->
            <MyZoom></MyZoom>
            <!--放大镜结束-->


        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'
    import MyZoom from '~/components/MyZoom.vue'
    // import axios from '~/plugins/axios'
    // import api from '~/mainApi/index'
    export default {
        name: "retalDetail",
        components:{
            Header,
            Footer,
            MyZoom
        }
    }
</script>

<style scoped lang="scss">
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
        .benefit{
            font-size: 30px;
            margin-top: 36px;
        }


    }
</style>