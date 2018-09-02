import {users,db,auth} from './firebaseConfig'
import  store from './store'


export const addUser = function(newname,newusername,newemail,newpassword, newid){
    store.commit('setUser',{name:newname,username:newusername,email:newemail,password:newpassword,id:newid})

        users.doc(newemail).set({
            name : newname ,
            username : newusername ,
            email : newemail ,
            password : newpassword ,
            id : newid
        })

}

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

export const getAllUsers =function(){
    db.collection("users").get().then(function(querySnapshot) {
        setTimeout()
        store.commit('setUsersList',querySnapshot)
    });
    
}

export const getUserByID = function(reqid){
    let flag = false 
    users.where("id", "==", reqid )
    .get()
    .then(function(querySnapshot) {
        if(querySnapshot.empty){
            store.commit('setResult',"nan")
        }else{
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            store.commit('setResult',doc.data())
            console.log("test") 
        });
    }
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}