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
    <button @click.prevent="signin" :class="styleButton">Login</button>
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
import {addCurrentUser} from '../user.js'
import {chatSignin , getAllUsers ,getFriends} from '../chat.js'
export default {
name:'login',
data:function(){
  return{
  email:'',
  password:'',
  printerr:'',
  flag:false,
  styleButton:{
    button : true,
    'is-link' : true,
    'is-loading' : false 
  }, isFullPage: true,
  }
},
methods:{
  signin:function()
  {
    //Firebase sigin 
    firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then( user => { 
            this.open();
            this.flag = true             
            chatSignin(this.email)
            this.flag = false
            this.$store.commit("setFirebaseUser",user)
             this.$router.replace("dashboard");
          },).catch(
          error => {
            this.printerr=error.message
            console.log(error.message)
            //close();
          })
          
         
   },
open() {
                const loadingComponent = this.$loading.open({
                    container: this.isFullPage ? null : this.$refs.element.$el
                })
                setTimeout(() => loadingComponent.close(), 1000)
            }
        }
,
created: function(){
  getAllUsers()
},
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

