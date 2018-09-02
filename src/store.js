import Vue from 'vue'
import Vuex from 'vuex'
import { Z_STREAM_ERROR } from 'zlib';
import { getAllUsers } from './user';

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
      ,errormsg : '',
      result : ' '
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
        ,
        setUsersList(state,users){
          state.usersList = users
        }
        ,
        setResult(state,user){
            state.result = user 
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
    ,
    getResult : state=>{
      return state.result
    }
  }
})
