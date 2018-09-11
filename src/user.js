import {auth} from './firebaseConfig'
import  store from './store'

export const signout = function(){
    auth.signOut().then(function() {
        console.log("Signed out")
    }).catch(function(error) {
      });
}

export const getUserByID = function(reqid){
    let users = store.state.usersList
    for(let user of users){
        if(user.custom_data.key == reqid){
            return [user.custom_data.email,user.id]
        } 
    }
    return 'none'
}