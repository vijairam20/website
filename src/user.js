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

export const getUserByID = function(id){
    let user 
        users.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                if(doc.data().id == id){
                    user = doc.data()
                }
                console.log(doc.id, " => ", doc.data());
            });
        });
        return user
}