import Vue from 'vue'
import axios from 'axios'
import store from './store'
import router from './router'
import App from './App.vue'
import Mint from 'mint-ui'
import Vuerify from 'vuerify'

import 'mint-ui/lib/style.css'


Vue.use(Mint);
Vue.use(Vuerify, require('./unit/vuerify-rule'));

// 注册组件
Vue.component('m-nav', require('./pages/common/nav.vue'));

// 更改名称
Vue.prototype.$http = axios;

// 更改名称
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
