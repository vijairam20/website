import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentUser :'',
      currentUserDetails:'',
      rooms:'',
      friends:'',
      firebaseUser:'',
      email:''
  },
  mutations: {
        setCurrentUserDetails(state,userDetails)
        {
          state.currentUserDetails = userDetails 
        }
        ,
        setCurrentUser(state,user){
          state.currentUser = user 
        },
        setFriends(state,friends){
          state.friends = friends
        },
        setRooms(state,rooms){
          state.rooms = rooms
        },
        setFirebaseUser(state,user){
          state.firebaseUser = user 
        },
        setEmail(state,email){
          state.email = email 
        }
  },
  actions: {

  },
  getters:{
    
  }
})
