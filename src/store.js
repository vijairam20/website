import Vue from 'vue'
import Vuex from 'vuex'
import { Z_STREAM_ERROR } from 'zlib';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      user : {
        name : '' ,
        username :'' ,
        email : '' ,
        password : '' ,
        id : 0 
      }
      ,errormsg : ''
  },
  mutations: {
        setUser(state,newuser)
        {
          state.user = newuser 
        }
        ,
        setError(state,errmsg){
          state.errormsg = errmsg 
        }
  },
  actions: {

  },
  getters:{
    getUser : state =>{
      return state.user
    },
    getErrormsg : state =>{
      return state.errormsg
    } 
  }
})
