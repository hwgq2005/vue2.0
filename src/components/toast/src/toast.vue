<style lang="scss">
   .toast{
        position: fixed;
        padding: 10px;
        top:10%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        border-radius: 5px;
        background: rgba(0,0,0,.7);
        color: #fff;
        box-sizing: border-box;
        text-align: center;
        z-index: 99999;
        -webkit-transition: opacity .3s linear;
        transition: opacity .3s linear;
        &.toast-top{
            top:10%;
        }
        &.toast-middle{
            top:50%;
        }
        &.toast-bottom{
            bottom:5%;
        }

    }
</style>

<template>
  
  <div class="toast " :class="customClass" v-show="visible">
        {{message}}
  </div>

</template>

<script>
   
    module.exports = {
       
        props: [
            'message',
            'position',
            'visible'
        ],

        data:function(){
            return {
               
            }
        },
        mounted:function(){
            
        },
        methods: {
           
        },
        computed: {
          customClass:function(){
            var classes = [];
            if (this.position) {
                classes.push('toast-'+this.position);
            }
            return classes.join(' ');
          }
        }
    }


    
</script>