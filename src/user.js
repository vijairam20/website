import firebase from 'firebase'
import 'firebase/firestore'
import chat from './chat.js'
import  store from './store'
const db = firebase.firestore()
const auth = firebase.auth()
const settings = { timestampsInSnapshots: true};
  firebase.firestore().settings(settings);
//Create User 
const createUser = function(username,name,email,password){
 //   chat.createUser(username,name)
 let error 
    firebase.auth().createUserWithEmailAndPassword(email,password).then(
      function(user){
        console.log('account created')
       // chat.addUser(this.username)
      }).catch(err=>{
          error = err 
      })
      return error
    }
//Sigin with Email and Password
const sigin = function(username , email , password){
    firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .then( user => { this.$router.replace("dashboard"); },
    error => { alert(error.message); }); 
    chat.authenticateUser(this.username)
}

const addUser = function(newname,newusername,newemail,newpassword, newid){
    store.commit('setUser',{name:newname,username:newusername,email:newemail,password:newpassword,id:newid})

        db.collection('users').doc(newemail).set({
            name : newname ,
            username : newusername ,
            email : newemail ,
            password : newpassword ,
            id : newid
        })

}
export default {
sigin , createUser ,addUser
}