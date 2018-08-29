import firebase from 'firebase'
import 'firebase/firestore'
import  store from './store'
const db = firebase.firestore()
const auth = firebase.auth()
const settings = { timestampsInSnapshots: true};
  firebase.firestore().settings(settings);


export const addUser = function(newname,newusername,newemail,newpassword, newid){
    store.commit('setUser',{name:newname,username:newusername,email:newemail,password:newpassword,id:newid})

        db.collection('users').doc(newemail).set({
            name : newname ,
            username : newusername ,
            email : newemail ,
            password : newpassword ,
            id : newid
        })

}

export const addCurrentUser = function(email){
    db.collection('users').doc(email).get()
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
    firebase.auth().signOut().then(function() {
        console.log("Signed out")
    }).catch(function(error) {
        // An error happened.
      });
}
