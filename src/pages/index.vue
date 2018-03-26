<style lang="sass" >
    @import '../assets/css/hbook-button.css';
    @import '../assets/css/hbook-table.css';
    @import '../assets/css/form.css';
    .app-index .media-tit{
        color:#666;
    }
    .app-index .table-view .table-view-cell a{
        display: block;
    }
    .sub-slide-enter-active, .sub-slide-leave-active {
      -webkit-transition: all .350s cubic-bezier(.165,.84,.44,1);
      transition: all .350s cubic-bezier(.165,.84,.44,1);
    }
    .sub-slide-enter, .sub-slide-leave-active{
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /*opacity: 0;*/
    }

</style>


<template>
    
    <div class="app-index">
       
        <header class="header-box " >
            <div class="header-content" v-if="title == '首页'">
                <div class="header-tab">
                    <a href="#/" class="active">收到</a><a href="#/">发出</a>
                </div>
                <a href="javascript:;" @click="edit()" class="header-icon add-task"><i class="icon icon-plus"></i></a>
            </div>
        </header>
         
        <div class="search-box">
            <input type="text" placeholder="搜索">
        </div>
       
        <ul class="table-view table-view-one">
            <li class="table-view-cell table-view-hover" v-for="data in listData">
                <router-link  :to="{name: 'noteDetail'}" >
                    <div class="media-object pull-left" :class="{'edit-task': isEdit}">
                       <input type="radio" name="optionsRadios" >
                    </div>
                    
                    <div class="media-body">
                      <div class="media-tit">
                           {{data.title}}
                      </div>
                      <div class="media-sum"> {{data.desc}}</div>
                    </div>
                </router-link>
            </li>
           
        </ul>
        
        <transition name="sub-slide" mode="out-in">
            <router-view  ></router-view>
        </transition>
    </div>
    
</template>


<script>

    module.exports = {
        
        data:function(){
            return {
                title:'首页',
                isEdit:false,
                listData:[]
            }
        },
        // 加载之前
        created:function(){
            this.init();
            
        },
        mounted:function(){
          
        },
        methods: {
            init:function(){
                var vm = this;
                vm.$http.get('/src/unit/data.json').then(function (response) {

                    vm.listData = response.data;
                 
                },function(error){
                    // 错误回调
                    console.log(error);
                })
            },
            edit : function(){
                this.isEdit = !this.isEdit;
            }
        }
    }



</script>