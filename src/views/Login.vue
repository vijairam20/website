<template>
    <div id="login">
        <div id="loginimg"></div>
        <form>
           <div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input v-model= "username" class="input " type="text" placeholder="username" >
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>

  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input v-model= "email" class="input " type="email" placeholder="email" >
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>

<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left has-icons-right">
    <input v-model="password" class="input " type="password" placeholder="password" >
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div> 
           </div>

           <div class="field is-grouped">
  <div class="control">
    <button @click.prevent = "signin" class="button is-link">Submit</button>
  </div>
</div>
<h1>{{printerr}}</h1>
</form>
       
    </div>
</template>

<script>
import firebase from 'firebase'
import chat from '../chat.js'
import user from '../user.js'

export default {
name:'login',
data:function(){
  return{
  email:'',
  password:'',
  username:'',
  printerr:''
  }
},
methods:{
  signin:function()
  {
    chat.authenticateUser(this.username)
    firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then( user => { this.$router.replace("dashboard"); },).catch(
          error => {this.printerr=error.message})

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
}

#loginimg{
    background: url('../assets/loginimage.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

