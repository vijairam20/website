const Chatkit = require('@pusher/chatkit-server');
import { ChatManager, TokenProvider } from '@pusher/chatkit'
const axios = require('axios');
import store from './store'
const chatkit = new Chatkit.default({
    instanceLocator: "v1:us1:9aeb69cb-d766-4077-a17f-7dd5d2af01a7" ,
    key: "b019110b-7ff4-4f28-9575-ab4b708db984:nJdBVgj2t9gYgwPUVZzaMYyAQrUopmQK+0AVqaPkCRU="
    ,
  })

export const createUser = function(username , name , newemail , newkey){
    chatkit.createUser({
        id: username,
        name: name,
        customData : {
          email: newemail,
          key : newkey
        }
      })
        .then(() => {
          console.log('User created successfully');
        }).catch((err) => {
          console.log(err);
        });
}

export const chatSignin =function(newemail){
  let users = store.state.usersList
    
    for(let user of users){
        console.log(user.custom_data.email)
        if(user.custom_data.email === newemail){
            console.log("current user added")
            store.commit("setCurrentUserDetails",user)
        } 
    }

  const chatManager = new ChatManager({
    instanceLocator: 'v1:us1:9aeb69cb-d766-4077-a17f-7dd5d2af01a7',
    userId: store.state.currentUserDetails.id,
    tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9aeb69cb-d766-4077-a17f-7dd5d2af01a7/token' })
  })

  chatManager.connect()
  .then(currentUser => {
    console.log('Successful connection', currentUser)
    store.commit('setCurrentUser',currentUser)
  })
  .catch(err => {
    console.log('Error on connection', err)
  })
}


const authenticateUser = function(username){
  axios.post('https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9aeb69cb-d766-4077-a17f-7dd5d2af01a7/token',{
    
      grant_type: "client_credentials",
      user_id: username
    
  })
  .then(function(response){
    console.log(response)
  }).catch(function(error){
    console.log(error)
  })
}

export const getAllUsers =function(){
  chatkit.getUsers()
  .then((res) => {
    store.commit('setUsersList',res)

  }).catch((err) => {
    console.log(err);
  });
}

export const addFriend =function(friend){
  store.state.currentUser.createRoom({
    name: `${store.state.currentUserDetails.id+friend}`,
    private: true,
    addUserIds: [friend]
  }).then(room => {
    console.log(`Created room called ${room.name}`)
  })
  .catch(err => {
    console.log(`Error creating room ${err}`)
  })
}