import Vue from 'vue'
import Vuex from 'vuex'

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
      ,usersList : '' ,
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
    getUserList : state =>{
      return state.usersList
    } 
    ,
    getResult : state=>{
      return state.result
    }
  }
})
