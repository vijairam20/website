<template>
    <div id="login">
        <div id="loginimg"></div>
        <form>
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input v-model="email" class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input v-model="password" class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field is-grouped">
  <div class="control">
    <button @click.prevent="signin" class="button is-link">Login</button>
  </div>
  <div class="control">
    <router-link tag=button class = "button is-text" to="/">Cancel</router-link>
  </div>
</div>
<h1>{{printerr}}</h1>
</form>
       
    </div>
</template>

<script>
import firebase from 'firebase'
import {addCurrentUser,getAllUsers} from '../user.js'
export default {
name:'login',
data:function(){
  return{
  email:'',
  password:'',
  printerr:''
  }
},
methods:{
  signin:function()
  {
    //Firebase sigin 
    firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then( user => { 
            this.$router.replace("dashboard"); 
                //store current user in vuex store
            
            addCurrentUser(this.email)

            getAllUsers()
          },).catch(
          error => {
            this.printerr=error.message
            console.log(err.message)
          })        
   },

//   siginGoogle:function(){
// var provider = new firebase.auth.GoogleAuthProvider();
//       provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//       firebase.auth().signInWithPopup(provider).then(function(result) {
//   var token = result.credential.accessToken;
//   var user = result.user;
//   console.log(user)
//   this.$router.replace("dashboard")
// }).catch(function(error) {
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   var email = error.email;
//   var credential = error.credential;
// });
//   }
}
}
</script>

<style lang="scss" scoped>
#login{
    display: grid;
    grid-template-columns: 60% 40%;
    height: 100vh;
}

form{
    padding: 100px;
h1{
  color: red;
  
}
}

#loginimg{
    background: url('../assets/loginimage.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

