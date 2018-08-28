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
      ,errormsg : '' ,
      currentUser: Object 
  },
  mutations: {
        setUser(state,newuser)
        {
          state.user = newuser 
        }
        ,
        setError(state,errmsg){
          state.errormsg = errmsg 
        },
        setCurrentUser(state,user){
          state.currentUser = user 
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
    },
    getCurrentUser : state =>{
        return state.currentUser
    } 
  }
})
