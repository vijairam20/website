import {auth , users} from './firebaseConfig'
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
        if(user.custom_data.key == reqid && user.custom_data.key != store.state.currentUser.customData.key){
            return [user.custom_data.email,user.id]
        } 
    }
    return 'none'
}

export const addUserToFirestore = function(newemail, newusername, newname, newid){
    users.doc(newusername).set({
        name: newname,
        id :  newid,
        email : newemail,
        username : newusername
    }).then(function() {
        console.log(`${newusername} is added to firestore`);
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    
}