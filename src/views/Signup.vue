<template>
    <div id="signup">
        <div id="signhero">

        </div>
    <form>
        <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input  v-model.trim="name" class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input v-model.trim ="email" class="input" type="email" placeholder="Email input" >
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input v-model.trim="username" class="input " type="text" placeholder="username" >
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
    <input v-model.trim="password" class="input " type="password" placeholder="password" >
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

</div>
</div>
<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button @click.prevent="register" class="button is-link">Submit</button>
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
import {createUser}from '../chat.js'
import {addUser} from '../user.js'
export default {
    name:'signup',
    data:function(){
      return{
        email:'',
        password:'',
        username:'',
        printerr:'',
        name:''
      }
    },
    methods:{
      register: function(){
       // firebase create user
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
          function(user){
            console.log('account created')
          }).catch(err=>{
            this.printerr=err.message
          })
         
        //add to firestore and vuex
        createUser(this.username,this.name,this.email,Math.ceil(Math.random()*100)+1)
        this.success()
        this.$router.replace("login"); 
    },
  success() {
                this.$toast.open({
                    message: 'User Created Successfuly' ,
                    type: 'is-success'
                })
            },
}
}
</script>

<style lang="scss" scoped>
form{
    float: left;
    padding: 100px;
    //width: 30%;
}
#signup{
    //padding: 100px 500px 100px 500px;
    height: 100vh;
    display: grid;
    grid-template-columns: 60% 40%;
   // width: 30%
}

#signhero{
    background: url('../assets/signup.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
