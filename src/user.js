import {users,db,auth} from './firebaseConfig'
import  store from './store'

export const addCurrentUser = function(email){
    users.doc(email).get()
    .then(doc=>{
        if(!doc.exists){
            console.log("Doc does not exist")
        }
        else{
            store.commit('setUser',doc.data())
        }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
}

export const signout = function(){
    auth.signOut().then(function() {
        console.log("Signed out")
    }).catch(function(error) {
        // An error happened.
      });
}

export const getUserByID = function(reqid){
    let users = store.state.usersList
    for(let user of users){
        if(user.custom_data.key == reqid){
            return user.custom_data.email
        } 
    }
    return 'none'
}