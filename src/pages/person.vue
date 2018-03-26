<style lang="sass" >
   .demo{

      padding: 10px 20px;
      .btn{
        margin:10px 0;
     }
   }
  
   .pop-box{
      width: 100%;
      height: 180px;
      overflow-y: auto;
   }

    

</style>
<template>
    
    <div class="demo">

      <header class="header-box" >
        <div class="header-content">
            <a href="#/" class="header-icon return-btn"><i class="icon icon-left-nav"></i></a>
            <h1>{{title}}</h1>
            <a href="javacript:;" class="header-icon add-task" @click="actionsheet"><i class="icon icon-plus"></i></a>
        </div>
      </header>
       
      <a href="javacript:;" class="btn btn-primary btn-block" @click="openToast">openToast</a>
      <a href="javacript:;" class="btn btn-success btn-block" @click="openMsg">openMsg</a>
      <a href="javacript:;" class="btn btn-danger btn-block" @click="openPopup">openPopup</a>

      <mt-actionsheet
        :actions="actions" 
        v-model="sheetVisible">
      </mt-actionsheet>

      <mt-popup
        v-model="popupVisible"
        position="bottom" class="pop-box">
         <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </mt-popup>

    
	  </div>
	
</template>

<script>

    var Toast = require('mint-ui').Toast,
        MessageBox = require('mint-ui').MessageBox,
        Actionsheet = require('mint-ui').Actionsheet,
        Popup = require('mint-ui').Popup,
        Picker = require('mint-ui').Picker;


    module.exports = {
      
         data:function(){
            return {
               title:'Demo',
               actions:[{
                  name:'相册',
                  method:function(){
                    alert(1)
                  }
               },{
                  name:'从相册中选择',
                  method:function(){
                    alert(2)
                  }
               }],
               sheetVisible:false,
               popupVisible:false,
               slots: [
                  {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot1',
                    textAlign: 'right'
                  }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                  }, {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot3',
                    textAlign: 'left'
                  }
                ]
            }
        },

        // 加载之前
        created:function(){
           

        },

        // 加载之后
        mounted:function(){
          
        },
        
       
       
        // 监听事件
        watch:{
           
        },
        methods: {
            openToast:function(){
              Toast({
                message: '提示',
                position: 'middle',
                duration: 3000
              });
            },
            openMsg:function(){

              // 确认框和提示框 
              MessageBox({
                title: '提示',
                message: '确定执行此操作?',
                showCancelButton: true
              },function(action){

                //时间回调
                if (action == 'cancel') {
                    Toast({
                      message: '取消成功',
                      position: 'middle',
                      duration: 1000
                    });
                }else if (action == 'confirm') {
                    Toast({
                      message: '确认成功',
                      position: 'middle',
                      duration: 1000
                    });
                }
              })
            },
            actionsheet:function(){
                this.sheetVisible = true;
            },
            openPopup:function(){
                // console.log(2)
                this.popupVisible = true;
            },
           
            onValuesChange:function(picker, values) {
              if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
              }
            }
        }
    }


    
</script>