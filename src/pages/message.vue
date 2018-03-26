
<style>
  .app-msg{
      
      padding-bottom: 60px;
  }
  .table-view{
      background: #fff;
  }
  .banner-box,
  .banner-view{
    height: 150px;
  }
  .banner-view{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>

<template>
    
    <div class="app-msg">
        <header class="header-box" >
          <div class="header-content">
              <a href="#/" class="header-icon return-btn"><i class="icon icon-left-nav"></i></a>
              <h1>{{title}}</h1>
          </div>
        </header>
        <div class="banner-box">
          <mt-swipe :auto="4000" :defaultIndex="0" @change="handleChange">
            <mt-swipe-item>
              <div class="banner-view" style="background-image:url(src/assets/images/user-img.jpg)"></div>
            </mt-swipe-item>
            <mt-swipe-item>
              <div class="banner-view" style="background-image:url(src/assets/images/user-img.jpg)"></div>
            </mt-swipe-item>
            <mt-swipe-item>
              <div class="banner-view" style="background-image:url(src/assets/images/user-img.jpg)"></div>
            </mt-swipe-item>
         
          </mt-swipe>
        </div>
        <ul class="table-view table-view-one">
          <li class="table-view-cell table-view-hover">
              <div class="media-object pull-left">
                <a href="#" class="media-view label-primary" >Hbook</a>
              </div>
              <div class="media-body">
                <div class="media-tit">
                    标题一
                </div>
                <div class="media-sum"> 欢迎来到Hbook！</div>
              </div>
          </li>
          <li class="table-view-cell table-view-hover">
              <div class="media-object pull-left">
                <a href="#" class="media-view label-primary" >Hbook</a>
              </div>
              <div class="media-body">
                <div class="media-tit">
                    标题一
                </div>
                <div class="media-sum"> 欢迎来到Hbook！</div>
              </div>
          </li>
          <li class="table-view-cell table-view-hover">
              <div class="media-object pull-left">
                <a href="#" class="media-view label-primary" >Hbook</a>
              </div>
              <div class="media-body">
                <div class="media-tit">
                    标题一
                </div>
                <div class="media-sum"> 欢迎来到Hbook！</div>
              </div>
          </li>
          <li class="table-view-cell table-view-hover">
              <div class="media-object pull-left">
                <a href="#" class="media-view label-primary" >Hbook</a>
              </div>
              <div class="media-body">
                <div class="media-tit">
                    标题一
                </div>
                <div class="media-sum"> 欢迎来到Hbook！</div>
              </div>
          </li>
          <li class="table-view-cell table-view-hover">
              <div class="media-object pull-left">
                <a href="#" class="media-view label-primary" >Hbook</a>
              </div>
              <div class="media-body">
                <div class="media-tit">
                    标题一
                </div>
                <div class="media-sum"> 欢迎来到Hbook！</div>
              </div>
          </li>
        </ul>
    
    </div>
    
</template>


<script>

    var Swipe = require('mint-ui').Swipe,
        SwipeItem = require('mint-ui').SwipeItem ;

    module.exports = {
     
      
        mounted:function(){
            this.$root.loader = false;
        },

        data:function(){
            return {
              title:'消息'
            }
        },
        
        methods: {
            handleChange:function(index) {
              
            }
        }
    }



</script>