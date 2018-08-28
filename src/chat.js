const Chatkit = require('@pusher/chatkit-server');
const axios = require('axios');
import store from './store'
const chatkit = new Chatkit.default({
    instanceLocator: "v1:us1:9aeb69cb-d766-4077-a17f-7dd5d2af01a7" ,
    key: "b019110b-7ff4-4f28-9575-ab4b708db984:nJdBVgj2t9gYgwPUVZzaMYyAQrUopmQK+0AVqaPkCRU="
    ,
  })

const createUser = function(username , name){
    chatkit.createUser({
        id: name,
        name: username,
      })
        .then(() => {
          console.log('User created successfully');
        }).catch((err) => {
          console.log(err);
          store.commit('setError',err.message)
        });
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

const connect =function(name){
  // create chatmanager instance
  const chatManager = new ChatManager({
    instanceLocator: 'v1:us1:9aeb69cb-d766-4077-a17f-7dd5d2af01a7',
    userId: name,
    tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9aeb69cb-d766-4077-a17f-7dd5d2af01a7/token' })
  })

  chatManager.connect()
  .then(currentUser => {
    console.log('Successful connection', currentUser)
    store.commit('setCurrentUser' , currentUser)
  })
  .catch(err => {
    console.log('Error on connection', err)
  })
}
export default  {
    createUser,authenticateUser
}