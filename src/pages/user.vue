<style lang="sass" >
    @import '../assets/css/page/user.css';

</style>

<template>

    <div class="user">
        <div class="user-show" >
            <div class="user-img"  :style="{backgroundImage: 'url('+img+')'}"></div>
            <div class="login-status">
                <!-- <strong>Hwgq2005</strong> -->
                <a href="#/login">登录</a>
                <span>/</span>
                <a href="#/register">注册</a>
            </div>
            <!-- <div class="user-show-bg" ></div> -->
        </div>

        <div class="user-header module">
            <div class="user-list">
                <a  class="link" bindtap="linkRoute" data-name="user-order"  data-state=" ">
                    我的订单
                    <span class="more">查看全部</span>
                </a>
            </div>
            <ul class="user-list-state">
                <li>
                    <a  class="link" bindtap="linkRoute" data-name="user-order" data-state="0">
                        <img class="icon" src="../assets/images/icon/order_unpay_blue.png" alt="">
                        <span>待付款</span>
                        <strong class="num" >11</strong>
                    </a >
                </li>
                <li>
                    <a  class="link" bindtap="linkRoute" data-name="user-order" data-state="1">
                        <img class="icon" src="../assets/images/icon/order_payed_blue.png" alt="">
                        <span>待发货</span>
                        <strong class="num" >1</strong>
                    </a>
                </li>
                <li>
                    <a  class="link" bindtap="linkRoute" data-name="user-order" data-state="2">
                        <img class="icon" src="../assets/images/icon/order_deliver_blue.png" alt="">
                        <span>待收货</span>
                        <strong class="num" >1</strong>
                    </a>
                </li>
                <li>
                    <a  class="link" bindtap="linkRoute" data-name="user-order" data-state="4">
                        <img class="icon" src="../assets/images/icon/order_complete_blue.png" alt="">
                        <span>已完成</span>
                        <strong class="num" >1</strong>
                    </a>
                </li>
            </ul>
        </div>

        <div class="user-nav module">
            <ul>
                <li>
                    <a href="javascript:;">
                        <div class="user-nav-tit">
                            <img class="icon" src="../assets/images/icon/adrress.png" alt="">
                            <span>地址管理</span>
                            <i class="icon icon-right-nav arrow"></i>
                        </div>
                    </a>
                </li>
             <!--    <li>
                    <a href="javascript:;">
                        <div class="user-nav-tit">
                            <img class="icon" src="../assets/images/icon/collection.png" alt="">
                            <span>我的收藏</span>
                            <i class="icon icon-right-nav arrow"></i>
                        </div>
                    </a>
                </li> -->
            </ul>
            <ul>
                <li>
                    <a href="javascript:;">
                        <div class="user-nav-tit">
                            <img class="icon" src="../assets/images/icon/advice.png" alt="">
                            <span>意见反馈</span>
                            <i class="icon icon-right-nav arrow"></i>
                        </div>
                    </a>
                </li>
              <!--   <li>
                    <a href="javascript:;">
                        <div class="user-nav-tit">
                            <img class="icon" src="../assets/images/icon/help.png" alt="">
                            <span>帮助中心</span>
                            <i class="icon icon-right-nav arrow"></i>
                        </div>
                    </a>
                </li> -->
                <li>
                    <a href="javascript:;">
                        <div class="user-nav-tit">
                            <img class="icon" src="../assets/images/icon/service.png" alt="">
                            <span>客服电话</span>
                            <i class="icon icon-right-nav arrow"></i>
                        </div>
                    </a>
                </li>
               <!--  <li>
                    <a href="javascript:;">
                        <div class="user-nav-tit">
                            <img class="icon" src="../assets/images/icon/setting.png" alt="">
                            <span>设置</span>
                            <i class="icon icon-right-nav arrow"></i>
                        </div>
                    </a>
                </li> -->
            </ul>
        </div>
    </div>

</template>

<script>


    module.exports = {

         // 加载之前
        created:function(){
           

        },

        mounted: function(){
           
        },
        data:function(){
            return {
                img:require('../assets/images/user-img.jpg')
            }
        },
        methods: {
            
        }

    }
</script>