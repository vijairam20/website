<template>
    <div id="signup">
        <div id="signhero">

        </div>
    <form>
       

        <b-field label="Username">
            <b-input  v-model.trim="name" value="name" icon-pack="fas"  icon ="user" placeholder="Username"></b-input>
        </b-field>
        
        <b-field label="Name">
            <b-input  v-model.trim="username" value="name"   icon ="face" placeholder="Name"></b-input>
        </b-field>

        <b-field label="Email">
            <b-input v-model.trim ="email" placeholder="Email"
                type="email"
                icon="email">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model.trim="password" type="password"
                placeholder="Password "
                icon-pack="fas"
                icon="lock">
                password-reveal>
            </b-input>
        </b-field>


<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#" @click="confirmCustom">terms and conditions</a>
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
import firebase from "firebase";
import { createUser } from "../chat.js";
import { addUser } from "../user.js";
export default {
  name: "signup",
  data: function() {
    return {
      email: "",
      password: "",
      username: "",
      printerr: "",
      name: "",
      isFullPage: true
    };
  },
  methods: {
    register: function() {
      // firebase create user
    
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(function(user) {
          console.log("account created");
                this.createChatkit()
        }.bind(this))
        .catch(err => {
          this.printerr = err.message;
        });  
    },
    createChatkit:function(){
      createUser(
        this.username,
        this.name,
        this.email,
        Math.ceil(Math.random() * 100) + 1
      );
      this.success();
      this.open();
    },
    confirmCustom() {
      this.$dialog.confirm({
        title: "Privacy Politics",
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce id fermentum quam. Proin sagittis,
                        nibh id hendrerit imperdiet, elit sapien laoreet elit,
                        ac scelerisque diam velit in nisl. Nunc maximus ex non
                        laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,
                        augue purus placerat justo,
                        sit amet porttitor dui metus in nisl.
                        Nulla non leo placerat, porta metus eu, laoreet risus.
                        Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,
                        sit amet sodales quam dui nec odio.
                        Nullam porta mollis est. Quisque aliquet malesuada fringilla.
                        Pellentesque volutpat lacus at ante posuere,
                        non pulvinar ante porta. Proin viverra eu massa nec porta.
                        Aliquam rhoncus velit quis sem hendrerit,
                        ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,
                        eleifend venenatis ligula.
                        Praesent molestie mauris sed elit posuere, non malesuada libero gravida.
                        In hac habitasse platea dictumst.
                        Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas.`,
        cancelText: "Disagree",
        confirmText: "Agree",
        type: "is-success",
        onConfirm: () =>
          this.$toast.open("Check the relevant option to continue.")
      });
    },
    success() {
      this.$toast.open({
        message: "User Created Successfuly",
        type: "is-success"
      });
    },
    open() {
      const loadingComponent = this.$loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el
      });
      setTimeout(() =>{ loadingComponent.close();
                        this.$router.replace("login");
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  float: left;
  padding: 100px;
  //width: 30%;
}
#signup {
  //padding: 100px 500px 100px 500px;
  height: 100vh;
  display: grid;
  grid-template-columns: 60% 40%;
  // width: 30%
}

#signhero {
  background: url("../assets/signup.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
