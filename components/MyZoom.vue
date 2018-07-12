<template>
    <div class="main" v-scale>
        <div class="left-box _left-box">
            <img src="../assets/img/detail.png">
            <div class="scale _scale">

            </div>
        </div>

        <div class="right-box _right-box">
            <img src="../assets/img/detail.png" class="_right-pic">
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyZoom",
        directives:{
            scale:{
                inserted(el,binding,vnode){
                    let leftBox = el.querySelector('._left-box');
                    let rightBox = el.querySelector('._right-box');
                    let rightPic = el.querySelector('._right-pic');
                    let scale = el.querySelector('._scale');
                    let mouseX = 0;
                    let mouseY = 0

                    function mouseIn(ev) {
                        scale.style.display ='none';
                        leftBox.addEventListener('mousemove',mouseMove);
                        leftBox.addEventListener('mouseleave',mouseOut);
                    }
                    function mouseMove(ev) {
                        ev = ev || event;
                        mouseX = ev.clientX-el.offsetLeft;
                        mouseY = ev.clientY-el.offsetTop-leftBox.offsetTop;
                    }
                    function mouseOut() {
                        scale.style.display ='none';
                        leftBox.removeEventListener('mousemove',mouseMove)
                    }

                    leftBox.addEventListener('mouseenter',mouseIn)
                },
                unbind(){

                }

            }
        }
    }
</script>

<style lang="scss">
    .main{
        margin: 0;
        padding: 0;
        position: relative;
        height: 100vh;
    }
    .left-box{
        position: absolute;
        left: 0;
        top: 10px;
        width: 592px;
        height: 442px;
        img{
            width: 592px;
            height: 442px;
            display: block;
        }
    }
    .scale{
        width: 237px;
        height: 217px;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(255,0,0,.3);
    }
    .right-box{
        position: absolute;
        left: 600px;
        top: 10px;
        width: 592px;
        height: 542px;
        overflow: hidden;
        border: 1px solid #000;
        img{
            width: 1480px;
            height: 1150px;
            display: block;
        }
    }
</style>