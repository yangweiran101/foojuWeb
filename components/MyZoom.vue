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
        props:{
            url:{
                type:String
            }
        },
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
                        scale.style.display ='block';
                        rightBox.style.display = 'block'
                        leftBox.addEventListener('mousemove',mouseMove);
                        leftBox.addEventListener('mouseleave',mouseOut);
                    }
                    el._mouseIn = mouseIn;
                    function mouseMove(ev) {
                        ev = ev || event;
                        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                        mouseX = ev.clientX-el.offsetLeft;
                        mouseY = ev.clientY-el.offsetTop-leftBox.offsetTop + scrollTop;
                        let scaleLeft = 0;
                        let scaleTop = 0;

                        scale.style.top = mouseY - scale.offsetHeight/2 + "px";
                        if(mouseX > leftBox.offsetWidth - scale.offsetWidth/2){
                            scaleLeft = leftBox.offsetWidth - scale.offsetWidth;
                            scale.style.left = scaleLeft + "px";
                        }else if(mouseX < scale.offsetWidth/2){
                            scale.style.left = 0
                        } else{
                            scaleLeft = mouseX - scale.offsetWidth/2;
                            scale.style.left = scaleLeft + "px";
                        }

                        if(mouseY > leftBox.offsetHeight - scale.offsetHeight/2){
                            scaleTop =leftBox.offsetHeight - scale.offsetHeight;
                            scale.style.top = scaleTop + "px";
                        }else if(mouseY < scale.offsetHeight/2){
                            scaleTop = 0;
                            scale.style.top = scaleTop
                        }else{
                            scaleTop = mouseY - scale.offsetHeight/2;
                            scale.style.top = scaleTop + "px";
                        }

                        rightPic.style.transform = `translate(${-scaleLeft*2.5}px,${-scaleTop*2.5}px)`
                    }
                    function mouseOut() {
                        scale.style.display ='none';
                        rightBox.style.display = 'none';
                        leftBox.removeEventListener('mousemove',mouseMove)
                    }

                    leftBox.addEventListener('mouseenter',mouseIn)
                },
                unbind(el){
                    let leftBox = el.querySelector('._left-box');
                    leftBox.removeEventListener('mouseenter',el._mouseIn)
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
        display: none;
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
        display: none;
        img{
            width: 1480px;
            height: 1150px;
            display: block;
        }
    }
</style>