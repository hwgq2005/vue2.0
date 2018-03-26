import Vue from 'vue'
import Vuex from 'vuex'
import _ from '../unit/common';

Vue.use(Vuex);

const store = new Vuex.Store({ 
  state:{
    login:_.cookies.get('uwinUser')
  
  },
 
  mutations:{
    loginState (state,n){
      state.login = _.cookies.get('uwinUser'); 
    }
  }
})

export default store


