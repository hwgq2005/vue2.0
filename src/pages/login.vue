
<template>
    
  <div class="login-box">
      <header class="header-box" >
        <div class="header-content">
            <a href="#/" class="header-icon return-btn"><i class="icon icon-left-nav"></i></a>
            <h1>{{title}}</h1>
        </div>
      </header>
     
      <form class="form-horizontal" >
        <div class=" ">
           <input type="text"  placeholder="手机" id="user" v-model="username"   >
        </div>
        <div class="">
           <input type="password" placeholder="密码"  id="pass" v-model="password">
        </div>
      </form>

      <div class="btn-group">
          <a href="javascript:;" class="btn btn-primary btn-block " @click="handleSubmit()" >{{title}}</a>
      </div>

      <a href="#/register" class="operation-btn" >注册</a>

	</div>
	
</template>

<script>


    import { Toast,Indicator } from 'mint-ui';

    export default {
        data(){
            return {
            }
        },

        // 加载之前
        created:function(){
           this.$root.loader = false;
        },

        // 加载之后
        mounted:function(){
          
           // console.log(this)    
          // console.log(this.$emit('loader'))
        },
       
        //计算缓存
        computed: {
          errors:function(){

            return this.$vuerify.$errors
            
          }
        },

        data:function(){
            return {
              title:'登录',
              tipStatus:false,
              errorTip:'',
              username: '',
              password: ''
            }
        },

        vuerify: {
          username: 'phone',
          password: {
            test: /\w{6,}/,
            message: '密码至少六位字符'
          }
         
        },
       
        // 监听事件
        watch:{
           
        },

        methods: {
            handleSubmit:function(){
             
              if (this.$vuerify.check()) {
                Toast({
                    message: '登录成功',
                    position: 'middle',
                    duration:1000
                })
                
              }else{
                var index = 0;
                for(var i in this.$vuerify.$errors){
                  if (index == 0) {
                    Toast({
                      message: this.$vuerify.$errors[i],
                      position: 'middle',
                      duration:1000
                    })
                   
                  }
                  index ++;
                }
               
              }
            }
        }
    }


    
</script>