<style lang="scss">
   .loader-box {
      position: fixed;
      top: 50%;
      left: 50%;
      margin-top: -30px;
      margin-left: -30px;
      z-index: 999;

    }
    .loader {
      width: 60px;
      height: 60px;
      line-height: 60px;
      border-radius: 2px;
      background: rgba(0, 0, 0, 0.7);
      box-sizing: border-box;
    }
    .ball-pulse {
      text-align: center;
    }
    .ball-pulse > div:nth-child(1) {
      -webkit-animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }
    .ball-pulse > div:nth-child(2) {
      -webkit-animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }
    .ball-pulse > div:nth-child(3) {
      -webkit-animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }
    .ball-pulse > div {
      background-color: #fff;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      margin: 2px;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      display: inline-block;
    }
    @-webkit-keyframes scale {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
      }
      45% {
        -webkit-transform: scale(0.1);
        transform: scale(0.1);
        opacity: 0.7;
      }
      80% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
      }
    }
    @keyframes scale {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
      }
      45% {
        -webkit-transform: scale(0.1);
        transform: scale(0.1);
        opacity: 0.7;
      }
      80% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
      }
    }
</style>

<template>
  
  <div class="loader-box">
    <div class="loader">
      <div class="ball-pulse">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>

</template>

<script>
   
    module.exports = {
       
        name:'loader',

        data:function(){
            return {
               
            }
        },
        mounted:function(){
            
        },
        methods: {
           
        }
    }


    
</script>