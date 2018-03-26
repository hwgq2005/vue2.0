<style lang="sass">
  $color:#777;
  .nav{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    max-width:640px;
    height: 48px;
    margin:0 auto;
    background: #FDFDFD;
    text-align: center;
    border-top:1px solid #F5F4F4;
    z-index: 999;
    ul{
      display: flex ;
      li{
        flex: 1;
        a{
          display: block;
          padding:4px 0;
          color:#666;
          font-size: 12px;
          line-height: 18px;
          &:hover{
            color:#699FE1;
          }
          &.active{
            color:#699FE1;
          }
          .icon{
            font-size: 2rem;
          }
          span{
              display: block;
          }
        }
       
      }
    }
  }
</style>

<template>
  
  <nav class="nav"  >
    <ul>
      <li >
        <router-link to="/" :class="{'active':currentRoute == '/'}" ><i class="icon icon-compose"></i><span>任务</span></router-link>
      </li>
      <li >
        <router-link to="/user" :class="{'active':currentRoute == '/user'}"><i class="icon icon-gear"></i><span>我</span></router-link>
      </li>
     </ul>
  </nav>

</template>

<script>
   
    module.exports = {
      
        // 加载之前
        created:function(){
           
           this.currentRouteFun();

        },
        mounted:function(){
           
        },
        data:function(){
            return {
                currentRoute: this.$route.path
            }
        },
       
        // 监听事件
        watch:{
            '$route': function($router){
                this.currentRouteFun();
               
            }
        },
        methods: {
            currentRouteFun:function(event){
                var self = this;
                this.currentRoute = this.$route.path;
            }

        }
    }


    
</script>