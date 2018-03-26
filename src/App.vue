<style lang="scss" >
  @import 'assets/css/reset.css';
  @import 'assets/css/ratchet/css/ratchet.css';
  @import 'assets/css/app.css';

</style>

<template>
  <div class="app">
    <router-view></router-view>
    <m-nav ref="nav" v-if="isNav" ></m-nav>
  </div>   
</template>

<script>
    export default {
        data(){
            return {
            }
        },

        // 加载之前
        created:function(){
           
            this.viewChange();

        },
        // 加载之后
        mounted:function(){
          
        },

        // 监听事件
        watch:{
            '$route': function($router){
                this.viewChange(this);
            }
        },

        // 方法
        methods: {
            
            viewChange:function(){
                if (this.$route.path == '/login' || this.$route.path == '/register') {
                    this.isNav = false;
                }else{
                    this.isNav = true;
                }

            }
        }

    }
</script>